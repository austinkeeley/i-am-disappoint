# i-am-disappoint

Shames your terrible builds by placing a failure ribbon on ones
that don't pass the unit test suite.

## One day at work...

> Boss: Our build is broken but we want to promote it to staging.

> Me: Well, we should probably fix the build.

> Boss: Yeah, but it would be nice if we could promote the build but tell people it's broken and not to use it.

> Me: What.

## Screenshot
Note the red "Failure" ribbon warning would-be investors to stay away until we get a passing unit test suite.

<img src="http://i.imgur.com/9MGDR2U.png" alt="screenshot" style="border: 1px solid #eee;" />



## Getting Started

```shell
npm install i-am-disappoint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('i-am-disappoint');
```

For each public facing web page that needs to be shamed, add the following HTML comment somewhere
on the page.

    <!-- i-am-disappoint -->


## The "i-am-disappoint" task

### Overview
In your project's Gruntfile, add a section named `i-am-disappoint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'i-am-disappoint': {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options


#### options.message
Type: `String`
Default value: `'Failure'`

The message to display on the ribbon.


#### options.testResults
Type: `String`

Filename of the XML test results to inspect for failure. Currently this only supports the JUnit XML output format.

#### options.color
Type: `String`
Default value: `'red'`

The color of the ribbon. Possible values include
* `red`
* `orange`
* `yellow`
* `purple`
* `blue`
* `green`
* `turquoise`
* `grey`
* `white`
* `black`

#### options.position
Type: `String`
Default value: `'top-right'`

The position to place the ribbon. Possible values include
* `top-left`
* `top-right`
* `bottom-left`
* `bottom-right`.

### Usage Example

```js
grunt.initConfig({
  'i-am-disappoint': {
      example: {
        options: {
            testResults: 'test/results/test_results.xml',
            message: 'So fail.'
        },
        files: { 'build/index.html': ['app/index.html'] }
      }
    }
});
```

## Credits
The ribbon style comes from  [Miro Karilahti](http://codepen.io/miroot)'s Pen [Corner Ribbons](http://codepen.io/miroot/pen/wiKAp/).


## Contributing
Want to contribute? Submit a pull request.

## Release History
**0.1.2** Pushed to NPM
