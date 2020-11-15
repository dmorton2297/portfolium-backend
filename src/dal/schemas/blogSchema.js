import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: String,
    userId: String,
    userEmail: String,
    tags: [String],
    description: String,
    author: String,
});

export default blogSchema;
