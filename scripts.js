
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-value")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.3  
    const realToday = 0.4

    if(currencySelect.value == "dolar"){ //se o select tiver selecionado o valor do dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){ //se o select tiver selecionado o valor do euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currencyMoney = document.querySelector("#currency-name-2")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
        currencyMoney.innerHTML = "US$ 0,00"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
        currencyMoney.innerHTML = "0,00€"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
        currencyMoney.innerHTML = "0,00 £"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
        currencyMoney.innerHTML = "R$ 0,00"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)