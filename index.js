var plus = document.querySelectorAll(".plus");
var moins = document.querySelectorAll(".moins");
var qty = document.querySelectorAll(".quanti");

var somme = 0;

   plus.forEach(btn=>{
       btn.addEventListener('click', function(){ 
          var parent = this.parentNode;
          var numb = parent.querySelector(".quanti");
          numb.value++;
          var nobr = parent.querySelector(".nbr");
          var nbr = Number(nobr.textContent);
          somme = somme + nbr;
          console.log(somme)
           
       })
    })
    moins.forEach(btn=>{
       btn.addEventListener('click', function(){
        var parent = this.parentNode;
        var numb = parent.querySelector(".quanti");
        var nobr = parent.querySelector(".nbr");
        var nbr = Number(nobr.textContent);
            if(numb.value > 0){
                numb.value--;
                somme = somme - nbr;
                console.log(somme)
            }
        })
    })