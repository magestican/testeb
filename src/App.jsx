import React from 'react';
import ReactDOM from 'react-dom';
import './styles/pages/product-dashboard.css';
import ProductDashboardPage from './components/pages/product-dashboard/index';

const App = () => (
    <div>
        {
            <ProductDashboardPage />
        }
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
