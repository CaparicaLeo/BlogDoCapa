---
title: 'Git Flow — O Mapa que Todo Dev Precisa Conhecer'
description: 'Uma explicação direta sobre a estratégia de branches que organiza (e salva) times de desenvolvimento no mundo real.'
pubDate: 'Jun 10 2025'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

Se você já trabalhou em um projeto com mais de duas pessoas, sabe bem como é: alguém sobe código na branch errada, outro faz um merge sem querer, e de repente a `main` está quebrada na sexta à tarde. É aquele momento clássico de *"quem mexeu aqui??"*.

O **Git Flow** nasceu justamente pra resolver esse caos. É uma convenção — não uma ferramenta mágica — que define **quando, como e onde cada tipo de código deve viver** dentro do seu repositório.

---

## O Que É Git Flow, Afinal?

Git Flow é um modelo de branching criado por **Vincent Driessen** lá em 2010 (sim, tem mais de 15 anos e ainda domina o mercado). A ideia central é simples: separar o código por **intenção**.

Em vez de todo mundo commitar no mesmo lugar e rezar para não dar conflito, você define branches com papéis claros. Cada tipo de trabalho tem seu espaço.

---

## As Peças do Tabuleiro

O modelo divide as branches em dois grupos: as **eternas**, que vivem durante toda a vida do projeto, e as **temporárias**, que nascem e morrem conforme a necessidade.

### 🟣 `main` — A Branch Sagrada

Aqui só entra código que **já está em produção**. Cada merge na `main` representa uma versão entregue, e por isso ela sempre vem acompanhada de uma **tag de versão** (`v1.0`, `v2.0`, `v2.0.1`...).

A regra é simples: se está na `main`, está funcionando. Ninguém comita diretamente aqui.

### 🔵 `develop` — O Coração do Desenvolvimento

É a branch de integração. Todo o trabalho do dia a dia converge aqui antes de chegar à produção. Ela reflete o estado mais recente do desenvolvimento — o que está "quase pronto".

> Pensa na `develop` como a versão "beta" interna do seu produto.

---

## As Branches Temporárias

### 🟤 `feature/*` — Uma por Funcionalidade

Toda vez que você vai desenvolver algo novo, cria uma branch de feature:

```bash
git checkout -b feature/pagina-de-login
```

Ela nasce da `develop` e morre de volta na `develop`. Enquanto você trabalha, o resto da equipe não vê seu código pela metade. Quando termina, faz o merge e deleta a branch. Simples assim.

O padrão de nome é livre, mas o mais comum é `feature/nome-da-funcionalidade`. Cada dev tem a sua, trabalhando em paralelo sem pisar no pé do outro.

### 🟢 `release/*` — Preparando para Lançar

Quando a `develop` acumula funcionalidades suficientes para uma nova versão, você abre uma branch de release:

```bash
git checkout -b release/2.0
```

Nessa fase, **não entra mais feature nova**. Só ajustes finos, documentação e correção de bugs menores. É o momento de estabilizar antes de apertar o botão.

Quando estiver pronta, ela é mergeada em **dois lugares**:
- Na `main` (com a tag da versão)
- De volta na `develop` (para não perder as correções feitas aqui)

### 🔴 `hotfix/*` — O Bombeiro de Plantão

Bug crítico em produção numa sexta à noite? Nasce o hotfix:

```bash
git checkout -b hotfix/corrige-autenticacao
```

Diferente das outras, ela nasce diretamente da `main` — porque você precisa corrigir exatamente o que está em produção, sem pegar código em desenvolvimento que ainda não está estável.

Depois da correção, o merge vai para a `main` (nova versão de patch: `v2.0.1`) **e também para a `develop`**, garantindo que a correção não se perca no próximo ciclo.

### 🩷 `bugfix/*` — Correções no Ciclo de Release

É o primo menor do hotfix. Enquanto a branch de release está aberta e em testes, os bugs encontrados são corrigidos aqui — dentro do próprio ciclo de release, antes de ir para produção.

---

## O Fluxo Completo

Visualizando o caminho que o código percorre:

```
feature/* ──┐
             ├──▶ develop ──▶ release/* ──▶ main (tag)
feature/* ──┘                    │               │
                                 └──▶ develop ◀──┘ (back-merge)

hotfix/* ──▶ main (patch tag)
    └──▶ develop (sync)
```

A regra de ouro: **a `main` nunca volta para a `develop` diretamente.** A sincronização acontece via `release` e `hotfix`, sempre com merge duplo.

---

## Vale a Pena Usar Git Flow?

Como tudo em tecnologia, **depende**.

### 🟩 Quando faz sentido
* **Times médios a grandes** com múltiplos devs trabalhando em paralelo
* **Produtos com ciclos de release bem definidos** (versão quinzenal, sprint de duas semanas...)
* **Projetos que precisam manter múltiplas versões em produção**

### 🟥 Quando pode ser exagero
* **Projetos solo ou duplas** — o overhead de gerenciar todas essas branches pode matar mais do que ajuda
* **Times com deploy contínuo** (CI/CD agressivo) — modelos mais simples como **GitHub Flow** ou **Trunk-Based Development** costumam se encaixar melhor
* **Protótipos e MVPs** onde a velocidade importa mais que o processo

> **Git Flow não é bala de prata.** É uma ferramenta poderosa para o contexto certo. Adotar às cegas pode criar burocracia desnecessária para times pequenos.

---

## Conclusão

O Git Flow resolve um problema real: **como múltiplos desenvolvedores trabalham no mesmo código sem se atrapalhar?** Ele faz isso dando um propósito claro para cada branch e definindo regras de fluxo que evitam o caos do "comita onde puder".

Na prática, você vai ver variações — alguns times simplificam, outros adaptam para o contexto. O mais importante é que **o time inteiro entenda e siga a convenção**. Uma estratégia de branching que só metade do time conhece não funciona para ninguém.

Usa Git Flow no seu projeto? Tem alguma adaptação que funcionou bem pra você? **Me conta nas redes sociais ou manda um e-mail!** Adoro ouvir como outros devs resolvem esse problema no dia a dia.
