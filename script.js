const heuristics = [
  {
    id: 1,
    title: "1. 미학적이고 간결한 디자인",
    subtitle: "Aesthetic and minimalist design",
    desc: "기능 수행에 꼭 필요한 정보와 요소만 화면에 담겨 있어야 해요. 불필요한 시각 요소가 사용자의 시선을 분산시키거나 주요 목표 달성을 방해하지 않아야 해요.",
    questions: [
      "핵심 기능이 눈에 잘 띄나요?",
      "불필요한 요소나, 중복되는 요소는 없나요?",
      "시각적으로 정돈된 느낌을 주나요?"
    ]
  },
  {
    id: 2,
    title: "2. 직관성",
    subtitle: "Recognition",
    desc: "사용자가 기억에 의존하지 않고도 직관적으로 이해할 수 있어야 해요. 핵심 콘텐츠와 주요 기능이 별도의 학습 없이 자연스럽게 파악될 수 있어야 해요. 사용되는 용어, 아이콘, UI 요소가 설명 없이도 바로 이해될 수 있어야 해요.",
    questions: [
      "화면을 보자마자 무엇을 해야 할지 알 수 있나요?",
      "처음 사용하는 사람도 주요 기능을 찾고 이해할 수 있나요?",
      "아이콘, 버튼의 의미를 설명 없이 이해할 수 있나요?"
    ]
  },
  {
    id: 3,
    title: "3. 디자인 일관성",
    subtitle: "Recognition Design Consistency",
    desc: "사용자에게 익숙한 다른 서비스와 비슷한 형태, 용어, 상호작용 방식으로 구성되어, 새로 배우지 않아도 쉽게 사용할 수 있어야 해요. 서비스 안에서도 비슷한 기능과 요소는 언제나 일관된 형태로 제공되어야 해요.",
    questions: [
      "외부일관성",
      "다른 앱에서 사용하던 방식 그대로 사용할 수 있나요?",
      "지도,네비게이션 등 익숙한 UI 패턴이 그대로 적용되어 있나요?",
      "내부일관성",
      "같은 기능을 하는 버튼이 화면마다 동일한 형태로 표시되나요?",
      "같은 의미의 용어가 화면 전반에서 일관되게 사용되나요?",
      "버튼 스타일, 아이콘, 색상, 텍스트 등 UI 요소가 화면마다 동일한 규칙으로 사용되고 있나요?"
    ]
  },
  {
    id: 4,
    title: "4. 사용자 상태의 시각화",
    subtitle: "Visibility of the user status",
    desc: "사용자가 서비스 내에서 현재 어떤 상태에 있는지 명확하게 인지할 수 있어야 해요. 내가 지금 어디에 있고, 무엇을 하고 있는지 화면에서 바로 확인할 수 있어야 해요.",
    questions: [
      "사용자가 무엇을 하고 있는지 화면에서 바로 알 수 있나요?",
      "코스 탐색, 저장, 이동 등 사용자의 현재 단계가 명확하게 표시되나요?",
      "사용자의 행동의 결과가 화면에 표시되나요?"
    ]
  },
  {
    id: 5,
    title: "5. 사용자 제어와 자유",
    subtitle: "User control and freedom",
    desc: "사용자가 언제든 현재 흐름에서 벗어날 수 있는 탈출구가 필요해요. 실수로 잘못된 행동을 했을 때도 쉽게 되돌리거나 취소할 수 있어야 해요.",
    questions: [
      "뒤로 가기, 취소 버튼 등 탈출구가 명확하게 제공되나요?",
      "실수로 한 행동을 되돌릴 수 있나요?",
      "코스 이동 중 중단하거나 변경할 수 있나요?"
    ]
  },
  {
    id: 6,
    title: "6. 빠르고 편한 접근",
    subtitle: "Flexibility and efficiency of use",
    desc: "처음 사용하는 사용자도 쉽게 사용할 수 있고, 익숙한 사용자도 더 빠르게 이용할 수 있어야 해요. 하나의 기능을 여러 방식으로 접근할 수 있게 해서, 사용자의 숙련도에 따라 시스템을 유연하게 활용할 수 있어야 해요.",
    questions: [
      "같은 작업을 반복하지 않도록 돕는 기능이 있나요?",
      "빠르게 원하는 기능에 접근할 수 있는 방법이 있나요?",
      "처음 사용하는 사람도 어렵지 않게 사용할 수 있나요?"
    ]
  },
  {
    id: 7,
    title: "7. 오류 발생 시 안내 및 해결",
    subtitle: "Help users recognize, diagnose, and recover from errors",
    desc: "오류가 생겼을 때, 사용자가 스스로 이해하고 해결할 수 있게 도와줄 수 있어야해요. 사용자의 눈높이에 맞는 언어를 사용하여 문제가 무엇인지 정확하게 안내하고, 해결 방법을 제안해야해요.",
    questions: [
      "오류 메시지가 이해하기 쉬운가요?",
      "왜 문제가 발생했는지 원인을 안내하나요?",
      "오류를 해결하기 위한 구체적인 도움을 제공하나요?"
    ]
  },
  {
    id: 8,
    title: "8. 오류 방지",
    subtitle: "Error prevention",
    desc: "오류가 발생한 뒤에 해결하는 것보다, 애초에 오류가 발생하지 않도록 예방하는 것이 더 중요해요. 사용자가 잘못된 선택을 하지 않게 안내하고, 중요한 행동을 할 때는 한 번 더 확인할 수 있게 해야 해요.",
    questions: [
      "잘못된 정보를 입력하지 않도록 도와주고 있나요?",
      "중요한 작업(삭제, 완료 등)을 하기 전에 한 번 더 확인할 수 있나요?"
    ]
  },
  {
    id: 9,
    title: "9. 도움말 가이드",
    subtitle: "Help & Guidance",
    desc: "사용자가 서비스 이용 중 어려움을 겪을 때 별도로 찾아보지 않아도 화면 안에서 바로 도움을 받을 수 있어야 해요. 툴팁, 튜토리얼 등 필요한 순간에 적절한 형태로 가이드가 제공되어야 해요.",
    questions: [
      "기능의 사용 방법을 화면 안에서 바로 확인할 수 있나요?",
      "사용자가 어려움을 느끼는 순간에 적절한 도움이나 안내가 제공되나요?"
    ]
  },
  {
    id: 10,
    title: "10. 정보의 구조화",
    subtitle: "Information Architecture",
    desc: "서비스의 기능과 정보가 잘 정리되어 있어서, 사용자가 원하는 것을 쉽게 찾을 수 있어야 해요. 메뉴와 구조는 사용자가 예상하는 흐름에 맞게 구성되어, 사용 중에 혼란을 느끼지 않도록 해야 해요.",
    questions: [
      "관련된 기능들이 서로 잘 묶여 있나요?",
      "사용자가 예상하는 위치에서 기능을 찾을 수 있나요?",
      "현재 위치를 파악하기 쉽도록 구조가 설계되어 있나요?"
    ]
  }
];

