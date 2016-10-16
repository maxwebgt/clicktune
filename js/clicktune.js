clicktune = {
			enable: true,
			opened: false,
			options: {
				opacity: true,
				'box-shadow': true,
				'text-shadow': true
			}
	};
/// || main control
	window.onload = function() {
		$(".cl_btn-opt").click(function(ee) {
			$(".cl_options").slideToggle(300);
		});
		$(".cl_ind-enable").click(function(ee){
			(clicktune.enable) ? clicktune.enable = false : clicktune.enable = true;
			console.log("clicktune status: " + clicktune.enable);
			(clicktune.enable) ? $(".cl_ind-enable").text("Включен").css({'background-color': 'rgba(0, 255, 0, 0.5)'}) : $(".cl_ind-enable").text("Выключен").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
		});
		document.getElementById("cl_label-opa").addEventListener("click", function(){
			(clicktune.options.opacity) ? clicktune.options.opacity = false : clicktune.options.opacity = true;
			console.log("opacity status: " + clicktune.options.opacity);
		});
		document.getElementById("cl_label-bs").addEventListener("click", function(){
			(clicktune.options['box-shadow']) ? clicktune.options['box-shadow'] = false : clicktune.options['box-shadow'] = true;
			console.log("box-shadow status: " + clicktune.options['box-shadow']);
		});
		document.getElementById("cl_label-ts").addEventListener("click", function(){
			(clicktune.options['text-shadow']) ? clicktune.options['text-shadow'] = false : clicktune.options['text-shadow'] = true;
			console.log("text-shadow status: " + clicktune.options['text-shadow']);
		});

		$(window).click(function(e) {
			if (clicktune.enable) {
				var container = $(".cl_container");
				if (container.has(e.target).length !== 0){
					return;
				}
				var container2 = $(".cl_controls");
				if (container2.has(e.target).length !== 0){
	//			if(e.target!=container2[0]&&!container2.has(e.target).length) {
					return;
				}
				if (clicktune.opened) {
					document.body.removeChild(document.getElementById("cl_controls"));
					clicktune.opened = false;
				}
				else {
					clGenHtml('div', 'cl_controls', '', 'cl_controls', 'body');
					if (clicktune.options.opacity) {
						clGenHtml('div', 'cl_part', '', 'cl_part-opa', 'cl_controls');
						clGenHtml('div', 'cl_ptitle', 'Прозрачность', '', 'cl_part-opa');
						clGenHtml('div', 'cl_prop', '', 'cl_prop-opa', 'cl_part-opa');
						clGenHtml('span', '', 'opacity', '', 'cl_prop-opa');
						clGenInput2Do('text', getComputedStyle(e.target).opacity, 'cl_inpOpaText', "cl_prop-opa");
//						console.log(e.target.style);
						clGenInput("range", 'cl_inpOpaRange', 'cl_prop-opa', 0, 1, 0.01, getComputedStyle(e.target).opacity);	document.getElementById('cl_inpOpaRange').addEventListener("input", function(d) {
							e.target.style.opacity = d.target.value;
							document.getElementById('cl_inpOpaText').value = d.target.value;
								});
					}
					if (clicktune.options["box-shadow"]) {
						if (getComputedStyle(e.target).boxShadow=="none") {
							console.log('свойство отсутствует. Сгенерировано свойство из дефолтных настроек.');
							e.target.style.boxShadow = "2px 2px 2px 2px rgba(0,0,0,0.6)"
						}
						clGenHtml('div', 'cl_part', '', 'cl_part-bs', 'cl_controls');
						clGenHtml('div', 'cl_ptitle', 'box-shadow', '', 'cl_part-bs');
						clGenHtml('div', 'cl_prop', '', 'cl_prop-bs1', 'cl_part-bs');
						clGenHtml('span', '', 'Сдвиг по Х', '', 'cl_prop-bs1');
						console.log(getComputedStyle(e.target).boxShadow);
						var cl_arrBs = getComputedStyle(e.target).boxShadow.replace(/.*\) /, "").split(" ");

						clGenInput2Do('text', cl_arrBs[0], 'cl_inpBSXText', "cl_prop-bs1");
						clGenInput("range", 'cl_inpBSXRange', 'cl_prop-bs1', 0, 200, 1, cl_arrBs[0]);
						document.getElementById('cl_inpBSXRange').addEventListener("input", function(d) {
							cl_arrBs[0] = d.target.value;
							e.target.style.boxShadow = "rgba(0,0,0,0.7) " + cl_arrBs[0] + 'px ' + '20px ' + '10px ' + '5px';
							document.getElementById('cl_inpBSXText').value = d.target.value;
								});

						////////////property two

						clGenHtml('div', 'cl_prop', '', 'cl_prop-bs2', 'cl_part-bs');
						clGenHtml('span', '', 'Сдвиг по Y', '', 'cl_prop-bs2');
						console.log(getComputedStyle(e.target).boxShadow);
						cl_arrBs = getComputedStyle(e.target).boxShadow.replace(/.*\) /, "").split(" ");

						clGenInput2Do('text', cl_arrBs[1], 'cl_inpBSXText2', "cl_prop-bs2");
						clGenInput("range", 'cl_inpBSXRange2', 'cl_prop-bs2', 0, 200, 1, cl_arrBs[1]);
						document.getElementById('cl_inpBSXRange2').addEventListener("input", function(d) {
							cl_arrBs[1] = d.target.value;
							e.target.style.boxShadow = "rgba(0,0,0,0.7) " + cl_arrBs[0] + 'px ' + cl_arrBs[1] + 'px ' + '10px ' + '5px';
							document.getElementById('cl_inpBSXText2').value = d.target.value;
								});




//						console.log(ara);


//						console.log(getComputedStyle(e.target).boxShadow);
//		var ara = getComputedStyle(e.target).boxShadow.match(/(\d+\.\d+)|(\d+)/g);
//						console.log(ara);
//						console.log(ara.length);
//
//						var ara2 = ara.slice(0, 3);
//						console.log(ara2);
//						console.log(ara);
//						re = /.*\)/;
//						ara = getComputedStyle(e.target).boxShadow.split(re);
//						console.log(ara);
//
//						clBsColor = ara.shift();
//						console.log(clBsColor);
//						clGenInput2Do('text', getComputedStyle(e.target).opacity, 'cl_inpOpaText', "cl_prop-opa");
//						console.log(e.target.style);
//						clGenInput("range", 'cl_inpOpaRange', 'cl_prop-opa', 0, 1, 0.01, getComputedStyle(e.target).opacity);	document.getElementById('cl_inpOpaRange').addEventListener("input", function(d) {
//							e.target.style.opacity = d.target.value;
//							document.getElementById('cl_inpOpaText').value = d.target.value;
//						});
					}
					coord1 = e.clientX + 'px';
					coord2 = e.clientY + 'px';
					$(".cl_controls").css({"left":coord1});
					$(".cl_controls").css({"top":coord2});
					$(".cl_controls").slideToggle(300);
//					console.log(getComputedStyle(e.target).opacity);
//					e.target.style.opacity =1 ;
					clicktune.opened = true;
				}
			}
		});
	};
