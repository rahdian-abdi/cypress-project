/// <reference types="cypress"/>
import {LoginPage} from './pages/login_page'

const loginPage = new LoginPage();

describe('Test Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('Login Attemp 1', () => {
        
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();  
    })
    
    it('Login Attemp 2', () => {
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();  
    })
})