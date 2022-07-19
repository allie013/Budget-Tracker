let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

//Included Arrarys
//weeklyExpenseQuestions
//monthylExpenseQuestions
//annualExpenseQuestions

// Your Code Here

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    console.log(answer);
    weeklyExpenses = weeklyExpenses + answer;
    console.log(weeklyExpenses)
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
    console.log(answer);
    monthlyExpenses = monthlyExpenses + answer;
    console.log(monthlyExpenses)
}

for(let i = 0; i < annualExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]));
    console.log(answer);
    annualExpenses = annualExpenses + answer;
    console.log(annualExpenses)
}

