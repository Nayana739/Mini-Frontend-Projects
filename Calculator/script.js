// Calculator enhanced JS
(() => {
  const display = document.getElementById('display');
  const buttons = Array.from(document.querySelectorAll('.btn'));
  const clearBtn = document.getElementById('clear');
  const equalsBtn = document.getElementById('equals');
  const historyEl = document.getElementById('history');
  const historyList = document.getElementById('historyList');
  const toggleHistory = document.getElementById('toggleHistory');
  const themeToggle = document.getElementById('themeToggle');

  let expr = '';
  const history = JSON.parse(localStorage.getItem('calc_history') || '[]');

  function renderDisplay(){
    display.value = expr || '0';
    historyEl.textContent = history.length ? history[history.length-1] : '';
  }

  function pushHistory(item){
    history.push(item);
    if(history.length > 20) history.shift();
    localStorage.setItem('calc_history', JSON.stringify(history));
    refreshHistoryList();
  }

  function refreshHistoryList(){
    historyList.innerHTML = '';
    history.slice().reverse().forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      historyList.appendChild(li);
    });
  }

  function sanitizeForEval(s){
    // Replace common symbols with JS-friendly ones
    return s
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/(\d+)%/g, '($1/100)'); // basic percent handling
  }

  function safeEval(input){
    // handle sqrt and ^ and percent
    try {
      // support sqrt(keyword)
      let v = input.replace(/sqrt\(([^)]+)\)/g, (_, inner) => `Math.sqrt(${inner})`);
      // support unary sqrt token 'sqrt' before number (like sqrt9)
      v = v.replace(/sqrt([0-9.]+)/g, (_,n)=>`Math.sqrt(${n})`);
      // support ^ as power
      v = v.replace(/([0-9.()]+)\s*\^\s*([0-9.()]+)/g, 'Math.pow($1,$2)');
      v = sanitizeForEval(v);
      // do final evaluation with Function (a bit safer than eval)
      // Only allow numbers, Math, operators and parentheses in the final string
      if(!/^[0-9+\-*/().%Mathpow\s,\/]*$/.test(v) && !v.includes('Math')) {
        throw new Error('Invalid characters');
      }
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${v})`)();
      return result;
    } catch (e) {
      return 'Error';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      if(val === 'back'){
        expr = expr.slice(0,-1);
      } else if(val === 'sqrt'){
        // append sqrt() and place cursor inside (simple)
        expr += 'sqrt(';
      } else if(val === '%'){
        expr += '%';
      } else if(val === '^'){
        expr += '^';
      } else if(val === '='){
        // ignore - equals handled separately
      } else {
        expr += val;
      }
      renderDisplay();
    });
  });

  equalsBtn.addEventListener('click', doCalculate);
  function doCalculate(){
    if(!expr) return;
    const out = safeEval(expr);
    pushHistory(`${expr} = ${out}`);
    expr = String(out);
    renderDisplay();
  }

  clearBtn.addEventListener('click', () => { expr=''; renderDisplay(); });

  // keyboard support
  window.addEventListener('keydown', e => {
    if(e.key === 'Enter') { e.preventDefault(); doCalculate(); return; }
    if(e.key === 'Backspace'){ expr = expr.slice(0,-1); renderDisplay(); return; }
    if(e.key === 'c' && (e.ctrlKey || e.metaKey)){ expr=''; renderDisplay(); return; }
    const accepted = '0123456789+-*/().^%';
    if(accepted.includes(e.key)) {
      expr += e.key;
      renderDisplay();
      return;
    }
    // map * / to friendly keys already included above
  });

  // history toggle
  toggleHistory.addEventListener('click', () => {
    const showing = getComputedStyle(historyList).display !== 'none';
    historyList.style.display = showing ? 'none' : 'block';
  });

  // theme toggle (light/dark)
  function setTheme(dark){
    document.body.classList.toggle('dark', dark);
    themeToggle.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('calc_theme_dark', dark ? '1' : '0');
  }
  themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark'));
  });

  // initialize
  renderDisplay();
  refreshHistoryList();
  setTheme(localStorage.getItem('calc_theme_dark') === '1');
})();
