import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HERO_BANNERS = [
  "https://luxeria.in/wp-content/uploads/2026/01/Pink-Beauty-and-Feminine-Fashion-Boutique-Discount-Promotion-Banner-scaled.png",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const COLLECTION_IMAGES = {
  bestseller:
    "https://t4.ftcdn.net/jpg/15/77/98/65/360_F_1577986576_30ZvE8e9cQINoaK3H2NFhctCxwWGJXiV.jpg",
  "new-arrival":
    "https://media.istockphoto.com/id/2007737872/vector/new-arrival-banner-template-on-the-abstract-pop-art-sunburst-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=K_Mtb8Z4qk6RpYqR2fYK6y9Aw89Ojfxu15fTCRaZhHY=",
  "value-deal":
    "https://img.freepik.com/free-vector/modern-amazing-deals-discount-offer-background-design_1017-61362.jpg",
};

export default function Landing() {
  return (
    <div className="bg-rose-50">
      {/* HERO SLIDER */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-65 w-full sm:h-90 md:h-130"
        >
          {HERO_BANNERS.map((src, idx) => (
            <SwiperSlide key={src}>
              <div className="relative h-full w-full">
                <img
                  src={src}
                  alt={`Hero banner ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />

                {/* Overlay content */}
                <div className="pointer-events-none absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="max-w-md">
                      <p className="mb-2 text-sm font-semibold tracking-wide text-white/90">
                        New season • Trending now
                      </p>

                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Elevate your everyday style
                      </h2>

                      <Link
                        to="/products"
                        className="pointer-events-auto mt-6 inline-flex items-center justify-center rounded-xl bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-500/40"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-rose-900/40 to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-rose-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
          <TrustItem
            title="Fast delivery"
            desc="Quick and reliable shipping."
            icon="🚚"
          />
          <TrustItem
            title="Secure payments"
            desc="100% safe checkout."
            icon="🔒"
          />
          <TrustItem
            title="Easy returns"
            desc="Hassle-free returns."
            icon="↩️"
          />
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="bg-linear-to-b from-rose-50 via-pink-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-rose-950 sm:text-3xl">
                Featured collections
              </h2>
              <p className="mt-1 text-sm text-rose-700">
                Curated styles for every mood.
              </p>
            </div>

            <Link
              to="/products"
              className="text-sm font-semibold text-rose-700 hover:text-rose-900 hover:underline"
            >
              View all products →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <CollectionCard
              title="Best Sellers"
              desc="Most loved styles"
              tag="bestseller"
              badge="Popular"
              imageUrl={COLLECTION_IMAGES.bestseller}
            />
            <CollectionCard
              title="New Arrivals"
              desc="Fresh fashion drops"
              tag="new-arrival"
              badge="New"
              imageUrl={COLLECTION_IMAGES["new-arrival"]}
            />
            <CollectionCard
              title="Value Deals"
              desc="Style at the best price"
              tag="value-deal"
              badge="Save"
              imageUrl={COLLECTION_IMAGES["value-deal"]}
            />
          </div>
        </div>
      </section>

      {/* LUXE HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-rose-950 via-rose-900 to-rose-950 text-white">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-white">
              ✨ New styles weekly
            </span>

            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Fashion that defines you.
            </h1>

            <p className="mt-4 max-w-xl text-base text-white/75">
              Premium designs, modern fits, and effortless shopping.
            </p>

            <div className="mt-7">
              <Link
                to="/products"
                className="inline-flex rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-400 focus:ring-4 focus:ring-pink-500/30"
              >
                Shop now
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewCard title="Best Sellers" subtitle="Top picks" />
            <PreviewCard title="New Arrivals" subtitle="Just dropped" />
            <PreviewCard title="Premium Quality" subtitle="Handpicked" />
            <PreviewCard title="Fast Delivery" subtitle="Quick dispatch" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6">
          <div className="rounded-2xl border border-rose-200 bg-rose-950 px-6 py-10 text-white sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Ready to refresh your style?
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Explore our latest collections now.
                </p>
              </div>

              <Link
                to="/products"
                className="rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-400"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function PreviewCard({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-white/70">{subtitle}</p>
    </div>
  );
}

function TrustItem({ title, desc, icon }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-rose-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100">
        <span>{icon}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-rose-950">{title}</p>
        <p className="mt-1 text-sm text-rose-700">{desc}</p>
      </div>
    </div>
  );
}

function CollectionCard({ title, desc, tag, badge, imageUrl }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-rose-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-rose-900/30 to-rose-900/40" />

        <span className="absolute left-4 top-4 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      </div>

      <div className="p-5">
        <p className="font-semibold text-rose-950">{title}</p>
        <p className="mt-1 text-sm text-rose-700">{desc}</p>

        <Link
          to={`/products/?category=${tag}`}
          className="mt-4 inline-flex text-sm font-semibold text-rose-700 hover:text-rose-900 hover:underline"
        >
          Shop collection →
        </Link>
      </div>
    </div>
  );
}
