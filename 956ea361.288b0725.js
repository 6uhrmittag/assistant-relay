/*! For license information please see 956ea361.288b0725.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=(n(0),n(159)),o=n(164),s=n(163);const c={id:"custom-commands",title:"Custom Commands",description:"Sending custom commands with Assistant Relay"},i={id:"commands/custom-commands",title:"Custom Commands",description:"Sending custom commands with Assistant Relay",source:"@site/..\\docs\\commands\\custom.mdx",permalink:"/assistant-relay/docs/commands/custom-commands",editUrl:"https://github.com/greghesp/assistant-relay/../docs/commands/custom.mdx",sidebar:"docs",previous:{title:"Preset Broadcasts",permalink:"/assistant-relay/docs/commands/presets"},next:{title:"Search for cast devices",permalink:"/assistant-relay/docs/cast/search"}},l=[{value:"Sending a custom command",id:"sending-a-custom-command",children:[{value:"Restrictions",id:"restrictions",children:[]}]},{value:"Casting back audio responses",id:"casting-back-audio-responses",children:[]}],u={rightToc:l};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Assistant Relay lets you send any command to Google Assistant that would normally follow the ",Object(r.b)("inlineCode",{parentName:"p"},"OK Google")," commmand."),Object(r.b)("h2",{id:"sending-a-custom-command"},"Sending a custom command"),Object(r.b)("p",null,"To send a custom command, simply send a HTTP POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"/assistant")," with the following json-encoded body parameter:"),Object(r.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "command": "tell me a joke",\n    "converse": true, // Or false if you don\'t want the response broadcasted\n    "user": "greg" // Match the name of the users you setup\n}\n'))),Object(r.b)(s.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"command: STRING\nconverse: BOOLEAN\nuser: STRING\n"))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "success": true, // Or false\n    "response": "Why did the chicken cross the road?  To get to the other side", // Contains the text response from Google Assistant if applicable\n    "audio": "/server/audio?v=1581510182698", // A URL to the audio response from Google Assistant\n    "error": "Error Message" // Only shown if success if false\n}\n')))),Object(r.b)("p",null,"Once executed, Assistant Relay will then broadcast the response to your Google Home devices."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"}," ",Object(r.b)("strong",{parentName:"p"},"Note"),": If you do not want Assistant Relay to broadcast the response, set the ",Object(r.b)("inlineCode",{parentName:"p"},"converse")," parameter to false")),Object(r.b)("h3",{id:"restrictions"},"Restrictions"),Object(r.b)("p",null,"As Assistant Relay uses the Google Assistant Service, there are some restrictions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Google does not allow media commands to work, so sending a command such as ",Object(r.b)("inlineCode",{parentName:"li"},"Play John Mayer in the Office")," will not work")),Object(r.b)("h2",{id:"casting-back-audio-responses"},"Casting back audio responses"),Object(r.b)("p",null,"Assistant Relay now supports Casting (in v3.3.0b and above).\nIn the above custom command example, the response is populated with an audio field."),Object(r.b)("p",null,"It is possible to pass this URL back to the ",Object(r.b)("inlineCode",{parentName:"p"},"/cast")," endpoint for it to play as per the following json-encoded body parameter:"),Object(r.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "Office Hub",\n    "source": "http://192.168.1.174:3000/server/audio?v=1581510182698",\n    "type": "remote"\n}\n'))),Object(r.b)(s.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// No response.....yet\n")))),Object(r.b)("p",null,"For more information, please see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../cast/casting"}),"Casting Media")))}b.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},160:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},162:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},164:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),o=n(162);var s=function(){return Object(a.useContext)(o.a)},c=n(160),i=n.n(c),l=n(126),u=n.n(l),b=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,l=e.groupId,m=s(),d=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(o),j=O[0],h=O[1];if(null!=l){var y=d[l];null!=y&&y!==j&&h(y)}var v=function(e){h(e),null!=l&&f(l,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:i()("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}}}]);