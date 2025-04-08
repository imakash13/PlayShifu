import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#eb1c50] text-white pt-10">
      <div className="flex gap-20 w-48 mb-4">
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F2m-plus.webp&w=1920&q=75"
          alt="footer-image-1"
          className="ml-97"
        />
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F35-plus-countries.webp&w=1920&q=75"
          alt="footer-image-2"
        />
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F20-plus-educational-toys.webp&w=1920&q=75"
          alt="footer-image-3"
        />
      </div>
      {/* Info Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        <div className="flex items-center gap-3 text-white-400 text-xl font-semibold">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2Ffree-shipping.webp&w=1920&q=75"
            alt="" className="w-10"
          />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-3 text-white-400 text-xl font-semibold">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F30-day-return.webp&w=1920&q=75"
            alt="" className="w-10"
          />
          <span>30 Days Return</span>
        </div>
        <div className="flex items-center gap-3 text-white-400 text-xl font-semibold">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F6-months-warranty.webp&w=1920&q=75"
            alt="" className="w-10"
          />
          <span>6 Months Warranty</span>
        </div>
        <div className="flex items-center gap-3 text-white-400 text-xl font-semibold">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2Fsecure-checkout.webp&w=1920&q=75"
            alt="" className="w-10"
          />
          <span>Secure Checkout</span>
        </div>
      </div>

      <hr className="my-6 border-t border-white/30" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4 pb-8 text-sm">
        {/* WhatsApp Subscription */}
        <div>
          <p className="mb-2">
            Get notified of new launches, product updates, contests, and more
            exciting news!
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-md">
            Join our WhatsApp Community
          </button>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-yellow-300 font-bold mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>Problem Solving Toys</li>
            <li>Stem Toys</li>
            <li>Social & Emotional Development Toys</li>
            <li>Birthday Gift Toys</li>
            <li>Super Saver Deals</li>
            <li>Best Seller Toys</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="text-yellow-300 font-bold mb-2">More</h4>
          <ul className="space-y-1">
            <li>Device Compatibility</li>
            <li>Free-E-Books</li>
            <li>Parent Hub</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-yellow-300 font-bold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/30 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-center mb-2 md:mb-0">© 2025 PlayShifu.com</div>
        <div className="flex items-center gap-4">
          <img
            src="https://img.icons8.com/ios-filled/30/null/facebook-new.png"
            alt="Facebook"
          />
          <img
            src="https://img.icons8.com/ios-filled/30/null/linkedin.png"
            alt="LinkedIn"
          />
          <img
            src="https://img.icons8.com/ios-filled/30/null/instagram-new.png"
            alt="Instagram"
          />
          <img
            src="https://img.icons8.com/ios-filled/30/null/youtube-play.png"
            alt="YouTube"
          />
        </div>
      </div>

      {/* Payment & WhatsApp */}
      <div className="flex justify-center items-center gap-4 pb-6">
        <img
          src="https://img.icons8.com/ios-filled/40/null/apple-pay.png"
          alt="Apple Pay"
        />
        <img
          src="https://img.icons8.com/ios-filled/40/null/mastercard-logo.png"
          alt="MasterCard"
        />
        <img
          src="https://img.icons8.com/ios-filled/40/null/visa.png"
          alt="Visa"
        />
        <img
          src="https://img.icons8.com/?size=100&id=vizert0k77Jn&format=png&color=000000"
          alt="Google Pay" className="w-12"
        />
        <img
          src="https://img.icons8.com/ios-filled/40/26e07f/whatsapp.png"
          alt="WhatsApp"
        />
      </div>
    </footer>
  );
};

export default Footer;
