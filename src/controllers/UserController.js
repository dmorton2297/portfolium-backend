import { users } from "../mocks.js";

let _users = [
    ...users
];

class UserController {
    getUser(id) {
        return _users.find(x => `${x.id}` === id);
    };

    updateUser(user, id) {
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
