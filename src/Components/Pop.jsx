import React, { useEffect, useState } from "react";

export default function BrandAvatarForm({ show, onClose }) {
  const endpointPath = "/brand-avatar/index.php";
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    phone: "",
    eventType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (show) {
      fetch(endpointPath)
        .then((response) => response.json())
        .then((data) => {
          setMsg(data.message);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.brand.trim() ||
      !formData.eventType.trim()
    ) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setSubmitError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const apiUrl = import.meta.env.VITE_FORM_API_URL || endpointPath;
    const payload = new URLSearchParams({
      name: formData.name,
      brand: formData.brand,
      phone: formData.phone,
      eventType: formData.eventType,
    });

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();

      if (data?.status !== "success") {
        throw new Error(data?.message || "Unexpected response from server");
      }

      setFormData({
        name: "",
        brand: "",
        phone: "",
        eventType: "",
      });

      if (data?.redirect) {
        window.location.href = data.redirect;
        return;
      }

      onClose();
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitError("Unable to submit the form right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6">
      <div className="relative w-full max-w-[560px]">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-xl font-bold text-black shadow-lg transition hover:scale-105"
        >
          x
        </button>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] p-8 md:p-10"
        >
          <h2 className="hidden">Brand Avatar event enquiry form</h2>

          <div className="mb-4 text-center">
            <span className="mb-4 inline-block rounded bg-[#f0e000] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#111]">
              Planning an event?
            </span>

            <p className="text-[22px] font-medium leading-snug text-white">
              Tell us about it. We'll take it from here.
            </p>

            {msg ? (
              <p className="mt-2 text-sm text-gray-400">{msg}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.06em] text-gray-400">
              Your name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="E.g. Arjun Mehta"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#333] bg-[#111] px-4 py-3 text-[15px] text-white outline-none placeholder:text-gray-600 focus:border-violet-600"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.06em] text-gray-400">
              Brand / company name
            </label>

            <input
              type="text"
              name="brand"
              required
              placeholder="E.g. Nexus Corp"
              value={formData.brand}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#333] bg-[#111] px-4 py-3 text-[15px] text-white outline-none placeholder:text-gray-600 focus:border-violet-600"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.06em] text-gray-400">
              WhatsApp number
            </label>

            <input
              type="tel"
              name="phone"
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Enter 10-digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#333] bg-[#111] px-4 py-3 text-[15px] text-white outline-none placeholder:text-gray-600 focus:border-violet-600"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.06em] text-gray-400">
              What are you planning?
            </label>

            <select
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="w-full cursor-pointer rounded-lg border border-[#333] bg-[#111] px-4 py-3 text-[15px] text-white outline-none focus:border-violet-600"
            >
              <option value="">Select event type</option>
              <option value="Product launch">Product launch</option>
              <option value="Real estate launch">Real estate launch</option>
              <option value="Trade show / expo">Trade show / expo</option>
              <option value="Award night / brand IP event">
                Award night / brand IP event
              </option>
              <option value="Corporate conference">
                Corporate conference
              </option>
              <option value="Not sure yet">Not sure yet - let's talk</option>
            </select>
          </div>

          <hr className="my-5 border-t border-[#2a2a2a]" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#f0e000] py-3.5 text-[15px] font-medium uppercase tracking-[0.05em] text-[#111] transition hover:bg-yellow-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Book My Strategy Call ->"}
          </button>

          {submitError ? (
            <p className="mt-3 text-center text-sm text-red-400">
              {submitError}
            </p>
          ) : null}

          <p className="mt-4 text-center text-xs text-gray-600">
            No spam. No pressure. Just a conversation about your next event.
          </p>
        </form>
      </div>
    </div>
  );
}
