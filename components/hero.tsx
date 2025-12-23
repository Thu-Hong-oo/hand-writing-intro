"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 gradient-light-cream -z-10" />

      {/* Subtle calligraphy brush strokes background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Nét bút lớn nhẹ ở góc */}
          <path d="M-200 300 Q 600 100, 1200 400 T 2120 600" stroke="#c4a159" strokeWidth="8" opacity="0.4"/>
          <path d="M-100 600 Q 800 400, 1400 700 T 2020 900" stroke="#c4a159" strokeWidth="6" opacity="0.3"/>
          <path d="M0 800 Q 960 600, 1920 800" stroke="#c4a159" strokeWidth="4" opacity="0.2"/>
        </svg>
      </div>

      {/* Ornamental gold curve top */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.2, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl"
      >
        <svg viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path d="M0 50 Q 300 0, 600 50 T 1200 50" stroke="#c4a159" strokeWidth="3" opacity="0.6"/>
        </svg>
      </motion.div>

      {/* Existing decorative circles - giữ nhưng làm mờ hơn */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-10 w-96 h-96 rounded-full"
        style={{ background: "linear-gradient(135deg, #c4a159, #4a8968)" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
        style={{ background: "#2d5a47" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Thu Hậu với underline brush style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block mb-8 relative"
          >
            <span className="text-5xl tracking-widest font-light text-[#c4a159] uppercase">Thu Hậu</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c4a159]/50 to-transparent" />
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-[#1a1410] mb-8 leading-tight">
            Handwriting
          </h1>

          <p className="text-xl sm:text-2xl text-[#4a6b5a] mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Thủ công hóa từng nét bút, lưu giữ cảm xúc trong mỗi dòng chữ
          </p>

          <p className="text-base sm:text-lg text-[#5a6b60] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Tranh thư pháp, bao lì xì, thiệp cưới, và những sản phẩm handwriting tùy chỉnh cho những khoảnh khắc quan trọng nhất
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-[#2d5a47] hover:bg-[#1a3a2f] text-white px-10 h-14 text-base rounded-lg shadow-lg hover:shadow-xl transition-all">
              Khám phá dịch vụ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#c4a159] text-[#c4a159] hover:bg-[#c4a159]/10 px-10 h-14 text-base rounded-lg bg-transparent backdrop-blur-sm"
            >
              Liên hệ ngay
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator - giữ lệch trái nhẹ như bạn muốn */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-[48%] -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <svg className="w-7 h-7 text-[#c4a159]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}