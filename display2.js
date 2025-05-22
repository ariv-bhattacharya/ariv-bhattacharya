function callvalue(event) {
  event.preventDefault(); 
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const country = document.getElementById("country").value;
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("email", email);
  localStorage.setItem("gender", gender);
  localStorage.setItem("country", country);
  window.location.href = "1.html";
}