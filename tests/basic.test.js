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
		// await t.setPageLoadTimeout(0); // Deprecated
	})
	.after(async t => {
		// Cleaning test data
		// Logging and sending data to monitoring systems
	})
	.afterEach(async t => {
		// Runs after each test
	});

// await t.setTestSpeed(1); // Debug purposes - Test speed
// await t.wait(3000); // Debug purposes - Pause tests
// await t.takeScreenshot({ path: './tests/test.png' }) // Not recomendable
// await t.takeScreenshot({ fullPage: true }); // For the full page
// await t.takeElementScreenshot(submitButton); // For a particular element
// test.only // Just to run the specified tests
// test.skip // Just to skip the the specified tests

test('My first testcafe test', async t => {
	// Arrange
	const name = 'Juan';
	const developerNameInput = Selector('#developer-name');
	const submitButton = Selector('#submit-button');
	const articleHeaderText = Selector('#article-header').innerText;

	// Act

	await t.typeText(developerNameInput, name);
	await t.click(submitButton);

	// Click
	await t.click('selector', { options });
	// Double
	await t.doubleClick('selector', { options });
	// Right
	await t.rightClick('selector', { options });
	// Drag Element - X and Y
	await t.drag('selector', 200, 0, { options });
	// Hover
	await t.hover('selector', { options });
	// Hover
	await t.selectText('selector', { options });

	// Assert
	await t.expect(articleHeaderText).contains(name);
}).timeouts({ pageLoadTimeout: 0 });
