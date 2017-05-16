/**
 * Created by ThaiBinh on 15-May-17.
 */
import global from '../components/Global';
const checkLogin = (token) => (
    fetch(global.URL+'check_login.php',
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

module.exports = checkLogin;