# Git Workflow — ADFlex

## Trabalhando no projeto em mais de um PC

O repositório remoto (GitHub) é a fonte de sincronização entre os computadores.

A regra principal é:

> **Antes de começar a trabalhar, atualize o `main`. Antes de trocar de computador, envie (`push`) o que foi feito.**

---

## 1. Primeiro acesso em um computador novo

Se o projeto ainda não existe no computador:

```bash
git clone https://github.com/Feehh32/ADFlex.git
cd ADFlex
```

Depois instalar as dependências:

```bash
npm install
```

O arquivo `.env` normalmente não fica no Git.

Portanto, ele precisa ser configurado manualmente em cada computador.

Exemplo:

```text
.env
```

Não adicionar o `.env` ao repositório se ele estiver no `.gitignore`.

---

# 2. Começando o trabalho em qualquer computador

Sempre começar verificando a situação do repositório:

```bash
git status
```

Ir para o `main`:

```bash
git switch main
```

Atualizar o `main` local:

```bash
git pull origin main
```

Agora o computador está sincronizado com o estado atual do projeto.

---

# 3. Criando uma nova branch

Depois de atualizar o `main`, criar a branch:

```bash
git switch -c nome-da-branch
```

Exemplo:

```bash
git switch -c review-performance
```

A branch deve ser criada a partir do `main` atualizado.

---

# 4. Trabalhando na branch

Durante o desenvolvimento:

```bash
git status
```

Para verificar as alterações:

```bash
git diff
```

Quando uma parte do trabalho estiver pronta:

```bash
git add .
git commit -m "tipo: descrição"
```

Exemplo:

```bash
git commit -m "refactor: improve form accessibility"
```

---

# 5. Enviando a branch para o GitHub

Na primeira vez que enviar a branch:

```bash
git push -u origin nome-da-branch
```

Nas próximas vezes:

```bash
git push
```

---

# 6. Terminando uma tarefa

Quando a branch estiver pronta:

1. Fazer commit de tudo que falta.
2. Fazer `push`.
3. Fazer o merge da branch no `main`.

O merge pode ser feito pelo GitHub ou localmente.

---

# 7. Depois do merge

Depois que a branch foi integrada ao `main`, no computador:

```bash
git switch main
git pull origin main
```

Agora o `main` local contém as alterações que foram mergeadas.

Depois disso, a branch antiga pode ser excluída localmente:

```bash
git branch -d nome-da-branch
```

E, se ela ainda existir no GitHub:

```bash
git push origin --delete nome-da-branch
```

---

# 8. Começando outra tarefa

Sempre partir novamente do `main` atualizado:

```bash
git switch main
git pull origin main
git switch -c nova-branch
```

Exemplo:

```bash
git switch main
git pull origin main
git switch -c performance-review
```

---

# 9. Trabalhando alternadamente em casa e no trabalho

### Exemplo

Comecei uma tarefa no computador do trabalho.

```bash
git switch main
git pull origin main
git switch -c minha-feature
```

Trabalhei e fiz commits:

```bash
git add .
git commit -m "feat: implement new feature"
git push
```

Agora posso ir para casa.

No computador de casa:

```bash
git fetch origin
```

Se a branch já existe localmente:

```bash
git switch minha-feature
git pull origin minha-feature
```

Se a branch ainda não existe localmente:

```bash
git fetch origin
git switch -c minha-feature --track origin/minha-feature
```

Continuo trabalhando normalmente.

Ao terminar:

```bash
git add .
git commit -m "feat: finish new feature"
git push
```

No dia seguinte, no computador do trabalho:

```bash
git switch minha-feature
git pull origin minha-feature
```

Assim os dois computadores continuam sincronizados.

---

# 10. Regra importante ao trocar de computador

Antes de sair de um computador:

```bash
git status
```

Se houver alterações importantes, fazer commit:

```bash
git add .
git commit -m "chore: save work in progress"
git push
```

Não deixar trabalho importante apenas no computador.

O GitHub deve conter o estado mais recente da branch.

---

# 11. Cuidado com alterações não commitadas

Antes de trocar de branch:

```bash
git status
```

Se houver alterações não commitadas, não sair simplesmente trocando de branch sem entender o que está acontecendo.

Se o trabalho estiver incompleto e precisar ser levado para outro computador, pode fazer um commit temporário:

```bash
git add .
git commit -m "wip: continue development"
git push
```

Depois, no outro computador:

```bash
git pull
```

O commit pode ser reorganizado posteriormente, se necessário.

---

# 12. Quando o main mudou enquanto eu estava trabalhando

Se outra branch foi mergeada no `main` enquanto eu estava trabalhando na minha branch, posso atualizar minha branch com o `main`.

Primeiro:

```bash
git switch main
git pull origin main
```

Depois voltar para minha branch:

```bash
git switch minha-feature
```

E atualizar a branch:

```bash
git merge main
```

Se houver conflitos, resolver os arquivos indicados pelo Git.

Depois:

```bash
git add .
git commit
git push
```

---

# 13. `fetch`, `pull` e `push`

### `git fetch`

Busca informações novas do GitHub, mas não altera meu código atual.

```bash
git fetch origin
```

### `git pull`

Busca as alterações e atualiza minha branch local.

```bash
git pull origin main
```

É basicamente:

```bash
git fetch
git merge
```

### `git push`

Envia meus commits locais para o GitHub.

```bash
git push
```

---

# 14. Fluxo normal de trabalho

Na prática, o fluxo mais comum será:

```bash
git switch main
git pull origin main

git switch -c minha-feature

# trabalhar...

git add .
git commit -m "tipo: descrição"
git push -u origin minha-feature

# continuar trabalhando...

git add .
git commit -m "tipo: descrição"
git push

# quando terminar:
# fazer merge no main

git switch main
git pull origin main

git branch -d minha-feature
git push origin --delete minha-feature
```

---

# 15. Regra de ouro

### Antes de trabalhar:

```bash
git switch main
git pull origin main
```

### Antes de trocar de computador:

```bash
git add .
git commit -m "..."
git push
```

### Depois de voltar para o computador:

```bash
git switch minha-feature
git pull
```

### Depois do merge:

```bash
git switch main
git pull origin main
```

---

## Resumo mental

```text
                 GitHub
                   │
          ┌────────┴────────┐
          │                 │
      PC trabalho        PC casa
          │                 │
          └────── push/pull ─┘

main = versão integrada do projeto

branch = trabalho isolado de uma tarefa

push = mandar meu trabalho para o GitHub

pull = trazer o trabalho do GitHub

merge = integrar uma branch ao main

fetch = verificar/trazer informações do remoto sem
        aplicar as alterações na branch atual
```

> **Nunca comece uma nova tarefa a partir de um `main` desatualizado.**
>
> **Nunca dependa de alterações que existem apenas em um computador.**
>
> **GitHub é o ponto de encontro entre casa e trabalho.**
