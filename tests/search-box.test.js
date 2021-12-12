import { Selector } from 'testcafe';

// prettier-ignore
fixture`Search box test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can search terms/content in the search box', async t => {
	// Arrange
	const search = 'online';
	const firstResultText = 'Zero - Free Access to Online Banking';
	const searchInput = Selector('#searchTerm');
	const searchResults = Selector('h2').innerText;
	const firstItemResult = Selector('.top_offset li').withText(firstResultText);
	// Act
	await t.typeText(searchInput, search, { paste: true });
	await t.pressKey('enter');
	// Assert
	await t.expect(searchResults).contains('Search Results:');
	await t.expect(firstItemResult.exists).ok();
});
