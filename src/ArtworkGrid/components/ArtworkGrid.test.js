import { createMount } from '@material-ui/core/test-utils';
import { expect } from 'chai';
import React from 'react';
import ArtworkGrid from './ArtworkGrid.component';

describe('<ArtworkGrid />', () => {
    let mount;

    beforeAll(() => {
        mount = createMount();
    });

    it('renders div with title when loading false', () => {
        const wrapper = mount(<ArtworkGrid />);
        expect(wrapper.find('div[id="tileContainer"]')).to.have.length(1);
    });
});