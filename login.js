function login(form){
 if(form.logemail.value == "admin@gmail.com" && form.logpass.value == "123") {
    window.open("https://arham5416.github.io/admin-demo/admin/html&css/pages/dashboard/dashboard.html")
  }
 else {
   alert("Error Password or Username")/*displays error message*/
  }
}