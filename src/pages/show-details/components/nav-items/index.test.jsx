// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { NavItems } from './index';

const props = {
    seasons: ["1", "2"],
    activeTab: 1,
};

describe('src/nav-items/index.jsx', () => {
  describe('<NavItems />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<NavItems {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
