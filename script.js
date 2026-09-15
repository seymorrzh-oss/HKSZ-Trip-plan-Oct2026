/* ==========================================================
   深圳 × 香港 2026
   Travel Dashboard V2.2
   Clean Build + Live Local-Time Countdown
========================================================== */


/* ==========================================================
   BASIC SETTINGS
========================================================== */

const TRIP_YEAR = 2026;


/* ==========================================================
   MAP HELPERS
========================================================== */

function getMapUrl(place) {

  const query = encodeURIComponent(
    place.mapQuery || place.name || place.title || ""
  );

  // 香港 → Google Maps
  if (place.city === "hongkong") {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      query
    );
  }

  // 深圳 → 百度地图官方 URI API
  return (
    "https://api.map.baidu.com/place/search" +
    "?query=" + query +
    "&region=" + encodeURIComponent("深圳") +
    "&output=html" +
    "&src=SZHKTrip2026"
  );
}


/* ==========================================================
   TRIP DAYS
========================================================== */

const days = [

  {
    date: "10/02",
    day: "DAY 1",
    title: "抵达深圳",
    summary: "青岛 → 深圳 → 南山科技园",
    route: "青岛 → 宝安机场 → 青旅",

    timeline: [

      {
        time: "16:15",
        title: "CZ5844 起飞",
        detail: "青岛胶东 T1 → 深圳宝安 T3"
      },

      {
        time: "19:40",
        title: "抵达深圳",
        detail: "抵达深圳宝安国际机场",
        city: "shenzhen",
        mapQuery: "深圳宝安国际机场 T3航站楼"
      },

      {
        time: "21:00",
        title: "前往青旅",
        detail: "入住南山科技园",
        city: "shenzhen",
        mapQuery: "鲟鱼向海青年旅舍 南山科技园店"
      },

      {
        time: "21:30",
        title: "附近晚餐",
        detail: "第一晚以休息为主，不安排正式建筑打卡"
      }

    ]
  },


  {
    date: "10/03",
    day: "DAY 2",
    title: "深超总 · 未来深圳",
    summary: "总部建筑 + CityWalk + 深圳湾",

    route:
      "红树湾南 → 招商 → 中国电子 → C Tower → OPPO → B Tower → 碳云 → 深圳湾",

    timeline: [

      {
        time: "09:30",
        title: "红树湾南站",
        detail: "深超总 CityWalk 起点",
        city: "shenzhen",
        mapQuery: "红树湾南地铁站"
      },

      {
        time: "10:00",
        title: "招商银行全球总部",
        detail: "Foster + Partners",
        city: "shenzhen",
        mapQuery: "招商银行全球总部 深圳湾超级总部基地"
      },

      {
        time: "10:40",
        title: "中国电子深圳总部",
        detail: "Gensler · 总部建筑",
        city: "shenzhen",
        mapQuery: "中国电子深圳湾总部基地"
      },

      {
        time: "11:20",
        title: "C Tower",
        detail: "Zaha Hadid Architects · 在建观察",
        city: "shenzhen",
        mapQuery: "C塔 深圳湾超级总部基地"
      },

      {
        time: "12:00",
        title: "OPPO 全球总部",
        detail: "深超总重点建筑摄影",
        city: "shenzhen",
        mapQuery: "OPPO全球总部 深圳湾超级总部基地"
      },

      {
        time: "14:00",
        title: "B Tower",
        detail: "Pelli Clarke & Partners",
        city: "shenzhen",
        mapQuery: "B塔 深圳湾超级总部基地"
      },

      {
        time: "15:00",
        title: "碳云大厦",
        detail: "Steven Holl Architects",
        city: "shenzhen",
        mapQuery: "碳云大厦 深圳"
      },

      {
        time: "16:00",
        title: "滨河大道下沉空间",
        detail: "城市景观与新开放地面公共空间",
        city: "shenzhen",
        mapQuery: "深圳湾超级总部基地 滨河大道"
      },

      {
        time: "17:30",
        title: "深圳湾公园",
        detail: "滨水步行 / 日落",
        city: "shenzhen",
        mapQuery: "深圳湾公园"
      }

    ]
  },


  {
    date: "10/04",
    day: "DAY 3",
    title: "香港 · 建筑摄影日 🌤",
    summary: "暂定日期 · 根据天气可与深圳行程互换",

    route:
      "福田 → 西九龙 → 尖沙咀 → 天星小轮 → 中环 → 香港公园 → 尖沙咀 → 西九龙",

    timeline: [

      {
        time: "07:00",
        title: "前往福田站",
        detail: "准备乘高铁前往香港",
        city: "shenzhen",
        mapQuery: "福田站 深圳"
      },

      {
        time: "08:00",
        title: "福田 → 香港西九龙",
        detail: "高铁车次与时间后续确认"
      },

      {
        time: "08:30",
        title: "香港西九龙站",
        detail: "Aedas · 抵港第一座建筑",
        city: "hongkong",
        mapQuery: "Hong Kong West Kowloon Station"
      },

      {
        time: "09:00",
        title: "龙城冰室",
        detail: "菠萝油 + 热奶茶",
        city: "hongkong",
        mapQuery: "龙城冰室 尖沙咀 香港"
      },

      {
        time: "10:00",
        title: "K11 MUSEA",
        detail: "尖沙咀 / 维多利亚港",
        city: "hongkong",
        mapQuery: "K11 MUSEA Hong Kong"
      },

      {
        time: "11:30",
        title: "天星小轮",
        detail: "尖沙咀 → 中环",
        city: "hongkong",
        mapQuery: "Star Ferry Pier Tsim Sha Tsui Hong Kong"
      },

      {
        time: "12:00",
        title: "香港汇丰银行总部",
        detail: "Foster + Partners · 1986",
        city: "hongkong",
        mapQuery: "HSBC Main Building Hong Kong"
      },

      {
        time: "12:30",
        title: "香港中银大厦",
        detail: "I. M. Pei · 1989",
        city: "hongkong",
        mapQuery: "Bank of China Tower Hong Kong"
      },

      {
        time: "13:30",
        title: "The Henderson",
        detail: "Zaha Hadid Architects · 中环摄影重点",
        city: "hongkong",
        mapQuery: "The Henderson 2 Murray Road Hong Kong"
      },

      {
        time: "14:30",
        title: "香港公园",
        detail: "植物 / 瀑布 / 摩天楼",
        city: "hongkong",
        mapQuery: "Hong Kong Park"
      },

      {
        time: "15:30",
        title: "The Murray",
        detail: "Foster + Partners · 2018",
        city: "hongkong",
        mapQuery: "The Murray Hong Kong"
      },

      {
        time: "16:30",
        title: "中环摄影 CityWalk",
        detail: "花园道天桥 / J2 / 皇后大道中",
        city: "hongkong",
        mapQuery: "Central Hong Kong"
      },

      {
        time: "18:00",
        title: "维多利亚港",
        detail: "蓝调 / 海港城 / Ocean Terminal",
        city: "hongkong",
        mapQuery: "Victoria Harbour Hong Kong"
      },

      {
        time: "20:30",
        title: "香港西九龙站",
        detail: "准备返回深圳",
        city: "hongkong",
        mapQuery: "Hong Kong West Kowloon Station"
      }

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

      {
        time: "09:30",
        title: "深圳市民中心",
        detail: "福田城市轴线",
        city: "shenzhen",
        mapQuery: "深圳市民中心"
      },

      {
        time: "10:30",
        title: "两馆",
        detail: "深圳市当代艺术与城市规划馆",
        city: "shenzhen",
        mapQuery: "深圳市当代艺术与城市规划馆"
      },

      {
        time: "12:00",
        title: "莲花山公园",
        detail: "俯瞰福田 CBD 天际线",
        city: "shenzhen",
        mapQuery: "莲花山公园 深圳"
      },

      {
        time: "14:00",
        title: "福田 CBD",
        detail: "平安金融中心 / 城市空间",
        city: "shenzhen",
        mapQuery: "平安金融中心 深圳"
      },

      {
        time: "16:00",
        title: "华强北步行街",
        detail: "电子市场 / LED / 街道",
        city: "shenzhen",
        mapQuery: "华强北步行街 深圳"
      },

      {
        time: "17:00",
        title: "赛格广场",
        detail: "电子产业城市影像",
        city: "shenzhen",
        mapQuery: "赛格广场 深圳"
      },

      {
        time: "18:00",
        title: "蘩楼 · 华强北总店",
        detail: "晚餐",
        city: "shenzhen",
        mapQuery: "蘩楼 华强北总店 深圳"
      }

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

      {
        time: "10:00",
        title: "K11 ECOAST",
        detail: "建筑 / 商业 / 滨水空间",
        city: "shenzhen",
        mapQuery: "K11 ECOAST 深圳"
      },

      {
        time: "12:00",
        title: "太子湾",
        detail: "滨海城市空间",
        city: "shenzhen",
        mapQuery: "太子湾 深圳"
      },

      {
        time: "14:00",
        title: "海上世界",
        detail: "蛇口滨水慢走",
        city: "shenzhen",
        mapQuery: "海上世界 深圳"
      },

      {
        time: "16:30",
        title: "万象天地",
        detail: "商业建筑 / 城市公共空间",
        city: "shenzhen",
        mapQuery: "深圳万象天地"
      },

      {
        time: "18:00",
        title: "BEGL",
        detail: "目前优先万象天地店",
        city: "shenzhen",
        mapQuery: "BEGL 万象天地 深圳"
      },

      {
        time: "20:00",
        title: "返回青旅",
        detail: "整理行李 / 明早早起",
        city: "shenzhen",
        mapQuery: "鲟鱼向海青年旅舍 南山科技园店"
      }

    ]
  },


  {
    date: "10/07",
    day: "DAY 6",
    title: "回青岛",
    summary: "深圳 → 青岛",
    route: "青旅 → 宝安机场 → 青岛",

    timeline: [

      {
        time: "05:00",
        title: "离开青旅",
        detail: "提前前往宝安机场",
        city: "shenzhen",
        mapQuery: "深圳宝安国际机场 T3航站楼"
      },

      {
        time: "07:45",
        title: "ZH9915 起飞",
        detail: "深圳宝安 T3 → 青岛胶东 T1"
      },

      {
        time: "11:05",
        title: "抵达青岛",
        detail: "旅行结束"
      }

    ]
  }

];


