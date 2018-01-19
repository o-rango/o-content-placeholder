import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'o-content-placeholder-head',
  styleUrl: 'o-content-placeholder-head.scss',
  shadow: true
})
export class ContentPlaceholder {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
