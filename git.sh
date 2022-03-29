#!/bin/bash

# Ao instalar o Git fazer as configurações:
    git config --global user.name "seu-nome-e-sobrenome"
    git config --global user.email "seu-email"
    git config --global color.ui auto   #opcional


# Faz uma cópia local do repositório do Github
    git clone url-do-repositório


# Verifica o estado do projeto local
    git clone status


# Adiciona os arquivos para nova versão

    # adiciona um arquivo específico
    git add nome-do-arquivo

    # adiciona um diretório específico
    git add nome-do-diretorio/

    # adiciona todos os arquivos
    git add .


# Commita os arquivos na nova versão
    git commit -m "info sobre esta versao"


# Envia para o repósitório do github
    git push origin main



# Repositório
https://github.com/diegocoutinho2k5/TCC
# Github pages [visualização]
https://diegocoutinho2k5.github.io/TCC/