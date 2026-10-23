/* Opendots · Aurora depth background (J), with your tuned Tweaks baked in.
   Drop-in: <script src="aurora-background.js" defer></script> before </body>.
   Needs a transparent <body> background (set the page colour on <html> instead). */
(function () {
  var css = ''
    + ':root{--au-a:rgba(139,108,176,.456);--au-b:rgba(244,185,66,.509);--au-c:rgba(124,92,166,.348);--au-m:rgba(253,217,138,.469);--au-blur:100px}'
    + '.od-aurora{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:radial-gradient(900px 620px at 50% -10%,rgba(179,154,214,.20),transparent 70%)}'
    + '.od-aurora .L{position:absolute;left:0;top:0;width:100%;height:100%;will-change:transform}'
    + '.od-aurora i{position:absolute;display:block;border-radius:50%;filter:blur(var(--au-blur))}'
    + '.od-aurora .pa-3 i{filter:blur(calc(var(--au-blur) * .7))}'
    + '.od-aurora .ca{background:var(--au-a)}.od-aurora .cb{background:var(--au-b)}.od-aurora .cc{background:var(--au-c)}.od-aurora .cm{background:var(--au-m)}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var bg = document.createElement('div'); bg.className = 'od-aurora'; bg.setAttribute('aria-hidden', 'true');
  bg.innerHTML = ''
    + '<div class="L pa-1" data-speed=".08"><i class="ca" style="left:0%;top:0%;width:60vw;height:60vw"></i><i class="cb" style="left:55%;top:30%;width:55vw;height:55vw"></i></div>'
    + '<div class="L pa-2" data-speed=".28"><i class="cm" style="left:40%;top:10%;width:36vw;height:36vw"></i><i class="cb" style="left:-6%;top:58%;width:44vw;height:44vw"></i></div>'
    + '<div class="L pa-3" data-speed=".55"><i class="cm" style="left:78%;top:20%;width:22vw;height:22vw"></i><i class="cc" style="left:24%;top:82%;width:24vw;height:24vw"></i><i class="cm" style="left:4%;top:46%;width:16vw;height:16vw"></i></div>';
  document.body.prepend(bg);

  var layers = [].slice.call(bg.querySelectorAll('.L')), raf = 0,
      still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size() {
    var maxS = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    layers.forEach(function (l) { l.style.height = (innerHeight + maxS * parseFloat(l.dataset.speed)) + 'px'; });
  }
  function tick() {
    raf = 0; var y = still ? 0 : scrollY;
    layers.forEach(function (l) { l.style.transform = 'translate3d(0,' + (-y * parseFloat(l.dataset.speed)).toFixed(1) + 'px,0)'; });
  }
  function req() { if (!raf) raf = requestAnimationFrame(tick); }
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', function () { size(); req(); });
  addEventListener('load', function () { size(); req(); });
  size(); req();
})();
