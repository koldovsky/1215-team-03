const form = document.getElementById("contacts-form");

async function handleSubmit(event) {
    event.preventDefault();
    const toastLiveInfo = document.getElementById('liveToast-form');
    const toastBody = document.querySelector('.toast-body-form');
    const toastTitle = document.querySelector('.toast-title-form');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveInfo, {
        delay: 10000
    });

    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            toastBody.innerHTML = "Thanks for your submission!";
            toastTitle.innerHTML = "Success";
            toastBootstrap.show();
            form.reset()
        } else {
            toastBody.innerHTML = "Oops! There was a problem submitting your form";
            toastTitle.innerHTML = "Error";
            toastBootstrap.show();
        }
    } catch {
        toastBody.innerHTML = "Oops! There was a problem submitting your form";
        toastTitle.innerHTML = "Error";
        toastBootstrap.show();
    }

}

form.addEventListener("submit", handleSubmit)

