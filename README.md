HTML report resource bundle
====

Modified version of BackstopJS Compare React app.

## Development

Rename config.js.example to config.js in "output" folder.

To develop the React project run...

```
npm run dev-compare
``` 

To build the React project run...

```
npm run build-compare
``` 

This will generate `/output/index_bundle.js`.

`/output/index_bundle.js` contains all styles and js for the HTML report.  In normal BackstopJS operation his file bundle will be copied into the correct HTML report directory during a test flow (e.g. when running `backstop test`) after bitmap generation has completed.  See: `/core/command/report.js` writeBrowserReport() method for details on this mechanism.

Note: The files `diverged.js` & `diff.js` are copied from `node_modules` to `/output/` during build.
