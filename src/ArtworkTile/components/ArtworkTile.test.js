import { createMount } from '@material-ui/core/test-utils';
import { expect } from 'chai';
import React from 'react';
import ArtworkTile from './ArtworkTile.component';

describe('<ArtworkTile />', () => {
    let mount;

    beforeAll(() => {
        mount = createMount();
    });

    it('renders div with title when loading false', () => {
        const wrapper = mount(<ArtworkTile src={'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg'} title={'Wheat Field with Cypresses'} loading={false} />);
        expect(wrapper.find('div[title="Wheat Field with Cypresses"]')).to.have.length(1);
        expect(wrapper.find('div[role="progressbar"]')).to.have.length(0);
    });

    it('renders loader when loading true', () => {
        const wrapper = mount(<ArtworkTile src={'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg'} title={'Wheat Field with Cypresses'} loading={true} />);
        expect(wrapper.find('div[title="Wheat Field with Cypresses"]')).to.have.length(0);
        expect(wrapper.find('div[role="progressbar"]')).to.have.length(1)
    });
});