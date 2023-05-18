# unibit_assignment

* start command:- `npm start`;
* There are mainly four api 1.Signup API, 2.Login API 3.Createtambola API and 4.GetTambola API.
# SIGNUP API:-
   * This is a `POST` request , one user can create his/her own account using name , email, phone number and password.
   * End point :- `localhost:3000/signup`.
   * If user account is created successfully then return the user data in request body with the `HTTP` status code `201`
   * If there is any Internal server error then return `HTTP` status code `500` with the error message.
# LOGIN API:-
   * This is a `POST` request , one registered user can login with his/her email and password pass through the request body.
   * If email and password is valid and already registered then return a `JWT` token with `HTTP` status code `200` other wise 
     return error with `HTTP` status code `401`. 
   * End point :- `localhost:3000/login`.
   *  If there is any Internal server error then return `HTTP` status code `500` with the error message.
# CREATE TAMBOLA TICKET API:-
   * This is a `POST` request. No data need to pass through request body;
   * End point :- `localhost:3000/tambola`.
   * This is a `PROTECTED ROUTE` , you should pass `x-api-key` key is `header` with the value of `jwt token` which is created 
     after `user login` otherwise it return error. 
   * If ticket is created successfully then return the ticket with a `unique id` and `HTTP` status code is `201`.
   * If there is any Internal server error then return `HTTP` status code `500` with the error message.
# GET TAMBOLA TICKET API:-
   * This is a `GET` request.
   * End point :- `localhost:3000/tambola`.
   * This is a `PROTECTED ROUTE` , you should pass `x-api-key` key is `header` with the value of `jwt token` which is created 
     after `user login` otherwise it return error. 
   
   * `pagination` is done for this API , you should pass `page` & `limit` number in `Query` params other wise it take the default 
      value of `1` & `5` respectively.
   *  If there is any Internal server error then return `HTTP` status code `500` with the error message.

# Validation:-
   *  For validation purpose I use `joi` npm package.
# Authentication :- 
   * For Authentication purpose i use `JSONWEBTOKEN`.


# ***************************THANK YOU***************************




