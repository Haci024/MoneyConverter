let buttonIn=document.querySelectorAll(".valuta-block-in button");
let buttonOut=document.querySelectorAll(".valuta-block-out button");
let inMoney=document.querySelectorAll(".inner");
let outMoney=document.querySelectorAll(".outer");
let CnvrtValueIn=document.querySelector(".valuta-in");
let CnvrtValueOut=document.querySelector(".valuta-out");
let base="USD";
let symbols="RUB";
let value;
let active;
function ClickBtn(btn,a){
    btn.forEach(element =>{
        element.onclick=async (e)=>{
            btn.forEach((item)=>{
                item.classList.remove("active");
            
            })
            element.classList.add("active");
           
            if(a=="valuta-block-in inner"){
    base=element.innerText;

            }
            else if(a=="valuta-block-out outer"){
               console.log(symbols=element.innerText);
          
            }
           await Convert();
          c(active);
         
        }
    });
   
}
ClickBtn(buttonIn,"valuta-block-in inner");
ClickBtn(buttonOut,"valuta-block-out outer");




async function Convert() {
  const fet=await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
        const info= await fet.json();
          
        CnvrtValueIn.textContent = ` 1 ${base}=${info.rates[`${symbols}`].toFixed(2)} ${symbols}`;
        CnvrtValueOut.textContent = ` 1 ${symbols}=${1/info.rates[`${symbols}`].toFixed(2)} ${base}`;
   
}
 Convert();
inMoney.oninput=(item)=>{
    if(inMoney.value !=""){
        outMoney.value=(value*inMoney.value).toFixed(2);
    }
    else{
        outMoney.value="";
    }
active="valuta-block-in inner";
}
outMoney.oninput=(item)=>{
    if(outMoney.value !=""){
        inMoney.value=(1/value*outMoney.value).toFixed(2);
    }
    else{
        inMoney.value="";
    }
active="valuta-block-out outer";
}

function c(p){
if(p=="valuta-block-in"){
    if(inMoney.value!=""){
        outMoney.value=(1/value*inMoney.value).toFixed(2);
    }
    else{
        outMoney.value="";
    }
}
else if(p=="valuta-block-out "){
    if(outMoney.value!=""){
        inMoney.value=(value*outMoney.value).toFixed(2);
    }
    else{
        inMoney.value="";
    }
   
  }
}