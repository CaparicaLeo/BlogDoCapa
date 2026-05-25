---
title: eCENUT
description: Sistema web de gestão para a Clínica Escola de Nutrição da UNICENTRO.
stack: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker']
githubLink: '#'
featured: true
pubDate: 2025-10-01
---

## Sobre

O eCENUT é um sistema de gerenciamento web desenvolvido para a Clínica Escola de
Nutrição da UNICENTRO (CENUT), que atende a comunidade de Guarapuava e região
desde 2001, realizando aproximadamente 80 atendimentos semanais.

O projeto nasceu da necessidade de digitalizar processos que eram feitos manualmente
— agendamento de consultas, cadastro de pacientes, registro de atendimentos e controle
financeiro. A ausência de automação gerava retrabalho e dificultava o acesso às
informações da clínica.

O sistema foi desenvolvido como ação extensionista vinculada à Fábrica de Software da
UNICENTRO, em parceria direta com a equipe da CENUT, com impacto direto nos ODS 3
(Saúde e Bem-Estar) e ODS 4 (Educação de Qualidade) da Agenda 2030 da ONU.

## Funcionalidades

- **Autenticação e controle de acesso** — Perfis distintos para estagiários, docentes,
  secretaria e pacientes.
- **Cadastro e gestão de pacientes** — Informações detalhadas com histórico clínico e
  fonte de encaminhamento (SUS, UBS, etc.).
- **Agendamento de consultas** — Gerenciamento digital da agenda da clínica, com
  pré-cadastro pelo próprio paciente.
- **Registro de atendimentos** — Avaliações antropométricas, planos alimentares e
  histórico clínico completo.
- **Gerenciamento de receitas e planos alimentares** — Digitalização e acesso rápido
  pelos estagiários sob supervisão docente.
- **Controle financeiro** — Cálculo e registro de taxas administrativas com geração de
  relatórios financeiros.
- **Relatórios e estatísticas** — Dados consolidados sobre atendimentos e perfis de
  pacientes para apoio à tomada de decisão.
- **Portal do paciente** — Visualização do plano de conduta, plano alimentar e status
  da consulta.

## Stack

| Tecnologia | Finalidade |
|---|---|
| Laravel | Backend, API e lógica de negócio |
| Vue.js | Interface frontend SPA |
| PostgreSQL | Banco de dados relacional |
| Redis | Cache e filas assíncronas |
| Docker | Ambiente conteinerizado |
| Git / GitHub | Controle de versão |

## Metodologia

O desenvolvimento seguiu uma abordagem híbrida entre **Scrum e Kanban (Scrumban)**,
com sprints de duas a quatro semanas, reuniões de planejamento e retrospectiva, e
visualização contínua das tarefas no quadro Kanban. A arquitetura modular garantiu que
cada módulo fosse desenvolvido e testado de forma independente antes da integração.

## Equipe

Projeto desenvolvido em equipe de cinco extensionistas do curso de Ciência da
Computação da UNICENTRO, com carga horária total de 502 horas, sob coordenação do
Prof. Marcos Antonio Quináia.