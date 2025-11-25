console.log('localAI.js carregado com sucesso');

Cypress.Commands.add("localModelFind", (description) => {
  cy.window({ timeout: 120000 }).then({ timeout: 300000 }, (win) => {
    if (!win.localAI) {
      throw new Error("window.localAI não encontrada. O script da IA não carregou.");
    }

    cy.log("🤖 Iniciando AI model...");
    
    // Return the promise directly - Cypress will wait for it
    return Cypress.Promise.resolve(win.localAI.initialize())
      .timeout(300000, 'AI initialization timed out after 5 minutes')
      .then(() => {
        cy.log("✓ AI model pronto!");
        
        return cy.document().then((doc) => {
          const html = doc.documentElement.outerHTML;
          
          cy.log(`🔍 Consultando AI: "${description}"`);
          
          // Call AI and return the promise
          return Cypress.Promise.resolve(win.localAI(description, html))
            .timeout(60000, 'AI selector generation timed out')
            .then((selector) => {
              cy.log(`✓ IA sugeriu: ${selector}`);
              return cy.get(selector);
            });
        });
      });
  });
});
