// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "When we observe our surroundings, we notice a vast variety of objects such as chairs, bullock carts, books, and toys. All these objects share a common foundational characteristic.",
    "question": "What are all the objects around us made of?",
    "options": [
      "A) Only organic matter",
      "B) One or more materials",
      "C) Only synthetic plastics",
      "D) A single, universal substance"
    ],
    "answer": "B) One or more materials",
    "explanation": "All objects around us are constructed from one or more materials, such as glass, metal, plastic, or wood. Now that we know objects are made of materials, can a single object be made from different types of materials?"
  },
  {
    "id": 2,
    "context": "We categorize everyday items based on their composition. A plate (thali), for instance, can be made of steel, glass, or plastics.",
    "question": "Which of the following statements best describes the relationship between an object and its material?",
    "options": [
      "A) An object can only be made from one specific material.",
      "B) An object can be made of many different materials.",
      "C) Materials cannot be combined to form a single object.",
      "D) Every object requires at least three different materials."
    ],
    "answer": "B) An object can be made of many different materials.",
    "explanation": "An object like a plate can be made of various materials, or a single object can even be a combination of materials. Since objects are so diverse, how do we use a single material to create multiple objects?"
  },
  {
    "id": 3,
    "context": "While an object can be made of different materials, the reverse is also true. A single material can be repurposed for many uses.",
    "question": "Which of the following is a list of objects that can all be made entirely from wood?",
    "options": [
      "A) Chair, table, plough, and bullock cart",
      "B) Tumbler, notebook, and coin",
      "C) Window pane, mirror, and spectacles",
      "D) Shoes, belts, and jackets"
    ],
    "answer": "A) Chair, table, plough, and bullock cart",
    "explanation": "Wood is a versatile material used to make chairs, tables, and bullock carts. Knowing that we have so many materials to choose from, what exactly dictates our choice when making a specific object?"
  },
  {
    "id": 4,
    "context": "We do not make cooking vessels out of paper, nor do we make tumblers out of cloth, because a cloth tumbler cannot hold water.",
    "question": "What primarily decides which material should be used for making a given object?",
    "options": [
      "A) The color and cost of the material",
      "B) The properties of the material and the intended purpose of the object",
      "C) The availability of the material in the local market",
      "D) The weight and age of the material"
    ],
    "answer": "B) The properties of the material and the intended purpose of the object",
    "explanation": "We choose materials based on their properties and what the object will be used for, like using glass or metal to hold liquids. Since properties are so important, what is the first property we usually notice when looking at a material?"
  },
  {
    "id": 5,
    "context": "Materials usually look different from each other. Wood looks different from iron, and iron appears different from copper.",
    "question": "What is the term used to describe the shiny appearance typically found in materials like iron, copper, aluminum, and gold?",
    "options": [
      "A) Transparency",
      "B) Hardness",
      "C) Lustre",
      "D) Roughness"
    ],
    "answer": "C) Lustre",
    "explanation": "Lustre is the characteristic shine found on many metals. However, if metals have lustre, why do some old metal objects look dull and lose their shine?"
  },
  {
    "id": 6,
    "context": "Sometimes, metallic objects do not appear shiny and instead have a dull appearance. To check for true lustre, one must look at a freshly cut surface or rub the material with sandpaper.",
    "question": "Why do some metals often lose their shine and appear dull over time?",
    "options": [
      "A) Because they absorb light permanently",
      "B) Because of the action of air and moisture on them",
      "C) Because their internal structure breaks down rapidly",
      "D) Because they turn into non-metals as they age"
    ],
    "answer": "B) Because of the action of air and moisture on them",
    "explanation": "Exposure to air and moisture causes metals to lose their shine and appear dull. Aside from how they look, how do materials differ when we press them with our hands?"
  },
  {
    "id": 7,
    "context": "When you interact with different objects, some are easy to squish, while others resist pressure.",
    "question": "How are materials classified based on how easily they can be compressed or scratched?",
    "options": [
      "A) Soluble and insoluble",
      "B) Transparent and opaque",
      "C) Soft and hard",
      "D) Floating and sinking"
    ],
    "answer": "C) Soft and hard",
    "explanation": "Materials are classified as soft or hard depending on their compressibility. Let's look closer at soft materials; what is a good example of one?"
  },
  {
    "id": 8,
    "context": "In everyday life, we use materials like sponge for cleaning and iron for construction because of their physical resistance.",
    "question": "Which of the following pairs correctly represents a soft material and a hard material, respectively?",
    "options": [
      "A) Iron and copper",
      "B) Sponge and iron",
      "C) Wood and stone",
      "D) Glass and water"
    ],
    "answer": "B) Sponge and iron",
    "explanation": "Sponge is soft because it can be easily compressed, while iron is hard because it resists compression. Moving past physical touch, what happens when we mix different solid materials into water?"
  },
  {
    "id": 9,
    "context": "If you add a spoonful of sugar or salt to a glass of water and stir it, the solid completely disappears.",
    "question": "What term describes solid substances that completely disappear or dissolve in water?",
    "options": [
      "A) Insoluble",
      "B) Soluble",
      "C) Translucent",
      "D) Lustrous"
    ],
    "answer": "B) Soluble",
    "explanation": "Substances that completely dissolve in water are called soluble. But what about materials like sand or sawdust that don't disappear when stirred?"
  },
  {
    "id": 10,
    "context": "When you mix sand or chalk powder in water, even after stirring for a long time, they do not disappear.",
    "question": "What are materials called that do not mix with water and do not disappear even after prolonged stirring?",
    "options": [
      "A) Soluble",
      "B) Insoluble",
      "C) Saturated",
      "D) Miscible"
    ],
    "answer": "B) Insoluble",
    "explanation": "Insoluble substances do not dissolve in water. While we know some solids are insoluble, do liquids behave the same way when mixed with water?"
  },
  {
    "id": 11,
    "context": "When preparing food, we often mix different liquids. Some mix perfectly, while others remain completely separate.",
    "question": "Which of the following liquids mixes well (is soluble) with water?",
    "options": [
      "A) Mustard oil",
      "B) Coconut oil",
      "C) Kerosene",
      "D) Vinegar"
    ],
    "answer": "D) Vinegar",
    "explanation": "Vinegar mixes well with water, showing that some liquids are miscible. What happens to liquids like oil that do not mix with water?"
  },
  {
    "id": 12,
    "context": "If you add mustard oil or kerosene to a glass of water and let it sit for a few minutes, you will observe a distinct pattern.",
    "question": "What happens when you mix an insoluble liquid, like mustard oil, with water and let it stand?",
    "options": [
      "A) It dissolves completely and becomes invisible.",
      "B) It changes the color of the water permanently.",
      "C) It forms a separate layer.",
      "D) It sinks immediately to the bottom and forms crystals."
    ],
    "answer": "C) It forms a separate layer.",
    "explanation": "Insoluble liquids like oil form a separate layer on top of or below the water. We have seen solids and liquids dissolve, but what about gases?"
  },
  {
    "id": 13,
    "context": "Animals and plants living in aquatic environments rely on their surroundings to survive, proving that water can hold more than just solids and liquids.",
    "question": "Which gas, dissolved in water, is strictly vital for the survival of aquatic animals and plants?",
    "options": [
      "A) Nitrogen",
      "B) Oxygen",
      "C) Hydrogen",
      "D) Helium"
    ],
    "answer": "B) Oxygen",
    "explanation": "Oxygen dissolved in water allows aquatic life to breathe. Aside from solubility, we also notice that when we drop objects into water, they behave differently based on their weight and material."
  },
  {
    "id": 14,
    "context": "If you drop dried leaves onto a pond, they stay on the surface, whereas a stone thrown into the pond does not.",
    "question": "What happens to a heavy stone when placed in a body of water?",
    "options": [
      "A) It floats on the surface.",
      "B) It dissolves immediately.",
      "C) It sinks to the bottom.",
      "D) It stays suspended in the middle of the water."
    ],
    "answer": "C) It sinks to the bottom.",
    "explanation": "Heavy or dense materials like stones sink to the bottom. Conversely, what happens to lighter or certain insoluble materials?"
  },
  {
    "id": 15,
    "context": "When an insoluble solid is lighter than water, it interacts with the water's surface differently than heavy metals or stones.",
    "question": "What generally happens to dried leaves or small pieces of wood placed in water?",
    "options": [
      "A) They sink to the bottom.",
      "B) They dissolve and turn the water brown.",
      "C) They float on the surface.",
      "D) They become transparent."
    ],
    "answer": "C) They float on the surface.",
    "explanation": "Lighter materials float on water, showing the property of buoyancy. Beyond interacting with water, materials also interact with light. What do we call materials we can see completely through?"
  },
  {
    "id": 16,
    "context": "When playing hide and seek, you wouldn't hide behind a glass window because your friends could easily see you.",
    "question": "What are materials or substances called through which things can be seen clearly?",
    "options": [
      "A) Opaque",
      "B) Translucent",
      "C) Transparent",
      "D) Reflective"
    ],
    "answer": "C) Transparent",
    "explanation": "Transparent materials allow light to pass through clearly. What are some common everyday examples of these transparent materials?"
  },
  {
    "id": 17,
    "context": "Shopkeepers often use specific containers so that buyers can easily see the biscuits, sweets, and eatables inside.",
    "question": "Which of the following is an example of a transparent material?",
    "options": [
      "A) Wood",
      "B) Cardboard",
      "C) Glass",
      "D) Metal"
    ],
    "answer": "C) Glass",
    "explanation": "Glass is transparent, which is why it is used for shop containers. On the other hand, what do we call materials that block vision completely?"
  },
  {
    "id": 18,
    "context": "You cannot tell what is kept inside a closed wooden box, a cardboard carton, or a metal container without opening it.",
    "question": "Materials through which you cannot see at all are known as:",
    "options": [
      "A) Transparent",
      "B) Opaque",
      "C) Translucent",
      "D) Soluble"
    ],
    "answer": "B) Opaque",
    "explanation": "Opaque materials block all light from passing through. Are there any materials that fall somewhere in between transparent and opaque?"
  },
  {
    "id": 19,
    "context": "If you take a sheet of paper and apply a few drops of oil to it, the oiled patch changes how light passes through the paper.",
    "question": "What do we call materials through which objects can be seen, but not clearly?",
    "options": [
      "A) Transparent",
      "B) Opaque",
      "C) Translucent",
      "D) Lustrous"
    ],
    "answer": "C) Translucent",
    "explanation": "Translucent materials, like oiled paper, allow partial light through. Having learned all these properties—lustre, hardness, solubility, buoyancy, and transparency—why do we bother grouping materials based on them?"
  },
  {
    "id": 20,
    "context": "In a grocery store, all soaps are kept at one corner, grains at another, and biscuits in transparent jars.",
    "question": "What is one of the primary everyday reasons we group materials together?",
    "options": [
      "A) To change their physical state",
      "B) For the convenience of easily locating them",
      "C) To prevent them from dissolving in water",
      "D) To make opaque objects transparent"
    ],
    "answer": "B) For the convenience of easily locating them",
    "explanation": "Grouping makes everyday items easy to find and organize. Beyond convenience at home or in shops, how does grouping help scientists and students?"
  },
  {
    "id": 21,
    "context": "Scientists and students classify materials into groups based on similarities and differences in their properties.",
    "question": "Besides convenience, what is another major reason for dividing materials into groups?",
    "options": [
      "A) To systematically study their properties and observe patterns",
      "B) To permanently merge them into a single object",
      "C) To increase the overall weight of the objects",
      "D) To make all materials soluble in water"
    ],
    "answer": "A) To systematically study their properties and observe patterns",
    "explanation": "Grouping helps us study patterns in material properties. Now that we know how to group materials based on their properties, what happens when different materials get mixed together and we need to separate them?"
  },
  {
    "id": 22,
    "context": "In daily life, we often find substances mixed together, such as tea leaves in liquid tea or stones in rice.",
    "question": "Which of the following is NOT a general purpose for separating substances from a mixture?",
    "options": [
      "A) To separate two different, but useful, components",
      "B) To remove non-useful components",
      "C) To remove impurities or harmful components",
      "D) To combine two pure substances into a permanent compound"
    ],
    "answer": "D) To combine two pure substances into a permanent compound",
    "explanation": "We separate mixtures to isolate useful components or remove harmful/non-useful ones. Let's look at a scenario where we separate a mixture to get two highly useful products."
  },
  {
    "id": 23,
    "context": "Milk or curd is vigorously churned using a wooden tool or machine in a traditional Indian kitchen.",
    "question": "What is the primary purpose of churning milk or curd?",
    "options": [
      "A) To remove harmful stones",
      "B) To separate butter from the milk",
      "C) To make the milk opaque",
      "D) To evaporate the water content"
    ],
    "answer": "B) To separate butter from the milk",
    "explanation": "Churning separates two useful components: butter and buttermilk. What about separating a mixture where one part is completely non-useful?"
  },
  {
    "id": 24,
    "context": "After preparing a hot beverage on the stove, we pour it through a strainer before serving.",
    "question": "When we use a strainer to separate tea leaves from prepared tea, what is the purpose of this separation?",
    "options": [
      "A) To separate two different, useful liquids",
      "B) To remove non-useful components (the used leaves)",
      "C) To dissolve the tea leaves completely",
      "D) To condense water vapor into liquid"
    ],
    "answer": "B) To remove non-useful components (the used leaves)",
    "explanation": "We strain tea to remove the non-useful leaves. Sometimes, however, the components we want to remove are not just useless, but actually harmful if consumed."
  },
  {
    "id": 25,
    "context": "Before cooking rice or pulses purchased from the market, we closely inspect the grains on a plate.",
    "question": "Why do we separate small stones from rice before cooking?",
    "options": [
      "A) To remove impurities or harmful components",
      "B) To separate two useful food items",
      "C) To change the color of the rice",
      "D) To make the rice translucent"
    ],
    "answer": "A) To remove impurities or harmful components",
    "explanation": "Stones are impurities that could be harmful if eaten. Knowing we need to remove these stones, what specific manual method do we use to do so?"
  },
  {
    "id": 26,
    "context": "When you have a packet of food grain spread on a paper, you might find pieces of stone, husks, and broken grains mixed in.",
    "question": "What simple method is used to separate slightly larger sized impurities like dirt, stone, and husk from wheat, rice, or pulses by using your hands?",
    "options": [
      "A) Winnowing",
      "B) Threshing",
      "C) Handpicking",
      "D) Filtration"
    ],
    "answer": "C) Handpicking",
    "explanation": "Handpicking is the manual removal of larger impurities. But is handpicking practical for massive amounts of grain?"
  },
  {
    "id": 27,
    "context": "Handpicking is a convenient method for cleaning grains at home before a meal.",
    "question": "Under what condition is handpicking a convenient method of separation?",
    "options": [
      "A) When the quantity of impurities is extremely large",
      "B) When the quantity of impurities is usually not very large",
      "C) When the impurities are liquid",
      "D) When the mixture is completely dissolved in water"
    ],
    "answer": "B) When the quantity of impurities is usually not very large",
    "explanation": "Handpicking is only viable when the impurities are few. So, how do farmers separate massive numbers of tiny grain seeds from large bundles of harvested stalks?"
  },
  {
    "id": 28,
    "context": "A farmer has hundreds of bundles of stalks lying in the field after harvesting the crop. Plucking individual seeds like mangoes from a tree would be impossible.",
    "question": "What is the process called that is used to separate grain from stalks?",
    "options": [
      "A) Sieving",
      "B) Winnowing",
      "C) Threshing",
      "D) Evaporation"
    ],
    "answer": "C) Threshing",
    "explanation": "Threshing separates the grain seeds from the stalks. In modern or large-scale farming, how is this labor-intensive process actually carried out?"
  },
  {
    "id": 29,
    "context": "Historically, farmers beat stalks against hard surfaces to free the grain, but this is tiring for large quantities.",
    "question": "Besides beating by hand, how else is threshing commonly performed?",
    "options": [
      "A) By washing the stalks in a river",
      "B) With the help of bullocks or machines",
      "C) By boiling the stalks in large pots",
      "D) By using giant sieves to sift the stalks"
    ],
    "answer": "B) With the help of bullocks or machines",
    "explanation": "Bullocks and machines are used to thresh large quantities of grain efficiently. After threshing, the grain is free but still mixed with light husk. How is this husk removed?"
  },
  {
    "id": 30,
    "context": "After threshing, the mixture of heavy grain and light husk is taken to an open ground. A person stands on a raised platform and lets the mixture fall slowly.",
    "question": "Which method is used to separate heavier and lighter components of a mixture by wind or by blowing air?",
    "options": [
      "A) Winnowing",
      "B) Decantation",
      "C) Handpicking",
      "D) Sedimentation"
    ],
    "answer": "A) Winnowing",
    "explanation": "Winnowing uses wind to separate husk from grain. What exactly happens to the components during this process?"
  },
  {
    "id": 31,
    "context": "During winnowing, the wind interacts differently with the two components of the mixture as they fall from the basket (soop).",
    "question": "In the process of winnowing, where do the heavier seeds of grain fall?",
    "options": [
      "A) They blow far away to form a distant heap.",
      "B) They dissolve into the air.",
      "C) They form a heap near the platform for winnowing.",
      "D) They stay suspended in the basket."
    ],
    "answer": "C) They form a heap near the platform for winnowing.",
    "explanation": "The heavier grain falls straight down near the platform, while the lighter husk blows away. What if the impurities aren't lighter, but just different in size, like stones in flour?"
  },
  {
    "id": 32,
    "context": "When preparing a dish with flour, we need to remove bran and other impurities that might be present in it.",
    "question": "Which method uses a mesh or a net to separate particles of different sizes?",
    "options": [
      "A) Condensation",
      "B) Sieving",
      "C) Decantation",
      "D) Threshing"
    ],
    "answer": "B) Sieving",
    "explanation": "Sieving allows smaller particles to pass through holes while trapping larger ones. How is this specifically applied in a flour mill?"
  },
  {
    "id": 33,
    "context": "Before grinding wheat in a flour mill, it is essential to clean it thoroughly to ensure fine flour.",
    "question": "What does a slanting sieve at a flour mill primarily remove from wheat?",
    "options": [
      "A) Water and moisture",
      "B) Pieces of stones, stalk, and husk",
      "C) Dissolved salts",
      "D) Liquid oils"
    ],
    "answer": "B) Pieces of stones, stalk, and husk",
    "explanation": "Sieves in flour mills catch larger impurities like stones and stalks. Do we only use sieves for food items?"
  },
  {
    "id": 34,
    "context": "Sieving isn't just for the kitchen. It is a very common process in building and infrastructure development.",
    "question": "Where are similar, larger sieves commonly used to separate pebbles and stones from sand?",
    "options": [
      "A) Construction sites",
      "B) Textile factories",
      "C) Hospitals",
      "D) IT offices"
    ],
    "answer": "A) Construction sites",
    "explanation": "Large sieves are used at construction sites to refine sand. But what if the impurities are very fine, like dust in rice, that can't be easily handpicked or sieved?"
  },
  {
    "id": 35,
    "context": "Before cooking rice or pulses, we wash them. When water is added, the dust and dirt particles separate and make the water muddy.",
    "question": "What is the process called when the heavier solid component in a mixture settles at the bottom after water is added?",
    "options": [
      "A) Evaporation",
      "B) Sedimentation",
      "C) Condensation",
      "D) Winnowing"
    ],
    "answer": "B) Sedimentation",
    "explanation": "Sedimentation allows heavy solids to settle at the bottom. Once the heavy rice is at the bottom, how do we get rid of the dirty water on top?"
  },
  {
    "id": 36,
    "context": "After sedimentation in a vessel of washed rice, the dirty water floats above the settled rice grains.",
    "question": "What is the process of pouring out the liquid (along with the dust) without disturbing the settled solid called?",
    "options": [
      "A) Decantation",
      "B) Filtration",
      "C) Threshing",
      "D) Sieving"
    ],
    "answer": "A) Decantation",
    "explanation": "Decantation is the careful pouring off of the liquid layer. Can decantation be used for mixtures containing no solids, but only liquids?"
  },
  {
    "id": 37,
    "context": "If a mixture of oil and water is allowed to stand for some time, they form two separate layers.",
    "question": "How can the top layer of oil in an oil-water mixture be separated from the water?",
    "options": [
      "A) By sieving",
      "B) By handpicking",
      "C) By decantation",
      "D) By condensation"
    ],
    "answer": "C) By decantation",
    "explanation": "Decantation effectively separates two immiscible liquids like oil and water. However, if we need to completely separate fine tea leaves from tea, is decantation enough?"
  },
  {
    "id": 38,
    "context": "When decanting tea, a few leaves almost always slip into the cup. A strainer is much more effective.",
    "question": "What is the method called where a strainer or filter paper is used to separate solid particles from a liquid?",
    "options": [
      "A) Evaporation",
      "B) Filtration",
      "C) Sedimentation",
      "D) Winnowing"
    ],
    "answer": "B) Filtration",
    "explanation": "Filtration uses a porous barrier to separate fine solids from liquids. Besides tea, what is another common food preparation process that relies on filtration?"
  },
  {
    "id": 39,
    "context": "In our homes, boiling milk and adding a few drops of lemon juice results in a mixture of a solid and a liquid.",
    "question": "How is cottage cheese (paneer) separated from the liquid mixture during preparation?",
    "options": [
      "A) By evaporating the liquid completely",
      "B) By filtering the mixture through a fine cloth or a strainer",
      "C) By handpicking the cheese particles",
      "D) By using a magnet"
    ],
    "answer": "B) By filtering the mixture through a fine cloth or a strainer",
    "explanation": "Filtering through a cloth catches the solid paneer and lets the liquid pass. Filtration works great for undissolved solids, but what if a solid is completely dissolved, like salt in water?"
  },
  {
    "id": 40,
    "context": "When a solid is completely dissolved in a liquid, filtration cannot separate them because the solid particles pass right through the filter.",
    "question": "What process is used to separate a completely dissolved solid from a liquid by converting the liquid into vapor?",
    "options": [
      "A) Condensation",
      "B) Decantation",
      "C) Evaporation",
      "D) Threshing"
    ],
    "answer": "C) Evaporation",
    "explanation": "Evaporation turns water into vapor, leaving the dissolved solid behind. Where in the real world is this process used on a massive scale?"
  },
  {
    "id": 41,
    "context": "Sea water contains many salts mixed in it. When sea water is allowed to stand in shallow pits, sunlight heats it up.",
    "question": "How is common salt obtained from sea water?",
    "options": [
      "A) By freezing the sea water",
      "B) Through the process of evaporation driven by sunlight",
      "C) By filtering the sea water through huge nets",
      "D) By decanting the top layer of the ocean"
    ],
    "answer": "B) Through the process of evaporation driven by sunlight",
    "explanation": "Sunlight evaporates the water, leaving solid salt behind. If we heat water to evaporate it, but we actually want to collect the pure water instead of just the salt, what must we do to the steam?"
  },
  {
    "id": 42,
    "context": "When steam touches a cold surface, like a metal plate holding ice, it changes its physical state again.",
    "question": "What is the process of converting water vapor back into its liquid form called?",
    "options": [
      "A) Evaporation",
      "B) Filtration",
      "C) Condensation",
      "D) Sedimentation"
    ],
    "answer": "C) Condensation",
    "explanation": "Condensation turns vapor back into liquid. Have you ever noticed this happening naturally in your kitchen?"
  },
  {
    "id": 43,
    "context": "After milk has been boiled in a vessel and covered with a plate, you might observe something when you lift the plate later.",
    "question": "What evidence of condensation can often be seen under a plate that has been used to cover a vessel of recently boiled milk?",
    "options": [
      "A) Drops of condensed water",
      "B) Solid crystals of milk fat",
      "C) A layer of dry salt",
      "D) Unchanged water vapor"
    ],
    "answer": "A) Drops of condensed water",
    "explanation": "The steam condenses into water droplets on the cool plate. Now that we have all these methods, what do we do when a mixture is so complex that one method isn't enough?"
  },
  {
    "id": 44,
    "context": "Consider a mixture of sand and salt. Handpicking wouldn't work, and winnowing is useless because both are heavy solids.",
    "question": "Which combination of methods is required to completely separate and recover both the sand and the salt from a sand-salt mixture?",
    "options": [
      "A) Only handpicking and threshing",
      "B) Adding water, then decantation/filtration, followed by evaporation and condensation",
      "C) Only sieving followed by handpicking",
      "D) Winnowing followed immediately by condensation"
    ],
    "answer": "B) Adding water, then decantation/filtration, followed by evaporation and condensation",
    "explanation": "Multiple methods are often needed: water dissolves the salt, filtration removes the sand, evaporation separates the water from salt, and condensation recovers the liquid water. But when adding water to dissolve the salt, is there a limit to how much salt can dissolve?"
  },
  {
    "id": 45,
    "context": "Paheli mixed a whole packet of salt in a small amount of sand, and then tried to recover the salt by adding a small glass of water.",
    "question": "Why did Paheli recover only a small part of the salt she initially mixed with the sand?",
    "options": [
      "A) Because salt evaporates instantly when it touches sand.",
      "B) Because the small quantity of water became saturated and could not dissolve all the salt.",
      "C) Because salt is completely insoluble in water.",
      "D) Because the sand absorbed the salt chemically."
    ],
    "answer": "B) Because the small quantity of water became saturated and could not dissolve all the salt.",
    "explanation": "A fixed amount of water can only dissolve a certain amount of a substance. What exactly do we call a solution that has hit this limit?"
  },
  {
    "id": 46,
    "context": "When you keep adding spoonfuls of salt to a beaker of water and stirring, eventually you reach a point where no more will dissolve.",
    "question": "What is a solution called when no more of a substance can be dissolved in it?",
    "options": [
      "A) A miscible solution",
      "B) An unsaturated solution",
      "C) A saturated solution",
      "D) A filtered solution"
    ],
    "answer": "C) A saturated solution",
    "explanation": "A solution is saturated when it cannot dissolve any more solute. How can you visually tell that a solution has become saturated?"
  },
  {
    "id": 47,
    "context": "As you stir salt into water, it usually disappears. But at a certain point, the mixture's appearance changes.",
    "question": "What physical evidence indicates that a salt-water solution has become saturated?",
    "options": [
      "A) The water turns completely solid.",
      "B) The water changes color to dark brown.",
      "C) Some salt remains undissolved and settles at the bottom of the beaker.",
      "D) The water begins to boil rapidly without heat."
    ],
    "answer": "C) Some salt remains undissolved and settles at the bottom of the beaker.",
    "explanation": "Undissolved salt at the bottom proves the solution is saturated. If you want to force this saturated solution to dissolve the remaining salt, what can you do?"
  },
  {
    "id": 48,
    "context": "If you have a saturated solution with undissolved salt at the bottom, heating the beaker will change the state of the solution.",
    "question": "What happens to a saturated solution when it is heated?",
    "options": [
      "A) It immediately turns into a solid block of salt.",
      "B) It loses all its dissolved salt.",
      "C) More of the substance can be dissolved in it.",
      "D) The salt permanently turns into a gas."
    ],
    "answer": "C) More of the substance can be dissolved in it.",
    "explanation": "Heating increases solubility, allowing more salt to dissolve. Finally, does this rule of solubility apply equally to all soluble substances?"
  },
  {
    "id": 49,
    "context": "You have two identical glasses with half a cup of water. You count how many spoons of salt dissolve in one, and how many spoons of sugar dissolve in the other before saturation.",
    "question": "What does an experiment comparing the saturation points of salt and sugar prove?",
    "options": [
      "A) Water dissolves different substances in different amounts.",
      "B) Water dissolves all soluble substances in exactly equal amounts.",
      "C) Sugar cannot dissolve in water at all.",
      "D) Salt requires less heat to dissolve than sugar."
    ],
    "answer": "A) Water dissolves different substances in different amounts.",
    "explanation": "Different materials have different levels of solubility in water. This brings us to a complete understanding of how materials interact and separate."
  },
  {
    "id": 50,
    "context": "Throughout our study, we explored how materials are classified and how differences in their properties allow us to separate them from mixtures.",
    "question": "Which of the following summaries correctly lists methods used to separate solid particles from a liquid?",
    "options": [
      "A) Handpicking, threshing, and winnowing",
      "B) Sedimentation, decantation, and filtration",
      "C) Only evaporation and condensation",
      "D) Heating and cooling"
    ],
    "answer": "B) Sedimentation, decantation, and filtration",
    "explanation": "Sedimentation, decantation, and filtration are the primary methods for separating insoluble solid particles from liquids, concluding our journey from classifying materials to actively separating them."
  }
]


