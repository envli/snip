let mix = require("laravel-mix");

// let LiveReloadPlugin = require("webpack-livereload-plugin");

// mix.webpackConfig({
//   plugins: [new LiveReloadPlugin()]
// });

mix.sass("src/sass/app.scss", "app/css/app.min.css");
mix.js("src/js/app.js", "app/js/app.min.js");