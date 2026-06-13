// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "In normal life, we rarely come across pure substances. Most are mixtures containing two or more pure substances. Their utility depends heavily on their composition. For instance, the properties of brass are quite different from German silver.",
    "question": "Which of the following examples best demonstrates how a specific concentration of a substance can change its effect from beneficial to poisonous?",
    "options": [
      "A) Intravenous injections are dissolved in water containing salts at particular ionic concentrations.",
      "B) 1 part per million (ppm) of fluoride ions prevents tooth decay, while high concentrations can be used as rat poison.",
      "C) Brass is a mixture of copper and zinc.",
      "D) Bronze is a mixture of copper and tin."
    ],
    "answer": "B) 1 part per million (ppm) of fluoride ions prevents tooth decay, while high concentrations can be used as rat poison.",
    "explanation": "The textbook highlights that 1 ppm of fluoride prevents tooth decay, 1.5 ppm causes mottled teeth, and higher concentrations are poisonous, illustrating the critical importance of quantitative concentration."
  },
  {
    "id": 2,
    "context": "Almost all processes in our body occur in some kind of liquid solution. When we define a 'solution' in chemistry, we are referring to a specific type of mixture.",
    "question": "How is a 'solution' formally defined in this context?",
    "options": [
      "A) A heterogeneous mixture of two or more components.",
      "B) A homogeneous mixture of two or more than two components.",
      "C) A liquid containing visibly suspended solid particles.",
      "D) A purely liquid substance with uniform properties."
    ],
    "answer": "B) A homogeneous mixture of two or more than two components.",
    "explanation": "Solutions are homogeneous mixtures, meaning that their composition and properties are uniform throughout the mixture."
  },
  {
    "id": 3,
    "context": "In a homogeneous mixture, the components are mixed uniformly at the molecular level. These components are assigned specific terms based on their relative quantities.",
    "question": "What dictates the physical state in which a solution exists, and what is this component called?",
    "options": [
      "A) The solute, which is present in the smaller quantity.",
      "B) The solute, which is present in the largest quantity.",
      "C) The solvent, which is present in the smaller quantity.",
      "D) The solvent, which is present in the largest quantity."
    ],
    "answer": "D) The solvent, which is present in the largest quantity.",
    "explanation": "The solvent is generally the component present in the largest quantity, and it determines the physical state (solid, liquid, or gas) in which the solution exists."
  },
  {
    "id": 4,
    "context": "A solution can contain multiple solutes dissolved in a single solvent. However, for simplicity, introductory chemistry often focuses on the simplest type of solution.",
    "question": "What is the term for a solution that consists of exactly two components?",
    "options": [
      "A) Primary solution",
      "B) Secondary solution",
      "C) Binary solution",
      "D) Biphasic solution"
    ],
    "answer": "C) Binary solution",
    "explanation": "A binary solution is a solution consisting of exactly two components: one solute and one solvent."
  },
  {
    "id": 5,
    "context": "Solutions are not always liquids. Because the solvent determines the physical state, we can have gaseous, liquid, or solid solutions.",
    "question": "Which of the following is an example of a gaseous solution where both the solute and solvent are gases?",
    "options": [
      "A) Chloroform mixed with nitrogen gas",
      "B) Camphor in nitrogen gas",
      "C) Mixture of oxygen and nitrogen gases",
      "D) Oxygen dissolved in water"
    ],
    "answer": "C) Mixture of oxygen and nitrogen gases",
    "explanation": "A mixture of oxygen and nitrogen gases forms a homogeneous gaseous solution where both the solute and solvent are gases."
  },
  {
    "id": 6,
    "context": "Liquid solutions are the most common type we encounter in everyday life. They can have gases, liquids, or solids acting as the solute.",
    "question": "Which of the following describes a liquid solution where the solute is a gas?",
    "options": [
      "A) Ethanol dissolved in water",
      "B) Glucose dissolved in water",
      "C) Oxygen dissolved in water",
      "D) Amalgam of mercury with sodium"
    ],
    "answer": "C) Oxygen dissolved in water",
    "explanation": "Oxygen dissolved in water is a classic example of a liquid solution where the solvent is a liquid (water) and the solute is a gas (oxygen)."
  },
  {
    "id": 7,
    "context": "Solid solutions might seem counterintuitive, but they occur when the solvent itself is a solid. The solute can be a gas, liquid, or another solid.",
    "question": "What is an example of a solid solution where the solute is a gas?",
    "options": [
      "A) Solution of hydrogen in palladium",
      "B) Amalgam of mercury with sodium",
      "C) Copper dissolved in gold",
      "D) Camphor in nitrogen gas"
    ],
    "answer": "A) Solution of hydrogen in palladium",
    "explanation": "Hydrogen gas can be absorbed into the solid metal lattice of palladium, forming a solid solution where the gas is the solute."
  },
  {
    "id": 8,
    "context": "To quantitatively describe how much solute is in a solution, chemists use various concentration terms. One straightforward method is based on the masses of the components.",
    "question": "How is the 'Mass percentage (w/w)' of a component in a solution defined?",
    "options": [
      "A) \\( \\frac{\\text{Mass of solute}}{\\text{Volume of solution}} \\times 100 \\)",
      "B) \\( \\frac{\\text{Mass of the component in the solution}}{\\text{Total mass of the solution}} \\times 100 \\)",
      "C) \\( \\frac{\\text{Volume of the component}}{\\text{Total volume of solution}} \\times 100 \\)",
      "D) \\( \\frac{\\text{Moles of solute}}{\\text{Mass of solvent}} \\times 100 \\)"
    ],
    "answer": "B) \\( \\frac{\\text{Mass of the component in the solution}}{\\text{Total mass of the solution}} \\times 100 \\)",
    "explanation": "Mass percentage (w/w) is strictly the ratio of the mass of a specific component to the total mass of the solution, multiplied by 100."
  },
  {
    "id": 9,
    "context": "Mass percentage is commonly used in industrial chemical applications. For example, commercial bleaching solution is defined by its mass percentage.",
    "question": "If a commercial bleaching solution is described as containing 3.62 mass percentage of sodium hypochlorite in water, what does this mean?",
    "options": [
      "A) 3.62 g of sodium hypochlorite is dissolved in 100 g of water.",
      "B) 3.62 g of sodium hypochlorite is dissolved in 96.38 g of water to make 100 g of solution.",
      "C) 3.62 mL of sodium hypochlorite is present in 100 mL of solution.",
      "D) 3.62 moles of sodium hypochlorite are present in 1 kg of solution."
    ],
    "answer": "B) 3.62 g of sodium hypochlorite is dissolved in 96.38 g of water to make 100 g of solution.",
    "explanation": "A 3.62 mass % solution means there are 3.62 grams of solute per 100 grams of the total solution. Therefore, the water mass is 100 - 3.62 = 96.38 g."
  },
  {
    "id": 10,
    "context": "For liquid-liquid mixtures, it is often more practical to measure volume rather than mass. This leads to the 'Volume percentage (V/V)' concentration term.",
    "question": "A 35% (v/v) solution of ethylene glycol is used as an antifreeze in cars. What is the practical effect of this specific concentration?",
    "options": [
      "A) It raises the boiling point of water to 373.15 K.",
      "B) It lowers the freezing point of water to 255.4 K (-17.6°C).",
      "C) It prevents the water from evaporating completely.",
      "D) It increases the density of water to exactly 1.072 g/mL."
    ],
    "answer": "B) It lowers the freezing point of water to 255.4 K (-17.6°C).",
    "explanation": "At a 35% (v/v) concentration, ethylene glycol effectively acts as an antifreeze, significantly lowering the freezing point of the cooling water to 255.4 K."
  },
  {
    "id": 11,
    "context": "In medicine and pharmacy, a hybrid concentration unit is frequently used because it is easy to prepare solutions by weighing a solid and dissolving it up to a certain volume.",
    "question": "What is the 'Mass by volume percentage (w/V)'?",
    "options": [
      "A) The mass of solute dissolved in 100 mL of the solution.",
      "B) The volume of solute dissolved in 100 g of the solution.",
      "C) The mass of solute divided by the total mass of the solvent.",
      "D) The moles of solute dissolved in 100 mL of the solution."
    ],
    "answer": "A) The mass of solute dissolved in 100 mL of the solution.",
    "explanation": "Mass by volume percentage (w/V) is the mass of the solute in grams dissolved per 100 mL of the total solution."
  },
  {
    "id": 12,
    "context": "Sometimes a solute is present in extremely small trace quantities, such as pollutants in the air or dissolved oxygen in sea water. Percentages are too large to be convenient here.",
    "question": "Which unit is used to express concentration when a solute is present in trace quantities?",
    "options": [
      "A) Molarity (M)",
      "B) Parts per million (ppm)",
      "C) Mass percentage (w/w)",
      "D) Molality (m)"
    ],
    "answer": "B) Parts per million (ppm)",
    "explanation": "Parts per million (ppm) is defined as \\( \\frac{\\text{Number of parts of the component}}{\\text{Total number of parts}} \\times 10^6 \\), making it ideal for trace quantities."
  },
  {
    "id": 13,
    "context": "Mole fraction is a highly useful concentration term, especially for gas mixtures and relating vapour pressure to concentration. It compares the moles of one component to the total moles.",
    "question": "If a binary mixture contains \\( n_A \\) moles of A and \\( n_B \\) moles of B, what is the formula for the mole fraction of component A (\\( x_A \\))?",
    "options": [
      "A) \\( x_A = \\frac{n_B}{n_A + n_B} \\)",
      "B) \\( x_A = \\frac{n_A}{n_B} \\)",
      "C) \\( x_A = \\frac{n_A}{n_A + n_B} \\)",
      "D) \\( x_A = n_A \\times (n_A + n_B) \\)"
    ],
    "answer": "C) \\( x_A = \\frac{n_A}{n_A + n_B} \\)",
    "explanation": "The mole fraction is the number of moles of the component divided by the total number of moles of all components in the solution."
  },
  {
    "id": 14,
    "context": "Because mole fractions represent a proportion of the whole, they must logically account for the entire mixture when added together.",
    "question": "In a given solution containing \\( i \\) components, what is the sum of all the mole fractions (\\( x_1 + x_2 + ... + x_i \\))?",
    "options": [
      "A) 100",
      "B) 1 (Unity)",
      "C) Avogadro's number",
      "D) The total number of moles"
    ],
    "answer": "B) 1 (Unity)",
    "explanation": "The sum of all mole fractions in a solution is always equal to 1. If you know all but one mole fraction, you can subtract their sum from 1 to find the remaining fraction."
  },
  {
    "id": 15,
    "context": "Let's calculate a mole fraction step-by-step. Imagine a solution containing 20% ethylene glycol (\\( C_2H_6O_2 \\)) by mass in water. This means 20 g of ethylene glycol is dissolved in 80 g of water.",
    "question": "Given the molar mass of ethylene glycol is 62 g/mol and water is 18 g/mol, what are the moles of ethylene glycol and water, respectively?",
    "options": [
      "A) 0.322 mol and 4.444 mol",
      "B) 3.22 mol and 44.4 mol",
      "C) 1.24 mol and 1.44 mol",
      "D) 0.068 mol and 0.932 mol"
    ],
    "answer": "A) 0.322 mol and 4.444 mol",
    "explanation": "Moles = Mass / Molar Mass. For ethylene glycol: \\( \\frac{20 \\text{ g}}{62 \\text{ g/mol}} = 0.322 \\text{ mol} \\). For water: \\( \\frac{80 \\text{ g}}{18 \\text{ g/mol}} = 4.444 \\text{ mol} \\)."
  },
  {
    "id": 16,
    "context": "We found that the solution contains 0.322 mol of ethylene glycol and 4.444 mol of water. Now we can find the mole fraction of ethylene glycol (\\( x_{\\text{glycol}} \\)).",
    "question": "Using the mole fraction formula \\( x_A = \\frac{n_A}{n_A + n_B} \\), what is the mole fraction of ethylene glycol in this solution?",
    "options": [
      "A) 0.932",
      "B) 0.322",
      "C) 0.068",
      "D) 1.00"
    ],
    "answer": "C) 0.068",
    "explanation": "\\( x_{\\text{glycol}} = \\frac{0.322}{0.322 + 4.444} = \\frac{0.322}{4.766} = 0.068 \\). The mole fraction of water would be \\( 1 - 0.068 = 0.932 \\)."
  },
  {
    "id": 17,
    "context": "Molarity is one of the most widely used concentration terms in chemistry laboratories because it directly relates the moles of solute to the volume of the solution.",
    "question": "How is Molarity (M) officially defined?",
    "options": [
      "A) Moles of solute dissolved in one kilogram of solvent.",
      "B) Moles of solute dissolved in one litre (or one cubic decimetre) of solution.",
      "C) Mass of solute dissolved in one litre of solution.",
      "D) Moles of solute divided by total moles in the solution."
    ],
    "answer": "B) Moles of solute dissolved in one litre (or one cubic decimetre) of solution.",
    "explanation": "Molarity (M) = \\( \\frac{\\text{Moles of solute}}{\\text{Volume of solution in litre}} \\)."
  },
  {
    "id": 18,
    "context": "Let's perform a molarity calculation. You have a solution containing 5 g of NaOH dissolved in enough water to make 450 mL of solution.",
    "question": "Given the molar mass of NaOH is 40 g/mol, what is the first step to find the molarity?",
    "options": [
      "A) Divide 5 g by 450 mL to get 0.011 g/mL.",
      "B) Convert 450 mL to 0.450 L, then multiply by 40 g/mol.",
      "C) Calculate the moles of NaOH: \\( \\frac{5 \\text{ g}}{40 \\text{ g/mol}} = 0.125 \\text{ mol} \\).",
      "D) Subtract 5 g from 450 mL to find the volume of the solvent."
    ],
    "answer": "C) Calculate the moles of NaOH: \\( \\frac{5 \\text{ g}}{40 \\text{ g/mol}} = 0.125 \\text{ mol} \\).",
    "explanation": "To find molarity, you must first convert the mass of the solute into moles. \\( \\text{Moles} = \\frac{5}{40} = 0.125 \\text{ mol} \\)."
  },
  {
    "id": 19,
    "context": "We have 0.125 mol of NaOH in 450 mL of solution. To find Molarity, we need the volume in litres.",
    "question": "What is the molarity of this NaOH solution?",
    "options": [
      "A) 0.125 M",
      "B) 0.278 M",
      "C) 3.6 M",
      "D) 0.000278 M"
    ],
    "answer": "B) 0.278 M",
    "explanation": "Convert 450 mL to 0.450 L. Then, \\( \\text{Molarity} = \\frac{0.125 \\text{ mol}}{0.450 \\text{ L}} = 0.278 \\text{ M} \\) (or \\( \\text{mol L}^{-1} \\))."
  },
  {
    "id": 20,
    "context": "While Molarity uses the volume of the *solution*, another related term called Molality uses the mass of the *solvent*. This distinction is very important for thermodynamics.",
    "question": "How is Molality (m) defined?",
    "options": [
      "A) Number of moles of solute per kilogram (kg) of the solvent.",
      "B) Number of moles of solute per litre of the solvent.",
      "C) Mass of solute per kilogram of the solution.",
      "D) Number of moles of solute per kilogram of the solution."
    ],
    "answer": "A) Number of moles of solute per kilogram (kg) of the solvent.",
    "explanation": "Molality (m) = \\( \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} \\). Notice it uses mass of solvent, not total solution."
  },
  {
    "id": 21,
    "context": "We have seen multiple ways to express concentration: Mass %, ppm, mole fraction, molality, and molarity. Some of these change if the laboratory gets warmer or colder.",
    "question": "Which of the following concentration terms is a function of temperature, and why?",
    "options": [
      "A) Molality, because mass expands with temperature.",
      "B) Mole fraction, because moles change with temperature.",
      "C) Mass percentage, because heat causes solute to evaporate.",
      "D) Molarity, because volume depends on temperature while mass does not."
    ],
    "answer": "D) Molarity, because volume depends on temperature while mass does not.",
    "explanation": "Mass %, ppm, mole fraction, and molality only rely on mass (which is temperature-independent). Molarity relies on volume, which expands or contracts with temperature changes."
  },
  {
    "id": 22,
    "context": "Moving on to Solubility: Every solid does not dissolve in a given liquid. While salt dissolves in water, naphthalene does not. However, naphthalene dissolves in benzene.",
    "question": "What is the general chemical principle that dictates whether a solute will dissolve in a solvent?",
    "options": [
      "A) Heavier molecules sink and dissolve faster.",
      "B) Like dissolves like (polar dissolves in polar, non-polar in non-polar).",
      "C) Liquids always dissolve solids regardless of polarity.",
      "D) Gases only dissolve in non-polar solvents."
    ],
    "answer": "B) Like dissolves like (polar dissolves in polar, non-polar in non-polar).",
    "explanation": "A solute dissolves in a solvent if their intermolecular interactions are similar. Polar solutes (like salt) dissolve in polar solvents (like water), and non-polar solutes (like naphthalene) dissolve in non-polar solvents (like benzene)."
  },
  {
    "id": 23,
    "context": "When a solid solute is added to a solvent, it starts to dissolve, increasing its concentration in the solution. At the same time, an opposing process begins to occur.",
    "question": "What is the process called where dissolved solute particles collide with solid solute particles and separate out of the solution?",
    "options": [
      "A) Dissolution",
      "B) Sublimation",
      "C) Crystallisation",
      "D) Evaporation"
    ],
    "answer": "C) Crystallisation",
    "explanation": "Dissolution is the solid going into solution. Crystallisation is the reverse process, where dissolved particles separate out into solid form."
  },
  {
    "id": 24,
    "context": "As you continue to add solid solute to a liquid, the rate of dissolution and the rate of crystallisation will eventually become equal.",
    "question": "What is the state called when the number of solute particles going into solution equals the number of solute particles separating out?",
    "options": [
      "A) Static equilibrium",
      "B) Dynamic equilibrium",
      "C) Supersaturation",
      "D) Complete precipitation"
    ],
    "answer": "B) Dynamic equilibrium",
    "explanation": "At this stage, the reactions are still happening, but at equal rates, resulting in no net change in concentration. This is dynamic equilibrium: \\( \\text{Solute} + \\text{Solvent} \\rightleftharpoons \\text{Solution} \\)."
  },
  {
    "id": 25,
    "context": "Once a solution reaches dynamic equilibrium with undissolved solute, it holds the maximum amount of solute possible at that temperature and pressure.",
    "question": "What do we call a solution in which no more solute can be dissolved at the same temperature and pressure?",
    "options": [
      "A) A dilute solution",
      "B) An unsaturated solution",
      "C) A super-dilute solution",
      "D) A saturated solution"
    ],
    "answer": "D) A saturated solution",
    "explanation": "A saturated solution is one that is in dynamic equilibrium with undissolved solute and cannot dissolve any more solute under those specific conditions."
  },
  {
    "id": 26,
    "context": "The solubility of a solid in a liquid can change dramatically if you heat the solution up or cool it down. Because dissolution involves an equilibrium, we can apply Le Chatelier's Principle.",
    "question": "If the dissolution process is endothermic (\\( \\Delta_{\\text{sol}}H > 0 \\)), what happens to the solubility when the temperature increases?",
    "options": [
      "A) Solubility decreases.",
      "B) Solubility increases.",
      "C) Solubility remains completely unaffected.",
      "D) The solvent instantly evaporates."
    ],
    "answer": "B) Solubility increases.",
    "explanation": "According to Le Chatelier's Principle, if a process absorbs heat (endothermic), adding heat (raising temperature) will push the equilibrium forward, increasing solubility."
  },
  {
    "id": 27,
    "context": "Conversely to an endothermic dissolution, some substances release heat when they dissolve in a solvent.",
    "question": "If the dissolution process is exothermic (\\( \\Delta_{\\text{sol}}H < 0 \\)), how will an increase in temperature affect the solid's solubility?",
    "options": [
      "A) The solubility should decrease.",
      "B) The solubility should increase.",
      "C) The solubility is totally independent of temperature.",
      "D) The solution becomes a gas."
    ],
    "answer": "A) The solubility should decrease.",
    "explanation": "For an exothermic process, raising the temperature adds stress to the product side, pushing the equilibrium backward, thus decreasing solubility."
  },
  {
    "id": 28,
    "context": "While temperature heavily influences the solubility of solids in liquids, pressure is a different story.",
    "question": "Why does pressure not have any significant effect on the solubility of solids in liquids?",
    "options": [
      "A) Because pressure only exists in a vacuum.",
      "B) Because solids and liquids are highly incompressible.",
      "C) Because solids dissolve instantly under any pressure.",
      "D) Because liquids evaporate before pressure can be applied."
    ],
    "answer": "B) Because solids and liquids are highly incompressible.",
    "explanation": "Solids and liquids are practically unaffected by changes in pressure due to their high incompressibility, meaning their equilibrium is undisturbed by pressure changes."
  },
  {
    "id": 29,
    "context": "Unlike solids, gases are highly compressible. Think about what happens when you compress a gas sitting above a liquid solvent.",
    "question": "How does an increase in pressure affect the solubility of a gas in a liquid?",
    "options": [
      "A) Solubility of the gas decreases.",
      "B) Solubility of the gas increases.",
      "C) Pressure has no effect on gas solubility.",
      "D) The gas condenses into a solid."
    ],
    "answer": "B) Solubility of the gas increases.",
    "explanation": "Compressing the gas increases the number of gaseous particles per unit volume above the solution, increasing the rate at which they strike the surface and enter the solution, thus increasing solubility."
  },
  {
    "id": 30,
    "context": "William Henry was the first to formalize the relationship between gas pressure and its solubility in a liquid.",
    "question": "What does Henry's Law state?",
    "options": [
      "A) The solubility of a gas is inversely proportional to its temperature.",
      "B) At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid.",
      "C) Gas molecules only dissolve in polar solvents.",
      "D) Vapour pressure of a solution is proportional to the mole fraction of the solvent."
    ],
    "answer": "B) At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid.",
    "explanation": "Henry's Law quantitatively relates gas solubility and pressure, stating they are directly proportional at a constant temperature."
  },
  {
    "id": 31,
    "context": "Henry's law is often expressed mathematically by substituting 'solubility' with the mole fraction of the gas (\\( x \\)).",
    "question": "Which of the following is the most commonly used mathematical expression for Henry's Law?",
    "options": [
      "A) \\( p_1 = p_1^0 x_1 \\)",
      "B) \\( p = K_H \\times x \\)",
      "C) \\( P = C R T \\)",
      "D) \\( \\Delta T_b = K_b m \\)"
    ],
    "answer": "B) \\( p = K_H \\times x \\)",
    "explanation": "The formula is \\( p = K_H x \\), where \\( p \\) is the partial pressure of the gas, \\( x \\) is its mole fraction in solution, and \\( K_H \\) is Henry's Law constant."
  },
  {
    "id": 32,
    "context": "Let's analyze the Henry's Law equation: \\( p = K_H x \\). Different gases have different \\( K_H \\) values at the same temperature.",
    "question": "If you compare two gases at the same given pressure, what does a higher value of \\( K_H \\) indicate about the gas?",
    "options": [
      "A) It has a higher solubility in the liquid.",
      "B) It has a lower solubility in the liquid.",
      "C) It is a heavier gas.",
      "D) It will boil at a lower temperature."
    ],
    "answer": "B) It has a lower solubility in the liquid.",
    "explanation": "Since \\( x = \\frac{p}{K_H} \\), for a constant pressure \\( p \\), a larger \\( K_H \\) results in a smaller mole fraction \\( x \\), meaning lower solubility."
  },
  {
    "id": 33,
    "context": "The value of Henry's Law constant, \\( K_H \\), is not entirely fixed; it is a function of the nature of the gas and the temperature.",
    "question": "According to the textbook data for \\( N_2 \\) and \\( O_2 \\), what happens to the \\( K_H \\) value and gas solubility as temperature increases?",
    "options": [
      "A) \\( K_H \\) decreases, and solubility increases.",
      "B) \\( K_H \\) increases, and solubility increases.",
      "C) \\( K_H \\) decreases, and solubility decreases.",
      "D) \\( K_H \\) increases, and solubility decreases."
    ],
    "answer": "D) \\( K_H \\) increases, and solubility decreases.",
    "explanation": "The data shows \\( K_H \\) values increase with temperature. Because \\( K_H \\) is inversely proportional to solubility (at a given pressure), the solubility of gases decreases with an increase in temperature."
  },
  {
    "id": 34,
    "context": "The fact that gas solubility decreases as temperature increases has a profound impact on ecology, particularly in bodies of water.",
    "question": "Why are aquatic species generally more comfortable in cold waters rather than warm waters?",
    "options": [
      "A) Cold water has a lower density, making it easier to swim.",
      "B) Cold water contains higher amounts of dissolved oxygen due to lower temperatures.",
      "C) Warm water dissolves too much nitrogen, causing toxicity.",
      "D) Henry's constant is near zero in cold water, stopping all reactions."
    ],
    "answer": "B) Cold water contains higher amounts of dissolved oxygen due to lower temperatures.",
    "explanation": "Because solubility of gases (like \\( O_2 \\)) increases with a decrease in temperature, cold water holds more dissolved oxygen, which sustains aquatic life."
  },
  {
    "id": 35,
    "context": "Henry's Law has many practical applications in industry. Have you ever wondered why opening a soda bottle results in a sudden 'fizz'?",
    "question": "How is Henry's Law applied in the production of soft drinks and soda water?",
    "options": [
      "A) The bottles are sealed under high temperature to dissolve more sugar.",
      "B) The bottles are sealed under high pressure to increase the solubility of \\( CO_2 \\) gas.",
      "C) A vacuum is created inside the bottle to prevent \\( CO_2 \\) from escaping.",
      "D) The liquid is completely frozen during sealing to trap the gas."
    ],
    "answer": "B) The bottles are sealed under high pressure to increase the solubility of \\( CO_2 \\) gas.",
    "explanation": "By sealing the bottle under high pressure, the partial pressure of \\( CO_2 \\) is increased, which directly increases its solubility in the drink according to Henry's Law."
  },
  {
    "id": 36,
    "context": "Scuba divers face intense pressure changes underwater. As they dive deep, the high pressure increases the solubility of atmospheric gases in their blood.",
    "question": "What dangerous medical condition occurs if a diver surfaces too quickly, releasing dissolved nitrogen bubbles into the blood?",
    "options": [
      "A) Anoxia",
      "B) Hypoxia",
      "C) Bends",
      "D) Hyperthermia"
    ],
    "answer": "C) Bends",
    "explanation": "When pressure gradually decreases as a diver surfaces, dissolved gases are released. If done too quickly, nitrogen bubbles form in the blood, blocking capillaries and causing a painful condition called 'bends'."
  },
  {
    "id": 37,
    "context": "To protect scuba divers from the bends and the toxic effects of high nitrogen concentration in the blood, special gas mixtures are used in their tanks.",
    "question": "What gas is used to dilute air in scuba tanks to cope with the high concentration of dissolved gases?",
    "options": [
      "A) Argon",
      "B) Carbon dioxide",
      "C) Helium",
      "D) Extra Oxygen"
    ],
    "answer": "C) Helium",
    "explanation": "Scuba tanks are filled with air diluted with helium (11.7% helium, 56.2% nitrogen, 32.1% oxygen) to avoid bends and nitrogen toxicity."
  },
  {
    "id": 38,
    "context": "Just as diving deep increases pressure, climbing high mountains decreases the atmospheric pressure.",
    "question": "What condition is caused by the low partial pressure of oxygen at high altitudes, leading to weakness and inability to think clearly?",
    "options": [
      "A) Bends",
      "B) Anoxia",
      "C) Nitrogen narcosis",
      "D) Decompression sickness"
    ],
    "answer": "B) Anoxia",
    "explanation": "Low partial pressure of oxygen at high altitudes leads to low blood oxygen levels, a condition known as anoxia, which causes weakness and confusion."
  },
  {
    "id": 39,
    "context": "Let's calculate gas solubility using Henry's Law: \\( p = K_H x \\). Imagine \\( N_2 \\) gas is bubbled through 1 litre of water at 293 K, exerting a partial pressure of 0.987 bar. \\( K_H \\) for \\( N_2 \\) is 76.48 kbar.",
    "question": "What is the first step to find how many moles of \\( N_2 \\) dissolve? (Remember to match units: 76.48 kbar = 76,480 bar)",
    "options": [
      "A) Calculate the mole fraction: \\( x = \\frac{0.987}{76480} = 1.29 \\times 10^{-5} \\)",
      "B) Multiply 0.987 by 76.48.",
      "C) Calculate the molarity of water.",
      "D) Divide 76.48 by 0.987."
    ],
    "answer": "A) Calculate the mole fraction: \\( x = \\frac{0.987}{76480} = 1.29 \\times 10^{-5} \\)",
    "explanation": "To find the solubility (moles dissolved), you first use Henry's law to find the mole fraction \\( x \\) of the gas in the solution."
  },
  {
    "id": 40,
    "context": "Continuing our calculation, we know the mole fraction of \\( N_2 \\) is \\( x = 1.29 \\times 10^{-5} \\). We know 1 litre of water contains roughly 55.5 moles of water. The mole fraction formula is \\( x = \\frac{n}{n + 55.5} \\), but since \\( n \\) is very small, we approximate it as \\( x = \\frac{n}{55.5} \\).",
    "question": "How do you find the moles of \\( N_2 \\) (\\( n \\)) dissolved in the water?",
    "options": [
      "A) \\( n = 1.29 \\times 10^{-5} \\div 55.5 \\)",
      "B) \\( n = 1.29 \\times 10^{-5} \\times 55.5 \\)",
      "C) \\( n = 55.5 - 1.29 \\times 10^{-5} \\)",
      "D) \\( n = 1.29 \\times 10^{-5} \\)"
    ],
    "answer": "B) \\( n = 1.29 \\times 10^{-5} \\times 55.5 \\)",
    "explanation": "Solving the equation \\( x = \\frac{n}{55.5} \\) for \\( n \\) requires multiplying the mole fraction by the moles of water: \\( 1.29 \\times 10^{-5} \\times 55.5 = 7.16 \\times 10^{-4} \\text{ moles} \\)."
  },
  {
    "id": 41,
    "context": "We shift our focus from gases dissolving in liquids to binary solutions containing two volatile liquids, denoted as component 1 and component 2. Both will evaporate and establish an equilibrium with the vapour phase.",
    "question": "In 1886, a French chemist provided a quantitative relationship between the partial vapour pressure of a volatile component and its mole fraction in solution. What is this law called?",
    "options": [
      "A) Henry's Law",
      "B) Dalton's Law",
      "C) Raoult's Law",
      "D) Le Chatelier's Principle"
    ],
    "answer": "C) Raoult's Law",
    "explanation": "Francois Marte Raoult gave this relationship, known as Raoult's Law, for solutions of volatile liquids."
  },
  {
    "id": 42,
    "context": "Raoult's Law establishes exactly how much pressure each liquid component exerts in the vapour phase based on how much of it is in the solution.",
    "question": "What is the mathematical expression for Raoult's Law for a component 1?",
    "options": [
      "A) \\( p_1 = P_{\\text{total}} - p_2 \\)",
      "B) \\( p_1 = K_H \\times x_1 \\)",
      "C) \\( p_1 = p_1^0 \\times x_1 \\)",
      "D) \\( p_1 = y_1 \\times P_{\\text{total}} \\)"
    ],
    "answer": "C) \\( p_1 = p_1^0 \\times x_1 \\)",
    "explanation": "Raoult's Law states that the partial vapour pressure (\\( p_1 \\)) is directly proportional to its mole fraction (\\( x_1 \\)), with the proportionality constant being the vapour pressure of the pure component (\\( p_1^0 \\))."
  },
  {
    "id": 43,
    "context": "When evaluating a solution of two volatile liquids, Dalton's law of partial pressures tells us that the total vapour pressure over the solution (\\( p_{\\text{total}} \\)) is the sum of the partial pressures.",
    "question": "If \\( p_1 = p_1^0 x_1 \\) and \\( p_2 = p_2^0 x_2 \\), and \\( x_1 = 1 - x_2 \\), what does the equation for \\( p_{\\text{total}} \\) reveal?",
    "options": [
      "A) Total vapour pressure is totally independent of \\( x_2 \\).",
      "B) Total vapour pressure varies linearly with the mole fraction of component 2 (\\( x_2 \\)).",
      "C) Total vapour pressure is always equal to \\( p_1^0 + p_2^0 \\).",
      "D) Total vapour pressure decreases exponentially."
    ],
    "answer": "B) Total vapour pressure varies linearly with the mole fraction of component 2 (\\( x_2 \\)).",
    "explanation": "Substituting the terms yields \\( p_{\\text{total}} = p_1^0 + (p_2^0 - p_1^0) x_2 \\), showing that the total pressure is a linear function of the mole fraction of component 2."
  },
  {
    "id": 44,
    "context": "Once the liquids have evaporated, we might want to know the composition of the *vapour* phase, not just the liquid phase. We use \\( y_1 \\) and \\( y_2 \\) for the mole fractions in the vapour phase.",
    "question": "How do you calculate the mole fraction of component 1 in the vapour phase (\\( y_1 \\))?",
    "options": [
      "A) \\( y_1 = p_1 \\times P_{\\text{total}} \\)",
      "B) \\( y_1 = \\frac{p_1^0}{P_{\\text{total}}} \\)",
      "C) \\( y_1 = \\frac{p_1}{P_{\\text{total}}} \\)",
      "D) \\( y_1 = 1 - x_1 \\)"
    ],
    "answer": "C) \\( y_1 = \\frac{p_1}{P_{\\text{total}}} \\)",
    "explanation": "Using Dalton's law of partial pressures, the mole fraction in the gas phase is the partial pressure of that component divided by the total pressure: \\( p_1 = y_1 P_{\\text{total}} \\), so \\( y_1 = \\frac{p_1}{P_{\\text{total}}} \\)."
  },
  {
    "id": 45,
    "context": "Look closely at Raoult's Law (\\( p_i = p_i^0 x_i \\)) and Henry's Law (\\( p = K_H x \\)). In both, partial pressure is proportional to mole fraction.",
    "question": "Under what condition does Raoult's Law become a special case of Henry's Law?",
    "options": [
      "A) When the solute is completely non-volatile.",
      "B) When the Henry's Law constant \\( K_H \\) becomes equal to the vapour pressure of the pure component \\( p_i^0 \\).",
      "C) When the mole fraction \\( x \\) reaches 1.",
      "D) When the temperature drops below freezing."
    ],
    "answer": "B) When the Henry's Law constant \\( K_H \\) becomes equal to the vapour pressure of the pure component \\( p_i^0 \\).",
    "explanation": "The equations are identical in form. Raoult's law is a special case of Henry's law where the proportionality constant \\( K_H \\) equals \\( p_1^0 \\)."
  },
  {
    "id": 46,
    "context": "Now consider what happens when you dissolve a *non-volatile* solid (like sugar) into a volatile liquid (like water). The vapour pressure changes.",
    "question": "How does the vapour pressure of a solution containing a non-volatile solute compare to the vapour pressure of the pure solvent?",
    "options": [
      "A) It is always exactly the same.",
      "B) It is always higher.",
      "C) It is always lower.",
      "D) It depends on the chemical nature of the solid."
    ],
    "answer": "C) It is always lower.",
    "explanation": "The vapour pressure of a solution with a non-volatile solute is solely from the solvent and is always lower than that of the pure solvent."
  },
  {
    "id": 47,
    "context": "The reason for this lowering of vapour pressure lies at the surface of the liquid where evaporation takes place.",
    "question": "Why does adding a non-volatile solute decrease the vapour pressure of the solvent?",
    "options": [
      "A) The solute actively pulls vapour molecules back into the liquid.",
      "B) The solute undergoes a chemical reaction with the solvent to create a vacuum.",
      "C) Solute molecules occupy part of the surface area, reducing the fraction of surface covered by solvent molecules escaping into vapour.",
      "D) The solute cools the solution down."
    ],
    "answer": "C) Solute molecules occupy part of the surface area, reducing the fraction of surface covered by solvent molecules escaping into vapour.",
    "explanation": "Because both solute and solvent molecules occupy the surface, fewer solvent molecules are at the surface to escape, thus reducing the vapour pressure."
  },
  {
    "id": 48,
    "context": "Liquid-liquid solutions can be classified based on how well they obey Raoult's Law.",
    "question": "What do we call solutions that obey Raoult's law over the entire range of concentration?",
    "options": [
      "A) Saturated solutions",
      "B) Non-ideal solutions",
      "C) Azeotropes",
      "D) Ideal solutions"
    ],
    "answer": "D) Ideal solutions",
    "explanation": "Solutions that strictly obey Raoult's law across all concentration ranges are defined as ideal solutions (e.g., n-hexane and n-heptane)."
  },
  {
    "id": 49,
    "context": "Ideal solutions don't just obey Raoult's Law; they also have two distinct thermodynamic properties regarding enthalpy (\\( \\Delta H \\)) and volume (\\( \\Delta V \\)) when mixing.",
    "question": "What are the values of the enthalpy of mixing (\\( \\Delta_{\\text{mix}}H \\)) and the volume of mixing (\\( \\Delta_{\\text{mix}}V \\)) for an ideal solution?",
    "options": [
      "A) Both are positive (greater than zero).",
      "B) Both are zero.",
      "C) Both are negative (less than zero).",
      "D) \\( \\Delta_{\\text{mix}}H \\) is zero, but \\( \\Delta_{\\text{mix}}V \\) is positive."
    ],
    "answer": "B) Both are zero.",
    "explanation": "In an ideal solution, no heat is absorbed or evolved (\\( \\Delta_{\\text{mix}}H = 0 \\)), and the total volume is perfectly additive (\\( \\Delta_{\\text{mix}}V = 0 \\)), due to the A-A and B-B interactions being nearly equal to A-B interactions."
  },
  {
    "id": 50,
    "context": "Many solutions do not obey Raoult's Law over the entire range of concentration. These are non-ideal solutions, and they can exhibit large positive or negative deviations.",
    "question": "What occurs when a binary mixture shows a very large deviation from Raoult's Law, such that liquid and vapour phases have the exact same composition at a specific concentration and boil at a constant temperature?",
    "options": [
      "A) The mixture forms an amalgam.",
      "B) The mixture forms an ideal solution.",
      "C) The mixture forms an azeotrope.",
      "D) The mixture separates into two distinct layers."
    ],
    "answer": "C) The mixture forms an azeotrope.",
    "explanation": "Azeotropes are binary mixtures that boil at a constant temperature and have the same composition in the liquid and vapour phases, making them impossible to separate by simple fractional distillation."
  }
]

 

