// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { EpisodesList } from './index';

const props = {
  episodes: [{
    name: 'Episode',
    image: {
      original: 'Original.jpg'
    },
    id: 1,
  }],
  showID: '11'
};

describe('src/episodes-list/index.jsx', () => {
  describe('<EpisodesList />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<EpisodesList {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
