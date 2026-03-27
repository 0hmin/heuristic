const STORAGE_KEY = "heuristicEvalSubmission";
const SUBMISSIONS_KEY = "heuristicEvalSubmissions";
const CURRENT_SUBMISSION_ID_KEY = "heuristicCurrentSubmissionId";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxyQ2CWrXgP1Tt87cCbDauqazdbzk0lQ0",
  authDomain: "heuristic-1bd71.firebaseapp.com",
  projectId: "heuristic-1bd71",
  storageBucket: "heuristic-1bd71.firebasestorage.app",
  messagingSenderId: "61293421255",
  appId: "1:61293421255:web:c09ec53f51af3f16a694e2"
}; // TODO: Firebase 프로젝트 설정값 입력 (script.js와 동일)
const resultRoot = document.getElementById("resultRoot");
const resultFeatureTabs = document.getElementById("resultFeatureTabs");
const detailOverlay = document.getElementById("detailOverlay");
const detailCloseBtn = document.getElementById("detailCloseBtn");
const detailIssue = document.getElementById("detailIssue");
const detailProposal = document.getElementById("detailProposal");
const detailMemo = document.getElementById("detailMemo");
const detailTitle = document.getElementById("detailTitle");
const detailSeverity = document.getElementById("detailSeverity");
const resultTitle = document.getElementById("resultTitle");

const features = [
  { key: "feature1", label: "Flow 1" },
  { key: "feature2", label: "Flow 2" },
  { key: "feature3", label: "Flow 3" }
];
const boardOrder = ["매우 높음", "높음", "보통", "낮음"];
const severityOrder = [...boardOrder, "미선택"];
let currentSubmission = null;
let openedEntryIndex = -1;
let openedFeatureKey = "feature1";
let selectedFeatureKey = "feature1";
let firestoreDb = null;

function resolveSeverity(value) {
  return value || "미선택";
}

function getHeuristicTitle(heuristics, id) {
  const found = heuristics.find((item) => item.id === id);
  return found ? found.title : "미지정";
}

function getHeuristicLabel(heuristics, id) {
  const title = getHeuristicTitle(heuristics, id);
  return title.replace(/^\d+\.\s*/, "");
}

function readSubmission() {
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

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
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

async function readSubmissionFromFirebase() {
  const currentId = localStorage.getItem(CURRENT_SUBMISSION_ID_KEY);
  if (!currentId) {
    return null;
  }
  const db = initFirebaseDb();
  if (!db) {
    return null;
  }
  try {
    const doc = await db.collection("submissions").doc(currentId).get();
    return doc.exists ? doc.data() : null;
  } catch {
    return null;
  }
}

function saveSubmission(submission) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submission));

  const listRaw = localStorage.getItem(SUBMISSIONS_KEY);
  if (!listRaw || !submission?.id) {
    return;
  }
  try {
    const list = JSON.parse(listRaw);
    if (!Array.isArray(list)) {
      return;
    }
    const idx = list.findIndex((item) => item.id === submission.id);
    if (idx >= 0) {
      list[idx] = submission;
      localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(list));
    }
  } catch {}

  const db = initFirebaseDb();
  if (db && submission?.id) {
    db.collection("submissions").doc(submission.id).set(submission, { merge: true }).catch(() => {});
  }
}

function getEntriesByFeature(submission, featureKey) {
  if (submission?.features?.[featureKey] && Array.isArray(submission.features[featureKey])) {
    return submission.features[featureKey];
  }
  if (Array.isArray(submission?.entries)) {
    return submission.entries;
  }
  return [];
}

function createResultFeatureTabs() {
  if (!resultFeatureTabs) {
    return;
  }
  resultFeatureTabs.innerHTML = "";
  features.forEach((feature) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "result-feature-btn";
    button.textContent = feature.label;
    button.addEventListener("click", () => {
      selectedFeatureKey = feature.key;
      updateResultFeatureTabs();
      render();
    });
    resultFeatureTabs.append(button);
  });
  updateResultFeatureTabs();
}

function updateResultFeatureTabs() {
  if (!resultFeatureTabs) {
    return;
  }
  const buttons = resultFeatureTabs.querySelectorAll(".result-feature-btn");
  buttons.forEach((button, idx) => {
    button.classList.toggle("active", features[idx].key === selectedFeatureKey);
  });
}

function openDetail(item, heuristics) {
  openedFeatureKey = item.featureKey;
  openedEntryIndex = item.entryIndex;
  const entry = item.entry;
  detailTitle.textContent = `${entry.screen || "화면 미지정"}   |   ${getHeuristicTitle(heuristics, entry.heuristicId)}`;
  detailSeverity.value = entry.severity || "";
  detailIssue.textContent = entry.issue || "-";
  detailProposal.textContent = entry.proposal || "-";
  detailMemo.value = entry.debriefMemo || "";
  detailOverlay.hidden = false;
}

