


describe("API automation test suite", ()=>{
it('GET all employess test', () => {
    cy.request({
        method: "GET",
        url: "http://127.0.0.1:5500/login.html"
    }).as('getAllEmployeesRequest')

    cy.get('@getAllEmployeesRequest').then(response =>{
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
    })
});

it('POST all employees test', () => {
    cy.request({
        method: "POST",
        url: "http://127.0.0.1:5500/login.html",
        body: {
            "dob":"",
            "email":"",
            "firstname":"",
            "id":"",
            "lastname":""
        }
    }).as('postAllEmployeesRequest')

    cy.get('@postAllEmployeesRequest').then(response =>{
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
    })

});

})