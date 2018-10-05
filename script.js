document.addEventListener("DOMContentLoaded", function() {
    document.body.style.padding = 20
    document.body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'
    var markdown = document.body.innerHTML
    var html = marked(markdown);
    document.body.innerHTML = html
    setTimeout(function() {
        var hash = window.location.hash
        window.location.hash = ''
        window.location.hash = hash
    }, 100)
})
