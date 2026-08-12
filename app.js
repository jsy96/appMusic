// 应用版本号：每次代码改动后递增（v主.次.YYMMDD-当日序号；同一天改 +1，跨天更新日期并把序号重置为 1）
const APP_VERSION = 'v1.0.260812-3';

const NOTES = [
  { name: 'C', jianpu: '1', frequency: 261.63 },
  { name: 'C# / Db', jianpu: '#1 / b2', frequency: 277.18 },
  { name: 'D', jianpu: '2', frequency: 293.66 },
  { name: 'D# / Eb', jianpu: '#2 / b3', frequency: 311.13 },
  { name: 'E', jianpu: '3', frequency: 329.63 },
  { name: 'F', jianpu: '4', frequency: 349.23 },
  { name: 'F# / Gb', jianpu: '#4 / b5', frequency: 369.99 },
  { name: 'G', jianpu: '5', frequency: 392.00 },
  { name: 'G# / Ab', jianpu: '#5 / b6', frequency: 415.30 },
  { name: 'A', jianpu: '6', frequency: 440.00 },
  { name: 'A# / Bb', jianpu: '#6 / b7', frequency: 466.16 },
  { name: 'B', jianpu: '7', frequency: 493.88 }
];

const CHORD_TYPES = [
  { label: '大三和弦', symbol: '', intervals: [0, 4, 7], mood: { tension: 0.14, brightness: 0.86 } },
  { label: '小三和弦', symbol: 'm', intervals: [0, 3, 7], mood: { tension: 0.34, brightness: 0.22 } },
  { label: '减三和弦', symbol: 'dim', intervals: [0, 3, 6], mood: { tension: 0.92, brightness: 0.12 } },
  { label: '增三和弦', symbol: 'aug', intervals: [0, 4, 8], mood: { tension: 0.86, brightness: 0.58 } },
  { label: '挂四和弦', symbol: 'sus4', intervals: [0, 5, 7], mood: { tension: 0.58, brightness: 0.54 } },
  { label: '挂二和弦', symbol: 'sus2', intervals: [0, 2, 7], mood: { tension: 0.35, brightness: 0.74 } },
  { label: '属七和弦', symbol: '7', intervals: [0, 4, 7, 10], mood: { tension: 0.72, brightness: 0.56 } },
  { label: '大七和弦', symbol: 'maj7', intervals: [0, 4, 7, 11], mood: { tension: 0.26, brightness: 0.8 } },
  { label: '小七和弦', symbol: 'm7', intervals: [0, 3, 7, 10], mood: { tension: 0.42, brightness: 0.34 } },
  { label: '半减七和弦', symbol: 'm7b5', intervals: [0, 3, 6, 10], mood: { tension: 0.9, brightness: 0.18 } },
  { label: '六和弦', symbol: '6', intervals: [0, 4, 7, 9], mood: { tension: 0.18, brightness: 0.82 } },
  { label: '小六和弦', symbol: 'm6', intervals: [0, 3, 7, 9], mood: { tension: 0.48, brightness: 0.3 } },
  { label: '九和弦', symbol: '9', intervals: [0, 4, 7, 10, 14], mood: { tension: 0.64, brightness: 0.64 } },
  { label: '加九和弦', symbol: 'add9', intervals: [0, 4, 7, 14], mood: { tension: 0.24, brightness: 0.9 } },
  { label: '小加九和弦', symbol: 'madd9', intervals: [0, 3, 7, 14], mood: { tension: 0.46, brightness: 0.4 } },
  { label: '大九和弦', symbol: 'maj9', intervals: [0, 4, 7, 11, 14], mood: { tension: 0.34, brightness: 0.88 } },
  { label: '小九和弦', symbol: 'm9', intervals: [0, 3, 7, 10, 14], mood: { tension: 0.52, brightness: 0.42 } },
  { label: '七降九和弦', symbol: '7b9', intervals: [0, 4, 7, 10, 13], mood: { tension: 0.95, brightness: 0.28 } },
  { label: '七升五和弦', symbol: '7#5', intervals: [0, 4, 8, 10], mood: { tension: 0.88, brightness: 0.5 } },
  { label: '大七升十一和弦', symbol: 'maj7#11', intervals: [0, 4, 7, 11, 18], mood: { tension: 0.58, brightness: 0.92 } },
  { label: '减七和弦', symbol: 'dim7', intervals: [0, 3, 6, 9], mood: { tension: 0.98, brightness: 0.1 } },
  { label: '小大七和弦', symbol: 'mMaj7', intervals: [0, 3, 7, 11], mood: { tension: 0.78, brightness: 0.34 } }
];

const EMOTIONS = [
  { name: '开心', tension: 0.12, brightness: 0.94 },
  { name: '兴奋', tension: 0.42, brightness: 0.96 },
  { name: '希望', tension: 0.28, brightness: 0.9 },
  { name: '温暖', tension: 0.2, brightness: 0.84 },
  { name: '平静', tension: 0.1, brightness: 0.68 },
  { name: '治愈', tension: 0.16, brightness: 0.78 },
  { name: '浪漫', tension: 0.3, brightness: 0.76 },
  { name: '梦幻', tension: 0.46, brightness: 0.74 },
  { name: '怀旧', tension: 0.36, brightness: 0.5 },
  { name: '孤独', tension: 0.5, brightness: 0.18 },
  { name: '悲伤', tension: 0.42, brightness: 0.2 },
  { name: '忧郁', tension: 0.52, brightness: 0.24 },
  { name: '神秘', tension: 0.66, brightness: 0.36 },
  { name: '紧张', tension: 0.84, brightness: 0.34 },
  { name: '焦虑', tension: 0.9, brightness: 0.28 },
  { name: '愤怒', tension: 0.94, brightness: 0.22 },
  { name: '恐惧', tension: 0.96, brightness: 0.12 },
  { name: '庄严', tension: 0.34, brightness: 0.58 },
  { name: '史诗', tension: 0.6, brightness: 0.82 },
  { name: '释然', tension: 0.18, brightness: 0.62 },
  { name: '坚定', tension: 0.38, brightness: 0.72 },
  { name: '迷茫', tension: 0.64, brightness: 0.42 },
  { name: '阴暗', tension: 0.7, brightness: 0.14 },
  { name: '清晨', tension: 0.14, brightness: 0.88 }
];

