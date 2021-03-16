const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());
var firebase = require("firebase");
var dateFormat = require('dateformat');

const {
  DB,
  ERRORS,
  firebaseAdmin,
  tokenExporter,
} = require("./commons");


//구글 로그인 정보 DB 확인 메소드 
asyncRouter.post("/checkgoogleexist", async(req, res, next) => {
  const{
    body : {uid},
  } = req;
  if (uid == undefined) return next(ERRORS.AUTH.NO_UID);
  return DB.user
  .doc(uid)
  .get()
  .then(async (docSnapshot) => {
    if(docSnapshot.exists){
      return res.status(200).send({result:"success"});
    }
  })
  .catch((err) => next(err.message));
});

asyncRouter.post("./signup", async(req,res,next)=>{
  const {body} = req;

//구글인지, 일반회원가입인지 확인
  if(body.method === "GOOGLE") {
    try{
      await firebaseAdmin.auth().getUser(body.uid);
    }
    catch(err) {
      return next(ERRORS_AUTH.NO_UID);
    }

    return DB.user
    .doc(body.uid)
    .get()
    .then(async (docSnapshot) => {
      if(docSnapshot.exists) {
        return next(ERRORS.AUTH.ALREADY_SIGNUPED);
      }
      else {
          return next(ERRORS.AUTH.NO_UID);
        }
    })
  }
  else{
    return next(err);
  }
});

asyncRouter.use((err, _req, res, _next) => {
  switch (err) {
    case ERRORS.AUTH.NO_UID:
      res.status(200).send({ error: "there is no user" });
      break;
    case ERRORS.AUTH.ALREADY_SIGNEDUP:
      res.status(201).send({ error: "Already signed up" });
      break;
    default:
      console.log("UNHANDLED INTERNAL ERROR: ", err);
      res.status(404).send({ error: "INTERNAL ERROR" });
      break;
  }
});
  module.exports = asyncRouter

