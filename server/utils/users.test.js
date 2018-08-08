const expect = require("expect");

const {Users} = require("./users");

describe("Users", () => {
    var users;

    beforeEach(()=>{
        users = new Users();

        users.users = [{
            id: "1",
            name: "Mike",
            room: "Node Course"
        },{
            id: "2",
            name: "Julie",
            room: "React Course"
        },{
            id: "3",
            name: "Billy",
            room: "Node Course"
        }];

    });

    it(" should add new user", () => {
        var users = new Users();
        var user = {
            id: "123",
            name: "bob",
            room: "Bobs"
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        
        expect(users.users).toEqual([user]);
    });

    it("should remove a user", () => {
        var Id = "3";
        var removedUser = users.removeUser(Id);
        expect(users.users.length).toBe(2);
        expect(removedUser.id).toBe(Id);
    });

    it("should not remove a user", () => {
        var removedUser = users.removeUser("5");
        expect(users.users.length).toBe(3);        

        expect(removedUser).toNotExist();
    });
    it("should find user", () => {
        var Id = "2";
        var foundUser = users.getUser(Id);
        expect(foundUser.id).toBe(Id);
    });

    it("should not find user", () => {
        var foundUser = users.getUser("5");
        expect(foundUser).toNotExist();
        
    });

    it("should return names for users for node course", () => {
        var userList = users.getUserList("React Course");
        expect(userList).toEqual(["Julie"]);
    });
} );

