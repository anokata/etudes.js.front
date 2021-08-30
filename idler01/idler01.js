const Vue = window.Vue;
const numeral = window.numeral;
Vue.config.devtools = true;

// global timer functions array, setinterval?
// performance.now().

function progressionDefault(el, i) {
    return el * i ** i * 10;
}
function progressionDefaultD5(el, i) {
    return el * i ** i * 2;
}

const MineTiers = {
    1: 10,
    2: 30,
    3: 60,
    4: 100,
};
const blockTypes = 4;
const initBlocks = 10;
const initBlockAddenum = 1;
const initAutoCost = 0.001;
const initBlockCoinCoversion = 0.002;
const initUnlockCoinNeed = 0.002;
const blocksIcons = ["icons/grayblock_v2.png", "icons/yellowblock.png"];

// TODO speed calc
// TODO click upg
// TODO all multiplier - quicker
// TODO classes and modules (on proto) of mines, auto... (classic js, no compile)

// cookie save
// btn-danger btn-sm disabled
// marketing upd.  update tab
// autominer, per/sec info
// every action is unlocking
// infinit gm progress gen unlock

Vue.filter("number-suffix", function (n) {
    let num = numeral(n);
    return num.format("0.a");
});
Vue.filter("number-suffixZ3", function (n) {
    let num = numeral(n);
    return num.format("0.000a");
});
Vue.filter("number-exponent", function (n) {
    let num = numeral(n);
    return num.format("0.0e+0");
});

Vue.component("v-button", {
    props: {
        message: {
            type: String,
            required: true,
            default: "Button",
        },
        btype: Number(4),
        type: {
            type: String,
            default: "secondary",
        },
        handler: Function,
    },
    data: function () {
        return {};
    },
    methods: {
        clickArg: function () {
            // console.log(`type:+ ${this.message} +${this.btype}`);
            this.handler(this.btype);
        },
    },
    template:
        '<button class="btn btn-primary" :class="\'btn-\'+type" @click="clickArg()" >{{message}}</button>',
});

Vue.component("click-button", {
    props: ["message", "clickfn", "type"],
    data: function () {
        return {};
    },
    methods: {
        clickArg: function () {
            this.clickfn(this.type);
        },
    },
    template:
        '<button class="btn btn-outline-info" @click="clickArg">{{message}}<img :src="blocksIcons[type]" height=20></img></button>',
});

Vue.component("progress-bar", {
    props: ["in_prc"],
    data: function () {
        return {
            prc: 10,
        };
    },
    template: `<div class="progress"><div class="progress-bar" role="progressbar" v-bind:aria-valuenow="prc" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: in_prc+'%'}"></div></div>`,
});

