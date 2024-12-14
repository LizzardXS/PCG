let imgElement = null;
let processedImage = null;
let originalImage = null;  // Переменная для хранения исходного изображения
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function onOpenCvReady() {
    console.log("OpenCV.js is ready.");
}

function applyMorphologicalOperation() {
    if (!processedImage) {
        alert("Сначала загрузите изображение.");
        return;
    }

    // Получаем выбранный структурирующий элемент
    const shapeSelect = document.getElementById("morphShape").value;
    const size = parseInt(document.getElementById("morphSize").value);

    let kernel;
    if (shapeSelect === "rectangle") {
        kernel = cv.Mat.ones(size, size, cv.CV_8U);
    } else if (shapeSelect === "ellipse") {
        kernel = cv.getStructuringElement(cv.MORPH_ELLIPSE, new cv.Size(size, size));
    } else {
        kernel = cv.getStructuringElement(cv.MORPH_CROSS, new cv.Size(size, size));
    }

    // Выбираем операцию
    const operation = document.getElementById("morphOperation").value;
    let result = new cv.Mat();

    if (operation === "erosion") {
        cv.erode(processedImage, result, kernel);
    } else if (operation === "dilation") {
        cv.dilate(processedImage, result, kernel);
    } else if (operation === "opening") {
        cv.morphologyEx(processedImage, result, cv.MORPH_OPEN, kernel);
    } else if (operation === "closing") {
        cv.morphologyEx(processedImage, result, cv.MORPH_CLOSE, kernel);
    }

    processedImage = result;
    displayImage(processedImage);
}

function applyMedianFilter() {
    if (!processedImage) {
        alert("Сначала загрузите изображение.");
        return;
    }

    const size = parseInt(document.getElementById("medianFilterSize").value);
    let result = new cv.Mat();
    cv.medianBlur(processedImage, result, size); // Применяем медианный фильтр
    processedImage = result;
    displayImage(processedImage);
}

function displayImage(img) {
    // Отображаем изображение в интерфейсе
    if (!img.empty()) {
        cv.imshow(canvas, img); // OpenCV.js функция для отображения на канвасе
    }
}

function loadImageToCanvas(imgElement) {
    // Загружаем изображение в OpenCV
    const mat = cv.imread(imgElement);
    processedImage = mat;
    originalImage = mat.clone();  // Сохраняем исходное изображение для сброса
    displayImage(processedImage);
}

function resetImage() {
    if (!originalImage) {
        alert("Сначала загрузите изображение.");
        return;
    }

    // Сбрасываем все изменения и отображаем исходное изображение
    processedImage = originalImage.clone();
    displayImage(processedImage);
}

document.getElementById("imageUpload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        imgElement = new Image();
        imgElement.src = event.target.result;

        imgElement.onload = function() {
            loadImageToCanvas(imgElement);
        }
    };

    reader.readAsDataURL(file);
});

// Инициализация OpenCV.js
if (cv.getBuildInformation) {
    cv.onRuntimeInitialized = onOpenCvReady;
}