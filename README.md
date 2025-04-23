# BuscarEmWKHelp

Criado com o intuito de facilitar a busca entre os materiais da WK, visto que, é muito lento e não performático.

Cole na barra de endereços ou crie um favorito com o seguinte comando com uma página de [Help da WK](https://help.wk.com.br/714/WK/Workspaces/Workspaces.htm) aberta:

```
javascript:void fetch("https://valeriosoftvale.github.io/BuscarEmWKHelp/buscador.js").then(r=>r.text()).then(r=>{eval(r);}).catch((e=>{alert("Não está funcionando 😢");}));
```

Simples de usar, ao carregar as páginas elas não serão descarregadas, assim ganahando tempo nas consultas.

![image](https://github.com/user-attachments/assets/e380f2e6-ee4d-4de4-ad3f-52d3686afb2f)

# Abridor de abas

Execute o seginte script na página [Help da WK](https://help.wk.com.br/714/WK/topic.htm#t=Workspaces%2FWorkspaces.htm)

```
javascript:void fetch("https://valeriosoftvale.github.io/BuscarEmWKHelp/Abridor.js").then(r=>r.text()).then(r=>{eval(r);}).catch((e=>{alert("Não está funcionando 😢");}));
```

https://github.com/user-attachments/assets/83934aa0-f753-43fb-b031-a6ad727b3617

