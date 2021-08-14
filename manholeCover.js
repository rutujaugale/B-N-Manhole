function toggle(tog){
    if(tog.disabled==true){
    tog.disabled=false;
    }
    else{
        tog.value=0;
        tog.disabled=true;   
    }    
}
                            
function calculate(i){
    var quantity = [0,0,0,0];

    quantity[0] = document.getElementById((i*4-3).toString()).value;
    quantity[1] = document.getElementById((i*4-2).toString()).value;
    quantity[2] = document.getElementById((i*4-1).toString()).value;
    quantity[3] = document.getElementById((i*4).toString()).value;
    
    var totalPrice=quantity[0]*700+quantity[1]*3000+quantity[2]*5000+quantity[3]*8000;
    if(confirm('The total price is : Rs '+totalPrice+'\nSend Quotation by Email?')){
        makeMail(i,quantity,totalPrice);
    }
}

function makeMail(SrNo,quantity,totalPrice){
    var products=['Concrete Manhole Cover','Round Manhole Cover','Outdoor Manhole Cover','RCC Square Manhole Cover',
                    'RCC Rectangle Manhole Cover','RCC Manhole Cover','Heavy Duty Manhole Cover',
                    'Square Manhole Cover','RCC Circular Manhole Cover'];

    var ProductName=products[SrNo-1];
    var finalPrice = ((0.18*totalPrice) + totalPrice);

    var Body = '<br>Product Name : '+ ProductName + 
               '<br><br> Light Duty :          ( '+ quantity[0] + ' )           ' + (quantity[0]*700) + ' Rs' +
               '<br><br> Heavy Duty :          ( '+ quantity[1] + ' )           ' + (quantity[1]*3000) + 'Rs' +
               '<br><br> Standard Duty :       ( '+ quantity[2] + ' )        ' + (quantity[2]*5000) + 'Rs' +
               '<br><br> Extra Heavy Duty :    ( '+ quantity[3] + ' )     ' + (quantity[3]*8000) + 'Rs' +
               '<br><br> Including GST : ' + finalPrice + '     Rs' + 
               '<br><br> Discount(if applicable) : ' + (0.10*totalPrice) + '      Rs' +
               '<br><br> Final Price : ' + (finalPrice-(0.10*totalPrice)) + '     Rs' +
               '<br><br> Thank you for choosing us.';
    
    sendMAIL(Body);

}

function sendMAIL(Body){ 
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mapsdap@gmail.com",
        Password : "Digam2905",
        To : 'digambar4444patil@gmail.com , ashutoshrathi.acr@gmail.com',
        From : "mapsdap@gmail.com",
        Subject : "B N Manhole Products ",
        Body : Body
        }).then(
            message => {
                if(message=='OK'){
                    alert('Mail has been sent successfully');
                }
                else{
                    console.error(message);
                    alert('error');
                }

            }
            );
}

                        