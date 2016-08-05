@page quickstart Quick Start
@parent howTo 0
@hide sidebar
@outline 2 ul


This is a quick run through setting DocumentCSS and generating a simple page. For in-depth instructions, check out the [Setup](/docs/setup.html) section.

## Install

Install [Node.js](https://nodejs.org/) on your computer and create a `package.json` file in your project's root directory with something like:
```
{
  "name": "style-guide",
  "version": "0.0.1",
  "description": "My style guide",
  "author": "",
  "license": ""
}

```

From the console or terminal, go to your project folder and use `npm` to install DocumentJS:

```
> cd path/to/myproject
> npm install documentjs
```

## File Structure

Create the files and folders that DocumentCSS will use to generate the docs. 
* Create a folder called `styles` which will hold all of your CSS or Less files. 
* Create a markdown file to define as the primary parent, like `styles.md`.


Your file structure should look like this:

```
project
├──node_modules
├──package.json
├──styles
   └──styles.md
```

Inside the `styles.md` add:
```
@@page styles Styles

This is my style guide
```

## Configure

To generate a Living Style Guide, create a file called `documentjs.json` in the top level of your project.

Your file structure should now look like this:

```
project
├──documentjs.json
├──node_modules
├──package.json
├──styles
   └──styles.md
```

Inside of `documentjs.json` add:

```
{
    "sites": {
        "styles": {
            "glob": "styles/**/*.{css,less,scss,md}",
            "dest": "styleguide",
            "parent": "styles" 
        }
    }
}
```

* **glob** — tells DocumentCSS to look in the `styles` folder and read all files with a `css`, `less`, `scss` or `md` extension. *You can remove either less and/or scss depending on what you're writing styles with.*
* **dest** — tells DocumentCSS to automatically create a `styleguide` folder to host the generated HTML pages.
* **parent** — tells DocumentCSS to use the parent declaration `styles` from `styles.md` as the main landing page.


## Run

To generate the Style Guide use open up the terminal and inside of your project's directory run:

```
> ./node_modules/.bin/documentjs
``` 

To view the generated site, using terminal navigate to the styleguide directory and use python to start a server:

```
> cd styleguide
> python -m SimpleHTTPServer
```

*This only applies to Mac or a Linux machines*

Open up a browser and navigate to **http://localhost:8000** (if the number above is not 8000, use whatever number you see in your terminal instead). You should see the Living Style Guide with the documentation you just created!

Your generated Living Style Guide should look like this:

<img src="static/img/style-guide-home.png"/>

### Ignoring Generated Files

Because DocumentJS generates a whole directory based on source files, you'll probably want to mark those files to be ignored by git (or whichever code revision manager you're using).

If you're using git, create a file named `.gitignore` at the root of your project (if it doesn't already exist.) Then add the following:

```
 # DocumentJS generated files
 styleguide
```

This will mark the whole folder as something to be ignored and your team can avoid merge conflicts on generated files.


----
Continue to the next guide: <br >
[&#62; Setting Up DocumentCSS (In-depth Guide)](/docs/setup.html).
