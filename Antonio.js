
function reg() {
  let newAccount = {
    "name": document.getElementById("name").value,
    "surname": document.getElementById("surname").value,
    "email": document.getElementById("email").value,
    "password": document.getElementById("password").value
  };
  accounts = JSON.parse(localStorage.getItem("accounts"));
  let already = false;

  for (const account of accounts) {
    if(account.email == newAccount.email){
      already=true;
    }
  }
  if(!already){
    accounts.push(newAccount);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
 
}

document.getElementById("button_id").onclick = function () {
  reg();
  var op = 0.1;  // initial opacity
  var flag = 1;
  document.getElementById("pop-up").style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    document.getElementById("pop-up").style.opacity = op;
    document.getElementById("pop-up").style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 25);
}
// Get the modal
var modal = document.getElementById("myModal");

var login = document.getElementById("button_log");

// Get the button that opens the modal
var btn = document.getElementById("More");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var ch_space = document.getElementById("ch_space");
$(login).on("click", function (){
// login.onclick = function save() {
  if (JSON.parse(localStorage.getItem("accounts"))[0]['email'] == document.getElementById('email_1').value &&
    JSON.parse(localStorage.getItem("accounts"))[0]['password'] == document.getElementById('password_1').value) {
    document.body.style.background = "url(img/heaven.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    document.body.style.overflow = "hidden";
    document.getElementById("heaven").style.color = 'blue';
  }
  else {
    document.body.style.background = "url(img/hell.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    document.body.style.overflow = "hidden";
    document.getElementById("heaven").style.color = 'white';
  }
})

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  var div = document.createElement("div");
  div.id = "create_div"
  div.innerHTML = `<img src="img/juses.png"/>`;
  if (document.getElementById("create_div") == undefined) { document.body.appendChild(div); }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function ch_space_f(e) {
  if ((e.keyCode == 39) && (getComputedStyle(document.getElementById('login_form_container')).display == 'block')) {
    console.log("log is visible")
    $('#login_form_container').hide();
    $('#register-form-container-inner').show();
  }
  else if ((e.keyCode == 39) && (getComputedStyle(document.getElementById('register-form-container-inner')).display == 'block')) {
    $('#register-form-container-inner').hide();
    $('#login_form_container').show();
  }
  console.log(e);
}

document.addEventListener('keydown', ch_space_f);


document.getElementById('eye').onclick = function () {
  document.getElementById('eye').classList.toggle('active');
  document.getElementById('eye_slash').classList.toggle('active');
  document.getElementById("password").type = 'text';
}
document.getElementById('eye_slash').onclick = function () {
  document.getElementById('eye_slash').classList.toggle('active');
  document.getElementById('eye').classList.toggle('active');
  document.getElementById("password").type = 'password';
}