const PROGRESSION_LIBRARY = [
  { name: 'Sunny Lift', target: { tension: 0.14, brightness: 0.94 }, steps: [[0, 'add9'], [7, ''], [9, 'm7'], [5, 'maj7']] },
  { name: 'Pure Joy', target: { tension: 0.12, brightness: 0.9 }, steps: [[0, ''], [5, '6'], [7, 'add9'], [0, '6']] },
  { name: 'Hope Rise', target: { tension: 0.28, brightness: 0.9 }, steps: [[0, 'maj7'], [2, 'm7'], [5, 'add9'], [7, 'sus4']] },
  { name: 'Warm Home', target: { tension: 0.18, brightness: 0.82 }, steps: [[0, '6'], [9, 'm7'], [5, 'maj7'], [7, '']] },
  { name: 'Calm Water', target: { tension: 0.1, brightness: 0.66 }, steps: [[0, 'maj7'], [5, 'add9'], [2, 'm7'], [7, 'sus2']] },
  { name: 'Healing Breath', target: { tension: 0.16, brightness: 0.76 }, steps: [[0, 'add9'], [4, 'm7'], [5, 'maj7'], [0, 'maj9']] },
  { name: 'Soft Romance', target: { tension: 0.3, brightness: 0.76 }, steps: [[0, 'maj7'], [9, 'm9'], [5, 'maj9'], [7, '9']] },
  { name: 'Dream Glass', target: { tension: 0.46, brightness: 0.74 }, steps: [[0, 'maj9'], [2, 'sus2'], [4, 'm9'], [7, 'maj7#11']] },
  { name: 'Nostalgia Tape', target: { tension: 0.36, brightness: 0.5 }, steps: [[9, 'm7'], [5, 'maj7'], [0, ''], [7, 'sus4']] },
  { name: 'Lonely Room', target: { tension: 0.5, brightness: 0.18 }, steps: [[9, 'm'], [5, 'maj7'], [2, 'm7'], [4, 'madd9']] },
  { name: 'Sad Rain', target: { tension: 0.42, brightness: 0.2 }, steps: [[9, 'm'], [5, ''], [0, ''], [7, 'sus4']] },
  { name: 'Blue Hour', target: { tension: 0.52, brightness: 0.24 }, steps: [[9, 'm9'], [2, 'm7b5'], [7, '7'], [4, 'm7']] },
  { name: 'Mystery Fog', target: { tension: 0.66, brightness: 0.36 }, steps: [[0, 'mMaj7'], [5, 'm6'], [8, 'maj7#11'], [7, '7b9']] },
  { name: 'Suspense Pulse', target: { tension: 0.84, brightness: 0.34 }, steps: [[2, 'm7b5'], [7, '7b9'], [0, 'm'], [6, 'dim7']] },
  { name: 'Anxiety Loop', target: { tension: 0.9, brightness: 0.28 }, steps: [[0, 'dim'], [1, '7b9'], [2, 'm7b5'], [7, '7#5']] },
  { name: 'Anger Strike', target: { tension: 0.94, brightness: 0.22 }, steps: [[0, 'm'], [1, '7b9'], [6, 'dim7'], [7, '7#5']] },
  { name: 'Fear Step', target: { tension: 0.96, brightness: 0.12 }, steps: [[0, 'dim7'], [3, 'm7b5'], [6, 'dim'], [1, '7b9']] },
  { name: 'Solemn Bells', target: { tension: 0.34, brightness: 0.58 }, steps: [[0, 'm7'], [5, 'maj7'], [7, 'sus4'], [0, 'm6']] },
  { name: 'Epic Gate', target: { tension: 0.6, brightness: 0.82 }, steps: [[0, 'add9'], [3, ''], [5, 'maj7#11'], [7, '9']] },
  { name: 'Release', target: { tension: 0.18, brightness: 0.62 }, steps: [[9, 'm7'], [5, 'maj7'], [7, 'sus2'], [0, '6']] },
  { name: 'Resolve Forward', target: { tension: 0.38, brightness: 0.72 }, steps: [[0, 'sus4'], [0, ''], [5, 'add9'], [7, '']] },
  { name: 'Lost Map', target: { tension: 0.64, brightness: 0.42 }, steps: [[0, 'sus2'], [8, 'maj7#11'], [2, 'm7'], [7, '7b9']] },
  { name: 'Dark Cave', target: { tension: 0.7, brightness: 0.14 }, steps: [[0, 'm'], [6, 'dim'], [8, 'm7'], [1, 'm7b5']] },
  { name: 'Morning Air', target: { tension: 0.14, brightness: 0.88 }, steps: [[0, 'maj9'], [7, 'sus2'], [5, 'add9'], [0, 'add9']] },
  { name: 'Bright Tension', target: { tension: 0.72, brightness: 0.8 }, steps: [[0, 'maj7#11'], [2, '9'], [7, '7'], [0, 'add9']] },
  { name: 'Noir Walk', target: { tension: 0.62, brightness: 0.22 }, steps: [[0, 'm6'], [3, 'maj7'], [6, 'dim7'], [7, '7b9']] }
];

// 每个情感进行的实例片段：使用相似进行或类似色彩的真实音乐作品 + 原创示范旋律风格
const PROGRESSION_EXAMPLES = {
  'Sunny Lift': [
    { title: '《Let It Be》— The Beatles', context: '副歌 I–V–vi–IV 经典走向，明亮积极', style: 'ballad' },
    { title: '《稻香》— 周杰伦', context: '大调叠加 add9 色彩，阳光治愈', style: 'bounce' },
    { title: "《Don't Stop Believin'》— Journey", context: 'I–V–vi–IV 的摇滚副歌范本', style: 'bounce' }
  ],
  'Pure Joy': [
    { title: '《Over the Rainbow》— Harold Arlen', context: '大调八度跳跃，纯真喜悦', style: 'bounce' },
    { title: '《Walking on Sunshine》— Katrina', context: '明亮 I–V 循环的阳光感', style: 'bounce' }
  ],
  'Hope Rise': [
    { title: '《Here Comes the Sun》— Beatles', context: 'maj7/add9 上行，希望升起', style: 'flow' },
    { title: '《I Will Survive》— Gloria Gaynor', context: 'IV–V 悬挂到解决的力量感', style: 'ballad' }
  ],
  'Warm Home': [
    { title: '《Take Me Home, Country Roads》— John Denver', context: '温暖大调民谣的归家感', style: 'ballad' },
    { title: '《Home》— Michael Bublé', context: '6/maj7 暖色抒情', style: 'flow' }
  ],
  'Calm Water': [
    { title: "《Don't Know Why》— Norah Jones", context: 'maj7 平静爵士', style: 'flow' },
    { title: '《Summer》— 久石让', context: '清澈 sus2/add9 的水面感', style: 'flow' }
  ],
  'Healing Breath': [
    { title: '《风になる》— 辻亜弥乃', context: 'add9/maj9 治愈系主题曲', style: 'ballad' },
    { title: '《Tears in Heaven》— Eric Clapton', context: '柔和指弹式抒情', style: 'flow' }
  ],
  'Soft Romance': [
    { title: '《Fly Me to the Moon》— Bart Howard', context: 'maj7/9 浪漫爵士标准曲', style: 'flow' },
    { title: '《La Vie en Rose》— Édith Piaf', context: '玫瑰色浪漫华尔兹', style: 'ballad' }
  ],
  'Dream Glass': [
    { title: 'Sigur Rós 式后摇梦境', context: 'sus2/maj9 空灵流动的梦境色彩', style: 'flow' },
    { title: '《Dreams》— Fleetwood Mac', context: 'sus 和弦的循环流动', style: 'flow' }
  ],
  'Nostalgia Tape': [
    { title: '《Africa》— Toto', context: 'vi–IV–I–V 经典怀旧副歌', style: 'ballad' },
    { title: '《海阔天空》— Beyond', context: '怀旧大调副歌进行', style: 'ballad' },
    { title: '《Despacito》— Luis Fonsi', context: 'vi–IV–I–V 的拉丁流行范本', style: 'flow' }
  ],
  'Lonely Room': [
    { title: '《Mad World》— Gary Jules', context: '小调孤寂的内省气氛', style: 'ballad' },
    { title: '《Eternal Flame》— The Bangles', context: 'vi 起手的孤独抒情', style: 'flow' }
  ],
  'Sad Rain': [
    { title: '《Someone Like You》— Adele', context: '小调 IV–V 循环的悲伤副歌', style: 'ballad' },
    { title: '《Yesterday》— Beatles', context: '小调怀旧旋律', style: 'flow' },
    { title: '《离人》— 林志炫', context: '小调副歌的悲伤抒情', style: 'ballad' }
  ],
  'Blue Hour': [
    { title: '《Autumn Leaves》— Joseph Kosma', context: 'ii–V–i 小调爵士标准曲', style: 'flow' },
    { title: '《Blue in Green》— Miles Davis', context: '忧郁 modal jazz 色彩', style: 'flow' }
  ],
  'Mystery Fog': [
    { title: '《James Bond Theme》— Monty Norman', context: 'mMaj7 特工式的神秘主题', style: 'tense' },
    { title: '《Misty》— Erroll Garner', context: '爵士 ballad 的朦胧神秘', style: 'flow' }
  ],
  'Suspense Pulse': [
    { title: 'Hitchcock 式悬疑配乐', context: 'dim7/7b9 制造的紧张 pulse', style: 'tense' },
    { title: '《Jaws》主题 — John Williams', context: '半音逼近的紧张动机', style: 'tense' }
  ],
  'Anxiety Loop': [
    { title: '《Inception》— Hans Zimmer', context: '半音上行的焦虑 pulse', style: 'tense' },
    { title: '《The Dark Knight》— Zimmer / Newton Howard', context: '半音紧张的不安色彩', style: 'tense' }
  ],
  'Anger Strike': [
    { title: '《O Fortuna》(Carmina Burana) — Carl Orff', context: '小调 + dim 的暗黑冲击', style: 'tense' },
    { title: '《Imperial March》— John Williams', context: '小调威胁性的进行感', style: 'tense' }
  ],
  'Fear Step': [
    { title: '《Psycho》淋浴场景 — Bernard Herrmann', context: 'dim7 弦乐的惊悚刺击', style: 'tense' },
    { title: '《The Shining》配乐风格', context: '半音堆叠的恐怖色彩', style: 'tense' }
  ],
  'Solemn Bells': [
    { title: '《Carol of the Bells》— 乌克兰民歌', context: '钟声式的庄严循环', style: 'flow' },
    { title: "《Gabriel's Oboe》— Ennio Morricone", context: '庄严颂歌式的抒情', style: 'ballad' }
  ],
  'Epic Gate': [
    { title: '《Victory》— Two Steps from Hell', context: '♭III/♭VII 大调的史诗副歌', style: 'bounce' },
    { title: '《Star Sky》— Two Steps from Hell', context: 'add9 史诗预告片色彩', style: 'flow' }
  ],
  'Release': [
    { title: '《Let It Go》— Idina Menzel', context: 'sus → 大调的释放爆发', style: 'ballad' },
    { title: '《A Sky Full of Stars》— Coldplay', context: '明亮释放感的副歌', style: 'flow' }
  ],
  'Resolve Forward': [
    { title: '《We Will Rock You》— Queen', context: 'sus4 → I 的坚定解决', style: 'bounce' },
    { title: '《Eye of the Tiger》— Survivor', context: '坚定前奏式动机', style: 'bounce' }
  ],
  'Lost Map': [
    { title: '久石让式迷茫段落', context: '♭VI/sus2 的迷蒙游走', style: 'flow' },
    { title: '《Lost Stars》— Adam Levine', context: '迷茫抒情的寻找感', style: 'ballad' }
  ],
  'Dark Cave': [
    { title: '《O Fortuna》(Carmina Burana)', context: '小调 + dim 的阴暗威压', style: 'tense' },
    { title: '《Requiem》— Mozart', context: '阴暗的小调安魂曲色彩', style: 'flow' }
  ],
  'Morning Air': [
    { title: '《Morning Mood》— Edvard Grieg', context: '清晨大调的明朗上升', style: 'flow' },
    { title: '《Aruarian Dance》— Nujabes', context: '清晨舒缓的纯音乐', style: 'flow' }
  ],
  'Bright Tension': [
    { title: '《The Simpsons Theme》— Danny Elfman', context: 'lydian #11 的明亮紧张', style: 'bounce' },
    { title: 'Sondheim 式音乐剧色彩', context: 'lydian 增四度的戏剧色彩', style: 'flow' }
  ],
  'Noir Walk': [
    { title: '《The Pink Panther》— Henry Mancini', context: 'm6/7b9 的黑色幽默主题', style: 'tense' },
    { title: 'James Bond 式 spy jazz', context: '黑色电影式的间谍爵士', style: 'tense' }
  ]
};

