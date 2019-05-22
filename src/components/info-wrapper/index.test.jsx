// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { InfoWrapper } from './index';

const props = {
    info: [{
        name: 'test',
        data: 'test data'
    }],
    title: 'test title'
};

describe('src/info-wrapper/index.jsx', () => {
  describe('<InfoWrapper />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<InfoWrapper {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
