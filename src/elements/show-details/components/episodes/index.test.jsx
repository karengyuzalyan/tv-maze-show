// Module imports
import React from 'react';
import { shallow } from 'src/configs';

// Internal imports
import { Episodes } from './index';

const props = {
  episodesList: [{
    name: 'Episode',
    image: {
      original: 'Original.jpg'
    },
  }],
};

describe('src/episodes/index.jsx', () => {
  describe('<Episodes />', () => {
    test('should render and match snapshot with episodesList', () => {
      const component = shallow(<Episodes {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
