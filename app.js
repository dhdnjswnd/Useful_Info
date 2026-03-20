const OFFICIAL_LINKS = {
  happyBirth: {
    label: "정부24 행복출산",
    url: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=17410000001&HighCtgCD=A01004&tp_seq=01",
  },
  parentGuide: {
    label: "복지부 부모급여 안내",
    url: "https://www.bokjiro.go.kr/ssis-tbu/cms/pc/news/news/1307668_1114.html",
  },
  hwaseong: {
    label: "화성시 공식 안내",
    url: "https://www.hscity.go.kr/www/partInfo/femaleFamily/Welfare1/Welfare1_2.jsp",
  },
  suwonBirth: {
    label: "수원시 출산지원금 안내",
    url: "https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare14/welfare14-01/welfare14-01-10.jsp",
  },
  suwonPostBirth: {
    label: "수원시 출산 후 지원",
    url: "https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare07/welfare07-01/welfare07-01-02.jsp",
  },
  suwonHerbal: {
    label: "수원시 산후조리 한약할인",
    url: "https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare14/welfare14-01/welfare14-01-13.jsp",
  },
  seongnamPostpartum: {
    label: "성남시 산후조리비 지원",
    url: "https://www.seongnam.go.kr/health/1002392/11572/contents.do",
  },
  seongnamHealthcare: {
    label: "성남시 산모신생아 건강관리",
    url: "https://www.seongnam.go.kr/health/1002094/11383/contents.do",
  },
  seongnamGgPostpartum: {
    label: "성남시 경기도 산후조리비",
    url: "https://www.seongnam.go.kr/health/1001587/11088/contents.do",
  },
  yonginBirth: {
    label: "용인시 출산지원금 지급",
    url: "https://www.yongin.go.kr/home/www/www18/www18_05/www18_05_02/www18_05_02_02.jsp",
  },
  yonginPregnancy: {
    label: "용인시 임신지원금 지급",
    url: "https://www.yongin.go.kr/home/www/www18/www18_05/www18_05_02/www18_05_02_03.jsp",
  },
  yonginGgPostpartum: {
    label: "용인시 경기도 산후조리비",
    url: "https://www.yongin.go.kr/home/health/healthSvc/mcHealth/mcHealth09/mcHealth09_01.jsp",
  },
  seoulPostpartum: {
    label: "서울형 산후조리경비 안내",
    url: "https://news.seoul.go.kr/welfare/archives/564596",
  },
  seoulMomCare: {
    label: "서울맘케어",
    url: "https://www.seoulmomcare.com",
  },
};

