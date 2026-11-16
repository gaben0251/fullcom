// FULLCOM 2.0
// ECU DATABASE
// База автомобильных блоков управления
// Версия 1.0

const ECU_DATABASE = [

  // =========================
  // LADA / ВАЗ
  // =========================

  {
    brand: "LADA",
    models: ["Granta", "Kalina", "Priora", "2110", "2112", "2114", "2115"],
    ecu: "Январь 7.2",
    manufacturer: "Итэлма / Автэл",
    processor: "ST10",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "OpenBox"],
    pinout: "Требуется проверка по аппаратной версии",
    instructions: "Определить аппаратную версию ЭБУ перед чтением и записью."
  },

  {
    brand: "LADA",
    models: ["2110", "2112", "2114", "2115", "Kalina", "Priora"],
    ecu: "Bosch M7.9.7",
    manufacturer: "Bosch",
    processor: "ST10",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Зависит от модификации блока",
    instructions: "Проверить идентификаторы и совместимость загрузчика."
  },

  {
    brand: "LADA",
    models: ["Granta", "Kalina", "Priora", "2114"],
    ecu: "М73",
    manufacturer: "Итэлма / Автэл",
    processor: "ST10",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "OpenBox"],
    pinout: "Требуется уточнение аппаратной версии",
    instructions: "Перед записью сохранить оригинальную прошивку."
  },

  {
    brand: "LADA",
    models: ["Granta", "Kalina", "Priora"],
    ecu: "М74",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Требуется проверенная схема",
    instructions: "Выбрать модуль по идентификаторам блока."
  },

  {
    brand: "LADA",
    models: ["Granta", "Kalina"],
    ecu: "М74CAN",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Требуется проверенная схема",
    instructions: "Проверить аппаратную модификацию."
  },

  {
    brand: "LADA",
    models: ["Vesta", "XRAY", "Granta"],
    ecu: "М86",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Зависит от версии ЭБУ",
    instructions: "Проверить поддержку конкретной модификации."
  },

  {
    brand: "LADA",
    models: ["Vesta", "Granta"],
    ecu: "М74.9",
    manufacturer: "Итэлма",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Необходимо уточнить аппаратную версию."
  },

  // =========================
  // RENAULT
  // =========================

  {
    brand: "Renault",
    models: ["Logan", "Sandero", "Duster", "Largus"],
    ecu: "Siemens EMS3132",
    manufacturer: "Siemens",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы ЭБУ."
  },

  {
    brand: "Renault",
    models: ["Logan", "Sandero", "Duster"],
    ecu: "Continental EMS3120",
    manufacturer: "Continental",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить поддержку загрузчиком."
  },

  {
    brand: "Renault",
    models: ["Megane", "Fluence", "Duster"],
    ecu: "Continental EMS3155",
    manufacturer: "Continental",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Уточнить версию аппаратного обеспечения."
  },

  // =========================
  // HYUNDAI / KIA
  // =========================

  {
    brand: "Hyundai",
    models: ["Solaris", "Elantra", "Creta", "Accent"],
    ecu: "Bosch ME17.9.11",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Требуется схема конкретной модификации",
    instructions: "Проверить версию блока и протокол."
  },

  {
    brand: "Kia",
    models: ["Rio", "Ceed", "Cerato", "Sportage"],
    ecu: "Bosch ME17.9.11",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы и совместимость."
  },

  {
    brand: "Hyundai",
    models: ["Solaris", "Elantra", "Creta"],
    ecu: "Kefico CPEGD2",
    manufacturer: "Kefico",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Уточнить аппаратную модификацию."
  },

  {
    brand: "Kia",
    models: ["Rio", "Ceed", "Cerato"],
    ecu: "Kefico CPEGD2",
    manufacturer: "Kefico",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить совместимость оборудования."
  },

  // =========================
  // FORD
  // =========================

  {
    brand: "Ford",
    models: ["Focus", "Mondeo", "Fiesta"],
    ecu: "Bosch MED17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Зависит от конкретного блока",
    instructions: "Уточнить точную модификацию MED17."
  },

  {
    brand: "Ford",
    models: ["Focus", "Mondeo", "Kuga"],
    ecu: "Continental EMS",
    manufacturer: "Continental",
    processor: "Требуется уточнение",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Определить точную модель ЭБУ."
  },

  // =========================
  // VOLKSWAGEN / AUDI / SKODA
  // =========================

  {
    brand: "Volkswagen",
    models: ["Polo", "Golf", "Passat", "Tiguan"],
    ecu: "Bosch MED17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Требуется уточнение",
    instructions: "Определить модификацию MED17."
  },

  {
    brand: "Audi",
    models: ["A3", "A4", "A5", "A6", "Q5"],
    ecu: "Bosch MED17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  {
    brand: "Skoda",
    models: ["Octavia", "Rapid", "Superb", "Yeti"],
    ecu: "Bosch MED17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить точную модель ЭБУ."
  },

  // =========================
  // BMW
  // =========================

  {
    brand: "BMW",
    models: ["1 Series", "3 Series", "5 Series", "X1", "X3", "X5"],
    ecu: "Bosch MEVD17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "Flex", "Autotuner"],
    pinout: "Зависит от модификации",
    instructions: "Определить точный номер блока."
  },

  // =========================
  // MERCEDES-BENZ
  // =========================

  {
    brand: "Mercedes-Benz",
    models: ["C-Class", "E-Class", "GLK", "GLC"],
    ecu: "Bosch MED17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "Flex", "Autotuner"],
    pinout: "Не добавлена",
    instructions: "Уточнить аппаратную модификацию."
  },

  // =========================
  // TOYOTA / LEXUS
  // =========================

  {
    brand: "Toyota",
    models: ["Corolla", "Camry", "RAV4", "Land Cruiser"],
    ecu: "Denso",
    manufacturer: "Denso",
    processor: "Зависит от модели",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Требуется точный номер ЭБУ",
    instructions: "Определить номер блока Denso."
  },

  {
    brand: "Lexus",
    models: ["IS", "ES", "GS", "RX", "NX"],
    ecu: "Denso",
    manufacturer: "Denso",
    processor: "Зависит от модели",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Определить точную модель ЭБУ."
  },

  // =========================
  // NISSAN
  // =========================

  {
    brand: "Nissan",
    models: ["Almera", "Qashqai", "X-Trail", "Teana"],
    ecu: "Hitachi",
    manufacturer: "Hitachi",
    processor: "Зависит от модели",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Проверить номер и тип ЭБУ."
  },

  // =========================
  // MITSUBISHI
  // =========================

  {
    brand: "Mitsubishi",
    models: ["Lancer", "Outlander", "ASX", "Pajero"],
    ecu: "Mitsubishi Electric",
    manufacturer: "Mitsubishi Electric",
    processor: "Зависит от модели",
    connection: ["OBD", "Bench"],
    tools: ["PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Уточнить модель блока."
  },

  // =========================
  // PEUGEOT / CITROEN
  // =========================

  {
    brand: "Peugeot",
    models: ["206", "207", "308", "408", "3008"],
    ecu: "Bosch MEV17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Уточнить точную модификацию."
  },

  {
    brand: "Citroen",
    models: ["C3", "C4", "C5", "Berlingo"],
    ecu: "Bosch MEV17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "CombiLoader"],
    pinout: "Не добавлена",
    instructions: "Проверить аппаратную версию."
  },

  // =========================
  // CHEVROLET
  // =========================

  {
    brand: "Chevrolet",
    models: ["Lacetti", "Aveo", "Cruze", "Niva"],
    ecu: "Delphi",
    manufacturer: "Delphi",
    processor: "Зависит от модели",
    connection: ["OBD", "Bench"],
    tools: ["CombiLoader", "PCMFlash"],
    pinout: "Не добавлена",
    instructions: "Уточнить номер блока."
  },

  // =========================
  // CHINESE VEHICLES
  // =========================

  {
    brand: "Chery",
    models: ["Tiggo", "Arrizo"],
    ecu: "Bosch ME17",
    manufacturer: "Bosch",
    processor: "Infineon TriCore",
    connection: ["OBD", "Bench", "Boot"],
    tools: ["PCMFlash", "Flex"],
    pinout: "Не добавлена",
    instructions: "Уточнить конкретную модификацию."
  },

  {
    brand: "Haval",
    models: ["H2", "H6", "F7", "Jolion"],
    ecu: "Bosch MG1",
    manufacturer: "Bosch",
    processor: "Зависит от модификации",
    connection: ["OBD", "Bench"],
    tools: ["Flex", "Autotuner"],
    pinout: "Не добавлена",
    instructions: "Проверить идентификаторы ЭБУ."
  },

  {
    brand: "Geely",
    models: ["Atlas", "Coolray", "Emgrand"],
    ecu: "Bosch MG1",
    manufacturer: "Bosch",
    processor: "Зависит от модификации",
    connection: ["OBD", "Bench"],
    tools: ["Flex", "Autotuner"],
    pinout: "Не добавлена",
    instructions: "Проверить точную модель блока."
  }

];

// =========================
// SEARCH FUNCTIONS
// =========================

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

// Экспорт для использования в других скриптах
window.FULLCOM_DATABASE = ECU_DATABASE;
window.findECUByCar = findECUByCar;
window.findECUByName = findECUByName;

console.log(
    "FULLCOM ECU DATABASE загружена. Записей:",
    ECU_DATABASE.length
);
