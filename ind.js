var _0x157da6 = _0x40d0;
(function(_0x41b7cd, _0xafeffa) {
  var _0x10da4f = _0x40d0,
    _0x1248b4 = _0x41b7cd();
  while (!![]) {
    try {
      var _0x3f64c4 = -parseInt(_0x10da4f(0x185)) / 0x1 + parseInt(_0x10da4f(0x19e)) / 0x2 + parseInt(_0x10da4f(0x1a7)) / 0x3 * (parseInt(_0x10da4f(0x178)) / 0x4) + parseInt(_0x10da4f(0x17b)) / 0x5 * (-parseInt(_0x10da4f(0x18c)) / 0x6) + parseInt(_0x10da4f(0x19f)) / 0x7 * (parseInt(_0x10da4f(0x18a)) / 0x8) + -parseInt(_0x10da4f(0x1ab)) / 0x9 + parseInt(_0x10da4f(0x16c)) / 0xa;
      if (_0x3f64c4 === _0xafeffa) break;
      else _0x1248b4['push'](_0x1248b4['shift']());
    } catch (_0x549bf9) {
      _0x1248b4['push'](_0x1248b4['shift']());
    }
  }
}(_0x5089, 0x83644));
const quoteSection = document[_0x157da6(0x16d)]('quote'),
  userInput = document[_0x157da6(0x16d)](_0x157da6(0x17e));
var quoteApiurl = _0x157da6(0x181),
  days = 0x7;
let timeintv = 0x1e;
var funfactsbtnclckd = ![],
  timebtnclckd = ![],
  cstm = 0x0,
  buttonInnert = '',
  numberOftextButtons = document[_0x157da6(0x179)]('.text-button')['length'];
for (var i = 0x0; i < numberOftextButtons; i++) {
  document[_0x157da6(0x179)]('.text-button')[i][_0x157da6(0x192)](_0x157da6(0x176), function() {
    var _0x23f902 = _0x157da6;
    buttonInnert = this[_0x23f902(0x1a8)];
    timebtnclckd && (timeintv = buttonInnert);
    for (var _0x6a2f48 = 0x0; _0x6a2f48 < numberOftextButtons; _0x6a2f48++) {
      document[_0x23f902(0x179)](_0x23f902(0x17a))[_0x6a2f48]['classList'][_0x23f902(0x191)](_0x23f902(0x177)) && document[_0x23f902(0x179)](_0x23f902(0x17a))[_0x6a2f48][_0x23f902(0x18f)]['remove'](_0x23f902(0x177));
    }
    this[_0x23f902(0x18f)][_0x23f902(0x18d)](_0x23f902(0x177));
  });
}
var timebtn = () => {
    var _0x3866c0 = _0x157da6;
    timebtnclckd = !![], document['querySelector']('.time')[_0x3866c0(0x1b2)][_0x3866c0(0x1b5)] = _0x3866c0(0x1ae);
  },
  funfactsbtn = () => {
    var _0xc7301 = _0x157da6;
    funfactsbtnclckd = !![], document['querySelector'](_0xc7301(0x1b7))[_0xc7301(0x1b2)][_0xc7301(0x1b5)] = 'none', quoteSection['innerHTML'] = '', renderFunfacts();
  };
let quote = '',
  time = timeintv,
  timer = '',
  mistakes = 0x0,
  alert = '';

function _0x40d0(_0x433239, _0x3f6aa6) {
  var _0x508938 = _0x5089();
  return _0x40d0 = function(_0x40d0b8, _0xbf1046) {
    _0x40d0b8 = _0x40d0b8 - 0x16b;
    var _0x1165a9 = _0x508938[_0x40d0b8];
    return _0x1165a9;
  }, _0x40d0(_0x433239, _0x3f6aa6);
}

