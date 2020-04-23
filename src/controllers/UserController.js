import { users } from "../mocks.js";

let _users = [
    ...users
];

class UserController {
    getUser(id) {
        return _users.find(x => `${x.id}` === id);
    };

    updateUser(user, id) {
        console.log(user);
        console.log(id);
        console.log(_users);
        const u = _users.find(x => `${x.id}` === id);
        console.log(u);
        u.title = user.title;
        u.company = user.company;
        u.email = user.email;
        u.summary = user.summary;

        return u;
    }
};

export default UserController;
