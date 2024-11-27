//Javascriptpro_
let label = document.querySelectorAll('.container .input label');

label.forEach((label => {
  label.innerHTML = label.textContent.split('').map((letters, i) => `<span style="transition-delay:${i * 50}ms">${letters}</span>`).join('')
}))
