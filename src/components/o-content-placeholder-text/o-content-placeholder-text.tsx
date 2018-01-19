import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'o-content-placeholder-text',
  styleUrl: 'o-content-placeholder-text.scss',
  shadow: true
})
export class ContentPlaceholder {

  @Prop() lines: number = 4;

  render() {


    return (
      <div>
      {Array.apply(null, Array(this.lines)).map(function(){
          return (
            <div class="o-content-placeholder-text-line" />
          );
      }, this)}
      </div>
    );
  }
}
