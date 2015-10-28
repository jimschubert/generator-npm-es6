# <%= lib.name.original %>

## Build

```
gulp
```

For more information, run `gulp help`:

```
$ gulp help
[23:15:33] Using gulpfile /path/to/example/gulpfile.js
[23:15:33] Starting 'help'...

Main Tasks
------------------------------
    build
    changelog
    clean
    default
    help
    lint
    watch

Sub Tasks
------------------------------
    build:babel
    bump-version
    prepare-release
    test:unit

[23:15:33] Finished 'help' after 1.14 ms
```

## Test

```
gulp test:unit
```

And, `npm test` will also work in a pickle, but you don't get build and lint 
so you'll be testing against previously compiled output.

## Outputs

Everything from `src` is compiled through babel and output to `dist`.

When you push to npm, `dist` will be your library output.

## WARNING

It's bad form to call `require('babel/register');` in a published npm library.
Please only use the require hook in build or test related code.

## License

<%= lib.license %>
