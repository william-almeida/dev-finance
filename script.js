const Modal = {
  open(){
    document.querySelector('div.modal-overlay').classList.add('active')
  },
  close(){
    document.querySelector('div.modal-overlay').classList.remove('active')
  }
}

// DATABASE =======
const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '30/05/2021'
  },
  {
    id: 3,
    description: 'Website',
    amount: 500000,
    date: '30/05/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -15000,
    date: '30/05/2021'
  },
  {
    id: 4,
    description: 'Nerd ao Cubo',
    amount: -8000,
    date: '30/05/2021'
  },
  {
    id: 5,
    description: 'Consultoria',
    amount: 20000,
    date: '30/05/2021'
  }
]

const Transaction = {
  all: transactions,

  add(transaction){
    Transaction.all.push(transaction)
    App.reload()
  },
  remove(index) {
    Transaction.all.splice(index, 1)
    App.reload()
  },
  incomes() {
    let income = 0
    Transaction.all.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    })
    return income
  },

  expenses() {
    let expense = 0
    Transaction.all.forEach(transaction => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    })
    return expense
  },

  total() {
    return Transaction.incomes() + Transaction.expenses()
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  
  addTansaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    DOM.transactionsContainer.appendChild(tr)
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense"
    const amount = Utils.formatCurrency(transaction.amount)
    const html = `
      <td class="description" >${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover Transação">
      </td>
    `
    return html
  },

  updateBalance() {
    document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(
        Transaction.incomes()
      )
    
    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(
        Transaction.expenses()
      )
    
    document
      .getElementById('totalDisplay')
      .innerHTML =  Utils.formatCurrency(
        Transaction.total()
      )

  },

  clearTransaction() {
    DOM.transactionsContainer.innerHTML = ''
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '- ' : ''
    value = String(value).replace(/\D/g, '')
    value = Number(value) / 100
    value = value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    } )

    return signal + value
    
  }
}

const App = {
  init() {
    Transaction.all.forEach(transaction => {
      DOM.addTansaction(transaction)
    })
    
    DOM.updateBalance()
  },
  reload() {
    DOM.clearTransaction()
    App.init()

  }
}

App.init()

Transaction.add({
  id: 7,
  description: 'festa',
  amount: -45000,
  date: '25/03/2021'
})

Transaction.remove(1)