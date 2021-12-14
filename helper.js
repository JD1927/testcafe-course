import { t, Selector } from 'testcafe';
import Navbar from './page-objects/components/Navbar';

const navbar = new Navbar();

export async function login(username, password) {
	// Arrange
	const usernameInput = Selector('#user_login');
	const passwordInput = Selector('#user_password');
	const submitButton = Selector('.btn.btn-primary');

	// Act
	await t.click(navbar.signInButton);
	await t.typeText(usernameInput, username, { paste: true });
	await t.typeText(passwordInput, password, { paste: true });
	await t.click(submitButton);
}
