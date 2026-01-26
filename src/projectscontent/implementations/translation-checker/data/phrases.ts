export type Phrase = {
  id: string;
  english: string;
  japanese: string;
  romaji: string;
  level: "N5" | "N4" | "N3";
  tags: string[];
  explanation: string;
};

// frases
export const phrases: Phrase[] = [
  {
    id: "p1",
    english: "I think it's quite interesting.",
    japanese: "これは結構面白いと思う。",
    romaji: "kore wa kekkou omoshiroi to omou",
    level: "N4",
    tags: ["opinion", "thinking"],
    explanation: "～と思う is used to express personal opinions or thoughts.",
  },
  {
    id: "p2",
    english: "I think this is very useful.",
    japanese: "これはとても役に立つと思います。",
    romaji: "kore wa totemo yaku ni tatsu to omoimasu",
    level: "N4",
    tags: ["opinion", "polite"],
    explanation:
      "～と思います is the polite form, often used in neutral or formal situations.",
  },
  {
    id: "p3",
    english: "I like Japanese food.",
    japanese: "私は日本の食べ物が好きです。",
    romaji: "watashi wa nihon no tabemono ga suki desu",
    level: "N5",
    tags: ["likes", "food"],
    explanation: "～が好きです is used to express likes or preferences.",
  },
  {
    id: "p4",
    english: "I study Japanese every day.",
    japanese: "私は毎日日本語を勉強します。",
    romaji: "watashi wa mainichi nihongo o benkyou shimasu",
    level: "N5",
    tags: ["daily", "study"],
    explanation:
      "～を勉強します is a common verb phrase for studying a subject.",
  },
  {
    id: "p5",
    english: "I think this book is interesting.",
    japanese: "この本は面白いと思います。",
    romaji: "kono hon wa omoshiroi to omoimasu",
    level: "N4",
    tags: ["opinion", "thinking"],
    explanation: "～と思います is used to politely express one's opinion.",
  },
  {
    id: "p6",
    english: "Tomorrow I will go to Tokyo.",
    japanese: "明日東京へ行きます。",
    romaji: "ashita toukyou e ikimasu",
    level: "N5",
    tags: ["future", "movement"],
    explanation: "～へ行きます indicates direction or destination.",
  },
  {
    id: "p7",
    english: "I want to buy this dictionary.",
    japanese: "この辞書を買いたいです。",
    romaji: "kono jisho o kaitai desu",
    level: "N5",
    tags: ["desire", "shopping"],
    explanation: "～たいです is used to express desire to do something.",
  },
  {
    id: "p8",
    english: "It was very cold yesterday.",
    japanese: "昨日はとても寒かったです。",
    romaji: "kinou wa totemo samukatta desu",
    level: "N5",
    tags: ["past", "weather"],
    explanation: "Adjectives in past tense end with ～かったです.",
  },
  {
    id: "p9",
    english: "I think studying alone is difficult.",
    japanese: "一人で勉強するのは難しいと思います。",
    romaji: "hitori de benkyou suru no wa muzukashii to omoimasu",
    level: "N4",
    tags: ["opinion", "difficulty"],
    explanation: "～のは is used to nominalize a verb phrase.",
  },
  {
    id: "p10",
    english: "I often listen to Japanese music.",
    japanese: "私はよく日本の音楽を聞きます。",
    romaji: "watashi wa yoku nihon no ongaku o kikimasu",
    level: "N5",
    tags: ["habit", "music"],
    explanation: "～よく indicates frequency (often).",
  },
  {
    id: "p11",
    english: "I think this problem is easy.",
    japanese: "この問題は簡単だと思います。",
    romaji: "kono mondai wa kantan da to omoimasu",
    level: "N4",
    tags: ["opinion", "evaluation"],
    explanation: "Na-adjectives use ～だ before ～と思います.",
  },
  {
    id: "p12",
    english: "I want to be able to speak Japanese well.",
    japanese: "日本語が上手に話せるようになりたいです。",
    romaji: "nihongo ga jouzu ni hanaseru you ni naritai desu",
    level: "N4",
    tags: ["desire", "ability"],
    explanation: "～ようになりたい expresses desire for a change or ability.",
  },
];
