@page lsg.guides DocumentCSS

## Get Started

This will get you up and running as quickly as possible. Click `>>` on any of the headings for more detail.

## Install [>>](/docs/lsg-quickstart-installation.html)

Install Node.js on your computer. From the console use npm to install DocumentJS:

> cd path/to/myproject
> npm install documentjs --save-dev

*The --sav-dev flag saves DocumentJS in your package.json so other people who are working on your project can also use DocumentJS.*


## Configure [>>](/docs/lsg-quickstart-configuration.html)

To generate a Live Style Guide, create a file called `documentjs.json` in the top level of your project like this:
{
    "sites": {
        "styles": {
            "glob": "styles/**/*.{css,less,md}",
            "dest": "styleguide"
        }
    }
}

In this configuration “glob” is used to configure what stylesheet files are being documented. “dest” is used to configure where the Live Style Guide should be generated.


## Document [>>](/docs/lsg-quickstart-stylesheet.html)

DocumentJS uses tags prefixed with an @. To document your CSS use:

- `@stylesheet` to create a page for each stylesheet documented
- `@styles` to document individual styles
- `@parent` to organize how your styles get rendered on the Style Guide
- `@iframe` to display an html live demonstration 
- `@demo` to display an html live demonstration that also renders a tab with the html used on the demo

Example:
```
/**
  * @stylesheet buttons.less Buttons
  * @parent Styles.baseline-elements
  *
  * @description
  * All defined button styles and states belong here, including any "helper class" button style options, like `default`, `primary` etc.*
  * The same button styles have been applied to a button class, for use on other html elements emulating a button.
  *
  * @demo demos/buttons/demo.html
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


## Run [>>](/docs/lsg-quickstart-generate.html)

To generate the Style Guide first install DocumentJS globally (so it can be run anywhere on your computer):

> npm install -g documentjs

Then from your project directory run:

> documentjs -w

*-w is a flag that tell DocumentJS to watch changes and regenerate the style guide every time you make updates.*

To see the generated site, using terminal navigate to the styleguide directory and use python to start a server*:

> cd styleguide
> python -m SimpleHTTPServer

*this only applies to Mac or a Linux machines

Open up a browser and navigate to http://localhost:8000 (if the number above is not 8000, use whatever number you see in your terminal instead). You should see the Live Style Guide with the documentation you just created!

For detailed step by step instructions, check out the [detailed guides](/docs/lsg-quickstart.html).