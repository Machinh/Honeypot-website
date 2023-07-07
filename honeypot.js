<script>
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        const webhookUrl = 'https://discordapp.com/api/webhooks/1125849929890402437/xHIrtwxCP_aDWwuivyFGAH81iHdZGhMDPg3vrCXZrDobhOkjSEJ0bNztpejZR14rNs_b';

        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const referrer = document.referrer;
        const operatingSystem = navigator.platform;

        const message = `@everyone Nova visita ao site! \nIP: ${ipAddress} \nUser-Agent: ${userAgent} \nLinguagem: ${language} \nScreen Resolução: ${screenWidth}x${screenHeight} \nReferrer: ${referrer} \nSistema Operacional: ${operatingSystem}`;

        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: message,
          }),
        })
        .then(response => {
          console.log('Mensagem enviada com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao enviar a mensagem:', error);
        });
      })
      .catch(error => {
        console.error('Erro ao obter o endereço IP:', error);
      });
</
  script>
