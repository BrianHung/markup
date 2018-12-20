document.addEventListener("DOMContentLoaded", function() {

    var editor = document.getElementsByClassName("ql-editor")[0];

    chrome.storage.sync.get(['value'], function(query) {
        // Notify that we saved.
        editor.innerHTML = query.value;
    });

    document.getElementById("editor").addEventListener("input", function() {

        // Get a value saved in a form.
        var editorValue = editor.innerHTML;

        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': editorValue}, function() {

            // Notify that we saved.
            console.log("edits have been saved!");
            chrome.storage.sync.get(function(result){console.log(result)})
        });

    });


});
