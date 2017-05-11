import global from '../components/Global';
const signIn = (email,password) => (
    fetch(global.URL+'login.php',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({email,password})
        }
    )
        .then(res=> res.json())
)

module.exports = signIn;