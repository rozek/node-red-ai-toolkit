var t,n,e,r,o,i,_,u,l,f={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,a=Array.isArray;function p(t,n){for(var e in n)t[e]=n[e];return t}function h(t){var n=t.parentNode;n&&n.removeChild(t)}function v(n,e,r){var o,i,_,u={};for(_ in e)"key"==_?o=e[_]:"ref"==_?i=e[_]:u[_]=e[_];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(_ in n.defaultProps)void 0===u[_]&&(u[_]=n.defaultProps[_]);return d(n,u,o,i,null)}function d(t,r,o,i,_){var u={type:t,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++e:_};return null==_&&null!=n.vnode&&n.vnode(u),u}function y(){return{current:null}}function m(t){return t.children}function b(t,n){this.props=t,this.context=n}function g(t,n){if(null==n)return t.__?g(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__d||e.__e;return"function"==typeof t.type?g(t):null}function S(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return S(t)}}function k(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!C.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||_)(C)}function C(){var t,n,e,r,i,_,l,f,s;for(o.sort(u);t=o.shift();)t.__d&&(n=o.length,r=void 0,i=void 0,_=void 0,f=(l=(e=t).__v).__e,(s=e.__P)&&(r=[],i=[],(_=p({},l)).__v=l.__v+1,R(s,l,_,e.__n,void 0!==s.ownerSVGElement,null!=l.__h?[f]:null,r,null==f?g(l):f,l.__h,i),T(r,l,i),l.__e!=f&&S(l)),o.length>n&&o.sort(u));C.__r=0}function E(t,n,e,r,o,i,_,u,l,c,p){var h,v,y,b,S,k,C,E,N,P=0,O=r&&r.__k||s,H=O.length,D=H,T=n.length;for(e.__k=[],h=0;h<T;h++)null!=(b=e.__k[h]=null==(b=n[h])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d(null,b,null,null,b):a(b)?d(m,{children:b},null,null,null):b.__b>0?d(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)?(b.__=e,b.__b=e.__b+1,-1===(E=U(b,O,C=h+P,D))?y=f:(y=O[E]||f,O[E]=void 0,D--),R(t,b,y,o,i,_,u,l,c,p),S=b.__e,(v=b.ref)&&y.ref!=v&&(y.ref&&A(y.ref,null,b),p.push(v,b.__c||S,b)),null!=S&&(null==k&&(k=S),(N=y===f||null===y.__v)?-1==E&&P--:E!==C&&(E===C+1?P++:E>C?D>T-C?P+=E-C:P--:P=E<C&&E==C-1?E-C:0),C=h+P,"function"!=typeof b.type||E===C&&y.__k!==b.__k?"function"==typeof b.type||E===C&&!N?void 0!==b.__d?(l=b.__d,b.__d=void 0):l=S.nextSibling:l=w(t,S,l):l=x(b,l,t),"function"==typeof e.type&&(e.__d=l))):(y=O[h])&&null==y.key&&y.__e&&(y.__e==l&&(y.__=r,l=g(y)),L(y,y,!1),O[h]=null);for(e.__e=k,h=H;h--;)null!=O[h]&&("function"==typeof e.type&&null!=O[h].__e&&O[h].__e==e.__d&&(e.__d=O[h].__e.nextSibling),L(O[h],O[h]))}function x(t,n,e){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,n="function"==typeof r.type?x(r,n,e):w(e,r.__e,n));return n}function N(t,n){return n=n||[],null==t||"boolean"==typeof t||(a(t)?t.some(function(t){N(t,n)}):n.push(t)),n}function w(t,n,e){return null==e||e.parentNode!==t?t.insertBefore(n,null):n==e&&null!=n.parentNode||t.insertBefore(n,e),n.nextSibling}function U(t,n,e,r){var o=t.key,i=t.type,_=e-1,u=e+1,l=n[e];if(null===l||l&&o==l.key&&i===l.type)return e;if(r>(null!=l?1:0))for(;_>=0||u<n.length;){if(_>=0){if((l=n[_])&&o==l.key&&i===l.type)return _;_--}if(u<n.length){if((l=n[u])&&o==l.key&&i===l.type)return u;u++}}return-1}function P(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||c.test(n)?e:e+"px"}function O(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||P(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||P(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=Date.now(),t.addEventListener(n,i?D:H,i)):t.removeEventListener(n,i?D:H,i);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function H(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(n.event?n.event(t):t)}function D(t){return this.l[t.type+!0](n.event?n.event(t):t)}function R(t,e,r,o,i,_,u,l,f,s){var c,h,v,d,y,g,S,k,C,x,N,w,U,P,O,H=e.type;if(void 0!==e.constructor)return null;null!=r.__h&&(f=r.__h,l=e.__e=r.__e,e.__h=null,_=[l]),(c=n.__b)&&c(e);t:if("function"==typeof H)try{if(k=e.props,C=(c=H.contextType)&&o[c.__c],x=c?C?C.props.value:c.__:o,r.__c?S=(h=e.__c=r.__c).__=h.__E:("prototype"in H&&H.prototype.render?e.__c=h=new H(k,x):(e.__c=h=new b(k,x),h.constructor=H,h.render=V),C&&C.sub(h),h.props=k,h.state||(h.state={}),h.context=x,h.__n=o,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=p({},h.__s)),p(h.__s,H.getDerivedStateFromProps(k,h.__s))),d=h.props,y=h.state,h.__v=e,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==H.getDerivedStateFromProps&&k!==d&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,x),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,x)||e.__v===r.__v)){for(e.__v!==r.__v&&(h.props=k,h.state=h.__s,h.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(t){t&&(t.__=e)}),N=0;N<h._sb.length;N++)h.__h.push(h._sb[N]);h._sb=[],h.__h.length&&u.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(d,y,g)})}if(h.context=x,h.props=k,h.__P=t,h.__e=!1,w=n.__r,U=0,"prototype"in H&&H.prototype.render){for(h.state=h.__s,h.__d=!1,w&&w(e),c=h.render(h.props,h.state,h.context),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[]}else do{h.__d=!1,w&&w(e),c=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++U<25);h.state=h.__s,null!=h.getChildContext&&(o=p(p({},o),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(d,y)),E(t,a(O=null!=c&&c.type===m&&null==c.key?c.props.children:c)?O:[O],e,r,o,i,_,u,l,f,s),h.base=e.__e,e.__h=null,h.__h.length&&u.push(h),S&&(h.__E=h.__=null)}catch(t){e.__v=null,(f||null!=_)&&(e.__e=l,e.__h=!!f,_[_.indexOf(l)]=null),n.__e(t,e,r)}else null==_&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=$(r.__e,e,r,o,i,_,u,f,s);(c=n.diffed)&&c(e)}function T(t,e,r){for(var o=0;o<r.length;o++)A(r[o],r[++o],r[++o]);n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function $(n,e,r,o,i,_,u,l,s){var c,p,v,d=r.props,y=e.props,m=e.type,b=0;if("svg"===m&&(i=!0),null!=_)for(;b<_.length;b++)if((c=_[b])&&"setAttribute"in c==!!m&&(m?c.localName===m:3===c.nodeType)){n=c,_[b]=null;break}if(null==n){if(null===m)return document.createTextNode(y);n=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,y.is&&y),_=null,l=!1}if(null===m)d===y||l&&n.data===y||(n.data=y);else{if(_=_&&t.call(n.childNodes),p=(d=r.props||f).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,!l){if(null!=_)for(d={},b=0;b<n.attributes.length;b++)d[n.attributes[b].name]=n.attributes[b].value;(v||p)&&(v&&(p&&v.__html==p.__html||v.__html===n.innerHTML)||(n.innerHTML=v&&v.__html||""))}if(function(t,n,e,r,o){var i;for(i in e)"children"===i||"key"===i||i in n||O(t,i,null,e[i],r);for(i in n)o&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||e[i]===n[i]||O(t,i,n[i],e[i],r)}(n,y,d,i,l),v)e.__k=[];else if(E(n,a(b=e.props.children)?b:[b],e,r,o,i&&"foreignObject"!==m,_,u,_?_[0]:r.__k&&g(r,0),l,s),null!=_)for(b=_.length;b--;)null!=_[b]&&h(_[b]);l||("value"in y&&void 0!==(b=y.value)&&(b!==n.value||"progress"===m&&!b||"option"===m&&b!==d.value)&&O(n,"value",b,d.value,!1),"checked"in y&&void 0!==(b=y.checked)&&b!==n.checked&&O(n,"checked",b,d.checked,!1))}return n}function A(t,e,r){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,r)}}function L(t,e,r){var o,i;if(n.unmount&&n.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||A(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){n.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&L(o[i],e,r||"function"!=typeof t.type);r||null==t.__e||h(t.__e),t.__=t.__e=t.__d=void 0}function V(t,n,e){return this.constructor(t,e)}function F(e,r,o){var i,_,u,l;n.__&&n.__(e,r),_=(i="function"==typeof o)?null:o&&o.__k||r.__k,u=[],l=[],R(r,e=(!i&&o||r).__k=v(m,null,[e]),_||f,f,void 0!==r.ownerSVGElement,!i&&o?[o]:_?null:r.firstChild?t.call(r.childNodes):null,u,!i&&o?o:_?_.__e:r.firstChild,i,l),T(u,e,l)}function M(t,n){F(t,n,M)}function W(n,e,r){var o,i,_,u,l=p({},n.props);for(_ in n.type&&n.type.defaultProps&&(u=n.type.defaultProps),e)"key"==_?o=e[_]:"ref"==_?i=e[_]:l[_]=void 0===e[_]&&void 0!==u?u[_]:e[_];return arguments.length>2&&(l.children=arguments.length>3?t.call(arguments,2):r),d(n.type,l,o||n.key,i||n.ref,null)}function I(t,n){var e={__c:n="__cC"+l++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,k(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}t=s.slice,n={__e:function(t,n,e,r){for(var o,i,_;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),_=o.__d),_)return o.__E=o}catch(n){t=n}throw t}},e=0,r=function(t){return null!=t&&void 0===t.constructor},b.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof t&&(t=t(p({},e),this.props)),t&&p(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),k(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),k(this))},b.prototype.render=m,o=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(t,n){return t.__v.__b-n.__v.__b},C.__r=0,l=0;var B,j,z,q,G=0,Y=[],Z=[],J=n.__b,K=n.__r,Q=n.diffed,X=n.__c,tt=n.unmount;function nt(t,e){n.__h&&n.__h(j,t,G||e),G=0;var r=j.__H||(j.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:Z}),r.__[t]}function et(t){return G=1,rt(bt,t)}function rt(t,n,e){var r=nt(B++,2);if(r.t=t,!r.__c&&(r.__=[e?e(n):bt(void 0,n),function(t){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,t);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=j,!j.u)){var o=function(t,n,e){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter(function(t){return t.__c});if(o.every(function(t){return!t.__N}))return!i||i.call(this,t,n,e);var _=!1;return o.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(_=!0)}}),!(!_&&r.__c.props===t)&&(!i||i.call(this,t,n,e))};j.u=!0;var i=j.shouldComponentUpdate,_=j.componentWillUpdate;j.componentWillUpdate=function(t,n,e){if(this.__e){var r=i;i=void 0,o(t,n,e),i=r}_&&_.call(this,t,n,e)},j.shouldComponentUpdate=o}return r.__N||r.__}function ot(t,e){var r=nt(B++,3);!n.__s&&mt(r.__H,e)&&(r.__=t,r.i=e,j.__H.__h.push(r))}function it(t,e){var r=nt(B++,4);!n.__s&&mt(r.__H,e)&&(r.__=t,r.i=e,j.__h.push(r))}function _t(t){return G=5,lt(function(){return{current:t}},[])}function ut(t,n,e){G=6,it(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))}function lt(t,n){var e=nt(B++,7);return mt(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function ft(t,n){return G=8,lt(function(){return t},n)}function st(t){var n=j.context[t.__c],e=nt(B++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(j)),n.props.value):t.__}function ct(t,e){n.useDebugValue&&n.useDebugValue(e?e(t):t)}function at(t){var n=nt(B++,10),e=et();return n.__=t,j.componentDidCatch||(j.componentDidCatch=function(t,r){n.__&&n.__(t,r),e[1](t)}),[e[0],function(){e[1](void 0)}]}function pt(){var t=nt(B++,11);if(!t.__){for(var n=j.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);t.__="P"+e[0]+"-"+e[1]++}return t.__}function ht(){for(var t;t=Y.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(dt),t.__H.__h.forEach(yt),t.__H.__h=[]}catch(e){t.__H.__h=[],n.__e(e,t.__v)}}n.__b=function(t){j=null,J&&J(t)},n.__r=function(t){K&&K(t),B=0;var n=(j=t.__c).__H;n&&(z===j?(n.__h=[],j.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Z,t.__N=t.i=void 0})):(n.__h.forEach(dt),n.__h.forEach(yt),n.__h=[],B=0)),z=j},n.diffed=function(t){Q&&Q(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==Y.push(e)&&q===n.requestAnimationFrame||((q=n.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),vt&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);vt&&(n=requestAnimationFrame(e))})(ht)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Z&&(t.__=t.__V),t.i=void 0,t.__V=Z})),z=j=null},n.__c=function(t,e){e.some(function(t){try{t.__h.forEach(dt),t.__h=t.__h.filter(function(t){return!t.__||yt(t)})}catch(r){e.some(function(t){t.__h&&(t.__h=[])}),e=[],n.__e(r,t.__v)}}),X&&X(t,e)},n.unmount=function(t){tt&&tt(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(t){try{dt(t)}catch(t){e=t}}),r.__H=void 0,e&&n.__e(e,r.__v))};var vt="function"==typeof requestAnimationFrame;function dt(t){var n=j,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),j=n}function yt(t){var n=j;t.__c=t.__(),j=n}function mt(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function bt(t,n){return"function"==typeof n?n(t):n}function gt(){throw new Error("Cycle detected")}function St(){if(Pt>1)Pt--;else{for(var t,n=!1;void 0!==Ut;){var e=Ut;for(Ut=void 0,Ot++;void 0!==e;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&$t(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=r}}if(Ot=0,Pt--,n)throw t}}function kt(t){if(Pt>0)return t();Pt++;try{return t()}finally{St()}}var Ct=void 0,Et=0;function xt(t){if(Et>0)return t();var n=Ct;Ct=void 0,Et++;try{return t()}finally{Et--,Ct=n}}var Nt,wt,Ut=void 0,Pt=0,Ot=0,Ht=0;function Dt(t){if(void 0!==Ct){var n=t.n;if(void 0===n||n.t!==Ct)return n={i:0,S:t,p:Ct.s,n:void 0,t:Ct,e:void 0,x:void 0,r:n},void 0!==Ct.s&&(Ct.s.n=n),Ct.s=n,t.n=n,32&Ct.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=Ct.s,n.n=void 0,Ct.s.n=n,Ct.s=n),n}}function Rt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Tt(t){return new Rt(t)}function $t(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function At(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Lt(t){for(var n=t.s,e=void 0;void 0!==n;){var r=n.p;-1===n.i?(n.S.U(n),void 0!==r&&(r.n=n.n),void 0!==n.n&&(n.n.p=r)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=r}t.s=e}function Vt(t){Rt.call(this,void 0),this.x=t,this.s=void 0,this.g=Ht-1,this.f=4}function Ft(t){return new Vt(t)}function Mt(t){var n=t.u;if(t.u=void 0,"function"==typeof n){Pt++;var e=Ct;Ct=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Wt(t),n}finally{Ct=e,St()}}}function Wt(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,Mt(t)}function It(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function Bt(t){var n=new It(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function jt(t,e){n[t]=e.bind(null,n[t]||function(){})}function zt(t){wt&&wt(),wt=t&&t.S()}function qt(t){var n=this,e=t.data,o=Yt(e);o.value=e;var i=lt(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;r(i.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=i.peek()},Ft(function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""})},[]);return i.value}function Gt(t,n,e,r){var o=n in t&&void 0===t.ownerSVGElement,i=Tt(e);return{o:function(t,n){i.value=t,r=n},d:Bt(function(){var e=i.value.value;r[n]!==e&&(r[n]=e,o?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Yt(t){return lt(function(){return Tt(t)},[])}function Zt(t){var n=_t(t);return n.current=t,Nt.__$f|=4,lt(function(){return Ft(function(){return n.current()})},[])}function Jt(t){var n=_t(t);n.current=t,ot(function(){return Bt(function(){return n.current()})},[])}function Kt(t,n){for(var e in n)t[e]=n[e];return t}function Qt(t,n){for(var e in t)if("__source"!==e&&!(e in n))return!0;for(var r in n)if("__source"!==r&&t[r]!==n[r])return!0;return!1}function Xt(t,n){return t===n&&(0!==t||1/t==1/n)||t!=t&&n!=n}function tn(t){this.props=t}function nn(t,n){function e(t){var e=this.props.ref,r=e==t.ref;return!r&&e&&(e.call?e(null):e.current=null),n?!n(this.props,t)||!r:Qt(this.props,t)}function r(n){return this.shouldComponentUpdate=e,v(t,n)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}Rt.prototype.h=function(){return!0},Rt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Rt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},Rt.prototype.subscribe=function(t){var n=this;return Bt(function(){var e=n.value,r=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=r}})},Rt.prototype.valueOf=function(){return this.value},Rt.prototype.toString=function(){return this.value+""},Rt.prototype.toJSON=function(){return this.value},Rt.prototype.peek=function(){return this.v},Object.defineProperty(Rt.prototype,"value",{get:function(){var t=Dt(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(Ct instanceof Vt&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){Ot>100&&gt(),this.v=t,this.i++,Ht++,Pt++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{St()}}}}),(Vt.prototype=new Rt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Ht)return!0;if(this.g=Ht,this.f|=1,this.i>0&&!$t(this))return this.f&=-2,!0;var t=Ct;try{At(this),Ct=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Ct=t,Lt(this),this.f&=-2,!0},Vt.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}Rt.prototype.S.call(this,t)},Vt.prototype.U=function(t){if(void 0!==this.t&&(Rt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Vt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Vt.prototype.peek=function(){if(this.h()||gt(),16&this.f)throw this.v;return this.v},Object.defineProperty(Vt.prototype,"value",{get:function(){1&this.f&&gt();var t=Dt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),It.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},It.prototype.S=function(){1&this.f&&gt(),this.f|=1,this.f&=-9,Mt(this),At(this),Pt++;var t=Ct;return Ct=this,function(t){if(Ct!==this)throw new Error("Out-of-order effect");Lt(this),Ct=t,this.f&=-2,8&this.f&&Wt(this),St()}.bind(this,t)},It.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ut,Ut=this)},It.prototype.d=function(){this.f|=8,1&this.f||Wt(this)},qt.displayName="_st",Object.defineProperties(Rt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:qt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),jt("__b",function(t,n){if("string"==typeof n.type){var e,r=n.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof Rt&&(e||(n.__np=e={}),e[o]=i,r[o]=i.peek())}}t(n)}),jt("__r",function(t,n){zt();var e,r=n.__c;r&&(r.__$f&=-2,void 0===(e=r.__$u)&&(r.__$u=e=function(t){var n;return Bt(function(){n=this}),n.c=function(){r.__$f|=1,r.setState({})},n}())),Nt=r,zt(e),t(n)}),jt("__e",function(t,n,e,r){zt(),Nt=void 0,t(n,e,r)}),jt("diffed",function(t,n){var e;if(zt(),Nt=void 0,"string"==typeof n.type&&(e=n.__e)){var r=n.__np,o=n.props;if(r){var i=e.U;if(i)for(var _ in i){var u=i[_];void 0===u||_ in r||(u.d(),i[_]=void 0)}else e.U=i={};for(var l in r){var f=i[l],s=r[l];void 0===f?(f=Gt(e,l,s,o),i[l]=f):f.o(s,o)}}}t(n)}),jt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var r=e.U;if(r)for(var o in e.U=void 0,r){var i=r[o];i&&i.d()}}}else{var _=n.__c;if(_){var u=_.__$u;u&&(_.__$u=void 0,u.d())}}t(n)}),jt("__h",function(t,n,e,r){(r<3||9===r)&&(n.__$f|=2),t(n,e,r)}),b.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in n)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1},(tn.prototype=new b).isPureReactComponent=!0,tn.prototype.shouldComponentUpdate=function(t,n){return Qt(this.props,t)||Qt(this.state,n)};var en=n.__b;n.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),en&&en(t)};var rn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function on(t){function n(n){var e=Kt({},n);return delete e.ref,t(e,n.ref||null)}return n.$$typeof=rn,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(t.displayName||t.name)+")",n}var _n=function(t,n){return null==t?null:N(N(t).map(n))},un={map:_n,forEach:_n,count:function(t){return t?N(t).length:0},only:function(t){var n=N(t);if(1!==n.length)throw"Children.only";return n[0]},toArray:N},ln=n.__e;n.__e=function(t,n,e,r){if(t.then)for(var o,i=n;i=i.__;)if((o=i.__c)&&o.__c)return null==n.__e&&(n.__e=e.__e,n.__k=e.__k),o.__c(t,n);ln(t,n,e,r)};var fn=n.unmount;function sn(){this.__u=0,this.t=null,this.__b=null}function cn(t){var n=t.__.__c;return n&&n.__a&&n.__a(t)}function an(t){var n,e,r;function o(o){if(n||(n=t()).then(function(t){e=t.default||t},function(t){r=t}),r)throw r;if(!e)throw n;return v(e,o)}return o.displayName="Lazy",o.__f=!0,o}function pn(){this.u=null,this.o=null}n.unmount=function(t){var n=t.__c;n&&n.__R&&n.__R(),n&&!0===t.__h&&(t.type=null),fn&&fn(t)},(sn.prototype=new b).__c=function(t,n){var e=n.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var o=cn(r.__v),i=!1,_=function(){i||(i=!0,e.__R=null,o?o(u):u())};e.__R=_;var u=function(){if(!--r.__u){if(r.state.__a){var t=r.state.__a;r.__v.__k[0]=function t(n,e,r){return n&&r&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return t(n,e,r)}),n.__c&&n.__c.__P===e&&(n.__e&&r.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=r)),n}(t,t.__c.__P,t.__c.__O)}var n;for(r.setState({__a:r.__b=null});n=r.t.pop();)n.forceUpdate()}},l=!0===n.__h;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(_,_)},sn.prototype.componentWillUnmount=function(){this.t=[]},sn.prototype.render=function(t,n){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(n,e,r){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(t){"function"==typeof t.__c&&t.__c()}),n.__c.__H=null),null!=(n=Kt({},n)).__c&&(n.__c.__P===r&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return t(n,e,r)})),n}(this.__b,e,r.__O=r.__P)}this.__b=null}var o=n.__a&&v(m,null,t.fallback);return o&&(o.__h=null),[v(m,null,n.__a?null:t.children),o]};var hn=function(t,n,e){if(++e[1]===e[0]&&t.o.delete(n),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(e=t.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;t.u=e=e[2]}};function vn(t){return this.getChildContext=function(){return t.context},t.children}function dn(t){var n=this,e=t.i;n.componentWillUnmount=function(){F(null,n.l),n.l=null,n.i=null},n.i&&n.i!==e&&n.componentWillUnmount(),n.l||(n.i=e,n.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(t){this.childNodes.push(t),n.i.appendChild(t)},insertBefore:function(t,e){this.childNodes.push(t),n.i.appendChild(t)},removeChild:function(t){this.childNodes.splice(this.childNodes.indexOf(t)>>>1,1),n.i.removeChild(t)}}),F(v(vn,{context:n.context},t.__v),n.l)}function yn(t,n){var e=v(dn,{__v:t,i:n});return e.containerInfo=n,e}(pn.prototype=new b).__a=function(t){var n=this,e=cn(n.__v),r=n.o.get(t);return r[0]++,function(o){var i=function(){n.props.revealOrder?(r.push(o),hn(n,t,r)):o()};e?e(i):i()}},pn.prototype.render=function(t){this.u=null,this.o=new Map;var n=N(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&n.reverse();for(var e=n.length;e--;)this.o.set(n[e],this.u=[1,0,this.u]);return t.children},pn.prototype.componentDidUpdate=pn.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(n,e){hn(t,e,n)})};var mn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,bn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Sn=/[A-Z0-9]/g,kn="undefined"!=typeof document,Cn=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(t)};b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var En=n.event;function xn(){}function Nn(){return this.cancelBubble}function wn(){return this.defaultPrevented}n.event=function(t){return En&&(t=En(t)),t.persist=xn,t.isPropagationStopped=Nn,t.isDefaultPrevented=wn,t.nativeEvent=t};var Un,Pn={enumerable:!1,configurable:!0,get:function(){return this.class}},On=n.vnode;n.vnode=function(t){"string"==typeof t.type&&function(t){var n=t.props,e=t.type,r={};for(var o in n){var i=n[o];if(!("value"===o&&"defaultValue"in n&&null==i||kn&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var _=o.toLowerCase();"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===_?o="ondblclick":"onchange"!==_||"input"!==e&&"textarea"!==e||Cn(n.type)?"onfocus"===_?o="onfocusin":"onblur"===_?o="onfocusout":gn.test(o)?o=_:-1===e.indexOf("-")&&bn.test(o)?o=o.replace(Sn,"-$&").toLowerCase():null===i&&(i=void 0):_=o="oninput","oninput"===_&&r[o=_]&&(o="oninputCapture"),r[o]=i}}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=N(n.children).forEach(function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)})),"select"==e&&null!=r.defaultValue&&(r.value=N(n.children).forEach(function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",Pn)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(t),t.$$typeof=mn,On&&On(t)};var Hn=n.__r;n.__r=function(t){Hn&&Hn(t),Un=t.__c};var Dn=n.diffed;n.diffed=function(t){Dn&&Dn(t);var n=t.props,e=t.__e;null!=e&&"textarea"===t.type&&"value"in n&&n.value!==e.value&&(e.value=null==n.value?"":n.value),Un=null};var Rn={ReactCurrentDispatcher:{current:{readContext:function(t){return Un.__n[t.__c].props.value}}}},Tn="17.0.2";function $n(t){return v.bind(null,t)}function An(t){return!!t&&t.$$typeof===mn}function Ln(t){return An(t)&&t.type===m}function Vn(t){return!!t.__k&&(F(null,t),!0)}function Fn(t){return t&&(t.base||1===t.nodeType&&t)||null}var Mn=function(t,n){return t(n)},Wn=function(t,n){return t(n)},In=m;function Bn(t){t()}function jn(t){return t}function zn(){return[!1,Bn]}var qn=it,Gn=An;function Yn(t,n){var e=n(),r=et({h:{__:e,v:n}}),o=r[0].h,i=r[1];return it(function(){o.__=e,o.v=n,Xt(o.__,n())||i({h:o})},[t,e,n]),ot(function(){return Xt(o.__,o.v())||i({h:o}),t(function(){Xt(o.__,o.v())||i({h:o})})},[t]),e}var Zn={useState:et,useId:pt,useReducer:rt,useEffect:ot,useLayoutEffect:it,useInsertionEffect:qn,useTransition:zn,useDeferredValue:jn,useSyncExternalStore:Yn,startTransition:Bn,useRef:_t,useImperativeHandle:ut,useMemo:lt,useCallback:ft,useContext:st,useDebugValue:ct,version:"17.0.2",Children:un,render:function(t,n,e){return null==n.__k&&(n.textContent=""),F(t,n),"function"==typeof e&&e(),t?t.__c:null},hydrate:function(t,n,e){return M(t,n),"function"==typeof e&&e(),t?t.__c:null},unmountComponentAtNode:Vn,createPortal:yn,createElement:v,createContext:I,createFactory:$n,cloneElement:function(t){return An(t)?W.apply(null,arguments):t},createRef:y,Fragment:m,isValidElement:An,isElement:Gn,isFragment:Ln,findDOMNode:Fn,Component:b,PureComponent:tn,memo:nn,forwardRef:on,flushSync:Wn,unstable_batchedUpdates:Mn,StrictMode:In,Suspense:sn,SuspenseList:pn,lazy:an,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Rn},Jn=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var _=n[i++],u=n[i]?(n[0]|=_?1:2,e[n[i++]]):n[++i];3===_?r[0]=u:4===_?r[1]=Object.assign(r[1]||{},u):5===_?(r[1]=r[1]||{})[n[++i]]=u:6===_?r[1][n[++i]]+=u+"":_?(o=t.apply(u,Jn(t,u,e,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},Kn=new Map,Qn=function(t){var n=Kn.get(this);return n||(n=new Map,Kn.set(this,n)),(n=Jn(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,r=1,o="",i="",_=[0],u=function(t){1===r&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,t,o):3===r&&(t||o)?(_.push(3,t,o),r=2):2===r&&"..."===o&&t?_.push(4,t,0):2===r&&o&&!t?_.push(5,0,!0,o):r>=5&&((o||!t&&5===r)&&(_.push(r,0,o,e),r=6),t&&(_.push(r,t,0,e),r=6)),o=""},l=0;l<t.length;l++){l&&(1===r&&u(),u(l));for(var f=0;f<t[l].length;f++)n=t[l][f],1===r?"<"===n?(u(),_=[_],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,e=o,o=""):"/"===n&&(r<5||">"===t[l][f+1])?(u(),3===r&&(_=_[0]),r=_,(_=_[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,_=_[0])}return u(),_}(t)),n),arguments,[])).length>1?n:n[0]}.bind(v);export default Zn;export{Qn as html,v as h,v as createElement,W as cloneElement,b as Component,I as createContext,y as createRef,F as render,M as hydrate,N as toChildArray,et as useState,rt as useReducer,ot as useEffect,it as useLayoutEffect,_t as useRef,ut as useImperativeHandle,lt as useMemo,ft as useCallback,st as useContext,ct as useDebugValue,at as useErrorBoundary,pt as useId,xt as untracked,Yt as useSignal,Zt as useComputed,Jt as useSignalEffect,Rt as Signal,kt as batch,Ft as computed,Bt as effect,Tt as signal,un as Children,tn as PureComponent,In as StrictMode,sn as Suspense,pn as SuspenseList,Rn as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$n as createFactory,yn as createPortal,Fn as findDOMNode,Wn as flushSync,on as forwardRef,Gn as isElement,Ln as isFragment,An as isValidElement,an as lazy,nn as memo,Bn as startTransition,Vn as unmountComponentAtNode,Mn as unstable_batchedUpdates,jn as useDeferredValue,qn as useInsertionEffect,Yn as useSyncExternalStore,zn as useTransition,Tn as version,m as Fragment};
//# sourceMappingURL=preact-with-htm.esm.js.map
