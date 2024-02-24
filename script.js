let allProducts = [];
function onSubmitForm(e){
    e.preventDefault();
    console.log(getFormData());
    console.log(setDataToArray());
}
function getFormData(){
    let formData= {};
    let productName = document.forms["myForm"]['productName'].value;
    let productPrice = document.forms["myForm"]['productPrice'].value;
    let productCategory = document.forms["myForm"]['productCategory'].value;
    let productDesc = document.forms["myForm"]['productDesc'].value;

    formData.productName= productName;
    formData.productPrice= productPrice;
    formData.productCategory= productCategory;
    formData.productDesc= productDesc;
    return formData;
}

function setDataToArray(){
    allProducts.push(getFormData());
    return allProducts;
}