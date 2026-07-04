// ==========================================
// FUNNEL STATE & CONFIG
// ==========================================
let activeFlow = "quiz"; // "quiz" or "showroom"
let quizStep = 1;
let showroomStep = 1;
const TOTAL_STEPS = 4;

const SHOWROOM_ADDRESSES = {
    "Delhi NCR Showroom": "Shop No. G-12, Ground Floor, DLF Midtown Plaza, Shivaji Marg, Moti Nagar, New Delhi - 110015",
    "Moradabad Showroom": "Plot 4B, Ground Floor, Civil Lines, Near Town Hall, Moradabad, Uttar Pradesh - 244001"
};

const quizData = {
    recipient: "My Partner",
    occasion: "Anniversary",
    metal: "18K Gold",
    category: "Rings",
    stone: "Certified Diamonds",
    budget: "₹5,000 - ₹20,000",
    fullName: "",
    phone: "",
    email: ""
};

const showroomData = {
    showroom: "Delhi NCR Showroom",
    consultType: "Bridal Consultation",
    date: "",
    slot: "Morning (11 AM - 1 PM)",
    focus: "Necklaces",
    fullName: "",
    phone: "",
    email: ""
};

const STEPPER_CONFIG = {
    quiz: {
        labels: ["Recipient", "Preferences", "Budget", "Curation"],
        icons: ["1", "2", "3", "4"]
    },
    showroom: {
        labels: ["Location", "Schedule", "Focus", "Confirm"],
        icons: ["1", "2", "3", "4"]
    }
};

// ==========================================
// DYNAMIC PRODUCT DATABASE CATALOG
// ==========================================
const PRODUCTS_CATALOG = [
    // Tier 1: Under ₹5,000
    {
        name: "Diavo 925 Sterling Silver Infinite Love Pendant",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
        metal: "925 Sterling Silver",
        budget: "Under ₹5,000",
        link: "https://diavojewels.com/collections/silver-pendants"
    },
    {
        name: "Diavo Sterling Silver Petite CZ Eternity Ring",
        price: "₹2,899",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
        metal: "925 Sterling Silver",
        budget: "Under ₹5,000",
        link: "https://diavojewels.com/collections/silver-rings"
    },
    // Tier 2: ₹5,000 - ₹20,000
    {
        name: "Diavo 14K Rose Gold Heartbeat Bracelet",
        price: "₹18,500",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80",
        metal: "14K Rose Gold",
        budget: "₹5,000 - ₹20,000",
        link: "https://diavojewels.com/collections/gold-bracelets"
    },
    {
        name: "Diavo 18K Yellow Gold Classic Band",
        price: "₹19,200",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80",
        metal: "18K Gold",
        budget: "₹5,000 - ₹20,000",
        link: "https://diavojewels.com/collections/gold-bands"
    },
    // Tier 3: ₹20,000 - ₹50,000
    {
        name: "Diavo 18K Yellow Gold Cluster Diamond Studs",
        price: "₹42,000",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=400&q=80",
        metal: "18K Gold",
        budget: "₹20,000 - ₹50,000",
        link: "https://diavojewels.com/collections/gold-earrings"
    },
    {
        name: "Diavo 14K Rose Gold Diamond Halo Ring",
        price: "₹38,900",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
        metal: "14K Rose Gold",
        budget: "₹20,000 - ₹50,000",
        link: "https://diavojewels.com/collections/gold-rings"
    },
    // Tier 4: ₹50,000+
    {
        name: "Diavo Platinum Solitaire Diamond Ring (0.7 Carat)",
        price: "₹1,25,000",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
        metal: "Platinum",
        budget: "₹5,000+",
        link: "https://diavojewels.com/collections/platinum-solitaires"
    },
    {
        name: "Diavo 18K Gold Majestic Diamond Choker Set",
        price: "₹3,40,000",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
        metal: "18K Gold",
        budget: "₹50,000+",
        link: "https://diavojewels.com/collections/diamond-chokers"
    }
];

