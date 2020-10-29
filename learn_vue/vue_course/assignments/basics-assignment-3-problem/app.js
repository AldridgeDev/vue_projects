const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch: {
        counter(value) {
            if (value !== '') {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 5000);
            }
        }
    },
    computed: {
        // resultOutput() {
        //     if (this.result < 37) {
        //         return 'Not there yet';
        //     } else if (this.result > 37) {
        //             return 'Too much!';
        //         }
        //     }
        // },
        resultOutput() {
            if (this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter === 37) {
                    return this.counter;
                } else {
                    return 'Too much!';
                }
            }
        },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');