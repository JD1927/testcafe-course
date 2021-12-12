import { t, Selector } from 'testcafe';

export async function login(username, password) {
	// Arrange
	const signInButton = Selector('#signin_button');
	const usernameInput = Selector('#user_login');
	const passwordInput = Selector('#user_password');
	const submitButton = Selector('.btn.btn-primary');

	// Act
	await t.click(signInButton);
	await t.typeText(usernameInput, username, { paste: true });
	await t.typeText(passwordInput, password, { paste: true });
	await t.click(submitButton);
}
