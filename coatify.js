var coat = require("mithril-coat"),
    through = require("through");

function coatify(file) {
    var data = "",
        stream = through(write, end);

    function write(buf) {
        return data += buf;
    }

    function end() {
        coat.compile(data, { wrapFunction: true }, function(error, compiledTemplate) {
            var template = "";

            if (error) {
                stream.emit("error", error);
            }

            template = "module.exports = " + compiledTemplate + " ;"

            stream.queue(template);
            stream.queue(null);
        });
    }

    return data;
}

module.exports = coatify;
