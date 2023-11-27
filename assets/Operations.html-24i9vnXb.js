import{_ as d,r as a,o as r,c as n,b as e,e as c,w as s,d as t,a as i}from"./app-MrF-XoWp.js";const h={},l=e("h1",{id:"operations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operations","aria-hidden":"true"},"#"),t(" Operations")],-1),u=e("a",{href:"../actions/MUTATE_VARIABLE"},"MUTATE_VARIABLE",-1),_=e("a",{href:"../actions/MUTATE_VARIABLES"},"MUTATE_VARIABLES",-1),m=e("a",{href:"../actions"},"actions",-1),v=i('<table><thead><tr><th>op</th><th>meaning</th></tr></thead><tbody><tr><td><code>SET</code></td><td>set the variable to that value</td></tr><tr><td><code>ADD</code></td><td>add that value to the variable</td></tr><tr><td><code>SUB</code></td><td>subtract that value from the variable</td></tr><tr><td><code>MUL</code></td><td>multiply that value with the variable</td></tr><tr><td><code>DIV</code></td><td>divide that variable by the value (integer division; rounds down to whole number)</td></tr><tr><td><code>MOD</code></td><td>apply that modulo to the variable (≈ division remainder)</td></tr><tr><td><code>RNG</code></td><td>set that variable to a random number between 0 and 1 + the given value</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Seriously, don&#39;t forget to subtract one when using <code>RNG</code>! If you want a random number between <code>0</code> and <code>9</code>, you want to put <code>RNG 10</code>!)</p></div>',2);function b(p,f){const o=a("RouterLink");return r(),n("div",null,[l,e("p",null,[c(o,{to:"/structure/enums.html"},{default:s(()=>[t("Enums")]),_:1}),t(" used with the "),u,t(" and "),_,t(),m,t(".")]),v])}const w=d(h,[["render",b],["__file","Operations.html.vue"]]);export{w as default};