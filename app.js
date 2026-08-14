const A = "assets/images/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  { letter: "A", title: "Look and circle the correct words.", note: "Quan sát từng tranh rồi chọn từ đúng với hình ảnh.", points: 4, questions: [
    choice("A1", "1. Choose the correct word.", ["change", "move"], "move", "Bạn nhỏ đang chạy và đổi vị trí. Move nghĩa là di chuyển.", A + "page1-img4-525x375.png"),
    choice("A2", "2. Choose the correct word.", ["people", "plant"], "plant", "Trong tranh là một cái cây trồng trong chậu. Plant nghĩa là cây.", A + "page1-img5-525x375.png"),
    choice("A3", "3. Choose the correct word.", ["breathe", "change"], "breathe", "Bạn nhỏ đang thở ra hơi trong trời lạnh. Breathe nghĩa là thở.", A + "page1-img6-525x375.png"),
    choice("A4", "4. Choose the correct word.", ["living", "nonliving"], "nonliving", "Đá không lớn lên, không thở và không sinh sản nên là vật không sống: nonliving.", A + "page1-img7-525x375.png") ] },

  { letter: "B", title: "Listen and complete the sentences.", note: "Nghe audio 3.51 rồi điền một từ vào mỗi chỗ trống.", points: 4, audio: "assets/audio/Listening-B.mp3", questions: [
    input("B1", "1. People and animals can ___ and grow.", ["change"], "Audio nói change and grow: thay đổi và lớn lên."),
    input("B2", "2. Living things need ___ or water.", ["air"], "Sinh vật cần không khí hoặc nước. Air nghĩa là không khí."),
    input("B3", "3. He's sitting on the ___ and reading.", ["grass"], "Grass nghĩa là cỏ. Câu nói bạn ấy đang ngồi trên cỏ và đọc sách."),
    input("B4", "4. The ___ are next to the bush.", ["roses"], "Roses là những bông hoa hồng. Are cho biết danh từ ở số nhiều.") ] },

  { letter: "C", title: "Look and complete the words.", note: "Nhìn tranh và hoàn thành đúng bốn từ chỉ đồ vật trong công viên.", points: 4, questions: [
    input("C1", "1. a f _ _ _ _ _ _", ["fountain"], "Fountain nghĩa là đài phun nước.", A + "page1-img3-909x649.png"),
    input("C2", "2. a b _ _ _", ["bench"], "Bench nghĩa là ghế dài trong công viên.", A + "page1-img3-909x649.png"),
    input("C3", "3. a s _ _ _ _ _", ["statue"], "Statue nghĩa là bức tượng.", A + "page1-img8-902x649.png"),
    input("C4", "4. a b _ _ _", ["bush"], "Bush nghĩa là bụi cây.", A + "page1-img8-902x649.png") ] },

  { letter: "D", title: "Look and complete the sentences. Use can and can't.", note: "Quan sát tranh rồi chọn can hoặc can't để hoàn thành câu.", points: 4, questions: [
    choice("D1", "1. She ___ ride a bicycle.", ["can", "can't"], "can't", "Bạn nữ đang loạng choạng và chưa điều khiển được xe, nên dùng can't: không thể đi xe đạp.", A + "page2-img5-416x297.png"),
    choice("D2", "2. They ___ grow tall.", ["can", "can't"], "can", "Cây hoa hướng dương là sinh vật nên có thể lớn lên. They can grow tall.", A + "page2-img6-602x302.png"),
    choice("D3", "3. It ___ change color.", ["can", "can't"], "can't", "Tiền là vật không sống nên không tự thay đổi màu sắc. It can't change color.", A + "page2-img4-601x300.png"),
    choice("D4", "4. It ___ breathe air.", ["can", "can't"], "can", "Con vịt là động vật sống nên có thể thở không khí. It can breathe air.", A + "page2-img7-602x301.png") ] },

  { letter: "E", title: "Write the words in the correct order to make sentences.", note: "Sắp xếp toàn bộ từ gợi ý thành câu hoàn chỉnh.", points: 4, questions: [
    input("E1", "1. A / can't / statue / move", ["a statue can't move", "a statue can't move."], "Chủ ngữ A statue đứng đầu, tiếp theo là can't + động từ nguyên mẫu move: A statue can't move."),
    input("E2", "2. can / things / breathe / Living", ["living things can breathe", "living things can breathe."], "Living things là chủ ngữ, sau đó là can + breathe: Living things can breathe."),
    input("E3", "3. pictures / Susan / can / take", ["susan can take pictures", "susan can take pictures."], "Susan đứng đầu câu; sau can dùng động từ nguyên mẫu take: Susan can take pictures."),
    input("E4", "4. can't / Nonliving / run / things", ["nonliving things can't run", "nonliving things can't run."], "Nonliving things là vật không sống nên không thể chạy: Nonliving things can't run.") ] },

  { letter: "F", title: "Look and read. Write the answers.", note: "Dựa vào các số 1-5 trong tranh để trả lời đầy đủ Yes hoặc No.", points: 5, sectionImage: A + "page2-img1-1676x594.png", questions: [
    choice("F1", "1. Can they move?", ["Yes, they can.", "No, they can't."], "No, they can't.", "Số 1 chỉ hai chiếc ghế. Ghế là vật không sống nên không thể tự di chuyển."),
    choice("F2", "2. Can it breathe?", ["Yes, it can.", "No, it can't."], "No, it can't.", "Số 2 chỉ đài phun nước. Đây là vật không sống nên không thể thở."),
    choice("F3", "3. Can she run fast?", ["Yes, she can.", "No, she can't."], "Yes, she can.", "Số 3 chỉ bạn nữ đang chạy nhanh, nên trả lời Yes, she can."),
    choice("F4", "4. Can it fly?", ["Yes, it can.", "No, it can't."], "No, it can't.", "Số 4 chỉ con chó. Chó không thể bay, nên trả lời No, it can't."),
    choice("F5", "5. Can they swim?", ["Yes, they can.", "No, they can't."], "Yes, they can.", "Số 5 chỉ những con vịt đang bơi, nên trả lời Yes, they can.") ] },

  { letter: "G", title: "Circle the correct words.", note: "Chọn từ hoặc cụm từ làm cho mỗi câu đúng nghĩa.", points: 5, questions: [
    choice("G1", "1. I can ___ a ball.", ["catch", "bake"], "catch", "Ta nói catch a ball: bắt một quả bóng. Bake dùng khi nướng bánh."),
    choice("G2", "2. It's good to eat ___ food.", ["healthy", "junk"], "healthy", "Healthy food là đồ ăn tốt cho sức khỏe."),
    choice("G3", "3. My kitten often ___ cats.", ["runs away", "chases"], "chases", "Chases cats nghĩa là đuổi theo mèo. Chủ ngữ My kitten là số ít nên chase thêm -s."),
    choice("G4", "4. I often go to bed ___ at night.", ["early", "late"], "late", "Đề diễn tả thói quen đi ngủ muộn vào ban đêm: go to bed late at night."),
    choice("G5", "5. ___ at the traffic light.", ["Stop", "Play outside"], "Stop", "Ở đèn giao thông, em cần dừng lại: Stop at the traffic light.") ] },

  { letter: "H", title: "Look and complete the words.", note: "Nhìn từng tranh rồi hoàn thành đúng cụm từ.", points: 4, questions: [
    input("H1", "1. _ o  _ _ / _ _  _ d", ["go to bed"], "Go to bed nghĩa là đi ngủ.", A + "page3-img2-528x377.png"),
    input("H2", "2. _ u _ / a _ _ _", ["run away"], "Run away nghĩa là chạy đi hoặc bỏ chạy.", A + "page3-img1-526x376.png"),
    input("H3", "3. _ m _ _ _", ["smell"], "Bạn nhỏ đang ngửi hoa. Smell nghĩa là ngửi.", A + "page3-img4-529x378.png"),
    input("H4", "4. _ _ o _ _", ["cross"], "Hai bạn đang đi qua đường. Cross nghĩa là băng qua.", A + "page3-img5-527x377.png") ] },

  { letter: "I", title: "Look and complete the sentences.", note: "Quan sát tranh và điền động từ đúng dạng.", points: 2, questions: [
    input("I1", "1. My sisters ___ fancy cakes and cookies.", ["bake"], "My sisters là nhiều chị/em gái nên dùng động từ nguyên mẫu bake, không thêm -s: My sisters bake fancy cakes and cookies.", A + "page3-img3-600x300.png"),
    input("I2", "2. When it's hot, I ___ a window.", ["open"], "Với chủ ngữ I, động từ giữ nguyên: I open a window.", A + "page3-img6-606x303.png") ] },

  { letter: "J", title: "Listen and circle the correct answers.", note: "Nghe audio 3.52 rồi chọn should hoặc shouldn't.", points: 6, audio: "assets/audio/Listening-J.mp3", questions: [
    choice("J1", "1. They ___ cross the street.", ["should", "shouldn't"], "shouldn't", "Audio nói shouldn't: họ không nên băng qua đường."),
    choice("J2", "2. She ___ open the window.", ["should", "shouldn't"], "should", "Audio nói should: cô ấy nên mở cửa sổ."),
    choice("J3", "3. It ___ chase the ball.", ["should", "shouldn't"], "shouldn't", "Audio nói shouldn't: nó không nên đuổi theo quả bóng."),
    choice("J4", "4. I ___ bake some cookies.", ["should", "shouldn't"], "should", "Audio nói should: tôi nên nướng một ít bánh quy."),
    choice("J5", "5. He ___.", ["should", "shouldn't"], "should", "Ở câu 5, audio chọn should."),
    choice("J6", "6. We ___.", ["should", "shouldn't"], "shouldn't", "Ở câu 6, audio chọn shouldn't.") ] },

  { letter: "K", title: "Look and complete the sentences. Use should or shouldn't.", note: "Quan sát tình huống trong tranh rồi chọn lời khuyên phù hợp.", points: 4, questions: [
    choice("K1", "1. They ___ play outside.", ["should", "shouldn't"], "should", "Ngoài trời đẹp và các bạn muốn ra ngoài, nên dùng should.", A + "page4-img3-593x296.png"),
    choice("K2", "2. You ___ cross the street.", ["should", "shouldn't"], "shouldn't", "Đường đang có rất nhiều xe nên em không nên băng qua đường.", A + "page4-img7-599x298.png"),
    choice("K3", "3. She ___ sit on the bench.", ["should", "shouldn't"], "shouldn't", "Băng ghế đang ướt vì vừa được sơn hoặc lau, nên cô ấy không nên ngồi xuống.", A + "page4-img4-345x172.png"),
    choice("K4", "4. We ___ go to the beach.", ["should", "shouldn't"], "shouldn't", "Trời đang mưa nên gia đình không nên đi biển.", A + "page4-img1-325x168.png") ] },

  { letter: "L", title: "Look and write the answers.", note: "Nhìn tranh rồi chọn câu trả lời ngắn đúng với tình huống.", points: 4, questions: [
    choice("L1", "1. Should she close the umbrella?", ["Yes, she should.", "No, she shouldn't."], "No, she shouldn't.", "Trời đang mưa nên cô ấy không nên đóng ô." , A + "page4-img5-589x295.png"),
    choice("L2", "2. Should he play the drums?", ["Yes, he should.", "No, he shouldn't."], "No, he shouldn't.", "Bạn kia đang ngủ trên ghế, nên cậu bé không nên chơi trống gây tiếng ồn.", A + "page4-img8-594x296.png"),
    choice("L3", "3. Should they stop at the road?", ["Yes, they should.", "No, they shouldn't."], "Yes, they should.", "Người điều khiển đang giơ biển STOP nên hai bạn đi xe đạp cần dừng lại.", A + "page4-img6-587x294.png"),
    choice("L4", "4. Should we cross the river?", ["Yes, we should.", "No, we shouldn't."], "No, we shouldn't.", "Dòng sông chảy mạnh và nguy hiểm nên chúng ta không nên băng qua.", A + "page4-img9-599x301.png") ] }
];

