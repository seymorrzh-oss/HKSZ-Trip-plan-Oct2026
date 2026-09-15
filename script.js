"use strict";

/* =====================================================
   HKSZ TRIP · V2.4.1
   REAL MAP EDITION
===================================================== */

const VERSION = "2.4.1";
const TIMEZONE = "Asia/Shanghai";

const TODO_KEY = "hksz-v241-todos";
const CHECKIN_KEY = "hksz-v241-checkins";
const GEO_KEY = "hksz-v241-geocache";

const ROUTE_COLORS = {
  szbay: "#c86e49",
  hk: "#587b8c",
  futian: "#817397",
  nanshan: "#63816b",
  houhai: "#a77b42"
};


/* =====================================================
   PLACE DATABASE

   mapQuery:
   用于真实地图地理编码

   navQuery:
   用于百度 / Google 实际导航

   IMPORTANT:
   深超总在建项目优先使用用户确认地址
===================================================== */

const places = {

  hotel:{
    name:"鲟鱼向海青年旅舍（南山科技园店）",
    type:"🏨 住宿",
    city:"shenzhen",
    route:"all",
    mapQuery:"深圳市南山区科技南二路与高新南四道交叉口",
    navQuery:"南山区科技南二路与高新南四道交叉口南50米路东",
    note:"10/2–10/7 深圳住宿锚点"
  },

  hongshuwan:{
    name:"红树湾南站",
    type:"🚇 交通",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"红树湾南站 深圳",
    navQuery:"红树湾南地铁站",
    note:"深超总 CityWalk 起点"
  },

  cmb:{
    name:"招银环球金融中心",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"szbay",

    /* 官方公开坐标可直接使用 */
    lat:22.525362,
    lng:113.965205,

    mapQuery:"广东省深圳市南山区滨海大道2388号招银环球金融中心",
    navQuery:"广东省深圳市南山区滨海大道2388号招银环球金融中心",

    note:"招商银行全球总部 · Foster + Partners"
  },

  chinaelectronics:{
    name:"中国电子深圳湾总部基地",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"中国电子深圳湾总部基地 深圳",
    navQuery:"中国电子深圳湾总部基地-北门",
    navAddress:"深圳市南山区滨海大道万科总部大厦东南侧约120米",
    note:"Gensler · 深超总"
  },

  ctower:{
    name:"C Tower",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"深圳湾超级总部基地C塔 深圳",
    navQuery:"中建五局深圳湾超级总部基地-C塔",
    note:"Zaha Hadid Architects · Future Tower"
  },

  oppo:{
    name:"欧加大厦 / OPPO 全球总部",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"欧加大厦 OPPO总部 深圳",
    navQuery:"深圳市南山区白石三道瑧湾汇北",
    note:"OPPO 国际总部 · 深超总"
  },

  btower:{
    name:"B Tower",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"深圳湾超级总部基地 B Tower 深圳",
    navQuery:"深圳市南山区深湾三路与白石四道交会处",
    note:"Pelli Clarke & Partners"
  },

  carbon:{
    name:"碳云大厦",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"szbay",

    lat:22.52745,
    lng:113.97023,

    mapQuery:"碳云大厦 深圳",
    navQuery:"深圳市南山区白石三道瑞河耶纳西南侧约90米",
    note:"Steven Holl Architects"
  },

  railin:{
    name:"睿印 RAIL IN",
    type:"🟠 城市",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"睿印 RAIL IN 深圳",
    navQuery:"睿印 RAIL IN",
    note:"地铁 × 街道 × 商业空间"
  },

  szbaypark:{
    name:"深圳湾公园",
    type:"🌅 景观",
    city:"shenzhen",
    route:"szbay",
    mapQuery:"深圳湾公园 深圳",
    navQuery:"深圳湾公园",
    note:"滨水 / 日落"
  },

  culture:{
    name:"深圳湾文化广场",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"houhai",
    mapQuery:"深圳湾文化广场 深圳",
    navQuery:"深圳湾文化广场",
    note:"MAD Architects · 科苑南路2516号"
  },

  talent:{
    name:"深圳人才公园",
    type:"🌿 景观",
    city:"shenzhen",
    route:"houhai",
    mapQuery:"深圳人才公园 深圳",
    navQuery:"深圳人才公园",
    note:"MAD / 后海摄影路线"
  },

  houhaibridge:{
    name:"后海大桥摄影点",
    type:"📸 摄影",
    city:"shenzhen",
    route:"houhai",
    mapQuery:"后海大桥 深圳",
    navQuery:"后海大桥",
    note:"AirPods × 春笋 · 蓝调时刻"
  },

  civic:{
    name:"深圳市民中心",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"futian",
    mapQuery:"深圳市民中心",
    navQuery:"深圳市民中心",
    note:"福田 CBD"
  },

  mocaup:{
    name:"深圳市当代艺术与城市规划馆",
    type:"🏛 建筑",
    city:"shenzhen",
    route:"futian",
    mapQuery:"深圳市当代艺术与城市规划馆",
    navQuery:"深圳市当代艺术与城市规划馆",
    note:"福田区福中路184号"
  },

  lianhua:{
    name:"莲花山公园",
    type:"🌿 景观",
    city:"shenzhen",
    route:"futian",
    mapQuery:"莲花山公园 深圳",
    navQuery:"莲花山公园",
    note:"深圳天际线观察"
  },

  pingan:{
    name:"平安金融中心",
    type:"🏙 城市",
    city:"shenzhen",
    route:"futian",
    mapQuery:"平安金融中心 深圳",
    navQuery:"平安金融中心",
    note:"福田 CBD"
  },

  hqb:{
    name:"华强北步行街",
    type:"🟠 城市",
    city:"shenzhen",
    route:"futian",
    mapQuery:"华强北步行街 深圳",
    navQuery:"华强北步行街",
    note:"电子产业城市观察"
  },

  seg:{
    name:"赛格广场",
    type:"🏙 建筑",
    city:"shenzhen",
    route:"futian",
    mapQuery:"赛格广场 深圳",
    navQuery:"赛格广场",
    note:"华强北"
  },

  fanlou:{
    name:"蘩楼（华强北总店）",
    type:"🍜 餐饮",
    city:"shenzhen",
    route:"futian",
    mapQuery:"蘩楼 华强北 深圳",
    navQuery:"蘩楼华强北总店",
    note:"晚饭候选"
  },

  k11:{
    name:"K11 ECOAST",
    type:"🏙 城市",
    city:"shenzhen",
    route:"nanshan",
    mapQuery:"K11 ECOAST 深圳",
    navQuery:"K11 ECOAST",
    note:"太子湾路56号"
  },

  taiziwan:{
    name:"太子湾",
    type:"🌿 城市",
    city:"shenzhen",
    route:"nanshan",
    mapQuery:"太子湾 深圳",
    navQuery:"太子湾",
    note:"滨水步行"
  },

  seaworld:{
    name:"海上世界",
    type:"🟠 城市",
    city:"shenzhen",
    route:"nanshan",
    mapQuery:"海上世界 深圳",
    navQuery:"海上世界",
    note:"蛇口"
  },

  mixc:{
    name:"万象天地",
    type:"🟠 城市",
    city:"shenzhen",
    route:"nanshan",
    mapQuery:"深圳万象天地",
    navQuery:"深圳万象天地",
    note:"南山主线"
  },

  begl:{
    name:"BEGL",
    type:"☕ 休息",
    city:"shenzhen",
    route:"nanshan",
    mapQuery:"BEGL 万象天地 深圳",
    navQuery:"BEGL 万象天地",
    note:"下午休息"
  },

  xiaobingsheng:{
    name:"小炳胜（海岸城店）",
    type:"🍽 餐饮",
    city:"shenzhen",
    route:"nanshan",
    mapQuery:"小炳胜 海岸城 深圳",
    navQuery:"小炳胜海岸城店",
    note:"晚饭候选"
  },

  natural:{
    name:"深圳自然博物馆",
    type:"🏛 博物馆",
    city:"shenzhen",
    route:"optional",
    lat:22.692760,
    lng:114.363483,
    mapQuery:"深圳自然博物馆",
    navQuery:"深圳自然博物馆",
    note:"坪山区 · 可选半日"
  },

  westkowloon:{
    name:"香港西九龙站",
    type:"🚄 交通",
    city:"hongkong",
    route:"hk",
    mapQuery:"Hong Kong West Kowloon Station",
    navQuery:"Hong Kong West Kowloon Station",
    note:"Aedas"
  },

  hsbc:{
    name:"香港汇丰银行总部大楼",
    type:"🏛 建筑",
    city:"hongkong",
    route:"hk",
    mapQuery:"HSBC Main Building Hong Kong",
    navQuery:"HSBC Main Building Hong Kong",
    note:"Foster + Partners · 1986"
  },

  boc:{
    name:"香港中银大厦",
    type:"🏛 建筑",
    city:"hongkong",
    route:"hk",
    mapQuery:"Bank of China Tower Hong Kong",
    navQuery:"Bank of China Tower Hong Kong",
    note:"I. M. Pei · 1989"
  },

  henderson:{
    name:"The Henderson",
    type:"🏛 建筑",
    city:"hongkong",
    route:"hk",
    mapQuery:"The Henderson Hong Kong",
    navQuery:"The Henderson 2 Murray Road Hong Kong",
    note:"Zaha Hadid Architects"
  },

  hkpark:{
    name:"香港公园",
    type:"🌿 景观",
    city:"hongkong",
    route:"hk",
    mapQuery:"Hong Kong Park",
    navQuery:"Hong Kong Park",
    note:"植物 × 城市高层"
  },

  murray:{
    name:"The Murray",
    type:"🏛 建筑",
    city:"hongkong",
    route:"hk",
    mapQuery:"The Murray Hong Kong",
    navQuery:"The Murray Hong Kong",
    note:"Foster + Partners · 2018"
  },

  starferry:{
    name:"天星小轮",
    type:"⛴ 交通",
    city:"hongkong",
    route:"hk",
    mapQuery:"Central Star Ferry Pier Hong Kong",
    navQuery:"Central Star Ferry Pier Hong Kong",
    note:"维港过海"
  },

  k11musea:{
    name:"K11 MUSEA",
    type:"🏙 城市",
    city:"hongkong",
    route:"hk",
    mapQuery:"K11 MUSEA Hong Kong",
    navQuery:"K11 MUSEA Hong Kong",
    note:"尖沙咀滨水"
  },

  harbour:{
    name:"海港城 / Ocean Terminal",
    type:"📸 城市",
    city:"hongkong",
    route:"hk",
    mapQuery:"Ocean Terminal Deck Hong Kong",
    navQuery:"Ocean Terminal Deck Hong Kong",
    note:"维港蓝调时刻"
  }

};


