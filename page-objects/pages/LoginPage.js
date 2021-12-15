import { Selector, t } from 'testcafe';

class LoginPage {
	constructor() {
		this.usernameInput = Selector('#user_login');
		this.passwordInput = Selector('#user_password');
		this.submitButton = Selector('.btn.btn-primary');
		this.loginErrorMessage = Selector('.alert.alert-error');
	}

	async loginToApp(username, password) {
		await t
			.typeText(this.usernameInput, username, { paste: true, replace: true })
			.typeText(this.passwordInput, password, { paste: true, replace: true })
			.click(this.submitButton);
	}
}

export default LoginPage;
