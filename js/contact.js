var btn_submit = document.querySelector("button[type='submit']");
var form = document.getElementById("contact-us-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fullName = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let title = document.getElementById('titleInput').value;
    let text = document.getElementById('textInput').value;
    var data = {
        name : fullName,
        email: email,
        title : title,
        text : text
    };
    fetch("http://localhost:3000/contact",{
        method: 'POST',
        headers: 
        { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(data)
    }).then((res) => {
        return res.text();
    }).then((ans) => {
        ans = JSON.parse(ans);
        if (ans.success == false) {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').innerHTML = ans.error;
        } else {
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        }
    });
});