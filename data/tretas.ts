import { TretaSeverity, WikiEntry } from '../types';

/**
 * ATTENTION: This is the LOCAL DATABASE (MOCK).
 * 
 * Why does this exist?
 * 1. Because connecting to a real backend requires money and effort.
 * 2. Because users need to see something while the real API fails to load.
 * 3. To preserve the "classic" hits of the Brazilian Dev Community.
 * 
 * These mock entries are formatted EXACTLY like GitHub Issues would appear in the live feed.
 * They serve as examples of how a proper issue should be structured.
 * 
 * If you are a recruiter reading this: I totally know how to build Scalable Microservices™, 
 * I just chose to hardcode a JSON array for "performance reasons".
 */

export const STATIC_TRETAS: WikiEntry[] = [
  {
    id: '1',
    title: 'O Fim da CLT e o Dev de 14h/dia',
    date: '2023-02-10',
    author: 'CoachFinanceiroGenerico',
    severity: TretaSeverity.HIGH,
    content: `## Contexto

Um vídeo viralizou onde um coach financeiro sugeria que devs deveriam trabalhar 14 horas por dia para "vencer na vida", ignorando conceitos básicos de burnout, saúde mental e a lei da física.

## A Reação da Comunidade

O Twitter (agora X, infelizmente) entrou em colapso. Memes de devs programando dormindo, teclados pegando fogo e a clássica resposta: "Se eu trabalhar 14h, eu crio mais bugs do que resolvo".

## Veredito

Trabalhe inteligente, não trabalhe até morrer. O código legado vai continuar lá amanhã, infelizmente.

---

**Links relacionados:**
- [Thread original no Twitter](https://twitter.com)
- [Resposta da comunidade](https://twitter.com)`,
    tags: ['burnout', 'coach-de-pote', 'clt-premium', 'linkedin-disney'],
    likes: 8900,
    prLink: 'https://github.com/bmsrk/BolhaDevTretasWiki/issues/1',
    source: 'LOCAL'
  },
  {
    id: '2',
    title: 'A Morte do PHP (pela 458ª vez)',
    date: '2023-11-04',
    author: 'InfluencerDeJS',
    severity: TretaSeverity.MEDIUM,
    content: `## Contexto

Um dev de 19 anos postou que PHP é legado e que empresas sérias usam apenas JS no backend (Node/Bun/Deno/Whatever-is-new-this-week). O post atingiu a bolha do Laravel e do WordPress simultaneamente.

## Fatos

- O PHP roda 70%+ da web
- O framework JS favorito dele foi depreciado semana passada
- A vaga de PHP paga o boleto dele

## Veredito

PHP é igual barata: vai sobreviver a um ataque nuclear e continuar servindo HTML renderizado no server enquanto seu pod de Kubernetes reinicia.

---

**Estatísticas:**
- 77.4% dos websites usam PHP (W3Techs)
- Laravel é um dos frameworks backend mais populares
- WordPress (PHP) roda 43% da web`,
    tags: ['php', 'backend', 'takes-errados', 'guerra-santa'],
    likes: 404,
    prLink: 'https://github.com/bmsrk/BolhaDevTretasWiki/issues/2',
    source: 'LOCAL'
  },
  {
    id: '3',
    title: 'Clean Architecture no botão de Login',
    date: '2024-01-15',
    author: 'ArquitetoDeJavaNoFrontend',
    severity: TretaSeverity.CRITICAL,
    content: `## O Crime

Um PR foi aberto criando 15 arquivos, 4 camadas de abstração, 3 interfaces e 2 DTOs para fazer um fetch num endpoint de login e salvar o token no localStorage.

## Argumento do Autor

"Precisamos desacoplar o React da regra de negócio para garantir escalabilidade e manutenibilidade."

## Realidade

A regra de negócio era literalmente:

\`\`\`typescript
if (token) {
  localStorage.setItem('token', token);
}
\`\`\`

## Estrutura do PR

- \`LoginUseCase.ts\`
- \`LoginUseCaseImpl.ts\`
- \`ILoginRepository.ts\`
- \`LoginRepositoryImpl.ts\`
- \`LoginDTO.ts\`
- \`LoginResponseDTO.ts\`
- ... e mais 9 arquivos

## Veredito

Overengineering clássico. O código ficou tão limpo que desapareceu da compreensão humana. Se você precisa de um diagrama UML para entender um botão, você falhou.

---

**Lições aprendidas:**
- KISS (Keep It Simple, Stupid)
- YAGNI (You Aren't Gonna Need It)
- Abstrações devem resolver problemas reais, não imaginários`,
    tags: ['overengineering', 'frontend', 'clean-code-de-taubate', 'react'],
    likes: 1337,
    prLink: 'https://github.com/bmsrk/BolhaDevTretasWiki/issues/3',
    source: 'LOCAL'
  },
  {
    id: '4',
    title: 'O Estagiário que apagou o Banco de Prod',
    date: '2024-05-10',
    author: 'User404',
    severity: TretaSeverity.NUCLEAR,
    content: `## O Incidente

Rodou um \`DELETE FROM users\` e esqueceu o \`WHERE\`. Clássico, atemporal, devastador.

## Timeline do Desastre

**14:32** - Estagiário executa comando na aba errada
**14:33** - Percebe que algo está errado
**14:34** - "Query OK, 1,247,893 rows affected"
**14:35** - Panic mode ativado
**14:36** - Slack explode

## A Culpa

A internet queria crucificar o estagiário, mas a senioridade interveio com as verdadeiras perguntas:

1. Por que o estagiário tinha permissão de DELETE na produção?
2. Por que não tinha \`--safe-updates\` habilitado?
3. Por que o backup demorava 4 horas para rodar?
4. Por que o Senior estava no FIFA enquanto isso?

## Post-Mortem

- Backup restaurado após 3h de downtime
- Processo de permissões revisado
- Estagiário virou Senior (trauma acelera carreira)
- Senior virou ex-Senior

## Veredito

A culpa é do Tech Lead. O estagiário apenas testou a resiliência do processo (que falhou miseravelmente).

---

**Melhorias implementadas:**
- Permissões por ambiente
- \`--safe-updates\` obrigatório
- Backups incrementais de hora em hora
- Code review obrigatório para migrations`,
    tags: ['db', 'sql', 'post-mortem', 'junior-doing-senior-stuff'],
    likes: 9000,
    prLink: 'https://github.com/bmsrk/BolhaDevTretasWiki/issues/4',
    source: 'LOCAL'
  },
  {
    id: '5',
    title: 'Rewrite it in Rust',
    date: '2024-06-20',
    author: 'RustFoundationUnofficialEvangelist',
    severity: TretaSeverity.MEDIUM,
    content: `## Contexto

Qualquer projeto Open Source existente em C++ ou Go recebe a inevitável issue: "Por que não reescrever em Rust? É memory safe!".

## A Treta

Mantenedores de Linux Kernel, Curl e outros gigantes cansados de explicar que:
- Reescrever 30 anos de código não é um projeto de fim de semana
- \`unsafe\` existe no Rust também
- C++ moderno tem smart pointers
- "Memory safe" não significa "bug safe"

## Resposta Típica de Mantenedor

> "PRs are welcome! Vejo você daqui 15 anos quando terminar de reescrever."

## Casos Reais

- **Discord**: Migrou de Go para Rust (com sucesso)
- **Dropbox**: Reescreveu partes em Rust
- **Linux Kernel**: Adicionou suporte a Rust (mas não reescreveu tudo)

## Veredito

Rust é incrível. A comunidade às vezes parece testemunha de Jeová de compilador. 

"Você tem um minuto para ouvir a palavra do Borrow Checker?"

---

**Rust é bom para:**
- Sistemas de baixo nível
- Performance crítica
- Concorrência segura

**Rust NÃO é:**
- A solução para todos os problemas
- Mais fácil que outras linguagens
- Necessário para todo projeto`,
    tags: ['rust', 'c++', 'memory-safe', 'rewrite'],
    likes: 600,
    prLink: 'https://github.com/bmsrk/BolhaDevTretasWiki/issues/5',
    source: 'LOCAL'
  },
  // TODO: Add the one about the guy who npm installed a virus
  // TODO: Add the LinkedIn "Unicorn" post
];