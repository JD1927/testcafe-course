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
	// Type text
	await t.typeText('selector', 'text', { options });
	// Press key on the keyboard
	await t.pressKey('key', { options });
	// Navigate
	await t.navigateTo('url');
	// Navigate
	await t.takeScreenshot('path');
	await t.takeElementScreenshot('path', { options });
	// Resize window
	await t.resizeWindow(800, 600);

	// Assert
	await t.expect(articleHeaderText).contains(name);

	// Deep Equal
	await t.expect('foo').eql('foo', 'message', { options });
	// Not Deep Equal
	await t.expect('foo').notEql('foo', 'message', { options });
	// OK
	await t.expect(true).ok(); // Boolean values
	// Not OK
	await t.expect(false).notOk(); // Boolean values
	// Contains
	await t.expect('value').contains('ue');
	// Contains
	await t.expect('value').notContains('foo');
	// Greater or less than
	await t.expect(11).gt(10);
	await t.expect(11).gte(10);
	await t.expect(10).lt(10);
	await t.expect(9).lte(10);
	// Within
	await t.expect(9).within(1, 10);
	// Not within
	await t.expect(11).notWithin(1, 10);
}).timeouts({ pageLoadTimeout: 0 });
