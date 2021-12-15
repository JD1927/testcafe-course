import { Selector } from 'testcafe';

class FeedbackFormPage {
	constructor() {
		this.nameInput = Selector('#name');
		this.emailInput = Selector('#email');
		this.subjectInput = Selector('#subject');
		this.commentInput = Selector('#comment');
		this.submitButton = Selector('input[name="submit"]');
		this.thankyouPage = Selector('div.offset3.span6');
	}
}

export default FeedbackFormPage;
