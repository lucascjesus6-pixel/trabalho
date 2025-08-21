// Lista de delegacias e serviços
const delegacias = [
  { nome: "Delegacia da Mulher - Vitória", endereco: "Av. Mascarenhas, 1234", telefone: "(27) 3333-4444", lat: -20.3155, lng: -40.3128 },
  { nome: "Delegacia da Mulher - Vila Velha", endereco: "Rua 7 de Setembro, 567", telefone: "(27) 3421-5566", lat: -20.3277, lng: -40.2922 },
  { nome: "Delegacia da Mulher - Serra", endereco: "Av. Central, 890", telefone: "(27) 3300-1122", lat: -20.2050, lng: -40.2900 },
  { nome: "Abrigo Feminino - Cariacica", endereco: "Rua Segura, 45", telefone: "(27) 3355-7788", lat: -20.2850, lng: -40.3300 },
  { nome: "ONG Acolhe", endereco: "Av. Solidariedade, 112", telefone: "(27) 3344-5566", lat: -20.3100, lng: -40.3100 }
];

// ELEMENTOS
const chat = document.getElementById("chat");
const input = document.getElementById("input");
const delegaciasList = document.getElementById("delegacias-list");
const mapSection = document.getElementById("map-section");
const infoSection = document.getElementById("info-section");

// MAPA
const map = L.map('map').setView([-20.3155, -40.3128], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map data © OpenStreetMap contributors' }).addTo(map);

// MARCADORES
delegacias.forEach(d => {
  L.marker([d.lat, d.lng]).addTo(map)
   .bindPopup(`<b>${d.nome}</b><br>${d.endereco}<br>Tel: ${d.telefone}`);
  
  const card = document.createElement("div");
  card.classList.add("delegacia-card");
  card.innerHTML = `<strong>${d.nome}</strong><br>${d.endereco}<br>Tel: ${d.telefone}`;
  delegaciasList.appendChild(card);
});

// FUNÇÕES DE TOGGLE
function toggleMap() { mapSection.style.display = mapSection.style.display === "flex" ? "none" : "flex"; }
function toggleInfo() { infoSection.style.display = infoSection.style.display === "flex" ? "none" : "flex"; }

// CHAT
function sendMessage(){
  const text = input.value.trim();
  if(!text) return;
  appendMessage(text, "user");
  input.value = "";
  generateResponse(text);
}

function appendMessage(text, type){
  const div = document.createElement("div");
  div.classList.add("message", type);
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// RESPOSTAS DA IA
function generateResponse(text){
  const lower = text.toLowerCase();
  let response = "";

  // DETECÇÃO DE URGÊNCIA
  if(lower.includes("socorro") || lower.includes("agressão") || lower.includes("violência")){
    response = "Sinto muito que esteja passando por isso 😢. Veja as delegacias próximas ou ligue 180/190 imediatamente.";
    toggleMap();
  } 
  else if(lower.includes("delegacia") || lower.includes("ajuda")){
    response = "Você pode procurar qualquer delegacia da mulher próxima. Veja no mapa ou na lista acima.";
  } 
  else if(lower.includes("perigo") || lower.includes("emergência")){
    response = "Se estiver em perigo, ligue imediatamente 190 ou 180.";
  } 
  else if(lower.includes("psicológica")){
    response = "A violência psicológica é séria. Procure ajuda especializada e registre provas.";
  }
  else if(lower.includes("sexual")){
    response = "Abuso ou assédio sexual são crimes. Contate imediatamente 180 ou a delegacia mais próxima.";
  }
  else {
    response = "Entendi. Pode me contar mais detalhes para que eu possa te orientar melhor?";
  }

  appendMessage(response, "ai");
}
