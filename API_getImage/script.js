let currentImage;

const UI = {
    newImageButton: document.querySelector(".newImageButton"),
    image: document.querySelector(".image"),
};

UI.newImageButton.addEventListener("click", () => {
    fetchImage();
});

function fetchImage() {
    fetch("https://picsum.photos/200/300").then((response) => {
        console.log("Atsakymas iš serverio gautas!");

        response.blob().then((images) => {
            currentImage = images;
            console.log(currentImage);
            // UI.image.style.display = "block";
            renderImage();
            // styleImage();
        });
    })
}
// function styleImage(){
// UI.image.style.display = "block";
// }

function renderImage() {
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(currentImage);
    UI.image.src = imageUrl;
    UI.image.style.display = "block";
}
