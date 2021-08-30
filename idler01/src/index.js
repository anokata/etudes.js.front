import _ from 'lodash';
import {say} from './say';
import Say from './say';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', ' and module say some(x):', Say.some(123)], ' ');
    say();
    return element;
}

document.body.appendChild(component());
