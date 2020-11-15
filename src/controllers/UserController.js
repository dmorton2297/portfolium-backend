import { users } from "../mocks.js";
import User from "../dal/user.js";

let _users = [
    ...users
];

const defaultUserImage = 'https://firebasestorage.googleapis.com/v0/b/pres-demo.appspot.com/o/default-user.png?alt=media&token=35d663f9-8637-4f7d-8a53-97c153c35027';

class UserController {

    constructor() {
        this.dal = new User();
    }

    async getUser(email) {
        return await this.dal.getUserByEmail(email);
    };

    async updateUser(user, id) {
        const u = await this.dal.updateUser(user, id);
        return u;
    } 

    async createUser(user, id) {
        const u = {
            name: '',
            title: '',
            company: '',
            profileImage: defaultUserImage,
            authEmail: user.email,
            email: user.email,
            linkedin: '',
            github: '',
            summary: '',
            tags: []
        }
        return await this.dal.createUser(u);
    }
};

export default UserController;
