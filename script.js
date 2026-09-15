const VERSION = "2.3";

const STORAGE = {
  todos: "hksz_v23_todos",
  checks: "hksz_v23_checks"
};

const pad = n => String(n).padStart(2, "0");

const esc = s =>
  String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));


/* ==========================================================
   TRIP DATA
========================================================== */

const tripDays = [
  {
    date: "10/02",
    day: "DAY 1",
    title: "抵达深圳",
    theme: "青岛 → 深圳 · 入住南山",
    events: [
      [
        "16:15",
        "CZ5844 起飞",
        "青岛胶东 T1 → 深圳宝安 T3",
        "transport",
        "青岛胶东国际机场"
      ],
      [
        "19:40",
        "抵达深圳",
        "取行李后前往南山科技园",
        "transport",
        "深圳宝安国际机场T3航站楼"
      ],
      [
        "21:20",
        "入住青旅",
        "鲟鱼向海青年旅舍（南山科技园店）",
        "hotel",
        "鲟鱼向海青年旅舍 南山科技园店"
      ],
      [
        "21:40",
        "附近简单晚饭",
        "不安排远距离打卡，早点休息",
        "food",
        "南山科技园"
      ]
    ]
  },

  {
    date: "10/03",
    day: "DAY 2",
    title: "深超总 · 未来深圳",
    theme: "建筑主线 · 不赶路",
    events: [
      [
        "09:20",
        "红树湾南",
        "深超总 CityWalk 起点",
        "transport",
        "红树湾南地铁站"
      ],
      [
        "09:40",
        "招商银行全球总部",
        "Foster + Partners · 观察塔楼与城市界面",
        "architecture",
        "招商银行全球总部 深圳"
      ],
      [
        "10:30",
        "中国电子深圳湾总部基地",
        "Gensler · 超总建筑群",
        "architecture",
        "中国电子深圳湾总部基地"
      ],
      [
        "11:20",
        "C Tower",
        "Zaha Hadid Architects · 建设中的未来深圳",
        "architecture",
        "C Tower 深圳湾超级总部基地"
      ],
      [
        "12:00",
        "OPPO 全球总部 / 欧加大厦",
        "重点项目，预留建筑观察与拍摄时间",
        "architecture",
        "OPPO全球总部 深圳湾超级总部基地"
      ],
      [
        "13:10",
        "午饭 / 休息",
        "就近解决，不为餐厅折返",
        "food",
        "深圳湾超级总部基地"
      ],
      [
        "14:20",
        "B Tower",
        "PCPA 项目，现场确认施工与可视范围",
        "architecture",
        "深圳湾超级总部基地 B Tower"
      ],
      [
        "15:00",
        "碳云大厦",
        "Steven Holl Architects",
        "architecture",
        "碳云大厦 深圳"
      ],
      [
        "16:00",
        "滨河大道下沉段",
        "看交通基础设施与新开放地面绿化",
        "city",
        "滨河大道 深圳湾超级总部基地"
      ],
      [
        "17:20",
        "深圳湾公园",
        "作为当天滨水收尾，按体力决定停留",
        "city",
        "深圳湾公园"
      ]
    ]
  },

  {
    date: "10/04",
    day: "DAY 3",
    title: "🇭🇰 香港建筑摄影日",
    theme: "暂定 10/4 · 天气可整体换日",
    events: [
      [
        "07:15",
        "前往福田站",
        "预留过关与高铁时间；车次待订",
        "transport",
        "福田站"
      ],
      [
        "09:00",
        "香港西九龙站",
        "Aedas · 抵港建筑第一站",
        "architecture",
        "Hong Kong West Kowloon Station"
      ],
      [
        "09:30",
        "尖沙咀早餐",
        "龙城冰室优先：菠萝油 + 热奶茶",
        "food",
        "龙城冰室 尖沙咀"
      ],
      [
        "10:20",
        "尖沙咀 / 西九龙城市步行",
        "根据高铁实际到达时间压缩或展开",
        "city",
        "Tsim Sha Tsui Hong Kong"
      ],
      [
        "11:00",
        "天星小轮 → 中环",
        "把维港交通本身作为城市体验",
        "transport",
        "Star Ferry Pier Tsim Sha Tsui"
      ],
      [
        "11:30",
        "汇丰银行总部",
        "Foster + Partners · 1986",
        "architecture",
        "HSBC Main Building Hong Kong"
      ],
      [
        "12:00",
        "中银大厦",
        "I. M. Pei · 1989 · 重点",
        "architecture",
        "Bank of China Tower Hong Kong"
      ],
      [
        "12:35",
        "中环摄影机位",
        "花园道 / 中银对面天桥等按现场顺路拍摄",
        "photo",
        "Garden Road Hong Kong"
      ],
      [
        "13:10",
        "The Henderson",
        "Zaha Hadid Architects · 2 Murray Road",
        "architecture",
        "The Henderson Hong Kong"
      ],
      [
        "13:50",
        "香港公园",
        "高楼、植物、水景之间的城市空间",
        "city",
        "Hong Kong Park"
      ],
      [
        "14:25",
        "The Murray",
        "Foster + Partners · 改造项目",
        "architecture",
        "The Murray Hong Kong"
      ],
      [
        "15:10",
        "Apple Store（需要时）",
        "如购买 AirPods，可在中环路线中完成",
        "city",
        "Apple Causeway Bay Hong Kong"
      ],
      [
        "16:10",
        "返回尖沙咀",
        "天星小轮 / 港铁按现场体力选择",
        "transport",
        "Star Ferry Central Pier"
      ],
      [
        "16:40",
        "K11 MUSEA",
        "建筑与室内城市空间",
        "architecture",
        "K11 MUSEA"
      ],
      [
        "17:30",
        "维港 / 星光大道",
        "傍晚进入蓝调摄影时段",
        "photo",
        "Avenue of Stars Hong Kong"
      ],
      [
        "18:20",
        "海港城 / Ocean Terminal Deck",
        "维港城市景观；按体力选择",
        "city",
        "Ocean Terminal Deck Hong Kong"
      ],
      [
        "19:20",
        "晚饭",
        "Jollibee / 添好运等按当时位置决定",
        "food",
        "Tsim Sha Tsui Hong Kong"
      ],
      [
        "20:00",
        "维港夜景",
        "若时间合适看幻彩咏香江",
        "photo",
        "Victoria Harbour Hong Kong"
      ],
      [
        "20:40",
        "返回西九龙站",
        "按最终高铁票调整",
        "transport",
        "Hong Kong West Kowloon Station"
      ],
      [
        "22:30",
        "返回深圳青旅",
        "结束香港一日",
        "hotel",
        "鲟鱼向海青年旅舍 南山科技园店"
      ]
    ]
  },

  {
    date: "10/05",
    day: "DAY 4",
    title: "福田 CBD × 华强北",
    theme: "成熟深圳 · 城市与产业对照",
    events: [
      [
        "09:30",
        "深圳市民中心",
        "福田 CBD 城市轴线",
        "architecture",
        "深圳市民中心"
      ],
      [
        "10:20",
        "当代艺术与城市规划馆",
        "两馆 · 福中路184号",
        "architecture",
        "深圳市当代艺术与城市规划馆"
      ],
      [
        "12:00",
        "午饭 / 休息",
        "福田就近解决",
        "food",
        "福田中心区"
      ],
      [
        "13:20",
        "莲花山公园",
        "以城市天际线视角为主，不安排爬山式游览",
        "city",
        "莲花山公园 深圳"
      ],
      [
        "14:30",
        "平安金融中心 / 福田CBD",
        "成熟高密度深圳城市空间",
        "architecture",
        "平安金融中心 深圳"
      ],
      [
        "16:00",
        "华强北步行街",
        "产业、电子、街道城市观察",
        "city",
        "华强北步行街"
      ],
      [
        "16:30",
        "赛格广场 / 电子市场",
        "赛格、华强电子世界按兴趣进入",
        "architecture",
        "赛格广场 深圳"
      ],
      [
        "18:00",
        "蘩楼 / 肥韬",
        "优先在华强北解决晚饭",
        "food",
        "蘩楼 华强北总店"
      ],
      [
        "20:00",
        "返回酒店",
        "保留体力",
        "hotel",
        "鲟鱼向海青年旅舍 南山科技园店"
      ]
    ]
  },

  {
    date: "10/06",
    day: "DAY 5",
    title: "南山滨海 · 轻松收尾",
    theme: "蛇口 / 太子湾 / 万象天地",
    events: [
      [
        "10:00",
        "K11 ECOAST",
        "太子湾滨水商业与公共空间",
        "architecture",
        "K11 ECOAST 深圳"
      ],
      [
        "11:30",
        "太子湾 / 蛇口滨水",
        "慢走，不追求全部打卡",
        "city",
        "太子湾 深圳"
      ],
      [
        "12:30",
        "午饭",
        "蛇口就近解决",
        "food",
        "海上世界 深圳"
      ],
      [
        "13:40",
        "海上世界",
        "蛇口城市与滨水空间",
        "city",
        "海上世界 深圳"
      ],
      [
        "15:30",
        "万象天地",
        "南山城市商业空间",
        "city",
        "深圳万象天地"
      ],
      [
        "16:30",
        "BEGL",
        "作为休息节点",
        "food",
        "BEGL 万象天地 深圳"
      ],
      [
        "18:00",
        "晚饭 / 海岸城机动",
        "小炳胜可根据体力与预约情况决定",
        "food",
        "小炳胜 海岸城店"
      ],
      [
        "20:00",
        "返回酒店整理行李",
        "第二天早班机",
        "hotel",
        "鲟鱼向海青年旅舍 南山科技园店"
      ]
    ]
  },

  {
    date: "10/07",
    day: "DAY 6",
    title: "返回青岛",
    theme: "早班机 · 不安排景点",
    events: [
      [
        "05:00",
        "离开青旅",
        "前往深圳宝安 T3",
        "transport",
        "鲟鱼向海青年旅舍 南山科技园店"
      ],
      [
        "07:45",
        "ZH9915 起飞",
        "深圳宝安 T3 → 青岛胶东 T1",
        "transport",
        "深圳宝安国际机场T3航站楼"
      ],
      [
        "11:05",
        "抵达青岛",
        "旅程完成",
        "transport",
        "青岛胶东国际机场T1航站楼"
      ]
    ]
  }
];


