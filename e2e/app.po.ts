import { browser, by, element } from 'protractor';

export class Pesc.Bc.Vt17.CliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