const features = [
  {
    key: "feature1",
    label: "Flow 1",
    tagline: "마음에 드는 코스와 장소 저장하기"
  },
  {
    key: "feature2",
    label: "Flow 2",
    tagline: "새로운 장소를 이동하며 나만의 코스 기록하고 공유하기"
  },
  {
    key: "feature3",
    label: "Flow 3",
    tagline: "장소를 조합하여 코스를 생성하기"
  }
];

const featureTabs = document.getElementById("featureTabs");
const topTabs = document.getElementById("topTabs");
const viewToggle = document.getElementById("viewToggle");
const featureLabel = document.getElementById("featureLabel");
const featureTagline = document.getElementById("featureTagline");
const criterionTitle = document.getElementById("criterionTitle");
const criterionSubtitle = document.getElementById("criterionSubtitle");
const criterionDesc = document.getElementById("criterionDesc");
const questionList = document.getElementById("questionList");
const questionHead = document.getElementById("questionHead");
const questionBox = document.getElementById("questionBox");
const rows = document.getElementById("rows");
const col1Head = document.getElementById("col1Head");
const col1Help = document.getElementById("col1Help");
const addRowBtn = document.getElementById("addRowBtn");
const submitBtn = document.getElementById("submitBtn");
const questionSectionTitles = new Set(["외부일관성", "내부일관성"]);
const LEGACY_STORAGE_KEY = "heuristicEvalSubmission";
const EVALUATOR_KEY = "heuristicCurrentEvaluator";
const SUBMISSIONS_KEY = "heuristicEvalSubmissions";
const CURRENT_SUBMISSION_ID_KEY = "heuristicCurrentSubmissionId";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxyQ2CWrXgP1Tt87cCbDauqazdbzk0lQ0",
  authDomain: "heuristic-1bd71.firebaseapp.com",
  projectId: "heuristic-1bd71",
  storageBucket: "heuristic-1bd71.firebasestorage.app",
  messagingSenderId: "61293421255",
  appId: "1:61293421255:web:c09ec53f51af3f16a694e2"
}; // TODO: Firebase 프로젝트 설정값 입력

const baseRowCount = 6;
const flowScreenLetters = {
  feature1: Array.from({ length: 9 }, (_, idx) => String.fromCharCode(65 + idx)), // A-I
  feature2: Array.from({ length: 10 }, (_, idx) => String.fromCharCode(65 + idx)), // A-J
  feature3: Array.from({ length: 10 }, (_, idx) => String.fromCharCode(65 + idx)) // A-J
};

const entriesByFeature = {
  feature1: [],
  feature2: [],
  feature3: []
};

let firestoreDb = null;

const viewState = {
  selectedFeatureKey: "feature1",
  mode: "heuristic",
  selectedHeuristicIndex: 0,
  selectedScreen: "1-A"
};

function getCurrentEntries() {
  return entriesByFeature[viewState.selectedFeatureKey];
}

function hasFirebaseConfig() {
  return Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.appId);
}

