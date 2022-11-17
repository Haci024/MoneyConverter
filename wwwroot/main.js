let buttonIn=document.querySelectorAll(".valuta-block-in button");
let buttonOut=document.querySelectorAll(".valuta-block-out button");
let inMoney=document.querySelector(".inner");
let outMoney=document.querySelector(".outer");
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
           
            if(a==true){
    base=element.innerText;

            }
            else if(a==false){
               symbols=element.innerText
          
            }
          await Convert();
          c();
        console.log(base);
        console.log(symbols);
        }
    });
   
}
ClickBtn(buttonIn,true);
ClickBtn(buttonOut,false);




async function Convert() {
  const fet=await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
        const info= await fet.json();
         value=info.rates[symbols] 
        CnvrtValueIn.textContent = ` 1 ${base}=${info.rates[`${symbols}`].toFixed(2)} ${symbols}`;
        CnvrtValueOut.textContent = ` 1 ${symbols}=${(1/info.rates[`${symbols}`]).toFixed(2)} ${base}`;
   
}
 Convert();
inMoney.oninput=(item)=>{
   
    if(inMoney.value !=""){
        outMoney.value=(value*inMoney.value).toFixed(2);
    }
   
    else{
        outMoney.value="";
    }
active=true;
}
outMoney.oninput=(item)=>{
   
    if(outMoney.value !=""){
        inMoney.value=(1/value*outMoney.value).toFixed(2);
    }
    else{
        inMoney.value="";
    }
active=false;
}

console.log(base);
console.log(symbols);

function c(){
if(active==true){
    if(inMoney.value!=""){
        outMoney.value=(1/value*inMoney.value).toFixed(2);
    }
    else{
        outMoney.value="";
    }
}
else if(active==false){
    if(outMoney.value!=""){
        inMoney.value=(value*outMoney.value).toFixed(2);
    }
    else{
        inMoney.value="";
    }
   
  }
}