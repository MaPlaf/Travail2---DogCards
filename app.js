const btn = document.querySelector('.btn-primary');
const dogImage = document.getElementById('dogsCard');
const dogId = document.getElementById('dogId');
const dogAge = document.getElementById('dogAge');
const dogReg = document.getElementById('dogRegistry');
const url = `https://dog.ceo/api/breeds/image/random`;


btn.addEventListener('click', function() {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            dogImage.innerHTML = `<img alt="Hipster dof" id="dogsAPI" src="${data.message}"/>`;
        }); 
    
    let dId = getRandomNumber(10000, 99999);
    let dAge = getRandomNumber(1, 20);
    let dReg = getRandomNumber(100, 999);

    if (dAge == 1){
        dAge = dAge + ' Year';
    }else{
        dAge = dAge + ' Years';
    }

    dogId.textContent = dId;
    dogAge.textContent = dAge;
    dogReg.textContent = dReg;
});


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}