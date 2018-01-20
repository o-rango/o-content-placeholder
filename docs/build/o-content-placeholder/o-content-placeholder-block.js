/*! Built with http://stenciljs.com */

window['o-content-placeholder'].loadStyles("o-content-placeholder-block",":host {\n  --o-content-placeholders-block-width: 100%;\n  --o-content-placeholders-block-height: 15px;\n  --o-content-placeholder-block-margin: 5px;\n  --o-content-placeholder-block-color-primary: #ebebeb;\n  --o-content-placeholder-block-color-secundary: #5b5b5b;\n}\n\n:host .o-content-placeholder-block {\n  pointer-events: none;\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  margin: var(--o-content-placeholder-block-margin);\n  height: var(--o-content-placeholders-block-height);\n  width: var(--o-content-placeholders-block-width);\n  background-color: var(--o-content-placeholder-block-color-primary);\n  display: block;\n}\n\n:host .o-content-placeholder-block-animate {\n  position: absolute;\n  display: block;\n  height: inherit;\n  left: 0;\n  top: 0;\n  width: 70%;\n  will-change: transform;\n  animation: animatePlaceholder 1.2s linear infinite;\n  background: linear-gradient(to right, rgba(15, 15, 15, 0) 0%, rgba(219, 219, 219, 0.5) 50%, rgba(255, 255, 255, 0) 100%);\n}\n\n:host .o-content-placeholder-block-rounded {\n  border-radius: 0.5em;\n}\n\n\@keyframes animatePlaceholder {\n  0% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(300%);\n  }\n}\n:host(.hydrated){visibility:inherit !important}","o-content-placeholder-img",":host {\n  --o-content-placeholders-img-size: 55px;\n  --o-content-placeholder-img-margin: 5px;\n  --o-content-placeholder-img-color-primary: #ebebeb;\n  --o-content-placeholder-img-color-secundary: #5b5b5b;\n}\n\n:host .o-content-placeholder-img {\n  pointer-events: none;\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  margin: var(--o-content-placeholder-img-margin);\n  height: var(--o-content-placeholders-img-size);\n  width: var(--o-content-placeholders-img-size);\n  background-color: var(--o-content-placeholder-img-color-primary);\n  display: block;\n}\n\n:host .o-content-placeholder-img-animate {\n  position: absolute;\n  display: block;\n  height: inherit;\n  left: 0;\n  top: 0;\n  width: 70%;\n  will-change: transform;\n  animation: animatePlaceholder 1.2s linear infinite;\n  background: linear-gradient(to right, rgba(15, 15, 15, 0) 0%, rgba(219, 219, 219, 0.5) 50%, rgba(255, 255, 255, 0) 100%);\n}\n\n:host .o-content-placeholder-img-circle {\n  border-radius: 50%;\n}\n\n\@keyframes animatePlaceholder {\n  0% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(300%);\n  }\n}\n:host(.hydrated){visibility:inherit !important}");
window['o-content-placeholder'].loadComponents(

/**** module id (dev mode) ****/
"o-content-placeholder-block",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class ContentPlaceholder {
    constructor() {
        this.animate = false;
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
            return (h("div", { class: cssClasses, style: { width: size() } }, this.animate ? h("span", { class: "o-content-placeholder-block-animate" }) : ''));
        }, this)));
    }
}

class ContentPlaceholderImg {
    constructor() {
        this.animate = false;
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
        return (h("div", { class: cssStyles }, this.animate ? h("span", { class: "o-content-placeholder-img-animate" }) : ''));
    }
}

exports['o-content-placeholder-block'] = ContentPlaceholder;
exports['o-content-placeholder-img'] = ContentPlaceholderImg;
},


/***************** o-content-placeholder-block *****************/
[
/** o-content-placeholder-block: tag **/
"o-content-placeholder-block",

/** o-content-placeholder-block: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "lineHeight", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "lines", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "margin", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "randomSize", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "rounded", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** o-content-placeholder-block: host **/
{}

],

/***************** o-content-placeholder-img *****************/
[
/** o-content-placeholder-img: tag **/
"o-content-placeholder-img",

/** o-content-placeholder-img: members **/
[
  [ "animate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "format", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "size", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ]
],

/** o-content-placeholder-img: host **/
{}

]
);