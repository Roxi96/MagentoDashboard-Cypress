describe("Home page test cases", () => {
  it("Landing Homepage", () => {
    cy.visit("/");
    cy.url().should("eq", "https://magento.softwaretestingboard.com/");
  });

  it("Luma Logo should be visible", () => {
    cy.visit("/");
    cy.get("a.logo").should("be.visible"); //Selected an <a> tag with a class named logo
  });

  it("search input should be visible", () => {
    cy.visit("/");
    cy.get("#search").should("be.visible");
  });

  it("Navigation items should have text", () => {
    cy.visit("/");
    // Select the <ul> element with role="menu"
    cy.get('ul[role="menu"]').each((menu) => {
      // For each <ul> element, find its children <li> elements
      cy.wrap(menu)
        .find("li")
        .each((listItem) => {
          // Wait for the text to exist and assert its length
          cy.wrap(listItem).should(($li) => {
            expect($li.text().trim().length).to.be.gt(1);
          });
        });
    });
  });
});
