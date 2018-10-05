document.addEventListener("DOMContentLoaded", function() {
    document.body.style.padding = 20
    document.body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'
    var markdown = document.body.childElementCount == 1 ? document.body.lastElementChild.innerHTML : document.body.innerHTML;
    var converter = new showdown.Converter()
    var html = converter.makeHtml(markdown);
    document.body.innerHTML = html
    setTimeout(function() {
        var hash = window.location.hash
        window.location.hash = ''
        window.location.hash = hash
    }, 100)
})
