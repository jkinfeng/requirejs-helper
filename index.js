'use strict';

const fs = require('fs');
const path = require('path');

module.exports = requireJs;

function requireJs($options) {
    const $opts = Object.assign({
        path: process.cwd(),
        regular: /\.js$/
    }, $options || {});

    let __obj = {};

    searchFiles($opts).forEach(function ($routeFile) {
        const __filename = path.parse($routeFile).name;
        const __variableName = __filename.replace(/\./g, '_');
        const __tmpObj = require($routeFile);
        if ('function' === typeof __tmpObj ||
            ('object' === typeof __tmpObj && '{}' !== JSON.stringify(__tmpObj))) {
            __obj[__variableName] = __tmpObj;
        }
    });

    return __obj;
}

function searchFiles($opts) {
    return {
        files: [],
        search: function ($path) {
            let __self = this;
            if (fs.existsSync($path)) {
                fs.readdirSync($path).forEach(function ($fileOrDirectory) {
                    let __selected = path.join($path, $fileOrDirectory);
                    if (fs.statSync(__selected).isFile()) {
                        if ($opts.regular.test(__selected.split(path.sep).pop())) {
                            __self.files.push(__selected);
                        }
                    } else {
                        __self.search(__selected);
                    }
                });
            }
        },
        exec: function ($opts) {
            this.search($opts.path);
            return this.files;
        }
    }.exec($opts);
}