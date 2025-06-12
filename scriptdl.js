// for hamburger
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Font size controls
let currentFontSize = 16;

function increaseFontSize() {
  currentFontSize += 2;
  document.documentElement.style.fontSize = currentFontSize + "px";
}

function decreaseFontSize() {
  currentFontSize -= 2;
  document.documentElement.style.fontSize = currentFontSize + "px";
}

// Language selection
function changeLanguage(select) {
  const lang = select.value;
  alert("Language switched to: " + lang + "\n(Translation logic can be added here.)");
}

// Voice command (basic placeholder)
function activateVoiceCommand() {
  alert("Voice command activated!\n(To make this real, use Web Speech API.)");
}
 // AI chat section 
 function handleClick(message) {
  addMessage("user", message);
  respondToMessage(message);
}

function handleUserInput() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message) {
    addMessage("user", message);
    respondToMessage(message);
    input.value = "";
  }
}

function addMessage(sender, text) {
  const box = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-message" : "bot-message";
  msg.textContent = text;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function respondToMessage(message) {
  let response = "I'm not sure about that. Try asking about WhatsApp or Maps!";
  if (message.toLowerCase().includes("photo")) response = "To send a photo in WhatsApp: Open chat > Tap 📎 > Choose photo > Send.";
  else if (message.toLowerCase().includes("video call")) response = "To make a video call: Open chat > Tap 📹 at the top.";
  else if (message.toLowerCase().includes("group")) response = "To create a group: Tap ⋮ > New group > Add people > Create.";
  else if (message.toLowerCase().includes("voice")) response = "To send voice: Tap 🎤 in chat, hold to record, release to send.";
  else if (message.toLowerCase().includes("location")) response = "To share location: Open Maps > Tap location dot > Share.";
  
  setTimeout(() => addMessage("bot", response), 500);
}

// for translations
const translations = {
  en: {
    "main-heading": "Empowering Digital Literacy! 💡",
    "nav-home": "Home",
    "nav-tutorials": "Tutorials",
    "nav-chat": "AI Chat",
    "nav-feedback": "Feedback",
    "lang-label": "Language:",
    "hero-heading": "Unlock Digital Skills with Confidence 🚀",
    "hero-text": "We believe technology should bring families closer, not create barriers. DigiBuddy helps parents and elderly users master essential digital skills through simple, step-by-step guidance.",
    "feat1": "📘 Easy to follow tutorials",
    "feat2": "🤖 24/7 AI assistance",
    "feat3": "👵 Senior-friendly design",
    "btn-learn": "Start Learning Now",
    "btn-chat": "Ask DigiBuddy",
    "tutorials-heading": "Tutorials",
    "tut1": "Using WhatsApp",
    "tut2": "Using Paytm",
    "tut3": "Google Maps",
    "tut4": "Google Calendar",
    "tut-btn1": "Watch Tutorial",
    "tut-btn2": "Watch Tutorial",
    "tut-btn3": "Watch Tutorial",
    "tut-btn4": "Watch Tutorial",
    "chatbot-heading": "DigiBuddy 🤖",
    "chat-title": "🤖 DLC CHATBOT",
    "chat-subtext": "Start chatting with DigiBuddy ✨",
    "chat-welcome": "I am Digital Literacy Assistant. I'm here to help you...",
    "chat-btn1": "📸 How to send a photo",
    "chat-btn2": "📞 Start a video call",
    "chat-btn3": "👥 Make a WhatsApp group",
    "chat-btn4": "🎤 Record & send voice",
    "chat-btn5": "📍 Share my location using Maps",
    "feedback-heading": "Feedback",
    "label-name": "Your Name:",
    "label-message": "Your Feedback:",
    "btn-submit": "Submit"
  },
  hi: {
    "main-heading": "डिजिटल साक्षरता को सशक्त बनाएं! 💡",
    "nav-home": "होम",
    "nav-tutorials": "ट्यूटोरियल",
    "nav-chat": "एआई चैट",
    "nav-feedback": "प्रतिक्रिया",
    "lang-label": "भाषा:",
    "hero-heading": "आत्मविश्वास से डिजिटल कौशल सीखें 🚀",
    "hero-text": "हम मानते हैं कि तकनीक परिवारों को करीब लानी चाहिए, बाधाएं नहीं। डिजीबडी माता-पिता और वरिष्ठ नागरिकों को सरल चरणों में डिजिटल कौशल सिखाता है।",
    "feat1": "📘 आसान ट्यूटोरियल",
    "feat2": "🤖 24/7 एआई सहायता",
    "feat3": "👵 वरिष्ठ अनुकूल डिज़ाइन",
    "btn-learn": "अब सीखना शुरू करें",
    "btn-chat": "डिजीबडी से पूछें",
    "tutorials-heading": "ट्यूटोरियल",
    "tut1": "व्हाट्सएप का उपयोग",
    "tut2": "पेटीएम का उपयोग",
    "tut3": "गूगल मैप्स",
    "tut4": "गूगल कैलेंडर",
    "tut-btn1": "वीडियो देखें",
    "tut-btn2": "वीडियो देखें",
    "tut-btn3": "वीडियो देखें",
    "tut-btn4": "वीडियो देखें",
    "chatbot-heading": "डिजीबडी 🤖",
    "chat-title": "🤖 DLC चैटबॉट",
    "chat-subtext": "डिजीबडी से बातचीत शुरू करें ✨",
    "chat-welcome": "मैं डिजिटल साक्षरता सहायक हूं। मैं आपकी मदद के लिए यहां हूं...",
    "chat-btn1": "📸 फोटो कैसे भेजें",
    "chat-btn2": "📞 वीडियो कॉल शुरू करें",
    "chat-btn3": "👥 व्हाट्सएप ग्रुप बनाएं",
    "chat-btn4": "🎤 आवाज रिकॉर्ड करें और भेजें",
    "chat-btn5": "📍 गूगल मैप्स से लोकेशन शेयर करें",
    "feedback-heading": "प्रतिक्रिया",
    "label-name": "आपका नाम:",
    "label-message": "आपकी प्रतिक्रिया:",
    "btn-submit": "सबमिट करें"
  },
  te: {
    "main-heading": "డిజిటల్ సాక్షరతకు శక్తి చేకూర్చండి! 💡",
    "nav-home": "హోం",
    "nav-tutorials": "ట్యుటోరియల్స్",
    "nav-chat": "ఏఐ చాట్",
    "nav-feedback": "ఫీడ్‌బ్యాక్",
    "lang-label": "భాష:",
    "hero-heading": "ఆత్మవిశ్వాసంతో డిజిటల్ నైపుణ్యాలను నేర్చుకోండి 🚀",
    "hero-text": "టెక్నాలజీ కుటుంబాలను కలిపే సాధనంగా ఉండాలి. DigiBuddy వృద్ధులు మరియు తల్లిదండ్రులు డిజిటల్ నైపుణ్యాలను సులభంగా నేర్చుకునేలా మార్గనిర్దేశం చేస్తుంది.",
    "feat1": "📘 సులభమైన ట్యుటోరియల్స్",
    "feat2": "🤖 24/7 ఏఐ సహాయం",
    "feat3": "👵 సీనియర్ ఫ్రెండ్లీ డిజైన్",
    "btn-learn": "ఇప్పుడే ప్రారంభించండి",
    "btn-chat": "DigiBuddy ను అడగండి",
    "tutorials-heading": "ట్యుటోరియల్స్",
    "tut1": "WhatsApp వాడటం",
    "tut2": "Paytm వాడటం",
    "tut3": "Google Maps వాడటం",
    "tut4": "Google Calendar వాడటం",
    "tut-btn1": "ట్యుటోరియల్ చూడండి",
    "tut-btn2": "ట్యుటోరియల్ చూడండి",
    "tut-btn3": "ట్యుటోరియల్ చూడండి",
    "tut-btn4": "ట్యుటోరియల్ చూడండి",
    "chatbot-heading": "DigiBuddy 🤖",
    "chat-title": "🤖 DLC చాట్‌బాట్",
    "chat-subtext": "DigiBuddy తో చాటింగ్ ప్రారంభించండి ✨",
    "chat-welcome": "నేను డిజిటల్ సాక్షరత సహాయకుడు. మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను...",
    "chat-btn1": "📸 ఫోటో పంపడం ఎలా",
    "chat-btn2": "📞 వీడియో కాల్ చేయడం",
    "chat-btn3": "👥 WhatsApp గ్రూప్ తయారు చేయండి",
    "chat-btn4": "🎤 వాయిస్ రికార్డ్ చేసి పంపండి",
    "chat-btn5": "📍 నా లొకేషన్ షేర్ చేయడం",
    "feedback-heading": "ఫీడ్‌బ్యాక్",
    "label-name": "మీ పేరు:",
    "label-message": "మీ అభిప్రాయం:",
    "btn-submit": "సబ్మిట్ చేయండి"
  }
};

function changeLanguage(lang) {
  const selected = translations[lang] || translations["en"];
  Object.keys(selected).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = selected[id];
  });
}
