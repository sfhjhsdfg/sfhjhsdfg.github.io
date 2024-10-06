const navItems = document.querySelectorAll('.nav-item');//导航栏跳跃效果

        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.animation = 'bounce 0.5s ease';
            });

            item.addEventListener('animationend', () => {
                item.style.animation = '';
            });
        });
