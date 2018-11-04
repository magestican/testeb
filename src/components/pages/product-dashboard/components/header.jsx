import React from 'react';
import PropTypes from 'prop-types';
import dropdownCaretImage from '../../../../svg/caret.svg';
import dropdownInfoImage from '../../../../svg/info.svg';

const DashboardHeader = (props) => {
    const { title, toggleCollapseDashboardAction } = props;
    return (
        <div className="dashboard-header">
            <div className="left-section">
                <object aria-label="info" data={dropdownInfoImage} type="image/svg+xml" />
            </div>
            <div className="center-section">
                <h3>{title}</h3>
            </div>
            <div
                role="button"
                tabIndex="0"
                onKeyDown={toggleCollapseDashboardAction}
                className="right-section hand"
                onClick={toggleCollapseDashboardAction}
            >
                <object
                    className="collapse"
                    aria-label="collapse"
                    data={dropdownCaretImage}
                    type="image/svg+xml"
                />
            </div>
        </div>
    );
};

DashboardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    toggleCollapseDashboardAction: PropTypes.func.isRequired,
};
export default DashboardHeader;
