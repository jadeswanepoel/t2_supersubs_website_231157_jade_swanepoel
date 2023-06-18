let subTotal = 0;



subCheck = () => {
    

    let data = JSON.parse(localStorage.getItem('order'))

    let items = document.getElementById('checkoutOrder');
    let totalSub = document.getElementById('totalOut');

    let subTotal = 0;

    for(let i =0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let toppings = data[i].subToppings;
        let sauce = data[i].subSauce;
        let price = data[i].subPrice;


        subTotal += price;

        items.innerHTML += `
        <div class="orderLine">
                    <p><strong>Name</strong>:${name}</p>
                    <p><strong>Sauce</strong>:${sauce}</p>
                 <p><strong>Base</strong>:${bread}</p>
                   <p><strong>Toppings</strong>:${toppings.join(',  ')}</p>
                     <p><strong>Price</strong>:${price}.00</p>
        </div>
        
        `
        totalSub.innerHTML = "R" + subTotal + ".00";
    }
}

addDiscount = ( ) => {
    //discount
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../checkout.html'
}