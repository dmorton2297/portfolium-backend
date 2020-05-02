import mongoose from 'mongoose';
import projectSchema from './schemas/projectSchema.js';
import dotenv from 'dotenv';
dotenv.config();

export default class Project {
    constructor() {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    }

    async getProjects(userId) {
        const Project = mongoose.model('project', projectSchema);
        const projects = await Project.find({ userId: userId });
        return projects;
    }

    async createProject(project) {
        const Project = mongoose.model('project', projectSchema);
        const newProject = new Project(project);
        const p = await newProject.save();
        return newProject;
    }

    async editProject(project) {
        const Project = mongoose.model('project', projectSchema);
        await Project.findOneAndUpdate({ _id: project.id }, project, { new: true, useFindAndModify: false });
        const p = await Project.findById(project.id);
        return p;
    }

    async deleteProject(project) {
        const Project = mongoose.model('project', projectSchema);
        const p = await Project.findByIdAndDelete(project);
        return p;
    }
};