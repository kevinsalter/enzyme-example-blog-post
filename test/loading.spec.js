import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';

import Loading from '../src/loading.js';

describe('<Loading />', () => {
    const LOADING_PROPS = {
        imgSrc: 'https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif'
    };
    const wrapper = shallow(<Loading {...LOADING_PROPS} />);

    it('should be wrapped in a div', () => {
        const loadingImageContainer = wrapper.find('div.loading-image-centered');

        assert.equal(loadingImageContainer.length, 1);
        assert.ok(loadingImageContainer.hasClass('loading-image-centered'));
    });

    it('should have a loading image with the correct defaults set', () => {
        const loadingImage = wrapper.find('img');

        assert.equal(loadingImage.length, 1);
        assert.equal(loadingImage.prop('src'), LOADING_PROPS.imgSrc);
    });
});
