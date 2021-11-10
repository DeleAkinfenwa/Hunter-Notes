const nameInput = document.querySelector('#name-selector');
const searchBtn = document.querySelector('#search')


async function getMonster() {
  // get the title from the input box
  try {
    // get the API results of monster data
    const searchResults = await axios.get('https://mhw-db.com/monsters');

    let monsterData = searchResults.data
    // console.log(monsterData)
    setNameList(monsterData)
    // displayResults(searchResults)
  } catch (error) {
    console.log(error)
  }
}
getMonster()


function setNameList(monsterData) {
  //for each name in the the searach results, add them to the dropdown
  for (i = 0; i < monsterData.length; i++) {

    let options = monsterData[i].name
    // console.log(options)
    // console.log(monsterData[i].name)
    let dropdown = document.createElement('option')

    dropdown.value = options
    dropdown.textContent = options

    nameInput.appendChild(dropdown)
  };

};
nameInput.addEventListener('change', fillMonsterData)

async function fillMonsterData(monsterData) {
  e.preventDefault()
  try {
    // searchResults = await axios.get('https://mhw-db.com/monsters');


    monsterData.forEach((i) => {
      let monDescription = monsterData[i].description
      console.log(monDescription)
    });
    // let name = monsterData

    let description = monDescription


  } catch (err) {
    console.log(err);
  }
}
