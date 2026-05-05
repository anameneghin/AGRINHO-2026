function atualizarSimulador() {
    // 1. Captura os elementos de input (sliders)
    const tempInput = document.getElementById('temp');
    const arInput = document.getElementById('ar');
    const soloInput = document.getElementById('solo');

    // 2. Captura os elementos de exibição de texto
    const tempVal = document.getElementById('tempVal');
    const arVal = document.getElementById('arVal');
    const soloVal = document.getElementById('soloVal');
    const statusBox = document.getElementById('status');
    const feedbackText = document.getElementById('feedback-text');

    // 3. Converte os valores para números
    const t = parseInt(tempInput.value);
    const a = parseInt(arInput.value);
    const s = parseInt(soloInput.value);

    // 4. Atualiza os números que aparecem na tela
    tempVal.innerText = t;
    arVal.innerText = a;
    soloVal.innerText = s;

    // 5. Variáveis de controle de status
    let mensagem = "✅ Sistema em Equilíbrio";
    let corFundo = "#e8f5e9"; // Verde claro
    let corTexto = "#2e7d32"; // Verde escuro
    let dica = "A produção está otimizada. O uso de recursos naturais está em nível sustentável.";

    // 6. Lógica de decisão (Prioridade para alertas críticos)
    
    // Alerta de Geada ou Frio intenso
    if (t < 10) {
        mensagem = "❄️ Alerta: Temperatura Muito Baixa!";
        corFundo = "#e3f2fd"; corTexto = "#0d47a1";
        dica = "Risco de dormência excessiva. Considere fechar as cortinas da estufa.";
    } 
    // Alerta de Calor (Uva sofre acima de 32°C)
    else if (t > 32) {
        mensagem = "🔥 Alerta: Calor Excessivo!";
        corFundo = "#fff3e0"; corTexto = "#e65100";
        dica = "Risco de queima dos frutos. Ativando sistema de ventilação e nebulização.";
    }
    // Alerta de Fungos (Umidade do ar alta)
    else if (a > 80) {
        mensagem = "🍄 Perigo: Umidade do Ar Elevada!";
        corFundo = "#ffebee"; corTexto = "#b71c1c";
        dica = "Ambiente propício para o Míldio. Evite irrigação nas próximas horas e ventile a área.";
    }
    // Alerta de Solo Seco (Sustentabilidade Hídrica)
    else if (s < 40) {
        mensagem = "💧 Solo Seco: Necessidade de Irrigação";
        corFundo = "#f3e5f5"; corTexto = "#7b1fa2";
        dica = "Ativando gotejamento de precisão. Este método economiza até 60% de água em comparação à aspersão.";
    }
    // Alerta de Solo Encharcado
    else if (s > 85) {
        mensagem = "⚠️ Alerta: Solo Encharcado";
        corFundo = "#efebe9"; corTexto = "#4e342e";
        dica = "Risco de asfixia radicular e perda de nutrientes por lixiviação. Pare a irrigação.";
    }

    // 7. Aplica as mudanças no HTML
    statusBox.innerText = mensagem;
    statusBox.style.backgroundColor = corFundo;
    statusBox.style.color = corTexto;
    statusBox.style.borderColor = corTexto;
    feedbackText.innerHTML = `<strong>Dica Sustentável:</strong> ${dica}`;
}

// Inicializa o simulador assim que a página carregar
window.onload = atualizarSimulador;