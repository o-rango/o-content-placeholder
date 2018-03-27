import { Component, Prop ,Element } from '@stencil/core';
import {CssClassMap} from '../utils';
@Component({
  tag: 'o-content-placeholder-img',
  styleUrl: 'o-content-placeholder-img.css',
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
      'o-content-placeholder-img-circle' : this.format === 'circle'
    }

    return (
       <div class={cssStyles}>
         {this.animate ? <span class="o-content-placeholder-img-animate"></span> : ''}
       </div>
    );
  }
}
