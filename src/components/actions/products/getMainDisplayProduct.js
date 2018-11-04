const getMainDisplayProduct = (cb) => {
    fetch('http://localhost:3000/data/content.json').then((response) => {
        response.json().then((products) => {
            if (cb) {
                cb(products);
            }
        });
    });
};
export default getMainDisplayProduct;
