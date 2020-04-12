
## toothsi

```
Project has the following routes

routes
---------
/  - login page 
/otp - otp page  ( otp will be current 4 digit day + hour in military 
                   eg: 0111 (monday , 11am) )
/welcome - no session page [ Route protected - through opt ]
/season1 - session 1 page [ Route protected - through opt ]
/season2 - session 2 page [ Route protected - through opt ]
/allseason - all session page [ Route protected - through opt ]


redux store + persist
------------------------
doctor
patient
otp


backend route
---------------
POST : 'http://localhost:8000/api/otp'


```


#### Front end

To run Front end :<br/>
go to folder and run 


#### `npm install`

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


#### Bacl end

To run Back end :<br/>
go to folder Server and run 


#### `npm install`

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