function _0x5089() {
  var _0x33e89e = ['https://api.api-ninjas.com/v1/facts?limit=', 'onload', 'cntr2', 'typed', 'createElement', 'alert', 'remove', 'Sacramento', 'text', 'log', '634374xsGeLb', '2767527JAWczz', 'span', 'css', '0\x2020px\x2040px\x20rgba(0,\x201,\x20255,', 'appendChild', 'boxShadow', 'toFixed', 'none', '345ORkbAh', 'innerText', '#sentence', 'application/json', '5585247GmLqYf', '.nvitm', '0\x2020px\x2040px\x20rgba(255,\x200,\x200,', 'block', 'append', 'disabled', 'split', 'style', 'responseText', 'accuracy', 'display', 'wS9NhanG99G653XML4F8fQ==Zx1i46RrEVVkibAr', '.time', 'round', 'querySelector', 'color', 'wpm', 'fact', '9775320cIoEZi', 'getElementById', '0\x2010px\x2020px\x20rgba(234,\x200,\x20255,\x200.5)', 'sans-serif', 'value', 'Enter', '\x20wpm', 'fail', 'join', 'html', 'click', 'active', '8452icbAdS', 'querySelectorAll', '.text-button', '5wkHYVW', 'toggle', 'content', 'quote-input', '\x20\x20\x20\x20', 'success', 'https://api.quotable.io/random?minLength=150&maxLength=200', 'font-family', 'input', 'cntr', '579847uovHpo', 'keypress', 'error', '.result', 'forEach', '16UPFEXY', 'length', '3538956IlCzVp', 'add', '\x20the\x20hype\x20...', 'classList', 'wordpm\x20due\x20to\x20calcreslt()', 'contains', 'addEventListener', '.grp'];
  _0x5089 = function() {
    return _0x33e89e;
  };
  return _0x5089();
}
var chck = 0x1,
  lastcharindex = 0x0,
  wordpm = 0x0,
  accrcy = 0x0,
  usinpln = 0x0,
  usinpltilnow = 0x0,
  reloaded = 0x0,
  bxs = 0x0,
  boxshdw = '';
const renderNewQuote = async () => {
  var _0x3b8c44 = _0x157da6;
  const _0x25712b = await fetch(quoteApiurl);
  let _0x392c4a = await _0x25712b['json']();
  quote = _0x392c4a[_0x3b8c44(0x17d)], quoteSection['innerHTML'] = '', quote[_0x3b8c44(0x1b1)]('')[_0x3b8c44(0x189)](_0x4336e3 => {
    var _0x320899 = _0x3b8c44;
    const _0x57e3a2 = document[_0x320899(0x198)]('span');
    _0x57e3a2[_0x320899(0x1a8)] = _0x4336e3, quoteSection[_0x320899(0x1a3)](_0x57e3a2);
  });
}, renderFunfacts = () => {
  var _0x447b28 = _0x157da6,
    _0x11eef1 = 0x1;
  $['ajax']({
    'method': 'GET',
    'url': _0x447b28(0x194) + _0x11eef1,
    'headers': {
      'X-Api-Key': _0x447b28(0x1b6)
    },
    'contentType': _0x447b28(0x1aa),
    'success': function(_0x3677d2) {
      var _0x1fa222 = _0x447b28;
      quote = _0x3677d2[0x0][_0x1fa222(0x16b)], quoteSection['innerHTML'] = '', quote[_0x1fa222(0x1b1)]('')['forEach'](_0x4902d6 => {
        var _0x3c99cc = _0x1fa222;
        const _0x39af8a = document[_0x3c99cc(0x198)](_0x3c99cc(0x1a0));
        _0x39af8a['innerText'] = _0x4902d6, quoteSection[_0x3c99cc(0x1a3)](_0x39af8a);
      }), console['log'](_0x3677d2[0x0][_0x1fa222(0x16b)]);
    },
    'error': function _0x5899cd(_0x400184) {
      var _0xc3a36b = _0x447b28;
      console[_0xc3a36b(0x187)]('Error:\x20', _0x400184[_0xc3a36b(0x1b3)]);
    }
  });
};
userInput[_0x157da6(0x192)](_0x157da6(0x183), () => {
  var _0x59f454 = _0x157da6;
  const _0x274739 = quoteSection['querySelectorAll'](_0x59f454(0x1a0)),
    _0x48549e = userInput[_0x59f454(0x170)][_0x59f454(0x1b1)]('');
  _0x274739['forEach']((_0x2e6d04, _0x5f1f09) => {
    var _0x352cf9 = _0x59f454;
    const _0x3d07d7 = _0x48549e[_0x5f1f09];
    if (_0x3d07d7 == null) _0x2e6d04[_0x352cf9(0x18f)][_0x352cf9(0x19a)](_0x352cf9(0x173)), _0x2e6d04[_0x352cf9(0x18f)]['remove'](_0x352cf9(0x180)), _0x2e6d04[_0x352cf9(0x18f)][_0x352cf9(0x19a)](_0x352cf9(0x197)), chck = 0x0;
    else _0x2e6d04['innerText'] == _0x3d07d7 ? (chck = 0x1, _0x2e6d04['classList'][_0x352cf9(0x18d)](_0x352cf9(0x180)), _0x2e6d04[_0x352cf9(0x18f)][_0x352cf9(0x19a)]('fail'), _0x2e6d04[_0x352cf9(0x18f)][_0x352cf9(0x18d)](_0x352cf9(0x197))) : (!_0x2e6d04[_0x352cf9(0x18f)][_0x352cf9(0x191)](_0x352cf9(0x173)) && (_0x2e6d04['classList'][_0x352cf9(0x18d)](_0x352cf9(0x173)), _0x2e6d04[_0x352cf9(0x18f)][_0x352cf9(0x18d)]('typed'), chck = 0x0, mistakes += 0x1), document[_0x352cf9(0x16d)]('mistakes')['innerText'] = mistakes);
  }), chck == 0x1 && (funfactsbtnclckd ? renderFunfacts() : renderNewQuote(), reloaded = 0x1, usinpln += userInput[_0x59f454(0x170)]['length'], userInput[_0x59f454(0x170)] = '');
});

