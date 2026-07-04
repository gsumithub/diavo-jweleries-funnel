// ==========================================
// FUNNEL STATE MANAGEMENT
// ==========================================
let currentStep = 1;
const TOTAL_STEPS = 4;

const formData = {
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

// ==========================================
// STATIC PRODUCTS CATALOG (DIAVO JEWELS)
// ==========================================
const PRODUCTS_CATALOG = [
    // Tier 1: Under ₹5,000
    {
        name: "Diavo 925 Sterling Silver Infinite Love Pendant",
        category: "Necklaces",
        metal: "925 Sterling Silver",
        budget: "Under ₹5,000",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo Solitaire Halo Stud Earrings (925 Silver)",
        category: "Earrings",
        metal: "925 Sterling Silver",
        budget: "Under ₹5,000",
        price: "₹4,200",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo Sterling Silver Stackable Couple Bands",
        category: "Rings",
        metal: "925 Sterling Silver",
        budget: "Under ₹5,000",
        price: "₹2,800",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    // Tier 2: ₹5,000 - ₹20,000
    {
        name: "Diavo 14K Rose Gold Floral Eternity Band",
        category: "Rings",
        metal: "14K Rose Gold",
        budget: "₹5,000 - ₹20,000",
        price: "₹14,999",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo 18K Yellow Gold Classic Band (2mm)",
        category: "Rings",
        metal: "18K Gold",
        budget: "₹5,000 - ₹20,000",
        price: "₹16,500",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo Sterling Silver Infinite Loop CZ Necklace",
        category: "Necklaces",
        metal: "925 Sterling Silver",
        budget: "₹5,000 - ₹20,000",
        price: "₹8,499",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    // Tier 3: ₹20,000 - ₹50,000
    {
        name: "Diavo 18K Yellow Gold Cushion-Cut Solitaire Ring",
        category: "Rings",
        metal: "18K Gold",
        budget: "₹20,000 - ₹50,000",
        price: "₹38,999",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo 18K Gold Pear-Drop Diamond Necklace",
        category: "Necklaces",
        metal: "18K Gold",
        budget: "₹20,000 - ₹50,000",
        price: "₹46,200",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo 14K Rose Gold cluster Studs (VVS Diamond)",
        category: "Earrings",
        metal: "14K Rose Gold",
        budget: "₹20,000 - ₹50,000",
        price: "₹32,500",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80"
    },
    // Tier 4: ₹50,000+
    {
        name: "Diavo Classic 1 Carat Solitaire Diamond Ring (Platinum)",
        category: "Rings",
        metal: "Platinum",
        budget: "₹50,000+",
        price: "₹1,25,000",
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo 18K Yellow Gold Majestic Diamond Choker",
        category: "Necklaces",
        metal: "18K Gold",
        budget: "₹50,000+",
        price: "₹2,45,000",
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Diavo Signature Bridal Solitaire Drop Earrings",
        category: "Earrings",
        metal: "18K Gold",
        budget: "₹50,000+",
        price: "₹89,000",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80"
    }
];

// ==========================================
// DOM ELEMENTS
// ==========================================
const stepContents = [
    document.getElementById("step-1-content"),
    document.getElementById("step-2-content"),
    document.getElementById("step-3-content"),
    document.getElementById("step-4-content")
];

const stepperItems = document.querySelectorAll(".step-item");
const progressFill = document.getElementById("progress-fill");

const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const funnelActionsRow = document.getElementById("funnel-actions-row");
const successScreen = document.getElementById("success-screen");
const resetBtn = document.getElementById("reset-funnel-btn");

// Input Elements
const choiceCards = document.querySelectorAll(".choice-card");
const budgetCards = document.querySelectorAll(".budget-card");
const categorySelect = document.getElementById("category-type");
const stoneSelect = document.getElementById("stone-type");
const nameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phoneNumber");
const emailInput = document.getElementById("email");

// Summary Receipt Elements
const summaryRec = document.getElementById("summary-rec");
const summaryOcc = document.getElementById("summary-occ");
const summaryMetal = document.getElementById("summary-metal");
const summaryStone = document.getElementById("summary-stone");
const summaryBudget = document.getElementById("summary-budget");

// Success Screen Elements
const successClientName = document.getElementById("success-client-name");
const curatedProductsGrid = document.getElementById("curated-products-grid");
const copyCouponBtn = document.getElementById("copy-coupon-btn");
const couponCode = document.getElementById("coupon-code");

// ==========================================
// INITIAL SETUP & LISTENERS
// ==========================================
function init() {
    // Setup choice cards selection (Recipient, Occasion, Metal)
    choiceCards.forEach(card => {
        card.addEventListener("click", () => {
            const cardType = card.getAttribute("data-type");
            const siblings = document.querySelectorAll(`.choice-card[data-type="${cardType}"]`);
            
            // Remove active from siblings, add to click target
            siblings.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            // Save state
            formData[cardType] = card.getAttribute("data-value");
        });
    });

    // Setup budget card selectors
    budgetCards.forEach(card => {
        card.addEventListener("click", () => {
            budgetCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            formData.budget = card.getAttribute("data-budget");
        });
    });

    // Copy Voucher Code Trigger
    copyCouponBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(couponCode.textContent.trim());
        copyCouponBtn.innerHTML = `<i class="ph-bold ph-check"></i> Copied!`;
        setTimeout(() => {
            copyCouponBtn.innerHTML = `<i class="ph-bold ph-copy"></i> Copy Code`;
        }, 2000);
    });

    // Clear validation borders on typing
    const inputsWithErrors = [
        { elem: nameInput, containerId: "name-error" },
        { elem: phoneInput, containerId: "phone-error" },
        { elem: emailInput, containerId: "email-error" }
    ];

    inputsWithErrors.forEach(item => {
        item.elem.addEventListener("input", () => {
            item.elem.closest(".input-group").classList.remove("invalid");
        });
    });
}

// ==========================================
// VALIDATION SCHEME
// ==========================================
function validateStep(step) {
    let isValid = true;

    if (step === 4) {
        // Name validation
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            showError(nameInput, "name-error");
            isValid = false;
        }

        // Phone validation
        const cleanPhone = phoneInput.value.replace(/[^0-9+]/g, '');
        if (!cleanPhone || cleanPhone.length < 8) {
            showError(phoneInput, "phone-error");
            isValid = false;
        }

        // Email validation (Mandatory for Diavo Jewels leads)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "email-error");
            isValid = false;
        }
    }

    return isValid;
}

