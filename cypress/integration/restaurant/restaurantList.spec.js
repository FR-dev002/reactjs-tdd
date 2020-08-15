describe("Restaurant List", () => {
  it("Display restaurant in the list", () => {
    // const restaurantName = "Fikri";

    cy.visit("http://localhost:3000/");

    cy.get('[data-test="newRestaurantName"]').type("LOREM");

    
    cy.get('[data-test="saveNewRestaurant"]').click();
    
    // TODO menampilkan alert
    // cy.on('window:alert', (str) => {
    //   expect(str).to.equal(1)
    // })

    cy.get('p').contains('LOREM');
  });
});
