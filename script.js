const days = [
  {
    date: "10/02",
    day: "DAY 1",
    title: "抵达深圳",
    summary: "青岛 → 深圳 → 南山科技园",
    route: "青岛 → 宝安机场 → 青旅",
    timeline: [
      ["16:15", "CZ5844 起飞", "青岛胶东 → 深圳宝安"],
      ["19:40", "抵达深圳", "取行李后前往南山"],
      ["21:00", "入住青旅", "鲟鱼向海青年旅舍 · 南山科技园"],
      ["21:30", "附近晚餐", "不安排正式建筑打卡，早点休息"]
    ]
  },

  {
    date: "10/03",
    day: "DAY 2",
    title: "深超总 · 未来深圳",
    summary: "总部建筑 + CityWalk + 深圳湾",
    route:
      "红树湾南 → 招商 → 中国电子 → C Tower → OPPO → B Tower → 碳云 → 滨河大道 → 深圳湾公园",
    timeline: [
      ["09:30", "红树湾南", "深超总 CityWalk 起点"],
      ["10:00", "招商总部建筑", "Foster + Partners"],
      ["10:40", "中国电子", "Gensler"],
      ["11:20", "C Tower", "Zaha Hadid Architects · 在建观察"],
      ["12:00", "OPPO 全球总部", "重点建筑摄影"],
      ["14:00", "B Tower", "Pelli Clarke & Partners"],
      ["15:00", "碳云大厦", "Steven Holl Architects"],
      ["16:00", "滨河大道下沉空间", "观察新开放城市景观"],
      ["17:30", "深圳湾公园", "滨水步行 / 日落"]
    ]
  },

  {
    date: "10/04",
    day: "DAY 3",
    title: "香港 · 建筑摄影日",
    summary: "西九龙 + 尖沙咀 + 中环",
    route:
      "福田 → 西九龙 → 尖沙咀 → 天星小轮 → 中环 → 香港公园 → 尖沙咀 → 西九龙",
    timeline: [
      ["07:00", "前往福田站", "香港当天不在深圳吃早餐"],
      ["08:00", "福田 → 香港西九龙", "高铁时间后续确认"],
      ["08:30", "香港西九龙站", "Aedas · 建筑打卡"],
      ["09:00", "龙城冰室", "菠萝油 + 热奶茶"],
      ["10:00", "尖沙咀", "维港 / K11 MUSEA / 街区"],
      ["11:30", "天星小轮", "尖沙咀 → 中环"],
      ["12:00", "HSBC + 中银", "Foster + I. M. Pei"],
      ["13:30", "The Henderson", "建筑 + 摄影机位"],
      ["14:30", "香港公园", "植物 / 瀑布 / 摩天楼"],
      ["15:30", "The Murray", "Foster + Partners"],
      ["16:30", "中环摄影路线", "天桥 / 皇后大道中 / J2"],
      ["18:00", "返回尖沙咀", "维港蓝调 / 海港城"],
      ["20:30", "返回西九龙", "准备高铁回深圳"]
    ]
  },

  {
    date: "10/05",
    day: "DAY 4",
    title: "福田 CBD × 华强北",
    summary: "成熟 CBD 与电子产业深圳",
    route:
      "市民中心 → 两馆 → 莲花山 → 福田 CBD → 华强北",
    timeline: [
      ["09:30", "深圳市民中心", "福田城市轴线"],
      ["10:30", "两馆", "当代艺术与城市规划馆"],
      ["12:00", "莲花山", "俯瞰福田 CBD 天际线"],
      ["14:00", "福田 CBD", "平安金融中心等城市空间"],
      ["16:00", "华强北", "电子市场 / 街道 / LED"],
      ["18:00", "蘩楼", "华强北总店"],
      ["19:30", "华强北夜景", "电子产业城市影像"]
    ]
  },

  {
    date: "10/06",
    day: "DAY 5",
    title: "南山滨海 · 慢旅行",
    summary: "K11 + 蛇口 + 万象天地",
    route:
      "K11 ECOAST → 太子湾 → 海上世界 → 万象天地 → BEGL",
    timeline: [
      ["10:00", "K11 ECOAST", "建筑 / 商业 / 滨水空间"],
      ["12:00", "太子湾", "沿海城市空间"],
      ["14:00", "海上世界", "蛇口慢走"],
      ["16:30", "万象天地", "商业建筑 / 城市公共空间"],
      ["18:00", "BEGL", "万象天地店候选"],
      ["20:00", "返回青旅", "整理行李 / 明早早起"]
    ]
  },

  {
    date: "10/07",
    day: "DAY 6",
    title: "回青岛",
    summary: "深圳 → 青岛",
    route: "青旅 → 宝安机场 → 青岛",
    timeline: [
      ["05:00", "离开青旅", "提前前往宝安机场"],
      ["07:45", "ZH9915 起飞", "深圳 → 青岛"],
      ["11:05", "抵达青岛", "旅行结束"]
    ]
  }
];

