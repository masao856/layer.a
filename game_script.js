
const state = {
  hp: 20,
  mp: 10,
  attack: 5,
  magic: 3,
  defense: 3,
  magicDefense: 2,
  speed: 5,
  level: 1,
  exp: 0,
  nextExp: 20,
  inventory: ["ショートソード"],
  equipped: {
    right: "ショートソード",
    left: null
  },
  encounterChance: 0.4,
  battle: false,
  enemy: null,
  defeated: [],
  awaitingInput: false
};

const weapons = {
  "ショートソード": { atk: 5, slot: "片手", icon: "sword.png" },
  "ロングソード": { atk: 7, slot: "片手", icon: "item_sword_longsword_final_updated.png" },
  "鉄の盾": { def: 4, slot: "片手", icon: "iron_shield.png" },
  "バスタードソード": { atk: 12, slot: "両手", icon: "bastard_sword.png" }
};

const enemies = [
  {
    name: "野盗",
    hp: 14,
    attack: 6,
    defense: 2,
    speed: 6,
    img: "bandit.png",
    drop: { item: "ロングソード", chance: 0.1 }
  },
  {
    name: "ゾンビ",
    hp: 18,
    attack: 4,
    defense: 4,
    speed: 2,
    img: "zombie.png",
    drop: null
  },
  {
    name: "獣人の野盗",
    hp: 16,
    attack: 5,
    defense: 3,
    speed: 7,
    img: "beastman.png",
    drop: { item: "ポーション", chance: 0.4 }
  },
  {
    name: "黒鉄の鎧",
    hp: 25,
    attack: 7,
    defense: 6,
    speed: 3,
    img: "armor_enemy_midboss_final.png",
    drop: { item: "鉄の盾", chance: 1.0 }
  },
  {
    name: "堕ちた王",
    hp: 35,
    attack: 8,
    magic: 4,
    defense: 4,
    magicDefense: 4,
    speed: 4,
    img: "enemy_fallen_king_boss.png",
    drop: null
  }
];

// ...（以下省略せず続きも含めて書き出し）
