import Navbar from '../page-objects/components/Navbar';
import SearchResultsPage from '../page-objects/pages/SearchResultsPage';

const navbar = new Navbar();
const searchResultsPage = new SearchResultsPage();

// prettier-ignore
fixture`Search box test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can search terms/content in the search box', async t => {
	// Arrange
	const search = 'online';
	const expectedTitle = 'Search Results:';
	const firstResultText = 'Zero - Free Access to Online Banking';

	// Act
	await navbar.search(search);

	// Assert
	await t
		.expect(searchResultsPage.resultsTitle.innerText)
		.contains(expectedTitle);
	await t.expect(navbar.searchInput.exists).ok();
	await t
		.expect(searchResultsPage.linkText.innerText)
		.contains(firstResultText);
});