// App State
// App State
let currentIndex = 0;
let phase = "context";
let userSelectedAnswer = null;
let answeredQuestions = [];

let correctCount = 0;
let wrongCount = 0;

// DOM Elements
const container = document.getElementById("card-container");

const progressBar = document.getElementById("prog-fill");
const progressText = document.getElementById("prog-text");

const correctEl = document.getElementById("hdr-correct");
const wrongEl = document.getElementById("hdr-wrong");
const accuracyEl = document.getElementById("hdr-acc");

// Initialize
function init() {
    currentIndex = 0;
    phase = "context";

    correctCount = 0;
    wrongCount = 0;
    answeredQuestions = [];

    updateScoreDisplay();
    render();
}

// Score Display
function updateScoreDisplay() {
    correctEl.textContent = correctCount;
    wrongEl.textContent = wrongCount;

    const total = correctCount + wrongCount;

    const accuracy =
        total === 0
            ? 0
            : Math.round((correctCount / total) * 100);

    accuracyEl.textContent = `${accuracy}%`;
}

function refreshScoreCounts() {
    correctCount =
        answeredQuestions.filter(answer => answer?.isCorrect).length;

    wrongCount =
        answeredQuestions.filter(answer => answer && !answer.isCorrect).length;
}

function recordAnswer() {
    if (answeredQuestions[currentIndex]) {
        return;
    }

    const item = quizData[currentIndex];

    answeredQuestions[currentIndex] = {
        selected: userSelectedAnswer,
        isCorrect: userSelectedAnswer === item.answer
    };

    refreshScoreCounts();
    updateScoreDisplay();
}

