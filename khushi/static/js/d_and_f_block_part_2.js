// The complete quiz payload
const quizData = 
[
  {
    "context": "We have explored the general physical properties of d-block transition metals. Now let's look at the important chemical compounds they form, particularly with oxygen. When transition metals react with oxygen at high temperatures, they form oxides. But the chemical nature of these oxides changes based on how many electrons the metal is sharing.",
    "question": "As the oxidation number of a transition metal in an oxide increases, what happens to its chemical character?",
    "options": [
      "It becomes highly ionic and basic.",
      "It becomes an unreactive noble gas.",
      "Ionic character decreases and acidic character becomes predominant.",
      "It turns into a pure solid metal."
    ],
    "answer": "Ionic character decreases and acidic character becomes predominant.",
    "explanation": "When a transition metal has a very high oxidation number (like +6 or +7), it cannot simply give away that many electrons. Instead, it shares them, creating a covalent bond. These highly covalent oxides act as strong acids! Two of the most important colored acidic salts are chromates and permanganates."
  },
  {
    "context": "When a transition metal has a very high oxidation number (like +6 or +7), it cannot simply give away that many electrons. Instead, it shares them, creating a covalent bond. These highly covalent oxides act as strong acids! Two of the most important colored acidic salts are chromates and permanganates.",
    "question": "Which specific ore is fused with sodium carbonate and air to manufacture Potassium dichromate (K2Cr2O7)?",
    "options": [
      "Pyrolusite ore (MnO2)",
      "Chromite ore (FeCr2O4)",
      "Bauxite ore",
      "Hematite ore"
    ],
    "answer": "Chromite ore (FeCr2O4)",
    "explanation": "Potassium dichromate is made by first taking Chromite ore (FeCr2O4) and roasting it with sodium carbonate and oxygen. This first step produces a bright yellow liquid containing Sodium chromate."
  },
  {
    "context": "Potassium dichromate is made by first taking Chromite ore (FeCr2O4) and roasting it with sodium carbonate and oxygen. This first step produces a bright yellow liquid containing Sodium chromate.",
    "question": "How is the yellow Sodium chromate solution converted into orange Sodium dichromate?",
    "options": [
      "By filtering it through sand.",
      "By freezing it to absolute zero.",
      "By acidifying the solution with sulphuric acid.",
      "By adding more oxygen gas."
    ],
    "answer": "By acidifying the solution with sulphuric acid.",
    "explanation": "Adding an acid provides H+ ions. These H+ ions cause the yellow chromate ions to combine and form larger, orange dichromate ions. Interestingly, these two colorful ions can flip back and forth depending on the liquid they are in."
  },
  {
    "context": "Adding an acid provides H+ ions. These H+ ions cause the yellow chromate ions to combine and form larger, orange dichromate ions. Interestingly, these two colorful ions can flip back and forth depending on the liquid they are in.",
    "question": "What specifically determines whether the chromium ions exist as yellow chromate or orange dichromate in an aqueous solution?",
    "options": [
      "The temperature of the solution",
      "The pH of the solution",
      "The amount of light hitting the beaker",
      "The atmospheric pressure"
    ],
    "answer": "The pH of the solution",
    "explanation": "The color flip depends entirely on pH! In acidic solutions (low pH), orange dichromate is stable. In basic solutions (high pH), yellow chromate is stable. Notice that the oxidation state of Chromium (+6) stays exactly the same during this flip."
  },
  {
    "context": "The color flip depends entirely on pH! In acidic solutions (low pH), orange dichromate is stable. In basic solutions (high pH), yellow chromate is stable. Notice that the oxidation state of Chromium (+6) stays exactly the same during this flip.",
    "question": "What is the physical 3D shape of a single yellow chromate ion (CrO4 2-)?",
    "options": [
      "Linear",
      "Flat square",
      "Tetrahedral",
      "Octahedral"
    ],
    "answer": "Tetrahedral",
    "explanation": "The chromate ion has a tetrahedral shape, meaning the central chromium atom is surrounded by four oxygen atoms forming a pyramid-like structure. The orange dichromate ion is simply two of these tetrahedrons glued together by sharing a single oxygen atom at one corner."
  },
  {
    "context": "The chromate ion has a tetrahedral shape, meaning the central chromium atom is surrounded by four oxygen atoms forming a pyramid-like structure. The orange dichromate ion is simply two of these tetrahedrons glued together by sharing a single oxygen atom at one corner.",
    "question": "Because Potassium dichromate contains chromium in a highly hungry +6 oxidation state, what role does it usually play in chemical reactions?",
    "options": [
      "A strong reducing agent",
      "A strong oxidising agent",
      "A weak acid",
      "An inert gas"
    ],
    "answer": "A strong oxidising agent",
    "explanation": "It is a powerful oxidising agent because Chromium(VI) desperately wants to steal 6 electrons from other chemicals to drop down to a more relaxed Chromium(III) state. We can see this electron-stealing action when we mix it with iron salts."
  },
  {
    "context": "It is a powerful oxidising agent because Chromium(VI) desperately wants to steal 6 electrons from other chemicals to drop down to a more relaxed Chromium(III) state. We can see this electron-stealing action when we mix it with iron salts.",
    "question": "When Potassium dichromate acts as an oxidizer in an acidic solution, what does it turn Iron(II) (Fe2+) ions into?",
    "options": [
      "Solid Iron metal (Fe)",
      "Iron(III) (Fe3+) ions",
      "Iron(IV) (Fe4+) ions",
      "It completely destroys the iron."
    ],
    "answer": "Iron(III) (Fe3+) ions",
    "explanation": "The dichromate ion acts like an electron vacuum, ripping one electron away from pale green Fe2+ to turn it into yellow Fe3+. While dichromate is a famous orange oxidizer, another famous transition metal compound is deep purple."
  },
  {
    "context": "The dichromate ion acts like an electron vacuum, ripping one electron away from pale green Fe2+ to turn it into yellow Fe3+. While dichromate is a famous orange oxidizer, another famous transition metal compound is deep purple.",
    "question": "Which raw ore is primarily used to prepare Potassium permanganate (KMnO4)?",
    "options": [
      "Chromite",
      "Bauxite",
      "Pyrolusite (MnO2)",
      "Magnetite"
    ],
    "answer": "Pyrolusite (MnO2)",
    "explanation": "Pyrolusite (MnO2) is a black mineral. To make the purple permanganate, this ore is first fused with an alkali base (like KOH) and oxygen to create a dark green intermediate compound called Potassium manganate."
  },
  {
    "context": "Pyrolusite (MnO2) is a black mineral. To make the purple permanganate, this ore is first fused with an alkali base (like KOH) and oxygen to create a dark green intermediate compound called Potassium manganate.",
    "question": "What happens to the green manganate ion (MnO4 2-) when it is placed in an acidic or neutral solution?",
    "options": [
      "It completely evaporates.",
      "It undergoes disproportionation to give purple permanganate and solid MnO2.",
      "It turns into pure manganese metal.",
      "It freezes into a solid block."
    ],
    "answer": "It undergoes disproportionation to give purple permanganate and solid MnO2.",
    "explanation": "'Disproportionation' is a chemical identity crisis: the green manganate breaks apart so that one part goes up to a higher oxidation state (+7 permanganate) and another part drops to a lower one (+4 MnO2). Today, industries use electricity to help this process."
  },
  {
    "context": "'Disproportionation' is a chemical identity crisis: the green manganate breaks apart so that one part goes up to a higher oxidation state (+7 permanganate) and another part drops to a lower one (+4 MnO2). Today, industries use electricity to help this process.",
    "question": "Like chromate, the permanganate ion has a tetrahedral shape. How do the oxygen atoms form multiple bonds with the manganese atom in this shape?",
    "options": [
      "By sharing protons.",
      "By overlapping the p-orbitals of oxygen with the d-orbitals of manganese (p-pi to d-pi bonding).",
      "By using only s-orbitals.",
      "By magnetism."
    ],
    "answer": "By overlapping the p-orbitals of oxygen with the d-orbitals of manganese (p-pi to d-pi bonding).",
    "explanation": "The oxygen atoms use their 'p' electrons to bond with the empty 'd' rooms of manganese, creating a very strong, multiple-bond structure. This intense structure affects how the molecule reacts to magnets."
  },
  {
    "context": "The oxygen atoms use their 'p' electrons to bond with the empty 'd' rooms of manganese, creating a very strong, multiple-bond structure. This intense structure affects how the molecule reacts to magnets.",
    "question": "While the green manganate ion is paramagnetic (has one unpaired electron), how does the purple permanganate ion respond to a magnetic field?",
    "options": [
      "It is violently attracted (ferromagnetic).",
      "It is completely unaffected.",
      "It is diamagnetic (has zero unpaired electrons).",
      "It explodes."
    ],
    "answer": "It is diamagnetic (has zero unpaired electrons).",
    "explanation": "It is diamagnetic because Manganese is in its absolute maximum +7 oxidation state, meaning it has lost all of its 4s and 3d electrons! With zero unpaired electrons, it doesn't act like a magnet. However, it is an incredibly aggressive oxidizer."
  },
  {
    "context": "It is diamagnetic because Manganese is in its absolute maximum +7 oxidation state, meaning it has lost all of its 4s and 3d electrons! With zero unpaired electrons, it doesn't act like a magnet. However, it is an incredibly aggressive oxidizer.",
    "question": "When Potassium permanganate acts as an oxidizing agent in an ACIDIC solution, what does the Mn(+7) ion reduce down to?",
    "options": [
      "Solid brown MnO2 (+4)",
      "Colorless Mn2+ (+2)",
      "Green Manganate (+6)",
      "Pure Manganese metal (0)"
    ],
    "answer": "Colorless Mn2+ (+2)",
    "explanation": "In a highly acidic solution, the permanganate ion acts like a bulldozer, swallowing 5 electrons at once and dropping all the way from +7 to a stable +2 state. This turns the deep purple liquid completely colorless! Because it's so strong, we have to be careful which acids we mix it with."
  },
  {
    "context": "In a highly acidic solution, the permanganate ion acts like a bulldozer, swallowing 5 electrons at once and dropping all the way from +7 to a stable +2 state. This turns the deep purple liquid completely colorless! Because it's so strong, we have to be careful which acids we mix it with.",
    "question": "Why is Hydrochloric acid (HCl) NOT recommended to provide the acidic medium during Potassium permanganate titrations?",
    "options": [
      "Because HCl is not an acid.",
      "Because permanganate is so strong it will oxidize the HCl into toxic Chlorine gas.",
      "Because they neutralize each other into pure water.",
      "Because it turns the solution black."
    ],
    "answer": "Because permanganate is so strong it will oxidize the HCl into toxic Chlorine gas.",
    "explanation": "Permanganate is such a powerful electron thief that it will attack the chloride ions in the acid itself, turning them into chlorine gas! This ruins the chemical measurement. Now, let's see what happens if we don't use acid at all."
  },
  {
    "context": "Permanganate is such a powerful electron thief that it will attack the chloride ions in the acid itself, turning them into chlorine gas! This ruins the chemical measurement. Now, let's see what happens if we don't use acid at all.",
    "question": "What does Potassium permanganate reduce down to if the solution is neutral or faintly alkaline (basic)?",
    "options": [
      "Colorless Mn2+ (+2)",
      "Solid brown MnO2 (+4)",
      "It stays as +7 forever.",
      "It turns into an iron compound."
    ],
    "answer": "Solid brown MnO2 (+4)",
    "explanation": "Without the extra acid (H+ ions) to help the reaction along, permanganate can only grab 3 electrons, dropping from +7 to +4 and forming a solid, muddy brown precipitate of MnO2. This brings us to the end of the d-block! Let's now explore the separate panel at the bottom of the periodic table."
  },
  {
    "context": "Without the extra acid (H+ ions) to help the reaction along, permanganate can only grab 3 electrons, dropping from +7 to +4 and forming a solid, muddy brown precipitate of MnO2. This brings us to the end of the d-block! Let's now explore the separate panel at the bottom of the periodic table.",
    "question": "What are the names of the two series of elements that make up the inner transition elements (the f-block)?",
    "options": [
      "Alkali and Alkaline Earth metals",
      "Halogens and Noble Gases",
      "Lanthanoids and Actinoids",
      "Metalloids and Non-metals"
    ],
    "answer": "Lanthanoids and Actinoids",
    "explanation": "The top row of the f-block is the Lanthanoids (which follow Lanthanum), and the bottom row is the Actinoids (which follow Actinium). These elements are called 'inner' transition metals because their active electron shells are buried deep inside the atom."
  },
  {
    "context": "The top row of the f-block is the Lanthanoids (which follow Lanthanum), and the bottom row is the Actinoids (which follow Actinium). These elements are called 'inner' transition metals because their active electron shells are buried deep inside the atom.",
    "question": "Which specific electron orbitals are being progressively filled as you move from left to right across the Lanthanoid series?",
    "options": [
      "The 3d orbitals",
      "The 4f orbitals",
      "The 5f orbitals",
      "The 6p orbitals"
    ],
    "answer": "The 4f orbitals",
    "explanation": "In the lanthanoid series (elements 58 to 71), the 4f orbitals are being filled up to a maximum of 14 electrons. Just like the d-block elements, filling these inner shells has a unique and powerful shrinking effect on the atoms."
  },
  {
    "context": "In the lanthanoid series (elements 58 to 71), the 4f orbitals are being filled up to a maximum of 14 electrons. Just like the d-block elements, filling these inner shells has a unique and powerful shrinking effect on the atoms.",
    "question": "What is the specific term for the steady decrease in atomic and ionic sizes across the lanthanoid series?",
    "options": [
      "Atomic expansion",
      "Lanthanoid contraction",
      "Noble gas freezing",
      "Nuclear collapse"
    ],
    "answer": "Lanthanoid contraction",
    "explanation": "The 'Lanthanoid contraction' happens because the 14 new 4f electrons are very poor at shielding the outer electrons from the growing positive pull of the nucleus. This unblocked pull shrinks the entire atom. This shrinkage has a major ripple effect on the row of metals right beneath them."
  },
  {
    "context": "The 'Lanthanoid contraction' happens because the 14 new 4f electrons are very poor at shielding the outer electrons from the growing positive pull of the nucleus. This unblocked pull shrinks the entire atom. This shrinkage has a major ripple effect on the row of metals right beneath them.",
    "question": "Because of the lanthanoid contraction, what unusual relationship exists between Zirconium (Zr) from the 4d series and Hafnium (Hf) from the 5d series?",
    "options": [
      "Hafnium is twice as large as Zirconium.",
      "Zirconium is a gas, but Hafnium is a solid.",
      "They have almost identical atomic radii and chemical properties, making them very hard to separate.",
      "They repel each other instantly."
    ],
    "answer": "They have almost identical atomic radii and chemical properties, making them very hard to separate.",
    "explanation": "Normally, atoms get bigger as you go down a group on the periodic table. But because the lanthanoid contraction shrinks the atoms so much right before Hafnium appears, Hafnium ends up being almost exactly the same size as the metal above it (Zirconium). Now, let's talk about the chemical charges lanthanoids prefer."
  },
  {
    "context": "Normally, atoms get bigger as you go down a group on the periodic table. But because the lanthanoid contraction shrinks the atoms so much right before Hafnium appears, Hafnium ends up being almost exactly the same size as the metal above it (Zirconium). Now, let's talk about the chemical charges lanthanoids prefer.",
    "question": "What is the single most common and stable oxidation state for ALL the lanthanoid elements?",
    "options": [
      "+1",
      "+2",
      "+3",
      "+7"
    ],
    "answer": "+3",
    "explanation": "Every single lanthanoid strongly prefers to lose exactly 3 electrons to form a +3 ion. This defines their entire chemical personality. However, a few famous rule-breakers exist because nature loves empty, half-full, or completely full electron orbitals."
  },
  {
    "context": "Every single lanthanoid strongly prefers to lose exactly 3 electrons to form a +3 ion. This defines their entire chemical personality. However, a few famous rule-breakers exist because nature loves empty, half-full, or completely full electron orbitals.",
    "question": "Why does the lanthanoid Cerium (Ce) sometimes exhibit a +4 oxidation state?",
    "options": [
      "It has 4 extra protons.",
      "Losing 4 electrons leaves it with a highly stable, completely empty f-orbital (f0) noble gas configuration.",
      "It forms covalent bonds with carbon.",
      "It is actually a non-metal."
    ],
    "answer": "Losing 4 electrons leaves it with a highly stable, completely empty f-orbital (f0) noble gas configuration.",
    "explanation": "Cerium is happy to temporarily lose 4 electrons to reach that perfect empty-shell state. However, the universe really wants it to be +3, so Cerium(IV) acts as a strong oxidizing agent (it steals an electron from someone else to get back to +3). Europium plays a similar trick."
  },
  {
    "context": "Cerium is happy to temporarily lose 4 electrons to reach that perfect empty-shell state. However, the universe really wants it to be +3, so Cerium(IV) acts as a strong oxidizing agent (it steals an electron from someone else to get back to +3). Europium plays a similar trick.",
    "question": "Europium (Eu) can uniquely form a +2 ion. What makes the Eu2+ ion temporarily stable?",
    "options": [
      "It has a stable exactly half-filled f-subshell (f7 configuration).",
      "It turns into a gas.",
      "It has no nucleus.",
      "It completely fills all its d-orbitals."
    ],
    "answer": "It has a stable exactly half-filled f-subshell (f7 configuration).",
    "explanation": "Just like the d-block metals loved the exactly half-filled d5 room, the f-block metals love the exactly half-filled f7 room! Europium happily gives up its 2 outer s-electrons to achieve this, but eventually, it will give away a third to reach the standard +3 state. These f-electrons also create beautiful visual effects."
  },
  {
    "context": "Just like the d-block metals loved the exactly half-filled d5 room, the f-block metals love the exactly half-filled f7 room! Europium happily gives up its 2 outer s-electrons to achieve this, but eventually, it will give away a third to reach the standard +3 state. These f-electrons also create beautiful visual effects.",
    "question": "Like transition metals, many trivalent lanthanoid ions (Ln3+) are colored in solid state and solutions. What causes this color?",
    "options": [
      "Artificial food coloring.",
      "The presence of unpaired f-electrons absorbing light to jump to higher energy levels within the f-subshell (f-f transitions).",
      "Nuclear radiation glowing.",
      "Rusting of the metal."
    ],
    "answer": "The presence of unpaired f-electrons absorbing light to jump to higher energy levels within the f-subshell (f-f transitions).",
    "explanation": "This is just like the d-d color transitions we learned about, but here the electrons are jumping around within the narrow f-orbitals. Because of this, lanthanoids with completely empty (f0) or completely full (f14) orbitals cannot jump, and are therefore colorless."
  },
  {
    "context": "This is just like the d-d color transitions we learned about, but here the electrons are jumping around within the narrow f-orbitals. Because of this, lanthanoids with completely empty (f0) or completely full (f14) orbitals cannot jump, and are therefore colorless.",
    "question": "Because of their unpaired f-electrons, what magnetic property do almost all lanthanoid ions exhibit?",
    "options": [
      "Diamagnetism (repelled by magnets)",
      "Paramagnetism (attracted to magnets)",
      "Zero gravity",
      "Electrical insulation"
    ],
    "answer": "Paramagnetism (attracted to magnets)",
    "explanation": "Every unpaired f-electron acts like a tiny bar magnet, making the substance paramagnetic. In terms of chemical reactivity, these soft, silvery-white metals are actually quite wild and reactive."
  },
  {
    "context": "Every unpaired f-electron acts like a tiny bar magnet, making the substance paramagnetic. In terms of chemical reactivity, these soft, silvery-white metals are actually quite wild and reactive.",
    "question": "The chemical reactivity of the earlier lanthanoids is most similar to which common alkaline earth metal?",
    "options": [
      "Gold",
      "Calcium",
      "Lead",
      "Helium"
    ],
    "answer": "Calcium",
    "explanation": "Early lanthanoids are highly reactive, burning easily in oxygen, reacting with water to release hydrogen gas, and combining with halogens, behaving very much like Calcium. We harness these reactive metals to make special industrial alloys."
  },
  {
    "context": "Early lanthanoids are highly reactive, burning easily in oxygen, reacting with water to release hydrogen gas, and combining with halogens, behaving very much like Calcium. We harness these reactive metals to make special industrial alloys.",
    "question": "What is the name of the well-known alloy consisting of about 95% lanthanoid metal and 5% iron, commonly used to make lighter flints?",
    "options": [
      "Brass",
      "Bronze",
      "Mischmetall",
      "Stainless Steel"
    ],
    "answer": "Mischmetall",
    "explanation": "Mischmetall sparks easily when struck by friction, which is why it's perfect for the flint inside cigarette lighters or bullet shells! Lanthanoids are also used to make catalysts. Now, let's drop down to the very bottom row of the periodic table: the Actinoids."
  },
  {
    "context": "Mischmetall sparks easily when struck by friction, which is why it's perfect for the flint inside cigarette lighters or bullet shells! Lanthanoids are also used to make catalysts. Now, let's drop down to the very bottom row of the periodic table: the Actinoids.",
    "question": "What is the most significant defining feature of ALL actinoid elements that makes them very difficult to study?",
    "options": [
      "They are all invisible gases.",
      "They are all radioactive.",
      "They have no electrons.",
      "They repel all light."
    ],
    "answer": "They are all radioactive.",
    "explanation": "Every single actinoid has an unstable nucleus that decays over time. While the early ones (like Uranium) have half-lives of billions of years, the heavier ones decay in a matter of days or even minutes! Let's look at their electron structure."
  },
  {
    "context": "Every single actinoid has an unstable nucleus that decays over time. While the early ones (like Uranium) have half-lives of billions of years, the heavier ones decay in a matter of days or even minutes! Let's look at their electron structure.",
    "question": "Which inner electron orbitals are progressively filled in the Actinoid series?",
    "options": [
      "The 4f orbitals",
      "The 5f orbitals",
      "The 6d orbitals",
      "The 7p orbitals"
    ],
    "answer": "The 5f orbitals",
    "explanation": "Just like the lanthanoids fill the inner 4f orbitals, the actinoids fill the inner 5f orbitals. And just like the lanthanoids, adding these electrons causes the atoms to shrink in a process called the actinoid contraction."
  },
  {
    "context": "Just like the lanthanoids fill the inner 4f orbitals, the actinoids fill the inner 5f orbitals. And just like the lanthanoids, adding these electrons causes the atoms to shrink in a process called the actinoid contraction.",
    "question": "How does the 'Actinoid contraction' compare in strength to the 'Lanthanoid contraction'?",
    "options": [
      "It is exactly the same.",
      "It is much weaker.",
      "The actinoid contraction is greater from element to element.",
      "Actinoids expand instead of contract."
    ],
    "answer": "The actinoid contraction is greater from element to element.",
    "explanation": "The 5f electrons are even worse at shielding the outer electrons from the nucleus than the 4f electrons are! Because this shielding is so incredibly poor, the nucleus pulls the outer shells in even tighter, causing a more dramatic shrinkage. This poor shielding also affects their chemical charges."
  },
  {
    "context": "The 5f electrons are even worse at shielding the outer electrons from the nucleus than the 4f electrons are! Because this shielding is so incredibly poor, the nucleus pulls the outer shells in even tighter, causing a more dramatic shrinkage. This poor shielding also affects their chemical charges.",
    "question": "While lanthanoids mostly stick strictly to a +3 oxidation state, what is a key difference in the oxidation states of early actinoids?",
    "options": [
      "Actinoids only ever form -1 ions.",
      "Actinoids display a much wider range of oxidation states, reaching up to +7.",
      "Actinoids cannot form ions.",
      "Actinoids only form +2 ions."
    ],
    "answer": "Actinoids display a much wider range of oxidation states, reaching up to +7.",
    "explanation": "Early actinoids can reach crazy high oxidation states (like +6 in Uranium or +7 in Neptunium). Because the distribution of these states is so wildly uneven across the row, it's actually unsatisfactory to study actinoids solely by their oxidation states."
  },
  {
    "context": "Early actinoids can reach crazy high oxidation states (like +6 in Uranium or +7 in Neptunium). Because the distribution of these states is so wildly uneven across the row, it's actually unsatisfactory to study actinoids solely by their oxidation states.",
    "question": "Why are the early actinoids able to use so many electrons to reach such high oxidation states?",
    "options": [
      "Because they steal electrons from the air.",
      "Because their 5f, 6d, and 7s energy levels are all very comparable in energy, allowing all of them to participate in bonding.",
      "Because they have no nucleus.",
      "Because they are liquids."
    ],
    "answer": "Because their 5f, 6d, and 7s energy levels are all very comparable in energy, allowing all of them to participate in bonding.",
    "explanation": "Because the energies of these outer and inner shells are so close together, the atom can easily grab electrons from all three rooms to share with other atoms! Furthermore, the 5f electrons stick out more than the 4f ones."
  },
  {
    "context": "Because the energies of these outer and inner shells are so close together, the atom can easily grab electrons from all three rooms to share with other atoms! Furthermore, the 5f electrons stick out more than the 4f ones.",
    "question": "Because the 5f orbitals are not as deeply buried inside the atom as the 4f orbitals, what are 5f electrons able to do?",
    "options": [
      "They can easily freeze.",
      "They can participate in chemical bonding to a far greater extent.",
      "They turn into protons.",
      "They completely disappear."
    ],
    "answer": "They can participate in chemical bonding to a far greater extent.",
    "explanation": "Because the 5f orbitals stick out a little bit more, they can actually touch and interact with other atoms. This makes actinoid chemistry much more complex and highly reactive, especially when the metal is finely divided."
  },
  {
    "context": "Because the 5f orbitals stick out a little bit more, they can actually touch and interact with other atoms. This makes actinoid chemistry much more complex and highly reactive, especially when the metal is finely divided.",
    "question": "How do highly reactive actinoid metals generally react when placed in boiling water?",
    "options": [
      "They ignore the water completely.",
      "They freeze the water into solid ice.",
      "They react to give a mixture of an oxide and a hydride.",
      "They turn the water into pure gold."
    ],
    "answer": "They react to give a mixture of an oxide and a hydride.",
    "explanation": "They rip the water molecules apart, stealing the oxygen to form oxides and the hydrogen to form hydrides! Now that we understand the wild chemistry of all these metals, let's step back and look at how humanity actually uses them in everyday applications."
  },
  {
    "context": "They rip the water molecules apart, stealing the oxygen to form oxides and the hydrogen to form hydrides! Now that we understand the wild chemistry of all these metals, let's step back and look at how humanity actually uses them in everyday applications.",
    "question": "Which d-block transition metal is the absolute most important construction material in the world, serving as the base for steel?",
    "options": [
      "Titanium",
      "Iron",
      "Zinc",
      "Copper"
    ],
    "answer": "Iron",
    "explanation": "Iron is the king of construction! By taking iron oxides, reducing them, and adding small amounts of carbon and other transition metals (like Chromium and Nickel), we create all the different super-strong steels that build our modern world."
  },
  {
    "context": "Iron is the king of construction! By taking iron oxides, reducing them, and adding small amounts of carbon and other transition metals (like Chromium and Nickel), we create all the different super-strong steels that build our modern world.",
    "question": "Which specific transition metal compound is heavily manufactured for use in the pigment industry to make bright white materials?",
    "options": [
      "Iron oxide",
      "Titanium oxide (TiO)",
      "Copper sulfate",
      "Zinc chloride"
    ],
    "answer": "Titanium oxide (TiO)",
    "explanation": "Titanium oxides are incredibly bright white powders used in paints, plastics, and paper! But transition metals aren't just for building and painting; they are essential for portable electronics."
  },
  {
    "context": "Titanium oxides are incredibly bright white powders used in paints, plastics, and paper! But transition metals aren't just for building and painting; they are essential for portable electronics.",
    "question": "Which transition metal oxide is a critical component packed inside common dry battery cells?",
    "options": [
      "Manganese dioxide (MnO2)",
      "Iron(III) oxide",
      "Scandium oxide",
      "Vanadium pentoxide"
    ],
    "answer": "Manganese dioxide (MnO2)",
    "explanation": "MnO2 is a crucial powder inside dry batteries that helps the battery provide a steady electrical current. The battery industry also heavily relies on other transition metals like Zinc, Nickel, and Cadmium to hold a charge."
  },
  {
    "context": "MnO2 is a crucial powder inside dry batteries that helps the battery provide a steady electrical current. The battery industry also heavily relies on other transition metals like Zinc, Nickel, and Cadmium to hold a charge.",
    "question": "Historically, elements of Group 11 (Copper, Silver, Gold) were highly valued and are still worthy of being called what?",
    "options": [
      "The radioactive metals",
      "The coinage metals",
      "The gaseous metals",
      "The alkali metals"
    ],
    "answer": "The coinage metals",
    "explanation": "Because they are beautiful, easily shaped, and relatively unreactive (noble), Copper, Silver, and Gold have been used to make coins for thousands of years. Today, industrial chemistry relies on transition metals to act as chemical 'matchmakers'."
  },
  {
    "context": "Because they are beautiful, easily shaped, and relatively unreactive (noble), Copper, Silver, and Gold have been used to make coins for thousands of years. Today, industrial chemistry relies on transition metals to act as chemical 'matchmakers'.",
    "question": "What is the vital role of Vanadium(V) oxide (V2O5) in the Contact Process for making sulphuric acid?",
    "options": [
      "It dissolves the acid.",
      "It acts as a catalyst to speed up the oxidation of SO2.",
      "It gives the acid a yellow color.",
      "It turns the acid into a solid block."
    ],
    "answer": "It acts as a catalyst to speed up the oxidation of SO2.",
    "explanation": "V2O5 speeds up the incredibly slow step of turning sulfur dioxide (SO2) into sulfur trioxide (SO3), without getting consumed itself! Transition metals make fantastic catalysts because they can easily shift between different oxidation states."
  },
  {
    "context": "V2O5 speeds up the incredibly slow step of turning sulfur dioxide (SO2) into sulfur trioxide (SO3), without getting consumed itself! Transition metals make fantastic catalysts because they can easily shift between different oxidation states.",
    "question": "Which transition metal compound is famous for making plastics (polyethylene) when combined with an aluminum compound, known as the Ziegler catalyst?",
    "options": [
      "Titanium tetrachloride (TiCl4)",
      "Iron oxide",
      "Copper sulfate",
      "Zinc oxide"
    ],
    "answer": "Titanium tetrachloride (TiCl4)",
    "explanation": "TiCl4 acts as a chemical zipper, helping string together tiny ethylene molecules into the long chains of plastic we use for bottles and bags every day! Another catalyst is responsible for feeding the world."
  },
  {
    "context": "TiCl4 acts as a chemical zipper, helping string together tiny ethylene molecules into the long chains of plastic we use for bottles and bags every day! Another catalyst is responsible for feeding the world.",
    "question": "In the famous Haber process, which finely divided transition metal is used as a catalyst to manufacture ammonia (NH3)?",
    "options": [
      "Gold",
      "Silver",
      "Iron",
      "Mercury"
    ],
    "answer": "Iron",
    "explanation": "Finely divided Iron provides the perfect solid surface for stubborn Nitrogen and Hydrogen gases to stick to, break their tough bonds, and combine into ammonia, which is essential for global fertilizers. Food chemistry uses catalysts too."
  },
  {
    "context": "Finely divided Iron provides the perfect solid surface for stubborn Nitrogen and Hydrogen gases to stick to, break their tough bonds, and combine into ammonia, which is essential for global fertilizers. Food chemistry uses catalysts too.",
    "question": "Which transition metal catalyst is heavily used to 'hydrogenate' fats, turning liquid vegetable oils into solid margarine?",
    "options": [
      "Nickel",
      "Titanium",
      "Scandium",
      "Tungsten"
    ],
    "answer": "Nickel",
    "explanation": "Nickel catalysts help force extra hydrogen atoms into the double bonds of liquid oil molecules, solidifying them. Palladium is another incredible catalyst."
  },
  {
    "context": "Nickel catalysts help force extra hydrogen atoms into the double bonds of liquid oil molecules, solidifying them. Palladium is another incredible catalyst.",
    "question": "In the Wacker process, which transition metal compound acts as the catalyst to oxidize ethyne into ethanal?",
    "options": [
      "Iron(III) chloride",
      "Palladium(II) chloride (PdCl2)",
      "Copper(II) oxide",
      "Silver nitrate"
    ],
    "answer": "Palladium(II) chloride (PdCl2)",
    "explanation": "PdCl2 safely and efficiently catalyzes the Wacker process, which turns the gas ethyne into ethanal for industrial use. But transition metals aren't just for heavy industry; they also capture our personal memories!"
  },
  {
    "context": "PdCl2 safely and efficiently catalyzes the Wacker process, which turns the gas ethyne into ethanal for industrial use. But transition metals aren't just for heavy industry; they also capture our personal memories!",
    "question": "Which transition metal compound is relied upon by the photographic industry because of its special light-sensitive properties?",
    "options": [
      "Iron oxide",
      "Zinc sulfide",
      "Silver bromide (AgBr)",
      "Gold chloride"
    ],
    "answer": "Silver bromide (AgBr)",
    "explanation": "When light hits Silver bromide (AgBr) on a piece of film, it triggers a tiny chemical reaction that leaves behind a dark spot of pure silver metal, allowing us to capture images forever! You have now mastered the second half of this incredible chapter!"
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
