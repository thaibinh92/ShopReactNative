import global from '../components/Global';
const orderHistory = (token) => (
    fetch(global.URL+'order_history.php',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({token})
        }
    )
        .then(res=> res.json())
)

module.exports = orderHistory;