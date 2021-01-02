

var takeValue = document.getElementById("num");
var mybtn = document.getElementById("mybtn");
var cards = document.getElementById("cards");
var alertnumber = document.getElementById("alertnumber");
var alertall = document.getElementById("alertall");
var cardEgy = document.getElementById("card-eg");
var cardUSD = document.getElementById("card-usd")
var cardEur = document.getElementById("card-eur");
var cardGbg = document.getElementById("card-gbg");
var cardSar = document.getElementById("card-sar");
var sel = document.getElementById("sel");
var vlaselected;
sel.addEventListener("change", function (e) {
    vlaselected = sel.value;
})

mybtn.addEventListener("click", async function (e) {
    if (takeValue.value == "" || vlaselected == "") {
        alertall.classList.replace("d-none", "d-block");
        alertall.classList.remove("d-none");
    } else {
        alertall.classList.replace("d-block", "d-none");
        alertall.classList.remove("d-block");
        var val = takeValue.value;
        cards.classList.replace("d-none", "d-block")
        var data = await fetch(`https://v6.exchangerate-api.com/v6/5eaa090c362cda7345fac4b6/latest/${vlaselected}`);
        var alldata = await data.json();


        var numEgy = alldata.conversion_rates.EGP * Number(val);
        var numUSD = alldata.conversion_rates.USD * Number(val);
        var numEur = alldata.conversion_rates.EUR * Number(val);
        var numGbg = alldata.conversion_rates.GBP * Number(val);
        var numSar = alldata.conversion_rates.SAR * Number(val);

        cardEgy.textContent = numEgy.toFixed(3) + ' ' + 'EGY';
        cardUSD.textContent = numUSD.toFixed(3) + ' ' + 'USD';
        cardEur.textContent = numEur.toFixed(3) + ' ' + 'EUR';
        cardGbg.textContent = numGbg.toFixed(3) + ' ' + 'GBG';
        cardSar.textContent = numSar.toFixed(3) + ' ' + 'SAR';

    }
})

function regsnumber() {
    var regs = /^\d{1,}$/;
    if (regs.test(takeValue.value) == false) {
        alertnumber.classList.replace("d-none", "d-block");
        alertnumber.classList.remove("d-none")
    }
    else {
        alertnumber.classList.replace("d-block", "d-none");
        alertnumber.classList.remove("d-block")
    }
}

