import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-violet-100 bg-linear-to-b from-white to-violet-50/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block text-violet-950">
              <div className="text-xl font-extrabold tracking-tight">
                KV Garments
              </div>
              <div className="text-xs font-medium text-violet-500">
                Fashion essentials • Everyday premium
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-violet-700">
              Premium styles, simple checkout, and fast support. Designed for a
              modern wardrobe — clean silhouettes, comfortable fits.
            </p>

            {/* Registered Office */}
            <div className="mt-6 rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold text-violet-900">
                Registered Office
              </div>

              <div className="mt-2 text-xs text-violet-700 leading-5">
                KV ENTERPRISES GARMENTS & CATERS
                <br />
                16, Anjaneyar Koil Street
                <br />
                Pallavaram, Chennai – 600043
              </div>

              <div className="mt-3 text-xs text-violet-700">
                📞 +91 9342491462
              </div>

              <div className="mt-2 text-xs text-violet-700">
                GST: 33AAJCE5444Q1Z5
              </div>

              <div className="mt-1 text-xs text-violet-700">
                CIN: U47640TN2026PTC190322
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-violet-700">
                🔒 Secure payments
              </span>
              <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-violet-700">
                🚚 Fast shipping
              </span>
              <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-violet-700">
                ↩️ Easy returns
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {/* Shop */}
              <div>
                <h4 className="text-sm font-bold text-violet-900">Shop</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/products"
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/orders"
                    >
                      Orders
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-sm font-bold text-violet-900">Support</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/shipping"
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/returns-refunds"
                    >
                      Returns & Refunds
                    </Link>
                  </li>
                </ul>

                <div className="mt-5 rounded-xl border border-violet-200 bg-white p-3">
                  <div className="text-xs font-semibold text-violet-900">
                    Customer care
                  </div>
                  <div className="mt-1 text-xs text-violet-600">
                    support@kvgarments.com
                  </div>
                  <div className="text-xs text-violet-500">
                    Mon–Sat • 10am–6pm
                  </div>
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-bold text-violet-900">Company</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/terms-of-service"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-violet-600 hover:text-violet-900"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Free shipping", d: "Above ₹999" },
                { t: "Easy returns", d: "7 days" },
                { t: "Secure checkout", d: "UPI / Cards" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-xl border border-violet-200 bg-white p-4 text-center"
                >
                  <div className="text-sm font-semibold text-violet-900">
                    {x.t}
                  </div>
                  <div className="text-xs text-violet-600 mt-1">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-violet-100 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-violet-500">
            © {year} KV Garments. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-violet-600">
            <Link to="/privacy-policy" className="hover:text-violet-900">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:text-violet-900">
              Terms
            </Link>
            <Link to="/returns-refunds" className="hover:text-violet-900">
              Returns
            </Link>
            <Link to="/shipping" className="hover:text-violet-900">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
