const A = "assets/images/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  {
    "letter": "A",
    "title": "Look and circle the correct words.",
    "note": "Quan sát từng tranh rồi chọn từ đúng với hình ảnh.",
    "points": 4,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. Choose the correct word.",
        "options": [
          "change",
          "move"
        ],
        "answers": [
          "move"
        ],
        "explanation": "Bạn nhỏ đang chạy và đổi vị trí. Move nghĩa là di chuyển.",
        "image": "assets/images/page1-img4-525x375.png"
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. Choose the correct word.",
        "options": [
          "people",
          "plant"
        ],
        "answers": [
          "plant"
        ],
        "explanation": "Trong tranh là một cái cây trồng trong chậu. Plant nghĩa là cây.",
        "image": "assets/images/page1-img5-525x375.png"
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. Choose the correct word.",
        "options": [
          "breathe",
          "change"
        ],
        "answers": [
          "breathe"
        ],
        "explanation": "Bạn nhỏ đang thở ra hơi trong trời lạnh. Breathe nghĩa là thở.",
        "image": "assets/images/page1-img6-525x375.png"
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4. Choose the correct word.",
        "options": [
          "living",
          "nonliving"
        ],
        "answers": [
          "nonliving"
        ],
        "explanation": "Đá không lớn lên, không thở và không sinh sản nên là vật không sống: nonliving.",
        "image": "assets/images/page1-img7-525x375.png"
      }
    ]
  },
  {
    "letter": "B",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio 3.51 rồi điền một từ vào mỗi chỗ trống.",
    "points": 4,
    "audio": "assets/audio/Listening-B.mp3",
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. People and animals can ___ and grow.",
        "answers": [
          "change"
        ],
        "explanation": "Audio nói change and grow: thay đổi và lớn lên.",
        "image": ""
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. Living things need ___ or water.",
        "answers": [
          "air"
        ],
        "explanation": "Sinh vật cần không khí hoặc nước. Air nghĩa là không khí.",
        "image": ""
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. He's sitting on the ___ and reading.",
        "answers": [
          "grass"
        ],
        "explanation": "Grass nghĩa là cỏ. Câu nói bạn ấy đang ngồi trên cỏ và đọc sách.",
        "image": ""
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4. The ___ are next to the bush.",
        "answers": [
          "roses"
        ],
        "explanation": "Roses là những bông hoa hồng. Are cho biết danh từ ở số nhiều.",
        "image": ""
      }
    ]
  },
  {
    "letter": "C",
    "title": "Look and complete the words.",
    "note": "Nhìn tranh và hoàn thành đúng bốn từ chỉ đồ vật trong công viên.",
    "points": 4,
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1a. f _ u _ _ _ _ _",
        "answers": [
          "fountain"
        ],
        "explanation": "Hình 1a là đài phun nước. Từ bắt đầu bằng f và hoàn chỉnh là fountain.",
        "image": "assets/images/page1-img3-909x649.png"
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "1b. b _ _ _ _",
        "answers": [
          "bench"
        ],
        "explanation": "Hình 1b là ghế dài trong công viên. Từ bắt đầu bằng b và hoàn chỉnh là bench.",
        "image": "assets/images/page1-img3-909x649.png"
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "2a. s _ a _ _ _",
        "answers": [
          "statue"
        ],
        "explanation": "Hình 2a là bức tượng. Từ bắt đầu bằng s và hoàn chỉnh là statue.",
        "image": "assets/images/page1-img8-902x649.png"
      },
      {
        "id": "C4",
        "type": "input",
        "prompt": "2b. b _ _ _",
        "answers": [
          "bush"
        ],
        "explanation": "Hình 2b là bụi cây. Từ bắt đầu bằng b và hoàn chỉnh là bush.",
        "image": "assets/images/page1-img8-902x649.png"
      }
    ]
  },
  {
    "letter": "D",
    "title": "Look and complete the sentences. Use can and can't.",
    "note": "Quan sát tranh rồi chọn can hoặc can't để hoàn thành câu.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. She ___ ride a bicycle.",
        "options": [
          "can",
          "can't"
        ],
        "answers": [
          "can't"
        ],
        "explanation": "Bạn nữ đang loạng choạng và chưa điều khiển được xe, nên dùng can't: không thể đi xe đạp.",
        "image": "assets/images/page2-img5-416x297.png"
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. They ___ grow tall.",
        "options": [
          "can",
          "can't"
        ],
        "answers": [
          "can"
        ],
        "explanation": "Cây hoa hướng dương là sinh vật nên có thể lớn lên. They can grow tall.",
        "image": "assets/images/page2-img6-602x302.png"
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. It ___ change color.",
        "options": [
          "can",
          "can't"
        ],
        "answers": [
          "can't"
        ],
        "explanation": "Tiền là vật không sống nên không tự thay đổi màu sắc. It can't change color.",
        "image": "assets/images/page2-img4-601x300.png"
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "4. It ___ breathe air.",
        "options": [
          "can",
          "can't"
        ],
        "answers": [
          "can"
        ],
        "explanation": "Con vịt là động vật sống nên có thể thở không khí. It can breathe air.",
        "image": "assets/images/page2-img7-602x301.png"
      }
    ]
  },
  {
    "letter": "E",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Sắp xếp toàn bộ từ gợi ý thành câu hoàn chỉnh.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. A / can't / statue / move",
        "answers": [
          "a statue can't move",
          "a statue can't move."
        ],
        "explanation": "Chủ ngữ A statue đứng đầu, tiếp theo là can't + động từ nguyên mẫu move: A statue can't move.",
        "image": ""
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. can / things / breathe / Living",
        "answers": [
          "living things can breathe",
          "living things can breathe."
        ],
        "explanation": "Living things là chủ ngữ, sau đó là can + breathe: Living things can breathe.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. pictures / Susan / can / take",
        "answers": [
          "susan can take pictures",
          "susan can take pictures."
        ],
        "explanation": "Susan đứng đầu câu; sau can dùng động từ nguyên mẫu take: Susan can take pictures.",
        "image": ""
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. can't / Nonliving / run / things",
        "answers": [
          "nonliving things can't run",
          "nonliving things can't run."
        ],
        "explanation": "Nonliving things là vật không sống nên không thể chạy: Nonliving things can't run.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Look and read. Write the answers.",
    "note": "Dựa vào các số 1-5 trong tranh để trả lời đầy đủ Yes hoặc No.",
    "points": 5,
    "sectionImage": "assets/images/page2-img1-1676x594.png",
    "questions": [
      {
        "id": "F1",
        "type": "choice",
        "prompt": "1. Can they move?",
        "options": [
          "Yes, they can.",
          "No, they can't."
        ],
        "answers": [
          "No, they can't."
        ],
        "explanation": "Số 1 chỉ hai chiếc ghế. Ghế là vật không sống nên không thể tự di chuyển.",
        "image": ""
      },
      {
        "id": "F2",
        "type": "choice",
        "prompt": "2. Can it breathe?",
        "options": [
          "Yes, it can.",
          "No, it can't."
        ],
        "answers": [
          "No, it can't."
        ],
        "explanation": "Số 2 chỉ đài phun nước. Đây là vật không sống nên không thể thở.",
        "image": ""
      },
      {
        "id": "F3",
        "type": "choice",
        "prompt": "3. Can she run fast?",
        "options": [
          "Yes, she can.",
          "No, she can't."
        ],
        "answers": [
          "Yes, she can."
        ],
        "explanation": "Số 3 chỉ bạn nữ đang chạy nhanh, nên trả lời Yes, she can.",
        "image": ""
      },
      {
        "id": "F4",
        "type": "choice",
        "prompt": "4. Can it fly?",
        "options": [
          "Yes, it can.",
          "No, it can't."
        ],
        "answers": [
          "No, it can't."
        ],
        "explanation": "Số 4 chỉ con chó. Chó không thể bay, nên trả lời No, it can't.",
        "image": ""
      },
      {
        "id": "F5",
        "type": "choice",
        "prompt": "5. Can they swim?",
        "options": [
          "Yes, they can.",
          "No, they can't."
        ],
        "answers": [
          "Yes, they can."
        ],
        "explanation": "Số 5 chỉ những con vịt đang bơi, nên trả lời Yes, they can.",
        "image": ""
      }
    ]
  },
  {
    "letter": "G",
    "title": "Circle the correct words.",
    "note": "Chọn từ hoặc cụm từ làm cho mỗi câu đúng nghĩa.",
    "points": 5,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. I can ___ a ball.",
        "options": [
          "catch",
          "bake"
        ],
        "answers": [
          "catch"
        ],
        "explanation": "Ta nói catch a ball: bắt một quả bóng. Bake dùng khi nướng bánh.",
        "image": ""
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. It's good to eat ___ food.",
        "options": [
          "healthy",
          "junk"
        ],
        "answers": [
          "healthy"
        ],
        "explanation": "Healthy food là đồ ăn tốt cho sức khỏe.",
        "image": ""
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. My kitten often ___ cats.",
        "options": [
          "runs away",
          "chases"
        ],
        "answers": [
          "chases"
        ],
        "explanation": "Chases cats nghĩa là đuổi theo mèo. Chủ ngữ My kitten là số ít nên chase thêm -s.",
        "image": ""
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "4. I often go to bed ___ at night.",
        "options": [
          "early",
          "late"
        ],
        "answers": [
          "late"
        ],
        "explanation": "Đề diễn tả thói quen đi ngủ muộn vào ban đêm: go to bed late at night.",
        "image": ""
      },
      {
        "id": "G5",
        "type": "choice",
        "prompt": "5. ___ at the traffic light.",
        "options": [
          "Stop",
          "Play outside"
        ],
        "answers": [
          "Stop"
        ],
        "explanation": "Ở đèn giao thông, em cần dừng lại: Stop at the traffic light.",
        "image": ""
      }
    ]
  },
  {
    "letter": "H",
    "title": "Look and complete the words.",
    "note": "Nhìn từng tranh rồi hoàn thành đúng cụm từ.",
    "points": 4,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. _ o _ _   _ _ d",
        "answers": [
          "go to bed"
        ],
        "explanation": "Go to bed nghĩa là đi ngủ.",
        "image": "assets/images/page3-img2-528x377.png"
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. _ u _ / a _ _ _",
        "answers": [
          "run away"
        ],
        "explanation": "Run away nghĩa là chạy đi hoặc bỏ chạy.",
        "image": "assets/images/page3-img1-526x376.png"
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. _ m _ _ _",
        "answers": [
          "smell"
        ],
        "explanation": "Bạn nhỏ đang ngửi hoa. Smell nghĩa là ngửi.",
        "image": "assets/images/page3-img4-529x378.png"
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. _ _ o _ _",
        "answers": [
          "cross"
        ],
        "explanation": "Hai bạn đang đi qua đường. Cross nghĩa là băng qua.",
        "image": "assets/images/page3-img5-527x377.png"
      }
    ]
  },
  {
    "letter": "I",
    "title": "Look and complete the sentences.",
    "note": "Quan sát tranh và điền động từ đúng dạng.",
    "points": 2,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. My sisters ___ fancy cakes and cookies.",
        "answers": [
          "bake"
        ],
        "explanation": "My sisters là nhiều chị/em gái nên dùng động từ nguyên mẫu bake, không thêm -s: My sisters bake fancy cakes and cookies.",
        "image": "assets/images/page3-img3-600x300.png"
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. When it's hot, I ___ a window.",
        "answers": [
          "open"
        ],
        "explanation": "Với chủ ngữ I, động từ giữ nguyên: I open a window.",
        "image": "assets/images/page3-img6-606x303.png"
      }
    ]
  },
  {
    "letter": "J",
    "title": "Listen and circle the correct answers.",
    "note": "Nghe audio 3.52 rồi chọn should hoặc shouldn't.",
    "points": 6,
    "audio": "assets/audio/Listening-J.mp3",
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. They ___ cross the street.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "shouldn't"
        ],
        "explanation": "Audio nói shouldn't: họ không nên băng qua đường.",
        "image": ""
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. She ___ open the window.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "should"
        ],
        "explanation": "Audio nói should: cô ấy nên mở cửa sổ.",
        "image": ""
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. It ___ chase the ball.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "shouldn't"
        ],
        "explanation": "Audio nói shouldn't: nó không nên đuổi theo quả bóng.",
        "image": ""
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. I ___ bake some cookies.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "should"
        ],
        "explanation": "Audio nói should: tôi nên nướng một ít bánh quy.",
        "image": ""
      },
      {
        "id": "J5",
        "type": "choice",
        "prompt": "5. He ___.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "should"
        ],
        "explanation": "Ở câu 5, audio chọn should.",
        "image": ""
      },
      {
        "id": "J6",
        "type": "choice",
        "prompt": "6. We ___.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "shouldn't"
        ],
        "explanation": "Ở câu 6, audio chọn shouldn't.",
        "image": ""
      }
    ]
  },
  {
    "letter": "K",
    "title": "Look and complete the sentences. Use should or shouldn't.",
    "note": "Quan sát tình huống trong tranh rồi chọn lời khuyên phù hợp.",
    "points": 4,
    "questions": [
      {
        "id": "K1",
        "type": "choice",
        "prompt": "1. They ___ play outside.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "should"
        ],
        "explanation": "Ngoài trời đẹp và các bạn muốn ra ngoài, nên dùng should.",
        "image": "assets/images/page4-img3-593x296.png"
      },
      {
        "id": "K2",
        "type": "choice",
        "prompt": "2. You ___ cross the street.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "shouldn't"
        ],
        "explanation": "Đường đang có rất nhiều xe nên em không nên băng qua đường.",
        "image": "assets/images/page4-img7-599x298.png"
      },
      {
        "id": "K3",
        "type": "choice",
        "prompt": "3. She ___ sit on the bench.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "shouldn't"
        ],
        "explanation": "Băng ghế đang ướt vì vừa được sơn hoặc lau, nên cô ấy không nên ngồi xuống.",
        "image": "assets/images/page4-img4-345x172.png"
      },
      {
        "id": "K4",
        "type": "choice",
        "prompt": "4. We ___ go to the beach.",
        "options": [
          "should",
          "shouldn't"
        ],
        "answers": [
          "shouldn't"
        ],
        "explanation": "Trời đang mưa nên gia đình không nên đi biển.",
        "image": "assets/images/page4-img1-325x168.png"
      }
    ]
  },
  {
    "letter": "L",
    "title": "Look and write the answers.",
    "note": "Nhìn tranh rồi chọn câu trả lời ngắn đúng với tình huống.",
    "points": 4,
    "questions": [
      {
        "id": "L1",
        "type": "choice",
        "prompt": "1. Should she close the umbrella?",
        "options": [
          "Yes, she should.",
          "No, she shouldn't."
        ],
        "answers": [
          "No, she shouldn't."
        ],
        "explanation": "Trời đang mưa nên cô ấy không nên đóng ô.",
        "image": "assets/images/page4-img5-589x295.png"
      },
      {
        "id": "L2",
        "type": "choice",
        "prompt": "2. Should he play the drums?",
        "options": [
          "Yes, he should.",
          "No, he shouldn't."
        ],
        "answers": [
          "No, he shouldn't."
        ],
        "explanation": "Bạn kia đang ngủ trên ghế, nên cậu bé không nên chơi trống gây tiếng ồn.",
        "image": "assets/images/page4-img8-594x296.png"
      },
      {
        "id": "L3",
        "type": "choice",
        "prompt": "3. Should they stop at the road?",
        "options": [
          "Yes, they should.",
          "No, they shouldn't."
        ],
        "answers": [
          "Yes, they should."
        ],
        "explanation": "Người điều khiển đang giơ biển STOP nên hai bạn đi xe đạp cần dừng lại.",
        "image": "assets/images/page4-img6-587x294.png"
      },
      {
        "id": "L4",
        "type": "choice",
        "prompt": "4. Should we cross the river?",
        "options": [
          "Yes, we should.",
          "No, we shouldn't."
        ],
        "answers": [
          "No, we shouldn't."
        ],
        "explanation": "Dòng sông chảy mạnh và nguy hiểm nên chúng ta không nên băng qua.",
        "image": "assets/images/page4-img9-599x301.png"
      }
    ]
  }
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
const STORAGE_KEY = "discover1-written-test9-v1-source-audit-v2";

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

function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

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
    reviews.push({ section, question, label: section.letter + (index + 1), value, correct });
  }));

  scoreValue.textContent = score;
  scoreMessage.textContent = score === 50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`;
  answerReview.innerHTML = reviews.map((review) => `<article class="review-card ${review.correct ? "" : "is-wrong"}"><div class="review-head"><h3>Câu ${review.label}</h3><span class="review-status">${review.correct ? "1/1" : "0/1"} điểm</span></div><p class="review-question">${review.question.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(review.value || "(trống)")}</b></span><span>Đáp án: <b>${html(DiscoverAnswerDisplay.formatAnswer(review.question.answers[0], {section: review.section, question: review.question}))}</b></span></div><p class="explanation"><b>Giải thích:</b> ${escapeHtml(DiscoverAnswerDisplay.formatExplanation(review.question.explanation))}</p></article>`).join("");
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