function updateTimer() {
  var _0x2a1656 = _0x157da6;
  time == 0x0 ? displayResult() : (document[_0x2a1656(0x16d)]('timer')['innerText'] = --time + 's', calcreslt());
}
const timeReduce = () => {
    var _0x55323b = _0x157da6;
    time = timeintv, document[_0x55323b(0x16d)]('timer')['innerText'] = time + 's', timer = setInterval(updateTimer, 0x3e8);
  },
  blink = () => {
    var _0x16f4e7 = _0x157da6;
    wordpm == 0x0 ? document[_0x16f4e7(0x16d)]('quote-input')[_0x16f4e7(0x18f)][_0x16f4e7(0x17c)](_0x16f4e7(0x199)) : document[_0x16f4e7(0x16d)]('quote-input')[_0x16f4e7(0x18f)]['contains'](_0x16f4e7(0x199)) && document[_0x16f4e7(0x16d)]('quote-input')['classList'][_0x16f4e7(0x19a)](_0x16f4e7(0x199));
  },
  alertb = () => {
    alert = setInterval(blink, 0x1f4);
  },
  displayResult = () => {
    var _0x4432bc = _0x157da6;
    document[_0x4432bc(0x1b9)](_0x4432bc(0x188))[_0x4432bc(0x1b2)]['display'] = _0x4432bc(0x1ae), clearInterval(timer), clearInterval(alert), userInput[_0x4432bc(0x1b2)][_0x4432bc(0x1b5)] = 'none', userInput[_0x4432bc(0x1b0)] = !![];
    let _0x1de508 = timeintv / 0x3c;
    usinpln += userInput[_0x4432bc(0x170)][_0x4432bc(0x18b)], document[_0x4432bc(0x16d)](_0x4432bc(0x1bb))[_0x4432bc(0x1a8)] = '\x20' + (usinpln / 0x5 / _0x1de508)[_0x4432bc(0x1a5)](0x2) + _0x4432bc(0x172), document[_0x4432bc(0x16d)](_0x4432bc(0x1b4))[_0x4432bc(0x1a8)] = '\x20' + Math['round']((usinpln - mistakes) / usinpln * 0x64) + '\x20%';
  },
  stopTest = () => {
    var _0x359397 = _0x157da6;
    document[_0x359397(0x1b9)](_0x359397(0x188))[_0x359397(0x1b2)][_0x359397(0x1b5)] = 'block', userInput['style'][_0x359397(0x1b5)] = _0x359397(0x1a6), clearInterval(timer), clearInterval(alert);
    let _0x455993 = (timeintv - time) / 0x3c;
    reloaded == 0x0 ? usinpln = userInput[_0x359397(0x170)]['length'] : usinpln += userInput[_0x359397(0x170)][_0x359397(0x18b)], document[_0x359397(0x16d)](_0x359397(0x1bb))[_0x359397(0x1a8)] = (usinpln / 0x5 / _0x455993)['toFixed'](0x2) + _0x359397(0x172), document[_0x359397(0x16d)](_0x359397(0x1b4))[_0x359397(0x1a8)] = Math[_0x359397(0x1b8)]((usinpln - mistakes) / usinpln * 0x64) + '\x20%';
  },
  calcreslt = () => {
    var _0x16b278 = _0x157da6;
    let _0x599102 = (timeintv - time) / 0x3c;
    reloaded == 0x0 ? usinpltilnow = userInput[_0x16b278(0x170)][_0x16b278(0x18b)] : usinpltilnow = usinpln + userInput['value'][_0x16b278(0x18b)];
    wordpm = Math['round']((usinpltilnow / 0x5 / _0x599102)[_0x16b278(0x1a5)](0x2)), accrcy = Math['round']((usinpltilnow[_0x16b278(0x18b)] - mistakes) / usinpltilnow * 0x64), console[_0x16b278(0x19d)](wordpm + _0x16b278(0x190));
    if (wordpm > 0x0 && wordpm <= 0x1e) bxs = (wordpm / 0x64 * 1.7)[_0x16b278(0x1a5)](0x2), boxshdw = _0x16b278(0x1a2) + bxs + ')', document[_0x16b278(0x16d)](_0x16b278(0x184))[_0x16b278(0x1b2)]['boxShadow'] = boxshdw, bxs = (wordpm / 0x64)[_0x16b278(0x1a5)](0x2), boxshdw = _0x16b278(0x1a2) + bxs + ')', document[_0x16b278(0x16d)]('cntr2')[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = boxshdw;
    else {
      if (wordpm > 0x1e && wordpm <= 0x3c) bxs = (wordpm / 0x64 / 1.2)['toFixed'](0x2), boxshdw = _0x16b278(0x1ad) + bxs + ')', document['getElementById']('cntr')[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = boxshdw;
      else {
        if (wordpm > 0x3c && wordpm <= 0x5a) bxs = (wordpm / 0xb4)[_0x16b278(0x1a5)](0x2), boxshdw = _0x16b278(0x1a2) + bxs + ')', document['getElementById'](_0x16b278(0x196))[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = boxshdw, bxs = wordpm / 0x64, boxshdw = '0\x2020px\x2040px\x20rgba(255,\x200,\x200,' + bxs + ')', document['getElementById'](_0x16b278(0x184))[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = boxshdw;
        else {
          if (wordpm > 0x5a && wordpm <= 0x78) bxs = (wordpm / 0xf0)[_0x16b278(0x1a5)](0x2), boxshdw = _0x16b278(0x1ad) + bxs + ')', document['getElementById']('cntr2')[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = boxshdw, bxs = wordpm / 0x64, boxshdw = _0x16b278(0x1ad) + bxs + ')', document['getElementById']('cntr')['style'][_0x16b278(0x1a4)] = boxshdw;
          else wordpm > 0x78 && (document[_0x16b278(0x16d)](_0x16b278(0x196))[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = '0\x2010px\x2020px\x20rgba(234,\x200,\x20255,\x200.5)', document[_0x16b278(0x16d)](_0x16b278(0x184))[_0x16b278(0x1b2)][_0x16b278(0x1a4)] = _0x16b278(0x16e));
        }
      }
    }
  },
  startTest = () => {
    mistakes = 0x0, timer = '', timeReduce(), alertb();
  };
var start = ![];
document[_0x157da6(0x192)]('keypress', function() {
  var _0x16a311 = _0x157da6;
  startTest(), document[_0x16a311(0x179)](_0x16a311(0x193))[0x0][_0x16a311(0x1b2)][_0x16a311(0x1b5)] = _0x16a311(0x1a6), document[_0x16a311(0x1b9)](_0x16a311(0x1ac))[_0x16a311(0x1b2)][_0x16a311(0x1b5)] = _0x16a311(0x1a6);
  var _0x455d58 = !![];
}, {
  'once': !![]
}), document[_0x157da6(0x192)](_0x157da6(0x186), () => {
  var _0x5966c6 = _0x157da6;
  event['key'] == _0x5966c6(0x171) && stopTest();
}), window[_0x157da6(0x195)] = () => {
  var _0x58a00b = _0x157da6;
  userInput['value'] = '', renderNewQuote();
  const _0x3eb0a6 = [{
    'text': 'it',
    'color': 'red',
    'style': 'sans-serif'
  }, {
    'text': '\x20\x20the\x20hype\x20...',
    'color': 'blue',
    'style': 'Sacramento'
  }, {
    'text': 'it',
    'color': 'red',
    'style': _0x58a00b(0x16f)
  }, {
    'text': _0x58a00b(0x17f) + _0x58a00b(0x18e),
    'color': 'blue',
    'style': _0x58a00b(0x19b)
  }];
  carousel(_0x3eb0a6, _0x58a00b(0x1a9));
};

function waitForMs(_0x1a440c) {
  return new Promise(_0x4b4259 => setTimeout(_0x4b4259, _0x1a440c));
}
async function typeSentence(_0x1541f4, _0x1534ce, _0x34fc5f = 0x64) {
  var _0x5ff1ca = _0x157da6;
  const _0x4a4088 = _0x1541f4[_0x5ff1ca(0x1b1)]('');
  let _0xfa5547 = 0x0;
  while (_0xfa5547 < _0x4a4088[_0x5ff1ca(0x18b)]) {
    await waitForMs(_0x34fc5f), $(_0x1534ce)[_0x5ff1ca(0x1af)](_0x4a4088[_0xfa5547]), _0xfa5547++;
  }
  return;
}
async function deleteSentence(_0x4fd1c9) {
  var _0x206fb2 = _0x157da6;
  const _0x2235fc = $(_0x4fd1c9)[_0x206fb2(0x175)](),
    _0x3283fd = _0x2235fc[_0x206fb2(0x1b1)]('');
  let _0x9e804 = 0x0;
  while (_0x3283fd['length'] > 0x0) {
    await waitForMs(0x64), _0x3283fd['pop'](), $(_0x4fd1c9)[_0x206fb2(0x175)](_0x3283fd[_0x206fb2(0x174)](''));
  }
}
async function carousel(_0x134192, _0x2614e0) {
  var _0x523e65 = _0x157da6,
    _0x23d5e1 = 0x0;
  while (!![]) {
    updateFontColor(_0x2614e0, _0x134192[_0x23d5e1][_0x523e65(0x1ba)], _0x134192[_0x23d5e1]['style']), await typeSentence(_0x134192[_0x23d5e1][_0x523e65(0x19c)], _0x2614e0), await waitForMs(0x5dc), await deleteSentence(_0x2614e0), await waitForMs(0x1f4), _0x23d5e1++, _0x23d5e1 >= _0x134192[_0x523e65(0x18b)] && (_0x23d5e1 = 0x0);
  }
}

function updateFontColor(_0x4e513a, _0x21e2ec, _0x11e605) {
  var _0x203595 = _0x157da6;
  $(_0x4e513a)['css'](_0x203595(0x1ba), _0x21e2ec), $(_0x4e513a)[_0x203595(0x1a1)](_0x203595(0x182), _0x11e605);
}
