// Home budgett app by skjoeldkrona
'use strict'

let incomes = [];
let outcomes = [];
let lastId = 0;

let incomeBtn = document.getElementById('addIncomeBtn');
incomeBtn.addEventListener('click', onAddIncomeBtnClick);

function onAddIncomeBtnClick() {
    let incomeType = document.querySelector('#incomeType');
    let incomeAmount = document.querySelector('#incomeAmount');
    
    let incomeEntry = {
        incomeName: incomeType.value,
        incomeValue: incomeAmount.value,
        id: lastId,
    }; 
    
    lastId++
    incomes.push(incomeEntry);
    updateIncomesList();
    localStorage.setItem('incomes', JSON.stringify(incomes));
    incomeType.value = '';
    incomeAmount.value = '';
    updateSum();
}

function onIncomeEditBtnClick(currentIncomeElem) {
    const liElem = document.getElementById(`container-${currentIncomeElem.id}`);   
    liElem.innerHTML = `<input id="name-${currentIncomeElem.id}" value=${currentIncomeElem.incomeName}></input><input id="value-${currentIncomeElem.id}" style="width: 80px" value=${currentIncomeElem.incomeValue}></input><button onclick="onIncomeSaveBtnClick(${currentIncomeElem.id})" class="button">Save</button>`;  
}

function onIncomeSaveBtnClick(id) {
    let newIncomeElemName = document.getElementById(`name-${id}`);
    let newIncomeElemValue = document.getElementById(`value-${id}`);
    let newIncomeEntryName = newIncomeElemName.value;
    let newIncomeEntryValue = newIncomeElemValue.value;
    
    let modifiedEntryName = incomes.find(function(elem) {
        return elem.id === id;
    });

    let modifiedEntryValue = incomes.find(function(elem) {
        return elem.id === id;
    });

    modifiedEntryName.incomeName = newIncomeEntryName;
    modifiedEntryValue.incomeValue= newIncomeEntryValue;

    updateIncomesList();
    localStorage.setItem('incomes', JSON.stringify(incomes));
    updateSum();
}

function onIncomeRemoveBtnClick(event) {
    incomes = incomes.filter(function(elem) {
        return elem.id !== Number(event.target.id);    
    });
    
    updateIncomesList();
    localStorage.setItem('incomes', JSON.stringify(incomes));
    updateSum();
}

function updateIncomesList() {
    let incomesList = document.getElementById('incomesList');
    incomesList.innerHTML = '';
    
    incomes.forEach(function(incomeElem) {
        let incomesTypeAndAmount = document.createElement('li');
        incomesTypeAndAmount.id = `container-${incomeElem.id}`;

        let incomeItem = document.createElement('p');
        incomeItem.innerText = `${incomeElem.incomeName} ${incomeElem.incomeValue} zł`;
        incomeItem.style.setProperty('display', 'inline');
        incomesTypeAndAmount.appendChild(incomeItem);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Remove';
        deleteBtn.id = incomeElem.id;
        deleteBtn.classList.add('button');
        deleteBtn.style.setProperty('margin', '0 5px');
        incomesTypeAndAmount.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', onIncomeRemoveBtnClick);
        
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.id = `editBtn-${incomeElem.id}`;
        editBtn.classList.add('button');
        editBtn.style.setProperty('margin', '0 5px');
        incomesTypeAndAmount.appendChild(editBtn);
        editBtn.addEventListener('click', function() {
            onIncomeEditBtnClick(incomeElem);
        });

        incomesList.appendChild(incomesTypeAndAmount);
    });
}

let outcomeBtn = document.getElementById('addOutcomeBtn');
outcomeBtn.addEventListener('click', onAddOutcomeBtnClick);

function onAddOutcomeBtnClick() {
    let outcomeType = document.querySelector('#outcomeType');
    let outcomeAmount = document.querySelector('#outcomeAmount');
    
    let outcomeEntry = {
        outcomeName: outcomeType.value,
        outcomeValue: outcomeAmount.value,
        id: lastId,
    };
    
    lastId++
    outcomes.push(outcomeEntry);
    updateOutcomesList();
    localStorage.setItem('outcomes', JSON.stringify(outcomes));
    outcomeType.value = '';
    outcomeAmount.value = '';
    updateSum(); 
}

