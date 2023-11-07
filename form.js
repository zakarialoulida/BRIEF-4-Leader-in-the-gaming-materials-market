const colorSelect = document.querySelectorAll("input[type='radio'][name='colorclavier']")
const totalValue = document.querySelector("#total")
const storageValue = document.getElementById("optionstorage")
const nvidiagraphique = document.getElementById("cartenvidia")
const colorclavier = document.querySelectorAll("input[type='radio'][name='colorclavier']")

var totalPrice = 0


const getColorValue = () => {
    let colorPrice = 0
    colorSelect.forEach(input => {
        if (input.checked) {
            colorPrice = input.value
        }
    })
    return parseInt(colorPrice)
}
const getColorclavier  = () => {
    let colorPrice = 0
        colorclavier .forEach(input => {
            if (input.checked) {
                colorPrice = input.value
            }
        })
    
    return parseInt(colorPrice)
}


const getStorageValue = () => {
    let storagePrice = storageValue.value
    console.log(storagePrice)
    return parseInt(storagePrice)
}
const getnvidiagraphique = () => {
    let graphiqueprice = nvidiagraphique.value
    
    return parseInt(graphiqueprice)
}

// nvidiagraphique.addEventListener('change', () => {
//     totalPrice = getColorValue() + getStorageValue() + getvidiagraphique()
//     totalValue.textContent = totalPrice
// })

if (storageValue && nvidiagraphique) {
    storageValue.addEventListener('click', () => {
        totalPrice = getColorValue() + getStorageValue() + getnvidiagraphique()
        totalValue.textContent = totalPrice
    })
    nvidiagraphique.addEventListener('click', () => {
        totalPrice = getColorValue() + getStorageValue() + getnvidiagraphique()
        totalValue.textContent = totalPrice
    });

}



colorSelect.forEach(input => {
    input.addEventListener("change", () => {
        totalPrice = getColorValue() + getStorageValue() + getvidiagraphique()
        console.log(totalPrice)
        totalValue.textContent = totalPrice
    })
})















/************** */