/* =====================================================
   DAYS
===================================================== */

const days = [

{
 id:"d1",
 date:"10/2",
 fullDate:"2026-10-02",
 title:"抵达深圳",
 subtitle:"青岛 → 深圳 · 入住南山",
 route:"arrival",
 events:[
  e("16:15","CZ5844 起飞","青岛胶东 T1 → 深圳宝安 T3","✈️ 航班"),
  e("19:40","抵达深圳","取行李 / 入城","✈️ 抵达"),
  e("20:30","前往酒店","入住南山科技园","🚇 交通","hotel"),
  e("21:30","晚饭 / 夜宵","餐厅下一步补充","🍜 餐饮")
 ]
},

{
 id:"d2",
 date:"10/3",
 fullDate:"2026-10-03",
 title:"深超总 · 未来深圳",
 subtitle:"红树湾南 → 深超总 → 深圳湾",
 route:"szbay",
 events:[
  e("08:30","早餐","下一步补充","🍳 早餐"),
  e("09:30","红树湾南站","CityWalk 起点","🚇 起点","hongshuwan"),
  e("10:00","招银环球金融中心","Foster + Partners","🏛 建筑","cmb"),
  e("10:40","中国电子深圳湾总部基地","Gensler","🏛 建筑","chinaelectronics"),
  e("11:15","C Tower","Zaha Hadid Architects","🏛 建筑","ctower"),
  e("12:15","午饭","深超总 / 后海顺路补充","🍜 午餐"),
  e("13:45","欧加大厦 / OPPO 全球总部","OPPO 国际总部","🏛 建筑","oppo"),
  e("14:30","B Tower","Pelli Clarke & Partners","🏛 建筑","btower"),
  e("15:10","碳云大厦","Steven Holl Architects","🏛 建筑","carbon"),
  e("16:00","睿印 RAIL IN","短停 / 休息","🟠 城市","railin"),
  e("17:15","深圳湾公园","滨水 / 日落","🌅 景观","szbaypark"),
  e("19:00","晚饭","下一步补充","🍽 晚餐")
 ]
},

{
 id:"d3",
 date:"10/4",
 fullDate:"2026-10-04",
 title:"香港建筑 CityWalk",
 subtitle:"暂定 · 天气机动 10/3–10/6",
 route:"hk",
 events:[
  e("06:50","前往福田站","香港一日游","🚇 交通"),
  e("08:00","福田 → 香港西九龙","班次以出票为准","🚄 高铁","westkowloon"),
  e("08:45","香港早餐","下一步确认","🍳 早餐"),
  e("10:10","天星小轮","维港过海","⛴ 交通","starferry"),
  e("10:45","香港汇丰银行总部","Foster + Partners","🏛 建筑","hsbc"),
  e("11:15","香港中银大厦","I. M. Pei","🏛 建筑","boc"),
  e("12:15","午饭","中环顺路补充","🍜 午餐"),
  e("13:30","The Henderson","Zaha Hadid Architects","🏛 建筑","henderson"),
  e("14:15","香港公园","城市 × 景观","🌿 景观","hkpark"),
  e("15:00","The Murray","Foster + Partners","🏛 建筑","murray"),
  e("15:45","下午休息","奶茶 / 咖啡","☕ 休息"),
  e("17:15","K11 MUSEA","尖沙咀滨水","🏙 城市","k11musea"),
  e("18:10","海港城 / Ocean Terminal","蓝调时刻","📸 摄影","harbour"),
  e("19:00","晚饭","下一步补充","🍽 晚餐"),
  e("20:30","返回西九龙","按高铁时间倒推","🚄 返程","westkowloon")
 ]
},

{
 id:"d4",
 date:"10/5",
 fullDate:"2026-10-05",
 title:"福田 · 成熟深圳",
 subtitle:"市民中心 → 两馆 → CBD → 华强北",
 route:"futian",
 events:[
  e("08:30","早餐","下一步补充","🍳 早餐"),
  e("10:00","深圳市民中心","福田 CBD","🏛 建筑","civic"),
  e("10:50","当代艺术与城市规划馆","两馆","🏛 建筑","mocaup"),
  e("12:30","午饭","下一步补充","🍜 午餐"),
  e("14:00","莲花山公园","天际线观察","🌿 景观","lianhua"),
  e("15:30","平安金融中心","成熟深圳 CBD","🏙 城市","pingan"),
  e("17:00","华强北步行街","电子产业城市观察","🟠 城市","hqb"),
  e("17:40","赛格广场","华强北节点","🏙 建筑","seg"),
  e("19:00","晚饭","蘩楼 / 肥韬待选","🍽 晚餐","fanlou")
 ]
},

{
 id:"d5",
 date:"10/6",
 fullDate:"2026-10-06",
 title:"蛇口 · 南山滨水",
 subtitle:"K11 ECOAST → 太子湾 → 蛇口 → 万象天地",
 route:"nanshan",
 events:[
  e("08:45","早餐","轻松一点","🍳 早餐"),
  e("10:15","K11 ECOAST","太子湾滨水","🏙 城市","k11"),
  e("11:20","太子湾","滨水步行","🌿 城市","taiziwan"),
  e("12:30","午饭","蛇口顺路补充","🍜 午餐"),
  e("14:00","海上世界","蛇口城市空间","🟠 城市","seaworld"),
  e("16:20","万象天地","南山","🟠 城市","mixc"),
  e("17:00","BEGL","下午休息","☕ 休息","begl"),
  e("18:45","晚饭","小炳胜等候选","🍽 晚餐","xiaobingsheng"),
  e("20:30","回酒店","整理行李","🏨 住宿","hotel")
 ]
},

{
 id:"d6",
 date:"10/7",
 fullDate:"2026-10-07",
 title:"返程",
 subtitle:"南山 → 深圳宝安 T3 → 青岛",
 route:"departure",
 events:[
  e("04:45","起床 / 退房","早班机","🏨 退房","hotel"),
  e("05:10","前往机场","预留国庆客流时间","🚕 交通"),
  e("06:10","机场早餐","安检后解决","🍳 早餐"),
  e("07:45","ZH9915 起飞","深圳 → 青岛","✈️ 航班"),
  e("11:05","抵达青岛","旅行完成","🏁 抵达")
 ]
}

];

