import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormComponent() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

     // validation here
    const name = e.target["entry.2005620554"].value.trim();
    const email = e.target["emailAddress"].value.trim();
    const message = e.target["entry.839337160"].value.trim();

    if (!name || !email || !message) {
      alert("Fields cannot be empty.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email.");
      return;
    }

    if (message.length > 500) {
      alert("Message must be under 500 characters.");
      return;
    }

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
        Ready for us to take on your project? Contact us below!
      </h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="entry.2005620554"
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="emailAddress"
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="company">Company / Organization</label>
          <input
            id="company"
            type="text"
            name="entry.1065046570"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
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
 