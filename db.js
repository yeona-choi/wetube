import monggose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();// 이 함수로 .env 파일 안에 있는 정보를 불러올 수 있음.

monggose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = monggose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