/* ==========================================================
   PLACES DATABASE
========================================================== */

const places = [

  {
    name: "深圳湾超级总部基地",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏙️",
    detail: "10/3 建筑主线 · 观察正在形成的未来 CBD",
    tags: ["10/3", "CityWalk"],
    mapQuery: "深圳湾超级总部基地"
  },

  {
    name: "招商银行全球总部",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏛️",
    detail: "Foster + Partners · 深超总重点建筑",
    tags: ["Foster", "总部建筑"],
    mapQuery: "招商银行全球总部 深圳湾超级总部基地"
  },

  {
    name: "中国电子深圳总部",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏛️",
    detail: "Gensler · 总部建筑",
    tags: ["Gensler"],
    mapQuery: "中国电子深圳湾总部基地"
  },

  {
    name: "C Tower",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏗️",
    detail: "Zaha Hadid Architects · 建设状态观察",
    tags: ["Zaha Hadid", "在建"],
    mapQuery: "C塔 深圳湾超级总部基地"
  },

  {
    name: "OPPO 全球总部",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏗️",
    detail: "深超总建筑摄影重点",
    tags: ["OPPO", "总部建筑"],
    mapQuery: "OPPO全球总部 深圳湾超级总部基地"
  },

  {
    name: "B Tower",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏛️",
    detail: "Pelli Clarke & Partners",
    tags: ["PCPA"],
    mapQuery: "B塔 深圳湾超级总部基地"
  },

  {
    name: "碳云大厦",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏛️",
    detail: "Steven Holl Architects",
    tags: ["Steven Holl"],
    mapQuery: "碳云大厦 深圳"
  },

  {
    name: "滨河大道下沉空间",
    city: "shenzhen",
    day: "szbay",
    type: "city",
    icon: "🌳",
    detail: "下沉道路与新开放地面景观",
    tags: ["景观", "CityWalk"],
    mapQuery: "深圳湾超级总部基地 滨河大道"
  },

  {
    name: "深圳湾公园",
    city: "shenzhen",
    day: "szbay",
    type: "city",
    icon: "🌊",
    detail: "滨水空间 · 日落",
    tags: ["日落", "滨水"],
    mapQuery: "深圳湾公园"
  },

  {
    name: "深圳湾文化广场",
    city: "shenzhen",
    day: "szbay",
    type: "architecture",
    icon: "🏛️",
    detail: "MAD Architects · AirPods 建筑 · 公共空间优先",
    tags: ["MAD", "AirPods", "必去"],
    mapQuery: "深圳湾文化广场"
  },

  {
    name: "深圳人才公园",
    city: "shenzhen",
    day: "szbay",
    type: "city",
    icon: "🌳",
    detail: "MAD / 后海 / 春笋城市景观节点",
    tags: ["步行", "后海"],
    mapQuery: "深圳人才公园"
  },

  {
    name: "后海大桥 · AirPods × 春笋",
    city: "shenzhen",
    day: "szbay",
    type: "photo",
    icon: "📸",
    detail: "人才公园 + 深圳湾文化广场 + 春笋目标构图",
    tags: ["必拍", "蓝调", "iPhone 17", "Pocket 4"],
    mapQuery: "后海大桥 深圳人才公园",

    photoNote:
      "🌇 日落前到位，拍至蓝调亮灯。iPhone 17 优先约 1.5–2× 构图；Pocket 4 适合固定延时、慢推与竖屏城市镜头。"
  },

  {
    name: "小炳胜 · 海岸城店",
    city: "shenzhen",
    day: "szbay",
    type: "food",
    icon: "🍚",
    detail: "后海摄影结束后的晚餐候选",
    tags: ["晚餐", "海岸城"],
    mapQuery: "小炳胜 海岸城店 深圳"
  },


  /* FUTIAN */

  {
    name: "深圳市民中心",
    city: "shenzhen",
    day: "futian",
    type: "architecture",
    icon: "🏛️",
    detail: "福田 CBD 城市轴线",
    tags: ["10/5", "福田"],
    mapQuery: "深圳市民中心"
  },

  {
    name: "深圳市当代艺术与城市规划馆",
    city: "shenzhen",
    day: "futian",
    type: "architecture",
    icon: "🏛️",
    detail: "两馆 · 福田建筑线",
    tags: ["两馆"],
    mapQuery: "深圳市当代艺术与城市规划馆"
  },

  {
    name: "莲花山公园",
    city: "shenzhen",
    day: "futian",
    type: "city",
    icon: "🌳",
    detail: "俯瞰福田 CBD 天际线",
    tags: ["天际线", "摄影"],
    mapQuery: "莲花山公园 深圳"
  },

  {
    name: "平安金融中心",
    city: "shenzhen",
    day: "futian",
    type: "architecture",
    icon: "🏙️",
    detail: "福田 CBD 城市空间",
    tags: ["CBD"],
    mapQuery: "平安金融中心 深圳"
  },

  {
    name: "华强北步行街",
    city: "shenzhen",
    day: "futian",
    type: "city",
    icon: "💡",
    detail: "电子产业 / LED / 元件 / 城市摄影",
    tags: ["华强北", "城市摄影"],
    mapQuery: "华强北步行街 深圳"
  },

  {
    name: "赛格广场",
    city: "shenzhen",
    day: "futian",
    type: "architecture",
    icon: "🏢",
    detail: "华强北城市地标",
    tags: ["SEG"],
    mapQuery: "赛格广场 深圳"
  },

  {
    name: "蘩楼 · 华强北总店",
    city: "shenzhen",
    day: "futian",
    type: "food",
    icon: "🍜",
    detail: "华强北路线餐厅",
    tags: ["必吃"],
    mapQuery: "蘩楼 华强北总店 深圳"
  },

  {
    name: "肥韬茶餐厅 · 深圳总店",
    city: "shenzhen",
    day: "futian",
    type: "food",
    icon: "🍜",
    detail: "华强北区域 · 与蘩楼根据餐次安排",
    tags: ["必吃"],
    mapQuery: "肥韬茶餐厅 深圳总店"
  },


  /* NANSHAN */

  {
    name: "K11 ECOAST",
    city: "shenzhen",
    day: "nanshan",
    type: "architecture",
    icon: "🏛️",
    detail: "蛇口 / 太子湾 · 建筑与滨水商业空间",
    tags: ["10/6", "必去"],
    mapQuery: "K11 ECOAST 深圳"
  },

  {
    name: "太子湾",
    city: "shenzhen",
    day: "nanshan",
    type: "city",
    icon: "🌊",
    detail: "蛇口滨海城市空间",
    tags: ["滨水"],
    mapQuery: "太子湾 深圳"
  },

  {
    name: "海上世界",
    city: "shenzhen",
    day: "nanshan",
    type: "city",
    icon: "🌊",
    detail: "蛇口滨水空间",
    tags: ["蛇口"],
    mapQuery: "海上世界 深圳"
  },

  {
    name: "万象天地",
    city: "shenzhen",
    day: "nanshan",
    type: "architecture",
    icon: "🏙️",
    detail: "商业建筑与城市公共空间",
    tags: ["南山"],
    mapQuery: "深圳万象天地"
  },

  {
    name: "BEGL",
    city: "shenzhen",
    day: "nanshan",
    type: "food",
    icon: "🥯",
    detail: "目前优先考虑万象天地店",
    tags: ["万象天地"],
    mapQuery: "BEGL 万象天地 深圳"
  },


  /* HONG KONG */

  {
    name: "香港西九龙站",
    city: "hongkong",
    day: "hk",
    type: "architecture",
    icon: "🚄",
    detail: "Aedas · 香港抵达建筑",
    tags: ["Aedas", "交通"],
    mapQuery: "Hong Kong West Kowloon Station"
  },

  {
    name: "K11 MUSEA",
    city: "hongkong",
    day: "hk",
    type: "architecture",
    icon: "🏛️",
    detail: "尖沙咀 · 维港建筑节点",
    tags: ["尖沙咀"],
    mapQuery: "K11 MUSEA Hong Kong"
  },

  {
    name: "香港汇丰银行总部",
    city: "hongkong",
    day: "hk",
    type: "architecture",
    icon: "🏛️",
    detail: "Foster + Partners · 1986",
    tags: ["Foster", "必看"],
    mapQuery: "HSBC Main Building Hong Kong"
  },

  {
    name: "香港中银大厦",
    city: "hongkong",
    day: "hk",
    type: "architecture",
    icon: "🏛️",
    detail: "I. M. Pei · 1989",
    tags: ["I. M. Pei", "必看"],
    mapQuery: "Bank of China Tower Hong Kong"
  },

  {
    name: "The Henderson",
    city: "hongkong",
    day: "hk",
    type: "architecture",
    icon: "🏛️",
    detail: "Zaha Hadid Architects · 中环摄影重点",
    tags: ["Zaha Hadid", "必看"],
    mapQuery: "The Henderson 2 Murray Road Hong Kong"
  },

  {
    name: "The Henderson 天桥机位",
    city: "hongkong",
    day: "hk",
    type: "photo",
    icon: "📸",
    detail: "The Henderson / 中银周边高位城市构图",
    tags: ["必拍", "中环"],
    mapQuery: "The Henderson 2 Murray Road Hong Kong",

    photoNote:
      "📱 现场观察 The Henderson 与中银大厦的叠景关系，再决定 1× / 2× 构图。"
  },

  {
    name: "香港公园",
    city: "hongkong",
    day: "hk",
    type: "city",
    icon: "🌳",
    detail: "瀑布 + 植物 + 摩天楼",
    tags: ["景观", "中环"],
    mapQuery: "Hong Kong Park"
  },

  {
    name: "The Murray",
    city: "hongkong",
    day: "hk",
    type: "architecture",
    icon: "🏛️",
    detail: "Foster + Partners · 2018",
    tags: ["Foster"],
    mapQuery: "The Murray Hong Kong"
  },

  {
    name: "天星小轮",
    city: "hongkong",
    day: "hk",
    type: "city",
    icon: "⛴️",
    detail: "尖沙咀 ↔ 中环 · 交通与摄影节点",
    tags: ["维港", "必坐"],
    mapQuery: "Star Ferry Pier Tsim Sha Tsui Hong Kong"
  },

  {
    name: "维多利亚港",
    city: "hongkong",
    day: "hk",
    type: "photo",
    icon: "📸",
    detail: "香港蓝调与夜景主线",
    tags: ["夜景", "蓝调"],
    mapQuery: "Victoria Harbour Hong Kong"
  },

  {
    name: "龙城冰室",
    city: "hongkong",
    day: "hk",
    type: "food",
    icon: "🍍",
    detail: "香港早餐 · 菠萝油 + 热奶茶",
    tags: ["早餐"],
    mapQuery: "龙城冰室 尖沙咀 香港"
  },


  /* OPTIONAL */

  {
    name: "深圳自然博物馆",
    city: "shenzhen",
    day: "optional",
    type: "architecture",
    icon: "🟡",
    detail: "坪山 · 距离南山 / 福田主线路较远",
    tags: ["OPTIONAL", "坪山"],
    mapQuery: "深圳自然博物馆"
  },

  {
    name: "深业上城 UpperHills",
    city: "shenzhen",
    day: "optional",
    type: "architecture",
    icon: "🟡",
    detail: "福田 · 有体力再加入",
    tags: ["OPTIONAL"],
    mapQuery: "深业上城 深圳"
  },

  {
    name: "香港故宫文化博物馆",
    city: "hongkong",
    day: "optional",
    type: "architecture",
    icon: "🟡",
    detail: "西九龙 · 时间允许再进入",
    tags: ["OPTIONAL"],
    mapQuery: "Hong Kong Palace Museum"
  }

];


