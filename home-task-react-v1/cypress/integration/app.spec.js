describe('first cypress test', () => {
    it("can visible search string", () => {
        cy.visit("/");
        cy.get("header");
    });

    it("can change search param", () => {
        cy.get('input[class="search-input_input"]').type("one").should("have.value", "one");
        cy.get('button[class="search-input_button"]').click();
        cy.visit("/search/one");
    });

    it("can open details movie", () => {
        cy.get('img[class="card-poster_image"]').first().click();
        cy.get('div[class="wrapper-details_movie-card"]');
    });
})
