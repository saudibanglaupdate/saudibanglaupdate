const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", async function () {

    message.style.color = "black";
    message.textContent = "Logging in...";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        message.style.color = "red";
        message.textContent = "Please enter email and password.";
        return;
    }

    try {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            console.error("Supabase Login Error:", error);

            message.style.color = "red";
            message.textContent = error.message;
            return;
        }

        console.log("Login successful:", data);

        message.style.color = "green";
        message.textContent = "Login Successful!";

    } catch (error) {

        console.error("Login Error:", error);

        message.style.color = "red";
        message.textContent = error.message;
    }
});
