import global from '../components/Global';
const getListProduct = (idType, page) =>{
    let url;
    if(idType=== 'COLECTION'){
        url = global.URL+`get_collection.php?page=${page}`;
    }else{
        url = global.URL+`product_by_type.php?id_type=${idType}&page=${page}`;
    }
    return fetch(url)
        .then(res=>res.json())
};

export default getListProduct;