/* ==========================================================
   PLACE DATABASE
========================================================== */

const places = [
  [
    "hotel",
    "鲟鱼向海青年旅舍（南山科技园店）",
    "nanshan",
    "hotel",
    "shenzhen",
    "住宿",
    "科技南二路 / 高新南四道附近"
  ],

  [
    "hongshuwan",
    "红树湾南站",
    "szbay",
    "transport",
    "shenzhen",
    "10/3 起点",
    "深超总 CityWalk 起点"
  ],

  [
    "cmb",
    "招商银行全球总部",
    "szbay",
    "architecture",
    "shenzhen",
    "Foster + Partners",
    "深超总重点建筑"
  ],

  [
    "ce",
    "中国电子深圳湾总部基地",
    "szbay",
    "architecture",
    "shenzhen",
    "Gensler",
    "深超总建筑群"
  ],

  [
    "ctower",
    "C Tower",
    "szbay",
    "architecture",
    "shenzhen",
    "Zaha Hadid Architects",
    "建设中"
  ],

  [
    "oppo",
    "OPPO 全球总部 / 欧加大厦",
    "szbay",
    "architecture",
    "shenzhen",
    "重点",
    "与 C Tower 分开记录"
  ],

  [
    "btower",
    "B Tower",
    "szbay",
    "architecture",
    "shenzhen",
    "PCPA",
    "现场确认施工状态"
  ],

  [
    "carbon",
    "碳云大厦",
    "szbay",
    "architecture",
    "shenzhen",
    "Steven Holl Architects",
    "建筑观察"
  ],

  [
    "railin",
    "睿印 RAIL IN",
    "szbay",
    "city",
    "shenzhen",
    "城市 / 商业",
    "可顺路经过"
  ],

  [
    "binhe",
    "滨河大道下沉段",
    "szbay",
    "city",
    "shenzhen",
    "城市基础设施",
    "新开放地面绿化"
  ],

  [
    "szpark",
    "深圳湾公园",
    "szbay",
    "city",
    "shenzhen",
    "滨水",
    "10/3 收尾"
  ],

  [
    "mad",
    "深圳湾文化广场",
    "houhai",
    "architecture",
    "shenzhen",
    "MAD Architects",
    "AirPods 建筑；公共外部空间优先"
  ],

  [
    "talent",
    "深圳人才公园",
    "houhai",
    "city",
    "shenzhen",
    "景观",
    "与 MAD / 后海联动"
  ],

  [
    "houhaibridge",
    "后海大桥 · AirPods × 春笋机位",
    "houhai",
    "photo",
    "shenzhen",
    "蓝调摄影",
    "iPhone 约1.5–2×；Pocket 4 可拍延时"
  ],

  [
    "xiaobingsheng",
    "小炳胜（海岸城店）",
    "houhai",
    "food",
    "shenzhen",
    "晚饭候选",
    "适合 MAD / 后海摄影后"
  ],

  [
    "civic",
    "深圳市民中心",
    "futian",
    "architecture",
    "shenzhen",
    "10/5",
    "福田城市轴"
  ],

  [
    "mocaup",
    "深圳市当代艺术与城市规划馆",
    "futian",
    "architecture",
    "shenzhen",
    "两馆",
    "福中路184号"
  ],

  [
    "lianhua",
    "莲花山公园",
    "futian",
    "city",
    "shenzhen",
    "天际线",
    "以城市视角为主"
  ],

  [
    "pingan",
    "平安金融中心",
    "futian",
    "architecture",
    "shenzhen",
    "CBD",
    "成熟深圳"
  ],

  [
    "hqbei",
    "华强北步行街",
    "futian",
    "city",
    "shenzhen",
    "产业街区",
    "电子产业城市观察"
  ],

  [
    "seg",
    "赛格广场 / 赛格电子市场",
    "futian",
    "architecture",
    "shenzhen",
    "华强北",
    "可进入电子市场"
  ],

  [
    "huaqworld",
    "华强电子世界",
    "futian",
    "city",
    "shenzhen",
    "电子市场",
    "按兴趣停留"
  ],

  [
    "fanlou",
    "蘩楼（华强北总店）",
    "futian",
    "food",
    "shenzhen",
    "晚饭",
    "振华路附近"
  ],

  [
    "feitao",
    "肥韬茶餐厅（深圳总店）",
    "futian",
    "food",
    "shenzhen",
    "备选",
    "华发北路附近"
  ],

  [
    "k11",
    "K11 ECOAST",
    "nanshan",
    "architecture",
    "shenzhen",
    "10/6",
    "太子湾滨水"
  ],

  [
    "taizi",
    "太子湾",
    "nanshan",
    "city",
    "shenzhen",
    "滨水",
    "与 K11 连走"
  ],

  [
    "seaworld",
    "海上世界 / 蛇口滨水",
    "nanshan",
    "city",
    "shenzhen",
    "蛇口",
    "轻松步行"
  ],

  [
    "mixc",
    "万象天地",
    "nanshan",
    "city",
    "shenzhen",
    "南山",
    "优先于万象前海"
  ],

  [
    "begl",
    "BEGL · 万象天地",
    "nanshan",
    "food",
    "shenzhen",
    "休息",
    "用户偏好节点"
  ],

  [
    "changji",
    "昌记隆江猪脚饭（白石龙店）",
    "optional",
    "food",
    "shenzhen",
    "可选",
    "离主线较远，保留不删除"
  ],

  [
    "xinfa",
    "香港新发烧腊茶餐厅",
    "optional",
    "food",
    "shenzhen",
    "可选",
    "可选方便分店"
  ],

  [
    "nature",
    "深圳自然博物馆",
    "optional",
    "architecture",
    "shenzhen",
    "坪山 · 可选半日",
    "距离南山 / 福田较远"
  ],

  [
    "westkowloon",
    "香港西九龙站",
    "hk",
    "architecture",
    "hongkong",
    "Aedas",
    "香港到达节点"
  ],

  [
    "lungcity",
    "龙城冰室",
    "hk",
    "food",
    "hongkong",
    "早餐",
    "菠萝油 + 热奶茶"
  ],

  [
    "starferry",
    "天星小轮",
    "hk",
    "transport",
    "hongkong",
    "交通体验",
    "尖沙咀 ↔ 中环"
  ],

  [
    "hsbc",
    "香港汇丰银行总部大楼",
    "hk",
    "architecture",
    "hongkong",
    "Foster + Partners · 1986",
    "重点"
  ],

  [
    "boc",
    "香港中银大厦",
    "hk",
    "architecture",
    "hongkong",
    "I. M. Pei · 1989",
    "重点"
  ],

  [
    "henderson",
    "The Henderson",
    "hk",
    "architecture",
    "hongkong",
    "Zaha Hadid Architects",
    "2 Murray Road"
  ],

  [
    "hkpark",
    "香港公园",
    "hk",
    "city",
    "hongkong",
    "城市景观",
    "高楼 + 植物 + 水景"
  ],

  [
    "murray",
    "The Murray",
    "hk",
    "architecture",
    "hongkong",
    "Foster + Partners · 2018",
    "改造项目"
  ],

  [
    "gardenbridge",
    "花园道 / 中银对面天桥摄影机位",
    "hk",
    "photo",
    "hongkong",
    "中环机位",
    "拍中银 / The Henderson 城市关系"
  ],

  [
    "centralj2",
    "中环站 J2 出口天桥",
    "hk",
    "photo",
    "hongkong",
    "中环机位",
    "保留"
  ],

  [
    "k11m",
    "K11 MUSEA",
    "hk",
    "architecture",
    "hongkong",
    "尖沙咀",
    "傍晚路线"
  ],

  [
    "victoria",
    "维多利亚港 / 星光大道",
    "hk",
    "photo",
    "hongkong",
    "蓝调 / 夜景",
    "傍晚重点"
  ],

  [
    "harbourcity",
    "海港城 / Ocean Terminal Deck",
    "hk",
    "city",
    "hongkong",
    "维港",
    "按体力选择"
  ],

  [
    "apple",
    "Apple Store",
    "hk",
    "city",
    "hongkong",
    "购物节点",
    "如购买 AirPods 放在中环路线"
  ],

  [
    "palace",
    "香港故宫文化博物馆",
    "optional",
    "architecture",
    "hongkong",
    "可选",
    "香港一日时间有限"
  ],

  [
    "kowloonpark",
    "九龙公园",
    "optional",
    "city",
    "hongkong",
    "可选",
    "有余量再去"
  ]
].map(([id, name, route, type, city, meta, note]) => ({
  id,
  name,
  route,
  type,
  city,
  meta,
  note
}));


