// 八卦基础数据
export const TRIGRAMS = {
  qian: { name: '乾', symbol: '☰', binary: '111', element: '天', meaning: '刚健、积极、创造', number: 1 },
  dui: { name: '兑', symbol: '☱', binary: '110', element: '泽', meaning: '喜悦、沟通、残缺', number: 2 },
  li: { name: '离', symbol: '☲', binary: '101', element: '火', meaning: '光明、依附、文明', number: 3 },
  zhen: { name: '震', symbol: '☳', binary: '100', element: '雷', meaning: '动、恐惧、崛起', number: 4 },
  xun: { name: '巽', symbol: '☴', binary: '011', element: '风', meaning: '入、谦逊、分散', number: 5 },
  kan: { name: '坎', symbol: '☵', binary: '010', element: '水', meaning: '险、陷、智慧', number: 6 },
  gen: { name: '艮', symbol: '☶', binary: '001', element: '山', meaning: '止、稳重、阻碍', number: 7 },
  kun: { name: '坤', symbol: '☷', binary: '000', element: '地', meaning: '柔顺、承载、滋养', number: 8 },
};

// 六十四卦数据
export const HEXAGRAMS = {
  '111111': { name: '乾为天', judgement: '元亨利贞', lines: ['潜龙勿用', '见龙在田', '终日乾乾', '或跃在渊', '飞龙在天', '亢龙有悔'] },
  '000000': { name: '坤为地', judgement: '元亨，利牝马之贞', lines: ['履霜坚冰至', '直方大', '含章可贞', '括囊无咎', '黄裳元吉', '龙战于野'] },
  '100010': { name: '水雷屯', judgement: '元亨利贞，勿用有攸往', lines: ['磐桓利居贞', '屯如邅如', '即鹿无虞', '乘马班如', '屯其膏', '乘马班如'] },
  '010001': { name: '山水蒙', judgement: '亨，匪我求童蒙', lines: ['发蒙利用刑人', '包蒙吉', '勿用取女', '困蒙吝', '童蒙吉', '击蒙不利为寇'] },
  '111010': { name: '水天需', judgement: '有孚，光亨贞吉', lines: ['需于郊', '需于沙', '需于泥', '需于血', '需于酒食', '入于穴'] },
  '010111': { name: '天水讼', judgement: '有孚窒惕，中吉', lines: ['不永所事', '不克讼归而逋', '食旧德', '不克讼复即命', '讼元吉', '或锡之鞶带'] },
  '010000': { name: '地水师', judgement: '贞，丈人吉', lines: ['师出以律', '在师中吉', '师或舆尸', '师左次', '田有禽', '大君有命'] },
  '000010': { name: '水地比', judgement: '吉，原筮元永贞', lines: ['有孚比之', '比之自内', '比之匪人', '外比之', '显比', '比之无首'] },
  '110111': { name: '风天小畜', judgement: '亨，密云不雨', lines: ['复自道', '牵复吉', '舆说辐', '有孚血去', '有孚挛如', '既雨既处'] },
  '111110': { name: '天泽履', judgement: '履虎尾，不咥人', lines: ['素履往', '履道坦坦', '眇能视', '履虎尾愬愬', '夬履', '视履考祥'] },
  '111000': { name: '地天泰', judgement: '小往大来，吉亨', lines: ['拔茅茹', '包荒', '无平不陂', '翩翩不富', '帝乙归妹', '城复于隍'] },
  '000111': { name: '天地否', judgement: '否之匪人，不利君子贞', lines: ['拔茅茹', '包承', '包羞', '有命无咎', '休否', '倾否'] },
  '111101': { name: '天火同人', judgement: '同人于野，亨', lines: ['同人于门', '同人于宗', '伏戎于莽', '乘其墉', '同人先号啕', '同人于郊'] },
  '101111': { name: '火天大有', judgement: '元亨', lines: ['无交害', '大车以载', '公用亨于天子', '匪其彭', '厥孚交如', '自天祐之'] },
  '100000': { name: '地山谦', judgement: '亨，君子有终', lines: ['谦谦君子', '鸣谦', '劳谦', '无不利撝谦', '不富以其邻', '鸣谦利用行师'] },
  '000001': { name: '雷地豫', judgement: '利建侯行师', lines: ['鸣豫', '介于石', '盱豫', '由豫', '贞疾', '冥豫'] },
  '100110': { name: '泽雷随', judgement: '元亨利贞', lines: ['官有渝', '系小子', '系丈夫', '随有获', '孚于嘉', '拘系之'] },
  '011001': { name: '山风蛊', judgement: '元亨，利涉大川', lines: ['干父之蛊', '干母之蛊', '干父之蛊', '裕父之蛊', '干父之蛊', '不事王侯'] },
  '110000': { name: '地泽临', judgement: '元亨利贞', lines: ['咸临', '咸临', '甘临', '至临', '知临', '敦临'] },
  '000011': { name: '风地观', judgement: '盥而不荐', lines: ['童观', '窥观', '观我生', '观国之光', '观我生', '观其生'] },
  '100101': { name: '火雷噬嗑', judgement: '亨，利用狱', lines: ['屦校灭趾', '噬肤灭鼻', '噬腊肉', '噬干胏', '噬干肉', '何校灭耳'] },
  '101001': { name: '山火贲', judgement: '亨，小利有攸往', lines: ['贲其趾', '贲其须', '贲如濡如', '贲如皤如', '贲于丘园', '白贲'] },
  '100001': { name: '山雷颐', judgement: '贞吉，观颐', lines: ['舍尔灵龟', '颠颐', '拂颐', '颠颐', '拂经', '由颐'] },
  '001001': { name: '泽山咸', judgement: '亨，利贞，取女吉', lines: ['咸其拇', '咸其腓', '咸其股', '贞吉悔亡', '咸其脢', '咸其辅颊舌'] },
  '101000': { name: '地火明夷', judgement: '利艰贞', lines: ['明夷于飞', '明夷夷于左股', '明夷于南狩', '入于左腹', '箕子之明夷', '不明晦'] },
  '000101': { name: '火地晋', judgement: '康侯用锡马蕃庶', lines: ['晋如摧如', '晋如愁如', '众允', '晋如鼫鼠', '悔亡', '晋其角'] },
  '101010': { name: '火水未济', judgement: '亨，小狐汔济', lines: ['濡其尾', '曳其轮', '未济征凶', '贞吉悔亡', '贞吉无悔', '有孚于饮酒'] },
  '010101': { name: '水火既济', judgement: '亨小，利贞', lines: ['曳其轮', '妇丧其茀', '高宗伐鬼方', '繻有衣袽', '东邻杀牛', '濡其首'] },
  '001111': { name: '天山遁', judgement: '亨，小利贞', lines: ['遁尾', '执之用黄牛之革', '系遁', '好遁', '嘉遁', '肥遁'] },
  '111100': { name: '雷天大壮', judgement: '利贞', lines: ['壮于趾', '贞吉', '小人用壮', '贞吉悔亡', '丧羊于易', '羝羊触藩'] },
  '101100': { name: '火地晋', judgement: '康侯用锡马蕃庶', lines: ['晋如摧如', '晋如愁如', '众允', '晋如鼫鼠', '悔亡', '晋其角'] },
  '001101': { name: '山火贲', judgement: '亨，小利有攸往', lines: ['贲其趾', '贲其须', '贲如濡如', '贲如皤如', '贲于丘园', '白贲'] },
  '011111': { name: '风天小畜', judgement: '亨，密云不雨', lines: ['复自道', '牵复吉', '舆说辐', '有孚血去', '有孚挛如', '既雨既处'] },
  '111011': { name: '天泽履', judgement: '履虎尾，不咥人', lines: ['素履往', '履道坦坦', '眇能视', '履虎尾愬愬', '夬履', '视履考祥'] },
};

