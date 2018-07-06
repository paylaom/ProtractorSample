import { browser, by, element, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class HomePage {

   public heading: ElementFinder;
  

  constructor() {
    
 this.heading = element(by.xpath('//*[@class=\'well hoverwell thumbnail\']/h2[contains(text(),\'Selenium Framework development\')]'));
 
  }

  open(page: string): promise.Promise<any> {
    return browser.get(page);
  }

 }
