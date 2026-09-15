"use strict";

/* =========================================================
   HKSZ TRIP PLAN · V2.4
   Visual Routes & Direct Navigation
   Timezone: Asia/Shanghai · UTC+8
========================================================= */

const VERSION = "2.4";
const STORAGE_TODO = "hksz-trip-v24-todos";
const STORAGE_CHECKINS = "hksz-trip-v24-checkins";

const ROUTES = [
  { id: "all", label: "全部", subtitle: "完整旅行" },
  { id: "szbay", label: "10/3 深超总", subtitle: "未来深圳" },
  { id: "hk", label: "10/4 香港", subtitle: "天气机动" },
  { id: "futian", label: "10/5 福田", subtitle: "成熟深圳" },
  { id: "nanshan", label: "10/6 南山", subtitle: "蛇口 · 太子湾" },
  { id: "houhai", label: "MAD 后海", subtitle: "待编入主线" },
  { id: "optional", label: "可选", subtitle: "机动项目" }
];

const places = [
  {
    id: "hotel",
    name: "鲟鱼向海青年旅舍",
    subtitle: "南山科技园店",
    category: "🏨 住宿",
    city: "shenzhen",
    route: "all",
    mapQuery: "南山区科技南二路与高新南四道交叉口南50米路东",
    verifiedNav: true,
    note: "10/2–10/7 · 深圳住宿锚点"
  },
  {
    id: "hongshuwan",
    name: "红树湾南站",
    category: "🚇 交通",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "红树湾南地铁站",
    verifiedNav: true,
    note: "深超总 CityWalk 起点"
  },
  {
    id: "cmb",
    name: "招商银行全球总部",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "",
    verifiedNav: false,
    note: "Foster + Partners · 深超总。准确百度 POI 继续核实。"
  },
  {
    id: "chinaelectronics",
    name: "中国电子深圳湾总部基地",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "",
    verifiedNav: false,
    note: "Gensler · 在建项目，准确导航点待核实。"
  },
  {
    id: "ctower",
    name: "C Tower",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "中建五局深圳湾超级总部基地-C塔",
    verifiedNav: true,
    note: "Zaha Hadid Architects · 已锁定百度 POI"
  },
  {
    id: "oppo",
    name: "欧加大厦 / OPPO 全球总部",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "",
    verifiedNav: false,
    note: "深超总重点项目。与 C Tower 分开，导航点待核实。"
  },
  {
    id: "btower",
    name: "B Tower",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "深圳市南山区深湾三路与白石四道交会处",
    verifiedNav: true,
    note: "Pelli Clarke & Partners · 已锁定导航地址"
  },
  {
    id: "carbon",
    name: "碳云大厦",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "",
    verifiedNav: false,
    note: "Steven Holl Architects · 导航点待核实"
  },
  {
    id: "railin",
    name: "睿印 RAIL IN",
    category: "🟠 城市",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "睿印RAIL IN",
    verifiedNav: true,
    note: "地铁 / 街道 / 商业空间，短停"
  },
  {
    id: "szbaypark",
    name: "深圳湾公园",
    category: "🌅 景观",
    city: "shenzhen",
    route: "szbay",
    mapQuery: "深圳湾公园",
    verifiedNav: true,
    note: "深超总日滨水终点"
  },

  {
    id: "culture",
    name: "深圳湾文化广场",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "houhai",
    mapQuery: "深圳湾文化广场",
    verifiedNav: true,
    note: "MAD Architects · 科苑南路2516号"
  },
  {
    id: "talentpark",
    name: "深圳人才公园",
    category: "🌿 景观",
    city: "shenzhen",
    route: "houhai",
    mapQuery: "深圳人才公园",
    verifiedNav: true,
    note: "MAD / 后海摄影路线节点"
  },
  {
    id: "houhaibridge",
    name: "后海大桥摄影点",
    category: "📸 摄影",
    city: "shenzhen",
    route: "houhai",
    mapQuery: "后海大桥",
    verifiedNav: true,
    note: "AirPods × 春笋构图；具体站位仍需现场确认"
  },

  {
    id: "civic",
    name: "深圳市民中心",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "futian",
    mapQuery: "深圳市民中心",
    verifiedNav: true,
    note: "福田 CBD 主线"
  },
  {
    id: "mocaup",
    name: "深圳市当代艺术与城市规划馆",
    category: "🏛 建筑",
    city: "shenzhen",
    route: "futian",
    mapQuery: "深圳市当代艺术与城市规划馆",
    verifiedNav: true,
    note: "福田区福中路184号"
  },
  {
    id: "lianhua",
    name: "莲花山公园",
    category: "🌿 景观",
    city: "shenzhen",
    route: "futian",
    mapQuery: "莲花山公园",
    verifiedNav: true,
    note: "城市天际线观察，不安排重度爬山"
  },
  {
    id: "pingan",
    name: "平安金融中心",
    category: "🏙 城市",
    city: "shenzhen",
    route: "futian",
    mapQuery: "平安金融中心",
    verifiedNav: true,
    note: "福田 CBD 城市空间"
  },
  {
    id: "hqbstreet",
    name: "华强北步行街",
    category: "🟠 城市",
    city: "shenzhen",
    route: "futian",
    mapQuery: "华强北步行街",
    verifiedNav: true,
    note: "电子产业与城市观察"
  },
  {
    id: "seg",
    name: "赛格广场",
    category: "🏙 建筑",
    city: "shenzhen",
    route: "futian",
    mapQuery: "赛格广场",
    verifiedNav: true,
    note: "华强北节点"
  },
  {
    id: "fanlou",
    name: "蘩楼（华强北总店）",
    category: "🍜 餐饮",
    city: "shenzhen",
    route: "futian",
    mapQuery: "蘩楼华强北总店",
    verifiedNav: true,
    note: "原计划餐厅 · 振华路118号附近"
  },
  {
    id: "feitao",
    name: "肥韬茶餐厅（深圳总店）",
    category: "🍜 餐饮",
    city: "shenzhen",
    route: "futian",
    mapQuery: "肥韬茶餐厅深圳总店",
    verifiedNav: true,
    note: "原计划餐厅 · 华发北路"
  },

  {
    id: "k11",
    name: "K11 ECOAST",
    category: "🏙 城市",
    city: "shenzhen",
    route: "nanshan",
    mapQuery: "K11 ECOAST",
    verifiedNav: true,
    note: "太子湾路56号"
  },
  {
    id: "taiziwan",
    name: "太子湾",
    category: "🌿 城市",
    city: "shenzhen",
    route: "nanshan",
    mapQuery: "太子湾",
    verifiedNav: true,
    note: "蛇口滨水主线"
  },
  {
    id: "seaworld",
    name: "海上世界",
    category: "🟠 城市",
    city: "shenzhen",
    route: "nanshan",
    mapQuery: "海上世界",
    verifiedNav: true,
    note: "蛇口城市空间"
  },
  {
    id: "mixcworld",
    name: "万象天地",
    category: "🟠 城市",
    city: "shenzhen",
    route: "nanshan",
    mapQuery: "深圳万象天地",
    verifiedNav: true,
    note: "当前优先于万象前海"
  },
  {
    id: "begl",
    name: "BEGL",
    category: "☕ 休息",
    city: "shenzhen",
    route: "nanshan",
    mapQuery: "BEGL 万象天地",
    verifiedNav: true,
    note: "下午休息节点"
  },
  {
    id: "xiaobingsheng",
    name: "小炳胜（海岸城店）",
    category: "🍽️ 餐饮",
    city: "shenzhen",
    route: "nanshan",
    mapQuery: "小炳胜海岸城店",
    verifiedNav: true,
    note: "原计划晚餐候选"
  },

  {
    id: "natural",
    name: "深圳自然博物馆",
    category: "🏛 博物馆",
    city: "shenzhen",
    route: "optional",
    mapQuery: "深圳自然博物馆",
    verifiedNav: true,
    note: "坪山区文祥路6号 · 距南山较远，暂不硬塞主线"
  },

  {
    id: "westkowloon",
    name: "香港西九龙站",
    category: "🚄 交通",
    city: "hongkong",
    route: "hk",
    mapQuery: "Hong Kong West Kowloon Station",
    verifiedNav: true,
    note: "Aedas · 香港一日游交通锚点"
  },
  {
    id: "hsbc",
    name: "香港汇丰银行总部大楼",
    category: "🏛 建筑",
    city: "hongkong",
    route: "hk",
    mapQuery: "HSBC Main Building Hong Kong",
    verifiedNav: true,
    note: "Foster + Partners · 1986"
  },
  {
    id: "boc",
    name: "香港中银大厦",
    category: "🏛 建筑",
    city: "hongkong",
    route: "hk",
    mapQuery: "Bank of China Tower Hong Kong",
    verifiedNav: true,
    note: "I. M. Pei · 1989"
  },
  {
    id: "henderson",
    name: "The Henderson",
    category: "🏛 建筑",
    city: "hongkong",
    route: "hk",
    mapQuery: "The Henderson 2 Murray Road Hong Kong",
    verifiedNav: true,
    note: "Zaha Hadid Architects"
  },
  {
    id: "hkpark",
    name: "香港公园",
    category: "🌿 景观",
    city: "hongkong",
    route: "hk",
    mapQuery: "Hong Kong Park",
    verifiedNav: true,
    note: "建筑与植物、城市高层构图"
  },
  {
    id: "murray",
    name: "The Murray",
    category: "🏛 建筑",
    city: "hongkong",
    route: "hk",
    mapQuery: "The Murray Hong Kong",
    verifiedNav: true,
    note: "Foster + Partners · 2018"
  },
  {
    id: "starferry",
    name: "天星小轮",
    category: "⛴️ 交通",
    city: "hongkong",
    route: "hk",
    mapQuery: "Star Ferry Pier Central",
    verifiedNav: true,
    note: "维港过海"
  },
  {
    id: "k11musea",
    name: "K11 MUSEA",
    category: "🏙 城市",
    city: "hongkong",
    route: "hk",
    mapQuery: "K11 MUSEA Hong Kong",
    verifiedNav: true,
    note: "尖沙咀滨水"
  },
  {
    id: "harbourcity",
    name: "海港城",
    category: "🟠 城市",
    city: "hongkong",
    route: "hk",
    mapQuery: "Harbour City Hong Kong",
    verifiedNav: true,
    note: "维港 / Ocean Terminal Deck"
  }
];

