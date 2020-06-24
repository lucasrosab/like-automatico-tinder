/**
 * Programa para disparar o like automaticamente
 * @author Lucas Rosa Barbosa
 * @version 1.0.0
 */

function intervaloLike(milisegundo) {
  return new Promise(resolve => setTimeout(resolve, milisegundo));
}

async function clicar(){
    /**
     * O tinder frequentemente altera a "Class" do Button,
     * portanto, verificar se a "Class" continua a mesma.
     * 
     * O tinder utiliza a sua "Class" acima, para todos os buttons de "Voltar", "Não", "Like" e "Boost"
     * portanto, é necessário, selecionar qual button estamos pegando. Para isso utilizamos um Array.
     * Os buttons variam entre [0-3]
     */
    let botaoLike = document
            .getElementsByClassName(
                    'button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a'
            )[1];

    let quantidadeLike = 100;
    let intervaloTempoMs = 500;

    for(var interacao = 0; interacao < quantidadeLike; interacao++){
        botaoLike.click();
        await intervaloLike(intervaloTempoMs);
    }
} 

clicar();