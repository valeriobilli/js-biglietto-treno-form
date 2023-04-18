const bottone = document.getElementById("calcola");
const annulla = document.getElementById("reset");

bottone.addEventListener("click", function(){

    const priceParKm = 0.21;
    let name = document.getElementById("name").value;
    let km = parseInt(document.getElementById("km").value);
    let price = 0;


    if(isNaN(km)) {
        console.error("I km non sono corretti");
    }

    console.log(`Passegero: ${name}`)
    console.log(`Km: ${km}`)

    price = km * priceParKm;
    console.log(`Prezzo di base: ${price}`);

    let age = document.getElementById("age").value;

    let sale = "Biglietto Standard";

    if( age=="1" ) {
        sale = "Biglietto Junior";
        price *= 0.8;
    } else if ( age=="3") {
        sale = "Biglietto Senior";
        price *= 0.6;
    }
    price = price.toFixed(2);

    console.log("Offerta: " , sale);
    console.log(`Prezzo scontato: ${price}`);

    document.getElementById("ticketName").innerText = name;
    document.getElementById("ticketSale").innerText = sale;
    document.getElementById("ticketPrice").innerText = price;

} );

annulla.addEventListener("click", function() {
    
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";
    
});