import { user } from "../mocks.js";

class AuthController {
    loginUser(email, password) {
        return ({
            ...user
        })
    }
};

export default AuthController;