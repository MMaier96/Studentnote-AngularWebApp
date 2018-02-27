import { TPage } from './app.po';

describe('t App', () => {
  let page: TPage;

  beforeEach(() => {
    page = new TPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