/* ==========================================================
   TODO DATABASE
========================================================== */

const todos = [

  "确认香港天气，决定香港最终日期",

  "兑换 / 购买福田 → 香港西九龙高铁票",

  "确认香港故宫是否进入最终路线",

  "确认 Apple Store AirPods 购买计划",

  "检查 DJI Pocket 4 电池 / 存储卡",

  "准备充电宝与充电线",

  "确认深圳自然博物馆是否保留",

  "最终核对所有建筑开放 / 建设状态",

  "最终核对餐厅营业时间"

];


/* ==========================================================
   MAIN TABS
========================================================== */

const tabs =
  document.querySelectorAll(".tab");

const panels =
  document.querySelectorAll(".tab-panel");


tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(item => {
      item.classList.remove("active");
    });

    panels.forEach(panel => {
      panel.classList.remove("active");
    });

    tab.classList.add("active");

    const target =
      document.getElementById(
        tab.dataset.tab
      );

    if (target) {
      target.classList.add("active");
    }

  });

});


/* ==========================================================
   OVERVIEW
========================================================== */

const overviewDays =
  document.getElementById("overviewDays");


if (overviewDays) {

  days.forEach(day => {

    const card =
      document.createElement("article");

    card.className =
      "day-overview";

    card.innerHTML = `

      <div class="day-number">

        <strong>
          ${day.date.slice(3)}
        </strong>

        <span>
          OCT
        </span>

      </div>

      <div>

        <h3>
          ${day.title}
        </h3>

        <p>
          ${day.summary}
        </p>

      </div>

    `;

    overviewDays.appendChild(card);

  });

}


