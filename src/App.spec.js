import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import data from './Data';
import Search from './pages/Search';

configure({ adapter: new Adapter() });

jest.mock('axios');

describe('Search repositories test', () => {
  let wrapper;

  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Loads repositories', async () => {
    // mock axios promise
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper = mount(<Search />);
    });

    // check the render output
    wrapper.update();

    await expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/search/repositories?q=calculator',
    );

    await expect(axios.get).toHaveBeenCalledTimes(1);

    await expect(wrapper.find('RepoList').props().repos).toEqual(data);
  });
});
