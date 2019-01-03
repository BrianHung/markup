const Embed   = Quill.import("blots/embed");
const Formula = Quill.import('modules/formula');

class displayFormulaBlot extends Embed {
  static create(value) {
    let node = super.create(value);
    if (typeof value === 'string') {
      window.katex.render(value, node, {
        throwOnError: false,
        errorColor: '#f00',
        displayMode: true
      });
      node.setAttribute('data-value', value);
    }
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }
}
displayFormulaBlot.blotName = 'displayFormula';
displayFormulaBlot.className = 'ql-formula';
displayFormulaBlot.tagName = 'SPAN';


class displayFormula extends Formula {
  static register() {
    Quill.register(displayFormulaBlot, true);
  }

  constructor() {
    super();
    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
  }
}

Quill.register('embed/displayFormulaBlot', displayFormulaBlot, true);
Quill.register('modules/displayFormula', displayFormula, true);