var app = new Vue({
    el: "#app",
    data: {
        start: null,
        state: {
            blockTier: 0,
            unlocks: [],
            unlocksCoinNeed: [],
            unlocksAuto: [],
            unlocksAutoNeed: [],
            auto: [],
            autoCost: [],
            autoAddenum: [],
            autoSpeed: [], // n in msec
            upgrades: {},
            coins: 0.002,

            blocks: new Array(blockTypes).fill(10),
            blockAddenum: [],
            blockCoinConversion: [],
        },

        message: "Hello Vue!",
        text_button1: "make it inc:",
        procent1: 10,
        number: 1,
        isActive: false,

        grayBlocks: 0,
        yellowBlocks: 0,
        blockAddenum: 1e3,
        yBlockAddenum: 1,

        menu: {
            dev: {
                active: true,
                name: "Mine",
            },
            upgrades: {
                active: false,
                name: "Upgrades",
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
        menuActive: "dev",
    },
    methods: {
        initState: function () {
            this.state.blocks = new Array(blockTypes).fill(initBlocks);
            this.state.blockAddenum = new Array(blockTypes).fill(
                initBlockAddenum
            );
            this.state.blockCoinConversion = new Array(blockTypes).fill(initBlockCoinCoversion);
            this.state.blockCoinConversion = this.state.blockCoinConversion.map(
                (el, i) => {
                    return el * i ** i;
                }
            );
            this.state.unlocks = new Array(blockTypes).fill(0);
            this.state.unlocks[0] = 1;
            this.state.unlocksCoinNeed = new Array(blockTypes).fill(initUnlockCoinNeed);
            this.state.unlocksCoinNeed =
                this.state.unlocksCoinNeed.map(progressionDefault);
            this.state.auto = new Array(blockTypes).fill(0);
            this.state.autoAddenum = new Array(blockTypes).fill(1);
            //TODO const
            this.state.autoSpeed = new Array(blockTypes).fill(0.001);
            this.state.autoCost = new Array(blockTypes).fill(initAutoCost);
            this.state.autoCost = this.state.autoCost.map(progressionDefault);
            this.state.unlocksAutoNeed = new Array(blockTypes).fill(0.002);
            this.state.unlocksAutoNeed =
                this.state.unlocksAutoNeed.map(progressionDefault);
            this.state.unlocksAuto = new Array(blockTypes).fill(0);

            console.log(this.state.unlocksCoinNeed);
            //console.log(this.state);
        },

        mineBlock: function (type) {
            let val = this.state.blocks[type] + this.state.blockAddenum[type];
            this.setBlockAmount(type, val);
        },
        setBlockAmount: function (type, val) {
            Vue.set(this.state.blocks, type, val);
        },
        buyAutoMine: function (type) {
            let cost = this.state.autoCost[type];
            if (cost > this.state.coins) return;
            this.state.coins -= cost;
            let val = this.state.auto[type] + this.state.autoAddenum[type];
            Vue.set(this.state.auto, type, val);
            this.state.autoCost[type] = progressionDefaultD5(this.state.autoCost[type], type);
        },
        sellBlock: function (type) {
            this.state.coins += this.canBuyCoins(type);
            Vue.set(this.state.blocks, type, 0);
            //console.log(this.state, type);
        },
        canBuyCoins: function (type) {
            return (
                this.state.blocks[type] * this.state.blockCoinConversion[type]
            );
        },
        canBuyCoinsMsg: function (type) {
            let val = numeral(this.canBuyCoins(type)).format("0.000a");
            return `Sell for ${val} coins`;
        },
        unlock: function (type) {
            if (this.state.coins >= this.state.unlocksCoinNeed[type]) {
                this.state.coins -= this.state.unlocksCoinNeed[type];
                Vue.set(this.state.unlocks, type, 1);
            }
        },
        unlockForMsg: function (type) {
            // let val = numeral(this.state.unlocksCoinNeed[type]).format('0.000a');
            let val = this.state.unlocksCoinNeed[type];
            return `Unlock for ${val} Coin`;
        },
        unlockAutoForMsg: function (type) {
            let val = this.state.unlocksAutoNeed[type];
            return `Unlock autominer for ${val} Coin`;
        },
        autoMinerBuyMsg: function (type) {
            let val = this.state.autoCost[type];
            return `Buy autominer for ${val} Coin`;
        },
        unlockAuto: function (type) {
            if (this.state.coins >= this.state.unlocksAutoNeed[type]) {
                this.state.coins -= this.state.unlocksAutoNeed[type];
                Vue.set(this.state.unlocksAuto, type, 1);
            }
        },

        log: function (msg) {
            console.log(msg);
        },
        setMessage: function (event) {
            this.message = event.target.value;
        },
        procent1style: function () {
            return `width: ${this.procent1}%`;
        },
        menuToggle: function (name) {
            let menu = this.menu;
            if (menu[name].active) return;
            menu[name].active = !menu[name].active;
            menu[this.menuActive].active = false;
            this.menuActive = name;
        },

        timerStep: function (t) {
            //t = Math.round(t);
            if (!this.start) this.start = t;
            let delta = t - this.start;
            // slowdown
            // if (delta < 100) {
            //     requestAnimationFrame(this.timerStep);
            //     return;
            // }
            this.start = t;
            this.step(delta);
            requestAnimationFrame(this.timerStep);
        },
        startTimer: function () {
            requestAnimationFrame(this.timerStep);
        },
        step: function (d) {
            // console.log(`delta: ${d}ms`);
            this.state.auto.forEach((e, i) => {
                if (!e) return;
                let add =
                    this.state.autoSpeed[i] * d * e * this.state.autoAddenum[i];
                // console.log(`${i},${add}`);
                this.setBlockAmount(i, this.state.blocks[i] + add);
            });
        },
    },
    created: function () {
        this.initState();
        this.startTimer();
    },
});
