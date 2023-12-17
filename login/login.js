write_login()
function write_login() {
  body.innerHTML = `
  <div class = "main">
      <h1 class = 'signIn'>Login</h1>
      <p class = 'error' id = 'lg_massage'></p>
  <form class = 'form' id="login">
  <div class = 'password_div'>
      <input type="text " id = "lg_mail"class = 'loginInput' autofocus placeholder="Username or mail">
  </div>
  <div class = 'password_div'>
      <input type="password" id = 'lg_pass'class = 'loginInput' autofocus placeholder="password">
      <i class="fa fa-eye-slash" id="togglePassword3" onclick="vis('lg_pass', 'lgp', 'togglePassword3')" style="margin-left: -32px;margin-top: 10px; position: absolute;"></i>
  </div>

  
  </form>
  <div class = 'button_div'>
  <button type = 'submit' class = "submit" type = 'submit' onclick = "logIn()">Submit</button>
  </div>


  <a class="form__link" onclick = 'write_creat()'><u>Don't have an account? Create an account</u></a> <br>
  <a class="form__link" onclick = 'forgot(1)'><u>Forgot password?</u></a>
  </div>
  `
}



function write_creat() {

  body.innerHTML = `
  <div class = "main">
   <h1 class = 'signIn'>Create an acaunt</h1>
<form class = 'form' id="login">
  <div class = 'mail_div'>
  <input type="password " id = "cr_mail" class = 'loginInput' autofocus placeholder="Username or mail">
</div>
<div class = 'password_div'>
  <input class = loginInput type="password" autofocus placeholder="password" id="cr_pass">
  <i class="fa fa-eye-slash" id="togglePassword1" onclick="vis('cr_pass', 'crp', 'togglePassword1')" style="margin-left: -32px; margin-top: 10px; position: absolute;"></i> 
</div>
<div class = 'password_div'>
  <input type="password" id = "cr_confirm" class = 'loginInput' autofocus placeholder="confirm password">
  <i class="fa fa-eye-slash" id="togglePassword2" onclick="vis('cr_confirm', 'crc', 'togglePassword2')" style="margin-left: -32px;margin-top: 10px; position: absolute;"></i>
</div>

<input type="email" placeholder="email address">
<input type="text" placeholder="national cauntry">
<input type="number" placeholder="phone number">

<div class = "gender" style = {{width: "100px"}}>

<div><label for="male">male</label></div>
<div><input type="radio" id = 'male' name="gender"></div>
<div><label for="famale">famale</label></div>
<div><input type="radio" id = 'famale' name="gender"></div>

</div>

</form>
<div class = 'button_div'>
<button class = "submit" id = 'buttonSb' onclick = "creat()" type = 'submit'>Submit</button>
</div><p class="form__text">

<div class = 'massage'>
  <p id = 'incorrectM' class = 'err'><u></u></p>
  <p id = 'incorrectP' class = 'err'><u>  Choose a safe password. It must be unique, hard to guess, contain more than 8 characters, have capital letters, symbols and numbers.</u></p>    
</div>
<a class="form__link" onclick = 'write_login()'><u>Allready have an account? Sign in</u></a>
</p>   
</div>`
}


function massage() {
  body.innerHTML = `
  <div style = 'text-align: center;'>
  <h1 style = 'margin-bottom: -150px;'>  you are registered successfully  </h1>
  <div class = "massageDiv">-
<i id="togglePassword2" onclick = ' write_creat()' style="font-size: 30px;margin-top: -318px;margin-right: -550px; cursor: pointer;"><div style = 'background: #e9f4dd;'>&#x2716;</div></i>
</div>
<div class = 'butt_div'><button class = 'lgBu' id = 'buttonSb' onclick = "write_login()" type = 'submit'>Login</button></div>
</div>
`
}


let createds = {}

var cr_mail
var cr_pass
var cr_conf

