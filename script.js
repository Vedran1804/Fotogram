/* GLOBAL VARIABLES */

const GALLERY_CONTAINER = document.getElementById("gallery");
const DIALOG_REF = document.getElementById("dialog");
const DIALOG_IMG_REF = document.getElementById("dialog-img");
const DIALOG_TITLE_REF = document.getElementById("dialogTitle");
const DIALOG_COUNTER_REF = document.getElementById("image-counter");
const BTN_PREV = document.getElementById("btnPrev");
const BTN_NEXT = document.getElementById("btnNext");

/* Array mit den Pfaden zu allen Bildern der Galerie. */

let images = [
  "./img/image1.jpg", 
  "./img/image2.jpg",
  "./img/image3.jpg",
  "./img/image4.jpg", 
  "./img/image5.jpg", 
  "./img/image6.jpg",
  "./img/image7.jpg", 
  "./img/image8.jpg", 
  "./img/image9.jpg",
  "./img/image10.jpg", 
  "./img/image11.jpg", 
  "./img/image12.jpg"
];

let actualImgIndex = 0;

/* Funktion rendert alle Bilder aus dem Array Galerie. */

function renderImages() {
    GALLERY_CONTAINER.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
        GALLERY_CONTAINER.innerHTML += templateRenderImage(i);
    }
}

function templateRenderImage(i) {
    return `<img src="${images[i]}" alt="Bild ${i + 1}" onclick="openDialog(${i})">`
}

/* Öffnet das Dialogfenster. */

function openDialog(index) {
    actualImgIndex = index;
    updateDialogContent();
    DIALOG_REF.showModal();

}  
    
/* Funktion schließt das Dialogfenster. */
function closeDialog() {
    DIALOG_REF.close();
}

// Aktualisiert den Inhalt des Dialogfensters.

function updateDialogContent() {
    
    DIALOG_IMG_REF.innerHTML = `<div class="container-img"><img class="img-styling" src="${images[actualImgIndex]}"></div>`;
    DIALOG_TITLE_REF.innerHTML = `<p>Bild ${actualImgIndex + 1}</p>`;
    DIALOG_COUNTER_REF.innerHTML = `<p aria-live="polite">${actualImgIndex + 1} / ${images.length}</p>`;
}

// Fumktion navigiert zum vorherigen Bild.Funktion bewegt sich onclick rückwerts durch das Array GALLERY.

function prevPic() {
    if (actualImgIndex - 1 < 0) {
        actualImgIndex = images.length - 1;
    } else {
        actualImgIndex--;
    }
    updateDialogContent();
}

/* Funktion navigiert zum nächsten Bild.Funktion bewegt sich onclick vorwärts durch das Array GALLERY.*/

function nextPic() {
    if (actualImgIndex + 1 > images.length - 1) {
        actualImgIndex = 0;
    } else {
        actualImgIndex++;
    }
    updateDialogContent();
}