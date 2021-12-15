import { t, Selector } from 'testcafe';

class Navbar {
	constructor() {
		// Selectors
		this.signInButton = Selector('#signin_button');
		this.searchInput = Selector('#searchTerm');
		this.userDropDown = Selector('.icon-user');
		this.logoutButton = Selector('#logout_link');
	}

	async search(text) {
		await t
			.typeText(this.searchInput, text, { paste: true, replace: true })
			.pressKey('enter');
	}
}

export default Navbar;
