import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configuration of enzyme
Enzyme.configure({ adapter: new Adapter() });

export * from 'enzyme';