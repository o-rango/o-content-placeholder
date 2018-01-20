import { flush, render } from '@stencil/core/testing';
import { ContentPlaceholderImg } from './o-content-placeholder-img';

describe('o-content-placeholder-img', () => {
  it('should build', () => {
    expect(new ContentPlaceholderImg()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [ContentPlaceholderImg],
        html: '<o-content-placeholder-img></o-content-placeholder-img>'
      });
    });
  });
});
