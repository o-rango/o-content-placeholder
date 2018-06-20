/*! Built with http://stenciljs.com */
const { h } = window.OContentPlaceholder;

class ContentPlaceholderImg {
    constructor() {
        this.animation = false;
        this.format = 'square';
        this.size = 55;
    }
    componentWillLoad() {
        this.el.style.setProperty('--o-content-placeholders-img-size', `${this.size}px`);
    }
    render() {
        const cssStyles = {
            'o-content-placeholder-img': true,
            'o-content-placeholder-img-circle': this.format === 'circle'
        };
        return (h("div", { class: cssStyles }, this.animation ? h("span", { class: "o-content-placeholder-img-animate" }) : ''));
    }
    static get is() { return "o-content-placeholder-img"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "animation": {
            "type": Boolean,
            "attr": "animation"
        },
        "el": {
            "elementRef": true
        },
        "format": {
            "type": String,
            "attr": "format"
        },
        "size": {
            "type": Number,
            "attr": "size"
        }
    }; }
    static get style() { return ":host{\n\n  --o-content-placeholders-img-size : 55px;\n  --o-content-placeholder-img-margin : 5px;\n  --o-content-placeholder-img-color-primary : #ebebeb;\n  --o-content-placeholder-img-color-secondary : #5b5b5b;\n}\n\n\n.o-content-placeholder-img {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  margin:  var(--o-content-placeholder-img-margin);\n  height: var(--o-content-placeholders-img-size);\n  width: var(--o-content-placeholders-img-size);\n  background-color : var(--o-content-placeholder-img-color-primary);\n  display: block;\n }\n\n.o-content-placeholder-img-animate {\n  position: absolute;\n  display: block;\n  height: inherit;\n  left: 0;\n  top: 0;\n  width:70%;\n  will-change: transform;\n  -webkit-animation: animatePlaceholder 1.4s linear infinite;\n  animation: animatePlaceholder 1.4s linear infinite;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(172, 172, 172, 0)),color-stop(50%, rgba(219,219,219,0.2)),to(rgba(233, 233, 233, 0.2)));\n  background: linear-gradient(to right, rgba(172, 172, 172, 0) 0%,rgba(219,219,219,0.2) 50%,rgba(233, 233, 233, 0.2) 100%);\n}\n\n.o-content-placeholder-img-circle {\n  border-radius:  50%;\n}\n\n\n\@-webkit-keyframes animatePlaceholder {\n  0% {\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  100% {\n    -webkit-transform: translateX(300%);\n    transform: translateX(300%);\n  }\n}\n\n\n\@keyframes animatePlaceholder {\n  0% {\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  100% {\n    -webkit-transform: translateX(300%);\n    transform: translateX(300%);\n  }\n}"; }
}

export { ContentPlaceholderImg as OContentPlaceholderImg };
