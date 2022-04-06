
function createRow(doc, index) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
                <td scope="row">${index + 1}</td>
                <td>${doc.data().email}</td>
                <td>${doc.data().password}</td>
        `;
  return tr;
}

db.collection("auth")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc, index) => {
      document
        .querySelector("table tbody")
        .appendChild(createRow(doc, index));
    });
  });
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('table')) {

    let drawer = document.getElementById('drawer')
    // Open drawer
    document.querySelector('.navbar__left .fa-bars').addEventListener('click', (e) => {
      drawer.classList.add('open-drawer')
      e.target.parentElement.classList.add('opening')
    })
    // close drawer
    document.querySelector('.navbar__left .fa-times').addEventListener('click', (e) => {
      drawer.classList.remove('open-drawer')
      e.target.parentElement.classList.remove('opening')
    })
    // Open Login
    document.getElementById('open__login').addEventListener('click', (e) => {
      document.getElementById('login').classList.add('show')
      document.getElementById('openSignin').parentElement.classList.add('login-open')
    })
    document.getElementById('openSignin').addEventListener('click', (e) => {
      document.getElementById('login').classList.add('show')
      e.target.parentElement.classList.add('login-open')
    })
    // close Login
    document.getElementById('closeSignin').addEventListener('click', (e) => {
      document.getElementById('login').classList.remove('show')
      e.target.parentElement.classList.remove('login-open')
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
        if (!(input.value !== ''))
          input.parentElement.classList.remove('focused')
      })
    })
    document.querySelector('.login .fa-eye').addEventListener('click', (e) => {
      e.target.classList.toggle('active');
      if (e.target.classList.contains('active'))
        document.getElementById('password').setAttribute('type', 'text')
      else
        document.getElementById('password').setAttribute('type', 'password')
    })


    // Save data
    document.getElementById('btnLogin').addEventListener('click', () => {
      let email = document.getElementById('email')
      let password = document.getElementById('password')
      if (!(email.value.indexOf('@') == -1)) {
        db.collection('auth').add({
          email: email.value,
          password: password.value
        }).then(() => {
          location.pathname = 'update-data.html';
        })
      }
    })
  } else {
    document.getElementById('clearAll').addEventListener('click', () => {
      db.collection("auth")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc, index) => {
            db.collection("auth").doc(doc.id).delete()
          });
        });
        document
        .querySelector("table tbody").innerHTML = ''
    })
  }
})