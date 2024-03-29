import axios from 'axios'

const names2 = [
    'Shield & Sword',
    'Swords of Revealing Light',
    'Waboku',
    "Nightmare's Steelcage",
    'Shield & Sword',
    'Share the Pain',
    'Backup Soldier',
    'Adhesion Trap Hole',
    'Self-Destruct Button',
    'Back to Square One',
    'Threatening Roar',
    'Stop Defense',
    'Reverse Trap',
    'Lightforce Sword',
    'Block Attack',
    'Graverobber',
    'Windstorm of Etaqua',
    'Cold Wave',
    'Fiend Comedian',
    'Huge Revolution',
    'Zero Gravity',
    'Dark-Piercing Light',
    'Mesmeric Control',
    'Skull Dice',
    'Gravedigger Ghoul',
    'The Inexperienced Spy',
    'Reinforcements',
    'Castle Walls',
    'Ancient Telescope',
    'Curse of Fiend',
    'Final Destiny',
    'Darkness Approaches',
    "Fairy's Hand Mirror",
    'Snake Fang',
    'Major Riot',
    "Solomon's Lawbook",
    'Seal of the Ancients',
    'Chosen One',
    'Mask of Weakness',
    'Multiplication of Ants',
    'Insect Imitation',
    'Exchange',
    'Deal of Phantom',
    'A Feint Plan',
    'Spell Reproduction',
    'De-Spell Germ Weapon',
    'The Secret of the Bandit',
    'Bubble Crash',
    'Dark Designator',
    'Hieroglyph Lithograph',
    'Curse of Aging',
    'Non Aggression Area',
    'Gather Your Mind',
    "Sage's Stone",
    'Dice Re-Roll',
    'Energy Drain',
    'Jade Insect Whistle',
    'Micro Ray',
    'Order to Charge',
    'The Law of the Normal',
    'Thousand Energy',
    'Triangle Power',
    'Order to Smash',
    "Fruits of Kozaky's Studies",
    'Mind Haxorz',
    'Pot of Generosity',
    'Simultaneous Loss',
    'Destruction of Destiny',
    'Life Equalizer'
]

const additionalNames = ['Amazon of the Seas', 'Ancient Brain', 'Aqua Dragon', 'Beastking of the Swamps', 'Berfomet', 'Bickuribox', 'Blackland Fire Dragon', 'Bracchio-raidus', 'Branch!', 'Centrifugal Field', 'Chimera the Flying Mythical Beast', 'Crimson Sunbird', 'Curtain of the Dark Ones', 'Cyber Saurus', 'Dragon Zombie', 'Empress Judge', 'Fairy Dragon', 'Faith Bird', 'Flame Ghost', 'Fusion Gate', 'Gazelle the King of Mythical Beasts', 'Goddess with the Third Eye', 'Great Mammoth of Goldfine', 'Gruesome Goo', 'Humanoid Slime', 'Humanoid Worm Drake', 'Hyosube', 'Invader from Another Dimension', 'Kaiser Dragon', 'Kamionwizard', 'Lady of Faith', 'Lord of the Lamp', 'Man-eating Black Shark', 'Maryokutai', 'Memory Crusher', 'Metamorphosis', 'Mispolymerization', 'Musician King', 'Mystical Sand', 'Mystical Sheep #1', 'Non-Fusion Area', 'Re-Fusion', 'Roaring Ocean Snake', 'Roboyarou', 'Sanwitch', 'Skelgon', 'Skull Knight', 'Skull Red Bird', 'Soul Hunter', 'Success Probability 0%', 'Super Robolady', 'Super Roboyarou', 'Supply', 'The Last Warrior from Another Planet', 'The Snake Hair', 'Thunder Dragon', 'Twin-Headed Thunder Dragon', 'Two-Headed King Rex', 'Versago the Destroyer', 'Winged Dragon, Guardian of the Fortress 1', 'Worm Drake', 'Zombie Warrior', 'Zombyra the Dark']

const names = ['Exodia the Forbidden One',
    'Mirror Force',
    'Exodia Necross',
    'Right Leg of the Forbidden One',
    'Left Leg of the Forbidden One',
    'Right Arm of the Forbidden One',
    'Left Arm of the Forbidden One',
    'Fiber Jar',
    'Yata-Garasu',
    'Mirage of Nightmare',
    'Chaos Emperor Dragon - Envoy of the End',
    'Raigeki',
    'Sinister Serpent',
    'Witch of the Black Forest',
    "Harpie's Feather Duster",
    'Change of Heart',
    'Delinquent Duo',
    'The Forceful Sentry',
    'Painful Choice',
    'Imperial Order',
    'Ring of Destruction',
    'Makyura the Destructor',
    'Magical Scientist',
    'Butterfly Dagger - Elma',
    'Black Luster Soldier - Envoy of the Beginning',
    'Sixth Sense',
    'Larvae Moth',
    'Great Moth',
    'Perfectly Ultimate Great Moth',
    'Cocoon of Evolution',
    'Petit Moth',
    'Labyrinth Wall',
    'Wall Shadow',
    'Sanga of the Thunder',
    'Kazejin',
    'Suijin',
    'Gate Guardian',
    'Zoa',
    'Metalzoa',
    'Gale Dogra',
    'Magical Labyrinth',
    'Metalmorph',
    'Red-Eyes Black Metal Dragon',
    'Call of the Grave',
    'Anti Raigeki',
    'Call of the Dark',
    'Gryphon Wing',
    'Contract with Exodia',
    'Primal Seed',
    'Gruesome Goo',
    'Hyosube',
    'Skull Knight',
    'Gazelle the King of Mythical Beasts',
    'Berfomet',
    'Chimera the Flying Mythical Beast',
    'Humanoid Slime',
    'Worm Drake',
    'Humanoid Worm Drake',
    'Roboyarou',
    'Super Robolady',
    'Super Roboyarou',
    'Sanwitch',
    'Memory Crusher',
    'Success Probability 0%'
]

/*
axios.get('http://localhost:3000/cards', {
    params: {
        names: names
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    }); */
