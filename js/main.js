var map = {
  "しゃ" : "XA",
  "ちゃ" : "CA",
  "しゅ" : "XU",
  "ちゅ" : "CU",
  "しょ" : "XO",
  "ちょ" : "CO",
  "しぇ" : "XE",
  "ちぇ" : "CE",

  // 特殊拡張
  'こと': 'ＫＴ',
  'わた': 'ＷＴ',
  'かも': 'ＫＭ',
  'する': 'ＳＲ',
  'られ': 'ＲＲ',
  'ねば': 'ＮＢ',
  'にち': 'ＮＴ',
  'した': 'ＳＴ',
  'もの': 'ＭＮ',
  'ため': 'ＴＭ',
  'たら': 'ＴＲ',
  'ざる': 'ＺＲ',
  'びと': 'ＢＴ',
  'だち': 'ＤＴ',
  'たち': 'ＴＴ',
  'ます': 'ＭＳ',
  'でも': 'ＤＭ',
  'なる': 'ＮＲ',
  'また': 'ＭＴ',
  'がら': 'ＧＲ',
  'われ': 'ＷＲ',
  'ひと': 'ＨＴ',
  'です': 'ＤＳ',
  'から': 'ＫＲ',
  'よる': 'ＹＲ',
  'たび': 'ＴＢ',
  'ごと': 'ＧＴ',

  // その他
  'うぉ':     'WSO',
  'うぉー':     'WP',
  'ふぉー':   'FP',
  'てぃ':     'TGI',
  'でぃ':     'DCI',
  'わい':     'WF',
  'さい':     'SF',
  'せい':     'SS',
  'ざい':     'ZV',
  'ぜい':     'ZX',

  // 撥音拡張
  'かん': 'KZ',
  'きん': 'KK',
  'くん': 'KJ',
  'けん': 'KD',
  'こん': 'KL',

  'さん': 'SZ',
  'しん': 'SK',
  'すん': 'SJ',
  'せん': 'SD',
  'そん': 'SL',

  'たん': 'TZ',
  'ちん': 'TK',
  'つん': 'TJ',
  'てん': 'TD',
  'とん': 'TL',

  'なん': 'NZ',
  'にん': 'NK',
  'ぬん': 'NJ',
  'ねん': 'ND',
  'のん': 'NL',

  'はん': 'HZ',
  'ひん': 'HK',
  'ふん': 'HJ',
  'へん': 'HD',
  'ほん': 'HL',

  'まん': 'MZ',
  'みん': 'MK',
  'むん': 'MJ',
  'めん': 'MD',
  'もん': 'ML',

  'やん': 'YZ',
  'ゆん': 'YJ',
  'よん': 'YL',

  'らん': 'RZ',
  'りん': 'RK',
  'るん': 'RJ',
  'れん': 'RD',
  'ろん': 'RL',
  'わん': 'WZ',

  // 二重母音拡張
  'かい': 'KQ',
  'くう': 'KH',
  'けい': 'KW',
  'こう': 'KP',

  'さい': 'SQ',
  'すう': 'SH',
  'せい': 'SW',
  'そう': 'SP',

  'たい': 'TQ',
  'つう': 'TH',
  'てい': 'TW',
  'とう': 'TP',

  'だい': 'DQ',
  'づう': 'DH',
  'でい': 'DW',
  'どう': 'DP',

  'ない': 'NQ',
  'ぬう': 'NH',
  'ねい': 'NW',
  'のう': 'NP',

  'はい': 'HQ',
  'ふう': 'HH',
  'ひい': 'HW',
  'ほう': 'HP',

  'まい': 'MQ',
  'むう': 'MH',
  'めい': 'MW',
  'もう': 'MP',

  'やい': 'YQ',
  'ゆう': 'YH',
  'よう': 'YP',

  'らい': 'RQ',
  'るう': 'RH',
  'れい': 'RW',
  'ろう': 'RP',

  // 一文字
  'ざ': 'ZC',
  'ぜ': 'ZF',
};

var ruby = function(rb, rt, prefix, suffix){
  return prefix + '<ruby><rb>' + rb + '</rb><rt>' + rt + '</rt></ruby>' + suffix;
}

azik_filter = function(text){
  $.each(map, function(word, keystroke){
    text = text.replace(
      new RegExp( "([^>]?)(" + word + ")([^<]?)" ),
      ruby("$2", keystroke, "$1", "$3")
    );
  });
  return text
}

$('#input textarea').on('keyup', function(e){
  var v = $(e.target).val();
  $('#preview p').html(azik_filter(v));
});

$('#input textarea').focus();
