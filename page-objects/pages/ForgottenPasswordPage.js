import { Selector } from 'testcafe';

class ForgottenPasswordPage {
	constructor() {
		this.emailInput = Selector('#user_email');
		this.successMessage = Selector('div');
	}
}

export default ForgottenPasswordPage;
