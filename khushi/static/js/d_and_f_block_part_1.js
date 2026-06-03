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
  },
  {
    "id": 26,
    "context": "In an SN2 reaction, the incoming nucleophile interacts with the alkyl halide causing the carbon-halide bond to break and a new bond to form simultaneously in a single step, with no intermediate formed. Because the bulky leaving halogen is blocking the 'front' of the molecule, the incoming nucleophile has to find another way in.",
    "question": "From which direction does the nucleophile attack the carbon atom in an SN2 mechanism?",
    "options": [
      "A) From the front, pushing the halogen out of the way",
      "B) It attacks from the back, exactly opposite to the leaving group",
      "C) It attacks from the top",
      "D) It attacks from the bottom"
    ],
    "answer": "B) It attacks from the back, exactly opposite to the leaving group",
    "explanation": "In the transition state of an SN2 reaction, the incoming nucleophile attaches from the side opposite to the one where the halogen atom is present."
  },
  {
    "id": 27,
    "context": "In the transition state of an SN2 reaction, the incoming nucleophile attaches from the side opposite to the one where the halogen atom is present. Imagine a strong gust of wind blowing an umbrella inside out.",
    "question": "What is the specific term for this 'flipping' of the molecule's 3D spatial arrangement during an SN2 reaction?",
    "options": [
      "A) Inversion of configuration",
      "B) Retention of configuration",
      "C) Racemisation",
      "D) Neutralization"
    ],
    "answer": "A) Inversion of configuration",
    "explanation": "As the attacking nucleophile attaches from the back and the leaving group leaves from the front, the configuration of the carbon atom inverts in much the same way as an umbrella is turned inside out. This process is called inversion of configuration."
  },
  {
    "id": 28,
    "context": "As the attacking nucleophile attaches from the back and the leaving group leaves from the front, the configuration of the carbon atom inverts in much the same way as an umbrella is turned inside out. This process is called inversion of configuration. But for this backside attack to happen smoothly, the nucleophile needs a clear, unblocked path.",
    "question": "Because bulky carbon groups block the nucleophile's approach (a concept called steric hindrance), which type of alkyl halide reacts the FASTEST in an SN2 reaction?",
    "options": [
      "A) Tertiary (3°) alkyl halides",
      "B) Secondary (2°) alkyl halides",
      "C) Primary (1°) alkyl halides",
      "D) All react at the exact same speed"
    ],
    "answer": "C) Primary (1°) alkyl halides",
    "explanation": "Methyl and primary halides react most rapidly in SN2 reactions because they only have small hydrogen atoms attached, offering a clear path. Tertiary halides are the slowest because bulky alkyl groups heavily hinder the approaching nucleophile."
  },
  {
    "id": 29,
    "context": "Methyl and primary halides react most rapidly in SN2 reactions because they only have small hydrogen atoms attached, offering a clear path. Tertiary halides are the slowest because bulky alkyl groups heavily hinder the approaching nucleophile. So, if tertiary halides can't use SN2, how do they react? They use a two-step process called SN1 (Substitution Nucleophilic Unimolecular).",
    "question": "In the first, very slow step of an SN1 reaction, the carbon-halogen bond breaks on its own before the nucleophile even attacks. What is formed as a result?",
    "options": [
      "A) A free radical",
      "B) A carbocation (a carbon with a positive charge)",
      "C) A carbanion (a carbon with a negative charge)",
      "D) A completely stable new alkane"
    ],
    "answer": "B) A carbocation (a carbon with a positive charge)",
    "explanation": "In step I of an SN1 reaction, the polarised C—X bond undergoes slow cleavage to produce a carbocation and a halide ion. The carbocation thus formed is then attacked by a nucleophile in step II."
  },
  {
    "id": 30,
    "context": "In step I of an SN1 reaction, the polarised C—X bond undergoes slow cleavage to produce a carbocation and a halide ion. The carbocation thus formed is then attacked by a nucleophile in step II. Because step I is the slowest step, it acts as a bottleneck that determines the overall speed of the entire reaction.",
    "question": "For an SN1 reaction to be fast, the carbocation formed in the first step must be very stable. Which type of alkyl halide forms the most stable carbocation and therefore reacts FASTEST in an SN1 reaction?",
    "options": [
      "A) Primary (1°) alkyl halides",
      "B) Secondary (2°) alkyl halides",
      "C) Tertiary (3°) alkyl halides",
      "D) Methyl halides"
    ],
    "answer": "C) Tertiary (3°) alkyl halides",
    "explanation": "Greater the stability of the carbocation, greater will be its ease of formation from the alkyl halide and faster will be the rate of the reaction. Tertiary (3°) alkyl halides form highly stable 3° carbocations, making them the fastest in SN1 reactions."
  },
  {
    "id": 31,
    "context": "Greater the stability of the carbocation, greater will be its ease of formation from the alkyl halide and faster will be the rate of the reaction. Tertiary (3°) alkyl halides form highly stable 3° carbocations, making them the fastest in SN1 reactions. Interestingly, some special primary halides also undergo SN1 reactions very quickly.",
    "question": "Why do allylic and benzylic halides show unusually high reactivity towards the SN1 reaction, even though they aren't tertiary?",
    "options": [
      "A) They are completely flat.",
      "B) Their carbocations get stabilized through resonance.",
      "C) They don't have any halogens.",
      "D) They skip the first step entirely."
    ],
    "answer": "B) Their carbocations get stabilized through resonance.",
    "explanation": "Allylic and benzylic halides show high reactivity towards the SN1 reaction because the carbocation thus formed gets stabilised through resonance, meaning electrons from the nearby double bond or benzene ring shift over to help share the positive charge."
  },
  {
    "id": 32,
    "context": "Allylic and benzylic halides show high reactivity towards the SN1 reaction because the carbocation thus formed gets stabilised through resonance, meaning electrons from the nearby double bond or benzene ring shift over to help share the positive charge. To fully understand these substitution reactions, we need to look closer at how some molecules interact with light, specifically 'plane polarised light.'",
    "question": "What is the name of the special instrument used by scientists to measure the angle by which a chemical compound rotates plane polarised light?",
    "options": [
      "A) Thermometer",
      "B) Polarimeter",
      "C) Spectrometer",
      "D) Barometer"
    ],
    "answer": "B) Polarimeter",
    "explanation": "The angle by which the plane polarised light is rotated is measured by an instrument called a polarimeter. Compounds that have the ability to rotate this light are called 'optically active' compounds."
  },
  {
    "id": 33,
    "context": "The angle by which the plane polarised light is rotated is measured by an instrument called a polarimeter. Compounds that have the ability to rotate this light are called 'optically active' compounds. We can classify these optically active compounds based on the specific direction they turn the light beam.",
    "question": "If an optically active compound rotates plane polarised light to the right (in a clockwise direction), what do we call it?",
    "options": [
      "A) Laevorotatory (l-form)",
      "B) Dextrorotatory (d-form)",
      "C) Neutralrotatory",
      "D) Achiral"
    ],
    "answer": "B) Dextrorotatory (d-form)",
    "explanation": "If the compound rotates the plane of polarised light to the right (clockwise direction), it is called dextrorotatory (from the Greek for right rotating) or the d-form, and is indicated by placing a positive (+) sign before the degree of rotation."
  },
  {
    "id": 34,
    "context": "If the compound rotates the plane of polarised light to the right (clockwise direction), it is called dextrorotatory or the d-form, and is indicated by placing a positive (+) sign before the degree of rotation. Conversely, if it rotates light to the left, it is laevorotatory (-). But why do some carbon molecules rotate light while others don't?",
    "question": "According to scientists like Louis Pasteur, optical activity happens when a central tetrahedral carbon atom is bonded to four completely DIFFERENT groups. What is such a carbon called?",
    "options": [
      "A) A symmetric carbon",
      "B) An achiral carbon",
      "C) An asymmetric carbon or stereocentre",
      "D) A primary carbon"
    ],
    "answer": "C) An asymmetric carbon or stereocentre",
    "explanation": "If all the substituents attached to a tetrahedral carbon are different, the mirror image of the molecule is not superimposed on the molecule itself. Such a carbon is lacking symmetry and is called an asymmetric carbon or stereocentre."
  },
  {
    "id": 35,
    "context": "If all the substituents attached to a tetrahedral carbon are different, the mirror image of the molecule is not superimposed on the molecule itself. Such a carbon is lacking symmetry and is called an asymmetric carbon or stereocentre. This means the molecule and its mirror reflection won't perfectly overlap, much like how your left glove won't fit on your right hand.",
    "question": "What is the scientific term for objects (or molecules) that are non-superimposable on their mirror images?",
    "options": [
      "A) Achiral",
      "B) Chiral",
      "C) Symmetrical",
      "D) Planar"
    ],
    "answer": "B) Chiral",
    "explanation": "The objects which are non-superimposable on their mirror image (like a pair of hands) are said to be chiral, and this property is known as chirality. Chiral molecules are the ones that are optically active."
  },
  {
    "id": 36,
    "context": "The objects which are non-superimposable on their mirror image (like a pair of hands) are said to be chiral, and this property is known as chirality. Chiral molecules are the ones that are optically active. Because of this, a single chemical formula can actually exist as two different mirror-image versions.",
    "question": "What do we call a pair of stereoisomers that are non-superimposable mirror images of each other?",
    "options": [
      "A) Enantiomers",
      "B) Isotopes",
      "C) Polymers",
      "D) Allotropes"
    ],
    "answer": "A) Enantiomers",
    "explanation": "The stereoisomers related to each other as non-superimposable mirror images are called enantiomers. They have identical physical properties but rotate plane polarised light in exactly opposite directions."
  },
  {
    "id": 37,
    "context": "The stereoisomers related to each other as non-superimposable mirror images are called enantiomers. They have identical physical properties but rotate plane polarised light in exactly opposite directions (one is dextrorotatory +, the other is laevorotatory -).",
    "question": "What happens to the optical rotation if you mix the d-enantiomer and the l-enantiomer together in exactly equal proportions (a 50:50 mixture)?",
    "options": [
      "A) The optical rotation doubles in strength.",
      "B) The mixture has zero optical rotation.",
      "C) The mixture explodes.",
      "D) The light gets trapped inside."
    ],
    "answer": "B) The mixture has zero optical rotation.",
    "explanation": "A mixture containing two enantiomers in equal proportions will have zero optical rotation, as the rotation due to one isomer will be perfectly cancelled out by the opposite rotation due to the other isomer."
  },
  {
    "id": 38,
    "context": "A mixture containing two enantiomers in equal proportions will have zero optical rotation, as the rotation due to one isomer will be perfectly cancelled out by the opposite rotation due to the other isomer. Because this specific 50:50 mixture is so common in chemistry, it gets a special name.",
    "question": "What is the specific term used to describe this optically inactive, 50:50 mixture of two enantiomers?",
    "options": [
      "A) Pure substance",
      "B) Racemic mixture or racemic modification",
      "C) Homogeneous catalyst",
      "D) Vinylic mixture"
    ],
    "answer": "B) Racemic mixture or racemic modification",
    "explanation": "Such an optically inactive 50:50 mixture is known as a racemic mixture or racemic modification. It is represented by prefixing dl or (±) before the chemical name, showing that it contains both + and - forms."
  },
  {
    "id": 39,
    "context": "Such an optically inactive 50:50 mixture is known as a racemic mixture or racemic modification. It is represented by prefixing dl or (±) before the chemical name, showing that it contains both + and - forms. Now let's tie this back to our SN1 reaction! In an SN1 reaction, the intermediate carbocation formed in the first step is sp2 hybridized, which means its shape is completely flat (planar).",
    "question": "Because the carbocation intermediate is flat, the nucleophile can attack it from either the front or the back with equal probability. What is the final stereochemical result of an SN1 reaction on an optically active alkyl halide?",
    "options": [
      "A) 100% Inversion of configuration",
      "B) 100% Retention of configuration",
      "C) Racemisation (formation of a racemic mixture)",
      "D) No reaction occurs"
    ],
    "answer": "C) Racemisation (formation of a racemic mixture)",
    "explanation": "The attack of the nucleophile may be accomplished from either side of the plane of the carbocation. This results in a 50:50 mixture of products (one with inverted configuration and one with retained configuration), leading to racemisation."
  },
  {
    "id": 40,
    "context": "The attack of the nucleophile may be accomplished from either side of the plane of the carbocation. This results in a 50:50 mixture of products (one with inverted configuration and one with retained configuration), leading to racemisation. So, nucleophiles substitute halogens. But sometimes, especially with strong bases, a completely different reaction pathway competes with substitution.",
    "question": "When a haloalkane is heated with an alcoholic solution of potassium hydroxide, instead of swapping the halogen, it loses a hydrogen atom from an adjacent carbon and a halogen atom from its main carbon. What is this reaction called?",
    "options": [
      "A) Addition reaction",
      "B) Substitution reaction",
      "C) Elimination reaction (or β-elimination)",
      "D) Hydration reaction"
    ],
    "answer": "C) Elimination reaction (or β-elimination)",
    "explanation": "Heating a haloalkane with alcoholic KOH causes the elimination of a hydrogen atom from the β-carbon and a halogen atom from the α-carbon. This is called β-elimination, and it produces an alkene as the product."
  },
  {
    "id": 41,
    "context": "Heating a haloalkane with alcoholic KOH causes the elimination of a hydrogen atom from the β-carbon and a halogen atom from the α-carbon. This is called β-elimination, and it produces an alkene as the product. But if the carbon chain is long, the base might have more than one adjacent β-hydrogen it could steal, leading to multiple possible alkene products.",
    "question": "If an elimination reaction can form more than one possible alkene, the preferred major product is usually the alkene that has the most alkyl groups attached to the doubly bonded carbons. Which chemist formulated this rule?",
    "options": [
      "A) Markovnikov",
      "B) Alexander Zaitsev (Zaitsev's rule)",
      "C) Victor Grignard",
      "D) Louis Pasteur"
    ],
    "answer": "B) Alexander Zaitsev (Zaitsev's rule)",
    "explanation": "Russian chemist Alexander Zaitsev formulated a rule in 1875 stating that in dehydrohalogenation reactions, the preferred product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms."
  },
  {
    "id": 42,
    "context": "Russian chemist Alexander Zaitsev formulated a rule in 1875 stating that in dehydrohalogenation reactions, the preferred product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms. In chemistry, substitution and elimination are always racing against each other for the same molecules.",
    "question": "If we use a very bulky, large base/nucleophile, which reaction path will it prefer: substitution (SN2) or elimination?",
    "options": [
      "A) Substitution (SN2)",
      "B) Elimination",
      "C) SN1 substitution",
      "D) Neither, it will freeze"
    ],
    "answer": "B) Elimination",
    "explanation": "A bulkier nucleophile will prefer to act as a base and abstract a proton (causing elimination) rather than approach a sterically hindered tetravalent carbon atom for substitution, simply because it is too big to squeeze in for a backside attack."
  },
  {
    "id": 43,
    "context": "A bulkier nucleophile will prefer to act as a base and abstract a proton (causing elimination) rather than approach a sterically hindered tetravalent carbon atom for substitution, simply because it is too big to squeeze in for a backside attack. Moving away from bases, haloalkanes can also undergo fascinating reactions with pure metals.",
    "question": "When an alkyl halide reacts with magnesium metal in dry ether, it forms a highly reactive class of organo-metallic compounds (R-Mg-X). What is the common name for these important reagents?",
    "options": [
      "A) Sandmeyer Reagents",
      "B) Finkelstein Reagents",
      "C) Grignard Reagents",
      "D) Zaitsev Reagents"
    ],
    "answer": "C) Grignard Reagents",
    "explanation": "Discovered by Victor Grignard in 1900, alkyl magnesium halides (RMgX) are referred to as Grignard Reagents. They are extremely important starting materials for synthesizing a wide variety of other organic compounds."
  },
  {
    "id": 44,
    "context": "Discovered by Victor Grignard in 1900, alkyl magnesium halides (RMgX) are referred to as Grignard Reagents. They are extremely important starting materials for synthesizing a wide variety of other organic compounds. However, they are incredibly sensitive.",
    "question": "Because Grignard reagents are so highly reactive and will instantly steal a proton to become a hydrocarbon, what common substance MUST be strictly avoided during their preparation?",
    "options": [
      "A) Dry ether",
      "B) Water (moisture)",
      "C) Nitrogen gas",
      "D) Magnesium metal"
    ],
    "answer": "B) Water (moisture)",
    "explanation": "Grignard reagents are highly reactive and react with any source of proton (like water, alcohols, or amines) to give hydrocarbons. Therefore, it is strictly necessary to avoid even traces of moisture, which is why they are prepared in completely dry ether."
  },
  {
    "id": 45,
    "context": "Grignard reagents are highly reactive and react with any source of proton (like water, alcohols, or amines) to give hydrocarbons. Therefore, it is strictly necessary to avoid even traces of moisture, which is why they are prepared in completely dry ether. Magnesium isn't the only metal that acts this way in dry ether. Sodium metal also has a famous named reaction.",
    "question": "What is the name of the reaction where alkyl halides react with sodium metal in dry ether to join two alkyl groups together, creating a larger hydrocarbon with exactly double the number of carbon atoms?",
    "options": [
      "A) Fittig reaction",
      "B) Wurtz reaction",
      "C) Friedel-Crafts reaction",
      "D) Swarts reaction"
    ],
    "answer": "B) Wurtz reaction",
    "explanation": "Alkyl halides react with sodium in dry ether to give hydrocarbons containing double the number of carbon atoms present in the original halide. This chain-doubling reaction is known as the Wurtz reaction."
  },
  {
    "id": 46,
    "context": "Alkyl halides react with sodium in dry ether to give hydrocarbons containing double the number of carbon atoms present in the original halide. This chain-doubling reaction is known as the Wurtz reaction. Now that we thoroughly understand how straight-chain alkyl halides behave, let's shift our focus to aryl halides (haloarenes), where the halogen is directly attached to a flat benzene ring.",
    "question": "Compared to standard haloalkanes, how reactive are haloarenes towards nucleophilic substitution reactions?",
    "options": [
      "A) They are much more reactive.",
      "B) They are extremely less reactive (almost unreactive).",
      "C) They react at the exact same speed.",
      "D) They spontaneously explode."
    ],
    "answer": "B) They are extremely less reactive (almost unreactive).",
    "explanation": "Aryl halides are extremely less reactive towards nucleophilic substitution reactions compared to haloalkanes. This is due to several powerful stabilizing factors, like resonance effects and carbon hybridization."
  },
  {
    "id": 47,
    "context": "Aryl halides are extremely less reactive towards nucleophilic substitution reactions compared to haloalkanes. This is due to several powerful stabilizing factors, like resonance effects and carbon hybridization. Let's look at the 'resonance effect' first.",
    "question": "Due to resonance in a haloarene, what happens to the bond between the carbon atom of the benzene ring and the halogen atom?",
    "options": [
      "A) It becomes a very long single bond.",
      "B) It instantly breaks apart.",
      "C) It acquires a partial double bond character.",
      "D) It turns into a triple bond."
    ],
    "answer": "C) It acquires a partial double bond character.",
    "explanation": "In haloarenes, the electron pairs on the halogen atom are in conjugation with the pi-electrons of the ring. As a result of resonance, the C—X bond acquires a partial double bond character, making it shorter, stronger, and much harder for a nucleophile to break."
  },
  {
    "id": 48,
    "context": "In haloarenes, the electron pairs on the halogen atom are in conjugation with the pi-electrons of the ring. As a result of resonance, the C—X bond acquires a partial double bond character, making it shorter, stronger, and much harder for a nucleophile to break. But resonance isn't the only thing locking the halogen in place. We also have to look at the carbon's hybridization.",
    "question": "In a haloalkane, the halogen is attached to an sp3 hybridized carbon. But in a haloarene, what is the hybridization of the carbon atom attached to the halogen?",
    "options": [
      "A) sp3 hybridized",
      "B) sp2 hybridized",
      "C) sp hybridized",
      "D) It has no hybridization"
    ],
    "answer": "B) sp2 hybridized",
    "explanation": "In haloarenes, the carbon atom attached to the halogen is sp2 hybridized. An sp2 hybridized carbon has more s-character and holds its electron pair more tightly than an sp3 carbon, making the C-X bond even shorter and harder to break."
  },
  {
    "id": 49,
    "context": "In haloarenes, the carbon atom attached to the halogen is sp2 hybridized. An sp2 hybridized carbon has more s-character and holds its electron pair more tightly than an sp3 carbon, making the C-X bond even shorter and harder to break. Furthermore, we must remember that the benzene ring itself is a dense cloud of moving pi-electrons.",
    "question": "Why does the electron-rich nature of the benzene ring actively prevent incoming nucleophiles from attacking the haloarene?",
    "options": [
      "A) Because nucleophiles are also electron-rich, and like charges repel each other.",
      "B) Because nucleophiles are positively charged and get stuck.",
      "C) Because the benzene ring absorbs the nucleophile.",
      "D) Because nucleophiles are too heavy."
    ],
    "answer": "A) Because nucleophiles are also electron-rich, and like charges repel each other.",
    "explanation": "Nucleophiles are electron-rich species. The benzene ring is also very electron-rich due to its pi-electron cloud. Because like charges repel, the electron-rich nucleophile faces strong repulsion as it tries to approach the electron-rich haloarene."
  },
  {
    "id": 50,
    "context": "Nucleophiles are electron-rich species. The benzene ring is also very electron-rich due to its pi-electron cloud. Because like charges repel, the electron-rich nucleophile faces strong repulsion as it tries to approach the electron-rich haloarene. It seems almost impossible to force a nucleophile onto a benzene ring! But chemists have a trick.",
    "question": "If we want to force a stubborn haloarene to undergo nucleophilic substitution (like replacing its chlorine with an -OH group), what type of chemical group can we attach to the ortho or para positions of the benzene ring to make the reaction dramatically easier?",
    "options": [
      "A) An electron-donating group (like -CH3)",
      "B) An electron-withdrawing group (like -NO2)",
      "C) Another halogen atom",
      "D) A noble gas"
    ],
    "answer": "B) An electron-withdrawing group (like -NO2)",
    "explanation": "The presence of an electron withdrawing group (like -NO2) at ortho- and para- positions drastically increases the reactivity of haloarenes. It withdraws the repelling electron density away from the ring, making it much easier for the nucleophile to attack."
  },
  {
    "id": 51,
    "context": "The presence of an electron withdrawing group (like -NO2) at ortho- and para- positions drastically increases the reactivity of haloarenes by withdrawing repelling electron density away from the ring. But interestingly, if you place this same -NO2 group at the 'meta' position, it doesn't help the reaction at all.",
    "question": "Why does the -NO2 group only speed up the nucleophilic substitution when it is at the ortho or para positions, and not at the meta position?",
    "options": [
      "A) The meta position is physically too far away to matter.",
      "B) The negative charge formed during the reaction only appears on the ortho and para carbons, allowing the NO2 group to stabilize it there.",
      "C) The meta position is already permanently positively charged.",
      "D) The -NO2 group falls off if placed at the meta position."
    ],
    "answer": "B) The negative charge formed during the reaction only appears on the ortho and para carbons, allowing the NO2 group to stabilize it there.",
    "explanation": "During the nucleophile's attack, the negative charge appears at the ortho- and para- positions with respect to the halogen. An NO2 group at these positions stabilizes this negative charge. No such negative charge appears at the meta-position, so an NO2 group there has no stabilizing effect."
  },
  {
    "id": 52,
    "context": "During the nucleophile's attack, the negative charge appears at the ortho- and para- positions with respect to the halogen. An NO2 group at these positions stabilizes this negative charge. No such negative charge appears at the meta-position. Now, let's look at the opposite kind of reaction: 'Electrophilic substitution', where positively charged species (electrophiles) attack the ring.",
    "question": "In electrophilic substitution reactions of haloarenes, where do the incoming electrophiles prefer to attach on the benzene ring?",
    "options": [
      "A) Only at the meta position",
      "B) At the ortho and para positions",
      "C) They replace the halogen completely",
      "D) They don't attach at all"
    ],
    "answer": "B) At the ortho and para positions",
    "explanation": "Haloarenes undergo usual electrophilic reactions. Because of resonance, the electron density increases more at ortho- and para-positions. Therefore, the halogen atom is o, p-directing, guiding incoming electrophiles specifically to those spots."
  },
  {
    "id": 53,
    "context": "Because of resonance, the electron density increases more at ortho- and para-positions. Therefore, the halogen atom is o, p-directing, guiding incoming electrophiles specifically to those spots. However, halogens have a conflicting trait: they also pull electrons away through their 'inductive effect'.",
    "question": "Because the halogen atom withdraws electrons from the benzene ring through the inductive (-I) effect, how does this affect the ring's overall reactivity towards electrophiles compared to a plain benzene ring?",
    "options": [
      "A) It makes the ring much more reactive than normal benzene.",
      "B) It makes the ring somewhat deactivated compared to normal benzene.",
      "C) It has no effect on reactivity whatsoever.",
      "D) It causes the ring to spontaneously break apart."
    ],
    "answer": "B) It makes the ring somewhat deactivated compared to normal benzene.",
    "explanation": "The halogen atom has some tendency to withdraw electrons from the benzene ring due to its -I effect. As a result, the ring gets somewhat deactivated, meaning these reactions occur more slowly and require more drastic conditions compared to those in plain benzene."
  },
  {
    "id": 54,
    "context": "The halogen atom has some tendency to withdraw electrons from the benzene ring due to its -I effect. As a result, the ring gets somewhat deactivated, meaning these reactions occur more slowly and require more drastic conditions compared to those in plain benzene. Let's look at a specific reaction called 'Halogenation', where we try to add a second halogen to the ring.",
    "question": "Which specific catalyst is required to successfully add a second chlorine atom to chlorobenzene using Cl2 gas?",
    "options": [
      "A) Water (H2O)",
      "B) Sodium metal (Na)",
      "C) Anhydrous Iron(III) chloride (Anhyd. FeCl3)",
      "D) Potassium Hydroxide (KOH)"
    ],
    "answer": "C) Anhydrous Iron(III) chloride (Anhyd. FeCl3)",
    "explanation": "To perform halogenation on a somewhat deactivated haloarene, you need a Lewis acid catalyst like anhydrous FeCl3. This helps generate a strong enough electrophile to force the reaction to happen."
  },
  {
    "id": 55,
    "context": "To perform halogenation on a somewhat deactivated haloarene, you need a Lewis acid catalyst like anhydrous FeCl3. This helps generate a strong enough electrophile to force the reaction to happen. When this reaction occurs, you get a mixture of ortho and para products.",
    "question": "In electrophilic substitution reactions like halogenation, which isomer is typically formed as the 'major' (most abundant) product?",
    "options": [
      "A) The meta-isomer",
      "B) The ortho-isomer",
      "C) The para-isomer",
      "D) They are always formed in perfectly equal amounts"
    ],
    "answer": "C) The para-isomer",
    "explanation": "The para-isomer is usually the major product. This is because the para position is on the exact opposite side of the ring from the first halogen, so there is much less crowding (steric hindrance) than at the adjacent ortho position."
  },
  {
    "id": 56,
    "context": "The para-isomer is usually the major product. This is because the para position is on the exact opposite side of the ring from the first halogen, so there is much less crowding (steric hindrance) than at the adjacent ortho position. Another electrophilic reaction is 'Nitration', where we add a nitro (-NO2) group to the ring.",
    "question": "What combination of reagents is used to add a nitro (-NO2) group to a haloarene during a nitration reaction?",
    "options": [
      "A) Nitric acid (HNO3) and concentrated Sulfuric acid (conc. H2SO4)",
      "B) Nitrogen gas and water",
      "C) Ammonia and heat",
      "D) Sodium nitrite and HCl"
    ],
    "answer": "A) Nitric acid (HNO3) and concentrated Sulfuric acid (conc. H2SO4)",
    "explanation": "Nitration is carried out by treating the haloarene with a mixture of nitric acid (HNO3) and concentrated sulfuric acid (conc. H2SO4), yielding 1-Chloro-2-nitrobenzene (minor) and 1-Chloro-4-nitrobenzene (major)."
  },
  {
    "id": 57,
    "context": "Nitration is carried out by treating the haloarene with a mixture of nitric acid (HNO3) and concentrated sulfuric acid (conc. H2SO4), yielding 1-Chloro-2-nitrobenzene (minor) and 1-Chloro-4-nitrobenzene (major). Similarly, we can attach a sulfonic acid group (-SO3H) to the ring in a process called Sulphonation.",
    "question": "What reagent and condition are needed to perform the Sulphonation of chlorobenzene?",
    "options": [
      "A) Sulfur powder and bright UV light",
      "B) Concentrated Sulfuric acid (conc. H2SO4) and heat",
      "C) Hydrogen sulfide gas",
      "D) Sodium sulfite and cold water"
    ],
    "answer": "B) Concentrated Sulfuric acid (conc. H2SO4) and heat",
    "explanation": "Sulphonation is achieved by simply heating the haloarene with concentrated sulfuric acid (conc. H2SO4), which introduces the -SO3H group to the ortho and para positions."
  },
  {
    "id": 58,
    "context": "Sulphonation is achieved by simply heating the haloarene with concentrated sulfuric acid (conc. H2SO4), which introduces the -SO3H group to the ortho and para positions. We can also add carbon-based alkyl groups directly to the ring using a famous reaction discovered by Charles Friedel and James Crafts.",
    "question": "In a Friedel-Crafts alkylation reaction, what catalyst is used alongside a haloalkane (like CH3Cl) to attach a methyl group to a chlorobenzene ring?",
    "options": [
      "A) Anhydrous Aluminium Chloride (Anhyd. AlCl3)",
      "B) Sodium metal",
      "C) UV Light",
      "D) Water"
    ],
    "answer": "A) Anhydrous Aluminium Chloride (Anhyd. AlCl3)",
    "explanation": "In Friedel-Crafts reactions, an alkyl halide (like CH3Cl) reacts with the haloarene in the presence of Anhydrous Aluminium Chloride (Anhyd. AlCl3) as a catalyst to successfully attach an alkyl group to the ring."
  },
  {
    "id": 59,
    "context": "In Friedel-Crafts reactions, an alkyl halide (like CH3Cl) reacts with the haloarene in the presence of Anhydrous Aluminium Chloride (Anhyd. AlCl3) as a catalyst to successfully attach an alkyl group to the ring. Earlier, we learned that alkyl halides react with sodium metal to join their chains together (the Wurtz reaction). What happens if we mix an alkyl halide AND an aryl halide together with sodium?",
    "question": "What is the name of the reaction where a mixture of an alkyl halide and an aryl halide is treated with sodium in dry ether to form an alkylarene?",
    "options": [
      "A) Finkelstein reaction",
      "B) Sandmeyer reaction",
      "C) Wurtz-Fittig reaction",
      "D) Friedel-Crafts alkylation"
    ],
    "answer": "C) Wurtz-Fittig reaction",
    "explanation": "A mixture of an alkyl halide and aryl halide gives an alkylarene when treated with sodium in dry ether. Because it combines the straight-chain Wurtz reaction with an aromatic ring, it is called the Wurtz-Fittig reaction."
  },
  {
    "id": 60,
    "context": "A mixture of an alkyl halide and aryl halide gives an alkylarene when treated with sodium in dry ether. Because it combines the straight-chain Wurtz reaction with an aromatic ring, it is called the Wurtz-Fittig reaction. What if we completely remove the straight-chain alkyl halide from the equation?",
    "question": "What is the name of the reaction where TWO aryl halides are treated with sodium in dry ether, causing the two aromatic rings to join directly together?",
    "options": [
      "A) Wurtz reaction",
      "B) Fittig reaction",
      "C) Swarts reaction",
      "D) Elimination reaction"
    ],
    "answer": "B) Fittig reaction",
    "explanation": "Aryl halides also give analogous compounds when treated with sodium in dry ether, in which two aryl groups are joined together (forming diphenyl). This is specifically called the Fittig reaction."
  },
  {
    "id": 61,
    "context": "Aryl halides also give analogous compounds when treated with sodium in dry ether, in which two aryl groups are joined together (forming diphenyl). This is specifically called the Fittig reaction. This concludes our study of simple monohalogen compounds! Now let's explore compounds that have multiple halogens, which have massive impacts on our daily lives.",
    "question": "What is the general term for carbon compounds that contain more than one halogen atom in their structure?",
    "options": [
      "A) Monohalides",
      "B) Polyhalogen compounds",
      "C) Alcohols",
      "D) Plain Hydrocarbons"
    ],
    "answer": "B) Polyhalogen compounds",
    "explanation": "Carbon compounds containing more than one halogen atom are usually referred to as polyhalogen compounds. Many of these are incredibly useful in industry and agriculture."
  },
  {
    "id": 62,
    "context": "Carbon compounds containing more than one halogen atom are usually referred to as polyhalogen compounds. Many of these are incredibly useful in industry and agriculture. Let's start with a very common one containing two chlorines: Dichloromethane (CH2Cl2).",
    "question": "What is the most common industrial use for Dichloromethane (also known as Methylene chloride)?",
    "options": [
      "A) As a food additive",
      "B) As an agricultural fertilizer",
      "C) As a solvent, particularly as a paint remover",
      "D) As drinking water"
    ],
    "answer": "C) As a solvent, particularly as a paint remover",
    "explanation": "Dichloromethane is widely used as a solvent. Specifically, it is commonly used as a paint remover, as a propellant in aerosols, and as a process solvent in the manufacture of drugs."
  },
  {
    "id": 63,
    "context": "Dichloromethane is widely used as a solvent. Specifically, it is commonly used as a paint remover, as a propellant in aerosols, and as a process solvent in the manufacture of drugs. However, because it evaporates so easily, humans can easily inhale it, leading to negative health effects.",
    "question": "What part of the human body is primarily harmed by exposure to low levels of methylene chloride (dichloromethane) in the air?",
    "options": [
      "A) The skeletal system (bones)",
      "B) The digestive system (stomach)",
      "C) The central nervous system (causing impaired hearing and vision)",
      "D) The muscular system"
    ],
    "answer": "C) The central nervous system (causing impaired hearing and vision)",
    "explanation": "Methylene chloride harms the human central nervous system. Exposure to lower levels in the air can lead to slightly impaired hearing and vision, while higher levels cause dizziness, nausea, and tingling in the fingers and toes."
  },
  {
    "id": 64,
    "context": "Methylene chloride harms the human central nervous system. Exposure to lower levels in the air can lead to slightly impaired hearing and vision, while higher levels cause dizziness, nausea, and tingling in the fingers and toes. Another famous polyhalogen compound has three chlorines: Trichloromethane (CHCl3). You likely know it by its famous historical name.",
    "question": "What is Trichloromethane commonly known as, and what was its famous historical use in medicine?",
    "options": [
      "A) Freon, used as an asthma inhaler",
      "B) Iodoform, used as a topical antibiotic",
      "C) Chloroform, used as a general anaesthetic in surgery",
      "D) DDT, used as a painkiller"
    ],
    "answer": "C) Chloroform, used as a general anaesthetic in surgery",
    "explanation": "Chemically, trichloromethane is commonly known as Chloroform. It was once widely used as a general anaesthetic in surgery, though it has since been replaced by less toxic, safer anaesthetics."
  },
  {
    "id": 65,
    "context": "Chemically, trichloromethane is commonly known as Chloroform. It was once widely used as a general anaesthetic in surgery, though it has since been replaced by less toxic, safer anaesthetics. One reason it was phased out is because of how dangerous it becomes when simply left sitting out.",
    "question": "What extremely poisonous gas is formed when chloroform is slowly oxidized by air in the presence of light?",
    "options": [
      "A) Carbon dioxide",
      "B) Phosgene (carbonyl chloride)",
      "C) Mustard gas",
      "D) Methane gas"
    ],
    "answer": "B) Phosgene (carbonyl chloride)",
    "explanation": "Chloroform is slowly oxidized by air in the presence of light to form an extremely poisonous gas called carbonyl chloride, which is also known as phosgene."
  },
  {
    "id": 66,
    "context": "Chloroform is slowly oxidized by air in the presence of light to form an extremely poisonous gas called carbonyl chloride, which is also known as phosgene. To prevent doctors or chemists from accidentally getting poisoned, chloroform must be stored very carefully.",
    "question": "Because light and air turn chloroform into toxic phosgene, how must chloroform be stored in a laboratory?",
    "options": [
      "A) In completely filled, closed dark coloured bottles",
      "B) In clear, open glass beakers",
      "C) In pure oxygen tanks",
      "D) Under intense UV light"
    ],
    "answer": "A) In completely filled, closed dark coloured bottles",
    "explanation": "Because of the severe danger of phosgene formation, chloroform is therefore stored in closed dark coloured bottles completely filled so that air is kept out and light cannot penetrate."
  },
  {
    "id": 67,
    "context": "Because of the severe danger of phosgene formation, chloroform is therefore stored in closed dark coloured bottles completely filled so that air is kept out and light cannot penetrate. Now let's swap the three chlorines for three iodines to make Triiodomethane (CHI3), also known as Iodoform. It used to be put directly on cuts and scrapes.",
    "question": "Why was Iodoform historically used as an antiseptic in medicine?",
    "options": [
      "A) Because the iodoform molecule itself kills bacteria",
      "B) Because it heals skin instantly",
      "C) Due to the continuous liberation of free iodine, which acts as the antiseptic",
      "D) Because it smells very pleasant"
    ],
    "answer": "C) Due to the continuous liberation of free iodine, which acts as the antiseptic",
    "explanation": "Iodoform was used earlier as an antiseptic. However, the antiseptic properties are due to the liberation of free iodine from the compound, and not due to the iodoform molecule itself."
  },
  {
    "id": 68,
    "context": "Iodoform was used earlier as an antiseptic. However, the antiseptic properties are due to the liberation of free iodine from the compound, and not due to the iodoform molecule itself. Because it had a very bad smell, it was replaced. Next, let's look at a compound with FOUR chlorines: Tetrachloromethane, or Carbon tetrachloride (CCl4).",
    "question": "Carbon tetrachloride was once widely used as a cleaning fluid and fire extinguisher. However, what serious global environmental problem occurs when CCl4 is released into the air and reaches the upper atmosphere?",
    "options": [
      "A) It creates toxic acid rain",
      "B) It drastically depletes the ozone layer",
      "C) It cools down the earth's temperature",
      "D) It blocks out the sun entirely"
    ],
    "answer": "B) It drastically depletes the ozone layer",
    "explanation": "When carbon tetrachloride is released into the air, it rises to the atmosphere and depletes the ozone layer. This depletion increases human exposure to ultraviolet rays, leading to increased risks of skin cancer and eye diseases."
  },
  {
    "id": 69,
    "context": "When carbon tetrachloride is released into the air, it rises to the atmosphere and depletes the ozone layer. This depletion increases human exposure to ultraviolet rays, leading to increased risks of skin cancer and eye diseases. This exact same ozone-depleting problem is shared by a famous class of chemicals once used heavily in refrigerators.",
    "question": "What is the collective common name for the chlorofluorocarbon (CFC) compounds of methane and ethane?",
    "options": [
      "A) Halons",
      "B) Freons",
      "C) Dioxins",
      "D) Polymers"
    ],
    "answer": "B) Freons",
    "explanation": "The chlorofluorocarbon compounds of methane and ethane are collectively known as freons. They are extremely stable, unreactive, non-toxic, non-corrosive and easily liquefiable gases."
  },
  {
    "id": 70,
    "context": "The chlorofluorocarbon compounds of methane and ethane are collectively known as freons. They are extremely stable, unreactive, non-toxic, non-corrosive and easily liquefiable gases. The most common one is Freon 12 (CCl2F2).",
    "question": "Which reaction is utilized industrially to manufacture Freon 12 starting from tetrachloromethane?",
    "options": [
      "A) Wurtz reaction",
      "B) Finkelstein reaction",
      "C) Swarts reaction",
      "D) Sandmeyer reaction"
    ],
    "answer": "C) Swarts reaction",
    "explanation": "Freon 12 is manufactured from tetrachloromethane by the Swarts reaction, which, as we learned earlier, is the specific reaction used for exchanging halogens for fluorine atoms using metallic fluorides."
  },
  {
    "id": 71,
    "context": "Freon 12 is manufactured from tetrachloromethane by the Swarts reaction, which, as we learned earlier, is the specific reaction used for exchanging halogens for fluorine atoms using metallic fluorides. Because freons are unreactive and easily liquefiable, they were incredibly popular for aerosols and refrigeration.",
    "question": "Why are Freons considered a massive environmental hazard once they eventually leak into the atmosphere?",
    "options": [
      "A) They fall to the ground and poison plant roots",
      "B) They diffuse into the stratosphere and initiate radical chain reactions that upset the natural ozone balance",
      "C) They instantly explode in sunlight",
      "D) They trap birds in the sky"
    ],
    "answer": "B) They diffuse into the stratosphere and initiate radical chain reactions that upset the natural ozone balance",
    "explanation": "Freon eventually makes its way into the atmosphere where it diffuses unchanged into the stratosphere. In the stratosphere, freon is able to initiate radical chain reactions that can completely upset the natural ozone balance."
  },
  {
    "id": 72,
    "context": "In the stratosphere, freon is able to initiate radical chain reactions that can completely upset the natural ozone balance, which is why their use has been heavily restricted globally. Finally, let's look at a large, complex polyhalogen compound known as p,p’-Dichlorodiphenyltrichloroethane, or DDT.",
    "question": "What was the primary application of DDT that led to Paul Muller winning the Nobel Prize in Medicine in 1948?",
    "options": [
      "A) It was the first cure for cancer",
      "B) It was a highly effective chlorinated organic insecticide used to kill mosquitoes carrying malaria",
      "C) It was a powerful new surgical anaesthetic",
      "D) It was an industrial fertilizer"
    ],
    "answer": "B) It was a highly effective chlorinated organic insecticide used to kill mosquitoes carrying malaria",
    "explanation": "Paul Muller discovered the effectiveness of DDT as an insecticide. Its use increased enormously on a worldwide basis after World War II, primarily because of its effectiveness against the mosquito that spreads malaria and lice that carry typhus."
  },
  {
    "id": 73,
    "context": "Paul Muller discovered the effectiveness of DDT as an insecticide. Its use increased enormously on a worldwide basis after World War II, primarily because of its effectiveness against the mosquito that spreads malaria and lice that carry typhus. It seemed like a miracle chemical. However, severe problems soon emerged.",
    "question": "What biological problem was observed in insect populations after extensive use of DDT began?",
    "options": [
      "A) They grew to giant sizes",
      "B) Many species of insects quickly developed resistance to DDT",
      "C) They began eating the crops much faster",
      "D) They completely disappeared from earth"
    ],
    "answer": "B) Many species of insects quickly developed resistance to DDT",
    "explanation": "Problems related to extensive use of DDT began to appear in the late 1940s as many species of insects quickly developed a strong resistance to DDT, making it much less effective over time."
  },
  {
    "id": 74,
    "context": "Problems related to extensive use of DDT began to appear in the late 1940s as many species of insects quickly developed a strong resistance to DDT, making it much less effective over time. But the bigger problem was its effect on the entire food chain, due to its high toxicity towards fish and other animals.",
    "question": "Why does DDT build up to dangerous levels in the bodies of animals over time, a process known as bioaccumulation?",
    "options": [
      "A) It is not metabolised by animals and is highly fat soluble, so it gets stored permanently in fatty tissues",
      "B) Animals intentionally eat it because it tastes good",
      "C) It turns directly into bone matter",
      "D) It is absorbed perfectly into the bloodstream and never leaves"
    ],
    "answer": "A) It is not metabolised by animals and is highly fat soluble, so it gets stored permanently in fatty tissues",
    "explanation": "The chemical stability of DDT and its fat solubility compounded the problem. DDT is not metabolised very rapidly by animals; instead, it is deposited and stored in the fatty tissues. If ingestion continues, DDT builds up within the animal over time."
  },
  {
    "id": 75,
    "context": "The chemical stability of DDT and its fat solubility compounded the problem. DDT is not metabolised very rapidly by animals; instead, it is deposited and stored in the fatty tissues. If ingestion continues, DDT builds up within the animal over time. Because of this disastrous bioaccumulation in the food chain, strict actions had to be taken.",
    "question": "Due to its severe environmental impact and accumulation in fatty tissues, what happened to the widespread use of DDT in the United States in 1973?",
    "options": [
      "A) Its use was doubled to fight off resistant bugs",
      "B) It was restricted to only indoor use",
      "C) The use of DDT was completely banned",
      "D) It was heavily added to drinking water supplies"
    ],
    "answer": "C) The use of DDT was completely banned",
    "explanation": "Because of its high toxicity to fish, its chemical stability, and its dangerous tendency to build up in the fatty tissues of animals over time, the use of DDT was officially banned in the United States in 1973."
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
