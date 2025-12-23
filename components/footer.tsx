"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-emerald-950 to-black">
      {/* Subtle gold ornamental top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#c4a159]/30 to-transparent" />
      
      {/* Background pattern nhẹ (gold brush strokes) */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 Q 480 100, 960 150 T 1920 200" stroke="#c4a159" strokeWidth="4" opacity="0.3"/>
          <path d="M0 250 Q 480 150, 960 200 T 1920 250" stroke="#c4a159" strokeWidth="3" opacity="0.2"/>
          <path d="M0 300 Q 480 200, 960 250 T 1920 300" stroke="#c4a159" strokeWidth="2" opacity="0.15"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-serif text-[#c4a159] mb-6 tracking-wider">Thu Hậu</h3>
            <p className="text-[#d5c9b8] leading-relaxed text-sm font-light mb-6">
              Thủ công hóa từng nét bút, lưu giữ cảm xúc trong mỗi dòng chữ
            </p>
            <div className="flex gap-5">
              {["Facebook", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="https://www.facebook.com/thuhau.june10th"
                  className="w-12 h-12 rounded-full bg-white/5 border border-[#c4a159]/20 hover:bg-[#c4a159]/20 hover:border-[#c4a159] flex items-center justify-center text-[#c4a159] transition-all duration-300 group"
                >
                  <span className="text-lg font-serif group-hover:scale-110 transition-transform">
                    {social === "Facebook" ? "f" : "i"}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Các cột khác giữ nguyên nhưng tăng animation delay và hover vàng */}
          {/* Dịch vụ */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="text-xl font-serif text-white mb-8">Dịch vụ</h4>
            <ul className="space-y-4">
              {["Tranh thư pháp", "Bao lì xì", "Thiệp cưới", "Tùy chỉnh"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#d5c9b8] hover:text-[#c4a159] transition-colors duration-300 text-sm font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Liên hệ */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            <h4 className="text-xl font-serif text-white mb-8">Liên hệ</h4>
            <ul className="space-y-4 text-[#d5c9b8] text-sm font-light">
              <li><a href="tel:0397970553" className="hover:text-[#c4a159] transition-colors">0397 970 553</a></li>
              <li>47 Cityland Grand Hill</li>
              <li>Gò Vấp, TP. HCM</li>
            </ul>
          </motion.div>

          {/* Thông tin */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            <h4 className="text-xl font-serif text-white mb-8">Thông tin</h4>
            <ul className="space-y-4">
              {["Về chúng tôi", "Chính sách", "Điều khoản"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#d5c9b8] hover:text-[#c4a159] transition-colors duration-300 text-sm font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#c4a159]/20 pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-center"
          >
            <p className="text-[#d5c9b8]/80 text-sm font-light italic">
              © {currentYear} Thu Hậu Handwriting • Tất cả quyền được bảo lưu
            </p>
            <p className="text-[#c4a159]/80 text-xs font-light tracking-widest">
              Designed with passion for Vietnamese calligraphy art
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}