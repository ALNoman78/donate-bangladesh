document.getElementById("first-button").addEventListener("click", function () {
    const buttonNoakhali = getInputFieldByNumber("donate-noakhali-field");
    if (isNaN(buttonNoakhali) || buttonNoakhali < 0) {
        alert("Invalid Input");
        document.getElementById('my_modal_1').close();
    } else {
        
        const noakhaliText = getInnerTextToNumber("noakhali-text-field");
        const totalBalanceOfNoakhali = buttonNoakhali + noakhaliText;
        
        const mainBalance = getInnerTextToNumber("main-balance");
    const afterDonatedAmount = mainBalance - buttonNoakhali;
    // find main balance < 0 (false)
    const negativeAccountBalance = mainBalance - buttonNoakhali;
    document.getElementById('my_modal_1').showModal();
    if(negativeAccountBalance < 0){
        alert ('Insufficient Balance');
        document.getElementById('my_modal_1').close();
        return;
    }else{
        document.getElementById("main-balance").innerText = afterDonatedAmount;
        document.getElementById("noakhali-text-field").innerText =
        totalBalanceOfNoakhali;
    }
    const title = document.getElementById("donate-noakhali").innerText;
    const contentHistory = document.getElementById("history-content");
    const newElement = document.createElement("div");
    newElement.innerHTML = `
        <div class = "md:w-10/12 mx-auto border border-solid border-[rgba(17,17,17,0.35)] rounded-lg p-6 my-6">
            <p>${buttonNoakhali} Tk. is ${title}</p>
            <p>Date ${new Date()}</p>
            <p></p>
        </div>
    `;
    contentHistory.append(newElement);
    }
});
// feni button

document.getElementById("second-btn").addEventListener("click", function () {
    const buttonFeni = getInputFieldByNumber("donate-flood-refil");

    if (isNaN(buttonFeni) || buttonFeni < 0) {
        alert("Invalid Input");
        document.getElementById('my_modal_3').close();
    } else {
        const feniText = getInnerTextToNumber("feni-text");
        const totalBalanceOfFeni = buttonFeni + feniText;
        document.getElementById("feni-text").innerText = totalBalanceOfFeni;
    
        const mainBalance = getInnerTextToNumber("main-balance");
        const afterDonatedAmount = mainBalance - buttonFeni;
        console.log(afterDonatedAmount);
        document.getElementById('my_modal_3').showModal();
        if (afterDonatedAmount < 0) {
            alert("Insufficient Balance")
            document.getElementById('my_modal_3').close();
            return;
        } else {
            document.getElementById("main-balance").innerText = afterDonatedAmount;
        }
    
        const titleTwo = document.getElementById("title-feni").innerText;
    
        // append element
    
        const contentHistory = document.getElementById("history-content");
        const newElement = document.createElement("div");
        newElement.innerHTML = `
            <div class = "md:w-10/12 mx-auto border border-solid border-[rgba(17,17,17,0.35)] rounded-lg p-6 my-6">
                <p>${buttonFeni} Tk. is ${titleTwo}</p>
                <p>Date ${new Date()}</p>
                <p></p>
            </div>
        `;
        contentHistory.append(newElement);
        
    }
});

// quota button

document.getElementById("third-btn").addEventListener("click", function () {
    const buttonQuota = getInputFieldByNumber("donate-quota");
    if (isNaN(buttonQuota) || buttonQuota < 0) {
        alert("Invalid Input");
        document.getElementById('my_modal_4').close();
    } else {
    const mainBalance = getInnerTextToNumber("main-balance");
    const quotaText = getInnerTextToNumber("quata-text");
    const totalBalanceOfquata = buttonQuota + quotaText;
    document.getElementById("quata-text").innerText = totalBalanceOfquata;
    const afterDonatedAmount = mainBalance - buttonQuota;
    document.getElementById('my_modal_4').showModal()
    if(afterDonatedAmount < 0){
        alert('Insufficient Balance');
        document.getElementById('my_modal_4').close();
        return;
    }else{
        document.getElementById("main-balance").innerText = afterDonatedAmount;
    }
    const titleThree = document.getElementById("title-quota").innerText;

    // append element

    const contentHistory = document.getElementById("history-content");
    const newElement = document.createElement("div");
    newElement.innerHTML = `
        <div class = "md:w-10/12 mx-auto border border-solid border-[rgba(17,17,17,0.35)] rounded-lg p-6 my-6">
            <p>${buttonQuota} Tk. is ${titleThree}</p>
            <p>Date ${new Date()}</p>
            <p></p>
        </div>
    `;
    contentHistory.append(newElement);
    }
});

// history btn

document.getElementById("History-btn").addEventListener("click", function () {
    const btn = document.getElementById("History-btn");
    btn.classList.add("bg-[#B4F461]");
    btn.classList.add("border-none");
    // toggle section
    const historyTab = document.getElementById("history-content");
    historyTab.classList.remove("hidden");
    const mainContent = document.getElementById("main-content");
    mainContent.classList.add("hidden");
    const donationBtn = document.getElementById("donation-btn");
    donationBtn.classList.remove("bg-[#B4F461]");
    });
    // donation button
    document.getElementById("donation-btn").addEventListener("click", function () {
    const btn = document.getElementById("History-btn");
    btn.classList.remove("bg-[#B4F461]");
    const donationBtn = document.getElementById("donation-btn");
    donationBtn.classList.add("bg-[#B4F461]");
    // toggle section
    const historyTab = document.getElementById("history-content");
    historyTab.classList.add("hidden");
    const mainContent = document.getElementById("main-content");
    mainContent.classList.remove("hidden");
});


document.getElementById('nav-button').addEventListener('click', function(){
    window.location.href = './home.html'
})