function creat() {
  createds = JSON.parse(localStorage.getItem('createds')) ?? { mail: 'pass' }
  let incorrectM = document.getElementById('incorrectM')
  let incorrectP = document.getElementById('incorrectP')
  cr_mail = document.querySelector("#cr_mail").value
  cr_pass = document.querySelector("#cr_pass").value
  cr_conf = document.querySelector("#cr_confirm").value
  if ((cr_mail.indexOf("@") === -1 || cr_mail.indexOf('.', cr_mail.indexOf('@')) === -1)) {
    incorrectM.innerHTML = 'mail format is incorrect'
    incorrectM.style = 'margin-left: 20px;font-size: 17px;color: #cc3333;'
  }
  else {
    incorrectM.innerHTML = ''
  }
  if (Object.keys(createds).includes(cr_mail)) {
    incorrectM.innerHTML = '<p>already have a user with this mail</p>'
    incorrectM.style = 'margin-left: 20px;margin-top: -20px;font-size: 17px;color: #cc3333;'
    return 0
  }
  if (cr_pass !== cr_conf || cr_conf === '' || cr_pass === '') {
    incorrectP.innerHTML = '<p>incorrect password</p>'
    incorrectP.style = 'margin-left: 20px;margin-top: -20px;font-size: 17px;color: #cc3333;'
  }
  else if (cr_pass.length < 8 || (cr_pass.split('').filter(el => typeof +el === 'number')).length === 0 || (cr_pass.split('').filter(el => "`~!@#$%^&*()_-+=[{]};:',<.>/?".includes(el))).length === 0 || (cr_pass.split('').filter(el => el.toLowerCase() !== el)).length === 0) {
    incorrectP.innerHTML = '  Choose a stronger password. It must be unique, hard to guess, contain more than 8 characters, have capital letters, symbols and numbers.'
    incorrectP.style = 'margin-left: 20px;font-size: 17px;color: #cc3333;'
  }
  else {
    createds[cr_mail] = cr_conf
    let obj = JSON.stringify(createds)
    localStorage.setItem('createds', obj)
    massage()
  }
}

let passwords = {
  lgp: 0,
  crp: 0,
  crc: 0,
  fgp: 0,
  fgc: 0
}
function vis(id, x, butId) {
  let input = document.getElementById(id)
  if (!passwords[x]) {
    input.type = "text"
    passwords[x] = 1
    document.getElementById(butId).className = "fa fa-eye"
  }
  else {
    input.type = "password"
    passwords[x] = 0
    document.getElementById(butId).className = "fa fa-eye-slash"
  }
}

localStorage.removeItem('item')

