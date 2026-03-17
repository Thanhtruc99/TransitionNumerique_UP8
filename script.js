// Lấy các phần tử từ HTML
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

// Thêm sự kiện click vào nút menu
menuBtn.addEventListener('click', () => {
    // Thêm hoặc xóa class 'active' để hiện/ẩn menu trên mobile
    navbar.classList.toggle('active');
});