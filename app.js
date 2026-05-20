const storageKey = "async-service-kit-demo";

const defaultState = {
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

const fields = {
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
  addLead({
    name: "Sample Client",
    contact: "sample@example.com",
    date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    urgency: "This week",
    details: "Needs a quick quote and wants to confirm availability without a call.",
    serviceName: service.name,
    servicePrice: service.price
  });
});

document.querySelector("#resetDemo").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  state = structuredClone(defaultState);
  fields.businessName.value = "Aurora Studio";
  fields.businessType.value = "Beauty and wellness";
  fields.businessCity.value = "Miami";
  fields.replyWindow.value = "within 30 minutes";
  fields.paymentNote.value = "50% deposit to reserve the work, 50% after delivery. Final payment method is confirmed by the owner.";
  leadForm.reset();
  render();
});

render();
