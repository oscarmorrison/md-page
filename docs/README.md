# Why?

I wanted to create a webpage from Markdown with minimal effort, just through a script tag at the top of a page, and write pure Markdown & it should work right out of the box. There are plenty of alternatives, and for most situations, using something like Jekyll or server-side Markdown will give a more consistent result, but setting this up takes some time/skill.

# Use cases
- For people who are not "tech savy" but can write markdown. No learning hurdle, add a one line at top of page.
- If you don't have server access
- Minimal effort to get decent looking text on the web
- Creating semi secure (hidden long by url) pages, such as http://oscarmorrison.com/md-page/oimasdoijasdmadeupurl-0123123#stuff-to-show-you

# Workflow
1. Create a github repo
2. add a gh-pages branch
3. drag and drop pages created using md-pages

# How?
Just create a blank file `whatever.html` and add the script tag (currently version `<script src="https://cdn.rawgit.com/oscarmorrison/md-page/c72eb9e9/md-page.js"></script><noscript>
`) to the top of the page, then write markdown

# What markdown?
It uses GitHub flavour markdown https://guides.github.com/features/mastering-markdown/

# How does that work?
It's pretty basic, all the custom code lives here https://github.com/oscarmorrison/md-page/blob/master/script.js, but mainly it just adds some style, then uses the incredible https://github.com/showdownjs/showdown to convert text from Markdown to HTML and replaces that in the dom  (that is present in the MD-page.js file)


# Does it do anything else?
Yep. I have added a couple of extra convenience features (mainly for my use case)

## Default title
You can manually set a title using the <title> tag. Otherwise, it will use the first dom element (e.g., a header if you start with a header).

## Open external urls externally
It modifies any link and checks it against the current host, and if it's a different link or not relative, it will add a `target="_blank"` to the link. All other links with the same hostname, or starting with `/`, `./`, `#` will not open in a new window.

## Add underline to markdown
Not sure why GitHub doesn't have this, but it's nice `___underline___`

## Styles
This adds some basic styles to the header. Mainly it just changes the font family, and the minimal amount of styles for each of the markdown features

## Deeplink to ids
Added a bit of code to be able to deep link to in page headers e.g., http://oscarmorrison.com/md-page/#tables

# Other resources

## Converter library
https://github.com/showdownjs/showdown

## List of supported emojis
https://github.com/showdownjs/showdown/wiki/Emojis


# More docs
- [Basic style](https://github.com/oscarmorrison/md-page/blob/master/docs/basic_style.md)
- [Custom style](https://github.com/oscarmorrison/md-page/blob/master/docs/custom_style.md)
- [Custom title](https://github.com/oscarmorrison/md-page/blob/master/docs/custom_title.md)
