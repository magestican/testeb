import React from 'react';
import Header from './components/header';
import CenterPanel from './components/centerPanel';
import BottomPanel from './components/bottomPanel';

const ProductDashboardPage = (props) => {
    const {
        mainDisplayProduct,
        getProductAction,
        gotProducts,
        changeCurrentPageAction,
        currentPage,
        toggleCollapseDashboardAction,
        dashboardCollapsed,
    } = props;

    if (mainDisplayProduct === null && !gotProducts) {
        getProductAction();
    }
    return (mainDisplayProduct != null ? (
        <div className="product-dashboard-wrapper">
            <Header
                {...mainDisplayProduct}
                toggleCollapseDashboardAction={toggleCollapseDashboardAction}
                dashboardCollapsed
            />
            {!dashboardCollapsed ? (
                <div>
                    <CenterPanel {...mainDisplayProduct} currentPage={currentPage} />
                    <BottomPanel
                        {...mainDisplayProduct}
                        currentPage={currentPage}
                        changeCurrentPageAction={changeCurrentPageAction}
                    />
                </div>
            ) : ''}
        </div>
    ) : 'Loading');
};
export default ProductDashboardPage;
