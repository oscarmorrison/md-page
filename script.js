document.addEventListener("DOMContentLoaded", function() {
    document.body.style.padding = 20
    document.body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'
    //handle github wrapping in pre
    var markdown = document.body.childElementCount == 1 ? document.body.firstElementChild.innerHTML : document.body.innerHTML;
    var converter = new showdown.Converter()
    var html = converter.makeHtml(markdown);
    document.body.innerHTML = html
    document.title = document.title || document.body.firstElementChild.innerText.trim()
    setTimeout(function() {
        var hash = window.location.hash
        window.location.hash = ''
        window.location.hash = hash
    }, 100)
})