// 实例片段的旋律节奏模板：[半音偏移(相对该小节和弦根音), 拍数]
const EXAMPLE_PATTERNS = {
  ballad: [[0, 1], [4, 1], [7, 2]],                          // 1 3 5 抒情级进
  bounce: [[0, 0.5], [7, 0.5], [4, 1], [0, 2]],              // 1 5 3 1 跳跃
  flow:   [[7, 0.5], [4, 0.5], [2, 0.5], [4, 0.5], [7, 2]],  // 5 3 2 3 5 流动
  tense:  [[3, 1], [4, 0.5], [3, 0.5], [7, 2]]               // 小三/大三半音摩擦
};
const EXAMPLE_TEMPO = { ballad: 78, bounce: 116, flow: 92, tense: 70 };
const EXAMPLE_STYLE_LABELS = {
  ballad: '抒情慢板',
  bounce: '跳跃活泼',
  flow: '流动连贯',
  tense: '紧张半音'
};
const SIMPLE_JIANPU = ['1', '#1', '2', '#2', '3', '4', '#4', '5', '#5', '6', '#6', '7'];

// ===== 涂鸦旋律：颜色 → 音高，位置 → 八度，配合情感和弦进行与节奏 =====

// 画板离散为 32 步 = 8 拍 = 2 个 4/4 小节；恰好让情感进行 4 和弦各占 8 步（2 拍）
const DOODLE_STEPS = 32;
const PENTATONIC_MAJOR = [0, 2, 4, 7, 9];    // 大调五声：1 2 3 5 6
const PENTATONIC_MINOR = [0, 3, 5, 7, 10];   // 小调五声：1 b3 4 5 b7

// 色板：5 个颜色 → 五声音阶 5 个音级；色相从暖到冷，按 hue 段映射
// [0,72) 红 → [72,144) 绿 → [144,216) 青 → [216,288) 紫 → [288,360) 品红
const DOODLE_PALETTE = [
  { color: '#ef4444', label: '音级 1' },
  { color: '#22c55e', label: '音级 2' },
  { color: '#06b6d4', label: '音级 3' },
  { color: '#8b5cf6', label: '音级 4' },
  { color: '#ec4899', label: '音级 5' }
];

// 节奏预设：BPM + 摇摆比例 + 鼓点风格
const RHYTHM_PRESETS = [
  { name: '流行中板', bpm: 96,  swing: 0,    drums: 'pop' },
  { name: '抒情慢板', bpm: 70,  swing: 0,    drums: 'ballad' },
  { name: '轻快快板', bpm: 124, swing: 0,    drums: 'pop' },
  { name: '摇摆爵士', bpm: 104, swing: 0.32, drums: 'swing' },
  { name: '电子律动', bpm: 120, swing: 0,    drums: 'electronic' },
  { name: '无鼓自由', bpm: 84,  swing: 0,    drums: 'none' }
];

