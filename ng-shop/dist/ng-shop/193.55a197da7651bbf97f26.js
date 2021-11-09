"use strict";(self.webpackChunkng_shop=self.webpackChunkng_shop||[]).push([[193],{193:(W,_,a)=>{a.r(_),a.d(_,{AdminModule:()=>R});var m=a(583),s=a(663),t=a(639),f=a(338);const h=function(){return["/admin/","dashboard"]},v=function(){return["/admin/","add"]},A=function(){return["/admin/","orders"]};function T(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"ul"),t.TgZ(1,"li",5),t.TgZ(2,"a",6),t._uU(3,"Dashboard"),t.qZA(),t.qZA(),t.TgZ(4,"li",5),t.TgZ(5,"a",6),t._uU(6,"Add product"),t.qZA(),t.qZA(),t.TgZ(7,"li",5),t.TgZ(8,"a",6),t._uU(9,"Orders"),t.qZA(),t.qZA(),t.TgZ(10,"li",5),t.TgZ(11,"a",7),t.NdJ("click",function(i){return t.CHM(o),t.oxw().logout(i)}),t._uU(12,"Logout"),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(3,h)),t.xp6(3),t.Q6J("routerLink",t.DdM(4,v)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,A)))}const q=function(){return["/admin/","login"]};function C(e,l){1&e&&(t.TgZ(0,"ul"),t.TgZ(1,"li",5),t.TgZ(2,"a",6),t._uU(3,"Login"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,q)))}let b=(()=>{class e{constructor(o,n){this.auth=o,this.router=n}ngOnInit(){}logout(o){null==o||o.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-layout"]],decls:9,vars:2,consts:[[1,"navbar","bg-dark"],["routerLink","/"],[4,"ngIf","ngIfElse"],["login",""],[1,"container"],["routerLinkActive","active"],[3,"routerLink"],["href","#",3,"click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"nav",0),t.TgZ(1,"h1"),t.TgZ(2,"a",1),t._uU(3,"Online shop"),t.qZA(),t.qZA(),t.YNc(4,T,13,6,"ul",2),t.YNc(5,C,4,2,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"router-outlet"),t.qZA()),2&o){const i=t.MAs(6);t.xp6(4),t.Q6J("ngIf",n.auth.isAuthenticated())("ngIfElse",i)}},directives:[s.yS,m.O5,s.lC,s.Od],styles:[""]}),e})();var r=a(665);function y(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Enter Email"),t.qZA())}function I(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Enter valid Email"),t.qZA())}function w(e,l){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,y,2,0,"small",9),t.YNc(2,I,2,0,"small",9),t.qZA()),2&e){const o=t.oxw();let n,i;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("email"))||null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==(i=o.form.get("email"))||null==i.errors?null:i.errors.email)}}function x(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Enter Password"),t.qZA())}function P(e,l){if(1&e&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&e){const o=t.oxw(2);let n;t.xp6(1),t.AsE(" Passwor must be at least ",null==(n=o.form.get("password"))||null==n.errors?null:n.errors.minlength.requiredLength," characters. Now he ",null==(n=o.form.get("password"))||null==n.errors?null:n.errors.minlength.actualLength," ")}}function U(e,l){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,x,2,0,"small",9),t.YNc(2,P,2,2,"small",9),t.qZA()),2&e){const o=t.oxw();let n,i;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("password"))||null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==(i=o.form.get("password"))||null==i.errors?null:i.errors.minlength)}}let N=(()=>{class e{constructor(o,n){this.auth=o,this.router=n,this.submitted=!1}ngOnInit(){this.form=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email]),password:new r.NI(null,[r.kI.required,r.kI.minLength(6)])})}submit(){this.form.invalid||(this.submitted=!0,this.auth.login({email:this.form.value.email,password:this.form.value.password,returnSecureToken:!0}).subscribe(n=>{console.log(n),console.log(null==n?void 0:n.idToken),this.form.reset(),this.router.navigate(["/admin","dashboard"]),this.submitted=!1},()=>{this.submitted=!1,console.log("err")}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:15,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"form-control"],["for","email"],["id","email","type","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["id","password","type","password","formControlName","password"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(o,n){if(1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(1,"h2"),t._uU(2,"Login as admin"),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"label",2),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,w,3,2,"div",4),t.qZA(),t.TgZ(8,"div",1),t.TgZ(9,"label",5),t._uU(10,"Password"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,U,3,2,"div",4),t.qZA(),t.TgZ(13,"button",7),t._uU(14,"Logon"),t.qZA(),t.qZA()),2&o){let i,u;t.Q6J("formGroup",n.form),t.xp6(7),t.Q6J("ngIf",(null==(i=n.form.get("email"))?null:i.touched)&&(null==(i=n.form.get("email"))?null:i.invalid)),t.xp6(5),t.Q6J("ngIf",(null==(u=n.form.get("password"))?null:u.touched)&&(null==(u=n.form.get("password"))?null:u.invalid)),t.xp6(1),t.Q6J("disabled",(null==n.form?null:n.form.invalid)||n.submitted)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,m.O5],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),e})(),L=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard-page"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"dashboard-page works!"),t.qZA())},styles:[""]}),e})();var J=a(340),Y=a(2),Q=a(841);let k=(()=>{class e{constructor(o){this.http=o}create(o){return this.http.post(`${J.N.fbdbUrl}/products.json`,o).pipe((0,Y.U)(n=>Object.assign(Object.assign({},o),{id:n.name,date:new Date(o.date)})))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(Q.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=a(845);function O(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Choose product type"),t.qZA())}function F(e,l){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,O,2,0,"small",21),t.qZA()),2&e){const o=t.oxw();let n;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("type"))||null==n.errors?null:n.errors.required)}}function E(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Enter product title"),t.qZA())}function S(e,l){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,E,2,0,"small",21),t.qZA()),2&e){const o=t.oxw();let n;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("title"))||null==n.errors?null:n.errors.required)}}function G(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Choose product photo"),t.qZA())}function D(e,l){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,G,2,0,"small",21),t.qZA()),2&e){const o=t.oxw();let n;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("photo"))||null==n.errors?null:n.errors.required)}}function M(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Choose product info"),t.qZA())}function X(e,l){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,M,2,0,"small",21),t.qZA()),2&e){const o=t.oxw();let n;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("info"))||null==n.errors?null:n.errors.required)}}function j(e,l){1&e&&(t.TgZ(0,"small"),t._uU(1,"Choose product price"),t.qZA())}function z(e,l){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,j,2,0,"small",21),t.qZA()),2&e){const o=t.oxw();let n;t.xp6(1),t.Q6J("ngIf",null==(n=o.form.get("price"))||null==n.errors?null:n.errors.required)}}let B=(()=>{class e{constructor(o,n){this.productService=o,this.router=n,this.submitted=!1}ngOnInit(){this.form=new r.cw({type:new r.NI(null,r.kI.required),title:new r.NI(null,r.kI.required),photo:new r.NI(null,r.kI.required),info:new r.NI(null,r.kI.required),price:new r.NI(null,r.kI.required)})}submit(){if(this.form.invalid)return;this.submitted=!0;const o={type:this.form.value.type,title:this.form.value.title,photo:this.form.value.photo,info:this.form.value.info,price:this.form.value.price,date:new Date};console.log(o),this.productService.create(o).subscribe(n=>{this.form.reset(),this.submitted=!1,this.router.navigate(["/"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(k),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-page"]],decls:40,vars:7,consts:[[3,"formGroup","ngSubmit"],[1,"text-center"],[1,"form-control"],["for","type"],["formControlName","type"],["value","Game"],["value","Sword"],["value","Boots"],["value","Guns"],["value","Cloth"],["class","validation",4,"ngIf"],["for","title"],["id","title","title","title","formControlName","title"],["for","photo"],["formControlName","photo"],["for","info"],["formControlName","info"],["for","price"],["id","price","price","price","formControlName","price"],["info","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(o,n){if(1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(1,"h2",1),t._uU(2,"Add product"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"label",3),t._uU(5,"type"),t.qZA(),t.TgZ(6,"select",4),t.TgZ(7,"option",5),t._uU(8,"Game"),t.qZA(),t.TgZ(9,"option",6),t._uU(10,"Sword"),t.qZA(),t.TgZ(11,"option",7),t._uU(12,"Boots"),t.qZA(),t.TgZ(13,"option",8),t._uU(14,"Guns"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Cloth"),t.qZA(),t.qZA(),t.YNc(17,F,2,1,"div",10),t.qZA(),t.TgZ(18,"div",2),t.TgZ(19,"label",11),t._uU(20,"title"),t.qZA(),t._UZ(21,"input",12),t.YNc(22,S,2,1,"div",10),t.qZA(),t.TgZ(23,"div",2),t.TgZ(24,"label",13),t._uU(25,"photo"),t.qZA(),t._UZ(26,"quill-editor",14),t.YNc(27,D,2,1,"div",10),t.qZA(),t.TgZ(28,"div",2),t.TgZ(29,"label",15),t._uU(30,"info"),t.qZA(),t._UZ(31,"quill-editor",16),t.YNc(32,X,2,1,"div",10),t.qZA(),t.TgZ(33,"div",2),t.TgZ(34,"label",17),t._uU(35,"price"),t.qZA(),t._UZ(36,"input",18),t.YNc(37,z,2,1,"div",10),t.qZA(),t.TgZ(38,"button",19),t._uU(39,"Add"),t.qZA(),t.qZA()),2&o){let i,u,p,c,g;t.Q6J("formGroup",n.form),t.xp6(17),t.Q6J("ngIf",(null==(i=n.form.get("type"))?null:i.touched)&&(null==(i=n.form.get("type"))?null:i.invalid)),t.xp6(5),t.Q6J("ngIf",(null==(u=n.form.get("title"))?null:u.touched)&&(null==(u=n.form.get("title"))?null:u.invalid)),t.xp6(5),t.Q6J("ngIf",(null==(p=n.form.get("photo"))?null:p.touched)&&(null==(p=n.form.get("photo"))?null:p.invalid)),t.xp6(5),t.Q6J("ngIf",(null==(c=n.form.get("info"))?null:c.touched)&&(null==(c=n.form.get("info"))?null:c.invalid)),t.xp6(5),t.Q6J("ngIf",(null==(g=n.form.get("price"))?null:g.touched)&&(null==(g=n.form.get("price"))?null:g.invalid)),t.xp6(1),t.Q6J("disabled",(null==n.form?null:n.form.invalid)||n.submitted)}},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,m.O5,r.Fj,Z.g6],styles:[""]}),e})(),H=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orders-page"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"orders-page works!"),t.qZA())},styles:[""]}),e})(),K=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-page"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"edit-page works!"),t.qZA())},styles:[""]}),e})(),d=(()=>{class e{constructor(o,n){this.auth=o,this.router=n}canActivate(o,n){return!!this.auth.isAuthenticated()||(this.auth.logout(),this.router.navigate(["/admin","login"]),!1)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(f.e),t.LFG(s.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,r.u5,r.UX,s.Bz.forChild([{path:"",component:b,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:N},{path:"dashboard",component:L,canActivate:[d]},{path:"add",component:B,canActivate:[d]},{path:"orders",component:H,canActivate:[d]},{path:"product/:id/edit",component:K,canActivate:[d]}]}]),Z.fi.forRoot()],s.Bz]}),e})()}}]);