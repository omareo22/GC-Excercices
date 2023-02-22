(function () {

    const howMany = document.getElementById('coinAmount');
    const whichCoin = document.getElementById('coinType');
    const makeMoney = document.getElementById('makeMoney');
    const coinContainer = document.getElementById("coinContainer");
    const total = document.getElementById('total');
    let totalAmount = 0;
          
    makeMoney.addEventListener('click', (event) => {    
      event.preventDefault();
      for (let i = 0; i < howMany.value; i++) {
        const newCoin = document.createElement("p");
        newCoin.classList.add("newCoin");
        newCoin.classList.add(whichCoin.value);
        newCoin.textContent = whichCoin.value;
        coinContainer.append(newCoin);
        newCoin.addEventListener('click',(e) => {
          e.target.remove();
          totalAmount = totalAmount + getTotal("-", 1, e.target.innerText);
          total.value = totalAmount;
        })
      }
      totalAmount = totalAmount + getTotal("+", howMany.value,whichCoin.value);
      total.value = totalAmount;
    });
  }())
  
  function getTotal (value, numCoins, coinType) {
    let amount = 0;
    switch (coinType) {
      case "Penny":
        amount = numCoins * 1;
        break;
      case "Nickel":
        amount = numCoins * 5;
        break;
      case "Dime":
        amount = numCoins * 10;
        break;
      case "Quarter":
        amount = numCoins * 25;
        break;
      case deafult:      
    }
    if (value === "-")  
      amount = amount * -1;
  
    return amount;
  }