function e(time,title,detail,type,placeId=null){
 return {time,title,detail,type,placeId};
}


/* =====================================================
   REAL MAP ENGINE
===================================================== */

let overviewMap;
let mainMap;
let dailyMap;

let overviewLayers=[];
let mainLayers=[];
let dailyLayers=[];

let geoCache=loadJSON(GEO_KEY,{});

function createMap(id,zoom=11){

 const map=L.map(id,{
   zoomControl:true,
   attributionControl:true
 });

 L.tileLayer(
   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
   {
    maxZoom:19,
    attribution:"© OpenStreetMap contributors"
   }
 ).addTo(map);

 map.setView([22.45,114.02],zoom);

 return map;
}


async function geocodePlace(id){

 const p=places[id];

 if(!p) return null;

 if(Number.isFinite(p.lat)&&Number.isFinite(p.lng)){
   return [p.lat,p.lng];
 }

 if(geoCache[id]){
   return geoCache[id];
 }

 try{

  const url=
   "https://nominatim.openstreetmap.org/search"+
   "?format=jsonv2&limit=1"+
   "&q="+encodeURIComponent(p.mapQuery);

  const response=await fetch(url,{
    headers:{
      "Accept":"application/json"
    }
  });

  if(!response.ok) throw new Error("geocode");

  const result=await response.json();

  if(!result.length) return null;

  const coords=[
    Number(result[0].lat),
    Number(result[0].lon)
  ];

  geoCache[id]=coords;
  saveJSON(GEO_KEY,geoCache);

  return coords;

 }catch(error){

  console.warn("Geocode failed:",p.name,error);
  return null;

 }

}


