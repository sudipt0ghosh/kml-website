(() => {
  'use strict';

  const WHATSAPP_NUMBER = '919735413317';

  const translations = {
    bn: {
      skip: 'মূল অংশে যান', topLocation: 'মুর্শিদাবাদ, পশ্চিমবঙ্গ', brandBn: 'খাঁটি মিল্ক লাইন',
      navHome: 'হোম', navAbout: 'আমাদের কথা', navServices: 'পরিষেবা', navProcess: 'কীভাবে কাজ করে', navGallery: 'ছবির গল্প', navOrder: 'অর্ডার করুন',
      heroEyebrow: 'মুর্শিদাবাদের স্থানীয় উদ্যোগ', heroTitleA: 'দুধের প্রতিদিনের প্রয়োজন,', heroTitleB: 'কথা হোক বিশ্বাসে।',
      heroDescription: 'পরিবার, চায়ের দোকান বা মিষ্টির দোকানের জন্য দুধের প্রয়োজন? আপনার পরিমাণ ও এলাকা জানিয়ে ফোন বা WhatsApp-এ সরাসরি কথা বলুন।',
      heroOrder: 'WhatsApp-এ অর্ডার', heroCall: 'ফোন করুন', heroNote: 'দাম, পরিমাণ ও ডেলিভারির এলাকা আগে কথা বলে নিশ্চিত করুন।',
      heroImageAlt: 'খাঁটি মিল্ক লাইনের ডেলিভারি ব্যাগে দুধের বোতল', imageTagTitle: 'আপনার এলাকার জন্য', imageTagText: 'অর্ডার নিয়ে কথা বলুন', heroBottom: 'স্থানীয় মানুষের সঙ্গে, স্থানীয় চাহিদার পাশে।',
      valueOneTitle: 'বাড়ি ও পরিবার', valueOneText: 'ঘরের প্রয়োজন নিয়ে কথা বলুন', valueTwoTitle: 'দোকান ও ব্যবসা', valueTwoText: 'নিয়মিত সরবরাহের বিষয়ে জিজ্ঞাসা', valueThreeTitle: 'সরাসরি যোগাযোগ', valueThreeText: 'ফোন বা WhatsApp',
      aboutImageAlt: 'সবুজ মাঠে ঘাস খাচ্ছে গরু', aboutPhotoCaption: 'মাঠের ছবি, আমাদের ব্র্যান্ডের গল্পের অংশ', aboutKicker: 'আমাদের কথা', aboutTitle: 'সহজ যোগাযোগ। পরিষ্কার কথা। <em>ভরসার সম্পর্ক।</em>',
      aboutParagraph1: 'খাঁটি মিল্ক লাইন (KML)-এর লক্ষ্য হলো দুধের প্রয়োজন নিয়ে আপনার সঙ্গে সরাসরি যোগাযোগকে সহজ করা। পরিবার হোক বা স্থানীয় দোকান—আপনার চাহিদা জানিয়ে কথা শুরু করুন।',
      aboutParagraph2: 'কোন এলাকায় সরবরাহ সম্ভব, কতটা দুধ লাগবে, দাম এবং সময়—অর্ডার নিশ্চিত করার আগে এই বিষয়গুলি ফোন বা WhatsApp-এ জেনে নিন।', aboutCta: 'আপনার প্রয়োজন জানান', brandSignature: 'খাঁটি মিল্ক লাইন · KML',
      servicesKicker: 'আপনার প্রয়োজন অনুযায়ী', servicesTitle: 'দুধের প্রয়োজন যেমনই হোক, <em>কথা শুরু করুন।</em>', servicesDescription: 'পরিমাণ, এলাকা ও সরবরাহের বিষয়ে আগে আলোচনা করে নিন।',
      serviceHomeTitle: 'পরিবারের জন্য', serviceHomeText: 'বাড়ির জন্য কতটা দুধ প্রয়োজন, আপনার এলাকা এবং পছন্দের সরবরাহের বিষয়ে কথা বলুন।',
      serviceShopTitle: 'চা ও মিষ্টির দোকান', serviceShopText: 'দোকানের দৈনিক চাহিদা বা বেশি পরিমাণে দুধ লাগলে সরবরাহের সম্ভাবনা নিয়ে আলোচনা করুন।',
      serviceRegularTitle: 'নিয়মিত সরবরাহ', serviceRegularText: 'প্রতিদিন বা নির্দিষ্ট বিরতিতে প্রয়োজন হলে আপনার চাহিদা জানান—সম্ভব কি না নিশ্চিত করে নিন।', serviceLink: 'জানতে চাই', servicesFootnote: 'সরবরাহের এলাকা, দাম, সময় ও পরিমাণের উপলভ্যতা সরাসরি যোগাযোগ করে নিশ্চিত করতে হবে।',
      processKicker: 'অর্ডারের সহজ পথ', processTitle: 'তিনটি ধাপেই <em>কথা থেকে অর্ডার।</em>', processDescription: 'অনলাইনে পেমেন্ট বা অ্যাকাউন্ট খোলার দরকার নেই। ফোন করুন, অথবা WhatsApp-এ আপনার প্রয়োজন লিখে পাঠান।', processCta: 'এখনই অর্ডার শুরু করুন',
      stepOneTitle: 'যোগাযোগ করুন', stepOneText: 'ফোন করুন বা WhatsApp-এ মেসেজ পাঠান।', stepTwoTitle: 'চাহিদা জানান', stepTwoText: 'কতটা দুধ লাগবে, কোন এলাকায় এবং কোন ধরনের সরবরাহ দরকার—জানিয়ে দিন।', stepThreeTitle: 'বিষয়গুলি নিশ্চিত করুন', stepThreeText: 'দাম, উপলভ্যতা, ডেলিভারির সময় ও এলাকা নিশ্চিত হওয়ার পর অর্ডার চূড়ান্ত করুন।',
      galleryKicker: 'ছবিতে আমাদের গল্প', galleryTitle: 'মাঠ থেকে <em>আপনার দোরগোড়ায়।</em>', galleryDescription: 'খাঁটি মিল্ক লাইনের সঙ্গে ভাগ করে নেওয়া আপনার ছবিগুলি—দুধ, সরবরাহ এবং মানুষের সঙ্গে সম্পর্কের গল্প।',
      galleryAltMilking: 'মাঠে গরুর দুধ দোহন করছেন একজন খামারি', galleryAltBottling: 'দুধের বোতল প্রস্তুত করার দৃশ্য', galleryAltTea: 'স্থানীয় চায়ের দোকানে দুধ পৌঁছে দেওয়া হচ্ছে', galleryAltShop: 'মিষ্টির দোকানে দুধের বোতল দেওয়া হচ্ছে', galleryAltHome: 'বাড়ির দরজায় এক ক্রেতার হাতে দুধ পৌঁছে দেওয়া হচ্ছে', galleryAltCommunity: 'খাঁটি মিল্ক লাইনের ব্র্যান্ড ব্যানার এবং স্থানীয় মানুষের ছবি',
      galleryMilking: 'দুধ সংগ্রহের মুহূর্ত', galleryBottling: 'বোতলে দুধ ভরা', galleryTea: 'স্থানীয় দোকানে সরবরাহ', galleryShop: 'দোকানের জন্য দুধ', galleryHome: 'বাড়িতে দুধ পৌঁছে দেওয়া', galleryCommunity: 'মানুষের সঙ্গে সম্পর্কই আমাদের গল্প', galleryNote: 'আপনার প্রশ্ন বা অর্ডার নিয়ে সরাসরি কথা বলুন।', facebookCta: 'Facebook-এ দেখুন',
      orderKicker: 'অর্ডার বা জিজ্ঞাসা', orderTitle: 'আপনার দুধের প্রয়োজন <em>জানিয়ে দিন।</em>', orderDescription: 'ফর্মটি পূরণ করলে আপনার তথ্য WhatsApp মেসেজে সাজানো হবে। WhatsApp খুলে মেসেজটি দেখে নিজে Send করুন।',
      callLabel: 'সরাসরি ফোন করুন', whatsappLabel: 'WhatsApp-এ লিখুন', whatsappAction: 'মেসেজ পাঠান', orderLocation: 'মুর্শিদাবাদ, পশ্চিমবঙ্গ — সরবরাহের এলাকা ফোনে নিশ্চিত করুন।',
      formTitle: 'অর্ডারের তথ্য', formSubtitle: 'আপনার প্রয়োজন অনুযায়ী পূরণ করুন', labelName: 'আপনার নাম *', labelArea: 'এলাকা / ঠিকানার পরিচিতি *', labelType: 'কী জন্য প্রয়োজন?', labelQuantity: 'পরিমাণ *', labelNote: 'অতিরিক্ত কথা (ঐচ্ছিক)',
      placeholderName: 'আপনার নাম লিখুন', placeholderArea: 'গ্রাম, পাড়া বা এলাকার নাম', placeholderQuantity: 'যেমন: ২ লিটার', placeholderNote: 'কখন বা কীভাবে প্রয়োজন, লিখুন...',
      optionHome: 'পরিবারের জন্য', optionShop: 'দোকান / চায়ের স্টল', optionRegular: 'নিয়মিত সরবরাহ', optionOther: 'অন্যান্য', formSubmit: 'WhatsApp-এ অর্ডার পাঠান', formDisclaimer: 'এটি আপনার WhatsApp খুলবে; মেসেজ পাঠানোর আগে তথ্য যাচাই করতে পারবেন। এই ওয়েবসাইটে কোনো পেমেন্ট নেওয়া হয় না।',
      faqKicker: 'সাধারণ প্রশ্ন', faqTitle: 'আগে থেকেই যা <em>জানতে পারেন।</em>', faqText: 'অর্ডার নিশ্চিত করার আগে প্রয়োজনীয় বিষয়গুলি জেনে নিন।', faqOneQ: 'আমার এলাকায় কি দুধ পৌঁছে দেওয়া হয়?', faqOneA: 'আপনার গ্রাম বা এলাকার নাম ফোন বা WhatsApp-এ জানান। সরবরাহ সম্ভব কি না সরাসরি নিশ্চিত করে নিন।', faqTwoQ: 'দুধের দাম কত?', faqTwoA: 'বর্তমান দাম ও পরিমাণ অনুযায়ী খরচ জানতে 97354 13317 নম্বরে যোগাযোগ করুন।', faqThreeQ: 'দোকানের জন্য বেশি পরিমাণে অর্ডার করা যাবে?', faqThreeA: 'আপনার প্রয়োজনীয় পরিমাণ এবং সরবরাহের নিয়ম জানিয়ে কথা বলুন। উপলভ্যতা নিশ্চিত হওয়ার পর অর্ডার চূড়ান্ত করুন।', faqFourQ: 'WhatsApp-এ অর্ডার কীভাবে পাঠাব?', faqFourA: 'ফর্ম পূরণ করে বোতাম চাপুন। WhatsApp খুললে মেসেজটি দেখে Send চাপলেই আপনার অনুরোধ পাঠানো হবে।',
      finalKicker: 'কথা শুরু হোক আজই', finalTitle: 'দুধের প্রয়োজন? <em>আমাদের জানান।</em>', finalCta: 'WhatsApp-এ যোগাযোগ', footerBlurb: 'দুধের অর্ডার ও সরবরাহ নিয়ে সহজ সরাসরি যোগাযোগ।', footerExplore: 'দ্রুত লিংক', footerContact: 'যোগাযোগ', footerLocation: 'মুর্শিদাবাদ, পশ্চিমবঙ্গ', footerBottom: 'দাম ও সরবরাহের তথ্য সরাসরি যোগাযোগ করে নিশ্চিত করুন।', mobileCall: 'কল করুন', mobileWhatsApp: 'WhatsApp অর্ডার', floatingOrder: 'অর্ডার করুন',
      msgGreeting: 'নমস্কার, খাঁটি মিল্ক লাইন। দুধের অর্ডার/সরবরাহ সম্পর্কে জানতে চাই।', msgName: 'নাম', msgArea: 'এলাকা', msgType: 'প্রয়োজন', msgQuantity: 'পরিমাণ', msgNote: 'অতিরিক্ত তথ্য', msgTypeHome: 'পরিবারের জন্য', msgTypeShop: 'দোকান / চায়ের স্টল', msgTypeRegular: 'নিয়মিত সরবরাহ', msgTypeOther: 'অন্যান্য', msgEnd: 'দাম, উপলভ্যতা এবং ডেলিভারির সময় জানাবেন। ধন্যবাদ।', toastWhatsApp: 'WhatsApp খোলা হচ্ছে…', toastError: 'নাম, এলাকা ও পরিমাণ লিখুন।'
    },
    en: {
      skip: 'Skip to main content', topLocation: 'Murshidabad, West Bengal', brandBn: 'Khati Milk Line',
      navHome: 'Home', navAbout: 'About', navServices: 'Services', navProcess: 'How it works', navGallery: 'Our story', navOrder: 'Place an order',
      heroEyebrow: 'A local Murshidabad initiative', heroTitleA: 'For your everyday milk needs,', heroTitleB: 'let’s talk with trust.',
      heroDescription: 'Need milk for your home, tea stall or sweet shop? Share your quantity and area, then speak to us directly by phone or WhatsApp.',
      heroOrder: 'Order on WhatsApp', heroCall: 'Call us', heroNote: 'Please confirm price, quantity and delivery area before placing an order.',
      heroImageAlt: 'Milk bottles in a Khati Milk Line delivery bag', imageTagTitle: 'For your local area', imageTagText: 'Talk to us about an order', heroBottom: 'Alongside local people and local needs.',
      valueOneTitle: 'Homes & families', valueOneText: 'Discuss your household needs', valueTwoTitle: 'Shops & businesses', valueTwoText: 'Ask about regular supply', valueThreeTitle: 'Direct contact', valueThreeText: 'Phone or WhatsApp',
      aboutImageAlt: 'Cows grazing in a green field', aboutPhotoCaption: 'A field photo from our brand story', aboutKicker: 'About us', aboutTitle: 'Easy contact. Clear conversations. <em>A relationship built on trust.</em>',
      aboutParagraph1: 'Khati Milk Line (KML) aims to make it simple to discuss your milk requirements directly. Whether it is for your home or a local shop, start by telling us what you need.',
      aboutParagraph2: 'Before confirming an order, ask us about the area we can serve, the quantity you need, pricing and delivery timing by phone or WhatsApp.', aboutCta: 'Tell us what you need', brandSignature: 'Khati Milk Line · KML',
      servicesKicker: 'For your needs', servicesTitle: 'Whatever your milk requirement, <em>let’s start a conversation.</em>', servicesDescription: 'Discuss quantity, area and supply details before confirming.',
      serviceHomeTitle: 'For your family', serviceHomeText: 'Tell us how much milk you need at home, your area and your preferred supply arrangement.',
      serviceShopTitle: 'Tea & sweet shops', serviceShopText: 'If your shop needs milk daily or in larger quantities, ask us about possible supply arrangements.',
      serviceRegularTitle: 'Regular supply', serviceRegularText: 'For daily or periodic needs, share your requirements and confirm whether they can be supported.', serviceLink: 'Enquire now', servicesFootnote: 'Supply area, price, timing and quantity availability must be confirmed directly.',
      processKicker: 'A simple order journey', processTitle: 'From conversation to order <em>in three steps.</em>', processDescription: 'No online payment or account is needed. Call us or send your requirements on WhatsApp.', processCta: 'Start your order',
      stepOneTitle: 'Get in touch', stepOneText: 'Call us or send a WhatsApp message.', stepTwoTitle: 'Share your needs', stepTwoText: 'Tell us the quantity, delivery area and type of supply you need.', stepThreeTitle: 'Confirm the details', stepThreeText: 'Finalise your order after confirming price, availability, delivery time and area.',
      galleryKicker: 'Our story in pictures', galleryTitle: 'From the field to <em>your doorstep.</em>', galleryDescription: 'Photos shared for Khati Milk Line—showing milk, delivery and connections with local people.',
      galleryAltMilking: 'A farmer milking a cow in a field', galleryAltBottling: 'Milk bottles being prepared', galleryAltTea: 'Milk being delivered to a local tea stall', galleryAltShop: 'Milk bottles being handed over at a sweet shop', galleryAltHome: 'Milk being handed to a customer at home', galleryAltCommunity: 'Khati Milk Line brand banner with local people',
      galleryMilking: 'Milk collection', galleryBottling: 'Filling the bottles', galleryTea: 'Supplying local shops', galleryShop: 'Milk for shops', galleryHome: 'Home delivery', galleryCommunity: 'Our story is about people', galleryNote: 'Contact us directly with questions or to discuss an order.', facebookCta: 'View on Facebook',
      orderKicker: 'Orders & enquiries', orderTitle: 'Tell us <em>what you need.</em>', orderDescription: 'Complete the form to prepare a WhatsApp message. WhatsApp will open so you can review and send it yourself.',
      callLabel: 'Call directly', whatsappLabel: 'Message us on WhatsApp', whatsappAction: 'Send a message', orderLocation: 'Murshidabad, West Bengal — confirm your delivery area by phone.',
      formTitle: 'Order details', formSubtitle: 'Fill in what you need', labelName: 'Your name *', labelArea: 'Area / location details *', labelType: 'What is it for?', labelQuantity: 'Quantity *', labelNote: 'Additional details (optional)',
      placeholderName: 'Enter your name', placeholderArea: 'Village, neighbourhood or area', placeholderQuantity: 'e.g. 2 litres', placeholderNote: 'When or how do you need it?',
      optionHome: 'For my family', optionShop: 'Shop / tea stall', optionRegular: 'Regular supply', optionOther: 'Other', formSubmit: 'Continue on WhatsApp', formDisclaimer: 'This opens WhatsApp; you can review the details before sending. No payment is collected on this website.',
      faqKicker: 'Frequently asked questions', faqTitle: 'A few things to <em>know first.</em>', faqText: 'Please confirm the relevant details before finalising an order.', faqOneQ: 'Do you deliver to my area?', faqOneA: 'Share your village or area by phone or WhatsApp and confirm whether delivery is available.', faqTwoQ: 'How much does the milk cost?', faqTwoA: 'Call 97354 13317 for current pricing based on the quantity you need.', faqThreeQ: 'Can I order a larger quantity for my shop?', faqThreeA: 'Tell us your expected quantity and supply needs. Finalise the order after availability is confirmed.', faqFourQ: 'How do I send an order on WhatsApp?', faqFourA: 'Fill in the form and click the button. When WhatsApp opens, review the message and press Send.',
      finalKicker: 'Let’s talk today', finalTitle: 'Need milk? <em>Let us know.</em>', finalCta: 'Contact on WhatsApp', footerBlurb: 'Simple, direct contact for milk orders and supply enquiries.', footerExplore: 'Explore', footerContact: 'Contact', footerLocation: 'Murshidabad, West Bengal', footerBottom: 'Confirm pricing and supply details directly with us.', mobileCall: 'Call now', mobileWhatsApp: 'Order on WhatsApp', floatingOrder: 'Order now',
      msgGreeting: 'Hello Khati Milk Line. I would like to enquire about a milk order/supply.', msgName: 'Name', msgArea: 'Area', msgType: 'Requirement', msgQuantity: 'Quantity', msgNote: 'Additional details', msgTypeHome: 'For family', msgTypeShop: 'Shop / tea stall', msgTypeRegular: 'Regular supply', msgTypeOther: 'Other', msgEnd: 'Please share the price, availability and delivery timing. Thank you.', toastWhatsApp: 'Opening WhatsApp…', toastError: 'Please enter your name, area and quantity.'
    }
  };

  const richTextKeys = new Set(['aboutTitle', 'servicesTitle', 'processTitle', 'galleryTitle', 'orderTitle', 'faqTitle', 'finalTitle']);

  let currentLanguage = 'bn';
  const langToggle = document.getElementById('language-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  const form = document.getElementById('order-form');
  const toast = document.getElementById('toast');
  let toastTimer;

  function translatePage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = language === 'bn' ? 'খাঁটি মিল্ক লাইন | Khati Milk Line' : 'Khati Milk Line | KML';
    const metaDescription = language === 'bn'
      ? 'খাঁটি মিল্ক লাইন (KML) — মুর্শিদাবাদ, পশ্চিমবঙ্গে দুধের অর্ডার ও সরবরাহের বিষয়ে ফোন বা WhatsApp-এ যোগাযোগ করুন।'
      : 'Khati Milk Line (KML) — contact us by phone or WhatsApp about milk orders and supply in Murshidabad, West Bengal.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', metaDescription);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metaDescription);
    document.getElementById('hero-whatsapp')?.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(translations[language].msgGreeting)}`);
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[language][key];
      if (value !== undefined) {
        if (richTextKeys.has(key)) element.innerHTML = value;
        else element.textContent = value;
      }
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      const value = translations[language][key];
      if (value !== undefined) element.setAttribute('alt', value);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const value = translations[language][key];
      if (value !== undefined) element.setAttribute('placeholder', value);
    });
    langToggle.innerHTML = language === 'bn' ? 'EN <span aria-hidden="true">↔</span> বাংলা' : 'বাংলা <span aria-hidden="true">↔</span> EN';
    langToggle.setAttribute('aria-label', language === 'bn' ? 'Switch language to English' : 'ভাষা বাংলায় পরিবর্তন করুন');
    menuToggle.setAttribute('aria-label', language === 'bn' ? 'নেভিগেশন মেনু খুলুন' : 'Open navigation menu');
  }

  function closeMobileMenu() {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  langToggle.addEventListener('click', () => {
    const nextLanguage = currentLanguage === 'bn' ? 'en' : 'bn';
    translatePage(nextLanguage);
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
  }

  const typeMessageKey = {
    home: 'msgTypeHome', shop: 'msgTypeShop', regular: 'msgTypeRegular', other: 'msgTypeOther'
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const area = String(formData.get('area') || '').trim();
    const quantity = String(formData.get('quantity') || '').trim();
    const note = String(formData.get('note') || '').trim();
    const type = String(formData.get('type') || 'home');
    if (!name || !area || !quantity) {
      showToast(translations[currentLanguage].toastError);
      return;
    }

    const t = translations[currentLanguage];
    const lines = [
      t.msgGreeting,
      `${t.msgName}: ${name}`,
      `${t.msgArea}: ${area}`,
      `${t.msgType}: ${t[typeMessageKey[type]] || t.msgTypeOther}`,
      `${t.msgQuantity}: ${quantity}`
    ];
    if (note) lines.push(`${t.msgNote}: ${note}`);
    lines.push(t.msgEnd);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    showToast(t.toastWhatsApp);
    const opened = window.open(url, '_blank');
    if (opened) opened.opener = null;
    else window.location.href = url;
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }

  // Keep long pages pleasant on mobile: close the menu after any nav selection.
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileMenu));
  translatePage('bn');
})();
