import React, {PropTypes} from 'react';

const Loading = props => {
    let loadingTextNode = '';
    if (props.showLoadingText) {
        loadingTextNode = <h2 className="loading-title">{props.loadingText}</h2>;
    }

    return (
        <div className="loading-image-centered">
            <img src={props.imgSrc}
                 width={props.width}
                 height={props.height}
                 alt={props.altText}
            />
            {loadingTextNode}
        </div>
    );
}

Loading.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    loadingText: PropTypes.string.isRequired,
    showLoadingText: PropTypes.bool.isRequired
};

Loading.defaultProps = {
    width: '250px',
    height: '250px',
    altText: 'loading...',
    loadingText: 'Loading...',
    showLoadingText: true
};

export default Loading;
