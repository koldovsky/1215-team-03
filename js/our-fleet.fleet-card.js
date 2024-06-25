const cards = [
  {
    id: "1",
    title: "Elan 50",
    description:
      "This beautiful yacht produced by famous Slovenian manufacturer can accommodate up to 12 persons (including crew). It has a renovated deck salon, a spacious kitchen and even a fridge, not to mention furnished cabins and bathrooms. The skipper’s cabin is apart from the guests’ cabins to ensure your privacy.",
    mainImg: "img/ourfleet-card/elan50_sailing_boat.webp",
    mainImgDescription: "White Elan 50 yacht sailing on open sea",
    details1: "Elan 50",
    details2: "Capacity",
    details3: "12 pax",
    details4: "5+1",
    details5: "75 HP",
    details6: "2015",
    features1: "- Air conditioning and heating",
    features2: "- multimedia center",
    features3: "- microwave and oven",
    features4: "- 120l refrigerator",
    features5: "- 2 bathrooms",
    features6: "- Comfortable indoor salon",
    features7: "- spacious deck for sunbathing",
    additionalImg1: "img/ourfleet-card/elan50_deck_view.webp",
    addImgDescription1: "View of the deck of Elan 50 yacht",
    additionalImg2: "img/ourfleet-card/elan50_on_waves.webp",
    addImgDescription2: "Elan 50 yacht sailing on wavy sea",
    additionalImg3: "img/ourfleet-card/elan50_calm_sea.webp",
    addImgDescription3: "Elan 50 yacht sailing on calm sea",
  },
  {
    id: "2",
    title: "Lagoon 40",
    description:
      "All-new yacht for your luxury vacation. A comfortable cockpit looking out to sea: a starboard dining table, able to accommodate up to 12 guests. Large aft transoms with a spacious swim platform allow simple access to boarding.",
    mainImg: "img/ourfleet-card/laggon40_sailing_boat.webp",
    mainImgDescription: "Lagoon 40 yacht sailing near island",
    details1: "Lagoon 40",
    details2: "Capacity",
    details3: "12 pax",
    details4: "4+2",
    details5: "58 HP",
    details6: "2019",
    features1: "- GPS and WiFi on board",
    features2: "- multimedia center",
    features3: "- pleasant interior with many textile elements",
    features4: "- fridge and mini-bar",
    features5: "- fully-equipped kitchen",
    features6: "- spacious sunbathing area",
    features7: "- individual cabins for captain and skipperg",
    additionalImg1: "img/ourfleet-card/laggon40_port.webp",
    addImgDescription1: "Lagoon 40 yacht in the port",
    additionalImg2: "img/ourfleet-card/laggon40_dining_table.webp",
    addImgDescription2: "Lagoon 40 dining table on the deck of the yacht",
    additionalImg3: "img/ourfleet-card/laggon40_recreation_room.webp",
    addImgDescription3: "Lagoon 40 recreation room",
  },
  {
    id: "3",
    title: "Lagoon 520",
    description:
      "This spacious yacht has contemporary lines and an elegant interior, as well as snowy-white outdoor areas for sunbathing and relaxing. It accommodates up to 12 guests including the crew. This yacht is equipped with all modern amenities and snorkeling gear.",
    mainImg: "img/ourfleet-card/laggon520_sailing_boat.webp",
    mainImgDescription: "Lagoon 520 yacht sailing near a sandy shore",
    details1: "Lagoon 520",
    details2: "Capacity",
    details3: "12 pax",
    details4: "6",
    details5: "150 HP",
    details6: "2015",
    features1: "- Air conditioning in every room",
    features2: "- multimedia center",
    features3: "- onboard WiFi internet access",
    features4: "- snorkeling gear, fishing gear",
    features5: "- private bathroom in every cabin",
    features6: "- equipped kitchen",
    features7: "- 220V power sockets",
    additionalImg1: "img/ourfleet-card/laggon520_bow_yacht.webp",
    addImgDescription1: "Laggon 520 a girl on the bow of a yacht",
    additionalImg2: "img/ourfleet-card/laggon520_port.webp",
    addImgDescription2: "Laggon 520 yacht in the port",
    additionalImg3: "img/ourfleet-card/laggon520_bedroom.webp",
    addImgDescription3: "Laggon 520 yacht bedroom",
  },
];

function renderCards(cards) {
  let cardsHtml = " ";
  for (const card of cards) {
    cardsHtml += `
    <article class="fleet-cards">
        <div class="fleet-card container">
          <h2 class="fleet-card__title">${card.title}</h2>
          <p class="fleet-card__description">
           ${card.description}
          </p>
          <div class="fleet-card__fleet-container">
            <div class="fleet-card__fleet-container__img-wrapper">
              <img
                class="fleet-card__fleet-container-img"
                src="${card.mainImg}"
                alt="${card.mainImgDescription}"
              />
            </div>
            <div class="fleet-card__fleet-container-box">
              <div class="fleet-card__fleet-container-box__item">
                <p class="fleet-card__fleet-container-box__item-name">Name</p>
                <p class="fleet-card__fleet-container-box__item-value">
                  ${card.details1}
                </p>
              </div>
              <div class="fleet-card__fleet-container-box__item">
                <p class="fleet-card__fleet-container-box__item-name">
                   ${card.details2}
                </p>
                <p class="fleet-card__fleet-container-box__item-value">
                   ${card.details3}
                </p>
              </div>
              <div class="fleet-card__fleet-container-box__item">
                <p class="fleet-card__fleet-container-box__item-name">Cabins</p>
                <p class="fleet-card__fleet-container-box__item-value"> ${card.details4}</p>
              </div>
              <div class="fleet-card__fleet-container-box__item">
                <p class="fleet-card__fleet-container-box__item-name">Engine</p>
                <p class="fleet-card__fleet-container-box__item-value"> ${card.details5}</p>
              </div>
              <div class="fleet-card__fleet-container-box__item">
                <p class="fleet-card__fleet-container-box__item-name">Year</p>
                <p class="fleet-card__fleet-container-box__item-value"> ${card.details6}</p>
              </div>
              <div class="fleet-card__fleet-container-box__text-wrapper">
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features1}
                </p>
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features2}
                </p>
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features3}
                </p>
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features4}
                </p>
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features5}
                </p>
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features6}
                </p>
                <p class="fleet-card__fleet-container-box__text">
                  ${card.features7}
                </p>
              </div>
              <a
                class="fleet-card__fleet-container-link"
                href="destinations.html"
                >See Destinations</a
              >
            </div>
          </div>
          <div class="fleet-card__fleet-container-imgbox">
            <figure class="fleet-card__fleet-container-imgbox__wrapper">
              <img
                class="fleet-card__fleet-container-imgbox__item"
                src="${card.additionalImg1}"
                alt="${card.addImgDescription1}"
              />
            </figure>
            <figure class="fleet-card__fleet-container-imgbox__wrapper">
              <img
                class="fleet-card__fleet-container-imgbox__item"
                src="${card.additionalImg2}"
                alt="${card.addImgDescription2}"
              />
            </figure>
            <figure class="fleet-card__fleet-container-imgbox__wrapper">
              <img
                class="fleet-card__fleet-container-imgbox__item"
                src="${card.additionalImg3}"
                alt="${card.addImgDescription3}"
              />
            </figure>
          </div>
        </div>
      </article>
    `;
  }
  const cardContainer = document.querySelector(".fleet-cards__wrapper");
  cardContainer.innerHTML = cardsHtml;
}
renderCards(cards);
