// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { ShowDetails } from './index';

const props = {
    match: {
        params: {
            id: '1'
        }
    },
    getEpisodes: jest.fn(x => x),
    getShowDetails: jest.fn(x => x),
};

describe('src/pages/show-details/components/show-details/index.jsx', () => {
  describe('<ShowDetails />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<ShowDetails {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
