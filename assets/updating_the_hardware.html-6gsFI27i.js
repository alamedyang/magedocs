import{_ as e,o as a,c as t,a as o}from"./app-j-XjLWpf.js";const n={},s=o(`<h1 id="updating-the-hardware" tabindex="-1"><a class="header-anchor" href="#updating-the-hardware" aria-hidden="true">#</a> Updating the Hardware</h1><p>Steps for updating a physical Black Mage Game badge.</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>The <code>game.dat</code> engine version must match the Mage Game Engine (MGE) being run. If you update the engine without updating the <code>game.dat</code>, for example, the badge will bluescreen.</p></div><h2 id="game-engine" tabindex="-1"><a class="header-anchor" href="#game-engine" aria-hidden="true">#</a> Game Engine</h2><p>Perform this step if you must upgrade the game engine itself. This is necessary if testing new engine features or if you are updating your badge from Chapter 1 to Chapter 2. (If you are testing new scenario data on the same engine version, this step is not necessary.)</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Purple &quot;bootleg&quot; badges do not carry the firmware to update in this way. Instead, you will need to have a JTAG Programmer, and will need to know how to use it. Please contact the DC801 Black Mage Badge game team if you want help updating a purple badge.</p></div><p>To start the game in bootloader mode, hold down the hex digit <code>1</code> button while you power on the hardware. If bootloader mode was successfully triggered, the screen will be white and the LEDs will blink in a circular pattern.</p><p>If the hardware is plugged into a computer while it is in bootloader mode, it will appear as a drive called <code>DC801BOOT</code> or <code>NRF52BOOT</code>. Copy the new game engine UF2 (the filename doesn&#39;t matter) onto the drive.</p><p>Once the UF2 is copied, the drive will disconnect. If the badge does not restart automatically at this point, you may restart it now.</p><h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h3><ul><li>Plug into the badge on the USB-C port. This port is on the front, on the upper right side, near the capacitive button that looks like a hat. Do not use the micro USB port (available on some back plates) as this is for programming the lights.</li><li>If the copy seems to be taking a long time (more than 2 minutes) or appears to suffer from other kinds of I/O problem, try using a different USB-C cable.</li><li>Macs with Apple Silicon may display an error message when the drive unmounts, like <code>The operation can’t be completed because the device disappeared</code> or <code>The Finder can’t complete the operation because some data in “bm_badge.uf2” can’t be read or written. Error code -36</code> You may ignore these.</li></ul><h2 id="game-dat" tabindex="-1"><a class="header-anchor" href="#game-dat" aria-hidden="true">#</a> <code>game.dat</code></h2><p>To install new scenario data on the hardware, prepare a microSD card (FAT32) with a folder called <code>MAGE</code> in the root directory. Copy the new <code>game.dat</code> into <code>MAGE/</code>, then insert the card into the slot on the hardware. (The microSD card slot is on the top of the badge, opposite the USB-C port.)</p><p>If the hardware determines its <code>game.dat</code> is different from the one on the microSD card (or if you hold <code>MEM3</code> when turning on the badge), you will see:</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">The file \`game.dat\` on your SD card does not match</span></span>
<span class="line"><span style="color:#D4D4D4;">what is on your badge ROM chip.</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"> SD hash: [game.dat checksum #1]</span></span>
<span class="line"><span style="color:#D4D4D4;">ROM hash: [game.dat checksum #2]</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">Would you like to update your scenario data?</span></span>
<span class="line"><span style="color:#D4D4D4;">------------------------------------------------</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; Press MEM0 to cancel</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; Press MEM3 to update the ROM</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><p>Press <code>MEM3</code> (the lowest button on the right side of the screen) to tell the hardware to flash the new data. The time it takes to copy will depend on the size of the <code>game.dat</code> file, but it may take a few minutes. (The Chapter 2 <code>game.dat</code>, released August 2024, takes about 90 seconds.)</p><p>The badge should reboot automatically once the write is completed.</p>`,17),i=[s];function r(d,l){return a(),t("div",null,i)}const p=e(n,[["render",r],["__file","updating_the_hardware.html.vue"]]);export{p as default};