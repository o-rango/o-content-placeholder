import { flush, render } from '@stencil/core/testing';
import { ContentPlaceholder } from './o-content-placeholder-block';

describe('o-content-placeholder-block', () => {
  it('should build', () => {
    expect(new ContentPlaceholder()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [ContentPlaceholder],
        html: '<o-content-placeholder-block></o-content-placeholder-block>'
      });
    });
  });
});
