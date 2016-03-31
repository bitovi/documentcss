@page lsg-quickstart-first-page Your First Page
@parent howTo.standalone-lsg-steps 1

Now for the fun part!

Documentation pages do not need separate files outside of your LESS/SCSS/CSS. Instead, DocumentCSS looks at specific [tags](/docs/tag-definition.html) and breaks your code into pages according to that heirarchy. These are `@`-prefixed and tell DocumentCSS what to call a page, and how to structure the navigation.

If you'd like to build static pages that don't contain live code (like these guides), you can do so with the same tags in a markdown page.

*Note: Every time this guide introduces a new tag, you'll see a section like the following.*

## New Tag: `@@page`

The `@@page` tag creates a standalone page.

### Example

With our configuration, this will generate a page called `my-styleguide.html`

```markdown
@@page my-styleguide My Style Guide
```

### Arguments

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

## Generating The Site


Now that you have your first page, you can generate the site for the first time. Open up a terminal in your project's directory and run:

```
> ./node_modules/.bin/documentjs
```

This will generate your Style Guide's site in the `styleguide` directory.

### Simple Command

If you want an easier way to run this command, first install DocumentJS globally (so it can be run anywhere on your computer):

```
> npm install -g documentjs
```

Now you can just run this command in any directory with a `documentjs.json` file:
```
> documentjs
```

### Viewing your Site

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

[Next Page](/docs/lsg-quickstart-stylesheet.html)