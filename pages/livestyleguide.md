<style>
  section.contents {
    display: none;
  }
</style>

@page lsg.guides Guides

For in depth instructions, check out the [Standalone Live Style Guide](/docs/lsg-quickstart.html).

## Get Started

### Install

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
> npm install documentjs --save-dev
```

*The --sav-dev flag saves DocumentJS in your `package.json` so other people who are working on your project can also use DocumentJS.*

### File Structure

Create the files and folders that DocumentCSS will use to generate the docs. 
* Create a folder called `styles` which will hold all of your CSS or Less files. 
* Create a markdown file to define as the primary parent, like `styles.md`, inside the `styles` folder

Inside the `styles.md` add:
```
@page styles Styles

This is my style guide
```

### Configure

To generate a Live Style Guide, create a file called `documentjs.json` in the top level of your project like this:
```
{
    "sites": {
        "styles": {
            "glob": "styles/**/*.{css,less,md}",
            "dest": "styleguide",
            "parent": "styles" 
        }
    }
}
```

* "glob" tells DocumentCSS to look in the `styles` folder and read all files with a `css`, `less`, or `md` extension.
* "dest" tells DocumentCSS to automatically create a `styleguide` folder to host the generated HTML pages.
* "parent" tells DocumentCSS to use the parent declaration `styles` from `styles.md` as the main landing page.

Your project's folder structure should look like this:
```
project/
    package.json
    styles/
        styles.md
    documentjs.json
```

### Document

To document your CSS use the following [tags](http://documentjs.com/docs/documentjs.tags.html) insides your CSS, Less, or Markdown files:

- `@stylesheet` to create a page for each stylesheet documented
- `@styles` to document individual styles
- `@parent` to organize how your styles get rendered on the Style Guide
- `@iframe` to display an html live demonstration 
- `@demo` to display an html live demonstration that also renders a tab with the html used on the demo

Create a `buttons.less` file inside the `styles` folder and add this:
```
/**
  * @stylesheet buttons.less Buttons
  * @parent styles
  *
  * @description
  * All defined button styles and states belong here, including any "helper class" button style options, like `default`, `primary` etc.*
  * The same button styles have been applied to a button class, for use on other html elements emulating a button.
  *
  * @demo demos/buttons.html
  **/
  
button, .button {
    background-color: @colorLinks;
    border: 1px solid darken(@colorLinks, 10%);
    color: @clear;
    .text-shadow;
        border-radius: 2px;
        padding: 5px 15px;
        position: relative;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
    &:hover, &.active {
        background-color: darken(@colorLinks, 10%);
    }
}
```
Next, create a `demos` folder inside the `styles` folder and a file called `buttons.html`

Inside `buttons.html` add the HTML markup needed to demonstrate the styles for `buttons.less`

For example: 
```
  <p>
    <button>Example Button 1</button>
  </p>
  <p>
    <a href="#" class="button">Example Button 2</a>
  </p>
```

Your project's folder structure should now look like this:
```
project/
    package.json
    styles/
        styles.md
        demos/buttons.html
    documentjs.json
```

### Run

To generate the Style Guide using a simple command like `documentjs`, you'll want to install DocumentJS globally using:

```
> npm install -g documentjs
```

This might require admin privileges to install, so use sudo and enter your password when prompted:
```
> sudo npm install -g documentjs
```

Then from your project directory run:

```
> documentjs -w
```

*-w is a flag that tell DocumentJS to watch changes and regenerate the style guide every time you make updates.*

To see the generated site, using terminal navigate to the styleguide directory and use python to start a server*:

```
> cd styleguide
> python -m SimpleHTTPServer
```

*This only applies to Mac or a Linux machines*

Open up a browser and navigate to **http://localhost:8000** (if the number above is not 8000, use whatever number you see in your terminal instead). You should see the Live Style Guide with the documentation you just created!

For in depth instructions, check out the [Standalone Live Style Guide](/docs/lsg-quickstart.html).