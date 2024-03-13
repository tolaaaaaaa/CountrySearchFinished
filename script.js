const countries = [
    { id: 1, name: 'Israel', officialName: 'State of Israel', imageUrl: 'https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png' },
    { id: 2, name: 'France', officialName: 'French Republic', imageUrl: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png' },
    { id: 3, name: 'Germany', officialName: 'Federal Republic of Germany', imageUrl: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png' },
    { id: 4, name: 'Japan', officialName: 'Japan', imageUrl: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png' },
    { id: 5, name: 'Canada', officialName: 'Canada', imageUrl: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png' },
    { id: 6, name: 'Australia', officialName: 'Commonwealth of Australia', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg' },
    { id: 7, name: 'Brazil', officialName: 'Federative Republic of Brazil', imageUrl: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png' },
    { id: 8, name: 'India', officialName: 'Republic of India', imageUrl: 'https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png' },
    { id: 9, name: 'China', officialName: "People's Republic of China", imageUrl: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png' },
    { id: 10, name: 'South Africa', officialName: 'Republic of South Africa', imageUrl: 'https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large.png' },
    { id: 11, name: 'Azerbaijan', officialName: 'Republic of Azerbaijan', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-11-2048x1024.jpg' },
    { id: 12, name: 'Bahamas', officialName: 'Commonwealth of The Bahamas', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-12-2048x1024.jpg' },
    { id: 13, name: 'Bahrain', officialName: 'Kingdom of Bahrain', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-13-2048x1229.jpg' },
    { id: 14, name: 'Bangladesh', officialName: "People's Republic of Bangladesh", imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-14-2048x1229.jpg' },
    { id: 15, name: 'Barbados', officialName: 'Barbados', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-15-2048x1365.jpg' },
    { id: 16, name: 'Belarus', officialName: 'Republic of Belarus', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-16-2048x1024.jpg' },
    { id: 17, name: 'Belgium', officialName: 'Kingdom of Belgium', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-18-2048x1775.jpg' },
    { id: 18, name: 'Belize', officialName: 'Belize', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-19-2048x1365.jpg' },
    { id: 19, name: 'Benin', officialName: 'Republic of Benin', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-20-2048x1365.jpg' },
    { id: 20, name: 'Bhutan', officialName: 'Kingdom of Bhutan', imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-21-2048x1365.jpg' },
];

const countriesContainer = document.getElementById('countriesContainer');

countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    countryDiv.innerHTML = `
        <img src="${country.imageUrl}" alt="${country.officialName}">
        <h1 class="name">${country.name}</h1>
        <div class="id officialName">${country.id} ${country.officialName}</div>
    `;
    countriesContainer.appendChild(countryDiv);
});

document.getElementById('searchInput').addEventListener('input', function() {
    let searchValue = this.value.toUpperCase();
    let countryDivs = document.getElementsByClassName('country');
    
    for (let i = 0; i < countryDivs.length; i++) {
      let name = countryDivs[i].getElementsByClassName('name')[0].innerText.toUpperCase();
      
      if (name.includes(searchValue)) {
        countryDivs[i].style.display = ""; // Shows the country div if it matches
      } else {
        countryDivs[i].style.display = "none"; // Hides the country div if it doesn't match
      }
    }
  });

//   THIS IS A BUTTON SEARCH
// document.getElementById('searchBtn').addEventListener('click', function() {
//     let inValue = document.getElementById('searchInput').value.toUpperCase();
//     let countryDivs = document.getElementsByClassName('country');
    
//     console.log('Search Value:', inValue); // to check what you are searching for
//     for (let i = 0; i < countryDivs.length; i++) {
//       let name = countryDivs[i].getElementsByClassName('name')[0].innerText.toUpperCase();
      
//       console.log('Country Name:', name); // to check the name of the current country in the loop
        
//       if (name.includes(inValue)) {
//         countryDivs[i].style.display = ""; // Shows the country div if it matches
//       } else {
//         countryDivs[i].style.display = "none"; // Hides the country div if it doesn't match
//       }
//     }
//   });
  
  