/* ==========================================================
   DAILY PLAN
========================================================== */

const dailyPlans =
  document.getElementById("dailyPlans");


if (dailyPlans) {

  days.forEach(day => {

    const card =
      document.createElement("article");

    card.className =
      "day-card";


    const timelineHTML =
      day.timeline
        .map(item => {

          let navigation = "";


          if (item.city) {

            const mapLabel =
              item.city === "hongkong"
                ? "Google Maps →"
                : "百度地图 →";


            navigation = `

              <a
                class="timeline-nav"
                href="${getMapUrl(item)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 ${mapLabel}
              </a>

            `;

          }


          return `

            <div class="timeline-item">

              <div class="timeline-time">
                ${item.time}
              </div>

              <div class="timeline-content">

                <strong>
                  ${item.title}
                </strong>

                <p>
                  ${item.detail}
                </p>

                ${navigation}

              </div>

            </div>

          `;

        })
        .join("");


    card.innerHTML = `

      <header class="day-card-header">

        <div class="day-date">
          ${day.day} · ${day.date}
        </div>

        <h2>
          ${day.title}
        </h2>

        <div class="day-route">
          ${day.route}
        </div>

      </header>

      <div class="timeline">
        ${timelineHTML}
      </div>

    `;


    dailyPlans.appendChild(card);

  });

}


