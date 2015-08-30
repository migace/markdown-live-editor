var MIGACE = MIGACE || {}

MIGACE.editor = (function() {
    var editor, init, toHTML, setOutput;

    init = function(id) {
        editor = document.getElementById(id);

        if (!editor) {
            throw {
                name: '[init] Bad parameter sent to the function',
                message: 'Parameter must be id of HTML document.'
            };
        }
    };

    toHTML = function() {
        if (!editor) {
            throw {
                name: 'Bad editor value.',
                message: 'You should call init method first.'
            };
        }

        var html = markdown.toHTML(editor.value);
        return html ? html : "";
    }

    setOutput = function(id) {
        if (!editor) {
            throw {
                name: 'Bad editor value.',
                message: 'You should call init method first.'
            };
        }

        var output = document.getElementById(id);

        if (!output) {
            throw {
                name: '[setOutput] Bad parameter sent to the function',
                message: 'Parameter must be id of HTML document.'
            };
        }

        editor.addEventListener('keyup', function() {
            output.innerHTML = toHTML();
        });
    }

    return {
        init: init,
        toHTML: toHTML,
        setOutput: setOutput
    };
})();