/* ==========================================================
   LOCAL STORAGE
========================================================== */

let activeRoute = "all";
let activeType = "all";

let checks = JSON.parse(
  localStorage.getItem(STORAGE.checks) || "{}"
);

const defaultTodos = [
  "临近出发比较 10/3–10/6 香港天气，确认是否保留 10/4",
  "购买 / 兑换福田 ↔ 香港西九龙高铁票",
  "确认香港返程最晚可接受高铁班次",
  "确认深圳湾文化广场 10 月展览与开放安排",
  "确认深圳自然博物馆是否加入主线",
  "检查 Pocket 4、iPhone、充电宝与充电线",
  "确认 10/6 小炳胜是否需要预约"
];

let todos;

try {
  todos =
    JSON.parse(
      localStorage.getItem(STORAGE.todos) || "null"
    ) ||
    defaultTodos.map((text, i) => ({
      id: "d" + i,
      text,
      done: false
    }));
} catch {
  todos = defaultTodos.map((text, i) => ({
    id: "d" + i,
    text,
    done: false
  }));
}

function saveTodos() {
  localStorage.setItem(
    STORAGE.todos,
    JSON.stringify(todos)
  );
}

function saveChecks() {
  localStorage.setItem(
    STORAGE.checks,
    JSON.stringify(checks)
  );
}


