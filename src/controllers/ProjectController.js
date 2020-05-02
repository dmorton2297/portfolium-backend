import { __projects, mockImage } from '../mocks.js';
import moment from 'moment';
import Project from '../dal/project.js';

let _projects = [
    ...__projects
];

class ProjectController {

    constructor() {
        this.dal = new Project();
    }

    async getPrograms(userId) {
        const projects = await this.dal.getProjects(userId);
        return projects;
    };

    async createProject(project, userId) {
        console.log('this called');
        const proj = {
            ...project,
                createdAt: moment().format(),
                updatedAt: moment().format(),
                image: mockImage,
                userId
        };
        const deletedProject = await this.dal.createProject(proj);
        return deletedProject;
    } 

    async editProject(project, userId) {
        const p = await this.dal.editProject(project);
        return p;
    }

    async deleteProject(project, userId) {
        await this.dal.deleteProject(project._id);
        return project;
    }
};

export default ProjectController;