let idx = 0, phase = 'context', chosen = null, correct = 0, wrong = 0;
let answered = [];

function acc() {
  const total = correct + wrong;
  return total === 0 ? '--' : Math.round((correct / total) * 100) + '%';
}

function updateHUD() {
  document.getElementById('hdr-correct').textContent = correct;
  document.getElementById('hdr-wrong').textContent = wrong;
  document.getElementById('hdr-acc').textContent = acc();
  const pct = idx >= quizData.length ? 100 : Math.round((idx / quizData.length) * 100);
  // document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-text').textContent =
    idx >= quizData.length ? 'COMPLETE' : `Q ${idx + 1} / ${quizData.length}`;
}

function refreshScore() {
  correct = answered.filter(a => a?.ok).length;
  wrong = answered.filter(a => a && !a.ok).length;
}

function recordAnswer(q) {
  if (answered[idx]) return;
  answered[idx] = {
    selected: chosen,
    ok: chosen === q.answer
  };
  refreshScore();
}

function prevButton() {
  return idx > 0
    ? '<button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>'
    : '';
}

function formatRanges(numbers) {
  const ranges = [];
  let start = numbers[0];
  let end = numbers[0];

  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] === end + 1) {
      end = numbers[i];
      continue;
    }

    ranges.push(start === end ? `${start}` : `${start}-${end}`);
    start = numbers[i];
    end = numbers[i];
  }

  return ranges.join(', ');
}

