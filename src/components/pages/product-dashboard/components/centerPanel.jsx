import React from 'react';
import PropTypes from 'prop-types';

const DashboardCenterPanel = (props) => {
    const { content, currentPage } = props;
    const { title, thumbnail, description } = content[currentPage];
    return (
        <div className="dashboard-center-panel">
            {thumbnail ? (
                <div className="left-section">
                    <img alt={title} src={`images/${thumbnail}`} />
                </div>
            ) : ''}
            <div className="right-section">
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

DashboardCenterPanel.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            thumbnail: PropTypes.any,
            description: PropTypes.string.isRequired,
        }),
    ).isRequired,
    currentPage: PropTypes.number.isRequired,
};


export default DashboardCenterPanel;
