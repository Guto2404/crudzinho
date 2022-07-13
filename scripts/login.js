var btn = document.querySelector("#logar");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let e = document.querySelector("#email")
    const email = e.value
    let s = document.querySelector("#senha")
    const password = s.value
  
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() =>{
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if(user) {
          let esconder = document.getElementById("menu_login")
          esconder.style.display = "none"
          setTimeout(() => {
            alert("Bem vindo")
            window.location.replace('./dashboard/dashboard.html')
          }, 1000);
        } else {
          console.log("Usuario ou senha incorreto")
        }
        console.log(user)
      })
      .catch((error) => {
        let e = document.getElementById('error')
        if(email,password !== ""){
          e.innerText = "Senha ou usúario inseridos incorretamente"
        } else {
          e.innerText = "Preencha todos os campos para fazer login"
        }
        setTimeout(()=> {
          e.innerHTML= ""
        }, 3000)
        
      });
    }).catch(error => {
      console.log(error)
  })
    
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario " + user.email + " logado")
    } else {
      console.log("Nenhum usuario logado")
    }
  });
