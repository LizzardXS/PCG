document.getElementById("choose-files").addEventListener("click", () => {
    document.getElementById("file-input").click();
});

document.getElementById("file-input").addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;
    const fileTableBody = document.querySelector("#file-table tbody");

    // Clear the table body before adding new rows
    fileTableBody.innerHTML = "";

    Array.from(files).forEach(file => {
        if (isImage(file)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    const row = fileTableBody.insertRow();
                    row.insertCell(0).textContent = file.name;
                    row.insertCell(1).textContent = `${img.width}x${img.height}`;
                    row.insertCell(2).textContent = getFileExtension(file);
                    row.insertCell(3).textContent = getColorDepth(img);
                    row.insertCell(4).textContent = "Not Applicable"; // Compression not supported in this context

                    // Optionally, update the file info display for the first image selected
                    if (fileTableBody.rows.length === 1) {
                        updateFileInfo(file, img);
                    }
                };
            };

            reader.readAsDataURL(file);
        }
    });
}

function isImage(file) {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.pcx'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return validExtensions.includes(fileExtension);
}

function getFileExtension(file) {
    return file.name.split('.').pop().toLowerCase();
}

function getColorDepth(img) {
    return img.colorDepth || 24; // Default to 24 bits for images
}

function updateFileInfo(file, img) {
    document.getElementById("file-name").textContent = file.name;
    document.getElementById("file-size").textContent = `${file.size / 1024} KB`;
    document.getElementById("file-resolution").textContent = `${img.width}x${img.height}`;
    document.getElementById("file-depth").textContent = getColorDepth(img);
    document.getElementById("file-compression").textContent = "Not Applicable"; // Compression info not available
}