function initFirebaseDb() {
  if (firestoreDb) {
    return firestoreDb;
  }
  if (!hasFirebaseConfig() || typeof firebase === "undefined") {
    return null;
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  firestoreDb = firebase.firestore();
  return firestoreDb;
}

async function saveSubmissionToFirebase(payload) {
  const db = initFirebaseDb();
  if (!db || !payload?.id) {
    return;
  }
  await db.collection("submissions").doc(payload.id).set(payload, { merge: true });
}

function getFeatureIndex() {
  const matched = viewState.selectedFeatureKey.match(/\d+/);
  return matched ? matched[0] : "1";
}

function getScreenOptions() {
  const prefix = getFeatureIndex();
  const letters = flowScreenLetters[viewState.selectedFeatureKey] || [];
  return letters.map((letter) => `${prefix}-${letter}`);
}

function ensureEvaluator() {
  const evaluatorRaw = localStorage.getItem(EVALUATOR_KEY);
  if (!evaluatorRaw) {
    window.location.href = "./index.html";
    return false;
  }
  try {
    const evaluator = JSON.parse(evaluatorRaw);
    if (!evaluator?.name) {
      window.location.href = "./index.html";
      return false;
    }
  } catch {
    window.location.href = "./index.html";
    return false;
  }
  return true;
}

function loadLatestSubmission() {
  const currentId = localStorage.getItem(CURRENT_SUBMISSION_ID_KEY);
  const listRaw = localStorage.getItem(SUBMISSIONS_KEY);
  if (listRaw) {
    try {
      const list = JSON.parse(listRaw);
      if (Array.isArray(list) && list.length > 0) {
        if (currentId) {
          const matched = list.find((item) => item.id === currentId);
          if (matched) {
            return matched;
          }
        }
        return list[list.length - 1];
      }
    } catch {}
  }

  const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (legacyRaw) {
    try {
      return JSON.parse(legacyRaw);
    } catch {}
  }
  return null;
}

function hydrateEntriesFromSubmission() {
  let currentEvaluator = null;
  const evaluatorRaw = localStorage.getItem(EVALUATOR_KEY);
  if (evaluatorRaw) {
    try {
      currentEvaluator = JSON.parse(evaluatorRaw);
    } catch {
      currentEvaluator = null;
    }
  }

  const submission = loadLatestSubmission();
  if (!submission) {
    return;
  }

  if (
    submission.evaluator?.id &&
    currentEvaluator?.id &&
    submission.evaluator.id !== currentEvaluator.id
  ) {
    return;
  }

  if (submission.features) {
    Object.keys(entriesByFeature).forEach((featureKey) => {
      const source = submission.features?.[featureKey];
      entriesByFeature[featureKey] = Array.isArray(source)
        ? source.map((entry) => ({ ...entry }))
        : [];
    });
    return;
  }

  if (Array.isArray(submission.entries)) {
    entriesByFeature[viewState.selectedFeatureKey] = submission.entries.map((entry) => ({ ...entry }));
  }
}

function createFeatureTabs() {
  featureTabs.innerHTML = "";
  features.forEach((feature) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "feature-btn";
    button.textContent = feature.label;
    button.addEventListener("click", () => {
      viewState.selectedFeatureKey = feature.key;
      viewState.selectedScreen = getScreenOptions()[0];
      updateFeatureTabActive();
      createTabs();
      createRows();
      renderContext();
      renderRows();
    });
    featureTabs.append(button);
  });
  updateFeatureTabActive();
}

function updateFeatureTabActive() {
  const buttons = featureTabs.querySelectorAll(".feature-btn");
  buttons.forEach((button, idx) => {
    button.classList.toggle("active", features[idx].key === viewState.selectedFeatureKey);
  });
}

function createTabs() {
  topTabs.innerHTML = "";

  if (viewState.mode === "heuristic") {
    heuristics.forEach((item, idx) => {
      const button = document.createElement("button");
      button.className = "tab-btn";
      button.type = "button";
      button.textContent = item.title;
      button.setAttribute("aria-label", item.title);
      button.addEventListener("click", () => {
        viewState.selectedHeuristicIndex = idx;
        renderContext();
        renderRows();
      });
      topTabs.append(button);
    });
    updateHeuristicTabActive();
    return;
  }

  getScreenOptions().forEach((screenName) => {
    const button = document.createElement("button");
    button.className = "tab-btn";
    button.type = "button";
    button.textContent = screenName;
    button.setAttribute("aria-label", screenName);
    button.addEventListener("click", () => {
      viewState.selectedScreen = screenName;
      renderContext();
      renderRows();
    });
    topTabs.append(button);
  });
  updateScreenTabActive();
}

function createRows() {
  const totalRowCount = Math.max(baseRowCount, getVisibleEntries().length);
  rows.innerHTML = "";
  for (let i = 0; i < totalRowCount; i += 1) {
    const row = document.createElement("div");
    row.className = "row";
    row.dataset.rowIndex = String(i);

    const screenCell = document.createElement("div");
    screenCell.className = "cell";
    if (viewState.mode === "heuristic") {
      const screenOptions = getScreenOptions();
      screenCell.innerHTML = `
        <select class="screen-select" data-field="screen">
          <option value="">선택하세요</option>
          ${screenOptions.map((screenName) => `<option value="${screenName}">${screenName}</option>`).join("")}
        </select>
      `;
    } else {
      screenCell.innerHTML = `
        <select class="screen-select" data-field="heuristicId">
          <option value="">선택하세요</option>
          ${heuristics.map((item) => `<option value="${item.id}">${item.id}. ${item.title.replace(/^\d+\.\s*/, "")}</option>`).join("")}
        </select>
      `;
    }

    const issueCell = document.createElement("div");
    issueCell.className = "cell";
    issueCell.innerHTML = '<textarea placeholder="발견된 문제" data-field="issue"></textarea>';

    const improveCell = document.createElement("div");
    improveCell.className = "cell";
    improveCell.innerHTML = '<textarea placeholder="개선 제안" data-field="proposal"></textarea>';

    const severityCell = document.createElement("div");
    severityCell.className = "cell";
    severityCell.innerHTML = `
      <div class="severity-group">
        <label><input type="radio" name="severity-${i}" value="낮음" data-field="severity" /> 낮음</label>
        <label><input type="radio" name="severity-${i}" value="보통" data-field="severity" /> 보통</label>
        <label><input type="radio" name="severity-${i}" value="높음" data-field="severity" /> 높음</label>
        <label><input type="radio" name="severity-${i}" value="매우 높음" data-field="severity" /> 매우 높음</label>
      </div>
    `;

    row.append(screenCell, issueCell, improveCell, severityCell);
    rows.append(row);
  }
}

