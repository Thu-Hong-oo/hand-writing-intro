"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  {
    title: "Bao Lì Xì Đỏ Trơn",
    description: "Chữ vàng thư pháp trên nền đỏ tươi",
    image: "/images/dotron.jpg",
    alt: "Bao lì xì đỏ trơn",
  },
  {
    title: "Bao Lì Xì Hoa Ép Kim",
    description: "Thiết kế cao cấp với hoa ép kim 24K",
    image: "/images/epkim.jpg",
    alt: "Bao lì xì hoa ép kim",
  },
  {
    title: "Thiệp Cưới Handwriting",
    description: "Thiệp cưới được viết tay theo yêu cầu",
    image: "/images/epkim.jpg",
    alt: "Thiệp cưới thư pháp",
  },
]

export default function Products() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f5f0ea]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#c4a159] text-sm tracking-widest uppercase font-light">Sản phẩm</span>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-[#1a1410] mt-4 mb-6">
            Những sáng tạo tuyệt vời
          </h2>
          <div className="w-20 h-1 gradient-burgundy-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 h-96 bg-[#f0ebe4]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif text-[#1a1410]">{product.title}</h3>
                <p className="text-[#5a6b60] leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
