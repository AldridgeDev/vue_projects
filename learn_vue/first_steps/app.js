new Vue({
    el: '#vue-app',
    data: {
        name: 'Antonio',
        job: 'Web Developer',
        timestamp: "",
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk" target="_blank">Net Ninja\'s Website</a>'
    },
    created() {
        setInterval(this.getNow, 10000000000);
    },
    methods: {
        greetOutput: function(time) {
            return 'Good ' + time + ', it is ';
        },
        getNow: function() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            const dateTime = time + ' on ' + date;
            this.timestamp = dateTime;
        }
    }
});

new Vue({
    el: '#events',
    data: {
        age: "",
        x: 0,
        y: 0
    },
    created() {
        setInterval(this.getAntoniosAge, 1000);
    },
    methods: {
        getAntoniosAge: function() {
            const birthday = new Date(1993, 05, 05);
            const birthYear = birthday.getFullYear();
            const birthMonth = birthday.getMonth();
            const birthDate = birthday.getDate();
            
            const today = new Date();
            const birthdayCalculation = new Date(birthYear, birthMonth - 1, birthDate);
            const differenceInMilisecond = today.valueOf() - birthdayCalculation.valueOf();
            const actualAge = Math.floor(differenceInMilisecond / 31536000000);
            this.age = actualAge;
        },
        add: function(inc) {
            this.age+= inc;
        },
        subtract: function(dec) {
            this.age-= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

new Vue({
    el: '#app',
    data: {

    },
    methods: {
        
    }
});