const form = document.querySelector("#testForm");
const root = document.querySelector("#sections");
const jumpRoot = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test9-v1";

render();
restore();
update();

form.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  const question = button.closest(".question");
  question.querySelectorAll("[data-choice]").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  question.dataset.value = button.dataset.value;
  question.classList.remove("is-missing");
  save();
  update();
});

form.addEventListener("input", (event) => {
  if (!event.target.matches("input")) return;
  event.target.closest(".question")?.classList.remove("is-missing");
  save();
  update();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelectorAll(".is-missing").forEach((item) => item.classList.remove("is-missing"));
  const incomplete = missing();
  if (incomplete.length) {
    incomplete.forEach((item) => item.closest(".question").classList.add("is-missing"));
    document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${incomplete.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`;
    incomplete[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  grade();
});

document.querySelector("#restartTest").onclick = () => {
  if (confirm("Em muốn xóa toàn bộ câu trả lời và làm lại từ đầu?")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
};

document.querySelector("#reviewMistakes").onclick = () => {
  (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });
};

function render() {
  sections.forEach((section) => {
    const jump = document.createElement("button");
    jump.type = "button";
    jump.textContent = section.letter;
    jump.dataset.jump = section.letter;
    jump.onclick = () => document.querySelector("#section-" + section.letter).scrollIntoView({ behavior: "smooth" });
    jumpRoot.appendChild(jump);

    const element = document.createElement("section");
    element.className = "test-section";
    element.id = "section-" + section.letter;
    element.innerHTML = `<header class="section-heading"><span class="section-letter">${section.letter}</span><div><h2>${section.title}</h2><p>${section.note}</p></div><span class="section-points">/${section.points}</span></header>${section.audio ? `<div class="audio-panel"><p>Audio phần ${section.letter}</p><audio controls preload="metadata" src="${section.audio}"></audio></div>` : ""}${sectionImage(section)}<div class="question-list">${section.questions.map((question, index) => questionMarkup(section, question, index)).join("")}</div>`;
    root.appendChild(element);
  });
}

function questionMarkup(section, question, index) {
  const label = section.letter + (index + 1);
  const control = question.type === "choice"
    ? `<div class="choice-grid">${question.options.map((option, optionIndex) => `<button type="button" class="choice" data-choice data-value="${escapeHtml(option)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span></button>`).join("")}</div>`
    : `<input class="answer-input" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`;
  return `<article class="question" data-id="${question.id}"><span class="question-number">${label}</span><div class="question-copy">${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh họa câu ${label}">` : ""}<p class="question-prompt">${question.prompt}</p>${control}</div></article>`;
}

function sectionImage(section) {
  return section.sectionImage ? `<img class="source-image" src="${section.sectionImage}" alt="Hình minh họa phần ${section.letter}">` : "";
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[?.!,]/g, "").replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

function matches(value, answers) {
  return answers.some((answer) => normalize(answer) === normalize(value));
}

function missing() {
  const output = [];
  sections.forEach((section) => section.questions.forEach((question) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      if (!element.dataset.value) output.push(element.querySelector(".choice"));
    } else {
      const field = element.querySelector("input");
      if (!field.value.trim()) output.push(field);
    }
  }));
  return output;
}

function grade() {
  let score = 0;
  const reviews = [];
  sections.forEach((section) => section.questions.forEach((question, index) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    const value = question.type === "choice" ? element.dataset.value || "" : element.querySelector("input").value;
    const correct = matches(value, question.answers);
    if (correct) score++;
    reviews.push({ question, label: section.letter + (index + 1), value, correct });
  }));

  scoreValue.textContent = score;
  scoreMessage.textContent = score === 50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`;
  answerReview.innerHTML = reviews.map((review) => `<article class="review-card ${review.correct ? "" : "is-wrong"}"><div class="review-head"><h3>Câu ${review.label}</h3><span class="review-status">${review.correct ? "1/1" : "0/1"} điểm</span></div><p class="review-question">${review.question.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(review.value || "(trống)")}</b></span><span>Đáp án: <b>${html(review.question.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${review.question.explanation}</p></article>`).join("");
  results.hidden = false;
  form.hidden = true;
  document.querySelector("#stickyProgress").hidden = true;
  results.scrollIntoView({ behavior: "smooth" });
}

function update() {
  let total = 0;
  sections.forEach((section) => {
    let completed = 0;
    section.questions.forEach((question) => {
      const element = document.querySelector(`[data-id="${question.id}"]`);
      const done = question.type === "choice" ? Boolean(element.dataset.value) : Boolean(element.querySelector("input").value.trim());
      if (done) { total++; completed++; }
    });
    const jump = document.querySelector(`[data-jump="${section.letter}"]`);
    jump.classList.toggle("has-progress", completed > 0);
    jump.classList.toggle("is-complete", completed === section.questions.length);
  });
  progressText.textContent = `${total} / 50`;
  progressBar.style.width = `${total * 2}%`;
}

function save() {
  const data = {};
  sections.forEach((section) => section.questions.forEach((question) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    data[question.id] = question.type === "choice" ? element.dataset.value || "" : element.querySelector("input").value;
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restore() {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch {}
  sections.forEach((section) => section.questions.forEach((question) => {
    const value = data[question.id];
    if (!value) return;
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      element.dataset.value = value;
      element.querySelectorAll("[data-choice]").forEach((button) => {
        const selected = button.dataset.value === value;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });
    } else {
      element.querySelector("input").value = value;
    }
  }));
}

function html(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}

function escapeHtml(value) { return html(value); }
