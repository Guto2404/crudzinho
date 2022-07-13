function logOut(){
  auth.signOut().then(()=>{
    console.log("Usuario foi deslogado com sucesso")
    setTimeout(() => {
      alert("LogOut feito com sucesso")
      window.location.replace('../index.html')
    }, 1000);
  }).catch((error) => {
    console.log(error)
  })
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario " + user.email + " logado")
    } else {
      console.log("Nenhum usuario logado")
    }
  });


