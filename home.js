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

// 2nd card 
const donateNow2 = document.getElementById("donate-btn2")
donateNow2.addEventListener('click', function(){
    const donateAmount2 = getValueById("donate-2")
    const currentDonate2 = getTextById("c-donate-2")
    const currentBalance = getTextById("c-balance")
    const donates2 = currentBalance - donateAmount2
    const updateBalance2 = document.getElementById("c-balance");
    updateBalance2.innerText = donates2;
    const updateDonate2 = currentDonate2 + donateAmount2

    const newDonate2 = document.getElementById("c-donate-2");
    newDonate2.innerText = updateDonate2;

    console.log(donates,updateDonate);
})