const CITY_CONFIGS = {
  hwaseong: {
    label: "화성시",
    summary: "화성시 거주 조건과 국가 공통 지원을 함께 반영한 기본 규칙입니다.",
    healthcareLink: OFFICIAL_LINKS.hwaseong,
    supports: [
      {
        id: "local-birth-grant",
        title: "화성시 출산지원금",
        category: "화성시 지원",
        description: "출생 순서와 거주요건에 따라 지급되는 화성시 현금성 지원입니다.",
        whenLabel: "출생 직후 바로",
        order: 60,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountRule: ({ birthOrder }) => {
          if (birthOrder === "1") return "첫째 100만원";
          if (birthOrder === "2" || birthOrder === "3") return "둘째·셋째 200만원";
          return "넷째 이상 300만원";
        },
        applyAt: "행정복지센터 또는 정부24",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        eligibilityRule: ({ residencyMet }) => residencyMet === "yes" ? "거주요건 충족으로 보아 신청 가능" : "거주요건 미충족 시 실제 접수 가능 시점 재확인 필요",
        notes: () => [
          "출생일로부터 1년 이내 신청입니다.",
        ],
        links: [OFFICIAL_LINKS.hwaseong],
      },
      {
        id: "local-postpartum",
        title: "화성시 산후조리비",
        category: "화성시 지원",
        description: "출산가정의 산후 회복과 초기 양육 부담을 덜기 위한 화성시 지원입니다.",
        whenLabel: "출생 직후 바로",
        order: 61,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountText: "출생아 1인당 50만원",
        applyAt: "행정복지센터 또는 경기민원24",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        eligibilityRule: ({ residencyMet }) => residencyMet === "yes" ? "현재 입력 기준으로 거주요건 충족" : "거주요건 확인 필요",
        notes: () => [
          "출생신고와 함께 같이 챙기는 편이 가장 쉽습니다.",
        ],
        links: [OFFICIAL_LINKS.hwaseong],
      },
    ],
  },
  suwon: {
    label: "수원시",
    summary: "수원시 출산지원금과 산후조리 한약할인, 경기도 산후조리비를 함께 반영한 버전입니다.",
    healthcareLink: OFFICIAL_LINKS.suwonPostBirth,
    supports: [
      {
        id: "local-birth-grant",
        title: "수원시 자녀 출산지원금",
        category: "수원시 지원",
        description: "수원시 거주 180일 이상 출산가정에 지급되는 출산지원금입니다.",
        whenLabel: "출생 직후 바로",
        order: 60,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountRule: ({ birthOrder }) => {
          if (birthOrder === "1") return "첫째 50만원";
          if (birthOrder === "2") return "둘째 100만원";
          if (birthOrder === "3") return "셋째 200만원";
          return "넷째 500만원, 다섯째 이상 1,000만원";
        },
        applyAt: "동 행정복지센터",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        eligibilityRule: ({ residencyMet }) => residencyMet === "yes" ? "수원시 180일 거주요건 충족으로 입력됨" : "180일 거주 미충족 시 180일 경과 후 신청 가능 여부 확인 필요",
        notes: () => ["출생일로부터 1년 이내 신청입니다."],
        links: [OFFICIAL_LINKS.suwonBirth],
      },
      {
        id: "local-herbal",
        title: "수원시 산후조리 한약할인",
        category: "수원시 지원",
        description: "둘째아 이상 출산 여성에게 산후조리 한약 비용 일부를 할인해주는 수원시 사업입니다.",
        whenLabel: "출생 직후 바로",
        order: 62,
        tone: "cool",
        deadlineType: "birth_plus_days",
        deadlineDays: 60,
        amountText: "20만원 이상 한약 이용 시 10만원 할인",
        applyAt: "주소지 동 행정복지센터",
        whoRule: () => "엄마 본인",
        eligibilityRule: ({ birthOrder }) => Number(birthOrder) >= 2 ? "둘째 이상이면 대상 가능성 있음" : "첫째는 대상 아님",
        notes: () => ["출산일로부터 2개월 이내 신청입니다."],
        links: [OFFICIAL_LINKS.suwonHerbal],
      },
      {
        id: "local-gg-postpartum",
        title: "경기도 산후조리비 지원",
        category: "경기도 공통 지원",
        description: "경기도 출생 등록과 거주요건을 충족하면 지역화폐로 지급되는 산후조리비입니다.",
        whenLabel: "출생 직후 바로",
        order: 61,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountText: "출생아 1인당 50만원",
        applyAt: "출생아 첫 주소지 관할 행정복지센터 또는 경기민원24",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        notes: () => ["출생일 기준 12개월 이내 신청입니다."],
        links: [OFFICIAL_LINKS.suwonPostBirth],
      },
    ],
  },
  seongnam: {
    label: "성남시",
    summary: "성남시 산후조리비와 경기도 산후조리비를 함께 반영한 버전입니다.",
    healthcareLink: OFFICIAL_LINKS.seongnamHealthcare,
    supports: [
      {
        id: "local-postpartum",
        title: "성남시 산후조리비 지원",
        category: "성남시 지원",
        description: "기준중위소득 80% 이하 출산가구를 대상으로 하는 성남시 산후조리비 지원입니다.",
        whenLabel: "출생 직후 바로",
        order: 60,
        tone: "warm",
        deadlineType: "birth_plus_months",
        deadlineMonths: 6,
        amountText: "산후조리원 이용료의 90%, 최대 50만원",
        applyAt: "주소지 관할 보건소",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        eligibilityRule: ({ residencyMet }) => residencyMet === "yes" ? "성남시 6개월 거주 전제로 정리" : "출생일 기준 6개월 거주 여부와 소득기준 확인 필요",
        notes: () => ["출생일 기준 6개월 전부터 성남시 거주 요건과 기준중위소득 80% 이하 조건이 중요합니다."],
        links: [OFFICIAL_LINKS.seongnamPostpartum],
      },
      {
        id: "local-gg-postpartum",
        title: "경기도 산후조리비 지원",
        category: "경기도 공통 지원",
        description: "경기도 출생 등록과 거주요건을 충족하면 지역화폐로 지급되는 산후조리비입니다.",
        whenLabel: "출생 직후 바로",
        order: 61,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountText: "출생아 1인당 50만원",
        applyAt: "출생아 첫 주소지 관할 행정복지센터",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        notes: () => ["출생일 기준 12개월 이내 신청입니다."],
        links: [OFFICIAL_LINKS.seongnamGgPostpartum],
      },
    ],
  },
  yongin: {
    label: "용인시",
    summary: "용인시 임신지원금, 출산지원금, 경기도 산후조리비를 함께 반영한 버전입니다.",
    healthcareLink: OFFICIAL_LINKS.yonginGgPostpartum,
    supports: [
      {
        id: "local-pregnancy-support",
        title: "용인시 임신지원금",
        category: "용인시 지원",
        description: "20주 이상 임신부에게 태아당 지역화폐를 지급하는 용인시 임신 단계 지원입니다.",
        whenLabel: "임신 20주 이후",
        order: 5,
        tone: "cool",
        deadlineType: "before_birth",
        amountText: "태아당 30만원",
        applyAt: "행정복지센터 또는 정부24",
        whoRule: () => "엄마 본인",
        notes: () => ["출산 전까지만 신청 가능하므로 아직 신청 전이면 먼저 확인하는 것이 좋습니다."],
        links: [OFFICIAL_LINKS.yonginPregnancy],
      },
      {
        id: "local-birth-grant",
        title: "용인시 출산지원금",
        category: "용인시 지원",
        description: "용인시 출생 등록과 180일 거주 요건을 충족한 가정에 지급되는 출산지원금입니다.",
        whenLabel: "출생 직후 바로",
        order: 60,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountRule: ({ birthOrder }) => {
          if (birthOrder === "1") return "첫째 30만원";
          if (birthOrder === "2") return "둘째 50만원";
          if (birthOrder === "3") return "셋째 100만원";
          if (birthOrder === "4") return "넷째 200만원";
          return "다섯째 이상 300만원";
        },
        applyAt: "주소지 읍·면·동 행정복지센터 및 정부24",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        eligibilityRule: ({ residencyMet }) => residencyMet === "yes" ? "용인시 180일 거주 전제로 정리" : "180일 거주 미충족 시 계속 거주 후 신청 가능 여부 확인 필요",
        notes: () => ["출생일로부터 1년 이내 신청입니다."],
        links: [OFFICIAL_LINKS.yonginBirth],
      },
      {
        id: "local-gg-postpartum",
        title: "경기도 산후조리비 지원",
        category: "경기도 공통 지원",
        description: "경기도 출생 등록과 거주요건을 충족하면 지역화폐로 지급되는 산후조리비입니다.",
        whenLabel: "출생 직후 바로",
        order: 61,
        tone: "warm",
        deadlineType: "birth_plus_years",
        deadlineYears: 1,
        amountText: "출생아 1인당 50만원",
        applyAt: "출생아 첫 주소지 관할 행정복지센터 또는 경기민원24",
        whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
        notes: () => ["출생일 기준 12개월 이내 신청입니다."],
        links: [OFFICIAL_LINKS.yonginGgPostpartum],
      },
    ],
  },
  seoul: {
    label: "서울특별시",
    summary: "서울형 산후조리경비를 포함한 서울 거주 산모 기준 버전입니다.",
    healthcareLink: OFFICIAL_LINKS.seoulPostpartum,
    supports: [
      {
        id: "local-postpartum",
        title: "서울형 산후조리경비",
        category: "서울시 지원",
        description: "서울 거주 산모에게 출생아 1인당 100만원 상당 바우처를 지원하는 서울시 사업입니다.",
        whenLabel: "출생 직후 바로",
        order: 60,
        tone: "warm",
        deadlineType: "asap_after_birth",
        amountText: "출생아 1인당 100만원 상당 바우처",
        applyAt: "서울맘케어 또는 동주민센터",
        whoRule: () => "엄마 본인 권장",
        eligibilityRule: () => "2024년부터 6개월 이상 거주 요건이 폐지된 서울 거주 산모 기준으로 정리",
        notes: () => [
          "사용기한은 출생 후 1년으로 연장된 기준을 반영했습니다.",
          "신청 자체는 출생 직후 바로 해두는 편이 가장 안전합니다.",
        ],
        links: [OFFICIAL_LINKS.seoulPostpartum, OFFICIAL_LINKS.seoulMomCare],
      },
    ],
  },
};

