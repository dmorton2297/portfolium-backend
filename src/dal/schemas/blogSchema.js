import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: String,
    userId: String,
    tags: [String],
    description: String
});

export default blogSchema;
