hljs.initHighlightingOnLoad();

var toolbarOptions = [

  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  // [{ 'font': [] }],

  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

  ['link', 'image', 'video'],

  [{'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  ['blockquote', 'code-block', 'formula'],

  ['clean']                                         // remove formatting button
];

Quill.register('modules/markdownShortcuts', MarkdownShortcuts);

var quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        syntax: true,
        toolbar: toolbarOptions,
        markdownShortcuts: {},
        "emoji-shortname": true,
    },
});
