// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "Imagine a simple hydrocarbon molecule, like methane or ethane, which is made entirely of carbon and hydrogen atoms. Now, imagine plucking off one or more of those hydrogen atoms and swapping them out for a halogen atom, like Fluorine, Chlorine, Bromine, or Iodine.",
    "question": "When a hydrogen atom in an aliphatic (straight-chain) hydrocarbon is replaced by a halogen atom, what do we call the newly formed compound?",
    "options": [
      "A) Haloarene",
      "B) Haloalkane (Alkyl halide)",
      "C) Alcohol",
      "D) Alkene"
    ],
    "answer": "B) Haloalkane (Alkyl halide)",
    "explanation": "The replacement of hydrogen atom(s) in an aliphatic hydrocarbon by halogen atom(s) results in the formation of alkyl halide, also known as a haloalkane."
  },
  {
    "id": 2,
    "context": "The replacement of hydrogen atom(s) in an aliphatic hydrocarbon by halogen atom(s) results in the formation of alkyl halide, also known as a haloalkane. You might wonder why chemists spend so much time studying these specific molecules.",
    "question": "Why is it important for us to learn about halogen-containing organic compounds?",
    "options": [
      "A) They are only found in outer space.",
      "B) They have wide applications in everyday life and medicine, like antibiotics.",
      "C) They are completely unreactive and useless.",
      "D) They are only used to make plastics."
    ],
    "answer": "B) They have wide applications in everyday life and medicine, like antibiotics.",
    "explanation": "Many halogen containing organic compounds occur in nature and are clinically useful. For example, a chlorine-containing antibiotic called chloramphenicol is highly effective for treating typhoid fever, making these compounds very important to study."
  },
  {
    "id": 3,
    "context": "Many halogen containing organic compounds occur in nature and are clinically useful. For example, a chlorine-containing antibiotic called chloramphenicol is highly effective for treating typhoid fever, making these compounds very important to study. To make sense of them, we first classify them by simply counting the halogens attached.",
    "question": "If an organic molecule has exactly two halogen atoms somewhere in its structure, how is it classified?",
    "options": [
      "A) Monohalogen compound",
      "B) Dihalogen compound",
      "C) Trihalogen compound",
      "D) Polyhalogen compound"
    ],
    "answer": "B) Dihalogen compound",
    "explanation": "Haloalkanes and haloarenes may be classified as mono, di, or polyhalogen compounds depending on whether they contain one, two or more halogen atoms. A molecule with exactly two halogens is a dihalogen compound."
  },
  {
    "id": 4,
    "context": "Haloalkanes and haloarenes may be classified as mono, di, or polyhalogen compounds depending on whether they contain one, two or more halogen atoms. A molecule with exactly two halogens is a dihalogen compound. Now, let's look closer at the specific carbon atom that holds the halogen in a standard haloalkane.",
    "question": "In an alkyl halide, what type of chemical bonds does the carbon atom holding the halogen have?",
    "options": [
      "A) One double bond (sp2 hybridized)",
      "B) One triple bond (sp hybridized)",
      "C) Only single bonds (sp3 hybridized)",
      "D) A mix of double and triple bonds"
    ],
    "answer": "C) Only single bonds (sp3 hybridized)",
    "explanation": "In alkyl halides, the halogen atom is bonded to an sp3-hybridised carbon atom of an alkyl group, which means that the carbon atom forms only single bonds."
  },
  {
    "id": 5,
    "context": "In alkyl halides, the halogen atom is bonded to an sp3-hybridised carbon atom of an alkyl group, which means that the carbon atom forms only single bonds. We can classify these molecules further by looking at how many other carbons are attached to that specific carbon.",
    "question": "If the sp3-hybridized carbon atom holding the halogen is attached to only ONE other carbon atom, what type of alkyl halide is it?",
    "options": [
      "A) Primary (1°) alkyl halide",
      "B) Secondary (2°) alkyl halide",
      "C) Tertiary (3°) alkyl halide",
      "D) Quaternary (4°) alkyl halide"
    ],
    "answer": "A) Primary (1°) alkyl halide",
    "explanation": "If the halogen is attached to a primary carbon atom (a carbon bonded to only one other carbon), the alkyl halide is called a primary (1°) alkyl halide."
  },
  {
    "id": 6,
    "context": "If the halogen is attached to a primary carbon atom (a carbon bonded to only one other carbon), the alkyl halide is called a primary (1°) alkyl halide. Sometimes, this purely single-bonded (sp3) carbon is located right next to an interesting feature, like a double bond.",
    "question": "What do we call a compound where the halogen is bonded to an sp3-hybridised carbon atom that is positioned immediately adjacent to a carbon-carbon double bond (C=C)?",
    "options": [
      "A) Vinylic halide",
      "B) Benzylic halide",
      "C) Allylic halide",
      "D) Aryl halide"
    ],
    "answer": "C) Allylic halide",
    "explanation": "These are the compounds in which the halogen atom is bonded to an sp3-hybridised carbon atom adjacent to a carbon-carbon double bond (C=C). This special adjacent position is called an allylic carbon, so they are allylic halides."
  },
  {
    "id": 7,
    "context": "These are the compounds in which the halogen atom is bonded to an sp3-hybridised carbon atom adjacent to a carbon-carbon double bond (C=C). This special adjacent position is called an allylic carbon, so they are allylic halides. But what if the halogen isn't adjacent, but is attached directly onto the double bond itself?",
    "question": "What is the term for a compound where the halogen atom is bonded directly to one of the sp2-hybridised carbon atoms that make up a carbon-carbon double bond?",
    "options": [
      "A) Allylic halide",
      "B) Benzylic halide",
      "C) Vinylic halide",
      "D) Alkyl halide"
    ],
    "answer": "C) Vinylic halide",
    "explanation": "Vinylic halides are the compounds in which the halogen atom is bonded directly to an sp2-hybridised carbon atom of a carbon-carbon double bond (C=C)."
  },
  {
    "id": 8,
    "context": "Vinylic halides are the compounds in which the halogen atom is bonded directly to an sp2-hybridised carbon atom of a carbon-carbon double bond (C=C). Similarly, if the halogen is directly attached to an aromatic ring (like benzene), we call it an aryl halide. Now that we can classify them, we need a universal way to name them so chemists around the world understand each other.",
    "question": "In the official IUPAC system of nomenclature, how are alkyl halides generally named?",
    "options": [
      "A) As halo-substituted hydrocarbons",
      "B) By their common household names",
      "C) By listing the halogen last, like 'methyl chloride'",
      "D) By their physical color and smell"
    ],
    "answer": "A) As halo-substituted hydrocarbons",
    "explanation": "In the IUPAC system of nomenclature, alkyl halides are named as halosubstituted hydrocarbons, meaning the halogen is treated as a prefix (like 'chloro-' or 'bromo-') attached to the main parent carbon chain."
  },
  {
    "id": 9,
    "context": "In the IUPAC system of nomenclature, alkyl halides are named as halosubstituted hydrocarbons, meaning the halogen is treated as a prefix (like 'chloro-' or 'bromo-') attached to the main parent carbon chain. Let's try a simple example with a 3-carbon chain (propane) and a bromine atom.",
    "question": "If a bromine atom is attached to the very first carbon of a straight 3-carbon chain, what is the correct IUPAC name?",
    "options": [
      "A) n-Propyl bromide",
      "B) 1-Bromopropane",
      "C) 2-Bromopropane",
      "D) Propyl-1-bromo"
    ],
    "answer": "B) 1-Bromopropane",
    "explanation": "In IUPAC naming, we number the carbon chain to give the halogen the lowest possible number. So, a bromine on the first carbon of a propane chain is named 1-Bromopropane."
  },
  {
    "id": 10,
    "context": "In IUPAC naming, we number the carbon chain to give the halogen the lowest possible number. So, a bromine on the first carbon of a propane chain is named 1-Bromopropane. Now let's make it more complex. What if there are two of the exact same halogens on the chain?",
    "question": "If a molecule has two identical halogen atoms attached to the EXACT SAME carbon atom, what special name is given to this type of dihalide?",
    "options": [
      "A) Vicinal halides (vic-dihalides)",
      "B) Geminal halides (gem-dihalides)",
      "C) Allylic halides",
      "D) Primary halides"
    ],
    "answer": "B) Geminal halides (gem-dihalides)",
    "explanation": "The dihalo-compounds having both halogen atoms present on the same carbon atom of the chain are classified as geminal halides, or gem-dihalides for short."
  },
  {
    "id": 11,
    "context": "The dihalo-compounds having both halogen atoms present on the same carbon atom of the chain are classified as geminal halides, or gem-dihalides for short. But they don't always sit on the same carbon. They could sit right next to each other.",
    "question": "What is the specific term for dihalides where the two halogen atoms are located on ADJACENT (side-by-side) carbon atoms?",
    "options": [
      "A) Gem-dihalides",
      "B) Vicinal halides (vic-dihalides)",
      "C) Vinylic halides",
      "D) Aryl halides"
    ],
    "answer": "B) Vicinal halides (vic-dihalides)",
    "explanation": "When halogen atoms are present on adjacent carbon atoms, they are named vicinal halides or vic-dihalides. Think of them being in the same 'vicinity'."
  },
  {
    "id": 12,
    "context": "When halogen atoms are present on adjacent carbon atoms, they are named vicinal halides or vic-dihalides. Think of them being in the same 'vicinity'. Now that we know how to name them, let's look at the actual bond between the carbon and the halogen (the C-X bond). Halogens are 'electronegative', meaning they are greedy for electrons.",
    "question": "Because the halogen is more electronegative than carbon, what happens to the electrons shared in the Carbon-Halogen bond?",
    "options": [
      "A) They are shared perfectly equally.",
      "B) The carbon pulls them away from the halogen.",
      "C) The halogen pulls them closer, making the bond polarized.",
      "D) The bond instantly breaks apart."
    ],
    "answer": "C) The halogen pulls them closer, making the bond polarized.",
    "explanation": "Halogen atoms are more electronegative than carbon, therefore, the carbon-halogen bond is polarised; the carbon atom bears a partial positive charge, and the halogen gets a partial negative charge."
  },
  {
    "id": 13,
    "context": "Halogen atoms are more electronegative than carbon, therefore, the carbon-halogen bond is polarised; the carbon atom bears a partial positive charge, and the halogen gets a partial negative charge. Let's look at the halogens on the periodic table: Fluorine is at the top, and Iodine is at the bottom.",
    "question": "As we move down the group from Fluorine to Iodine, what happens to the size of the halogen atom and the length of the carbon-halogen bond?",
    "options": [
      "A) Size decreases, and bond gets shorter.",
      "B) Size increases, and bond gets longer.",
      "C) Size increases, but the bond gets shorter.",
      "D) Size stays the same."
    ],
    "answer": "B) Size increases, and bond gets longer.",
    "explanation": "As we go down the group in the periodic table, the size of the halogen atom increases. Fluorine is the smallest and iodine is the largest. Consequently, the carbon-halogen bond length also increases from C-F to C-I."
  },
  {
    "id": 14,
    "context": "As we go down the group in the periodic table, the size of the halogen atom increases. Fluorine is the smallest and iodine is the largest. Consequently, the carbon-halogen bond length also increases from C-F to C-I. Understanding this bond helps us figure out how to create these molecules in a lab. One common way is to start with an alcohol (-OH).",
    "question": "When converting an alcohol into an alkyl chloride, which reagent is preferred because it produces gaseous byproducts that float away, leaving pure product?",
    "options": [
      "A) HCl gas with ZnCl2 catalyst",
      "B) Phosphorus trichloride (PCl3)",
      "C) Phosphorus pentachloride (PCl5)",
      "D) Thionyl chloride (SOCl2)"
    ],
    "answer": "D) Thionyl chloride (SOCl2)",
    "explanation": "Thionyl chloride (SOCl2) is preferred because the reaction yields alkyl halides along with gases SO2 and HCl. These gaseous products are escapable, leaving behind pure alkyl halides."
  },
  {
    "id": 15,
    "context": "Thionyl chloride (SOCl2) is preferred because the reaction yields alkyl halides along with gases SO2 and HCl. These gaseous products are escapable, leaving behind pure alkyl halides. Alcohols work well, but what if we just mix a basic alkane gas with chlorine gas and hit it with UV light?",
    "question": "What is the major drawback of trying to prepare alkyl halides by the free radical halogenation of alkanes?",
    "options": [
      "A) It is too expensive to perform.",
      "B) It yields a complex mixture of many different isomers that are hard to separate.",
      "C) It only produces pure gas.",
      "D) It doesn't react at all."
    ],
    "answer": "B) It yields a complex mixture of many different isomers that are hard to separate.",
    "explanation": "Free radical chlorination or bromination of alkanes gives a complex mixture of isomeric mono- and polyhaloalkanes, which is difficult to separate as pure compounds, resulting in low yield of any single product."
  },
  {
    "id": 16,
    "context": "Free radical chlorination or bromination of alkanes gives a complex mixture of isomeric mono- and polyhaloalkanes, which is difficult to separate as pure compounds, resulting in low yield of any single product. A much cleaner way is to start with an alkene (a molecule with a double bond) and add a hydrogen halide like H-Br.",
    "question": "When adding a hydrogen halide (HX) to an unsymmetrical alkene (like propene), which rule helps us predict the major product?",
    "options": [
      "A) Zaitsev's rule",
      "B) Hund's rule",
      "C) Markovnikov's rule",
      "D) The Octet rule"
    ],
    "answer": "C) Markovnikov's rule",
    "explanation": "An alkene is converted to a corresponding alkyl halide by reacting with hydrogen halides. For unsymmetrical alkenes, one product predominates as per Markovnikov's rule."
  },
  {
    "id": 17,
    "context": "An alkene is converted to a corresponding alkyl halide by reacting with hydrogen halides. For unsymmetrical alkenes, one product predominates as per Markovnikov's rule. What if you already have an alkyl chloride, but you specifically need an alkyl iodide? You can swap them!",
    "question": "Which named reaction allows you to swap a chlorine or bromine atom for an iodine atom using Sodium Iodide (NaI) in dry acetone?",
    "options": [
      "A) Swarts reaction",
      "B) Finkelstein reaction",
      "C) Sandmeyer's reaction",
      "D) Grignard reaction"
    ],
    "answer": "B) Finkelstein reaction",
    "explanation": "Alkyl iodides are often prepared by the reaction of alkyl chlorides or bromides with NaI in dry acetone. This specific halogen exchange reaction is known as the Finkelstein reaction."
  },
  {
    "id": 18,
    "context": "Alkyl iodides are often prepared by the reaction of alkyl chlorides or bromides with NaI in dry acetone. This specific halogen exchange reaction is known as the Finkelstein reaction. Fluorine, however, is too violently reactive to attach normally, so it requires its own special exchange reaction.",
    "question": "What is the name of the reaction used to synthesize alkyl fluorides by heating an alkyl chloride/bromide with a metallic fluoride like AgF?",
    "options": [
      "A) Finkelstein reaction",
      "B) Wurtz reaction",
      "C) Swarts reaction",
      "D) Elimination reaction"
    ],
    "answer": "C) Swarts reaction",
    "explanation": "The synthesis of alkyl fluorides is best accomplished by heating an alkyl chloride/bromide in the presence of a metallic fluoride such as AgF, Hg2F2, CoF2, or SbF3. This is termed the Swarts reaction."
  },
  {
    "id": 19,
    "context": "The synthesis of alkyl fluorides is best accomplished by heating an alkyl chloride/bromide in the presence of a metallic fluoride such as AgF. This is termed the Swarts reaction. So far we've looked at making straight chains (alkyl halides). Making aromatic rings with halogens (haloarenes) requires a different approach.",
    "question": "Aryl chlorides can be prepared from benzene rings by reacting them with chlorine gas. What critical ingredient must be present for this 'electrophilic substitution' to happen?",
    "options": [
      "A) Bright UV light",
      "B) A Lewis acid catalyst like iron or iron(III) chloride",
      "C) Boiling water",
      "D) Sodium metal"
    ],
    "answer": "B) A Lewis acid catalyst like iron or iron(III) chloride",
    "explanation": "Aryl chlorides and bromides can be easily prepared by electrophilic substitution of arenes with chlorine and bromine respectively in the presence of Lewis acid catalysts like iron or iron(III) chloride."
  },
  {
    "id": 20,
    "context": "Aryl chlorides and bromides can be easily prepared by electrophilic substitution of arenes with chlorine and bromine respectively in the presence of Lewis acid catalysts like iron or iron(III) chloride. Another fascinating way to make a haloarene is to start with a nitrogen-rich compound called a diazonium salt.",
    "question": "What is the name of the reaction that replaces the nitrogen group of a diazonium salt with a chlorine or bromine atom using cuprous chloride or cuprous bromide?",
    "options": [
      "A) Sandmeyer's reaction",
      "B) Finkelstein reaction",
      "C) Swarts reaction",
      "D) Free radical substitution"
    ],
    "answer": "A) Sandmeyer's reaction",
    "explanation": "When a freshly prepared diazonium salt solution is mixed with cuprous chloride or cuprous bromide, it results in the replacement of the diazonium group by -Cl or -Br. This is known as Sandmeyer's reaction."
  },
  {
    "id": 21,
    "context": "When a freshly prepared diazonium salt solution is mixed with cuprous chloride or cuprous bromide, it results in the replacement of the diazonium group by -Cl or -Br. This is known as Sandmeyer's reaction. Now that we've made these compounds, let's observe their physical properties. Because of the polar C-X bond, they behave differently than plain hydrocarbons.",
    "question": "How does the boiling point of a haloalkane generally compare to the boiling point of the plain parent hydrocarbon it was made from?",
    "options": [
      "A) It is much lower.",
      "B) It is exactly the same.",
      "C) It is considerably higher.",
      "D) Boiling points cannot be compared."
    ],
    "answer": "C) It is considerably higher.",
    "explanation": "Due to greater polarity and higher molecular mass as compared to the parent hydrocarbon, the intermolecular forces of attraction (dipole-dipole and van der Waals) are stronger, making their boiling points considerably higher."
  },
  {
    "id": 22,
    "context": "Due to greater polarity and higher molecular mass as compared to the parent hydrocarbon, the intermolecular forces of attraction are stronger, making their boiling points considerably higher. But the shape of the molecule also dictates how well they stick together.",
    "question": "If you have isomeric haloalkanes (same atoms, different shapes), how does increasing the 'branching' of the molecule affect its boiling point?",
    "options": [
      "A) It increases the boiling point.",
      "B) It decreases the boiling point.",
      "C) It does not change the boiling point.",
      "D) It causes the liquid to immediately freeze."
    ],
    "answer": "B) It decreases the boiling point.",
    "explanation": "The boiling points of isomeric haloalkanes decrease with an increase in branching. A branched molecule is more spherical, decreasing the surface area of contact and thereby weakening the intermolecular forces."
  },
  {
    "id": 23,
    "context": "The boiling points of isomeric haloalkanes decrease with an increase in branching because branching decreases surface area and weakens intermolecular forces. Now let's explore chemical reactions! Because the carbon bonded to the halogen has a partial positive charge, it becomes a target.",
    "question": "What do we call an 'electron-rich' chemical species that is attracted to this partial positive carbon and tries to replace the halogen?",
    "options": [
      "A) An electrophile",
      "B) A nucleophile",
      "C) A free radical",
      "D) A noble gas"
    ],
    "answer": "B) A nucleophile",
    "explanation": "Nucleophiles are electron-rich species. They attack the part of the substrate molecule which is electron deficient (the carbon). The reaction in which a nucleophile replaces an already existing nucleophile (the halogen) is called a nucleophilic substitution reaction."
  },
  {
    "id": 24,
    "context": "Nucleophiles are electron-rich species. They attack the part of the substrate molecule which is electron deficient (the carbon). The reaction in which a nucleophile replaces an already existing nucleophile (the halogen) is called a nucleophilic substitution reaction. Some nucleophiles are sneaky and have more than one side they can attack from.",
    "question": "Groups like cyanides (CN-) possess two different atoms they can attack from (Carbon or Nitrogen). What are these two-faced nucleophiles called?",
    "options": [
      "A) Ambident nucleophiles",
      "B) Bidentate nucleophiles",
      "C) Multidentate nucleophiles",
      "D) Neutral nucleophiles"
    ],
    "answer": "A) Ambident nucleophiles",
    "explanation": "Groups like cyanides and nitrites possess two nucleophilic centres and are called ambident nucleophiles. For instance, cyanide can link through the carbon atom to form cyanides, or through the nitrogen atom to form isocyanides."
  },
  {
    "id": 25,
    "context": "Groups like cyanides and nitrites possess two nucleophilic centres and are called ambident nucleophiles. For instance, cyanide can link through the carbon atom to form cyanides, or through the nitrogen atom to form isocyanides. When a nucleophile successfully attacks, we want to know exactly HOW it happens step-by-step. Let's look at the SN2 mechanism.",
    "question": "In a Substitution Nucleophilic Bimolecular (SN2) reaction, how many steps does it take for the nucleophile to attach and the halogen to leave?",
    "options": [
      "A) Three separate steps",
      "B) Two distinct steps with an intermediate",
      "C) One single simultaneous step with no intermediate",
      "D) The halogen must leave first before anything else happens"
    ],
    "answer": "C) One single simultaneous step with no intermediate",
    "explanation": "In an SN2 reaction, the incoming nucleophile interacts with the alkyl halide causing the carbon-halide bond to break and a new bond to form simultaneously in a single step, with no intermediate formed."
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