const COMMON_SUPPORT_ORDER = {
  healthcare: 10,
  birthRegistration: 20,
  happyBirth: 30,
  parentBenefit: 40,
  childAllowance: 41,
  firstMeeting: 42,
};

const form = document.getElementById("generator-form");
const resultNode = document.getElementById("result");
const template = document.getElementById("result-template");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderResult(readInputs());
});

renderResult(readInputs());

function readInputs() {
  return {
    dueDate: document.getElementById("dueDate").value,
    city: document.getElementById("city").value,
    birthOrder: document.getElementById("birthOrder").value,
    maritalStatus: document.getElementById("maritalStatus").value,
    residencyMet: document.getElementById("residencyMet").value,
    primaryApplicant: document.getElementById("primaryApplicant").value,
    notes: document.getElementById("notes").value.trim(),
  };
}

function renderResult(input) {
  const cityConfig = CITY_CONFIGS[input.city];
  const supports = [
    ...buildCommonSupports(cityConfig, input),
    ...cityConfig.supports,
  ]
    .map((support) => materializeSupport(support, input))
    .sort((a, b) => a.order - b.order);

  const timelineItems = buildTimeline(supports);
  const node = template.content.cloneNode(true);

  node.querySelector(".result-title").textContent = `${formatDateKorean(input.dueDate)} 출산 예정 기준 타임라인`;
  node.querySelector(".result-subtitle").textContent = `${cityConfig.label} 기준으로 생성한 결과입니다. ${cityConfig.summary}`;

  const chips = node.querySelector(".chips");
  [
    cityConfig.label,
    birthOrderLabel(input.birthOrder),
    maritalStatusLabel(input.maritalStatus),
    input.residencyMet === "yes" ? "거주요건 충족" : "거주요건 재확인 필요",
  ].forEach((text) => chips.appendChild(makeChip(text)));

  const summaryGrid = node.querySelector(".summary-grid");
  [
    ["출생신고 권장 주체", input.maritalStatus === "not_registered" ? "엄마" : "부 또는 모"],
    ["핵심 신청 주체", input.maritalStatus === "not_registered" ? "엄마 중심" : primaryApplicantLabel(input.primaryApplicant)],
    ["가장 빠른 시작", earliestActionText(supports)],
    ["가장 중요한 마감", mainDeadlineText(supports)],
  ].forEach(([label, value]) => {
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `<div class="label">${escapeHtml(label)}</div><div class="value">${highlightText(escapeHtml(value))}</div>`;
    summaryGrid.appendChild(card);
  });

  const timelineList = node.querySelector(".timeline-list");
  timelineItems.forEach((item) => timelineList.appendChild(renderTimelineItem(item)));

  const supportList = node.querySelector(".support-list");
  supports.forEach((support) => supportList.appendChild(renderSupportCard(support)));

  const notesBox = node.querySelector(".notes-box");
  const notes = buildNotes(input);
  const list = document.createElement("ul");
  notes.forEach((note) => {
    const li = document.createElement("li");
    li.innerHTML = highlightText(escapeHtml(note));
    list.appendChild(li);
  });
  notesBox.appendChild(list);

  resultNode.replaceChildren(node);
}

