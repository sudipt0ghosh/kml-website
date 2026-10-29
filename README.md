# Khati Milk Line (KML) website

A responsive, mobile-first, single-page website for Khati Milk Line, with Bengali as the default language and a Bengali/English toggle.

## Run locally

1. Extract this folder.
2. Open `index.html` in a current browser.
3. For best local testing, use a small static server from this folder, for example:
   - Python: `python -m http.server 8000`
   - Then open `http://localhost:8000`

No build step or JavaScript framework is required. The website uses plain HTML, CSS and JavaScript.

## Included

- Eight supplied photos in `assets/` (renamed for easier use).
- Responsive PC, tablet and mobile layouts.
- Bengali/English content toggle.
- Mobile sticky Call and WhatsApp bar.
- WhatsApp order form that builds a message for the customer to review and send.
- Direct call links for **+91 97354 13317**.
- Facebook link from the supplied URL.
- FAQ accordions, mobile navigation and gentle section reveal effects.

## Important business details

Prices, serviceable areas, delivery timings and availability have not been invented. The page asks customers to confirm these details directly. The order form does not collect or send information to a website server; it only opens WhatsApp with a prefilled message.

The supplied public Facebook share URL could not be automatically fetched in this environment, so the page copy and image choices are based on the eight images supplied with the request. The Facebook link remains available in the site.

## Before publishing

- Confirm the final product details, price, supply area and timings.
- Replace or update any photo/brand wording if the business details change.
- Upload the whole folder to your static host while preserving the `assets/` directory.
- Test WhatsApp and phone links on an actual mobile phone.
