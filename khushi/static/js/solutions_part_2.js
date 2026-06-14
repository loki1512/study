// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "We've learned that Raoult's Law allows us to predict the vapour pressure of a solution based on its pure components. However, nature isn't always so perfectly predictable. Solutions are broadly classified based on whether they strictly follow this rule.",
    "question": "What is the primary defining characteristic of an 'ideal solution'?",
    "options": [
      "A) It is always a mixture of two gases.",
      "B) It obeys Raoult's law over the entire range of concentration.",
      "C) Its vapour pressure is always higher than expected.",
      "D) It cannot be separated by fractional distillation."
    ],
    "answer": "B) It obeys Raoult's law over the entire range of concentration.",
    "explanation": "Ideal solutions are those rare mixtures that perfectly obey Raoult's law (\\( p_i = p_i^0 x_i \\)) across all possible concentrations of the components."
  },
  {
    "id": 2,
    "context": "Ideal solutions aren't just defined by their vapour pressure. When you mix two pure liquids to form an ideal solution, there are specific rules about energy and space that must be followed.",
    "question": "Which of the following thermodynamic conditions must be met for a solution to be considered perfectly ideal?",
    "options": [
      "A) \\( \\Delta_{\\text{mix}}H > 0 \\) and \\( \\Delta_{\\text{mix}}V < 0 \\)",
      "B) \\( \\Delta_{\\text{mix}}H = 0 \\) and \\( \\Delta_{\\text{mix}}V = 0 \\)",
      "C) \\( \\Delta_{\\text{mix}}H < 0 \\) and \\( \\Delta_{\\text{mix}}V = 0 \\)",
      "D) \\( \\Delta_{\\text{mix}}H = 100 \\) and \\( \\Delta_{\\text{mix}}V = 100 \\)"
    ],
    "answer": "B) \\( \\Delta_{\\text{mix}}H = 0 \\) and \\( \\Delta_{\\text{mix}}V = 0 \\)",
    "explanation": "For an ideal solution, the enthalpy of mixing (\\( \\Delta_{\\text{mix}}H \\)) is zero, meaning no heat is absorbed or released. The volume of mixing (\\( \\Delta_{\\text{mix}}V \\)) is also zero, meaning the total volume is perfectly additive."
  },
  {
    "id": 3,
    "context": "The reason an ideal solution has no heat of mixing and perfectly additive volumes lies deep at the molecular level, specifically in the attractive forces between the molecules.",
    "question": "In a binary ideal solution made of components A and B, how do the intermolecular attractive forces compare?",
    "options": [
      "A) A-B interactions are much stronger than A-A and B-B interactions.",
      "B) A-A interactions are completely non-existent.",
      "C) A-A, B-B, and A-B intermolecular attractive forces are nearly equal.",
      "D) A-B interactions actively repel each other."
    ],
    "answer": "C) A-A, B-B, and A-B intermolecular attractive forces are nearly equal.",
    "explanation": "A nearly ideal solution forms when the new solute-solvent interactions (A-B) are practically identical in strength to the original solute-solute (A-A) and solvent-solvent (B-B) interactions."
  },
  {
    "id": 4,
    "context": "While perfectly ideal solutions are extremely rare in the real world, some mixtures of very similar molecules come very close to behaving ideally.",
    "question": "Which of the following pairs of liquids is an example that forms a nearly ideal solution?",
    "options": [
      "A) Ethanol and Water",
      "B) n-hexane and n-heptane",
      "C) Chloroform and Acetone",
      "D) Nitric acid and Water"
    ],
    "answer": "B) n-hexane and n-heptane",
    "explanation": "n-hexane and n-heptane are chemically very similar (both are non-polar alkanes of similar size), so their intermolecular forces are almost identical, allowing them to form a nearly ideal solution."
  },
  {
    "id": 5,
    "context": "If a solution is not ideal, it means it deviates from Raoult's law. The vapour pressure might be higher or lower than what the mathematical formula predicts.",
    "question": "When a solution's vapour pressure is higher than that predicted by Raoult's law, what type of deviation is this called?",
    "options": [
      "A) Positive deviation",
      "B) Negative deviation",
      "C) Neutral deviation",
      "D) Standard deviation"
    ],
    "answer": "A) Positive deviation",
    "explanation": "If the vapour pressure is higher than predicted, the mixture exhibits a positive deviation from Raoult's law."
  },
  {
    "id": 6,
    "context": "A positive deviation means more molecules are escaping into the vapour phase than we would expect. Let's think about what must be happening to the intermolecular forces to allow this easier escape.",
    "question": "What is the molecular cause of a positive deviation from Raoult's law in a binary solution of A and B?",
    "options": [
      "A) A-B interactions are stronger than A-A and B-B interactions.",
      "B) A-B interactions are weaker than A-A and B-B interactions.",
      "C) The molecules undergo a chemical reaction to form a gas.",
      "D) The solvent molecules completely trap the solute molecules."
    ],
    "answer": "B) A-B interactions are weaker than A-A and B-B interactions.",
    "explanation": "Because the new A-B interactions are weaker, the molecules find it easier to escape the liquid phase than they did in their pure states, leading to a higher vapour pressure."
  },
  {
    "id": 7,
    "context": "A classic example of positive deviation occurs when you mix ethanol and acetone. Ethanol molecules normally hold tightly to each other.",
    "question": "Why does a mixture of ethanol and acetone show a positive deviation from Raoult's law?",
    "options": [
      "A) Acetone molecules undergo combustion when touching ethanol.",
      "B) Acetone molecules get between ethanol molecules and break their hydrogen bonds, weakening overall interactions.",
      "C) Ethanol forms stronger hydrogen bonds with acetone than with itself.",
      "D) Both liquids immediately solidify upon mixing."
    ],
    "answer": "B) Acetone molecules get between ethanol molecules and break their hydrogen bonds, weakening overall interactions.",
    "explanation": "Pure ethanol has strong hydrogen bonding. Acetone disrupts these bonds, making the A-B interactions weaker than the original A-A interactions, causing molecules to escape more easily."
  },
  {
    "id": 8,
    "context": "Conversely, a negative deviation occurs when the vapour pressure is lower than predicted. This implies the molecules are 'stuck' in the liquid phase more than they usually are.",
    "question": "What is the molecular cause of a negative deviation from Raoult's law?",
    "options": [
      "A) A-B interactions are weaker than A-A and B-B interactions.",
      "B) A-B interactions are stronger than A-A and B-B interactions.",
      "C) The molecules evaporate instantly.",
      "D) The mixing process is highly endothermic."
    ],
    "answer": "B) A-B interactions are stronger than A-A and B-B interactions.",
    "explanation": "Stronger A-B interactions mean the molecules hold onto each other more tightly in the mixture than in the pure liquids, decreasing their escaping tendency and lowering vapour pressure."
  },
  {
    "id": 9,
    "context": "To see a negative deviation in action, we can mix chloroform and acetone. Instead of disrupting bonds, they form new ones.",
    "question": "What specific type of bond forms between chloroform and acetone that leads to a negative deviation?",
    "options": [
      "A) Ionic bond",
      "B) Covalent bond",
      "C) Metallic bond",
      "D) Hydrogen bond"
    ],
    "answer": "D) Hydrogen bond",
    "explanation": "The chloroform molecule forms a hydrogen bond with the acetone molecule. This new, stronger interaction decreases the escaping tendency of the molecules, resulting in a negative deviation."
  },
  {
    "id": 10,
    "context": "When a solution deviates highly from Raoult's law, a fascinating phenomenon occurs at a specific concentration: the liquid and its vapour end up having the exact same composition.",
    "question": "What is the term for a binary mixture that has the same composition in liquid and vapour phase and boils at a constant temperature?",
    "options": [
      "A) Isotonic solution",
      "B) Ideal solution",
      "C) Azeotrope",
      "D) Amalgam"
    ],
    "answer": "C) Azeotrope",
    "explanation": "An azeotrope is a constant-boiling mixture where the vapour has the exact same proportion of components as the unboiled liquid, making separation by simple fractional distillation impossible."
  },
  {
    "id": 11,
    "context": "Azeotropes are classified by how their boiling point compares to the pure liquids. Solutions that show a large positive deviation form one specific type.",
    "question": "What type of azeotrope is formed by solutions exhibiting a large positive deviation from Raoult's law?",
    "options": [
      "A) Minimum boiling azeotrope",
      "B) Maximum boiling azeotrope",
      "C) Neutral boiling azeotrope",
      "D) Freezing point azeotrope"
    ],
    "answer": "A) Minimum boiling azeotrope",
    "explanation": "Large positive deviations mean high vapour pressure. High vapour pressure means it takes less heat to make the solution boil, resulting in a minimum boiling azeotrope."
  },
  {
    "id": 12,
    "context": "Fermenting sugars yields ethanol and water. However, you can't get 100% pure ethanol just by boiling this mixture, because it forms an azeotrope.",
    "question": "What is the approximate composition of the minimum boiling azeotrope formed by ethanol and water?",
    "options": [
      "A) 50% ethanol by volume",
      "B) 68% ethanol by volume",
      "C) 95% ethanol by volume",
      "D) 100% ethanol by volume"
    ],
    "answer": "C) 95% ethanol by volume",
    "explanation": "Fractional distillation of an ethanol-water mixture stops working at approximately 95% ethanol by volume because it reaches the azeotrope composition where liquid and vapour compositions are identical."
  },
  {
    "id": 13,
    "context": "On the other hand, solutions showing large negative deviations (lower vapour pressure) require more heat to boil.",
    "question": "What type of azeotrope is formed by a mixture of Nitric acid and water (which shows a large negative deviation)?",
    "options": [
      "A) Minimum boiling azeotrope",
      "B) Maximum boiling azeotrope",
      "C) Zero boiling azeotrope",
      "D) Sublimation azeotrope"
    ],
    "answer": "B) Maximum boiling azeotrope",
    "explanation": "Large negative deviations result in lower vapour pressure, meaning the mixture must be heated to a higher temperature to boil, creating a maximum boiling azeotrope (e.g., 68% nitric acid)."
  },
  {
    "id": 14,
    "context": "Now we transition to a special set of properties. When you add a non-volatile solute to a solvent, several physical properties of the solvent change in a very predictable way.",
    "question": "What is the unique defining feature of 'colligative properties'?",
    "options": [
      "A) They depend only on the chemical identity of the solute.",
      "B) They depend only on the physical state of the solvent.",
      "C) They depend on the number of solute particles relative to the total number of particles, irrespective of their nature.",
      "D) They are completely random and unpredictable."
    ],
    "answer": "C) They depend on the number of solute particles relative to the total number of particles, irrespective of their nature.",
    "explanation": "Colligative properties (from Latin 'co' meaning together, 'ligare' to bind) are properties that depend strictly on the ratio or number of solute particles, not on what the particles actually are."
  },
  {
    "id": 15,
    "context": "There are four primary colligative properties studied in chemistry. Knowing them is essential for understanding how solutions behave compared to pure solvents.",
    "question": "Which of the following is NOT one of the four colligative properties?",
    "options": [
      "A) Relative lowering of vapour pressure",
      "B) Elevation of boiling point",
      "C) Depression of freezing point",
      "D) Increase of solvent density"
    ],
    "answer": "D) Increase of solvent density",
    "explanation": "The four colligative properties are: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure. Density is not a colligative property."
  },
  {
    "id": 16,
    "context": "Let's examine the first colligative property: Relative lowering of vapour pressure. We know adding a non-volatile solute lowers the solvent's vapour pressure (\\( \\Delta p_1 \\)).",
    "question": "According to Raoult's derived equation, what is the 'relative lowering of vapour pressure' (\\( \\frac{\\Delta p_1}{p_1^0} \\)) directly equal to?",
    "options": [
      "A) The mole fraction of the solvent (\\( x_1 \\))",
      "B) The mole fraction of the solute (\\( x_2 \\))",
      "C) The molarity of the solution (\\( M \\))",
      "D) The molality of the solution (\\( m \\))"
    ],
    "answer": "B) The mole fraction of the solute (\\( x_2 \\))",
    "explanation": "The equation \\( \\frac{p_1^0 - p_1}{p_1^0} = x_2 \\) shows that the relative lowering of the vapour pressure is perfectly equal to the mole fraction of the non-volatile solute."
  },
  {
    "id": 17,
    "context": "The relative lowering of vapour pressure equation is \\( \\frac{\\Delta p_1}{p_1^0} = \\frac{n_2}{n_1 + n_2} \\). For very dilute solutions, chemists use a handy approximation to make calculations easier.",
    "question": "In a dilute solution where the number of moles of solvent (\\( n_1 \\)) is much greater than solute (\\( n_2 \\)), how is the denominator approximated?",
    "options": [
      "A) \\( n_1 + n_2 \\approx n_2 \\)",
      "B) \\( n_1 + n_2 \\approx n_1 \\)",
      "C) \\( n_1 + n_2 \\approx 1 \\)",
      "D) \\( n_1 + n_2 \\approx 0 \\)"
    ],
    "answer": "B) \\( n_1 + n_2 \\approx n_1 \\)",
    "explanation": "For very dilute solutions (\\( n_2 << n_1 \\)), \\( n_2 \\) in the denominator is so small it can be neglected, simplifying the fraction to \\( \\frac{n_2}{n_1} \\)."
  },
  {
    "id": 18,
    "context": "Let's see how this is useful. If we expand the simplified formula \\( \\frac{\\Delta p_1}{p_1^0} = \\frac{n_2}{n_1} \\) using mass (\\( w \\)) and molar mass (\\( M \\)), we get a powerful tool.",
    "question": "What is the expanded formula for relative lowering of vapour pressure in a dilute solution?",
    "options": [
      "A) \\( \\frac{p_1^0 - p_1}{p_1^0} = \\frac{w_2 \\times M_1}{M_2 \\times w_1} \\)",
      "B) \\( \\frac{p_1^0 - p_1}{p_1^0} = \\frac{w_1 \\times M_2}{M_1 \\times w_2} \\)",
      "C) \\( \\frac{p_1^0 - p_1}{p_1^0} = \\frac{w_2 \\times w_1}{M_2 \\times M_1} \\)",
      "D) \\( \\frac{p_1^0 - p_1}{p_1^0} = M_2 \\times w_2 \\)"
    ],
    "answer": "A) \\( \\frac{p_1^0 - p_1}{p_1^0} = \\frac{w_2 \\times M_1}{M_2 \\times w_1} \\)",
    "explanation": "Since \\( n_2 = \\frac{w_2}{M_2} \\) and \\( n_1 = \\frac{w_1}{M_1} \\), substituting them into \\( \\frac{n_2}{n_1} \\) yields \\( \\frac{w_2 \\times M_1}{M_2 \\times w_1} \\). This is used to find the molar mass of an unknown solute."
  },
  {
    "id": 19,
    "context": "The second colligative property relates to boiling. To understand why boiling point changes, we must first agree on what 'boiling' actually is from a physical chemistry standpoint.",
    "question": "At what specific point does a liquid begin to boil?",
    "options": [
      "A) When its temperature reaches exactly 100°C.",
      "B) When its vapour pressure equals the surrounding atmospheric pressure.",
      "C) When all intermolecular bonds are completely destroyed.",
      "D) When its density becomes lower than the surrounding air."
    ],
    "answer": "B) When its vapour pressure equals the surrounding atmospheric pressure.",
    "explanation": "A liquid boils strictly at the temperature where the pressure exerted by its own vapours becomes perfectly equal to the external atmospheric pressure (e.g., 1.013 bar)."
  },
  {
    "id": 20,
    "context": "We know adding a non-volatile solute lowers the solvent's vapour pressure. Think about how this affects the temperature required to make the vapour pressure reach atmospheric pressure.",
    "question": "Why does a solution containing a non-volatile solute have a higher boiling point than the pure solvent?",
    "options": [
      "A) The solute actively absorbs heat, acting as a coolant.",
      "B) Because the vapour pressure is lowered, a higher temperature is needed to increase the vapour pressure back up to atmospheric pressure.",
      "C) The solute forms a physical crust on the surface that traps heat.",
      "D) Solutions are naturally hotter than pure solvents."
    ],
    "answer": "B) Because the vapour pressure is lowered, a higher temperature is needed to increase the vapour pressure back up to atmospheric pressure.",
    "explanation": "The lowered vapour pressure means the solution is 'further away' from reaching 1 atm. Thus, you must supply extra heat (raise the temperature) to cross that threshold. This is called the elevation of boiling point."
  },
  {
    "id": 21,
    "context": "The elevation of boiling point (\\( \\Delta T_b \\)) is a colligative property, meaning it depends on concentration. Experiments show it is proportional to a specific concentration unit.",
    "question": "Which concentration unit is the elevation of boiling point (\\( \\Delta T_b \\)) directly proportional to?",
    "options": [
      "A) Molarity (\\( M \\))",
      "B) Mole fraction (\\( x \\))",
      "C) Molality (\\( m \\))",
      "D) Mass percentage (w/w)"
    ],
    "answer": "C) Molality (\\( m \\))",
    "explanation": "For dilute solutions, \\( \\Delta T_b \\propto m \\), leading to the equation \\( \\Delta T_b = K_b \\times m \\), where \\( m \\) is the molality."
  },
  {
    "id": 22,
    "context": "In the formula \\( \\Delta T_b = K_b m \\), the proportionality constant \\( K_b \\) is unique to the specific solvent being used.",
    "question": "What is the formal name for the constant \\( K_b \\)?",
    "options": [
      "A) Ebullioscopic Constant",
      "B) Cryoscopic Constant",
      "C) Henry's Constant",
      "D) Raoult's Constant"
    ],
    "answer": "A) Ebullioscopic Constant",
    "explanation": "\\( K_b \\) is called the Boiling Point Elevation Constant, Molal Elevation Constant, or Ebullioscopic Constant."
  },
  {
    "id": 23,
    "context": "Constants always have specific units. Let's look at the equation \\( \Delta T_b = K_b \\times m \\). \\( \\Delta T_b \\) is in Kelvin (K), and molality (\\( m \\)) is in \\( \\text{mol kg}^{-1} \\).",
    "question": "What is the unit of the Ebullioscopic constant (\\( K_b \\))?",
    "options": [
      "A) \\( \\text{K mol L}^{-1} \\)",
      "B) \\( \\text{K kg mol}^{-1} \\)",
      "C) \\( \\text{kg mol K}^{-1} \\)",
      "D) Unitless"
    ],
    "answer": "B) \\( \\text{K kg mol}^{-1} \\)",
    "explanation": "Solving for \\( K_b \\), we get \\( K_b = \\frac{\\Delta T_b}{m} \\). Putting in the units yields \\( \\frac{\\text{K}}{\\text{mol kg}^{-1}} \\), which rearranges to \\( \\text{K kg mol}^{-1} \\)."
  },
  {
    "id": 24,
    "context": "Let's perform a step-by-step boiling point calculation. Suppose you dissolve 18 g of glucose (\\( C_6H_{12}O_6 \\), molar mass 180 g/mol) in 1 kg of water.",
    "question": "What is the molality (\\( m \\)) of this glucose solution?",
    "options": [
      "A) \\( 18 \\text{ mol kg}^{-1} \\)",
      "B) \\( 1.8 \\text{ mol kg}^{-1} \\)",
      "C) \\( 0.1 \\text{ mol kg}^{-1} \\)",
      "D) \\( 10 \\text{ mol kg}^{-1} \\)"
    ],
    "answer": "C) \\( 0.1 \\text{ mol kg}^{-1} \\)",
    "explanation": "Moles of glucose = \\( \\frac{18 \\text{ g}}{180 \\text{ g/mol}} = 0.1 \\text{ mol} \\). Molality = Moles of solute / kg of solvent = \\( \\frac{0.1 \\text{ mol}}{1 \\text{ kg}} = 0.1 \\text{ mol kg}^{-1} \\)."
  },
  {
    "id": 25,
    "context": "We have a 0.1 m solution of glucose. The Ebullioscopic constant (\\( K_b \\)) for water is given as \\( 0.52 \\text{ K kg mol}^{-1} \\). We use \\( \\Delta T_b = K_b m \\).",
    "question": "What is the *change* in the boiling point (\\( \\Delta T_b \\)) for this solution?",
    "options": [
      "A) 0.052 K",
      "B) 5.2 K",
      "C) 0.52 K",
      "D) 0.1 K"
    ],
    "answer": "A) 0.052 K",
    "explanation": "\\( \\Delta T_b = 0.52 \\text{ K kg mol}^{-1} \\times 0.1 \\text{ mol kg}^{-1} = 0.052 \\text{ K} \\). This is the amount the boiling point is elevated."
  },
  {
    "id": 26,
    "context": "The pure solvent, water, boils at exactly 373.15 K at standard pressure (1.013 bar). The elevation is 0.052 K.",
    "question": "At what exact temperature will this glucose solution boil?",
    "options": [
      "A) 373.098 K",
      "B) 373.15 K",
      "C) 373.202 K",
      "D) 100.052 K"
    ],
    "answer": "C) 373.202 K",
    "explanation": "The new boiling point \\( T_b = T_b^0 + \\Delta T_b \\). So, \\( 373.15 \\text{ K} + 0.052 \\text{ K} = 373.202 \\text{ K} \\)."
  },
  {
    "id": 27,
    "context": "The third colligative property is the Depression of Freezing Point. Just like boiling relates to vapour pressure, so does freezing. Freezing occurs when the liquid and solid phases are in dynamic equilibrium.",
    "question": "At the freezing point of a substance, what physical condition must be true regarding its liquid and solid phases?",
    "options": [
      "A) The liquid phase must have zero vapour pressure.",
      "B) The solid phase must have zero vapour pressure.",
      "C) The vapour pressure of the substance in its liquid phase must be equal to its vapour pressure in the solid phase.",
      "D) The temperature must be exactly 0 Kelvin."
    ],
    "answer": "C) The vapour pressure of the substance in its liquid phase must be equal to its vapour pressure in the solid phase.",
    "explanation": "A substance freezes when the escaping tendency of molecules from the solid equals that of the liquid, meaning their vapour pressures perfectly match."
  },
  {
    "id": 28,
    "context": "When a non-volatile solute is added, the vapour pressure of the liquid solvent decreases. It now hits the solid phase's vapour pressure curve at a lower temperature.",
    "question": "What is the formula for the depression in freezing point (\\( \\Delta T_f \\))?",
    "options": [
      "A) \\( \\Delta T_f = K_b m \\)",
      "B) \\( \\Delta T_f = K_f m \\)",
      "C) \\( \\Delta T_f = T_f - T_f^0 \\)",
      "D) \\( \\Delta T_f = \\frac{K_f}{m} \\)"
    ],
    "answer": "B) \\( \\Delta T_f = K_f m \\)",
    "explanation": "Similar to boiling point elevation, freezing point depression is directly proportional to molality: \\( \\Delta T_f = K_f \\times m \\)."
  },
  {
    "id": 29,
    "context": "The constant \\( K_f \\) is unique to the solvent, just like \\( K_b \\).",
    "question": "What are the common names for the constant \\( K_f \\)?",
    "options": [
      "A) Ebullioscopic Constant or Molal Elevation Constant",
      "B) Freezing Point Depression Constant or Cryoscopic Constant",
      "C) Universal Gas Constant",
      "D) Raoult's Freezing Constant"
    ],
    "answer": "B) Freezing Point Depression Constant or Cryoscopic Constant",
    "explanation": "\\( K_f \\) is known as the Freezing Point Depression Constant, Molal Depression Constant, or Cryoscopic Constant."
  },
  {
    "id": 30,
    "context": "The constants \\( K_f \\) and \\( K_b \\) aren't just random numbers; they depend on the fundamental thermodynamic properties of the solvent, such as its enthalpy of fusion (\\( \\Delta_{\\text{fus}}H \\)) and vapourisation (\\( \\Delta_{\\text{vap}}H \\)).",
    "question": "Which thermodynamic property is directly required to calculate the Cryoscopic constant (\\( K_f \\)) from scratch?",
    "options": [
      "A) Enthalpy of vapourisation (\\( \\Delta_{\\text{vap}}H \\))",
      "B) Enthalpy of mixing (\\( \\Delta_{\\text{mix}}H \\))",
      "C) Enthalpy of fusion (\\( \\Delta_{\\text{fus}}H \\))",
      "D) Heat capacity (\\( C_p \\))"
    ],
    "answer": "C) Enthalpy of fusion (\\( \\Delta_{\\text{fus}}H \\))",
    "explanation": "The formula for \\( K_f \\) is \\( \\frac{R \\times M_1 \\times (T_f)^2}{1000 \\times \\Delta_{\\text{fus}}H} \\). It relies heavily on the Enthalpy of fusion of the pure solvent."
  },
  {
    "id": 31,
    "context": "Let's calculate the molar mass using freezing point depression. Suppose 1.00 g of an unknown solute is dissolved in 50 g of benzene (\\( K_f = 5.12 \\text{ K kg mol}^{-1} \\)). The freezing point is lowered by 0.40 K.",
    "question": "Using the rearranged formula \\( M_2 = \\frac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1} \\), what is the molar mass (\\( M_2 \\)) of the solute?",
    "options": [
      "A) 128 g/mol",
      "B) 256 g/mol",
      "C) 512 g/mol",
      "D) 64 g/mol"
    ],
    "answer": "B) 256 g/mol",
    "explanation": "\\( M_2 = \\frac{5.12 \\times 1.00 \\times 1000}{0.40 \\times 50} = \\frac{5120}{20} = 256 \\text{ g mol}^{-1} \\)."
  },
  {
    "id": 32,
    "context": "The fourth and final colligative property involves placing a barrier between a solution and a pure solvent. This barrier is called a semipermeable membrane (SPM).",
    "question": "What is the key defining feature of a semipermeable membrane (SPM)?",
    "options": [
      "A) It allows both solute and solvent molecules to pass freely.",
      "B) It allows larger solute molecules to pass but completely blocks small solvent molecules.",
      "C) It allows small solvent molecules to pass but hinders the passage of bigger solute molecules.",
      "D) It creates an impenetrable wall that nothing can cross."
    ],
    "answer": "C) It allows small solvent molecules to pass but hinders the passage of bigger solute molecules.",
    "explanation": "An SPM has submicroscopic pores that are just large enough for solvent molecules (like water) to slip through, but too small for larger solute molecules to pass."
  },
  {
    "id": 33,
    "context": "When an SPM separates a pure solvent from a solution, a spontaneous flow occurs. This phenomenon is vital for plant and animal life.",
    "question": "What is the spontaneous flow of solvent molecules through a semipermeable membrane called, and in what direction does it naturally flow?",
    "options": [
      "A) Diffusion; from higher solute concentration to lower solute concentration.",
      "B) Osmosis; from pure solvent (lower concentration) to the solution (higher concentration).",
      "C) Reverse Osmosis; from solution to pure solvent.",
      "D) Plasmolysis; it flows in both directions equally."
    ],
    "answer": "B) Osmosis; from pure solvent (lower concentration) to the solution (higher concentration).",
    "explanation": "This flow is called osmosis. Solvent molecules always spontaneously flow from an area of lower solute concentration (or pure solvent) to an area of higher solute concentration."
  },
  {
    "id": 34,
    "context": "Osmosis will continue until equilibrium is reached, or until enough pressure builds up to stop it. We can artificially stop osmosis by applying our own pressure.",
    "question": "How is 'osmotic pressure' officially defined?",
    "options": [
      "A) The pressure exerted by the pure solvent to force its way through the membrane.",
      "B) The excess pressure that must be applied to the solution side to precisely prevent the passage of solvent molecules through the membrane.",
      "C) The pressure at which the semipermeable membrane breaks.",
      "D) The atmospheric pressure pressing down on both liquids."
    ],
    "answer": "B) The excess pressure that must be applied to the solution side to precisely prevent the passage of solvent molecules through the membrane.",
    "explanation": "Osmotic pressure is the exact amount of mechanical pressure you must apply to the solution to stop the incoming flow of solvent via osmosis."
  },
  {
    "id": 35,
    "context": "Like the other properties we've seen, osmotic pressure (\\( \\Pi \\)) is colligative. However, it uses a different unit of concentration than boiling/freezing point changes.",
    "question": "What is the mathematical equation for osmotic pressure for a dilute solution?",
    "options": [
      "A) \\( \\Pi = K_b m \\)",
      "B) \\( \\Pi = \\frac{n_2}{n_1} \\)",
      "C) \\( \\Pi = C R T \\)",
      "D) \\( \\Pi = m R T \\)"
    ],
    "answer": "C) \\( \\Pi = C R T \\)",
    "explanation": "Osmotic pressure is proportional to the Molarity (\\( C \\)) of the solution at a given temperature (\\( T \\)), with \\( R \\) being the gas constant. So, \\( \\Pi = C R T \\)."
  },
  {
    "id": 36,
    "context": "The osmotic pressure method has specific advantages over measuring boiling point elevation or freezing point depression.",
    "question": "Why is the osmotic pressure method widely preferred for determining the molar mass of biomolecules like proteins and polymers?",
    "options": [
      "A) Because biomolecules only dissolve in gases.",
      "B) Because it uses molality instead of molarity.",
      "C) Because the measurement is done around room temperature, protecting unstable biomolecules from heat, and the pressure magnitude is large even for dilute solutions.",
      "D) Because biomolecules cannot cross semipermeable membranes."
    ],
    "answer": "C) Because the measurement is done around room temperature, protecting unstable biomolecules from heat, and the pressure magnitude is large even for dilute solutions.",
    "explanation": "Biomolecules degrade at boiling temperatures. Osmotic pressure operates at room temperature, and because the magnitude of \\( \\Pi \\) is large even for dilute solutions of poorly soluble polymers, it is highly accurate."
  },
  {
    "id": 37,
    "context": "In medicine, fluids injected intravenously must be carefully balanced with the fluids already inside your blood cells to prevent cellular damage.",
    "question": "What do we call two solutions that have the exact same osmotic pressure at a given temperature?",
    "options": [
      "A) Hypertonic solutions",
      "B) Hypotonic solutions",
      "C) Isotonic solutions",
      "D) Azeotropic solutions"
    ],
    "answer": "C) Isotonic solutions",
    "explanation": "Isotonic solutions have equal osmotic pressures. When separated by a semipermeable membrane, no net osmosis occurs between them. Normal saline (0.9% NaCl w/v) is isotonic with blood plasma."
  },
  {
    "id": 38,
    "context": "If a red blood cell is placed in a solution with a salt concentration *greater* than 0.9% (mass/volume), the environment outside the cell is more concentrated.",
    "question": "What is this higher-concentration solution called, and what will happen to the blood cell?",
    "options": [
      "A) Hypotonic; the cell will swell.",
      "B) Isotonic; the cell will remain unchanged.",
      "C) Hypertonic; water will flow out of the cell, causing it to shrink.",
      "D) Hypertonic; water will flow into the cell, causing it to burst."
    ],
    "answer": "C) Hypertonic; water will flow out of the cell, causing it to shrink.",
    "explanation": "A solution with a higher concentration is hypertonic. Osmosis dictates water moves from low to high concentration, so water leaves the cell, causing it to shrink."
  },
  {
    "id": 39,
    "context": "Conversely, if a blood cell is placed in pure water or a solution with a salt concentration *less* than 0.9%, the inside of the cell is more concentrated.",
    "question": "What is this lower-concentration solution called, and what is its effect on the blood cell?",
    "options": [
      "A) Hypotonic; water flows into the cell, causing it to swell.",
      "B) Hypertonic; water flows out of the cell, causing it to shrink.",
      "C) Azeotropic; the cell boils.",
      "D) Isotonic; nothing happens."
    ],
    "answer": "A) Hypotonic; water flows into the cell, causing it to swell.",
    "explanation": "A lower-concentration solution is hypotonic. Water flows from the hypotonic solution into the more concentrated blood cell, causing it to swell and potentially burst."
  },
  {
    "id": 40,
    "context": "Osmosis explains many everyday biological phenomena. For example, people who consume a diet very high in salt often experience tissue swelling.",
    "question": "What is the medical term for the puffiness or swelling caused by water retention in tissue cells due to high salt intake?",
    "options": [
      "A) Plasmolysis",
      "B) Edema",
      "C) Anoxia",
      "D) Bends"
    ],
    "answer": "B) Edema",
    "explanation": "High salt intake makes the tissue's intercellular spaces hypertonic, drawing water out of the cells and causing water retention/swelling known as edema."
  },
  {
    "id": 41,
    "context": "We also use our knowledge of osmosis for food preservation. Salting meat or candying fruits protects them from bacterial spoilage.",
    "question": "How does salting meat preserve it from bacterial action?",
    "options": [
      "A) The salt acts as a chemical poison that explodes the bacteria.",
      "B) The salt is hypertonic; through osmosis, the bacterium loses water, shrivels, and dies.",
      "C) The salt lowers the temperature of the meat, freezing the bacteria.",
      "D) The salt blocks the bacteria's access to oxygen."
    ],
    "answer": "B) The salt is hypertonic; through osmosis, the bacterium loses water, shrivels, and dies.",
    "explanation": "The high salt concentration creates a hypertonic environment. Any bacteria landing on the meat will rapidly lose their internal water via osmosis, causing them to shrivel and die."
  },
  {
    "id": 42,
    "context": "Normally, solvent flows from pure solvent into the solution. However, we can actively force the solvent to go backward by applying immense pressure.",
    "question": "What condition must be met to initiate 'Reverse Osmosis'?",
    "options": [
      "A) The temperature must be raised to the boiling point.",
      "B) A pressure strictly equal to the osmotic pressure must be applied to the solution.",
      "C) A pressure physically larger than the osmotic pressure must be applied to the solution side.",
      "D) The semipermeable membrane must be removed completely."
    ],
    "answer": "C) A pressure physically larger than the osmotic pressure must be applied to the solution side.",
    "explanation": "Reverse osmosis occurs when you apply a mechanical pressure that is greater than the natural osmotic pressure, actively squeezing pure solvent out of the solution side."
  },
  {
    "id": 43,
    "context": "Reverse osmosis isn't just a lab trick; it is a critical industrial process used worldwide to secure drinking water.",
    "question": "What is the primary practical utility of reverse osmosis?",
    "options": [
      "A) Fermenting sugars into ethanol.",
      "B) Creating hypertonic medical IV drips.",
      "C) Desalination of sea water to create pure, potable water.",
      "D) Manufacturing rigid plastics."
    ],
    "answer": "C) Desalination of sea water to create pure, potable water.",
    "explanation": "By applying massive pressure to seawater against a membrane, pure water is squeezed out, leaving the salts behind. This process is called desalination."
  },
  {
    "id": 44,
    "context": "To perform reverse osmosis on seawater, immense pressure is required. The semipermeable membrane must be exceptionally strong yet perfectly permeable to water.",
    "question": "What polymer is commonly used as a workable porous membrane for the desalination of seawater?",
    "options": [
      "A) Cellulose acetate",
      "B) Polyvinyl chloride (PVC)",
      "C) Polystyrene",
      "D) Palladium lattice"
    ],
    "answer": "A) Cellulose acetate",
    "explanation": "A film of cellulose acetate placed over a suitable support is highly effective for desalination because it is permeable to water but strictly impermeable to the ions and impurities in seawater."
  },
  {
    "id": 45,
    "context": "Colligative properties calculate molar mass perfectly—as long as the solute behaves exactly as expected. But what if the solute breaks apart or clumps together in the solvent?",
    "question": "What term is used when the molar mass calculated via colligative properties is fundamentally lower or higher than the expected true value?",
    "options": [
      "A) Erroneous molar mass",
      "B) Theoretical molar mass",
      "C) Abnormal molar mass",
      "D) Isotonic molar mass"
    ],
    "answer": "C) Abnormal molar mass",
    "explanation": "If a solute dissociates (breaks apart) or associates (clumps together), the particle count changes, leading the colligative property formula to output an 'abnormal molar mass'."
  },
  {
    "id": 46,
    "context": "Let's look at dissociation. If you dissolve 1 mole of KCl in water, it completely separates into \\( K^+ \\) and \\( Cl^- \\) ions.",
    "question": "How does the dissociation of a strong electrolyte like KCl affect the experimentally determined molar mass using colligative properties?",
    "options": [
      "A) The determined molar mass is identical to the true value.",
      "B) The determined molar mass is always lower than the true value.",
      "C) The determined molar mass is always higher than the true value.",
      "D) The molar mass becomes completely unpredictable."
    ],
    "answer": "B) The determined molar mass is always lower than the true value.",
    "explanation": "Because 1 mole of KCl becomes 2 moles of particles, the colligative effect doubles. Since colligative property magnitude is inversely proportional to molar mass (e.g., \\( M_2 = \\frac{K_f w_2 \\times 1000}{\\Delta T_f w_1} \\)), doubling the effect halves the calculated molar mass."
  },
  {
    "id": 47,
    "context": "Association is the opposite of dissociation. Molecules like ethanoic acid (acetic acid) can form hydrogen bonds with each other when placed in non-polar solvents like benzene.",
    "question": "When acetic acid molecules dimerise (pair up) in benzene, how does it affect the calculated molar mass?",
    "options": [
      "A) The particle count decreases, making the calculated molar mass higher (twice the expected value).",
      "B) The particle count increases, making the calculated molar mass lower.",
      "C) The particle count stays the same, keeping the molar mass accurate.",
      "D) Dimerisation makes the solution explode."
    ],
    "answer": "A) The particle count decreases, making the calculated molar mass higher (twice the expected value).",
    "explanation": "If molecules pair up, 2 moles of acid become 1 mole of dimers. The colligative effect is halved, causing the calculation to yield a molar mass twice as heavy as the normal molecule."
  },
  {
    "id": 48,
    "context": "In 1880, Jacobus Henricus van't Hoff introduced a mathematical correction factor to fix these abnormal molar mass calculations, ensuring our equations still work.",
    "question": "How is the van't Hoff factor (\\( i \\)) formally defined in terms of molar mass?",
    "options": [
      "A) \\( i = \\frac{\\text{Abnormal molar mass}}{\\text{Normal molar mass}} \\)",
      "B) \\( i = \\frac{\\text{Calculated colligative property}}{\\text{Observed colligative property}} \\)",
      "C) \\( i = \\frac{\\text{Normal molar mass}}{\\text{Abnormal (Observed) molar mass}} \\)",
      "D) \\( i = \\text{Normal molar mass} + \\text{Abnormal molar mass} \\)"
    ],
    "answer": "C) \\( i = \\frac{\\text{Normal molar mass}}{\\text{Abnormal (Observed) molar mass}} \\)",
    "explanation": "The van't Hoff factor \\( i \\) is defined as Normal molar mass divided by Abnormal molar mass. It is also equal to Observed colligative property / Calculated colligative property."
  },
  {
    "id": 49,
    "context": "The value of \\( i \\) quickly tells you whether a solute is associating or dissociating in a solvent.",
    "question": "What values will the van't Hoff factor (\\( i \\)) take for solutes that undergo association and dissociation, respectively?",
    "options": [
      "A) \\( i < 1 \\) for association; \\( i > 1 \\) for dissociation.",
      "B) \\( i > 1 \\) for association; \\( i < 1 \\) for dissociation.",
      "C) \\( i = 0 \\) for association; \\( i = 1 \\) for dissociation.",
      "D) \\( i \\) is always equal to 2 for both."
    ],
    "answer": "A) \\( i < 1 \\) for association; \\( i > 1 \\) for dissociation.",
    "explanation": "For association, particles combine, so total particles decrease (\\( i < 1 \\), e.g., ~0.5 for dimers). For dissociation, particles split, so total particles increase (\\( i > 1 \\), e.g., ~2 for NaCl)."
  },
  {
    "id": 50,
    "context": "To account for abnormal molar masses, we simply insert the van't Hoff factor into our colligative property equations.",
    "question": "Which of the following represents the properly modified equation for osmotic pressure that includes the van't Hoff factor?",
    "options": [
      "A) \\( \\Pi = \\frac{C R T}{i} \\)",
      "B) \\( \\Pi = i \\times C R T \\)",
      "C) \\( \\Pi = C R T - i \\)",
      "D) \\( \\Pi = i + C R T \\)"
    ],
    "answer": "B) \\( \\Pi = i \\times C R T \\)",
    "explanation": "The factor \\( i \\) acts as a multiplier to correct the particle count. The modified equation is \\( \\Pi = i n_2 R T / V \\) or \\( \\Pi = i C R T \\). Similarly, \\( \\Delta T_b = i K_b m \\)."
  }
]

 

let idx = 0, phase = 'context', chosen = null, correct = 0, wrong = 0;
let answered = [];

function typesetMath() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([document.getElementById('card-container')]).catch(console.error);
  }
}

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
  if (phase === 'context')       renderCtx(c);
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
  typesetMath();
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

  typesetMath();
}

function renderExp(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  const response = answered[idx] || { selected: chosen, ok: chosen === q.answer };
  const ok = response.ok;
  const btnLbl = idx === quizData.length - 1 ? 'FINISH MISSION' : 'NEXT NODE &gt;';
  const opts = q.options.map(o => {
    let cls = 'sf-opt-btn';
    if (o === q.answer)                      cls += ' correct-reveal';
    else if (o === response.selected && !ok) cls += ' wrong-reveal';
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

  typesetMath();
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
  typesetMath();
}

render();