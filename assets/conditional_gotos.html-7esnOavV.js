import{_ as i,r as s,o as a,c as n,b as t,d as e,e as c,w as r,a as l}from"./app-MrF-XoWp.js";const d={},h=t("h1",{id:"conditional-gotos",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#conditional-gotos","aria-hidden":"true"},"#"),e(" Conditional Gotos")],-1),_=t("a",{href:"../entities/entity_properties"},"entity properties",-1),p=t("a",{href:"../actions"},"action",-1),u=l('<ol><li><a href="../mgs/advanced_syntax#if-and-else">If and else</a>: <code>if (</code> ... <code>) { }</code><ul><li>NOTE: This expands to the <a href="../mgs/advanced_syntax#labels">label</a> jump pattern automatically.</li></ul></li><li><a href="../scripts">Script</a> jump version: <code>if</code> ... <code>then goto (script) $success_script:string</code></li><li>Label jump version: <code>if</code> ... <code>then goto label $success_script:string</code><ul><li>This pattern is to be used with bareword <a href="../mgs/advanced_syntax#labels">labels</a>.</li></ul></li><li>Index jump version: <code>if</code> ... <code>then goto index $success_script:number</code><ul><li>Refers to the target <a href="../actions">action</a> by the absolute index within the script.</li><li>This is not recommended for scripts written by hand, as <a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a> and automatic syntax expansion may result in an unexpected number of actions in your scripts.</li></ul></li></ol>',1);function f(m,b){const o=s("RouterLink");return a(),n("div",null,[h,t("p",null,[e("Consists of actions from the check "),_,e(" and check "),c(o,{to:"/scripts/variables.html"},{default:r(()=>[e("variables")]),_:1}),e(' categories. The "conditions" portion of each '),p,e(" can be inserted into any of the following patterns:")]),u])}const g=i(d,[["render",f],["__file","conditional_gotos.html.vue"]]);export{g as default};