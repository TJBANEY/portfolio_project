import { PortfolioProjectPage } from './app.po';

describe('portfolio-project App', function() {
  let page: PortfolioProjectPage;

  beforeEach(() => {
    page = new PortfolioProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