function updateHeuristicTabActive() {
  const tabs = topTabs.querySelectorAll(".tab-btn");
  tabs.forEach((tab, idx) => {
    tab.classList.toggle("active", idx === viewState.selectedHeuristicIndex);
  });
}

function updateScreenTabActive() {
  const tabs = topTabs.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.textContent === viewState.selectedScreen);
  });
}

function renderContext() {
  const meta = features.find((f) => f.key === viewState.selectedFeatureKey);
  const currentFeatureLabel = meta?.label || "";
  const currentTagline = meta?.tagline || "";
  if (featureLabel) {
    featureLabel.textContent = currentFeatureLabel;
  }
  if (featureTagline) {
    featureTagline.textContent = currentTagline;
  }

  if (viewState.mode === "heuristic") {
    const current = heuristics[viewState.selectedHeuristicIndex];
    criterionTitle.textContent = current.title;
    criterionSubtitle.textContent = current.subtitle;
    criterionDesc.textContent = current.desc;
    questionList.innerHTML = "";
    current.questions.forEach((question) => {
      const li = document.createElement("li");
      li.textContent = question;
      if (questionSectionTitles.has(question)) {
        li.classList.add("question-section-title");
      }
      questionList.append(li);
    });
    updateHeuristicTabActive();
    questionHead.style.display = "";
    questionBox.style.display = "";
    col1Head.textContent = "문제 화면";
    col1Help.textContent = "개선이 필요한 화면을 선택해주세요";
    return;
  }

  const relatedCount = getCurrentEntries().filter((entry) => entry.screen === viewState.selectedScreen).length;
  criterionTitle.textContent = `${viewState.selectedScreen} 점검`;
  criterionSubtitle.textContent = "Screen based review";
  criterionDesc.textContent = `화면 (${viewState.selectedScreen})에서 발견된 문제를 한번에 모아볼 수 있어요.\n오른쪽 표에는 해당 화면에 작성된 내용만 보여집니다.`;
  questionList.innerHTML = "";
  [
    `${viewState.selectedScreen}에 등록된 항목 수: ${relatedCount}`,
    "다른 화면 이슈는 상단 화면 탭에서 전환해 확인하세요.",
    "입력 데이터는 휴리스틱 보기와 공통으로 저장됩니다."
  ].forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    questionList.append(li);
  });
  updateScreenTabActive();
  questionHead.style.display = "none";
  questionBox.style.display = "none";
  col1Head.textContent = "휴리스틱 원칙";
  col1Help.textContent = "해당 문제가 속한 원칙을 선택해주세요";
}

function getVisibleEntries() {
  if (viewState.mode === "heuristic") {
    const heuristicId = heuristics[viewState.selectedHeuristicIndex].id;
    return getCurrentEntries().filter((entry) => entry.heuristicId === heuristicId);
  }
  return getCurrentEntries().filter((entry) => entry.screen === viewState.selectedScreen);
}

function renderRows() {
  const visibleEntries = getVisibleEntries();
  const rowEls = rows.querySelectorAll(".row");

  rowEls.forEach((rowEl, rowIdx) => {
    const data = visibleEntries[rowIdx] || null;
    const select = rowEl.querySelector(".screen-select");
    const issue = rowEl.querySelector('textarea[data-field="issue"]');
    const proposal = rowEl.querySelector('textarea[data-field="proposal"]');
    const radios = rowEl.querySelectorAll('input[data-field="severity"]');

    if (!data) {
      rowEl.dataset.entryIndex = "";
      select.value = "";
      issue.value = "";
      proposal.value = "";
      radios.forEach((radio) => {
        radio.checked = false;
      });
      return;
    }

    rowEl.dataset.entryIndex = String(getCurrentEntries().indexOf(data));
    if (viewState.mode === "heuristic") {
      select.value = data.screen;
    } else {
      select.value = data.heuristicId ? String(data.heuristicId) : "";
    }
    issue.value = data.issue;
    proposal.value = data.proposal;
    radios.forEach((radio) => {
      radio.checked = radio.value === data.severity;
    });
  });
}

function allocateEntryForRow(rowEl) {
  const rowIdx = Number(rowEl.dataset.rowIndex);
  const visibleEntries = getVisibleEntries();
  const existing = visibleEntries[rowIdx];
  if (existing) {
    return getCurrentEntries().indexOf(existing);
  }

  const entry = {
    heuristicId: heuristics[viewState.selectedHeuristicIndex].id,
    screen: viewState.mode === "screen" ? viewState.selectedScreen : "",
    issue: "",
    proposal: "",
    severity: ""
  };
  getCurrentEntries().push(entry);
  return getCurrentEntries().length - 1;
}

function bindInputEvents() {
  rows.addEventListener("change", (event) => {
    const target = event.target;
    const rowEl = target.closest(".row");
    if (!rowEl) {
      return;
    }

    const field = target.dataset.field;
    if (!field) {
      return;
    }

    const entryIndex = allocateEntryForRow(rowEl);
    const entry = getCurrentEntries()[entryIndex];
    rowEl.dataset.entryIndex = String(entryIndex);

    if (viewState.mode === "heuristic") {
      entry.heuristicId = heuristics[viewState.selectedHeuristicIndex].id;
    }
    if (viewState.mode === "screen") {
      entry.screen = viewState.selectedScreen;
    }

    if (field === "severity") {
      if (target.checked) {
        entry.severity = target.value;
      }
    } else if (field === "heuristicId") {
      entry.heuristicId = target.value ? Number(target.value) : 0;
    } else {
      entry[field] = target.value;
    }

    if (viewState.mode === "screen") {
      renderContext();
      renderRows();
    }
  });

  rows.addEventListener("input", (event) => {
    const target = event.target;
    const rowEl = target.closest(".row");
    if (!rowEl || !target.dataset.field) {
      return;
    }

    const field = target.dataset.field;
    if (field !== "issue" && field !== "proposal") {
      return;
    }

    const entryIndex = allocateEntryForRow(rowEl);
    getCurrentEntries()[entryIndex][field] = target.value;
    rowEl.dataset.entryIndex = String(entryIndex);
  });
}

