const app = Vue.createApp ({
    data() {
        return {
            output1: '',
            confirmOutputValue1: '',
            output2: '',
            confirmOutputValue2: ''
        };
    },
    methods: {
        showAlert() {
            alert('Hey!');
        },
        outputText(event) {
            this.output1 = event.target.value;
        },
        confirmOutputValue() {
            this.confirmOutputValue1 = this.output1;
        },
        outputTextEnter(event) {
            this.output2 = event.target.value;
        },
        confirmOutputValueEnter() {
            this.confirmOutputValue2 = this.output2;
        }
    }
});

app.mount('#assignment');