function previousReviewButton() {
    return currentIndex > 0
        ? `
            <button
                id="btn-prev-review"
                class="sf-action sf-action-secondary"
            >
                Previous
            </button>
        `
        : "";
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

    return ranges.join(", ");
}

function answeredQuestionRange() {
    const numbers = answeredQuestions
        .map((answer, index) => answer ? index + 1 : null)
        .filter(Boolean);

    return formatRanges(numbers);
}

function questionGlimpse(question) {
    return question.length > 58
        ? `${question.slice(0, 58)}...`
        : question;
}

function bindPreviousReview() {
    const previousBtn =
        document.getElementById("btn-prev-review");

    if (!previousBtn) {
        return;
    }

    previousBtn.addEventListener("click", () => {
        currentIndex--;
        phase = "explanation";
        render();
    });
}

function bindAnsweredJump() {
    const jumpInput =
        document.getElementById("answered-jump");
    const preview =
        document.getElementById("answered-preview");

    if (!jumpInput || !preview) {
        return;
    }

    const updatePreview = () => {
        const targetIndex = Number(jumpInput.value) - 1;
        const answer = answeredQuestions[targetIndex];

        preview.textContent =
            answer
                ? `Question ${targetIndex + 1}: ${questionGlimpse(quizData[targetIndex].question)}`
                : `Allowed values: ${answeredQuestionRange()}`;
    };

    const jumpToInput = () => {
        const targetIndex = Number(jumpInput.value) - 1;

        if (!answeredQuestions[targetIndex]) {
            updatePreview();
            return;
        }

        currentIndex = targetIndex;
        phase = "explanation";
        render();
    };

    jumpInput.addEventListener("input", updatePreview);
    jumpInput.addEventListener("change", updatePreview);

    document
        .getElementById("btn-jump")
        .addEventListener("click", jumpToInput);

    updatePreview();
}

