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

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

function getRootPath() {
    // Hitung jumlah '/' dalam path untuk menentukan kedalaman folder
    let depth = window.location.pathname.split('/').length - 2;

    // Jika halaman di root (index.html), path cukup "assets/"
    return depth <= 0 ? "assets/" : "../".repeat(depth) + "assets/";
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById("mode-icon");
    let rootPath = getRootPath(); // Dapatkan path yang benar untuk ikon

    // Toggle kelas mode gelap
    body.classList.toggle("dark-mode");

    // Cek apakah mode gelap aktif
    if (body.classList.contains("dark-mode")) {
        icon.src = rootPath + "moon.svg"; // Ganti ke ikon bulan
        icon.alt = "Mode Gelap";
        localStorage.setItem("darkMode", "enabled"); // Simpan preferensi
    } else {
        icon.src = rootPath + "sun.svg"; // Ganti ke ikon matahari
        icon.alt = "Mode Terang";
        localStorage.setItem("darkMode", "disabled"); // Simpan preferensi
    }
}

// Saat halaman dimuat, pastikan mode gelap langsung diterapkan
window.onload = function () {
    let rootPath = getRootPath(); // Tentukan path ikon berdasarkan lokasi halaman
    let icon = document.getElementById("mode-icon");

    // Jika mode gelap tersimpan di localStorage, langsung aktifkan sebelum render
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode"); // Tambahkan mode gelap
    }

    // Pastikan ikon memiliki src sejak awal
    icon.src = document.body.classList.contains("dark-mode") ? rootPath + "moon.svg" : rootPath + "sun.svg";
    icon.alt = document.body.classList.contains("dark-mode") ? "Mode Gelap" : "Mode Terang";
};




