import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      dailyMessage: "Enter some text below to count the words.",
      words: "",
      counter: 0,
    },
    methods: {
      countWords: function() {
        return this.counter = this.words.split(' ').length;
      },
      clearScreen: function() {
        this.words = '';
        this.counter = 0;
      }
    }
  });
});
