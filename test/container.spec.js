import React from 'react';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';

import Container from '../src/container.js';

describe('<Container />', () => {
    it('should show the <Loading /> component be default', () => {
        const wrapper = shallow(<Container />);
        const container = wrapper.first('div');
        const loadingComponent = wrapper.find('Loading');

        assert.equal(container.length, 1);
        assert.equal(loadingComponent.length, 1);
    });

    it('should show the <MainView /> component when it has loaded', () => {
        const wrapper = shallow(<Container />);
        wrapper.setState({loading: false});
        const mainView = wrapper.find('MainView');

        assert.equal(mainView.length, 1);
    });

    it('calls componentDidMount() lifecycle method', () => {
        const componentDidMountSpy = spy(Container.prototype, 'componentDidMount');
        const wrapper = mount(<Container />);

        assert.ok(Container.prototype.componentDidMount.calledOnce);

        componentDidMountSpy.restore();
    });
});
