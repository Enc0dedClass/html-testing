function openPopUp(image, text, price, subprice)
{

}

function imageError(image) {
    console.log("image error, replacing with no-image image");
    image.onerror = "";
    image.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    return true;
}