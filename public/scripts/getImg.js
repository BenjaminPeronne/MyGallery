const numberOfImages = 100; // number of images to display

const createColumn = () => { // create a column and append it to the gallery
    let row = document.querySelector(".row");
    let column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
    return column;
}

const createImage = (src, alt) => { // create an image element
    let image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.style.width = "100%";
    return image;
}

const createColumns = (images) => { // create columns and append images to them
    let column = createColumn();
    let count = 0;
    images.forEach(image => {
        if (count === 7) {
            column = createColumn();
            count = 0;
        }
        column.appendChild(image);
        count++;
    })
}

const createImageElements = (images) => { // create image elements from the images array
    let imageElements = [];
    images.forEach(image => {
        imageElements.push(createImage(image.src, image.alt));
    })
    return imageElements;
}

const getImages = () => { // get images from the server 
    let images = [];
    for (let i = 0; i < numberOfImages; i++) {
        images.push({
            src: "https://benjaminperonne.fr/images/photos/" + `${i + 1}` + ".jpg",
            alt: "image" + `${i + 1}`
        })
    }
    return images;
}

const images = getImages();
const imageElements = createImageElements(images);
createColumns(imageElements);