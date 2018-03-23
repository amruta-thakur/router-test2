import { ThirdCliAppPage } from './app.po';

describe('third-cli-app App', function() {
  let page: ThirdCliAppPage;

  beforeEach(() => {
    page = new ThirdCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