function markerIcon(route,index){

 const cls=
  route==="szbay"?"marker-d2":
  route==="hk"?"marker-d3":
  route==="futian"?"marker-d4":
  route==="nanshan"?"marker-d5":
  route==="all"?"marker-hotel":"marker-hotel";

 return L.divIcon({
  className:`trip-marker ${cls}`,
  html:String(index+1),
  iconSize:[28,28]
 });

}


async function routeGeometry(coords){

 if(coords.length<2) return null;

 try{

  const coordinateString=
   coords
    .map(c=>`${c[1]},${c[0]}`)
    .join(";");

  const url=
   `https://router.project-osrm.org/route/v1/driving/${coordinateString}`+
   "?overview=full&geometries=geojson";

  const response=await fetch(url);

  if(!response.ok) return null;

  const data=await response.json();

  if(
    data.code!=="Ok" ||
    !data.routes ||
    !data.routes.length
  ){
    return null;
  }

  return data.routes[0].geometry.coordinates.map(
    c=>[c[1],c[0]]
  );

 }catch(error){

  console.warn("Routing failed",error);
  return null;

 }

}


function clearLayers(map,layers){

 layers.forEach(layer=>{
   try{map.removeLayer(layer)}catch{}
 });

 layers.length=0;

}


async function drawRoute(map,placeIds,route,layers){

 const resolved=[];

 for(const id of placeIds){

  const coords=await geocodePlace(id);

  if(coords){
   resolved.push({id,coords});
  }

 }

 if(!resolved.length) return;

 resolved.forEach((item,index)=>{

  const p=places[item.id];

  const marker=L.marker(
    item.coords,
    {icon:markerIcon(route,index)}
  )
  .addTo(map)
  .bindPopup(
    `<strong>${escapeHTML(p.name)}</strong><br>`+
    `${escapeHTML(p.type)}<br>`+
    `${escapeHTML(p.note||"")}`
  );

  layers.push(marker);

 });

 if(resolved.length>1){

  const geometry=
   await routeGeometry(
    resolved.map(item=>item.coords)
   );

  if(geometry){

   const polyline=L.polyline(
    geometry,
    {
     color:ROUTE_COLORS[route]||"#555",
     weight:4,
     opacity:.75
    }
   ).addTo(map);

   layers.push(polyline);

  }

 }

 const bounds=L.latLngBounds(
   resolved.map(item=>item.coords)
 );

 map.fitBounds(bounds,{
   padding:[30,30],
   maxZoom:15
 });

}


