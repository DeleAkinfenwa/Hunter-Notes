const nameInput = document.querySelector('#name-selector');
const searchBtn = document.querySelector('#search')



async function getMonster() {
  try {
    // get the API results of monster data
    const searchResults = await axios.get('https://mhw-db.com/monsters');

    let monsterData = searchResults.data
    // console.log(monsterData)
    setNameList(monsterData)
  } catch (error) {
    console.log(error)
  }
}
getMonster()


// populate dropdown
function setNameList(monsterData) {
  //for each name in the the searach results, add them to the dropdown
  for (i = 0; i < monsterData.length; i++) {

    let options = monsterData[i].name

    let dropdown = document.createElement('option')

    dropdown.value = monsterData[i].id
    dropdown.textContent = options

    // nameInput.addEventListener('change', function () {
    //   getOneMon(dropdown.value)
    // })


    nameInput.appendChild(dropdown)
  };


};

nameInput.addEventListener('change', function (e) {
  console.log(e.target.value)
  getOneMon(e.target.value)
})


let descripContainer = document.querySelector('#description')
let locationContainer = document.querySelector('#location')
let weaknessContainer = document.querySelector('#weakness')
let resistanceContainer = document.querySelector('#resistance')
let elementContainer = document.querySelector('#elements')
let ailmentContainer = document.querySelector('#ailments')

async function getOneMon(monsterId) {
  // removePrevious()
  try {

    let monId = await axios.get(`https://mhw-db.com/monsters/${monsterId}`)
    console.log(monId.data)

    let monType = monId.data.type
    let type = document.createElement('p')
    type.innerText = monType
    type.style = "text-transform: capitalize;"
    descripContainer.appendChild(type)

    let monSpecies = monId.data.species
    let species = document.createElement('p')
    species.innerText = monSpecies
    species.style = "text-transform: capitalize;"
    descripContainer.appendChild(species)

    let monDescription = monId.data.description
    let description = document.createElement('p')
    description.innerText = monDescription
    descripContainer.appendChild(description)

    let monLocations = monId.data.locations
    monLocations.forEach(location => {
      let locationDiv = document.createElement('p')
      locationDiv.innerText = `${location.name}: zone ${location.zoneCount}`
      locationContainer.appendChild(locationDiv)
    });


    let monWeakness = monId.data.weaknesses
    monWeakness.forEach(weakness => {
      let weaknessDiv = document.createElement('p')
      weaknessDiv.innerText = `${weakness.element}: ${weakness.stars} stars`
      weaknessContainer.appendChild(weaknessDiv)
    });

    let monElement = monId.data.elements

    monElement.forEach(element => {
      let elementDiv = document.createElement('p')
      elementDiv.innerText = `${element}`
      elementContainer.appendChild(elementDiv)
    });

    let monAilments = monId.data.ailments

    monAilments.forEach(ailments => {
      let ailmentsDiv = document.createElement('p')
      ailmentsDiv.innerText = `${ailments.name}: ${ailments.description}`
      ailmentContainer.appendChild(ailmentsDiv)
    });

    let monResistance = monId.data.resistances
    monResistance.forEach(resistance => {
      let resistanceDiv = document.createElement('p')
      resistanceDiv.innerText = `${resistance.element}`
      resistanceContainer.appendChild(resistanceDiv)
    });

  } catch (err) {
    console.log(err)
  }

  function removePrevious() {
    descripContainer.data.innerHTML = '';
    // locationContainer.innerHTML = "";
    // weakResistContainer.innerHTML = "";
    // eleAilContainer.innerHTML = yea"";
    // rewardLowContainer.innerHTML = "";
    // rewardHighContainer.innerHTML = "";
  }
}




// async function fillMonsterData() {
//   try {
//     searchResults = await axios.get(`https://mhw-db.com/monsters`);
//     let monsterData = searchResults.data
//     let descripContainer = document.querySelector('#description')


//     for (let i = 0; i < monsterData.length; i++) {
//       let monDescription = monsterData[i].description
//       console.log(monDescription)
//       let description = document.createElement('p')
//       description.innerText = monDescription
//       descripContainer.appendChild(description)

//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
