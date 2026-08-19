(function () {
  'use strict'

  // Language toggle FIRST so it always works even if later UI code fails
  var I18N = {
    en: {
      brand: 'Biophilic Studio',
      menu: 'Menu',
      nav_about: 'About',
      nav_services: 'Services',
      nav_rates: 'Rates',
      nav_gallery: 'Gallery',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      nav_book: 'Book Free Consultation',
      hero_title: 'Biophilic Studio',
      hero_support:
        'A nature-soaked room for podcasts, meetings & creation — Downtown Mall, New Town.',
      cta_start: 'Get Started',
      cta_contact: 'Contact Us',
      cta_call: 'Call now',
      cta_email: 'Email us',
      about_eyebrow: 'About us',
      about_title: 'A calm, camera-ready room inside Vātika',
      about_lede:
        "Biophilic Studio is karmyog Vātika's rentable creative space at Shop No. 127, Downtown Mall. Warm light, living greens, and production gear come together so hosts, teams, and creators can work without scrambling for a set.",
      about_more:
        'Built under the same biophilic craft that shaped Rosedale Plaza, Downtown Mall’s planter studio, and C2 Uniworld — fifteen years of putting nature back into spaces people actually use.',
      about_cta_book: 'Book Free Consultation',
      about_cta_services: 'Our Services',
      services_eyebrow: 'Our services',
      services_title: 'Podcasts · meetings · content',
      services_lede:
        'Creators, teams, interviewers & workshop hosts — one calm space with gear included.',
      svc_pod_title: 'For podcasts',
      svc_pod_1: 'Professional condenser mics',
      svc_pod_2: 'Multi-channel audio mixer',
      svc_pod_3: 'Acoustic treatments',
      svc_meet_title: 'For official meetings',
      svc_meet_1: 'High-speed Wi-Fi',
      svc_meet_2: 'Wireless presentation screen',
      svc_meet_3: 'Comfortable breakout seating',
      svc_content_title: 'For content creation',
      svc_content_1: 'Pro video camera & lights',
      svc_content_2: 'Interchangeable backdrops',
      svc_content_3: 'Vibrant biophilic sets',
      svc_also: 'Also suited for interviews, workshops & creator collaborations.',
      rates_eyebrow: 'On rent',
      rates_title: 'Simple hourly packages',
      rates_lede: 'Open 8:30 AM – 7:00 PM. Gear & biophilic sets included.',
      rate_hour: '/ hour',
      rate_4h: '/ 4 hours',
      rate_6h: '/ 6 hours',
      rate_85h: '/ 8.5 hours',
      rates_cta: 'Fill Enquiry Form',
      why_eyebrow: 'Why choose us',
      why_title: 'Ready to shoot. Easy to book.',
      why_lede:
        'No kit haul, no sterile conference room — a living set with production basics already in place.',
      why_1_t: 'Gear included',
      why_1_d:
        'Mics, mixer, cameras, lights, and presentation screen — so you focus on the conversation.',
      why_2_t: 'Biophilic sets',
      why_2_d:
        'Plant walls, warm timber, and lattice light that look premium on camera without a stylist day.',
      why_3_t: 'Prime New Town location',
      why_3_d: 'Shop 127 inside Downtown Mall — simple to find, park, and host guests.',
      why_4_t: 'Transparent packages',
      why_4_d:
        'Clear hourly and block rates from ₹1,000 — book by WhatsApp or enquiry form.',
      process_eyebrow: 'How we work',
      process_title: 'From enquiry to wrap',
      process_lede:
        'Four clear steps. No long onboarding — just a confirmed slot and a ready room.',
      proc_1_t: 'Send an enquiry',
      proc_1_d: 'Share date, duration, and what you’re recording or hosting.',
      proc_2_t: 'Confirm your slot',
      proc_2_d: 'We lock availability and package — usually the same day.',
      proc_3_t: 'Arrive & create',
      proc_3_d: 'Walk into a lit, miked, biophilic set. Start when you’re ready.',
      proc_4_t: 'Optional greenery',
      proc_4_d: 'Ask about Office Greenery Project installs starting at ₹10,000.',
      benefits_eyebrow: 'Benefits',
      benefits_title: 'Why teams keep coming back',
      benefits_cta: 'Get Started',
      gallery_eyebrow: 'Inside the studio',
      gallery_title: 'Warm light, living greens',
      green_eyebrow: 'Also from Vātika',
      green_title: 'Office Greenery Project',
      green_lede: 'Bring living plants into your workplace. Starting at ₹10,000.',
      green_cta: 'Enquire today',
      trust_eyebrow: 'Trust',
      trust_title: 'Credentials, proven on the ground',
      trust_lede:
        'Biophilic Studio sits inside karmyog Vātika’s New Town practice — the same craft behind landmark biophilic builds.',
      faq_eyebrow: 'FAQ',
      faq_title: 'Before you book',
      faq_q1: 'What is included in the rental?',
      faq_a1:
        'Studio room access plus biophilic sets and core gear — condenser mics, mixer, acoustic treatments, Wi-Fi, presentation screen, cameras and lights depending on your package needs. Confirm specifics when you enquire.',
      faq_q2: 'What are your hours?',
      faq_a2:
        'Open 8:30 AM – 7:00 PM. Share preferred dates early for weekends and long shoots.',
      faq_q3: 'How do I book?',
      faq_a3:
        'WhatsApp +91 91472 46587, call the same number, email connect@ky21c.org, or fill the enquiry form below.',
      faq_q4: 'Where are you located?',
      faq_a4:
        'Shop No. 127, Downtown Mall, Uniworld City Commercial Complex, New Town, Kolkata, West Bengal 700156.',
      faq_q5: 'Do you also do office plants?',
      faq_a5:
        'Yes. Vātika’s Office Greenery Project starts at ₹10,000 — ask when you enquire about the studio.',
      contact_eyebrow: 'Contact',
      contact_title: 'Reserve your slot',
      contact_lede:
        'Book Free Consultation — tell us your date, duration, and what you are creating.',
      form_title: 'Fill Enquiry Form',
      form_lede:
        'Share your details below. After submit, check your email for a copy — you can download or print it. Studio copy goes to connect@ky21c.org.',
    },
    bn: {
      brand: 'বায়োফিলিক স্টুডিও',
      menu: 'মেনু',
      nav_about: 'আমাদের সম্পর্কে',
      nav_services: 'সেবা',
      nav_rates: 'রেট',
      nav_gallery: 'গ্যালারি',
      nav_faq: 'প্রশ্নোত্তর',
      nav_contact: 'যোগাযোগ',
      nav_book: 'ফ্রি কনসালটেশন বুক করুন',
      hero_title: 'বায়োফিলিক স্টুডিও',
      hero_support:
        'পডকাস্ট, মিটিং ও কনটেন্ট তৈরির জন্য প্রকৃতিময় স্টুডিও — ডাউনটাউন মল, নিউ টাউন।',
      cta_start: 'শুরু করুন',
      cta_contact: 'যোগাযোগ করুন',
      cta_call: 'এখনই কল করুন',
      cta_email: 'ইমেইল করুন',
      about_eyebrow: 'আমাদের কথা',
      about_title: 'ভাতিকার ভেতরে শান্ত, ক্যামেরা-রেডি একটি ঘর',
      about_lede:
        'বায়োফিলিক স্টুডিও হলো কর্মযোগ ভাতিকার ভাড়ায় নেওয়া যায় এমন সৃজনশীল স্পেস — শপ নং ১২৭, ডাউনটাউন মল। উষ্ণ আলো, সবুজ গাছপালা ও প্রোডাকশন গিয়ার একসাথে, যাতে হোস্ট, টিম ও ক্রিয়েটররা সেট নিয়ে দৌড়াতে না হয়।',
      about_more:
        'রোজডেল প্লাজা, ডাউনটাউন মলের প্ল্যান্টার স্টুডিও ও সি২ ইউনিওয়ার্ল্ড — যেই বায়োফিলিক ক্রাফট দিয়ে গড়া, সেই অভিজ্ঞতায় পনেরো বছর। মানুষ যেখানে থাকে ও কাজ করে, সেখানেই প্রকৃতিকে ফিরিয়ে আনা।',
      about_cta_book: 'ফ্রি কনসালটেশন বুক করুন',
      about_cta_services: 'আমাদের সেবা',
      services_eyebrow: 'আমাদের সেবা',
      services_title: 'পডকাস্ট · মিটিং · কনটেন্ট',
      services_lede:
        'ক্রিয়েটর, টিম, সাক্ষাৎকার ও ওয়ার্কশপ আয়োজকদের জন্য — গিয়ারসহ এক শান্ত জায়গা।',
      svc_pod_title: 'পডকাস্টের জন্য',
      svc_pod_1: 'প্রফেশনাল কনডেন্সার মাইক',
      svc_pod_2: 'মাল্টি-চ্যানেল অডিও মিক্সার',
      svc_pod_3: 'অ্যাকোস্টিক ট্রিটমেন্ট',
      svc_meet_title: 'অফিসিয়াল মিটিংয়ের জন্য',
      svc_meet_1: 'হাই-স্পিড ওয়াই-ফাই',
      svc_meet_2: 'ওয়্যারলেস প্রেজেন্টেশন স্ক্রিন',
      svc_meet_3: 'আরামদায়ক ব্রেকআউট সিটিং',
      svc_content_title: 'কনটেন্ট তৈরির জন্য',
      svc_content_1: 'প্রো ভিডিও ক্যামেরা ও লাইট',
      svc_content_2: 'বদলানো যায় এমন ব্যাকড্রপ',
      svc_content_3: 'প্রাণবন্ত বায়োফিলিক সেট',
      svc_also: 'সাক্ষাৎকার, ওয়ার্কশপ ও ক্রিয়েটর সহযোগিতার জন্যও উপযোগী।',
      rates_eyebrow: 'ভাড়ায়',
      rates_title: 'সহজ ঘণ্টাভিত্তিক প্যাকেজ',
      rates_lede: 'খোলা ৮:৩০ AM – ৭:০০ PM। গিয়ার ও বায়োফিলিক সেট অন্তর্ভুক্ত।',
      rate_hour: '/ ঘণ্টা',
      rate_4h: '/ ৪ ঘণ্টা',
      rate_6h: '/ ৬ ঘণ্টা',
      rate_85h: '/ ৮.৫ ঘণ্টা',
      rates_cta: 'এনকোয়ারি ফর্ম পূরণ করুন',
      why_eyebrow: 'কেন আমাদের বেছে নেবেন',
      why_title: 'শুটের জন্য প্রস্তুত। বুক করা সহজ।',
      why_lede:
        'কিট নিয়ে দৌড় নয়, নির্জীব কনফারেন্স রুম নয় — প্রোডাকশন বেসিকসহ একটি জীবন্ত সেট।',
      why_1_t: 'গিয়ার অন্তর্ভুক্ত',
      why_1_d:
        'মাইক, মিক্সার, ক্যামেরা, লাইট ও প্রেজেন্টেশন স্ক্রিন — আপনি কথোপকথনে মন দিন।',
      why_2_t: 'বায়োফিলিক সেট',
      why_2_d:
        'প্ল্যান্ট ওয়াল, উষ্ণ কাঠ ও ল্যাটিস আলো — স্টাইলিস্ট ছাড়াই ক্যামেরায় প্রিমিয়াম লুক।',
      why_3_t: 'নিউ টাউনের প্রধান লোকেশন',
      why_3_d: 'ডাউনটাউন মলের ভেতরে শপ ১২৭ — খুঁজে পাওয়া, পার্কিং ও অতিথি আনা সহজ।',
      why_4_t: 'স্বচ্ছ প্যাকেজ',
      why_4_d:
        '₹১,০০০ থেকে স্পষ্ট ঘণ্টা ও ব্লক রেট — হোয়াটসঅ্যাপ বা এনকোয়ারি ফর্মে বুক করুন।',
      process_eyebrow: 'কীভাবে কাজ হয়',
      process_title: 'এনকোয়ারি থেকে শেষ পর্যন্ত',
      process_lede:
        'চারটি স্পষ্ট ধাপ। লম্বা অনবোর্ডিং নয় — নিশ্চিত স্লট ও প্রস্তুত রুম।',
      proc_1_t: 'এনকোয়ারি পাঠান',
      proc_1_d: 'তারিখ, সময়কাল এবং আপনি কী রেকর্ড বা হোস্ট করবেন জানান।',
      proc_2_t: 'স্লট নিশ্চিত করুন',
      proc_2_d: 'আমরা উপলভ্যতা ও প্যাকেজ লক করি — সাধারণত একই দিনে।',
      proc_3_t: 'এসে তৈরি করুন',
      proc_3_d: 'লাইট ও মাইক করা বায়োফিলিক সেটে ঢুকুন। প্রস্তুত হলে শুরু করুন।',
      proc_4_t: 'ঐচ্ছিক সবুজায়ন',
      proc_4_d: 'অফিস গ্রিনারি প্রজেক্ট ইনস্টল সম্পর্কে জানুন — ₹১০,০০০ থেকে।',
      benefits_eyebrow: 'সুবিধা',
      benefits_title: 'টিমগুলো কেন বারবার আসে',
      benefits_cta: 'শুরু করুন',
      gallery_eyebrow: 'স্টুডিওর ভেতর',
      gallery_title: 'উষ্ণ আলো, জীবন্ত সবুজ',
      green_eyebrow: 'ভাতিকা থেকে আরও',
      green_title: 'অফিস গ্রিনারি প্রজেক্ট',
      green_lede: 'কর্মক্ষেত্রে জীবন্ত গাছ আনুন। শুরু ₹১০,০০০ থেকে।',
      green_cta: 'আজই এনকোয়ারি করুন',
      trust_eyebrow: 'বিশ্বাস',
      trust_title: 'মাঠে প্রমাণিত ক্রেডেনশিয়াল',
      trust_lede:
        'বায়োফিলিক স্টুডিও কর্মযোগ ভাতিকার নিউ টাউন অনুশীলনের অংশ — যেই ক্রাফট দিয়ে ল্যান্ডমার্ক বায়োফিলিক প্রজেক্ট হয়েছে।',
      faq_eyebrow: 'প্রশ্নোত্তর',
      faq_title: 'বুক করার আগে',
      faq_q1: 'ভাড়ায় কী কী পাওয়া যায়?',
      faq_a1:
        'স্টুডিও রুম অ্যাক্সেসসহ বায়োফিলিক সেট ও মূল গিয়ার — কনডেন্সার মাইক, মিক্সার, অ্যাকোস্টিক ট্রিটমেন্ট, ওয়াই-ফাই, প্রেজেন্টেশন স্ক্রিন, প্রয়োজন অনুযায়ী ক্যামেরা ও লাইট। এনকোয়ারির সময় বিস্তারিত নিশ্চিত করুন।',
      faq_q2: 'খোলার সময় কী?',
      faq_a2:
        'খোলা ৮:৩০ AM – ৭:০০ PM। উইকএন্ড ও লম্বা শুটের জন্য আগে তারিখ জানান।',
      faq_q3: 'কীভাবে বুক করব?',
      faq_a3:
        'হোয়াটসঅ্যাপ +৯১ ৯১৪৭২ ৪৬৫৮৭, একই নম্বরে কল, ইমেইল connect@ky21c.org, অথবা নিচের এনকোয়ারি ফর্ম পূরণ করুন।',
      faq_q4: 'আপনাদের লোকেশন কোথায়?',
      faq_a4:
        'শপ নং ১২৭, ডাউনটাউন মল, ইউনিওয়ার্ল্ড সিটি কমার্শিয়াল কমপ্লেক্স, নিউ টাউন, কলকাতা, পশ্চিমবঙ্গ ৭০০১৫৬।',
      faq_q5: 'অফিস প্ল্যান্টও করেন?',
      faq_a5:
        'হ্যাঁ। ভাতিকার অফিস গ্রিনারি প্রজেক্ট ₹১০,০০০ থেকে শুরু — স্টুডিও এনকোয়ারির সময় জিজ্ঞাসা করুন।',
      contact_eyebrow: 'যোগাযোগ',
      contact_title: 'আপনার স্লট সংরক্ষণ করুন',
      contact_lede:
        'ফ্রি কনসালটেশন বুক করুন — তারিখ, সময়কাল এবং আপনি কী তৈরি করবেন জানান।',
      form_title: 'এনকোয়ারি ফর্ম পূরণ করুন',
      form_lede:
        'নিচে আপনার বিবরণ দিন। সাবমিটের পর ইমেইলে কপি পাবেন — ডাউনলোড বা প্রিন্ট করতে পারবেন। স্টুডিও কপি যাবে connect@ky21c.org-এ।',
    },
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en'
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n')
      if (key && dict[key] != null) el.textContent = dict[key]
    })
    var enBtn = document.getElementById('lang-en')
    var bnBtn = document.getElementById('lang-bn')
    if (enBtn && bnBtn) {
      enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false')
      bnBtn.setAttribute('aria-pressed', lang === 'bn' ? 'true' : 'false')
    }
    try {
      localStorage.setItem('bs_lang', lang)
    } catch (e) {}
  }

  function bindLangToggle() {
    var root = document.querySelector('.lang-toggle')
    if (root) {
      root.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-lang]')
        if (!btn || !root.contains(btn)) return
        e.preventDefault()
        applyLang(btn.getAttribute('data-lang') === 'bn' ? 'bn' : 'en')
      })
    }
    var langEn = document.getElementById('lang-en')
    var langBn = document.getElementById('lang-bn')
    if (langEn) {
      langEn.addEventListener('click', function (e) {
        e.preventDefault()
        applyLang('en')
      })
    }
    if (langBn) {
      langBn.addEventListener('click', function (e) {
        e.preventDefault()
        applyLang('bn')
      })
    }
    var savedLang = 'en'
    try {
      savedLang = localStorage.getItem('bs_lang') || 'en'
    } catch (e) {}
    if (savedLang === 'bn') applyLang('bn')
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLangToggle)
  } else {
    bindLangToggle()
  }

  var STUDIO_EMAIL = 'connect@ky21c.org'
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = String(new Date().getFullYear())

  // Mobile nav
  var toggle = document.getElementById('nav-toggle')
  var menu = document.getElementById('nav-menu')
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = !menu.classList.contains('hidden')
      open = !open
      menu.classList.toggle('hidden', !open)
      menu.classList.toggle('flex', open)
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    })
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 767px)').matches) {
          menu.classList.add('hidden')
          menu.classList.remove('flex')
          toggle.setAttribute('aria-expanded', 'false')
          toggle.setAttribute('aria-label', 'Open menu')
        }
      })
    })
  }

  // Scroll reveals
  var reveals = document.querySelectorAll('.reveal')
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('in')
    })
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    reveals.forEach(function (el) {
      if (el.closest('#top')) {
        el.classList.add('in')
      } else {
        io.observe(el)
      }
    })
  }

  // Lightbox
  var lb = document.getElementById('lightbox')
  if (lb) {
    var lbImg = lb.querySelector('img')
    var closeBtn = lb.querySelector('.lightbox-close')

    function openLightbox(src, alt) {
      lbImg.src = src
      lbImg.alt = alt || ''
      lb.hidden = false
      lb.classList.remove('hidden')
      lb.classList.add('flex')
      document.body.style.overflow = 'hidden'
      closeBtn.focus()
    }

    function closeLightbox() {
      lb.hidden = true
      lb.classList.add('hidden')
      lb.classList.remove('flex')
      lbImg.src = ''
      document.body.style.overflow = ''
    }

    document.querySelectorAll('.g-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.getAttribute('data-full') || btn.querySelector('img').src
        var alt = (btn.querySelector('img') || {}).alt || ''
        openLightbox(src, alt)
      })
    })

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox)
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox()
    })
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lb.hidden) closeLightbox()
    })
  }

  // Legacy enquiry form (removed — Google Form embed). Keep safe no-op guards.
  var form = document.getElementById('enquiry-form')
  var receipt = document.getElementById('enquiry-receipt')
  var receiptBody = document.getElementById('receipt-body')
  var errorEl = document.getElementById('enq-error')
  var lastPayload = null

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function readForm() {
    var nameEl = document.getElementById('enq-name')
    if (!nameEl) return null
    return {
      fullName: (nameEl.value || '').trim(),
      company: ((document.getElementById('enq-company') || {}).value || '').trim(),
      mobile: ((document.getElementById('enq-mobile') || {}).value || '').trim(),
      email: ((document.getElementById('enq-email') || {}).value || '').trim(),
      service: ((document.getElementById('enq-service') || {}).value || '').trim(),
      message: ((document.getElementById('enq-message') || {}).value || '').trim(),
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    }
  }

  function validate(data) {
    if (!data.fullName) return 'Please enter your full name.'
    if (!data.mobile || data.mobile.replace(/\D/g, '').length < 10) return 'Please enter a valid mobile number.'
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Please enter a valid email address.'
    if (!data.service) return 'Please select a service.'
    return ''
  }

  function renderReceipt(data) {
    if (!receiptBody) return
    var rows = [
      ['Full Name', data.fullName],
      ['Company Name', data.company || '—'],
      ['Mobile Number', data.mobile],
      ['Email Address', data.email],
      ['Service Interested In', data.service],
      ['Message', data.message || '—'],
      ['Submitted', data.submittedAt + ' IST'],
    ]
    receiptBody.innerHTML =
      '<p class="mb-4 font-display text-xl text-forest">Biophilic Studio · karmyog Vātika</p>' +
      '<p class="mb-4 text-xs text-forest/60">Shop No. 127, Downtown Mall, New Town, Kolkata · +91 91472 46587</p>' +
      '<dl>' +
      rows
        .map(function (row) {
          return (
            '<div><dt>' +
            escapeHtml(row[0]) +
            '</dt><dd>' +
            escapeHtml(row[1]).replace(/\n/g, '<br>') +
            '</dd></div>'
          )
        })
        .join('') +
      '</dl>'
  }

  function emailBody(data) {
    return [
      'Biophilic Studio — Booking Enquiry',
      '',
      'Full Name: ' + data.fullName,
      'Company Name: ' + (data.company || '—'),
      'Mobile Number: ' + data.mobile,
      'Email Address: ' + data.email,
      'Service Interested In: ' + data.service,
      'Message: ' + (data.message || '—'),
      'Submitted: ' + data.submittedAt + ' IST',
      '',
      'Shop No. 127, Downtown Mall, New Town, Kolkata',
      'Studio WhatsApp/Call: +91 91472 46587',
    ].join('\n')
  }

  function mailtoLink(to, subject, body) {
    return (
      'mailto:' +
      encodeURIComponent(to) +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
    )
  }

  function downloadCopy(data) {
    var html =
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Biophilic Studio Enquiry — ' +
      escapeHtml(data.fullName) +
      '</title></head><body><h1>Biophilic Studio</h1><pre>' +
      escapeHtml(emailBody(data)) +
      '</pre></body></html>'
    var blob = new Blob([html], { type: 'text/html;charset=utf-8' })
    var url = URL.createObjectURL(blob)
    var a = document.createElement('a')
    a.href = url
    a.download =
      'biophilic-studio-enquiry-' +
      data.fullName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') +
      '.html'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  if (form && receipt && receiptBody) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var data = readForm()
      if (!data) return
      var err = validate(data)
      if (err) {
        if (errorEl) {
          errorEl.textContent = err
          errorEl.classList.remove('hidden')
        }
        return
      }
      if (errorEl) errorEl.classList.add('hidden')
      lastPayload = data
      renderReceipt(data)

      var body = emailBody(data)
      var emailMe = document.getElementById('receipt-email-me')
      var emailStudio = document.getElementById('receipt-email-studio')
      if (emailMe) emailMe.href = mailtoLink(data.email, 'Your Biophilic Studio enquiry copy', body)
      if (emailStudio) {
        emailStudio.href = mailtoLink(STUDIO_EMAIL, 'Biophilic Studio enquiry — ' + data.fullName, body)
      }

      form.classList.add('hidden')
      receipt.hidden = false
      receipt.classList.remove('hidden')
      receipt.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    })

    var printBtn = document.getElementById('receipt-print')
    var dlBtn = document.getElementById('receipt-download')
    var againBtn = document.getElementById('receipt-again')
    if (printBtn) printBtn.addEventListener('click', function () { window.print() })
    if (dlBtn) {
      dlBtn.addEventListener('click', function () {
        if (lastPayload) downloadCopy(lastPayload)
      })
    }
    if (againBtn) {
      againBtn.addEventListener('click', function () {
        form.reset()
        receipt.hidden = true
        receipt.classList.add('hidden')
        form.classList.remove('hidden')
        lastPayload = null
        form.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      })
    }
  }
})()
