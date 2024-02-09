async function postcreateuser() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;

    res = await fetch("http://localhost:3000/api/v1/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    if(res.ok){
        console.log("successful")
    } else {
        console.log("registration fails")
    }
}

// fetch('http://localhost:3000/api/v1/auth/register', {
//     method: 'POST',
//     headers: {
//          'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "username": "Carldsad",
//         "password": "Wowwowwow"
//     })
// }).then(res => {
//     return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('error'))
// if(res.ok){
//     const data = res.json()
//     console.log(data)
// } else {
//     console.log("registration fails")
// }