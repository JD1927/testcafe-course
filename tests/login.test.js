import { Selector } from 'testcafe';
import Navbar from './../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';

const navbar = new Navbar();
const loginPage = new LoginPage();

// prettier-ignore
fixture`Login test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User cannot login with invalid credentials', async t => {
	// Arrange
	const expectedErrorMessage = 'Login and/or password are wrong.';
	// Act
	await t.click(navbar.signInButton);
	await loginPage.loginToApp('invalid username', 'invalid password');
	// Assert
	await t
		.expect(loginPage.errorMessage.innerText)
		.contains(expectedErrorMessage);
});

test('User can login into application', async t => {
	// Arrange
	const accountSummaryTab = Selector('#account_summary_tab');

	// Act
	await t.click(navbar.signInButton);
	await loginPage.loginToApp('username', 'password');
	await t.expect(accountSummaryTab.exists).ok();
	await t.expect(loginPage.loginForm.exists).notOk();

	await t.click(navbar.userDropDown);
	await t.click(navbar.logoutButton);
	// Assert
	await t.expect(navbar.logoutButton.exists).notOk();
	await t.expect(navbar.signInButton.exists).ok();
});
