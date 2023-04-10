import React from 'react'
import Hotels from './Hotels'

describe('<Hotels />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Hotels />)
  })
})