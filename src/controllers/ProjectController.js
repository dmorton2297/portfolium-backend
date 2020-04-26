import { projects } from '../mocks.js';
import moment from 'moment';

let _projects = [
    ...projects
];

class ProjectController {
    getPrograms(userId) {
        return ([
            ..._projects
        ])
    };

    createProject(project, userId) {
        const id = _projects.length + 1;
        _projects = [
            ..._projects, 
            {
                id,
                ...project,
                createdAt: moment().format(),
                updatedAt: moment().format(),
                image: projects[0].image
            }
        ]
        return _projects[_projects.length - 1];
    } 

    editProject(project, userId) {
        const p = _projects.find(x => x.id === project.id);
        p.id = project.id;
        p.name = project.name;
        p.description = project.description;
        p.github = project.github;
        p.projectLink = project.projectLink;
        p.updatedAt = moment().format();
        p.website = project.website;
        p.demoVideo = project.demoVideo;
        p.tags = project.tags

        return p;
    }

    deleteProject(project, userId) {
        const toBeDelete = _projects.find(x => x.id === project.id);
        _projects = _projects.filter(x => x.id !== project.id);
        return toBeDelete;
    }
};

export default ProjectController;
