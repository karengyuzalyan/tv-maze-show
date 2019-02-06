import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configuration of enzyme
Enzyme.configure({ adapter: new Adapter() });

export const configs = {
    API_URL: 'http://api.tvmaze.com/',
    SHOW_ID: 6771,
    BASE_URL: 'http://localhost:3000/'
}

export * from 'enzyme';
