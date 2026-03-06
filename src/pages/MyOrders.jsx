import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../features/auth/useAuth";
import { STORE_ID } from "../config/store";
import OrderCard from "../components/OrderCard";

function SkeletonOrder() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-violet-200 bg-white">
      <div className="border-b border-violet-200 bg-violet-50 px-5 py-4">
        <div className="h-3 w-28 rounded bg-violet-100" />
        <div className="mt-3 h-4 w-40 rounded bg-violet-100" />
      </div>
      <div className="px-5 py-4">
        <div className="h-16 rounded-xl bg-violet-100" />
        <div className="mt-3 h-16 rounded-xl bg-violet-100" />
        <div className="mt-5 h-16 rounded-xl bg-violet-100" />
      </div>
    </div>
  );
}

export default function MyOrders() {
  const { user, loading: authLoading } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    let alive = true;

    const fetchOrders = async () => {
      setLoading(true);
      setErr("");

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .eq("store_id", STORE_ID)
        .order("created_at", { ascending: false });

      if (!alive) return;

      if (error) {
        setErr(error.message || "Failed to load orders.");
        setOrders([]);
      } else {
        setOrders(data || []);
      }

      setLoading(false);
    };

    fetchOrders();
    return () => {
      alive = false;
    };
  }, [user, authLoading]);

  const stats = useMemo(() => {
    const count = orders.length;
    const totalSpent = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);
    return { count, totalSpent };
  }, [orders]);

  if (authLoading) {
    return (
      <div className="min-h-[70vh] bg-linear-to-b from-violet-50 via-purple-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="h-7 w-40 animate-pulse rounded bg-violet-100" />
          <div className="mt-6 space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonOrder key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-linear-to-b from-violet-50 via-purple-50 to-white px-4 py-10">
        <div className="w-full max-w-lg rounded-2xl border border-violet-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
            🔐
          </div>
          <h2 className="text-xl font-bold text-violet-950">
            Sign in to view orders
          </h2>
          <p className="mt-2 text-sm text-violet-700">
            Your past orders and invoices will show up here once you’re signed
            in.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/login"
              className="rounded-xl bg-violet-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              Login
            </Link>
            <Link
              to="/products"
              className="rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-950 transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-100"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-linear-to-b from-violet-50 via-purple-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-violet-950 sm:text-3xl">
              My Orders
            </h2>
            <p className="mt-1 text-sm text-violet-700">
              Track your purchases and view order details.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="rounded-2xl border border-violet-200 bg-white px-4 py-2 text-sm">
              <span className="text-violet-600">Orders:</span>{" "}
              <span className="font-semibold text-violet-950">
                {stats.count}
              </span>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-white px-4 py-2 text-sm">
              <span className="text-violet-600">Total spent:</span>{" "}
              <span className="font-semibold text-violet-950">
                ₹{stats.totalSpent.toFixed(0)}
              </span>
            </div>
          </div>
        </div>

        {err ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {err}
          </div>
        ) : null}

        {loading ? (
          <div className="mt-8 space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonOrder key={i} />
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-violet-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
              🛍️
            </div>
            <h3 className="text-lg font-semibold text-violet-950">
              You have no orders yet
            </h3>
            <p className="mt-1 text-sm text-violet-700">
              Once you place an order, it will appear here.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-xl bg-violet-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