function clearKeyboardHandler() {
    document.onkeydown = null;
}

// Render Controller
function render() {

    updateProgress();

    if (currentIndex >= quizData.length) {
        renderScoreScreen();
        return;
    }

    if (phase === "context") {
        renderContext();
    }
    else if (phase === "question") {
        renderQuestion();
    }
    else {
        renderExplanation();
    }
}

// Context Screen
function renderContext() {
    clearKeyboardHandler();

    const item = quizData[currentIndex];

    container.innerHTML = `
        <div class="sf-label">
            Context
        </div>

        <div class="sf-content">
            ${item.context}
        </div>

        <button
            id="btn-next"
            class="sf-action"
        >
            Next: Question
        </button>
    `;

    document
        .getElementById("btn-next")
        .addEventListener("click", () => {
            phase = "question";
            render();
        });
}

// Question Screen
function renderQuestion() {
    clearKeyboardHandler();

    const item = quizData[currentIndex];

    userSelectedAnswer = null;

    const optionsHtml = `
        <ul class="sf-options">
            ${item.options.map(option => `
                <li>
                    <button
                        class="sf-opt-btn"
                        data-value="${option.replace(/"/g, '&quot;')}"
                    >
                        ${option}
                    </button>
                </li>
            `).join("")}
        </ul>
    `;

    container.innerHTML = `
        <div class="sf-label">
            Question
        </div>

        <div class="sf-content">
            ${item.question}
        </div>

        ${optionsHtml}

        <button
            id="btn-submit"
            class="sf-action"
            disabled
        >
            Submit Answer
        </button>
    `;

    const submitBtn =
        document.getElementById("btn-submit");

    const optionBtns =
        document.querySelectorAll(".sf-opt-btn");

    const selectOption = (btn) => {
        optionBtns.forEach(
            b => b.classList.remove("selected")
        );

        btn.classList.add("selected");

        userSelectedAnswer =
            btn.dataset.value;

        submitBtn.disabled = false;
    };

    optionBtns.forEach(btn => {

        btn.addEventListener("click", () => {
            selectOption(btn);
        });

    });

    const submitAnswer = () => {
        recordAnswer();
        phase = "explanation";
        render();
    };

    submitBtn.addEventListener("click", submitAnswer);

    document.onkeydown = (event) => {
        const optionNumber = Number(event.key);

        if (Number.isInteger(optionNumber)
            && optionNumber >= 1
            && optionNumber <= optionBtns.length) {
            event.preventDefault();
            selectOption(optionBtns[optionNumber - 1]);
            return;
        }

        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();

        if (!userSelectedAnswer) {
            selectOption(optionBtns[0]);
            return;
        }

        submitAnswer();
    };
}

