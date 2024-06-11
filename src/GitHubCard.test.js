import React from 'react';
import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';

test('GitHubCard component snapshot test', () => {
  const component = renderer.create(<GitHubCard />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
