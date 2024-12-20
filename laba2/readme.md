# Лабораторная работа: Работа с изображениями

## Описание

Данное веб-приложение позволяет загружать изображения с локального устройства, отображать их на странице и извлекать метаданные изображений (например, разрешение, глубина цвета, формат сжатия и даты создания/модификации).

### Цель работы:
Ознакомление с методами работы с файловыми системами, обработкой изображений в браузере с помощью JavaScript, а также созданием интерфейса для отображения информации о файлах и изображениях.

## Как работает приложение?

1. **Выбор файлов**:
   Пользователь может выбрать изображения с помощью кнопки "Choose Files or Folder", которая позволяет выбрать один или несколько файлов или целую папку с изображениями.

2. **Обработка файлов**:
   После выбора файлов приложение использует объект `FileReader` для чтения содержимого изображений. Вся информация о файле (размер, тип, формат, дата создания и последней модификации) и метаданные изображений (разрешение, глубина цвета) извлекаются и отображаются на странице.

3. **Отображение изображений**:
   Все изображения отображаются как миниатюры, а под ними показываются метаданные: разрешение, глубина цвета, сжатие и даты создания/модификации.

## Принцип работы

1. **Обработка выбора файлов**:
   Веб-страница предоставляет элемент `<input type="file">`, который позволяет выбрать файлы (с поддержкой папок, если используется атрибут `webkitdirectory`).

2. **Чтение файлов**:
   Для каждого выбранного изображения используется объект `FileReader`, который считывает содержимое изображения в формате DataURL. Это позволяет работать с изображениями прямо в браузере.

3. **Извлечение метаданных изображения**:
   - **Разрешение** — Извлекается через свойства `width` и `height` объекта `Image`.
   - **Глубина цвета** — Для определения глубины цвета используется `<canvas>`, где пиксели изображения рисуются и анализируются на наличие уникальных цветов.
   - **Сжатие** — Тип сжатия изображения определяется по расширению файла (например, `.jpg`, `.png`).
   - **Дата создания и последней модификации** — Эти данные извлекаются из свойств `lastModified` и `lastModifiedDate` объекта `File`.

4. **Отображение изображений**:
   После загрузки изображения отображаются как миниатюры в сетке. Каждое изображение сопровождается метаданных, таких как разрешение, глубина цвета и другие характеристики.

## Технологии

- **HTML**: Для создания структуры страницы, включая кнопку для выбора файлов и контейнер для отображения изображений.
- **CSS**: Для стилизации элементов на странице (изображений, контейнеров и метаданных).
- **JavaScript**:
  - Использование объекта `File` для доступа к выбранным файлам.
  - Использование `FileReader` для чтения файлов и отображения изображений.
  - Работа с объектом `Image` для извлечения метаданных изображений.
  - Использование элемента `<canvas>` для анализа цвета изображения.

## Пример использования

1. Откройте проект в браузере.
2. Нажмите кнопку **"Choose Files or Folder"**, чтобы выбрать изображения с локального устройства.
3. После выбора файлов, изображения отобразятся на странице с миниатюрами и метаданными (разрешение, цветовая глубина, сжатие и даты создания/модификации).

## Ограничения и улучшения

- Текущая версия использует базовый метод извлечения метаданных и глубины цвета. В реальных приложениях можно использовать дополнительные библиотеки, такие как **Exif.js**, для извлечения данных EXIF из изображений.
- Сжатие изображений пока не анализируется на уровне содержимого, а только на основе расширения файла. Возможность анализа сжатия может быть добавлена в будущем.
- В данный момент приложение не поддерживает работу с форматом WebP. Добавление поддержки других форматов изображений (например, WebP) является возможным улучшением.

## Заключение

В рамках этой лабораторной работы был создан инструмент для загрузки изображений, извлечения метаданных (разрешение, цветовая глубина, сжатие) и отображения этих данных. Работа с изображениями в браузере с использованием JavaScript позволяет быстро и эффективно извлекать важные данные без необходимости отправки файлов на сервер.
