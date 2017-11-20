class DataApi {
    constructor(rawData) {
      this.rawData = rawData;
    }

    mapIntoObject(arr) {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    }

    getPosts() {
      return this.mapIntoObject(this.rawData.posts);
    }

    getUsers() {
      return this.mapIntoObject(this.rawData.users);
    }
}

export default DataApi;
