# i-am-disappoint

> Shames your terrible builds.

## One day at work...

    Boss:  Our build is broken but we want to promote it to staging.
    Me:    Well, we should probably fix the build.
    Boss:  Yeah, but it would be nice if we could promote the build but tell people
           it's broken and not to use it.
    Me:    What.


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


## The "i_am_disappoint" task

### Overview
In your project's Gruntfile, add a section named `i_am_disappoint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  i_am_disappoint: {
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

Filename of the XML test results to inspect for failure. Curently this only
supports the JUnit XML output format.

#### options.color
Type: `String`
Default value: `'red'`

The color of the ribbon.

#### options.position
Type: `String`
Default value: `'top-right'`

The position to place the ribbon.

### Usage Example

```js
grunt.initConfig({
  i_am_disappoint: {
      example: {
        options: {
            testResults: 'test/fixtures/test_results.xml',
            message: 'so fail.'
        },
        files: { 'tmp/index.html': ['test/fixtures/index.html'] }
      }
    }
});
```

## Credits
The ribbon style comes from  [Miro Karilahti](http://codepen.io/miroot)'s Pen [Corner Ribbons](http://codepen.io/miroot/pen/wiKAp/).


## Contributing
Want to contribute? Submit a pull request.

## Release History
_(Nothing yet)_