/// end || main control

function clGenHtml(tag, classed, content, id, target){
	var div = document.createElement(tag);
	div.className = classed;
	div.innerHTML = content;
	div.id = id;
	if (target=='body') {
		return document.body.appendChild(div);
	}
	target = document.getElementById(target);
	return target.appendChild(div);
};

function clGenInput(type, id, target, min, max, step, value) {
	var div = document.createElement("input");
//	div.className = classed;
//	div.innerHTML = content;
	div.setAttribute('type', type);
	div.id = id;
	div.setAttribute('min', min);
	div.setAttribute('max', max);
	div.setAttribute('step', step);
	div.setAttribute('value', value);
	target = document.getElementById(target);
	return target.appendChild(div);
};
function clGenInputSimple(type, chek_status, id, target) {
	var div = document.createElement("input");
	div.id = id;
	div.setAttribute('type', type);
	if (chek_status) {
		div.setAttribute('checked','checked');
	}
	target = document.getElementById(target);
	return target.appendChild(div);
};

function clGenInput2Do(type, value, id, target) {
	var div = document.createElement("input");
	div.id = id;
	div.setAttribute('type', type);
	div.setAttribute('value', value);
	target = document.getElementById(target);
	return target.appendChild(div);
};

//// Hi generate main interface

clGenHtml('div', 'cl_container', '', 'cl_container', 'body').style.cssText = "position: absolute; right: 100px; z-index: 2";
(clicktune.enable) ? clGenHtml('button', 'cl_ind-enable', 'Включен', 'cl_ind-enable', 'cl_container').style.cssText = "background-color: rgba(0, 255, 0, 0.5)" : clGenHtml('button', 'cl_ind-enable', 'Выключен', 'cl_ind-enable', 'cl_container').style.cssText = "background-color: rgba(255, 0, 0, 0.5)";
//clGenHtml('button', 'cl_ind-enable', 'Включен', 'cl_ind-enable', 'cl_container').style.cssText = "background-color: rgba(0, 255, 0, 0.5)";
clGenHtml('button', 'cl_btn-opt', 'настройки', 'cl_btn-opt', 'cl_container');
clGenHtml('div', 'cl_options', '', 'cl_options', 'cl_container').style.display = 'none';
clGenHtml('label', '', 'opacity', 'cl_label-opa', 'cl_options');
clGenInputSimple('checkbox', clicktune.options.opacity, 'cl_opt-opacity', 'cl_label-opa');
clGenHtml('label', '', 'box-shadow', 'cl_label-bs', 'cl_options');
clGenInputSimple('checkbox', clicktune.options['box-shadow'], 'cl_opt-bs', 'cl_label-bs');
clGenHtml('label', '', 'text-shadow', 'cl_label-ts', 'cl_options');
clGenInputSimple('checkbox', clicktune.options['text-shadow'], 'cl_opt-ts', 'cl_label-ts');











