// ==========================================
// FULLCOM 2.2
// ECU DATABASE — AVTOVAZ
// ==========================================

const ECU_DATABASE = [

  // ========================================
  // ВАЗ КЛАССИКА
  // ========================================

  {
    brand: "LADA",
    models: ["2101", "2102", "2103", "2104", "2105", "2106", "2107"],
    ecu: "Bosch M1.5.4",
    manufacturer: "Bosch",
    processor: "Требуется уточнение",
    connection: ["Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Применяется на отдельных инжекторных модификациях. Проверить маркировку блока."
  },

  {
    brand: "LADA",
    models: ["2104", "2105", "2107"],
    ecu: "Январь 5.1",
    manufacturer: "Автэл / Итэлма",
    processor: "Требуется уточнение",
    connection: ["Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную модификацию."
  },

  {
    brand: "LADA",
    models: ["2104", "2105", "2107"],
    ecu: "Bosch M7.9.7",
    manufacturer: "Bosch",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы ЭБУ."
  },

  // ========================================
  // ВАЗ 2108–21099
  // ========================================

  {
    brand: "LADA",
    models: ["2108", "2109", "21099"],
    ecu: "Январь 5.1",
    manufacturer: "Автэл / Итэлма",
    processor: "Требуется уточнение",
    connection: ["Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока."
  },

  {
    brand: "LADA",
    models: ["2108", "2109", "21099"],
    ecu: "Bosch M1.5.4",
    manufacturer: "Bosch",
    processor: "Требуется уточнение",
    connection: ["Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Уточнить модификацию ЭБУ."
  },

  // ========================================
  // ВАЗ 2110–2112
  // ========================================

  {
    brand: "LADA",
    models: ["2110", "2111", "2112"],
    ecu: "Январь 5.1",
    manufacturer: "Автэл / Итэлма",
    processor: "Требуется уточнение",
    connection: ["Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  {
    brand: "LADA",
    models: ["2110", "2111", "2112"],
    ecu: "Январь 7.2",
    manufacturer: "Автэл / Итэлма",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "OpenBox"],
    pinout: "Не добавлена",
    instructions: "Сохранить оригинальную прошивку."
  },

  {
    brand: "LADA",
    models: ["2110", "2111", "2112"],
    ecu: "Bosch M7.9.7",
    manufacturer: "Bosch",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  // ========================================
  // ВАЗ 2113–2115
  // ========================================

  {
    brand: "LADA",
    models: ["2113", "2114", "2115"],
    ecu: "Январь 7.2",
    manufacturer: "Автэл / Итэлма",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "OpenBox"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы."
  },

  {
    brand: "LADA",
    models: ["2113", "2114", "2115"],
    ecu: "Bosch M7.9.7",
    manufacturer: "Bosch",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока."
  },

  {
    brand: "LADA",
    models: ["2113", "2114", "2115"],
    ecu: "М73",
    manufacturer: "Автэл / Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "OpenBox"],
    pinout: "Не добавлена",
    instructions: "Проверить модификацию."
  },

  // ========================================
  // LADA PRIORA
  // ========================================

  {
    brand: "LADA",
    models: ["Priora", "2170", "2171", "2172"],
    ecu: "Bosch M7.9.7",
    manufacturer: "Bosch",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить маркировку."
  },

  {
    brand: "LADA",
    models: ["Priora", "2170", "2171", "2172"],
    ecu: "М73",
    manufacturer: "Автэл / Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  {
    brand: "LADA",
    models: ["Priora", "2170", "2171", "2172"],
    ecu: "М74",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы ЭБУ."
  },

  {
    brand: "LADA",
    models: ["Priora", "2170", "2171", "2172"],
    ecu: "М75",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Уточнить аппаратную модификацию."
  },

  // ========================================
  // LADA KALINA
  // ========================================

  {
    brand: "LADA",
    models: ["Kalina", "1117", "1118", "1119"],
    ecu: "Январь 7.2",
    manufacturer: "Автэл / Итэлма",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока."
  },

  {
    brand: "LADA",
    models: ["Kalina", "1117", "1118", "1119"],
    ecu: "М73",
    manufacturer: "Автэл / Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить модификацию."
  },

  {
    brand: "LADA",
    models: ["Kalina", "Kalina 2"],
    ecu: "М74",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  {
    brand: "LADA",
    models: ["Kalina 2"],
    ecu: "М74CAN",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока."
  },

  // ========================================
  // LADA GRANTA
  // ========================================

  {
    brand: "LADA",
    models: ["Granta", "2190", "2191"],
    ecu: "М74",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить модификацию."
  },

  {
    brand: "LADA",
    models: ["Granta", "2190", "2191"],
    ecu: "М74CAN",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  {
    brand: "LADA",
    models: ["Granta", "2190", "2191"],
    ecu: "М86",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы."
  },

  {
    brand: "LADA",
    models: ["Granta"],
    ecu: "М74.9",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить номер ЭБУ."
  },

  // ========================================
  // LADA VESTA
  // ========================================

  {
    brand: "LADA",
    models: ["Vesta", "Vesta SW", "Vesta Cross"],
    ecu: "М86",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную модификацию."
  },

  {
    brand: "LADA",
    models: ["Vesta", "Vesta NG"],
    ecu: "М74.9",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить совместимость загрузчика."
  },

  // ========================================
  // LADA XRAY
  // ========================================

  {
    brand: "LADA",
    models: ["XRAY", "XRAY Cross"],
    ecu: "М86",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока."
  },

  // ========================================
  // LADA LARGUS
  // ========================================

  {
    brand: "LADA",
    models: ["Largus", "Largus Cross"],
    ecu: "Siemens EMS3132",
    manufacturer: "Siemens",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить двигатель и аппаратную версию."
  },

  {
    brand: "LADA",
    models: ["Largus", "Largus Cross"],
    ecu: "М86",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить маркировку ЭБУ."
  },

  // ========================================
  // LADA NIVA
  // ========================================

  {
    brand: "LADA",
    models: ["Niva", "Niva Legend", "2121", "21213", "21214"],
    ecu: "Bosch M7.9.7",
    manufacturer: "Bosch",
    processor: "ST10 (уточнить модификацию)",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Только для соответствующих инжекторных модификаций."
  },

  {
    brand: "LADA",
    models: ["Niva", "Niva Legend", "21214"],
    ecu: "М74",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока."
  },

  {
    brand: "LADA",
    models: ["Niva Travel", "Chevrolet Niva", "2123"],
    ecu: "Bosch ME17.9.7",
    manufacturer: "Bosch",
    processor: "Infineon TriCore (уточнить модификацию)",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  // ========================================
  // LADA 4x4
  // ========================================

  {
    brand: "LADA",
    models: ["4x4", "Urban", "2131"],
    ecu: "Bosch ME17.9.7",
    manufacturer: "Bosch",
    processor: "Infineon TriCore (уточнить модификацию)",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить номер блока и поддерживаемый протокол."
  }

];

// ==========================================
// SEARCH FUNCTIONS
// ==========================================

function normalizeECUText(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/ё/g, "е")
        .trim();
}

function findECUByCar(brand, model) {

    const b = normalizeECUText(brand);
    const m = normalizeECUText(model);

    if (!b || !m) return [];

    return ECU_DATABASE.filter(item => {

        const brandMatch =
            normalizeECUText(item.brand) === b;

        const modelMatch = item.models.some(modelName =>
            normalizeECUText(modelName) === m
        );

        return brandMatch && modelMatch;

    });
}

function findECUByName(query) {

    const q = normalizeECUText(query);

    if (!q) return [];

    return ECU_DATABASE.filter(item =>
        normalizeECUText(item.ecu).includes(q)
    );
}

// ==========================================
// EXPORT
// ==========================================

window.FULLCOM_DATABASE = ECU_DATABASE;
window.findECUByCar = findECUByCar;
window.findECUByName = findECUByName;

console.log(
    "FULLCOM AVTOVAZ DATABASE загружена.",
    "Записей:",
    ECU_DATABASE.length
);