// ==========================================
// DOM ELEMENTS
// ==========================================
const flowQuizBtn = document.getElementById("flow-quiz-btn");
const flowShowroomBtn = document.getElementById("flow-showroom-btn");
const quizSections = document.querySelector(".quiz-flow-sections");
const showroomSections = document.querySelector(".showroom-flow-sections");

const progressFill = document.getElementById("progress-fill");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const funnelActionsRow = document.getElementById("funnel-actions-row");

// Stepper nodes
const stepCircles = [
    document.getElementById("step-circle-1"),
    document.getElementById("step-circle-2"),
    document.getElementById("step-circle-3"),
    document.getElementById("step-circle-4")
];
const stepLabels = [
    document.getElementById("step-label-1"),
    document.getElementById("step-label-2"),
    document.getElementById("step-label-3"),
    document.getElementById("step-label-4")
];

// Quiz Inputs
const qChoiceCards = document.querySelectorAll(".quiz-flow-sections .choice-card[data-value]");
const qCategorySelect = document.getElementById("category-type");
const qStoneSelect = document.getElementById("stone-type");
const qBudgetCards = document.querySelectorAll(".budget-card[data-budget]");
const qNameInput = document.getElementById("fullName");
const qPhoneInput = document.getElementById("phoneNumber");
const qEmailInput = document.getElementById("email");

// Showroom Inputs
const sShowroomCards = document.querySelectorAll(".showroom-flow-sections .budget-card[data-showroom]");
const sConsultSelect = document.getElementById("consult-type");
const sDateInput = document.getElementById("showroom-date");
const sSlotCards = document.querySelectorAll(".showroom-flow-sections .choice-card[data-type='slot']");
const sFocusCards = document.querySelectorAll(".showroom-flow-sections .choice-card[data-type='focus']");
const sNameInput = document.getElementById("showroom-name");
const sPhoneInput = document.getElementById("showroom-phone");
const sEmailInput = document.getElementById("showroom-email");

// Summary & Success Screens
const summaryRec = document.getElementById("summary-rec");
const summaryOcc = document.getElementById("summary-occ");
const summaryMetal = document.getElementById("summary-metal");
const summaryStone = document.getElementById("summary-stone");
const summaryBudget = document.getElementById("summary-budget");
const successClientName = document.getElementById("success-client-name");
const curatedProductsGrid = document.getElementById("curated-products-grid");
const qSuccessScreen = document.getElementById("q-success-screen");

const summarySLoc = document.getElementById("summary-s-loc");
const summarySType = document.getElementById("summary-s-type");
const summarySDate = document.getElementById("summary-s-date");
const summarySSlot = document.getElementById("summary-s-slot");
const successGuestName = document.getElementById("success-guest-name");
const successShowroomName = document.getElementById("success-showroom-name");
const successShowroomAddress = document.getElementById("success-showroom-address");
const sSuccessScreen = document.getElementById("s-success-screen");

