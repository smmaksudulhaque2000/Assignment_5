console.clear();

document.getElementById('donationBtn').addEventListener('click', function () {
        document.getElementById('donationBtn').classList.add('pr-btn');
        document.getElementById('historyBtn').classList.remove('pr-btn');
        document.getElementById('noakhali').classList.remove('hidden');
        document.getElementById('feni').classList.remove('hidden');
        document.getElementById('injured').classList.remove('hidden');
        document.getElementById('historyContainer').classList.add('hidden');
})
document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('donationBtn').classList.remove('pr-btn');
    document.getElementById('historyBtn').classList.add('pr-btn');
    document.getElementById('noakhali').classList.add('hidden');
    document.getElementById('feni').classList.add('hidden');
    document.getElementById('injured').classList.add('hidden');
    document.getElementById('historyContainer').classList.remove('hidden');
})





document.getElementById('donateBtnNoakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = getInnerTextById('accountBalance');
    const donate = getInputValueById('inputAmount')
    const totalDonation = getInnerTextById('totalDonation');
    if (donate > 0 && balance >= donate) {
        const updateBalance = balance - donate;
        const updateTotalDonation = totalDonation + donate;
        document.getElementById('totalDonation').innerText = updateTotalDonation;
        document.getElementById('accountBalance').innerText = updateBalance;

        // Add To TransAction History
        let currentTime = new Date();
        const div = document.createElement('div');
        div.classList.add('bg-green-300', 'p-5','m-5');
        div.innerHTML = `
        <p class="text-2xl font-bold"> ${donate} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
        <p>Date: ${currentTime}</p>
        `
        document.getElementById('historyContainer').appendChild(div);
    }  else{
        alert("Invalid Donation Amount");
    }
})

document.getElementById('donateBtnFeni').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = getInnerTextById('accountBalance');
    const donate = getInputValueById('inputAmountF')
    const totalDonation = getInnerTextById('totalDonationF');
    if (donate > 0 && balance >= donate) {
        const updateBalance = balance - donate;
        const updateTotalDonation = totalDonation + donate;
        document.getElementById('totalDonationF').innerText = updateTotalDonation;
        document.getElementById('accountBalance').innerText = updateBalance;

        // Add To TransAction History
        let currentTime = new Date();
        const div = document.createElement('div');
        div.classList.add('bg-green-300', 'p-5','m-5');
        div.innerHTML = `
        <p class="text-2xl font-bold"> ${donate} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p>Date: ${currentTime}</p>
        `
        document.getElementById('historyContainer').appendChild(div);
    }  else{
        alert("Invalid Donation Amount");
    }
})

document.getElementById('donateBtnInjured').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = getInnerTextById('accountBalance');
    const donate = getInputValueById('inputAmountI')
    const totalDonation = getInnerTextById('totalDonationI');
    if (donate > 0 && balance >= donate) {
        const updateBalance = balance - donate;
        const updateTotalDonation = totalDonation + donate;
        document.getElementById('totalDonationI').innerText = updateTotalDonation;
        document.getElementById('accountBalance').innerText = updateBalance;

        // Add To TransAction History
        let currentTime = new Date();
        const div = document.createElement('div');
        div.classList.add('bg-green-300', 'p-5','m-5');
        div.innerHTML = `
        <p class="text-2xl font-bold"> ${donate} Taka is Donated for Aid for Injured in the Quata Movement, Bangladesh</p>
        <p>Date: ${currentTime}</p>
        `
        document.getElementById('historyContainer').appendChild(div);
    }  else{
        alert("Invalid Donation Amount");
    }
})