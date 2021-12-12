import { Selector } from 'testcafe';

// prettier-ignore
fixture`Feedback form test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can provide feedback by filling up a form', async t => {
	// Arrange
	const linkToFeedback = Selector('#feedback');
	const nameInput = Selector('#name');
	const emailInput = Selector('#email');
	const subjectInput = Selector('#subject');
	const commentInput = Selector('#comment');
	const submitButton = Selector('input[name="submit"]');
	const thankyouPage = Selector('div.offset3.span6').innerText;

	const name = 'John Doe';
	const emailRandom = 'email@random.com';
	const subjectRandom = 'Subject random';
	const commentRandom = 'Comment random';

	// Act
	await t.click(linkToFeedback);
	await t.typeText(nameInput, name, { paste: true });
	await t.typeText(emailInput, emailRandom, { paste: true });
	await t.typeText(subjectInput, subjectRandom, { paste: true });
	await t.typeText(commentInput, commentRandom, { paste: true });
	await t.click(submitButton);

	// Assert
	await t.expect(thankyouPage).contains(`Thank you for your comments, ${name}`);
});
