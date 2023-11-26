


// import { cadastrarUsuario } from "./info-conta.js"

// const botao = document.getElementById('criar-conta')

// botao.addEventListener('click', function(){

//     const nome = document.getElementById('nome')
//     const email = document.getElementById('email')
//     const senha = document.getElementById('senha')
//     const confirmarSenha = document.getElementById('confirmar')
//     const telefone = document.getElementById('telefone')

//     if(nome.value != '' && email.value != '' && senha.value != '' && confirmarSenha != '' && telefone != ''){
//         if(senha.value == confirmarSenha.value){

//             const novoUsuario = {
//                 nome: `${nome.value}`,
//                 email: `${email.value}`,
//                 senha: `${senha.value}`,
//                 telefone: `${telefone.value}`
//             }

//             cadastrarUsuario(novoUsuario)

//             nome.value = ''
//             email.value = ''
//             telefone.value = ''
//             senha.value = ''
//             confirmarSenha.value = ''
            
//             alert('Conta criada com sucesso')
            
//         } else if (senha != confirmarSenha){
//             alert('Informe senhas iguais')
//         }
//         }
//     })