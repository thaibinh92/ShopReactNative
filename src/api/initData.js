import global from '../components/Global';
const initData = () =>(
    fetch(global.URL)
    .then(res=>res.json())
);

export default initData;