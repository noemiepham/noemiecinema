const convertArray = (array) => {
  let obj = [];
  if (array.length === 0) {
    return "no found data";
  } else if (array.length >= 20) {
    Object.keys(array).forEach((key) => {
      obj.push({
        name: array[key],
      });
    });
  } else {
    ("no search find");
  }
  console.log(convertArray(array1));
  return obj;
};

export default convertArray;

const array1 = [
  "af-ZA",
  "ar-AE",
  "ar-SA",
  "be-BY",
  "bg-BG",
  "bn-BD",
  "ca-ES",
  "ch-GU",
  "cn-CN",
  "cs-CZ",
  "cy-GB",
  "da-DK",
  "de-AT",
  "de-CH",
  "de-DE",
  "el-GR",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-IE",
  "en-NZ",
  "en-US",
  "eo-EO",
  "es-ES",
  "es-MX",
  "et-EE",
  "eu-ES",
  "fa-IR",
  "fi-FI",
  "fr-CA",
  "fr-FR",
  "ga-IE",
  "gd-GB",
  "gl-ES",
  "he-IL",
  "hi-IN",
  "hr-HR",
  "hu-HU",
  "id-ID",
  "it-IT",
  "ja-JP",
  "ka-GE",
  "kk-KZ",
  "kn-IN",
  "ko-KR",
  "ky-KG",
  "lt-LT",
  "lv-LV",
  "ml-IN",
  "mr-IN",
  "ms-MY",
  "ms-SG",
  "nb-NO",
  "nl-BE",
  "nl-NL",
  "no-NO",
  "pa-IN",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "si-LK",
  "sk-SK",
  "sl-SI",
  "sq-AL",
  "sr-RS",
  "sv-SE",
  "ta-IN",
  "te-IN",
  "th-TH",
  "tl-PH",
  "tr-TR",
  "uk-UA",
  "vi-VN",
  "zh-CN",
  "zh-HK",
  "zh-SG",
  "zh-TW",
  "zu-ZA",
];