// ==========================================
// INITIAL SETUP
// ==========================================
function init() {
    // 1. Showroom minimum date restriction (tomorrow onwards)
    const today = new Date();
    today.setDate(today.getDate() + 1);
    sDateInput.min = today.toISOString().split("T")[0];
    sDateInput.value = today.toISOString().split("T")[0];

    // 2. Choice Cards (Recipient, Occasion, Metal)
    qChoiceCards.forEach(card => {
        card.addEventListener("click", () => {
            const type = card.getAttribute("data-type");
            const value = card.getAttribute("data-value");
            
            // Remove active from siblings of the same card type
            document.querySelectorAll(`.quiz-flow-sections .choice-card[data-type='${type}']`).forEach(c => {
                c.classList.remove("active");
            });
            card.classList.add("active");
            quizData[type] = value;
        });
    });

    // 3. Quiz Budget selection
    qBudgetCards.forEach(card => {
        card.addEventListener("click", () => {
            qBudgetCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            quizData.budget = card.getAttribute("data-budget");
        });
    });

    // 4. Showroom selections
    sShowroomCards.forEach(card => {
        card.addEventListener("click", () => {
            sShowroomCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            showroomData.showroom = card.getAttribute("data-showroom");
        });
    });

    sSlotCards.forEach(card => {
        card.addEventListener("click", () => {
            sSlotCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            showroomData.slot = card.getAttribute("data-value");
        });
    });

    sFocusCards.forEach(card => {
        card.addEventListener("click", () => {
            sFocusCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            showroomData.focus = card.getAttribute("data-value");
        });
    });

    // 5. Flow switches
    flowQuizBtn.addEventListener("click", () => switchFlow("quiz"));
    flowShowroomBtn.addEventListener("click", () => switchFlow("showroom"));

    // 6. Resets
    document.querySelectorAll(".reset-flow-btn").forEach(btn => {
        btn.addEventListener("click", resetFunnel);
    });

    // 7. Clipboard Copy
    const copyBtn = document.getElementById("copy-coupon-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText("DIAVO10").then(() => {
                copyBtn.innerHTML = `<i class="ph-bold ph-check"></i> Copied!`;
                setTimeout(() => {
                    copyBtn.innerHTML = `<i class="ph-bold ph-copy"></i> Copy Code`;
                }, 2000);
            });
        });
    }

    // 8. Clear error indicators
    setupClearErrors();
}

function setupClearErrors() {
    const fields = [qNameInput, qPhoneInput, qEmailInput, sDateInput, sNameInput, sPhoneInput, sEmailInput];
    fields.forEach(f => {
        if (f) {
            f.addEventListener("input", () => {
                f.closest(".input-group").classList.remove("invalid");
            });
        }
    });
}

// ==========================================
// SWITCHING FLOWS
// ==========================================
function switchFlow(flow) {
    if (activeFlow === flow) return;
    activeFlow = flow;

    if (flow === "quiz") {
        flowQuizBtn.classList.add("active");
        flowShowroomBtn.classList.remove("active");
        quizSections.style.display = "block";
        showroomSections.style.display = "none";
    } else {
        flowQuizBtn.classList.remove("active");
        flowShowroomBtn.classList.add("active");
        quizSections.style.display = "none";
        showroomSections.style.display = "block";
    }

    updateStepperLayout();
    updateStepUI();
}

function updateStepperLayout() {
    const config = STEPPER_CONFIG[activeFlow];
    stepCircles.forEach((circle, index) => {
        circle.textContent = config.icons[index];
    });
    stepLabels.forEach((label, index) => {
        label.textContent = config.labels[index];
    });
}

// ==========================================
// VALIDATIONS
// ==========================================
function validateCurrentStep() {
    let isValid = true;
    const step = activeFlow === "quiz" ? quizStep : showroomStep;

    if (activeFlow === "quiz") {
        if (step === 4) {
            if (!qNameInput.value.trim() || qNameInput.value.trim().length < 2) { showError(qNameInput); isValid = false; }
            
            const cleanPhone = qPhoneInput.value.replace(/[^0-9+]/g, '');
            if (!cleanPhone || cleanPhone.length < 8) { showError(qPhoneInput); isValid = false; }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!qEmailInput.value.trim() || !emailRegex.test(qEmailInput.value.trim())) { showError(qEmailInput); isValid = false; }
        }
    } 
    else { // Showroom Booking flow
        if (step === 2) {
            if (!sDateInput.value) { showError(sDateInput); isValid = false; }
        }
        else if (step === 4) {
            if (!sNameInput.value.trim() || sNameInput.value.trim().length < 2) { showError(sNameInput); isValid = false; }
            
            const cleanPhone = sPhoneInput.value.replace(/[^0-9+]/g, '');
            if (!cleanPhone || cleanPhone.length < 8) { showError(sPhoneInput); isValid = false; }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!sEmailInput.value.trim() || !emailRegex.test(sEmailInput.value.trim())) { showError(sEmailInput); isValid = false; }
        }
    }

    return isValid;
}

function showError(element) {
    element.closest(".input-group").classList.add("invalid");
}

