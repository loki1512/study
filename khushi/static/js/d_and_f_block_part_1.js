// The complete quiz payload
const quizData = [
  {
    "context": "Welcome to the exciting world of elements! The periodic table is divided into blocks. The d-block contains elements located right in the middle section of the periodic table, spanning from group 3 to group 12.",
    "question": "What is the common name given to the elements of the d-block?",
    "options": [
      "Alkali metals",
      "Inner transition metals",
      "Transition metals",
      "Noble gases"
    ],
    "answer": "Transition metals",
    "explanation": "They are called 'transition metals' because their properties are a bridge or 'transition' between the highly reactive metals on the left and the non-metals on the right. Strictly speaking, a true transition metal must have an incomplete or partially filled d-subshell."
  },
  {
    "context": "They are called 'transition metals' because their properties are a bridge or 'transition' between the highly reactive metals on the left and the non-metals on the right. Strictly speaking, a true transition metal must have an incomplete or partially filled d-subshell.",
    "question": "Based on the strict chemistry definition, which group of elements are technically NOT transition metals because their d-subshells are completely full?",
    "options": [
      "Iron, Cobalt, Nickel",
      "Copper, Silver, Gold",
      "Scandium, Yttrium, Lanthanum",
      "Zinc, Cadmium, Mercury"
    ],
    "answer": "Zinc, Cadmium, Mercury",
    "explanation": "Zinc, Cadmium, and Mercury (Group 12) have completely filled d-orbitals (d10) in both their normal state and their ionic states. However, they are still studied along with transition metals because they sit right at the end of the transition metal series."
  },
  {
    "context": "Zinc, Cadmium, and Mercury (Group 12) have completely filled d-orbitals (d10) in both their normal state and their ionic states. However, they are still studied along with transition metals because they sit right at the end of the transition metal series.",
    "question": "How many main series (rows) of transition metals are actively studied in the d-block?",
    "options": [
      "Two (3d and 4d)",
      "Three (3d, 4d, and 5d)",
      "Four (3d, 4d, 5d, and 6d)",
      "Five (2d, 3d, 4d, 5d, and 6d)"
    ],
    "answer": "Four (3d, 4d, 5d, and 6d)",
    "explanation": "There are four series of transition metals, named after the d-orbital being filled: the 3d series (Sc to Zn), 4d series (Y to Cd), 5d series (La to Hg), and the incomplete 6d series. All these elements follow a general pattern for holding their outer electrons."
  },
  {
    "context": "There are four series of transition metals, named after the d-orbital being filled: the 3d series (Sc to Zn), 4d series (Y to Cd), 5d series (La to Hg), and the incomplete 6d series. All these elements follow a general pattern for holding their outer electrons.",
    "question": "What is the general formula for the outer electronic configuration of transition metals?",
    "options": [
      "nd^1-10 ns^2",
      "(n-1)d^1-10 ns^1-2",
      "(n+1)d^1-10 ns^2",
      "(n-1)p^1-6 ns^2"
    ],
    "answer": "(n-1)d^1-10 ns^1-2",
    "explanation": "The formula is (n-1)d^1-10 ns^1-2. This means the inner d-orbital can hold anywhere from 1 to 10 electrons, while the outermost s-orbital holds 1 or 2. But Nature loves stability, which creates some famous rule-breakers, like Chromium."
  },
  {
    "context": "The formula is (n-1)d^1-10 ns^1-2. This means the inner d-orbital can hold anywhere from 1 to 10 electrons, while the outermost s-orbital holds 1 or 2. But Nature loves stability, which creates some famous rule-breakers, like Chromium.",
    "question": "What is the actual electronic configuration of Chromium (Cr, atomic number 24)?",
    "options": [
      "3d^4 4s^2",
      "3d^5 4s^1",
      "3d^6 4s^0",
      "3d^3 4s^2 4p^1"
    ],
    "answer": "3d^5 4s^1",
    "explanation": "Instead of 3d4 4s2, Chromium borrows an electron from the 4s orbital to become 3d5 4s1. It does this because an exactly half-filled d-orbital (5 electrons) is incredibly stable! Copper plays a very similar trick to get a fully filled orbital."
  },
  {
    "context": "Instead of 3d4 4s2, Chromium borrows an electron from the 4s orbital to become 3d5 4s1. It does this because an exactly half-filled d-orbital (5 electrons) is incredibly stable! Copper plays a very similar trick to get a fully filled orbital.",
    "question": "What is the electronic configuration of Copper (Cu, atomic number 29)?",
    "options": [
      "3d^9 4s^2",
      "3d^10 4s^1",
      "3d^8 4s^2 4p^1",
      "3d^10 4s^2"
    ],
    "answer": "3d^10 4s^1",
    "explanation": "Copper becomes 3d10 4s1 instead of 3d9 4s2 because a completely full d-orbital (10 electrons) provides extra stability. Now that we know their electron arrangements, let's look at what these elements feel like in real life."
  },
  {
    "context": "Copper becomes 3d10 4s1 instead of 3d9 4s2 because a completely full d-orbital (10 electrons) provides extra stability. Now that we know their electron arrangements, let's look at what these elements feel like in real life.",
    "question": "Which of the following is NOT a typical physical property of transition elements?",
    "options": [
      "High tensile strength (very strong)",
      "Malleability (can be beaten into sheets)",
      "High volatility (easily turn into gas)",
      "Metallic lustre (shiny)"
    ],
    "answer": "High volatility (easily turn into gas)",
    "explanation": "Transition metals have very low volatility, meaning they stay solid and don't easily vaporize. They are extremely hard, strong, and shiny metals, which gives them exceptionally high melting and boiling points."
  },
  {
    "context": "Transition metals have very low volatility, meaning they stay solid and don't easily vaporize. They are extremely hard, strong, and shiny metals, which gives them exceptionally high melting and boiling points.",
    "question": "Why do transition metals have such high melting points?",
    "options": [
      "They only use their outermost s-electrons to bond.",
      "They form covalent bonds with oxygen.",
      "They use both inner (n-1)d electrons and outer ns electrons to form strong metallic bonds.",
      "They do not form bonds at all."
    ],
    "answer": "They use both inner (n-1)d electrons and outer ns electrons to form strong metallic bonds.",
    "explanation": "In most metals, only the outer electrons hold the atoms together. But in transition metals, the inner d-electrons pitch in too! More electrons sharing the load creates super-strong metallic bonds, which peak in strength halfway through the series."
  },
  {
    "context": "In most metals, only the outer electrons hold the atoms together. But in transition metals, the inner d-electrons pitch in too! More electrons sharing the load creates super-strong metallic bonds, which peak in strength halfway through the series.",
    "question": "At which electron configuration do the melting points of transition metals generally reach their maximum?",
    "options": [
      "d^1",
      "d^5",
      "d^8",
      "d^10"
    ],
    "answer": "d^5",
    "explanation": "The melting points peak at the d5 configuration (like in Chromium or Tungsten). Having 5 unpaired electrons provides the maximum 'glue' for interatomic bonding. Because these bonds are so strong, they also have a very high 'enthalpy of atomization'."
  },
  {
    "context": "The melting points peak at the d5 configuration (like in Chromium or Tungsten). Having 5 unpaired electrons provides the maximum 'glue' for interatomic bonding. Because these bonds are so strong, they also have a very high 'enthalpy of atomization'.",
    "question": "What does 'enthalpy of atomization' measure?",
    "options": [
      "The energy required to add an electron to an atom.",
      "The energy required to break the metal lattice completely into individual gaseous atoms.",
      "The energy required to melt ice.",
      "The amount of heat the metal naturally releases."
    ],
    "answer": "The energy required to break the metal lattice completely into individual gaseous atoms.",
    "explanation": "High enthalpy of atomization means it takes a massive amount of energy to rip the metal atoms apart from each other. Interestingly, when you look at heavier transition metals, their bonds are even tougher."
  },
  {
    "context": "High enthalpy of atomization means it takes a massive amount of energy to rip the metal atoms apart from each other. Interestingly, when you look at heavier transition metals, their bonds are even tougher.",
    "question": "How do the enthalpies of atomization of the heavier 2nd (4d) and 3rd (5d) series compare to the 1st (3d) series?",
    "options": [
      "They are much lower.",
      "They are exactly the same.",
      "They are greater.",
      "They alternate up and down randomly."
    ],
    "answer": "They are greater.",
    "explanation": "The 2nd and 3rd series metals have greater enthalpies of atomization than the 1st series. This means heavier transition metals frequently form very strong metal-to-metal bonds. Now, let's explore how the physical sizes (atomic radii) of these atoms behave."
  },
  {
    "context": "The 2nd and 3rd series metals have greater enthalpies of atomization than the 1st series. This means heavier transition metals frequently form very strong metal-to-metal bonds. Now, let's explore how the physical sizes (atomic radii) of these atoms behave.",
    "question": "As you move from left to right across a specific transition metal series (like Sc to Zn), what generally happens to the atomic radius?",
    "options": [
      "It drastically increases.",
      "It progressively decreases.",
      "It halves in size every step.",
      "It remains exactly the same."
    ],
    "answer": "It progressively decreases.",
    "explanation": "The radius shrinks as you go right because protons are added to the nucleus, pulling everything inward. Normally, inner electrons act like a shield against this pull, but d-electrons are terrible at shielding!"
  },
  {
    "context": "The radius shrinks as you go right because protons are added to the nucleus, pulling everything inward. Normally, inner electrons act like a shield against this pull, but d-electrons are terrible at shielding!",
    "question": "Why do d-electrons provide poor 'shielding' for the outer electrons?",
    "options": [
      "Because they move too fast.",
      "Because their orbital shape allows the strong nuclear charge to 'leak' through and pull the outer electrons closer.",
      "Because they have no charge.",
      "Because they repel the nucleus."
    ],
    "answer": "Because their orbital shape allows the strong nuclear charge to 'leak' through and pull the outer electrons closer.",
    "explanation": "Because d-orbitals are large and spread out, they don't block the nucleus's positive pull very well. This poor shielding causes a much bigger surprise when we compare the sizes of the 2nd and 3rd transition series."
  },
  {
    "context": "Because d-orbitals are large and spread out, they don't block the nucleus's positive pull very well. This poor shielding causes a much bigger surprise when we compare the sizes of the 2nd and 3rd transition series.",
    "question": "What unusual size relationship exists between the metals of the 2nd (4d) series and the 3rd (5d) series?",
    "options": [
      "The 3rd series is twice as large as the 2nd.",
      "The 3rd series is much smaller than the 1st series.",
      "Their atomic radii are virtually the same.",
      "The 2nd series is a gas, so it has no radius."
    ],
    "answer": "Their atomic radii are virtually the same.",
    "explanation": "Normally, atoms get bigger as you go down the periodic table because you add more electron shells. But amazingly, 3rd series atoms (like Hafnium) are almost identical in size to 2nd series atoms (like Zirconium). This is caused by the 'Lanthanoid Contraction'."
  },
  {
    "context": "Normally, atoms get bigger as you go down the periodic table because you add more electron shells. But amazingly, 3rd series atoms (like Hafnium) are almost identical in size to 2nd series atoms (like Zirconium). This is caused by the 'Lanthanoid Contraction'.",
    "question": "What directly causes the Lanthanoid Contraction?",
    "options": [
      "The filling of the 4f orbitals before the 5d orbitals, which provides incredibly poor shielding.",
      "The loss of protons in the nucleus.",
      "The melting of the metal lattice.",
      "The sudden addition of extra s-electrons."
    ],
    "answer": "The filling of the 4f orbitals before the 5d orbitals, which provides incredibly poor shielding.",
    "explanation": "Before the 5d series starts, 14 electrons are dumped into the 4f orbitals. f-orbitals are even worse at shielding than d-orbitals! The nucleus pulls so hard that it shrinks the entire atom, canceling out the expected size increase. This shrinkage affects the metal's density."
  },
  {
    "context": "Before the 5d series starts, 14 electrons are dumped into the 4f orbitals. f-orbitals are even worse at shielding than d-orbitals! The nucleus pulls so hard that it shrinks the entire atom, canceling out the expected size increase. This shrinkage affects the metal's density.",
    "question": "How does the density of transition metals change as you move from Titanium (Z=22) to Copper (Z=29)?",
    "options": [
      "It significantly decreases.",
      "It stays exactly 1.0 g/cm^3.",
      "It significantly increases.",
      "It fluctuates randomly with no pattern."
    ],
    "answer": "It significantly increases.",
    "explanation": "Since the atoms are getting slightly smaller (decreasing radius) but packing more protons and neutrons (increasing mass), they become much denser from left to right. Now let's talk about the energy needed to steal their electrons: Ionization Enthalpy."
  },
  {
    "context": "Since the atoms are getting slightly smaller (decreasing radius) but packing more protons and neutrons (increasing mass), they become much denser from left to right. Now let's talk about the energy needed to steal their electrons: Ionization Enthalpy.",
    "question": "When a transition metal forms an ion, which electrons are removed FIRST?",
    "options": [
      "The (n-1)d electrons",
      "The ns electrons",
      "The inner core p-electrons",
      "They lose all of them at exactly the same time"
    ],
    "answer": "The ns electrons",
    "explanation": "Even though the d-orbitals are filled last, the outermost s-electrons (ns) are furthest from the nucleus, so they get stripped away first. The energy required to do this (ionization enthalpy) increases across the row, but very slowly."
  },
  {
    "context": "Even though the d-orbitals are filled last, the outermost s-electrons (ns) are furthest from the nucleus, so they get stripped away first. The energy required to do this (ionization enthalpy) increases across the row, but very slowly.",
    "question": "Why does the first ionization enthalpy increase only SLIGHTLY across the 3d series, compared to the steep increase seen in non-transition elements?",
    "options": [
      "Because the atomic mass decreases.",
      "Because the added 3d inner electrons somewhat shield the outer 4s electrons from the growing nuclear charge.",
      "Because they repel all energy.",
      "Because transition metals do not have protons."
    ],
    "answer": "Because the added 3d inner electrons somewhat shield the outer 4s electrons from the growing nuclear charge.",
    "explanation": "Every time a proton is added to the nucleus, an electron is added to the INNER 3d shell. This inner electron acts like a weak shield, buffering the outer 4s electron from feeling the full force of the new proton. But what happens when we try to remove a second electron?"
  },
  {
    "context": "Every time a proton is added to the nucleus, an electron is added to the INNER 3d shell. This inner electron acts like a weak shield, buffering the outer 4s electron from feeling the full force of the new proton. But what happens when we try to remove a second electron?",
    "question": "The second ionization enthalpy generally increases across the row, but drops unexpectedly for Manganese (Mn) to form Mn2+. Why?",
    "options": [
      "Because Mn2+ has a highly stable half-filled d5 configuration.",
      "Because Manganese is a gas.",
      "Because Manganese has no d-electrons.",
      "Because the atom suddenly expands."
    ],
    "answer": "Because Mn2+ has a highly stable half-filled d5 configuration.",
    "explanation": "Manganese is perfectly happy to lose its two outer s-electrons because it leaves behind a beautiful, stable 3d5 configuration. This incredible stability of half-filled orbitals is largely due to something called 'Exchange Energy'."
  },
  {
    "context": "Manganese is perfectly happy to lose its two outer s-electrons because it leaves behind a beautiful, stable 3d5 configuration. This incredible stability of half-filled orbitals is largely due to something called 'Exchange Energy'.",
    "question": "What is 'Exchange Energy' in the context of d-orbitals?",
    "options": [
      "Energy required to buy electrons from other atoms.",
      "Energy released when electrons with parallel spins in degenerate (equal-energy) orbitals exchange positions, increasing stability.",
      "Energy converted to light when the atom is heated.",
      "Energy lost when an atom splits in half."
    ],
    "answer": "Energy released when electrons with parallel spins in degenerate (equal-energy) orbitals exchange positions, increasing stability.",
    "explanation": "When electrons spin in the same direction in equal-energy rooms (like a d5 setup), they can comfortably swap places. This swapping releases energy, making the whole atom relax and become super stable. Because of this, trying to remove a *third* electron can be a nightmare."
  },
  {
    "context": "When electrons spin in the same direction in equal-energy rooms (like a d5 setup), they can comfortably swap places. This swapping releases energy, making the whole atom relax and become super stable. Because of this, trying to remove a *third* electron can be a nightmare.",
    "question": "Why is the third ionization enthalpy extraordinarily high for elements like Zinc (Zn) and Copper (Cu)?",
    "options": [
      "Because removing a third electron means breaking into a highly stable completely filled d10 configuration.",
      "Because they run out of electrons.",
      "Because the third electron is an s-electron.",
      "Because Zinc and Copper are noble gases."
    ],
    "answer": "Because removing a third electron means breaking into a highly stable completely filled d10 configuration.",
    "explanation": "Zinc (Zn2+) and Copper (Cu+) both have happy, full d10 shells. Breaking into a full d-shell takes a massive amount of energy! This brings us to a hallmark feature of transition metals: their ability to have many different 'Oxidation States'."
  },
  {
    "context": "Zinc (Zn2+) and Copper (Cu+) both have happy, full d10 shells. Breaking into a full d-shell takes a massive amount of energy! This brings us to a hallmark feature of transition metals: their ability to have many different 'Oxidation States'.",
    "question": "What is a defining characteristic of transition elements regarding their oxidation states?",
    "options": [
      "They never form ions.",
      "They only ever exhibit a +1 oxidation state.",
      "They exhibit a great variety of oxidation states.",
      "They can only share electrons with themselves."
    ],
    "answer": "They exhibit a great variety of oxidation states.",
    "explanation": "Because the energies of the (n-1)d and ns orbitals are so close, transition metals can use different numbers of electrons to bond, leading to many different oxidation states. The highest variety is found right in the middle of the periodic table row."
  },
  {
    "context": "Because the energies of the (n-1)d and ns orbitals are so close, transition metals can use different numbers of electrons to bond, leading to many different oxidation states. The highest variety is found right in the middle of the periodic table row.",
    "question": "Which transition metal in the 3d series exhibits the largest number of oxidation states, ranging all the way from +2 to +7?",
    "options": [
      "Scandium",
      "Zinc",
      "Manganese",
      "Iron"
    ],
    "answer": "Manganese",
    "explanation": "Manganese (Mn) sits right in the middle. It has two 4s electrons and five 3d electrons, allowing it to share up to 7 electrons! The elements at the far left and right ends of the row aren't so lucky."
  },
  {
    "context": "Manganese (Mn) sits right in the middle. It has two 4s electrons and five 3d electrons, allowing it to share up to 7 electrons! The elements at the far left and right ends of the row aren't so lucky.",
    "question": "Why do elements at the extreme ends of the 3d series (like Scandium and Zinc) show fewer oxidation states?",
    "options": [
      "They don't have s-electrons.",
      "Scandium has too few electrons to share, and Zinc has too many d-electrons (leaving no empty spaces to share).",
      "They are not actually metals.",
      "They are permanently frozen."
    ],
    "answer": "Scandium has too few electrons to share, and Zinc has too many d-electrons (leaving no empty spaces to share).",
    "explanation": "Scandium easily loses its 3 outer electrons to become +3, and that's it. Zinc uses only its two outer s-electrons to become +2, because its d10 shell is full and locked. Notice how transition metals change their oxidation states step-by-step."
  },
  {
    "context": "Scandium easily loses its 3 outer electrons to become +3, and that's it. Zinc uses only its two outer s-electrons to become +2, because its d10 shell is full and locked. Notice how transition metals change their oxidation states step-by-step.",
    "question": "In transition elements, consecutive oxidation states usually differ by what amount? (e.g., V^2+, V^3+, V^4+)",
    "options": [
      "By units of two",
      "By units of three",
      "By unity (one)",
      "They don't differ at all"
    ],
    "answer": "By unity (one)",
    "explanation": "Transition metal oxidation states usually climb one step at a time (+2, +3, +4). This is very different from non-transition (p-block) elements, which normally skip a step."
  },
  {
    "context": "Transition metal oxidation states usually climb one step at a time (+2, +3, +4). This is very different from non-transition (p-block) elements, which normally skip a step.",
    "question": "How do the oxidation states of non-transition (p-block) elements normally differ?",
    "options": [
      "By units of one",
      "By units of two",
      "By units of four",
      "By units of five"
    ],
    "answer": "By units of two",
    "explanation": "In the p-block, elements usually jump by two (like +2 and +4) because of the 'inert pair effect'. Transition metals have another quirk: while heavier p-block elements prefer lower oxidation states, heavier transition metals prefer HIGHER ones."
  },
  {
    "context": "In the p-block, elements usually jump by two (like +2 and +4) because of the 'inert pair effect'. Transition metals have another quirk: while heavier p-block elements prefer lower oxidation states, heavier transition metals prefer HIGHER ones.",
    "question": "In Group 6, Chromium (Cr) is at the top, while Molybdenum (Mo) and Tungsten (W) are below it. Which is a stronger oxidizing agent in the +6 state because it is LESS stable?",
    "options": [
      "Molybdenum(VI)",
      "Tungsten(VI)",
      "Chromium(VI)",
      "They are all equally stable"
    ],
    "answer": "Chromium(VI)",
    "explanation": "Because heavier transition metals (Mo, W) are very stable in high oxidation states like +6, they just stay there. Chromium(VI), being lighter, is less stable at +6 and desperately wants to steal electrons to drop to +3, making it a strong oxidizing agent. Can oxidation states go lower than +1?"
  },
  {
    "context": "Because heavier transition metals (Mo, W) are very stable in high oxidation states like +6, they just stay there. Chromium(VI), being lighter, is less stable at +6 and desperately wants to steal electrons to drop to +3, making it a strong oxidizing agent. Can oxidation states go lower than +1?",
    "question": "Is it possible for a transition metal to have an oxidation state of zero?",
    "options": [
      "No, metals always have positive states.",
      "Yes, when they form complexes with pi-acceptor ligands like carbon monoxide (e.g., Ni(CO)4).",
      "Yes, but only in empty space.",
      "No, zero means it is a noble gas."
    ],
    "answer": "Yes, when they form complexes with pi-acceptor ligands like carbon monoxide (e.g., Ni(CO)4).",
    "explanation": "Certain special molecules (ligands) can lock transition metals into a zero oxidation state. But usually, they exist as positive ions in water. To measure how much they 'want' to become solid metal from a +2 ion, we use Standard Electrode Potentials."
  },
  {
    "context": "Certain special molecules (ligands) can lock transition metals into a zero oxidation state. But usually, they exist as positive ions in water. To measure how much they 'want' to become solid metal from a +2 ion, we use Standard Electrode Potentials.",
    "question": "Most 3d transition metals have a negative standard electrode potential (E°) for M^2+ to M. What does a negative E° value generally indicate?",
    "options": [
      "The metal prefers to stay as a solid and not dissolve in acid.",
      "The metal is easily oxidized to +2 ions and can liberate hydrogen gas from acids.",
      "The metal is extremely radioactive.",
      "The metal cannot conduct electricity."
    ],
    "answer": "The metal is easily oxidized to +2 ions and can liberate hydrogen gas from acids.",
    "explanation": "A negative potential means the metal loves to dissolve into +2 ions, giving off electrons that can turn hydrogen ions in acid into hydrogen gas. But there is one famous rebel in the 3d series with a POSITIVE potential."
  },
  {
    "context": "A negative potential means the metal loves to dissolve into +2 ions, giving off electrons that can turn hydrogen ions in acid into hydrogen gas. But there is one famous rebel in the 3d series with a POSITIVE potential.",
    "question": "Which 3d transition metal is unique for having a positive E° value (+0.34 V)?",
    "options": [
      "Iron",
      "Zinc",
      "Copper",
      "Manganese"
    ],
    "answer": "Copper",
    "explanation": "Copper has a positive E° value! This happens because the energy required to atomize and ionize copper is higher than the energy it gets back when the Cu2+ ions dissolve in water (hydration enthalpy). Because of this, Copper behaves differently with acids."
  },
  {
    "context": "Copper has a positive E° value! This happens because the energy required to atomize and ionize copper is higher than the energy it gets back when the Cu2+ ions dissolve in water (hydration enthalpy). Because of this, Copper behaves differently with acids.",
    "question": "Because of its positive electrode potential, how does Copper react with normal, non-oxidizing acids like dilute HCl?",
    "options": [
      "It explodes instantly.",
      "It dissolves quickly and releases H2 gas.",
      "It is unable to liberate Hydrogen (H2) gas from them.",
      "It turns the acid into pure water."
    ],
    "answer": "It is unable to liberate Hydrogen (H2) gas from them.",
    "explanation": "Copper is too 'noble' to push hydrogen out of normal acids. It only dissolves in strong, oxidizing acids like hot nitric acid. Looking at the rest of the series, we see big negative potentials for Manganese and Zinc."
  },
  {
    "context": "Copper is too 'noble' to push hydrogen out of normal acids. It only dissolves in strong, oxidizing acids like hot nitric acid. Looking at the rest of the series, we see big negative potentials for Manganese and Zinc.",
    "question": "Why do Manganese (Mn) and Zinc (Zn) have more negative E°(M^2+/M) values than expected from the general trend?",
    "options": [
      "They have the lowest mass.",
      "They are liquids at room temperature.",
      "Due to the stability of the half-filled d^5 (for Mn^2+) and completely filled d^10 (for Zn^2+) configurations.",
      "Because they form strong covalent bonds with hydrogen."
    ],
    "answer": "Due to the stability of the half-filled d^5 (for Mn^2+) and completely filled d^10 (for Zn^2+) configurations.",
    "explanation": "Because Mn2+ and Zn2+ are incredibly stable (d5 and d10), the solid metals are very eager to lose two electrons to reach that happy state, giving them very negative potentials. Now, let's look at the jump from +2 to +3."
  },
  {
    "context": "Because Mn2+ and Zn2+ are incredibly stable (d5 and d10), the solid metals are very eager to lose two electrons to reach that happy state, giving them very negative potentials. Now, let's look at the jump from +2 to +3.",
    "question": "The E° value for Sc^3+/Sc^2+ is remarkably low (meaning Sc^3+ forms very easily). Why is Sc^3+ so stable?",
    "options": [
      "It has a half-filled d-subshell.",
      "It achieves a noble gas electronic configuration.",
      "It has 14 f-electrons.",
      "It turns into a non-metal."
    ],
    "answer": "It achieves a noble gas electronic configuration.",
    "explanation": "When Scandium (Sc) loses 3 electrons, it completely empties its outer shells, leaving it with the exact same electron arrangement as the noble gas Argon. For other metals, like Iron and Manganese, the +3 state depends on d-electrons."
  },
  {
    "context": "When Scandium (Sc) loses 3 electrons, it completely empties its outer shells, leaving it with the exact same electron arrangement as the noble gas Argon. For other metals, like Iron and Manganese, the +3 state depends on d-electrons.",
    "question": "Why is the E° value for Mn^3+/Mn^2+ highly positive, while for Fe^3+/Fe^2+ it is comparatively low?",
    "options": [
      "Fe^3+ is a gas, but Mn^3+ is a solid.",
      "Mn^2+ is extra stable (d^5), so Mn^3+ desperately wants an electron. Fe^3+ is already stable (d^5), so it forms easily.",
      "Iron has more protons than Manganese.",
      "Manganese cannot form +2 ions."
    ],
    "answer": "Mn^2+ is extra stable (d^5), so Mn^3+ desperately wants an electron. Fe^3+ is already stable (d^5), so it forms easily.",
    "explanation": "Mn3+ is an unhappy d4 configuration that wants an electron to become the perfect d5 (Mn2+). Fe3+ is ALREADY the perfect d5, so Fe2+ (d6) gladly gives up an electron to get there. To force metals into even higher states, we need aggressive halogens."
  },
  {
    "context": "Mn3+ is an unhappy d4 configuration that wants an electron to become the perfect d5 (Mn2+). Fe3+ is ALREADY the perfect d5, so Fe2+ (d6) gladly gives up an electron to get there. To force metals into even higher states, we need aggressive halogens.",
    "question": "Which halogen is uniquely capable of stabilizing the absolute highest oxidation states of transition metals (like in VF5 or CrF6)?",
    "options": [
      "Chlorine (Cl)",
      "Bromine (Br)",
      "Iodine (I)",
      "Fluorine (F)"
    ],
    "answer": "Fluorine (F)",
    "explanation": "Fluorine is highly electronegative and incredibly small, which gives its compounds very high lattice energy and bond enthalpy, coaxing out the highest oxidation states. But sometimes, combining metals with halogens doesn't work, like with Copper and Iodine."
  },
  {
    "context": "Fluorine is highly electronegative and incredibly small, which gives its compounds very high lattice energy and bond enthalpy, coaxing out the highest oxidation states. But sometimes, combining metals with halogens doesn't work, like with Copper and Iodine.",
    "question": "Why is Copper(II) Iodide (CuI2) NOT a known stable compound?",
    "options": [
      "Because Iodine is too small to bond with Copper.",
      "Because Cu^2+ oxidizes I^- to iodine gas (I2), reducing itself to Cu^+.",
      "Because Copper is immune to halogens.",
      "Because CuI2 immediately turns into water."
    ],
    "answer": "Because Cu^2+ oxidizes I^- to iodine gas (I2), reducing itself to Cu^+.",
    "explanation": "Cu2+ is too strong of an oxidizer for the large iodide ion. It rips an electron right off the iodine, turning it into I2 gas, while Cu2+ becomes Cu+. But Cu+ has its own stability problems in water."
  },
  {
    "context": "Cu2+ is too strong of an oxidizer for the large iodide ion. It rips an electron right off the iodine, turning it into I2 gas, while Cu2+ becomes Cu+. But Cu+ has its own stability problems in water.",
    "question": "What happens to many Copper(I) compounds when placed in an aqueous (water) solution?",
    "options": [
      "They freeze.",
      "They undergo disproportionation to form Cu^2+ and solid Cu.",
      "They remain perfectly stable.",
      "They evaporate as gas."
    ],
    "answer": "They undergo disproportionation to form Cu^2+ and solid Cu.",
    "explanation": "Cu+ is unstable in water because Cu2+ gets so much more energy from water molecules surrounding it (hydration enthalpy). So, two Cu+ ions will trade an electron to become one Cu2+ ion and one atom of solid Copper. Now let's look at oxygen's role."
  },
  {
    "context": "Cu+ is unstable in water because Cu2+ gets so much more energy from water molecules surrounding it (hydration enthalpy). So, two Cu+ ions will trade an electron to become one Cu2+ ion and one atom of solid Copper. Now let's look at oxygen's role.",
    "question": "Between Fluorine and Oxygen, which element is superior at stabilizing the absolute highest oxidation states of transition metals?",
    "options": [
      "Fluorine",
      "Oxygen",
      "They are exactly equal",
      "Neither can stabilize high states"
    ],
    "answer": "Oxygen",
    "explanation": "Even though fluorine is the most electronegative, oxygen is superior! The highest manganese fluoride is MnF4, but the highest oxide is Mn2O7. This is because of a special trick oxygen can do."
  },
  {
    "context": "Even though fluorine is the most electronegative, oxygen is superior! The highest manganese fluoride is MnF4, but the highest oxide is Mn2O7. This is because of a special trick oxygen can do.",
    "question": "Why is Oxygen better than Fluorine at stabilizing high oxidation states like in Mn2O7?",
    "options": [
      "Oxygen atoms are heavier.",
      "Oxygen has the ability to form multiple (double) bonds with the metal.",
      "Oxygen is a liquid.",
      "Fluorine repels metals."
    ],
    "answer": "Oxygen has the ability to form multiple (double) bonds with the metal.",
    "explanation": "Because oxygen can form double bonds, it can share more electrons with the metal without crowding the metal with too many atoms. These oxides change their chemical personality depending on the oxidation state."
  },
  {
    "context": "Because oxygen can form double bonds, it can share more electrons with the metal without crowding the metal with too many atoms. These oxides change their chemical personality depending on the oxidation state.",
    "question": "As the oxidation number of a metal in an oxide increases, what happens to its chemical character?",
    "options": [
      "It becomes more basic and ionic.",
      "It becomes completely unreactive.",
      "Ionic character decreases and acidic character becomes predominant.",
      "It turns into a pure metal."
    ],
    "answer": "Ionic character decreases and acidic character becomes predominant.",
    "explanation": "Low oxidation state oxides (like MnO) are ionic and basic, but high oxidation state oxides (like Mn2O7 or CrO3) are covalent and act as acids! This wide range of behaviors is why transition metals are so reactive."
  },
  {
    "context": "Low oxidation state oxides (like MnO) are ionic and basic, but high oxidation state oxides (like Mn2O7 or CrO3) are covalent and act as acids! This wide range of behaviors is why transition metals are so reactive.",
    "question": "How do most 1st series transition metals (except Copper) react with 1M Hydrochloric acid (H+)?",
    "options": [
      "They ignore it completely.",
      "They are relatively reactive and are oxidized, liberating hydrogen.",
      "They turn into completely stable noble gases.",
      "They freeze the acid."
    ],
    "answer": "They are relatively reactive and are oxidized, liberating hydrogen.",
    "explanation": "Because their electrode potentials are negative, most of them easily dissolve in acid and bubble off hydrogen gas. During these reactions, some ions act as aggressive electron thieves (oxidizing agents) or generous electron donors (reducing agents)."
  },
  {
    "context": "Because their electrode potentials are negative, most of them easily dissolve in acid and bubble off hydrogen gas. During these reactions, some ions act as aggressive electron thieves (oxidizing agents) or generous electron donors (reducing agents).",
    "question": "Both Cr^2+ and Mn^3+ have a d^4 configuration. However, how do they behave chemically?",
    "options": [
      "Cr^2+ is an oxidizing agent; Mn^3+ is a reducing agent.",
      "Both are completely unreactive.",
      "Cr^2+ is a reducing agent; Mn^3+ is an oxidizing agent.",
      "They both explode in water."
    ],
    "answer": "Cr^2+ is a reducing agent; Mn^3+ is an oxidizing agent.",
    "explanation": "Cr2+ wants to GIVE an electron (reduce others) to become Cr3+, which is very stable in water. Mn3+ wants to TAKE an electron (oxidize others) to become Mn2+, which has the magic d5 half-filled stability. Now, let's look at how they react to magnets."
  },
  {
    "context": "Cr2+ wants to GIVE an electron (reduce others) to become Cr3+, which is very stable in water. Mn3+ wants to TAKE an electron (oxidize others) to become Mn2+, which has the magic d5 half-filled stability. Now, let's look at how they react to magnets.",
    "question": "When a substance is weakly attracted to an applied magnetic field, what is this behavior called?",
    "options": [
      "Diamagnetism",
      "Paramagnetism",
      "Gravity",
      "Inertia"
    ],
    "answer": "Paramagnetism",
    "explanation": "Paramagnetism is the property of being pulled toward a magnet. Diamagnetic substances, on the other hand, are slightly repelled by magnets. Transition metals are famous for being paramagnetic because of their electrons."
  },
  {
    "context": "Paramagnetism is the property of being pulled toward a magnet. Diamagnetic substances, on the other hand, are slightly repelled by magnets. Transition metals are famous for being paramagnetic because of their electrons.",
    "question": "What specifically causes paramagnetism in transition metal ions?",
    "options": [
      "The presence of completely filled d-orbitals.",
      "The metal's high density.",
      "The presence of unpaired electrons in the d-orbitals.",
      "The lack of a nucleus."
    ],
    "answer": "The presence of unpaired electrons in the d-orbitals.",
    "explanation": "Every single unpaired electron acts like a tiny bar magnet because of its spin. If all electrons are paired up, their magnetic fields cancel out. We can actually calculate the magnetic strength using a simple formula."
  },
  {
    "context": "Every single unpaired electron acts like a tiny bar magnet because of its spin. If all electrons are paired up, their magnetic fields cancel out. We can actually calculate the magnetic strength using a simple formula.",
    "question": "Which formula is used to calculate the 'spin-only' magnetic moment (µ) of a transition metal ion?",
    "options": [
      "µ = n * 2",
      "µ = √(n(n+2))",
      "µ = n^2",
      "µ = √(n/2)"
    ],
    "answer": "µ = √(n(n+2))",
    "explanation": "In this formula, 'n' stands for the number of unpaired electrons, and the result is measured in Bohr Magnetons (BM). Let's put this formula to the test with a real ion."
  },
  {
    "context": "In this formula, 'n' stands for the number of unpaired electrons, and the result is measured in Bohr Magnetons (BM). Let's put this formula to the test with a real ion.",
    "question": "What is the calculated spin-only magnetic moment for an Mn^2+ ion, which has 5 unpaired electrons (d^5)?",
    "options": [
      "1.73 BM",
      "3.87 BM",
      "5.92 BM",
      "0 BM"
    ],
    "answer": "5.92 BM",
    "explanation": "Plugging n=5 into √(n(n+2)) gives √(5*7) = √35, which is roughly 5.92 BM. More unpaired electrons mean a stronger magnet! Unpaired d-electrons are also responsible for another beautiful feature: color."
  },
  {
    "context": "Plugging n=5 into √(n(n+2)) gives √(5*7) = √35, which is roughly 5.92 BM. More unpaired electrons mean a stronger magnet! Unpaired d-electrons are also responsible for another beautiful feature: color.",
    "question": "Why are solutions of many transition metal ions brightly colored?",
    "options": [
      "They contain artificial dyes.",
      "An electron absorbs visible light to jump from a lower-energy d-orbital to a higher-energy d-orbital.",
      "The nucleus emits colored light.",
      "They reflect all light completely."
    ],
    "answer": "An electron absorbs visible light to jump from a lower-energy d-orbital to a higher-energy d-orbital.",
    "explanation": "This is called a d-d transition. When the electron absorbs a specific color from white light to make the jump, our eyes see the *complementary* color that is left over. However, not ALL of them are colored."
  },
  {
    "context": "This is called a d-d transition. When the electron absorbs a specific color from white light to make the jump, our eyes see the *complementary* color that is left over. However, not ALL of them are colored.",
    "question": "Which of the following transition metal ions would be entirely COLOURLESS in aqueous solution?",
    "options": [
      "Fe^3+ (d^5)",
      "Cu^2+ (d^9)",
      "Sc^3+ (d^0) and Zn^2+ (d^10)",
      "Co^2+ (d^7)"
    ],
    "answer": "Sc^3+ (d^0) and Zn^2+ (d^10)",
    "explanation": "Sc3+ has zero d-electrons to jump, and Zn2+ has a completely packed d-orbital with no room for electrons to jump into! Therefore, no light is absorbed, and they are colorless. These open d-orbitals are also perfect for trapping other molecules."
  },
  {
    "context": "Sc3+ has zero d-electrons to jump, and Zn2+ has a completely packed d-orbital with no room for electrons to jump into! Therefore, no light is absorbed, and they are colorless. These open d-orbitals are also perfect for trapping other molecules.",
    "question": "Transition metals easily form complex compounds, like [Fe(CN)6]^3-. What allows them to do this?",
    "options": [
      "They are gases at room temperature.",
      "They have large, empty p-orbitals only.",
      "Their small ionic size, high charge, and availability of d-orbitals for bond formation.",
      "They completely repel all negative ions."
    ],
    "answer": "Their small ionic size, high charge, and availability of d-orbitals for bond formation.",
    "explanation": "Their high positive charge pulls in negative or neutral molecules (ligands), and their empty d-orbitals provide a place to park the shared electrons. This unique chemistry makes them incredibly useful in industry."
  },
  {
    "context": "Their high positive charge pulls in negative or neutral molecules (ligands), and their empty d-orbitals provide a place to park the shared electrons. This unique chemistry makes them incredibly useful in industry.",
    "question": "Because of their ability to easily change oxidation states and form complexes, transition metals are widely used in industry as:",
    "options": [
      "Nuclear fuels",
      "Catalysts (to speed up reactions)",
      "Food preservatives",
      "Insulators"
    ],
    "answer": "Catalysts (to speed up reactions)",
    "explanation": "These amazing abilities—small size, empty d-orbitals, and variable charges—make transition metals excellent at acting as chemical catalysts, lowering activation energies. They can also trap small atoms (like Carbon) to form hard 'interstitial compounds', or mix together to form super-strong alloys. You've officially mastered the D-block basics!"
  }


];

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
