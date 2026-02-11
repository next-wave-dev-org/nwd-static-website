import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormComponent() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSc6TcZviCuDGUOS0Nm4geU5rDJnDxlghpY4VMyPbFmZRU3-mg/formResponse";

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        });
      }

      navigate("/contact-thank-you");
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <>
      <h2 style={{ marginBottom: "1rem" }}>
        Ready to work on a project with us? Contact us below!
      </h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <input
            type="text"
            name="entry.2005620554"
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            type="email"
            name="emailAddress"
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Company / Organization</label>
          <input
            type="text"
            name="entry.1065046570"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Message</label>
          <textarea
            name="entry.839337160"
            required
            rows={5}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