// ==========================================
// STEPS NAVIGATION & RENDER
// ==========================================
function updateStepUI() {
    const step = activeFlow === "quiz" ? quizStep : showroomStep;

    // Toggle active content divs
    const selectorPrefix = activeFlow === "quiz" ? "q-step-" : "s-step-";
    for (let i = 1; i <= TOTAL_STEPS; i++) {
        const section = document.getElementById(`${selectorPrefix}${i}`);
        if (i === step) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }

    // Update stepper badges
    stepperItemsActive(step);

    // Update progress fill
    const percent = ((step - 1) / (TOTAL_STEPS - 1)) * 100;
    progressFill.style.width = `${percent}%`;

    // Configure nav buttons disabled states
    backBtn.disabled = step === 1;

    if (step === TOTAL_STEPS) {
        nextBtn.innerHTML = `Confirm &amp; Curation <i class="ph-bold ph-sketch-logo"></i>`;
        populateSummaryReceipt();
    } else {
        nextBtn.innerHTML = `Next Step <i class="ph-bold ph-arrow-right"></i>`;
    }
}

function stepperItemsActive(activeStep) {
    stepperItems = document.querySelectorAll(".step-item");
    stepperItems.forEach((item, index) => {
        const itemStep = index + 1;
        if (itemStep === activeStep) {
            item.className = "step-item active";
        } else if (itemStep < activeStep) {
            item.className = "step-item completed";
        } else {
            item.className = "step-item";
        }
    });
}

// Populate summaries
function populateSummaryReceipt() {
    if (activeFlow === "quiz") {
        quizData.category = qCategorySelect.value;
        quizData.stone = qStoneSelect.value;
        quizData.fullName = qNameInput.value.trim();
        quizData.phone = qPhoneInput.value.trim();
        quizData.email = qEmailInput.value.trim();

        summaryRec.textContent = quizData.recipient;
        summaryOcc.textContent = quizData.occasion;
        summaryMetal.textContent = quizData.metal;
        summaryStone.textContent = quizData.stone;
        summaryBudget.textContent = quizData.budget;
    } 
    else { // Showroom Flow
        showroomData.consultType = sConsultSelect.value;
        showroomData.date = sDateInput.value;
        showroomData.fullName = sNameInput.value.trim();
        showroomData.phone = sPhoneInput.value.trim();
        showroomData.email = sEmailInput.value.trim();

        summarySLoc.textContent = showroomData.showroom;
        summarySType.textContent = showroomData.consultType;
        
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        summarySDate.textContent = new Date(showroomData.date).toLocaleDateString('en-US', options);
        summarySSlot.textContent = showroomData.slot;
    }
}

