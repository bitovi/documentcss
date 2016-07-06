@page standalone-lsg Standalone Live Style Guide
@parent howTo
@hide sidebar
@outline 2 ul

This guide will:

* Give a [designer-friendly explanation](/docs/lsg-quickstart-designers.html) of what DocumentJS does
* Help you [install DocumentJS](/docs/lsg-quickstart-installation.html)
* Help you configure a Live Style Guide site
* Explain how to use [tags](http://documentjs.com/docs/documentjs.tags.html) to write your Live Style Guide

You should start elsewhere if:

* You [only care about JavaScript documentation](http://documentjs.com/docs/index.html)
* You already use DocumentJS and want to [add a Live Style Guide](/docs/lsg-adding.html)
* You want to set up DocumentJS for [API documentation](http://documentjs.com/docs/index.html), then [add a Live Style Guide](/docs/lsg-adding.html)
* You [are totally lost](https://www.youtube.com/watch?v=I0Pow7Gi7Xw)


## Setup

Setup consists of two main steps: installation, and configuration (including file organization).

### Installation

Install [Node.js](http://nodejs.org/) on your 
computer. Open a console to your project. Use [npm](https://www.npmjs.org/) to 
install DocumentJS:

    > cd path/to/myproject
    > npm install documentjs --save-dev

The `--sav-dev` flag saves DocumentJS in your `package.json` so other people who are working on your project can also use DocumentJS.

### Configuration

To generate a Live Style Guide, **you only need to configure two things**.

1. What stylesheet files are being documented
2. Where the Live Style Guide should be generated

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

#### Site Name

From `documentjs.json`:
```json
        "styles" : {
```

This name doesn't really matter unless you're configuring more than one site, which isn't covered in this guide.


#### Source Files

This is how DocumentJS knows where to look for comments and markdown files that it will use to generate the site. `glob` specifies a pattern for this.

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


Altogether, `styles/**/*.{css,less,md}` means "look in all folders and subfolders of `styles` for any css, less, or markdown file". If you have additional directories or want to use different file types, this can be adapted accordingly like so:

```json
            "glob": "{styles,static/themes/css}/**/*.{css,scss,md}"
```

#### Destination Directory

From `documentjs.json`:
```json
            "dest": "styleguide"
```

This is just the name of the folder where your site will be generated. Where you want this to be located will depend on the structure of your project.

### File Organization

You'll write most of your documentation inline in your `css` or `less` files. You should add one file, `styleguide.md`, to your `styles` folder to write your landing page (and set up navigation).

For demos and examples, you may want to create a separate folder to make it easy to link to them later. Make sure not to put anything into the `styleguide` directory as it is automatically generated.

Your project's directory should will look something like this:

```
project/
    styles/
        base.less
        buttons.less
        variables.less
        styleguide.md
    demos/
        base/
            forms/
                demo.html
            tables/
                demo.html
            buttons/
                demo.html
        variables/
            color-palette/
                demo.html
    styleguide/
        <!-- Automatically generated directory -->
```

## Your First Page

Now for the fun part!

Documentation pages do not need separate files outside of your LESS/SCSS/CSS. Instead, DocumentCSS looks at specific [tags](/docs/tag-definition.html) and breaks your code into pages according to that heirarchy. These are `@`-prefixed and tell DocumentCSS what to call a page, and how to structure the navigation.

If you'd like to build static pages that don't contain live code (like these guides), you can do so with the same tags in a markdown page.

*Note: Every time this guide introduces a new tag, you'll see a section like the following.*

### New Tag: `@@page`

The `@@page` tag creates a standalone page.

#### Example

With our configuration, this will generate a page called `my-styleguide.html`

```markdown
@@page my-styleguide My Style Guide
```

#### Arguments

```markdown
@@page NAME TITLE
```

The first argument, `NAME`, is the unique identifier for your page. It is how you will reference other pages later and how DocumentJS names the generated `html` files. The second argument, `TITLE`, is the title that will be displayed on the page.

## Creating Your First Page

Create a file in the `styles` directory called `styleguide.md` that looks like this:
```markdown
@@page my-styleguide My Style Guide

Welcome to my Style Guide!
```

Anything after the line with the tag will be used as text on your page.

### Generating The Site


Now that you have your first page, you can generate the site for the first time. Open up a terminal in your project's directory and run:

```
> ./node_modules/.bin/documentjs
```

This will generate your Style Guide's site in the `styleguide` directory.

#### Simple Command

If you want an easier way to run this command, first install DocumentJS globally (so it can be run anywhere on your computer):

```
> npm install -g documentjs
```

Now you can just run this command in any directory with a `documentjs.json` file:
```
> documentjs
```

#### Viewing your Site

Now you just need a way to host your generated site from `styleguide`. If you're not sure how to do this and are on a Windows computer, you'll need to research it on your own. If you are using a Mac or a Linux machine, use a terminal navigate to the `styleguide` directory and use python to start a server:
```
> cd styleguide
> python -m SimpleHTTPServer
```

You should see something like the following:
```
Serving HTTP on 0.0.0.0 port 8000 ...
```

Open up a browser and navigate to `http://localhost:8000` (if the number above is not 8000, use whatever number you see in your terminal instead). You should see the page you just created!

### Automatically Detecting Changes

If you'd like DocumentJS to rebuild the site every time you make changes, you can use the `-w` (watch) flag while you're working on the site so you don't have to run the `documentjs` command every time:

```
> documentjs -w
```

## Writing

### Documenting a Stylesheet

*The next few pages will be very information-dense. If you're the kind of person who takes breaks, now would be a good time a good time.*

To document a stylesheet, we're going to need to use two more tags:

- `@stylesheet` to create a page for each stylesheet documented
- `@styles` to document individual styles

When all of these are put together, a documented stylesheet file (`css`, `less`, or `scss`) will look something like this:

```css
/**
 *  @@stylesheet typeography.less Typography
 *  
 *  Global style definitions for all typographic elements 
 *  including headings, paragraphs, lists, and blockquotes.
 */

/**
 * @@styles headings Headings
 *
 * H tags defining a typographical heirarchy
 */
h1,h2,h3,h4,h5,h6{
    margin: 0;
    margin-bottom: 10px;
}

```

As a result our styleguide will start to look like [this page](/examples/styles/typography.less.html). Don't worry about the live demos just yet--we'll get to that soon.

### New Tag: `@@stylesheet`

The `@@stylesheet` tag creates an individual page to document a stylesheet. Instead of creating a separate file, you'll use this tag.

#### Example

In a file like `typography.less`:

```css
/**
 *  @@stylesheet typeography.less Typography
 *  
 *  Global style definitions for all typographic elements 
 *  including headings, paragraphs, lists, and blockquotes.
 */
```

This will create a page in the `stylesheet` directory called `typography.less.html`. Like with the `@@page` tag, anything you write below the tag will be used as a description in the page.

#### Arguments

The @@stylesheet tag behaves similarly to the @@page tag, so it has the same arguments.

```markdown
@@stylesheet NAME TITLE
```

`NAME` is the unique name of the page for reference purposes (and will determine the name of the `html` file). It is often going to make sense to just make `NAME` the name of the file (on the [example Live Style Guide](/examples/styles/typography.less.html) you will see file names listed under the titles for this reason).

`TITLE` is the title that will be displayed on the page.

### New Tag: `@@styles`

The `@@styles` tag allows you to define an individual set of styles. 

>**Whenever you use this tag in a stylesheet that already used the @@stylesheet tag, your `@@styles` documentation will be included in that stylesheet. When using this tag, the comments you may already have been writing will automatically become a part of your live style guide.**

#### Example

In a file like `typography.less` (that already has a `@@stylesheet` tag at the start of the file):

```css
/**
 * @styles headings Headings
 * 
 * H tags defining a typographical heirarchy
 */
h1,h2,h3,h4,h5,h6{
    margin: 0;
    margin-bottom: 10px;
}
```

*Note: the actual styles declared below the comments will not be included in the styleguide. They are only shown for context.*

#### Arguments

```markdown
@@styles NAME TITLE
```

`NAME` is the unique name of the page for reference purposes (but is less important in this case). `TITLE` is the title of the heading that will be displayed on the generated stylesheet page.

## Organizing Your Styleguide

After you've documented your first stylesheet, if you [generate the site](/docs/lsg-quickstart-generate.html) you won't see your stylesheet page anywhere in the sidebar. Even though the page has been generated, it isn't linked up to the rest of the site because you need to tell DocumentJS where to put it.

We have two more tags so you can organize your style guide:

- `@@parent` to tell DocumentJS where to put links to your pages and stylesheets
- `@@group` to organize links in the sidebar


### New Tag: `@@parent`

The `@@parent` tag organizes your site by telling DocumentJS where to put a link to your page or stylesheet.

#### Example

The following tells DocumentJS that the parent page of `Typography` is our main page, `styleguide`. After using this tag, the `Typography` page will show up in the sidebar in the first position.

```less
/**
 * @@stylesheet typography.less Typography
 * @@parent styleguide 0
 */
```

#### Arguments

```markdown
@@parent NAME ORDER
```

The `NAME` argument is the unique name *of the parent*. The `ORDER` argument allows you to specify the order in which this child shows up in the sidebar. By default, children will be ordered alphabetically.

### New Tag: `@@group`

The `@@group` tag organizes pages with headings in the sidebar. On the left of this page, the groups are "INTRO," "SETUP", "YOUR FIRST PAGE", "WRITING", and "CUSTOMIZING".

#### Example

The group tag is used on a parent page. In this case, you will want to specify groups in `stylesheet.md`:

```markdown
@@page my-styleguide My Style Guide
@@group styleguide-theme 0 Theme
@@group styleguide-baseline 1 Baseline Elements
@@group styleguide-docs 2 API
@@group styleguide-other 3 Other
```

#### Arguments

```markdown
@@group NAME ORDER TITLE 
```

The `NAME` argument is the unique name. You'll use this as an argument for `@@parent` in pages or stylesheets that belong in this group.

The `ORDER` specifies the order in which groups should appear in the sidebar. By default, they will be organized alphabetically.

The `TITLE` is displayed as a heading in the sidebar.

### Putting Stylesheets into Groups

Once you've specified groups in `stylesheet.md`, you just need to make those groups the `@@parent` of your stylesheets (instead of using the base page). If you want to make put your Typography stylesheet in the "Baseline Elements" group, put this in `typography.less`

```
/**
 * @@stylesheet typography.less Typography
 * @@parent styleguide-baseline 0
 * 
 * Global style definitions for all typographic elements including headings, paragraphs, lists, and blockquotes.
 **/
```

Notice that we are using the name we declared as a `@@group` as the parent.

## Live Demos

The last thing you'll need in your Live Style Guide is the Live Demos. There are two more tags you'll use for this:

- `@@demo` to show a live demo as well as sample HTML for that demo
- `@@iframe` to show a live demo on its own

### Creating Demos

Before you link to your demos, you'll need to create an individual page for each of them. In your `demos` directory, create an HTML file for any demo you want to show and link to your project's relevant stylesheet(s). **Since your demos and your overall project use the same source styles, your live demos will change whenever your design changes**.

These demo pages are not generated or changed by DocumentJS, so you need to put them together manually as you would any web page and you need to be able to link to them from your project. As long as you followed the instructions for [file organization](/docs/lsg-quickstart-file-organization.html) and [site generation](/docs/lsg-quickstart-generate.html) so far, you should be able to follow along with the examples below if you put your demo files in the `demos` directory. Otherwise, you may need to figure some things out on your own.

### New Tag: `@@demo`

The `@@demo` tag displays a live demo and the markup for that demo.

#### Example

In the following example, the demo page must be located at `demos/forms.html`.

In `base.less`:
```css
/**
 * @@stylesheet base-styles Base Styles
 * @@parent styleguide-baseline 0
 */

/**
 * @@styles forms Forms 
 * 
 * @@demo demos/forms.html
 */
```

On the "Base Styles" stylesheet page generated from `base.less`, there will now be a demo showing whatever page is at `demos/forms.html`. In the [Example Style Guide](/examples/styles/base.less.html), that looks like this:

@demo examples/demos/forms.html


#### Arguments

```markdown
@@demo FILEPATH
```

The `FILEPATH` argument is a link to the location of the demo page.

### New Tag: `@@iframe`

Sometimes you'll want a live demo without displaying any markup. To do this, just use the `@@iframe` tag instead.

#### Example

In the following example, the live demo must be located located at `demos/headings.html`.

In `typography.less`:
```css
/**
 * @@stylesheet typography.less Typography
 * @@parent styleguide-baseline 1
 */

/**
 * @@styles headings Headings
 *
 * @@demo demos/headings.html
 */
```

Similar to above, but without the "HTML" tab, there will be a demo. In the [Example Style Guide](/examples/styles/typography.less.html), that looks like this:

@iframe examples/demos/headings.html


#### Arguments

```markdown
@@iframe FILEPATH
```

Just like with the `@@demo` tag, the `FILEPATH` argument is a link to the location of the demo page.

## Custom Styles

The default look and feel of your Live Style Guide is going to be similar to DocumentJS.com as it is using the default theme.

### Additional Configuration

You'll need to make a `style-guide-theme` folder and point to it in `documentjs.json` before you can start changing anything. You should also make a `styles` folder in that `theme` folder.

Updated directory structure:
```
project/
    styles/
        <!-- PROJECT styles are already here-->
    style-guide-theme/
        styles/
            <!-- LIVE STYLE GUIDE styles will go here -->
    demos/
        <!-- demos are here -->
    styleguide/
        <!-- Automatically generated directory -->
```

You'll need to tell DocumentJS to look for static resources in your theme folder.

Updated `documentjs.json`:
```json
{
    "siteDefaults": {
      "static": "style-guide-theme"
    },
    "sites": {
        "styles": {
            "glob": "styles/**/*.{md,less,md}",
            "parent": "style-guide",
            "dest": "./styleguide"
        }
    }
}
```

### Changing the Styles

To see DocumentJS default styles, look in `node_modules/documentjs/site/default/static/styles`. See the documentation for these styles in the [example Live Style Guide](/examples/styles/variables.less.html). To change any of these styles for your style guide, simply copy one of the files over to `style-guide-theme/styles` and make your changes.

If you'd like to add a new LESS file, simply copy over `styles.less` (which imports all the stylesheets) and `@@import` your new file. DocumentJS will automatically resolve default file imports for any files you don't copy over so don't worry about fixing the file paths for the `@@import` statement.
