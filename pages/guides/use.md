@page use Use
@parent howTo 2
@hide sidebar
@outline 2 ul

This guide covers how to create, organize and generate a Living Style Guide (LSG) with DocumentCSS.

## Tags Reference

DocumentCSS uses comments in your stylesheets to generate your style guide documentation. Tags are used in conjunction to add structure to it. 

Prefixed with the `@@` symbol, tags tell DocumentCSS that there is additional information about the code. For example the tag `@@description` is used to indicate where the description of a style begins.

Use the following tags to structure your LSG:

<table>
  <tr>
      <th>Tag</th>
      <th>Use To</th>
  </tr>
  <tr>
      <td>@@page</td>
      <td>Declare a markdown file as a page in your site.</td>
  </tr>
  <tr>
      <td>@@stylesheet</td>
      <td>Declare a stylesheet file as page in your site.</td>
  </tr>
  <tr>
      <td>@@style</td>
      <td>Declare a comment as a style inside of a stylesheet.</td>
  </tr>
  <tr>
      <td>@@demo</td>
      <td>Add an iframe with a demo and html views.</td>
  </tr>
  <tr>
      <td>@@iframe</td>
      <td>Adds a simple iframe.</td>
  </tr>
  <tr>
      <td>@@parent</td>
      <td>Specify the parent of a page or stylesheet.</td>
  </tr>
  <tr>
      <td>@@group</td>
      <td>Specify groups of stylesheets or pages in the sidebar.</td>
  </tr>
</table>