function buildCommonSupports(cityConfig, input) {
  return [
    {
      id: "healthcare",
      title: "산모·신생아 건강관리 지원",
      category: "임신·산후 지원",
      description: "출산 전후로 건강관리사 서비스를 이용할 때 비용을 지원하는 항목입니다.",
      whenLabel: "예정일 40일 전부터",
      order: COMMON_SUPPORT_ORDER.healthcare,
      tone: "cool",
      deadlineType: cityConfig.label === "성남시" ? "birth_plus_days" : "birth_plus_days",
      deadlineDays: cityConfig.label === "성남시" ? 60 : cityConfig.label === "수원시" ? 60 : 30,
      startType: "due_minus_days",
      startDays: 40,
      amountText: "서비스 유형별 상이",
      applyAt: "행정복지센터, 보건소 또는 복지로",
      whoRule: () => "산모 본인 권장",
      notes: () => [
        "출산 전에 신청해두는 쪽이 카드 발급과 일정 조율 면에서 안전합니다.",
        cityConfig.label === "성남시" || cityConfig.label === "수원시"
          ? "공식 안내상 출산 후 60일까지 접수 가능한 지역입니다."
          : "공식 안내상 출산 후 30일 전후까지만 보는 지역이 많아 미리 신청이 안전합니다.",
      ],
      links: cityConfig.healthcareLink ? [cityConfig.healthcareLink, OFFICIAL_LINKS.happyBirth] : [OFFICIAL_LINKS.happyBirth],
    },
    {
      id: "birth-registration",
      title: "출생신고",
      category: "필수 절차",
      description: "모든 후속 지원 신청의 출발점입니다. 혼인신고 미완료 상태라면 출생신고 주체를 특히 주의해야 합니다.",
      whenLabel: "출산 직후 최우선",
      order: COMMON_SUPPORT_ORDER.birthRegistration,
      tone: "gold",
      deadlineType: "birth_plus_days",
      deadlineDays: 30,
      amountText: "지원금 아님",
      applyAt: "행정복지센터 등",
      whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "부 또는 모",
      notes: ({ maritalStatus }) => [
        maritalStatus === "not_registered"
          ? "혼인신고 미완료 상태라면 엄마 기준 진행이 가장 안전합니다."
          : "혼인신고 완료 상태라면 부 또는 모 중 편한 쪽이 진행 가능합니다.",
        "출생신고가 늦어지면 뒤 지원 신청도 같이 늦어집니다.",
      ],
      links: [OFFICIAL_LINKS.happyBirth],
    },
    {
      id: "happy-birth",
      title: "행복출산 원스톱서비스",
      category: "일괄 신청",
      description: "출생신고와 함께 여러 출산·양육 지원을 묶어서 신청하는 통합 접수 단계입니다.",
      whenLabel: "출생신고 직후",
      order: COMMON_SUPPORT_ORDER.happyBirth,
      tone: "gold",
      deadlineType: "asap_after_birth",
      amountText: "여러 지원 일괄 신청",
      applyAt: "출생신고 주민센터 또는 연계 온라인",
      whoRule: ({ maritalStatus, primaryApplicant }) => {
        if (maritalStatus === "not_registered") return "엄마 권장";
        if (primaryApplicant === "father") return "아빠 가능";
        return "엄마 또는 아빠";
      },
      notes: () => [
        "첫만남이용권, 부모급여, 아동수당과 지역 지원을 같이 점검합니다.",
        "출생신고하는 날 바로 접수하면 누락이 적습니다.",
      ],
      links: [OFFICIAL_LINKS.happyBirth],
    },
    {
      id: "parent-benefit",
      title: "부모급여",
      category: "국가 지원",
      description: "0세와 1세 아동 양육을 위해 매월 지급되는 현금성 지원입니다.",
      whenLabel: "출생 직후 바로",
      order: COMMON_SUPPORT_ORDER.parentBenefit,
      tone: "warm",
      deadlineType: "birth_plus_days",
      deadlineDays: 60,
      amountText: "0세 월 100만원, 1세 월 50만원",
      applyAt: "복지로, 정부24, 주민센터",
      whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "친부모 또는 실질 보호자",
      notes: ({ maritalStatus }) => [
        "출생일 포함 60일 이내 신청하는 것이 안전합니다.",
        "60일 내 신청해야 출생한 달 기준 반영에 유리합니다.",
        maritalStatus === "not_registered"
          ? "온라인 자격 확인이 애매하면 주민센터 방문이 더 안전할 수 있습니다."
          : "온라인 또는 방문 신청 모두 검토 가능합니다.",
      ],
      links: [OFFICIAL_LINKS.happyBirth, OFFICIAL_LINKS.parentGuide],
    },
    {
      id: "child-allowance",
      title: "아동수당",
      category: "국가 지원",
      description: "만 8세 미만 아동에게 월 단위로 지급되는 기본 수당입니다.",
      whenLabel: "출생 직후 바로",
      order: COMMON_SUPPORT_ORDER.childAllowance,
      tone: "warm",
      deadlineType: "birth_plus_days",
      deadlineDays: 60,
      amountText: "월 10만원",
      applyAt: "복지로, 정부24, 주민센터",
      whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "보호자",
      notes: ({ maritalStatus }) => [
        "출생일 포함 60일 이내 신청하는 것이 안전합니다.",
        maritalStatus === "not_registered"
          ? "보호자 자격이 애매하면 방문 신청이 더 단순합니다."
          : "온라인 신청도 가능합니다.",
      ],
      links: [OFFICIAL_LINKS.happyBirth, OFFICIAL_LINKS.parentGuide],
    },
    {
      id: "first-meeting",
      title: "첫만남이용권",
      category: "국가 지원",
      description: "출생 아동에게 지급되는 바우처 형태 지원입니다.",
      whenLabel: "출생 직후 바로",
      order: COMMON_SUPPORT_ORDER.firstMeeting,
      tone: "cool",
      deadlineType: "birth_plus_years",
      deadlineYears: 2,
      amountRule: ({ birthOrder }) => Number(birthOrder) >= 2 ? "300만원" : "200만원",
      applyAt: "행복출산, 복지로, 주민센터",
      whoRule: ({ maritalStatus }) => maritalStatus === "not_registered" ? "엄마 권장" : "보호자",
      notes: () => ["마감은 2년으로 여유가 있지만 출생 직후 신청하는 편이 실사용에 유리합니다."],
      links: [OFFICIAL_LINKS.happyBirth],
    },
  ];
}

