// express 서버생성 -> route 생성 -> 응답
//const express = require('express'); //express node modules import
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localMiddleware } from "./middlewares";
import routes from "./routes.js";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express(); // expree 실행 후 app에 담음.
//const PORT = 4000;

//const handleListening = () => console.log(`Listening on: http:://localhost:${PORT}`);

//const handleHome = (req, res) => res.send("Hello from my ass");

//const handleProfile = (req, res) => res.send("You're on my profile");

// const betweenHome = (req, res, next) => {
//     console.log("I'm between");
//     next();
// }
// app.use(betweenHome);
app.use(helmet()); // 맨 위에 있어야함.
app.set('view engine', "pug"); // view engine을 pug로 설정
app.use(cookieParser()); //쿠키를 파싱
app.use(bodyParser.json());  // 바디에 담긴 정보를 파싱 // 서버가 json을 이해하기위해
app.use(bodyParser.urlencoded({ extended: true }));  //서버가 urlencoded를 이해하기우해
app.use(morgan("dev"));
// respond with "hello world" when a GET request is made to the homepage
//app.get('/', handleHome);
// route 생성
//app.get('/profile', handleProfile);
//app.use('/', globalRouter);

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
//app.listen(PORT, handleListening);  //handleListening 콜벡 함수

export default app;
