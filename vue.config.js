module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://111.229.37.167',
                changeOrigin: true,
            }
        }
    }
}