## Basic Style

This adds some inline style to the header and applies basic style to the `<body>` and each of the markdown features. Mainly just changes the font family, and the minimal amount of styles for each of the markdown features.

#### CSS properties written for the document's body
---
```
body { 
   padding: 20; 
   font-family:  "Helvetica Neue",Helvetica, Arial, sans-serif;
} 
```

#### CSS properties written for the different markdown features
---
```
blockquote { 
 padding: 0 1em; 
 color: #6a737d; 
 border-left: 0.25em solid #dfe2e5;
} 
 
code {
 padding: 0.2em 0.4em; 
 background: rgba(27,31,35,0.05); 
 border-radius: 3px;
}
 
pre > code { background: none }
 
pre { 
 padding: 16px; 
 overflow: auto; 
 line-height: 1.45; 
 background-color: #f6f8fa; 
 border-radius: 3px; 
} 
 
table { border-collapse: collapse; }
 
td, th 
{  
 border: 1px solid #ddd; 
 padding: 10px 13px; 
}
```