// ============================================
// FULLCOM 4.0 — ADDITIONAL ECU REFERENCE
// ============================================

// Справочник семейств ЭБУ.
// Не является подтверждением совместимости
// с конкретным автомобилем или загрузчиком.

const FULLCOM_ECU_EXTRA = [

  // LADA / AVTOVAZ
  {
    brand: "LADA",
    manufacturer: "Bosch",
    families: [
      "M1.5.4",
      "M7.9.7",
      "M7.9.7+",
      "ME17.9.7",
      "ME17.9.71"
    ]
  },
  {
    brand: "LADA",
    manufacturer: "Автэл / Итэлма",
    families: [
      "Январь 4",
      "Январь 5.1",
      "Январь 7.2",
      "Январь 7.2+",
      "М73",
      "М74",
      "М74CAN",
      "М74.5",
      "М74.8",
      "М74.9",
      "М75",
      "М86"
    ]
  },

  // FORD
  {
    brand: "FORD",
    manufacturer: "Bosch",
    families: [
      "ME7",
      "ME9",
      "MED17",
      "EDC15",
      "EDC16",
      "EDC17",
      "MD1",
      "MG1"
    ]
  },
  {
    brand: "FORD",
    manufacturer: "Siemens / Continental",
    families: [
      "SIM28",
      "SIM29",
      "SID202",
      "SID206",
      "SID208",
      "SID209",
      "SID211",
      "SID212",
      "SID807"
    ]
  },
  {
    brand: "FORD",
    manufacturer: "Visteon / Delphi",
    families: [
      "EEC-V",
      "EEC-VI",
      "DCM3.5",
      "DCM6.1"
    ]
  },

  // SUZUKI
  {
    brand: "SUZUKI",
    manufacturer: "Denso",
    families: [
      "Denso SH705x",
      "Denso SH725xx",
      "Denso RH850"
    ]
  },
  {
    brand: "SUZUKI",
    manufacturer: "Bosch",
    families: [
      "EDC16",
      "EDC17",
      "ME17"
    ]
  },
  {
    brand: "SUZUKI",
    manufacturer: "Mitsubishi Electric",
    families: [
      "Mitsubishi MH810x",
      "Mitsubishi MH820x"
    ]
  },

  // KIA
  {
    brand: "KIA",
    manufacturer: "Bosch",
    families: [
      "ME17.9.11",
      "ME17.9.12",
      "ME17.9.21",
      "EDC16",
      "EDC17",
      "MD1",
      "MG1"
    ]
  },
  {
    brand: "KIA",
    manufacturer: "Kefico",
    families: [
      "CPEGD",
      "CPEGP",
      "SIM2K",
      "M7.9.8"
    ]
  },
  {
    brand: "KIA",
    manufacturer: "Continental / Delphi",
    families: [
      "SIM2K-140",
      "SIM2K-141",
      "SIM2K-240",
      "DCM3.7",
      "DCM6.2"
    ]
  },

  // HYUNDAI
  {
    brand: "HYUNDAI",
    manufacturer: "Bosch",
    families: [
      "ME17.9.11",
      "ME17.9.12",
      "ME17.9.21",
      "EDC16",
      "EDC17",
      "MD1",
      "MG1"
    ]
  },
  {
    brand: "HYUNDAI",
    manufacturer: "Kefico",
    families: [
      "CPEGD",
      "CPEGP",
      "SIM2K",
      "M7.9.8"
    ]
  },
  {
    brand: "HYUNDAI",
    manufacturer: "Continental / Delphi",
    families: [
      "SIM2K-140",
      "SIM2K-141",
      "SIM2K-240",
      "DCM3.7",
      "DCM6.2"
    ]
  },

  // HONDA
  {
    brand: "HONDA",
    manufacturer: "Keihin",
    families: [
      "Keihin SH705x",
      "Keihin SH725xx",
      "Keihin RH850"
    ]
  },
  {
    brand: "HONDA",
    manufacturer: "Bosch",
    families: [
      "EDC16",
      "EDC17",
      "MD1"
    ]
  }
];

// Экспорт в браузер
window.FULLCOM_ECU_EXTRA = FULLCOM_ECU_EXTRA;

// Поиск семейств по марке
window.findECUFamiliesByBrand = function (brand) {
  const query = String(brand || "").trim().toUpperCase();

  return FULLCOM_ECU_EXTRA.filter(item =>
    item.brand === query
  );
};

// Поиск семейства по названию
window.searchECUFamilies = function (query) {
  const text = String(query || "").trim().toLowerCase();

  if (!text) return [];

  const results = [];

  FULLCOM_ECU_EXTRA.forEach(item => {
    item.families.forEach(family => {
      if (family.toLowerCase().includes(text)) {
        results.push({
          brand: item.brand,
          manufacturer: item.manufacturer,
          family: family
        });
      }
    });
  });

  return results;
};

console.log(
  "FULLCOM: дополнительный справочник загружен",
  FULLCOM_ECU_EXTRA.length,
  "групп"
);
