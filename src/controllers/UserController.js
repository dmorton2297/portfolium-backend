class UserController {
    getUser(id) {
        console.log(`Fetching user with id: ${id}`);
        return ({
            user: { id: 1, name: 'Dan Morton' }
        });
    };
};

export default UserController;