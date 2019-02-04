// Module imports
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

// Internal imports
import { Home } from './index';

// Configuration of enzyme
Enzyme.configure({ adapter: new Adapter() });

describe('src/episodes/index.jsx', () => {
  describe('<Episodes />', () => {
    test('should render and match snapshot with episodesList', () => {
      const component = shallow(<Home />)
      expect(component).toMatchSnapshot()
    });
  });
});