/* ==========================================================
   MAP
========================================================== */

function mapUrl(place, web = false) {

  const query =
    encodeURIComponent(place.name);

  if (place.city === "hongkong") {

    return (
      "https://www.google.com/maps/search/" +
      "?api=1&query=" +
      query
    );

  }

  if (web) {

    return (
      "https://api.map.baidu.com/place/search" +
      "?query=" +
      query +
      "&region=" +
      encodeURIComponent("深圳") +
      "&output=html" +
      "&src=SZHKTrip2026"
    );

  }

  return (
    "baidumap://map/place/search" +
    "?query=" +
    query +
    "&region=" +
    encodeURIComponent("深圳") +
    "&src=SZHKTrip2026"
  );
}


function openMap(id) {

  const place =
    places.find(x => x.id === id);

  if (!place) return;


  if (place.city === "hongkong") {

    location.href =
      mapUrl(place);

    return;

  }


  const fallback =
    mapUrl(place, true);

  const app =
    mapUrl(place, false);


  let hidden = false;


  const markHidden = () => {

    hidden =
      document.hidden;

  };


  document.addEventListener(
    "visibilitychange",
    markHidden,
    { once: true }
  );


  location.href =
    app;


  setTimeout(() => {

    if (
      !hidden &&
      !document.hidden
    ) {

      location.href =
        fallback;

    }

  }, 1200);

}