function answeredRange() {
  const numbers = answered
    .map((answer, i) => answer ? i + 1 : null)
    .filter(Boolean);

  return formatRanges(numbers);
}

function questionGlimpse(question) {
  return question.length > 58 ? `${question.slice(0, 58)}...` : question;
}

function bindPrev() {
  const btn = document.getElementById('btn-prev');
  if (!btn) return;
  btn.onclick = () => { idx--; phase = 'explanation'; render(); };
}

function bindJump() {
  const input = document.getElementById('answered-jump');
  const preview = document.getElementById('answered-preview');
  if (!input || !preview) return;

  const updatePreview = () => {
    const target = Number(input.value) - 1;
    preview.textContent = answered[target]
      ? `Question ${target + 1}: ${questionGlimpse(quizData[target].question)}`
      : `Allowed values: ${answeredRange()}`;
  };

  const jumpToInput = () => {
    const target = Number(input.value) - 1;
    if (!answered[target]) {
      updatePreview();
      return;
    }

    idx = target;
    phase = 'explanation';
    render();
  };

  input.oninput = updatePreview;
  input.onchange = updatePreview;
  document.getElementById('btn-jump').onclick = jumpToInput;

  updatePreview();
}

function clearKeyboardHandler() {
  document.onkeydown = null;
}

