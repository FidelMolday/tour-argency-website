document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    });

    const cancelButton = document.querySelector('.cancel-btn');

    cancelButton.addEventListener('click', function () {
        // Handle cancellation here
        console.log('Reservation cancelled');
    });
});
