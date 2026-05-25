---
title: PontoCerto
description: Sistema de gestão de horas para projetos de extensão universitária.
stack: ['Laravel', 'Blade', 'PostgreSQL', 'Redis', 'Docker']
githubLink: '#'
pubDate: 2025-01-01
---

## Sobre

PontoCerto é um sistema web desenvolvido para auxiliar alunos da UNICENTRO no
gerenciamento de horas trabalhadas em projetos de extensão universitária. A plataforma
organiza o registro de atividades e horas de forma centralizada, facilitando a geração
de relatórios finais de entrega e dando visibilidade ao professor coordenador sobre o
andamento do projeto em tempo real.

O sistema nasce da necessidade prática de substituir controles manuais — planilhas,
e-mails e anotações — por uma ferramenta estruturada que atenda tanto alunos quanto
docentes dentro do contexto da extensão universitária.

## Funcionalidades

**Para alunos:**
- Registro de horas trabalhadas por atividade e projeto
- Categorização das atividades conforme as etapas do projeto
- Visualização do histórico de horas lançadas
- Acompanhamento do progresso em relação à carga horária exigida
- Geração de relatório individual para entrega final

**Para professores:**
- Visão geral do andamento de cada projeto vinculado
- Acompanhamento das horas registradas por aluno
- Validação e aprovação dos lançamentos
- Geração de relatórios consolidados do projeto

## Stack

| Tecnologia | Finalidade |
|---|---|
| Laravel + PHP | Backend e lógica de negócio |
| Blade | Frontend server-side |
| PostgreSQL | Banco de dados relacional |
| Redis | Cache e filas |
| Docker | Ambiente conteinerizado |

## Destaques técnicos

- Controle de acesso por perfil (aluno e professor)
- Relatórios exportáveis para entrega final
- Histórico completo de lançamentos com data e descrição
- Interface responsiva para uso em qualquer dispositivo