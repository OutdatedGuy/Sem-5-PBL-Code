const form = document.querySelector("form");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (form.password.value !== form.confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  const data = {
    fullName: form.fullName.value,
    gender: form.gender.value,
    birthDate: form.birthDate.value,
    email: form.email.value,
    phone: form.phone.value,
    userName: form.userName.value,
    password: form.password.value,
  };

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/userRegistration", arg);
  const result = await response.json();

  console.log(result);
});
