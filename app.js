//HTML TO JS
var intialPrice=document.querySelector("#intial-price");
var quantitystck=document.querySelector("#Quantity");
var currentPrice=document.querySelector("#current-price");
var checkBtn=document.querySelector("#submitbtn");
var output=document.querySelector("#outputbox");

// button.addeventlistner("what to perform",function name)
checkBtn.addEventListener('click',clickhandler)


//click handler function
function clickhandler(){
    if(intialPrice.value >0 && quantitystck.value >0 && currentPrice.value >0 )
    {
        var ip=intialPrice.value;
        var qty=quantitystck.value;
        var curr=currentPrice.value;
        calculateprofitandloss(ip,qty,curr);
    }
        else if( intialPrice.value<0 || quantitystck.value<0 || currentPrice.value<0)
        { 
            output.innerText=("Negative value are not allowed")
        }
        else
        {
            output.innerText=("Please Enter valid information")
        }
}

function calculateprofitandloss(intial,quantity,current){
    //loss code
    if (intial>current)
    {
        var loss=(intial-current) * quantity;
        var losspercentage=(loss/(intial*quantity)) * 100;

        // loss value
        output.innerText=`Your loss is ${loss} and your Loss-percentage is ${losspercentage}%`
        }

        //Profit code
        else if(current>intial){
        var profit=(current-intial) * quantity;
        var profitpercentage=(profit/(intial*quantity)) * 100;

        //profit value
        output.innerText=`Your profit is ${profit} and your Profit-percentage is ${profitpercentage}%`

}
//no values entered
else{
    output.innerText="There is no loss no gain"

    }
}