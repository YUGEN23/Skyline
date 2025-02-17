document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("home");

  // Handle sticky navbar on scroll
  window.addEventListener("scroll", () => {
    const videoHeight = heroSection.offsetHeight;
    if (window.scrollY > videoHeight - 50) {
      navbar.classList.add("fixed");
      navbar.classList.remove("relative");
    } else {
      navbar.classList.remove("fixed");
      navbar.classList.add("relative");
    }
  });

  // Add specifications to the "Stats" section
  const specs = [
    { title: "Engine", description: "RB26DETT 2.6L Twin-Turbo Inline-6, legendary for tuning potential." },
    { title: "Power", description: "Over 500 HP when tuned, dominating the streets." },
    { title: "Torque", description: "289 lb-ft (392 Nm) for insane acceleration." },
    { title: "0-60 mph", description: "Under 4 seconds with the right tune." },
    { title: "Top Speed", description: "200+ mph with the right modifications." },
    { title: "Weight", description: "1,560 kg (3,439 lbs), balanced for speed & control." },
    { title: "Transmission", description: "6-speed manual for total driving control." },
    { title: "NOS System", description: "Dual-bottle nitrous setup for explosive speed boosts." }
  ];

  const specsContainer = document.getElementById("specs-container");

  specs.forEach(spec => {
    const specElement = document.createElement("div");
    specElement.classList.add("spec-detail");
    specElement.innerHTML = `
      <h3>${spec.title}</h3>
      <p>${spec.description}</p>
    `;
    specsContainer.appendChild(specElement);
  });
});
