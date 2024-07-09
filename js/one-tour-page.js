document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("one-tour-contact-form").onsubmit = function() {
        var name = document.querySelector('input[name="name"]').value;
        var phone = document.querySelector('input[name="phone"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var accommodation = document.querySelector('select[name="accommodation"]').value;

        if (name === "" || phone === "" || email === "" || accommodation === "") {
            alert("Все поля должны быть заполнены.");
            return false;
        }
        return true;
    };
});
