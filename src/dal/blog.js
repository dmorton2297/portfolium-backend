import mongoose from 'mongoose';
import blogSchema from './schemas/blogSchema.js';
import dotenv from 'dotenv';
dotenv.config();

export default class Blog {
    constructor() {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    }

    async getBlog(blogId) {
        const Blog = mongoose.model('blog', blogSchema);
        const blog = await Blog.findById(blogId);
        return blog;
    }

    async getBlogByUserId(userId) {
        const Blog = mongoose.model('blog', blogSchema);
        const blog = await Blog.find({ userId: userId });
        return blog[0];
    }

    async createBlog(blog) {
        console.log('we are in here');
        const Blog = mongoose.model('blog', blogSchema);
        const newBlog = new Blog(blog);
        const p = await newBlog.save();
        return newBlog;
    }

    async editBlog(blog) {
        console.log(blog);
        const Blog = mongoose.model('blog', blogSchema);
        await Blog.findOneAndUpdate({ _id: blog._id }, blog, { new: true, useFindAndModify: false });
        const b = await Blog.findById(blog._id);
        return b;
    }

    async deleteBlog(blog) {
        const Blog = mongoose.model('blog', blogSchema);
        const b = await Blog.findByIdAndDelete(blog);
        return p;
    }
}