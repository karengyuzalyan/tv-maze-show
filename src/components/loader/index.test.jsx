// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { Loader } from './index';

const props = {
    children: [<div/>],
    status: true
};

describe('src/loader/index.jsx', () => {
  describe('<Loader />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<Loader {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
