import { Component, Prop , CssClassMap , Element } from '@stencil/core';

@Component({
  tag: 'o-content-placeholder-img',
  styleUrl: 'o-content-placeholder-img.scss',
  shadow: true
})
export class ContentPlaceholderImg {
  @Element() el: HTMLElement;

  @Prop() animate: boolean = false;
  @Prop() format: 'circle' | 'square' = 'square';
  @Prop() size: number = 55;

  componentWillLoad() {
    this.el.style.setProperty('--o-content-placeholders-img-size' , `${this.size}px`);
  }

  render() {
    const cssStyles : CssClassMap = {
      'o-content-placeholder-img' : true,
      'o-content-placeholder-img-animate' : this.animate,
      'o-content-placeholder-img-circle' : this.format === 'circle'
    }
    return (
       <div class={cssStyles}/>
    );
  }
}
