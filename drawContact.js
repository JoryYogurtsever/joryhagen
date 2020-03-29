function drawContactInitial() {
      canvas.height = about.height - 20;
      canvas.width = document.body.clientWidth - 20;
      ctx.clearRect(0, 0, window.innerWidth, about.height)
      clouds = []
      signs = []
      drawClouds(10)
      window.scrollTo(0, 10);
      drawSigns(1, [null])
      createPlayer()
      animateContact()
}

function animateContact() {
  if (player.jumping || player.walking || !player.grounded) {
    ctx.font = `20px "${FONT_NAME}"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, window.innerWidth, about.height)
    animateSigns()
    animatePlayer()
    about.finalAnimationDone = false;
  } else if (!about.finalAnimationDone) {
    ctx.font = `20px "${FONT_NAME}"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, window.innerWidth, about.height)
    animateSigns()
    animatePlayer()
    about.finalAnimationDone = true;
  }
    if (activeScene === 'contact') {
      window.requestAnimationFrame(animateContact)
  }
}

function handleSubmit() {
  let name = document.getElementById("form-name").value;
  let email = document.getElementById("form-email").value;
  let message = document.getElementById("form-message").value;
  document.getElementById('name-error').classList.add('hidden');
  document.getElementById('email-error').classList.add('hidden');
  document.getElementById('message-error').classList.add('hidden');

  if (name === '') {
    let error = document.getElementById('name-error')
    // error.classList.add('error');
    error.classList.remove('hidden');
  }
  if (validateEmail(email) === false) {
    let error = document.getElementById('email-error')
    // error.classList.add('error');
    error.classList.remove('hidden');
  }
  if (message === '') {
    let error = document.getElementById('message-error')
    // error.classList.add('error');
    error.classList.remove('hidden');
  }
  if (message !== '' && validateEmail(email) && name !== '') {
    document.getElementById('contact-form').classList.add('contact-form-hidden');
    document.getElementById('contact-form').classList.remove('contact-form-display');
    document.getElementById('contact-form-success').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('contact-form-success').classList.add('hidden');
    }, 3000)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://vuejs-http-96a4b.firebaseio.com/comments.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      name: name,
      email: email,
      message: message,
    }));
  }
}

function validateEmail(elementValue){
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue);
 }
