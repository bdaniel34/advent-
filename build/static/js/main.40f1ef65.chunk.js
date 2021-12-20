(this["webpackJsonpreact-advent-calendar"]=this["webpackJsonpreact-advent-calendar"]||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/hatch_backdrop.fe632577.jpg"},15:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=n(8),s=n(12),h=n(1),g=n(2);function p(){var e=Object(h.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  padding: 40px;\n"]);return p=function(){return e},e}var d=g.b.div(p()),l=[{id:"hatch-1",nr:1,img:"./img/1.jpg",text:"Can I have your picture so I can show Santa what I want for Christmas?",open:!1},{id:"hatch-2",nr:2,img:"./img/2.jpg",text:"What do you call people who are afraid of Santa Claus? Claustrophobic",open:!1},{id:"hatch-3",nr:3,img:"./img/3.jpg",text:"What is the best Christmas present ever? A broken drum - you can't beat it!",open:!1},{id:"hatch-4",nr:4,img:"./img/4.jpg",text:"How do you know when Santa's in the room? You can sense his presents.",open:!1},{id:"hatch-5",nr:5,img:"./img/5.jpg",text:"STRESSED is just DESSERTS spelled backward.",open:!1},{id:"hatch-6",nr:6,img:"./img/6.jpg",text:"What is the difference between snowmen and snowwomen? Snowballs.",open:!1},{id:"hatch-7",nr:7,img:"./img/7.jpg",text:"What nationality is Santa Claus? North Polish",open:!1},{id:"hatch-8",nr:8,img:"./img/8.jpg",text:"What kind of motorbike does Santa ride? A Holly Davidson!",open:!1},{id:"hatch-9",nr:9,img:"./img/9.jpg",text:"Who is never hungry at Christmas? The turkey - he's always stuffed!",open:!1},{id:"hatch-10",nr:10,img:"./img/10.jpg",text:"When you stop believing in Santa Claus is when you start getting clothes for Christmas!",open:!1},{id:"hatch-11",nr:11,img:"./img/11.jpg",text:"What goes 'oh oh oh'? Santa walking backwards.",open:!1},{id:"hatch-12",nr:12,img:"./img/12.jpg",text:"According to my kids' Christmas lists, they think this parenting gig pays pretty well.",open:!1},{id:"hatch-13",nr:13,img:"./img/13.jpg",text:"Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",open:!1},{id:"hatch-14",nr:14,img:"./img/14.jpg",text:"What will fall on the lawn first? An autumn leaf or a Christmas catalog?",open:!1},{id:"hatch-15",nr:15,img:"./img/15.jpg",text:"What do elves learn in school? The Elf-abet!",open:!1},{id:"hatch-16",nr:16,img:"./img/16.jpg",text:"How do you scare a snowman? You get a hairdryer!",open:!1},{id:"hatch-17",nr:17,img:"./img/17.jpg",text:"The main thing I want this holiday season is for someone to wake me when it's over.",open:!1},{id:"hatch-18",nr:18,img:"./img/18.jpg",text:"Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.",open:!1},{id:"hatch-19",nr:19,img:"./img/19.jpg",text:"I bought my son a fridge for Christmas. \u2013 I can't wait to see his face light up when he opens it.",open:!1},{id:"hatch-20",nr:20,img:"./img/20.jpg",text:"Santa's elves are just a bunch of subordinate Clauses.",open:!1},{id:"hatch-21",nr:21,img:"./img/21.jpg",text:"What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.",open:!1},{id:"hatch-22",nr:22,img:"./img/22.jpg",text:"Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.",open:!1},{id:"hatch-23",nr:23,img:"./img/23.jpg",text:"What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!",open:!1},{id:"hatch-24",nr:24,img:"./img/24.jpg",text:"What's red and white, red and white, red and white? Sant rolling off your roof.",open:!1}],m=function(){return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(l)},u=n(11),f=n.n(u);function b(){var e=Object(h.a)(["\n  padding-top: 100%; /* padding-top is based on the width - believe it or not!!! */\n  position: relative;\n  cursor: pointer;\n  .front {\n    background: center / cover url(",');\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    p {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: "Dancing Script", cursive;\n      color: #fff;\n      padding: 20px;\n      width: 50%;\n      height: 50%;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.7);\n      font-weight: 700;\n      font-size: 4rem;\n    }\n    &.open {\n      transform: rotateY(180deg);\n    }\n  }\n  .back {\n    position: absolute;\n    background: center / cover url(',');\n    top: 0px;\n    left: 0px;\n    z-index: 1;\n    transform: rotateY(180deg);\n    p {\n      font-family: "Dancing Script", cursive;\n      color: #fff;\n      padding: 10px;\n      font-size: 1.4rem;\n      text-align: center;\n    }\n    &.open {\n      z-index: 2;\n      transform: rotateY(0deg);\n    }\n  }\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    transition: all 0.5s;\n    transform-style: preserve-3d;\n    border-radius: 20px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n  }\n']);return b=function(){return e},e}var y=g.b.div(b(),(function(e){return e.background}),f.a),j=function(e){var t=e.hatchData,n=t.id,a=t.nr,i=t.text,o=t.img,c=t.open,s=e.handleClick;return r.a.createElement(y,{background:o,onClick:function(){return s(n)}},r.a.createElement("div",{className:c?"front open":"front"},r.a.createElement("p",null,a)),r.a.createElement("div",{className:c?"back open":"back"},r.a.createElement("p",null,i)))};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(){var e=Object(h.a)(['\n  body {\n    background: center / cover url("./img/calendar_backdrop.jpg");\n    margin: 0;\n  }\n']);return x=function(){return e},e}var v=Object(g.a)(x());var k=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){var e=localStorage.calendar?JSON.parse(localStorage.calendar):m();i(e)}),[]),Object(a.useEffect)((function(){n.length&&localStorage.setItem("calendar",JSON.stringify(n))}),[n]);var o=function(e){var t=n.map((function(t){return t.id===e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{open:!t.open}):t}));i(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(d,null,n.map((function(e){return r.a.createElement(j,{key:e.id,hatchData:e,handleClick:o})}))))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.40f1ef65.chunk.js.map