// Explanation Screen
function renderExplanation() {
    clearKeyboardHandler();

    const item = quizData[currentIndex];

    const recordedAnswer =
        answeredQuestions[currentIndex] || {
            selected: userSelectedAnswer,
            isCorrect: userSelectedAnswer === item.answer
        };

    const isCorrect =
        recordedAnswer.isCorrect;

    const feedbackClass =
        isCorrect ? "ok" : "fail";

    const feedbackText =
        isCorrect ? "Correct!" : "Incorrect";

    const btnText =
        currentIndex === quizData.length - 1
            ? "Finish Quiz"
            : "Next Context";

    container.innerHTML = `
        <div class="sf-label">
            Answer & Explanation
        </div>

        <div class="sf-feedback ${feedbackClass}">
            ${feedbackText}
        </div>

        <div class="sf-content">
            <strong>Question:</strong>
            ${item.question}
        </div>

        <div class="sf-content">
            <strong>Correct Answer:</strong>
            ${item.answer}
        </div>

        <div class="sf-explanation">
            ${item.explanation}
        </div>

        <div class="sf-review-jump">
            <label for="answered-jump">
                Jump to
            </label>

            <input
                id="answered-jump"
                type="number"
                min="1"
                max="${quizData.length}"
                value="${currentIndex + 1}"
                inputmode="numeric"
            >

            <span class="sf-review-allowed">
                Allowed: ${answeredQuestionRange()}
            </span>

            <button
                id="btn-jump"
                class="sf-action sf-action-secondary"
            >
                Jump
            </button>

            <div
                id="answered-preview"
                class="sf-review-preview"
            ></div>
        </div>

        <div class="sf-actions">
            ${previousReviewButton()}

            <button
                id="btn-next-phase"
                class="sf-action"
            >
                ${btnText}
            </button>
        </div>
    `;

    bindPreviousReview();
    bindAnsweredJump();

    const goNext = () => {
        currentIndex++;
        phase =
            answeredQuestions[currentIndex]
                ? "explanation"
                : "context";

        render();
    };

    document
        .getElementById("btn-next-phase")
        .addEventListener("click", goNext);

    document.onkeydown = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        goNext();
    };
}

