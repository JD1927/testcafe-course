import { Selector } from 'testcafe';
import Navbar from './../page-objects/components/Navbar';

const navbar = new Navbar();

// prettier-ignore
fixture`Search box test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can search terms/content in the search box', async t => {
	// Arrange
	const search = 'online';
	const firstResultText = 'Zero - Free Access to Online Banking';
	const searchResults = Selector('h2').innerText;
	const firstItemResult = Selector('.top_offset li').withText(firstResultText);

	// Act
	await navbar.search(search);

	// Assert
	await t.expect(searchResults).contains('Search Results:');
	await t.expect(firstItemResult.exists).ok();
	await t.expect(navbar.searchInput.exists).ok();
});
