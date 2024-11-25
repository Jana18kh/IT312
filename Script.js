
document.addEventListener('DOMContentLoaded', () => {
    // Delete offers form
    const deleteForm = document.getElementById('delete-offers-form');
    const addForm = document.getElementById('add-offer-form');
    const offersList = document.querySelector('.offer-list'); // Updated to match the correct class

    // Delete selected offers
    deleteForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload
        const selectedOffers = document.querySelectorAll('input[name="offer"]:checked');

        if (selectedOffers.length === 0) {
            alert('Please select at least one offer to delete.');
            return;
        }

        selectedOffers.forEach((offer) => {
            const parentDiv = offer.closest('.offer-item');
            if (parentDiv) {
                parentDiv.remove(); // Remove the offer item
            }
        });

        alert('Selected offers deleted successfully.');
    });

    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const offerImage = document.getElementById('offer-image');
        const offerName = document.getElementById('offer-name').value.trim();
        const offerDescription = document.getElementById('offer-description').value.trim();

        
        if (!offerImage.files.length || !offerName || !offerDescription) {
            alert('Please fill in all fields and upload an image.');
            return;
        }

        
        const newOffer = document.createElement('div');
        newOffer.classList.add('offer-item');

        
        const newOfferCheckbox = document.createElement('input');
        newOfferCheckbox.type = 'checkbox';
        newOfferCheckbox.name = 'offer';
        newOfferCheckbox.value = offerName; 

        
        const offerImg = document.createElement('img');
        offerImg.style.maxHeight = '100px';
        offerImg.style.marginRight = '10px';

        
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            offerImg.src = e.target.result;
        };
        fileReader.readAsDataURL(offerImage.files[0]);

        
        const offerDetails = document.createElement('div');
        offerDetails.classList.add('offer-details');

        
        const offerNameElement = document.createElement('h4');
        offerNameElement.textContent = offerName;

        const offerDescriptionElement = document.createElement('p');
        offerDescriptionElement.textContent = offerDescription;

        
        offerDetails.appendChild(offerNameElement);
        offerDetails.appendChild(offerDescriptionElement);

        
        newOffer.appendChild(newOfferCheckbox);
        newOffer.appendChild(offerImg);
        newOffer.appendChild(offerDetails);

        
        offersList.appendChild(newOffer);

        
        addForm.reset();
        alert('New offer added successfully.');
    });
})








