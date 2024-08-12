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

//tombol pesan
document.getElementById('pesanSekarang').addEventListener('click', function() {
    const selectedItem = document.querySelector('.selected');
    const userId = document.getElementById('userId').value;
    
    if (!selectedItem || !userId) {
        alert("Harap isi User ID dan pilih item.");
        return;
    }

    const itemName = selectedItem.innerText.split('\n')[0];
    const itemPrice = selectedItem.innerText.split('\n')[1];
    const waMessage = `˖ ࣪ ‹. Halo LuminVer, saya ingin order item berikut .› ࣪˖\nNama Game: Free Fire\nItem: ${itemName}\nHarga: ${itemPrice}\nUser ID: ${userId}`;

    const waUrl = `https://wa.me/62881010100174?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
});
