/*! Built with http://stenciljs.com */
const { h } = window.OContentPlaceholder;

class ContentPlaceholder {
    constructor() {
        this.animation = false;
        this.lines = 1;
        this.lineHeight = 15;
        this.margin = 5;
        this.randomSize = false;
        this.rounded = false;
    }
    componentWillLoad() {
        this.el.style.setProperty('--o-content-placeholders-block-height', `${this.lineHeight}px`);
        this.el.style.setProperty('--o-content-placeholder-block-margin', `${this.margin}px`);
    }
    render() {
        const size = () => {
            return this.randomSize && this.lines > 1 ? Math.random() * (100 - 80) + 80 + '%' : '95%';
        };
        const cssClasses = {
            'o-content-placeholder-block': true,
            'o-content-placeholder-block-rounded': this.rounded,
        };
        return (h("div", null, Array.apply(null, Array(this.lines)).map(function () {
            return (h("div", { class: cssClasses, style: { width: size() } }, this.animation ? h("span", { class: "o-content-placeholder-block-animate" }) : ''));
        }, this)));
    }
    static get is() { return "o-content-placeholder-block"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "animation": {
            "type": Boolean,
            "attr": "animation"
        },
        "el": {
            "elementRef": true
        },
        "lineHeight": {
            "type": Number,
            "attr": "line-height"
        },
        "lines": {
            "type": Number,
            "attr": "lines"
        },
        "margin": {
            "type": Number,
            "attr": "margin"
        },
        "randomSize": {
            "type": Boolean,
            "attr": "random-size"
        },
        "rounded": {
            "type": Boolean,
            "attr": "rounded"
        }
    }; }
    static get style() { return "[data-o-content-placeholder-block-host]{\n  --o-content-placeholders-block-width : 100%;\n  --o-content-placeholders-block-height : 15px;\n  --o-content-placeholder-block-margin : 5px;\n  --o-content-placeholder-block-color-primary : #ebebeb;\n  --o-content-placeholder-block-color-secondary : #5b5b5b;\n}\n\n.o-content-placeholder-block[data-o-content-placeholder-block] {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  margin:  var(--o-content-placeholder-block-margin);\n  height: var( --o-content-placeholders-block-height);\n  width: var(--o-content-placeholders-block-width);\n  background-color : var(--o-content-placeholder-block-color-primary);\n  display: block;\n }\n\n.o-content-placeholder-block-animate[data-o-content-placeholder-block] {\n  position: absolute;\n  display: block;\n  height: inherit;\n  left: 0;\n  top: 0;\n  width:70%;\n  will-change: transform;\n  -webkit-animation: animatePlaceholder 1.4s linear infinite;\n  animation: animatePlaceholder 1.4s linear infinite;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(172, 172, 172, 0)),color-stop(50%, rgba(219,219,219,0.2)),to(rgba(233, 233, 233, 0.2)));\n  background: linear-gradient(to right, rgba(172, 172, 172, 0) 0%,rgba(219,219,219,0.2) 50%,rgba(233, 233, 233, 0.2) 100%);\n}\n\n.o-content-placeholder-block-rounded[data-o-content-placeholder-block] {\n  border-radius: 0.5em;\n}\n\n\@-webkit-keyframes animatePlaceholder {\n  0% {\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  100% {\n    -webkit-transform: translateX(300%);\n    transform: translateX(300%);\n  }\n}\n\n\@keyframes animatePlaceholder {\n  0% {\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  100% {\n    -webkit-transform: translateX(300%);\n    transform: translateX(300%);\n  }\n}"; }
}

export { ContentPlaceholder as OContentPlaceholderBlock };