function emptyDrumBar() { return new Array(DOODLE_STEPS).fill(0); }
// 2 小节（32 步）鼓点 pattern：kick / snare / hat，1 表示该步击打
const DRUM_PATTERNS = {
  pop: {
    kick:  [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
    snare: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    hat:   [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
  },
  ballad: {
    kick:  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    snare: [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    hat:   [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]
  },
  swing: {
    kick:  [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    snare: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    hat:   [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]
  },
  electronic: {
    kick:  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    snare: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    hat:   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  },
  none: { kick: emptyDrumBar(), snare: emptyDrumBar(), hat: emptyDrumBar() }
};

let audioContext;
let activeOscillators = [];
let arpTimers = [];
let loopTimers = [];
let playbackStopTimer;
let highlightTimers = [];
let currentProgression = [];
let activeProgressionChord = null;
let activeManualNotes = [];

const rootSelect = document.getElementById('rootSelect');
const chordTypeSelect = document.getElementById('chordTypeSelect');
const emotionSelect = document.getElementById('emotionSelect');
const arpSpeed = document.getElementById('arpSpeed');
const arpSpeedText = document.getElementById('arpSpeedText');
const chordName = document.getElementById('chordName');
const jianpu = document.getElementById('jianpu');
const noteNames = document.getElementById('noteNames');
const chordList = document.getElementById('chordList');
const emotionStats = document.getElementById('emotionStats');
const emotionList = document.getElementById('emotionList');
const progressionOutput = document.getElementById('progressionOutput');
const progressionJianpu = document.getElementById('progressionJianpu');
const progressionList = document.getElementById('progressionList');
const exampleList = document.getElementById('exampleList');
const audioFileInput = document.getElementById('audioFileInput');
const audioResult = document.getElementById('audioResult');
const rhythmSelect = document.getElementById('rhythmSelect');
const doodleCanvas = document.getElementById('doodleCanvas');
const doodleCtx = doodleCanvas.getContext('2d');
const doodlePalette = document.getElementById('doodlePalette');
const brushSize = document.getElementById('brushSize');
const brushSizeText = document.getElementById('brushSizeText');
const drumToggle = document.getElementById('drumToggle');
const doodleMelody = document.getElementById('doodleMelody');

function init() {
  document.getElementById('versionBadge').textContent = APP_VERSION;

  NOTES.forEach((note, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = note.name;
    rootSelect.appendChild(option);
  });

  CHORD_TYPES.forEach((type, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${type.label}${type.symbol ? ` (${type.symbol})` : ''}`;
    chordTypeSelect.appendChild(option);
  });

  EMOTIONS.forEach((emotion, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = emotion.name;
    emotionSelect.appendChild(option);
  });

  chordList.innerHTML = CHORD_TYPES.map((type) => {
    const intervalText = type.intervals.map(formatInterval).join(' - ');
    return `<span><strong>${type.symbol || 'Major'}</strong>${type.label}：${intervalText}</span>`;
  }).join('');

  emotionList.innerHTML = EMOTIONS.map((emotion) => {
    const tensionPct = Math.round(emotion.tension * 100);
    const brightnessPct = Math.round(emotion.brightness * 100);
    return `<span class="emotion-card">
      <strong>${emotion.name}</strong>
      <span class="meter">
        <span class="meter-label">tension</span>
        <span class="meter-track"><span class="meter-fill meter-fill--tension" style="width:${tensionPct}%"></span></span>
        <span class="meter-value">${emotion.tension.toFixed(2)}</span>
      </span>
      <span class="meter">
        <span class="meter-label">brightness</span>
        <span class="meter-track"><span class="meter-fill meter-fill--brightness" style="width:${brightnessPct}%"></span></span>
        <span class="meter-value">${emotion.brightness.toFixed(2)}</span>
      </span>
    </span>`;
  }).join('');

  progressionList.innerHTML = PROGRESSION_LIBRARY.map((progression) => {
    const chordText = buildProgression(progression, 0).map(formatChordName).join(' → ');
    return `<span><strong>${progression.name}</strong>${chordText}</span>`;
  }).join('');

  rootSelect.addEventListener('change', () => {
    updateDisplay();
    updateEmotionProgression();
    clearPlaybackDisplay();
    renderPalette();
    renderDoodleMelody();
  });
  chordTypeSelect.addEventListener('change', () => {
    updateDisplay();
    clearPlaybackDisplay();
  });
  emotionSelect.addEventListener('change', () => {
    updateEmotionProgression();
    clearPlaybackDisplay();
    renderPalette();
    renderDoodleMelody();
  });
  arpSpeed.addEventListener('input', () => {
    arpSpeedText.textContent = `${arpSpeed.value} ms`;
    updateRangeProgress(arpSpeed);
  });

  document.getElementById('playButton').addEventListener('click', playChord);
  document.getElementById('playArpButton').addEventListener('click', playArpeggio);
  document.getElementById('playEmotionButton').addEventListener('click', playEmotionProgression);
  document.getElementById('stopButton').addEventListener('click', stopAll);
  document.getElementById('stopManualButton').addEventListener('click', stopAll);
  audioFileInput.addEventListener('change', handleAudioFile);

  updateDisplay();
  updateEmotionProgression();
  updateRangeProgress(arpSpeed);

  // ===== 涂鸦旋律 / 节奏 初始化 =====
  RHYTHM_PRESETS.forEach((rhythm, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${rhythm.name} · ${rhythm.bpm} BPM`;
    rhythmSelect.appendChild(option);
  });
  rhythmSelect.value = '0';
  rhythmSelect.addEventListener('change', clearPlaybackDisplay);

  brushSize.addEventListener('input', () => {
    brushSizeText.textContent = `${brushSize.value} px`;
    updateRangeProgress(brushSize);
  });
  updateRangeProgress(brushSize);

  doodleCanvas.addEventListener('mousedown', startDoodleStroke);
  doodleCanvas.addEventListener('mousemove', moveDoodleStroke);
  window.addEventListener('mouseup', endDoodleStroke);
  doodleCanvas.addEventListener('mouseleave', endDoodleStroke);
  doodleCanvas.addEventListener('touchstart', startDoodleStroke, { passive: false });
  doodleCanvas.addEventListener('touchmove', moveDoodleStroke, { passive: false });
  doodleCanvas.addEventListener('touchend', endDoodleStroke);

  document.getElementById('clearDoodleButton').addEventListener('click', clearDoodle);
  document.getElementById('playDoodleButton').addEventListener('click', playDoodle);
  document.getElementById('stopDoodleButton').addEventListener('click', stopAll);

  renderPalette();
  renderDoodleMelody();
}

function getSelectedChord() {
  const rootIndex = Number(rootSelect.value);
  const type = CHORD_TYPES[Number(chordTypeSelect.value)];
  return createChord(rootIndex, type.symbol);
}

// 将指定和弦载入「当前和弦」：同步根音与手动和弦类型两个下拉，并刷新显示。
// 注意：直接设置 .value 不会触发 change 事件，因此不会引发 updateEmotionProgression/stopAll，
// 情感进行显示保持不变，只有「当前和弦」卡片被刷新。
function loadChordIntoManual(chord) {
  const rootIdx = NOTES.indexOf(chord.root);
  const typeIdx = CHORD_TYPES.indexOf(chord.type);
  if (rootIdx >= 0) rootSelect.value = String(rootIdx);
  if (typeIdx >= 0) chordTypeSelect.value = String(typeIdx);
  updateDisplay();
}

function createChord(rootIndex, chordSymbol) {
  const type = getChordType(chordSymbol);
  const normalizedRootIndex = normalizeNoteIndex(rootIndex);
  const notes = type.intervals.map((interval) => {
    const absoluteIndex = normalizedRootIndex + interval;
    const noteIndex = normalizeNoteIndex(absoluteIndex);
    const octaveOffset = Math.floor(absoluteIndex / NOTES.length);
    const baseNote = NOTES[noteIndex];
    return {
      ...baseNote,
      frequency: baseNote.frequency * (2 ** octaveOffset),
      interval
    };
  });

  return {
    root: NOTES[normalizedRootIndex],
    type,
    notes
  };
}

function updateRangeProgress(rangeEl) {
  const min = Number(rangeEl.min);
  const max = Number(rangeEl.max);
  const value = Number(rangeEl.value);
  const percent = ((value - min) / (max - min)) * 100;
  rangeEl.style.setProperty('--arp-progress', `${percent}%`);
}

function updateDisplay() {
  const chord = getSelectedChord();
  chordName.textContent = formatChordName(chord);
  jianpu.innerHTML = renderManualJianpu(chord);
  noteNames.textContent = chord.notes.map((note) => note.name.split(' ')[0]).join('  ');
}

function updateEmotionProgression() {
  stopAll();
  const emotion = EMOTIONS[Number(emotionSelect.value)];
  const selectedProgression = selectProgression(emotion);
  currentProgression = buildProgression(selectedProgression, Number(rootSelect.value));

  const tensionPct = Math.round(emotion.tension * 100);
  const brightnessPct = Math.round(emotion.brightness * 100);
  emotionStats.innerHTML = `
    <span><strong>${emotion.name}</strong></span>
    <span>tension
      <span class="meter-mini">
        <span class="meter-mini-track"><span class="meter-mini-fill meter-mini-fill--tension" style="width:${tensionPct}%"></span></span>
      </span>
      ${emotion.tension.toFixed(2)}
    </span>
    <span>brightness
      <span class="meter-mini">
        <span class="meter-mini-track"><span class="meter-mini-fill meter-mini-fill--brightness" style="width:${brightnessPct}%"></span></span>
      </span>
      ${emotion.brightness.toFixed(2)}
    </span>
    <span>匹配：<strong>${selectedProgression.name}</strong></span>
  `;

  progressionOutput.innerHTML = currentProgression.map((chord, index) => (
    `<button class="progression-chip" data-index="${index}" type="button" title="载入到当前和弦并试听">${formatChordName(chord)}</button>`
  )).join('');

  progressionOutput.querySelectorAll('.progression-chip').forEach((button) => {
    button.addEventListener('click', () => {
      const chordIndex = Number(button.dataset.index);
      const chord = currentProgression[chordIndex];
      loadChordIntoManual(chord);
      playChordObject(chord, audioContext ? audioContext.currentTime : 0, 1.2, {
        source: 'progression',
        chordIndex,
        mode: 'chord'
      });
    });
  });

  progressionJianpu.innerHTML = currentProgression.map((chord, chordIndex) => {
    const notesText = chord.notes.map((note, noteIndex) => (
      `<span class="jianpu-note progression-note" data-chord-index="${chordIndex}" data-note-index="${noteIndex}">${note.jianpu}</span>`
    )).join(' ');
    return `<span class="progression-measure"><strong>${formatChordName(chord)}:</strong> ${notesText}</span>`;
  }).join(' <span class="measure-divider">|</span> ');

  renderExamples(selectedProgression);
}

function renderManualJianpu(chord) {
  return chord.notes.map((note, noteIndex) => (
    `<span class="jianpu-note manual-note" data-note-index="${noteIndex}">${note.jianpu}</span>`
  )).join('');
}

function selectProgression(emotion) {
  return PROGRESSION_LIBRARY.reduce((best, progression) => {
    const bestDistance = getMoodDistance(emotion, best.target);
    const currentDistance = getMoodDistance(emotion, progression.target);
    return currentDistance < bestDistance ? progression : best;
  }, PROGRESSION_LIBRARY[0]);
}

function buildProgression(progression, rootIndex) {
  return progression.steps.map(([offset, symbol]) => createChord(rootIndex + offset, symbol));
}

function getMoodDistance(emotion, target) {
  return Math.hypot(emotion.tension - target.tension, emotion.brightness - target.brightness);
}

function getChordType(symbol) {
  return CHORD_TYPES.find((type) => type.symbol === symbol) || CHORD_TYPES[0];
}

function normalizeNoteIndex(index) {
  return ((index % NOTES.length) + NOTES.length) % NOTES.length;
}

function formatChordName(chord) {
  return `${chord.root.name.split(' ')[0]}${chord.type.symbol}`;
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playTone(frequency, startTime, duration = 0.9, gainValue = 0.18) {
  ensureAudioContext();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, startTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.03);

  activeOscillators.push(oscillator);
  oscillator.addEventListener('ended', () => {
    activeOscillators = activeOscillators.filter((item) => item !== oscillator);
  });
}

function playChord() {
  startLoopedPlayback(playChordOnce, 1300);
}

function playChordOnce() {
  ensureAudioContext();
  const chord = getSelectedChord();
  playChordObject(chord, audioContext.currentTime, 1.2, {
    source: 'manual',
    mode: 'chord'
  });
}

function playChordObject(chord, startTime, duration = 1.2, displayOptions = {}) {
  ensureAudioContext();
  const safeStartTime = Math.max(audioContext.currentTime, startTime);
  chord.notes.forEach((note) => playTone(note.frequency, safeStartTime, duration, 0.11));
  scheduleChordDisplay(chord, safeStartTime, duration, displayOptions);
}

function playArpeggio() {
  const chord = getSelectedChord();
  const cycleMs = chord.notes.length * Number(arpSpeed.value) + 850;
  startLoopedPlayback(playArpeggioOnce, cycleMs);
}

function playArpeggioOnce() {
  ensureAudioContext();
  const chord = getSelectedChord();
  const speedSeconds = Number(arpSpeed.value) / 1000;
  const now = audioContext.currentTime;

  chord.notes.forEach((note, index) => {
    scheduleTimerAtAudioTime(now + index * speedSeconds, () => {
      playTone(note.frequency, audioContext.currentTime, 0.75, 0.16);
      setCurrentPlayingNote(chord, index, {
        source: 'manual',
        mode: 'single'
      });
    });
  });
}

function playEmotionProgression() {
  updateEmotionProgression();
  // 与涂鸦一致：以顶部「节奏」BPM 为准，32 步（2 小节）为一个循环 —— 节奏与情感和弦在此联动
  const rhythm = RHYTHM_PRESETS[Number(rhythmSelect.value)];
  const stepSeconds = 60 / rhythm.bpm / 4; // 每步 = 一个 16 分音符
  const cycleMs = DOODLE_STEPS * stepSeconds * 1000;
  startLoopedPlayback(playEmotionProgressionOnce, cycleMs);
}

function playEmotionProgressionOnce() {
  ensureAudioContext();
  const rhythm = RHYTHM_PRESETS[Number(rhythmSelect.value)];
  const stepSeconds = 60 / rhythm.bpm / 4;
  const baseTime = audioContext.currentTime + 0.06;
  // 把 2 小节（32 步）均分给当前情感进行的每个和弦：4 和弦时各占 8 步 = 2 拍，与涂鸦和弦垫同栅格
  const chordSteps = DOODLE_STEPS / Math.max(1, currentProgression.length);
  const padSeconds = chordSteps * stepSeconds;
  // 「每音时长」滑块改为控制每个和弦音的延续时长（断奏 ↔ 连奏），上限不超过一个和弦的时长
  const noteDuration = padSeconds * 0.98;

  currentProgression.forEach((chord, chordIndex) => {
    const chordStart = baseTime + chordIndex * padSeconds;
    // 和弦式齐奏：该和弦所有音同时发声，起点严格对齐节奏栅格
    playChordObject(chord, chordStart, noteDuration, {
      source: 'progression',
      chordIndex,
      mode: 'chord'
    });
  });

  // 节拍鼓点：与涂鸦共享同一节奏 pattern，让情感进行也带上鼓点
  const wantDrums = drumToggle.checked && rhythm.drums !== 'none';
  if (wantDrums) {
    const pattern = DRUM_PATTERNS[rhythm.drums];
    for (let step = 0; step < DOODLE_STEPS; step++) {
      const swingDelay = step % 2 === 1 ? rhythm.swing * stepSeconds * 0.5 : 0;
      const time = baseTime + step * stepSeconds + swingDelay;
      if (pattern.kick[step]) playKick(time);
      if (pattern.snare[step]) playSnare(time);
      if (pattern.hat[step]) playHat(time);
    }
  }
}

function scheduleChordDisplay(chord, startTime, duration, displayOptions) {
  // 和弦齐奏：所有音同时发声，简谱也同时高亮整组和弦音（而非逐个错开点亮）
  scheduleTimerAtAudioTime(startTime, () => {
    setActiveChord(chord, displayOptions);
  }, 'highlight');
}

function scheduleTimerAtAudioTime(audioTime, callback, timerType = 'arp') {
  ensureAudioContext();
  const delayMs = Math.max(0, (audioTime - audioContext.currentTime) * 1000);
  const timer = window.setTimeout(callback, delayMs);
  if (timerType === 'highlight') {
    highlightTimers.push(timer);
  } else {
    arpTimers.push(timer);
  }
  return timer;
}

// 和弦齐奏时一次性激活整组和弦音（manual 或 progression 来源）
function setActiveChord(chord, options = {}) {
  const noteIndices = chord.notes.map((_, index) => index);
  if (options.source === 'manual') {
    activeManualNotes = noteIndices;
    activeProgressionChord = null;
  } else if (options.source === 'progression') {
    activeProgressionChord = { chordIndex: options.chordIndex, noteIndices };
    activeManualNotes = [];
  }
  renderActiveHighlights();
}

// 单音播放（琶音）时只激活单个音
function setCurrentPlayingNote(chord, noteIndex, options = {}) {
  if (options.source === 'manual') {
    activeManualNotes = [noteIndex];
    activeProgressionChord = null;
  } else if (options.source === 'progression') {
    activeProgressionChord = { chordIndex: options.chordIndex, noteIndices: [noteIndex] };
    activeManualNotes = [];
  }
  renderActiveHighlights();
}

function renderActiveHighlights() {
  document.querySelectorAll('.jianpu-note.is-active').forEach((element) => {
    element.classList.remove('is-active');
  });

  activeManualNotes.forEach((noteIndex) => {
    document.querySelector(`.manual-note[data-note-index="${noteIndex}"]`)?.classList.add('is-active');
  });

  if (activeProgressionChord) {
    const { chordIndex, noteIndices } = activeProgressionChord;
    noteIndices.forEach((noteIndex) => {
      document.querySelector(
        `.progression-note[data-chord-index="${chordIndex}"][data-note-index="${noteIndex}"]`
      )?.classList.add('is-active');
    });
  }
}

function clearPlaybackDisplay() {
  activeManualNotes = [];
  activeProgressionChord = null;
  renderActiveHighlights();
}

function startLoopedPlayback(playOnce, cycleMs) {
  stopAll();
  document.body.classList.add('is-playing');
  ensureAudioContext();
  playOnce();

  let elapsedMs = cycleMs;
  while (elapsedMs < 30000) {
    const timer = window.setTimeout(playOnce, elapsedMs);
    loopTimers.push(timer);
    elapsedMs += cycleMs;
  }

  playbackStopTimer = window.setTimeout(stopAll, 30000);
}

function stopAll() {
  arpTimers.forEach((timer) => window.clearTimeout(timer));
  arpTimers = [];

  highlightTimers.forEach((timer) => window.clearTimeout(timer));
  highlightTimers = [];

  loopTimers.forEach((timer) => window.clearTimeout(timer));
  loopTimers = [];

  if (playbackStopTimer) {
    window.clearTimeout(playbackStopTimer);
    playbackStopTimer = null;
  }

  activeOscillators.forEach((oscillator) => {
    try {
      oscillator.stop();
    } catch (error) {
      // Oscillator may have already stopped; no action needed.
    }
  });
  activeOscillators = [];
  document.body.classList.remove('is-playing');
  clearPlaybackDisplay();
  clearExampleHighlight();
  clearDoodleHighlight();
}

function formatInterval(interval) {
  const intervalNames = {
    0: '根音',
    2: '大二度',
    3: '小三度',
    4: '大三度',
    5: '纯四度',
    6: '减五度',
    7: '纯五度',
    8: '增五度',
    9: '大六度',
    10: '小七度',
    11: '大七度',
    13: '小九度',
    14: '九度',
    18: '升十一度'
  };
  return intervalNames[interval] || `${interval}半音`;
}

// ===== 实例片段：旋律生成 / 渲染 / 播放 =====

function clampFreqToRange(freq, low, high) {
  let value = freq;
  while (value < low) value *= 2;
  while (value > high) value /= 2;
  return value;
}

function freqToNoteInfo(freq) {
  const semis = Math.round(12 * Math.log2(freq / NOTES[0].frequency));
  const noteIndex = ((semis % NOTES.length) + NOTES.length) % NOTES.length;
  const octave = 4 + Math.floor(semis / NOTES.length);
  return {
    noteIndex,
    octave,
    jianpu: SIMPLE_JIANPU[noteIndex],
    name: NOTES[noteIndex].name
  };
}

// 根据和弦进行 + 旋律风格，派生一段贴合和弦音的原创旋律
function buildExampleMelody(progression, style, rootIndex) {
  const pattern = EXAMPLE_PATTERNS[style] || EXAMPLE_PATTERNS.ballad;
  const lowFreq = NOTES[0].frequency;
  const melody = [];
  progression.steps.forEach(([offset, symbol], chordIndex) => {
    const chord = createChord(rootIndex + offset, symbol);
    const baseFreq = clampFreqToRange(chord.notes[0].frequency, lowFreq, lowFreq * 2);
    let beatPos = 0;
    pattern.forEach(([semitone, beats]) => {
      const frequency = baseFreq * (2 ** (semitone / 12));
      melody.push({ frequency, beats, chordIndex, startBeatInBar: beatPos, chord });
      beatPos += beats;
    });
  });
  return melody;
}

// 静默和弦垫：只发声、不更新播放显示（避免覆盖旋律高亮）
function playChordPad(chord, startTime, duration, gainValue = 0.05) {
  ensureAudioContext();
  const safeStartTime = Math.max(audioContext.currentTime, startTime);
  chord.notes.forEach((note) => playTone(note.frequency, safeStartTime, duration, gainValue));
}

function renderExamples(progression) {
  const rootIndex = Number(rootSelect.value);
  const examples = progression.examples || PROGRESSION_EXAMPLES[progression.name] || [];
  if (!examples.length) {
    exampleList.innerHTML = '<p class="hint">该情感进行暂无实例片段。</p>';
    return;
  }
  exampleList.innerHTML = examples.map((example, exampleIndex) => {
    const melody = buildExampleMelody(progression, example.style, rootIndex);
    const melodyHtml = melody.map((note, noteIndex) => {
      const info = freqToNoteInfo(note.frequency);
      const noteHtml = `<span class="jianpu-note example-note" data-example="${exampleIndex}" data-note="${noteIndex}" data-octave="${info.octave}">${info.jianpu}</span>`;
      // 每个小节（和弦）之间插入「|」分隔符，与「情感和弦进行」一致，方便看清每个节奏
      const showDivider = noteIndex > 0 && note.chordIndex !== melody[noteIndex - 1].chordIndex;
      return showDivider ? `<span class="measure-divider">|</span>${noteHtml}` : noteHtml;
    }).join('');
    return `<div class="example-card">
      <div class="example-info">
        <strong>${example.title}</strong>
        <span class="example-context">${example.context}</span>
        <span class="example-style">旋律风格：${EXAMPLE_STYLE_LABELS[example.style] || example.style}</span>
      </div>
      <div class="example-melody">${melodyHtml}</div>
      <button class="example-play-button" data-example-index="${exampleIndex}" type="button">演奏示范</button>
    </div>`;
  }).join('');

  exampleList.querySelectorAll('.example-play-button').forEach((button) => {
    button.addEventListener('click', () => {
      const exampleIndex = Number(button.dataset.exampleIndex);
      playExample(examples[exampleIndex], progression, rootIndex, exampleIndex);
    });
  });
}

function highlightExampleNote(exampleIndex, noteIndex) {
  document.querySelectorAll('.example-note.is-active').forEach((element) => {
    element.classList.remove('is-active');
  });
  const element = document.querySelector(
    `.example-note[data-example="${exampleIndex}"][data-note="${noteIndex}"]`
  );
  element?.classList.add('is-active');
}

function clearExampleHighlight() {
  document.querySelectorAll('.example-note.is-active').forEach((element) => {
    element.classList.remove('is-active');
  });
}

function playExample(example, progression, rootIndex, exampleIndex) {
  stopAll();
  document.body.classList.add('is-playing');
  ensureAudioContext();

  const pattern = EXAMPLE_PATTERNS[example.style] || EXAMPLE_PATTERNS.ballad;
  const barBeats = pattern.reduce((sum, entry) => sum + entry[1], 0);
  const beatSeconds = 60 / (EXAMPLE_TEMPO[example.style] || 90);
  const melody = buildExampleMelody(progression, example.style, rootIndex);

  const startTime = audioContext.currentTime + 0.12;
  let endTime = startTime;

  melody.forEach((note, noteIndex) => {
    const barStart = startTime + note.chordIndex * barBeats * beatSeconds;
    const noteStart = barStart + note.startBeatInBar * beatSeconds;
    const noteDuration = Math.max(0.16, note.beats * beatSeconds * 0.92);
    playTone(note.frequency, noteStart, noteDuration, 0.17);
    endTime = Math.max(endTime, noteStart + noteDuration);

    scheduleTimerAtAudioTime(noteStart, () => {
      highlightExampleNote(exampleIndex, noteIndex);
    }, 'highlight');
  });

  // 每小节铺一个柔和和弦垫，让旋律与该情感进行对齐
  progression.steps.forEach(([offset, symbol], chordIndex) => {
    const chord = createChord(rootIndex + offset, symbol);
    const barStart = startTime + chordIndex * barBeats * beatSeconds;
    playChordPad(chord, barStart, barBeats * beatSeconds * 0.95, 0.05);
  });

  const totalMs = (endTime - audioContext.currentTime + 0.6) * 1000;
  playbackStopTimer = window.setTimeout(stopAll, totalMs);
}

// ===== 涂鸦旋律：颜色 → 音高，位置 → 八度，配合情感和弦进行与节奏 =====

let doodleColor = DOODLE_PALETTE[0].color;
let doodleDrawing = false;
let lastDoodlePoint = null;
let noiseBuffer = null;

// 当前情感 brightness < 0.5 用小调五声，否则用大调五声，保证旋律与情感色彩贴合
function getCurrentScale() {
  const emotion = EMOTIONS[Number(emotionSelect.value)];
  return emotion && emotion.brightness < 0.5 ? PENTATONIC_MINOR : PENTATONIC_MAJOR;
}

// 色板渲染：每个颜色显示它对应到当前调性的音名 + 简谱（随根音 / 大小调联动）
function renderPalette() {
  const rootIndex = Number(rootSelect.value);
  const scale = getCurrentScale();
  doodlePalette.innerHTML = DOODLE_PALETTE.map((swatch, index) => {
    const semis = scale[index];
    const noteIndex = (((rootIndex + semis) % 12) + 12) % 12;
    const note = NOTES[noteIndex];
    const active = swatch.color === doodleColor ? ' is-active' : '';
    return `<button class="palette-swatch${active}" data-color="${swatch.color}" type="button" title="${swatch.label}">
      <span class="palette-dot" style="background:${swatch.color}"></span>
      <span class="palette-label">${note.name.split(' ')[0]} · ${note.jianpu}</span>
    </button>`;
  }).join('');
  doodlePalette.querySelectorAll('.palette-swatch').forEach((button) => {
    button.addEventListener('click', () => {
      doodleColor = button.dataset.color;
      renderPalette();
    });
  });
}

function getDoodlePoint(event) {
  const rect = doodleCanvas.getBoundingClientRect();
  const scaleX = doodleCanvas.width / rect.width;
  const scaleY = doodleCanvas.height / rect.height;
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;
  return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
}

function paintDoodleDot(point) {
  doodleCtx.fillStyle = doodleColor;
  doodleCtx.beginPath();
  doodleCtx.arc(point.x, point.y, Number(brushSize.value) / 2, 0, Math.PI * 2);
  doodleCtx.fill();
}

function paintDoodleLine(from, to) {
  doodleCtx.strokeStyle = doodleColor;
  doodleCtx.lineWidth = Number(brushSize.value);
  doodleCtx.lineCap = 'round';
  doodleCtx.lineJoin = 'round';
  doodleCtx.beginPath();
  doodleCtx.moveTo(from.x, from.y);
  doodleCtx.lineTo(to.x, to.y);
  doodleCtx.stroke();
}

function startDoodleStroke(event) {
  if (event.cancelable) event.preventDefault();
  doodleDrawing = true;
  lastDoodlePoint = getDoodlePoint(event);
  paintDoodleDot(lastDoodlePoint);
}

function moveDoodleStroke(event) {
  if (!doodleDrawing) return;
  if (event.cancelable) event.preventDefault();
  const point = getDoodlePoint(event);
  paintDoodleLine(lastDoodlePoint, point);
  lastDoodlePoint = point;
}

function endDoodleStroke() {
  if (!doodleDrawing) return;
  doodleDrawing = false;
  lastDoodlePoint = null;
  renderDoodleMelody();
}

function clearDoodle() {
  doodleCtx.clearRect(0, 0, doodleCanvas.width, doodleCanvas.height);
  renderDoodleMelody();
}

// RGB(0-255) → HSL（h: 0-360，l: 0-1）
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h *= 60;
  }
  return { h, l };
}

// 把画板离散成 32 列，逐列采样非背景像素，翻译成旋律事件序列
function translateDoodle() {
  const { width, height } = doodleCanvas;
  const imageData = doodleCtx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const colWidth = width / DOODLE_STEPS;
  const scale = getCurrentScale();
  const rootIndex = Number(rootSelect.value);
  const baseFreq = NOTES[rootIndex].frequency;
  const melody = [];

  for (let step = 0; step < DOODLE_STEPS; step++) {
    const xStart = Math.floor(step * colWidth);
    const xEnd = Math.floor((step + 1) * colWidth);
    let count = 0;
    let rSum = 0, gSum = 0, bSum = 0, ySum = 0;

    for (let x = xStart; x < xEnd; x += 1) {
      for (let y = 0; y < height; y += 2) {
        const idx = (y * width + x) * 4;
        if (data[idx + 3] > 40) {
          rSum += data[idx];
          gSum += data[idx + 1];
          bSum += data[idx + 2];
          ySum += y;
          count += 1;
        }
      }
    }

    if (count < 2) {
      melody.push({ rest: true });
      continue;
    }

    const { h } = rgbToHsl(rSum / count, gSum / count, bSum / count);
    const hue = (h + 360) % 360;
    const scaleIndex = Math.min(scale.length - 1, Math.floor(hue / (360 / scale.length)));
    const avgY = ySum / count;
    // 画板上下分三段 → 高 / 中 / 低八度（canvas y 越小越靠上）
    let octave;
    if (avgY < height / 3) octave = 1;
    else if (avgY > (height * 2) / 3) octave = -1;
    else octave = 0;

    const semis = scale[scaleIndex];
    const freq = baseFreq * Math.pow(2, (semis + octave * 12) / 12);
    const noteIndex = (((rootIndex + semis) % 12) + 12) % 12;
    // 涂抹覆盖密度 → 力度（音量）
    const coverage = Math.min(1, count / ((xEnd - xStart) * (height / 2) * 0.18));
    const gain = 0.1 + coverage * 0.12;

    melody.push({ rest: false, noteIndex, octave, scaleIndex, freq, gain });
  }
  return melody;
}

function renderDoodleMelody() {
  const melody = translateDoodle();
  if (melody.every((event) => event.rest)) {
    doodleMelody.innerHTML = '<span class="doodle-melody-empty">画板是空的 — 在上方涂鸦后会在这里看到翻译出的旋律简谱</span>';
    return;
  }
  doodleMelody.innerHTML = melody.map((event, step) => {
    if (event.rest) {
      return `<span class="doodle-note is-rest" data-step="${step}">·</span>`;
    }
    const note = NOTES[event.noteIndex];
    const barSep = step > 0 && step % 16 === 0 ? ' data-bar-sep' : '';
    return `<span class="doodle-note" data-step="${step}" data-octave="${event.octave}"${barSep}>${note.jianpu}</span>`;
  }).join('');
}

function highlightDoodleStep(step) {
  doodleMelody.querySelectorAll('.doodle-note.is-active').forEach((element) => {
    element.classList.remove('is-active');
  });
  const element = doodleMelody.querySelector(`.doodle-note[data-step="${step}"]`);
  if (element) element.classList.add('is-active');
}

function clearDoodleHighlight() {
  doodleMelody.querySelectorAll('.doodle-note.is-active').forEach((element) => {
    element.classList.remove('is-active');
  });
}

function playDoodle() {
  if (translateDoodle().every((event) => event.rest)) return; // 空画板不播放
  const rhythm = RHYTHM_PRESETS[Number(rhythmSelect.value)];
  const stepSeconds = 60 / rhythm.bpm / 4; // 每步 = 一个 16 分音符
  const cycleMs = DOODLE_STEPS * stepSeconds * 1000;
  startLoopedPlayback(playDoodleOnce, cycleMs);
}

function playDoodleOnce() {
  ensureAudioContext();
  const melody = translateDoodle();
  const rhythm = RHYTHM_PRESETS[Number(rhythmSelect.value)];
  const stepSeconds = 60 / rhythm.bpm / 4;
  const baseTime = audioContext.currentTime + 0.06;

  // 旋律声：逐步演奏；每步都推进简谱光标（含休止符），休止步只静音
  melody.forEach((event, step) => {
    const swingDelay = step % 2 === 1 ? rhythm.swing * stepSeconds * 0.5 : 0;
    const noteStart = baseTime + step * stepSeconds + swingDelay;
    scheduleTimerAtAudioTime(noteStart, () => highlightDoodleStep(step), 'highlight');
    if (event.rest) return;
    playTone(event.freq, noteStart, stepSeconds * 0.92, event.gain);
  });

  // 和弦垫：把当前情感进行的 4 个和弦铺在 2 小节里，每和弦占 8 步（2 拍）
  if (currentProgression.length) {
    const padSeconds = 8 * stepSeconds;
    currentProgression.forEach((chord, chordIndex) => {
      playChordPad(chord, baseTime + chordIndex * padSeconds, padSeconds * 0.98, 0.09);
    });
  }

  // 节拍鼓点
  const wantDrums = drumToggle.checked && rhythm.drums !== 'none';
  if (wantDrums) {
    const pattern = DRUM_PATTERNS[rhythm.drums];
    for (let step = 0; step < DOODLE_STEPS; step++) {
      const swingDelay = step % 2 === 1 ? rhythm.swing * stepSeconds * 0.5 : 0;
      const time = baseTime + step * stepSeconds + swingDelay;
      if (pattern.kick[step]) playKick(time);
      if (pattern.snare[step]) playSnare(time);
      if (pattern.hat[step]) playHat(time);
    }
  }
}

// ===== 鼓点合成（噪声 + 低频正弦，纯 Web Audio） =====

function ensureNoiseBuffer() {
  ensureAudioContext();
  if (noiseBuffer) return;
  const length = Math.floor(audioContext.sampleRate * 1.0);
  noiseBuffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
  const channel = noiseBuffer.getChannelData(0);
  for (let i = 0; i < length; i++) channel[i] = Math.random() * 2 - 1;
}

// 把鼓点用的音频节点登记到 activeOscillators，stopAll 时一并停止
function trackActiveNode(node) {
  activeOscillators.push(node);
  node.addEventListener('ended', () => {
    activeOscillators = activeOscillators.filter((item) => item !== node);
  });
}

function playKick(time) {
  ensureAudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(150, time);
  oscillator.frequency.exponentialRampToValueAtTime(50, time + 0.12);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.5, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(time);
  oscillator.stop(time + 0.2);
  trackActiveNode(oscillator);
}

function playSnare(time) {
  ensureAudioContext();
  ensureNoiseBuffer();
  const source = audioContext.createBufferSource();
  source.buffer = noiseBuffer;
  const filter = audioContext.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1800;
  filter.Q.value = 0.8;
  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.28, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.14);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  source.start(time);
  source.stop(time + 0.16);
  trackActiveNode(source);
}

function playHat(time) {
  ensureAudioContext();
  ensureNoiseBuffer();
  const source = audioContext.createBufferSource();
  source.buffer = noiseBuffer;
  const filter = audioContext.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 7000;
  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.1, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  source.start(time);
  source.stop(time + 0.06);
  trackActiveNode(source);
}

// ===== 音频情感识别：本地频谱分析 → tension / brightness → 匹配情感 =====

// Krumhansl–Schmuckler 调性轮廓（大调 / 小调），用于估计主音与调式
const KS_MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const KS_MINOR = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 1.67, 1.31];

