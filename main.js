//Buat dalam self invoking function
(function(){
    //Seleksi
    let screen = document.querySelector('.screen');
    let button = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear')


    //Evenet list pada button untuk diberikan pada screen
    button.forEach(function(btn){
        btn.addEventListener('click',function(e){
            // console.log(e.target.dataset.num);
            let value = e.target.dataset.num;
            screen.value += value;

        })
    })




    //Tombol equal mengambil nilai sama dari value yang sudah diambil sebelumnya
    equal.addEventListener('click',function(e){

        if(screen.value === ""){
            screen.value = ""
        }
        else{
        let answer = eval(screen.value)
        screen.value = answer;
        }
    })

    clear.addEventListener('click',function(e){
        screen.value="";
    })










}())