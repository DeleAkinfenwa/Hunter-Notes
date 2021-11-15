# Project Overview

## **Project Name**

[Hunter Notes](https://deleakinfenwa.github.io/Hunter-Notes/)

## **Project Description**

I'm making an application for the game "Monster Hunter World" that will allow you to search a specific monster and display information regarding it such as location, weaknesses, and rewards for hunting it.

Here are some websites with a similar concept:
- https://scryfall.com (Magic the Gathering)
- https://bulbapedia.bulbagarden.net/wiki/Main_Page (Pokemon)

## **API and Data Sample**

API: https://mhw-db.com/

![API Sample](/Project_Imgs/APIsample.png)


## **Wireframes**

This is the wire frame for a desktop version. It'll feature a search bar/dropdown bar that will list all the monsters in the game. Each section will display a portion of the data about that specific monster

![Windowed Wireframe](/Project_Imgs/Wireframe_Desktop.png)


The mobile verison will have a very similar look but the lay out will have each information section stacked in order to keep the contents readable and properly formated

![Mobile Wireframe](/Project_Imgs/Wireframe_Mobile.png)

### **Minimum Viable Product(MVP) & Post-MVP**

MVP

- [x] connect API to application
- [x] Allow user to search a monster name via typing or using the dropbox
- [x] Display monster data in appropriate sections


Post-MVP  

- [ ] Hover over Ailments to show a tooltip describing how to remove it
- [ ] a filter menu to allow user to pick which type of information is displayed
- [ ] hamburger menu to mobile version allowing user to pick which type information is displayed
- [ ] allow user to pick a random monster
- [ ] include a section that displays what armor and weapons can be made from that monster
- [ ] images for each monster
- [ ] icons to each element/ailment

## **Project Schedule**

|  Day | Deliverable | Status
|---|---| ---|
|Nov 7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 8| Project Approval | Complete
|Nov 9| Core Application Structure (HTML, CSS, JS) | Incomplete
|Nov 10| All necessary information sorted and displayed in the appropriate sections| Incomplete
|Nov 11| Apply styling to the application| Incomplete
|Nov 12| MVP* App styled for both desktop and mobile | Incomplete
|Nov 15| Presentations | Incomplete

## **Priority Matrix**

![Priority Maxtrix](/Project_Imgs/Priority_Matrix.png)

## **Timeframes**

| Component | Priority | Estimated Time | Actual Time 
| --- | :---: |  :---: | :---: | 
| Core Code(HTML,CSS,etc) | H | 2 hrs| 5 hrs |
| Working with API | H | 3 hrs| 3 hrs |
| Create Header and search/dropbox | H | 3 hrs| 1 hrs | 
| Set up working search/dropbox with API| H | 2 hrs| 1.5 hrs | 
| Create algorithm to pull needed info | H | 4 hrs| 2.5 hrs | 
| Create divs for each info category | H | 2 hrs| .5 hrs | 
| Display info in appropriate sections | H | 4 hrs| 10 hrs | 
| Organizing info within each section | M | 4 hrs| 3 hrs | 
| Styling each section for desktop| L | 3 hrs| 3 hrs |
| Styling each section for mobile| L | 2 hrs| .5 hrs |
| Total | ___ | 29 hrs| 30 hrs | 

## **Code Snippet**

```
// populate dropdown
function setNameList(monsterData) {
  //for each name in the the search results, add them to the dropdown
  for (i = 0; i < monsterData.length; i++) {
    let options = monsterData[i].name
    let dropdown = document.createElement('option')
    dropdown.value = monsterData[i].id
    dropdown.textContent = options
    nameInput.appendChild(dropdown)
  };
};
```

## **Change Log**
 - removing rewards section due to API not containing
 -
 -  
