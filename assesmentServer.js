function rollDice (n){
    let score = [];
    for(i=0; i<n; i++){
        score[i] = 0;
        for(j=0; j<5; j++){
            let random = Math.floor((Math.random()*6)+1) 
            console.log(`percobaan ke ${j + 1} oleh pemain ke ${i + 1} dadu bernilai ${random}`)
            if(random % 2 === 0){
                score[i] +=5;
            }else{
                score[i] -=3;
            }
        }
    }
    const max = Math.max(...score)
    console.log(`score dari masing-masing pemain secara berurutan adalah ${score}`)
    console.log(`dengan nilai tertinggi adalah ${max}`)
    console.log(`maka pemenangnya adalah pemain ke ${score.indexOf(max) + 1}`)
    return score
}
//masukkan jumlah pemain dengan mengganti nilai n
rollDice(3)
