const cupSmall = document.querySelectorAll(".cup-small")
console.log(cupSmall)
const cups = document.querySelector(".cups")

const cupFill = document.querySelector(".percetage")
console.log(cupFill)
const liters = document.getElementById("liters")// Remainded liters
console.log(liters)
const remainCup = document.getElementById("remained")
// cupSmall[0].addEventListener("click",function(){
//     cupSmall[0].classList.add("full")
//     cupFill.style.height= "41px"
//     cupFill.innerHTML = "20%"
// })

const fillWithOneCap = 100/cupSmall.length //12.5%
console.log(fillWithOneCap)
let remLiters = 2;
let addHeight_One_Cup = 0;
let addPercetageOfFill = 0;


//     console.log(e.target)
//    const parent = e.target.parentNode;
//    let index = Array.prototype.findIndex.call(parent.children,(c)=>c===e.target)
//    console.log(index)

    // const i = cupSmall.indexOf(e.target)
    // console.log(i)
   
   const add = function(element){
    addHeight_One_Cup=addHeight_One_Cup+41;
    addPercetageOfFill=addPercetageOfFill+12.5;
    remLiters=remLiters-0.25;
    element.classList.add("full")
    cupFill.style.height=`${addHeight_One_Cup}px`;
    cupFill.innerHTML = `${addPercetageOfFill}%`;
    liters.innerText= `${remLiters}L`
   } 
    
   const drain = function(element){
    addHeight_One_Cup=addHeight_One_Cup-41;
    addPercetageOfFill=addPercetageOfFill-12.5;
    remLiters=remLiters+0.25;
    element.classList.remove("full")
    cupFill.style.height=`${addHeight_One_Cup}px`;
    cupFill.innerHTML = `${addPercetageOfFill}%`;
    liters.innerText= `${remLiters}L`
   } 


//     for (let i=0;i<index;i++){
//         add();
//     }

   
cupSmall.forEach(function(ele, i, array){
    ele.addEventListener("click", function(){
        console.log(i)
        if(ele.classList.contains("full")){
            if (i>=0){
                array.forEach((ele, j)=>-j<=-i&&ele.classList.contains("full")?drain(ele):null)
                if(remLiters ===2){
    
                    remainCup.style.height="0"
                    cupFill.style.height=`0px`;
                    cupFill.innerHTML = ``;
                    liters.innerText= `2L`
                
               }
            }



         
        }else{
            if (i>=0){
                array.forEach((ele, j)=>j<=i&&!ele.classList.contains("full")?add(ele):null)
                if(remLiters ===0){
    
                    remainCup.style.height="0"
                    cupFill.style.height=`330px`;
                    cupFill.innerHTML = `100%`;
                    liters.innerText= ``
                
               }
            }
           
         

        }
        
    })
})

