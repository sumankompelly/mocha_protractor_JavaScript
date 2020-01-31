import { browser, element, by } from "protractor"

var assert = chai.assert;

describe('regualr updates' , function() {
 it('signup',() => {
  browser.get('https://elguntors-stg.salesfloor.net/reggie');
  assert(browser.getTitle().toEqual('El Guntors'));
  element(by.xpath("//li[@class = 'jumbotron__social-list__item']/a[contains(.,'Get my updates')]")).click();
  element(by.id('newsletterInscEmail')).sendKeys('suman@gmail.com');
  element(by.xpath("//button[contains(.,'Send Request')]")).click();  
    });   
})