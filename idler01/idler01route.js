Vue.config.devtools = true;
const MineTiers = {
    1: 10,
    2: 30,
    3: 60,
    4: 100,
};

//OR console.log(this.$root.$data);
var sharedState = {
    clock: 2,
    incClock: function(){this.clock+= 2;},
};

const NotFound = { template: '<h2>Page Not Found</h2>' }
const Idler01 = { template: `
    <div class="row">
        <div class="col-sm"> 
        hi
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm"> 
        </div>
        <div class="col-sm"> 
        </div>
        <div class="col-sm"> 
        </div>
    </div>
`
}
const Idler02 = { template: '<h2>Idler 02 Page</h2>' }
const About = { 
    props: ['data', 'x', 'sharedState'],
    methods: {
        inc: function() { 
            this.x += 1;
            this.sharedState.incClock();
        }
    },
    template: '<h2>About Page da:{{data}} x:{{x}}({{sharedState.clock}}) <v-button @click="inc()" message="Save" :handler="inc" type="secondary"></v-button></h2>' 
}
            
const Dev = { template: '<h2>Dev Page</h2>' }
const Test = { template: '<h2>TRest Page {{ message }}+{{number}}</h2>' }
const Settings = { template: '<h2>Settings Page</h2>' }

const routes = [
  { path: '/', component: Idler01 },
  { path: '/idler02', component: Idler02 },
  { path: '/About', component: About, props: {data: "saf", x: 1, sharedState: sharedState} },
  { path: '*', component: NotFound },
  { path: '/Dev', component: Dev },
  { path: '/Test', component: Test },
  { path: '/Settings', component: Settings },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

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

Vue.filter('number-suffix', function(n){
    let num = numeral(n);
    return num.format('0.a');
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
  props: ['message', 'clickfn'],
  data: function () {
    return {
    }
  },
  methods: {
    IncrementNumber: function (event) {
        app.blockInc();
    }
  },
    template: '<button class="btn btn-outline-info" @click="clickfn()">{{message}}<img src="icons/grayblock_v2.png" height=20></img></button>'
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
  router: router,
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
    blockAddenum: 1e3,
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
            return `Sell for ${this.canBuyCoinsGray()} coins`;
        },
        canBuyCoinsGray: function(){
            return this.grayBlocks / 250;
        },
    }
})
