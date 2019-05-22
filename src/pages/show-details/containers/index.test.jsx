// Module imports
import React from 'react';
import { shallow } from 'src/tests-configs';
import configureStore from 'redux-mock-store';

import ShowDetailsContainer from './index';

const initialState = {}; 
const mockStore = configureStore();
let store;

describe('src/show-details/container/index.jsx', () => {
    describe('<ShowDetailsContainer />', () => {
      store = mockStore(initialState)
      test('should render and match snapshot', () => {
        const component = shallow(<ShowDetailsContainer />)
        expect(component).toMatchSnapshot()
      });
    });
  });