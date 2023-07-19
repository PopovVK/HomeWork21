 // Зберігаємо стан натисненості для парних і непарних кнопок
        const clickedButtons = { непарні: 0, парні: 0 };
        const totalButtons = 4;

        function toggleShadow(button, type) {
            button.classList.toggle("clicked");
            
            // Оновлюємо лічильник для натиснених кнопок залежно від їх типу (непарні або парні)
            clickedButtons[type] = button.classList.contains("clicked") ? clickedButtons[type] + 1 : clickedButtons[type] - 1;

            // Виводимо відповідне повідомлення
            if (clickedButtons[type] === totalButtons / 2) {
                alert(`Всі ${type} кнопки натиснуті!`);
            }
            
            // Перевіряємо, чи всі кнопки взагалі натиснуті
            if (clickedButtons.непарні + clickedButtons.парні === totalButtons) {
                alert("Всі кнопки натиснуті!");
            }
        }