let subOrder = [];

generateSub = () =>{
    let sandwichTotal = 0;

    let subName = document.getElementById("subName").value;

    let breadOptions = document.getElementsByName("breadRadio");
    let breadValue;
    for(let i = 0; i < breadOptions.length; i++ ){
        if(breadOption[i].checked){
            breadValue = baseOption[i].value
            subTotal = subTotal + +breadOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauceRadio");
    let sauceValue;
    for(let i = 0; i < sauceOptions.length; i++ ){
        if(sauceOption[i].checked){
            sauceValue = baseOption[i].value
            subTotal = subTotal + +sauceOption[i].dataset.cost
        }
    }

  


    subOrder.push({
        subName: subName,
        subBread: breadValue,
        subToppings: topArray,
        subSauce:sauceValue,
        subPrice: subTotal
    });

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"

    document.getElementById("subForm").reset();

}

realTimeCost = ( )  => {

    realTimePrice = 0;



    let breadOption = document.getElementsByName("breadRadio")
    for(let i = 0; i < baseOption.length; i++){
        if(breadOption[i].checked){
           
           realTimePrice = realTimePrice + +breadOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("toppings");
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            
            realTimePrice = realTimePrice + +sauceOptions[i].dataset.cost
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"
}