# DocumentCSS

[![Join the chat at https://gitter.im/bitovi/documentcss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bitovi/documentcss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A documentation/guide portal for the Live Style Guide feature of [DocumentJS](https://github.com/bitovi/documentjs)

# Building and Making Changes

After cloning repo: 

    > npm install

To work on the site:

    > grunt

This will build the site (including static pages), open it up in your browser, and reload the
browser when any changes are made.

## Grunt Tasks

### Work on Site, Force Build and Live Update

This will build the site, start a server, open the page, and watch.
"Watch" means it will automatically regenerate (including static files) whenever changes occur. Pages have live-reloading built in.

    > grunt

This is an alias for the default task:

    > grunt generate:forceBuild

### Work on Site, do not force build

Almost the same as previous task, but slightly faster because it does not build static files when changes occur:

    > grunt generate

### Only build the pages

    > grunt build

With force building static pages:

    > grunt build:forceBuild

## Where Stuff Is

The `pages` directory contains `index.md`, which is the landing page.

Live Style Guide resources are being built from `node_modules/documentjs`.
To make changes to those:

    > cd MyWorkspace
    > git clone git@github.com:bitovi/documentjs.git
    > cd documentjs
    > git checkout myBranch
    > npm link
    > cd ../documentcss
    > npm link documentjs