function persistDetailChanges() {
  if (!currentSubmission || openedEntryIndex < 0) {
    return false;
  }
  const featureEntries = getEntriesByFeature(currentSubmission, openedFeatureKey);
  if (!featureEntries[openedEntryIndex]) {
    return false;
  }
  featureEntries[openedEntryIndex].severity = detailSeverity.value;
  featureEntries[openedEntryIndex].debriefMemo = detailMemo.value.trim();

  if (currentSubmission.features?.[openedFeatureKey]) {
    currentSubmission.features[openedFeatureKey] = featureEntries;
  } else if (Array.isArray(currentSubmission.entries)) {
    currentSubmission.entries = featureEntries;
  }
  saveSubmission(currentSubmission);
  return true;
}

function closeDetail(shouldPersist = true) {
  const changed = shouldPersist ? persistDetailChanges() : false;
  detailOverlay.hidden = true;
  openedEntryIndex = -1;
  openedFeatureKey = selectedFeatureKey;
  if (changed) {
    render();
  }
}

function renderGroup(level, items, heuristics) {
  const section = document.createElement("section");
  section.className = `severity-group severity-${level.replace(/\s+/g, "")}`;
  section.innerHTML = `
    <div class="severity-head">${level} (${items.length})</div>
    <div class="severity-body"></div>
  `;
  const body = section.querySelector(".severity-body");

  if (items.length === 0) {
    body.innerHTML = '<p class="empty">해당 수준에 등록된 항목이 없습니다.</p>';
    return section;
  }

  items.forEach((item) => {
    const entry = item.entry;
    const card = document.createElement("article");
    card.className = "result-item";
    if (entry.debriefMemo && entry.debriefMemo.trim()) {
      card.classList.add("has-memo");
    }
    card.innerHTML = `
      <div class="card-top">
        <p class="card-screen">${entry.screen || "화면 미지정"}</p>
        <p class="card-heuristic">${entry.heuristicId || "-"}. ${getHeuristicLabel(heuristics, entry.heuristicId)}</p>
      </div>
      <div class="card-divider"></div>
      <div class="card-content">
        <p class="result-line"><strong>발견된 문제 :</strong> ${entry.issue || "-"}</p>
        <p class="result-line"><strong>개선 제안 :</strong> ${entry.proposal || "-"}</p>
      </div>
    `;
    card.addEventListener("click", () => openDetail(item, heuristics));
    body.append(card);
  });
  return section;
}

async function render() {
  const firebaseSubmission = await readSubmissionFromFirebase();
  const submission = firebaseSubmission || readSubmission();
  currentSubmission = submission;
  if (!submission) {
    if (resultTitle) {
      resultTitle.textContent = "evaluation results";
    }
    resultRoot.innerHTML = '<p class="empty">제출된 결과가 없습니다. 평가표에서 먼저 작성 후 제출해주세요.</p>';
    return;
  }

  const currentEntries = getEntriesByFeature(submission, selectedFeatureKey);
  if (resultTitle) {
    resultTitle.textContent = submission.evaluator?.name
      ? `${submission.evaluator.name}'s evaluation results`
      : "evaluation results";
  }
  if (!Array.isArray(currentEntries) || currentEntries.length === 0) {
    resultRoot.innerHTML = '<p class="empty">선택한 기능에 아직 작성된 평가가 없습니다.</p>';
    return;
  }

  const grouped = new Map();
  severityOrder.forEach((level) => grouped.set(level, []));

  currentEntries.forEach((entry, entryIndex) => {
    const severity = resolveSeverity(entry.severity);
    if (!grouped.has(severity)) {
      grouped.set(severity, []);
    }
    grouped.get(severity).push({ entry, entryIndex, featureKey: selectedFeatureKey });
  });

  resultRoot.innerHTML = "";
  const board = document.createElement("section");
  board.className = "board-grid";
  boardOrder.forEach((level) => {
    board.append(renderGroup(level, grouped.get(level) || [], submission.heuristics || []));
  });

  const unselectedWrap = document.createElement("section");
  unselectedWrap.className = "unselected-wrap";
  unselectedWrap.append(renderGroup("미선택", grouped.get("미선택") || [], submission.heuristics || []));

  resultRoot.append(board, unselectedWrap);
}

function initDetailEvents() {
  detailCloseBtn.addEventListener("click", () => closeDetail(true));
  detailOverlay.addEventListener("click", (event) => {
    if (event.target === detailOverlay) {
      closeDetail(true);
    }
  });
}

createResultFeatureTabs();
initDetailEvents();
closeDetail(false);
render();
