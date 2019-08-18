import { createMount } from '@material-ui/core/test-utils';
import { expect } from 'chai';
import React from 'react';
import ArtworkDetails from './ArtworkDetails.component';

describe('<ArtworkDetails />', () => {
    let mount;

    beforeAll(() => {
        mount = createMount();
    });

    it('renders modal when open', () => {
        const wrapper = mount(<ArtworkDetails open={true} data={{
            title: "Wheat Field with Cypresses",
            primaryImageSmall: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
            artistDisplayName: "Vincent van Gogh",
            artistDisplayBio: "Dutch, Zundert 1853–1890 Auvers-sur-Oise"
        }} />);
        expect(wrapper.find('img[alt="Wheat Field with Cypresses"]')).to.have.length(1);
    });

    it('renders nothing when closed', () => {
        const wrapper = mount(<ArtworkDetails open={false} data={{
            title: "Wheat Field with Cypresses",
            primaryImageSmall: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
            artistDisplayName: "Vincent van Gogh",
            artistDisplayBio: "Dutch, Zundert 1853–1890 Auvers-sur-Oise"
        }} />);
        expect(wrapper.find('img[alt="Wheat Field with Cypresses"]')).to.have.length(0);
    });
});