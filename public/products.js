import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyDGqcBjiizHgN1r9_LUbAQjLjQjsG4B-ok",
    authDomain: "geofarmaco-ad42c.firebaseapp.com",
    projectId: "geofarmaco-ad42c",
    storageBucket: "geofarmaco-ad42c.appspot.com",
    messagingSenderId: "505324931269",
    appId: "1:505324931269:web:1b3406b8ee292d8b6848ac",
    measurementId: "G-3Y9NW95930"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

document.addEventListener('DOMContentLoaded', async function () {
    const photoContainer = document.getElementById('photoContainer');
    const photoForm = document.getElementById('photoForm');
    let photoList = [];

    function renderPhoto(photo, id) {
        const photoCard = createPhotoCard(photo, id);
        photoContainer.appendChild(photoCard);
    }

    async function fetchPhotos() {
        const photoCollection = collection(db, 'photo');
        const photoQuery = query(photoCollection, orderBy('dateAdded', 'desc'));
        const photoSnapshot = await getDocs(photoQuery);
        photoList = photoSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const title = document.getElementById('title').value.trim();
        const text = document.getElementById('text').value.trim();
        const imageFile = document.getElementById('photo').files[0];

        if (!title || !text || !imageFile) {
            displayPopup('Please fill in all fields and select an image.', false);
            return;
        }

        try {
            const imageRef = ref(storage, `images/${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            const imageUrl = await getDownloadURL(imageRef);

            await addDoc(collection(db, 'photo'), {
                title: title,
                text: text,
                imageUrl: imageUrl,
                dateAdded: new Date()
            });

            photoForm.reset();
            displayPopup('Photo added successfully!', true);

            // Fetch and render photos again after adding a new one
            photoContainer.innerHTML = ''; // Clear existing photos
            await fetchPhotos();
            photoList.forEach(photo => renderPhoto(photo, photo.id));

        } catch (error) {
            console.error("Error adding photo:", error);
            displayPopup('Error adding photo. Please try again later.', false);
        }
    }

    photoForm.addEventListener('submit', handleSubmit);

    await fetchPhotos();
    photoList.forEach(photo => renderPhoto(photo, photo.id));

    function createPhotoCard(photo, id) {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        const editButton = `<div class="edit-btn" data-id="${id}"><img width="50px" src="./src/img/edit-button.png" alt="Edit"></div>`;

        photoCard.innerHTML = `
            <div class="mt-3 borderColor">
                <img width="264px" height="264px" src="${photo.imageUrl}" alt="${photo.title}">
                <h4 class="p-1">${photo.title}</h4>
                <hr class="line-yellow">
                <p class="fw-bold p-1">${photo.text}</p>
                ${editButton}
            </div>
        `;

        return photoCard;
    }

    function displayPopup(message, isSuccess) {
        const popup = document.createElement('div');
        popup.classList.add('popup', isSuccess ? 'success' : 'error');
        popup.textContent = message;

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000); // Show popup for longer duration
    }
});
