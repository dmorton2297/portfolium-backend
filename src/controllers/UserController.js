import { users } from "../mocks.js";
import User from "../dal/user.js";

let _users = [
    ...users
];

class UserController {

    constructor() {
        this.dal = new User();
    }

    async getUser(email) {
        return await this.dal.getUserByEmail(email);
    };

    async updateUser(user, id) {
        const u = _users.find(x => `${x.id}` === id);
        u.title = user.title;
        u.company = user.company;
        u.email = user.email;
        u.summary = user.summary;
        u.github = user.github;
        u.linkedin = user.linkedin;
        u.tags = user.tags;

        return u;
    }
};

export default UserController;
