class StateApi {
    constructor(rawData) {
        this.data = {
            posts: this.mapIntoObject(rawData.posts),
            users: this.mapIntoObject(rawData.users),
            projects: this.mapIntoObject(rawData.projects),
            searchTerm: '',
            timestamp: new Date(),
        };
        this.subscriptions = {};
        this.lastSubscriptionsId = 0;


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
    getState = () => {
        return this.data;
    };

    subscribe = (cb) => {
        this.lastSubscriptionsId++;
        this.subscriptions[this.lastSubscriptionsId] = cb;
        return this.lastSubscriptionsId;
    };

    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    };
    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb());
    };

    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        };
        this.notifySubscribers();
    };

    setSearchTerm = (searchTerm) => {
        this.mergeWithState({
            searchTerm,
        });
    };

    startClock = () => {
        setInterval(() => {
            this.mergeWithState({
                timestamp: new Date(),
            }, 1000);
        });
    }
}

export default StateApi;

