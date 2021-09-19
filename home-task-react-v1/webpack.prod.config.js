module.exports = {
    mode: 'production',
    devtool: false,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        }
    }
}
