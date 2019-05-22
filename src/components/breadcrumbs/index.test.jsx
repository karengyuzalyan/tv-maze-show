// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { BreadCrumbs } from './index';

const props = {
    breadCrumbs: [{
        name: 'test',
        active: true
    }]
};

describe('src/breadcrumbs/index.jsx', () => {
  describe('<BreadCrumbs />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<BreadCrumbs {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
