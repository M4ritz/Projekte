function login(){
    let name = document.getElementById('uName').value
    console.log(name)
    let password = document.getElementById('uPassword').value
    console.log(password)

    if(password != ""&&name!= ""){
        let data = {
            'user': name,
            'password': password
        }

        fetch('auth-user',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            return response.json()
        })
        .then((user_data)=>{
            console.log(user_data)
            if(user_data.success){
                window.location.href = './mainSide.html'
            }
            else document.getElementById('errorCodes').innerHTML ='Username und/oder Passwort sind Falsch'
        })
    }
    else{
        document.getElementById('errorCodes').innerHTML = 'Bitte alles ausfüllen!'
    }
}