function materializeSupport(support, input) {
  return {
    ...support,
    who: support.whoRule ? support.whoRule(input) : "-",
    amount: support.amountRule ? support.amountRule(input) : support.amountText || "-",
    eligibility: support.eligibilityRule ? support.eligibilityRule(input) : null,
    deadlineText: formatDeadline(support, input),
    startText: support.startType ? formatStart(support, input) : null,
    supportNotes: support.notes ? support.notes(input) : [],
    links: support.links || [],
  };
}

function buildTimeline(supports) {
  return supports.map((support) => ({
    tone: support.tone || "warm",
    when: support.startText ? `${support.whenLabel}\n${support.startText}` : support.whenLabel,
    title: support.title,
    tags: [support.category, `누가: ${support.who}`, `마감: ${support.deadlineText}`],
    bullets: [
      support.description,
      `신청 위치: ${support.applyAt}`,
      `혜택/성격: ${support.amount}`,
      ...(support.eligibility ? [`조건 메모: ${support.eligibility}`] : []),
      ...support.supportNotes,
    ],
  }));
}

function renderTimelineItem(item) {
  const article = document.createElement("article");
  article.className = `timeline-item tone-${item.tone}`;

  const tagHtml = item.tags.map((tag) => `<span class="tag">${highlightText(escapeHtml(tag))}</span>`).join("");
  const bulletsHtml = item.bullets.map((bullet) => `<li>${highlightText(escapeHtml(bullet))}</li>`).join("");

  article.innerHTML = `
    <div class="time-box">${highlightText(escapeHtml(item.when)).replace("\n", "<br>")}</div>
    <div class="timeline-content">
      <h4>${highlightText(escapeHtml(item.title))}</h4>
      <div class="timeline-meta">${tagHtml}</div>
      <ul>${bulletsHtml}</ul>
    </div>
  `;

  return article;
}

