import { browser, element, by } from "protractor"

var assert = chai.assert;

describe('appointment' , function() {
    it('appointment request',() => {
    browser.get('https://elguntors-stg.salesfloor.net/reggie');
    assert(browser.getTitle().toEqual('El Guntors'));
    var appointmentRequest = element(by.xpath("//a[@id = 'AtAppointmentLink']/h2[contains(.,'Appointment request')]")).click();
    var phone = element(by.xpath("//label[@class = 'global-services__label']/span[contains(.,'Phone')]")).click();
    element(by.id('name')).sendKeys('suman');
    element(by.id('email')).sendKeys('suman@gmail.com');
    element(by.id('autoSubscribe')).click();
    element(by.id('phone')).sendKeys('5144493882');
    element(by.name('extraInfo')).sendKeys('need to have a appointment');
    element(by.xpath("//button[contains(.,'Send Request')]")).click();
  });   
});