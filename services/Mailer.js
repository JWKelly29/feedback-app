const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    console.log(recipients);
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("no-reply@feedback-app.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    console.log(this.from_email, this.subject, this.body, this.recipients);

    // Add content must be called to pass template to email
    this.addContent(this.body);
    // must be called to add click tracking
    this.addClickTracking();
    // must be called to add recipients to Mail
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    // for each email address add them to personalise object
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    // inherited property to add personalise object to Mail
    this.addPersonalization(personalize);
  }

  async send() {
    try {
      const request = this.sgApi.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: this.toJSON()
      });
      console.log(request);

      const response = await this.sgApi.API(request);
      console.log(request);
      return response;
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

module.exports = Mailer;
