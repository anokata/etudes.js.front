Vue.config.devtools = true;
const ClickTiers = {
    1: 10,
    2: 30,
    3: 60,
    4: 100,
};

// cookie save
// btn-primary btn-sm disabled
// btn-secondary
// btn-success
// btn-danger
// btn-warning
// btn-info
// btn-light
// btn-dark
// btn-outline
// mine gray block
// sell block for 0.001 coin. marketing upd. 

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    IncrementNumber: function (n, event) {
        app.procent1 += n;
        app.clickInc();
    }
  },
    template: '<button class="btn btn-primary" @click="IncrementNumber(2, $event)">clicks: - {{ count }}</button>'
})

Vue.component('click-button', {
  data: function () {
    return {
    }
  },
  methods: {
    IncrementNumber: function (event) {
        app.clickInc();
    }
  },
    template: '<button class="btn btn-info" @click="IncrementNumber()">Mine gray block</button>'
})


Vue.component('progress-bar', {
    props: ['in_prc'],
  data: function () {
    return {
      prc: 10,
    }
  },
    template: `<div class="progress"><div class="progress-bar" role="progressbar" v-bind:aria-valuenow="prc" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: in_prc+'%'}"></div></div>`
})


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    text_button1: 'make it inc:',
    procent1: 10,
    state: "",
    number: 1,
    isActive: false,

    clickTier: 0,
    clicks: 0,
    clickAddenum: 1,

      // tabs
      // every action is unlocking
      // Buy for ..
    unlocks: [],
    auto: {
        clickers: 0,
    },
    upgrades: {
    },
    menu:{
        dev: {
            active: true,
            name: "Dev",
        },
        test: {
            active: false,
            name: "Test",
        },
        about: {
            active: false,
            name: "About",
        },
    },
    menuActive: 'dev',
  },
    methods: {
        setMessage: function(event){
            this.message = event.target.value;
        },
        procent1style:function (){
            return `width: ${this.procent1}%`;
        },
        clickInc: function(){
            this.clicks += this.clickAddenum;
            //console.log(`click ${this.clicks}`);
        },
        menuToggle: function(name){
            let menu = this.menu;
            if (menu[name].active) return;
            menu[name].active = !menu[name].active;
            menu[this.menuActive].active = false;
            this.menuActive = name;
        },
    }
})