window.openMap =
  openMap;


/* ==========================================================
   OVERVIEW
========================================================== */

function renderOverview() {

  const today =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone: "Asia/Shanghai",
        month: "2-digit",
        day: "2-digit"
      }
    )
      .format(new Date())
      .replace("-", "/");


  document.getElementById(
    "overviewDays"
  ).innerHTML =

    tripDays.map(day => `

      <article class="day-card ${
        day.date === today
          ? "today"
          : ""
      }">

        <div class="day-num">

          <strong>
            ${day.date.split("/")[1]}
          </strong>

          <span>OCT</span>

        </div>

        <div>

          <span class="section-label">
            ${day.day}
          </span>

          <h3>
            ${day.title}
          </h3>

          <p>
            ${day.theme}
          </p>

        </div>

      </article>

    `).join("");

}


/* ==========================================================
   PLACES
========================================================== */

function renderPlaces() {

  const list =
    places.filter(place =>

      (
        activeRoute === "all" ||
        place.route === activeRoute
      )

      &&

      (
        activeType === "all" ||
        place.type === activeType
      )

    );


  document.getElementById(
    "placesList"
  ).innerHTML =

    list.length

      ? list.map(place => `

        <article class="place-card">

          <div class="place-top">

            <div>

              <div class="place-meta">

                ${place.type.toUpperCase()}
                ·
                ${place.meta}

              </div>

              <h3>
                ${esc(place.name)}
              </h3>

              <p>
                ${esc(place.note)}
              </p>

            </div>

          </div>


          <div class="place-actions">

            <button
              class="map-button"
              onclick="openMap('${place.id}')"
            >

              ${
                place.city === "hongkong"
                  ? "Google Maps"
                  : "百度地图 App"
              }

            </button>


            ${
              place.city === "shenzhen"

                ? `

                <a
                  class="action"
                  href="${mapUrl(place, true)}"
                  target="_blank"
                  rel="noopener"
                >
                  网页版
                </a>

                `

                : ""
            }


            <button
              class="action ${
                checks[place.id]
                  ? "done"
                  : ""
              }"
              onclick="toggleCheck('${place.id}')"
            >

              ${
                checks[place.id]
                  ? "✓ 已打卡"
                  : "○ 打卡"
              }

            </button>

          </div>

        </article>

      `).join("")

      : `

        <div class="empty-card">
          这个筛选组合暂时没有地点。
        </div>

      `;

}


