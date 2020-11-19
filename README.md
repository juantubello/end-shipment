# End shipment
**This is a Fullstack Fiori application made it from scratch.**

- The backend splits into two parts, the first one is the RFC that handle the READ operation and expose the data to the frontend, the second manages the CREATE part of the CRUD basically, it calls a BAPI to finish the shipment process, all this logic is contained in SAP backend system and all the code is written in ABAP.

- The frontend was all made in HTML | CSS | XML View | Javascript, using the official SAPUI5 libraries.

## Functionality 

- It's a simple app where the carrier looks for his shipment and finishes his process. The app retrieves the data from the backend and exposes it to the carrier, then he can finish the process by pressing the button "end of shipment".

- It easy but involves a lot of validations(done in the backend and frontend) due to business rules.
