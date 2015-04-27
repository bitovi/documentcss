# DocumentCSS

[![Join the chat at https://gitter.im/bitovi/documentcss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bitovi/documentcss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A documentation/guide portal for the Live Style Guide feature of [DocumentJS](https://github.com/bitovi/documentjs)

# Building and Making Changes

After cloning repo: 

    > npm install

To work on the site:

    > grunt

This will build the site, open it up in your browser, and reload the
browser when any changes are made.

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
