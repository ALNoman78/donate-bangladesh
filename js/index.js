document.getElementById('first-button').addEventListener('click', function(){
    const buttonNoakhali = getInputFieldByNumber('donate-noakhali-field');
    const noakhaliText = getInnerTextToNumber('noakhali-text-field');
    const totalBalanceOfNoakhali = buttonNoakhali + noakhaliText ;
    document.getElementById('noakhali-text-field').innerText = totalBalanceOfNoakhali;
    // console.log(totalBalanceOfNoakhali);

    const mainBalance = getInnerTextToNumber('main-balance')
    const afterDonatedAmount = mainBalance - totalBalanceOfNoakhali;
    document.getElementById('main-balance').innerText = afterDonatedAmount
    // create new element
    const contentHistory = document.getElementById('history-content')
    const newElement = document.createElement('div')
    newElement.innerHTML = `
        <div class = "md:w-10/12 mx-auto border border-solid border-[rgba(17,17,17,0.35)] rounded-lg p-6 my-6">
            <p>${buttonNoakhali} Tk. is Donated for Donate , at Noakhali Bangladesh</p>
            <p>Date ${new Date()}</p>
            <p></p>
        </div>
    `
    contentHistory.append(newElement)
})
// feni button

document.getElementById('second-btn').addEventListener('click', function (){
    const buttonFeni = getInputFieldByNumber('donate-flood-refil');
    const feniText = getInnerTextToNumber('feni-text')
    const totalBalanceOfFeni = buttonFeni + feniText
    document.getElementById('feni-text').innerText = totalBalanceOfFeni;

    const mainBalance = getInnerTextToNumber('main-balance')
    const afterDonatedAmount = mainBalance - totalBalanceOfFeni;
    document.getElementById('main-balance').innerText = afterDonatedAmount

    // append element

    const contentHistory = document.getElementById('history-content')
    const newElement = document.createElement('div')
    newElement.innerHTML = `
        <div class = "md:w-10/12 mx-auto border border-solid border-[rgba(17,17,17,0.35)] rounded-lg p-6 my-6">
            <p>${buttonFeni} Tk. is Donated for Donate , at Noakhali Bangladesh</p>
            <p>Date ${new Date()}</p>
            <p></p>
        </div>
    `
    contentHistory.append(newElement)
})

// quota button

document.getElementById('third-btn').addEventListener('click', function(){
    const buttonQuota = getInputFieldByNumber('donate-quota');
    const quotaText = getInnerTextToNumber('quata-text')
    const totalBalanceOfquata = buttonQuota + quotaText;
    document.getElementById('quata-text').innerText = totalBalanceOfquata;

    const mainBalance = getInnerTextToNumber('main-balance')
    const afterDonatedAmount = mainBalance - totalBalanceOfquata;
    document.getElementById('main-balance').innerText = afterDonatedAmount

    // append element

    const contentHistory = document.getElementById('history-content')
    const newElement = document.createElement('div')
    newElement.innerHTML = `
        <div class = "md:w-10/12 mx-auto border border-solid border-[rgba(17,17,17,0.35)] rounded-lg p-6 my-6">
            <p>${buttonQuota} Tk. is Donated for Donate , at Noakhali Bangladesh</p>
            <p>Date ${new Date()}</p>
            <p></p>
        </div>
    `
    contentHistory.append(newElement)
})

// history btn

document.getElementById('History-btn').addEventListener('click', function(){
    const btn = document.getElementById('History-btn')
    btn.classList.add('bg-[#B4F461]');
    btn.classList.add('border-none');
    // toggle section
    const historyTab = document.getElementById('history-content')
    historyTab.classList.remove('hidden')
    const mainContent = document.getElementById('main-content')
    mainContent.classList.add('hidden')
    const donationBtn = document.getElementById('donation-btn')
    donationBtn.classList.remove('bg-[#B4F461]');
    // create element

    
})
// donation button
document.getElementById('donation-btn').addEventListener('click', function(){
    const btn = document.getElementById('History-btn')
    btn.classList.remove('bg-[#B4F461]')
    const donationBtn = document.getElementById('donation-btn')
    donationBtn.classList.add('bg-[#B4F461]');
    // toggle section
    const historyTab = document.getElementById('history-content')
    historyTab.classList.add('hidden')
    const mainContent = document.getElementById('main-content')
    mainContent.classList.remove('hidden')
})