window.toggleCheck =
  id => {

    checks[id] =
      !checks[id];

    saveChecks();

    renderPlaces();

  };


/* ==========================================================
   DAILY PLAN
========================================================== */

function renderDaily() {

  document.getElementById(
    "dailyPlans"
  ).innerHTML =

    tripDays.map(day => `

      <article class="daily-card">

        <div class="daily-head">

          <div class="day-num">

            <strong>
              ${day.date.split("/")[1]}
            </strong>

            <span>OCT</span>

          </div>

          <div>

            <span class="section-label">
              ${day.day}
            </span>

            <h3>
              ${day.title}
            </h3>

            <p>
              ${day.theme}
            </p>

          </div>

        </div>


        <div class="timeline">

          ${day.events.map(event => `

            <div class="timeline-item">

              <div class="timeline-time">
                ${event[0]}
              </div>

              <div class="timeline-title">
                ${esc(event[1])}
              </div>

              <div class="timeline-note">
                ${esc(event[2])}
              </div>


              ${
                event[4]

                  ? `

                    <a
                      class="timeline-nav"
                      href="${
                        event[3] === "transport" &&
                        event[4].includes("青岛")

                          ? "https://map.baidu.com/search/" +
                            encodeURIComponent(event[4])

                          : day.date === "10/04"

                          ? "https://www.google.com/maps/search/?api=1&query=" +
                            encodeURIComponent(event[4])

                          : "https://api.map.baidu.com/place/search?query=" +
                            encodeURIComponent(event[4]) +
                            "&region=" +
                            encodeURIComponent("深圳") +
                            "&output=html&src=SZHKTrip2026"
                      }"
                      target="_blank"
                      rel="noopener"
                    >

                      导航 ↗

                    </a>

                  `

                  : ""
              }

            </div>

          `).join("")}

        </div>

      </article>

    `).join("");

}


