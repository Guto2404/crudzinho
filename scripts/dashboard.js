let btn_c = document.getElementById("btn_cadastro")
let btn_p = document.getElementById("btn_pesquisa")


btn_c.addEventListener("click", function(){
    window.location.replace('../cadastro/cadastro.html')
})

btn_p.addEventListener("click", function(){
    window.location.replace('../pesquisa/pesquisa.html')
})


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario " + user.email + " logado")
    } else {
      console.log("Nenhum usuario logado")
    }
  });