const days = [
  {
    id: "d1",
    date: "10/2",
    fullDate: "2026-10-02",
    title: "抵达深圳",
    theme: "青岛 → 深圳 · 入住南山",
    route: "arrival",
    events: [
      event("16:15", "CZ5844 起飞", "青岛胶东 T1 → 深圳宝安 T3", "✈️ 航班", null, "transit"),
      event("19:40", "抵达深圳宝安 T3", "落地、取行李", "✈️ 抵达", null, "transit"),
      event("20:25", "前往南山住宿", "机场 → 南山科技园", "🚇 交通", "hotel", "transit"),
      event("21:30", "晚饭 / 夜宵", "餐厅下一步补充，以酒店附近顺路为优先", "🍜 餐饮", null, "walking")
    ]
  },
  {
    id: "d2",
    date: "10/3",
    fullDate: "2026-10-03",
    title: "深超总 · 未来深圳",
    theme: "红树湾南 → 深超总 → 深圳湾",
    route: "szbay",
    events: [
      event("08:30", "早餐", "下一步补充顺路早餐", "🍳 早餐", null, "walking"),
      event("09:30", "红树湾南站", "深超总 CityWalk 起点", "🚇 起点", "hongshuwan", "transit"),
      event("10:00", "招商银行全球总部", "Foster + Partners", "🏛 建筑", "cmb", "walking"),
      event("10:35", "中国电子深圳湾总部基地", "Gensler", "🏛 建筑", "chinaelectronics", "walking"),
      event("11:10", "C Tower", "Zaha Hadid Architects", "🏛 建筑", "ctower", "walking"),
      event("12:15", "午饭", "下一步补充深超总 / 后海顺路餐厅", "🍜 午餐", null, "walking"),
      event("13:45", "欧加大厦 / OPPO 全球总部", "深超总重点项目", "🏛 建筑", "oppo", "walking"),
      event("14:30", "B Tower", "Pelli Clarke & Partners", "🏛 建筑", "btower", "walking"),
      event("15:10", "碳云大厦", "Steven Holl Architects", "🏛 建筑", "carbon", "walking"),
      event("16:00", "睿印 RAIL IN", "短停 / 休息", "🟠 城市", "railin", "walking"),
      event("17:15", "深圳湾公园", "滨水、日落；根据体力调整", "🌅 景观", "szbaypark", "walking"),
      event("19:00", "晚饭", "下一步从后海 / 南山顺路餐厅中选择", "🍽️ 晚餐", null, "transit")
    ]
  },
  {
    id: "d3",
    date: "10/4",
    fullDate: "2026-10-04",
    title: "香港建筑 CityWalk",
    theme: "暂定 · 天气机动 10/3–10/6",
    route: "hk",
    events: [
      event("06:50", "前往福田站", "深圳 → 香港", "🚇 交通", null, "transit"),
      event("08:00", "福田 → 香港西九龙", "高铁班次待最终确认", "🚄 高铁", "westkowloon", "transit"),
      event("08:45", "香港早餐", "龙城冰室等候选，下一步确认", "🍳 早餐", null, "walking"),
      event("10:10", "天星小轮 / 维港", "进入中环建筑路线", "⛴️ 城市", "starferry", "transit"),
      event("10:45", "香港汇丰银行总部", "Foster + Partners", "🏛 建筑", "hsbc", "walking"),
      event("11:15", "香港中银大厦", "I. M. Pei", "🏛 建筑", "boc", "walking"),
      event("12:15", "香港午饭", "中环顺路餐厅下一步补充", "🍜 午餐", null, "walking"),
      event("13:30", "The Henderson", "Zaha Hadid Architects", "🏛 建筑", "henderson", "walking"),
      event("14:15", "香港公园", "植物 × 高层建筑", "🌿 景观", "hkpark", "walking"),
      event("15:00", "The Murray", "Foster + Partners", "🏛 建筑", "murray", "walking"),
      event("15:45", "下午休息 / 奶茶", "根据当天体力决定", "☕ 休息", null, "walking"),
      event("17:15", "K11 MUSEA", "尖沙咀滨水", "🏙 城市", "k11musea", "transit"),
      event("18:10", "海港城 / Ocean Terminal", "维港蓝调时刻", "📸 摄影", "harbourcity", "walking"),
      event("19:00", "香港晚饭", "尖沙咀顺路餐厅下一步补充", "🍽️ 晚餐", null, "walking"),
      event("20:30", "返回西九龙", "按最终高铁班次倒推", "🚄 返程", "westkowloon", "walking")
    ]
  },
  {
    id: "d4",
    date: "10/5",
    fullDate: "2026-10-05",
    title: "福田 · 成熟深圳",
    theme: "市民中心 → 两馆 → CBD → 华强北",
    route: "futian",
    events: [
      event("08:30", "早餐", "科技园附近顺路解决", "🍳 早餐", null, "walking"),
      event("10:00", "深圳市民中心", "福田 CBD 城市空间", "🏛 建筑", "civic", "transit"),
      event("10:50", "当代艺术与城市规划馆", "开放时间 / 国庆安排出发前复核", "🏛 建筑", "mocaup", "walking"),
      event("12:30", "午饭", "福田 CBD 顺路餐厅下一步补充", "🍜 午餐", null, "walking"),
      event("14:00", "莲花山公园", "城市天际线观察", "🌿 景观", "lianhua", "walking"),
      event("15:30", "平安金融中心 / 福田 CBD", "成熟深圳城市空间", "🏙 城市", "pingan", "transit"),
      event("17:00", "华强北步行街", "电子产业与城市观察", "🟠 城市", "hqbstreet", "transit"),
      event("17:40", "赛格广场", "华强北节点", "🏙 建筑", "seg", "walking"),
      event("19:00", "晚饭", "蘩楼 / 肥韬等，下一步最终选择", "🍽️ 晚餐", "fanlou", "walking")
    ]
  },
  {
    id: "d5",
    date: "10/6",
    fullDate: "2026-10-06",
    title: "蛇口 · 南山滨水",
    theme: "K11 ECOAST → 太子湾 → 蛇口 → 万象天地",
    route: "nanshan",
    events: [
      event("08:45", "早餐", "这天节奏较慢，可安排完整早餐", "🍳 早餐", null, "walking"),
      event("10:15", "K11 ECOAST", "太子湾滨水城市空间", "🏙 城市", "k11", "transit"),
      event("11:20", "太子湾", "滨水步行", "🌿 城市", "taiziwan", "walking"),
      event("12:30", "午饭", "蛇口 / 海上世界顺路餐厅下一步补充", "🍜 午餐", null, "walking"),
      event("14:00", "海上世界", "蛇口城市空间", "🟠 城市", "seaworld", "walking"),
      event("16:20", "万象天地", "回到南山主线", "🟠 城市", "mixcworld", "transit"),
      event("17:00", "BEGL", "下午休息", "☕ 休息", "begl", "walking"),
      event("18:45", "晚饭", "小炳胜等候选，下一步确认", "🍽️ 晚餐", "xiaobingsheng", "transit"),
      event("20:30", "回酒店整理行李", "为次日早班机准备", "🏨 住宿", "hotel", "transit")
    ]
  },
  {
    id: "d6",
    date: "10/7",
    fullDate: "2026-10-07",
    title: "返程",
    theme: "南山 → 深圳宝安 T3 → 青岛",
    route: "departure",
    events: [
      event("04:45", "起床 / 退房", "早班机，不安排市区活动", "🏨 退房", "hotel", "walking"),
      event("05:10", "前往深圳宝安机场", "预留国庆客流时间", "🚕 交通", null, "transit"),
      event("06:10", "机场早餐", "过安检后就近解决", "🍳 早餐", null, "walking"),
      event("07:45", "ZH9915 起飞", "深圳宝安 T3 → 青岛胶东 T1", "✈️ 航班", null, "transit"),
      event("11:05", "抵达青岛", "旅行完成", "🏁 抵达", null, "walking")
    ]
  }
];

