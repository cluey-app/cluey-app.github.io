/* Cluey 사이트 움직임. 모든 쪽이 defer 로 부른다.
   - <head> 의 한 줄 스크립트가 <html> 에 .mo 를 붙인다. 이 파일이 안 돌면 3초 뒤 떼서 전부 보이게 한다.
   - 스크롤하면 나타나기, 카드 위 빛, 머리말 밑줄, 첫 화면 차례 (index.html 만) */
(function () {
  'use strict';
  var root = document.documentElement;
  window.clueyMotion = true;
  if (!root.classList.contains('mo')) root.classList.add('mo');
  var still = /[?&]still=1/.test(location.search);  /* 사진 찍기용: 움직임 없이 끝 모습 */
  if (still) root.classList.add('still');
  var reduce = still || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var slow = +(new URLSearchParams(location.search).get('slow') || 1) || 1;  /* 사진 찍기용: 시간을 느리게 */

  /* 머리말: 내려가면 밑줄 */
  var head = document.querySelector('.site-head');
  function onScroll() { if (head) head.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* 카드 위 빛이 마우스를 따라간다 */
  Array.prototype.forEach.call(document.querySelectorAll('a.card'), function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* 스크롤하면 나타난다. 처음 화면에 이미 보이는 것은 숨기지 않는다 (깜빡임 방지) */
  var sel = 'main .sec .head, main .sec .lead, main a.card, main div.card, main .shotfig, main .fact, main .news, main .tips > li, main .faq details, main .faq h2, main .tablebox, main .install-help, main .callout, main .related, main #safe .grid2 > div:first-child';
  var els = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
    return !el.closest('svg') && !el.closest('.rv');
  });
  if (!reduce && 'IntersectionObserver' in window) {
    var vh = window.innerHeight || 800;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    var lastParent = null, n = 0;
    els.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) return;
      if (el.parentNode === lastParent) n++; else { lastParent = el.parentNode; n = 0; }
      el.style.setProperty('--i', Math.min(n, 5));
      el.classList.add('rv');
      io.observe(el);
    });
  }

  /* 첫 화면 (index.html 만): 앱 화면이 누워 있다가 일어서고, 떠 있는 조각이 움직인다 */
  var shot = document.getElementById('shot');
  if (!shot) return;
  var q = document.getElementById('q'), qn = document.getElementById('qn'), t1 = document.getElementById('t1');
  var word = '스키장';
  function done() {
    if (q) q.innerHTML = '<mark>' + word + '</mark> 숙소';
    if (qn) qn.textContent = '2건';
    if (t1) { t1.classList.add('done'); t1.querySelector('.cb').classList.add('on'); }
  }
  if (reduce) { shot.style.setProperty('--op', 1); done(); return; }

  if (q) q.textContent = ''; if (qn) qn.textContent = '';  /* 자바스크립트가 없을 때 보이던 끝 모습을 비우고 다시 친다 */
  var base = 0, flat = window.matchMedia('(max-width: 760px)').matches;
  function tilt() {
    var k = Math.min(1, base + window.scrollY / 420);
    shot.style.setProperty('--tilt', (24 * (1 - k)) + 'deg');
    shot.style.setProperty('--lift', (40 * (1 - k)) + 'px');
    shot.style.setProperty('--sc', (0.94 + 0.06 * k).toFixed(3));
  }
  var top = flat ? 1 : 0.55;  /* 좁은 화면은 끝까지 세운다 */
  setTimeout(function () {
    var t0 = performance.now();
    (function rise(t) {
      var p = Math.min(1, (t - t0) / (1800 * slow));
      shot.style.setProperty('--op', Math.min(1, p * 2.5).toFixed(3));
      base = p * top;
      tilt();
      if (base < top) requestAnimationFrame(rise);
    })(t0);
  }, 1700 * slow);
  window.addEventListener('scroll', tilt, { passive: true });

  /* 떠 있는 찾기 칸에 글자가 쳐지고, 할 일에 체크가 그려진다 */
  setTimeout(function () {
    if (t1) { t1.classList.add('done'); t1.querySelector('.cb').classList.add('on'); }
  }, 3500 * slow);
  setTimeout(function () {
    var i = 0;
    var iv = setInterval(function () {
      i++;
      q.textContent = word.slice(0, i);
      if (i >= word.length) { clearInterval(iv); done(); }
    }, 220 * slow);
  }, 3900 * slow);
})();
