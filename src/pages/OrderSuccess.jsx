import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-linear-to-b from-violet-50 via-purple-50 to-white px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="rounded-2xl border border-violet-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
            <span className="text-2xl">✅</span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-violet-950">
            Order placed successfully
          </h2>

          <p className="mt-2 text-sm text-violet-700">
            Thank you for shopping with us. We’re getting your order ready and
            will update you soon.
          </p>

          <div className="my-6 h-px w-full bg-violet-200" />

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/products"
              className="rounded-xl bg-violet-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              Continue shopping
            </Link>

            <Link
              to="/orders"
              className="rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-950 transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-100"
            >
              View my orders
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-violet-700">
            <span className="rounded-full bg-violet-100 px-3 py-1">
              📦 Packed soon
            </span>
            <span className="rounded-full bg-violet-100 px-3 py-1">
              🚚 Fast delivery
            </span>
            <span className="rounded-full bg-violet-100 px-3 py-1">
              🔒 Secure payments
            </span>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-violet-600">
          Need help? Visit{" "}
          <Link
            to="/help"
            className="font-semibold text-violet-950 hover:underline"
          >
            Help Center
          </Link>
        </p>
      </div>
    </div>
  );
}
