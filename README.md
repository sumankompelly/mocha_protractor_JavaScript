# mocha_protractor_JavaScript

1. Implement the test suite using any JavaScript based framework.
    ---- implemented Using visual studio code and protractor framework with chai asssertion library------
2. Test cases that needs to implemented are
  2.1  As a customer, I can access Storefront (https://elguntors-stg.salesfloor.net/reggie)
       As a customer, I see the “LIVE CHAT” status as “Unavailable”.
          ----Implmemted----
       Verify that the text colour is red.
          ----Implmemted----
3. As a customer, I can submit an appointment request.
     Click on “APPOINTMENT REQUEST”, in the above URL.
          ----Implmemted----
     Choose “Phone” for “Selection Appointment Type”
          ----Implmemted----
     Choose a day one week from now and time as 10 AM.
          ----Implmemted----
     Enter data for all fields (name, email, phone, comments, checkbox)
        ----Implmemted----
     Click on “SEND REQUEST”
        ----Implmemted----
    Check for “THANK YOU FOR YOUR REQUEST” to pass the test case.
        ----The window is closing fastly.so unable to take the xpath from that page-------
4. As a customer, I can signup for regular updates.
      Click on “Get My Updates” in the given URL.
            ----Implmemted----
      Enter data for email and name
            ----Implmemted----
      Click on “SEND REQUEST” button.
            ----Implmemted----
      Look for “Thank You!” Text for successful event.
          ----The window is closing fastly.so unable to take the xpath from that page-------
      Click on “X” to close the model dialog.
          ----Actually, there is no close button. so it will log it as a bug-------

          Execution procedure:

          1.Enter the file name in the specs section of mochaConf.js
          2. Go to command prmopt.
          3. Make sure the directory is in right path.
          4. Enter command -   protractor mochaConf.js
