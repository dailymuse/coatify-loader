var coat = require("mithril-coat");

function coatify(source) {
    var result;
    this.cacheable && this.cacheable();
    coat.compile(source, { wrapFunction: true }, function(error, compiledTemplate) {
        if (error) {
            throw new Error("WUTEVA I DO WHAT I WANT");
        }

        result = "module.exports = " + compiledTemplate + " ;";
    });
    return result;
}

module.exports = coatify;
