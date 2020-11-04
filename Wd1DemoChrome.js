let {Builder} =require('selenium-webdriver');

require('chromedriver');

(async function () {
    
    let driver = await new Builder().forBrowser("chrome").build();
        
    await driver.get("http://google.com");
    let title = await driver.getTitle();
    console.log(title);
    await driver.quit();

})();