import { Pesc.Bc.Vt17.CliPage } from './app.po';

describe('pesc.bc.vt17.cli App', () => {
  let page: Pesc.Bc.Vt17.CliPage;

  beforeEach(() => {
    page = new Pesc.Bc.Vt17.CliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
