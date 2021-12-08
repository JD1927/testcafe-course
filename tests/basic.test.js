import { Selector } from 'testcafe';

// prettier.ignore
fixture`Getting started with TestCafe`
	.page(`https://devexpress.github.io/testcafe/example/`)
	.before(async t => {
		// Test setup
		// seedTestData()
	})
	.beforeEach(async t => {
		// Runs before each test
		await t.setTestSpeed(1); // Debug purposes
	})
	.after(async t => {
		// Cleaning test data
		// Logging and sending data to monitoring systems
	})
	.afterEach(async t => {
		// Runs after each test
	});

test('My first testcafe test', async t => {
	// Arrange
	const name = 'Juan';
	const developerNameInput = Selector('#developer-name');
	const submitButton = Selector('#submit-button');
	const articleHeaderText = Selector('#article-header').innerText;

	// Act
	// await t.setTestSpeed(1); // Debug purposes
	await t.typeText(developerNameInput, name);
	// await t.wait(3000); // Debug purposes
	await t.click(submitButton);
	// Assert
	await t.expect(articleHeaderText).contains(name);
});
