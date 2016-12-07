# Масштабирование SVG для спрайта

## Исходник SVG

```svg
<svg
	xmlns="http://www.w3.org/2000/svg"
	width="20.501753"
	height="8.1269999"
>
	<g id="a1">...</g>
	<g id="a2">...</g>
</svg>
```

## Как масштабировать ?

* выбрать scale-фактор N
* вычислить новые width и height: newValue = N * oldValue, обновить значения атрибутов width / height (исходные сохранить как "data-src-attrName")
* (необязательно) добавить атрибут viewBox = "0 0 {newWidth} {newHeight}" 
* обернуть существующие группы <g> новой группой с атрибутом transform="scale({N})"
* запустить ./build-ico.sh

### Пример
```svg
<svg
	xmlns="http://www.w3.org/2000/svg"
	version="1.0"
	width="103"
	height="41"
	viewBox="0 0 20.501753 8.1269999"
	data-src-width="20.501753"
	data-src-height="8.1269999"
>
	<g transform="scale(5)">
		<g id="a1">...</g>
		<g id="a2">...</g>
	</g>
```

### Скрипт

scale.js

```javascript
var ICON_HEIGHT = 34;
var sourcesPath = 'svg-ico_src/';
var destPath = 'svg-metros/';
```

