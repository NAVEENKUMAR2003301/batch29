let api = "https://fakestoreapi.com/products/"

fetch(api)
.then((data1)=>{
    return data1.json()
})
.then((js)=>{

    console.log(js);

    js.forEach((c,i,t)=>{

        console.log(c);
        let api1 = document.querySelector(".api")

        let newDiv = document.createElement("div")

        newDiv.innerHTML = `<h1>${c.title.slice(0,20)} more..</h1><img src="${c.image}"/><p>${c.description.slice(0,60)} more...</p> <button>price : ${c.price}</button>`


        api1.append(newDiv)
        

    })
    

    
})
.catch((error)=>{

    let api1 = document.querySelector(".api")
    api1.style.color = "red"
    api1.innerHTML = "error"

})