function render() {
  updateHUD();
  const c = document.getElementById('card-container');
  c.innerHTML = '';
  if (idx >= quizData.length) { renderFinal(c); return; }
  if (phase === 'context')      renderCtx(c);
  else if (phase === 'question') renderQ(c);
  else                           renderExp(c);
}

function renderCtx(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  c.innerHTML = `
    <div class="sf-label">context // node ${idx + 1}</div>
    <div class="sf-content">${q.context}</div>
    <button class="sf-action" id="btn-fwd">PROCEED TO QUERY &gt;</button>
  `;
  document.getElementById('btn-fwd').onclick = () => { phase = 'question'; render(); };
}

function renderQ(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  chosen = null;
  const opts = q.options.map(o =>
    `<li><button class="sf-opt-btn" data-val="${o.replace(/"/g, '&quot;')}">${o}</button></li>`
  ).join('');
  c.innerHTML = `
    <div class="sf-label">query // node ${idx + 1}</div>
    <div class="sf-content">${q.question}</div>
    <ul class="sf-options">${opts}</ul>
    <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
  `;
  const sub = document.getElementById('btn-sub');
  const optionBtns = c.querySelectorAll('.sf-opt-btn');
  const selectOption = (btn) => {
    optionBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    chosen = btn.getAttribute('data-val');
    sub.disabled = false;
  };

  optionBtns.forEach(btn => {
    btn.onclick = () => {
      selectOption(btn);
    };
  });

  const submitAnswer = () => {
    recordAnswer(q);
    phase = 'explanation';
    render();
  };

  sub.onclick = submitAnswer;

  document.onkeydown = (event) => {
    const optionNumber = Number(event.key);

    if (Number.isInteger(optionNumber) && optionNumber >= 1 && optionNumber <= optionBtns.length) {
      event.preventDefault();
      selectOption(optionBtns[optionNumber - 1]);
      return;
    }

    if (event.key !== 'Enter') return;

    event.preventDefault();

    if (!chosen) {
      selectOption(optionBtns[0]);
      return;
    }

    submitAnswer();
  };
}