/* ==========================================================
   TODO
========================================================== */

function renderTodos() {

  document.getElementById(
    "todoList"
  ).innerHTML =

    todos.length

      ? todos.map(todo => `

        <div
          class="todo-item ${
            todo.done
              ? "done"
              : ""
          }"
        >

          <button
            class="todo-check"
            onclick="toggleTodo('${todo.id}')"
          >

            ${
              todo.done
                ? "✓"
                : ""
            }

          </button>


          <div class="todo-text">
            ${esc(todo.text)}
          </div>


          <button
            class="todo-delete"
            onclick="deleteTodo('${todo.id}')"
            aria-label="删除"
          >
            ×
          </button>

        </div>

      `).join("")

      : `

        <div class="empty-card">
          现在没有待办。随时在上面新增。
        </div>

      `;

}


window.toggleTodo =
  id => {

    const todo =
      todos.find(x => x.id === id);

    if (todo) {
      todo.done =
        !todo.done;
    }

    saveTodos();

    renderTodos();

  };


window.deleteTodo =
  id => {

    todos =
      todos.filter(x => x.id !== id);

    saveTodos();

    renderTodos();

  };


/* ==========================================================
   LIVE NOW
========================================================== */

function eventTimestamp(
  date,
  time
) {

  const [month, day] =
    date
      .split("/")
      .map(Number);

  const [hour, minute] =
    time
      .split(":")
      .map(Number);


  /*
    深圳 / 香港 = UTC+8

    Date.UTC 使用 UTC，
    所以当地小时减 8。
  */

  return Date.UTC(
    2026,
    month - 1,
    day,
    hour - 8,
    minute,
    0
  );

}


const allEvents =

  tripDays
    .flatMap(day =>

      day.events.map(event => ({

        date: day.date,

        time: event[0],

        title: event[1],

        detail: event[2],

        ts: eventTimestamp(
          day.date,
          event[0]
        )

      }))

    )
    .sort(
      (a, b) =>
        a.ts - b.ts
    );


function updateNow() {

  /*
    每一秒重新读取设备当前时间。

    所以：
    - 刷新网页重新计算
    - 关闭再打开重新计算
    - 不依赖上一次打开页面的时间
  */

  const now =
    Date.now();

  const next =
    allEvents.find(
      event =>
        event.ts > now
    );

  const first =
    allEvents[0];


  const ids = [
    "countdownDays",
    "countdownHours",
    "countdownMinutes",
    "countdownSeconds"
  ];


  if (!next) {

    document.getElementById(
      "nextTitle"
    ).textContent =
      "旅行完成";


    document.getElementById(
      "nextDetail"
    ).textContent =
      "深圳 × 香港 · 2026";


    ids.forEach(id => {

      document.getElementById(
        id
      ).textContent =
        "00";

    });


    document.getElementById(
      "countdownCaption"
    ).textContent =
      "旅程完成";


    return;

  }


  const diff =
    Math.max(
      0,
      next.ts - now
    );


  const days =
    Math.floor(
      diff / 86400000
    );


  const hours =
    Math.floor(
      diff % 86400000 /
      3600000
    );


  const minutes =
    Math.floor(
      diff % 3600000 /
      60000
    );


  const seconds =
    Math.floor(
      diff % 60000 /
      1000
    );


  [
    days,
    hours,
    minutes,
    seconds
  ].forEach(
    (value, index) => {

      document.getElementById(
        ids[index]
      ).textContent =
        pad(value);

    }
  );


  document.getElementById(
    "nextTitle"
  ).textContent =
    next.title;


  document.getElementById(
    "nextDetail"
  ).textContent =
    `${next.date} ${next.time} · ${next.detail}`;


  document.getElementById(
    "nextDateDay"
  ).textContent =
    next.date.split("/")[1];


  document.getElementById(
    "nextDateMonth"
  ).textContent =
    "OCT";


  document.getElementById(
    "countdownCaption"
  ).textContent =

    now < first.ts
      ? "距离旅程开始"
      : "距离下一行程";

}


