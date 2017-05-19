/**
 * Created by ThaiBinh on 16-May-17.
 */
import global from '../components/Global';
const sendOrder = (token,arrayDetail) => (
    fetch(global.URL+'cart.php',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({token,arrayDetail})
        }
    )
        .then(res=> res.text())
)

module.exports = sendOrder;