/* =====================================================
   ROUTE PLACE IDS
===================================================== */

function dayPlaceIds(route){

 const day=days.find(d=>d.route===route);

 if(!day) return [];

 return day.events
   .map(e=>e.placeId)
   .filter(Boolean)
   .filter((id,index,array)=>array.indexOf(id)===index);

}


/* =====================================================
   OVERVIEW MAP
===================================================== */

async function renderOverviewMap(){

 if(!overviewMap){
   overviewMap=createMap("overviewMap",10);
 }

 clearLayers(overviewMap,overviewLayers);

 const hotel=await geocodePlace("hotel");

 if(hotel){

  const marker=L.marker(
    hotel,
    {icon:markerIcon("all",0)}
  )
  .addTo(overviewMap)
  .bindPopup("<strong>🏨 深圳住宿</strong>");

  overviewLayers.push(marker);

 }

 for(const route of ["szbay","hk","futian","nanshan"]){

  await drawRoute(
    overviewMap,
    dayPlaceIds(route),
    route,
    overviewLayers
  );

 }

 const coords=[];

 for(const layer of overviewLayers){

  if(layer.getLatLng){
    coords.push(layer.getLatLng());
  }

 }

 if(coords.length){
   overviewMap.fitBounds(
    L.latLngBounds(coords),
    {padding:[25,25]}
   );
 }

 setTimeout(()=>overviewMap.invalidateSize(),100);

}


/* =====================================================
   MAIN MAP
===================================================== */

let activeRoute="all";

async function renderMainMap(){

 if(!mainMap){
   mainMap=createMap("mainMap",11);
 }

 clearLayers(mainMap,mainLayers);

 $("mapStatus").textContent="正在加载真实地点与道路轨迹…";

 if(activeRoute==="all"){

  for(const route of ["szbay","hk","futian","nanshan"]){

   await drawRoute(
     mainMap,
     dayPlaceIds(route),
     route,
     mainLayers
   );

  }

 }else if(activeRoute==="houhai"){

  await drawRoute(
   mainMap,
   ["culture","talent","houhaibridge"],
   "houhai",
   mainLayers
  );

 }else{

  await drawRoute(
   mainMap,
   dayPlaceIds(activeRoute),
   activeRoute,
   mainLayers
  );

 }

 $("mapStatus").textContent=
  "地图底图与地点使用真实地理数据；道路轨迹在 OSRM 可解析时按道路网络绘制。";

 setTimeout(()=>mainMap.invalidateSize(),100);

}


/* =====================================================
   MAP FILTER
===================================================== */

const filters=[
 ["all","全部"],
 ["szbay","10/3 深超总"],
 ["hk","10/4 香港"],
 ["futian","10/5 福田"],
 ["nanshan","10/6 南山"],
 ["houhai","MAD 后海"],
 ["optional","可选"]
];

function renderFilters(){

 $("routeFilters").innerHTML=
 filters.map(([id,label])=>`
   <button
    class="${activeRoute===id?"active":""}"
    data-route="${id}">
    ${label}
   </button>
 `).join("");

 document
 .querySelectorAll("#routeFilters button")
 .forEach(btn=>{

   btn.onclick=()=>{

    activeRoute=btn.dataset.route;

    renderFilters();
    renderPlaceCards();
    renderMainMap();

   };

 });

}


/* =====================================================
   PLACE CARDS
===================================================== */

function visiblePlaces(){

 const entries=Object.entries(places);

 if(activeRoute==="all") return entries;

 return entries.filter(
   ([,p])=>p.route===activeRoute
 );

}


function renderPlaceCards(){

 $("placeCards").innerHTML=
 visiblePlaces().map(([id,p])=>`

 <article class="place-card">

  <div class="place-top">

   <div>
    <span class="place-type">${p.type}</span>
    <h3>${escapeHTML(p.name)}</h3>
   </div>

   <span class="nav-ok">● REAL POI</span>

  </div>

  <p>${escapeHTML(p.note||"")}</p>

  ${p.navAddress
    ? `<p>${escapeHTML(p.navAddress)}</p>`
    : ""
  }

  <div class="place-actions">

   <button data-place="${id}">
    📍 打开地图
   </button>

  </div>

 </article>

 `).join("");

 document
 .querySelectorAll("[data-place]")
 .forEach(btn=>{

   btn.onclick=()=>{
     navigatePlace(btn.dataset.place);
   };

 });

}


