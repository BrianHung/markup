// Highlight settings

hljs.initHighlightingOnLoad();

// Quill editor settings

var toolbarOptions = [

  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  // [{ 'size': ['small', false, 'large', 'huge'] }],
  // [{ 'font': [] }],

  ['bold', 'italic', 'underline', 'strike'],
  [{ 'color': [] }, { 'background': [] }],

  ['link', 'image', 'video'],

  [{'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  [{ 'indent': '-1'}, { 'indent': '+1' }],
  ['blockquote', 'code-block', 'formula'],

  ['clean']
];


Quill.register('modules/MarkdownShortcuts', MarkdownShortcuts);

var quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Compose an epic...',
    modules: {
        syntax: true,
        toolbar: toolbarOptions,
        MarkdownShortcuts: true,
        imageResize: true,
        "emoji-shortname": true,
        magicUrl: true
    },
});
