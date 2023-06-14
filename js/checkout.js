let checkTotal = 0;



displayCheck = () => {
    

    let data = JSON.parse(localStorage.getItem('order'))

    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let checkTotal = 0;

    for(let i =0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let toppings = data[i].subToppings;
        let sauce = data[i].subSauce;
        let price = data[i].subPrice;


        checkTotal += price;

        items.innerHTML += `
        <div class="orderLine">
                    <p><strong>Name</strong>${name}</p>
                    <p><strong>sauce</strong>${sauce}</p>
                 <p><strong>Base</strong>${bread}</p>
                   <p><strong>Toppings</strong>${toppings.join(',  ')}</p>
                     <p><strong>Price</strong>${price}.00</p>
        </div>
        
        `
        totalArea.innerHTML = "R" + checkTotal + ".00";
    }
}

addDiscount = ( ) => {
    //discount
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = "pages/checkout.html"
}