function logIn() {
  createds = JSON.parse(localStorage.getItem('createds'))
  function chack() {
    try {
      return createds[lg_mail] === lg_pass
    } catch (error) {
      return false
    }
  }
  let lg_mail = document.getElementById("lg_mail").value
  let lg_pass = document.getElementById("lg_pass").value
  if (chack()) {
    page(lg_mail)
  }
  else {
    document.getElementById('lg_massage').innerHTML = 'incorrect mail/password'
    document.getElementById('lg_massage').style = 'margin-left: 20px;font-size: 17px;color: #cc3333;'
  }
}
var fg_mail
function forgot(x) {
  if (x === 1) {
    body.innerHTML = `
    <div class = "main">
        <h2 class = 'signIn'>Write your email address</h2>
        <p class = 'error' id = 'fg_errMail'></p>
    <form class = 'form' id="login">
    <div class = 'mail_div'>
        <input type = "text" id = "fg_mail" class = 'loginInput' autofocus placeholder="Username or mail">
    </div>
    </form>
    <div class = 'button_div'>
    <button type = 'submit' class = "submit" type = 'submit' onclick = "forgot(2)">Submit</button>
    </div>
    <a class="form__link" onclick = 'write_login()'><u>Log in</u></a> <br>
    <a class="form__link" onclick = 'write_creat()'><u>Create an account</u></a>
    </div>
    `

  }
  else {
    fg_mail = document.getElementById('fg_mail').value
    createds = JSON.parse(localStorage.getItem('createds') )
    function check(){
      try {
        return Object.keys(createds).includes(fg_mail)
      } catch (error) {
        return false
      }
    }
       if (check()) {
      body.innerHTML = `
  <div class = "main">
   <h2 class = 'signIn'>Create password</h2>
   <p id = 'fgperr'></p>
<form class = 'form' id="login">
<div class = 'password_div'>
  <input class = loginInput type="password" autofocus placeholder="new password" id="fg_pass">
  <i class="fa fa-eye-slash" id="fgEye1" onclick="vis('fg_pass', 'fgp', 'fgEye1')" style="margin-left: -32px; margin-top: 10px; position: absolute;"></i> 
</div>
<div class = 'password_div'>
  <input type="password" id = "fg_conf" class = 'loginInput' autofocus placeholder="confirm password">
  <i class="fa fa-eye-slash" id="fgEye2" onclick="vis('fg_conf', 'fgc', 'fgEye2')" style="margin-left: -32px; margin-top: 10px; position: absolute;"></i>
</div>
</form>
<div class = 'button_div'>
<button class = "submit" id = 'buttonSb' onclick = "newPassword()" type = 'submit'>Submit</button>
</div><p class="form__text">
<div class = 'massage'>
  <p id = 'incorrectPass' class = 'err'><u>  Choose a safe password. It must be unique, hard to guess, contain more than 8 characters, have capital letters, symbols and numbers.</u></p>    
</div>
<a class="form__link" onclick = 'write_login()'><u>Allready have an account? Sign in</u></a>
</p>   
</div>`

    }
    else {
      document.getElementById('fg_errMail').innerHTML = 'incorrect email'
      document.getElementById('fg_errMail').style = 'color: #cc3333;'
    }
  }
}

function newPassword() {
  var fg_pass = document.getElementById('fg_pass').value
  var fg_conf = document.getElementById('fg_conf').value
  let fgperr = document.getElementById('fgperr')
  if (fg_pass !== fg_conf || fg_conf === '' || fg_pass === '') {
    fgperr.innerHTML = '<p>incorrect password</p>'
    fgperr.style = 'margin-left: 20px;margin-top: -20px;font-size: 17px;color: #cc3333;'
  }
  else if (fg_pass.length < 8 || (fg_pass.split('').filter(el => typeof +el === 'number')).length === 0 || (fg_pass.split('').filter(el => "`~!@#$%^&*()_-+=[{]};:',<.>/?".includes(el))).length === 0 || (fg_pass.split('').filter(el => el.toLowerCase() !== el)).length === 0) {
    fgperr.innerHTML = '  Choose a stronger password. It must be unique, hard to guess, contain more than 8 characters, have capital letters, symbols and numbers.'
    fgperr.style = 'margin-left: 20px;font-size: 17px;color: #cc3333;'
    document.getElementById('incorrectPass').innerHTML = ''
  }
  else {
    createds = JSON.parse(localStorage.getItem('createds'))
    createds[fg_mail] = fg_conf
    localStorage.setItem('createds', JSON.stringify(createds))
    changed()
  }
}
 function page(email) {
  let name = email.slice(0, email.indexOf('@'))
  name = name.split('.').join(' ')
  body.innerHTML = `
    <p style = 'font-size: 70px; position: absolute; color:#011c2b;'>welcome to <br>your profile page <br><b>${name}</b></p>
    <button class = "logout" id = 'buttonSb' onclick = "write_login()" type = 'submit'>Log out</button>
    `
}



function changed(){
  let div = document.createElement('div');
  div.id = "alert";
  div.innerHTML = `
  <strong>Hi there!</strong> your password is changed.
  <button id = 'close' onclick = 'remove()'>&#x2716</button>
  `;
  document.body.append(div);
 

  setTimeout(call, 300)

  function call(){
      document.querySelector("#alert").style = "margin-top: 30px;"
      setTimeout(remove, 4000)
  }


  function remove(){
    write_login()
      document.querySelector("#alert").style = "margin-top: -150px;"
      div.innerHTML = ''
  }


}



