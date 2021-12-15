import { Selector } from 'testcafe';
import BasePage from './BasePage';

class FeedbackFormPage extends BasePage {
	constructor() {
		super();
		this.nameInput = Selector('#name');
		this.emailInput = Selector('#email');
		this.subjectInput = Selector('#subject');
		this.commentInput = Selector('#comment');
		this.submitButton = Selector('input[name="submit"]');
		this.thankyouPage = Selector('div.offset3.span6');
	}
}

export default FeedbackFormPage;
