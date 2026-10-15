/*
 * 학습 콘텐츠 데이터
 * 단원을 추가하거나 고칠 때는 이 파일만 수정하면 됩니다.
 *  - id: 주소(#id)에 쓰이는 고유 이름 (영문, 중복 금지)
 *  - body: 단원 본문 HTML
 *  - quiz: { q: 질문, options: 보기 배열, answer: 정답 번호(0부터), explain: 해설 } (없으면 퀴즈 생략)
 */
const COURSE = [
  {
    part: "시작하기",
    lessons: [
      {
        id: "intro",
        title: "Claude Code란 무엇인가요?",
        lead: "AI가 내 컴퓨터의 파일을 직접 읽고 고치는 도구를 이해합니다.",
        body: `
          <p><strong>Claude Code(클로드 코드)</strong>는 터미널(terminal, 명령 프롬프트)에서 Claude와 대화하며 파일을 읽고, 수정하고, 명령을 실행하는 AI 도구입니다.</p>
          <h2>일반 채팅 AI와 무엇이 다른가요?</h2>
          <table>
            <tr><th>구분</th><th>일반 채팅 AI</th><th>Claude Code</th></tr>
            <tr><td>작업 대상</td><td>입력한 글만</td><td>내 컴퓨터의 폴더와 파일</td></tr>
            <tr><td>할 수 있는 일</td><td>답변 작성</td><td>파일 읽기, 수정, 생성, 명령 실행</td></tr>
            <tr><td>주의할 점</td><td>내용 검토</td><td>권한 설정과 변경 내용 확인</td></tr>
          </table>
          <h2>업무에서는 이런 일에 쓸 수 있습니다</h2>
          <ul>
            <li>여러 자료 파일을 읽고 보고서 초안 작성</li>
            <li>흩어진 엑셀(CSV) 자료를 표로 정리</li>
            <li>반복되는 문서 양식을 자동으로 채우기</li>
          </ul>
          <h2>기억해 둘 세 가지 원칙</h2>
          <ol>
            <li><strong>구체적으로 요청하세요.</strong> 무엇을, 어느 파일에, 어떤 형식으로가 분명할수록 결과가 좋아집니다.</li>
            <li><strong>작은 단위로 나누세요.</strong> 한 번에 큰 일을 맡기기보다 단계별로 진행합니다.</li>
            <li><strong>결과를 꼭 확인하세요.</strong> AI는 틀릴 수 있으므로 숫자와 근거는 원자료와 대조합니다.</li>
          </ol>
          <div class="callout"><strong>준비물</strong>Claude 구독(Pro, Max, Team, Enterprise 중 하나) 또는 Claude Console 계정, 그리고 터미널 프로그램이 필요합니다.</div>
        `,
        quiz: {
          q: "Claude Code가 일반 채팅 AI와 가장 크게 다른 점은 무엇인가요?",
          options: [
            "답변 속도가 더 빠르다",
            "내 컴퓨터의 파일을 읽고 수정하고 명령을 실행할 수 있다",
            "인터넷 검색만 할 수 있다",
            "한국어를 지원하지 않는다"
          ],
          answer: 1,
          explain: "Claude Code는 실제 폴더와 파일을 다루므로, 그만큼 권한과 변경 내용 확인이 중요합니다."
        }
      },
      {
        id: "roadmap",
        title: "학습 로드맵과 공부하는 방법",
        lead: "이 사이트를 어떤 순서로, 어떻게 공부하면 좋은지 안내합니다.",
        body: `
          <h2>전체 순서</h2>
          <table>
            <tr><th>단계</th><th>내용</th><th>목표</th></tr>
            <tr><td>1. 설치와 기본 사용</td><td>설치, 실행, 기본 대화, 권한</td><td>혼자 간단한 질문과 수정을 할 수 있다</td></tr>
            <tr><td>2. 실전 활용</td><td>CLAUDE.md, 슬래시 명령, 서브에이전트, 훅</td><td>내 업무 규칙을 Claude에게 가르칠 수 있다</td></tr>
            <tr><td>3. 확장 기능</td><td>MCP, 플러그인, 스킬, 비대화형 실행</td><td>외부 서비스와 연결하고 작업을 자동화할 수 있다</td></tr>
            <tr><td>4. 실무 적용</td><td>기업 분석, 영업 관리, 팀 취합, 일정 정리</td><td>단장 업무에 바로 쓸 수 있다</td></tr>
            <tr><td>5. 실습 프로젝트</td><td>팀 주간 현황 페이지 만들기</td><td>배운 것을 한 번에 엮어 완성한다</td></tr>
          </table>
          <h2>효과적인 공부법</h2>
          <ul class="checklist">
            <li>단원을 읽고 직접 터미널에서 따라 해 보기</li>
            <li>예시 프롬프트를 그대로 쓰지 말고 우리 업무 자료로 바꿔 보기</li>
            <li>단원 끝의 퀴즈로 이해도 확인하기</li>
            <li>완료한 단원은 체크 표시하기 (브라우저에 자동 저장됩니다)</li>
          </ul>
          <div class="callout tip"><strong>팁</strong>처음부터 완벽히 이해하려 하지 마세요. 일단 설치하고 한 번 써 보는 것이 가장 빠른 공부입니다.</div>
        `,
        quiz: {
          q: "처음 공부를 시작할 때 가장 먼저 해야 할 단계는 무엇인가요?",
          options: [
            "MCP 서버 연결",
            "설치와 기본 사용",
            "실습 프로젝트",
            "훅(hook) 설정"
          ],
          answer: 1,
          explain: "기본 사용을 익힌 뒤에 실전 기능과 확장 기능으로 넘어가는 순서가 가장 효율적입니다."
        }
      }
    ]
  },
  {
    part: "1. 설치와 기본 사용",
    lessons: [
      {
        id: "install",
        title: "설치하기",
        lead: "운영체제에 맞는 명령 한 줄로 Claude Code를 설치합니다.",
        body: `
          <h2>Windows (PowerShell)</h2>
          <pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>
          <h2>macOS, Linux, WSL</h2>
          <pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
          <h2>패키지 관리자로 설치하기 (선택)</h2>
          <pre><code># Windows (WinGet)
winget install Anthropic.ClaudeCode

# macOS (Homebrew)
brew install --cask claude-code</code></pre>
          <p>WinGet과 Homebrew로 설치하면 자동 업데이트가 되지 않으므로, 가끔 <code>winget upgrade Anthropic.ClaudeCode</code> 명령으로 직접 업데이트해 주세요.</p>
          <h2>설치 확인</h2>
          <pre><code>claude --version</code></pre>
          <p>버전 번호와 <code>(Claude Code)</code>가 출력되면 성공입니다.</p>
          <div class="callout"><strong>주의</strong>명령을 붙여 넣을 때 PowerShell인지 CMD인지에 따라 명령이 다릅니다. "'irm'은(는) 인식되지 않습니다"가 뜨면 CMD를 쓰고 있는 것이니 PowerShell을 여세요.</div>
          <div class="callout tip"><strong>Windows 권장 사항</strong>Git for Windows(git-scm.com)를 함께 설치하면 Claude Code가 Bash 도구를 사용할 수 있어 더 안정적입니다.</div>
          <h2>설치 후에도 claude를 못 찾는다면</h2>
          <p>터미널을 완전히 닫았다가 다시 열어 보세요. 그래도 안 되면 설치 경로가 PATH(실행 파일 검색 경로)에 없는 경우이니, 공식 문서의 설치 문제 해결 페이지를 참고하세요.</p>
        `,
        quiz: {
          q: "설치가 잘 되었는지 확인하는 명령으로 알맞은 것은?",
          options: [
            "claude --check",
            "claude --version",
            "claude install",
            "claude help all"
          ],
          answer: 1,
          explain: "claude --version을 실행해 버전 번호가 나오면 설치가 정상입니다."
        }
      },
      {
        id: "first-run",
        title: "첫 실행과 로그인",
        lead: "프로젝트 폴더에서 claude를 실행하고 계정으로 로그인합니다.",
        body: `
          <h2>1단계: 작업할 폴더로 이동</h2>
          <p>Claude는 <strong>실행한 폴더를 기준</strong>으로 파일을 찾고 수정합니다. 엉뚱한 폴더에서 실행하지 않도록 먼저 폴더를 옮기세요.</p>
          <pre><code>cd D:\\work\\weekly-report
claude</code></pre>
          <h2>2단계: 로그인</h2>
          <p>처음 실행하면 브라우저가 열리며 로그인하라는 안내가 나옵니다. 안내에 따라 완료하면 다시 로그인할 필요가 없습니다.</p>
          <h2>자주 쓰는 세션 명령</h2>
          <table>
            <tr><th>명령</th><th>하는 일</th></tr>
            <tr><td><code>/help</code></td><td>사용 가능한 명령 목록 보기</td></tr>
            <tr><td><code>/login</code></td><td>계정 전환이나 다시 로그인</td></tr>
            <tr><td><code>/clear</code></td><td>대화 내용 지우고 새로 시작</td></tr>
            <tr><td><code>/exit</code></td><td>Claude Code 종료</td></tr>
          </table>
          <div class="callout tip"><strong>팁</strong>입력 창에 <code>/</code>를 치면 명령 목록이 나옵니다. Tab 키로 자동 완성도 됩니다.</div>
        `,
        quiz: {
          q: "Claude가 파일을 찾는 기준 위치는 어디인가요?",
          options: [
            "C 드라이브 전체",
            "claude를 실행한 현재 폴더",
            "바탕화면",
            "인터넷"
          ],
          answer: 1,
          explain: "그래서 작업할 폴더로 이동한 뒤 claude를 실행하는 습관이 중요합니다."
        }
      },
      {
        id: "basics",
        title: "기본 대화법: 좋은 요청 만들기",
        lead: "결과 차이를 만드는 요청 방식을 익힙니다.",
        body: `
          <h2>좋은 요청의 세 요소</h2>
          <ul>
            <li><strong>목표:</strong> 무엇을 얻고 싶은지</li>
            <li><strong>대상:</strong> 어떤 파일이나 폴더를 쓸지</li>
            <li><strong>제약:</strong> 형식, 길이, 말투 같은 조건</li>
          </ul>
          <h2>나쁜 요청과 좋은 요청</h2>
          <table>
            <tr><th>나쁜 예</th><th>좋은 예</th></tr>
            <tr><td>"이거 고쳐줘"</td><td>"reports 폴더의 sales.csv에서 중복 행을 찾아 제거하고, 결과를 clean.csv로 저장해줘"</td></tr>
            <tr><td>"보고서 써줘"</td><td>"data 폴더의 자료를 읽고, 사업 개요와 리스크 두 항목으로 A4 한 장 분량 초안을 작성해줘"</td></tr>
          </table>
          <h2>먼저 탐색하고 나중에 실행하기</h2>
          <p>바로 수정을 맡기기 전에 상황부터 물어보면 실수를 줄일 수 있습니다.</p>
          <pre><code>이 폴더에 어떤 파일이 있어?
이 프로젝트는 무엇을 하는 거야?</code></pre>
          <h2>큰 일은 단계로 나누기</h2>
          <pre><code>1. 자료 파일 목록을 정리해줘
2. 각 파일의 핵심 내용을 3줄로 요약해줘
3. 요약을 바탕으로 주간 보고 초안을 만들어줘</code></pre>
        `,
        quiz: {
          q: "다음 중 가장 좋은 요청은 무엇인가요?",
          options: [
            "고쳐줘",
            "reports 폴더의 sales.csv에서 중복 행을 찾아 제거하고, 결과를 clean.csv로 저장해줘",
            "알아서 해줘",
            "뭐든지 해줘"
          ],
          answer: 1,
          explain: "대상 파일, 목표, 결과물 형식이 모두 드러나 있어 Claude가 실수 없이 작업할 수 있습니다."
        }
      },
      {
        id: "permissions",
        title: "파일 수정과 권한 관리",
        lead: "Claude가 무엇을 자동으로 하고 무엇을 물어볼지 정합니다.",
        body: `
          <h2>왜 권한이 중요한가요?</h2>
          <p>Claude는 파일을 수정하거나 명령을 실행하기 전에 승인을 요청할 수 있습니다. 이 설정이 권한 모드(permission mode)입니다.</p>
          <h2>주요 모드</h2>
          <table>
            <tr><th>모드</th><th>특징</th><th>추천 상황</th></tr>
            <tr><td>기본 (default)</td><td>행동 전에 매번 확인</td><td>처음 사용할 때</td></tr>
            <tr><td>편집 자동 승인 (acceptEdits)</td><td>파일 편집은 자동, 명령은 확인</td><td>익숙해진 뒤 반복 작업</td></tr>
            <tr><td>계획 모드 (plan)</td><td>실제 변경 없이 계획만 세움</td><td>큰 작업을 맡기기 전 검토</td></tr>
          </table>
          <p>Shift+Tab 키를 누르면 세션 중에 모드를 바꿀 수 있습니다.</p>
          <h2>승인 전에 꼭 확인할 것</h2>
          <ul class="checklist">
            <li>변경될 파일 이름과 내용을 읽었는가</li>
            <li>삭제 명령이 들어 있지 않은가</li>
            <li>중요한 원본 파일을 백업했는가</li>
          </ul>
          <div class="callout"><strong>주의</strong>업무 자료 원본은 작업 전에 복사해 두세요. 버전 관리(Git)를 쓰면 언제든 되돌릴 수 있습니다.</div>
        `,
        quiz: {
          q: "실제 파일을 바꾸지 않고 계획만 세우고 싶을 때 쓰는 모드는 무엇인가요?",
          options: [
            "계획 모드 (plan)",
            "우회 모드 (bypassPermissions)",
            "초기화 모드 (clear)",
            "디버그 모드 (debug)"
          ],
          answer: 0,
          explain: "계획 모드에서는 Claude가 어떤 작업을 할지 먼저 보여 주고, 승인 후에 실행하게 할 수 있습니다."
        }
      }
    ]
  },
  {
    part: "2. 실전 활용",
    lessons: [
      {
        id: "claude-md",
        title: "CLAUDE.md로 업무 규칙 가르치기",
        lead: "매번 같은 설명을 반복하지 않도록 프로젝트 지침서를 만듭니다.",
        body: `
          <p><strong>CLAUDE.md</strong>는 프로젝트 폴더에 두는 지침서입니다. Claude는 대화를 시작할 때 이 파일을 자동으로 읽습니다.</p>
          <h2>처음 만들기</h2>
          <p>프로젝트 폴더에서 Claude를 실행한 뒤 <code>/init</code> 명령을 입력하면 초안을 만들어 줍니다. 그 초안을 우리 업무에 맞게 고치면 됩니다.</p>
          <h2>무엇을 적으면 좋을까요?</h2>
          <ul>
            <li>프로젝트의 목적과 폴더 구조</li>
            <li>보고서 말투와 형식 규칙</li>
            <li>금기 사항 (예: 개인 실명 사용 금지)</li>
          </ul>
          <h2>예시</h2>
          <pre><code># 프로젝트 지침
- 모든 보고서는 한국어 존댓말로 작성한다.
- 금액은 원(KRW) 단위로 쓰고 천 단위 쉼표를 붙인다.
- 고객 실명은 쓰지 않고 '고객A'처럼 표기한다.
- 보고서는 '요약 - 현황 - 이슈 - 다음 계획' 순서로 작성한다.</code></pre>
          <div class="callout tip"><strong>팁</strong>짧고 구체적으로 쓸수록 잘 지켜집니다. 길게 쓰기보다 자주 반복하는 규칙 위주로 적으세요.</div>
          <h2>범위에 따른 위치</h2>
          <table>
            <tr><th>위치</th><th>적용 범위</th></tr>
            <tr><td>프로젝트 폴더의 CLAUDE.md</td><td>이 폴더에서 일할 때만</td></tr>
            <tr><td>사용자 폴더의 ~/.claude/CLAUDE.md</td><td>내가 쓰는 모든 작업에 공통으로</td></tr>
          </table>
        `,
        quiz: {
          q: "CLAUDE.md의 역할로 알맞은 것은?",
          options: [
            "Claude의 응답 속도 설정",
            "프로젝트 규칙을 매 대화마다 알려주는 지침서",
            "로그인 정보를 저장하는 파일",
            "플러그인 설치 목록"
          ],
          answer: 1,
          explain: "한 번 적어 두면 매번 같은 설명을 반복하지 않아도 됩니다."
        }
      },
      {
        id: "slash-commands",
        title: "슬래시 명령과 나만의 명령 만들기",
        lead: "자주 쓰는 명령과 프롬프트를 단축 명령으로 만듭니다.",
        body: `
          <h2>기본 슬래시 명령</h2>
          <table>
            <tr><th>명령</th><th>하는 일</th></tr>
            <tr><td><code>/init</code></td><td>CLAUDE.md 초안 생성</td></tr>
            <tr><td><code>/clear</code></td><td>대화 초기화</td></tr>
            <tr><td><code>/resume</code></td><td>이전 대화 이어가기</td></tr>
            <tr><td><code>/agents</code></td><td>서브에이전트 관리</td></tr>
            <tr><td><code>/help</code></td><td>명령 목록 보기</td></tr>
          </table>
          <h2>나만의 명령 만들기</h2>
          <p>프로젝트 폴더에 <code>.claude/commands/</code> 폴더를 만들고 마크다운(.md) 파일을 넣으면, 파일 이름이 곧 명령이 됩니다.</p>
          <p>예를 들어 <code>.claude/commands/weekly-report.md</code> 파일을 만들고 아래 내용을 저장하면 <code>/weekly-report</code> 명령이 생깁니다.</p>
          <pre><code>이번 주 자료를 모두 읽고 주간 보고 초안을 작성해줘.
형식은 CLAUDE.md의 보고서 규칙을 따르고,
진행 중 업무와 다음 주 계획을 표로 정리해줘.</code></pre>
          <div class="callout tip"><strong>팁</strong>매주 반복하는 보고 요청을 명령으로 만들어 두면 시간이 크게 줄어듭니다.</div>
        `,
        quiz: {
          q: "이전에 하던 대화를 이어서 하고 싶을 때 쓰는 명령은?",
          options: [
            "/clear",
            "/resume",
            "/exit",
            "/init"
          ],
          answer: 1,
          explain: "/resume으로 이전 대화를 골라 다시 이어갈 수 있습니다."
        }
      },
      {
        id: "subagents",
        title: "서브에이전트(Subagent) 활용하기",
        lead: "특정 역할을 맡은 보조 AI를 만들어 검토와 분석을 나눕니다.",
        body: `
          <p><strong>서브에이전트</strong>는 특정 역할을 맡은 보조 AI입니다. 각자 독립된 공간에서 일하고, 최종 요약만 메인 대화로 돌아옵니다. 자료가 많아도 메인 대화가 복잡해지지 않습니다.</p>
          <h2>파일 위치</h2>
          <p><code>.claude/agents/</code> 폴더에 마크다운 파일을 만들면 됩니다. 팀과 공유하려면 이 폴더를 저장소에 함께 올리세요.</p>
          <h2>예시: 보고서 검토 담당</h2>
          <pre><code>---
name: report-checker
description: 보고서의 숫자, 근거, 말투를 검토한다. 보고서를 작성한 뒤 사용한다.
tools: Read, Grep, Glob
model: sonnet
---

너는 꼼꼼한 보고서 검토자다. 숫자가 원자료와 맞는지,
근거 없는 주장이 있는지, 존댓말과 형식 규칙을 지켰는지 확인하고
수정할 부분을 항목별로 알려준다.</code></pre>
          <h2>호출 방법</h2>
          <ul>
            <li>"report-checker 서브에이전트로 analysis.md를 검토해줘"</li>
            <li>입력 창에서 <code>@</code>를 치고 이름을 골라 지정</li>
          </ul>
          <h2>설정 항목 한눈에 보기</h2>
          <table>
            <tr><th>항목</th><th>의미</th></tr>
            <tr><td>name</td><td>이름 (필수)</td></tr>
            <tr><td>description</td><td>언제 맡길지 설명 (필수)</td></tr>
            <tr><td>tools</td><td>쓸 수 있는 도구 목록 (생략하면 전부 사용)</td></tr>
            <tr><td>model</td><td>사용할 모델</td></tr>
          </table>
        `,
        quiz: {
          q: "서브에이전트 설정 파일을 두는 기본 위치는 어디인가요?",
          options: [
            ".claude/agents/",
            "시스템 설치 폴더",
            "README.txt",
            "settings.exe"
          ],
          answer: 0,
          explain: "프로젝트 안의 .claude/agents/ 폴더에 두면 팀원과 함께 쓸 수 있습니다."
        }
      },
      {
        id: "hooks",
        title: "훅(Hook)으로 자동 실행 설정하기",
        lead: "특정 순간에 자동으로 실행되는 동작을 설정합니다.",
        body: `
          <p><strong>훅(hook)</strong>은 Claude가 특정 작업을 할 때 자동으로 실행되는 명령입니다. 예를 들어 파일을 수정할 때마다 기록을 남기거나, 위험한 명령을 막을 수 있습니다.</p>
          <h2>지침과 훅의 차이</h2>
          <table>
            <tr><th>구분</th><th>CLAUDE.md 지침</th><th>훅(hook)</th></tr>
            <tr><td>성격</td><td>부탁과 권장 (따르도록 노력함)</td><td>정해진 시점에 반드시 실행</td></tr>
            <tr><td>예</td><td>"삭제 전에 물어봐"</td><td>"파일 저장 후 자동으로 기록 남기기"</td></tr>
          </table>
          <div class="callout"><strong>핵심</strong>반드시 지켜야 하는 규칙은 지침이 아니라 훅으로 만드세요.</div>
          <h2>설정 예시 (.claude/settings.json)</h2>
          <pre><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "echo 파일이 수정되었습니다" }
        ]
      }
    ]
  }
}</code></pre>
          <p>위 예시는 파일이 수정된 뒤 메시지를 출력합니다. 실제 업무에서는 이 자리에 정리 프로그램이나 기록 명령을 넣습니다.</p>
          <div class="callout tip"><strong>팁</strong>훅 설정은 처음에는 간단하게 시작하세요. 잘못 설정하면 작업이 계속 멈출 수 있으니, 공식 문서의 훅 가이드를 함께 보며 하나씩 추가하는 것이 안전합니다.</div>
        `,
        quiz: {
          q: "CLAUDE.md 지침과 훅(hook)의 차이로 알맞은 것은?",
          options: [
            "둘은 같은 기능이다",
            "CLAUDE.md는 권장(부탁)이고, 훅은 정해진 시점에 반드시 실행된다",
            "훅은 한국어에서만 동작한다",
            "CLAUDE.md는 명령을 실행한다"
          ],
          answer: 1,
          explain: "반드시 지켜야 할 규칙은 훅으로, 작성 방식과 말투 같은 권장 사항은 CLAUDE.md로 나누는 것이 좋습니다."
        }
      }
    ]
  },
  {
    part: "3. 확장 기능",
    lessons: [
      {
        id: "mcp",
        title: "MCP로 외부 서비스 연결하기",
        lead: "구글 드라이브, 노션, 캘린더 같은 서비스를 Claude에 연결합니다.",
        body: `
          <p><strong>MCP(Model Context Protocol)</strong>는 Claude가 외부 서비스와 연결되는 표준 방식입니다. 연결하면 Claude가 해당 서비스의 자료를 찾고 읽을 수 있습니다.</p>
          <h2>연결하면 할 수 있는 일</h2>
          <ul>
            <li>"노션에서 이번 주 회의록을 찾아 요약해줘"</li>
            <li>"캘린더에서 이번 주 외부 미팅 일정을 뽑아줘"</li>
            <li>"구글 드라이브의 영업 현황 시트를 읽어줘"</li>
          </ul>
          <h2>연결 명령</h2>
          <pre><code>claude mcp --help</code></pre>
          <p>위 명령으로 연결 방법을 확인하세요. 서비스마다 계정 인증 절차가 있으니 안내에 따라 진행합니다.</p>
          <div class="callout"><strong>주의</strong>연결한 서비스의 내용이 대화에 들어갑니다. 민감한 고객 정보나 인사 정보는 회사 보안 정책을 먼저 확인하세요.</div>
        `,
        quiz: {
          q: "MCP의 주된 역할로 알맞은 것은?",
          options: [
            "화면 녹화",
            "외부 서비스를 Claude에 연결하기",
            "모델 직접 학습시키기",
            "파일 압축하기"
          ],
          answer: 1,
          explain: "MCP를 연결하면 Claude가 외부 서비스의 자료를 다룰 수 있게 됩니다."
        }
      },
      {
        id: "plugins-skills",
        title: "플러그인과 스킬",
        lead: "좋은 작업 절차를 묶어서 설치하고 팀과 공유합니다.",
        body: `
          <h2>스킬(Skill)이란?</h2>
          <p>특정 작업의 절차를 적어 둔 지침 묶음입니다. 관련된 작업을 할 때 Claude가 필요에 따라 자동으로 불러 씁니다. 예를 들어 "기업 분석 보고서 작성 절차"를 스킬로 만들어 두면 매번 설명하지 않아도 됩니다.</p>
          <h2>플러그인(Plugin)이란?</h2>
          <p>명령, 서브에이전트, 스킬, 훅 등을 하나로 묶어 배포하는 꾸러미입니다. Claude Code 안에서 <code>/plugin</code> 명령으로 찾아서 설치할 수 있습니다.</p>
          <h2>팀과 공유하기</h2>
          <ul>
            <li>잘 만든 스킬이나 서브에이전트 파일을 저장소의 <code>.claude/</code> 폴더에 넣으면 팀원도 같이 씁니다.</li>
            <li>팀 공통 규칙은 CLAUDE.md로, 반복 절차는 스킬로 나누어 관리하면 편합니다.</li>
          </ul>
          <div class="callout tip"><strong>팁</strong>처음에는 직접 만들기보다 설치해서 써 보며 구조를 이해하는 것이 빠릅니다.</div>
        `,
        quiz: {
          q: "스킬(Skill)에 대한 설명으로 알맞은 것은?",
          options: [
            "작업 절차를 담은 지침 묶음으로, 관련 작업을 할 때 필요에 따라 활용된다",
            "하드웨어를 제어하는 드라이버다",
            "로그인 방법을 저장하는 파일이다",
            "반드시 영어로만 작성해야 한다"
          ],
          answer: 0,
          explain: "스킬은 반복되는 작업 방식을 한 번 정리해 두고 재사용하기 위한 기능입니다."
        }
      },
      {
        id: "automation",
        title: "비대화형 실행으로 자동화하기",
        lead: "대화창 없이 한 번만 실행해서 결과 파일을 얻습니다.",
        body: `
          <h2>-p 옵션</h2>
          <p><code>-p</code>(print) 옵션을 쓰면 대화창을 열지 않고 질문 한 번에 결과만 출력하고 끝납니다.</p>
          <pre><code>claude -p "이 폴더의 회의록을 모두 읽고 주요 결정사항만 목록으로 정리해줘"</code></pre>
          <h2>결과를 파일로 저장하기</h2>
          <pre><code>claude -p "이번 주 회의록의 액션 아이템을 표로 정리해줘" &gt; action-items.md</code></pre>
          <h2>언제 쓰면 좋을까요?</h2>
          <ul>
            <li>매주 같은 방식으로 여러 파일을 요약할 때</li>
            <li>배치 파일이나 예약 작업에 넣어 자동으로 실행할 때</li>
          </ul>
          <div class="callout"><strong>주의</strong>대화 없이 실행되더라도 권한 설정은 그대로 적용됩니다. 파일을 수정하는 작업이라면 먼저 백업하세요.</div>
        `,
        quiz: {
          q: "대화창 없이 한 번만 실행하는 옵션은 무엇인가요?",
          options: [
            "-v",
            "-p",
            "-x",
            "--clear"
          ],
          answer: 1,
          explain: "claude -p \"질문\" 형태로 쓰면 결과만 출력하고 바로 종료됩니다."
        }
      }
    ]
  },
  {
    part: "4. 실무 적용 (단장 업무)",
    lessons: [
      {
        id: "biz-analysis",
        title: "기업 분석 보고서 초안 만들기",
        lead: "공개된 자료를 바탕으로 분석 초안을 빠르게 작성합니다.",
        body: `
          <h2>준비</h2>
          <ul>
            <li>자료를 한 폴더(예: company-data)에 모아 둡니다. PDF는 텍스트로 바꿔 두면 더 정확합니다.</li>
            <li>CLAUDE.md에 보고서 양식과 말투를 적어 둡니다.</li>
          </ul>
          <h2>프롬프트 예시</h2>
          <pre><code>company-data 폴더의 자료를 읽고 다음 순서로 분석 초안을 작성해줘.
1) 사업 개요  2) 재무 흐름  3) 강점과 약점  4) 리스크
A4 2페이지 분량으로 analysis.md에 저장하고,
근거가 없는 내용은 [확인 필요]로 표시해줘.</code></pre>
          <h2>검토 체크리스트</h2>
          <ul class="checklist">
            <li>숫자가 원자료와 일치하는가</li>
            <li>추정과 사실이 구분되어 있는가</li>
            <li>[확인 필요] 표시 항목을 사람이 직접 확인했는가</li>
          </ul>
          <div class="callout"><strong>원칙</strong>AI 초안은 출발점입니다. 최종 판단과 서명은 반드시 담당자가 합니다.</div>
        `,
        quiz: {
          q: "AI가 만든 보고서 초안에서 가장 먼저 확인해야 할 것은?",
          options: [
            "글자 색깔",
            "숫자와 근거가 원자료와 맞는지",
            "파일 이름의 길이",
            "글꼴 종류"
          ],
          answer: 1,
          explain: "AI는 그럴듯하게 틀린 숫자를 쓸 수 있으므로 근거 대조가 가장 중요합니다."
        }
      },
      {
        id: "sales-pipeline",
        title: "영업 현황과 파이프라인 정리",
        lead: "영업 기록을 단계별로 정리하고 진척이 멈춘 건을 찾아냅니다.",
        body: `
          <h2>준비</h2>
          <p>영업 기록을 <code>pipeline.csv</code>로 저장합니다. 열 예시: 고객명, 단계, 금액, 최근 업데이트 날짜.</p>
          <div class="callout"><strong>먼저 테스트하세요</strong>실제 고객 정보는 이름을 가상으로 바꾸거나 일부를 가린 복사본으로 먼저 테스트하세요.</div>
          <h2>프롬프트 예시</h2>
          <pre><code>pipeline.csv를 읽고 다음을 정리해줘.
1) 단계별(발굴, 제안, 협상, 계약) 건수와 금액 합계를 표로
2) 최근 업데이트가 14일 이상 지난 건 목록
3) 이번 주 우선 조치가 필요한 건 3개와 이유</code></pre>
          <h2>활용 팁</h2>
          <ul>
            <li>결과를 주간 보고 초안에 그대로 붙여 쓸 수 있습니다.</li>
            <li>매주 같은 분석을 반복한다면 <code>/weekly-report</code> 같은 명령으로 묶어 두세요.</li>
          </ul>
        `,
        quiz: {
          q: "실제 고객 데이터로 작업하기 전에 먼저 해야 할 일은?",
          options: [
            "공유 폴더에 바로 올린다",
            "민감 정보를 가리거나 가상 데이터로 먼저 테스트한다",
            "외부 서비스에 전부 연결한다",
            "비밀번호를 대화창에 적는다"
          ],
          answer: 1,
          explain: "개인정보와 고객 정보는 회사 보안 정책을 따르고, 먼저 안전한 데이터로 검증하는 것이 원칙입니다."
        }
      },
      {
        id: "team-summary",
        title: "팀원 업무 현황 취합",
        lead: "여러 사람의 주간 보고를 한 장의 표로 모읍니다.",
        body: `
          <h2>준비</h2>
          <p>팀원별 보고 파일을 <code>reports</code> 폴더에 모아 둡니다. 예: reports/팀원A.md, reports/팀원B.md</p>
          <h2>프롬프트 예시</h2>
          <pre><code>reports 폴더의 모든 파일을 읽고 팀원별로 정리해줘.
- 이번 주 완료 업무
- 진행 중 업무
- 다음 주 계획
- 막힌 부분(도움이 필요한 내용)
표 하나로 만들어 team-summary.md에 저장해줘.</code></pre>
          <h2>많은 파일을 다룰 때</h2>
          <p>팀원 수가 많으면 서브에이전트에게 파일별 요약을 나눠 맡기면 메인 대화가 깔끔하게 유지됩니다.</p>
          <div class="callout"><strong>주의</strong>성과 평가, 인사 판단, 징계와 같은 결정은 AI에게 맡기지 말고 사람이 직접 하세요. AI는 정리와 요약까지만 돕게 하는 것이 안전합니다.</div>
        `,
        quiz: {
          q: "팀원 보고 취합에서 AI에게 맡기기 가장 알맞은 작업은?",
          options: [
            "인사 평가 결정",
            "여러 보고 파일을 표로 모으는 작업",
            "급여 계산",
            "개인 징계 판단"
          ],
          answer: 1,
          explain: "정리와 요약은 AI가 잘하는 일이지만, 평가와 판단은 사람의 책임입니다."
        }
      },
      {
        id: "meeting-schedule",
        title: "회의록과 주간 일정 정리",
        lead: "회의 메모를 양식에 맞춘 회의록으로 바꾸고 일정을 정리합니다.",
        body: `
          <h2>회의록 정리</h2>
          <p>회의 중 적은 메모(txt)를 아래 양식으로 정리하게 합니다.</p>
          <pre><code>meeting-0410.txt를 읽고 회의록을 작성해줘.
- 일시, 참석자, 안건
- 결정사항
- 액션 아이템: 담당자, 기한, 할 일을 표로
CLAUDE.md의 보고서 형식을 따라줘.</code></pre>
          <h2>주간 일정 정리</h2>
          <pre><code>schedule.csv에서 이번 주 일정을 요일별로 묶고,
시간이 겹치는 일정이 있으면 찾아서 알려줘.</code></pre>
          <div class="callout tip"><strong>팁</strong>캘린더를 MCP로 연결하면 파일을 내려받지 않고도 일정을 바로 가져올 수 있습니다. (3단계 MCP 단원 참고)</div>
        `,
        quiz: {
          q: "회의록의 액션 아이템에 꼭 들어가야 할 항목은?",
          options: [
            "담당자와 기한",
            "회의실 온도",
            "점심 메뉴",
            "참석자 사진"
          ],
          answer: 0,
          explain: "누가 언제까지 무엇을 하는지가 분명해야 회의 결정이 실행됩니다."
        }
      }
    ]
  },
  {
    part: "5. 실습 프로젝트",
    lessons: [
      {
        id: "project",
        title: "팀 주간 현황 페이지 만들기",
        lead: "지금까지 배운 기능을 한 번에 엮어 팀 현황 페이지를 완성합니다.",
        body: `
          <h2>목표</h2>
          <p>reports, pipeline, schedule 세 가지 자료를 바탕으로 <strong>이번 주 팀 현황을 보여 주는 index.html 페이지</strong>를 만듭니다.</p>
          <h2>진행 단계</h2>
          <ol class="checklist">
            <li>프로젝트 폴더를 만들고 자료 파일을 넣는다</li>
            <li>CLAUDE.md를 만들어 보고서 규칙과 말투를 적는다</li>
            <li>팀원별 업무를 요약하는 명령(/weekly-report 등)을 만든다</li>
            <li>요약 결과를 바탕으로 index.html 페이지를 생성하게 한다</li>
            <li>브라우저로 index.html을 열어 화면을 확인한다</li>
            <li>수정 내용을 검토한 뒤 Git으로 저장(커밋)한다</li>
          </ol>
          <h2>완성 기준</h2>
          <ul class="checklist">
            <li>모든 팀원의 이름과 업무가 빠짐없이 나온다</li>
            <li>페이지의 숫자가 원자료와 일치한다</li>
            <li>휴대폰 화면에서도 읽을 수 있다</li>
          </ul>
          <div class="callout tip"><strong>도전 과제</strong>완성한 페이지를 팀 저장소에 올려 팀원과 공유해 보세요. 이 사이트도 같은 방식으로 배포되어 있습니다.</div>
        `,
        quiz: {
          q: "실습 결과물을 만든 뒤 가장 먼저 해야 할 일은 무엇인가요?",
          options: [
            "결과를 확인하고 검토하기",
            "배포 취소하기",
            "모든 권한 허용하기",
            "원본 파일 전부 삭제하기"
          ],
          answer: 0,
          explain: "AI가 만든 결과는 반드시 사람이 확인한 뒤에 공유하거나 저장해야 합니다."
        }
      }
    ]
  },
  {
    part: "부록",
    lessons: [
      {
        id: "glossary",
        title: "부록 A. 용어 사전",
        lead: "공부하면서 자주 나오는 영어 용어를 정리했습니다.",
        body: `
          <table>
            <tr><th>용어</th><th>뜻</th></tr>
            <tr><td>에이전트 (Agent)</td><td>목표를 향해 스스로 판단하고 도구를 쓰며 일하는 AI</td></tr>
            <tr><td>서브에이전트 (Subagent)</td><td>메인 AI가 맡기는 보조 AI. 독립된 공간에서 일한다</td></tr>
            <tr><td>CLAUDE.md</td><td>매 대화 시작 시 읽히는 프로젝트 지침 파일</td></tr>
            <tr><td>슬래시 명령 (Slash command)</td><td>/로 시작하는 단축 명령</td></tr>
            <tr><td>MCP (Model Context Protocol)</td><td>외부 서비스를 Claude에 연결하는 표준 방식</td></tr>
            <tr><td>훅 (Hook)</td><td>특정 시점에 자동으로 실행되는 설정</td></tr>
            <tr><td>스킬 (Skill)</td><td>작업 절차를 담은 지침 묶음</td></tr>
            <tr><td>플러그인 (Plugin)</td><td>명령, 스킬, 서브에이전트 등을 묶은 배포 단위</td></tr>
            <tr><td>권한 모드 (Permission mode)</td><td>Claude가 행동 전에 확인을 요청하는 정도를 정하는 설정</td></tr>
            <tr><td>컨텍스트 (Context)</td><td>Claude가 한 번에 기억하고 참고할 수 있는 범위</td></tr>
            <tr><td>커밋 (Commit)</td><td>Git에서 변경 내용을 하나의 기록으로 저장하는 것</td></tr>
            <tr><td>저장소 (Repository)</td><td>Git으로 관리되는 프로젝트 폴더</td></tr>
          </table>
        `,
        quiz: null
      },
      {
        id: "cheatsheet",
        title: "부록 B. 명령어 치트시트",
        lead: "자주 쓰는 명령을 한 장에 모았습니다.",
        body: `
          <h2>터미널 명령</h2>
          <table>
            <tr><th>명령</th><th>설명</th></tr>
            <tr><td><code>claude</code></td><td>대화형으로 시작</td></tr>
            <tr><td><code>claude "질문"</code></td><td>질문을 넣고 대화형으로 시작</td></tr>
            <tr><td><code>claude -p "질문"</code></td><td>한 번 실행하고 결과만 출력</td></tr>
            <tr><td><code>claude -c</code></td><td>이 폴더에서 가장 최근 대화 이어가기</td></tr>
            <tr><td><code>claude -r</code></td><td>이전 대화 목록에서 골라 이어가기</td></tr>
            <tr><td><code>claude --version</code></td><td>설치된 버전 확인</td></tr>
          </table>
          <h2>대화 중 명령</h2>
          <table>
            <tr><th>명령</th><th>설명</th></tr>
            <tr><td><code>/help</code></td><td>명령 목록 보기</td></tr>
            <tr><td><code>/init</code></td><td>CLAUDE.md 초안 만들기</td></tr>
            <tr><td><code>/clear</code></td><td>대화 초기화</td></tr>
            <tr><td><code>/resume</code></td><td>이전 대화 이어가기</td></tr>
            <tr><td><code>/login</code></td><td>로그인 또는 계정 전환</td></tr>
            <tr><td><code>/exit</code></td><td>종료</td></tr>
          </table>
          <h2>키보드</h2>
          <table>
            <tr><th>키</th><th>설명</th></tr>
            <tr><td>Shift+Tab</td><td>권한 모드 전환</td></tr>
            <tr><td>Tab</td><td>명령 자동 완성</td></tr>
            <tr><td>↑</td><td>이전 입력 불러오기</td></tr>
          </table>
        `,
        quiz: null
      },
      {
        id: "faq",
        title: "부록 C. 자주 묻는 질문",
        lead: "처음 쓸 때 많이 궁금해하는 내용입니다.",
        body: `
          <h2>인터넷이 꼭 필요한가요?</h2>
          <p>네. Claude는 클라우드에서 동작하므로 인터넷 연결이 필요합니다.</p>
          <h2>한국어로 써도 되나요?</h2>
          <p>네. 한국어로 요청하고 한국어로 답변받을 수 있습니다. 코드나 명령어는 영어 그대로 쓰는 것이 일반적입니다.</p>
          <h2>실수로 파일이 망가지면 어떻게 하나요?</h2>
          <p>중요한 자료는 작업 전에 복사해 두세요. Git으로 관리하면 이전 상태로 되돌릴 수 있습니다.</p>
          <h2>비용은 얼마인가요?</h2>
          <p>사용하는 요금제(Pro, Max, Team 등)에 따라 다릅니다. 정확한 내용은 Claude 공식 요금제 페이지에서 확인하세요.</p>
          <h2>회사 자료를 넣어도 안전한가요?</h2>
          <p>민감한 고객 정보나 내부 기밀은 회사 보안 정책을 먼저 확인한 뒤 사용하세요. 처음에는 가상의 데이터로 연습하는 것을 권장합니다.</p>
          <h2>AI가 틀린 답을 주면 어떻게 하나요?</h2>
          <p>근거를 요구하고, 원자료와 대조하는 습관을 들이세요. 확실하지 않은 내용은 "확인 필요"로 표시하게 하는 것도 방법입니다.</p>
        `,
        quiz: null
      }
    ]
  }
];
