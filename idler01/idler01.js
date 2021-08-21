const firstTier = 10;

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    IncrementNumber: function (n, event) {
      //this.procent1 += 1;
        //console.log(app);
        //console.log(this);
        app.procent1 += n;
    }
  },
    template: '<button class="btn btn-primary" @click="IncrementNumber(2, $event)">clicks: - {{ count }}</button>'
})


Vue.component('progress-bar', {
    props: ['in_prc'],
  data: function () {
    return {
      prc: 10,
      prcwidth: "width: 10%"
    }
  },
    template: '<div class="progress"><div class="progress-bar" role="progressbar" v-bind:aria-valuenow="prc" aria-valuemin="0" aria-valuemax="100" v-bind:style="prc" ></div></div>'
})


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    text_button1: 'make it inc:',
    procent1: 10,
    state: "",
    number: 1,
  },
    methods: {
        setMessage: function(event){
            this.message = event.target.value;
        },
        procent1style:function (){
            return `width: ${this.procent1}%`;
        }
    }
})
