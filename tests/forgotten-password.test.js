import { Selector } from 'testcafe';

// prettier-ignore
fixture`Send forgotten password test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can request new password to be send to his email', async t => {
	// Arrange
	const signInButton = Selector('#signin_button');
	const linkToForgottenPassword = Selector('a').withExactText(
		'Forgot your password ?'
	);
	const emailInput = Selector('#user_email');
	const submitButton = Selector('input[name="submit"]');
	const message = Selector('div').innerText;
	const emailRandom = 'email@random.com';
	// Act
	await t.click(signInButton);
	await t.click(linkToForgottenPassword);
	await t.typeText(emailInput, emailRandom, { paste: true });
	await t.pressKey('enter');

	// Assert
	await t.expect(message).contains(emailRandom);
	await t.expect(emailInput.exists).notOk();
});
