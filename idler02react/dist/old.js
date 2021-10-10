"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
// state hook
function ClickField(props) {
    var _a = (0, react_2.useState)({
        clicks: 0,
        incrementBy: 0.1,
    }), clicker = _a[0], setClick = _a[1];
    console.log("render cli<C-BS> " + clicker.clicks + " " + clicker.incrementBy);
    (0, react_2.useEffect)(function () {
        console.log("clicks: ", clicker.clicks);
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "click-field", onClick: function () { return updateClick(setClick, clicker); } },
            "Clks: ",
            clicker.clicks)));
}
function updateClick(setClick, clicker) {
    var newValue = Math.round(100 * (clicker.clicks + clicker.incrementBy)) / 100;
    console.log(newValue);
    setClick(__assign(__assign({}, clicker), { clicks: newValue }));
}
var clicks = getClicks();
var getClicks = function () { return selectClicks(store.getState()); };
var store = configureStore({ reducer: rootReducer });
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === CLICK_ACTION) {
        var newState = __assign({}, state);
        newState.clicks += state.clickInc;
        return newState;
    }
    if (action.type === UPGRADE_ACTION) {
        // TODO extract click upd ... logic in model clicker
        if (state.clicks < action.cost)
            return state;
        var newState = __assign({}, state);
        newState.clickInc += action.payload;
        newState.clicks -= action.cost;
        return newState;
    }
    return state;
}
var CLICK_ACTION = "click/clicked";
var UPGRADE_ACTION = "click/upgrade";
// make an action
function clickAction() {
    return {
        type: CLICK_ACTION,
        payload: 0,
    };
}
function upgradeAction() {
    return {
        type: UPGRADE_ACTION,
        payload: 0.1,
        cost: 1,
    };
}
// store.dispatch(clickAction());
//# sourceMappingURL=old.js.map