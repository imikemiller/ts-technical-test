import { createMount } from '@material-ui/core/test-utils';
import { expect } from 'chai';
import React from 'react';
import ArtworkSearch from './ArtworkSearch.component';

describe('<ArtworkSearch />', () => {
    let mount;

    beforeAll(() => {
        mount = createMount();
    });

    it('renders an input', () => {
        const wrapper = mount(<ArtworkSearch value={'Sunflowers'} />);
        expect(wrapper.find('input[value="Sunflowers"]')).to.have.length(1);
    });
});