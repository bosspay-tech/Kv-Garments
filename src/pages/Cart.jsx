import { Link } from "react-router-dom";
import { useCartStore } from "../store/cart.store";

function formatMoney(n) {
  const num = Number(n || 0);
  return `₹${num.toFixed(0)}`;
}

export default function Cart() {
  const { items, removeItem, updateQty, total } = useCartStore();

  // Empty state
  if (!items?.length) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-linear-to-b from-violet-50 via-purple-50 to-white px-4 py-12">
        <div className="w-full max-w-lg rounded-2xl border border-violet-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
            🛒
          </div>
          <h2 className="text-xl font-bold text-violet-950">
            Your cart is empty
          </h2>
          <p className="mt-2 text-sm text-violet-700">
            Looks like you haven’t added anything yet.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-xl bg-violet-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  const totalItems = items.reduce(
    (sum, it) => sum + Number(it.quantity || 0),
    0,
  );

  return (
    <div className="min-h-[70vh] bg-linear-to-b from-violet-50 via-purple-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-violet-950 sm:text-3xl">
              Your Cart
            </h2>
            <p className="mt-1 text-sm text-violet-700">
              Review items and proceed to checkout.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="rounded-2xl border border-violet-200 bg-white px-4 py-2 text-sm">
              <span className="text-violet-600">Items:</span>{" "}
              <span className="font-semibold text-violet-950">
                {totalItems}
              </span>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-white px-4 py-2 text-sm">
              <span className="text-violet-600">Total:</span>{" "}
              <span className="font-semibold text-violet-950">
                {formatMoney(total())}
              </span>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Items */}
          <div className="space-y-4 lg:col-span-2">
            {items.map((item, i) => {
              const lineTotal =
                Number(item.price || 0) * Number(item.quantity || 0);

              return (
                <div
                  key={`${item.productId || item.title}-${item.variantSku || ""}-${i}`}
                  className="rounded-2xl border border-violet-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Left: Image placeholder + details */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-violet-100 text-violet-400">
                        Img
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-violet-950">
                          {item.title}
                        </p>

                        {item.variantLabel ? (
                          <p className="mt-1 text-xs text-violet-600">
                            {item.variantLabel}
                          </p>
                        ) : null}

                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-violet-700">
                          <span className="rounded-full bg-violet-100 px-3 py-1">
                            Price: {formatMoney(item.price)}
                          </span>
                          <span className="rounded-full bg-violet-100 px-3 py-1">
                            Line: {formatMoney(lineTotal)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: qty + remove */}
                    <div className="flex items-center justify-between gap-3 sm:justify-end">
                      <div className="flex items-center rounded-xl border border-violet-200 bg-white">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(
                              i,
                              Math.max(1, Number(item.quantity || 1) - 1),
                            )
                          }
                          className="rounded-l-xl px-3 py-2 text-sm font-semibold text-violet-950 hover:bg-violet-50"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQty(
                              i,
                              Math.max(1, Number(e.target.value || 1)),
                            )
                          }
                          className="w-16 border-x border-violet-200 px-2 py-2 text-center text-sm outline-none"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            updateQty(i, Number(item.quantity || 1) + 1)
                          }
                          className="rounded-r-xl px-3 py-2 text-sm font-semibold text-violet-950 hover:bg-violet-50"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(i)}
                        className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/products"
                className="text-sm font-semibold text-violet-950 hover:underline"
              >
                ← Continue shopping
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-violet-950">
                Order Summary
              </h3>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-violet-700">
                  <span>Items</span>
                  <span className="font-semibold text-violet-950">
                    {totalItems}
                  </span>
                </div>

                <div className="flex items-center justify-between text-violet-700">
                  <span>Subtotal</span>
                  <span className="font-semibold text-violet-950">
                    {formatMoney(total())}
                  </span>
                </div>

                <div className="flex items-center justify-between text-violet-700">
                  <span>Shipping</span>
                  <span className="text-violet-500">
                    Calculated at checkout
                  </span>
                </div>

                <div className="my-3 h-px bg-violet-200" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-violet-950">
                    Total
                  </span>
                  <span className="text-lg font-extrabold text-violet-950">
                    {formatMoney(total())}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-5 block w-full rounded-xl bg-violet-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                Checkout
              </Link>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-violet-700">
                <span className="rounded-full bg-violet-100 px-3 py-1">
                  🔒 Secure payments
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-1">
                  🚚 Fast shipping
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-1">
                  ↩️ Easy returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
