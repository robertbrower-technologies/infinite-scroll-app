import { InfiniteScrollAppPage } from './app.po';

describe('infinite-scroll-app App', function() {
  let page: InfiniteScrollAppPage;

  beforeEach(() => {
    page = new InfiniteScrollAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
