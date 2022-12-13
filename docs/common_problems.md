# Common problems

## Some characters/accents aren't rendered correctly
The browser needs to decide which encoding to use. If it cannot detect it, the default will be used (often not UTF8!) If some of your characters aren't rendered correctly, probably your server isn't sending the proper charset encoding (see https://github.com/oscarmorrison/md-page/issues/57). These are some possible fixes:
- First, check your web server and try to set the charset encoding to UTF-8. If you do not have access to your web server, then try one of the following
- Try saving your file not as UTF-8 but as UTF-8 with BOM
- Try inserting your script plus markdown content within the body of an HTML page that specifies the HTML charset meta tag. Here's an example

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<!-- my-page.html --> 
<script src="https://rawcdn.githack.com/oscarmorrison/md-page/master/md-page.js"></script><noscript>

# Header
Welcome to my simplest site

- An
- awesome
- list
</noscript>
</body>
</html>
``