function event(time, title, detail, type, placeId, mode) {
  return { time, title, detail, type, placeId, mode };
}

const DEFAULT_TODOS = [
  "临近出发比较 10/3–10/6 香港天气，确认是否保留 10/4",
  "购买 / 兑换福田 ↔ 香港西九龙高铁票",
  "确认香港返程最晚可接受高铁班次",
  "确认深圳湾文化广场 10 月展览与开放安排",
  "确认深圳自然博物馆是否加入主线",
  "检查 Pocket 4、iPhone、充电宝与充电线",
  "确认 10/6 小炳胜是否需要预约",
  "继续补齐每天早餐、午餐、晚餐",
  "继续核实深超总在建项目准确百度导航点"
];

let activeRoute = "all";
let selectedDayId = "d1";
let todos = loadTodos();
let checkins = loadCheckins();

function $(id) {
  return document.getElementById(id);
}

function getPlace(id) {
  return places.find(place => place.id === id) || null;
}

/* =========================================================
   TIME
========================================================= */

function tripTimestamp(date, time) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  return Date.UTC(
    year,
    month - 1,
    day,
    hour - 8,
    minute,
    0
  );
}

function allTimedEvents() {
  const output = [];

  days.forEach(day => {
    day.events.forEach(item => {
      output.push({
        ...item,
        day,
        timestamp: tripTimestamp(day.fullDate, item.time)
      });
    });
  });

  return output.sort((a, b) => a.timestamp - b.timestamp);
}

