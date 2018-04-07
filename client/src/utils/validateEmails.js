const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails
    .split(",")
    .map(email => {
      return email.trim();
    })
    .filter(email => {
      return email.length && regExp.test(email) === false;
    });

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }
  return;
};