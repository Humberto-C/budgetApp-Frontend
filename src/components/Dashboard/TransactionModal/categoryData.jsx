const incomeCategories = ['Salary', 'Commission', 'Interest', 
'Sales', 'Investments', 'Gifts', 'Allowance', 'Government Payments'];

const expensesCategories= {
        Housing: [
            'Mortage or Rent',
            'Property Taxes',
            'Household repairs',
        ],
        Transportation: [
            'Car payment',
            'Car warranty',
            'Gas',
            'Tires',
            'Maintenance and oil changes',
            'Parking fees',
            'Repairs',
            'Registration fees'
        ],
        Food: [
            'Groceries',
            'Restaurants',
            'Pet Food'
        ],
        Utilities: [
            'Electricity',
            'Water',
            'Garbage',
            'Phones',
            'Cable',
            'Internet'
        ],
        Clothing: [
            'Adult\'s clothing',
            'Adult\'s shoes',
            'Childrens\'s clothing',
            'Children\'s shoes'
        ],
        'Medical/Healthcare': [
            'Primary care',
            'Dental care',
            'Specialty care',
            'Urgent care',
            'Medications',
            'Medical devices'
        ], 
        Insurance: [
            'Health insurance',
            'Homeowner\'s insurance',
            'Home warranty or Protection plan',
            'Auto insurance',
            'Life insurance',
            'Disability insurance'
        ], 
        'Household Items/Supplies': [
            'Toiletries',
            'Laundry detergent',
            'Dishwasher detergent',
            'Cleaning supplies',
            'Tools'
        ],
        Personal:[
            'Gym memberships',
            'Haircuts',
            'Salon services',
            'Cosmetics',
            'Babysitter',
            'Subscriptions'
        ],
        Debt: [
            'Personal loans',
            'Student loans',
            'Credit cards'
        ],
        Retirement: [
            'Financial planning',
            'Investing'
        ],
        Education: [
            'Children\'s college',
            'Your college',
            'School supplies',
            'Books'
        ],
        Savings: [
            'Emergency fund',
            'Big purchases like a new mattress or laptop',
            'Other savings'
        ],
        'Gifts/Donations': [
            'Birthday',
            'Anniversary',
            'Wedding',
            'Christmas',
            'Special occasion',
            'Charities'
        ],
        Entertainment: [
            'Alcohol and/or bars',
            'Games',
            'Movies',
            'Concerts',
            'Vacations',
            'Subscriptions'
        ]
    }

const getIncome = () => {
    return incomeCategories;
}

const getExpenses = () => {
    return expensesCategories;
}

export {getExpenses, getIncome};