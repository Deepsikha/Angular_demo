import { CRUDPage } from './app.po';

describe('crud App', function() {
  let page: CRUDPage;

  beforeEach(() => {
    page = new CRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
