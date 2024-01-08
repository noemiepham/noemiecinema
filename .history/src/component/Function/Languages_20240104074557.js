const Languages = [
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

export default Languages;

/* import { useEffect, useState } from "react";
import convertArray from "../../component/Function/convertArray";
import "./AllFilms.css";

const Languages = () => {
  const [languages, setLanguages] = useState([]);
  const token = process.env.REACT_APP_API_TOKEN;
  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://api.themoviedb.org/3/configuration/primary_translations";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            // Add your API key to the Authorization header
            Authorization: `Bearer ${token}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLanguages(data.fiter((s) => s?.id ?? false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);
  console.log("lg", convertArray(languages));
};

export default Languages;
 */
