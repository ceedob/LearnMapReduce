import { LearnMapReducePage } from './app.po';

describe('learn-map-reduce App', () => {
  let page: LearnMapReducePage;

  beforeEach(() => {
    page = new LearnMapReducePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
