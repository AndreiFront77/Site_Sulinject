const IMG={"hero": "imagens/hero.webp", "fachada": "imagens/fachada.webp", "moldes-para-injecao-plastica": "imagens/moldes-para-injecao-plastica.webp", "usinagem-industrial": "imagens/usinagem-industrial.webp", "injecao-plastica": "imagens/injecao-plastica.webp", "metalizacao-a-vacuo": "imagens/metalizacao-a-vacuo.webp", "desenvolvimento-de-pecas": "imagens/desenvolvimento-de-pecas.webp", "face": "imagens/face.webp", "logo": "imagens/logo.webp"};
const ALT={"moldes-para-injecao-plastica":"Molde de injeção metálico aberto, com as duas metades sobre uma bancada","usinagem-industrial":"Fresa de usinagem trabalhando em uma peça metálica, com cavacos e fluido de corte","injecao-plastica":"Peças plásticas brancas alinhadas sobre a bancada, junto ao molde de injeção","metalizacao-a-vacuo":"Peças com acabamento metalizado cromado sobre bancada metálica","desenvolvimento-de-pecas":"Conjunto de peças plásticas técnicas brancas, pretas e vermelhas sobre bancada"};
document.getElementById("logo").src=IMG.logo;document.getElementById("flogo").src=IMG.logo;
const CFG={phone:"555135914893",waNote:"Número de WhatsApp ainda não validado"};
const MSG="Olá! Conheci a Sulinject pelo site e gostaria de solicitar informações sobre um projeto industrial.";
const S=[
{s:"moldes-para-injecao-plastica",n:"Moldes para injeção plástica",h:"Moldes para injeção plástica",d:"O molde define a forma, a repetibilidade e o custo de cada peça injetada. Planejar o ferramental junto com o projeto da peça evita retrabalho.",u:["Levantamento de requisitos técnicos da peça","Planejamento do ferramental conforme a aplicação","Alinhamento entre molde, material e volume previsto"],f:["O que preciso enviar para iniciar um molde?","Desenho 3D, material desejado, quantidade estimada e a aplicação da peça."]},
{s:"usinagem-industrial",n:"Usinagem industrial",h:"Usinagem industrial para peças técnicas",d:"A usinagem produz componentes personalizados a partir de especificações dimensionais, em peças únicas ou lotes. Os equipamentos utilizados serão descritos após confirmação com a Sulinject.",u:["Componentes sob demanda","Apoio a protótipos e ferramental","Peças conforme desenho técnico"],f:["Quais materiais podem ser usinados?","Depende da especificação do projeto. Informe o material no pedido de orçamento."]},
{s:"injecao-plastica",n:"Injeção plástica",h:"Injeção plástica de peças industriais",d:"Na injeção, o material plástico é conduzido a um molde e assume a geometria da peça. É um processo indicado para produzir componentes com repetibilidade.",u:["Peças técnicas injetadas","Materiais conforme especificação","Produção alinhada à quantidade estimada"],f:["Há quantidade mínima?","Informe a quantidade estimada no formulário para uma avaliação comercial."]},
{s:"metalizacao-a-vacuo",n:"Metalização a vácuo",h:"Metalização a vácuo de componentes",d:"Metalização é um acabamento que deposita uma camada metálica fina sobre a superfície de uma peça. Em geral, é usada para efeito visual e funcional. A capacidade específica da Sulinject será confirmada antes da publicação.",u:["Acabamento de componentes plásticos","Aplicação decorativa ou funcional","Definição conforme a peça e o uso final"],f:["Toda peça pode ser metalizada?","Depende do material e do projeto. Descreva a peça para avaliação."]},
{s:"desenvolvimento-de-pecas",n:"Desenvolvimento de peças",h:"Desenvolvimento de peças e ferramental sob demanda",d:"Do conceito ao componente: avaliação de necessidades, análise técnica e integração entre peça, molde, fabricação e acabamento.",u:["Avaliação das necessidades do cliente","Análise técnica da peça","Integração com ferramental e acabamento"],f:["Posso enviar só uma ideia?","Sim. Quanto mais informações, mais precisa será a análise inicial."]}];
const $=document.getElementById("app");
const NAV=[["#/","Início"],["#/sobre-a-sulinject","Empresa"],["#/servicos","Serviços"],["#/produtos-e-aplicacoes","Produtos"],["#/contato","Contato"]];
const menuToggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav");
function setMenu(open){
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");
  nav.classList.toggle("is-open",open);
}
menuToggle.addEventListener("click",()=>setMenu(menuToggle.getAttribute("aria-expanded")!=="true"));
nav.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
addEventListener("resize",()=>{if(innerWidth>760)setMenu(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const cta=(src)=>`<a class="btn" href="#/solicitar-orcamento${src?"?s="+src:""}">Solicitar orçamento</a>`;
const crumb=(...p)=>`<p class="crumb"><a href="#/">Início</a>${p.map(x=>" / "+(x[1]?`<a href="${x[1]}">${x[0]}</a>`:x[0])).join("")}</p>`;
const faq=(q,a)=>`<details><summary>${q}</summary><p>${a}</p></details>`;
const routes={
"/":()=>({t:"Sulinject — Injeção Plástica, Moldes e Usinagem",h:`
<section class="hero" style="--hero:url(${IMG.hero})"><div class="wrap"><div><h1>Soluções em Injeção Plástica, Moldes e Usinagem</h1>
<p>A Sulinject oferece soluções industriais para o desenvolvimento de peças, processos de injeção, usinagem e acabamentos, conectando necessidades técnicas a possibilidades de fabricação.</p>
<div class="acts">${cta()}<a class="btn ghost" href="#/servicos">Conhecer nossos serviços</a></div></div></div></section>
<section class="wrap"><div class="split"><div><h2>Peças, ferramental e acabamento em um só fluxo</h2><p>A Sulinject atua com soluções industriais para componentes plásticos, de moldes e injeção à usinagem e metalização, de acordo com as especificações de cada aplicação.</p>${cta()}</div><figure><img src="${IMG.fachada}" alt="Ilustração da fachada de um edifício industrial moderno com o emblema da Sulinject" loading="lazy"><figcaption>Ilustração conceitual da fachada.</figcaption></figure></div></section>
<section class="wrap"><h2>Principais serviços</h2><div class="grid">${S.map(x=>`<a class="card im" href="#/servicos/${x.s}"><img src="${IMG[x.s]}" alt="${ALT[x.s]}" loading="lazy"><div><h3>${x.n}</h3><p>${x.d.split(". ")[0]}.</p></div></a>`).join("")}</div></section>
<section class="soft"><div class="wrap"><h2>Como solicitar um projeto</h2><ol><li>Envie desenho, material desejado e quantidade estimada.</li><li>A equipe técnica analisa a necessidade.</li><li>Você recebe o retorno comercial.</li></ol>${cta()}</div></section>
<section class="wrap"><h2>Perguntas frequentes</h2>${faq("Posso pedir orçamento sem desenho técnico?","Sim. Descreva a aplicação da peça e anexe o que tiver.")}${faq("A Sulinject atende empresas de outras cidades e estados?","As regiões e os critérios de atendimento serão confirmados pela Sulinject.")}</section>`}),
"/sobre-a-sulinject":()=>({t:"Sobre a Sulinject",h:`<section class="wrap">${crumb(["Empresa"])}<h1>Sobre a Sulinject</h1>
<p>A Sulinject é uma empresa que atua no segmento de soluções industriais para componentes plásticos e processos de fabricação. Sua proposta é atender diferentes necessidades de produção, contribuindo para o desenvolvimento de peças e projetos adequados às especificações de cada aplicação.</p>
<p>Projeto, ferramental, fabricação e acabamento funcionam melhor quando são pensados em conjunto: decisões tomadas cedo no desenho da peça reduzem ajustes no molde e na produção.</p>
<figure style="max-width:900px;margin-bottom:20px"><img src="${IMG.fachada}" alt="Ilustração da fachada de um edifício industrial moderno com o emblema da Sulinject"><figcaption>Ilustração conceitual da fachada.</figcaption></figure><div class="note">Pendentes: história oficial, fotografia real da fábrica e valores institucionais (sugestões sujeitas à aprovação).</div>${cta()}</section>`}),
"/servicos":()=>({t:"Serviços — Sulinject",h:`<section class="wrap">${crumb(["Serviços"])}<h1>Serviços</h1><div class="grid">${S.map(x=>`<a class="card im" href="#/servicos/${x.s}"><img src="${IMG[x.s]}" alt="${ALT[x.s]}" loading="lazy"><div><h3>${x.n}</h3><p>${x.d.split(". ")[0]}.</p></div></a>`).join("")}</div></section>`}),
"/produtos-e-aplicacoes":()=>({t:"Produtos e aplicações — Sulinject",h:`<section class="wrap">${crumb(["Produtos e aplicações"])}<h1>Produtos e aplicações</h1><p>Fotos reais da Sulinject substituirão estas imagens na versão final.</p><div class="grid">${[["desenvolvimento-de-pecas","Peças técnicas injetadas"],["metalizacao-a-vacuo","Peças com acabamento metalizado"],["face","Protetor facial (a confirmar)"]].map(([k,t])=>`<div class="card im"><img src="${IMG[k]}" alt="${ALT[k]||"Protetor facial transparente sobre bancada metálica"}" loading="lazy"><div><h3>${t}</h3></div></div>`).join("")}</div><div class="note">A seção de face shields só entra após confirmação da comercialização atual.</div></section>`}),
"/solicitar-orcamento":(q)=>({t:"Solicitar orçamento — Sulinject",h:`<section class="wrap">${crumb(["Solicitar orçamento"])}<h1>Solicitar orçamento</h1><div id="fwrap"><form id="f" novalidate>
<label>Nome<input name="nome" autocomplete="name" required><span class="err"></span></label>
<div class="row"><label>Empresa<input name="empresa" autocomplete="organization"><span class="err"></span></label><label>E-mail<input name="email" type="email" autocomplete="email" required><span class="err"></span></label></div>
<div class="row"><label>Telefone ou WhatsApp<input name="tel" type="tel" autocomplete="tel" required><span class="err"></span></label><label>Cidade e estado<input name="cidade" autocomplete="address-level2"><span class="err"></span></label></div>
<label>Serviço de interesse<select name="servico" required><option value="">Selecione</option>${S.map(x=>`<option value="${x.s}"${q===x.s?" selected":""}>${x.n}</option>`).join("")}</select><span class="err"></span></label>
<label>Descrição do projeto<textarea name="desc" rows="4" required></textarea><span class="err"></span></label>
<div class="row"><label>Material desejado<input name="mat"></label><label>Quantidade estimada<input name="qtd"></label></div>
<label>Prazo desejado<input name="prazo"></label>
<label class="chkrow"><input type="checkbox" name="lgpd" required> Concordo com o tratamento dos meus dados para retorno deste orçamento.</label><span class="err"></span>
<button class="btn" type="submit">Enviar solicitação</button></form></div>
<div class="note">Prévia: o envio real (endpoint seguro, e-mail por variável de ambiente, anexos e antispam) entra na versão Next.js. Aqui o formulário valida e simula o resultado.</div></section>`,after(){
const f=document.getElementById("f");f.addEventListener("submit",e=>{e.preventDefault();let bad=0;
f.querySelectorAll("[required]").forEach(el=>{const ok=el.type==="checkbox"?el.checked:el.checkValidity()&&el.value.trim();const m=el.closest("label").querySelector(".err")||el.parentElement.nextElementSibling;
el.setAttribute("aria-invalid",!ok);if(m)m.textContent=ok?"":(el.type==="email"?"Informe um e-mail válido.":"Preencha este campo.");if(!ok)bad++});
if(bad){f.querySelector("[aria-invalid=true]").focus();return}
const b=f.querySelector("button");b.disabled=true;b.textContent="Enviando…";
setTimeout(()=>{document.getElementById("fwrap").innerHTML=`<div class="ok" role="status"><h2>Solicitação recebida</h2><p>Retornaremos pelo e-mail ou telefone informado.</p></div>`},900)})}}),
"/contato":()=>({t:"Contato — Sulinject",h:`<section class="wrap">${crumb(["Contato"])}<h1>Contato</h1><p>Telefone: <a href="tel:+555135914893">(51) 3591-4893</a><br>Atendimento a empresas de diferentes regiões (abrangência a confirmar)<br>Instagram: @sulinject</p><div class="note">Pendentes de confirmação: endereço (há dois em fontes públicas), e-mail, horário de atendimento, mapa e número habilitado no WhatsApp.</div>${cta()}</section>`}),
};
S.forEach(x=>routes["/servicos/"+x.s]=()=>({t:x.n+" — Sulinject",h:`<section class="wrap">${crumb(["Serviços","#/servicos"],[x.n])}<div class="split"><div><h1>${x.h}</h1><p>${x.d}</p></div><figure><img src="${IMG[x.s]}" alt="${ALT[x.s]}"></figure></div><h2>Aplicações e benefícios</h2><ul class="chk">${x.u.map(i=>`<li>${i}</li>`).join("")}</ul>${cta(x.s)}<h2 style="margin-top:40px">Perguntas frequentes</h2>${faq(...x.f)}<p>Veja também: ${S.filter(y=>y!==x).slice(0,2).map(y=>`<a href="#/servicos/${y.s}">${y.n}</a>`).join(" e ")}.</p></section>`}));
function go(){const[raw]=location.hash.slice(1).split("#"),[p,qs]=(raw||"/").split("?"),q=new URLSearchParams(qs||"").get("s");
const r=(routes[p]||(()=>({t:"Página não encontrada — Sulinject",h:`<section class="wrap"><h1>Página não encontrada</h1><p>O endereço não existe. <a href="#/">Voltar ao início</a>.</p></section>`})))(q);
$.innerHTML=r.h;document.title=r.t;r.after&&r.after();window.scrollTo(0,0);
document.getElementById("nav").innerHTML=NAV.map(([h,l])=>`<a href="${h}"${("#"+p===h||(h!=="#/"&&("#"+p).startsWith(h)))?' aria-current="page"':""}>${l}</a>`).join("");
document.getElementById("wa").href=`https://wa.me/${CFG.phone}?text=${encodeURIComponent(MSG)}`}
addEventListener("hashchange",go);go();
