<p align="center">
  <a href="https://firebase.google.com/docs/functions" target="blank">
  <img src="https://firebase.google.com/static/images/products/icons/build_functions.svg" width="180" alt="Cloud Functions" /></a>
  <a href="https://firebase.google.com/docs/firestore" target="blank">
  <img src="https://camo.githubusercontent.com/093842b4d2174b2be4741a098f062101408cdd9165ce8c49c596bd4a2d91d0c7/68747470733a2f2f6779617a6f2e636f6d2f61373264616236376664666238306534366166656562386364663362363432662f7468756d622f31303030" width="200" alt="Firestore" /></a>
    <br>  
<a href="https://expressjs.com/" target="blank">
  <img src="https://qualitapps.com/wp-content/uploads/2023/02/102.png" width="370" alt="NODEJS & EXPRESS" /></a>
</p>

<h1> <p align="center"> Todo App ( Serverless Backend ) </p></h1> 


  <p align="center"> REST API for task and user management.
  </p>


## Live Client Demo

The deployed version of this application can be accessed [HERE](https://atom-todo-app.vercel.app/auth/login).


## Built With

- Firebase Cloud Functions
- Firestore Database
- Express + TypeScript

## Main Endpoints

```
GET /users/:email
POST /users
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

## Setup
1. Create `.env` with Firebase credentials
2. `npm install`
3. `npm run serve` (local)
4. `firebase deploy` (production)