function showError(inputElement, errorId) {
    inputElement.closest(".input-group").classList.add("invalid");
}

// ==========================================
// UI & TRANSITION MANAGEMENT
// ==========================================
function updateStepUI() {
    // Toggle active panel
    stepContents.forEach((content, index) => {
        if (index + 1 === currentStep) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });

    // Stepper updates
    stepperItems.forEach((item, index) => {
        const itemStep = index + 1;
        if (itemStep === currentStep) {
            item.className = "step-item active";
        } else if (itemStep < currentStep) {
            item.className = "step-item completed";
        } else {
            item.className = "step-item";
        }
    });

    // Fill line updates
    const fillPercent = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;
    progressFill.style.width = `${fillPercent}%`;

    // Action button updates
    backBtn.disabled = currentStep === 1;

    if (currentStep === TOTAL_STEPS) {
        nextBtn.innerHTML = `Get Curation <i class="ph-bold ph-sketch-logo"></i>`;
        populateSummaryReceipt();
    } else {
        nextBtn.innerHTML = `Next Step <i class="ph-bold ph-arrow-right"></i>`;
    }
}

function populateSummaryReceipt() {
    formData.category = categorySelect.value;
    formData.stone = stoneSelect.value;
    formData.fullName = nameInput.value.trim();
    formData.phone = phoneInput.value.trim();
    formData.email = emailInput.value.trim();

    // Map summary boxes
    summaryRec.textContent = formData.recipient;
    summaryOcc.textContent = formData.occasion;
    summaryMetal.textContent = formData.metal;
    summaryStone.textContent = formData.stone;
    summaryBudget.textContent = formData.budget;
}

