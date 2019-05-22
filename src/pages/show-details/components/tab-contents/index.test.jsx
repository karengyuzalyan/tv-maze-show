// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';

// Internal imports
import { TabContents } from './index';

const props = {
    episodesBySeasons: [[{
      name: 'Episode',
      image: {
        original: 'Original.jpg'
      },
      id: 1,
    }]],
    activeTab: 1,
    showID: '2',
};

describe('src/tab-content/index.jsx', () => {
  describe('<TabContents />', () => {
    test('should render and match snapshot', () => {
      const component = shallow(<TabContents {...props} />)
      expect(component).toMatchSnapshot()
    });
  });
});
