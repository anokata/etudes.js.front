let l = console.log;
// immutable
let user = {
  name:"M.jonh Guo", 
  age: 15,
};
l(user);
// immutate change
let userChg1 = Object.assign({}, user, {age: 28});
l(userChg1);
let userChg2 = {...user, age: 81};
l(userChg2);


