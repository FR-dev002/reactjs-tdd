describe("smoke test", () => {
   it("make sure the welcome message", () => {
      cy.visit("http://localhost:3000/")
         .contains("Hello World");
   })
});