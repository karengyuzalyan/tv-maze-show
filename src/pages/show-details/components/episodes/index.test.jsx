// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { Episodes } from './index';

const props = {
  episodesList: [{
    name: 'Episode',
    image: {
      original: 'Original.jpg'
    },
  }],
  showID: '11'
};

describe('src/episodes/index.jsx', () => {
  describe('<Episodes />', () => {
    test('should render and match snapshot with episodesList', () => {
      const component = shallow(<Episodes {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
