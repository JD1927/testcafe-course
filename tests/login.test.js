import { Selector } from 'testcafe';
import { login } from '../helper';

// prettier-ignore
fixture`Login test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User cannot login with invalid credentials', async t => {
	await login('invalid username', 'invalid password');

	const errorMessage = Selector('.alert.alert-error').innerText;
	await t.expect(errorMessage).contains('Login and/or password are wrong.');
});

test('User can login into application', async t => {
	await login('username', 'password');

	const accountSummaryTab = Selector('#account_summary_tab');
	await t.expect(accountSummaryTab.exists).ok();

	const userDropDown = Selector('.icon-user');
	await t.click(userDropDown);

	const logoutButton = Selector('#logout_link');
	await t.click(logoutButton);

	const signInButton = Selector('#signin_button');
	await t.expect(logoutButton.exists).notOk();
	await t.expect(signInButton.exists).ok();
});
