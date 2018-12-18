document.addEventListener("DOMContentLoaded", function(event) {

    initDoc();

    document.getElementById("btn-undo").addEventListener("click", function() {
        formatDoc('undo');
    });

    document.getElementById("btn-redo").addEventListener("click", function() {
        formatDoc('redo');
    });

    document.getElementById("btn-prnt").addEventListener("click", function() {
        printDoc();
    });

    document.getElementById("btn-bold").addEventListener("click", function() {
        formatDoc('bold');
    });

    document.getElementById("btn-ital").addEventListener("click", function() {
        formatDoc('italic');
    });

    document.getElementById("btn-undr").addEventListener("click", function() {
        formatDoc('underline');
    });

    document.getElementById("btn-strk").addEventListener("click", function() {
        formatDoc('strikeThrough');
    });

    document.getElementById("btn-link").addEventListener("click", function() {
        var sLnk = prompt('Write the URL here','https:\/\/');
        if (sLnk && sLnk!= '' && sLnk != 'https://') {
            formatDoc('createlink', sLnk)
        };
    });

    document.getElementById("btn-unlk").addEventListener("click", function() {
        formatDoc('unlink');
    });

    document.getElementById("btn-imge").addEventListener("click", function() {
        var sLnk = prompt('Write the URL here','https:\/\/');
        if (sLnk && sLnk!= '' && sLnk != 'https://') {
            formatDoc('insertImage', sLnk)
        };
    });

    document.getElementById("btn-left").addEventListener("click", function() {
        formatDoc('justifyleft');
    });

    document.getElementById("btn-cntr").addEventListener("click", function() {
        formatDoc('justifycenter');
    });

    document.getElementById("btn-rght").addEventListener("click", function() {
        formatDoc('justifyright');
    });

    document.getElementById("btn-nmbr").addEventListener("click", function() {
        formatDoc('insertorderedlist');
    });

    document.getElementById("btn-dotd").addEventListener("click", function() {
        formatDoc('insertunorderedlist');
    });

    document.getElementById("btn-aint").addEventListener("click", function() {
        formatDoc('indent');
    });

    document.getElementById("btn-dint").addEventListener("click", function() {
        formatDoc('outdent');
    });

    document.getElementById("btn-rfmt").addEventListener("click", function() {
        formatDoc('removeFormat');
    });

    document.getElementById("btn-fmtd").addEventListener("change", function() {
        formatDoc('formatblock', this[this.selectedIndex].value);
        this.selectedIndex = this.selectedIndex;
    });

    document.getElementById("btn-font").addEventListener("change", function() {
        formatDoc('fontname',this[this.selectedIndex].value);
        this.selectedIndex = this.selectedIndex;
    });

    document.getElementById("btn-size").addEventListener("change", function() {
        formatDoc('fontsize',this[this.selectedIndex].value);
        this.selectedIndex = this.selectedIndex;
    });

    document.getElementById("btn-fclr").addEventListener("change", function() {
        formatDoc('forecolor', this[this.selectedIndex].value);
        this.selectedIndex = this.selectedIndex;
    });

    document.getElementById("btn-bclr").addEventListener("change", function() {
        formatDoc('backcolor', this[this.selectedIndex].value);
        this.selectedIndex = this.selectedIndex;
    });
});
