(() => {
  const defaultData = window.LA_VARIANTE_DEFAULT_DATA;
  const data = structuredClone(defaultData);

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function get(path) {
    return path.split(".").reduce((acc, part) => acc?.[part], data) ?? "";
  }

  function setThemeVars() {
    document.documentElement.style.setProperty("--accent", data.colors?.accent || "#b7ff3c");
    document.documentElement.style.setProperty("--secondary", data.colors?.secondary || "#7a5cff");
    document.documentElement.style.setProperty("--hot", data.colors?.hot || "#ff3d8b");
  }

  function bindText() {
    $$('[data-bind]').forEach((node) => {
      node.textContent = get(node.dataset.bind);
    });
    document.title = `${data.band.name} · EPK WebApp`;
    const mailLink = $("#mailLink");
    const phoneLink = $("#phoneLink");
    if (mailLink) mailLink.href = `mailto:${data.band.contactEmail}?subject=Booking ${encodeURIComponent(data.band.name)}`;
    if (phoneLink) phoneLink.href = `https://wa.me/${String(data.band.contactPhone || "").replace(/\D/g, "")}`;
  }

  function renderStats() {
    const container = $("#heroStats");
    container.innerHTML = data.heroStats.map(stat => `
      <div class="stat"><span>${escapeHtml(stat.label)}</span><strong>${escapeHtml(stat.value)}</strong></div>
    `).join("");
  }

  function renderIdentity() {
    $("#identityCards").innerHTML = data.identity.map(item => `
      <article class="card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }

  function renderMembers() {
    $("#membersGrid").innerHTML = data.members.map(member => `
      <article class="card">
        <span class="icon">${escapeHtml(member.icon || "🎵")}</span>
        <h3>${escapeHtml(member.name)}</h3>
        <div class="role">${escapeHtml(member.role)}</div>
        <p>${escapeHtml(member.bio)}</p>
      </article>
    `).join("");
  }

  function renderEnergyFilter() {
    const select = $("#energyFilter");
    const current = select.value;
    const energies = [...new Set(data.songs.map(song => song.energy).filter(Boolean))];
    select.innerHTML = '<option value="">Todas las energías</option>' + energies.map(energy => `<option value="${escapeAttr(energy)}">${escapeHtml(energy)}</option>`).join("");
    select.value = current;
  }

  function renderSongs() {
    const search = $("#songSearch")?.value?.trim().toLowerCase() || "";
    const energy = $("#energyFilter")?.value || "";
    const songs = data.songs.filter(song => {
      const haystack = [song.title, song.status, song.energy, song.theme, song.mood, song.description, ...(song.tags || [])].join(" ").toLowerCase();
      return (!search || haystack.includes(search)) && (!energy || song.energy === energy);
    });

    $("#songGrid").innerHTML = songs.length ? songs.map(song => `
      <article class="song-card">
        <div class="song-top">
          <div>
            <h3>${escapeHtml(song.title)}</h3>
            <span class="muted">${escapeHtml(song.duration)} · ${escapeHtml(song.mood)}</span>
          </div>
          <span class="badge">${escapeHtml(song.status)}</span>
        </div>
        <div class="song-meta">
          <span>⚡ ${escapeHtml(song.energy)}</span>
          <span>🎭 ${escapeHtml(song.theme)}</span>
        </div>
        <p>${escapeHtml(song.description)}</p>
        <div class="tags">${(song.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      </article>
    `).join("") : `<p class="muted">No hay canciones con ese filtro. Dramático, pero corregible.</p>`;
  }

  function renderFormats() {
    $("#showFormats").innerHTML = data.showFormats.map(format => `
      <article class="timeline-item">
        <div class="timeline-num"></div>
        <div class="timeline-content">
          <h3>${escapeHtml(format.name)} · ${escapeHtml(format.duration)}</h3>
          <p><strong>Ideal para:</strong> ${escapeHtml(format.idealFor)}</p>
          <p>${escapeHtml(format.includes)}</p>
        </div>
      </article>
    `).join("");
  }

  function renderRider() {
    const rider = data.technicalRider;
    $("#riderSummary").textContent = rider.summary;
    $("#stageSize").textContent = rider.stageSize;
    $("#powerReq").textContent = rider.power;
    $("#arrivalReq").textContent = rider.arrival;
    $("#monitorsList").innerHTML = rider.monitors.map(item => `<li>${escapeHtml(item)}</li>`).join("");
    $("#backlineList").innerHTML = rider.backline.map(item => `<li>${escapeHtml(item)}</li>`).join("");
    renderInputTable();
  }

  function renderInputTable() {
    const query = $("#inputSearch")?.value?.trim().toLowerCase() || "";
    const rows = data.technicalRider.inputList.filter(input => {
      return Object.values(input).join(" ").toLowerCase().includes(query);
    });
    $("#inputTable").innerHTML = rows.map(input => `
      <tr>
        <td>${escapeHtml(input.ch)}</td>
        <td>${escapeHtml(input.source)}</td>
        <td>${escapeHtml(input.mic)}</td>
        <td>${escapeHtml(input.stand)}</td>
        <td>${escapeHtml(input.notes)}</td>
      </tr>
    `).join("");
  }

  function renderFaqs() {
    $("#faqList").innerHTML = data.faqs.map((faq, index) => `
      <article class="faq-item ${index === 0 ? "open" : ""}">
        <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
          ${escapeHtml(faq.q)} <span>+</span>
        </button>
        <div>${escapeHtml(faq.a)}</div>
      </article>
    `).join("");

    $$(".faq-item button").forEach(button => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function renderAll() {
    setThemeVars();
    bindText();
    renderStats();
    renderIdentity();
    renderMembers();
    renderEnergyFilter();
    renderSongs();
    renderFormats();
    renderRider();
    renderFaqs();
  }

  function getBioText() {
    return `${data.band.name} es una banda de ${data.band.city} con una propuesta de ${data.band.genre}. ${data.band.shortPitch} Su show se adapta a formato completo, estándar o acústico, con una identidad sonora ${data.band.mood.toLowerCase()}. Contacto: ${data.band.contactEmail} / ${data.band.contactPhone}.`;
  }

  function getTechText() {
    const rider = data.technicalRider;
    return `${data.band.name} · Rider técnico base\nEscenario: ${rider.stageSize}\nEnergía: ${rider.power}\nPrueba de sonido: ${rider.arrival}\nMonitores: ${rider.monitors.join("; ")}\nBackline: ${rider.backline.join("; ")}\nContacto: ${data.band.contactEmail} / ${data.band.contactPhone}`;
  }

  function getBookingText() {
    return `${data.booking.emailTemplate}\n\n${getBioText()}\n\n${getTechText()}`;
  }

  async function copyText(text, success = "Copiado") {
    try {
      await navigator.clipboard.writeText(text);
      showToast(success);
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast(success);
    }
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }

  function attachEvents() {
    const navToggle = $(".nav-toggle");
    const nav = $(".nav");
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    $$(".nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

    $("#songSearch").addEventListener("input", renderSongs);
    $("#energyFilter").addEventListener("change", renderSongs);
    $("#inputSearch").addEventListener("input", renderInputTable);

    document.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]")?.dataset.action;
      if (!action) return;
      const actions = {
        "print-epk": () => window.print(),
        "print-rider": () => window.print(),
        "copy-rider": () => copyText(getTechText(), "Rider copiado"),
        "copy-tech": () => copyText(getTechText(), "Rider base copiado"),
        "copy-bio": () => copyText(getBioText(), "Bio copiada"),
        "copy-booking": () => copyText(getBookingText(), "Pitch copiado")
      };
      actions[action]?.();
    });
  }

  attachEvents();
  renderAll();
})();