/* ==========================================================
   PLACE FILTER
========================================================== */

let currentDay = "all";
let currentType = "all";

const placesList =
  document.getElementById("placesList");


function getTypeLabel(type) {

  const labels = {
    architecture: "建筑",
    city: "城市 / 景观",
    food: "吃饭",
    photo: "摄影机位"
  };

  return labels[type] || "";

}


/* ==========================================================
   RENDER PLACES
========================================================== */

function renderPlaces() {

  if (!placesList) {
    return;
  }

  placesList.innerHTML = "";


  const filtered =
    places.filter(place => {

      const dayMatch =
        currentDay === "all" ||
        place.day === currentDay;

      const typeMatch =
        currentType === "all" ||
        place.type === currentType;

      return dayMatch && typeMatch;

    });


  filtered.forEach(place => {

    const card =
      document.createElement("article");

    card.className =
      "place-card";


    if (place.type === "photo") {
      card.classList.add("photo-special");
    }


    const tags =
      (place.tags || [])
        .map(tag => `
          <span class="meta-pill">
            ${tag}
          </span>
        `)
        .join("");


    const photoNote =
      place.photoNote
        ? `
          <div class="photo-note">
            ${place.photoNote}
          </div>
        `
        : "";


    const mapLabel =
      place.city === "hongkong"
        ? "Google Maps 导航"
        : "百度地图导航";


    card.innerHTML = `

      <div class="place-top">

        <div class="place-name">

          <div class="place-icon">
            ${place.icon}
          </div>

          <div>

            <h3>
              ${place.name}
            </h3>

            <p>
              ${place.detail}
            </p>

          </div>

        </div>

        <span class="place-type">
          ${getTypeLabel(place.type)}
        </span>

      </div>


      <div class="place-meta">
        ${tags}
      </div>


      ${photoNote}


      <div class="place-actions">

        <a
          class="map-button"
          href="${getMapUrl(place)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 ${mapLabel}
        </a>

        <button
          class="check-button"
          type="button"
        >
          ✓ 打卡
        </button>

      </div>

    `;


    placesList.appendChild(card);

  });


  if (filtered.length === 0) {

    placesList.innerHTML = `
      <div class="mini-card">
        <p>
          当前筛选条件下暂时没有地点。
        </p>
      </div>
    `;

  }

}


