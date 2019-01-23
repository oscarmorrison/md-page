## Custom Style

You may want to include your own style to the web page by linking to an external stylesheet. 

You can create a `.css` file and then include the layout of your preference. To change the style of the web page add a `<link>` tag to the top of the page to link the external resource.

##### Using custom CSS
---
```
<link href="custom.css" rel="stylesheet"></link>
<script src="https://rawcdn.githack.com/oscarmorrison/md-page/master/md-page.js"></script><noscript>

# Header
Welcome to md-page, the easiest way to make a webpage from just markdown...
 
## Lists
### Unordered
* item one
* item two
 
### Ordered
1. Item 1
1. Item 2
1. Item 3
 
# links
 
[md-page Github repo](https://github.com/oscarmorrison/md-page) *give us a :star:*
 
[demo page](https://oscarmorrison.com/md-page/)
 
Thanks for stopping by!
```
##### Example of custom.css
---

```
 body{
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
 }

 h1, h2{
	font-weight: 300;
 }
 a,a:visited,a:hover,a:active{
    position:relative;
    transition:0.5s color ease;
    text-decoration:none;
    color:#64B5F6;
  }
  a:hover{
    color:#607D8B;
  }
  a.before:before,a.after:after{
    content: "";
    transition:0.5s all ease;
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
    position:absolute;
  }
  a.before:before{
    top:-0.25em;
  }
  a.after:after{
    bottom:-0.25em;
  }
  a.before:before,a.after:after{
    height:5px;
    height:0.35rem;
    width:0;
    background:#d73444;
  }
  a.first:after{
    left:0;
  }
  a.before:hover:before,a.after:hover:after{
    width:100%;
  }
  ol {
    counter-reset: list;
    list-style: none;
    padding-left: 15px;
  }
  ol li {
    counter-increment: list;
    margin-bottom: 10px;
  }
  ol li::before {
    content: counter(list);
    background: #64B5F6;
    font-family: Arial, sans-serif;
    color: #fff;
    font-size: 13px;
    text-align: center;
    border-radius: 50%;
    width: 2.2em;
    height: 2.2em;
    line-height: 2.3em;
    display: inline-block;
    margin-right: 1em;
  }
  ul {
    list-style-type: none;
    padding-left: 15px;
  }
  ul li {
    display: block;
    width: 200px;
    border-bottom: 1px solid #64B5F6;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 10px 0px 10px 10px;
  }
```
