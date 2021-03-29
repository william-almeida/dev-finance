const Modal = {
  open(){
    document.querySelector('div.modal-overlay').classList.add('active')
  },
  close(){
    document.querySelector('div.modal-overlay').classList.remove('active')
  }
}

// array of transactions
const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '30/05/2021'
  },
  {
    id: 1,
    description: 'Website',
    amount: 500000,
    date: '30/05/2021'
  },
  {
    id: 1,
    description: 'Internet',
    amount: -15000,
    date: '30/05/2021'
  },
  {
    id: 1,
    description: 'Nerd ao Cubo',
    amount: -8000,
    date: '30/05/2021'
  }
]

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // diferença das entradas e saídas
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
    const html = `
      <td class="description" >${transaction.description}</td>
      <td class="${CSSclass}">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover Transação">
      </td>
    `
    return html
  }
}

// para cada elemento da lista
transactions.forEach(function(transaction){
  DOM.addTansaction(transaction)
})
