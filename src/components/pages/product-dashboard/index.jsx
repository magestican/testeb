import React from 'react';
import getMainDisplayProduct from '../../actions/products/getMainDisplayProduct';
import ProductDashboardWrapper from './wrapper';

class ProductDashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainDisplayProduct: null,
            gotProducts: false,
            currentPage: 0,
            dashboardCollapsed: false,
        };
    }

    getProduct = () => {
        getMainDisplayProduct(((data) => {
            this.setState({ gotProducts: true, mainDisplayProduct: data });
        }));
    };

    changeCurrentPage = (changedPage) => {
        this.setState({ currentPage: changedPage });
    }

    toggleCollapseDashboard = (ev) => {
        const { dashboardCollapsed } = this.state;
        if (ev.key === 38 || ev.type === 'click') {
            this.setState({ dashboardCollapsed: !dashboardCollapsed });
        }
    }

    render() {
        const {
            gotProducts,
            mainDisplayProduct,
            currentPage,
            dashboardCollapsed,
        } = this.state;
        return (
            <div className="product-dashboard-page">
                <ProductDashboardWrapper
                    mainDisplayProduct={mainDisplayProduct}
                    gotProducts={gotProducts}
                    currentPage={currentPage}
                    dashboardCollapsed={dashboardCollapsed}
                    toggleCollapseDashboardAction={this.toggleCollapseDashboard}
                    changeCurrentPageAction={this.changeCurrentPage}
                    getProductAction={this.getProduct}
                />
            </div>
        );
    }
}

export default ProductDashboardPage;
