function calcular(){
    // ".value" serve para pegar o valor de um input
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue

    //recupera o valor do "mascote" digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)

     //recupera o valor do "homenagem" digitado pelo usuário
    homenagem = Number(document.getElementById("homenagem").value)

    //recupera a quantidade de leite
    leite = Number(document.getElementById("leite").value)

    //recupera a quantidade de kits 
    kit = Number(document.getElementById("kit").value)

    //recupera a quantidade de suplementos 
    suplemento = Number(document.getElementById("suplemento").value)

    //Calcula a soma
    soma = mascote + homenagem +(2*(leite)) 

    //realiza a transferência do valor da soma para o HTML com o comando ".innerHTML=insira o valor do IF"
    equipe = document.getElementById("equipe").value

    // Recupera o valor da variável sangue
    sangue = Number(getElementById("sangue").value)    
    if (equipe == "Laranja")
    {
        if(kit >= 97 && suplemento >= 49){
            soma += 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if(kit >= 78 && suplemento >= 39){
            soma +=  4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if(kit >= 49 && suplemento >= 25){
            soma +=  2500 + ((kit - 48) * 30) + ((suplemento - 25) * 15)
        }
        else if(kit >= 19 && suplemento){
            soma +=  1000 + (( kit - 19 ) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 49){
            soma +=  2500 + ((sangue - 49)* 20)
        }
        else{
            soma = soma +(sangue * 20)
        }
    }
    else if (equipe == "Preta"){
        //verifica kit e suplementos

        //verifica sangue
        if(sangue >= 52){
            soma = soma 
        }   
    }
    else if (equipe == "Roxa"){
        
    }
    else if (equipe == "Verde"){
        
    }
    else{//equipe vermelha

    }
    
    //doação de sangue
    
    //retorna
    //template string
    document.getElementById("soma").innerHTML = `A soma é: ${soma}`
}