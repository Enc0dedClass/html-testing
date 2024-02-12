async function updateProducts()
{
    const productFolder = "https://github.com/Enc0dedClass/html-testing/tree/main/html_test_1/products/rema1000/";
    
    
    const htmlThing = document.getElementsByClassName("dynamicTest");
    
    for (let i in htmlThing)
    {
        let product = productFolder + "p" + (i).toString()
        const getProduct = new Request(product);
        const response = await fetch(getProduct);
        const myText = await response.text;
        htmlThing[i].textContent = myText.toString();
        console.log(product + " is: " + myText.toString());
    }
}

updateProducts();