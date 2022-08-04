function calculateTip(event) {
    event.preventDefault();
    var bill= document.getElementById('bill').value;
    var serviceQuality= document.getElementById('serviceQuality').value;
    var numOfPeople= document.getElementById('people').value;

    if(bill == '' | numOfPeople == ''){
        alert('Por favor, preencha os valores');
        return
    };

    if(numOfPeople == '' | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    }
    else{
        document.getElementById('each').style.display = "block"
    }
    
    var total= (bill * serviceQuality) / numOfPeople;
    total= total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";


}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
