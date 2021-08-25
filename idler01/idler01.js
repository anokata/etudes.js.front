Vue.config.devtools = true;
const MineTiers = {
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
// every action is unlocking
// Buy for ..
// infinit gm progress gen unlock


Vue.component('v-button', {
    props: {
      message: {
        type: String,
        required: true,
        default: 'Button',
        },
      type: {
        type: String,
        default: 'secondary',
        },
      handler: Function,

    },
    data: function () {
    return {
    }
    },
    methods: {
    },
    template: '<button class="btn btn-primary" :class="\'btn-\'+type" @click="handler(\'save\'+type)" >{{message}}</button>'
})

Vue.component('click-button', {
  data: function () {
    return {
    }
  },
  methods: {
    IncrementNumber: function (event) {
        app.blockInc();
    }
  },
    template: '<button class="btn btn-outline-info" @click="IncrementNumber()">Mine gray block <img src="icons/grayblock_v2.png" height=20></img></button>'
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

    blockTier: 0,
    grayBlocks: 0,
    yellowBlocks: 0,
    blockAddenum: 1,
    ico_grayblock: "icons/grayblock_v2.png",
    ico_yellowblock: "icons/yellowblock.png",
    coins: 0.001,  

    unlocks: [],
    auto: {
        grayMiners: 0,
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
        settings: {
            active: false,
            name: "Settings",
        },
        about: {
            active: false,
            name: "About",
        },
    },
    menuActive: 'dev',
  },
    methods: {
        log: function(msg){
            console.log(msg);
        },
        setMessage: function(event){
            this.message = event.target.value;
        },
        procent1style:function (){
            return `width: ${this.procent1}%`;
        },
        blockInc: function(){
            this.grayBlocks += this.blockAddenum;
            //console.log(`block ${this.grayBlocks}`);
        },
        menuToggle: function(name){
            let menu = this.menu;
            if (menu[name].active) return;
            menu[name].active = !menu[name].active;
            menu[this.menuActive].active = false;
            this.menuActive = name;
        },
        sellGray: function(){
            this.coins += this.canBuyCoinsGray();
            this.grayBlocks = 0;
        },
        canBuyCoinsGrayMsg: function(){
            return `Sell gray blocks for ${this.canBuyCoinsGray()} coins`;
        },
        canBuyCoinsGray: function(){
            return this.grayBlocks / 250;
        },
    }
})
