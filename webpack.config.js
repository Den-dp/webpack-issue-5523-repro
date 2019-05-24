module.exports = function(){
    return {
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                { test: /\.ts$/, loader: 'ts-loader' },
            ]
        }
    };
};
