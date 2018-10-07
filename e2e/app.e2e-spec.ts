import { NgTwitterPage } from './app.po';

describe('ng-twitter App', function() {
  let page: NgTwitterPage;

  beforeEach(() => {
    page = new NgTwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
