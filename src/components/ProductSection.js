export default function ProductsSection({ products }) {
    return (
      <section style={{ padding: 24 }}>
        <h2>Products</h2>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
            >
              {p.featuredImage?.url && (
                <img
                  src={p.featuredImage.url}
                  alt={p.featuredImage.altText || p.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              )}
              <h3 style={{ marginTop: 10 }}>{p.title}</h3>
              <p style={{ opacity: 0.8 }}>
                {p.priceRange.minVariantPrice.amount}{" "}
                {p.priceRange.minVariantPrice.currencyCode}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  