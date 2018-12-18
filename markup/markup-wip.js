document.addEventListener("DOMContentLoaded", function(event) {

    // Wraps first line in a div.
    $("[contenteditable='true']").on("input", function () {
        var $editable = $(this);
        if ($editable.html().trim() == "" || $editable.html().trim() == "<br>") {
            $editable.html($("<div><br></div>"));
        }
    }).trigger("input");

    // Markdown
    document.getElementById("editor").addEventListener("keyup", function(event) {

    	var selected    = window.getSelection();
        var range       = selected.getRangeAt(0);
        var current_div = range.startContainer.parentNode;
    	var div_content = current_div.textContent;

        // Replace the last space &nbsp; with an actual space.
        var div_words   = div_content.split(/\s+/);

        var is_header = 0;
        for (var i = 1; i < 7; i++) {
            if (div_words[0] == "#".repeat(i)) {
                formatDoc("formatblock", "h" + i);
                is_header = i;
            }
        }
        if (!is_header) {
            formatDoc("formatblock", "p");
        }
    });

});