function onOutcomeEditBtnClick(currentOutcomeElem) {
    const liElem = document.getElementById(`container-${currentOutcomeElem.id}`);   
    liElem.innerHTML = `<input id="name-${currentOutcomeElem.id}" value=${currentOutcomeElem.outcomeName}></input><input id="value-${currentOutcomeElem.id}" style="width: 80px" value=${currentOutcomeElem.outcomeValue}></input><button onclick="onOutcomeSaveBtnClick(${currentOutcomeElem.id})" class="button">Save</button>`;   
}

function onOutcomeSaveBtnClick(id) {
    let newOutcomeElemName = document.getElementById(`name-${id}`);
    let newOutcomeElemValue = document.getElementById(`value-${id}`);
    let newOutcomeEntryName = newOutcomeElemName.value;
    let newOutcomeEntryValue = newOutcomeElemValue.value;
    
    let modifiedEntryName = outcomes.find(function(elem) {
        return elem.id === id;
    });

    let modifiedEntryValue = outcomes.find(function(elem) {
        return elem.id === id;
    });

    modifiedEntryName.outcomeName = newOutcomeEntryName;
    modifiedEntryValue.outcomeValue= newOutcomeEntryValue;

    updateOutcomesList();
    localStorage.setItem('outcomes', JSON.stringify(outcomes));
    updateSum();
}

function onOutcomeRemoveBtnClick(event) {
    outcomes = outcomes.filter(function(elem) {
        return elem.id !== Number(event.target.id);    
    });
    
    updateOutcomesList();
    localStorage.setItem('outcomes', JSON.stringify(outcomes));
    updateSum();
}

function updateOutcomesList() {
    let outcomesList = document.getElementById('outcomesList');
    outcomesList.innerHTML = '';
    
    outcomes.forEach(function(outcomeElem) {
        let outcomesTypeAndAmount = document.createElement('li');
        outcomesTypeAndAmount.id = `container-${outcomeElem.id}`;

        let outcomeItem = document.createElement('p');
        outcomeItem.innerText = `${outcomeElem.outcomeName} ${outcomeElem.outcomeValue} zł`;
        outcomeItem.style.setProperty('display', 'inline');
        outcomesTypeAndAmount.appendChild(outcomeItem);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Remove';
        deleteBtn.id = outcomeElem.id;
        deleteBtn.classList.add('button');
        deleteBtn.style.setProperty('margin', '0 5px');
        outcomesTypeAndAmount.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', onOutcomeRemoveBtnClick);
        

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.id = `editBtn-${outcomeElem.id}`;
        editBtn.classList.add('button');
        editBtn.style.setProperty('margin', '0 5px');
        outcomesTypeAndAmount.appendChild(editBtn);
        editBtn.addEventListener('click', function() {
            onOutcomeEditBtnClick(outcomeElem);
        });

        outcomesList.appendChild(outcomesTypeAndAmount);
    });
}

function updateSum() {
    let incomeTotal = 0;
    let outcomeTotal = 0;
    let incomeSum = document.getElementById('incomeTotal');
    let outcomeSum = document.getElementById('outcomeTotal')
    
    incomes.forEach(elem => {
        elem = elem.incomeValue;
        incomeTotal += Number(elem);
        });
    
    incomeSum.innerText = ` ${incomeTotal} zł `;

    outcomes.forEach(elem => {
        elem = elem.outcomeValue;
        outcomeTotal += Number(elem);
    });

    outcomeSum.innerText = ` ${outcomeTotal} zł `;

    function updateMoneyYouHave() {
        let updatedExpenses = document.getElementById('moneyYouHave');
        
        if (incomeTotal > outcomeTotal) {
            updatedExpenses.innerText = `Your budget is ${incomeTotal - outcomeTotal} zł`;
        } else if (incomeTotal < outcomeTotal) {
            updatedExpenses.innerText = `You have exceeded your budget by ${outcomeTotal - incomeTotal} zł`; 
        } else {updatedExpenses.innerText = 'You have 0 zł'}
    }

    updateMoneyYouHave();
};

const storeIncomesLocally = () => {
    if(localStorage.getItem('incomes')) {
        incomes = JSON.parse(localStorage.getItem('incomes'));
        updateIncomesList();
        updateSum();
    } else {
        incomes = [];
    }
}

storeIncomesLocally();

const storeOutcomesLocally = () => {
    if(localStorage.getItem('outcomes')) {
        outcomes = JSON.parse(localStorage.getItem('outcomes'));
        updateOutcomesList();
        updateSum();
    } else {
        outcomes = [];
    }
}

storeOutcomesLocally();