import { TretaSeverity, WikiEntry } from '../types';

/**
 * ATTENTION: This is the LOCAL DATABASE (MOCK).
 * 
 * Why does this exist?
 * 1. Because connecting to a real backend requires money and effort.
 * 2. Because users need to see something while the real API fails to load.
 * 3. To preserve the "classic" hits of the Brazilian Dev Community.
 * 
 * If you are a recruiter reading this: I totally know how to build Scalable Microservices™, 
 * I just chose to hardcode a JSON array for "performance reasons".
 */

export const STATIC_TRETAS: WikiEntry[] = [
  {
    id: 'primo-rico-vs-devs',
    title: 'O Fim da CLT e o Dev de 14h/dia',
    date: '2023-02-10',
    author: 'Coach Financeiro Genérico',
    severity: TretaSeverity.HIGH,
    content: `
### Contexto
Um vídeo viralizou onde um coach financeiro sugeria que devs deveriam trabalhar 14 horas por dia para "vencer na vida", ignorando conceitos básicos de burnout, saúde mental e a lei da física.

### A Reação da Comunidade
O Twitter (agora X, infelizmente) entrou em colapso. Memes de devs programando dormindo, teclados pegando fogo e a clássica resposta: "Se eu trabalhar 14h, eu crio mais bugs do que resolvo".

### Veredito
Trabalhe inteligente, não trabalhe até morrer. O código legado vai continuar lá amanhã, infelizmente.
    `,
    tags: ['burnout', 'coach-de-pote', 'clt-premium', 'linkedin-disney'],
    likes: 8900,
    source: 'LOCAL'
  },
  {
    id: 'php-is-dead-again',
    title: 'A Morte do PHP (pela 458ª vez)',
    date: '2023-11-04',
    author: 'Influencer de JS',
    severity: TretaSeverity.MEDIUM,
    content: `
### Contexto
Um dev de 19 anos postou que PHP é legado e que empresas sérias usam apenas JS no backend (Node/Bun/Deno/Whatever-is-new-this-week). O post atingiu a bolha do Laravel e do WordPress simultaneamente.

### Fatos
- O PHP roda 70%+ da web.
- O framework JS favorito dele foi depreciado semana passada.
- A vaga de PHP paga o boleto dele.

### Veredito
PHP é igual barata: vai sobreviver a um ataque nuclear e continuar servindo HTML renderizado no server enquanto seu pod de Kubernetes reinicia.
    `,
    tags: ['php', 'backend', 'takes-errados', 'guerra-santa'],
    likes: 404,
    source: 'LOCAL'
  },
  {
    id: 'clean-architecture-frontend',
    title: 'Clean Architecture no botão de Login',
    date: '2024-01-15',
    author: 'Arquiteto de Software Java no Frontend',
    severity: TretaSeverity.CRITICAL,
    content: `
### O Crime
Um PR foi aberto criando 15 arquivos, 4 camadas de abstração, 3 interfaces e 2 DTOs para fazer um fetch num endpoint de login e salvar o token no localStorage.

### Argumento
"Precisamos desacoplar o React da regra de negócio".

### Realidade
A regra de negócio era literalmente \`if (token) save(token)\`.

### Veredito
Overengineering clássico. O código ficou tão limpo que desapareceu da compreensão humana. Se você precisa de um diagrama UML para entender um botão, você falhou.
    `,
    tags: ['overengineering', 'frontend', 'clean-code-de-taubate', 'react'],
    likes: 1337,
    source: 'LOCAL'
  },
  {
    id: 'db-prod-delete',
    title: 'O Estagiário que apagou o Banco de Prod',
    date: '2024-05-10',
    author: 'User404',
    severity: TretaSeverity.NUCLEAR,
    content: `
### O Incidente
Rodou um \`DELETE FROM users\` e esqueceu o \`WHERE\`. Clássico, atemporal, devastador.

### A Culpa
A internet queria crucificar o estagiário, mas a senioridade interveio: 
1. Por que o estagiário tinha permissão de DELETE na produção?
2. Por que não tinha \`--safe-updates\`?
3. Por que o Senior estava no FIFA?

### Veredito
A culpa é do Tech Lead. O estagiário apenas testou a resiliência do processo (que falhou miseravelmente).
    `,
    tags: ['db', 'sql', 'post-mortem', 'junior-doing-senior-stuff'],
    likes: 9000,
    source: 'LOCAL'
  },
  {
    id: 'rust-evangelism',
    title: 'Rewrite it in Rust',
    date: '2024-06-20',
    author: 'A Rust Foundation (Não oficial)',
    severity: TretaSeverity.MEDIUM,
    content: `
### Contexto
Qualquer projeto Open Source existente em C++ ou Go recebe a inevitável issue: "Por que não reescrever em Rust? É memory safe!".

### A Treta
Mantenedores de Linux, Curl e outros gigantes cansados de explicar que reescrever 30 anos de código não é um projeto de fim de semana, e que "unsafe" existe no Rust também.

### Veredito
Rust é incrível. A comunidade as vezes parece testemunha de jeová de compilador. "Você tem um minuto para ouvir a palavra do Borrow Checker?"
    `,
    tags: ['rust', 'c++', 'memory-safe', 'rewrite'],
    likes: 600,
    source: 'LOCAL'
  },
  // TODO: Add the one about the guy who npm installed a virus
  // TODO: Add the LinkedIn "Unicorn" post
];