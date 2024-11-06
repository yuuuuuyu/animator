module.exports = {
    outputDir: 'animator-app',
    publicPath: process.env.NODE_ENV === 'production' ?
        '/animater/' : '/',
    css: {
        extract: false
    }
}