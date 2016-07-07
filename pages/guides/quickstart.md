@page quickstart Quick Start
@parent howTo 0
@hide sidebar
@outline 2 ul


_This is the quick getting started guide. For in depth instructions, check out the [Standalone Live Style Guide](/docs/standalone-lsg.html)._

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
> npm install documentjs --save-dev
```

*The --sav-dev flag saves DocumentJS in your `package.json` so other people who are working on your project can also use DocumentJS.*

## File Structure

Create the files and folders that DocumentCSS will use to generate the docs. 
* Create a folder called `styles` which will hold all of your CSS or Less files. 
* Create a markdown file to define as the primary parent, like `styles.md`, inside the `styles` folder

Inside the `styles.md` add:
```
@@page styles Styles

This is my style guide
```

## Configure

To generate a Live Style Guide, create a file called `documentjs.json` in the top level of your project like this:
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

* "glob" tells DocumentCSS to look in the `styles` folder and read all files with a `css`, `less`, `scss` or `md` extension.
  * *You can remove either less and/or scss depending on what you're writing styles with.*
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

## Document

To document your CSS use the following inside your CSS, SCSS, LESS, or Markdown files:

<table>
  <tr>
      <th>Tag</th>
      <th>Use To</th>
  </tr>
  <tr>
      <td>@page</td>
      <td>Declare a markdown file as a page in your site.</td>
  </tr>
  <tr>
      <td>@parent</td>
      <td>Specify the parent of a page or stylesheet.</td>
  </tr>
  <tr>
      <td>@stylesheet</td>
      <td>Declare a stylesheet file as page in your site.</td>
  </tr>
  <tr>
      <td>@style</td>
      <td>Declare a comment as a style inside of a stylesheet.</td>
  </tr>
  <tr>
      <td>@description</td>
      <td>Declare a comment as description of a style.</td>
  </tr>
  <tr>
      <td>@demo</td>
      <td>Display a live code demonstration that also renders a tab with the html used.</td>
  </tr>
  <tr>
      <td>@iframe</td>
      <td>Display a live code demonstration.</td>
  </tr>
</table>

Learn more about using [tags](using.html#section=section_Tags/).

Create a `buttons.css` file inside the `styles` folder and add this:
```
/**
  * @@stylesheet buttons.css Buttons
  * @@parent styles
  *
  * @@description
  * This buttons page is being pulled from documentation in the`buttons.css` file.
  *
  * @@demo demos/buttons.html
**/
   
  button {
     background-color: skyblue;
     border: 1px solid skyblue;
     color: white;
     font-size: 18px;
     padding: 10px 20px;
  }
  button:hover {
    background-color: deepskyblue;
    border-color: deepskyblue;
    cursor: pointer;
  }
```
Next, create a `demos` folder inside the 'styles' folder, and a file called `buttons.html`

Inside `buttons.html` add a link to the css file, and the HTML markup needed to demonstrate the styles for `buttons.css`. 

*If you've got a master css file (especially if you're using a css pre-processor), you should link to that master file in the demos for your app.*

For example: 
```
<html>
  <head>
    <link rel="stylesheet" href="/styles/buttons.css" />
  </head>
  <body>
    <button>Example Button 1</button>
  <body>
<html>
```

Your project's folder structure should now look like this:
```
project/
    package.json
    styles/
        buttons.css
        styles.md
    demos/
      buttons.html
    documentjs.json
```

## Run

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
[&#62; Setting Up DocumentCSS (In-dept Guide)](/docs/setup.html).
