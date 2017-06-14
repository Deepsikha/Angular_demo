import { MaterialDesignPage } from './app.po';

describe('material-design App', () => {
  let page: MaterialDesignPage;

  beforeEach(() => {
    page = new MaterialDesignPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
