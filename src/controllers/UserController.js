import { user } from "../mocks.js";

class UserController {
    getUser(id) {
        return ({
            ...user
        });
    };
};

export default UserController;