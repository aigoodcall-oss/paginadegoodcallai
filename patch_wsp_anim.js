const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

const wspMockupHtml = `<div class="wsp-live mockup-glass" id="wspMockupIndex" style="margin: 0; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; box-shadow: 0 30px 60px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.08);">
  <div class="wsp-live-header">
    <div class="wsp-live-avatar"><img src="logos/logo-new.png" alt="Bot"></div>
    <div class="wsp-live-info">
      <div class="wsp-live-name">Good Call AI</div>
      <div class="wsp-live-status"><div class="dot"></div>En l&iacute;nea</div>
    </div>
  </div>
  <div class="wsp-live-body" id="wspLiveBodyIndex">
    <!-- Messages will be injected here by JS -->
  </div>
  <div class="wsp-live-input">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#8696a0"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    <div class="wsp-live-input-field">Escribe un mensaje...</div>
    <div class="wsp-live-send"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
  </div>
</div>
<script>
  (function(){
    const msgs = [
      {type:'u', text:'Hola, quiero info sobre la IA de WhatsApp.'},
      {type:'b', text:'&iexcl;Hola! Soy el asistente de Good Call. &iquest;En qu&eacute; te puedo ayudar?'},
      {type:'u', text:'&iquest;Qu&eacute; incluye el plan de $99?'},
      {type:'b', text:'Incluye mensajes ilimitados, instalaci&oacute;n en 2 d&iacute;as y atenci&oacute;n simult&aacute;nea a 1000 clientes 24/7.'}
    ];
    let msgIdx = 0;
    const body = document.getElementById('wspLiveBodyIndex');
    
    function addMsg(m) {
      if(!body) return;
      const row = document.createElement('div');
      row.className = 'fm ' + m.type + ' show';
      row.innerHTML = '<div class="fm-bubble">' + m.text + '</div>';
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
    }
    
    function showTyping() {
      if(!body) return;
      const row = document.createElement('div');
      row.className = 'fm b show';
      row.id = 'typingIndicatorIdx';
      row.innerHTML = '<div class="fm-bubble"><div class="dots" style="display:flex;gap:4px;padding:5px;"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div></div>';
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
    }
    
    function removeTyping() {
      const el = document.getElementById('typingIndicatorIdx');
      if(el) el.remove();
    }
    
    function nextMsg() {
      if(!body) return;
      if(msgIdx >= msgs.length) {
        setTimeout(() => {
          body.innerHTML = '';
          msgIdx = 0;
          nextMsg();
        }, 3000);
        return;
      }
      
      const m = msgs[msgIdx];
      if(m.type === 'b') {
        showTyping();
        setTimeout(() => {
          removeTyping();
          addMsg(m);
          msgIdx++;
          setTimeout(nextMsg, 1500);
        }, 1200);
      } else {
        addMsg(m);
        msgIdx++;
        setTimeout(nextMsg, 800);
      }
    }
    
    // Start animation immediately since it's on index
    setTimeout(nextMsg, 1000);
  })();
</script>`;

const listRegex = /<ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 20px;">[\s\S]*?<\/ul>/;

if(listRegex.test(content)) {
    content = content.replace(listRegex, wspMockupHtml);
    fs.writeFileSync(file, content, 'utf8');
    console.log("WSP Animation injected successfully!");
} else {
    console.log("Could not find the target list <ul> to replace.");
}