function findNextEvent(now) {
  return allTimedEvents().find(item => item.timestamp > now) || null;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateNowCard() {
  const now = Date.now();
  const next = findNextEvent(now);

  const tripStart = tripTimestamp("2026-10-02", "16:15");
  const tripEnd = tripTimestamp("2026-10-07", "11:05");

  if (!next) {
    $("nowStatusBadge").textContent = "旅行完成";
    $("nowEventDate").textContent = "2026.10.07 · GMT+8";
    $("nowEventTitle").textContent = "深圳 × 香港旅行完成";
    $("nowEventDetail").textContent = "欢迎回来。";
    $("nowNextShort").textContent = "FINISHED";

    ["countdownDays", "countdownHours", "countdownMinutes", "countdownSeconds"]
      .forEach(id => $(id).textContent = "00");

    return;
  }

  const difference = Math.max(0, next.timestamp - now);
  const seconds = Math.floor(difference / 1000);

  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  $("countdownDays").textContent = pad(d);
  $("countdownHours").textContent = pad(h);
  $("countdownMinutes").textContent = pad(m);
  $("countdownSeconds").textContent = pad(s);

  $("nowEventDate").textContent =
    `${next.day.fullDate.replaceAll("-", ".")} · ${next.time} · GMT+8`;

  $("nowEventTitle").textContent = next.title;
  $("nowEventDetail").textContent = next.detail;
  $("nowNextShort").textContent = next.day.title;

  if (now < tripStart) {
    $("nowStatusBadge").textContent = "出发倒计时";
  } else if (now <= tripEnd) {
    $("nowStatusBadge").textContent = "旅行进行中";
  } else {
    $("nowStatusBadge").textContent = "旅行完成";
  }
}

/* =========================================================
   TABS
========================================================= */

function initTabs() {
  document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;

      document.querySelectorAll(".tab-button").forEach(item => {
        item.classList.toggle("active", item === button);
      });

      document.querySelectorAll(".tab-panel").forEach(panel => {
        panel.classList.toggle("active", panel.id === tab);
      });
    });
  });
}

/* =========================================================
   OVERVIEW
========================================================= */

function getTodayShanghaiDate() {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date());
  } catch {
    return "";
  }
}

