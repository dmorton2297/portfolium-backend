import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    text: String,
    title: String,
    image: String,
    description: String,
    tags: [String],
    blogId: String
});

export default blogPostSchema;