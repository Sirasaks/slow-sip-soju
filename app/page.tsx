"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Transition } from "framer-motion";
import LogoImg from "./assets/logo.jpg";
import Product1Img from "./assets/product1.jpg";
import Product2Img from "./assets/product2.jpg";
import StoryCraftImg from "./assets/story-craft.png";
import InstagramIcon from "./assets/instagram-icon.svg";
import TikTokIcon from "./assets/tiktok-icon-dark.svg";

export default function Home() {
  const premiumTransition: Transition = { duration: 0.8, ease: "easeOut" };

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white relative">
      <div className="noise-overlay" />

      {/* 1. Header (แถบเมนู) */}
      <nav className="glass-nav px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 relative overflow-hidden rounded-xl bg-primary-light/20 p-0.5">
              <Image src={LogoImg} alt="Slow Sip Logo" fill className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] text-primary uppercase">SLOW SIP</span>
          </div>

          <div className="hidden lg:flex items-center gap-12  font-bold uppercase tracking-[0.2em] text-neutral-500">
            <Link href="#home" className="hover:text-primary transition-colors">หน้าแรก</Link>
            <Link href="#products" className="hover:text-primary transition-colors">สินค้าของเรา</Link>
            <Link href="#story" className="hover:text-primary transition-colors">เรื่องราวของเรา</Link>
            <Link href="#metaverse" className="hover:text-primary transition-colors">Metaverse</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">ติดต่อเรา</Link>
          </div>

          <Link href="#products" className="premium-button btn-primary text-xs hidden sm:block">
            ENTRANCE
          </Link>
        </div>
      </nav>

      <main>
        {/* 2. Hero Section - Cinematic Editorial Layout */}
        <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden mesh-gradient">
          <div className="absolute inset-0 z-0 opacity-60">
            <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-background" />
          </div>

          <div className="section-padding relative z-20 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="inline-block text-[10px] font-bold uppercase text-primary mb-10 text-glow"
              >
                The Art of Conscious Sipping
              </motion.span>

              <h1 className="text-6xl md:text-9xl font-bold font-serif leading-[0.9] text-primary mb-12">
                Slow Sip <span className="block italic font-normal text-earth mt-4">Soju</span>
              </h1>

              <div className="flex flex-col items-center gap-10">
                <p className="text-xl md:text-2xl font-light text-muted max-w-2xl leading-relaxed">
                  สัมผัสสุนทรียภาพแห่งการดื่มที่นุ่มนวลกว่าเดิม <br className="hidden md:block" />
                  นิยามใหม่ของความพรีเมียมที่ผสานรสชาติธรรมชาติอย่างลงตัว
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="#products" className="premium-button btn-primary">
                    EXPLORE COLLECTION
                  </Link>
                  <Link href="#story" className="premium-button btn-outline">
                    OUR HERITAGE
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative floating elements for depth */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-64 h-64 bg-accent-peach/5 blur-[80px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-light/5 blur-[100px] rounded-full pointer-events-none"
          />
        </section>

        {/* 3. The Problem & Solution */}
        <motion.section
          id="story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-padding grid md:grid-cols-2 gap-24 items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-cream/20 to-transparent -z-10" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-1000 hover:scale-[1.02] group">
              <Image src={StoryCraftImg} alt="Slow Sip Craft" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <p className="text-xl font-serif italic">Every drop is a masterpiece.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">The Essence</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 text-primary tracking-tighter">ทำไมต้อง <span className="font-sans font-bold tracking-widest uppercase text-earth ml-4">Slow Sip?</span></h2>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div>
                  <h4 className="text-xl font-bold mb-3 font-serif">The Modern Dilemma</h4>
                  <p className="text-muted leading-relaxed font-light">เบื่อไหม? กับการสังสรรค์ที่จบลงด้วยความเมื่อยล้า เราเปลี่ยนการดื่มให้เป็น "ช่วงเวลา" แทนการเป็นแค่ "กิจกรรม"</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div>
                  <h4 className="text-xl font-bold mb-3 font-serif text-primary">Conscious Luxury</h4>
                  <p className="text-muted leading-relaxed font-light">เราสร้างสรรค์ขึ้นเพื่อเปลี่ยนวัฒนธรรมการดื่ม ให้เป็นการ "ดื่มด่ำ" กับทุกหยดและทุกบทสนทนา ด้วยรสชาติจากธรรมชาติที่แท้จริง</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 4. Product Showcase */}
        <section id="products" className="relative py-40 overflow-hidden mesh-gradient">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary">Cellar Selection</h2>
              <p className="text-muted max-w-2xl mx-auto text-lg font-light">ค้นพบความสมบูรณ์แบบในทุกรสชาติที่เราบรรจงรังสรรค์</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Product 1: Yuzu */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={premiumTransition}
                whileHover={{ y: -10 }}
                className="card-premium group"
              >
                <div className="relative aspect-4/5 mb-12 overflow-hidden rounded-[2.5rem] bg-accent-yuzu/5">
                  <Image src={Product1Img} alt="Yuzu Soju" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest shadow-sm">Sparkling Citrus</div>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-4xl font-serif font-bold mb-2">Yuzu Soju</h3>
                    <p className="text-primary font-bold tracking-widest text-xs uppercase">Premium Craft Blend</p>
                  </div>
                  <p className="text-3xl font-serif font-bold text-primary">85 <span className="text-sm font-sans font-normal text-muted">THB</span></p>
                </div>
                <p className="text-muted mb-8 leading-relaxed font-light text-lg">
                  สัมผัสความสดชื่นจากส้มยูซุแท้ส่งตรงจากญี่ปุ่น ผสานความซ่าเล็กน้อยและความหวานละมุนจากธรรมชาติ ให้ความรู้สึกรีเฟรชในทุกการจิบ
                </p>

                <div className="grid grid-cols-2 gap-y-6 mb-10 pt-8 border-t border-primary/5">
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">ABV Content</p>
                    <p className="text-sm font-bold text-primary">4.5% Vol.</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">Volume</p>
                    <p className="text-sm font-bold text-primary">330 ml</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">Calorie</p>
                    <p className="text-sm font-bold text-primary">~95 kcal</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">Sweetener</p>
                    <p className="text-sm font-bold text-primary">Stevia Extract</p>
                  </div>
                </div>

                <Link
                  href="https://www.tiktok.com/@slowsip.soju?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  className="premium-button btn-primary w-full tracking-[0.2em] group-hover:shadow-2xl transition-all text-center block"
                >
                  สั่งซื้อเลย
                </Link>
              </motion.div>

              {/* Product 2: Peach Tea */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...premiumTransition, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="card-premium group"
              >
                <div className="relative aspect-4/5 mb-12 overflow-hidden rounded-[2.5rem] bg-accent-peach/5">
                  <Image src={Product2Img} alt="Peach Tea Soju" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest shadow-sm">Velvet Smooth</div>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-4xl font-serif font-bold mb-2">Peach Tea Soju</h3>
                    <p className="text-accent-peach font-bold tracking-widest text-xs uppercase">Limited Reserve</p>
                  </div>
                  <p className="text-3xl font-serif font-bold text-primary">85 <span className="text-sm font-sans font-normal text-muted">THB</span></p>
                </div>
                <p className="text-muted mb-8 leading-relaxed font-light text-lg">
                  ความลงตัวของใบชาคัดพิเศษและลูกพีชสีชมพูสุกงอม มอบรสสัมผัสที่นุ่มนวล หอมหวาน และผ่อนคลาย เหมาะสำหรับช่วงเวลาสุดพิเศษ
                </p>

                <div className="grid grid-cols-2 gap-y-6 mb-10 pt-8 border-t border-primary/5">
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">ABV Content</p>
                    <p className="text-sm font-bold text-primary">4.5% Vol.</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">Volume</p>
                    <p className="text-sm font-bold text-primary">330 ml</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">Calorie</p>
                    <p className="text-sm font-bold text-primary">~88 kcal</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-earth font-bold uppercase tracking-widest mb-1.5 opacity-60">Sweetener</p>
                    <p className="text-sm font-bold text-primary">Stevia Extract</p>
                  </div>
                </div>

                <Link
                  href="https://www.tiktok.com/@slowsip.soju?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  className="premium-button btn-primary w-full tracking-[0.2em] group-hover:shadow-2xl transition-all text-center block"
                >
                  สั่งซื้อเลย
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4.5 Pricing Strategy - New Section and Grid Layout */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              className="text-center mb-24"
            >
              <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-primary tracking-tight">Pricing Strategy</h2>
              <p className="text-xl text-muted font-light mb-4 text-center w-full">ราคาที่เข้าถึงง่าย ทั้งการสังสรรค์ส่วนตัวและเชิงพาณิชย์</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  label: "RETAIL/ SINGLE",
                  price: "85.-",
                  detail: "ราคา/ขวด",
                  accent: "bg-primary-light/10"
                },
                {
                  label: "PACK 6",
                  price: "480.-",
                  detail: "ประหยัดกว่า 30 บาท",
                  accent: "bg-accent-yuzu/20"
                },
                {
                  label: "PACK 12",
                  price: "900.-",
                  detail: "ประหยัดกว่า 120 บาท",
                  accent: "bg-accent-peach/20"
                },
                {
                  label: "WHOLE SALE",
                  price: "1,440.-",
                  detail: "60.- / ขวด",
                  accent: "bg-earth/10"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...premiumTransition, delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group overflow-hidden rounded-[3rem] bg-white border border-primary/5 p-12 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center justify-between gap-8 h-full">
                    <div className="flex-1">
                      <div className="text-5xl md:text-7xl font-serif font-bold text-primary mb-4">{item.price}</div>
                      <div className="text-sm font-bold text-muted uppercase tracking-[0.2em]">{item.detail}</div>
                    </div>

                    <div className="h-20 w-px bg-primary/10 mx-4" />

                    <div className={`p-8 rounded-4xl ${item.accent} flex-1 text-center`}>
                      <span className="text-xl md:text-2xl font-bold tracking-widest text-primary">{item.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16 text-[10px] font-bold text-muted uppercase tracking-[0.3em]"
            >
              *เงื่อนไขเป็นไปตามที่บริษัทกำหนด
            </motion.p>
          </div>
        </section>

        {/* 5. Product Details (ประโยชน์ / สถานที่) */}
        <section className="bg-white py-40">
          <div className="section-padding">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "คุณประโยชน์หลัก",
                  items: [
                    "แอลกอฮอล์ต่ำ (Low ABV) ดื่มง่าย ไม่เป็นภาระร่างกาย",
                    "รสชาติเข้มข้นจากผลไม้แท้ ไม่แต่งกลิ่นสังเคราะห์",
                    "ใช้สารให้ความหวานจากธรรมชาติ (Natural Sweetener)"
                  ],
                  bg: "bg-primary/5"
                },
                {
                  title: "การผลิตที่ใส่ใจ",
                  items: [
                    "คัดสรรวัตถุดิบคุณภาพจากแหล่งท้องถิ่น",
                    "ผลิตด้วยกระบวนการกลั่นที่ทันสมัย",
                    "โรงงานมาตรฐานสากลในจังหวัดเชียงใหม่"
                  ],
                  bg: "bg-earth/5"
                },
                {
                  title: "สถานที่จำหน่าย",
                  items: [
                    "Gourmet Market & Tops Supermarket",
                    "Central Food Hall & Lawson 108",
                    "7-Eleven (Selected Branches)"
                  ],
                  bg: "bg-accent-yuzu/5"
                }
              ].map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...premiumTransition, delay: idx * 0.1 }}
                  className={`p-12 rounded-[3.5rem] ${detail.bg} border border-white hover:shadow-2xl transition-all duration-700 group`}
                >
                  <h4 className="text-2xl font-serif font-bold mb-8 text-primary">{detail.title}</h4>
                  <ul className="space-y-5 text-muted">
                    {detail.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-sm font-light">
                        <span className="text-primary font-bold">/</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Metaverse Experience */}
        <section id="metaverse" className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="relative rounded-[5rem] overflow-hidden mesh-gradient-white p-20 md:p-40 text-center shadow-3xl border border-primary/5"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none grayscale invert" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-10 block"
              >
                The Digital Frontier
              </motion.span>
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-primary mb-10 leading-[0.9]">
                Step into the <span className="italic font-normal text-earth">Virtual Bar</span>
              </h2>
              <p className="text-neutral-600 text-xl mb-16 font-light leading-relaxed max-w-2xl mx-auto">
                ดื่มด่ำกับประสบการณ์ Slow Sip ในโลกเสมือนจริง พบปะเพื่อนใหม่และร่วมกิจกรรมสุด Exclusive ได้ทุกที่ทุกเวลา
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link href="https://www.roblox.com/games/125551922259261/slowsip-soju" target="_blank" className="premium-button btn-primary text-xs">
                  Roblox World
                </Link>
                <Link href="https://www.instagram.com/slowsip.soju?igsh=MWJsY3loMTE2eG14OA==" target="_blank" className="premium-button btn-outline text-xs">
                  Instagram
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 7. Social Media Connect */}
        <section id="contact" className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
          >
            <h2 className="text-4xl font-serif font-bold mb-16 text-primary">Connected Moments</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {[
                { name: 'TikTok', icon: TikTokIcon, label: '@SlowSipSoju', href: 'https://www.tiktok.com/@slowsip.soju?_r=1&_t=ZS-94Lgqy9btx6', dark: true },
                { name: 'Instagram', icon: InstagramIcon, label: '@SlowSip.Soju', href: 'https://www.instagram.com/slowsip.soju?igsh=MWJsY3loMTE2eG14OA==', dark: false },
              ].map((social, idx) => (
                <Link key={social.name} href={social.href} target="_blank" className="group flex flex-col items-center gap-6">
                  <motion.div
                    whileHover={{ y: -10, rotate: 5 }}
                    className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center transition-all duration-500 shadow-sm border border-primary/5 ${social.dark ? 'bg-black border-white/10' : 'bg-white'} group-hover:shadow-xl group-hover:border-primary/10 overflow-hidden p-5`}
                  >
                    <Image src={social.icon} alt={social.name} className="w-full h-full object-contain" />
                  </motion.div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-earth uppercase tracking-[0.3em] mb-2">{social.name}</p>
                    <p className="text-sm font-medium text-primary">{social.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 8. About Us (Group Members) - Refined Compact Layout */}
        <section className="bg-background py-20 relative overflow-hidden border-t border-primary/5">
          <div className="absolute inset-0 bg-linear-to-b from-cream/10 via-transparent to-background" />

          <div className="section-padding relative z-10 py-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 max-w-5xl mx-auto border-b border-primary/5 pb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={premiumTransition}
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block font-sans">The Creative Force</span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-tighter">ทีมผู้สร้างสรรค์</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={premiumTransition}
                className="text-right text-[8px] text-muted font-bold uppercase tracking-[0.3em] font-sans"
              >
                <p className="mb-2 text-primary opacity-80">Art & Design Direction</p>
                <p>Course [CS101] | Instructor [Name]</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {[
                { name: 'กัลยาวดี ปัญญา', id: '671310399', role: 'Group Member' },
                { name: 'เปรมสินี ทองปาน', id: '671310423', role: 'Group Member' },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...premiumTransition, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="w-full md:w-[calc(45%-1rem)] min-w-[280px] p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group hover:border-primary/10"
                >
                  <div className="relative mb-4 flex justify-center">
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-earth/10 blur-xl transition-all" />
                  </div>

                  <div className="space-y-3 text-center">
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-primary tracking-tight">{member.name}</h4>
                    <p className="text-[10px] text-earth font-bold tracking-[0.3em] uppercase opacity-70">STUDENT ID: {member.id}</p>
                  </div>

                  <div className="h-px w-full bg-linear-to-r from-primary/10 to-transparent my-6" />

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] text-muted font-bold uppercase tracking-[0.4em] group-hover:text-primary transition-colors">{member.role}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="py-20 px-8 border-t border-primary/5 text-center bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-all duration-700"
          >
            <Image src={LogoImg} alt="Slow Sip Logo" className="w-12 h-12 object-contain rounded-xl" />
            <span className="font-bold tracking-[0.6em] text-sm text-primary">SLOW SIP</span>
          </motion.div>

          <p className="text-xl font-serif italic text-muted max-w-2xl">
            "ดื่มด่ำกับรสชาติ ละเมียดละไมกับช่วงเวลา ทุกการจิบคือความทรงจำที่ยืนยาว"
          </p>

          <div className="w-24 h-px bg-primary/10" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 text-[9px] font-bold text-neutral-400 uppercase tracking-[0.4em]">
            <p>© 2026 Slow Sip Soju. Crafted for Excellence.</p>
            <p className="text-red-400/60">Drink Responsibly. 21+</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
