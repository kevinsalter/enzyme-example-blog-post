import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import Loading from './loading.js';
import MainView from './main-view.js';

class Container extends Component {
    static propTypes = {
        loadingTimeout: PropTypes.number.isRequired
    };

    static defaultProps = {
        loadingTimeout: 2000
    };

    state = {
        ghUsers: [],
        loading: true
    };

    componentDidMount() {
        this.fetchNewData();
    }

    loadGhUsers() {
        const randomOffset = Math.floor(Math.random() * 500);
        return $.getJSON(`http://api.github.com/users?&per_page=10&since=${randomOffset}`);
    }

    initiateLoadingIndicatorTimeout() {
        let dfd = $.Deferred();
        setTimeout(() => dfd.resolve(), this.props.loadingTimeout);
        return dfd.promise();
    }

    fetchNewData() {
        $.when(this.loadGhUsers(), this.initiateLoadingIndicatorTimeout())
            // we ignore the repsonse from initiateLoadingIndicatorTimeout
            // which is the last argument received in the `done` method
            .done( (ghUsersResponse, _) => {
                this.setState({ghUsers: ghUsersResponse[0]});
                this.finishLoading();
            });
    }

    refreshUserList = () => {
        this.setState({loading: true});
        this.fetchNewData();
    }

    finishLoading() {
        this.setState({loading: false});
    }

    render() {
        let content;
        if (this.state.loading) {
            content = <Loading imgSrc="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif" />;
        } else {
            content = <MainView ghUsers={this.state.ghUsers} refreshUserList={this.refreshUserList} />
        }

        return <div className="app-conatiner-wrapper">{content}</div>;
    }
}

module.exports = Container;