For additional functionality consult the [tags full listing](http://documentjs.com/docs/documentjs.Tag.html).


### @@page

Use this tag inside of a markdown file to represent content that doesn't belong to part of the application structure. Anything that you write below this tag will appear as the description of the page.

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>NAME</code></td>
      <td>The unique name of the page. The name is used as a reference for other tags.</td>
  </tr>
  <tr>
      <td><code>TITLE</code></td>
      <td>The title of the page used for display purposes.</td>
  </tr>
</table>

Example:

```
@@page logo-standards Logo Standards

The following guidelines will help you...

```
With this configuration a page will be created called **logo-standards.html**. The `h2` on the page will be **Logo Standards**.

### @@stylesheet

Use this tag inside of a stylesheet (CSS, LESS, or SCSS) to declare a stylesheet that you want to document in your LSG. Anything that you write below this tag will appear as the description of the page.

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>NAME</code></td>
      <td>The unique name of the stylesheet. The name is used as a reference for other tags.</td>
  </tr>
  <tr>
      <td><code>TITLE</code></td>
      <td>The title of the page used for display purposes.</td>
  </tr>
</table>

Example:

```
/**
* @@stylesheet buttons.css Buttons
*
* There are different button styles that can be...
**/
```
This will create a page in the **stylesheet** directory called **buttons.css.html**. Like with the `@@page` tag, anything you write below the tag will be used as a description in the page. Note that because you are adding this content inside of a code file you will need to wrap it in a code comment.

### @@styles

Use this tag inside of a stylesheet that is already using the `@@stylesheet` tag to create a subsection inside of the page and document a set of styles.

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>NAME</code></td>
      <td>The unique name of the style. The name is used as a reference for other tags.</td>
  </tr>
  <tr>
      <td><code>TITLE</code></td>
      <td>The title of the style used for display purposes.</td>
  </tr>
</table>

Example:

```
/**
* @@stylesheet buttons.css Buttons
*
* There are different button styles that can be...
**/

/**
* @@styles buttons-sizes Button Sizes
*
* Use button sizes to define the hierarhy between...
**/
```
This will create the section **Button Sizes** on the page **buttons.css.html**.

### @@demo

Use this tag to add a demonstration of and html file that shows your styles in action. The demo will
render as well an html tab with the markup used for the demo.

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>SRC</code></td>
      <td>The source of the html file.</td>
  </tr>
  <tr>
      <td><code>HEIGHT</code></td>
      <td>The height of the html page. If a height is not provided, the height is determined as the content of the body.</td>
  </tr>
</table>

Example:

```
/**
* @@styles forms Forms 300
*
* @@demo demos/forms.html
**/
```

This will show the contents of the **forms.html** right below the section *Forms* with a height of 300px. The html markup will also be rendered on a separate tab.

### @@iframe

Use this tag to add a demonstration of and html file without showing the markup used for it. 

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>SRC</code></td>
      <td>The source of the html file.</td>
  </tr>
  <tr>
      <td><code>HEIGHT</code></td>
      <td>The height of the html page. If a height is not provided, the height is determined as the content of the body.</td>
  </tr>
</table>

Example:

```
/**
* @@styles forms Forms 300
*
* @@iframe demos/forms.html
**/
```

This will show the contents of the **forms.html** right below the section *Forms* with a height of 300px. The html markup won't be rendered on a separate tab.


### @@parent

You can use this tag inside of a markdown file or stylesheet to specify its parent. 

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>NAME</code></td>
      <td>The unique name of the parent. The name is used as a reference for other tags.</td>
  </tr>
  <tr>
      <td><code>ORDER</code></td>
      <td>The placement of the children in relation to their siblings. The order starts with 0 and defaults to alphabetical.</td>
  </tr>
</table>

Example:
```
/**
* @@stylesheet checkboxes.css Checkboxes
* @@parent forms 2
/**

```
With this configuration the stylesheet **Checkboxes** will show under the **Forms** section as the 3rd item in the list.

### @@group

You can use this tag to group pages or stylesheets in the sidenav of your LSG.

<table>
  <tr>
      <th>Arguments</th>
      <th></th>
  </tr>
  <tr>
      <td><code>NAME</code></td>
      <td>The unique name of the group. The name is used as a reference for other tags.</td>
  </tr>
  <tr>
      <td><code>ORDER</code></td>
      <td>The placement of the children in relation to their siblings. The order starts with 0 and defaults to alphabetical.</td>
  </tr>
  <tr>
      <td><code>TITLE</code></td>
      <td>The title that will be shown in the sidebar.</td>
  </tr>
</table>

Example:
```
@@page styles Styles
@@group styles.branding 0 Branding
@@group styles.baseline 1 Baseline Elements
@@group styles.assets 2 Designs Assets 

```
This will create the groups: **Brainding**, **Base Elements**, and **Design Assets** under the sidebar shown for the **Styles** section.

## Creating a Page

Now that you have a grasp on what tags are used for, let's dive into how to create your Living Style Guide. 

The first step is to create a **page** which will be used as the index of your styleguide. To create this page you can create a file in the `styles` directory called `styleguide.md`, and inside add the tag [@@page](using.html#section=section__page). Your code should look something like this:

```
@@page styleguide My Style Guide

Welcome to the kingdom of consistent styles and carefully crafted code!

```

Anything after the line with the tag will be used as text on your page.


### Using Markdown

With DocumentCSS you can use [markdown](https://en.wikipedia.org/wiki/Markdown) to structure semantically your documention. Markdown is great becuase is a lightweight markup that won't clutter the comments inside of your style sheets. For example, if you want to call out a piece of text to be displayed as "code" in markdown you can simply wrap the text in "`". For example:


<table>
  <tr>
      <th style="text-align: right">This Markdown:</th>
      <td>&#96;code&#96;</td>
  </tr>
  <tr>  
      <th style="text-align: right">Will display in the generated HTML as:</th>
      <td>&lt;code&gt;code&lt;/code&gt;</td>
  </tr>
  <tr>
      <th style="text-align: right">Will display on the page as:</th>
      <td><code>code</code></td>
  </tr>
</table> 

Reference this [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) created by **gitbub** to learn more about how to use markdown in your docs. 


### Hyperlinking

To create links within your documentation simply use the `NAME` of the page or stylesheet that has been documented using the tags `@@page` or `@stylesheet` and wrap it in `[]`. For example:

The following page
```
@@page accesibility-guidelines Accesibility Guidelines

```

Can be hyperlinked like this:

```
...referece [accesibility-guidelines] for further details...

```

For links external to your style guide, use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links).


### Adding images

From time to time you may want to add an image to your style guide. For this use as well [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images).


## Documenting a Stylesheet

To document a stylesheet, open an existing stylesheet or create a new one. You can use .CSS, .LESS, or .SCSS extensions. Then, at the top of your document add the [@@stylesheet](using.html#section=section__page) tag inside of a css comment. As with the page tag, you can add a description right below it. For example:

```css
/**
 *  @@stylesheet buttons.less Buttons
 *  
 *  Global style definitions for all... 
 */

```

This will create a page called `buttons.less.html` in the directory that you chose to generate your documentation in.

### Documenting Styles

The next step is to use the [@@styles](using.html#section=section__styles) tag to organize the styles inside of your stylesheet. For example, inside of your stylesheet for buttons, you may have styles for colors, sizes, and variations. You can use the `@@styles` tag to create sections and document them separately. Besides adding structure to your document, doing this will also allow you to hiperlink directly to that section as well as to show it as part of the summary of links at the top of the documentation for that stylesheet. 

Here's an example of how this tag can be used:

```css
/**
 *  @@stylesheet buttons.less Buttons
 *  
 *  Global style definitions for all... 
 *
 */

 /**
 *  @@styles buttons-sizes Button Sizes 1
 *
 *  There are 3 button sizes that can...
 */

  btn-small {
  ...
  }
 

  /**
 *  @@styles buttons-colors Button Colors 0
 *
 *  Use the color variations to denote...
 */

  btn-success {
  ...
  }


```

### Creating Demos

Creating demos allows you to include markup and css in your LSG to demonstrate your styles in action. For this, create and HTML file inside of your `demos` directory as it was indicated under the [File Organization]() section.

Inside of this HTML file add the necessary markup and css classes needed for your demo and link your project stylesheet. For example:

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Form Controls</title>
    <link rel="stylesheet" 
          href="styles/myproject-min.css" />
</head>

<body>
  <form>
    ...
  </form>
<body>

</html>

```
Then, link this demo to your documentation using the [@@demo](using.html#section=section__demo) tag:

```
 /**
 *  @@styles form-controls Form Controls
 *
 *  @@demo demos/forms-controls.html
 */

  label {
  ...
  }

```
This will render in your LSG page as:

@demo examples/demos/forms.html

Note that next to the "demo" tab there is an "HTML". This tab shows any markup inside of your demo, so it's a really nice way of showing your styles in action and how is the markup setup. But if for some reason you don't want to show the markup, you can use instead the tag [@@iframe](using.html#section=section__iframe) which will not render the HTML and the tabs at all. For example:

```
 /**
 *  @@styles form-controls Form Controls
 *
 *  @@iframe demos/forms-controls.html
 */

  label {
  ...
  }

```
Will render in your LSG page as:

@iframe examples/demos/forms.html


> **Since your demos and your overall project will be using the same source styles, your live demos will change whenever your design changes.**


## Organizing the Docs

DocumentCSS allows you to organize your documentation independently of how your styles are organized. This is very powerful as you can create a custom information achitecture that fit better your particular needs of presenting your Living Style Guide.



### Parent-child Relations

To create a hierarchy in your documentation your can use the tag [@@parent](use.html#section=section__parent). This tag tells DocumentCSS that your `@@page` or `@@stylesheet` has a "parent", and will make it display under that "parent" on the sidebar. For example:

```
/**
* @@stylesheet checkboxes.css Checkboxes
* @@parent forms 2
/**

```

In this example the **Checkboxes** page will show up in the sidebar under the **Forms* section in the 3rd position.


### Creating Groups

You can also group pages with headings in the sidebar. For this select the parent page where you want to create the group. Then add the tag [@@group](use.html#section=section__group) followed by:
- The unique `NAME` of the group that will be used as reference for other tags,  
- The `ORDER` in which you want your group to show on.
- The `TITLE` or heading of your group that will be visible on the page.

Example:
```
@@page styles Styles
@@group styles.branding 0 Branding
@@group styles.baseline 1 Baseline Elements
@@group styles.assets 2 Designs Assets 

```
This will create the groups: **Brainding**, **Base Elements**, and **Design Assets** under the sidebar shown for the **Styles** section.

### Updating the Top Menu

While the sidebar is generated via the `@@parent` and `@@group` tags, the top menu on your Living Style Guide is hardcoded in the theme files. To change the navigation menu items, you have to edit the theme file `layout.mustache`.

There are two ways to do this: 
1. Create an entirely new theme by copying the default theme and editing it. This is useful if you want to make a lot of changes to the theme. 
2. Copy and edit only the `layout.mustache` template file. This is useful if you’re not going to make any other changes to the theme. To do this: 
    - Copy `layout.mustache` to a folder called `templates` in your project (like `theme/templates`).
    - Make any modifications you have to the `layout.mustache` file.
    - Tell DocumentJS to look for this new theme in your `documentjs.json` like this: 
      <pre><code>"siteDefaults": {
        "templates": "theme/templates",
        },</code></pre>
    - When you generate the site, be sure to use the `-f` flag to force DocumentJS to re-generate the theme files: 
      <pre><code> > documentjs -f</code></pre>

## Generating the Site

To generate your Living Style Guide site open up a terminal in your project's directory and run:

```
> ./node_modules/.bin/documentjs
```

This will generate your site in the `styleguide` directory.

### Simple Command

If you want an easier way to run this command, first install DocumentJS globally (so it can be run anywhere on your computer):

```
> npm install -g documentjs
```

Now you can just run this command in any directory with a `documentjs.json` file:
```
> documentjs
```

### Viewing Your Site

Now you just need a way to host your generated site from `styleguide`. If you're not sure how to do this and are on a Windows computer, you'll need to research it on your own. If you are using a Mac or a Linux machine, use a terminal navigate to the `styleguide` directory and use python to start a server:
```
> cd styleguide
> python -m SimpleHTTPServer
```

You should see something like the following:
```
Serving HTTP on 0.0.0.0 port 8000 ...
```

Open up a browser and navigate to `http://localhost:8000` (if the number above is not 8000, use whatever number you see in your terminal instead). You should see any pages that you have created so far!

### Automatically Detecting Changes

If you'd like DocumentJS to rebuild the site every time you make changes, you can use the `-w` (watch) flag while you're working on the site so you don't have to run the `documentjs` command every time:

```
> documentjs -w
```

----
Continue to the next guide: <br >
[&#62; Customizing DocumentCSS](/docs/customize.html).
