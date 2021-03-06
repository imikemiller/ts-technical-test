// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';

configure({ adapter: new Adapter() });
jest.setMock('node-fetch', fetch);