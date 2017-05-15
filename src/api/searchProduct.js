import global from '../components/Global';
const searchProduct = (key) =>{
    return fetch(global.URL+`search.php?key=${key}`)
        .then(res=>res.json())
};

export default searchProduct;