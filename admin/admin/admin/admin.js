const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", async () => {
  message.textContent = "Login button clicked...";

  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      message.style.color = "red";
      message.textContent = error.message;
      console.error(error);
      return;
    }

    message.style.color = "green";
    message.textContent = "Login Successful!";
    console.log(data);

  } catch (err) {
    message.style.color = "red";
    message.textContent = err.message;
    console.error(err);
  }
});
