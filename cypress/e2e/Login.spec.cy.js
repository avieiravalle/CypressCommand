/// <reference types="cypress" />

import { faker } from "@faker-js/faker"


describe('Login', () => {
  it('Login Faker', () => {
    cy.Login(faker.name.firstName(), faker.internet.password())
  })
})