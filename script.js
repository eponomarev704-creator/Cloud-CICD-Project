document.getElementById('deployBtn').addEventListener('click', function() {
    const outputBox = document.getElementById('statusOutput');
    outputBox.textContent = "Статус: Подключение к облачному кластеру... [OK]";
    
    setTimeout(() => {
        outputBox.textContent = "Статус: Запуск пайплайна сборки и тестов... [УСПЕШНО]";
    }, 800);

    setTimeout(() => {
        outputBox.textContent = "Статус: Сайт успешно развернут через GitHub Actions! 🚀";
    }, 1600);
});