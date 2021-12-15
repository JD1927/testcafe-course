import { Selector } from 'testcafe';
import Navbar from './../page-objects/components/Navbar';
import LoginPage from './../page-objects/pages/LoginPage';
import ForgottenPasswordPage from './../page-objects/pages/ForgottenPasswordPage';

const navbar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

// prettier-ignore
fixture`Send forgotten password test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can request new password to be send to his email', async t => {
	// Arrange
	const emailRandom = 'email@random.com';

	// Act
	await t.click(navbar.signInButton);
	await t.click(loginPage.linkToForgottenPassword);
	await t.typeText(forgottenPasswordPage.emailInput, emailRandom, {
		paste: true,
		replace: true,
	});
	await t.pressKey('enter');

	// Assert
	await t
		.expect(forgottenPasswordPage.successMessage.innerText)
		.contains(emailRandom);
	await t.expect(forgottenPasswordPage.emailInput.exists).notOk();
});
