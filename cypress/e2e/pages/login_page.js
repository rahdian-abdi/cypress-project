export class LoginPage {
    userNameTextBox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    passwordTextBox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginButton = '.oxd-button';

    enterUsername(userName) {
        cy.get(this.userNameTextBox).type(userName)
    }

    enterPassword(password) {
        cy.get(this.passwordTextBox).type(password)

    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }

    login() {

    }
}