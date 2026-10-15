(function () {
  "use strict";

  const STORAGE_KEY = "cc-study-progress";

  // 단원을 한 줄 목록으로 펼치고, 부품별로 묶어 둡니다.
  const LESSONS = [];
  COURSE.forEach(function (group) {
    group.lessons.forEach(function (lesson) {
      LESSONS.push(Object.assign({ part: group.part }, lesson));
    });
  });

  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const menuBtn = document.getElementById("menu-btn");
  const fill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");

  // 브라우저 저장소는 막혀 있을 수 있으므로 항상 try/catch로 감쌉니다.
  function loadDone() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  function saveDone(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      // 저장이 안 되어도 학습은 계속할 수 있으므로 무시합니다.
    }
  }

  function isDone(id) {
    return loadDone().indexOf(id) !== -1;
  }

  function setDone(id, value) {
    let list = loadDone();
    list = list.filter(function (x) { return x !== id; });
    if (value) list.push(id);
    saveDone(list);
  }

  function currentId() {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    const found = LESSONS.find(function (l) { return l.id === id; });
    return found ? found.id : LESSONS[0].id;
  }

  function updateProgress() {
    const done = loadDone().filter(function (id) {
      return LESSONS.some(function (l) { return l.id === id; });
    }).length;
    const pct = Math.round((done / LESSONS.length) * 100);
    fill.style.width = pct + "%";
    progressText.textContent = done + " / " + LESSONS.length + " 완료";
  }

  function buildSidebar() {
    const html = [];
    let lastPart = null;
    LESSONS.forEach(function (lesson) {
      if (lesson.part !== lastPart) {
        html.push('<h2>' + escapeHtml(lesson.part) + '</h2>');
        lastPart = lesson.part;
      }
      html.push(
        '<a href="#' + lesson.id + '" data-id="' + lesson.id + '">' +
        '<span class="check">✓</span>' + escapeHtml(lesson.title) + '</a>'
      );
    });
    sidebar.innerHTML = html.join("");
  }

  function refreshSidebarState(activeId) {
    sidebar.querySelectorAll("a").forEach(function (a) {
      const id = a.getAttribute("data-id");
      a.classList.toggle("active", id === activeId);
      a.classList.toggle("done", isDone(id));
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function addCopyButtons(root) {
    root.querySelectorAll("pre").forEach(function (pre) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.textContent = "복사";
      btn.addEventListener("click", function () {
        const text = pre.querySelector("code")
          ? pre.querySelector("code").innerText
          : pre.innerText;
        copyText(text).then(function (ok) {
          btn.textContent = ok ? "복사됨" : "실패";
          setTimeout(function () { btn.textContent = "복사"; }, 1500);
        });
      });
      pre.appendChild(btn);
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return false; }
      );
    }
    return Promise.resolve(false);
  }

  function buildQuiz(quiz) {
    const wrap = document.createElement("section");
    wrap.className = "quiz";
    wrap.innerHTML =
      '<h2>확인 퀴즈</h2>' +
      '<p class="question">' + escapeHtml(quiz.q) + '</p>' +
      '<div class="options"></div>' +
      '<p class="explain" hidden></p>';

    const optionsBox = wrap.querySelector(".options");
    const explain = wrap.querySelector(".explain");

    quiz.options.forEach(function (text, index) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = (index + 1) + ". " + text;
      btn.addEventListener("click", function () {
        const buttons = optionsBox.querySelectorAll(".option");
        buttons.forEach(function (b) { b.disabled = true; });
        buttons[quiz.answer].classList.add("correct");
        const correct = index === quiz.answer;
        if (!correct) btn.classList.add("wrong");
        explain.hidden = false;
        explain.className = "explain " + (correct ? "ok" : "bad");
        explain.textContent = (correct ? "정답입니다! " : "아쉽지만 틀렸습니다. ") + quiz.explain;
      });
      optionsBox.appendChild(btn);
    });

    return wrap;
  }

  function render() {
    const id = currentId();
    const index = LESSONS.findIndex(function (l) { return l.id === id; });
    const lesson = LESSONS[index];
    const prev = LESSONS[index - 1];
    const next = LESSONS[index + 1];

    document.title = lesson.title + " | Claude Code 학습 가이드";

    content.innerHTML = "";
    const header = document.createElement("div");
    header.innerHTML =
      '<p class="part-label">' + escapeHtml(lesson.part) + '</p>' +
      '<h1>' + escapeHtml(lesson.title) + '</h1>' +
      '<p class="lead">' + escapeHtml(lesson.lead || "") + '</p>';
    content.appendChild(header);

    const body = document.createElement("div");
    body.innerHTML = lesson.body;
    content.appendChild(body);
    addCopyButtons(body);

    if (lesson.quiz) content.appendChild(buildQuiz(lesson.quiz));

    // 하단: 완료 표시와 이전/다음 이동
    const pager = document.createElement("div");
    pager.className = "pager";

    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.className = "btn";
    function paintDone() {
      const on = isDone(lesson.id);
      doneBtn.textContent = on ? "✓ 완료됨 (해제하기)" : "이 단원 완료 표시";
      doneBtn.classList.toggle("done-on", on);
    }
    doneBtn.addEventListener("click", function () {
      setDone(lesson.id, !isDone(lesson.id));
      paintDone();
      refreshSidebarState(lesson.id);
      updateProgress();
    });
    paintDone();

    pager.appendChild(makeNavLink(prev, "← 이전"));
    pager.appendChild(doneBtn);
    pager.appendChild(makeNavLink(next, "다음 →", true));
    content.appendChild(pager);

    const note = document.createElement("p");
    note.className = "footer-note";
    note.textContent = "Claude Code 기능은 자주 바뀝니다. 최신 내용은 공식 문서(code.claude.com/docs)에서 함께 확인하세요.";
    content.appendChild(note);

    refreshSidebarState(lesson.id);
    updateProgress();
    closeMenu();
    window.scrollTo(0, 0);
    content.focus({ preventScroll: true });
  }

  function makeNavLink(lesson, label, primary) {
    if (!lesson) {
      const spacer = document.createElement("span");
      spacer.className = "spacer";
      return spacer;
    }
    const a = document.createElement("a");
    a.className = "btn" + (primary ? " primary" : "");
    a.href = "#" + lesson.id;
    a.textContent = label;
    return a;
  }

  function openMenu() {
    sidebar.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) closeMenu();
    else openMenu();
  });

  // 목차에서 단원을 고르면 모바일에서 메뉴 닫기
  sidebar.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeMenu();
  });

  window.addEventListener("hashchange", render);

  buildSidebar();
  if (!location.hash) {
    history.replaceState(null, "", "#" + LESSONS[0].id);
  }
  render();
})();