// ==========================================
// PRODUCT RECOMMENDATION ENGINE
// ==========================================
function renderRecommendations() {
    curatedProductsGrid.innerHTML = "";

    // 1. Filter by budget and metal
    let matches = PRODUCTS_CATALOG.filter(p => p.budget === formData.budget && p.metal === formData.metal);
    
    // 2. Fallback: filter by budget only
    if (matches.length === 0) {
        matches = PRODUCTS_CATALOG.filter(p => p.budget === formData.budget);
    }
    
    // 3. Fallback: take first 2 catalog items if somehow empty
    if (matches.length === 0) {
        matches = PRODUCTS_CATALOG.slice(0, 2);
    }

    // Sort to prioritize category match if found
    matches.sort((a, b) => {
        if (a.category === formData.category && b.category !== formData.category) return -1;
        if (a.category !== formData.category && b.category === formData.category) return 1;
        return 0;
    });

    // Render up to 2 items for a focused premium experience
    const curatedItems = matches.slice(0, 2);

    curatedItems.forEach(item => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <div class="product-image-box">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="product-details">
                <h4 class="product-name">${item.name}</h4>
                <div class="product-price-row">
                    <span class="price">${item.price}</span>
                    <a href="https://diavojewels.com" target="_blank" class="shop-link">
                        Shop Now <i class="ph ph-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
        curatedProductsGrid.appendChild(productCard);
    });
}

// Submit flow
function submitQuiz() {
    nextBtn.disabled = true;
    nextBtn.innerHTML = `<i class="ph-bold ph-circle-notch fa-spin"></i> Curating Designs...`;

    setTimeout(() => {
        // Set client names
        successClientName.textContent = formData.fullName;

        // Render dynamic matches
        renderRecommendations();

        // Transition views
        stepContents.forEach(c => c.style.display = "none");
        funnelActionsRow.style.display = "none";
        
        stepperItems.forEach(item => item.className = "step-item completed");
        progressFill.style.width = "100%";

        successScreen.style.display = "block";
        successScreen.scrollIntoView({ behavior: 'smooth' });

    }, 1500);
}

// Reset funnel
function resetFunnel() {
    currentStep = 1;

    // Clear inputs
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";

    document.querySelectorAll(".input-group").forEach(g => g.classList.remove("invalid"));
    categorySelect.selectedIndex = 0;
    stoneSelect.selectedIndex = 0;

    // Reset recipient/occasion choice states to index 0
    document.querySelectorAll(".choice-card").forEach(c => c.classList.remove("active"));
    
    // Activate default choice cards
    const defaultRecipient = document.querySelector('.choice-card[data-value="My Partner"]');
    const defaultOccasion = document.querySelector('.choice-card[data-value="Anniversary"]');
    const defaultMetal = document.querySelector('.choice-card[data-value="18K Gold"]');
    const defaultBudget = document.querySelector('.budget-card[data-budget="₹5,000 - ₹20,000"]');

    if (defaultRecipient) defaultRecipient.classList.add("active");
    if (defaultOccasion) defaultOccasion.classList.add("active");
    if (defaultMetal) defaultMetal.classList.add("active");
    
    budgetCards.forEach(c => c.classList.remove("active"));
    if (defaultBudget) defaultBudget.classList.add("active");

    formData.recipient = "My Partner";
    formData.occasion = "Anniversary";
    formData.metal = "18K Gold";
    formData.budget = "₹5,000 - ₹20,000";

    // Restore displays
    stepContents.forEach(c => c.style.display = "");
    funnelActionsRow.style.display = "";
    successScreen.style.display = "none";

    updateStepUI();
}

// ==========================================
// EVENT LOGGERS
// ==========================================
nextBtn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
        if (currentStep < TOTAL_STEPS) {
            currentStep++;
            updateStepUI();
            document.querySelector("main").scrollIntoView({ behavior: 'smooth' });
        } else {
            submitQuiz();
        }
    }
});

backBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateStepUI();
        document.querySelector("main").scrollIntoView({ behavior: 'smooth' });
    }
});

resetBtn.addEventListener("click", resetFunnel);

// Enable Enter key routing
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA" && e.target.id !== "reset-funnel-btn") {
        e.preventDefault();
        nextBtn.click();
    }
});

// Run Setup
init();
updateStepUI();
