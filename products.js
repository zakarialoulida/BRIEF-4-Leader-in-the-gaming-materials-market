//objects//

const shoplist = [
    pro1 = { name: "Mecanique Keyboard Spartan",type: "Accessories" , price: "70", Image: "brief4Assets/keyboard1.png", customaze: true },
    pro2 = { name: "Ancient souls", price: "45", type: "Video_Games", Image: "brief4Assets/ancient souls.png", customaze: false },
    pro3 = { name: "Mecanique Keyboard Razer", price: "70",type: "Accessories", Image: "brief4Assets/keyboard2.png", customaze: false },
    pro4 = { name: "Gaming Chair Mach", price: "200", type: "Accessories", Image: "brief4Assets/gaming chair.png", customaze: true },
    pro5 = { name: "Echo Headphones", price: "100", type: "Accessories",Image: "brief4Assets/headphones1.jpg" },
    pro6 = { name: "Wave Console", price: "30", type:"console", Image: "brief4Assets/console.png" },
    pro7 = { name: "Wireless Gaming Mouse", price: "65",type:"console", Image: "brief4Assets/mouse.png" },
    pro8 = { name: "Gaming Setup", price: "1050",type: "fullsetup", Image: "brief4Assets/full setup.png" },
    pro9 = { name: "Razer Headphones", price: "70",type: "Accessories", Image: "brief4Assets/headphones2.png" },
    pro10 = { name: "Mach Gaming chair", price: "200",type: "Accessories", Image: "brief4Assets/gamingchair2.jpg" },
    pro11 = { name: "TUFF Gaming Monitor 120Hz", price: "300",type: "Accessories", Image: "brief4Assets/monitor2.jpg" },
    pro12 = { name: "Nvidia Gtx1080ti", price: "400",type: "Accessories", Image: "brief4Assets/graphiccard 1.png" },
    pro13 = { name: "Semi-mecanique Keyboard Zoei", price: "80",type: "Accessories", Image: "brief4Assets/keyboard5 1.png" },
    pro14 = { name: "Playstation 5", price: "900",type: "console", Image: "brief4Assets/console 3.png" },
    pro15 = { name: "Kingdom come: Delivarnce", price: "12", type: "Video_Games", Image: "brief4Assets/videogame3 1.png" },
    pro16 = { name: "Full Gaming Setup", price: "1500",type:"fullsetup", Image: "brief4Assets/setup2 1.png" },
    pro17 = { name: "Mecanique Keyboard", price: "90",type: "Accessories", Image: "brief4Assets/keyboard4 1.png" },
    pro18 = { name: "Amd RX 6800", price: "450",type: "Accessories", Image: "brief4Assets/amd 1.png" },
]






/********************************************* */