/* ==========================================================
   DAY FILTER BUTTONS
========================================================== */

document
  .querySelectorAll(".day-filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".day-filter")
          .forEach(item => {
            item.classList.remove("active");
          });

        button.classList.add("active");

        currentDay =
          button.dataset.day;

        renderPlaces();

      }
    );

  });


/* ==========================================================
   TYPE FILTER BUTTONS
========================================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(item => {
            item.classList.remove("active");
          });

        button.classList.add("active");

        currentType =
          button.dataset.filter;

        renderPlaces();

      }
    );

  });


/* ==========================================================
   PLACE CHECK-IN
========================================================== */

if (placesList) {

  placesList.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(".check-button");


      if (!button) {
        return;
      }


      button.classList.toggle("done");


      const card =
        button.closest(".place-card");


      const isDone =
        button.classList.contains("done");


      if (card) {

        card.classList.toggle(
          "completed",
          isDone
        );

      }


      button.textContent =
        isDone
          ? "✓ 已打卡"
          : "✓ 打卡";

    }
  );

}


/* ==========================================================
   TODO LIST
========================================================== */

const todoList =
  document.getElementById("todoList");


if (todoList) {

  todos.forEach(
    (text, index) => {

      const label =
        document.createElement("label");

      label.className =
        "todo";

      label.innerHTML = `

        <input
          type="checkbox"
          data-index="${index}"
        >

        <span>
          ${text}
        </span>

      `;

      todoList.appendChild(label);

    }
  );


  todoList.addEventListener(
    "change",
    event => {

      if (
        event.target.type === "checkbox"
      ) {

        const row =
          event.target.closest(".todo");

        if (row) {

          row.classList.toggle(
            "done",
            event.target.checked
          );

        }

      }

    }
  );

}


