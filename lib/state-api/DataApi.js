class StateApi {

    selected = 0;

    constructor(rawData) {
        this.data = {
            posts: this.mapIntoObject(rawData.posts),
            users: this.mapIntoObject(rawData.users),
            projects: this.mapIntoObject(rawData.projects),
        };
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    lookupUser = (userId) => {
        return this.data.users[userId];
    };

    setSelectUser = (id) => {
        this.selected = id;
    };

    getSelectedUser() {
        return this.selected;
    }

    getState = () => {
        return this.data;
    }
}

export default StateApi;
