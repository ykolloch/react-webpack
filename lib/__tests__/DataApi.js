import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes post as an object', () => {
    const posts = api.getPosts();
    const postId = data.posts[0].id;
    const postTitle = data.posts[0].title;

    //expect(posts).toHaveProperty(postId);
    expect(posts[postId].title).toBe(postTitle);
  });

  it('eposes user as an object', () => {
    const users = api.getUsers();
    const userId = data.users[0].id;
    const userName = data.users[0].username;

    //expect(users).toHaveProperty(userId);
    expect(users[userId].username).toBe(userName);
  });
});
