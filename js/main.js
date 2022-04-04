window.addEventListener('DOMContentLoaded', () => {
  let drawer = document.getElementById('drawer')
  // Open drawer
  document.querySelector('.navbar__left .fa-bars').addEventListener('click', (e) => {
    drawer.classList.add('open-drawer')
    e.target.classList.add('opening')
    e.target.parentElement.classList.add('opening')
  })
  // close drawer
  document.querySelector('.navbar__left .fa-times').addEventListener('click', (e) => {
    drawer.classList.remove('open-drawer')
    e.target.parentElement.classList.remove('opening')
  })
  // Open & close dropdown in drawer
  let dropdown = document.querySelectorAll('.drawer__menu__dropdown')
  dropdown.forEach(list => {
    list.addEventListener('click', () => {
      if (list.classList.contains('show')) {
        list.classList.remove('show')
      } else {
        dropdown.forEach(e => e.classList.remove('show'))
        list.classList.add('show')
      }
    })
  })
  // forms 
  let inputs = document.querySelectorAll('.login input')
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused')
    })
    input.addEventListener('blur', () => {
      if(!(input.value !== ''))
        input.parentElement.classList.remove('focused')
    })
  })
  document.querySelector('.login .fa-eye').addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    if(e.target.classList.contains('active')) 
      document.getElementById('password').setAttribute('type', 'text')
    else 
      document.getElementById('password').setAttribute('type', 'password')
  })
  // ope form login
  document.getElementById('openSignin').addEventListener('click', () => {
    document.getElementById('login').classList.add('show')
  })
  // Close form login
  document.getElementById('closeSignin').addEventListener('click', () => {
    document.getElementById('login').classList.remove('show')
  })



})