/* =====================================================
   DAILY MAP
===================================================== */

let selectedDay="d1";

async function renderDailyMap(day){

 const mapElement=$("dailyMap");

 if(!mapElement) return;

 if(dailyMap){
   dailyMap.remove();
 }

 dailyMap=createMap("dailyMap",12);
 dailyLayers=[];

 const ids=day.events
   .map(e=>e.placeId)
   .filter(Boolean)
   .filter((v,i,a)=>a.indexOf(v)===i);

 if(!ids.length) return;

 await drawRoute(
   dailyMap,
   ids,
   day.route,
   dailyLayers
 );

 setTimeout(()=>dailyMap.invalidateSize(),150);

}


/* =====================================================
   DAILY TIMELINE
===================================================== */

function previousPlace(day,index){

 for(let i=index-1;i>=0;i--){

  if(day.events[i].placeId){
    return day.events[i].placeId;
  }

 }

 return null;

}


function renderDaily(){

 const day=
  days.find(d=>d.id===selectedDay)||days[0];

 $("dailyContent").innerHTML=`

 <section class="day-head">

  <p class="eyebrow">
   ${day.date} · GMT+8
  </p>

  <h2>${escapeHTML(day.title)}</h2>

  <p>${escapeHTML(day.subtitle)}</p>

  <button
   id="routeMapToggle"
   class="route-map-toggle">
   🗺 查看当天真实 Route Map
  </button>

  <div
   id="dailyMapWrap"
   class="daily-map-wrap"
   hidden>

   <div
    id="dailyMap"
    class="real-map daily-map">
   </div>

  </div>

 </section>


 <section class="timeline">

 ${day.events.map((ev,index)=>{

   const previous=
    previousPlace(day,index);

   let navigation="";

   if(ev.placeId){

    if(previous){

     navigation=`
      <button
       class="nav-button"
       data-from="${previous}"
       data-to="${ev.placeId}">
       📍 ${escapeHTML(shortName(places[previous].name))}
       → ${escapeHTML(shortName(places[ev.placeId].name))}
      </button>
     `;

    }else{

     navigation=`
      <button
       class="nav-button"
       data-destination="${ev.placeId}">
       📍 导航到今日起点
      </button>
     `;

    }

   }

   return`

   <article class="event">

    <div class="event-time">
     ${ev.time}
    </div>

    <div class="event-body">

     <span class="event-type">
      ${ev.type}
     </span>

     <h3>${escapeHTML(ev.title)}</h3>

     <p>${escapeHTML(ev.detail)}</p>

     ${navigation}

    </div>

   </article>

   `;

 }).join("")}

 </section>

 `;


 $("routeMapToggle").onclick=async()=>{

   const wrap=$("dailyMapWrap");

   const opening=wrap.hidden;

   wrap.hidden=!opening;

   $("routeMapToggle").textContent=
    opening
    ?"🗺 收起当天 Route Map"
    :"🗺 查看当天真实 Route Map";

   if(opening){
     await renderDailyMap(day);
   }

 };


 document
 .querySelectorAll("[data-destination]")
 .forEach(btn=>{

  btn.onclick=()=>{
   navigatePlace(btn.dataset.destination);
  };

 });


 document
 .querySelectorAll("[data-from]")
 .forEach(btn=>{

  btn.onclick=()=>{

   navigateRoute(
    btn.dataset.from,
    btn.dataset.to
   );

  };

 });

}


/* =====================================================
   EXTERNAL NAVIGATION
===================================================== */

function navigatePlace(id){

 const p=places[id];

 if(!p) return;

 if(p.city==="hongkong"){

  window.open(
   "https://www.google.com/maps/search/?api=1&query="+
   encodeURIComponent(p.navQuery),
   "_blank"
  );

  return;

 }

 const web=
  "https://api.map.baidu.com/place/search"+
  "?query="+encodeURIComponent(p.navQuery)+
  "&region=深圳"+
  "&output=html"+
  "&src=HKSZTrip2026";

 const app=
  "baidumap://map/place/search"+
  "?query="+encodeURIComponent(p.navQuery)+
  "&region=深圳"+
  "&src=HKSZTrip2026";

 launchBaidu(app,web);

}


function navigateRoute(fromId,toId){

 const a=places[fromId];
 const b=places[toId];

 if(!a||!b) return;

 if(
  a.city==="hongkong" &&
  b.city==="hongkong"
 ){

  const url=
   "https://www.google.com/maps/dir/?api=1"+
   "&origin="+encodeURIComponent(a.navQuery)+
   "&destination="+encodeURIComponent(b.navQuery)+
   "&travelmode=walking";

  window.open(url,"_blank");

  return;

 }

 if(
  a.city==="shenzhen" &&
  b.city==="shenzhen"
 ){

  const app=
   "baidumap://map/direction"+
   "?origin="+encodeURIComponent("name:"+a.navQuery)+
   "&destination="+encodeURIComponent("name:"+b.navQuery)+
   "&mode=walking"+
   "&src=HKSZTrip2026";

  const web=
   "https://api.map.baidu.com/direction"+
   "?origin="+encodeURIComponent(a.navQuery)+
   "&destination="+encodeURIComponent(b.navQuery)+
   "&mode=walking"+
   "&region=深圳"+
   "&output=html";

  launchBaidu(app,web);

  return;

 }

 navigatePlace(toId);

}


