const listaDeProdutos = document.getElementById("list_prod")
const prod_select = document.getElementById("produto_selecionado")


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("usuario " + user.email + " logado")
    } else {

        console.log("Nenhum usuario logado")
    }
});

function selecionarCat() {

    let categoria = document.querySelector('#categoria')
    let cat = categoria.options[categoria.selectedIndex].value;
    listaDeProdutos.innerHTML = "<h1 class='titulo'>lista de todos os produtos</h1>"

    db.collection(cat).get().then((snapshot) => {
        snapshot.forEach(produto => {
            let acc = `<input data-id="${produto.id}" id="select_prod" class="input_name" value="${produto.data().Nome}" readonly>`
            listaDeProdutos.innerHTML += acc

            btn = document.querySelector('#list_prod')
            btn.addEventListener("click", function (event) {
                let prod = event.target
                let prod_id = prod.getAttribute("data-id")
                let docRef = db.collection(cat).doc(prod_id)

                docRef.get().then((doc) => {
                    prod_select.innerHTML = `<h1 class='titulo'>lista de todos os produtos</h1>
                    <input class="input_cad" id="sit_produto_nome" type="text" value="Nome: ${doc.data().Nome}" readonly>
                    <input class="input_cad" id="sit_produto_desc" type="text" value="Descrição: ${doc.data().desc}" readonly>
                    <input class="input_cad" id="sit_produto_quantidade" type="text" value="Quantidade: ${doc.data().quantidade}" readonly>
                    <input class="input_cad" id="sit_produto_preço" type="text" value="Preço: ${doc.data().preço}" readonly>`
                })

                btn_delete = document.querySelector("#btn_del")
                btn_delete.addEventListener("click", function (event) {

                    if (prod_id != "") {
                        db.collection(cat).doc(prod_id).delete().then(() => {
                            let info = document.getElementById("info")
                            info.innerText = "Exclusão realizada com sucesso"
                            setTimeout(() => {
                                info.innerHTML = ""
                            }, 1000)
                            setTimeout(() => {
                                location.reload()
                            }, 1000)
                        }).catch(error => {
                            console.log(error)
                        })
                    } else {
                        let info = document.getElementById("info")
                        info.innerText = "Necessario Selecionar um Produto antes de excluir ou alterar"
                    } console.log("Documento Deletado com Sucesso")
                    setTimeout(() => {
                        info.innerHTML = ""
                    }, 3000)
                })

                btn_alterar = document.querySelector("#btn_alt")
                btn_alterar.addEventListener("click", function (event) {
                    let alt = document.getElementById("alt")
                    alt.style.display = "flex"
                    docRef.get().then((doc) => {
                        let prod_alt = document.getElementById("alteração_produto")
                        prod_alt.innerHTML = `<h1 class='titulo'>Alterar Cadastro de Produto</h1>
                    <input class="input_cad" id="alt_produto_nome" type="text" value="${doc.data().Nome}" >
                    <input class="input_cad" id="alt_produto_desc" type="text" value="${doc.data().desc}" >
                    <input class="input_cad" id="alt_produto_quantidade" type="text" value="${doc.data().quantidade}" >
                    <input class="input_cad" id="alt_produto_preço" type="text" value="${doc.data().preço}">`
                    })
                })
                btn_alt_prod = document.getElementById("btn_alt_prod")
                btn_alt_prod.addEventListener("click", function (event) {
                    
                    let prod = (document.getElementById("alt_produto_nome").value)
                    let qnt = (document.querySelector("#alt_produto_quantidade").value)
                    let desc = (document.querySelector("#alt_produto_desc").value)
                    let pValor = (document.querySelector("#alt_produto_preço").value)

                docRef.set({
                    Nome: prod,
                    desc: desc,
                    quantidade: qnt,
                    preço: pValor
                }).then(()=>{
                    let info1 = document.getElementById("info1")
                    info1.innerText = "Alteração Concluida"
                    setTimeout(()=>{
                        info.innerText=""
                    },3000)
                    setTimeout(()=>{
                    location.reload()
                    },3000)
                }).catch(error =>{
                    console.log(error)
                })
                })
            })
        })
    })
}

let btn_m = document.getElementById("back_menu")

btn_m.addEventListener("click", function(){
    window.location.replace('../dashboard/dashboard.html')
})

let btn_c = document.getElementById("btn_cancel")

btn_c.addEventListener("click", function(){
    location.reload()
})
