import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';

import MainView from '../src/main-view.js';
import {Users} from '../fixtures/users.js';

describe('<MainView />', () => {
    const MAIN_VIEW_PROPS = {
        ghUsers: Users,
        refreshUserList: spy()
    };

    it('should contain a list of users', () => {
        const wrapper = shallow(<MainView {...MAIN_VIEW_PROPS} />);
        const listWrapper = wrapper.find('ul');

        assert.equal(listWrapper.length, 1);
        assert.ok(listWrapper.children());
    });

    it('should call the refreshUserList() method when button is clicked', () => {
        const wrapper = shallow(<MainView {...MAIN_VIEW_PROPS} />);
        const refreshUserListButton = wrapper.find('button');
        refreshUserListButton.simulate('click');

        assert.ok(MAIN_VIEW_PROPS.refreshUserList.calledOnce);
    });
});
