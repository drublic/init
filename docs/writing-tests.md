[&laquo; back to Table of Contents](TOC.md)

# Writing JavaScript Unit Tests

INIT relies on [the library Jasmine version 2](http://jasmine.github.io/) for
writing JavaScript unit tests. Please see [the full
documentation](http://jasmine.github.io/2.2/introduction.html) for more
information on how to use Jasmine.

Jasmine is utilized by Karma which runs all unit tests across different
browsers. You can find Karma's configuration within the `karma.conf.js` file in
`grunt/`.

There are three different tasks of interested to run with Grunt:

* `grunt test`: Runs all unit tests on a PhantomJS instance. This is meant to be
  the default task for developers to use when running unit tests. You can also
  use the slightly longer but more specific `karma:unit`.
* `grunt test:all`: Runs instances of PhantomJS, Chrome, Safari and Firefox and
  executes your tests. This is an alias for `karma:all`.
* `grunt karma:travis`: Runs all unit tests on a PhantomJS and a Firefox
  instance. Meant to be used with [Travis CI](https://travis-ci.org/).

## Adding a test suite

In general you want to write a test suite for each module you write. You can do
this by following this steps:

* If you haven't created the module within `src/modules/` yet, do so now.
* Add a file `modulename.spec.js` within `src/modles/modulename/` by copying
  over `module.spec.js` and removing unnecessary stuff.
* Adjust the module import statement to include the module you want to test.
* Add `modulename.spec.js` as `../modules/modulename/modulename.spec.js` in
  `test/main.js` as JS module import.
* Call the created module via `new Modulename()` in `test-main.js`.
* Run tests to ensure everything works just as you expect it.

## Utility

There is a utility flag `window.__test` which is set to `true` if you run tests
using Karma. This can come in handy if you want to make a private API testable.
