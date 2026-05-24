export default function Section({ children, variant = "light" }) {
    return (
      <section className={`section section-${variant}`}>
        <div className="section-container">
          {children}
        </div>
      </section>
    );
  }