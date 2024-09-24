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

// this is modal function  
function modal(id){
    
    const mymodal = document.getElementById("my_modal_1")
    mymodal.classList.remove("hidden")
    return id
}

const donateNow = document.getElementById("donate")
donateNow.addEventListener('click', function(){
    
    
    const donateAmount = getValueById("enter-amount")
    const currentDonate = getTextById("c-donate")
    const currentBalance = getTextById("c-balance")
    if(donateAmount <= 0){
        alert("enter positive amount")
        return
    }
    if(isNaN(donateAmount)){
        alert("enter valid number")
        return
    }
    modal("my_modal_1")
    const donates = currentBalance - donateAmount
    const updateBalance = document.getElementById("c-balance");
    updateBalance.innerText = donates;
    const updateDonate = currentDonate + donateAmount

    const newDonate = document.getElementById("c-donate");
    newDonate.innerText = updateDonate;

    // this is history 

    const historyitem = document.createElement("div");
    historyitem.className = ' rounded-2xl my-3 p-4 border border-gray-300'
    historyitem.innerHTML= `
        
        <p class= "font-bold text-xl ">${donateAmount.toFixed(2)} Taka is Donated for famine-2024 at feni,bangladesh </p>
        <p class="py-2"> Date : ${new Date()}</p>
    `
    const historycontainer = document.getElementById("history-list");
    historycontainer.insertBefore(historyitem,historycontainer.firstChild)
    
    
})

// 2nd card 
const donateNow2 = document.getElementById("donate-btn2")
donateNow2.addEventListener('click', function(){
    const donateAmount2 = getValueById("donate-2")
    const currentDonate2 = getTextById("c-donate-2")
    const currentBalance = getTextById("c-balance")
    if(donateAmount2 <= 0){
        alert("enter positive amount")
        return
    }
    if(isNaN(donateAmount2)){
        alert("enter valid number")
        return
    }
    const donates2 = currentBalance - donateAmount2
    const updateBalance2 = document.getElementById("c-balance");
    updateBalance2.innerText = donates2;
    const updateDonate2 = currentDonate2 + donateAmount2

    const newDonate2 = document.getElementById("c-donate-2");
    newDonate2.innerText = updateDonate2;

    // this is history 

    const historyitem = document.createElement("div");
    historyitem.className = ' rounded-2xl my-3 p-4 border border-gray-300'
    historyitem.innerHTML= `
        
        <p class= "font-bold text-xl ">${donateAmount2.toFixed(2)} Taka is Donated for Flood Relief in feni,bangladesh </p>
        <p class="py-2"> Date : ${new Date()}</p>
    `
    const historycontainer = document.getElementById("history-list");
    historycontainer.insertBefore(historyitem,historycontainer.firstChild)
})

// 3rd card 
const donateNow3 = document.getElementById("donate-btn3")
donateNow3.addEventListener('click', function(){
    const donateAmount3 = getValueById("donate-3")
    const currentDonate3 = getTextById("c-donate-3")
    const currentBalance = getTextById("c-balance")
    if(donateAmount3 <= 0){
        alert("enter positive amount")
        return
    }
    if(isNaN(donateAmount3)){
        alert("enter valid number")
        return
    }
    const donates3 = currentBalance - donateAmount3
    const updateBalance3 = document.getElementById("c-balance");
    updateBalance3.innerText = donates3;
    const updateDonate3 = currentDonate3 + donateAmount3

    const newDonate3 = document.getElementById("c-donate-3");
    newDonate3.innerText = updateDonate3;

     // this is history 

    const historyitem = document.createElement("div");
    historyitem.className = ' rounded-2xl my-3 p-4 border border-gray-300'
    historyitem.innerHTML= `
        
        <p class= "font-bold text-xl ">${donateAmount3.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh </p>
         <p class="py-2"> Date : ${new Date()}</p>
     `
     const historycontainer = document.getElementById("history-list");
     historycontainer.insertBefore(historyitem,historycontainer.firstChild)

    
})

// history switch

const historybtn = document.getElementById("history");
const donationbtn = document.getElementById("donation");
historybtn.addEventListener('click',function(){
    historybtn.classList.add('bg-lime-400')
    historybtn.classList.remove('hover:bg-gray-300','bg-gray-100')
    donationbtn.classList.remove('bg-lime-400');
    donationbtn.classList.add('hover:bg-gray-300','bg-gray-100');

    document.getElementById("main-sect").classList.add("hidden");

    document.getElementById("history-details").classList.remove("hidden");
})

donationbtn.addEventListener('click',function(){
    historybtn.classList.remove('bg-lime-400')
    historybtn.classList.add('hover:bg-gray-300','bg-gray-100')
    donationbtn.classList.add('bg-lime-400');
    donationbtn.classList.remove('hover:bg-gray-300','bg-gray-100');

    document.getElementById("main-sect").classList.remove("hidden");

    document.getElementById("history-details").classList.add("hidden");
})

const blogbtn = document.getElementById("blogs-btn")
const homebtn = document.getElementById("homes-btn")
blogbtn.addEventListener('click',function(){

    document.getElementById("main-sect").classList.add("hidden");

    document.getElementById("blog-section").classList.remove("hidden");

    document.getElementById("blogs-btn").classList.add("hidden");

    document.getElementById("homes-btn").classList.remove("hidden");
})

homebtn.addEventListener('click',function(){

    document.getElementById("main-sect").classList.remove("hidden");

    document.getElementById("blog-section").classList.add("hidden");

    document.getElementById("blogs-btn").classList.remove("hidden");

    document.getElementById("homes-btn").classList.add("hidden");
})