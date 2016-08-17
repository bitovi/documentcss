@page setup Setup
@parent howTo 1
@hide sidebar
@outline 2 ul


This is an in-depth guide to setting up DocumentCSS with all of the bells and whistles. For this we will be installing [DocumentsJS](http://documentjs.com/) which powers DocumentCSS.

## Installation

First install [Node.js](http://nodejs.org/) on your computer. Then, open the console and navigate to your project. Once in your project, use [npm](https://www.npmjs.org/) to install DocumentJS:

    > cd path/to/myproject
    > npm install documentjs --save-dev

*The `--save-dev` flag saves DocumentJS in your `package.json` so other people who are working on your project can also use DocumentJS.*

## Configuration

To generate a Living Style Guide, **you only need to configure two things**.

1. What stylesheet files are being documented
2. Where the documentation should be generated

Create a `documentjs.json` file in the top level of your project like this:

```json
{
    "sites": {
        "styles": {
            "glob": "styles/**/*.{css,less,md}",
            "dest": "styleguide"
        }
    }
}
```
Now let's break down this configuration:

#### Site Name

From `documentjs.json`:
```json
"styles" : {
```

This name can be anything unless you're configuring more than one site, which isn't covered in this guide.


#### Source Files

This is how DocumentJS knows where to look for comments and markdown files that it will used to generate the site. `glob` specifies a pattern for this.

From `documentjs.json`:
```json
"glob": "styles/**/*.{css,less,md}",
```

This string uses a few different patterns to make sure everything important is included:

<table>
<thead>
<tr>
  <th>Context</th>
  <th>Pattern</th>
  <th>Meaning</th>
</tr>
</thead>
<tbody><tr>
  <td><code>styles/**/</code></td>
  <td><code>/**/</code></td>
  <td>All folders and subfolders of <code>styles</code> should be included</td>
</tr>
<tr>
  <td><code>*.{...}</code></td>
  <td><code>*</code></td>
  <td>All filenames are included</td>
</tr>
<tr>
  <td><code>*.{...}</code></td>
  <td><code>{css,less,md}</code></td>
  <td>Since {} takes a list, this is shorthand to match all of  <code>*.css</code>, <code>*.less</code>, <code>*.md</code></td>
</tr>
</tbody></table>


Altogether, `styles/**/*.{css,less,md}` means "look in all folders and subfolders of `styles` for any css, less, or markdown file". If you have additional directories or want to use different file types, this can be adapted accordingly:

```json
"glob": "{styles,static/themes/css}/**/*.{css,scss,md}"
```

#### Destination Directory

From `documentjs.json`:
```json
"dest": "styleguide"
```

This is just the name of the folder where your site will be generated. Where you want this to be located will depend on the structure of your project.

## File Organization

You'll write most of your documentation inline in your `css` or `less` files. But you should add one file, `styleguide.md`, to your `styles` folder to write your landing page (and set up navigation).

For demos and examples, you may want to create a separate folder to make it easy to link to them later. Make sure not to put anything into the `styleguide` directory as it is automatically generated.

Your project's directory should will look something like this:

```
project
├──demos
   └──base
      └──forms
          └──demo.html
      └──buttons
          └──demo.html
      └──tables
          └──demo.html
      └──variables
          └──color-palette/
                demo.html
├──styleguide
   <!-- Automatically generated directory -->
├──styles
   └──base.less
   └──buttons.less
   └──variables.less
   └──styleguide.md
```

----
Continue to the next guide: <br >
[&#62; Using DocumentCSS](/docs/use.html).