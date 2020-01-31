# mocha_protractor_JavaScript

1. Implement the test suite using any JavaScript based framework.
    ---- implemented Using visual studio code and protractor framework with chai asssertion library------
2. As a customer, I can access Storefront (https://elguntors-stg.salesfloor.net/reggie)
       1. As a customer, I see the “LIVE CHAT” status as “Unavailable”.
          ----implemented----
       2. Verify that the text colour is red.
          ----implemented----
3. As a customer, I can submit an appointment request.
     1. Click on “APPOINTMENT REQUEST”, in the above URL.
          ----implemented----
     2. Choose “Phone” for “Selection Appointment Type”
          ----implemented----
     3. Choose a day one week from now and time as 10 AM.
          ----implemented----
     4. Enter data for all fields (name, email, phone, comments, checkbox)
        ----implemented----
     5. Click on “SEND REQUEST”
        ----implemented----
    6. Check for “THANK YOU FOR YOUR REQUEST” to pass the test case.
        ----The window is closing fastly.so unable to take the xpath from that page-------
4. As a customer, I can signup for regular updates.
      1. Click on “Get My Updates” in the given URL.
            ----implemented----
      2. Enter data for email and name
            ----implemented----
      3. Click on “SEND REQUEST” button.
            ----implemented----
      4. Look for “Thank You!” Text for successful event.
          ----The window is closing fastly.so unable to take the xpath from that page-------
      5. Click on “X” to close the model dialog.
          ----Actually, there is no close button. so it will log it as a bug-------

          Execution procedure:

          1.Enter the file name in the specs section of mochaConf.js
          2. Go to command prmopt.
          3. Make sure the directory is in right path.
          4. Enter command -   protractor mochaConf.js
