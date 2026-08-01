document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        message.textContent = error.message;
    } else {
        message.style.color = "green";
        message.textContent = "Login Successful!";
    }
});
