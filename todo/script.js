(() => {
  // Elements
  const input = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('taskList');
  const remaining = document.getElementById('remaining');
  const filters = Array.from(document.querySelectorAll('.filter'));
  const clearAll = document.getElementById('clearAll');
  const clearCompleted = document.getElementById('clearCompleted');
  const themeToggle = document.getElementById('themeToggle');

  // State
  let tasks = JSON.parse(localStorage.getItem('todo_tasks') || '[]');
  let filter = 'all';

  // Helpers
  function save(){
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
  }

  function addTaskObj(text){
    const task = { id: Date.now(), text, done:false };
    tasks.unshift(task); // newest on top
    save();
    render();
  }

  function render(){
    // filter tasks
    const visible = tasks.filter(t => {
      if(filter === 'active') return !t.done;
      if(filter === 'completed') return t.done;
      return true;
    });
    list.innerHTML = '';
    visible.forEach(t => {
      const li = document.createElement('li');
      li.className = 'task-item enter';
      li.dataset.id = t.id;
      li.innerHTML = `
        <div class="check ${t.done ? 'checked' : ''}" role="button" title="Toggle done">${t.done ? '✓' : ''}</div>
        <div class="text ${t.done ? 'completed' : ''}" contenteditable="false">${escapeHtml(t.text)}</div>
        <div class="actions">
          <button class="edit" title="Edit">✎</button>
          <button class="delete" title="Delete">🗑</button>
        </div>
      `;
      // events
      li.querySelector('.check').addEventListener('click', () => toggleDone(t.id));
      li.querySelector('.delete').addEventListener('click', () => deleteTask(t.id));
      li.querySelector('.edit').addEventListener('click', () => editTask(li, t.id));
      list.appendChild(li);
    });
    updateCounts();
  }

  function updateCounts(){
    const left = tasks.filter(t=>!t.done).length;
    remaining.textContent = `${left} item${left !== 1 ? 's' : ''} left`;
  }

  function toggleDone(id){
    tasks = tasks.map(t => t.id === id ? {...t, done: !t.done} : t);
    save();
    render();
  }

  function deleteTask(id){
    tasks = tasks.filter(t => t.id !== id);
    save();
    render();
  }

  function editTask(li, id){
    const textEl = li.querySelector('.text');
    textEl.contentEditable = 'true';
    textEl.focus();
    // put caret at end
    document.execCommand('selectAll', false, null);
    document.getSelection().collapseToEnd();

    function finish(){
      textEl.contentEditable = 'false';
      const val = textEl.textContent.trim();
      if(val) {
        tasks = tasks.map(t => t.id === id ? {...t, text: val} : t);
      } else {
        // if empty after edit remove
        tasks = tasks.filter(t => t.id !== id);
      }
      save();
      render();
      cleanup();
    }
    function onKey(e){
      if(e.key === 'Enter'){ e.preventDefault(); finish(); }
      if(e.key === 'Escape'){ render(); cleanup(); }
    }
    function cleanup(){
      textEl.removeEventListener('blur', finish);
      textEl.removeEventListener('keydown', onKey);
    }
    textEl.addEventListener('blur', finish);
    textEl.addEventListener('keydown', onKey);
  }

  function clearAllTasks(){
    if(!confirm('Clear all tasks?')) return;
    tasks = [];
    save();
    render();
  }
  function clearCompletedTasks(){
    tasks = tasks.filter(t => !t.done);
    save();
    render();
  }

  // input handlers
  addBtn.addEventListener('click', () => {
    const val = input.value.trim();
    if(!val) return;
    addTaskObj(val);
    input.value = '';
  });
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      e.preventDefault();
      addBtn.click();
    }
  });

  // filter handlers
  filters.forEach(f => f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    filter = f.dataset.filter;
    render();
  }));

  // clear handlers
  clearAll.addEventListener('click', clearAllTasks);
  clearCompleted.addEventListener('click', clearCompletedTasks);

  // theme toggle
  function setTheme(dark){
    document.body.classList.toggle('dark', dark);
    themeToggle.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('todo_theme_dark', dark ? '1' : '0');
  }
  themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
  setTheme(localStorage.getItem('todo_theme_dark') === '1');

  // initial render
  render();

  // small helper: prevent XSS in editable text render
  function escapeHtml(str){
    return str.replace(/[&<>"']/g, tag => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[tag]));
  }
})();
