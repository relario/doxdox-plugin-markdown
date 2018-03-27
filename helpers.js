const Handlebars = require('handlebars');

Handlebars.registerHelper('replaceNewLinesWithBR', block => block.replace(/[\r\n]+/g, '<br>'));

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
