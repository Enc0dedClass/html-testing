async function updateProducts()
{
    const htmlThing = document.getElementsByClassName("dynamicTest");
    
    for (let i in htmlThing)
    {
        
    }

    let productAmount = 1
    for(let i = 0; i < productAmount; i++)
    {
        let productFile = "../products/p"+i+".txt";
        let splitProductFile = productFile.split("/n");

        let split1 = splitProductFile.shift().split(":");
        console.log("got this split: " + split1);
        split1.shift();

        let dynamicBase = '<div><button class="shopItem dynamicTest">' + split1 + '<span><img height="128px" src="../images/rema1000MolkOko1.png"></span></button>"/div"';

        console.log("adding this part: "+dynamicBase);
    }
}

//updateProducts();