const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const testo = document.getElementById('testo')

  const listItem = document.createElement('li')
  listItem.innerText = testo.value
  const button = document.createElement('button')
  button.innerText = 'Rimuovi'

  button.style.marginLeft = '10px'
  button.style.fontSize = '17px'
  button.style.borderRadius = '2em'
  listItem.style.color = '#B00040'
  listItem.style.fontWeight = 'bold'
  button.style.boxShadow = '2px -1px 20px -7px #E1007C'
  listItem.style.textShadow = '0 0 10px #FF001A'
  listItem.appendChild(button)

  const salvataggio = document.getElementById('list')

  salvataggio.appendChild(listItem)

  listItem.addEventListener('click', () => {
    listItem.style.textDecoration = 'line-through'
  })

  button.addEventListener('click', (e) => {
    e.stopPropagation()
    salvataggio.removeChild(listItem)
  })
})
