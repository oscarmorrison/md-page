# Why?

I wanted to create a webpage from markdown with minimal effort, just through a script tag at the top of a page, and write pure markdown and it should work right out of the box. There are plenty of alternatives, and for most situations using something like Jekyll or server-side markdown will give a more consistent result, but setting this up takes some time/skill.

# Use cases
- For people who are not "tech-savvy" but can write markdown. No learning hurdle, add a one-line at top of the page.
- If you don't have server access
- Minimal effort to get a decent looking text on the web
- Creating semi-secure (hidden long by URL) pages, such as http://oscarmorrison.com/md-page/oimasdoijasdmadeupurl-0123123#stuff-to-show-you

# Workflow
1. Create a Github repo
2. add a gh-pages branch
3. drag and drop pages created using md-pages

	@@ -18,11 +18,11 @@ Just create a blank file `whatever.html` and add the script tag (currently versi
`) to the top of the page, then write markdown

# What markdown?
It uses GitHub flavored markdown https://guides.github.com/features/mastering-markdown/

# How does that work?
It's pretty basic, all the custom code lives here https://github.com/oscarmorrison/md-page/blob/master/script.js
but mainly it just adds some style, then uses the amazing https://github.com/showdownjs/showdown to convert text from markdown to Html and replaces that in the dom (this is included in the md-page.js file)


# Does it do anything else?
	@@ -31,17 +31,17 @@ Yep. I have added a couple of extra convenience features (mainly for my own use
## Default title
You can manually set a title using the <title> tag, if you don't it will use the first dom element (e.g a header if you start with a header)

## Open external URLs externally
It modifies any link, and checks the link again to the current host, if it's a different link, or not relative it will add a `target="_blank"` to the link. All other links with the same hostname, or starting with `/`, `./`, `#` will not open in a new window.

## Add underline to markdown
Not sure why GitHub doesn't have this, but its nice `___underline___`

## Styles
This adds some basic styles to the header. Mainly just changes the font family and the minimal amount of styles for each of the markdown features

## Deeplink to ids
Added a bit of code to be able to deep-link to in page headers e.g http://oscarmorrison.com/md-page/#tables

# Other resources