const places = [
  {
    name: "深圳湾超级总部基地",
    type: "architecture",
    icon: "🏛️",
    detail: "10/3 建筑主线 · 未来 CBD"
  },
  {
    name: "C Tower",
    type: "architecture",
    icon: "🏛️",
    detail: "Zaha Hadid Architects"
  },
  {
    name: "OPPO 全球总部",
    type: "architecture",
    icon: "🏛️",
    detail: "重点建筑摄影"
  },
  {
    name: "深圳湾文化广场",
    type: "architecture",
    icon: "🏛️",
    detail: "MAD · AirPods 建筑 · 免费公共区域优先"
  },
  {
    name: "后海大桥",
    type: "photo",
    icon: "📸",
    detail: "AirPods × 春笋目标构图 · 蓝调机位"
  },
  {
    name: "K11 ECOAST",
    type: "architecture",
    icon: "🏛️",
    detail: "蛇口 / 太子湾"
  },
  {
    name: "深圳市民中心",
    type: "architecture",
    icon: "🏛️",
    detail: "福田 CBD"
  },
  {
    name: "深圳市当代艺术与城市规划馆",
    type: "architecture",
    icon: "🏛️",
    detail: "福田建筑线"
  },
  {
    name: "肥韬茶餐厅",
    type: "food",
    icon: "🍜",
    detail: "深圳总店"
  },
  {
    name: "蘩楼",
    type: "food",
    icon: "🍜",
    detail: "华强北总店"
  },
  {
    name: "小炳胜",
    type: "food",
    icon: "🍚",
    detail: "海岸城店"
  },
  {
    name: "BEGL",
    type: "food",
    icon: "🥯",
    detail: "万象天地 / 万象前海二选一"
  },
  {
    name: "深圳自然博物馆",
    type: "optional",
    icon: "🟡",
    detail: "坪山 · 想去但暂未排入"
  },
  {
    name: "深业上城 UpperHills",
    type: "optional",
    icon: "🟡",
    detail: "有体力再去"
  },
  {
    name: "香港故宫文化博物馆",
    type: "optional",
    icon: "🟡",
    detail: "香港一日游时间允许再进入"
  }
];

const todos = [
  "确认香港天气，决定是否调整香港日期",
  "兑换 / 购买福田 → 香港西九龙高铁票",
  "确认香港故宫是否进入最终路线",
  "确认 Apple Store AirPods 购买计划",
  "检查 DJI Pocket 4 电池 / 存储卡",
  "准备充电宝与充电线",
  "确认深圳自然博物馆是否保留",
  "最终核对所有建筑开放 / 建设状态",
  "最终核对餐厅营业时间"
];

/* ---------- TABS ---------- */

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.dataset.tab)
      .classList.add("active");
  });
});

/* ---------- OVERVIEW ---------- */

const overviewDays = document.getElementById("overviewDays");

days.forEach(day => {
  const card = document.createElement("article");
  card.className = "day-overview";

  card.innerHTML = `
    <div class="day-number">
      <strong>${day.date.slice(3)}</strong>
      <span>OCT</span>
    </div>

    <div>
      <h3>${day.title}</h3>
      <p>${day.summary}</p>
    </div>
  `;

  overviewDays.appendChild(card);
});

/* ---------- DAILY PLAN ---------- */

const dailyPlans = document.getElementById("dailyPlans");

days.forEach(day => {
  const card = document.createElement("article");
  card.className = "day-card";

  const timelineHTML = day.timeline
    .map(item => `
      <div class="timeline-item">
        <div class="timeline-time">${item[0]}</div>

        <div class="timeline-content">
          <strong>${item[1]}</strong>
          <p>${item[2]}</p>
        </div>
      </div>
    `)
    .join("");

  card.innerHTML = `
    <header class="day-card-header">
      <div class="day-date">${day.day} · ${day.date}</div>
      <h2>${day.title}</h2>
      <div class="day-route">${day.route}</div>
    </header>

    <div class="timeline">
      ${timelineHTML}
    </div>
  `;

  dailyPlans.appendChild(card);
});

/* ---------- PLACES ---------- */

const placesList = document.getElementById("placesList");

function renderPlaces(filter = "all") {
  placesList.innerHTML = "";

  const filtered =
    filter === "all"
      ? places
      : places.filter(place => place.type === filter);

  filtered.forEach(place => {
    const card = document.createElement("article");
    card.className = "place-card";

    card.innerHTML = `
      <div class="place-top">
        <div>
          <h3>${place.icon} ${place.name}</h3>
          <p>${place.detail}</p>
        </div>

        <span class="place-type">
          ${getTypeLabel(place.type)}
        </span>
      </div>
    `;

    placesList.appendChild(card);
  });
}

function getTypeLabel(type) {
  const labels = {
    architecture: "建筑",
    food: "吃饭",
    photo: "机位",
    optional: "可选"
  };

  return labels[type] || "";
}

renderPlaces();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach(b => b.classList.remove("active"));

    button.classList.add("active");
    renderPlaces(button.dataset.filter);
  });
});

/* ---------- TODO ---------- */

const todoList = document.getElementById("todoList");

todos.forEach((text, index) => {
  const label = document.createElement("label");
  label.className = "todo";

  label.innerHTML = `
    <input type="checkbox" data-index="${index}">
    <span>${text}</span>
  `;

  todoList.appendChild(label);
});

todoList.addEventListener("change", event => {
  if (event.target.type === "checkbox") {
    event.target.closest(".todo")
      .classList.toggle("done", event.target.checked);
  }
});

/* ---------- COUNTDOWN ---------- */

const tripStart = new Date("2026-10-02T16:15:00+08:00");

function updateCountdown() {
  const now = new Date();
  let difference = tripStart - now;

  if (difference <= 0) {
    document.querySelector(".countdown-caption").textContent =
      "旅程已经开始";

    difference = 0;
  }

  const daysLeft = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hoursLeft = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutesLeft = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const secondsLeft = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(daysLeft).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hoursLeft).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutesLeft).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(secondsLeft).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);