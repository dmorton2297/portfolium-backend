import mongoose from 'mongoose';

/**
 * Mongo Schema for Project obejct in DB
 */
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    github: String,
    image: {
        url: String,
        id: String,
    },
    projectLink: String,
    createdAt: String,
    updatedAt: String,
    website: String,
    demoVideo: String,
    tags: [String],
    userId: String
});

export default projectSchema;