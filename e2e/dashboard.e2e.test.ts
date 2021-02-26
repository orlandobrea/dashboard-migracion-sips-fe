import { version } from '../package.json';

describe('Dashboard', () => {
  before(() => {
    cy.visit('/');
  });

  it('Verificar versiones', () => {
    const MOCK_SERVER_VERSION = '3.4.5';
    cy.contains(`front ${version}`);
    cy.contains(`back ${MOCK_SERVER_VERSION}`);
  });

  it('Verificar titulos servers', () => {
    cy.contains('SERVER01');
    cy.contains('SERVER02');
  });

  it('Verificar tiempos de sync', () => {
    cy.contains('1 h');
    cy.contains('2 hs');
    cy.contains('30 hs');
  });
});
