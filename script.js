const nameInput = document.querySelector('#name-selector');
const searchBtn = document.querySelector('#search')



async function getMonster() {
  try {
    // get the API results of monster data
    const searchResults = await axios.get('https://mhw-db.com/monsters');

    let monsterData = searchResults.data
    console.log(monsterData)
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


async function getOneMon(monsterId) {


  try {
    let monId = await axios.get(`https://mhw-db.com/monsters/${monsterId}`)
    console.log(monId.data)

    let descripContainer = document.querySelector('#description')
    let locationContainer = document.querySelector('#location')
    // let weakResistContainer = document.querySelector('#weakResist')
    // let eleAilContainer = document.querySelector('#eleAil')
    // let rewardLowContainer = document.querySelector('#rewardLow')
    // let rewardHighContainer = document.querySelector('#rewardHigh')


    let monType = monId.data.type
    let type = document.createElement('p')
    type.innerText = monType
    descripContainer.appendChild(type)

    let monSpecies = monId.data.species
    let species = document.createElement('p')
    species.innerText = monSpecies
    descripContainer.appendChild(species)

    let monDescription = monId.data.description
    let description = document.createElement('p')
    description.innerText = monDescription
    descripContainer.appendChild(description)

    let monLocation = monId.data.location
    console.log(monLocation)
    let location = document.createElement('p')
    location.innerText = monLocation
    locationContainer.appendChild(location)

    function getLocation(monLocation) {
      //   for (let i = 0; i < monLocation.length; i++) {
      //     let info = monLocation[i];
      //     console.log(info)
      //   }

      return monLocation === 'name'
    }
    console.log(monLocation.find(getLocation))
    // let monElement = monId.data
    // console.log(monElement)


    // let monElement = monId.data.elements




  } catch (err) {
    console.log(err)
  }
}

function removePrevious() {
  descripContainer.innerHTML = ''
  // locationContainer.innerHTML = "";
  // weakResistContainer.innerHTML = "";
  // eleAilContainer.innerHTML = "";
  // rewardLowContainer.innerHTML = "";
  // rewardHighContainer.innerHTML = "";
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
