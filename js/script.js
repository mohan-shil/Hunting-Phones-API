const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones , isShowAll);
     
}

    const displayPhones = (phones , isShowAll) => {

    // step - 1: call the ID 
    const phoneContainer = document.getElementById('phone-container');
   
    // clear previous data before adding new       
    phoneContainer.textContent = '';

    // display show all btn if there are more than 12 phones

    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll ){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    console.log('is show all ', isShowAll)

    // display first 12 phones if not show all
    
    if(!isShowAll){
        phones = phones.slice(0 , 12);
    }

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

    // hide loading spinner 
        toggleLoadingSpinner(false);
}

    //handle search button 
    const handleSearch = (isShowAll) => {
        toggleLoadingSpinner(true);
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        // console.log(searchText);
        loadPhone(searchText, isShowAll);
    }

    const toggleLoadingSpinner = (isLoading) => { 
        const loadingSpinner = document.getElementById('loading-spinner');
        if(isLoading){
            loadingSpinner.classList.remove('hidden')
        }
        else{
            loadingSpinner.classList.add('hidden');
        }
    }

// handle show all 
    const handleShowAll = () => {
        handleSearch(true)
    }    
// loadPhone();