function launchBaidu(app,web){

 /*
   使用临时窗口承接网页版 fallback，
   原旅行页面不被百度网页覆盖。
 */

 const fallback=window.open("","_blank");

 if(fallback){

  fallback.document.write(`
   <meta name="viewport"
    content="width=device-width,initial-scale=1">

   <body style="
    font-family:-apple-system,PingFang SC,sans-serif;
    background:#f5f1ea;
    padding:30px;
   ">

   <div style="
    max-width:400px;
    margin:30px auto;
    background:#fff;
    padding:20px;
    border-radius:20px;
   ">

    <strong>正在打开百度地图…</strong>

    <p>
     如果没有自动打开 App，
     将进入百度地图网页版。
    </p>

   </div>

   </body>
  `);

 }

 window.location.href=app;

 setTimeout(()=>{

  if(
   fallback &&
   !fallback.closed
  ){
   fallback.location.href=web;
  }

 },1100);

}


/* =====================================================
   SIX DAY SKELETON
===================================================== */

function shanghaiToday(){

 return new Intl.DateTimeFormat(
  "en-CA",
  {
   timeZone:TIMEZONE,
   year:"numeric",
   month:"2-digit",
   day:"2-digit"
  }
 ).format(new Date());

}


function renderSkeleton(){

 const today=shanghaiToday();

 $("daySkeleton").innerHTML=
 days.map(day=>`

 <button
  class="skeleton-day
  ${today===day.fullDate?"today":""}"
  data-day="${day.id}">

  <span class="skeleton-date">
   ${day.date}
  </span>

  <span>
   <strong>${escapeHTML(day.title)}</strong>
   <small>${escapeHTML(day.subtitle)}</small>
  </span>

  <span class="skeleton-arrow">→</span>

 </button>

 `).join("");


 document
 .querySelectorAll(".skeleton-day")
 .forEach(btn=>{

  btn.onclick=()=>{

   selectedDay=btn.dataset.day;

   $("daySelect").value=selectedDay;

   renderDaily();

   activateTab("days");

   window.scrollTo({
    top:0,
    behavior:"smooth"
   });

  };

 });

}


/* =====================================================
   DAY SELECT
===================================================== */

function initDaySelect(){

 $("daySelect").innerHTML=
 days.map(day=>`
  <option value="${day.id}">
   ${day.date} · ${day.title}
  </option>
 `).join("");

 const today=shanghaiToday();

 const current=
  days.find(d=>d.fullDate===today);

 if(current){
   selectedDay=current.id;
 }

 $("daySelect").value=selectedDay;

 $("daySelect").onchange=event=>{

  selectedDay=event.target.value;
  renderDaily();

 };

}


/* =====================================================
   NOW COUNTDOWN
===================================================== */

function timestamp(date,time){

 const [y,m,d]=date.split("-").map(Number);
 const [h,min]=time.split(":").map(Number);

 return Date.UTC(
  y,m-1,d,
  h-8,min,0
 );

}


function timedEvents(){

 const output=[];

 days.forEach(day=>{

  day.events.forEach(ev=>{

   output.push({
    ...ev,
    day,
    ts:timestamp(day.fullDate,ev.time)
   });

  });

 });

 return output.sort(
  (a,b)=>a.ts-b.ts
 );

}


function updateNow(){

 const now=Date.now();

 const next=
  timedEvents().find(e=>e.ts>now);

 if(!next){

  $("nowBadge").textContent="FINISHED";
  $("nowTitle").textContent="旅行完成";
  $("nowDetail").textContent="欢迎回来";

  ["countdownDays",
   "countdownHours",
   "countdownMinutes",
   "countdownSeconds"]
  .forEach(id=>$(id).textContent="00");

  return;

 }

 const diff=
  Math.max(0,next.ts-now);

 const seconds=
  Math.floor(diff/1000);

 const d=
  Math.floor(seconds/86400);

 const h=
  Math.floor((seconds%86400)/3600);

 const m=
  Math.floor((seconds%3600)/60);

 const s=
  seconds%60;

 $("countdownDays").textContent=pad(d);
 $("countdownHours").textContent=pad(h);
 $("countdownMinutes").textContent=pad(m);
 $("countdownSeconds").textContent=pad(s);

 $("nowTitle").textContent=next.title;

 $("nowDetail").textContent=
  `${next.day.date} · ${next.time} · ${next.detail}`;

 const start=
  timestamp("2026-10-02","16:15");

 $("nowBadge").textContent=
  now<start
  ?"出发倒计时"
  :"NEXT";

}


/* =====================================================
   TODO
===================================================== */

