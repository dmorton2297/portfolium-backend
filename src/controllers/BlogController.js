import { blogs } from '../mocks.js';
import moment from 'moment';

let _blogs = [
    ...blogs
];

class BlogController {
    getBlog(userId) {
        const blog = _blogs.find(x => `${x.userId}` === userId);
        return _blogs.find(x => `${x.userId}` === userId);
    };

    editBlogDetails(blog, userId) {
        const b = _blogs.find(x => `${x.userId}` === userId);
        b.title = blog.title;
        b.description = blog.description;
        b.tags = blog.tags;
        return b;

    }

    getBlogPost(id, userId) {
        const blog = _blogs.find(x => `${x.userId}` === userId);
        const post = blog.blogPosts.find(x => `${x.id}` === id);
        return post;
    }


    createBlogPost(blog, userId) {
        const b = _blogs.find(x => `${x.userId}` === userId);
        b.blogPosts = [
            ...b.blogPosts,
            {
                id: b.blogPosts.length + (1 * Math.random() * 100),
                ...blog,
                createdAt: moment().format(),
                updatedAt: moment().format(),
                image: b.blogPosts[0].image
            }
        ]
        return b.blogPosts[b.blogPosts.length- 1];
    }

    editBlogPost(blogPost, userId) {
        const b = _blogs.find(x => `${x.userId}` === userId);
        const p = b.blogPosts.find(x => `${x.id}` === blogPost.id);
        p.text = blogPost.text;
        p.title = blogPost.title;
        p.tags = blogPost.tags;
        p.description = blogPost.description;
        return p;
    }

    deleteBlogPost(blogPost, userId) {
        const b = _blogs.find(x => `${x.userId}` === userId);
        const p = b.blogPosts.find(x => `${x.id}` === `${blogPost.id}`);
        b.blogPosts = b.blogPosts.filter(x => `${x.id}` !== `${p.id}`);
        return p;
    }
};

export default BlogController;