// 迭代式 radix-2 Cooley–Tukey FFT（原地，长度必须为 2 的幂；re / im 等长）
function fftReal(re, im) {
  const n = re.length;
  // 位反转排列
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      const tr = re[i]; re[i] = re[j]; re[j] = tr;
      const ti = im[i]; im[i] = im[j]; im[j] = ti;
    }
  }
  // 蝶形运算
  for (let len = 2; len <= n; len <<= 1) {
    const half = len >> 1;
    const ang = (-2 * Math.PI) / len;
    const wRe = Math.cos(ang);
    const wIm = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let curRe = 1, curIm = 0;
      for (let k = 0; k < half; k++) {
        const aRe = re[i + k];
        const aIm = im[i + k];
        const bRe = re[i + k + half];
        const bIm = im[i + k + half];
        const tRe = bRe * curRe - bIm * curIm;
        const tIm = bRe * curIm + bIm * curRe;
        re[i + k] = aRe + tRe;
        im[i + k] = aIm + tIm;
        re[i + k + half] = aRe - tRe;
        im[i + k + half] = aIm - tIm;
        const nextRe = curRe * wRe - curIm * wIm;
        curIm = curRe * wIm + curIm * wRe;
        curRe = nextRe;
      }
    }
  }
}

// 对解码后的 AudioBuffer 分帧做频谱分析，返回平均特征 + chroma 分布
function analyzeAudioFeatures(buffer) {
  const sampleRate = buffer.sampleRate;
  const channels = buffer.numberOfChannels;
  // 仅分析前 30 秒，避免长音频阻塞主线程
  const limit = Math.min(buffer.length, Math.floor(sampleRate * 30));
  const mono = new Float32Array(limit);
  for (let c = 0; c < channels; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < limit; i++) mono[i] += data[i] / channels;
  }

  const frameSize = 2048;
  const hop = 1024;
  const half = frameSize >> 1;
  const hann = new Float32Array(frameSize);
  for (let i = 0; i < frameSize; i++) {
    hann[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (frameSize - 1)));
  }

  const re = new Float32Array(frameSize);
  const im = new Float32Array(frameSize);
  const chroma = new Float32Array(12);

  let centroidSum = 0, flatnessSum = 0, rmsSum = 0, zcrSum = 0, frames = 0;

  for (let start = 0; start + frameSize <= limit; start += hop) {
    let sumSq = 0, zc = 0, prevSign = 0;
    for (let i = 0; i < frameSize; i++) {
      const raw = mono[start + i];
      re[i] = raw * hann[i];
      im[i] = 0;
      sumSq += raw * raw;
      const sign = raw >= 0 ? 1 : -1;
      if (i > 0 && sign !== prevSign) zc++;
      prevSign = sign;
    }
    fftReal(re, im);

    let magSum = 0, weighted = 0, arith = 0, logSum = 0;
    for (let i = 0; i < half; i++) {
      const m = Math.hypot(re[i], im[i]);
      const freq = (i * sampleRate) / frameSize;
      magSum += m;
      weighted += m * freq;
      arith += m;
      logSum += Math.log(m + 1e-9);
      if (freq >= 30 && freq <= 5000 && m > 0) {
        const midi = 69 + 12 * Math.log2(freq / 440);
        const pc = ((Math.round(midi) % 12) + 12) % 12;
        chroma[pc] += m;
      }
    }
    centroidSum += magSum > 0 ? weighted / magSum : 0;
    flatnessSum += arith > 0 ? Math.exp(logSum / half) / (arith / half) : 0;
    rmsSum += Math.sqrt(sumSq / frameSize);
    zcrSum += zc / (frameSize - 1);
    frames++;
  }

  if (frames === 0) return null;
  return {
    centroid: centroidSum / frames,
    flatness: flatnessSum / frames,
    rms: rmsSum / frames,
    zcr: zcrSum / frames,
    chroma
  };
}

