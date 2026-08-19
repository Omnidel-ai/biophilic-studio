(function () {
  'use strict'

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

    closeBtn.addEventListener('click', closeLightbox)
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox()
    })
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lb.hidden) closeLightbox()
    })
  }

  // Enquiry form → customer copy + studio copy (print / download / email)
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
    return {
      fullName: (document.getElementById('enq-name').value || '').trim(),
      company: (document.getElementById('enq-company').value || '').trim(),
      mobile: (document.getElementById('enq-mobile').value || '').trim(),
      email: (document.getElementById('enq-email').value || '').trim(),
      service: (document.getElementById('enq-service').value || '').trim(),
      message: (document.getElementById('enq-message').value || '').trim(),
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
      '</title><style>body{font-family:Georgia,serif;max-width:640px;margin:40px auto;padding:24px;color:#0f2419;line-height:1.5}h1{font-size:28px;margin:0 0 8px}h2{font-size:16px;margin:24px 0 8px;letter-spacing:.08em;text-transform:uppercase;color:#234d38}p,li{font-size:15px}.meta{color:#555;font-size:13px}dt{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#666;margin-top:14px}dd{margin:4px 0 0;font-size:15px}@media print{body{margin:0}}</style></head><body>' +
      '<h1>Biophilic Studio</h1><p class="meta">karmyog Vātika · Shop No. 127, Downtown Mall, New Town, Kolkata</p>' +
      '<h2>Customer enquiry copy</h2><dl>' +
      [
        ['Full Name', data.fullName],
        ['Company Name', data.company || '—'],
        ['Mobile Number', data.mobile],
        ['Email Address', data.email],
        ['Service Interested In', data.service],
        ['Message', data.message || '—'],
        ['Submitted', data.submittedAt + ' IST'],
      ]
        .map(function (row) {
          return '<dt>' + escapeHtml(row[0]) + '</dt><dd>' + escapeHtml(row[1]).replace(/\n/g, '<br>') + '</dd>'
        })
        .join('') +
      '</dl><p class="meta">Print this page or keep the downloaded file as your copy.</p></body></html>'

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
      var err = validate(data)
      if (err) {
        errorEl.textContent = err
        errorEl.classList.remove('hidden')
        return
      }
      errorEl.classList.add('hidden')
      lastPayload = data
      renderReceipt(data)

      var body = emailBody(data)
      document.getElementById('receipt-email-me').href = mailtoLink(
        data.email,
        'Your Biophilic Studio enquiry copy',
        body
      )
      document.getElementById('receipt-email-studio').href = mailtoLink(
        STUDIO_EMAIL,
        'Biophilic Studio enquiry — ' + data.fullName,
        body
      )

      form.classList.add('hidden')
      receipt.hidden = false
      receipt.classList.remove('hidden')
      receipt.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    })

    document.getElementById('receipt-print').addEventListener('click', function () {
      window.print()
    })

    document.getElementById('receipt-download').addEventListener('click', function () {
      if (lastPayload) downloadCopy(lastPayload)
    })

    document.getElementById('receipt-again').addEventListener('click', function () {
      form.reset()
      receipt.hidden = true
      receipt.classList.add('hidden')
      form.classList.remove('hidden')
      lastPayload = null
      form.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    })
  }

  // EN / BN language toggle (UI/UX review — Bengali readability QA)
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
      about_eyebrow: 'About us',
      about_title: 'A calm, camera-ready room inside Vātika',
      about_lede:
        "Biophilic Studio is karmyog Vātika's rentable creative space at Shop No. 127, Downtown Mall. Warm light, living greens, and production gear come together so hosts, teams, and creators can work without scrambling for a set.",
      services_eyebrow: 'Our services',
      services_title: 'Podcasts · meetings · content',
      services_lede:
        'Creators, teams, interviewers & workshop hosts — one calm space with gear included.',
      contact_eyebrow: 'Contact',
      contact_title: 'Reserve your slot',
      contact_lede: 'Book Free Consultation — tell us your date, duration, and what you are creating.',
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
      about_eyebrow: 'আমাদের কথা',
      about_title: 'ভাতিকার ভেতরে শান্ত, ক্যামেরা-রেডি একটি ঘর',
      about_lede:
        'বায়োফিলিক স্টুডিও হলো কর্মযোগ ভাতিকার ভাড়ায় নেওয়া যায় এমন সৃজনশীল স্পেস — শপ নং ১২৭, ডাউনটাউন মল। উষ্ণ আলো, সবুজ গাছপালা ও প্রোডাকশন গিয়ার একসাথে, যাতে হোস্ট, টিম ও ক্রিয়েটররা সেট নিয়ে দৌড়াতে না হয়।',
      services_eyebrow: 'আমাদের সেবা',
      services_title: 'পডকাস্ট · মিটিং · কনটেন্ট',
      services_lede:
        'ক্রিয়েটর, টিম, সাক্ষাৎকার ও ওয়ার্কশপ আয়োজকদের জন্য — গিয়ারসহ এক শান্ত জায়গা।',
      contact_eyebrow: 'যোগাযোগ',
      contact_title: 'আপনার স্লট সংরক্ষণ করুন',
      contact_lede: 'ফ্রি কনসালটেশন বুক করুন — তারিখ, সময়কাল এবং আপনি কী তৈরি করবেন জানান।',
    },
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en
    document.documentElement.lang = lang
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n')
      if (dict[key] != null) el.textContent = dict[key]
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

  var langEn = document.getElementById('lang-en')
  var langBn = document.getElementById('lang-bn')
  if (langEn) langEn.addEventListener('click', function () { applyLang('en') })
  if (langBn) langBn.addEventListener('click', function () { applyLang('bn') })

  var savedLang = 'en'
  try {
    savedLang = localStorage.getItem('bs_lang') || 'en'
  } catch (e) {}
  if (savedLang === 'bn') applyLang('bn')
})()
