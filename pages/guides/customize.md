@page customize Customize
@parent howTo 3
@hide sidebar
@outline 2 ul

This guide will cover how you can customize the look and feel to align it to your specific brand, and how further configuration (like adding a style guide to an existing documentJS docs) can be done.


## Creating a Theme

To create a theme for your living style guide, first create the following folder structure in the root of your project:

```
project
├──style-guide-theme
   └── static
       └──styles
          └──styles.md
           <!-- Place your THEME styles here -->
```
`style-guide-theme` can be any name that you want to use for your theme. `static` and `styles` should be used for the other folders as this follows the directory structure of the default theme, making it easier to overwrite the styles. 

The next step is to update `documentjs.json` to indicate where the theme resources are located.

For example:


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

### Overwriting Existing Styles

To see the default styles, look in:
`node_modules/documentjs/site/default/static/styles` 
(you can see these styles documented in [Our Living Style Guide](/examples/styles/variables.less.html)).

Then copy the file that you want to change over to `style-guide-theme/static/styles`. Inside of this file include only the styles that you want to overwrite and make your changes.

### Adding New Styles

If you'd like to add a new LESS file, simply copy over `styles.less` (which imports all the stylesheets) and `@@import` your new file. DocumentJS will automatically resolve default file imports for any files you don't copy over so don't have to worry about fixing the file paths for the `@@import` statement.

## Adding to Existing DocJS 

If your development team is already using DocumentJS to generate JavaScript API docs, you can install DocumentCSS as indicated [in this guide](setup.html) having in mind that the configuration of the `document.json` file will be a little different. Since your project will already contain this file, it will look something like this:

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

To this configuation you will need to add the style guide portion as follows:

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

----
Continue to the next guide: <br >
[&#62; Publishing Your Living Style Guide](/docs/publish.html).

