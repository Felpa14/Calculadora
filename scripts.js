let display = document.getElementById('display'); /* define display como tela da calculadora */

let buttons = Array.from(document.getElementsByClassName('button')); /*converte cada botao pressionado para um array*/

buttons.map( button => { 
    button.addEventListener('click', (e) => { 
        switch(e.target.innerText){
            case 'C': /*deleta todos os dados presentes na tela da calculadora*/
                display.innerText = '';
                break;
            case '←': /*ira apagar o ultimo caractere digitado*/
                if(display.innerText){
                 display.innerText = display.innerText.slice(0,-1);
                }
            break;
            case '=': /*ira fazer toda a conta matematica*/
                try{ /* o try serve como um check pra ver se o usuario realmente digitou uma expressao capaz de ser resolvida */
                    display.innerText = eval(display.innerText); /* o comando eval eh responsavel por tornar possivel a realizacao das expressoes matematicas*/
                } catch { /*caso a expressao seja impossivel de ser resolvida por erro de digitacao, ira aparecer error*/
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    
    });
});