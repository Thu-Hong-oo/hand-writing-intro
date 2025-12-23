"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Tranh Thư Pháp",
    description: "Tranh handwriting tùy chỉnh cho tốt nghiệp, đám cưới, kỷ niệm",
    highlight: "Mỗi bức tranh là một tác phẩm độc nhất",
  },
  {
    title: "Lá Bồ Đề & Móc Khóa",
    description: "Sản phẩm thư pháp trang trí và quà tặng handwriting",
    highlight: "Tinh tế trong từng chi tiết",
  },
  {
    title: "Thiệp Cưới & Thiệp Cảm Ơn",
    description: "Thiệp handwriting được viết theo yêu cầu riêng",
    highlight: "Chuyên tâm cho những lời yêu thương",
  },
  {
    title: "Bao Lì Xì Thư Pháp",
    description: "Bao lì xì được viết tay với chữ vàng sang trọng",
    highlight: "Mang may mắn, nghĩa tình",
  },
]

export default function Services() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 gradient-dark-emerald opacity-3 -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#c4a159] text-sm tracking-widest uppercase font-light">Dịch vụ</span>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-[#1a1410] mt-4 mb-6">
            Những gì chúng tôi cung cấp
          </h2>
          <div className="w-20 h-1 gradient-burgundy-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-4 gradient-burgundy-gold opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300" />
                <div className="relative bg-white/80 backdrop-blur-sm border border-[#e8e3dc] rounded-xl p-8 hover:border-[#c4a159] transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c4a159] to-[#4a8968] rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />

                  <h3 className="text-2xl font-serif text-[#1a1410] mb-3">{service.title}</h3>
                  <p className="text-[#5a6b60] mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-sm text-[#c4a159] font-light italic">{service.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
