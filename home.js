function getValueById(id){
    const getid =document.getElementById(id).value;
    const num = parseFloat(getid)

    return num
}
function getTextById(id){
    const getids =document.getElementById(id).innerText;
    const nums = parseFloat(getids)

    return nums
}


const donateNow = document.getElementById("donate")
donateNow.addEventListener('click', function(){
    const donateAmount = getValueById("enter-amount")
    const currentDonate = getTextById("c-donate")
    const currentBalance = getTextById("c-balance")
    const donates = currentBalance - donateAmount
    const updateBalance = document.getElementById("c-balance");
    updateBalance.innerText = donates;
    const updateDonate = currentDonate + donateAmount

    const newDonate = document.getElementById("c-donate");
    newDonate.innerText = updateDonate;

    console.log(donates,updateDonate);
})