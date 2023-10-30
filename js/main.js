// Xử lý khi người dùng bấm ra ngoài header menu
document.addEventListener('click', function(e) {
    let headerMenu = document.querySelector('.header__menu')
    if (!headerMenu.contains(e.target)) {
        // Xử lý ẩn mobile menu khi người dùng bấm ra ngoài
        document.querySelector('.header__menu-list').classList.remove('mobile__menu'); 
        
        // Xử lý ẩn sub-menu khi người dùng bấm ra ngoài
        document.querySelectorAll('.header__drop-down').forEach((headerDropDown) => {
            headerDropDown.querySelector('.drop-down__list').classList.remove('active');
        })
    }
});

// Xử lý khi người dùng bấm vào mobile-menu-button
document.querySelector('.header__menu-btn').addEventListener('click', function() {
    // Ẩn sub-menu
    document.querySelectorAll('.header__drop-down').forEach((headerDropDown) => {
        let dropdownList = headerDropDown.querySelector('.drop-down__list');
        if (dropdownList.classList.contains('active')) {
            dropdownList.classList.remove('active');
        }
    });
    // Ẩn/hiện mobile menu
    let dropdown = document.querySelector('.header__menu-list');
    if (dropdown.classList.contains('mobile__menu')) {
        dropdown.classList.remove('mobile__menu');
    } else {
        dropdown.classList.add('mobile__menu');
    }
});

// Xử lý ẩn/hiện sub-menu
document.querySelectorAll('.header__drop-down').forEach((headerDropDown) => {
    headerDropDown.addEventListener('click', function() {
        // Lấy phần tử .drop-down__list trong phạm vi của phần tử headerDropDown được bấm
        let dropdownList = headerDropDown.querySelector('.drop-down__list');
        // Kiểm tra xem phần tử .drop-down__list này đã có class "active" hay chưa
        if (dropdownList.classList.contains('active')) {
            dropdownList.classList.remove('active');
        } else {
            dropdownList.classList.add('active');
        }
    });
});

