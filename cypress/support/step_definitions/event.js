import { When } from '@badeball/cypress-cucumber-preprocessor';
import nunjucks from 'nunjucks';

When('I click on {string}', (selector) => cy.get(selector).realClick({
  button: 'left',
  position: 'center'
}));

When('I click on {string} of {string}', (position, selector) => cy.get(selector).realClick({
  button: 'left',
  position
}));

When('I drag {string} onto {string}', (templateOriginSelector, templateDestinationSelector) => {
  const originSelector = nunjucks.renderString(templateOriginSelector, cy.context);
  const destinationSelector = nunjucks.renderString(templateDestinationSelector, cy.context);

  cy.drag(originSelector, destinationSelector);
});

When('I drag {string} of {int},{int}', (templateSelector, x, y) => {
  const selector = nunjucks.renderString(templateSelector, cy.context);

  cy.drag(selector, { x, y });
});