document.addEventListener("DOMContentLoaded", function () {
    
    const productsContainer = document.getElementById('productsContainer')
    shoplist.forEach((product, index) => {
        productsContainer.innerHTML += `
        <div class="productInfos flex flex-col ${product.type}  ">
                            <h2 class="text-center z-9">${product.name}</h2>
                            <img src="${product.Image}" alt="${product.name}" class="hover:scale-110 transition ">
                            <h2>Price : ${product.price}$</h2>
                            <div class="flex justify-between">
                                <button class="bg-violet-900 p-1 rounded-xl addbutton" id="pro${index+1}btn">Add to List</button>
                                ${product.customaze && `<a href="$$$$$.html?product=${index}" class="bg-violet-900 p-1 rounded-xl">Customize</a>`}
                            </div>
                        </div>
        `
    })
    let withFilter = false;
    let page = 1;
    const paginationdiv=document.getElementById('paginationdiv');
    const changeVisibility = () => {
        paginationdiv.hidden=withFilter
        allProducts.forEach((product, index) => {
            if((index <= (page*5) && index > (page*5-5)) ||  withFilter) {
                product.hidden = false
            } else {
                product.hidden = true

            }
        })
    }

    const paginationButtons = document.querySelectorAll(".paginationButton")
    const allProducts = document.querySelectorAll(".productInfos")

    paginationButtons.forEach(button => {
        
        button.addEventListener('click', () => {
            page = parseInt(button.innerText)
            changeVisibility()
        })
    })

    const panier = document.getElementById('panier');
    const panier2 = document.getElementById('panier2');
    const panierlist = document.getElementById('panierlist');
    // products classes
    const Accessories = document.querySelectorAll(".Accessories");
    const videogames = document.querySelectorAll(".Video_Games");
    const Consoles = document.querySelectorAll(".console");
    const fullsetup = document.querySelectorAll(".fullsetup");
    //filter buttons id
    const videogame1 = document.getElementById('Video_Games');
    const Accessoriesbutton = document.getElementById('Accessoriesbutton');
    const Consolesbutton = document.getElementById('Consoles');
    const full_setup = document.getElementById('full_setup');
    const filterall = document.getElementById('filterall');
    /************** */
    const addbuttons = document.querySelectorAll(".addbutton");
    /*** */

    const probtn = [
        pro1btn = document.getElementById('pro1btn'),
        pro2btn = document.getElementById('pro2btn'),
        pro3btn = document.getElementById('pro3btn'),
        pro4btn = document.getElementById('pro4btn'),
        pro5btn = document.getElementById('pro5btn'),
        pro6btn = document.getElementById('pro6btn'),
        pro7btn = document.getElementById('pro7btn'),
        pro8btn = document.getElementById('pro8btn'),
        pro9btn = document.getElementById('pro9btn'),
        pro10btn = document.getElementById('pro10btn'),
        pro11btn = document.getElementById('pro11btn'),
        pro12btn = document.getElementById('pro12btn'),
        pro13btn = document.getElementById('pro13btn'),
        pro14btn = document.getElementById('pro14btn'),
        pro15btn = document.getElementById('pro15btn'),
        pro16btn = document.getElementById('pro16btn'),
        pro17btn = document.getElementById('pro17btn'),
        pro18btn = document.getElementById('pro18btn')
    ]



    let x = false;
    panier.addEventListener("click", e => {
        if (x === false) {
            panierlist.style.display = 'block';
            x = true;
        } else {
            panierlist.style.display = 'none';
            x = false;
        }

    })
    panier2.addEventListener("click", e => {
        if (x === false) {
            panierlist.style.display = 'block';
            x = true;
        } else {
            panierlist.style.display = 'none';
            x = false;
        }
    })
    for (let i = 0; i < addbuttons.length; i++) {
        addbuttons[i].addEventListener("click", (e) => {
            panierlist.style.display = 'block';
        });

    }

    Accessoriesbutton.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "block";
        }
        console.log("hello");
    });

    Consolesbutton.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Consoles.length; i++) {
            Consoles[i].style.display = "block";
        }
    });

    full_setup.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < fullsetup.length; i++) {
            fullsetup[i].style.display = "block";
        }
    });

    videogame1.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < videogames.length; i++) {
            videogames[i].style.display = "block";
        }
        
    });

    filterall.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "block";
        }

        for (let i = 0; i < videogames.length; i++) {
            videogames[i].style.display = "block";
        }

        for (let i = 0; i < Consoles.length; i++) {
            Consoles[i].style.display = "block";
        }

        for (let i = 0; i < fullsetup.length; i++) {
            fullsetup[i].style.display = "block";
        }
        withFilter = false
        changeVisibility()
    });

    function resetFilters() {

        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "none";
        }

        for (let i = 0; i < videogames.length; i++) {
            videogames[i].style.display = "none";
        }

        for (let i = 0; i < Consoles.length; i++) {
            Consoles[i].style.display = "none";
        }

        for (let i = 0; i < fullsetup.length; i++) {
            fullsetup[i].style.display = "none";
        }
        withFilter = true
        changeVisibility()
    }


    var data = JSON.parse(localStorage.getItem("items"));
    var arrayToStore = []
    data ? arrayToStore.push(...data) : arrayToStore
    var containerElement = document.getElementById("panierlist");

    for (let i = 0; i < probtn.length; i++) {
        probtn[i].addEventListener("click", e => {
            arrayToStore.push(shoplist[i])
            
            for (let j = 0; j < arrayToStore.length; j++) {
                let data = JSON.stringify(arrayToStore)
                localStorage.setItem("items", data)
            }
            putList()
        });
       
    }
    /****/
 
  

    data ? putList() : null

    var divList = 0;
    function putList() {
        containerElement.innerHTML = '';
        
        data.forEach(item => {
            divList = `
                <div class="py-8  flex flex-row text-white gap-4 " id="productlist2">
                    <img src="${item.Image}" alt=".." id="prdimage" class="w-[100px] h-[100px]">
                    <h6 id="productname">${item.name}</h6>
                    <h6 id="prdprice">${item.price}</h6>
                    <button class="remove-button bg-slate-800 h-10 px-3 rounded-xl ">Remove</button>
                </div>
            `;
            containerElement.innerHTML += divList;

        });
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the index of the product to remove based on the button's position in the list
            const productIndex = Array.from(containerElement.children).indexOf(event.target.parentElement);

            // Remove the product from the array and update the local storage
            arrayToStore.splice(productIndex, 1);
            localStorage.setItem("items", JSON.stringify(arrayToStore));

            // Remove the product from the displayed list
            event.target.parentElement.remove();
        });
    });
    }

});
/********** */

    

    




