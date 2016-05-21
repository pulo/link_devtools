module.exports = {
    entry: "./src/dev.js",
    output: {
        path: "./build",
        filename: "dev.js"
    },
    loaders: [
      {
        test: /\.tpl$/,
        loader: "html"
      }
    ],
    watch:true
    
};

