# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```
Team:
-Sokolov Yevhen
-Rudikov Yevhen
-Ponomarenko Olena
-Yurchenko Oleksandra
-Karina Zozulia
-Sorokotiaha Oleh
-Sofiia Semenko
-Anna Sosnytska
-Artur Ivanov
-Blaha Viktor
-Maxim Cazanli
-Yurii Pylypchuk
-Tetiana Kopot
-Anistrat Serhii
-Yuskiv Yana
-Moroz Eduard

