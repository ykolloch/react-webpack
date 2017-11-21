class StateApi {
    constructor(rawData) {
      this.data = {
        posts: this.mapIntoObject(rawData.posts),
        users: this.mapIntoObject(rawData.users),
      }
    }

    mapIntoObject(arr) {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    }

    lookupUser = (userId) => {
      return this.data.users[userId];
    }

    getState = () => {
      return this.data;
    }
}

export default StateApi;
