@page lsg-adding-setup Setup
@parent lsg-adding-steps 0

Setup consists of two main steps: installation, and configuration (including file organization).

## Installation

Install [Node.js](http://nodejs.org/) on your 
computer. Open a console to your project and install the project's dependencies automatically with npm.

    > cd path/to/myproject
    > npm install

This should install DocumentJS if your project is already using it.

[Next Page](/docs/lsg-adding-configuration.html)

## Configuration

To generate a Live Style Guide, **you only need to configure two things**.

1. What stylesheet files are being documented
2. Where the Live Style Guide should be generated

### Current Configuration

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

### Your Configuration

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

[Next Page](/docs/lsg-adding-next-steps.html)