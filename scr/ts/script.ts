const form = document.querySelector("#search-form > form");
const inputCidade: HTMLInputElement | null =
  document.querySelector("#input-cidade");

const sectionInfos = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!inputCidade || !sectionInfos) return;

  const cidade = inputCidade.value;

  if (cidade.length < 3) {
    alert("O local precisa ter pelo menos 3 letras");
    return;
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=6b875ef3cdd34cc9b8cd2cba3d7205e4&lang=pt_br&units=metric`
  );
  const data = await response.json();

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
});
