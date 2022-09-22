## TPTElements v. 1.1

See it live on GitHub Pages: https://boxmein.github.io/TPTElements/

## 2022 update

[Archived]: https://web.archive.org/web/20201023090302/https://www.boxmein.net/tpt/tptelements/reference/lua-reference.html#tree

I have not updated this reference since 2013, but it may be of use to someone, so:

* Contribute to this reference by:
  * Updating the content 
  * Modernizing the Javascript 
  * Hosting it yourself and letting @boxmein know on #powder:libera.chat IRC :) 

---

## Project setup

* Simple vanilla HTML + LESS site
* Vite based tooling (that does not handle the JS -- the JS is simply referenced as-is)
* Docker based server image

### Usage 

* Use the GitHub Pages live environment: https://boxmein.github.io/TPTElements/

### Development

Prerequisites: Node.js at least version 16, Yarn package manager at least version 1.22.0, command line access, Git CLI

* Clone the repo
* `yarn`
* `yarn start`

Modify the pages or LESS files and vite should handle it :) 

## Original intro from 2013 

TPTElements is a simple HTML page which allows you to create TPT elements with relative ease.
Created using Javascript, HTML and CSS. Requires the contentEditable property to work (See [here](http://caniuse.com/#feat=contenteditable) to check out if you can use contentEditable on your browser). Now consists of quite a few files! :O

I have now automated a lot of its creation. Run `make` to minify the Javascript / CSS source code.  
The CSS is now based on [LESS](http://lesscss.org). 
