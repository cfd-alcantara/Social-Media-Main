async function postCreateUser() {
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