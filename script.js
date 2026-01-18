const form = document.querySelector('form')
const input = document.querySelector('#item')
const list = document.querySelector('ul')
const alertBox = document.querySelector('.box-alert')
const alertMessage = alertBox?.querySelector('.alert-message')
const closeAlert = document.querySelector('#close-alert')

let alertTimeout = null

form.addEventListener('submit', event => {
  event.preventDefault()
  const value = input.value.trim()
  if (!value) return
  addItem(value)
  input.value = ''
  input.focus()
})

function addItem(text) {
  const li = document.createElement('li')
  li.className = 'py-1'

  const container = document.createElement('span')
  container.className = 'flex justify-between bg-blue-900 p-2 rounded-md text-white items-center'

  const itemText = document.createElement('span')
  itemText.textContent = text

  const removeButton = document.createElement('img')
  removeButton.src = './assets/icons/trash.svg'
  removeButton.alt = 'Remover item'
  removeButton.className = 'cursor-pointer'

  removeButton.addEventListener('click', () => {
    li.remove()
    showAlert('Item removido da lista')
  })

  container.append(itemText, removeButton)
  li.appendChild(container)
  list.appendChild(li)
}

function showAlert(message) {
  if (!alertBox || !alertMessage) return

  alertMessage.textContent = message
  alertBox.classList.remove('hidden')

  clearTimeout(alertTimeout)
  alertTimeout = setTimeout(() => {
    alertBox.classList.add('hidden')
  }, 3000)
}

if (closeAlert) {
  closeAlert.addEventListener('click', () => {
    alertBox.classList.add('hidden')
    clearTimeout(alertTimeout)
  })
}
