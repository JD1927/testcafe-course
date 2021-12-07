import { Selector } from 'testcafe';

fixture`Getting started with TestCafe`.page(
	`https://devexpress.github.io/testcafe/example/`
);
test('My first testcafe test', async t => {
	// Arrange
	const name = 'Juan';

	// Act
	await t.typeText('#developer-name', name);
	await t.click('#submit-button');
	// Assert
	await t.expect(Selector('#article-header').innerText).contains(name);
});
