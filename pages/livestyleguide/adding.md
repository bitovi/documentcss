@page lsg-adding Adding to Existing JS Docs
@parent Guides.howTo 1
@group lsg-adding-steps Adding to Existing Docs

This guide will:

* Give a designer-friendly explanation of what DocumentJS does
* Make sure you have everything you need installed
* Help you configure DocumentJS to add a Live Style Guide
* Explain how to use [tags](http://documentjs.com/docs/documentjs.tags.html) to write your Live Style Guide

You should start elsewhere if:

* You want to [create a Live Style Guide on a project that doesn't already use DocumentJS](/docs/lsg-quickstart.html)
* You still need to set up DocumentJS for [API documentation](http://documentjs.com/docs/index.html)
* You're just [trying to kill time](https://www.youtube.com/watch?v=6EneCIPJsog)

## A Brief Disclaimer

The [Standalone Guide](/docs/lsg-quickstart.html) is likely more precise when it comes to step-by-step instructions. Unfortunately, since we don't know exactly how your project looks we'll be making a number of assumptions for this guide:

* Your project uses npm
* The API docs are configured in a `documentjs.json` file
* Other general assumptions about your project's setup and configuration

There are a few ways to compensate for the ways this guide may differ from your specific project setup:

* Go through this guide with a developer who understands how the API Documentation is set up in your project
* Ask questions on [Gitter](https://gitter.im/bitovi/documentcss)
* Open [an issue](https://github.com/bitovi/documentcss/issues/new) to let us know when something isn't clear


## DocumentJS for Designers

If you're working on a project that is already using DocumentJS, it is being used to generate JavaScript API docs. Since it's already being used, with only a little configuration you should be able to:

* Generate a living site that automatically updates as your project's design evolves
* Write a style guide with inline comments in stylesheets or with individual markdown files
* Include demos to display examples alongside sample markup
* Organize pages into navigation groups like "Elements," "Themes," and "Components"

To see an example of this in action, check out the [example Live Style Guide](/examples/styles/index.html).

### What DocumentJS Does

DocumentJS is a [*static site generator*](https://staticsitegenerators.net/). This means it scans specially formatted input files and creates a website that remains unchanged until the generator runs again. Whereas in a content management system changes happen somewhat automatically, a static site generator usually needs to be **run manually** and then the generated files must be **uploaded**.

While this may seem more complicated than a CMS, static site generation works especially well for a Live Style Guide. Since your stylesheets are also the source files for your style guide, **changes to your stylesheets are also changes to your Live Style Guide**.

To build your Live Style Guide, DocumentJS does the following:

1. Reads through files specified in its configuration
2. Looks in your commments for tags like `@page`, `@group`, and `@parent` to determine site layout
3. Looks in your comments for tags like `@stylesheet`, `@styles`, and `@demo` to create the individual parts of your style guide
4. Automatically generates `html` files



[Next Page](/docs/lsg-adding-installation.html)