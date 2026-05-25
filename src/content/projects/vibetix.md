---
title: VibeTix
description: Plataforma web para gerenciamento de eventos e venda de ingressos com QR Code.
stack: ['Laravel', 'Blade', 'TailwindCSS', 'PostgreSQL', 'Redis', 'Docker']
githubLink: '#'
pubDate: 2025-12-04
---

## Sobre

VibeTix é uma plataforma web completa para gerenciamento de eventos, desenvolvida
como projeto integrador na UNICENTRO. A plataforma centraliza a criação e o
gerenciamento de eventos pelos organizadores, e a descoberta, inscrição e compra de
ingressos pelos participantes — desde a criação do evento até a validação do ingresso
na portaria.

O projeto nasce de uma lacuna real: organizadores enfrentam plataformas complexas
sem relatórios claros, e participantes se frustram com processos de inscrição longos.
O VibeTix resolve os dois lados.

## Funcionalidades

**Para organizadores:**
- Criação de eventos com título, descrição, data, local, banner e categorias
- Definição de múltiplos tipos de ingresso (gratuitos ou pagos, com lotes e limites)
- Dashboard com acompanhamento em tempo real dos inscritos
- Exportação da lista de participantes em CSV
- Validação de ingressos na entrada via leitura de QR Code
- Notificação automática por e-mail aos inscritos em caso de alteração do evento

**Para participantes:**
- Busca de eventos por título e filtro por categoria
- Inscrição simplificada em até 3 cliques
- Confirmação por e-mail após inscrição
- Lista pessoal de eventos favoritos
- Cancelamento de inscrição antes da data do evento
- Avaliação do evento após sua conclusão (nota de 1 a 5 + comentário)

**Administração:**
- Gerenciamento de categorias, usuários e configurações da plataforma
- Painel de estatísticas e logs de atividades

## Stack

| Tecnologia | Finalidade |
|---|---|
| Laravel + PHP | Backend, lógica de negócio e API |
| Blade + TailwindCSS | Frontend server-side responsivo |
| PostgreSQL | Banco de dados relacional |
| Redis | Cache e filas de e-mail |
| Docker / Laravel Sail | Ambiente conteinerizado |
| Laravel Sanctum | Autenticação via token com expiração |
| Git / GitHub | Controle de versão |

## Destaques técnicos

- QR Code com hash único por inscrição para validação na portaria
- Controle de concorrência com `DB::transaction` + `lockForUpdate` para evitar overbooking
- Filas de e-mail assíncronas com Laravel Queue + Redis
- Proteção contra OWASP Top 10 (SQL Injection, XSS)
- Bloqueio de login após 5 tentativas falhas consecutivas
- Interface responsiva validada em desktop, tablet e mobile

## Equipe

Projeto desenvolvido em equipe de 4 integrantes do curso de Ciência da Computação
da UNICENTRO, com metodologia ágil Scrumban (Scrum + Kanban).