import { Selector } from 'testcafe';
import Navbar from './../page-objects/components/Navbar';

const navbar = new Navbar();

// prettier-ignore
fixture`Send forgotten password test`
  .page`http://zero.webappsecurity.com/index.html`;

test('User can request new password to be send to his email', async t => {
	// Arrange
	const linkToForgottenPassword = Selector('a').withExactText(
		'Forgot your password ?'
	);
	const emailInput = Selector('#user_email');
	const message = Selector('div').innerText;
	const emailRandom = 'email@random.com';
	// Act
	await t.click(navbar.signInButton);
	await t.click(linkToForgottenPassword);
	await t.typeText(emailInput, emailRandom, { paste: true });
	await t.pressKey('enter');

	// Assert
	await t.expect(message).contains(emailRandom);
	await t.expect(emailInput.exists).notOk();
});
