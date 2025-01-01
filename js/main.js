document.addEventListener('DOMContentLoaded', () => {
    // 移动端导航菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 滚动时导航栏效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(45, 45, 45, 0.98)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
}); 