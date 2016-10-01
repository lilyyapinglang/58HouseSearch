/**
*@author qiang.niu(http://www.siptea.cn)
*/
!function(a){"function"==typeof define?define(a):"function"==typeof YUI?YUI.add("es5",a):a()}(function(){function a(a){return a=+a,a!==a?a=0:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a))),a}function b(a){var b=typeof a;return null===a||"undefined"===b||"boolean"===b||"number"===b||"string"===b}function c(a){var c,d,e;if(b(a))return a;if(d=a.valueOf,"function"==typeof d&&(c=d.call(a),b(c)))return c;if(e=a.toString,"function"==typeof e&&(c=e.call(a),b(c)))return c;throw new TypeError}Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError("Function.prototype.bind called on incompatible "+b);var c=l.call(arguments,1),d=function(){if(this instanceof d){var e=b.apply(this,c.concat(l.call(arguments)));return Object(e)===e?e:this}return b.apply(a,c.concat(l.call(arguments)))};return b.prototype&&(d.prototype=Object.create(b.prototype)),d});var d,e,f,g,h,i=Function.prototype.call,j=Array.prototype,k=Object.prototype,l=j.slice,m=i.bind(k.toString),n=i.bind(k.hasOwnProperty);if((h=n(k,"__defineGetter__"))&&(d=i.bind(k.__defineGetter__),e=i.bind(k.__defineSetter__),f=i.bind(k.__lookupGetter__),g=i.bind(k.__lookupSetter__)),2!=[1,2].splice(0).length){var o=Array.prototype.splice;Array.prototype.splice=function(a,b){return arguments.length?o.apply(this,[void 0===a?0:a,void 0===b?this.length-a:b].concat(l.call(arguments,2))):[]}}Array.isArray||(Array.isArray=function(a){return"[object Array]"==m(a)});var p=Object("a"),q="a"!=p[0]||!(0 in p);if(Array.prototype.forEach||(Array.prototype.forEach=function(a){var b=E(this),c=q&&"[object String]"==m(this)?this.split(""):b,d=arguments[1],e=-1,f=c.length>>>0;if("[object Function]"!=m(a))throw new TypeError;for(;++e<f;)e in c&&a.call(d,c[e],e,b)}),Array.prototype.map||(Array.prototype.map=function(a){var b=E(this),c=q&&"[object String]"==m(this)?this.split(""):b,d=c.length>>>0,e=Array(d),f=arguments[1];if("[object Function]"!=m(a))throw new TypeError(a+" is not a function");for(var g=0;d>g;g++)g in c&&(e[g]=a.call(f,c[g],g,b));return e}),Array.prototype.filter||(Array.prototype.filter=function(a){var b,c=E(this),d=q&&"[object String]"==m(this)?this.split(""):c,e=d.length>>>0,f=[],g=arguments[1];if("[object Function]"!=m(a))throw new TypeError(a+" is not a function");for(var h=0;e>h;h++)h in d&&(b=d[h],a.call(g,b,h,c)&&f.push(b));return f}),Array.prototype.every||(Array.prototype.every=function(a){var b=E(this),c=q&&"[object String]"==m(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];if("[object Function]"!=m(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&!a.call(e,c[f],f,b))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(a){var b=E(this),c=q&&"[object String]"==m(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];if("[object Function]"!=m(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&a.call(e,c[f],f,b))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(a){var b=E(this),c=q&&"[object String]"==m(this)?this.split(""):b,d=c.length>>>0;if("[object Function]"!=m(a))throw new TypeError(a+" is not a function");if(!d&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var e,f=0;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f++];break}if(++f>=d)throw new TypeError("reduce of empty array with no initial value")}for(;d>f;f++)f in c&&(e=a.call(void 0,e,c[f],f,b));return e}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(a){var b=E(this),c=q&&"[object String]"==m(this)?this.split(""):b,d=c.length>>>0;if("[object Function]"!=m(a))throw new TypeError(a+" is not a function");if(!d&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var e,f=d-1;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f--];break}if(--f<0)throw new TypeError("reduceRight of empty array with no initial value")}do f in this&&(e=a.call(void 0,e,c[f],f,b));while(f--);return e}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(b){var c=q&&"[object String]"==m(this)?this.split(""):E(this),d=c.length>>>0;if(!d)return-1;var e=0;for(arguments.length>1&&(e=a(arguments[1])),e=e>=0?e:Math.max(0,d+e);d>e;e++)if(e in c&&c[e]===b)return e;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(b){var c=q&&"[object String]"==m(this)?this.split(""):E(this),d=c.length>>>0;if(!d)return-1;var e=d-1;for(arguments.length>1&&(e=Math.min(e,a(arguments[1]))),e=e>=0?e:d-Math.abs(e);e>=0;e--)if(e in c&&b===c[e])return e;return-1}),!Object.keys){var r=!0,s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],t=s.length;for(var u in{toString:null})r=!1;Object.keys=function F(a){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.keys called on a non-object");var F=[];for(var b in a)n(a,b)&&F.push(b);if(r)for(var c=0,d=t;d>c;c++){var e=s[c];n(a,e)&&F.push(e)}return F}}var v=-621987552e5,w="-000001";Date.prototype.toISOString&&-1!==new Date(v).toISOString().indexOf(w)||(Date.prototype.toISOString=function(){var a,b,c,d,e;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(d=this.getUTCFullYear(),e=this.getUTCMonth(),d+=Math.floor(e/12),e=(e%12+12)%12,a=[e+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],d=(0>d?"-":d>9999?"+":"")+("00000"+Math.abs(d)).slice(d>=0&&9999>=d?-4:-6),b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var x=!1;try{x=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(v).toJSON().indexOf(w)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(y){}if(x||(Date.prototype.toJSON=function(){var a,b=Object(this),d=c(b);if("number"==typeof d&&!isFinite(d))return null;if(a=b.toISOString,"function"!=typeof a)throw new TypeError("toISOString property is not callable");return a.call(b)}),Date=function(a){function b(c,d,e,f,g,h,i){var j=arguments.length;if(this instanceof a){var k=1==j&&String(c)===c?new a(b.parse(c)):j>=7?new a(c,d,e,f,g,h,i):j>=6?new a(c,d,e,f,g,h):j>=5?new a(c,d,e,f,g):j>=4?new a(c,d,e,f):j>=3?new a(c,d,e):j>=2?new a(c,d):j>=1?new a(c):new a;return k.constructor=b,k}return a.apply(this,arguments)}function c(a,b){var c=b>1?1:0;return e[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)}var d=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),e=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var f in a)b[f]=a[f];return b.now=a.now,b.UTC=a.UTC,b.prototype=a.prototype,b.prototype.constructor=b,b.parse=function(b){var e=d.exec(b);if(e){var f,g=Number(e[1]),h=Number(e[2]||1)-1,i=Number(e[3]||1)-1,j=Number(e[4]||0),k=Number(e[5]||0),l=Number(e[6]||0),m=Number(e[7]||0),n=!e[4]||e[8]?0:Number(new a(1970,0)),o="-"===e[9]?1:-1,p=Number(e[10]||0),q=Number(e[11]||0);return(k>0||l>0||m>0?24:25)>j&&60>k&&60>l&&1e3>m&&h>-1&&12>h&&24>p&&60>q&&i>-1&&i<c(g,h+1)-c(g,h)&&(f=60*(24*(c(g,h)+i)+j+p*o),f=1e3*(60*(f+k+q*o)+l)+m+n,f>=-864e13&&864e13>=f)?f:0/0}return a.parse.apply(this,arguments)},b}(Date),Date.now||(Date.now=function(){return(new Date).getTime()}),"0".split(void 0,0).length){var z=String.prototype.split;String.prototype.split=function(a,b){return void 0===a&&0===b?[]:z.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var A=String.prototype.substr;String.prototype.substr=function(a,b){return A.call(this,0>a&&(a=this.length+a)<0?0:a,b)}}var B="   \n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||B.trim()){B="["+B+"]";var C=new RegExp("^"+B+B+"*"),D=new RegExp(B+B+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(C,"").replace(D,"")}}var E=function(a){if(null==a)throw new TypeError("can't convert "+a+" to object");return Object(a)}});