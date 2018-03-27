import { Component, Prop,Element} from '@stencil/core';
import {CssClassMap} from '../utils';

@Component({
  tag: 'o-content-placeholder-block',
  styleUrl: 'o-content-placeholder-block.css',
  shadow: true
})
export class ContentPlaceholder {
  @Element() el: HTMLElement;

  @Prop() animate: boolean = false;
  @Prop() lines: number = 1;
  @Prop() lineHeight: number = 15;
  @Prop() margin: number = 5;
  @Prop() randomSize: boolean = false;
  @Prop() rounded: boolean = false;


  componentWillLoad() {
    this.el.style.setProperty('--o-content-placeholders-block-height' , `${this.lineHeight}px`);
    this.el.style.setProperty('--o-content-placeholder-block-margin' , `${this.margin}px`);
  }

  render() {

    const size =()=>{
      return this.randomSize && this.lines > 1 ? Math.random() * (100 - 80) + 80 + '%' : '95%';
    }

    const cssClasses : CssClassMap = {
      'o-content-placeholder-block': true,
      'o-content-placeholder-block-rounded': this.rounded,
    }

    return (
      <div>
      {Array.apply(null, Array(this.lines)).map(function(){
          return (
            <div class={cssClasses} style={{width: size()}}>
               {this.animate ? <span class="o-content-placeholder-block-animate"></span> : ''}
            </div>
          );
      }, this)}
      </div>
    );
  }
}
