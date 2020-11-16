import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('');
    expect(page.getTitleText('mat-card-title')).toEqual('Welcome page');
  });

  it('should open contributors list page', async () => {
    await page.getContributorsListButton().click();
    await expect(page.getTitleText('contributors-list_header')).toEqual('Contributors list');
  });

  it('should open user details page', async () => {
    await page.getElementFromTable('contributors-list-row-0').click();
    await expect(page.getTitleText('details-page_header')).toEqual('User details');
  });

  it('should open repository page', async () => {
    await page.getElementFromTable('user-repositories-list-row-0').click();
    await expect(page.getTitleText('details-page_header')).toEqual('Repository details');
  });

  it('should open again user details page', async () => {
    await page.getElementFromTable('assignable-users-list-row-0').click();
    await expect(page.getTitleText('details-page_header')).toEqual('User details');
  });

  it('should open main page', async () => {
    await page.getMainPageButton().click();
    await expect(page.getTitleText('mat-card-title')).toEqual('Welcome page');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
