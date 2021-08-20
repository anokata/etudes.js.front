const firstTier = 10;

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    IncrementNumber: function () {
      //this.procent1 += 1;
    }
  },
    template: '<button class="btn btn-primary" v-on:click="IncrementNumber">clicks: - {{ count }}</button>'
})


Vue.component('progress-bar', {
    props: ['in_prc'],
  data: function () {
    return {
      prc: in_prc,
      prcwidth: "width: 10%"
    }
  },
    template: '<div class="progress"><div class="progress-bar" role="progressbar" v-bind:aria-valuenow="prc" aria-valuemin="0" aria-valuemax="100" v-bind:style="prcwidth" ></div></div>'
})


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    procent1: 10,
  },
})
