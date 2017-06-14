import { MaterialDesignPage } from './app.po';

describe('material-design App', function() {
  let page: MaterialDesignPage;

  beforeEach(() => {
    page = new MaterialDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
