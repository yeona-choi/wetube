// passport-local 이란,
// username과 password를 쓰는 사용자 인증방식(strategy)을 의미

import passport from "passport";
import User from "./models/User"
//createStrategy()는 이미구성이 된 passport-local의 LocalStrategy
passport.use(User.createStrategy());

//쿠키가 어떤 정보를 가질 수 있느냐
passport.serializeUser(User.serializeUser());  // 쿠키에는 오직 user.id만 담아서 보내
passport.deserializeUser(User.deserializeUser()); // 쿠키의 정보를 어떻게 사용자로 전환하는가
