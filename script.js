function bookAppointment() {
    document.getElementById("appointmentForm").style.display = "block";
}function submitAppointment() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    if (name === "" || phone === "" || service === "" || date === "") {
        alert("Please fill all details.");
        return;
    }

    let message =
        "Hello Glow & Style Salon!%0A%0A" +
        "I want to book an appointment.%0A" +
        "Name: " + name + "%0A" +
        "Mobile: " + phone + "%0A" +
        "Service: " + service + "%0A" +
        "Date: " + date;

    let whatsappNumber = "919876543210";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + message,
        "_blank"
    );
}