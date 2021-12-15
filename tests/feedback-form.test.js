import { Selector } from 'testcafe';
import FeedbackFormPage from '../page-objects/pages/FeedbackFormPage';

const feedbackFormPage = new FeedbackFormPage();

// prettier-ignore
fixture`Feedback form test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can provide feedback by filling up a form', async t => {
	// Arrange
	const linkToFeedback = Selector('#feedback');

	const name = 'John Doe';
	const emailRandom = 'email@random.com';
	const subjectRandom = 'Subject random';
	const commentRandom = 'Comment random';
	const expectedMessage = `Thank you for your comments, ${name}`;

	// Act
	await t.click(linkToFeedback);
	await t.typeText(feedbackFormPage.nameInput, name, {
		paste: true,
		replace: true,
	});
	await t.typeText(feedbackFormPage.emailInput, emailRandom, {
		paste: true,
		replace: true,
	});
	await t.typeText(feedbackFormPage.subjectInput, subjectRandom, {
		paste: true,
		replace: true,
	});
	await t.typeText(feedbackFormPage.commentInput, commentRandom, {
		paste: true,
		replace: true,
	});
	await feedbackFormPage.waitFor(4000);
	await t.click(feedbackFormPage.submitButton);

	// Assert
	await t
		.expect(feedbackFormPage.thankyouPage.innerText)
		.contains(expectedMessage);
});
