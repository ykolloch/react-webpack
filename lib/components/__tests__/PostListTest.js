import React from 'react';
import PostsList from '../PostsList';

import renderer from 'react-test-renderer';

describe('PostList', () => {

  const testProps =  {
    posts: {
      a: {id: 1},
      b: {id: 2},
    },
    postActions: {
      lookupUser: jest.fn(() => ({})),
    },
  };

  it('renders correctly', () => {
    // const tree = renderer.create(
    //   <PostsList
    //     {...testProps}
    //   />
    // ).toJSON();
    //
    // expect(tree).toMatchSnapShot();
  });
});
