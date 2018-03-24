Heroku URL: https://pacific-mountain-43313.herokuapp.com/

## Design Choices

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