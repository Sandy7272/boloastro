/**
 * ChatPreviewSection - WhatsApp Chat Mockup
 * 
 * Shows a realistic WhatsApp-style conversation preview
 * to demonstrate how the service works
 */

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

const ChatPreviewSection = () => {
  const { t } = useTranslation();

  const chatMessages = [
    {
      type: "user" as const,
      text: t('chatPreview.q1'),
      textHi: "मेरी शादी कब होगी?",
      time: "10:32 AM",
    },
    {
      type: "bot" as const,
      text: t('chatPreview.a1'),
      textHi: "आपकी कुंडली के अनुसार, 2026 में शादी की संभावना मजबूत है। शुक्र दशा आपके लिए अनुकूल है।",
      time: "10:32 AM",
    },
    {
      type: "user" as const,
      text: t('chatPreview.q2'),
      textHi: "करियर के बारे में क्या?",
      time: "10:33 AM",
    },
    {
      type: "bot" as const,
      text: t('chatPreview.a2'),
      textHi: "2025 की दूसरी छमाही में करियर में प्रगति के संकेत हैं। नई opportunities आ सकती हैं।",
      time: "10:33 AM",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Phone Frame */}
          <motion.div
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* WhatsApp Header */}
            <div className="bg-green-600 text-white px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                🙏
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">BoloAstro AI</p>
                <p className="text-[10px] text-white/80">Online • AI Pandit</p>
              </div>
              <div className="flex gap-3 text-white/80">
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="bg-[url('/placeholder.svg')] bg-cover p-3 sm:p-4 space-y-3 min-h-[280px] sm:min-h-[320px]" style={{ backgroundColor: '#0b141a' }}>
              {chatMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div 
                    className={`max-w-[85%] rounded-lg px-3 py-2 ${
                      msg.type === 'user' 
                        ? 'bg-green-700 text-white rounded-br-sm' 
                        : 'bg-[#1f2c33] text-white rounded-bl-sm'
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                    <p className="text-[10px] text-white/60 mt-1 italic">{msg.textHi}</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[9px] text-white/50">{msg.time}</span>
                      {msg.type === 'user' && (
                        <CheckCheck className="w-3 h-3 text-blue-400" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="bg-[#1f2c33] px-2 py-2 flex items-center gap-2">
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
                <span className="text-white/40 text-sm">{t('chatPreview.inputPlaceholder')}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-lg">🎤</span>
              </div>
            </div>
          </motion.div>

          {/* Caption */}
          <motion.p 
            className="text-center text-xs sm:text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('chatPreview.caption')} • {t('chatPreview.captionHi')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ChatPreviewSection;
