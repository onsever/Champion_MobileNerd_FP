function register () {
    let form = document.getElementById('regForm').elements
    let email = form['email'].value
    let password = stringToHash(form['password'].value)
    let url = form['url'].value
    let birth = form['birth'].value
    let gender = form['gender'].value
    let comment = form['comments'].value
    if (document.getElementById('regForm').checkValidity()){
      let user = JSON.stringify({
          email,
          password,
          url,
          birth,
          gender,
          comment
      })
      let users = JSON.parse(localStorage.getItem('users'))
      if (users) {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
      }else{
        localStorage.setItem('users', JSON.stringify([user]))
      }
      console.log(users, typeof(users))
      alert('You have successfully register, now will jump to the home page.')
    }else{
      document.getElementById('regForm').reportValidationError
    }
}

function showPassword() {
    var pw = document.getElementById("password");
    if (pw.type === "password") {
      pw.type = "text";
    } else {
      pw.type = "password";
    }
}

function stringToHash(string) {
    var hash = 0;
      
    if (string.length == 0) return hash;
      
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash
}