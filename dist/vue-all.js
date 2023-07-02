import { defineComponent as i, openBlock as n, createElementBlock as e, toDisplayString as S, createCommentVNode as U, renderSlot as P, computed as l, createBlock as o, withCtx as L, createElementVNode as T, Fragment as d, renderList as H, normalizeClass as G, unref as q, createTextVNode as z, normalizeStyle as J } from "vue";
const Q = {
  key: 0,
  style: { border: "solid 2px red", padding: "15px" }
}, j = { key: 0 }, I = /* @__PURE__ */ i({
  __name: "Border",
  props: {
    show: { type: Boolean, optional: !1 },
    title: { type: String, optional: !0 }
  },
  setup(E) {
    const O = E;
    return (_, C) => O.show ? (n(), e("div", Q, [
      O.title ? (n(), e("div", j, S(O.title), 1)) : U("", !0),
      P(_.$slots, "default")
    ])) : P(_.$slots, "default", { key: 1 });
  }
}), GE = {
  title: "Components/Border",
  component: I,
  tags: ["autodocs"],
  argTypes: {
    title: { type: "string" }
  }
}, m = { class: "d-flex" }, v = { class: "m-2" }, k = ["src"], p = { class: "d-flex" }, s = { class: "m-2" }, EE = ["src"], _E = /* @__PURE__ */ i({
  __name: "Badges",
  props: {
    mapper: { required: !0 },
    border: { type: Boolean, required: !1, default: !0 },
    title: { type: String, required: !1, default: null }
  },
  setup(E) {
    const O = E, _ = O.mapper, C = l(() => {
      var t, R;
      return ((R = (t = _ == null ? void 0 : _.game) == null ? void 0 : t.generation) == null ? void 0 : R.value) > 0;
    }), a = l(() => {
      let t = 0;
      return _.game.generation.value == 1 ? t = 0 : _.game.generation.value == 2 ? t = 8 : _.game.generation.value == 3 && (t = 16), [
        { number: 1 + t, value: _.player.badges.badge1.value },
        { number: 2 + t, value: _.player.badges.badge2.value },
        { number: 3 + t, value: _.player.badges.badge3.value },
        { number: 4 + t, value: _.player.badges.badge4.value },
        { number: 5 + t, value: _.player.badges.badge5.value },
        { number: 6 + t, value: _.player.badges.badge6.value },
        { number: 7 + t, value: _.player.badges.badge7.value },
        { number: 8 + t, value: _.player.badges.badge8.value }
      ];
    }), N = (t) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${t.number}.png`, A = function(t) {
      return t.value ? ["img-sprite"] : ["img-sprite", "img-grayscale", "img-transparent-85"];
    };
    return (t, R) => C.value ? (n(), o(I, {
      key: 0,
      show: E.border,
      title: O.title
    }, {
      default: L(() => [
        T("div", m, [
          (n(!0), e(d, null, H(a.value.slice(0, 4), (r) => (n(), e("div", v, [
            T("img", {
              src: N(r),
              class: G(A(r))
            }, null, 10, k)
          ]))), 256))
        ]),
        T("div", p, [
          (n(!0), e(d, null, H(a.value.slice(4, 8), (r) => (n(), e("div", s, [
            T("img", {
              src: N(r),
              class: G(A(r))
            }, null, 10, EE)
          ]))), 256))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"])) : U("", !0);
  }
}), BE = {
  title: "Widgets/Pokemon/Badges",
  component: _E,
  tags: ["autodocs"],
  argTypes: {}
}, tE = { class: "d-flex justify-content-center" }, RE = { class: "position-relative fs-6 mt-4" }, AE = { class: "position-absolute start-50 translate-middle badge rounded-pill bg-danger" }, TE = ["src"], OE = /* @__PURE__ */ i({
  __name: "EnemyTeamPokemon",
  props: {
    mapper: { required: !0 },
    border: { type: Boolean, required: !1, default: !0 },
    title: { type: String, required: !1 }
  },
  setup(E) {
    const _ = E.mapper, C = l(() => {
      var A, t, R;
      return ((R = (t = (A = _ == null ? void 0 : _.battle) == null ? void 0 : A.trainer) == null ? void 0 : t.totalPokemon) == null ? void 0 : R.value) > 0;
    }), a = l(() => _.battle.trainer.team.slice(0, _.battle.trainer.totalPokemon.value).filter((A) => A.species.value != null)), N = (A) => `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${A}.png`;
    return (A, t) => C.value ? (n(), o(I, {
      key: 0,
      show: E.border,
      title: A.$props.title ?? `${q(_).battle.trainer.name.value}'s Team`
    }, {
      default: L(() => [
        T("div", tE, [
          (n(!0), e(d, null, H(a.value, (R) => (n(), e("div", null, [
            T("div", RE, [
              T("span", AE, "Lv: " + S(R.level.value), 1),
              T("img", {
                class: "img-sprite",
                src: N(R.species.value.toLowerCase())
              }, null, 8, TE)
            ])
          ]))), 256))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"])) : U("", !0);
  }
}), gE = {
  title: "Widgets/Pokemon/Enemy Team Pokemon",
  component: OE,
  tags: ["autodocs"],
  argTypes: {}
}, rE = /* @__PURE__ */ i({
  __name: "Movepool",
  props: {
    pokedexNumber: { type: Number, required: !0 },
    border: { type: Boolean, required: !1, default: !0 },
    title: { type: String, required: !1, default: "Moveset" }
  },
  setup(E) {
    return (O, _) => (n(), o(I, {
      show: E.border,
      title: E.title
    }, {
      default: L(() => [
        z(" Movepool ")
      ]),
      _: 1
    }, 8, ["show", "title"]));
  }
}), yE = {
  title: "Widgets/Pokemon/Movepool",
  component: rE,
  tags: ["autodocs"],
  argTypes: {}
};
globalThis && globalThis.__awaiter;
var B;
(function(E) {
  E.NONE = "None", E.WILD = "Wild", E.TRAINER = "Trainer", E.LOST_BATTLE = "Lost Battle";
})(B || (B = {}));
var g;
(function(E) {
  E.NORMAL = "Normal", E.OLD_MAN_BATTLE = "Old Man Battle", E.SAFARI_ZONE = "Safari Zone", E.OAK_CATCHING_STARTER = "Oak Catching Starter";
})(g || (g = {}));
var y;
(function(E) {
  E.PLAYER = "Player", E.OPPONENT = "Opponent";
})(y || (y = {}));
var c;
(function(E) {
  E.ENABLED = "Enabled", E.DISABLED = "Disabled";
})(c || (c = {}));
var h;
(function(E) {
  E.NORMAL = "Normal", E.FIGHTING = "Fighting", E.FLYING = "Flying", E.POISON = "Poison", E.GROUND = "Ground", E.ROCK = "Rock", E.BUG = "Bug", E.GHOST = "Ghost", E.FIRE = "Fire", E.WATER = "Water", E.GRASS = "Grass", E.ELECTRIC = "Electric", E.PSYCHIC = "Psychic", E.ICE = "Ice", E.DRAGON = "Dragon";
})(h || (h = {}));
var K;
(function(E) {
  E.UNSOLVED = "Unsolved", E.FIRST_CAN_FOUND = "First Can Found", E.SOLVED = "Solved";
})(K || (K = {}));
var Y;
(function(E) {
  E.ASLEEP = "Asleep", E.ALSEEP = "Alseep", E.POISONED = "Poisoned", E.BURNED = "Burned", E.FROZEN = "Frozen", E.PARALYZED = "Paralyzed";
})(Y || (Y = {}));
var f;
(function(E) {
  E.CONFUSED = "Confused";
})(f || (f = {}));
var W;
(function(E) {
  E.BADLY_POSIONED = "Badly Posioned";
})(W || (W = {}));
var b;
(function(E) {
  E.FAST_TEXT_NO_ANIMATIONS_BATTLESTYLE_SET = "Fast Text, No Animations, Battlestyle Set", E.CHAMPION_FIGHT = "Champion Fight";
})(b || (b = {}));
var V;
(function(E) {
  E.NO_TEAM_SELECTED = "No Team Selected", E.JOLTEON = "Jolteon", E.FLAREON = "Flareon", E.VAPOREON = "Vaporeon";
})(V || (V = {}));
var w;
(function(E) {
  E.NOBODY = "NOBODY", E.YOUNGSTER = "YOUNGSTER", E.BUG_CATCHER = "BUG CATCHER", E.LASS = "LASS", E.SAILOR = "SAILOR", E.JR_TRAINER_M = "JR TRAINER M", E.JR_TRAINER_F = "JR TRAINER F", E.POKEMANIAC = "POKEMANIAC", E.SUPER_NERD = "SUPER NERD", E.HIKER = "HIKER", E.BIKER = "BIKER", E.BURGLAR = "BURGLAR", E.ENGINEER = "ENGINEER", E.JUGGLER = "JUGGLER", E.FISHER = "FISHER", E.SWIMMER = "SWIMMER", E.CUE_BALL = "CUE BALL", E.GAMBLER = "GAMBLER", E.BEAUTY = "BEAUTY", E.PSYCHIC = "PSYCHIC", E.ROCKER = "ROCKER", E.TAMER = "TAMER", E.BIRD_KEEPER = "BIRD KEEPER", E.BLACKBELT = "BLACKBELT", E.RIVAL1 = "RIVAL1", E.PROF_OAK = "PROF OAK", E.CHIEF = "CHIEF", E.SCIENTIST = "SCIENTIST", E.GIOVANNI = "GIOVANNI", E.ROCKET = "ROCKET", E.COOLTRAINER_M = "COOLTRAINER M", E.COOLTRAINER_F = "COOLTRAINER F", E.BRUNO = "BRUNO", E.BROCK = "BROCK", E.MISTY = "MISTY", E.LTSURGE = "LT.SURGE", E.ERIKA = "ERIKA", E.KOGA = "KOGA", E.BLAINE = "BLAINE", E.SABRINA = "SABRINA", E.GENTLEMAN = "GENTLEMAN", E.RIVAL2 = "RIVAL2", E.RIVAL3 = "RIVAL3", E.LORELEI = "LORELEI", E.CHANNELER = "CHANNELER", E.AGATHA = "AGATHA", E.LANCE = "LANCE";
})(w || (w = {}));
var M;
(function(E) {
  E.POUND = "Pound", E.KARATE_CHOP = "Karate Chop", E.DOUBLESLAP = "DoubleSlap", E.COMET_PUNCH = "Comet Punch", E.MEGA_PUNCH = "Mega Punch", E.PAY_DAY = "Pay Day", E.FIRE_PUNCH = "Fire Punch", E.ICE_PUNCH = "Ice Punch", E.THUNDERPUNCH = "ThunderPunch", E.SCRATCH = "Scratch", E.VICEGRIP = "ViceGrip", E.GUILLOTINE = "Guillotine", E.RAZOR_WIND = "Razor Wind", E.SWORDS_DANCE = "Swords Dance", E.CUT = "Cut", E.GUST = "Gust", E.WING_ATTACK = "Wing Attack", E.WHIRLWIND = "Whirlwind", E.FLY = "Fly", E.BIND = "Bind", E.SLAM = "Slam", E.VINE_WHIP = "Vine Whip", E.STOMP = "Stomp", E.DOUBLE_KICK = "Double Kick", E.MEGA_KICK = "Mega Kick", E.JUMP_KICK = "Jump Kick", E.ROLLING_KICK = "Rolling Kick", E.SANDATTACK = "Sand-Attack", E.HEADBUTT = "Headbutt", E.HORN_ATTACK = "Horn Attack", E.FURY_ATTACK = "Fury Attack", E.HORN_DRILL = "Horn Drill", E.TACKLE = "Tackle", E.BODY_SLAM = "Body Slam", E.WRAP = "Wrap", E.TAKE_DOWN = "Take Down", E.THRASH = "Thrash", E.DOUBLEEDGE = "Double-Edge", E.TAIL_WHIP = "Tail Whip", E.POISON_STING = "Poison Sting", E.TWINEEDLE = "Twineedle", E.PIN_MISSILE = "Pin Missile", E.LEER = "Leer", E.BITE = "Bite", E.GROWL = "Growl", E.ROAR = "Roar", E.SING = "Sing", E.SUPERSONIC = "Supersonic", E.SONICBOOM = "SonicBoom", E.DISABLE = "Disable", E.ACID = "Acid", E.EMBER = "Ember", E.FLAMETHROWER = "Flamethrower", E.MIST = "Mist", E.WATER_GUN = "Water Gun", E.HYDRO_PUMP = "Hydro Pump", E.SURF = "Surf", E.ICE_BEAM = "Ice Beam", E.BLIZZARD = "Blizzard", E.PSYBEAM = "Psybeam", E.BUBBLEBEAM = "BubbleBeam", E.AURORA_BEAM = "Aurora Beam", E.HYPER_BEAM = "Hyper Beam", E.PECK = "Peck", E.DRILL_PECK = "Drill Peck", E.SUBMISSION = "Submission", E.LOW_KICK = "Low Kick", E.COUNTER = "Counter", E.SEISMIC_TOSS = "Seismic Toss", E.STRENGTH = "Strength", E.ABSORB = "Absorb", E.MEGA_DRAIN = "Mega Drain", E.LEECH_SEED = "Leech Seed", E.GROWTH = "Growth", E.RAZOR_LEAF = "Razor Leaf", E.SOLARBEAM = "SolarBeam", E.POISONPOWDER = "PoisonPowder", E.STUN_SPORE = "Stun Spore", E.SLEEP_POWDER = "Sleep Powder", E.PETAL_DANCE = "Petal Dance", E.STRING_SHOT = "String Shot", E.DRAGON_RAGE = "Dragon Rage", E.FIRE_SPIN = "Fire Spin", E.THUNDERSHOCK = "Thundershock", E.THUNDERBOLT = "Thunderbolt", E.THUNDER_WAVE = "Thunder Wave", E.THUNDER = "Thunder", E.ROCK_THROW = "Rock Throw", E.EARTHQUAKE = "Earthquake", E.FISSURE = "Fissure", E.DIG = "Dig", E.TOXIC = "Toxic", E.CONFUSION = "Confusion", E.PSYCHIC = "Psychic", E.HYPNOSIS = "Hypnosis", E.MEDITATE = "Meditate", E.AGILITY = "Agility", E.QUICK_ATTACK = "Quick Attack", E.RAGE = "Rage", E.TELEPORT = "Teleport", E.NIGHT_SHADE = "Night Shade", E.MIMIC = "Mimic", E.SCREECH = "Screech", E.DOUBLE_TEAM = "Double Team", E.RECOVER = "Recover", E.HARDEN = "Harden", E.MINIMIZE = "Minimize", E.SMOKESCREEN = "Smokescreen", E.CONFUSE_RAY = "Confuse Ray", E.WITHDRAW = "Withdraw", E.DEFENSE_CURL = "Defense Curl", E.BARRIER = "Barrier", E.LIGHT_SCREEN = "Light Screen", E.HAZE = "Haze", E.REFLECT = "Reflect", E.FOCUS_ENERGY = "Focus Energy", E.BIDE = "Bide", E.METRONOME = "Metronome", E.MIRROR_MOVE = "Mirror Move", E.SELFDESTRUCT = "Selfdestruct", E.EGG_BOMB = "Egg Bomb", E.LICK = "Lick", E.SMOG = "Smog", E.SLUDGE = "Sludge", E.BONE_CLUB = "Bone Club", E.FIRE_BLAST = "Fire Blast", E.WATERFALL = "Waterfall", E.CLAMP = "Clamp", E.SWIFT = "Swift", E.SKULL_BASH = "Skull Bash", E.SPIKE_CANNON = "Spike Cannon", E.CONSTRICT = "Constrict", E.AMNESIA = "Amnesia", E.KINESIS = "Kinesis", E.SOFTBOILED = "Softboiled", E.HI_JUMP_KICK = "Hi Jump Kick", E.GLARE = "Glare", E.DREAM_EATER = "Dream Eater", E.POISON_GAS = "Poison Gas", E.BARRAGE = "Barrage", E.LEECH_LIFE = "Leech Life", E.LOVELY_KISS = "Lovely Kiss", E.SKY_ATTACK = "Sky Attack", E.TRANSFORM = "Transform", E.BUBBLE = "Bubble", E.DIZZY_PUNCH = "Dizzy Punch", E.SPORE = "Spore", E.FLASH = "Flash", E.PSYWAVE = "Psywave", E.SPLASH = "Splash", E.ACID_ARMOR = "Acid Armor", E.CRABHAMMER = "Crabhammer", E.EXPLOSION = "Explosion", E.FURY_SWIPES = "Fury Swipes", E.BONEMERANG = "Bonemerang", E.REST = "Rest", E.ROCK_SLIDE = "Rock Slide", E.HYPER_FANG = "Hyper Fang", E.SHARPEN = "Sharpen", E.CONVERSION = "Conversion", E.TRI_ATTACK = "Tri Attack", E.SUPER_FANG = "Super Fang", E.SLASH = "Slash", E.SUBSTITUTE = "Substitute", E.STRUGGLE = "Struggle";
})(M || (M = {}));
var Z;
(function(E) {
  E.MASTER_BALL = "MASTER BALL", E.ULTRA_BALL = "ULTRA BALL", E.GREAT_BALL = "GREAT BALL", E.POKÉ_BALL = "POKé BALL", E.TOWN_MAP = "TOWN MAP", E.BICYCLE = "BICYCLE", E.SAFARI_BALL = "SAFARI BALL", E.POKÉDEX = "POKéDEX", E.MOON_STONE = "MOON STONE", E.ANTIDOTE = "ANTIDOTE", E.BURN_HEAL = "BURN HEAL", E.ICE_HEAL = "ICE HEAL", E.AWAKENING = "AWAKENING", E.PARLYZ_HEAL = "PARLYZ HEAL", E.FULL_RESTORE = "FULL RESTORE", E.MAX_POTION = "MAX POTION", E.HYPER_POTION = "HYPER POTION", E.SUPER_POTION = "SUPER POTION", E.POTION = "POTION", E.BOULDERBADGE = "BOULDERBADGE", E.CASCADEBADGE = "CASCADEBADGE", E.THUNDERBADGE = "THUNDERBADGE", E.RAINBOWBADGE = "RAINBOWBADGE", E.SOULBADGE = "SOULBADGE", E.MARSHBADGE = "MARSHBADGE", E.VOLCANOBADGE = "VOLCANOBADGE", E.EARTHBADGE = "EARTHBADGE", E.ESCAPE_ROPE = "ESCAPE ROPE", E.REPEL = "REPEL", E.OLD_AMBER = "OLD AMBER", E.FIRE_STONE = "FIRE STONE", E.THUNDERSTONE = "THUNDERSTONE", E.WATER_STONE = "WATER STONE", E.HP_UP = "HP UP", E.PROTEIN = "PROTEIN", E.IRON = "IRON", E.CARBOS = "CARBOS", E.CALCIUM = "CALCIUM", E.RARE_CANDY = "RARE CANDY", E.DOME_FOSSIL = "DOME FOSSIL", E.HELIX_FOSSIL = "HELIX FOSSIL", E.SECRET_KEY = "SECRET KEY", E.BIKE_VOUCHER = "BIKE VOUCHER", E.X_ACCURACY = "X ACCURACY", E.LEAF_STONE = "LEAF STONE", E.CARD_KEY = "CARD KEY", E.NUGGET = "NUGGET", E.PP_UP = "PP UP", E.POKÉ_DOLL = "POKé DOLL", E.FULL_HEAL = "FULL HEAL", E.REVIVE = "REVIVE", E.MAX_REVIVE = "MAX REVIVE", E.GUARD_SPEC = "GUARD SPEC.", E.SUPER_REPEL = "SUPER REPEL", E.MAX_REPEL = "MAX REPEL", E.DIRE_HIT = "DIRE HIT", E.COIN = "COIN", E.FRESH_WATER = "FRESH WATER", E.SODA_POP = "SODA POP", E.LEMONADE = "LEMONADE", E.SSTICKET = "S.S.TICKET", E.GOLD_TEETH = "GOLD TEETH", E.X_ATTACK = "X ATTACK", E.X_DEFEND = "X DEFEND", E.X_SPEED = "X SPEED", E.X_SPECIAL = "X SPECIAL", E.COIN_CASE = "COIN CASE", E.OAKS_PARCEL = "OAK's PARCEL", E.ITEMFINDER = "ITEMFINDER", E.SILPH_SCOPE = "SILPH SCOPE", E.POKÉ_FLUTE = "POKé FLUTE", E.LIFT_KEY = "LIFT KEY", E.EXPALL = "EXP.ALL", E.OLD_ROD = "OLD ROD", E.GOOD_ROD = "GOOD ROD", E.SUPER_ROD = "SUPER ROD", E.ETHER = "ETHER", E.MAX_ETHER = "MAX ETHER", E.ELIXER = "ELIXER", E.MAX_ELIXER = "MAX ELIXER", E.HM01_CUT = "HM01: Cut", E.HM02_FLY = "HM02: Fly", E.HM03_SURF = "HM03: Surf", E.HM04_STRENGTH = "HM04: Strength", E.HM05_FLASH = "HM05: Flash", E.TM01_MEGA_PUNCH = "TM01: Mega Punch", E.TM02_RAZOR_WIND = "TM02: Razor Wind", E.TM03_SWORDS_DANCE = "TM03: Swords Dance", E.TM04_WHIRLWIND = "TM04: Whirlwind", E.TM05_MEGA_KICK = "TM05: Mega Kick", E.TM06_TOXIC = "TM06: Toxic", E.TM07_HORN_DRILL = "TM07: Horn Drill", E.TM08_BODY_SLAM = "TM08: Body Slam", E.TM09_TAKE_DOWN = "TM09: Take Down", E.TM10_DOUBLEEDGE = "TM10: Double-Edge", E.TM11_BUBBLEBEAM = "TM11: BubbleBeam", E.TM12_WATER_GUN = "TM12: Water Gun", E.TM13_ICE_BEAM = "TM13: Ice Beam", E.TM14_BLIZZARD = "TM14: Blizzard", E.TM15_HYPER_BEAM = "TM15: Hyper Beam", E.TM16_PAY_DAY = "TM16: Pay Day", E.TM17_SUBMISSION = "TM17: Submission", E.TM18_COUNTER = "TM18: Counter", E.TM19_SEISMIC_TOSS = "TM19: Seismic Toss", E.TM20_RAGE = "TM20: Rage", E.TM21_MEGA_DRAIN = "TM21: Mega Drain", E.TM22_SOLARBEAM = "TM22: SolarBeam", E.TM23_DRAGON_RAGE = "TM23: Dragon Rage", E.TM24_THUNDERBOLT = "TM24: Thunderbolt", E.TM25_THUNDER = "TM25: Thunder", E.TM26_EARTHQUAKE = "TM26: Earthquake", E.TM27_FISSURE = "TM27: Fissure", E.TM28_DIG = "TM28: Dig", E.TM29_PSYCHIC = "TM29: Psychic", E.TM30_TELEPORT = "TM30: Teleport", E.TM31_MIMIC = "TM31: Mimic", E.TM32_DOUBLE_TEAM = "TM32: Double Team", E.TM33_REFLECT = "TM33: Reflect", E.TM34_BIDE = "TM34: Bide", E.TM35_METRONOME = "TM35: Metronome", E.TM36_SELFDESTRUCT = "TM36: Selfdestruct", E.TM37_EGG_BOMB = "TM37: Egg Bomb", E.TM38_FIRE_BLAST = "TM38: Fire Blast", E.TM39_SWIFT = "TM39: Swift", E.TM40_SKULL_BASH = "TM40: Skull Bash", E.TM41_SOFTBOILED = "TM41: Softboiled", E.TM42_DREAM_EATER = "TM42: Dream Eater", E.TM43_SKY_ATTACK = "TM43: Sky Attack", E.TM44_REST = "TM44: Rest", E.TM45_THUNDER_WAVE = "TM45: Thunder Wave", E.TM46_PSYWAVE = "TM46: Psywave", E.TM47_EXPLOSION = "TM47: Explosion", E.TM48_ROCK_SLIDE = "TM48: Rock Slide", E.TM49_TRI_ATTACK = "TM49: Tri Attack", E.TM50_SUBSTITUTE = "TM50: Substitute";
})(Z || (Z = {}));
var X;
(function(E) {
  E.RHYDON = "Rhydon", E.KANGASKHAN = "Kangaskhan", E.NIDORANM = "Nidoran-M", E.CLEFAIRY = "Clefairy", E.SPEAROW = "Spearow", E.VOLTORB = "Voltorb", E.NIDOKING = "Nidoking", E.SLOWBRO = "Slowbro", E.IVYSAUR = "Ivysaur", E.EXEGGUTOR = "Exeggutor", E.LICKITUNG = "Lickitung", E.EXEGGCUTE = "Exeggcute", E.GRIMER = "Grimer", E.GENGAR = "Gengar", E.NIDORANF = "Nidoran-F", E.NIDOQUEEN = "Nidoqueen", E.CUBONE = "Cubone", E.RHYHORN = "Rhyhorn", E.LAPRAS = "Lapras", E.ARCANINE = "Arcanine", E.MEW = "Mew", E.GYARADOS = "Gyarados", E.SHELLDER = "Shellder", E.TENTACOOL = "Tentacool", E.GASTLY = "Gastly", E.SCYTHER = "Scyther", E.STARYU = "Staryu", E.BLASTOISE = "Blastoise", E.PINSIR = "Pinsir", E.TANGELA = "Tangela", E.GROWLITHE = "Growlithe", E.ONIX = "Onix", E.FEAROW = "Fearow", E.PIDGEY = "Pidgey", E.SLOWPOKE = "Slowpoke", E.KADABRA = "Kadabra", E.GRAVELER = "Graveler", E.CHANSEY = "Chansey", E.MACHOKE = "Machoke", E.MR_MIME = "Mr. Mime", E.HITMONLEE = "Hitmonlee", E.HITMONCHAN = "Hitmonchan", E.ARBOK = "Arbok", E.PARASECT = "Parasect", E.PSYDUCK = "Psyduck", E.DROWZEE = "Drowzee", E.GOLEM = "Golem", E.MAGMAR = "Magmar", E.ELECTABUZZ = "Electabuzz", E.MAGNETON = "Magneton", E.KOFFING = "Koffing", E.MANKEY = "Mankey", E.SEEL = "Seel", E.DIGLETT = "Diglett", E.TAUROS = "Tauros", E.FARFETCHD = "Farfetch'd", E.VENONAT = "Venonat", E.DRAGONITE = "Dragonite", E.DODUO = "Doduo", E.POLIWAG = "Poliwag", E.JYNX = "Jynx", E.MOLTRES = "Moltres", E.ARTICUNO = "Articuno", E.ZAPDOS = "Zapdos", E.DITTO = "Ditto", E.MEOWTH = "Meowth", E.KRABBY = "Krabby", E.VULPIX = "Vulpix", E.NINETALES = "Ninetales", E.PIKACHU = "Pikachu", E.RAICHU = "Raichu", E.DRATINI = "Dratini", E.DRAGONAIR = "Dragonair", E.KABUTO = "Kabuto", E.KABUTOPS = "Kabutops", E.HORSEA = "Horsea", E.SEADRA = "Seadra", E.SANDSHREW = "Sandshrew", E.SANDSLASH = "Sandslash", E.OMANYTE = "Omanyte", E.OMASTAR = "Omastar", E.JIGGLYPUFF = "Jigglypuff", E.WIGGLYTUFF = "Wigglytuff", E.EEVEE = "Eevee", E.FLAREON = "Flareon", E.JOLTEON = "Jolteon", E.VAPOREON = "Vaporeon", E.MACHOP = "Machop", E.ZUBAT = "Zubat", E.EKANS = "Ekans", E.PARAS = "Paras", E.POLIWHIRL = "Poliwhirl", E.POLIWRATH = "Poliwrath", E.WEEDLE = "Weedle", E.KAKUNA = "Kakuna", E.BEEDRILL = "Beedrill", E.DODRIO = "Dodrio", E.PRIMEAPE = "Primeape", E.DUGTRIO = "Dugtrio", E.VENOMOTH = "Venomoth", E.DEWGONG = "Dewgong", E.CATERPIE = "Caterpie", E.METAPOD = "Metapod", E.BUTTERFREE = "Butterfree", E.MACHAMP = "Machamp", E.GOLDUCK = "Golduck", E.HYPNO = "Hypno", E.GOLBAT = "Golbat", E.MEWTWO = "Mewtwo", E.SNORLAX = "Snorlax", E.MAGIKARP = "Magikarp", E.MUK = "Muk", E.KINGLER = "Kingler", E.CLOYSTER = "Cloyster", E.ELECTRODE = "Electrode", E.CLEFABLE = "Clefable", E.WEEZING = "Weezing", E.PERSIAN = "Persian", E.MAROWAK = "Marowak", E.HAUNTER = "Haunter", E.ABRA = "Abra", E.ALAKAZAM = "Alakazam", E.PIDGEOTTO = "Pidgeotto", E.PIDGEOT = "Pidgeot", E.STARMIE = "Starmie", E.BULBASAUR = "Bulbasaur", E.VENUSAUR = "Venusaur", E.TENTACRUEL = "Tentacruel", E.GOLDEEN = "Goldeen", E.SEAKING = "Seaking", E.PONYTA = "Ponyta", E.RAPIDASH = "Rapidash", E.RATTATA = "Rattata", E.RATICATE = "Raticate", E.NIDORINO = "Nidorino", E.NIDORINA = "Nidorina", E.GEODUDE = "Geodude", E.PORYGON = "Porygon", E.AERODACTYL = "Aerodactyl", E.MAGNEMITE = "Magnemite", E.CHARMANDER = "Charmander", E.SQUIRTLE = "Squirtle", E.CHARMELEON = "Charmeleon", E.WARTORTLE = "Wartortle", E.CHARIZARD = "Charizard", E.ODDISH = "Oddish", E.GLOOM = "Gloom", E.VILEPLUME = "Vileplume", E.BELLSPROUT = "Bellsprout", E.WEEPINBELL = "Weepinbell", E.VICTREEBEL = "Victreebel";
})(X || (X = {}));
var x;
(function(E) {
  E.VALIDATE = "Validate", E.BUMP = "Bump", E.EXIT_OF_A_HOUSE = "Exit of a house", E.SAVE_GAME = "Save Game", E.POKÉFLUTE = "Pokéflute", E.DING_DONG = "Ding Dong", E.PALLETTOWN = "PalletTown", E.POKECENTER = "Pokecenter", E.GYM = "Gym", E.VIRIDIAN_CITY_PEWTER_CITY_SAFFRON_CITY = "Viridian City, Pewter City, Saffron City", E.CERULEAN_CITY_FUCHSIA_CITY = "Cerulean City, Fuchsia City", E.CELADON_CITY = "Celadon City", E.CINNABAR_CITY = "Cinnabar City", E.VERMILION_CITY = "Vermilion City", E.LAVENDER_TOWN = "Lavender Town", E.SS_ANNE = "SS Anne", E.MEET_OAK = "Meet Oak", E.MEET_BLUE = "Meet Blue", E.FOLLOW_ME = "Follow me", E.SAFARI_ZONE__EVOLUTION = "Safari Zone / Evolution", E.POKÉMON_HEALDING = "Pokémon Healding", E.ROAD_1_2 = "Road 1, 2", E.ROAD_24_25 = "Road 24, 25", E.ROAD_3_4_5_6_7_8_9_10_16_17_18_19_20_21_22 = "Road 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 21, 22", E.ROAD_11_12_13_14_15 = "Road 11, 12, 13, 14, 15", E.INDIGO_PLATEAU = "Indigo Plateau";
})(x || (x = {}));
var $;
(function(E) {
  E.PALLET_TOWN = "Pallet Town", E.VIRIDIAN_CITY = "Viridian City", E.PEWTER_CITY = "Pewter City", E.CERULEAN_CITY = "Cerulean City", E.LAVENDER_TOWN = "Lavender Town", E.VERMILION_CITY = "Vermilion City", E.CELADON_CITY = "Celadon City", E.FUCHSIA_CITY = "Fuchsia City", E.CINNABAR_ISLAND = "Cinnabar Island", E.INDIGO_PLATEAU = "Indigo Plateau", E.SAFFRON_CITY = "Saffron City", E.UNUSEDMAP0B = "UNUSED_MAP_0B", E.ROUTE_1 = "Route 1", E.ROUTE_2 = "Route 2", E.ROUTE_3 = "Route 3", E.ROUTE_4 = "Route 4", E.ROUTE_5 = "Route 5", E.ROUTE_6 = "Route 6", E.ROUTE_7 = "Route 7", E.ROUTE_8 = "Route 8", E.ROUTE_9 = "Route 9", E.ROUTE_10 = "Route 10", E.ROUTE_11 = "Route 11", E.ROUTE_12 = "Route 12", E.ROUTE_13 = "Route 13", E.ROUTE_14 = "Route 14", E.ROUTE_15 = "Route 15", E.ROUTE_16 = "Route 16", E.ROUTE_17 = "Route 17", E.ROUTE_18 = "Route 18", E.ROUTE_19 = "Route 19", E.ROUTE_20 = "Route 20", E.ROUTE_21 = "Route 21", E.ROUTE_22 = "Route 22", E.ROUTE_23 = "Route 23", E.ROUTE_24 = "Route 24", E.ROUTE_25 = "Route 25", E.PALLET_TOWN__REDS_HOUSE_1F = "Pallet Town - Red's House 1F", E.PALLET_TOWN__REDS_HOUSE_2F = "Pallet Town - Red's House 2F", E.PALLET_TOWN__BLUES_HOUSE = "Pallet Town - Blue's House", E.PALLET_TOWN__OAKS_LAB = "Pallet Town - Oak's Lab", E.VIRIDIAN_CITY__POKECENTER = "Viridian City - Pokecenter", E.VIRIDIAN_CITY__MART = "Viridian City - Mart", E.VIRIDIAN_CITY__SCHOOL = "Viridian City - School", E.VIRIDIAN_CITY__HOUSE = "Viridian City - House", E.VIRIDIAN_CITY__GYM = "Viridian City - Gym", E.DIGGLETS_CAVE__EXIT = "Digglet's Cave - Exit", E.VIRIDIAN_FOREST__EXIT = "Viridian Forest - Exit", E.ROUTE_2__HOUSE = "Route 2 - House", E.ROUTE_2__GATE = "Route 2 - Gate", E.VIRIDIAN_FOREST__ENTRANCE = "Viridian Forest - Entrance", E.VIRIDIAN_FOREST = "Viridian Forest", E.PEWTER_CITY__MUSEUM_1F = "Pewter City - Museum 1F", E.PEWTER_CITY__MUSEUM_2F = "Pewter City - Museum 2F", E.PEWTER_CITY__GYM = "Pewter City - Gym", E.PEWTER_CITY__HOUSE_1 = "Pewter City - House 1", E.PEWTER_CITY__MART = "Pewter City - Mart", E.PEWTER_CITY__HOUSE_2 = "Pewter City - House 2", E.PEWTER_CITY__POKECENTER = "Pewter City - Pokecenter", E.MT_MOON__1 = "Mt Moon - 1", E.MT_MOON__2 = "Mt Moon - 2", E.MT_MOON__3 = "Mt Moon - 3", E.CERULEAN_CITY__TRASHED_HOUSE = "Cerulean City - Trashed House", E.CERULEAN_CITY__HOUSE = "Cerulean City - House", E.CERULEAN_CITY__POKECENTER = "Cerulean City - Pokecenter", E.CERULEAN_CITY__GYM = "Cerulean City - Gym", E.CERULEAN_CITY__BIKE_SHOP = "Cerulean City - Bike Shop", E.CERULEAN_CITY__MART = "Cerulean City - Mart", E.ROUTE_4__MT_MOON_POKECENTER = "Route 4 - Mt. Moon Pokecenter", E.TRASHED_HOUSE_COPY = "Trashed House Copy", E.ROUTE_5__GATE = "Route 5 - Gate", E.ROUTE_5__PATH_ENTRANCE = "Route 5 - Path Entrance", E.POKÉMON_DAY_CARE = "Pokémon Day Care", E.ROUTE_6__GATE = "Route 6 - Gate", E.ROUTE_6__PATH_ENTRANCE = "Route 6 - Path Entrance", E.ROUTE_7__PATH_ENTRANCE_COPY = "Route 7 - Path Entrance Copy", E.ROUTE_7__GATE = "Route 7 - Gate", E.ROUTE_7__PATH_ENTRANCE = "Route 7 - Path Entrance", E.ROUTE_8__GATE = "Route 8 - Gate", E.ROUTE_8__PATH_ENTRANCE = "Route 8 - Path Entrance", E.ROCK_TUNNEL_POKECENTER = "Rock Tunnel Pokecenter", E.ROCK_TUNNEL__1 = "Rock Tunnel - 1", E.POWER_PLANT = "Power Plant", E.ROUTE_11__GATE_1F = "Route 11 - Gate 1F", E.DIGGLETS_CAVE__ENTRANCE = "Digglet's Cave - Entrance", E.ROUTE_11__GATE_2F = "Route 11 - Gate 2F", E.ROUTE_12__GATE_1F = "Route 12 - Gate 1F", E.BILLS_HOUSE = "Bill's House", E.VERMILION_CITY__POKECENTER = "Vermilion City - Pokecenter", E.VERMILION_CITY__POKEMON_FAN_CLUB = "Vermilion City - Pokemon Fan Club", E.VERMILION_CITY__MART = "Vermilion City - Mart", E.VERMILION_CITY__GYM = "Vermilion City - Gym", E.VERMILION_CITY__HOUSE_1 = "Vermilion City - House 1", E.VERMILION_DOCK = "Vermilion Dock", E.SS_ANNE = "SS Anne", E.UNUSEDMAP69 = "UNUSED_MAP_69", E.UNUSEDMAP6A = "UNUSED_MAP_6A", E.UNUSEDMAP6B = "UNUSED_MAP_6B", E.VICTORY_ROAD = "Victory Road", E.UNUSEDMAP6D = "UNUSED_MAP_6D", E.UNUSEDMAP6E = "UNUSED_MAP_6E", E.UNUSEDMAP6F = "UNUSED_MAP_6F", E.UNUSEDMAP70 = "UNUSED_MAP_70", E.LANCES_ROOM = "Lance's Room", E.UNUSEDMAP72 = "UNUSED_MAP_72", E.UNUSEDMAP73 = "UNUSED_MAP_73", E.UNUSEDMAP74 = "UNUSED_MAP_74", E.UNUSEDMAP75 = "UNUSED_MAP_75", E.HALL_OF_FAME = "Hall of Fame", E.UNDERGROUND_PATH = "Underground Path", E.CHAMPIONS_ROOM = "Champions Room", E.CELADON_CITY__DEPARTMENT_STORE__1F = "Celadon City - Department Store - 1F", E.CELADON_CITY__DEPARTMENT_STORE__2F = "Celadon City - Department Store - 2F", E.CELADON_CITY__DEPARTMENT_STORE__3F = "Celadon City - Department Store - 3F", E.CELADON_CITY__DEPARTMENT_STORE__4F = "Celadon City - Department Store - 4F", E.CELADON_CITY__DEPARTMENT_STORE__ROOF = "Celadon City - Department Store - Roof", E.CELADON_CITY__DEPARTMENT_STORE__ELEVATOR = "Celadon City - Department Store - Elevator", E.CELADON_CITY__MANSION__1F = "Celadon City - Mansion - 1F", E.CELADON_CITY__MANSION__2F = "Celadon City - Mansion - 2F", E.CELADON_CITY__MANSION__3F = "Celadon City - Mansion - 3F", E.CELADON_CITY__MANSION__4F = "Celadon City - Mansion - 4F", E.CELADON_CITY__MANSION__5F = "Celadon City - Mansion - 5F", E.CELADON_CITY__POKECENTER = "Celadon City - Pokecenter", E.CELADON_CITY__GYM = "Celadon City - Gym", E.CELADON_CITY__GAME_CORNER = "Celadon City - Game Corner", E.CELADON_CITY__DEPARTMENT_STORE__5F = "Celadon City - Department Store - 5F", E.CELADON_CITY__PRIZE_HOUSE = "Celadon City - Prize House", E.CELADON_CITY__DINER = "Celadon City - Diner", E.CELADON_CITY__HOUSE = "Celadon City - House", E.CELADON_CITY__HOTEL = "Celadon City - Hotel", E.LAVENDER_TOWN__POKECENTER = "Lavender Town - Pokecenter", E.POKEMON_TOWER__1F = "Pokemon Tower - 1F", E.POKEMON_TOWER__2F = "Pokemon Tower - 2F", E.POKEMON_TOWER__3F = "Pokemon Tower - 3F", E.POKEMON_TOWER__4F = "Pokemon Tower - 4F", E.POKEMON_TOWER__5F = "Pokemon Tower - 5F", E.POKEMON_TOWER__6F = "Pokemon Tower - 6F", E.POKEMON_TOWER__7F = "Pokemon Tower - 7F", E.LAVENDER_TOWN__HOUSE_1 = "Lavender Town - House 1", E.LAVENDER_TOWN__MART = "Lavender Town - Mart", E.LAVENDER_TOWN__HOUSE_2 = "Lavender Town - House 2", E.FUCHSIA_CITY__MART = "Fuchsia City - Mart", E.FUCHSIA_CITY__HOUSE_1 = "Fuchsia City - House 1", E.FUCHSIA_CITY__POKECENTER = "Fuchsia City - Pokecenter", E.FUCHSIA_CITY__HOUSE_2 = "Fuchsia City - House 2", E.SAFARI_ZONE__ENTRANCE = "Safari Zone - Entrance", E.FUCHSIA_CITY__GYM = "Fuchsia City - Gym", E.FUCHSIA_CITY__MEETING_ROOM = "Fuchsia City - Meeting Room", E.SEAFOAM_ISLANDS = "Seafoam Islands", E.VERMILION_CITY__HOUSE_2 = "Vermilion City - House 2", E.FUCHSIA_CITY__HOUSE_3 = "Fuchsia City - House 3", E.CINNABAR_MANSION = "Cinnabar Mansion", E.CINNABAR_ISLAND__GYM = "Cinnabar Island - Gym", E.CINNABAR_ISLAND__LAB = "Cinnabar Island - Lab", E.CINNABAR_ISLAND__POKECENTER = "Cinnabar Island - Pokecenter", E.CINNABAR_ISLAND__MART = "Cinnabar Island - Mart", E.CINNABARMARTCOPY = "CINNABAR_MART_COPY", E.INDIGO_PLATEAU__LOBBY = "Indigo Plateau - Lobby", E.SAFFRON_CITY__COPYCATS_HOUSE__1F = "Saffron City - Copycat's House - 1F", E.SAFFRON_CITY__COPYCATS_HOUSE__2F = "Saffron City - Copycat's House - 2F", E.SAFFRON_CITY__FIGHTING_DOJO = "Saffron City - Fighting Dojo", E.SAFFRON_CITY__GYM = "Saffron City - Gym", E.SAFFRON_CITY__HOUSE_1 = "Saffron City - House 1", E.SAFFRON_CITY__MART = "Saffron City - Mart", E.SILPH_CO__1F = "Silph Co - 1F", E.SAFFRON_CITY__POKECENTER = "Saffron City - Pokecenter", E.SAFFRON_CITY__HOUSE_2 = "Saffron City - House 2", E.ROUTE_15__GATE__1F = "Route 15 - Gate - 1F", E.ROUTE_15__GATE__2F = "Route 15 - Gate  -2F", E.ROUTE_16__GATE__1F = "Route 16 - Gate - 1F", E.ROUTE_16__GATE__2F = "Route 16 - Gate - 2F", E.ROUTE_16__HOUSE = "Route 16 - House", E.ROUTE_12__HOUSE = "Route 12 - House", E.ROUTE_18__GATE__1F = "Route 18 - Gate - 1F", E.ROUTE_18__GATE__2F = "Route 18 - Gate - 2F", E.ROUTE_22__GATE = "Route 22 - Gate", E.ROUTE_12__GATE__2F = "Route 12 - Gate - 2F", E.VERMILION_CITY__HOUSE_3 = "Vermilion City - House 3", E.DIGGLETS_CAVE = "Digglet's Cave", E.ROCKET_HIDEOUT_1 = "Rocket Hideout 1", E.ROCKET_HIDEOUT_2 = "Rocket Hideout 2", E.ROCKET_HIDEOUT_3 = "Rocket Hideout 3", E.ROCKET_HIDEOUT_4 = "Rocket Hideout 4", E.ROCKET_HIDEOUT__ELEVATOR = "Rocket Hideout - Elevator", E.UNUSEDMAPCC = "UNUSED_MAP_CC", E.UNUSEDMAPCD = "UNUSED_MAP_CD", E.UNUSEDMAPCE = "UNUSED_MAP_CE", E.SILPH_CO__2F = "Silph Co - 2F", E.SILPH_CO__3F = "Silph Co - 3F", E.SILPH_CO__4F = "Silph Co - 4F", E.SILPH_CO__5F = "Silph Co - 5F", E.SILPH_CO__6F = "Silph Co - 6F", E.SILPH_CO__7F = "Silph Co - 7F", E.SILPH_CO__8F = "Silph Co - 8F", E.SAFARI_ZONE_EAST = "Safari Zone (East)", E.SAFARI_ZONE_NORTH = "Safari Zone (North)", E.SAFARI_ZONE_WEST = "Safari Zone (West)", E.SAFARI_ZONE_CENTER = "Safari Zone (Center)", E.SAFARI_ZONE__REST_HOUSE_1 = "Safari Zone - Rest House 1", E.SAFARI_ZONE__SECRET_HOUSE = "Safari Zone - Secret House", E.SAFARI_ZONE__REST_HOUSE_2 = "Safari Zone - Rest House 2", E.SAFARI_ZONE__REST_HOUSE_3 = "Safari Zone - Rest House 3", E.SAFARI_ZONE__REST_HOUSE_4 = "Safari Zone - Rest House 4", E.UNKNOWN_DUNGEON = "Unknown Dungeon", E.LAVENDER_TOWN__NAME_RATERS_HOUSE = "Lavender Town - Name Rater's House", E.CERULEAN_CITY__HOUSE_3 = "Cerulean City - House 3", E.UNUSEDMAPE7 = "UNUSED_MAP_E7", E.ROCK_TUNNEL = "Rock Tunnel", E.SILPH_CO__9F = "Silph Co - 9F", E.SILPH_CO__10F = "Silph Co - 10F", E.SILPH_CO__11F = "Silph Co - 11F", E.SILPH_CO__ELEVATOR = "Silph Co - Elevator", E.UNUSEDMAPED = "UNUSED_MAP_ED", E.UNUSEDMAPEE = "UNUSED_MAP_EE", E.TRADE_CENTER = "Trade Center", E.COLOSSEUM = "Colosseum", E.UNUSEDMAPF1 = "UNUSED_MAP_F1", E.UNUSEDMAPF2 = "UNUSED_MAP_F2", E.UNUSEDMAPF3 = "UNUSED_MAP_F3", E.UNUSEDMAPF4 = "UNUSED_MAP_F4", E.LORELEIS_ROOM = "Lorelei's Room", E.BRUNOS_ROOM = "Bruno's Room", E.AGATHAS_ROOM = "Agatha's Room", E.UNKNOWN = "UNKNOWN";
})($ || ($ = {}));
class NE {
}
const nE = { class: "float-end" }, CE = { class: "d-flex" }, aE = ["src"], lE = {
  class: "flex-grow-1 d-flex flex-wrap",
  style: { "margin-left": "6em", "margin-top": "0.35em" }
}, eE = { class: "w-50 pt-2 fs-5" }, uE = /* @__PURE__ */ i({
  __name: "PokemonInParty",
  props: {
    pokemon: { type: NE, required: !0 },
    border: { type: Boolean, required: !1, default: !0 },
    title: { type: String, required: !1 }
  },
  setup(E) {
    const O = E, _ = l(() => {
      var N, A;
      return ((A = (N = O.pokemon) == null ? void 0 : N.pokedexNumber) == null ? void 0 : A.value) > 0;
    }), C = l(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${O.pokemon.pokedexNumber.value}.png`), a = l(() => ({
      transform: "scaleX(-1)",
      position: "absolute",
      marginLeft: "-40px",
      marginTop: "-25px",
      width: "156px",
      height: "156px"
    }));
    return (N, A) => _.value ? (n(), o(I, {
      key: 0,
      show: E.border
    }, {
      header: L(() => [
        T("span", null, S(E.pokemon.nickname ?? E.pokemon.species), 1),
        T("span", nE, "Lv. " + S(E.pokemon.level), 1)
      ]),
      default: L(() => [
        T("div", CE, [
          T("div", null, [
            T("img", {
              class: "image-sprite",
              src: C.value,
              style: J(a.value)
            }, null, 12, aE)
          ]),
          T("div", lE, [
            (n(!0), e(d, null, H(E.pokemon.moves, (t) => {
              var R;
              return n(), e("div", eE, S(((R = t.move) == null ? void 0 : R.value) ?? "---"), 1);
            }), 256))
          ])
        ])
      ]),
      _: 1
    }, 8, ["show"])) : U("", !0);
  }
}), cE = {
  title: "Widgets/Pokemon/Pokemon In Party",
  component: uE,
  tags: ["autodocs"],
  argTypes: {}
}, SE = { class: "font-monospace text-center" }, LE = { class: "display-3" }, iE = /* @__PURE__ */ T("span", { class: "display-5" }, ".", -1), IE = { class: "display-5" }, DE = /* @__PURE__ */ T("span", { class: "display-5" }, ".", -1), UE = { class: "display-5" }, oE = /* @__PURE__ */ i({
  __name: "TimePlayed",
  props: {
    mapper: { required: !0 },
    border: { type: Boolean, required: !1, default: !0 },
    title: { type: String, required: !1 }
  },
  setup(E) {
    const O = E, _ = O.mapper, C = l(() => {
      var R, r;
      return ((r = (R = _ == null ? void 0 : _.gameTime) == null ? void 0 : R.frames) == null ? void 0 : r.value) > 0;
    }), a = l(() => _.gameTime.hours.value), N = l(() => _.gameTime.minutes.value), A = l(() => _.gameTime.seconds.value), t = (R) => {
      var r;
      return ((r = R == null ? void 0 : R.toString()) == null ? void 0 : r.padStart(2, "0")) ?? "";
    };
    return (R, r) => C.value ? (n(), o(I, {
      key: 0,
      show: E.border,
      title: O.title ?? "Time Played"
    }, {
      default: L(() => [
        T("div", SE, [
          T("span", LE, S(t(a.value)), 1),
          iE,
          T("span", IE, S(t(N.value)), 1),
          DE,
          T("span", UE, S(t(A.value)), 1)
        ])
      ]),
      _: 1
    }, 8, ["show", "title"])) : U("", !0);
  }
}), hE = {
  title: "Widgets/Pokemon/Time Played",
  component: oE,
  tags: ["autodocs"],
  argTypes: {}
}, dE = { class: "d-flex justify-content-center" }, HE = ["src"], FE = /* @__PURE__ */ i({
  __name: "WildEncounters",
  props: {
    mapper: { required: !0 },
    border: { type: Boolean, required: !1, default: !0 },
    title: { type: String, required: !1 }
  },
  setup(E) {
    const O = E, _ = O.mapper, C = l(() => {
      var A, t, R, r, u, D, F;
      return !((t = (A = _ == null ? void 0 : _.game) == null ? void 0 : A.generation) != null && t.value) || ((r = (R = _ == null ? void 0 : _.game) == null ? void 0 : R.generation) == null ? void 0 : r.value) == 2 ? !1 : ((u = a == null ? void 0 : a.value) == null ? void 0 : u.length) > 0 && ((F = (D = _ == null ? void 0 : _.overworld) == null ? void 0 : D.encounterRate) == null ? void 0 : F.value) > 0;
    }), a = l(() => {
      let A = [
        ..._.overworld.encounters.common,
        ..._.overworld.encounters.uncommon,
        ..._.overworld.encounters.rare
      ].map((R) => R.species.value.toLowerCase()).filter((R) => R != ""), t = new Set(A);
      return Array.from(t);
    }), N = (A) => `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${A}.png`;
    return (A, t) => C.value ? (n(), o(I, {
      key: 0,
      show: O.border,
      title: O.title ?? `Wild Encounters for ${q(_).overworld.map.value}`
    }, {
      default: L(() => [
        T("div", dE, [
          (n(!0), e(d, null, H(a.value, (R) => (n(), e("div", null, [
            T("img", {
              class: "img-sprite",
              src: N(R)
            }, null, 8, HE)
          ]))), 256))
        ])
      ]),
      _: 1
    }, 8, ["show", "title"])) : U("", !0);
  }
}), KE = {
  title: "Widgets/Pokemon/Wild Encounters",
  component: FE,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "⚠️ This component is not yet available for Generation 2 games."
      }
    }
  }
};
export {
  GE as Border,
  BE as PokemonBadges,
  gE as PokemonEnemyTeam,
  cE as PokemonInParty,
  yE as PokemonMovepool,
  hE as PokemonTimePlayed,
  KE as PokemonWildEncounters
};