function pearsonCorr(a, b) {
  const n = a.length;
  let meanA = 0, meanB = 0;
  for (let i = 0; i < n; i++) { meanA += a[i]; meanB += b[i]; }
  meanA /= n; meanB /= n;
  let num = 0, denA = 0, denB = 0;
  for (let i = 0; i < n; i++) {
    const da = a[i] - meanA;
    const db = b[i] - meanB;
    num += da * db; denA += da * da; denB += db * db;
  }
  return num / (Math.sqrt(denA * denB) || 1e-9);
}

// 用 Krumhansl–Schmuckler 轮廓匹配主音 + 大小调
function detectKeyMode(chroma) {
  let best = { score: -Infinity, tonic: 0, mode: 'major' };
  for (let tonic = 0; tonic < 12; tonic++) {
    const rotated = new Array(12);
    for (let i = 0; i < 12; i++) rotated[i] = chroma[(i + tonic) % 12];
    const major = pearsonCorr(rotated, KS_MAJOR);
    const minor = pearsonCorr(rotated, KS_MINOR);
    if (major > best.score) best = { score: major, tonic, mode: 'major' };
    if (minor > best.score) best = { score: minor, tonic, mode: 'minor' };
  }
  return best;
}

// 把声学特征映射到 tension / brightness（0~1），为启发式估算
function featuresToMood(features, keyMode) {
  const centroid = Math.max(1, features.centroid);
  const lo = Math.log2(300), hi = Math.log2(3500);
  let brightness = (Math.log2(centroid) - lo) / (hi - lo);
  brightness = Math.max(0.05, Math.min(0.97, brightness));

  const energyNorm = Math.min(1, features.rms / 0.25);
  const zcrNorm = Math.min(1, features.zcr / 0.35);
  const minorBonus = keyMode.mode === 'minor' ? 1 : 0;
  let tension = 0.22 + 0.28 * features.flatness + 0.22 * minorBonus + 0.16 * energyNorm + 0.12 * zcrNorm;
  tension = Math.max(0.05, Math.min(0.97, tension));
  return { tension, brightness };
}

