// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { Home } from './index';

describe('src/pages/home/index.jsx', () => {
  describe('<Home />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<Home />)
      expect(component).toMatchSnapshot()
    });
  });
});
