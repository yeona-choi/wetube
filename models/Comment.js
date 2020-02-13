import mongoose from 'mongoose';

const CommetSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Comment", CommetSchema);
export default model;