"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const inputCidade = document.querySelector("#input-cidade");
const sectionInfos = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!inputCidade || !sectionInfos)
        return;
    const cidade = inputCidade.value;
    if (cidade.length < 3) {
        alert("O local precisa ter pelo menos 3 letras");
        return;
    }
    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=6b875ef3cdd34cc9b8cd2cba3d7205e4&lang=pt_br&units=metric`);
    const data = yield response.json();
    const infos = {
        temperatura: Math.round(data.main.temp),
        local: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
    sectionInfos.innerHTML = `<div class="tempo-data">
  <h2>${infos.local}</h2>

  <span>${infos.temperatura}°C</span>
</div>

<img
  src="${infos.icon}"
  alt="Icone de condições climáticas"
/>`;
}));
