/**
 * The Science Behind the Glass - KT Tea Layering Process
 * Educational step-by-step breakdown strictly following the supplied physical craft principles.
 */

export const teaSteps = [
  {
    stepNumber: 1,
    title: "Thick Full-Cream Milk",
    kannadaTitle: "ದಪ್ಪ ಹಾಲು",
    principle: "High Butterfat & Viscosity",
    description: "The ritual begins with rich, unadulterated full-cream milk simmered slowly. Its high fat and solid content establish a foundational liquid layer with substantial body and heat-retention capability.",
    craftDetail: "Boiled gently in heavy-bottomed brass vessels to preserve natural dairy sweetness and viscosity.",
    visualStage: "milk-base",
    fillLevel: { milk: 40, foam: 0, tea: 0 }
  },
  {
    stepNumber: 2,
    title: "Sugar Density Calibration",
    kannadaTitle: "ಸಕ್ಕರೆ ಸಾಂದ್ರತೆ",
    principle: "Increasing Bottom Layer Specific Gravity",
    description: "Granular sugar is blended thoroughly into the warm milk before frothing. Dissolved sucrose significantly increases the specific gravity of the dairy base, ensuring it remains denser than the lighter herbal decoction to follow.",
    craftDetail: "The exact dissolution ratio creates a dense hydrodynamic cushion at the lower third of the glass tumbler.",
    visualStage: "milk-sweetened",
    fillLevel: { milk: 50, foam: 5, tea: 0 }
  },
  {
    stepNumber: 3,
    title: "Vigorous Aeration & Frothing",
    kannadaTitle: "ನೊರೆ ನಿರ್ಮಾಣ",
    principle: "Microfoam Head & Surface Tension",
    description: "The sweetened hot milk is poured back and forth rapidly between two stainless steel or brass tumblers from high arc heights ('by-two' meter frothing). This traps fine micro-bubbles, generating a resilient, dense froth mantle on top of the milk.",
    craftDetail: "The microfoam serves as a physical buoyant mattress, resting right at the glass midline.",
    visualStage: "milk-frothed",
    fillLevel: { milk: 50, foam: 18, tea: 0 }
  },
  {
    stepNumber: 4,
    title: "The Back-of-the-Spoon Decoction Pour",
    kannadaTitle: "ಚಮಚದ ತಂತ್ರ",
    principle: "Kinetic Dispersion & Non-Turbulent Flow",
    description: "A rich, steaming black tea decoction—steeped to deep mahogany concentration—is drawn. A traditional spoon is inverted just above the milk foam. The decoction is trickled slowly onto the convex back of the spoon, shedding all downward kinetic force so it gently spreads sideways rather than puncturing the milk layer.",
    craftDetail: "Pouring without the spoon would cause vertical plunge and instant mixing. The curved metal disperses the fluid horizontally.",
    visualStage: "tea-pouring",
    fillLevel: { milk: 50, foam: 12, tea: 25 }
  },
  {
    stepNumber: 5,
    title: "The Settling Boundary",
    kannadaTitle: "ಎರಡು ಪದರಗಳು",
    principle: "Stable Biphasic Equilibrium",
    description: "Within seconds, fluid dynamics settle into a crisp, sharp horizon. The translucent amber-brown tea decoction floats gracefully upon the ivory-white milk cream. Served in an unpretentious glass tumbler, it is delivered immediately to the traveler.",
    craftDetail: "Two distinct temperatures, two distinct colors, two distinct flavors in one harmonious roadside glass.",
    visualStage: "kt-final",
    fillLevel: { milk: 50, foam: 8, tea: 38 }
  }
];

export const teaScienceSummary = {
  headline: "THE SCIENCE BEHIND THE GLASS",
  subheading: "Not magic. Not an accident. A calibrated folk engineering of density, temperature, and fluid dispersion.",
  points: [
    {
      title: "Differential Specific Gravity",
      text: "Sugar-saturated heavy dairy milk possesses a higher density than the water-based tea decoction, creating a natural thermodynamic buoyancy."
    },
    {
      title: "Microfoam Cushion",
      text: "Vigorous double-vessel aeration creates micro-bubbles that reduce surface tension and act as a dampening barrier at the interface."
    },
    {
      title: "Deflected Kinetic Momentum",
      text: "The convex back of the brass spoon turns a vertical drop into a gentle horizontal spread, preserving the interface undisturbed."
    },
    {
      title: "Thermal Separation",
      text: "Steaming hot decoction rests lightly above the rich warm milk, creating an astonishing sensory contrast on first sip."
    }
  ]
};
