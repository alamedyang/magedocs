import{_ as s,o as a,c as n,a as e}from"./app-j-XjLWpf.js";const l={},t=e(`<h1 id="register-serial-dialog-command" tabindex="-1"><a class="header-anchor" href="#register-serial-dialog-command" aria-hidden="true">#</a> REGISTER_SERIAL_DIALOG_COMMAND</h1><p>Once a command is registered, the player can enter the command into the serial console and the corresponding script will run in a unique serial script slot.</p><ul><li><strong>Plain variant</strong>: registers the command in general and identifies the script to run when the command is typed without any additional arguments. This variant must be used before <em>any</em> arguments can be registered (including <code>fail</code>).</li><li><strong>Fail variant</strong>: identifies a script for custom &quot;unknown argument&quot; behavior (in the event the player attempts to use an unregistered argument for this command).</li></ul><p>Commands must be a single word.</p><p>The HELP command lists all currently-registered commands. To hide a command from this list, use <a href="#set_serial_command_visibility">SET_SERIAL_DIALOG_COMMAND_VISIBILITY</a>.</p><p>You can set an alias for a command with <a href="#register_serial_command_alias">REGISTER_SERIAL_DIALOG_COMMAND_ALIAS</a>, and unset it with <a href="#unregister_serial_command_alias">UNREGISTER_SERIAL_DIALOG_COMMAND_ALIAS</a>. (Note: Alias are always unlisted in the HELP list.)</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;REGISTER_SERIAL_DIALOG_COMMAND&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;command&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;map&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;is_fail&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;scriptName&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">register</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">map</span><span style="color:#D4D4D4;"> -&gt;</span><span style="color:#DCDCAA;"> scriptName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">register</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">map</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">fail</span><span style="color:#D4D4D4;"> -&gt;</span><span style="color:#DCDCAA;"> scriptName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entries" tabindex="-1"><a class="header-anchor" href="#dictionary-entries" aria-hidden="true">#</a> Dictionary entries</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">register $command:string -&gt; (script) $script:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: is_fail = false</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">register $command:string fail -&gt; (script) $script:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: is_fail = true</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,13),o=[t];function r(p,i){return a(),n("div",null,o)}const D=s(l,[["render",r],["__file","REGISTER_SERIAL_DIALOG_COMMAND.html.vue"]]);export{D as default};