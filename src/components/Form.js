import * as React from 'react';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export function FormComponent(props) {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        emailjs.sendForm(
            'service_v2z2ezq',
            'template_m0u904m',
            form.current,
            {
                publicKey: 'OVBPyEMHCDEfZiFuo',
            }
        ).then(
            () => {
                e.target.reset();
                setSuccessMessage("Your message was sent successfully.");
                setLoading(false);
            },
            (error) => {
                console.log('FAILED...', error.text);
                setErrorMessage("Something went wrong. Please try again.");
                setLoading(false);
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input
                placeholder="Name"
                style={{
                    ...textBoxFormatting,
                    width: "100%"
                }}
                disabled={loading}
                name="from_name"
            />

            <input
                placeholder="Email"
                style={{
                    ...textBoxFormatting,
                    width: "100%"
                }}
                disabled={loading}
                name="reply_to"
            />

            <input
                placeholder="Business (Optional)"
                style={{
                    ...textBoxFormatting,
                    width: "100%",
                }}
                disabled={loading}
                name="user_business"
            />

            <textarea
                placeholder="Message"
                style={{
                    ...textBoxFormatting,
                    width: "100%",
                    height: "150px",
                    resize: "none",
                    textIndent: "10px"
                }}
                name="message"
                disabled={loading}
            />

            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: ".5rem",
                    border: "0px",
                    background: "#dff0d8",
                    fontSize: "1.4rem",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 300,
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                }}
                disabled={loading}
                className="contact-button"
                aria-busy={loading}
            >
                {loading ? "Sending..." : "Send"}
            </button>

            {loading && (
                <div
                    role="status"
                    aria-live="polite"
                    style={{ color: "#3E3E3E", marginTop: "1rem" }}
                >
                    Sending your message...
                </div>
            )}

            {successMessage && (
                <div
                    role="status"
                    aria-live="polite"
                    style={{ color: "green", marginTop: "1rem" }}
                >
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div
                    role="alert"
                    style={{ color: "red", marginTop: "1rem" }}
                >
                    {errorMessage}
                </div>
            )}

            <div style={{ color: "#3E3E3E", marginTop: "1.2rem" }}>
                Or contact us by email at northseattle.appdev@gmail.com or through our phone number at []
            </div>
        </form>
    );
}

const textBoxFormatting = {
    fontSize: "1.1rem",
    fontFamily: '"Inter", sans-serif',
    border: "#004da8 solid 2px",
    marginBottom: "1rem",
    padding: ".5rem",
    fontWeight: 300,
};