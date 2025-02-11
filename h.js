let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("texes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let category = document.getElementById("category")
let count = document.getElementById("count")
let submit = document.getElementById("submit")
let total = document.getElementById("total")
let search = document.getElementById("search")

let mod = 'creat';
let t;
let n = '!'

// get totle
function gettotal(){
    if(price.value != ''){
        let sum = (+ +price.value + +taxes.value + +ads.value) - (+discount.value);
        total.innerHTML = sum;
        total.style.background='green'
    }else{
        total.innerHTML = '';
        total.style.background='red'


    }
}

gettotal()
let arr =[]
if(localStorage.hasan != null){
    arr = JSON.parse(localStorage.hasan)
}
submit.onclick = function(){
    let usr = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
//crunt
if(title.value !=''&& price.value !=''&& category.value !=''&& arr.count <=100)
    {if(mod === 'creat'){
    if(count.value>1){
        for(let i=0;i<count.value;i++){
            arr.push(usr)
    
            showDalat()

        }
    }else{
            arr.push(usr)
    
        }

}else{
    arr[t] = usr;
    mod = 'creat'
    submit.innerHTML = 'Creat';
    count.style.display='block';
}
clearData()
}

localStorage.setItem('hasan',JSON.stringify(arr));

showDalat()
}



// clear input
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
    
}



//read
function showDalat(){
    let table = '';
    for(let a=0 ;a<arr.length;a++){
        table += `
         <tr>
              <td>${a}</td>
              <td>${arr[a].title}</td>
              <td>${arr[a].price}</td>
              <td>${arr[a].taxes}</td>
              <td>${arr[a].ads}</td>
              <td>${arr[a].discount}</td>
              <td>${arr[a].count}</td>
              <td>${arr[a].category}</td>
              <td><button onclick='Up(${a})' id="update">update</button></td>
              <td><button onclick='Del(${a})' id="Delate">Delate</button></td>
            </tr>
        `
    }
    document.getElementById("tbody").innerHTML = table;
    if(arr.length>0){
        document.querySelector(".dd").innerHTML =`<button onclick='All()'>Dalet All(${arr.length})</button>`
    }else{
        document.querySelector(".dd").innerHTML ='';
    }
    
}
showDalat();


//dalet
function Del(e){
    arr.splice(e,1);
    localStorage.arr;
    showDalat()

}

function All(){
    localStorage.clear();
    arr.splice(0)
    showDalat()
}


//updat
function Up(q){
    title.value = arr[q].title;
    price.value = arr[q].price;
    taxes.value = arr[q].taxes;
    ads.value = arr[q].ads;
    discount.value = arr[q].discount;
    category.value = arr[q].category;
    count.style.display='none'
    gettotal()
    submit.innerHTML='Update';
    mod = 'Update';
    t=q;
    scroll({
        top:0,
        behavior:"smooth",
    })
}

//search 
let ss = 'title';

function gets(id){
    if(id == 'searchtitle'){
        ss = 'title'
    }else{
        ss = 'category'

    }
    search.placeholder = 'search By ' + ss;

    search.focus();
    search.value = '';
    showDalat()

}
function keyup(o){
    let table = '';
    for(let a=0;a<arr.length;a++){

    if(ss == 'title'){
            if(arr[a].title.includes(o.toLowerCase()) || arr[a].category.includes(o.toString())){
                  table += `
         <tr>
              <td>${a}</td>
              <td>${arr[a].title}</td>
              <td>${arr[a].price}</td>
              <td>${arr[a].taxes}</td>
              <td>${arr[a].ads}</td>
              <td>${arr[a].discount}</td>
              <td>${arr[a].count}</td>
              <td>${arr[a].category}</td>
              <td><button onclick='Up(${a})' id="update">update</button></td>
              <td><button onclick='Del(${a})' id="Delate">Delate</button></td>
            </tr>
        `
                
            }
            
        }
        else{
            if(arr[a].category.includes(o.toLowerCase())){
                  table += `
         <tr>
              <td>${a}</td>
              <td>${arr[a].title}</td>
              <td>${arr[a].price}</td>
              <td>${arr[a].taxes}</td>
              <td>${arr[a].ads}</td>
              <td>${arr[a].discount}</td>
              <td>${arr[a].count}</td>
              <td>${arr[a].category}</td>
              <td><button onclick='Up(${a})' id="update">update</button></td>
              <td><button onclick='Del(${a})' id="Delate">Delate</button></td>
            </tr>
        `
                
            
            }
        }


    }

    document.getElementById("tbody").innerHTML = table;

}
