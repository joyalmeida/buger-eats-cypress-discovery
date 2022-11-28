import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => { //Isso é a Suite do nosso teste

/*     let deliver

    beforeEach(() => {
        cy.fixture('deliver').then((response) => {
            deliver = response
        })
    }) */
    
    it('User should be deliver', () => { //Isso é um caso de teste individual
        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', () => { //Isso é um caso de teste individual
        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessage('Oops! CPF inválido')
    })

    it('Incorrect email', () => { //Isso é um caso de teste individual
        var deliver = signupFactory.deliver()
        
        deliver.email = 'user.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessage('Oops! Email com formato inválido.')
    })

    context('Required fields', () => {
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'deliver_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
        ]

        before(() => {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach((msg) => {
            it(`${msg.field} is required`, () => {
                signupPage.alertMessage(msg.output)
            })
        })
    })
})