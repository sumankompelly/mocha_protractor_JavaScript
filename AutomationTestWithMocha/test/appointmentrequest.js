import { browser, element, by } from "protractor"

var assert = chai.assert;

describe('appointment' , function() {
    it('appointment request',() => {
    browser.get('https://elguntors-stg.salesfloor.net/reggie');
    assert(browser.getTitle().toEqual('El Guntors'));
    var appointmentRequest = element(by.xpath("//a[@id = 'AtAppointmentLink']/h2[contains(.,'Appointment request')]")).click();
    var phone = element(by.xpath("//label[@class = 'global-services__label']/span[contains(.,'Phone')]")).click();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;
     document.write(today);
     var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
     element(by.id("choosenDate")).sendKeys(nextWeek);
     element(by.id('choosenTime')).sendKeys('10 AM')
    element(by.id('name')).sendKeys('suman');
    element(by.id('email')).sendKeys('suman@gmail.com');
    element(by.id('autoSubscribe')).click();
    element(by.id('phone')).sendKeys('5144493882');
    element(by.name('extraInfo')).sendKeys('need to have a appointment');
    element(by.xpath("//button[contains(.,'Send Request')]")).click();
  });   
});