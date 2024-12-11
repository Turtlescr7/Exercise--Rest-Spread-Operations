/* Task 1: Track Animal Sightings */
function trackSightings(...animalNames) {
  console.log("Animals sighted in the sanctuary:", ...animalNames);
}

// Example usage
trackSightings("Elephant", "Tiger", "Panda", "Rhino");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const allHabitats = [...forestHabitats, ...savannahHabitats];

console.log("Comprehensive list of protected areas:", allHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};

const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 520,
  habitat: "Grasslands",
};

console.log("Updated rhino conservation status:", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};

const lionProfileWithGenetics = {
  ...lionProfile,
  genetics: {
    diversityIndex: 0.85,
    subspecies: "Panthera leo leo",
  },
};

console.log("Lion profile with genetics:", lionProfileWithGenetics);

// Modifying nested property
lionProfileWithGenetics.genetics.diversityIndex = 0.9;
console.log("Modified lion profile with genetics:", lionProfileWithGenetics);
console.log("Original lion profile remains unchanged:", lionProfile);

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};

const shallowCopyEcosystem = { ...ecosystemHealth };
shallowCopyEcosystem.foodSupply.herbivores = "Scarce";

console.log("Modified ecosystem health (shallow copy):", shallowCopyEcosystem);
console.log("Original ecosystem health (affected by change):", ecosystemHealth);

/* Observations: */
// Task 4: Changes to nested properties (e.g., lionProfileWithGenetics.genetics.diversityIndex)
// affect both the copied and original objects because the genetics property is still a reference to the same object in memory.

// Task 5: Modifying nested properties in the shallow copy of ecosystemHealth also affects the original object for the same reason.
// Shallow copying only creates a new top-level reference, while nested objects remain shared between the copies.
