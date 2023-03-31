function reg() {
  localStorage.setItem("name",document.getElementById("name").value);
  localStorage.setItem("surname",document.getElementById("surname").value);
  localStorage.setItem("email",document.getElementById("email").value);
  localStorage.setItem("password",document.getElementById("password").value);
  
}

document.getElementById("button_id").onclick=function () {
  reg();
  var op = 0.1;  // initial opacity
  var flag = 1;
  document.getElementById("pop-up").style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
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

login.onclick = function() {
  if(
    localStorage.getItem("email")==document.getElementById('email_1').value &&
    localStorage.getItem("password")==document.getElementById('password_1').value){
      document.body.style.background = "url(img/heaven.jpg) no-repeat";
      document.body.style.backgroundSize = "100%";
      document.body.style.overflow = "hidden";
    }
  else {
    document.body.style.background = "url(img/hell.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    document.body.style.overflow = "hidden";
  }
}



// When the user clicks on the button, open the modal
btn.onclick = function () {
modal.style.display = "block";
var div = document.createElement("div");
div.id = "create_div"
div.innerHTML = `<img src="img/juses.png"/>`;
if (document.getElementById("create_div")==undefined)
{document.body.appendChild(div);}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

function ch_space_f(e){
  if (e.keyCode == 39 && document.getElementById('logfc').display=='block'){
    document.getElementById('logfc').display=='none';
    document.getElementById('regfc').display=='block';
  }
  else if(e.keyCode == 39 && document.getElementById('regfc').display=='block') {
    document.document.getElementById('regfc').display=='none';
    document.getElementById('logfc').display=='block';
  }
  console.log(e);
}

document.addEventListener('keydown', ch_space_f);


function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

