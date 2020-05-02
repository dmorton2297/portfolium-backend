import mongoose from 'mongoose';

/**
 * Schema representing a user in the application
 * @returns {mongoose.Schema} - A mongoose schema
 */
const userSchema = new mongoose.Schema({
    name: String,
    title: String,
    company: String,
    profileImage: String,
    authEmail: String,
    email: String,
    linkedin: String,
    github: String,
    summary: String,
    tags: [String]
});

export default userSchema;