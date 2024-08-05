let box = document.getElementById("box")

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((BackData) => getData(BackData))

function getData(params) {
    for (const iterator of params) {
        console.log(iterator);
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let div = document.createElement("div")
        let img = document.createElement("img")



        h3.innerHTML = "Nomi:" + iterator.category
        p.innerHTML = "Narxi:" + iterator.price + `$`
        img.src = iterator.image

        div.classList.add('card')
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(p)


        box.appendChild(div)
    }
}