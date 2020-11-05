// Home budgett app by skjoeldkrona

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
    incomeType.value = '';
    incomeAmount.value = '';
    updateIncomeSum();
}

function updateIncomeSum() {
    let sum = 0;
    let incomeSum = document.getElementById('incomeTotal');
    
    incomes.forEach(elem => {
            elem = elem.incomeValue;
            sum += Number(elem);
        });
    
    incomeSum.innerText = ` ${sum} zł `;
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
    updateIncomeSum();
}

function onIncomeRemoveBtnClick(event) {
    incomes = incomes.filter(function(elem) {
        return elem.id !== Number(event.target.id);    
    })
    
    updateIncomesList();
    updateIncomeSum();
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
        deleteBtn.addEventListener('click', onIncomeRemoveBtnClick)
        

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

        // 
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
    outcomeType.value = '';
    outcomeAmount.value = '';
    updateOutcomeSum()
}

function updateOutcomeSum() {
    let sum = 0;
    let outcomeSum = document.getElementById('outcomeTotal');
    
    outcomes.forEach(elem => {
        elem = elem.outcomeValue;
        sum += Number(elem);
    })

    outcomeSum.innerText = ` ${sum} zł `;
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
    updateOutcomeSum()
}

function onOutcomeRemoveBtnClick(event) {
    outcomes = outcomes.filter(function(elem) {
        return elem.id !== Number(event.target.id);    
    })
    
    updateOutcomesList();
    updateOutcomeSum()
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
        deleteBtn.addEventListener('click', onOutcomeRemoveBtnClick)
        

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

function totalExpenses() {
    document.getElementById('incomeTotal')
}