function renderOverview() {
  const today = getTodayShanghaiDate();

  $("overviewDays").innerHTML = days.map(day => `
    <button
      type="button"
      class="overview-day ${today === day.fullDate ? "today" : ""}"
      data-day="${day.id}"
    >
      <span class="overview-date">${day.date}</span>

      <span>
        <strong>${escapeHtml(day.title)}</strong>
        <p>${escapeHtml(day.theme)}</p>
      </span>

      <span class="day-arrow">→</span>
    </button>
  `).join("");

  document.querySelectorAll(".overview-day").forEach(button => {
    button.addEventListener("click", () => {
      selectedDayId = button.dataset.day;
      $("daySelect").value = selectedDayId;
      renderDaily();

      document.querySelector('[data-tab="days"]').click();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================
   MAP
========================================================= */

function renderRouteFilters() {
  $("routeFilter").innerHTML = ROUTES.map(route => `
    <button
      type="button"
      class="${activeRoute === route.id ? "active" : ""}"
      data-route="${route.id}"
    >
      ${escapeHtml(route.label)}
    </button>
  `).join("");

  document.querySelectorAll("#routeFilter button").forEach(button => {
    button.addEventListener("click", () => {
      activeRoute = button.dataset.route;
      renderMap();
    });
  });
}

function renderRouteAxis() {
  const routes = ROUTES.filter(route => route.id !== "all");

  $("routeAxis").innerHTML = routes.map(route => `
    <button
      type="button"
      class="route-axis-button ${activeRoute === route.id ? "active" : ""}"
      data-route="${route.id}"
    >
      <strong>${escapeHtml(route.label)}</strong>
      <span>${escapeHtml(route.subtitle)}</span>
    </button>
  `).join("");

  document.querySelectorAll(".route-axis-button").forEach(button => {
    button.addEventListener("click", () => {
      activeRoute = button.dataset.route;
      renderMap();
    });
  });
}

function filteredPlaces() {
  if (activeRoute === "all") return places;
  return places.filter(place => place.route === activeRoute);
}

function renderMapPlaces() {
  const list = filteredPlaces();

  $("mapPlaces").innerHTML = list.map(place => {
    const checked = Boolean(checkins[place.id]);

    return `
      <article class="place-card">
        <div class="place-card-top">
          <div>
            <span class="place-category">${escapeHtml(place.category)}</span>
            <h3>${escapeHtml(place.name)}</h3>
          </div>

          <span class="place-status ${place.verifiedNav ? "verified" : "pending"}">
            ${place.verifiedNav ? "导航已核实" : "导航点待核实"}
          </span>
        </div>

        ${place.subtitle ? `<p>${escapeHtml(place.subtitle)}</p>` : ""}
        <p>${escapeHtml(place.note)}</p>

        <div class="place-actions">
          ${
            place.verifiedNav
              ? `<button type="button" class="action-button poi-nav" data-place="${place.id}">
                   📍 查看地点
                 </button>`
              : `<button type="button" class="action-button" aria-disabled="true" disabled>
                   ⚠️ 暂不导航
                 </button>`
          }

          <button
            type="button"
            class="checkin-button ${checked ? "checked" : ""}"
            data-checkin="${place.id}"
          >
            ${checked ? "✓ 已到过" : "○ 到此打卡"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".poi-nav").forEach(button => {
    button.addEventListener("click", () => {
      openPlaceNavigation(getPlace(button.dataset.place));
    });
  });

  document.querySelectorAll("[data-checkin]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.checkin;
      checkins[id] = !checkins[id];
      saveCheckins();
      renderMapPlaces();
    });
  });
}

function renderRouteVisual() {
  const route = ROUTES.find(item => item.id === activeRoute);
  $("mapVisualTitle").textContent = route ? route.label : "全部路线";

  const list = filteredPlaces().slice(0, 10);

  if (!list.length) {
    $("interactiveRouteVisual").innerHTML = "<p>暂无地点。</p>";
    return;
  }

  const width = 700;
  const height = Math.max(220, 90 + list.length * 48);

  const points = list.map((place, index) => ({
    place,
    x: index % 2 === 0 ? 210 : 480,
    y: 55 + index * 48
  }));

  const polyline = points.map(point => `${point.x},${point.y}`).join(" ");

  $("interactiveRouteVisual").innerHTML = `
    <svg
      class="dynamic-route-svg"
      viewBox="0 0 ${width} ${height}"
      role="img"
      aria-label="当前路线简化示意图"
    >
      <rect width="${width}" height="${height}" rx="20" fill="#f7f2ea"></rect>

      <polyline
        points="${polyline}"
        fill="none"
        stroke="#b8afa3"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="8 8"
      ></polyline>

      ${points.map((point, index) => `
        <g>
          <circle
            cx="${point.x}"
            cy="${point.y}"
            r="12"
            fill="${point.place.verifiedNav ? "#5e8068" : "#a88135"}"
            stroke="#fff"
            stroke-width="4"
          ></circle>

          <text
            x="${point.x + (index % 2 === 0 ? 22 : -22)}"
            y="${point.y + 4}"
            text-anchor="${index % 2 === 0 ? "start" : "end"}"
            font-size="13"
            font-weight="650"
            fill="#4f4a43"
          >
            ${escapeSvgText(shortName(point.place.name))}
          </text>
        </g>
      `).join("")}

      <text x="20" y="${height - 16}" font-size="10" fill="#8b857c">
        Schematic / not to scale · 节点顺序用于旅行理解，不表示真实道路与距离
      </text>
    </svg>
  `;
}

function renderMap() {
  renderRouteFilters();
  renderRouteAxis();
  renderRouteVisual();
  renderMapPlaces();
}

/* =========================================================
   NAVIGATION
========================================================= */

function googlePlaceUrl(place) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(place.mapQuery || place.name)
  );
}

function googleDirectionsUrl(origin, destination, mode = "walking") {
  const travelmode = mode === "transit" ? "transit" : "walking";

  return (
    "https://www.google.com/maps/dir/?api=1" +
    "&origin=" + encodeURIComponent(origin.mapQuery || origin.name) +
    "&destination=" + encodeURIComponent(destination.mapQuery || destination.name) +
    "&travelmode=" + travelmode
  );
}

function baiduPlaceWebUrl(place) {
  return (
    "https://api.map.baidu.com/place/search" +
    "?query=" + encodeURIComponent(place.mapQuery || place.name) +
    "&region=" + encodeURIComponent("深圳") +
    "&output=html" +
    "&src=SZHKTrip2026"
  );
}

function baiduPlaceAppUrl(place) {
  return (
    "baidumap://map/place/search" +
    "?query=" + encodeURIComponent(place.mapQuery || place.name) +
    "&region=" + encodeURIComponent("深圳") +
    "&src=SZHKTrip2026"
  );
}

function baiduDirectionAppUrl(origin, destination, mode = "walking") {
  const baiduMode = mode === "transit" ? "transit" : "walking";

  return (
    "baidumap://map/direction" +
    "?origin=" + encodeURIComponent("name:" + (origin.mapQuery || origin.name)) +
    "&destination=" + encodeURIComponent("name:" + (destination.mapQuery || destination.name)) +
    "&mode=" + baiduMode +
    "&src=SZHKTrip2026"
  );
}

function baiduDirectionWebUrl(origin, destination, mode = "walking") {
  const baiduMode = mode === "transit" ? "transit" : "walking";

  return (
    "https://api.map.baidu.com/direction" +
    "?origin=" + encodeURIComponent(origin.mapQuery || origin.name) +
    "&destination=" + encodeURIComponent(destination.mapQuery || destination.name) +
    "&mode=" + baiduMode +
    "&region=" + encodeURIComponent("深圳") +
    "&output=html" +
    "&src=SZHKTrip2026"
  );
}

/*
  Important:
  We intentionally do not replace the current trip page with the Baidu
  web fallback. A blank temporary window is opened first. If Baidu App
  launches successfully, the original dashboard remains untouched.
*/

function launchBaidu(appUrl, webUrl, title) {
  const fallbackWindow = window.open("", "_blank");

  if (fallbackWindow) {
    fallbackWindow.document.write(`
      <!doctype html>
      <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>正在打开百度地图</title>
        <style>
          body{
            margin:0;
            padding:30px;
            font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;
            background:#f4efe7;
            color:#292723;
          }
          .card{
            max-width:420px;
            margin:40px auto;
            padding:22px;
            background:#fffdf9;
            border:1px solid #e6ded2;
            border-radius:22px;
          }
          a{
            display:inline-block;
            margin-top:14px;
            color:#c86f4a;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <strong>${escapeHtml(title)}</strong>
          <p>正在尝试打开百度地图 App…</p>
          <p>如果没有自动打开，请点击下面的备用链接。</p>
          <a href="${escapeAttribute(webUrl)}">打开百度地图网页版</a>
        </div>
      </body>
      </html>
    `);
    fallbackWindow.document.close();
  }

  window.location.href = appUrl;

  window.setTimeout(() => {
    if (fallbackWindow && !fallbackWindow.closed) {
      fallbackWindow.location.href = webUrl;
    }
  }, 1200);
}

function openPlaceNavigation(place) {
  if (!place || !place.verifiedNav) {
    showToast("这个地点的准确导航点还没有核实。");
    return;
  }

  if (place.city === "hongkong") {
    window.open(googlePlaceUrl(place), "_blank", "noopener");
    return;
  }

  launchBaidu(
    baiduPlaceAppUrl(place),
    baiduPlaceWebUrl(place),
    place.name
  );
}

function openDirectRoute(origin, destination, mode) {
  if (!origin || !destination) {
    return;
  }

  if (!origin.verifiedNav || !destination.verifiedNav) {
    showToast("这段路线包含尚未核实的导航点，暂不生成错误路线。");
    return;
  }

  if (origin.city === "hongkong" && destination.city === "hongkong") {
    window.open(
      googleDirectionsUrl(origin, destination, mode),
      "_blank",
      "noopener"
    );
    return;
  }

  if (origin.city === "shenzhen" && destination.city === "shenzhen") {
    launchBaidu(
      baiduDirectionAppUrl(origin, destination, mode),
      baiduDirectionWebUrl(origin, destination, mode),
      `${origin.name} → ${destination.name}`
    );
    return;
  }

  showToast("跨城市路段请按当天交通节点执行。");
}

/* =========================================================
   DAILY PLAN
========================================================= */

function initDaySelect() {
  $("daySelect").innerHTML = days.map(day => `
    <option value="${day.id}">
      ${day.date} · ${escapeHtml(day.title)}
    </option>
  `).join("");

  const today = getTodayShanghaiDate();
  const matching = days.find(day => day.fullDate === today);

  if (matching) {
    selectedDayId = matching.id;
  }

  $("daySelect").value = selectedDayId;

  $("daySelect").addEventListener("change", event => {
    selectedDayId = event.target.value;
    renderDaily();
  });
}

function dayRoutePlaces(day) {
  const output = [];

  day.events.forEach(item => {
    if (!item.placeId) return;

    const place = getPlace(item.placeId);
    if (!place) return;

    if (!output.some(existing => existing.id === place.id)) {
      output.push(place);
    }
  });

  return output;
}

function createDaySvg(day) {
  const routePlaces = dayRoutePlaces(day);

  if (!routePlaces.length) {
    return `
      <div class="navigation-fallback">
        当天以航班 / 交通为主，暂无可绘制的地点路线。
      </div>
    `;
  }

  const width = 700;
  const height = Math.max(210, 90 + routePlaces.length * 52);

  const points = routePlaces.map((place, index) => ({
    place,
    x: index % 2 === 0 ? 195 : 505,
    y: 55 + index * 52
  }));

  return `
    <svg
      class="dynamic-route-svg"
      viewBox="0 0 ${width} ${height}"
      role="img"
      aria-label="${escapeAttribute(day.date + " " + day.title + "路线示意图")}"
    >
      <rect width="${width}" height="${height}" rx="20" fill="#f7f2ea"></rect>

      <polyline
        points="${points.map(point => `${point.x},${point.y}`).join(" ")}"
        fill="none"
        stroke="#b8afa3"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></polyline>

      ${points.map((point, index) => `
        <g>
          <circle
            cx="${point.x}"
            cy="${point.y}"
            r="13"
            fill="${point.place.verifiedNav ? "#5e8068" : "#a88135"}"
            stroke="#ffffff"
            stroke-width="4"
          ></circle>

          <text
            x="${point.x + (index % 2 === 0 ? 24 : -24)}"
            y="${point.y + 4}"
            text-anchor="${index % 2 === 0 ? "start" : "end"}"
            font-size="13"
            font-weight="650"
            fill="#4f4a43"
          >
            ${escapeSvgText(shortName(point.place.name))}
          </text>
        </g>
      `).join("")}

      <text
        x="20"
        y="${height - 15}"
        font-size="10"
        fill="#8b857c"
      >
        Schematic / not to scale · 实际路线以百度地图 / Google Maps 为准
      </text>
    </svg>
  `;
}

function previousNavigablePlace(day, currentIndex) {
  for (let index = currentIndex - 1; index >= 0; index--) {
    const item = day.events[index];

    if (!item.placeId) continue;

    const place = getPlace(item.placeId);

    if (place) {
      return place;
    }
  }

  return null;
}

function navigationButtonForEvent(day, item, index) {
  if (!item.placeId) {
    return "";
  }

  const destination = getPlace(item.placeId);

  if (!destination) return "";

  if (!destination.verifiedNav) {
    return `
      <div class="timeline-nav">
        <button class="route-nav-button" type="button" disabled>
          ⚠️ 导航点待核实
        </button>
        <div class="nav-pending-note">
          为避免导航到同名错误地点，这一站暂不生成路线。
        </div>
      </div>
    `;
  }

  const origin = previousNavigablePlace(day, index);

  if (!origin) {
    return `
      <div class="timeline-nav">
        <button
          class="route-nav-button daily-start-nav"
          type="button"
          data-destination="${destination.id}"
        >
          📍 导航到今日起点 ↗
        </button>
      </div>
    `;
  }

  if (!origin.verifiedNav) {
    return `
      <div class="timeline-nav">
        <button
          class="route-nav-button daily-start-nav"
          type="button"
          data-destination="${destination.id}"
        >
          📍 打开本站位置 ↗
        </button>

        <div class="nav-pending-note">
          上一地点尚未核实，暂不生成 A → B 路线。
        </div>
      </div>
    `;
  }

  return `
    <div class="timeline-nav">
      <button
        class="route-nav-button daily-route-nav"
        type="button"
        data-origin="${origin.id}"
        data-destination="${destination.id}"
        data-mode="${item.mode || "walking"}"
      >
        📍 ${escapeHtml(shortName(origin.name))}
        → ${escapeHtml(shortName(destination.name))}
        · 路线导航 ↗
      </button>
    </div>
  `;
}

function renderDaily() {
  const day = days.find(item => item.id === selectedDayId) || days[0];

  $("dailyContent").innerHTML = `
    <article class="day-header-card">
      <div class="day-header-top">
        <div>
          <span class="day-number">${escapeHtml(day.date)} · GMT+8</span>
          <h2>${escapeHtml(day.title)}</h2>
          <p>${escapeHtml(day.theme)}</p>
        </div>
      </div>

      <button
        type="button"
        class="day-route-toggle"
        aria-expanded="false"
      >
        🗺 展开当日路线示意
      </button>

      <div class="day-route-map" hidden>
        ${createDaySvg(day)}
      </div>
    </article>

    <div class="timeline">
      ${day.events.map((item, index) => `
        <article class="timeline-event">
          <div class="timeline-time">
            ${escapeHtml(item.time)}
          </div>

          <div class="timeline-body ${item.type.includes("餐") || item.type.includes("早餐") ? "meal-placeholder" : ""}">
            <span class="timeline-type">
              ${escapeHtml(item.type)}
            </span>

            <h3>${escapeHtml(item.title)}</h3>

            <p>${escapeHtml(item.detail)}</p>

            ${navigationButtonForEvent(day, item, index)}
          </div>
        </article>
      `).join("")}
    </div>
  `;

  const toggle = document.querySelector(".day-route-toggle");
  const map = document.querySelector(".day-route-map");

  if (toggle && map) {
    toggle.addEventListener("click", () => {
      const open = !map.hidden;
      map.hidden = open;
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.textContent = open
        ? "🗺 展开当日路线示意"
        : "🗺 收起当日路线示意";
    });
  }

  document.querySelectorAll(".daily-start-nav").forEach(button => {
    button.addEventListener("click", () => {
      openPlaceNavigation(getPlace(button.dataset.destination));
    });
  });

  document.querySelectorAll(".daily-route-nav").forEach(button => {
    button.addEventListener("click", () => {
      openDirectRoute(
        getPlace(button.dataset.origin),
        getPlace(button.dataset.destination),
        button.dataset.mode
      );
    });
  });
}

/* =========================================================
   TODO
========================================================= */

function loadTodos() {
  try {
    const stored = localStorage.getItem(STORAGE_TODO);

    if (stored !== null) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (error) {
    console.warn("Todo storage unavailable:", error);
  }

  return DEFAULT_TODOS.map((text, index) => ({
    id: "default-" + index,
    text,
    done: false
  }));
}

function saveTodos() {
  try {
    localStorage.setItem(STORAGE_TODO, JSON.stringify(todos));
  } catch (error) {
    console.warn("Unable to save todos:", error);
  }
}

function renderTodos() {
  if (!todos.length) {
    $("todoList").innerHTML = `
      <div class="navigation-fallback">
        暂无待办。可以在上方添加。
      </div>
    `;
    return;
  }

  $("todoList").innerHTML = todos.map(todo => `
    <div class="todo-item ${todo.done ? "done" : ""}">
      <input
        class="todo-check"
        type="checkbox"
        data-todo-check="${escapeAttribute(todo.id)}"
        ${todo.done ? "checked" : ""}
        aria-label="完成待办"
      >

      <span class="todo-text">
        ${escapeHtml(todo.text)}
      </span>

      <button
        type="button"
        class="todo-delete"
        data-todo-delete="${escapeAttribute(todo.id)}"
        aria-label="删除待办"
      >
        ×
      </button>
    </div>
  `).join("");

  document.querySelectorAll("[data-todo-check]").forEach(input => {
    input.addEventListener("change", () => {
      const todo = todos.find(item => item.id === input.dataset.todoCheck);

      if (!todo) return;

      todo.done = input.checked;
      saveTodos();
      renderTodos();
    });
  });

  document.querySelectorAll("[data-todo-delete]").forEach(button => {
    button.addEventListener("click", () => {
      todos = todos.filter(item => item.id !== button.dataset.todoDelete);
      saveTodos();
      renderTodos();
    });
  });
}

function initTodoForm() {
  $("todoForm").addEventListener("submit", event => {
    event.preventDefault();

    const input = $("todoInput");
    const text = input.value.trim();

    if (!text) return;

    todos.push({
      id: "todo-" + Date.now(),
      text,
      done: false
    });

    input.value = "";
    saveTodos();
    renderTodos();
  });
}

/* =========================================================
   CHECKINS
========================================================= */

function loadCheckins() {
  try {
    const stored = localStorage.getItem(STORAGE_CHECKINS);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveCheckins() {
  try {
    localStorage.setItem(STORAGE_CHECKINS, JSON.stringify(checkins));
  } catch (error) {
    console.warn("Unable to save check-ins:", error);
  }
}

/* =========================================================
   CHANGELOG
========================================================= */

function initChangelog() {
  $("openChangelog").addEventListener("click", async () => {
    $("changelogModal").hidden = false;
    document.body.style.overflow = "hidden";

    try {
      const response = await fetch(
        "./CHANGELOG.md?v=" + Date.now(),
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error("Unable to load changelog");
      }

      const markdown = await response.text();
      $("changelogContent").innerHTML = markdownToHtml(markdown);
    } catch {
      $("changelogContent").innerHTML =
        "<p>暂时无法读取 CHANGELOG.md，请刷新后重试。</p>";
    }
  });

  $("closeChangelog").addEventListener("click", closeChangelog);

  $("changelogModal").addEventListener("click", event => {
    if (event.target === $("changelogModal")) {
      closeChangelog();
    }
  });
}

function closeChangelog() {
  $("changelogModal").hidden = true;
  document.body.style.overflow = "";
}

function markdownToHtml(markdown) {
  return markdown
    .split("\n")
    .map(line => {
      const safe = escapeHtml(line);

      if (line.startsWith("### ")) {
        return `<h3>${safe.slice(4)}</h3>`;
      }

      if (line.startsWith("## ")) {
        return `<h2>${safe.slice(3)}</h2>`;
      }

      if (line.startsWith("# ")) {
        return `<h2>${safe.slice(2)}</h2>`;
      }

      if (line.startsWith("- ")) {
        return `<p>• ${safe.slice(2)}</p>`;
      }

      if (!line.trim()) {
        return "<br>";
      }

      return `<p>${safe}</p>`;
    })
    .join("");
}

/* =========================================================
   NAV MODAL LEGACY SAFE INITIALIZATION
========================================================= */

function initNavigationModal() {
  const modal = $("navigationModal");
  const close = $("closeNavigationModal");

  if (!modal || !close) return;

  close.addEventListener("click", () => {
    modal.hidden = true;
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.hidden = true;
    }
  });
}

/* =========================================================
   UTILITIES
========================================================= */

function shortName(name) {
  if (name.length <= 16) return name;

  return name
    .replace("深圳市", "")
    .replace("香港", "")
    .replace("（华强北总店）", "")
    .replace("（海岸城店）", "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function escapeSvgText(value) {
  return escapeHtml(value);
}

let toastTimer = null;

function showToast(message) {
  const toast = $("toast");

  toast.textContent = message;
  toast.hidden = false;

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2600);
}

/* =========================================================
   INITIALIZATION
========================================================= */

function init() {
  initTabs();

  renderOverview();

  renderMap();

  initDaySelect();
  renderDaily();

  initTodoForm();
  renderTodos();

  initChangelog();
  initNavigationModal();

  updateNowCard();
  window.setInterval(updateNowCard, 1000);
}

init();