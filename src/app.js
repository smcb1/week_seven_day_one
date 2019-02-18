import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      dailyMessage: "Enter some text below to count the words.",
      enteredWords: "",
      counter: 0,
    },
    methods: {
      countWords: function() {
        return this.counter = this.enteredWords.split(' ').length;
      }
    }
  });
});
