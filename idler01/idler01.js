Vue.config.devtools = true;

const MineTiers = {
    1: 10,
    2: 30,
    3: 60,
    4: 100,
};
const blockTypes = 4;

// TODO JSHINT/lint, F12

// cookie save
// btn-primary btn-sm disabled
// btn-secondary
// btn-success
// btn-danger
// btn-warning
// btn-info
// btn-light
// btn-dark
// marketing upd. 
// every action is unlocking
// Buy for ..
// infinit gm progress gen unlock

Vue.filter('number-suffix', function(n){
    let num = numeral(n);
    return num.format('0.a');
})
Vue.filter('number-suffixZ3', function(n){
    let num = numeral(n);
    return num.format('0.000a');
})
Vue.filter('number-exponent', function(n){
    let num = numeral(n);
    return num.format('0.0e+0');
})
	

Vue.component('v-button', {
    props: {
      message: {
        type: String,
        required: true,
        default: 'Button',
        },
      btype: 4,
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
        clickArg: function() {
            // console.log(`type:+ ${this.message} +${this.btype}`);
            this.handler(this.btype);
        },
    },
    template: '<button class="btn btn-primary" :class="\'btn-\'+type" @click="clickArg()" >{{message}}</button>'
})

Vue.component('click-button', {
  props: ['message', 'clickfn', 'type'],
  data: function () {
    return {
    }
  },
  methods: {
    clickArg: function() {
        this.clickfn(this.type);
    },
  },
    template: '<button class="btn btn-outline-info" @click="clickArg">{{message}}<img src="icons/grayblock_v2.png" height=20></img></button>'
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
      state: {
        blockTier: 0,
        unlocks: [],
        auto: {
            grayMiners: 0,
        },
        upgrades: {
        },
        coins: 0.002,  

        blocks: new Array(blockTypes).fill(10),
        blockAddenum: [],
        blockCoinConversion:[],

    },

    message: 'Hello Vue!',
    text_button1: 'make it inc:',
    procent1: 10,
    number: 1,
    isActive: false,

    grayBlocks: 0,
    yellowBlocks: 0,
    blockAddenum: 1e3,
    yBlockAddenum: 1,
    ico_grayblock: "icons/grayblock_v2.png",
    ico_yellowblock: "icons/yellowblock.png",

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
        initState: function() {
            //this.state.blocks = new Array(blockTypes).fill(10);
            this.state.blockAddenum = new Array(blockTypes).fill(1);
            this.state.blockCoinConversion = new Array(blockTypes).fill(0.002);
            this.state.blockCoinConversion = this.state.blockCoinConversion.map((el, i) => { return el * i**i });

            //console.log(this.state);
        },

        mineBlock: function(type){
            let val = this.state.blocks[type] + this.state.blockAddenum[type];
            Vue.set(this.state.blocks, type, val);
        },
        sellBlock: function(type){
            this.state.coins += this.canBuyCoins(type);
            Vue.set(this.state.blocks, type, 0);
            //console.log(this.state, type);
        },
        canBuyCoins: function(type){
            return this.state.blocks[type] * this.state.blockCoinConversion[type];
        },
        canBuyCoinsMsg: function(type){
            let val = numeral(this.canBuyCoins(type)).format('0.000a');
            return `Sell for ${val} coins`;
        },


        log: function(msg){
            console.log(msg);
        },
        setMessage: function(event){
            this.message = event.target.value;
        },
        procent1style:function (){
            return `width: ${this.procent1}%`;
        },
        menuToggle: function(name){
            let menu = this.menu;
            if (menu[name].active) return;
            menu[name].active = !menu[name].active;
            menu[this.menuActive].active = false;
            this.menuActive = name;
        },

    },
    created: function() {
        this.initState();
    },
})