// Sort & Render matching products
function renderCuratedProducts() {
    curatedProductsGrid.innerHTML = "";

    // Curation logic: match budget interval
    const filtered = PRODUCTS_CATALOG.filter(p => {
        if (quizData.budget === "Under ₹5,000") return p.budget === "Under ₹5,000";
        if (quizData.budget === "₹5,000 - ₹20,000") return p.budget === "₹5,000 - ₹20,000";
        if (quizData.budget === "₹20,000 - ₹50,000") return p.budget === "₹20,000 - ₹50,000";
        return p.budget === "₹50,000+"; // ₹50,000+
    });

    const displayItems = filtered.length > 0 ? filtered : PRODUCTS_CATALOG.slice(0, 2);

    displayItems.forEach(item => {
        const pCard = document.createElement("div");
        pCard.className = "product-card";
        pCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="product-info">
                <h4>${item.name}</h4>
                <p class="product-price">${item.price}</p>
                <a href="${item.link}" target="_blank" class="shop-link">Shop Item <i class="ph ph-arrow-right"></i></a>
            </div>
        `;
        curatedProductsGrid.appendChild(pCard);
    });
}

function submitForm() {
    nextBtn.disabled = true;
    nextBtn.innerHTML = `<i class="ph-bold ph-circle-notch fa-spin"></i> Reserving...`;

    setTimeout(() => {
        // Mark stepper complete
        document.querySelectorAll(".step-item").forEach(item => item.className = "step-item completed");
        progressFill.style.width = "100%";

        if (activeFlow === "quiz") {
            document.getElementById("q-step-4").classList.remove("active");
            qSuccessScreen.style.display = "block";
            successClientName.textContent = quizData.fullName;
            renderCuratedProducts();
            qSuccessScreen.scrollIntoView({ behavior: 'smooth' });
        } else {
            document.getElementById("s-step-4").classList.remove("active");
            sSuccessScreen.style.display = "block";
            successGuestName.textContent = showroomData.fullName;
            successShowroomName.textContent = showroomData.showroom;
            
            // DYNAMICALLY INJECT PHYSICAL SHOWROOM ADDRESS
            successShowroomAddress.textContent = SHOWROOM_ADDRESSES[showroomData.showroom];
            
            sSuccessScreen.scrollIntoView({ behavior: 'smooth' });
        }

        funnelActionsRow.style.display = "none";
    }, 1500);
}

function resetFunnel() {
    // Clear text fields
    qNameInput.value = "";
    qPhoneInput.value = "";
    qEmailInput.value = "";

    sNameInput.value = "";
    sPhoneInput.value = "";
    sEmailInput.value = "";

    document.querySelectorAll(".input-group").forEach(g => g.classList.remove("invalid"));

    // Reset selects
    qCategorySelect.selectedIndex = 0;
    qStoneSelect.selectedIndex = 0;
    sConsultSelect.selectedIndex = 0;

    // Reset active cards
    document.querySelectorAll(".quiz-flow-sections .choice-card").forEach((c, idx) => {
        if (c.getAttribute("data-type") === "recipient" && idx === 0) c.classList.add("active");
        else if (c.getAttribute("data-type") === "occasion" && idx === 4) c.classList.add("active");
        else if (c.getAttribute("data-type") === "metal" && idx === 8) c.classList.add("active");
        else c.classList.remove("active");
    });

    qBudgetCards.forEach((c, idx) => {
        if (idx === 1) c.classList.add("active");
        else c.classList.remove("active");
    });

    sShowroomCards.forEach((c, idx) => {
        if (idx === 0) c.classList.add("active");
        else c.classList.remove("active");
    });

    sSlotCards.forEach((c, idx) => {
        if (idx === 0) c.classList.add("active");
        else c.classList.remove("active");
    });

    sFocusCards.forEach((c, idx) => {
        if (idx === 0) c.classList.add("active");
        else c.classList.remove("active");
    });

    quizData.recipient = "My Partner";
    quizData.occasion = "Anniversary";
    quizData.metal = "18K Gold";
    quizData.budget = "₹5,000 - ₹20,000";

    showroomData.showroom = "Delhi NCR Showroom";
    showroomData.slot = "Morning (11 AM - 1 PM)";
    showroomData.focus = "Necklaces";

    // Restore step views
    quizStep = 1;
    showroomStep = 1;
    qSuccessScreen.style.display = "none";
    sSuccessScreen.style.display = "none";
    funnelActionsRow.style.display = "";

    init();
    updateStepUI();
}

// ==========================================
// NAVIGATION CONTROLS
// ==========================================
nextBtn.addEventListener("click", () => {
    if (validateCurrentStep()) {
        const step = activeFlow === "quiz" ? quizStep : showroomStep;
        if (step < TOTAL_STEPS) {
            if (activeFlow === "quiz") quizStep++;
            else showroomStep++;
            updateStepUI();
            document.querySelector("main").scrollIntoView({ behavior: 'smooth' });
        } else {
            submitForm();
        }
    }
});

backBtn.addEventListener("click", () => {
    const step = activeFlow === "quiz" ? quizStep : showroomStep;
    if (step > 1) {
        if (activeFlow === "quiz") quizStep--;
        else showroomStep--;
        updateStepUI();
        document.querySelector("main").scrollIntoView({ behavior: 'smooth' });
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA" && !e.target.classList.contains("reset-flow-btn")) {
        e.preventDefault();
        nextBtn.click();
    }
});

// Run Init
init();
updateStepperLayout();
updateStepUI();