function initToggle() {
  viewToggle.addEventListener("click", (event) => {
    const btn = event.target.closest(".mode-btn");
    if (!btn) {
      return;
    }
    viewState.mode = btn.dataset.mode;
    const buttons = viewToggle.querySelectorAll(".mode-btn");
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.mode === viewState.mode);
    });
    createTabs();
    createRows();
    renderContext();
    renderRows();
  });
}

function initAddRow() {
  addRowBtn.addEventListener("click", () => {
    getCurrentEntries().push({
      heuristicId: heuristics[viewState.selectedHeuristicIndex].id,
      screen: viewState.mode === "screen" ? viewState.selectedScreen : "",
      issue: "",
      proposal: "",
      severity: ""
    });
    createRows();
    renderContext();
    renderRows();
  });
}

/* —— 관리자 모드 (help.png 5회 클릭) —— */
const adminBoardOrder = ["매우 높음", "높음", "보통", "낮음"];
const adminSeverityOrder = [...adminBoardOrder, "미선택"];

const adminViewState = {
  selectedSubmissionId: null,
  selectedFeatureKey: "feature1",
  mode: "heuristic",
  selectedHeuristicIndex: 0,
  selectedScreen: "1-A"
};

let adminSubmissions = [];
let adminAggFeatureKey = "feature1";
let adminHelpClickCount = 0;
let adminHelpClickTimer = null;
let adminChromeBound = false;

function adminGetScreenOptions(featureKey) {
  const matched = featureKey.match(/\d+/);
  const prefix = matched ? matched[0] : "1";
  const letters = flowScreenLetters[featureKey] || [];
  return letters.map((letter) => `${prefix}-${letter}`);
}

function resolveAdminSeverity(value) {
  return value || "미선택";
}

async function loadAllSubmissionsForAdmin() {
  const byId = new Map();
  const listRaw = localStorage.getItem(SUBMISSIONS_KEY);
  if (listRaw) {
    try {
      const list = JSON.parse(listRaw);
      if (Array.isArray(list)) {
        list.forEach((s) => {
          if (s && s.id) {
            byId.set(s.id, s);
          }
        });
      }
    } catch {}
  }
  const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (legacyRaw) {
    try {
      const s = JSON.parse(legacyRaw);
      if (s && s.id) {
        byId.set(s.id, s);
      }
    } catch {}
  }
  const db = initFirebaseDb();
  if (db) {
    try {
      const snap = await db.collection("submissions").get();
      snap.forEach((doc) => {
        const data = doc.data();
        if (data && data.id) {
          byId.set(data.id, data);
        }
      });
    } catch (err) {
      console.warn("관리자: Firestore submissions 목록 로드 실패", err);
    }
  }
  return Array.from(byId.values()).sort((a, b) =>
    String(b.submittedAt || "").localeCompare(String(a.submittedAt || ""))
  );
}

function getAdminCurrentSubmission() {
  return adminSubmissions.find((s) => s.id === adminViewState.selectedSubmissionId) || null;
}

function getAdminEntriesForFeature(submission, featureKey) {
  if (!submission) {
    return [];
  }
  if (submission.features?.[featureKey] && Array.isArray(submission.features[featureKey])) {
    return submission.features[featureKey];
  }
  if (Array.isArray(submission.entries)) {
    return submission.entries;
  }
  return [];
}

function getAdminVisibleEntries() {
  const sub = getAdminCurrentSubmission();
  const list = getAdminEntriesForFeature(sub, adminViewState.selectedFeatureKey);
  if (adminViewState.mode === "heuristic") {
    const hid = heuristics[adminViewState.selectedHeuristicIndex]?.id;
    return list.filter((entry) => entry.heuristicId === hid);
  }
  return list.filter((entry) => entry.screen === adminViewState.selectedScreen);
}

function collectAllAggItems(featureKey) {
  const items = [];
  adminSubmissions.forEach((sub) => {
    const entries = getAdminEntriesForFeature(sub, featureKey);
    entries.forEach((entry, entryIndex) => {
      items.push({ entry, submission: sub, entryIndex, featureKey });
    });
  });
  return items;
}

function updateAdminFeatureTabActive() {
  const host = document.getElementById("adminFeatureTabs");
  if (!host) {
    return;
  }
  const buttons = host.querySelectorAll(".feature-btn");
  buttons.forEach((button, idx) => {
    button.classList.toggle("active", features[idx].key === adminViewState.selectedFeatureKey);
  });
}

function updateAdminHeuristicTabActive() {
  const host = document.getElementById("adminTopTabs");
  const tabs = host?.querySelectorAll(".tab-btn");
  if (!tabs) {
    return;
  }
  tabs.forEach((tab, idx) => {
    tab.classList.toggle("active", idx === adminViewState.selectedHeuristicIndex);
  });
}

function updateAdminScreenTabActive() {
  const host = document.getElementById("adminTopTabs");
  const tabs = host?.querySelectorAll(".tab-btn");
  if (!tabs) {
    return;
  }
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.textContent === adminViewState.selectedScreen);
  });
}

