import mongoose from "mongoose";
// 서버(DB x)에 비디오 전체가아닌 주소를 저장함. -> DB 무거워지기때문.
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
        // fileUrl값이 없는 Video를 생성하려면 error message를 받음.
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        defualt: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});


//mongoose.model(modelName, schema):
const model = mongoose.model("Video", VideoSchema);
export default model;