// 生成随机数
export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

// 根据数字获取八卦
export const getTrigramByNumber = (num) => {
  const adjusted = ((num - 1) % 8) + 1;
  const entries = Object.entries(TRIGRAMS);
  const found = entries.find(([_, t]) => t.number === adjusted);
  return found ? found[0] : 'qian';
};

// 生成变爻
export const generateChangingLines = () => {
  const lines = [];
  for (let i = 0; i < 6; i++) {
    const num = getRandomNumber(4);
    if (num === 1 || num === 4) {
      lines.push(i);
    }
  }
  return lines;
};

// 生成卦象
export const generateHexagram = () => {
  // 生成上卦和下卦
  const upperNum = getRandomNumber(8);
  const lowerNum = getRandomNumber(8);
  const upperTrigram = getTrigramByNumber(upperNum);
  const lowerTrigram = getTrigramByNumber(lowerNum);
  
  // 组合成六爻二进制
  const upperBinary = TRIGRAMS[upperTrigram].binary;
  const lowerBinary = TRIGRAMS[lowerTrigram].binary;
  const hexagramBinary = upperBinary + lowerBinary;
  
  // 生成变爻
  const changingLines = generateChangingLines();
  
  // 生成变卦
  let changedBinary = hexagramBinary.split('');
  changingLines.forEach(index => {
    changedBinary[index] = changedBinary[index] === '0' ? '1' : '0';
  });
  const changedHexagramBinary = changedBinary.join('');
  
  // 生成互卦
  const mutualBinary = hexagramBinary.slice(1, 4) + hexagramBinary.slice(2, 5);
  
  return {
    original: {
      binary: hexagramBinary,
      upperTrigram,
      lowerTrigram,
      name: HEXAGRAMS[hexagramBinary]?.name || `${TRIGRAMS[upperTrigram].name}${TRIGRAMS[lowerTrigram].name}`,
      judgement: HEXAGRAMS[hexagramBinary]?.judgement || '元亨利贞',
      lines: HEXAGRAMS[hexagramBinary]?.lines || ['初九', '九二', '九三', '九四', '九五', '上九'],
    },
    changed: {
      binary: changedHexagramBinary,
      upperTrigram: getTrigramByNumber(parseInt(changedHexagramBinary.slice(0, 3), 2) + 1),
      lowerTrigram: getTrigramByNumber(parseInt(changedHexagramBinary.slice(3, 6), 2) + 1),
      name: HEXAGRAMS[changedHexagramBinary]?.name || '变卦',
      judgement: HEXAGRAMS[changedHexagramBinary]?.judgement || '变卦之辞',
    },
    mutual: {
      binary: mutualBinary,
      upperTrigram: getTrigramByNumber(parseInt(mutualBinary.slice(0, 3), 2) + 1),
      lowerTrigram: getTrigramByNumber(parseInt(mutualBinary.slice(3, 6), 2) + 1),
      name: '互卦',
    },
    changingLines,
  };
};

// 生成现代解读
export const generateInterpretation = (hexagram) => {
  const interpretations = [
    '近期事业上会有新的机遇，需要保持积极的心态去把握。',
    '感情方面可能会遇到一些波折，但只要真诚沟通就能化解。',
    '财运上宜守不宜进，避免冒险投资。',
    '健康方面需要注意休息，避免过度劳累。',
    '人际关系上会遇到贵人相助，要保持谦逊。',
    '学业上需要更加努力，才能取得好成绩。',
  ];
  
  return interpretations[getRandomNumber(interpretations.length) - 1];
};