function renderSupportCard(support) {
  const article = document.createElement("article");
  article.className = "support-card";
  const meta = [
    support.category,
    `누가 신청: ${support.who}`,
    `혜택: ${support.amount}`,
    `마감: ${support.deadlineText}`,
  ];
  if (support.startText) meta.push(`신청 시작 참고: ${support.startText}`);

  const metaHtml = meta.map((tag) => `<span class="tag">${highlightText(escapeHtml(tag))}</span>`).join("");
  const notesHtml = support.supportNotes.map((note) => `<li>${highlightText(escapeHtml(note))}</li>`).join("");
  const linkHtml = support.links
    .map((link) => `<a class="link-button" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join("");

  article.innerHTML = `
    <h4>${highlightText(escapeHtml(support.title))}</h4>
    <div class="support-meta">${metaHtml}</div>
    <p>${highlightText(escapeHtml(support.description))}</p>
    <ul>
      <li>${highlightText(escapeHtml(`신청 위치: ${support.applyAt}`))}</li>
      ${support.eligibility ? `<li>${highlightText(escapeHtml(`조건 메모: ${support.eligibility}`))}</li>` : ""}
      ${notesHtml}
    </ul>
    <details>
      <summary>상세 보기</summary>
      <ul>
        <li>${highlightText(escapeHtml(`신청 주체: ${support.who}`))}</li>
        <li>${highlightText(escapeHtml(`혜택: ${support.amount}`))}</li>
        <li>${highlightText(escapeHtml(`마감: ${support.deadlineText}`))}</li>
        ${support.startText ? `<li>${highlightText(escapeHtml(`신청 시작 참고: ${support.startText}`))}</li>` : ""}
      </ul>
    </details>
    <div class="support-actions">${linkHtml}</div>
  `;

  return article;
}

function buildNotes(input) {
  const cityLabel = CITY_CONFIGS[input.city].label;
  const notes = [
    input.maritalStatus === "not_registered"
      ? "혼인신고 미완료 상태라면 엄마 기준 출생신고와 주요 신청 진행이 가장 안전합니다."
      : "혼인신고 완료 상태라면 부 또는 모 기준으로 조금 더 유연하게 신청 동선을 잡을 수 있습니다.",
    input.primaryApplicant === "father" && input.maritalStatus === "not_registered"
      ? "입력값상 아빠 중심 진행을 원하지만, 현재 조건에서는 아빠 단독 온라인 처리보다 주민센터 방문이 더 안전할 수 있습니다."
      : "출생신고 당일 행복출산 원스톱서비스까지 묶어 처리하면 누락이 줄어듭니다.",
    `${cityLabel} 지역 지원은 변동 가능성이 있으므로 신청 직전 공식 링크를 한 번 더 확인하는 것이 안전합니다.`,
  ];

  if (input.notes) notes.push(`사용자 메모: ${input.notes}`);
  return notes;
}

function earliestActionText(supports) {
  const supportsWithStart = supports.filter((support) => support.startText);
  if (!supportsWithStart.length) return "출생 직후부터";
  supportsWithStart.sort((a, b) => new Date(extractIsoDate(a.startText)) - new Date(extractIsoDate(b.startText)));
  return `${supportsWithStart[0].title} (${supportsWithStart[0].startText})`;
}

function mainDeadlineText(supports) {
  const support = supports.find((item) => item.id === "parent-benefit");
  return support ? `${support.title} ${support.deadlineText}` : "출생 직후 바로 확인";
}

function formatDeadline(support, input) {
  if (support.deadlineType === "birth_plus_days") {
    return `${formatDate(addDays(input.dueDate, support.deadlineDays))} 전후`;
  }
  if (support.deadlineType === "birth_plus_years") {
    return `${formatDate(addYears(input.dueDate, support.deadlineYears, -1))} 전후`;
  }
  if (support.deadlineType === "birth_plus_months") {
    return `${formatDate(addMonths(input.dueDate, support.deadlineMonths))} 전후`;
  }
  if (support.deadlineType === "before_birth") {
    return "출산 전까지";
  }
  if (support.deadlineType === "asap_after_birth") {
    return "출생신고 직후 바로";
  }
  return "-";
}

function formatStart(support, input) {
  if (support.startType === "due_minus_days") {
    return `${formatDate(addDays(input.dueDate, -support.startDays))} 전후`;
  }
  return "-";
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date;
}

function addYears(dateString, years, dayOffset = 0) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setFullYear(date.getFullYear() + years);
  if (dayOffset !== 0) date.setDate(date.getDate() + dayOffset);
  return date;
}

function addMonths(dateString, months) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setMonth(date.getMonth() + months);
  date.setDate(date.getDate() - 1);
  return date;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function formatDateKorean(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function birthOrderLabel(value) {
  return value === "1" ? "첫째" : value === "2" ? "둘째" : value === "3" ? "셋째" : "넷째 이상";
}

function maritalStatusLabel(value) {
  return value === "registered" ? "혼인신고 완료" : "혼인신고 안 함";
}

function primaryApplicantLabel(value) {
  if (value === "father") return "아빠 중심";
  if (value === "both") return "둘이 같이";
  return "엄마 중심";
}

function makeChip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function extractIsoDate(text) {
  const match = text.match(/\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : "9999-12-31";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function highlightText(text) {
  const patterns = [
    /엄마 권장/g,
    /엄마 중심/g,
    /출생신고 직후 바로/g,
    /출생 직후 바로/g,
    /출산 전까지/g,
    /출생일 포함 60일 이내/g,
    /출생일로부터 1년 이내/g,
    /출생일 기준 12개월 이내/g,
    /거주요건 재확인 필요/g,
    /거주요건 충족/g,
    /출산 전 신청/g,
    /방문 신청/g,
    /60일/g,
    /1년 이내/g,
  ];

  let output = text;
  patterns.forEach((pattern) => {
    output = output.replace(pattern, (match) => `<span class="highlight">${match}</span>`);
  });
  return output;
}
