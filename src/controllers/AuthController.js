import { user } from "../mocks.js";
import User from "../dal/user.js";

class AuthController {
    constructor() {
        this.dal = new User();
    }

    async userExists(email) {
        const user = await this.dal.getUserByEmail(email);
        if (user) {
            return true;
        }

        return false;
    }
};

export default AuthController;