/* ==========================================================
   TAB INTERACTION
========================================================== */

document
  .querySelectorAll(".tab")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".tab, .tab-panel"
          )
          .forEach(element => {

            element.classList.remove(
              "active"
            );

          });


        button.classList.add(
          "active"
        );


        document
          .getElementById(
            button.dataset.tab
          )
          .classList.add(
            "active"
          );


        window.scrollTo({

          top:
            document
              .querySelector(
                ".tabs"
              )
              .offsetTop - 8,

          behavior:
            "smooth"

        });

      }
    );

  });


/* ==========================================================
   ROUTE AXIS
========================================================== */

document
  .querySelectorAll(
    ".axis-node"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        activeRoute =
          button.dataset.route;


        document
          .querySelectorAll(
            ".axis-node"
          )
          .forEach(node => {

            node.classList.toggle(
              "active",
              node === button
            );

          });


        renderPlaces();

      }
    );

  });


/* ==========================================================
   PLACE TYPE FILTER
========================================================== */

document
  .querySelectorAll(
    ".filter"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        activeType =
          button.dataset.filter;


        document
          .querySelectorAll(
            ".filter"
          )
          .forEach(filter => {

            filter.classList.toggle(
              "active",
              filter === button
            );

          });


        renderPlaces();

      }
    );

  });


/* ==========================================================
   ADD TODO
========================================================== */

document
  .getElementById(
    "todoForm"
  )
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const input =
        document.getElementById(
          "todoInput"
        );


      const text =
        input.value.trim();


      if (!text) return;


      todos.unshift({

        id:
          "u" + Date.now(),

        text,

        done:
          false

      });


      input.value =
        "";


      saveTodos();

      renderTodos();

    }
  );


/* ==========================================================
   CHANGELOG
========================================================== */

function mdToHtml(markdown) {

  const lines =
    markdown
      .replace(/\r/g, "")
      .split("\n");


  let html =
    "";


  for (const raw of lines) {

    const line =
      raw.replace(/^\\/, "");


    if (/^# /.test(line)) {

      html +=
        `<h1>${esc(
          line.slice(2)
        )}</h1>`;

    }

    else if (/^## /.test(line)) {

      html +=
        `<h2>${esc(
          line.slice(3)
        )}</h2>`;

    }

    else if (/^### /.test(line)) {

      html +=
        `<h3>${esc(
          line.slice(4)
        )}</h3>`;

    }

    else if (
      /^---+$/.test(line)
    ) {

      html +=
        "<hr>";

    }

    else if (
      /^- /.test(line)
    ) {

      html +=
        `<p>• ${esc(
          line.slice(2)
        )}</p>`;

    }

    else if (
      line.trim()
    ) {

      html +=
        `<p>${esc(line)}</p>`;

    }

  }


  return html;

}


async function loadChangelog() {

  const box =
    document.getElementById(
      "changelogContent"
    );


  box.textContent =
    "正在读取 CHANGELOG.md…";


  try {

    const response =
      await fetch(
        "./CHANGELOG.md?v=" +
        Date.now()
      );


    if (!response.ok) {
      throw Error();
    }


    const markdown =
      await response.text();


    box.innerHTML =
      mdToHtml(markdown);

  }

  catch {

    box.innerHTML = `
      <p>
        暂时无法读取 CHANGELOG.md。
        请确认它与 index.html 位于同一目录。
      </p>
    `;

  }

}


const modal =
  document.getElementById(
    "changelogModal"
  );


document
  .getElementById(
    "openChangelog"
  )
  .addEventListener(
    "click",
    () => {

      modal.hidden =
        false;

      loadChangelog();

    }
  );


document
  .getElementById(
    "closeChangelog"
  )
  .addEventListener(
    "click",
    () => {

      modal.hidden =
        true;

    }
  );


document
  .querySelector(
    "[data-close-changelog]"
  )
  .addEventListener(
    "click",
    () => {

      modal.hidden =
        true;

    }
  );


/* ==========================================================
   START
========================================================== */

renderOverview();

renderPlaces();

renderDaily();

renderTodos();

updateNow();

setInterval(
  updateNow,
  1000
);