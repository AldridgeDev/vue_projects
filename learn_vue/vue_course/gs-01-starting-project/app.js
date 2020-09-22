// const pageButton = document.querySelector('button'); //targeting button
// const inputValue = document.querySelector('input'); //targeting input
// const list = document.querySelector('ul'); //targeting <ul> list

// function addGoal() {
//     const enteredValue = inputValue.value; //takes the value you enter
//     const listItem = document.createElement('li'); //creates an <li>
//     listItem.textContent = enteredValue; //takes the <li> and puts your value entered
//     list.appendChild(listItem); //takes the <ul> and appends (adds) the new item entered
//     inputValue.value = ''; //makes sure to clear the input
// }

// pageButton.addEventListener('click', addGoal); //listener for button clicks

new Vue({
  el: "#app",
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
});
