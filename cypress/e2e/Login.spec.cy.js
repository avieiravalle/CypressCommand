/// <reference types="cypress" />

import { faker } from "@faker-js/faker"


describe('template spec', () => {
  it('passes', () => {
    cy.Login(faker.name.firstName(), faker.internet.password())
  })
})