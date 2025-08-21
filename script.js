const chat = document.getElementById("chat");
const input = document.getElementById("input");

function sendMessage() {
  const text = input.value;
  if(!text) return;
  appendMessage(text, "user");
  input.value = "";
  
  // Resposta simulada da IA
  if(text.toLowerCase().includes("socorro") || text.toLowerCase().includes("agressão")){
    appendMessage("Delegacias próximas: Delegacia da Mulher - Vitória, Tel: (27) 3333-4444", "ai");
  } else {
    appendMessage("Entendi. Pode me contar mais detalhes?", "ai");
  }
}

function appendMessage(text, type){
  const div = document.createElement("div");
  div.classList.add("message", type);
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
