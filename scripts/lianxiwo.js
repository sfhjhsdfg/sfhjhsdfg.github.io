const container = document.querySelector('.image-container');
        const image = document.getElementById('image');

        // 设置图片URL（请替换为您想要使用的图片URL）
        image.style.backgroundImage = "url('images/0.jig.jpg')";

        container.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            const moveX = x * 20; // 水平移动范围
            const moveY = y * 20; // 垂直移动范围

            image.style.transform = `translateX(${moveX}px) translateY(${moveY}px) scale(1.1)`;
        });

        container.addEventListener('mouseleave', () => {
            image.style.transform = 'translateX(0) translateY(0) scale(1)';
        });