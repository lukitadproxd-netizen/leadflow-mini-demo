const storageKey = "async-service-kit-demo";

const defaultState = {
  preset: "generic",
  selectedService: "express",
  leads: [],
  services: [
    {
      id: "express",
      name: "Fast contact page",
      price: 75,
      eta: "24h",
      text: "Mobile-ready page with service summary, inquiry form, reply draft, and CSV lead export."
    },
    {
      id: "booking",
      name: "Booking request widget",
      price: 90,
      eta: "48h",
      text: "Request flow for an existing site with package selection, preferred date, and lead handoff."
    },
    {
      id: "cleanup",
      name: "Contact flow tune-up",
      price: 60,
      eta: "24h",
      text: "Sharper CTA copy, inquiry wording, reply templates, and simple lead tracking."
    }
  ]
};

const presets = {
  generic: {
    businessName: "Aurora Studio",
    businessType: "Beauty and wellness",
    city: "Miami",
    replyWindow: "within 30 minutes",
    paymentNote: "50% deposit to reserve the work, 50% after delivery. Final payment method is confirmed by the owner.",
    selectedService: "express",
    services: defaultState.services,
    sample: "Needs a quick quote and wants to confirm availability without a call."
  },
  cleaning: {
    businessName: "FreshSpace Cleaning",
    businessType: "Residential and commercial cleaning",
    city: "Miami",
    replyWindow: "within 2 hours",
    paymentNote: "50% deposit starts the build, 50% after delivery. The owner confirms PayPal, Wise, MercadoPago, or another payment method by chat.",
    selectedService: "express",
    services: [
      {
        id: "express",
        name: "Cleaning quote page",
        price: 75,
        eta: "24h",
        text: "Service selector, property details, preferred date, access notes, and reply draft for cleaning estimates."
      },
      {
        id: "booking",
        name: "Recurring cleaning request",
        price: 90,
        eta: "48h",
        text: "Weekly/biweekly package selector with rooms, square footage, pets, supplies, and CSV lead handoff."
      },
      {
        id: "cleanup",
        name: "Cleaning CTA tune-up",
        price: 60,
        eta: "24h",
        text: "Sharper quote CTA, better request prompts, reply templates, and simple lead tracking."
      }
    ],
    sample: "Apartment deep cleaning, 2 bedrooms, needs quote for this week, has pets and parking notes."
  },
  events: {
    businessName: "BrightPop Rentals",
    businessType: "Event rentals and party packages",
    city: "Miami",
    replyWindow: "within 2 hours",
    paymentNote: "50% deposit reserves the build, 50% after delivery. Final client payment method is confirmed by chat.",
    selectedService: "booking",
    services: [
      {
        id: "express",
        name: "Event quote page",
        price: 75,
        eta: "24h",
        text: "Event type, date, guest count, venue, package request, and contact preference in one inquiry."
      },
      {
        id: "booking",
        name: "Rental booking request",
        price: 90,
        eta: "48h",
        text: "Package/add-on selector with delivery details, event timing, setup notes, and CSV lead export."
      },
      {
        id: "cleanup",
        name: "Event inquiry tune-up",
        price: 60,
        eta: "24h",
        text: "Clearer CTA, package copy, intake questions, and reply templates for faster quotes."
      }
    ],
    sample: "Birthday party on Saturday, 45 guests, needs bounce house, tables, delivery, and setup time."
  },
  detailing: {
    businessName: "Prime Mobile Detail",
    businessType: "Mobile car detailing",
    city: "Miami",
    replyWindow: "same business day",
    paymentNote: "50% deposit starts the build, 50% after delivery. Payment rail is confirmed manually by the owner.",
    selectedService: "express",
    services: [
      {
        id: "express",
        name: "Detailing quote form",
        price: 75,
        eta: "24h",
        text: "Vehicle type, service package, location, preferred date, condition notes, and contact preference."
      },
      {
        id: "booking",
        name: "Mobile service request",
        price: 90,
        eta: "48h",
        text: "Package selector with add-ons, access notes, parking details, and lead export for mobile jobs."
      },
      {
        id: "cleanup",
        name: "Detailing CTA tune-up",
        price: 60,
        eta: "24h",
        text: "Better package wording, quote prompts, reply templates, and simple lead tracker."
      }
    ],
    sample: "SUV interior detail, pet hair, mobile service at office parking lot, prefers Friday morning."
  },
  roofing: {
    businessName: "StormReady Roofing",
    businessType: "Roof repair and inspection",
    city: "Miami",
    replyWindow: "within 2 hours",
    paymentNote: "50% deposit starts the build, 50% after delivery. Payment method is confirmed by chat before work starts.",
    selectedService: "express",
    services: [
      {
        id: "express",
        name: "Roof estimate intake",
        price: 75,
        eta: "24h",
        text: "Leak type, property address area, roof material, urgency, photo notes, and contact preference."
      },
      {
        id: "booking",
        name: "Inspection request flow",
        price: 90,
        eta: "48h",
        text: "Inspection reason, access windows, storm damage notes, preferred date, and lead export."
      },
      {
        id: "cleanup",
        name: "Roofing CTA tune-up",
        price: 60,
        eta: "24h",
        text: "Sharper emergency/estimate prompts, service copy, reply templates, and tracking sheet."
      }
    ],
    sample: "Possible leak after rain, tile roof, wants inspection this week, can send photos by email."
  },
  pool: {
    businessName: "ClearPool Care",
    businessType: "Pool cleaning and repair",
    city: "Miami",
    replyWindow: "same business day",
    paymentNote: "50% deposit starts the build, 50% after delivery. Final payment method is confirmed by the owner.",
    selectedService: "express",
    services: [
      {
        id: "express",
        name: "Pool service quote",
        price: 75,
        eta: "24h",
        text: "Service type, pool size, neighborhood, issue details, preferred schedule, and reply draft."
      },
      {
        id: "booking",
        name: "Maintenance request flow",
        price: 90,
        eta: "48h",
        text: "Weekly service selector with water condition, equipment notes, repair flags, and lead export."
      },
      {
        id: "cleanup",
        name: "Pool CTA tune-up",
        price: 60,
        eta: "24h",
        text: "Quote CTA copy, clearer service prompts, reply templates, and simple lead tracker."
      }
    ],
    sample: "Weekly pool cleaning quote, medium pool, cloudy water, wants service to start next week."
  },
  handyman: {
    businessName: "FixRight Handyman",
    businessType: "Home repair and maintenance",
    city: "Miami",
    replyWindow: "same business day",
    paymentNote: "50% deposit starts the build, 50% after delivery. Payment method is confirmed manually before work starts.",
    selectedService: "express",
    services: [
      {
        id: "express",
        name: "Job request page",
        price: 75,
        eta: "24h",
        text: "Repair type, photos/notes, address area, urgency, preferred date, and contact preference."
      },
      {
        id: "booking",
        name: "Multi-job intake flow",
        price: 90,
        eta: "48h",
        text: "Task checklist, materials notes, access windows, urgency, and CSV lead export."
      },
      {
        id: "cleanup",
        name: "Handyman CTA tune-up",
        price: 60,
        eta: "24h",
        text: "Clearer quote prompts, service CTA copy, reply templates, and simple lead tracking."
      }
    ],
    sample: "Needs drywall patch, faucet replacement, and door adjustment, wants estimate before weekend."
  }
};

