import React from 'react';
import PropTypes from 'prop-types';
import sliderArrowImage from '../../../../svg/slider-arrow.svg';

const DashboardBottomPanel = (props) => {
    const { content, currentPage, changeCurrentPageAction } = props;
    const { title } = content[currentPage];

    const goLeft = (ev) => {
        if (ev.key === 37 || ev.type === 'click') {
            changeCurrentPageAction(currentPage - 1);
        }
    };

    const goRight = (ev) => {
        if (ev.key === 39 || ev.type === 'click') {
            changeCurrentPageAction(currentPage + 1);
        }
    };
    return (
        <div className="dashboard-bottom-panel">
            <div
                className={`left-section hand ${currentPage === 0 ? 'disabled-insensitive' : ''}`}
                role="button"
                tabIndex="0"
                onKeyPress={goLeft}
                onClick={goLeft}
            >
                <object aria-label="back" data={sliderArrowImage} type="image/svg+xml" />
                <h4>Previous</h4>
            </div>
            <div
                className={`right-section hand ${currentPage === (content.length - 1) ? 'disabled-insensitive' : ''}`}
                role="button"
                tabIndex="0"
                onKeyPress={goRight}
                onClick={goRight}
            >
                <object aria-label="next" data={sliderArrowImage} type="image/svg+xml" />
                <h4>{title}</h4>

            </div>
        </div>
    );
};

DashboardBottomPanel.propTypes = {
    changeCurrentPageAction: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            thumbnail: PropTypes.any,
            description: PropTypes.string.isRequired,
        }),
    ).isRequired,
};


export default DashboardBottomPanel;
