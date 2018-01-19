import { Component, Prop  , CssClassMap} from '@stencil/core';

@Component({
  tag: 'o-content-placeholder',
  styleUrl: 'o-content-placeholder.scss',
  shadow: true
})
export class ContentPlaceholder {

  @Prop() rounded: boolean = false;
  @Prop() centered: boolean = false;
  @Prop() animated: boolean = false;
  @Prop() active: boolean = true;

  render() {

    const cssClasses : CssClassMap = {
        'o-content-placeholders': true,
        'o-content-placeholders-is-rounded': this.rounded,
        'o-content-placeholders-is-centered': this.centered,
        'o-content-placeholders-is-animated': this.animated,
    }

    return (
      <div class={cssClasses}>
        <slot/>
      </div>
    );
  }
}
