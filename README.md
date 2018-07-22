Heroku URL: https://warm-eyrie-42191.herokuapp.com/

## The Feedback App Project

This project was built to further my understanding of node and react. In order to complete this project in a reasonable amount of time, I decided to learn and use some libraries, as developing my own automated email or payment processing platform would be way beyond the goals I set out to achieve. 


## How to use

The user "pays" for tokens, of course I have set up a free stripe testing account so you may add $5 to your account by adding 4242 4242 4242 4242 as the card number and any valid expiry date and ccv number.

They then add a survey by clicking the red plus button which takes them to an email template. Once the user fills in the email template and a comma seperated list of users they then click "submit". They are then taken to a review page. Once they are happy with their survey they click "send survey" and 1 credit will be subtracted from their account wallet and an email will be sent to their list of recipients.

Once a survey recipient opens their email they should see the same email title and body entered by the user as well as two links that say "yes" and "no". A recipient may click any one of these. They will be redirected to a thankyou page. A recipient may not answer the survey more than once. The user will be able to navigate to the "/surveys" page of the project to see a list of surveys they have sent and what the current yes or no count is for each.


## Design Choices

### React-Form

I have opted to use the React-Form framework to automatically creare all of the different event handlers on my multi-page form (http://localhost:3000/surveys/new) for me which allows me to keep the code cleaner. This allows my forms to not have to worry to much about handling and validating user input.

### Cookie-Session Middleware

I have opted to use cookie-session as opposed to express session for ease of use. Storing our session in the cookie also means minimal database lookups. However this comes at the cost of only being able to store around 4kb of data.

## TroubleShooting

### Error: listen EADDRINUSE :::5000

When trying to run the server if you encounter this error then it is likely that an old node process is still running. To fix the error the process needs to be shut down.

Check to see if a process is running on the port 5000 by entering the command:

```
  sudo lsof -i tcp:5000
```

If nothing is returned no process is running on that port. However if there is look for the PID number.

Properly shut down the process by entering the command:

```
  kill -9 <pid>
```
