document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const feedback = document.getElementById("customerFeedback").value;

    if (name.trim() === "" || feedback.trim() === "") {
        document.getElementById("message").textContent =
            "Please complete all fields.";
        return;
    }

    document.getElementById("message").textContent =
        "Thank you, " + name + "! We appreciate your feedback.";

    this.reset();
});