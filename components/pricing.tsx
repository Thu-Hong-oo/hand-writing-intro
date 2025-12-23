"use client"

import { motion } from "framer-motion"

const pricingData = [
  {
    name: "Đỏ Trơn",
    basePrice: "600k",
    description: "Set 10 bao lì xì đỏ trơn",
    items: [
      { label: "2 chữ mẫu sẵn có", price: "" },
      { label: "2 chữ mẫu yêu cầu", price: "70k" },
      { label: "4 chữ mẫu yêu cầu", price: "80k" },
    ],
    shipping: "25k (tỉnh) / 20k (TPHCM) / Miễn phí 5km",
  },
  {
    name: "Hoa Ép Kim",
    basePrice: "800k",
    description: "Set 10 bao lì xì hoa ép kim 24K",
    items: [
      { label: "2 chữ mẫu sẵn có", price: "" },
      { label: "2 chữ mẫu yêu cầu", price: "90k" },
      { label: "4 chữ mẫu yêu cầu", price: "100k" },
    ],
    shipping: "25k (tỉnh) / 20k (TPHCM) / Miễn phí 5km",
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark-emerald opacity-2 -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#c4a159] text-sm tracking-widest uppercase font-light">Bảng giá</span>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-[#1a1410] mt-4 mb-6">Các gói dịch vụ</h2>
          <div className="w-20 h-1 gradient-burgundy-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative group ${plan.featured ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}
            >
              {plan.featured && (
                <div className="absolute -inset-1 gradient-burgundy-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              )}

              <div
                className={`relative rounded-2xl p-10 backdrop-blur-sm ${
                  plan.featured
                    ? "bg-[#2d5a47] text-white border border-[#4a8968]"
                    : "bg-white/80 border border-[#e8e3dc] hover:border-[#c4a159]"
                } transition-all duration-300`}
              >
                <div className="mb-6">
                  <h3 className={`text-3xl font-serif mb-2 ${plan.featured ? "text-white" : "text-[#1a1410]"}`}>
                    {plan.name}
                  </h3>
                  <p className={plan.featured ? "text-[#e6d5b8]" : "text-[#5a6b60]"}>{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className={`text-4xl font-serif ${plan.featured ? "text-[#e6d5b8]" : "text-[#c4a159]"}`}>
                    {plan.basePrice}
                  </span>
                  <p className={`text-sm mt-2 ${plan.featured ? "text-[#d5c9b8]" : "text-[#7a8b80]"}`}>
                    {plan.shipping}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start">
                      <span className={plan.featured ? "text-[#e6d5b8]" : "text-[#5a6b60]"}>{item.label}</span>
                      {item.price && (
                        <span className={`text-sm font-light ${plan.featured ? "text-[#c4a159]" : "text-[#c4a159]"}`}>
                          +{item.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-light transition-all duration-300 ${
                    plan.featured
                      ? "bg-[#c4a159] text-[#2d5a47] hover:bg-[#e6d5b8]"
                      : "bg-[#2d5a47] text-white hover:bg-[#1a3a2f]"
                  }`}
                >
                  Đặt hàng
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
