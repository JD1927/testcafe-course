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

	// Act
	// await t.setTestSpeed(1); // Debug purposes
	await t.typeText('#developer-name', name);
	// await t.wait(3000); // Debug purposes
	await t.click('#submit-button');
	// Assert
	await t.expect(Selector('#article-header').innerText).contains(name);
});
