// Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes 
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';
    
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        } 
        if (start === undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}

// Polyfill from https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

document.addEventListener("DOMContentLoaded", function() {

    // Styles
    var sheet = document.createElement('style')
    var styles = 'body { padding: 20px; font-family:  "Helvetica Neue", Helvetica, Arial, sans-serif;} '
    styles += 'blockquote { padding: 0 1em; color: #6a737d; border-left: 0.25em solid #dfe2e5;} '
    styles += 'code { padding: 0.2em 0.4em; background: rgba(27,31,35,0.05); border-radius: 3px;} '
    styles += 'pre > code { background: none } '
    styles += 'pre { padding: 16px; overflow: auto; line-height: 1.45; background-color: #f6f8fa; border-radius: 3px; } '
    styles += 'table { border-collapse: collapse; } '
    styles += 'td, th {  border: 1px solid #ddd; padding: 10px 13px; } '
    sheet.innerHTML = styles
    document.head.prepend(sheet)

    // Viewport
    var viewportMeta = document.createElement('meta')
    viewportMeta.setAttribute('name', 'viewport')
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no')
    document.head.appendChild(viewportMeta)

    var meta = document.createElement('meta')
    meta.setAttribute('charset', 'UTF-8')
    document.head.appendChild(meta)

    /* Workaround for IE11 to preserve new line */
    var isIE = window.navigator.userAgent.indexOf("MSIE ")
    if (isIE) {
        // https://stackoverflow.com/questions/656605/jquery-text-call-preserves-newlines-in-firefox-but-not-in-ie
        var cloned = document.querySelector('noscript')
        var pre = document.createElement("pre") // IE11 will preserve formatting from pre or textarea
        pre.appendChild(cloned)
        var markdown = pre.textContent ? pre.textContent: pre.innerText;
        delete cloned
        delete pre
    } else {
        var markdown = document.querySelector('noscript').innerText
    }

    var converter = new showdown.Converter({
        emoji: true,
        underline: true,
    })
    converter.setFlavor('github')

    converter.addExtension(function () {
        return [{
            type: 'output',
            regex: /<a\shref[^>]+>/g,
            replace : function (text) {
                var url = text.match(/"(.*?)"/)[1]
                if(url.includes(window.location.hostname) || url[0] == '/' || url[0] == '.' || url[0] == '#'){
                    return text
                }
                return '<a href="' + url + '" target="_blank">'
            }
        }]
    }, 'externalLink')


    var html = converter.makeHtml(markdown)
    document.body.innerHTML = html
    document.title = document.title || document.body.firstElementChild.innerText.trim()

    // Handle hash linking
    setTimeout(function() {
        var hash = window.location.hash
        window.location.hash = ''
        window.location.hash = hash
    }, 100)
})
