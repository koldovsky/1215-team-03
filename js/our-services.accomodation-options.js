document.addEventListener('DOMContentLoaded', function() {
    function fetchAccommodations() {
        fetch('data/accommodations.json')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('optionsAccomodation');
                data.accommodations.forEach(accommodation => {
                    const accommodationDiv = document.createElement('div');
                    accommodationDiv.classList.add('option-accomodation');
                    
                    accommodationDiv.innerHTML = `
                        <img src="${accommodation.image}" alt="${accommodation.name}">
                        <h3>${accommodation.name}</h3>
                        <p>${accommodation.description}</p>
                        <ul>
                            ${accommodation.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    `;
                    
                    container.appendChild(accommodationDiv);
                });
            })
            .catch(error => console.error('Error fetching accommodations:', error));
    }
    
    fetchAccommodations();
});
