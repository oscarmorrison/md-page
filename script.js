console.log('hello world')
document.addEventListener("DOMContentLoaded", function() {
    console.log('ready')
    document.body.style.padding = 20
    document.body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'
    var markdown = document.body.innerHTML
    var converter = new showdown.Converter()
    var html = converter.makeHtml(markdown);
    console.log(html)
    document.body.innerHTML = html
    setTimeout(function() {
        var hash = window.location.hash
        window.location.hash = ''
        window.location.hash = hash
    }, 100)
})
