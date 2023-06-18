module.exports = {
    input: {
        index: 'src/index.js',
    },
    output: {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true,
        entryFileNames: '[name].js',
    },
};