/* ==========================================================
   LIVE NOW COUNTDOWN
========================================================== */

/*
   这里是 V2.2 的核心变化：

   1. new Date() = 每次都读取当前设备时间
   2. 页面打开时立即重新计算
   3. 每秒重新计算一次
   4. 旅行前 → 倒计时到 CZ5844
   5. 旅行中 → 自动寻找下一行程节点
   6. 旅行结束 → 显示旅行完成

   行程节点使用中国/香港 UTC+8 时间。
*/


function buildTripEvents() {

  const events = [];


  days.forEach(day => {

    const [month, date] =
      day.date
        .split("/")
        .map(Number);


    day.timeline.forEach(item => {

      if (!item.time) {
        return;
      }


      const [hour, minute] =
        item.time
          .split(":")
          .map(Number);


      /*
        深圳 / 香港都使用 UTC+8。

        Date.UTC(...) - 8小时
        得到对应的绝对 UTC 时间。

        这样即使用户手机临时切换到其他时区，
        倒计时仍然指向真实的深圳/香港行程时间。
      */

      const timestamp =
        Date.UTC(
          TRIP_YEAR,
          month - 1,
          date,
          hour - 8,
          minute,
          0
        );


      events.push({

        timestamp,

        title: item.title,

        detail: item.detail,

        date: day.date,

        time: item.time

      });

    });

  });


  events.sort(
    (a, b) =>
      a.timestamp - b.timestamp
  );


  return events;

}


