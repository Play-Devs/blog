---
author: Jhônata Tavares
pubDatetime: 2025-02-05T17:00:00.000Z
modDatetime: 2025-02-05T17:00:00.000Z
title: Conheça o C#
slug: csharp-introduction
featured: false
draft: false
tags:
 - backend
 - c#
 - iniciantes
 - pesquisa
description: Introdução ao C# e seu ecossistema.
---

# C# A linguagem que faz chover  

Certo dia eu estava vagando pelo Youtube, e encontrei um vídeo interessante sobre C#, e como qualquer outra pessoa com interesse no assunto fui ver os comentários do vídeo, onde encontrei a frase: "*C# faz até chover*", e foi a partir desse comentário que comecei meus estudos no maravilhoso ecossistema do .NET e C#.  

## Como assim o C# faz chover?  

#### Antes de tudo, precisamos voltar um pouco no tempo para entender o motivo...  

O ano era 1995 e o mundo do desenvolvimento nunca mais seria o mesmo, pois em maio deste ano chegou o Java, que teve um crescimento avassalador, e a microsoft começou a adotar o java em sua stack, junto ao Visual Basic e outras tecnologias. Mas acontece que por conta da diversidade de tecnologias utilizada pela Microsoft na época, houveram muitas falhas quando o assunto era integração, pois com a diferença de tecnologias era dificil trabalhar em soluções sem quebrar a cabeça, fora isso a Microsoft trabalhava (e ainda trabalha) com diversos projetos simultâneos, e quando era necessário a troca de algum desenvolvedor entre projetos de diferentes linguagens ou tecnologias, eles precisavam aprender a linguagem do projeto, suas bibliotecas e frameworks (se não os soubessem antes), o que fazia essa migração demorada, e com isso adiava significativamente o tempo de finalização do projeto. Então, a Microsoft decidiu criar sua biblioteca onde mesmo o desenvolvedor trocando de projeto com linguagens diferentes, as libs e tecnologias seriam as mesmas, diminuindo assim o tempo para o aprendizado e inserção do mesmo no projeto.  

Então em Janeiro de 2002 chega ao mundo a querida *.NET Framework* e junto dela a microsoft lança também sua própria linguagem de programação, o C#, mas não pense que apenas o C# conseguia usar a biblioteca do .NET, mas outras linguagens presentes na stack da Microsoft também conseguiam utilizar do mesmo framework.  

## Tá, mas onde o Java foi parar nessa história?  

Lembra que em suas tecnologias a Microsoft também utilizava o Java? Existe um ditado que diz: "***Nada se inventa, tudo se copia.***", foi exatamente isso que a Microsoft fez, pegou tudo que dá certo no Java e adaptou para o C#, como o paradigma de Orientação a Objetos, gerar uma CLI e precisar de um runtime para sua execução (da mesma forma que funciona o JDK do Java), ou seja, foi basicamente um *Copia mas não faz igual*. Uma das vantagens que isso trouxe ao C#, é a execução da mesma em qualquer tipo de máquina no começo apenas de Hardwares diferentes, mas hoje em dia o C# pode ser executado em quase qualquer máquina, sendo ela Linux, Mac, Android, ou até mesmo uma Geladeira (Por incrível que pareça), sendo uma das principais linguagens no mundo do IOT (Internet das Coisas).  

#### Assim o C# tomou o lugar do Java na Microsoft, e hoje é uma das linguagens mais populares do mercado.  

## Outras Características do C#  

Como o Java, o também C# é fortemente tipado, ou seja, diferente de linguagens como o *Python* ou *JavaScript*, você tem que definir o tipo de suas variáveis:

```python

# Definindo Variáveis no Python:

helloWorld = "HelloWorld"
inteiros = 2004
booleanos = True
```

```c#

// Definindo Variáveis no C#:

string helloWorld = "Hello World";
int inteiros = 2004;
bool booleanos = true;
```  

#### Eu particularmente prefiro linguagens mais rígidas com relação a sintaxe e tipagem, por isso se decidir entrar neste ecossistema, nunca esqueça do *;* no final de seus comandos.  

O C# também é utilizado no desenvolvimento Web com o ASP.NET, framework voltado para o desenvolvimento de API's e Web no geral, aplicativos de smartphones com o .NET MAUI, softwares para Desktop Windows, Linux e Mac, e um dos ambientes onde o C# tem muita influência, sendo quase requisito aprender C#, é no mundo dos games, onde várias ***engines*** utilizam dela, como a *Unity* ou o *Godot*.  

# Conclusão

Sim, o C# como qualquer outra linguagem, consegue fazer de tudo, porém os recursos disponibilizados para utilizar em conjunto ao C# facilita e muito o desenvolvimento e execução dele em diversos ambientes, e para diversas soluções, por isso que ele ***"Faz até chover"***. Além disso atualmente ele é OpenSource, ou seja, qualquer um pode desenvolver e libs para ele sem nenhuma restrição.  