import { browser, element, Key, by, promise } from 'protractor';
import { HomePage } from '../../page-objects/page-object-list/firsttest.po';
import { defineSupportCode, TableDefinition } from 'cucumber';
import { rgb2hex } from '../../commons/support';

//const chai = require('chai').use(require('chai-as-promised'));
//const expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
  const homepage: HomePage = new HomePage();

  Given('Open First Page of Application.', () => {
    homepage.open(browser.params.EAUrl);
   });

   Then('Get the heading', () => {
     homepage.heading.getText().then((text) => {
       console.log("The heading is :" +text);
     });
   }); 
   Then('Click on the first heading', () =>{
     return homepage.heading.click();
   })

  
});
