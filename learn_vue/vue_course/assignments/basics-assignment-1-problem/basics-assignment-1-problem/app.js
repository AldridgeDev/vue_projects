const app = Vue.createApp({
    data() {
        return {
            name: 'Antonio Aldridge',
            age: '27',
            ageInFiveYears: '',
            zero: '0',
            one: '1',
            image: 'keyboard.jpg',
            inputValue: 'Fill in the blank'
        }
    },
    methods: {
        futureAge() {
            const myAge = 27;
            const future = myAge + 5;
            return this.ageInFiveYears = future;
        },
        randomNum() {
            const randomNumber = Math.round(Math.random(2));
            if (randomNumber === 0) {
                return this.zero;
            } else {
                return this.one;
            }
        }
    }
})

app.mount('#assignment');