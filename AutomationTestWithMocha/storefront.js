import { browser, element, by } from "protractor"

var assert = chai.assert;

describe('storefront' , function() {
    it( 'call URL' ,() => {
        browser.get('https://elguntors-stg.salesfloor.net/reggie');
       assert(browser.getTitle().toEqual('El Guntors'));
        var liveChartStatus = element(by.xpath("//div[@id = 'AtChatStatus']"));
        assert(liveChartStatus.getText().toEqual('Unavailable'));
        var liveChartStatus = element(by.xpath("//div[@id = 'AtChatStatus']"));
        assert(liveChartStatus.getCssValue('color').toEqual('ee0c0c'));
    });
});