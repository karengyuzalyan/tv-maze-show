// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { Episode } from './index';

const props = {
  episodesList: {
    name: 'Episode',
    image: {
      original: 'Original.jpg'
    },
  },
  location: {
    pathname: 'episode/',
    search: 'episode 1',
  },
  pending: false,
  getEpisode: jest.fn(x => x),
};

describe('src/pages/episode/index.jsx', () => {
  describe('<Episode />', () => {
    test('should render and match snapshot when is not pending', () => {
      const component = shallow(<Episode {...props} />)
      expect(component).toMatchSnapshot()
    });
    test('should render and match snapshot when is pending', () => {
        const component = shallow(<Episode {...props} pending />)
        expect(component).toMatchSnapshot()
    });
  });
});