// Final Screen
function renderScoreScreen() {
    clearKeyboardHandler();

    const total =
        correctCount + wrongCount;

    const accuracy =
        total === 0
            ? 0
            : Math.round(
                (correctCount / total) * 100
            );

    container.innerHTML = `
        <div class="sf-final">

            <div class="sf-final-title">
                Quiz Complete
            </div>

            <div class="sf-final-stats">

                <div class="sf-stat-box">
                    <span class="num">
                        ${correctCount}
                    </span>
                    <span class="lbl">
                        Correct
                    </span>
                </div>

                <div class="sf-stat-box">
                    <span class="num">
                        ${wrongCount}
                    </span>
                    <span class="lbl">
                        Wrong
                    </span>
                </div>

                <div class="sf-stat-box">
                    <span class="num">
                        ${accuracy}%
                    </span>
                    <span class="lbl">
                        Accuracy
                    </span>
                </div>

            </div>

            <div class="sf-final-note">
                Repeat the quiz until the
                concept flow becomes
                second nature.
            </div>

            <div class="sf-actions">
                <button
                    id="btn-prev-review"
                    class="sf-action sf-action-secondary"
                >
                    Previous
                </button>

                <button
                    id="btn-restart"
                    class="sf-action"
                >
                    Restart Quiz
                </button>
            </div>

        </div>
    `;

    document
        .getElementById("btn-prev-review")
        .addEventListener("click", () => {
            currentIndex = quizData.length - 1;
            phase = "explanation";
            render();
        });

    document
        .getElementById("btn-restart")
        .addEventListener("click", init);
}

// Progress
function updateProgress() {

    if (currentIndex >= quizData.length) {

        progressBar.style.width = "100%";

        progressText.textContent =
            "Completed";

        return;
    }

    const percent =
        ((currentIndex + 1)
            / quizData.length) * 100;

    progressBar.style.width =
        `${percent}%`;

    progressText.textContent =
        `Q ${currentIndex + 1} / ${quizData.length}`;
}

// Start App
init();