function renderAdminUserTabs() {
  const nav = document.getElementById("adminUserTabs");
  if (!nav) {
    return;
  }
  nav.innerHTML = "";
  if (adminSubmissions.length === 0) {
    const p = document.createElement("p");
    p.className = "admin-entry-empty";
    p.style.margin = "0";
    p.textContent =
      "표시할 제출이 없습니다. 로컬 저장소 또는 Firestore(권한·네트워크)에서 제출을 불러오지 못했을 수 있어요.";
    nav.append(p);
    return;
  }
  adminSubmissions.forEach((sub) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "admin-user-tab";
    if (sub.id === adminViewState.selectedSubmissionId) {
      btn.classList.add("active");
    }
    const name = document.createElement("span");
    name.className = "admin-user-tab-name";
    name.textContent = sub.evaluator?.name || "이름 없음";
    const meta = document.createElement("span");
    meta.className = "admin-user-tab-meta";
    const d = sub.submittedAt
      ? new Date(sub.submittedAt).toLocaleString("ko-KR", { dateStyle: "short", timeStyle: "short" })
      : "";
    meta.textContent = d || sub.id || "";
    btn.append(name, meta);
    btn.addEventListener("click", () => {
      adminViewState.selectedSubmissionId = sub.id;
      renderAdminUserTabs();
      renderAdminLeftPanel();
      renderAdminCards();
    });
    nav.append(btn);
  });
}

function renderAdminFeatureTabs() {
  const host = document.getElementById("adminFeatureTabs");
  if (!host) {
    return;
  }
  host.innerHTML = "";
  features.forEach((feature) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "feature-btn";
    button.textContent = feature.label;
    button.addEventListener("click", () => {
      adminViewState.selectedFeatureKey = feature.key;
      const screens = adminGetScreenOptions(feature.key);
      adminViewState.selectedScreen = screens[0] || "1-A";
      updateAdminFeatureTabActive();
      renderAdminTopTabs();
      renderAdminLeftPanel();
      renderAdminCards();
    });
    host.append(button);
  });
  updateAdminFeatureTabActive();
}

function renderAdminTopTabs() {
  const host = document.getElementById("adminTopTabs");
  if (!host) {
    return;
  }
  host.innerHTML = "";
  if (adminViewState.mode === "heuristic") {
    heuristics.forEach((item, idx) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tab-btn";
      button.textContent = item.title;
      button.addEventListener("click", () => {
        adminViewState.selectedHeuristicIndex = idx;
        updateAdminHeuristicTabActive();
        renderAdminLeftPanel();
        renderAdminCards();
      });
      host.append(button);
    });
    updateAdminHeuristicTabActive();
    return;
  }
  adminGetScreenOptions(adminViewState.selectedFeatureKey).forEach((screenName) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-btn";
    button.textContent = screenName;
    button.addEventListener("click", () => {
      adminViewState.selectedScreen = screenName;
      updateAdminScreenTabActive();
      renderAdminLeftPanel();
      renderAdminCards();
    });
    host.append(button);
  });
  updateAdminScreenTabActive();
}

function renderAdminLeftPanel() {
  const featureLabelEl = document.getElementById("adminFeatureLabel");
  const criterionTitleEl = document.getElementById("adminCriterionTitle");
  const criterionSubtitleEl = document.getElementById("adminCriterionSubtitle");
  const criterionDescEl = document.getElementById("adminCriterionDesc");
  const questionHead = document.getElementById("adminQuestionHead");
  const questionList = document.getElementById("adminQuestionList");
  const questionBox = document.getElementById("adminQuestionBox");
  const adminCol1Head = document.getElementById("adminCol1Head");
  if (!featureLabelEl || !criterionTitleEl) {
    return;
  }

  const adminMeta = features.find((f) => f.key === adminViewState.selectedFeatureKey);
  featureLabelEl.textContent = adminMeta?.label || "";
  const adminTaglineEl = document.getElementById("adminFeatureTagline");
  if (adminTaglineEl) {
    adminTaglineEl.textContent = adminMeta?.tagline || "";
  }

  if (adminViewState.mode === "heuristic") {
    const current = heuristics[adminViewState.selectedHeuristicIndex];
    criterionTitleEl.textContent = current.title;
    criterionSubtitleEl.textContent = current.subtitle;
    criterionDescEl.textContent = current.desc;
    questionList.innerHTML = "";
    current.questions.forEach((question) => {
      const li = document.createElement("li");
      li.textContent = question;
      if (questionSectionTitles.has(question)) {
        li.classList.add("question-section-title");
      }
      questionList.append(li);
    });
    updateAdminHeuristicTabActive();
    questionHead.style.display = "";
    questionBox.style.display = "";
    if (adminCol1Head) {
      adminCol1Head.textContent = "문제 화면";
    }
    return;
  }

  const sub = getAdminCurrentSubmission();
  const list = getAdminEntriesForFeature(sub, adminViewState.selectedFeatureKey);
  const relatedCount = list.filter((entry) => entry.screen === adminViewState.selectedScreen).length;
  criterionTitleEl.textContent = `${adminViewState.selectedScreen} 점검`;
  criterionSubtitleEl.textContent = "Screen based review";
  criterionDescEl.textContent = `화면 (${adminViewState.selectedScreen})에서 발견된 문제를 한번에 모아볼 수 있어요.\n오른쪽 표에는 해당 화면에 작성된 내용만 보여집니다.`;
  const lines = [
    `${adminViewState.selectedScreen}에 등록된 항목 수: ${relatedCount}`,
    "다른 화면 이슈는 상단 화면 탭에서 전환해 확인하세요.",
    "데이터는 제출된 스냅샷 기준입니다."
  ];
  questionList.innerHTML = "";
  lines.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    questionList.append(li);
  });
  updateAdminScreenTabActive();
  questionHead.style.display = "none";
  questionBox.style.display = "none";
  if (adminCol1Head) {
    adminCol1Head.textContent = "휴리스틱 원칙";
  }
}

