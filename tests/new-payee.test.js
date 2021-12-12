import { Selector } from 'testcafe';

// prettier-ignore
fixture`New payee test`
  .page(`http://zero.webappsecurity.com/index.html`);

test.before(async t => {
	// Arrange
	const signInButton = Selector('#signin_button');
	const usernameInput = Selector('#user_login');
	const passwordInput = Selector('#user_password');
	const submitButton = Selector('.btn.btn-primary');

	// Act
	await t.click(signInButton);
	await t.typeText(usernameInput, 'username', { paste: true });
	await t.typeText(passwordInput, 'password', { paste: true });
	await t.click(submitButton);
})('User can add new payee to the list', async t => {
	// Arrange
	const payeeName = 'My new payee name';
	const payeeAddress = 'My new payee address';
	const payeeAccount = '123123';
	const payeeDetails = 'My new payee details';
	const payBillsTab = Selector('#pay_bills_tab');
	const newPayeeTab = Selector('a').withText('Add New Payee');
	const newPayeeName = Selector('#np_new_payee_name');
	const newPayeeAddress = Selector('#np_new_payee_address');
	const newPayeeAccount = Selector('#np_new_payee_account');
	const newPayeeDetails = Selector('#np_new_payee_details');
	const addNewPayeeButton = Selector('#add_new_payee');
	const alertContentSuccess = Selector('#alert_content').innerText;

	// Act
	await t.click(payBillsTab);
	await t.click(newPayeeTab);
	await t.typeText(newPayeeName, payeeName, { paste: true });
	await t.typeText(newPayeeAddress, payeeAddress, { paste: true });
	await t.typeText(newPayeeAccount, payeeAccount, { paste: true });
	await t.typeText(newPayeeDetails, payeeDetails, { paste: true });
	await t.click(addNewPayeeButton);

	// Assert
	await t
		.expect(alertContentSuccess)
		.contains(`The new payee ${payeeName} was successfully created.`);
});
