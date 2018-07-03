import { AngRoutingsAppPage } from './app.po';

describe('ang-routings-app App', () => {
  let page: AngRoutingsAppPage;

  beforeEach(() => {
    page = new AngRoutingsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
