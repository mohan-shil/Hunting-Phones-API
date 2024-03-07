const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
     
}

    const displayPhones = phones => {

    // step - 1: call the ID 
    const phoneContainer = document.getElementById('phone-container');
   
    // clear previous data before adding new       
    phoneContainer.textContent = '';

    phones = phone.slice(0 , 10);

    phones.forEach(phone => {
        // console.log(phone);

    // step - 2: create div
        
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        
    // step - 3 : set innerHTML

        phoneCard.innerHTML =  `
        <figure><img src=" ${phone.image}" /></figure>
        <div class="card-body">
            <h2 class="card-title"> ${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;

        
    // step - 4: append child
         phoneContainer.appendChild(phoneCard);

        
    });
}

    //handle search button 
    const handleSearch = () => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        console.log(searchText);
        loadPhone(searchText);
    }


// loadPhone();