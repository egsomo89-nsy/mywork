# Claude Code 학습 가이드

초보자도 단계별로 따라 할 수 있는 Claude Code 학습 사이트입니다. 설치부터 실무 적용, 실습 프로젝트, 확인 퀴즈까지 담겨 있습니다.

## 구성

- 시작하기 / 1. 설치와 기본 사용 / 2. 실전 활용 / 3. 확장 기능 / 4. 실무 적용 / 5. 실습 프로젝트 / 부록
- 단원마다 확인 퀴즈, 명령어 복사 버튼, 완료 체크 기능이 있습니다.
- 완료 기록은 각자의 브라우저에만 저장됩니다.

## 파일 구조

```
index.html        메인 페이지
css/style.css     화면 디자인 (다크 모드, 모바일 대응 포함)
js/content.js     학습 내용 (단원 추가/수정은 이 파일만 고치면 됩니다)
js/app.js         화면 동작 (목차, 퀴즈, 진행률)
```

## 단원 추가 방법

`js/content.js`의 `COURSE` 배열에서 알맞은 부품(part)의 `lessons`에 항목을 추가합니다.

```js
{
  id: "new-lesson",          // 주소(#new-lesson)에 쓰이므로 중복되지 않게
  title: "단원 제목",
  lead: "한 줄 소개",
  body: `<p>본문 HTML</p>`,
  quiz: { q: "질문", options: ["보기1", "보기2"], answer: 0, explain: "해설" }
}
```

## 로컬에서 보기

`index.html`을 브라우저로 열면 됩니다. 별도의 설치나 빌드가 필요 없습니다.

## 배포

GitHub Pages로 배포합니다. 저장소의 Settings > Pages에서 `main` 브랜치, `/ (root)` 폴더를 선택하면 `https://egsomo89-nsy.github.io/mywork/` 주소로 공개됩니다.