//<div class="cl_part" style="border:1px solid red">
//			<div class="cl_ptitle">Box-shadow</div>
//			<div class="cl_prop" id="cl_prop-bs1">
//				<span>Сдвиг по Х</span>
//				<input id="cl_inpBSXText" type="text">
//				<input id="cl_inpBSXRange" type="range">
//			</div>
//			<div class="cl_prop">
//				<span>Сдвиг по Y</span>
//				<input id="cl_inpBSYText" type="text">
//				<input id="cl_inpBSYRange" type="range">
//			</div>
//			<div class="cl_prop">
//				<span>Размытие</span>
//				<input id="cl_inpBSBText" type="text">
//				<input id="cl_inpBSBRange" type="range">
//			</div>
//			<div class="cl_prop">
//				<span>Раcтяжение</span>
//				<input id="cl_inpBSSText" type="text">
//				<input id="cl_inpBSSRange" type="range">
//			</div>
//			<div class="cl_prop cl_colored">
//				<span>Цвет</span>
//				<input type="text">
//				<input class="rangevoy" type="range">
//			</div>
//		</div>










//clGenHtml('span', 'cl_ind-enable', 'Выключен', 'cl_ind-enable', 'cl_power-block').style.cssText = "color: red;background-color: black;";


//Generate controls clicktune
//clGenHtml('div', 'cl_container', '', 'cl_container', 'body');
//lolka = clGenInput('text', 'cl_opt-opacity', '', '', '', 'cl_div-opt');
//lolka.style.cssText = "color: red;background-color: black;";
//clGenHtml('div', 'cl_power-block', '', 'cl_power-block', 'cl_container');
//clGenHtml('div', 'hz', '', 'hz', 'cl_power-block');
//clGenHtml('button', 'cl_btn-opt', 'настройки', 'cl_btn-opt', 'hz');
//clGenHtml('div', 'cl_options', '', 'cl_options', 'cl_container');
//clGenHtml('span', '', 'настройки:', '', 'cl_options');
//clGenHtml('div', 'cl_div-opt', '', 'cl_div-opt', 'cl_options');
//clGenInput('checkbox', 'cl_opt-opacity', '', '', '', 'cl_div-opt');

//lolka = clGenInput('text', 'cl_opt-opacity', '', '', '', 'cl_div-opt');
//lolka.style.cssText = "color: red;background-color: black;";


//console.log(lolka.value = "huy");
//Generate controls clicktune



//						clGenHtml('div', 'xxx', getComputedStyle(e.target).opacity, 'xxx', 'cl_controls');
//						$("#cl_opt-opa").change(function(d) {
//							console.log(d.target.value);
////							e.target.style.opacity = d.target.value;
////							console.log(e);
//////							lolka = document.getElementById('xxx');
//////							console.log(lolka.innerHTML());
////							document.getElementById('xxx').innerHTML = d.target.value;
//						});


//						document.getElementById('cl_opt-opa').addEventListener("onchange", function(eee) {
//							console.log("i change");
//							console.log(eee);
//						});
//						console.log(gika.oninput);
//						$("#cl_opt-opa").change(function(d) {
//							console.log(d.target.value);
//							e.target.style.opacity = d.target.value;
//							console.log(e);
////							lolka = document.getElementById('xxx');
////							console.log(lolka.innerHTML());
//							document.getElementById('xxx').innerHTML = d.target.value;
//						});

//
//<div class="cl_container">
//	<div class="cl_power-block">
//		<span class="cl_ind-enable">Выключен</span>
//		<div>
//			<button class="cl_btn-opt">настройки</button>
//		</div>
//	</div>
//	<ul class="cl_options">
//		<span>Настройки:</span>
//		<li><span>Прозрачность</span><input class="cl_opt-opacity" type="checkbox"></li>
//		<li><span>Тень текста</span><input class="cl_opt-tshadow" type="checkbox"></li>
//		<li><span>Тень блока</span><input class="cl_opt-bshadow" type="checkbox"></li>
//	</ul>
//</div>
