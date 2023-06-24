const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const alias = require('@rollup/plugin-alias');

const { getFileNamesRecursive } = require('./.rollup/utils/get-file-names-recursive');

const production = process.env.BUILD === 'production';

const plugins = [
    resolve(),
    alias({
        entries: [
            {
                find: '@validator',
                replacement: path.join(__dirname, './src/validator'),
            },
            {
                find: '@parser',
                replacement: path.join(__dirname, './src/parser'),
            },
            {
                find: '@tags',
                replacement: path.join(__dirname, './src/tags'),
            },
            {
                find: '@tags-validation',
                replacement: path.join(__dirname, './src/tags-validation'),
            },
            {
                find: '@interpreter',
                replacement: path.join(__dirname, './src/interpreter'),
            },
            {
                find: '@schema',
                replacement: path.join(__dirname, './src/schema'),
            },
        ],
    }),
];

const fileNamesFilter = (fileName) => {
    return fileName.endsWith('.test.js') !== true;
};

const fileNames = getFileNamesRecursive('./src', fileNamesFilter);

if (production) {
    plugins.push(
        terser({
            compress: {
                properties: true,
                reduce_funcs: true,
                reduce_vars: true,
                drop_console: true,
                keep_fargs: false,
            },
        }),
    );
}

module.exports = {
    input: fileNames,
    output: {
        dir: 'dist/',
        format: 'cjs',
        entryFileNames: '[name].js',
        preserveModules: true,
    },
    plugins,
};
