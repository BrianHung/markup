var headTags = ["H1", "H2", "H3", "H4", "H5", "H6"];
document.querySelector('body').addEventListener('click', function(event) {
    var targetTag = event.target.tagName;

    console.log(event.offsetX, event.target.offsetWidth);

    if (event.offsetX < 42 && headTags.includes(targetTag)) {

        console.log(targetTag);
        var higherTags = headTags.slice(0, headTags.indexOf(targetTag) + 1)

        var currentElement = event.target.nextElementSibling;
        if (currentElement) {

            var displayStyle = "block";
            if (currentElement.style.display == "block") {
                displayStyle = "none";
            }

        	while (currentElement && !higherTags.includes(currentElement.tagName)) {
                currentElement.style.display = displayStyle;
                currentElement = currentElement.nextElementSibling;
            }
        }

    }
});
