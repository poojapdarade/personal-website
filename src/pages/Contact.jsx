import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import "./Contact.css";

export function Contact() {
  const [status, setStatus] = useState(null);

  function submitForm(event) {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: event.target.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        setStatus("error");
      });
  }

  return (
    <PageLayout>
      <div className="contact-layout">
        <div className="get-in-touch">
          <h1>Get In Touch</h1>
          <p>
            Have a question or want to work together? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>
        </div>
        <form
          className="contact-me"
          onSubmit={submitForm}
          action="https://formspree.io/f/xdknnazl"
          method="POST"
        >
          <div className="fullName">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div className="Message">
            <label>Message</label>
            <input type="text" name="message" />
          </div>
          {status === "success" ? (
            <p>Thank you for submitting</p>
          ) : (
            <button
              className="submit"
              type="submit"
              disabled={status === "submitting"}
            >
              Send Message
            </button>
          )}
          {status === "error" && <p>Please try again</p>}
        </form>
      </div>
    </PageLayout>
  );
}
