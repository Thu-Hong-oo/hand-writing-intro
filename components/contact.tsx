"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-light-cream -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#c4a159] text-sm tracking-widest uppercase font-light">Liên hệ</span>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-[#1a1410] mt-4 mb-6">
            Hãy nói cho chúng tôi biết
          </h2>
          <div className="w-20 h-1 gradient-burgundy-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Phone */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c4a159] to-[#4a8968] rounded-lg flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#c4a159] uppercase tracking-widest font-light">Điện thoại</p>
                  <a
                    href="tel:0397970553"
                    className="text-lg font-serif text-[#1a1410] mt-2 hover:text-[#c4a159] transition-colors"
                  >
                    0397 970 553
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c4a159] to-[#4a8968] rounded-lg flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#c4a159] uppercase tracking-widest font-light">Địa chỉ</p>
                  <p className="text-[#1a1410] mt-2 leading-relaxed">
                    47 đường số 8, Cityland Grand Hill
                    <br />
                    Phường 10, Gò Vấp, TP. HCM
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c4a159] to-[#4a8968] rounded-lg flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#c4a159] uppercase tracking-widest font-light">Giờ làm việc</p>
                  <p className="text-[#1a1410] mt-2 leading-relaxed">
                    Thứ 2 - Chủ nhật
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6 bg-white/60 backdrop-blur-sm border border-[#e8e3dc] rounded-2xl p-10">
              <div>
                <label className="block text-sm text-[#c4a159] uppercase tracking-widest font-light mb-3">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên"
                  className="w-full px-5 py-3 bg-white border border-[#e8e3dc] rounded-lg text-[#1a1410] placeholder-[#9a9090] focus:outline-none focus:border-[#c4a159] focus:ring-2 focus:ring-[#c4a159]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-[#c4a159] uppercase tracking-widest font-light mb-3">Email</label>
                <input
                  type="email"
                  placeholder="Nhập email"
                  className="w-full px-5 py-3 bg-white border border-[#e8e3dc] rounded-lg text-[#1a1410] placeholder-[#9a9090] focus:outline-none focus:border-[#c4a159] focus:ring-2 focus:ring-[#c4a159]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-[#c4a159] uppercase tracking-widest font-light mb-3">
                  Lời nhắn
                </label>
                <textarea
                  placeholder="Hãy cho chúng tôi biết dự định của bạn..."
                  rows={5}
                  className="w-full px-5 py-3 bg-white border border-[#e8e3dc] rounded-lg text-[#1a1410] placeholder-[#9a9090] focus:outline-none focus:border-[#c4a159] focus:ring-2 focus:ring-[#c4a159]/20 transition-all duration-300 resize-none"
                />
              </div>

              <Button className="w-full bg-[#2d5a47] hover:bg-[#1a3a2f] text-white py-3 rounded-lg font-light tracking-wide transition-all duration-300">
                Gửi thông điệp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