const DEFAULT_TODOS=[
 "确认香港最终天气日",
 "购买福田 ⇄ 香港西九龙高铁票",
 "确认香港返程班次",
 "确认深圳湾文化广场开放安排",
 "决定深圳自然博物馆是否加入",
 "继续补齐所有早餐 / 午餐 / 晚餐",
 "检查 Pocket 4 / iPhone / 充电宝",
 "确认后海大桥 AirPods × 春笋摄影站位"
];

let todos=loadJSON(
 TODO_KEY,
 DEFAULT_TODOS.map((text,i)=>({
  id:"default"+i,
  text,
  done:false
 }))
);


function renderTodos(){

 $("todoList").innerHTML=
 todos.map(todo=>`

 <div class="todo-item ${todo.done?"done":""}">

  <input
   type="checkbox"
   data-check="${todo.id}"
   ${todo.done?"checked":""}>

  <span>${escapeHTML(todo.text)}</span>

  <button
   class="todo-delete"
   data-delete="${todo.id}">
   ×
  </button>

 </div>

 `).join("");


 document
 .querySelectorAll("[data-check]")
 .forEach(input=>{

  input.onchange=()=>{

   const item=
    todos.find(
     t=>t.id===input.dataset.check
    );

   if(item){
    item.done=input.checked;
   }

   saveJSON(TODO_KEY,todos);
   renderTodos();

  };

 });


 document
 .querySelectorAll("[data-delete]")
 .forEach(btn=>{

  btn.onclick=()=>{

   todos=
    todos.filter(
     t=>t.id!==btn.dataset.delete
    );

   saveJSON(TODO_KEY,todos);
   renderTodos();

  };

 });

}


function initTodo(){

 $("todoForm").onsubmit=event=>{

  event.preventDefault();

  const input=$("todoInput");
  const text=input.value.trim();

  if(!text) return;

  todos.push({
   id:"todo"+Date.now(),
   text,
   done:false
  });

  input.value="";

  saveJSON(TODO_KEY,todos);
  renderTodos();

 };

}


/* =====================================================
   TABS
===================================================== */

function activateTab(id){

 document
 .querySelectorAll(".tab")
 .forEach(tab=>{
   tab.classList.toggle(
    "active",
    tab.dataset.tab===id
   );
 });

 document
 .querySelectorAll(".panel")
 .forEach(panel=>{
   panel.classList.toggle(
    "active",
    panel.id===id
   );
 });

 if(id==="map"){

  setTimeout(()=>{
   if(mainMap) mainMap.invalidateSize();
  },100);

 }

 if(id==="overview"){

  setTimeout(()=>{
   if(overviewMap) overviewMap.invalidateSize();
  },100);

 }

}


function initTabs(){

 document
 .querySelectorAll(".tab")
 .forEach(tab=>{

  tab.onclick=()=>{
   activateTab(tab.dataset.tab);
  };

 });

}


/* =====================================================
   CHANGELOG
===================================================== */

function initChangelog(){

 $("openChangelog").onclick=async()=>{

  $("changelogModal").hidden=false;

  try{

   const response=
    await fetch(
     "./CHANGELOG.md?v="+Date.now()
    );

   const text=
    await response.text();

   $("changelogContent").innerHTML=
    text
    .split("\n")
    .map(line=>{

     const safe=escapeHTML(line);

     if(line.startsWith("## "))
      return `<h3>${safe.slice(3)}</h3>`;

     if(line.startsWith("# "))
      return `<h2>${safe.slice(2)}</h2>`;

     if(line.startsWith("- "))
      return `<p>• ${safe.slice(2)}</p>`;

     return line.trim()
      ?`<p>${safe}</p>`
      :"";

    })
    .join("");

  }catch{

   $("changelogContent").textContent=
    "暂时无法读取更新记录。";

  }

 };


 $("closeChangelog").onclick=()=>{
  $("changelogModal").hidden=true;
 };

}


/* =====================================================
   UTIL
===================================================== */

function $(id){
 return document.getElementById(id);
}

function pad(v){
 return String(v).padStart(2,"0");
}

function shortName(name){

 return name
  .replace("深圳市","")
  .replace("香港","")
  .replace("（华强北总店）","")
  .replace("（海岸城店）","");

}

function escapeHTML(value){

 return String(value)
 .replaceAll("&","&amp;")
 .replaceAll("<","&lt;")
 .replaceAll(">","&gt;")
 .replaceAll('"',"&quot;")
 .replaceAll("'","&#039;");

}

function loadJSON(key,fallback){

 try{

  const value=
   localStorage.getItem(key);

  return value
   ?JSON.parse(value)
   :fallback;

 }catch{
  return fallback;
 }

}

function saveJSON(key,value){

 try{
  localStorage.setItem(
   key,
   JSON.stringify(value)
  );
 }catch{}

}


/* =====================================================
   INIT
===================================================== */

async function init(){

 initTabs();

 renderSkeleton();

 renderFilters();
 renderPlaceCards();

 initDaySelect();
 renderDaily();

 initTodo();
 renderTodos();

 initChangelog();

 updateNow();
 setInterval(updateNow,1000);

 /*
   Maps load after first-frame UI,
   so the page remains responsive.
 */

 await renderOverviewMap();
 await renderMainMap();

}

init();