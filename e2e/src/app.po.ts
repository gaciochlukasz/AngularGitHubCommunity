import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(page: string): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${page}`) as Promise<unknown>;
  }

  getTitleText(titleCss: string): Promise<string> {
    return element(by.className(titleCss)).getText() as Promise<string>;
  }

  getContributorsListButton(): WebElementPromise {
    return element(by.className('contributors-list-button')).getWebElement() as WebElementPromise;
  }

  getMainPageButton(): WebElementPromise {
    return element(by.className('main-page-button')).getWebElement() as WebElementPromise;
  }

  getElementFromTable(row: string): WebElementPromise {
    return element(by.className(row)).getWebElement() as WebElementPromise;
  }
}
