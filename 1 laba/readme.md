# Цветовой Конвертер: CMYK – RGB – HSV

## Описание

Этот проект представляет собой веб-приложение для конвертации цветов между различными цветовыми моделями: **RGB**, **CMYK** и **HSV**. Пользователи могут выбирать цвет через цветовой выборник, а также вручную изменять значения для каждой из моделей, чтобы увидеть изменения в реальном времени.

Целью этого проекта является демонстрация того, как можно конвертировать цветовые данные между различными системами, а также использование HTML, CSS и JavaScript для создания динамического интерфейса.

## Используемые технологии

- **HTML**: Структурирование документа.
- **CSS**: Оформление внешнего вида приложения.
- **JavaScript**: Логика конвертации цветов между моделями и управление взаимодействием с пользователем.

## Основные компоненты приложения

### Цветовые модели

- **RGB** (Red, Green, Blue) — модель, основанная на смешении трех основных цветов: красного (Red), зеленого (Green) и синего (Blue). Эти значения могут варьироваться от 0 до 255 для каждого из каналов.
  
- **CMYK** (Cyan, Magenta, Yellow, Black) — модель, использующая четыре канала для представления цветов. Часто используется в печатной промышленности.
  
- **HSV** (Hue, Saturation, Value) — модель, основанная на трех компонентах: оттенке (Hue), насыщенности (Saturation) и яркости (Value). Она предоставляет более естественные способы работы с цветами в визуальных приложениях.

### Интерфейс

1. **Цветовой выборник** — позволяет выбрать цвет и увидеть его представление в различных цветовых моделях.
2. **Слайдеры и поля ввода** — для каждой модели предоставлены слайдеры и числовые поля для ручного ввода значений компонентов (R, G, B, C, M, Y, K, H, S, V).
3. **Цветовые блоки** — отображают выбранный цвет в соответствующих моделях RGB, CMYK и HSV.

### Логика приложения

Приложение позволяет конвертировать цвета между моделями RGB, CMYK и HSV с помощью следующих функций:

- **rgbToCmyk**: Преобразует значения RGB в CMYK.
- **cmykToRgb**: Преобразует значения CMYK в RGB.
- **rgbToHex**: Преобразует значения RGB в шестнадцатеричный формат (Hex).
- **rgbToHsv**: Преобразует значения RGB в HSV.
- **hsvToRgb**: Преобразует значения HSV в RGB.

### Алгоритм работы

1. Пользователь выбирает цвет с помощью цветового выборника.
2. Приложение автоматически конвертирует выбранный цвет в другие модели и обновляет соответствующие поля ввода.
3. При изменении значений в одном из полей (например, R, G, B или C, M, Y, K, H, S, V) автоматически обновляются другие модели и блоки, отображающие цвета.

## Установка

Для использования этого приложения, просто откройте файл `index.html` в вашем браузере. Для локальной разработки и тестирования:

1. Скачайте проект на ваш компьютер.
2. Откройте `index.html` в браузере.

## Примечания

- Этот проект представляет собой простое приложение для конвертации цветов и может быть расширен добавлением дополнительных функций, таких как сохранение истории цветов или поддержка других цветовых моделей.
- Приложение полностью работает в современных браузерах, поддерживающих HTML5 и JavaScript.

## Лицензия

Этот проект лицензирован под MIT License.