function renderAdminCards() {
  const host = document.getElementById("adminCards");
  if (!host) {
    return;
  }
  host.innerHTML = "";
  if (!getAdminCurrentSubmission()) {
    const p = document.createElement("p");
    p.className = "admin-entry-empty";
    p.textContent = "평가자(제출 건)를 선택하거나 제출 데이터가 있는지 확인해주세요.";
    host.append(p);
    return;
  }
  const visible = getAdminVisibleEntries();
  if (visible.length === 0) {
    const p = document.createElement("p");
    p.className = "admin-entry-empty";
    p.textContent = "이 보기에 해당하는 항목이 없습니다.";
    host.append(p);
    return;
  }
  visible.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "admin-entry-card";
    const c1 = document.createElement("div");
    c1.className = "admin-entry-cell";
    if (adminViewState.mode === "heuristic") {
      const screenEl = document.createElement("div");
      screenEl.className = "admin-entry-screen";
      screenEl.textContent = entry.screen || "화면 미지정";
      c1.append(screenEl);
    } else {
      const h = heuristics.find((hItem) => hItem.id === entry.heuristicId);
      const screenEl = document.createElement("div");
      screenEl.className = "admin-entry-screen";
      screenEl.textContent = h ? h.title.replace(/^\d+\.\s*/, "") : `원칙 ${entry.heuristicId ?? "-"}`;
      const sub = document.createElement("div");
      sub.className = "admin-entry-heuristic";
      sub.textContent = `#${entry.heuristicId ?? "-"}`;
      c1.append(screenEl, sub);
    }
    const c2 = document.createElement("div");
    c2.className = "admin-entry-cell";
    c2.textContent = entry.issue || "—";
    const c3 = document.createElement("div");
    c3.className = "admin-entry-cell";
    c3.textContent = entry.proposal || "—";
    const c4 = document.createElement("div");
    c4.className = "admin-entry-cell admin-entry-severity";
    c4.textContent = entry.severity || "미선택";
    card.append(c1, c2, c3, c4);
    host.append(card);
  });
}

function renderAdminFull() {
  renderAdminUserTabs();
  renderAdminFeatureTabs();
  renderAdminTopTabs();
  renderAdminLeftPanel();
  renderAdminCards();
}

function buildAdminAggItem(item) {
  const { entry, submission } = item;
  const art = document.createElement("article");
  art.className = "admin-agg-item";
  const ev = document.createElement("div");
  ev.className = "admin-agg-item-eval";
  ev.textContent = submission.evaluator?.name || "이름 없음";
  const scr = document.createElement("div");
  scr.className = "admin-agg-item-screen";
  scr.textContent = entry.screen || "화면 미지정";
  const h = heuristics.find((x) => x.id === entry.heuristicId);
  const hLine = document.createElement("div");
  hLine.className = "admin-agg-item-h";
  hLine.textContent = h ? h.title.replace(/^\d+\.\s*/, "") : `원칙 ${entry.heuristicId ?? "-"}`;
  const p1 = document.createElement("p");
  p1.className = "result-line";
  const s1 = document.createElement("strong");
  s1.textContent = "발견된 문제 : ";
  p1.append(s1, document.createTextNode(entry.issue || "—"));
  const p2 = document.createElement("p");
  p2.className = "result-line";
  const s2 = document.createElement("strong");
  s2.textContent = "개선 제안 : ";
  p2.append(s2, document.createTextNode(entry.proposal || "—"));
  art.append(ev, scr, hLine, p1, p2);
  return art;
}

function renderAdminAggColumnHead(level, count) {
  const head = document.createElement("div");
  head.className = "admin-agg-col-head";
  head.textContent = `${level} (${count})`;
  return head;
}

function renderAdminAggColumn(level, items) {
  const colClass =
    {
      "매우 높음": "sev-very",
      높음: "sev-high",
      보통: "sev-mid",
      낮음: "sev-low",
      미선택: ""
    }[level] || "";
  const section = document.createElement("section");
  section.className = "admin-agg-col " + colClass;
  section.append(renderAdminAggColumnHead(level, items.length));
  const body = document.createElement("div");
  body.className = "admin-agg-col-body";
  if (items.length === 0) {
    const p = document.createElement("p");
    p.className = "admin-agg-empty";
    p.textContent = "항목 없음";
    body.append(p);
  } else {
    items.forEach((item) => {
      body.append(buildAdminAggItem(item));
    });
  }
  section.append(body);
  return section;
}

function renderAdminAggregatePanel() {
  const tabsHost = document.getElementById("adminAggFeatureTabs");
  const root = document.getElementById("adminAggRoot");
  if (!tabsHost || !root) {
    return;
  }

  tabsHost.innerHTML = "";
  features.forEach((feature) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "admin-agg-feature-btn";
    b.textContent = feature.label;
    b.classList.toggle("active", feature.key === adminAggFeatureKey);
    b.addEventListener("click", () => {
      adminAggFeatureKey = feature.key;
      renderAdminAggregatePanel();
    });
    tabsHost.append(b);
  });

  const grouped = new Map();
  adminSeverityOrder.forEach((level) => grouped.set(level, []));
  collectAllAggItems(adminAggFeatureKey).forEach((item) => {
    const sev = resolveAdminSeverity(item.entry.severity);
    if (!grouped.has(sev)) {
      grouped.set(sev, []);
    }
    grouped.get(sev).push(item);
  });

  root.innerHTML = "";
  const board = document.createElement("section");
  board.className = "admin-agg-board";
  adminBoardOrder.forEach((level) => {
    board.append(renderAdminAggColumn(level, grouped.get(level) || []));
  });
  root.append(board);
  const unsel = document.createElement("section");
  unsel.className = "admin-agg-unselected";
  unsel.append(renderAdminAggColumn("미선택", grouped.get("미선택") || []));
  root.append(unsel);
}

