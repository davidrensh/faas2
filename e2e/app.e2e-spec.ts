import { Faas2Page } from './app.po';

describe('faas2 App', function() {
  let page: Faas2Page;

  beforeEach(() => {
    page = new Faas2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
