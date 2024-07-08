document.addEventListener('DOMContentLoaded', function() {
    function fetchAccommodations() {
        console.log("Fetching accommodations data...");
        fetch('data/accommodations.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data fetched successfully:", data);
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