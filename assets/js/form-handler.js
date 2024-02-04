window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var button = document.getElementById("contact-form-button");
  var status = document.getElementById("contact-form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks! Contact form is submitted successfully.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event
  if (form != null) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      console.log(data)
      console.log(data.get("Name"))
      window.location.href = 'mailto:sowmyayellapragada@gmail.com?subject=New contact request from - ' + data.get("Name") + ' (' + data.get("email") + ')' + '&body=' + data.get("message");
//      ajax(form.method, "email.php", data, success, error);
    });
  }
});

//// helper function for sending an AJAX request - not used
//
//function ajax(method, url, data, success, error) {
//  var xhr = new XMLHttpRequest();
//  xhr.open(method, url);
//  console.log(url)
//  xhr.setRequestHeader("Accept", "application/json");
//  xhr.onreadystatechange = function () {
//    if (xhr.readyState !== XMLHttpRequest.DONE) return;
//    if (xhr.status === 200) {
//      success(xhr.response, xhr.responseType);
//    } else {
//      error(xhr.status, xhr.response, xhr.responseType);
//    }
//  };
//  xhr.send(data);
//}
