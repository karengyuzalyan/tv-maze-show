// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { NotFound } from './index';

describe('src/pages/not-found/index.jsx', () => {
  describe('<NotFound />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<NotFound />)
      expect(component).toMatchSnapshot()
    });
  });
});
