import { projects } from '../mocks.js';

class ProjectController {
    getPrograms(userId) {
        return ([
            ...projects
        ])
    };
};

export default ProjectController;
