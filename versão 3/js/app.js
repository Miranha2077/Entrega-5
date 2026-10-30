/* Recursos copilotados com IA (ver AUDITORIA_IA.md). Contratos de dados no README. */
const html = document.documentElement;
const btnTema = document.getElementById('tema');
let grafico;

// --- Tema com persistência (try/catch: localStorage pode estar bloqueado) ---
function lerTema(){
  try { const t = localStorage.getItem('tema'); if (t) return t; } catch(e){}
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function aplicarTema(t){
  html.setAttribute('data-bs-theme', t);
  btnTema.setAttribute('aria-pressed', String(t === 'dark'));
  btnTema.textContent = t === 'dark' ? 'Modo claro' : 'Modo escuro';
  if (grafico) pintarGrafico();
}
btnTema.addEventListener('click', () => {
  const t = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  aplicarTema(t);
  try { localStorage.setItem('tema', t); } catch(e){} // só persiste escolha explícita
});

// --- Gráfico: contrato { rotulo: string, valor: number (segundos) } ---
const dados = [
  { rotulo: '2004', valor: 150 },
  { rotulo: '2012', valor: 75 },
  { rotulo: '2016 em diante', valor: 47 }
];
function pintarGrafico(){
  const css = getComputedStyle(html);
  const texto = css.getPropertyValue('--cor-texto').trim();
  grafico.options.scales.x.ticks.color = texto;
  grafico.options.scales.y.ticks.color = texto;
  grafico.data.datasets[0].backgroundColor = dados.map((_, i) => i === dados.length - 1 ? '#6b7a0a' : css.getPropertyValue('--cor-primaria').trim());
  grafico.update();
}
const tabelaFallback = () => {
  document.querySelector('.grafico').innerHTML = '<table class="table"><caption>Dados do gráfico (Chart.js não carregou)</caption><tbody>' +
    dados.map(d => `<tr><td>${d.rotulo}</td><td>${d.valor} s</td></tr>`).join('') + '</tbody></table>';
};
try {
  if (typeof Chart === 'undefined') tabelaFallback(); else grafico = new Chart(document.getElementById('grafico'), {
  type: 'bar',
  data: { labels: dados.map(d => d.rotulo),
          datasets: [{ label: 'Segundos em uma tela (Gloria Mark)', data: dados.map(d => d.valor), borderRadius: 8 }] },
  options: { responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false },
      tooltip: { callbacks: { label: c => c.parsed.y + ' s' } } },
    scales: { y: { min: 0, max: 160, ticks: { callback: v => v + ' s' } }, x: { ticks: {} } } }
});
} catch (e) { console.error('Gráfico indisponível:', e); tabelaFallback(); } // uma falha no gráfico não pode derrubar o questionário

// --- Questionário: contrato { id, texto, inverso? }, resposta 0..3 ---
const perguntas = [
  { id: 'q1', texto: 'Meu celular ou o chat do trabalho me interrompem várias vezes por hora.' },
  { id: 'q2', texto: 'Troco de aba ou de tarefa antes de terminar o que comecei.' },
  { id: 'q3', texto: 'Releio o mesmo parágrafo ou mensagem porque minha mente foi para outro lugar.' },
  { id: 'q4', texto: 'Pego o celular durante conversas, refeições ou reuniões sem perceber.' },
  { id: 'q5', texto: 'Sinto desconforto ou ansiedade quando fico um tempo sem checar notificações.' },
  { id: 'q6', texto: 'Consigo reservar blocos de foco, sem notificações, em que realmente avanço.', inverso: true }
];
const escala = ['Nunca', 'Às vezes', 'Frequentemente', 'Sempre'];
const form = document.getElementById('quiz');
const barra = document.getElementById('barra');
perguntas.forEach(p => {
  const fs = document.createElement('fieldset');
  fs.className = 'fieldset-q';
  const lg = document.createElement('legend');
  lg.textContent = p.texto;
  const grupo = document.createElement('div');
  grupo.className = 'opcoes';
  escala.forEach((e, i) => {
    const lb = document.createElement('label');
    const inp = document.createElement('input');
    inp.type = 'radio'; inp.name = p.id; inp.value = i;
    lb.append(inp, document.createTextNode(e));
    grupo.append(lb);
  });
  fs.append(lg, grupo);
  document.getElementById('perguntas').append(fs);
});
form.addEventListener('change', () => {
  form.querySelectorAll('.opcoes label').forEach(l => l.classList.toggle('sel', l.firstChild.checked));
  const resp = perguntas.filter(p => form.elements[p.id].value !== '').length;
  const pct = Math.round(resp / perguntas.length * 100);
  barra.style.width = pct + '%'; barra.textContent = pct + '%';
  barra.parentElement.setAttribute('aria-valuenow', pct);
});
const faixas = [
  { max: 5, titulo: 'Atenção bem protegida', txt: 'Seus hábitos protegem o foco. Continue reservando blocos sem notificações e avise o time quando estiver concentrado.' },
  { max: 11, titulo: 'Atenção parcialmente fragmentada', txt: 'Há interrupções frequentes. Experimente silenciar notificações por 50 minutos, ler mensagens em dois horários fixos e deixar o celular fora do alcance durante tarefas importantes.' },
  { max: 18, titulo: 'Atenção muito fragmentada', txt: 'A troca constante de contexto provavelmente cobra um preço alto. Reduza as notificações ao essencial, combine blocos de foco com a liderança e, se a dificuldade de concentração persistir, procure um profissional de saúde.' }
];
form.addEventListener('submit', ev => {
  ev.preventDefault();
  const erro = document.getElementById('erro');
  if (perguntas.some(p => form.elements[p.id].value === '')) { erro.hidden = false; return; }
  erro.hidden = true;
  const total = perguntas.reduce((s, p) => { const v = +form.elements[p.id].value; return s + (p.inverso ? 3 - v : v); }, 0);
  const f = faixas.find(x => total <= x.max);
  const corpo = `<p class="h4">${f.titulo}: ${total}/18</p><p>${f.txt}</p><p class="small text-secondary">Instrumento autoral ilustrativo, sem validade clínica.</p>`;
  const alvo = document.getElementById('diagnostico');
  if (window.bootstrap && bootstrap.Modal) {
    alvo.textContent = '';
    document.getElementById('resultado').innerHTML = corpo;
    bootstrap.Modal.getOrCreateInstance(document.getElementById('modal')).show();
  } else {
    alvo.innerHTML = corpo; // fallback: sem o JS do Bootstrap o resultado aparece abaixo do formulário
    alvo.scrollIntoView({ block: 'nearest' });
  }
});

aplicarTema(lerTema());
