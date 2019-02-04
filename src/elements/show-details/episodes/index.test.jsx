// Module imports
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

// Internal imports
import { Episodes } from './index';

// Configuration of enzyme
Enzyme.configure({ adapter: new Adapter() });

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
