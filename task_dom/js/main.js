var data = [
	{title:'Классический маникюр', img:'<img src="img/1.jpg">', content:"Начнем с популярной классики, которую ежедневно выбирает множество женщин: обрезной маникюр. Во время этой процедуры полностью убирается кутикула и птеригий – нижний слой кутикулы, плотно прирастающий к пластине. Для размягчения используют ремувер или ванночки для маникюра. Форма создается при помощи пилочки.<br>"},
	{title:'Европейский маникюр', img:'<img src="img/2.jpg">', content:"Этому виду маникюра почти сто лет: его придумала одна француженка в 1920-м году. Процедура подходит всем, но особо показана людям с тонкой кожей и кровеносными сосудами, расположенными близко к поверхности. Для размягчения кутикулы используют все тот же ремувер, но ее саму не срезают, а аккуратно сдвигают апельсиновой палочкой. Такой вид маникюра гораздо безопаснее классического, так как не связан с риском занесения инфекции.<br>"},
	{title:'Японский маникюр', img:'<img src="img/3.jpg">', content:"Первое отличие японского маникюра от других видов – использование полностью натуральных материалов. Второе – индивидуальный подход. Мастер должен оценить ногти клиента и подобрать подходящий уход. Начинается процедура с обработки ногтей антибактериальным раствором или обезжиривающей сывороткой. Затем на кутикулу наносят средство с экстрактом огурца, и отодвигают ее апельсиновой палочкой. Следующим этапом может быть массажная ванночка со специальными камушками и скрабирование или нанесение на руки масла жожоба и массаж камнями. После на ногти наносят жемчужную пудру, которая устраняет неровности и укрепляет пластину. Затем идет полировка, лечебные сыворотки и массаж шелковыми мешочками.<br>"},
	{title:'Американский маникюр', img:'<img src="img/4.jpg">', content:"Американский маникюр – это, по сути, классический обрезной с одним маленьким отличием: ногти обязательно должны быть овальной формы и, по возможности, длинными. Еще один must – полировка пластины бафом.<br>"},
	{title:'Бразильский маникюр', img:'<img src="img/5.jpg">', content:"Суперувлажняющий маникюр, который однозначно стоит попробовать этой зимой. Процедура выполняется в несколько этапов: руки погружают в теплую ванночку, затем пилочкой придают ногтям нужную форму. После этого на руки на 15-20 минут надевают хлопковые перчатки, пропитанные увлажняющим кремом, а затем удаляют кутикулу. Заканчивается процедура массажем.<br>"},
	{title:'Аппаратный маникюр', img:'<img src="img/6.jpg">', content:"Этот маникюр пришел к нам из Германии и быстро завоевал популярность. Делается он при помощи фрезера – специального аппарата, который может шлифовать и кожу, и ногтевую пластину. При помощи этой машинки можно убрать ороговевшие частички кожи и гель-лак, придать ногтю нужную форму. Также, фрезер позволяет удалить кутикулу, но, чтобы полностью избавиться от нее, придется совместить аппаратный маникюр с классическим. Процедура не рекомендована девушкам с тонкой кожей и тонкой ногтевой пластиной.<br>"},
	];

var item1 = document.querySelector('.nav-list__item_1');
item1.addEventListener('click', function(event) {
	document.title = data[0].title;
	var cont = document.querySelector('.content');
				if (cont.firstElementChild) {
					var p = cont.firstElementChild;
					cont.removeChild(p);
				}	
	cont.innerHTML = data[0].content + data[0].img;
});

var item2 = document.querySelector('.nav-list__item_2');
item2.addEventListener('click', function(event) {
	document.title = data[1].title;
	var cont = document.querySelector('.content');
				if (cont.firstElementChild) {
					var p = cont.firstElementChild;
					cont.removeChild(p);
				}	
	cont.innerHTML = data[1].content + data[1].img;
});

var item3 = document.querySelector('.nav-list__item_3');
item3.addEventListener('click', function(event) {
	document.title = data[2].title;
	var cont = document.querySelector('.content');
				if (cont.firstElementChild) {
					var p = cont.firstElementChild;
					cont.removeChild(p);
				}	
	cont.innerHTML = data[2].content + data[2].img;
});

var item4 = document.querySelector('.nav-list__item_4');
item4.addEventListener('click', function(event) {
	document.title = data[3].title;
	var cont = document.querySelector('.content');
				if (cont.firstElementChild) {
					var p = cont.firstElementChild;
					cont.removeChild(p);
				}	
	cont.innerHTML = data[3].content + data[3].img;
});

var item5 = document.querySelector('.nav-list__item_5');
item5.addEventListener('click', function(event) {
	document.title = data[4].title;
	var cont = document.querySelector('.content');
				if (cont.firstElementChild) {
					var p = cont.firstElementChild;
					cont.removeChild(p);
				}	
	cont.innerHTML = data[4].content + data[4].img;
});

var item6 = document.querySelector('.nav-list__item_6');
item6.addEventListener('click', function(event) {
	document.title = data[5].title;
	var cont = document.querySelector('.content');
				if (cont.firstElementChild) {
					var p = cont.firstElementChild;
					cont.removeChild(p);
				}	
	cont.innerHTML = data[5].content + data[5].img;
});