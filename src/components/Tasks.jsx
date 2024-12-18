import React from 'react';

const Tasks = () => {
    return (
        <div className="tasks">
            <h1>Задача</h1>
            <hr/>
           <p><span>Задача: Вывод "Hello, World!" в выбранном языке программирования</span></p>
           <ul>
<li><span>Описание:</span> Вам необходимо создать простую программу, 
которая выводит строку "Hello, World!" на экран. Выберите один из следующих языков программирования: JavaScript (JS) или Python.</li>

<li><span>Требования:</span></li>

Если выбран язык JavaScript:

Используйте console.log() для вывода строки.
Если выбран язык Python:

Используйте print() для вывода строки.
<li><span>Дополнительные указания:</span></li>
<ul>
<li>Убедитесь, что программа компилируется и выполняется без ошибок.</li>
<li>Протестируйте программу, чтобы убедиться, что она выводит ожидаемый результат.</li>
<li>Используйте двойные кавычки!</li>
</ul>

</ul>

        </div>
    );
};

export default Tasks;