function renderExp(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  const response = answered[idx] || { selected: chosen, ok: chosen === q.answer };
  const ok = response.ok;
  const btnLbl = idx === quizData.length - 1 ? 'FINISH MISSION' : 'NEXT NODE &gt;';
  const opts = q.options.map(o => {
    let cls = 'sf-opt-btn';
    if (o === q.answer)            cls += ' correct-reveal';
    else if (o === response.selected && !ok)  cls += ' wrong-reveal';
    return `<li><button class="${cls}" disabled>${o}</button></li>`;
  }).join('');
  c.innerHTML = `
    <div class="sf-label">analysis // node ${idx + 1}</div>
    <div class="sf-feedback ${ok ? 'ok' : 'fail'}">${ok ? '[ CORRECT ]' : '[ INCORRECT ]'}</div>
    <div class="sf-content"><strong>Question:</strong> ${q.question}</div>
    <ul class="sf-options">${opts}</ul>
    <div class="sf-explanation">${q.explanation}</div>
    <div class="sf-review-jump">
      <label for="answered-jump">Jump to</label>
      <input id="answered-jump" type="number" min="1" max="${quizData.length}" value="${idx + 1}" inputmode="numeric">
      <span class="sf-review-allowed">Allowed: ${answeredRange()}</span>
      <button id="btn-jump" class="sf-action sf-action-secondary">Jump</button>
      <div id="answered-preview" class="sf-review-preview"></div>
    </div>
    <div class="sf-actions">
      ${prevButton()}
      <button class="sf-action" id="btn-nxt">${btnLbl}</button>
    </div>
  `;
  bindPrev();
  bindJump();
  const goNext = () => {
    idx++;
    phase = answered[idx] ? 'explanation' : 'context';
    render();
  };

  document.getElementById('btn-nxt').onclick = goNext;

  document.onkeydown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    goNext();
  };
}

