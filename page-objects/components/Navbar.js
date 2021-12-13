import { t, Selector } from 'testcafe';

class Navbar {
	constructor() {
		// Selectors
		this.signInButton = Selector('#signin_button');
		this.searchInput = Selector('#searchTerm');
	}
}

export default Navbar;