const tripEvents =
  buildTripEvents();


function findNextEvent(nowTimestamp) {

  return (
    tripEvents.find(
      event =>
        event.timestamp >
        nowTimestamp
    ) || null
  );

}


/* ==========================================================
   COUNTDOWN DISPLAY
========================================================== */

function setCountdownNumbers(
  daysValue,
  hoursValue,
  minutesValue,
  secondsValue
) {

  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");


  if (daysElement) {
    daysElement.textContent =
      String(daysValue)
        .padStart(2, "0");
  }

  if (hoursElement) {
    hoursElement.textContent =
      String(hoursValue)
        .padStart(2, "0");
  }

  if (minutesElement) {
    minutesElement.textContent =
      String(minutesValue)
        .padStart(2, "0");
  }

  if (secondsElement) {
    secondsElement.textContent =
      String(secondsValue)
        .padStart(2, "0");
  }

}


/* ==========================================================
   UPDATE NOW CARD
========================================================== */

function updateNowCard() {

  /*
    每次执行都会重新读取当前设备时间。
  */

  const now =
    new Date();

  const nowTimestamp =
    now.getTime();


  const nextEvent =
    findNextEvent(nowTimestamp);


  const titleElement =
    document.getElementById("nextTitle");

  const detailElement =
    document.getElementById("nextDetail");

  const captionElement =
    document.querySelector(
      ".countdown-caption"
    );


  /* -------------------------
     TRIP FINISHED
  ------------------------- */

  if (!nextEvent) {

    if (titleElement) {
      titleElement.textContent =
        "深圳 × 香港旅行完成";
    }

    if (detailElement) {
      detailElement.textContent =
        "2026 · OCT";
    }

    if (captionElement) {
      captionElement.textContent =
        "旅程已经结束";
    }

    setCountdownNumbers(
      0,
      0,
      0,
      0
    );

    return;
  }


  /* -------------------------
     NEXT EVENT
  ------------------------- */

  if (titleElement) {

    titleElement.textContent =
      nextEvent.title;

  }


  if (detailElement) {

    detailElement.textContent =
      `${nextEvent.date} · ${nextEvent.time} · ${nextEvent.detail}`;

  }


  const firstEvent =
    tripEvents[0];


  if (captionElement) {

    if (
      nowTimestamp <
      firstEvent.timestamp
    ) {

      captionElement.textContent =
        "距离旅程开始";

    } else {

      captionElement.textContent =
        "距离下一行程";

    }

  }


  /* -------------------------
     CALCULATE DIFFERENCE
  ------------------------- */

  const difference =
    Math.max(
      0,
      nextEvent.timestamp -
      nowTimestamp
    );


  const daysLeft =
    Math.floor(
      difference /
      (
        1000 *
        60 *
        60 *
        24
      )
    );


  const hoursLeft =
    Math.floor(
      (
        difference /
        (
          1000 *
          60 *
          60
        )
      ) % 24
    );


  const minutesLeft =
    Math.floor(
      (
        difference /
        (
          1000 *
          60
        )
      ) % 60
    );


  const secondsLeft =
    Math.floor(
      (
        difference /
        1000
      ) % 60
    );


  setCountdownNumbers(
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft
  );

}


/* ==========================================================
   INITIALISE
========================================================== */

renderPlaces();


/*
  打开网页的一瞬间：
  立即读取本机当前时间。
*/

updateNowCard();


/*
  之后每秒重新读取当前时间并计算。
*/

setInterval(
  updateNowCard,
  1000
);