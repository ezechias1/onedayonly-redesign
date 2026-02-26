// ---------------------------------------------------------------------------
// FAQ mock data – 28 items across 5 categories
// ---------------------------------------------------------------------------

import { FAQItem } from '@/types/common';

export const faqItems: FAQItem[] = [
  // ── Orders ───────────────────────────────────────────────────
  {
    id: 'faq-orders-01',
    category: 'Orders',
    question: 'How do I place an order on OneDayOnly?',
    answer:
      'Simply browse our daily deals, add items to your cart, and proceed to checkout. You will need to create an account or log in, enter your delivery address, and choose a payment method. Once payment is confirmed your order is locked in.',
  },
  {
    id: 'faq-orders-02',
    category: 'Orders',
    question: 'Can I cancel or change my order after placing it?',
    answer:
      'Because our deals are time-sensitive and stock is limited, we process orders as quickly as possible. You can request a cancellation within 30 minutes of placing your order by contacting our support team. After that window, cancellations may not be possible if the order has already been dispatched.',
  },
  {
    id: 'faq-orders-03',
    category: 'Orders',
    question: 'How do I track my order?',
    answer:
      'Once your order has been dispatched you will receive an email with a tracking number and a link to the courier\'s tracking page. You can also view tracking information under "My Orders" in your account dashboard.',
  },
  {
    id: 'faq-orders-04',
    category: 'Orders',
    question: 'Why was my order cancelled?',
    answer:
      'Orders are occasionally cancelled due to stock discrepancies, payment failures, or address verification issues. If your order is cancelled, you will receive a full refund within 3-5 business days. We will notify you by email with the reason for cancellation.',
  },
  {
    id: 'faq-orders-05',
    category: 'Orders',
    question: 'Is there a limit on how many items I can order?',
    answer:
      'Most deals have a maximum quantity per customer (typically 2-5 units per item) to ensure as many customers as possible can take advantage of our deals. The limit is shown on the product page where applicable.',
  },
  {
    id: 'faq-orders-06',
    category: 'Orders',
    question: 'Can I combine multiple orders into one shipment?',
    answer:
      'Unfortunately, we are unable to combine separate orders into a single shipment as each order is processed independently. To save on shipping, we recommend adding all desired items to your cart before checking out.',
  },

  // ── Shipping & Delivery ──────────────────────────────────────
  {
    id: 'faq-shipping-01',
    category: 'Shipping & Delivery',
    question: 'How much does delivery cost?',
    answer:
      'Standard delivery costs R75 for orders under R500. Orders over R500 qualify for FREE delivery anywhere in South Africa. Express delivery is available in select metros for R150.',
  },
  {
    id: 'faq-shipping-02',
    category: 'Shipping & Delivery',
    question: 'How long does delivery take?',
    answer:
      'Standard delivery takes 3-7 business days depending on your location. Major metros (Johannesburg, Cape Town, Durban, Pretoria) typically receive orders within 3-4 business days. Remote areas may take up to 10 business days.',
  },
  {
    id: 'faq-shipping-03',
    category: 'Shipping & Delivery',
    question: 'Do you deliver to PO Boxes?',
    answer:
      'We are unable to deliver to PO Boxes as our couriers require a physical street address with someone available to receive the parcel. Please provide a home or work address for delivery.',
  },
  {
    id: 'faq-shipping-04',
    category: 'Shipping & Delivery',
    question: 'Do you offer collection points or Pargo pickup?',
    answer:
      'Yes! During checkout you can select a Pargo pickup point near you. There are thousands of Pargo points across South Africa, including at many Pick n Pay, Clicks, and TFG stores. Pickup is free on orders over R500.',
  },
  {
    id: 'faq-shipping-05',
    category: 'Shipping & Delivery',
    question: 'What happens if I miss my delivery?',
    answer:
      'The courier will attempt delivery twice. If both attempts are missed, your parcel will be held at the nearest courier depot for 5 business days. After that, it will be returned to us and we will contact you to arrange redelivery (additional fees may apply).',
  },
  {
    id: 'faq-shipping-06',
    category: 'Shipping & Delivery',
    question: 'Do you deliver outside South Africa?',
    answer:
      'Currently we only deliver within South Africa. We are exploring options for delivery to neighbouring countries and will announce any expansion on our website and social media channels.',
  },

  // ── Returns ──────────────────────────────────────────────────
  {
    id: 'faq-returns-01',
    category: 'Returns',
    question: 'What is your return policy?',
    answer:
      'You may return most items within 30 days of delivery for a full refund, provided they are unused, in their original packaging, and in resalable condition. Certain items such as underwear, supplements, and perishable goods cannot be returned for hygiene or safety reasons.',
  },
  {
    id: 'faq-returns-02',
    category: 'Returns',
    question: 'How do I initiate a return?',
    answer:
      'Log in to your account, go to "My Orders", select the order, and click "Request Return". Choose your reason, upload photos if applicable, and submit the request. You will receive a return authorisation email within 24 hours with instructions for sending the item back.',
  },
  {
    id: 'faq-returns-03',
    category: 'Returns',
    question: 'Who pays for return shipping?',
    answer:
      'If the return is due to a defective or incorrect item, we will cover the return shipping cost and arrange a free courier collection. For change-of-mind returns, the customer is responsible for return shipping costs.',
  },
  {
    id: 'faq-returns-04',
    category: 'Returns',
    question: 'How long does it take to receive my refund?',
    answer:
      'Once we receive and inspect the returned item, refunds are processed within 3-5 business days. The refund will be credited to your original payment method. EFT refunds may take an additional 1-2 business days to reflect in your bank account.',
  },
  {
    id: 'faq-returns-05',
    category: 'Returns',
    question: 'Can I exchange an item instead of returning it?',
    answer:
      'Due to the nature of our daily deals, we are unable to guarantee the same item will be available for exchange. We recommend returning the item for a refund and purchasing the replacement if it becomes available in a future deal.',
  },

  // ── Payments ─────────────────────────────────────────────────
  {
    id: 'faq-payments-01',
    category: 'Payments',
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, Mastercard, American Express, Instant EFT (via Ozow and Peach Payments), SnapScan, Zapper, and Mobicred for credit purchases. All transactions are processed through secure, PCI-compliant payment gateways.',
  },
  {
    id: 'faq-payments-02',
    category: 'Payments',
    question: 'Is it safe to pay on your website?',
    answer:
      'Absolutely. Our website uses 256-bit SSL encryption, and all card payments are processed through PCI DSS Level 1 certified payment providers. We never store your full card details on our servers.',
  },
  {
    id: 'faq-payments-03',
    category: 'Payments',
    question: 'Can I pay with Mobicred or a lay-by option?',
    answer:
      'Yes, Mobicred is available at checkout for qualifying orders. Mobicred allows you to buy now and pay later over 12 months. You will need an active Mobicred account — you can apply on mobicred.co.za. Traditional lay-by is not available.',
  },
  {
    id: 'faq-payments-04',
    category: 'Payments',
    question: 'Why was my payment declined?',
    answer:
      'Common reasons include insufficient funds, incorrect card details, or your bank blocking the transaction for security. Try again ensuring all details are correct, or contact your bank to authorise the payment. You can also try a different payment method.',
  },
  {
    id: 'faq-payments-05',
    category: 'Payments',
    question: 'Do you charge VAT?',
    answer:
      'All prices displayed on OneDayOnly include 15% VAT as required by South African law. A full tax invoice is included with every order confirmation email.',
  },

  // ── Account ──────────────────────────────────────────────────
  {
    id: 'faq-account-01',
    category: 'Account',
    question: 'How do I create an account?',
    answer:
      'Click the "Sign Up" button at the top of the page and enter your name, email address, and a password. You can also sign up using your Google or Facebook account for a quicker registration process.',
  },
  {
    id: 'faq-account-02',
    category: 'Account',
    question: 'I forgot my password. How do I reset it?',
    answer:
      'Click "Log In" and then "Forgot Password". Enter the email address associated with your account and we will send you a password reset link. The link expires after 24 hours for security.',
  },
  {
    id: 'faq-account-03',
    category: 'Account',
    question: 'How do I update my delivery address?',
    answer:
      'Go to "My Account" > "Addresses" to add, edit, or remove delivery addresses. You can save multiple addresses and select your preferred one during checkout.',
  },
  {
    id: 'faq-account-04',
    category: 'Account',
    question: 'How do I unsubscribe from marketing emails?',
    answer:
      'You can manage your email preferences under "My Account" > "Notifications". Alternatively, click the "Unsubscribe" link at the bottom of any marketing email. Please note that transactional emails (order confirmations, shipping updates) cannot be unsubscribed from.',
  },
  {
    id: 'faq-account-05',
    category: 'Account',
    question: 'Can I delete my account?',
    answer:
      'Yes. Contact our support team at support@onedayonly.co.za with the subject line "Account Deletion Request". We will verify your identity and process the deletion within 5 business days in accordance with POPIA regulations.',
  },
  {
    id: 'faq-account-06',
    category: 'Account',
    question: 'How do I enable deal notifications?',
    answer:
      'Under "My Account" > "Notifications", you can opt in to daily deal alerts, wishlist price-drop notifications, and flash-sale reminders via email or push notifications (if using our app). Stay in the loop so you never miss a deal.',
  },
];
