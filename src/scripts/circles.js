function generateRandomCircles(count) {
    const body = document.body;
    const width = body.offsetWidth;
    const height = body.offsetHeight;

    for (let i = 0; i < count; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 200 + 50; // Размер от 50px до 150px
        const top = Math.random() * height; // Начальная позиция сверху
        const left = Math.random() * width; // Начальная позиция слева
        const blur = Math.random() * 100 + 20; // Размытие от 20px до 70px
        const duration = Math.random() * 10 + 5; // Длительность анимации от 5 до 15 секунд

        circle.classList.add('circle');
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${top}px`;
        circle.style.left = `${left}px`;
        circle.style.filter = `blur(${blur}px)`;
        circle.style.animation = `move ${duration}s linear infinite`;

        body.appendChild(circle);
    }
}

// Убедитесь, что функция вызывается
generateRandomCircles(20);