function exitAdminMode() {
  const overlay = document.getElementById("adminOverlay");
  const agg = document.getElementById("adminAggregateOverlay");
  if (overlay) {
    overlay.hidden = true;
  }
  if (agg) {
    agg.hidden = true;
  }
}

function bindAdminChromeOnce() {
  if (adminChromeBound) {
    return;
  }
  adminChromeBound = true;
  document.getElementById("adminCloseBtn")?.addEventListener("click", exitAdminMode);
  document.getElementById("adminAggregateClose")?.addEventListener("click", () => {
    const o = document.getElementById("adminAggregateOverlay");
    if (o) {
      o.hidden = true;
    }
  });
  document.getElementById("adminAggregateOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "adminAggregateOverlay") {
      e.currentTarget.hidden = true;
    }
  });
  document.getElementById("adminResultFab")?.addEventListener("click", () => {
    adminAggFeatureKey = adminViewState.selectedFeatureKey;
    renderAdminAggregatePanel();
    const o = document.getElementById("adminAggregateOverlay");
    if (o) {
      o.hidden = false;
    }
  });
  const vt = document.getElementById("adminViewToggle");
  vt?.addEventListener("click", (event) => {
    const btn = event.target.closest(".mode-btn");
    if (!btn) {
      return;
    }
    adminViewState.mode = btn.dataset.mode;
    vt.querySelectorAll(".mode-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.mode === adminViewState.mode);
    });
    renderAdminTopTabs();
    renderAdminLeftPanel();
    renderAdminCards();
  });
}

function playHelpAudio() {
  const el = document.getElementById("helpAudio");
  if (!el) {
    return;
  }
  el.currentTime = 0;
  el.play().catch(() => {});
}

function initAdminHelpUnlock() {
  const helpIcon = document.querySelector(".help-icon");
  if (!helpIcon) {
    return;
  }
  helpIcon.addEventListener("click", () => {
    playHelpAudio();
    if (adminHelpClickTimer) {
      clearTimeout(adminHelpClickTimer);
    }
    adminHelpClickCount += 1;
    if (adminHelpClickCount >= 5) {
      adminHelpClickCount = 0;
      const helpAudioEl = document.getElementById("helpAudio");
      if (helpAudioEl) {
        helpAudioEl.pause();
      }
      void (async () => {
        const overlay = document.getElementById("adminOverlay");
        if (!overlay) {
          return;
        }
        adminSubmissions = await loadAllSubmissionsForAdmin();
        adminViewState.selectedSubmissionId = adminSubmissions[0]?.id ?? null;
        adminViewState.selectedFeatureKey = "feature1";
        adminViewState.mode = "heuristic";
        adminViewState.selectedHeuristicIndex = 0;
        adminViewState.selectedScreen = adminGetScreenOptions("feature1")[0] || "1-A";
        bindAdminChromeOnce();
        overlay.hidden = false;
        renderAdminFull();
      })();
      return;
    }
    adminHelpClickTimer = setTimeout(() => {
      adminHelpClickCount = 0;
    }, 1700);
  });
}

function initSubmit() {
  submitBtn.addEventListener("click", async () => {
    const evaluatorRaw = localStorage.getItem(EVALUATOR_KEY);
    let evaluator = null;
    if (evaluatorRaw) {
      try {
        evaluator = JSON.parse(evaluatorRaw);
      } catch {
        evaluator = null;
      }
    }
    if (!evaluator || !evaluator.name) {
      window.location.href = "./index.html";
      return;
    }

    const featurePayload = {};
    features.forEach((feature) => {
      featurePayload[feature.key] = entriesByFeature[feature.key].filter((entry) => {
        return (
          entry.screen ||
          entry.issue.trim() ||
          entry.proposal.trim() ||
          entry.severity ||
          entry.heuristicId
        );
      });
    });

    const payload = {
      id: `sub-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      evaluator,
      heuristics: heuristics.map((item) => ({ id: item.id, title: item.title })),
      entries: Object.values(featurePayload).flat(),
      features: featurePayload
    };

    let submissions = [];
    const previousRaw = localStorage.getItem(SUBMISSIONS_KEY);
    if (previousRaw) {
      try {
        submissions = JSON.parse(previousRaw);
      } catch {
        submissions = [];
      }
    }
    submissions.push(payload);
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));
    localStorage.setItem(CURRENT_SUBMISSION_ID_KEY, payload.id);
    localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(payload));
    try {
      await saveSubmissionToFirebase(payload);
    } catch (error) {
      console.error("Firebase 저장 실패:", error);
    }

    window.location.href = "./result.html";
  });
}

function init() {
  if (!ensureEvaluator()) {
    return;
  }
  hydrateEntriesFromSubmission();
  createFeatureTabs();
  createTabs();
  createRows();
  bindInputEvents();
  initToggle();
  initAddRow();
  initSubmit();
  initAdminHelpUnlock();
  renderContext();
  renderRows();
}

init();