function findNearestEmotion(tension, brightness) {
  let best = { dist: Infinity, emotion: EMOTIONS[0], index: 0 };
  EMOTIONS.forEach((emotion, index) => {
    const dist = Math.hypot(emotion.tension - tension, emotion.brightness - brightness);
    if (dist < best.dist) best = { dist, emotion, index };
  });
  return best;
}

function renderAudioResult(features, keyMode, mood, emotion) {
  const tonicName = NOTES[keyMode.tonic].name.split(' ')[0];
  const modeLabel = keyMode.mode === 'minor' ? '小调' : '大调';
  const tPct = Math.round(mood.tension * 100);
  const bPct = Math.round(mood.brightness * 100);
  audioResult.innerHTML = `
    <div class="metric-row">
      <span>调式估计：<strong>${tonicName} ${modeLabel}</strong></span>
      <span>频谱重心：<strong>${Math.round(features.centroid)} Hz</strong></span>
      <span>频谱平坦度：<strong>${features.flatness.toFixed(2)}</strong></span>
      <span>匹配情感：<strong>${emotion.name}</strong></span>
    </div>
    <div class="audio-meters">
      <span class="meter">
        <span class="meter-label">tension</span>
        <span class="meter-track"><span class="meter-fill meter-fill--tension" style="width:${tPct}%"></span></span>
        <span class="meter-value">${mood.tension.toFixed(2)}</span>
      </span>
      <span class="meter">
        <span class="meter-label">brightness</span>
        <span class="meter-track"><span class="meter-fill meter-fill--brightness" style="width:${bPct}%"></span></span>
        <span class="meter-value">${mood.brightness.toFixed(2)}</span>
      </span>
    </div>
    <p class="hint">已自动套用到「情感和弦进行」，可在上方试听或查看实例片段。该结果为基于本地频谱特征的启发式估计，仅供参考。</p>
  `;
}

async function handleAudioFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  audioResult.innerHTML = '<p class="hint">正在解码与本地分析，请稍候…</p>';
  try {
    const arrayBuffer = await file.arrayBuffer();
    ensureAudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    // 延后一帧再计算，让"分析中"提示先渲染
    window.setTimeout(() => {
      let features;
      try {
        features = analyzeAudioFeatures(audioBuffer);
      } catch (err) {
        audioResult.innerHTML = '<p class="hint audio-error">分析过程出错，请换一段音频再试。</p>';
        return;
      }
      if (!features) {
        audioResult.innerHTML = '<p class="hint audio-error">音频太短，无法提取有效特征。</p>';
        return;
      }
      const keyMode = detectKeyMode(features.chroma);
      const mood = featuresToMood(features, keyMode);
      const match = findNearestEmotion(mood.tension, mood.brightness);
      emotionSelect.value = String(match.index);
      updateEmotionProgression();
      renderAudioResult(features, keyMode, mood, match.emotion);
    }, 20);
  } catch (err) {
    audioResult.innerHTML = '<p class="hint audio-error">无法解码该音频，请尝试 wav / mp3 / m4a / ogg 等常见格式。</p>';
  }
}

init();
