const colorSelect = document.querySelectorAll("input[type='radio'][name='color']")
const totalValue = document.querySelector("#total")
const Valueproduct2 = document.querySelector("#total2")
const Valueproduct3 = document.querySelector("#total3")
const storageValue = document.getElementById("optionstorage")
const nvidiagraphique = document.getElementById("cartenvidia")
const colorclavier= document.querySelectorAll("input[type='radio'][name='colorclavier']")

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
const getcolorclavier = () => {
    let colorPrice = 0
    colorclavier.forEach(input => {
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
const getvidiagraphique = () => {
    let graphiqueprice = nvidiagraphique.value
    console.log(graphiqueprice)
    return parseInt(graphiqueprice)
}

// nvidiagraphique.addEventListener('change', () => {
//     totalPrice = getColorValue() + getStorageValue() + getvidiagraphique()
//     totalValue.textContent = totalPrice
// })

if (storageValue && nvidiagraphique) {
    storageValue.addEventListener('click', () => {
        totalPrice = getColorValue() + getStorageValue() + getvidiagraphique()
        totalValue.textContent = totalPrice
    })
    nvidiagraphique.addEventListener('click', () => {
        totalPrice = getColorValue() + getStorageValue() + getvidiagraphique()
        totalValue.textContent = totalPrice
    });

}


colorSelect.forEach(input => {
    input.addEventListener("change", () => {
        totalPrice = getColorValue() + getStorageValue() + getvidiagraphique()
     
        totalValue.textContent = totalPrice
    })
})

colorclavier.forEach(input => {
    input.addEventListener("change", () => {
        totalPrice =  getcolorclavier()
        console.log(totalPrice)
        Valueproduct2.textContent = totalPrice
    })
})















/************** */

