module.exports = {
    outputDir: 'animator-app',
    publicPath: process.env.NODE_ENV === 'production' ?
        '/animator-app/' : '/',
    css: {
        extract: false
    }
}