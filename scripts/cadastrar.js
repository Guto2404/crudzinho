function selecionarCat() {

    let categoria = document.querySelector('#categoria')
    let cat = categoria.options[categoria.selectedIndex].value;
    console.log(cat)
    btn = document.querySelector('#btn_cad')
    btn.addEventListener("click", function (event) {
        event.preventDefault();

        let prod = (document.getElementById("produto").value)
        let qnt = (document.querySelector("#quantidade").value)
        let desc = (document.querySelector("#desc").value)
        let pValor = (document.querySelector("#preço").value)
        
        if(prod,qnt,desc, pValor != '') {
        db.collection(cat).add({
            preço: pValor,
            desc: desc,
            Nome: prod,
            quantidade: qnt
        }).then((aProd) => {
            let e = document.getElementById('error')
            e.innerText = "Produto Cadastrado com Sucesso"
            console.log("Produto cadastrado com sucesso " + "ID: " + aProd.id)
            setTimeout(()=> {
                e.innerHTML= ""
                location.reload()
            }, 3000)
        }).catch(error => {
            console.log(error)
        })
    } else {
        let e = document.getElementById('error')
        e.innerText = "Necessario preencher todos os campos para completar o cadastro"
        setTimeout(()=> {
            e.innerHTML= ""
          }, 3000)
    } 
        
    })
}

let btn_m = document.getElementById("back_menu")

btn_m.addEventListener("click", function(){
    window.location.replace('../dashboard/dashboard.html')
})


