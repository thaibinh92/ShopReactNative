import global from '../components/Global';
const getListProduct = (idType, page) =>{
    return fetch(global.URL+`product_by_type.php?id_type=${idType}&page=${page}`)
        .then(res=>res.json())
};

export default getListProduct;