# ASAP Wordpress Theme

A Webpack boiler plate for a Wordpress theme

_DOCUMENTATION IN PROGRESS_

## Configuration

1. 5-step find and replace on the name in all the templates
   * Search for: `'asap_s'` and replace with: `'<project-name>'` (inside single quotations) to capture the text domain.
   * Search for: `asap_s_` and replace with: `<project-name>_` to capture all the function names.
   * Search for: `Text Domain: asap_s` and replace with: `Text Domain: <project-name>` in style.css.
   * Search for: <code>&nbsp;asap_s</code> and replace with: <code>&nbsp;<project-name></code> (with a space before it) to capture DocBlocks.
   * Search for: `asap_s-` and replace with: `<project-name>-` to capture prefixed handles.
2. Update BrowserSync proxy

       proxy: 'local.<project-name>.com'

## Features

## Prerequisite

* Requires node.js and gulp
* Requires local WordPress environment (works best with https://github.com/geekster909/asap-wp)

## Usage

`npm install`

Dev Command

`npm run build:dev -s -- --watch`

Build Command

`npm run build`
