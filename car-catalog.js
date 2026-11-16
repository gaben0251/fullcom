// FULLCOM 3.0 — CAR CATALOG
// Каталог моделей автомобилей
// Не является базой подтверждённых ЭБУ.

const FULLCOM_CAR_CATALOG = {

  LADA: [
    "2101", "2102", "2103", "2104", "2105",
    "2106", "2107", "2108", "2109", "21099",
    "2110", "2111", "2112", "2113", "2114", "2115",
    "1111 Ока", "Калина", "Калина 2",
    "Приора", "Гранта", "Гранта FL",
    "Веста", "Веста SW", "Веста Cross",
    "Веста NG", "Ларгус", "Ларгус Cross",
    "XRAY", "XRAY Cross",
    "Надежда 2120",
    "Нива 2121", "Нива 21213", "Нива 21214",
    "Нива 2131", "Нива Legend",
    "Нива Travel", "Chevrolet Niva",
    "4x4", "4x4 Urban",
    "Искра", "Аура"
  ],

  FORD: [
    "Model T", "Model A",
    "Fiesta", "Focus", "Fusion",
    "Mondeo", "Escort", "Orion",
    "Sierra", "Scorpio", "Ka",
    "StreetKa", "Puma", "Cougar",
    "Probe", "Capri",
    "C-Max", "Grand C-Max",
    "S-Max", "Galaxy",
    "Kuga", "EcoSport", "Edge",
    "Explorer", "Escape", "Expedition",
    "Bronco", "Bronco Sport",
    "Ranger", "Maverick",
    "F-150", "F-250", "F-350",
    "Mustang", "Mustang Mach-E",
    "Taurus", "Crown Victoria",
    "Five Hundred", "Flex",
    "Freestyle", "Freestar",
    "Windstar", "Aerostar",
    "Transit", "Transit Custom",
    "Transit Connect", "Transit Courier",
    "Tourneo", "Tourneo Custom",
    "Tourneo Connect", "Tourneo Courier",
    "B-Max", "Figo", "Ikon",
    "Aspire", "Freestyle India",
    "Territory", "Everest",
    "Endeavour", "Falcon",
    "Fairlane", "Laser",
    "Telstar", "Festiva",
    "Contour", "Tempo"
  ],

  SUZUKI: [
    "Alto", "Celerio", "Swift",
    "Swift Sport", "Baleno",
    "Ignis", "Splash", "Wagon R",
    "Wagon R+", "Cervo",
    "Cultus", "Forenza", "Reno",
    "Liana", "Aerio", "Kizashi",
    "SX4", "SX4 S-Cross", "S-Cross",
    "Vitara", "Grand Vitara",
    "Grand Vitara XL-7", "XL7",
    "Jimny", "Samurai", "SJ410",
    "SJ413", "Escudo", "Sidekick",
    "X-90", "Across",
    "Swace", "Fronx",
    "Brezza", "Ertiga",
    "XL6", "Ciaz", "Dzire",
    "S-Presso", "Eeco",
    "APV", "Carry",
    "Super Carry", "Every",
    "Hustler", "Solio",
    "Spacia", "Lapin",
    "Kei", "MR Wagon",
    "Palette", "Twin"
  ],

  KIA: [
    "Rio", "Rio X", "Rio X-Line",
    "K2", "K3", "K4", "K5", "K7", "K8", "K9",
    "Picanto", "Morning",
    "Ceed", "Ceed SW", "ProCeed",
    "XCeed", "Cerato", "Forte",
    "Spectra", "Sephia", "Shuma",
    "Soul", "Seltos", "Sonet",
    "Sportage", "Sorento",
    "Mohave", "Borrego",
    "Telluride", "Niro",
    "Stonic", "Stinger",
    "Optima", "Magentis",
    "Cadenza", "Quoris",
    "Carnival", "Sedona",
    "Carens", "Rondo",
    "Venga", "Pride",
    "Avella", "Clarus",
    "Opirus", "Amanti",
    "K900", "Ray",
    "Pegas", "Soluto",
    "EV3", "EV4", "EV5", "EV6", "EV9",
    "Bongo", "K2500", "K2700",
    "Pregio", "Retona"
  ],

  HYUNDAI: [
    "Solaris", "Accent", "Verna",
    "Elantra", "Avante",
    "Sonata", "Grandeur",
    "Azera", "Equus",
    "Genesis", "Genesis Coupe",
    "i10", "Grand i10",
    "i20", "i30", "i40",
    "ix20", "ix35", "ix55",
    "Getz", "Atos", "Santro",
    "Eon", "Xcent", "Aura",
    "Creta", "Alcazar",
    "Venue", "Exter",
    "Kona", "Bayon",
    "Tucson", "Santa Fe",
    "Grand Santa Fe",
    "Palisade", "Terracan",
    "Galloper", "Santa Cruz",
    "Matrix", "Lavita",
    "Trajet", "Entourage",
    "Staria", "Starex",
    "Grand Starex", "H-1",
    "H-100", "Porter",
    "Porter II", "Mighty",
    "Veloster", "Tiburon",
    "Coupe", "Scoupe",
    "IONIQ", "IONIQ 5",
    "IONIQ 6", "IONIQ 9",
    "Nexo", "Casper",
    "HB20", "Mufasa"
  ],

  HONDA: [
    "Civic", "Civic Type R",
    "Accord", "Accord Coupe",
    "CR-V", "HR-V", "ZR-V",
    "BR-V", "WR-V",
    "Pilot", "Passport",
    "Ridgeline", "Odyssey",
    "Fit", "Jazz", "City",
    "Amaze", "Brio",
    "Freed", "Mobilio",
    "Stream", "Stepwgn",
    "Shuttle", "Airwave",
    "Partner", "Orthia",
    "Integra", "Prelude",
    "Legend", "Inspire",
    "Saber", "Torneo",
    "Domani", "Concerto",
    "Ascot", "Rafaga",
    "Avancier", "Crosstour",
    "Crossroad", "Element",
    "FR-V", "Edix",
    "S2000", "NSX",
    "CR-Z", "Insight",
    "Clarity", "e",
    "e:Ny1", "Prologue",
    "N-Box", "N-One",
    "N-WGN", "N-VAN",
    "Life", "Zest",
    "That's", "Vamos",
    "Acty", "Beat",
    "S660", "Elysion",
    "Jade", "Vezel",
    "Grace", "Greiz",
    "Envix", "Breeze",
    "UR-V", "XR-V"
  ]

};

// Доступ к каталогу из других файлов сайта
window.FULLCOM_CAR_CATALOG = FULLCOM_CAR_CATALOG;

// Поиск моделей по марке
window.getCarModels = function(brand) {
  const key = String(brand || "").trim().toUpperCase();
  return FULLCOM_CAR_CATALOG[key] || [];
};

// Поиск моделей по части названия
window.searchCarModels = function(query) {
  const q = String(query || "").trim().toLowerCase();

  if (!q) return [];

  const results = [];

  Object.entries(FULLCOM_CAR_CATALOG).forEach(([brand, models]) => {
    models.forEach(model => {
      if (model.toLowerCase().includes(q)) {
        results.push({ brand, model });
      }
    });
  });

  return results;
};

console.log(
  "FULLCOM: каталог автомобилей загружен",
  Object.keys(FULLCOM_CAR_CATALOG).length,
  "марок"
);
