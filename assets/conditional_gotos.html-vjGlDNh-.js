import{_ as e,o as t,c as o,a as i}from"./app-oGoBbKgC.js";const a={},s=i('<h1 id="conditional-gotos" tabindex="-1"><a class="header-anchor" href="#conditional-gotos" aria-hidden="true">#</a> Conditional Gotos</h1><p>Consists of actions from the check <a href="../entities/entity_properties">entity properties</a> and check <a href="../scripts/variable_types">variables</a> categories. The &quot;conditions&quot; portion of each <a href="../actions">action</a> can be inserted into any of the following patterns:</p><ol><li><a href="../mgs/advanced_syntax/if_and_else">If and else</a>: <code>if (</code> ... <code>) { }</code><ul><li>NOTE: This expands to the <a href="../mgs/advanced_syntax/labels">label</a> jump pattern automatically.</li></ul></li><li><a href="../scripts">Script</a> jump version: <code>if</code> ... <code>then goto (script) $success_script:string</code></li><li>Label jump version: <code>if</code> ... <code>then goto label $success_script:string</code><ul><li>This pattern is to be used with bareword <a href="../mgs/advanced_syntax/labels">labels</a>.</li></ul></li><li>Index jump version: <code>if</code> ... <code>then goto index $success_script:number</code><ul><li>Refers to the target <a href="../actions">action</a> by the absolute index within the script.</li><li>This is not recommended for scripts written by hand, as <a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a> and automatic syntax expansion may result in an unexpected number of actions in your scripts.</li></ul></li></ol>',3),n=[s];function c(r,l){return t(),o("div",null,n)}const h=e(a,[["render",c],["__file","conditional_gotos.html.vue"]]);export{h as default};
