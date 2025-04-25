const buttons = document.querySelectorAll('.container-btn button')
const buttonsArray = Array.from(buttons)
const choices = ['pedra', 'papel', 'tesoura']
const results = {
  'pedra': { 
    'pedra': 'Empate!', 
    'papel': 'Você perdeu! O computador escolheu papel.', 
    'tesoura': 'Você venceu! O computador escolheu tesoura.'
  },
  'papel': {
    'pedra': 'Você venceu! O computador escolheu pedra.',
    'papel': 'Empate!',
    'tesoura': 'Você perdeu! O computador escolheu tesoura.'
  },
  'tesoura': {
    'pedra': 'Você perdeu! O computador escolheu pedra.',
    'papel': 'Você venceu! O computador escolheu papel.',
    'tesoura': 'Empate!'
  }
}

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const playerChoice = choices[buttonsArray.indexOf(button)]
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log(playerChoice)
    console.log(computerChoice)
    alert(results[playerChoice][computerChoice])
  })
});