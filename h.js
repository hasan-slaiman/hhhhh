var hasan = [];
var truen = "X"
var hh = document.querySelectorAll("div")
var aa = document.querySelector("span")
function san(){
    setInterval(function(){aa.innerHTML +='.'},1000);
            setTimeout(function(){location.reload()},3000)
}
function winner(){
    for(let a=0;a<9;a++){
        hasan[a] = hh[a].innerHTML;
        }
        if(hasan[0] == hasan[1] && hasan[1] == hasan[2] && hasan[0] != ''){
            hh[0].style.backgroundColor='black'
            hh[1].style.backgroundColor='black'
            hh[2].style.backgroundColor='black'
            aa.innerHTML=`winner ${hasan[0]}`
            san()

        }else if(hasan[3] == hasan[4] && hasan[4] == hasan[5] && hasan[3] != ''){
            hh[3].style.backgroundColor='black'
            hh[4].style.backgroundColor='black'
            hh[5].style.backgroundColor='black'
            aa.innerHTML=`winner ${hasan[3]}`
            
            san()

        }else if(hasan[6] == hasan[7] && hasan[7] == hasan[8] && hasan[6] != ''){
            hh[6].style.backgroundColor='black'
            hh[7].style.backgroundColor='black'
            hh[8].style.backgroundColor='black'
            aa.innerHTML=`winner ${hasan[6]}`
            san()
        }else if(hasan[0] == hasan[3] && hasan[3] == hasan[6] && hasan[0] != ''){
            hh[0].style.backgroundColor='black'
            hh[3].style.backgroundColor='black'
            hh[6].style.backgroundColor='black'
            aa.innerHTML=`winner ${hasan[0]}`
            san()
            }else if(hasan[1] == hasan[4] && hasan[4] == hasan[7] && hasan[1] != ''){
                hh[4].style.backgroundColor='black'
                hh[1].style.backgroundColor='black'
                hh[7].style.backgroundColor='black'
                aa.innerHTML=`winner ${hasan[1]}`
                san()
            }else if(hasan[3] == hasan[5] && hasan[5] == hasan[8] && hasan[3] != ''){
            hh[3].style.backgroundColor='black'
            hh[5].style.backgroundColor='black'
            hh[8].style.backgroundColor='black'
            aa.innerHTML=`winner ${hasan[3]}`
            san()
            }else if(hasan[0] == hasan[4] && hasan[4] == hasan[8] && hasan[0] != ''){
                hh[0].style.backgroundColor='black'
                hh[4].style.backgroundColor='black'
                hh[8].style.backgroundColor='black'
                aa.innerHTML=`winner ${hasan[0]}`
                san()
            }else if(hasan[2] == hasan[4] && hasan[4] == hasan[6] && hasan[4] != ''){
                hh[2].style.backgroundColor='black'
                hh[4].style.backgroundColor='black'
                hh[6].style.backgroundColor='black'
                aa.innerHTML=`winner ${hasan[1]}`
                san()
            }
           
                    
        
}
for(let i=0;i<10;i++){
    
    hh[i].onclick = function(){
        if(truen ==="X" && hh[i].innerHTML == ''){
     hh[i].textContent="X";
     aa.innerHTML="O"
      truen = "O";
      
}else if(truen === "O" && hh[i].innerHTML == ''){
     hh[i].textContent="O";
     aa.innerHTML="X";
     truen ="X";

}
winner()
}

} 