function renderFinal(c) {
  clearKeyboardHandler();
  const total = correct + wrong;
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  const grade      = pct >= 90 ? 'EXCEPTIONAL' : pct >= 70 ? 'PROFICIENT' : pct >= 50 ? 'DEVELOPING' : 'RETRY';
  const gradeColor = pct >= 90 ? 'var(--sf-success)' : pct >= 70 ? 'var(--sf-accent)' : pct >= 50 ? '#ffaa00' : 'var(--sf-error)';
  c.innerHTML = `
    <div class="sf-final">
      <div class="sf-final-title">// mission complete //</div>
      <div class="sf-final-stats">
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-success)">${correct}</span><span class="lbl">correct</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-error)">${wrong}</span><span class="lbl">incorrect</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-accent)">${pct}%</span><span class="lbl">accuracy</span></div>
      </div>
      <div class="sf-grade" style="color:${gradeColor}">${grade}</div>
      <div class="sf-final-note">For best pedagogical outcomes, repeat this quiz 2–3 times until the narrative flow feels entirely familiar.</div>
      <div class="sf-actions">
        <button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>
        <button class="sf-action" id="btn-restart">RESTART SEQUENCE &gt;</button>
      </div>
    </div>
  `;
  document.getElementById('btn-prev').onclick = () => {
    idx = quizData.length - 1;
    phase = 'explanation';
    render();
  };
  document.getElementById('btn-restart').onclick = () => {
    idx = 0; phase = 'context'; chosen = null; correct = 0; wrong = 0; answered = []; render();
  };
}

render();
