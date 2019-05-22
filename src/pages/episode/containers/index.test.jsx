// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';
import configureStore from 'redux-mock-store';

import EpisodeContainer from './index';

const initialState = {}; 
const mockStore = configureStore();
let store;

describe('src/pages/episode/container/index.jsx', () => {
    describe('<EpisodeContainer />', () => {
      store = mockStore(initialState)
      test('should render and match snapshot', () => {
        const component = shallow(<EpisodeContainer />)
        expect(component).toMatchSnapshot()
      });
    });
  });