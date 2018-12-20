document.addEventListener("DOMContentLoaded", function() {

    chrome.storage.sync.get(['value'], function(query) {
        // Notify that we saved.
        document.getElementById("editor").innerHTML = query.value;
    });

    document.getElementById("editor").addEventListener("input", function() {

        // Get a value saved in a form.
        var textValue = document.getElementById("editor").innerHTML;

        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': textValue}, function() {

            // Notify that we saved.
            console.log("edits have been saved!");
            chrome.storage.sync.get(function(result){console.log(result)})
        });

    });


});
