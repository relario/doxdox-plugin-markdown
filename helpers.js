const Handlebars = require('handlebars');

Handlebars.registerHelper('replaceNewLinesWithBR', block => block.replace(/[\r\n]+/g, '<br>'));

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});
