var marquee = document.getElementById('flashinfo');
        function stopMoving() {
            marquee.stop();
        }

        function startMoving() {
            marquee.start();
        }


//game

function selectOption(element) {
    // Remove selected class from all options
    const allOptions = document.querySelectorAll('.membership div, .top-up div');
    allOptions.forEach(option => {
        option.classList.remove('selected');
    });

    // Add selected class to the clicked option
    element.classList.add('selected');
}

function selectPayment(element, paymentMethod) {
    // Remove selected class from all payment options
    const allPayments = document.querySelectorAll('.payment div');
    allPayments.forEach(payment => {
        payment.classList.remove('selected');
    });

    // Add selected class to the clicked payment option
    element.classList.add('selected');

    // Store selected payment method
    selectedPayment = paymentMethod;
}
//tombol pesan
