const popupWindow = document.getElementById("mainPopup");
const priceElement = popupWindow.getElementsByClassName("price");
const subpriceElement = popupWindow.getElementsByClassName("subprice");
const imgElement = popupWindow.getElementsByClassName("productImage");
const iframeElement = popupWindow.getElementsByClassName("googleMapsFrame");

function openPopUp(image, text, price, subprice)
{
    popupWindow.classList.add("popup-open");
}
function closePopUp(image, text, price, subprice)
{
    popupWindow.classList.remove("popup-open");
}

function imageError(image) {
    console.log("image error, replacing with no-image image");
    image.onerror = "";
    image.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    return true;
}