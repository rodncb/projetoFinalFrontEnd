#!/bin/bash

# Script para verificar se o projeto React está funcionando
cd /Users/rodrigobezerra/projetoFinalFrontEnd/movie-search-app

echo "Verificando se as dependências estão instaladas..."
npm list --depth=0

echo "Verificando se o projeto compila..."
npm run build

echo "Teste concluído!"
