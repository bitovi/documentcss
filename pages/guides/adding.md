@page lsg-adding Adding to Existing JS Docs
@parent howTo
@hide sidebar
@outline 2 ul

This guide will :
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

## Setup

Setup consists of two main steps: installation, and configuration (including file organization).

### Installation

Install [Node.js](http://nodejs.org/) on your 
computer. Open a console to your project and install the project's dependencies automatically with npm.

    > cd path/to/myproject
    > npm install

This should install DocumentJS if your project is already using it.

### Configuration

To generate a Live Style Guide, **you only need to configure two things**.

1. What stylesheet files are being documented
2. Where the Live Style Guide should be generated

#### Current Configuration

Your project should already have a `documentjs.json` file.
Inside it, you'll probably see something like this:

```json
{
    "sites": {
        "docs": {
            "glob": "project/**/*.{js,md}"
            "dest": "api"
        }
    }
}
```

#### Your Configuration

Add configuration for your Live Style Guide to the 
current configuration.

```json
{
    "sites": {
        "docs": {
            "glob": "project/**/*.{js,md}"
            "dest": "api"
        },
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

This name is important because you're setting up a second documentation site alongside existing docs.


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

## File Organization

You'll write most of your documentation inline in your `css` or `less` files. You should add one file, `styleguide.md`, to your `styles` folder to write your landing page (and set up navigation).

For demos and examples, you may want to create a separate folder to make it easy to link to them later. Make sure not to put anything into the `styleguide` directory as it is automatically generated.

Depending on your project and team, this is likely a good time to ask a developer for help (or just to double-check the changes you're making). For large applications, file organization becomes extremely important. Choices that seem insignificant (and may actually be insignificant) can still incur the wrath of (over-)opinionated engineers.

Your project's directory will probably look something like this:

```
project/
    <!-- the project's already-existing file structure -->
    folder1/
    folder2/
    folder3/
    <!-- the directory containing the project's stylesheets -->
    styles/
        base.less
        buttons.less
        variables.less
        styleguide.md
    <!-- live demos that we'll get to later -->
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

## Next Steps

Now that you've finished with installation and configuration, the rest of the the process (creating pages, documenting, and customizing your site) will follow the same steps as the [Standalone Style Guide](/docs/standalone-lsg.html):

* [Creating a Page](/docs/standalone-lsg.html#section_CreatingYourFirstPage)
* [Generating the Site](/docs/standalone-lsg.html#section=section_CreatingYourFirstPage__GeneratingTheSite)
* [Documenting a Stylesheet](/docs/standalone-lsg.html#section=section_Writing__DocumentingaStylesheet)
* [Organizing your Style Guide](/docs/standalone-lsg.html#section_OrganizingYourStyleguide)
* [Live Demos](/docs/standalone-lsg.html#section_LiveDemos)
* [Customizing Look and Feel](/docs/standalone-lsg.html#section_CustomStyles)