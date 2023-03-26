# Gulp Script for Compiling Sass and Compressing Images

I created this because I couldn't find a tested and working Gulp script for my needs. Works great.

This Gulp script automates the compilation of Sass files and the compression of images. It employs various Gulp plugins to achieve these tasks, such as `gulp-sass`, `gulp-clean-css`, `gulp-sourcemaps`, `gulp-imagemin`, `gulp-rename`, `gulp-plumber`, `gulp-autoprefixer`, and `browser-sync`.

## Requirements

This script requires Node.js and Gulp to be installed on your system. If you don't have them installed, please follow the instructions on their respective websites to install them.

## Installation

1. Clone the repository to your local machine: `git clone git@github.com:hilyin/gulp-4.git`
2. Navigate to the root of the project and install the dependencies: `npm install`

## Usage

To build and serve the project simultaneously, run the following command: `npm start`. 

Alternatively, you can build and serve the project separately:

### Building CSS and Compressing Images

`npm build`

### Serving the Project

`npm serve`
