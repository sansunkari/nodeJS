let {Builder} =require('selenium-webdriver');
let {installDriver} =require('ms-chromium-edge-driver');
let edge =require('selenium-webdriver/edge');


(async function () {
    const edgePaths = await installDriver();
    const edgeOptions = new edge.Options();
    edgeOptions.setEdgeChromium(true);
    edgeOptions.setBinaryPath(edgePaths.browserPath);
    
    let driver = await new Builder().forBrowser("MicrosoftEdge").setEdgeOptions(edgeOptions)
        .setEdgeService(new edge.ServiceBuilder(edgePaths.driverPath))
        .build();
        
    await driver.get("http://google.com");
    let title = await driver.getTitle();
    console.log(title);
    await driver.quit();

})();