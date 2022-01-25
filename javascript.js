function conversion() {
    var i = document.getElementById("input").value;
    var c = (5/9)*(i-32);
    document.getElementById("result").innerHTML = c + '°C';
}

var form = document.getElementById("theform");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);