const fields = {
  demoPreset: document.querySelector("#demoPreset"),
  businessName: document.querySelector("#businessName"),
  businessType: document.querySelector("#businessType"),
  businessCity: document.querySelector("#businessCity"),
  replyWindow: document.querySelector("#replyWindow"),
  paymentNote: document.querySelector("#paymentNote"),
  clientName: document.querySelector("#clientName"),
  clientContact: document.querySelector("#clientContact"),
  preferredDate: document.querySelector("#preferredDate"),
  urgency: document.querySelector("#urgency"),
  requestDetails: document.querySelector("#requestDetails")
};

const serviceList = document.querySelector("#serviceList");
const leadList = document.querySelector("#leadList");
const leadCount = document.querySelector("#leadCount");
const replyPreview = document.querySelector("#replyPreview");
const leadForm = document.querySelector("#leadForm");

let state = loadState();
const urlPreset = new URLSearchParams(window.location.search).get("preset");

if (urlPreset && presets[urlPreset]) {
  state.preset = urlPreset;
  state.selectedService = presets[urlPreset].selectedService;
  state.services = structuredClone(presets[urlPreset].services);
  saveState();
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(defaultState);

  try {
    return { ...structuredClone(defaultState), ...JSON.parse(saved) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function setBusinessFields(preset) {
  fields.demoPreset.value = preset;
  fields.businessName.value = presets[preset].businessName;
  fields.businessType.value = presets[preset].businessType;
  fields.businessCity.value = presets[preset].city;
  fields.replyWindow.value = presets[preset].replyWindow;
  fields.paymentNote.value = presets[preset].paymentNote;
}

function applyPreset(preset) {
  const selected = presets[preset] ? preset : "generic";
  state.preset = selected;
  state.selectedService = presets[selected].selectedService;
  state.services = structuredClone(presets[selected].services);
  setBusinessFields(selected);
  saveState();
  render();
}

function getSelectedService() {
  return state.services.find((service) => service.id === state.selectedService) || state.services[0];
}

function renderServices() {
  serviceList.innerHTML = "";

  state.services.forEach((service) => {
    const item = document.createElement("article");
    item.className = `service-item ${service.id === state.selectedService ? "active" : ""}`;
    item.innerHTML = `
      <div class="service-head">
        <h2 class="service-title">${service.name}</h2>
        <span class="service-price">$${service.price}</span>
      </div>
      <p class="service-text">${service.text}</p>
      <p class="service-text"><span class="tag">${service.eta}</span></p>
      <button class="select-button" type="button">${service.id === state.selectedService ? "Selected" : "Select"}</button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      state.selectedService = service.id;
      saveState();
      render();
    });

    serviceList.appendChild(item);
  });
}

function buildReply() {
  const service = getSelectedService();
  const name = fields.clientName.value.trim() || "there";
  const details = fields.requestDetails.value.trim() || "your request";
  const date = fields.preferredDate.value || "your preferred date";

  return `Hi ${name}, thanks for contacting ${fields.businessName.value}.

We can help with ${details}.

Best-fit option:
${service.name} - $${service.price}, delivery ${service.eta}

Preferred date noted: ${date}
We usually reply ${fields.replyWindow.value}.

${fields.paymentNote.value}

If this works, please confirm the best contact method and any final details by chat. No call is needed.`;
}

function renderLeads() {
  leadCount.textContent = String(state.leads.length);
  leadList.innerHTML = "";

  if (state.leads.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No saved leads yet. Add one from the form or load a sample lead.";
    leadList.appendChild(empty);
    return;
  }

  state.leads.slice().reverse().forEach((lead) => {
    const item = document.createElement("article");
    item.className = "lead-item";
    item.innerHTML = `
      <div class="lead-head">
        <h3 class="lead-name">${lead.name}</h3>
        <span class="tag">${lead.urgency}</span>
      </div>
      <p class="lead-text">${lead.contact} - ${lead.date}</p>
      <p class="lead-text">${lead.serviceName} ($${lead.servicePrice})</p>
      <p class="lead-text">${lead.details}</p>
    `;
    leadList.appendChild(item);
  });
}

function render() {
  renderServices();
  renderLeads();
  replyPreview.textContent = buildReply();
}

function addLead(lead) {
  state.leads.push({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...lead
  });
  saveState();
  render();
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function exportCsv() {
  const header = ["createdAt", "name", "contact", "date", "urgency", "serviceName", "servicePrice", "details"];
  const rows = state.leads.map((lead) => header.map((key) => csvEscape(lead[key])).join(","));
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "leads.csv";
  link.click();
  URL.revokeObjectURL(url);
}

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const service = getSelectedService();

  addLead({
    name: fields.clientName.value.trim(),
    contact: fields.clientContact.value.trim(),
    date: fields.preferredDate.value,
    urgency: fields.urgency.value,
    details: fields.requestDetails.value.trim(),
    serviceName: service.name,
    servicePrice: service.price
  });

  leadForm.reset();
  fields.urgency.value = "Flexible";
});

Object.values(fields).forEach((field) => {
  field.addEventListener("input", () => {
    replyPreview.textContent = buildReply();
  });
});

document.querySelector("#copyMessage").addEventListener("click", async () => {
  const message = buildReply();

  try {
    await navigator.clipboard.writeText(message);
  } catch {
    const area = document.createElement("textarea");
    area.value = message;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
});

document.querySelector("#exportCsv").addEventListener("click", exportCsv);

document.querySelector("#addLeadSample").addEventListener("click", () => {
  const service = getSelectedService();
  const preset = presets[state.preset] || presets.generic;
  addLead({
    name: "Sample Client",
    contact: "sample@example.com",
    date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    urgency: "This week",
    details: preset.sample,
    serviceName: service.name,
    servicePrice: service.price
  });
});

document.querySelector("#resetDemo").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  state = structuredClone(defaultState);
  setBusinessFields("generic");
  leadForm.reset();
  render();
});

fields.demoPreset.addEventListener("change", () => {
  applyPreset(fields.demoPreset.value);
});

setBusinessFields(state.preset || "generic");
render();
