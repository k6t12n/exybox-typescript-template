const mix = require('laravel-mix');

mix
    .js('resources/js/web/reactjs/homepage/index.js', 'public/javascripts/web/components/homepage/index.js').react()
    ;
