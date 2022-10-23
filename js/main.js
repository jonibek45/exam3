const elCard = document.querySelector("#card");
const elForm = document.querySelector("#form");
const elInput = document.querySelector("#search");


const pokemon = (array, parent = elCard) => {
  parent.textContent = " ";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const card = document.createElement("div");
    card.className = "card border-secondary rounded-4";
    card.style.width = "15rem";

    card.innerHTML = `
        
                <img src="${element.img}" class="border-bottom border-dark card-img-top p-5" alt="${element.name}" />
                <div class="card-body d-flex justify-content-between">
                    <div>
                        <h4 class="card-title mr-5">${element.name}</h4>
                        <p class="card-text ">
                           ${element.weaknesses}
                        </p>
                    </div>
                    <svg  id="heart" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.02463 2.5C5.94463 2.5 4.93213 2.9175 4.17463 3.67625C2.60213 5.25125 2.60213 7.815 4.17588 9.3925L12.9996 18.2313L21.8246 9.3925C23.3984 7.815 23.3984 5.25125 21.8246 3.67625C20.3096 2.1575 17.6396 2.16 16.1246 3.67625L13.8846 5.92C13.4146 6.39125 12.5846 6.39125 12.1146 5.92L9.87463 3.675C9.11713 2.9175 8.10588 2.5 7.02463 2.5ZM12.9996 21.25C12.6684 21.25 12.3496 21.1187 12.1159 20.8825L2.40588 11.1575C-0.139119 8.6075 -0.139119 4.45875 2.40588 1.90875C3.63588 0.67875 5.27588 0 7.02463 0C8.77338 0 10.4146 0.67875 11.6434 1.90875L12.9996 3.2675L14.3559 1.91C15.5859 0.67875 17.2259 0 18.9759 0C20.7234 0 22.3646 0.67875 23.5934 1.90875C26.1396 4.45875 26.1396 8.6075 23.5946 11.1575L13.8846 20.8838C13.6496 21.1188 13.3321 21.25 12.9996 21.25Z"
                            fill="#231F20" />
                    </svg>
                </div>
                <div class="card-body d-flex gap-4 pb-4 ">
                    <h5 class="card__title ">${element.weight}  </h5>
                    <h5 class="card__title ">${element.height} </h5>
                </div>
          
       
        `;

    parent.appendChild(card);
  }
};
pokemon(pokemons);

elForm.addEventListener("input", (event) => {
  event.preventDefault();

  const searchContent = elInput.value.toLowerCase();
  const searchResult = [];

  pokemons.forEach((cartoon) => {
    if (cartoon.name.toLowerCase().trim().includes(searchContent)) {
      searchResult.push(cartoon);
    }
  });

  pokemon(searchResult);
});
