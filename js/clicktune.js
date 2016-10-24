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
		document.getElementById("cl_btn-opt").addEventListener("click", function(){
			(document.getElementById("cl_options").style.display == "none") ? document.getElementById("cl_options").style.display = "block" : document.getElementById("cl_options").style.display = "none";
			});
			document.getElementById("cl_ind-enable").addEventListener("click", function(){
			(clicktune.enable) ? clicktune.enable = false : clicktune.enable = true;
			console.log("clicktune status: " + clicktune.enable);
				if (clicktune.enable) {
					clVar8 = document.getElementById("cl_ind-enable");
					clVar8.innerHTML = "Включен";
					clVar8.style.backgroundColor= "rgba(0, 255, 0, 0.5)";
				}
				else
					{
						clVar8 = document.getElementById("cl_ind-enable");
						clVar8.innerHTML = "Выключен";
						clVar8.style.backgroundColor= "rgba(255, 0, 0, 0.5)";
					}
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

		window.addEventListener("click", function(e){
			if (clicktune.enable) {
				var container = $(".cl_container");
				if (container.has(e.target).length !== 0){
					return;
				}
				var container2 = $(".cl_controls");
				if (container2.has(e.target).length !== 0){
					return;
				}
				if (clicktune.opened) {
					document.body.removeChild(document.getElementById("cl_controls"));
					clicktune.opened = false;
				}
				else {
					clGenHtml('div', 'cl_controls', '', 'cl_controls', 'body').style.cssText="background-color: #fff;display: none;border: 1px solid black;width: 340px;position: absolute;z-index: 999";
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
							e.target.style.boxShadow = "rgba(0,0,0,0.6) 2px 3px 4px 5px"
						}
						clGenHtml('div', 'cl_part', '', 'cl_part-bs', 'cl_controls');
						clGenHtml('div', 'cl_ptitle', 'box-shadow', '', 'cl_part-bs');
						clGenHtml('div', 'cl_prop', '', 'cl_prop-bs1', 'cl_part-bs').style.cssText="border-bottom: 1px dashed #616161; padding-bottom: 5px";
						clGenHtml('span', '', 'Сдвиг по Х', '', 'cl_prop-bs1');
						console.log(getComputedStyle(e.target).boxShadow);
						var cl_arrBs = getComputedStyle(e.target).boxShadow.replace(/.*\) /, "").split(" ");

						clGenInput2Do('text', cl_arrBs[0], 'cl_inpBSXText', "cl_prop-bs1");
						clGenInput("range", 'cl_inpBSXRange', 'cl_prop-bs1',-200, 200, 1, cl_arrBs[0].replace("px",""));
						document.getElementById('cl_inpBSXRange').addEventListener("input", function(d) {
							cl_arrBs[0] = d.target.value + 'px';
							e.target.style.boxShadow = "rgba(0,0,0,0.7) " + cl_arrBs[0] + ' ' + cl_arrBs[1] + ' ' + cl_arrBs[2] + ' ' + cl_arrBs[3];
							document.getElementById('cl_inpBSXText').value = d.target.value + 'px';
								});

						////////////property two

						clGenHtml('div', 'cl_prop', '', 'cl_prop-bs2', 'cl_part-bs').style.cssText="border-bottom: 1px dashed #616161; padding-bottom: 5px";
						clGenHtml('span', '', 'Сдвиг по Y', '', 'cl_prop-bs2');
						console.log(getComputedStyle(e.target).boxShadow);
						cl_arrBs = getComputedStyle(e.target).boxShadow.replace(/.*\) /, "").split(" ");

						clGenInput2Do('text', cl_arrBs[1], 'cl_inpBSYText', "cl_prop-bs2");
						clGenInput("range", 'cl_inpBSYRange', 'cl_prop-bs2', -200, 200, 1, cl_arrBs[1].replace("px",""));
						document.getElementById('cl_inpBSYRange').addEventListener("input", function(d) {
							cl_arrBs[1] = d.target.value + 'px';
							e.target.style.boxShadow = "rgba(0,0,0,0.7) " + cl_arrBs[0] + ' ' + cl_arrBs[1] + ' ' + cl_arrBs[2] + ' ' + cl_arrBs[3];
							document.getElementById('cl_inpBSYText').value = d.target.value + 'px';
								});
						/////////////property 3

						clGenHtml('div', 'cl_prop', '', 'cl_prop-bs3', 'cl_part-bs').style.cssText="border-bottom: 1px dashed #616161; padding-bottom: 5px";
						clGenHtml('span', '', 'Размытие', '', 'cl_prop-bs3');
						console.log(getComputedStyle(e.target).boxShadow);
						cl_arrBs = getComputedStyle(e.target).boxShadow.replace(/.*\) /, "").split(" ");
						clGenInput2Do('text', cl_arrBs[2], 'cl_inpBSBText', "cl_prop-bs3");
						clGenInput("range", 'cl_inpBSBRange', 'cl_prop-bs3', -200, 200, 1, cl_arrBs[2].replace("px",""));
						document.getElementById('cl_inpBSBRange').addEventListener("input", function(d) {
							cl_arrBs[2] = d.target.value + 'px';
							e.target.style.boxShadow = "rgba(0,0,0,0.7) " + cl_arrBs[0] + ' ' + cl_arrBs[1] + ' ' + cl_arrBs[2] + ' ' + cl_arrBs[3];
							document.getElementById('cl_inpBSBText').value = d.target.value + 'px';
								});
						/////////////property 4

						clGenHtml('div', 'cl_prop', '', 'cl_prop-bs4', 'cl_part-bs').style.cssText="border-bottom: 1px dashed #616161; padding-bottom: 5px";
						clGenHtml('span', '', 'Раcтяжение', '', 'cl_prop-bs4');
						console.log(getComputedStyle(e.target).boxShadow);
						cl_arrBs = getComputedStyle(e.target).boxShadow.replace(/.*\) /, "").split(" ");
						clGenInput2Do('text', cl_arrBs[3], 'cl_inpBSSText', "cl_prop-bs4");
						clGenInput("range", 'cl_inpBSSRange', 'cl_prop-bs4', -200, 200, 1, cl_arrBs[2].replace("px",""));
						document.getElementById('cl_inpBSSRange').addEventListener("input", function(d) {
							cl_arrBs[3] = d.target.value + 'px';
							e.target.style.boxShadow = "rgba(0,0,0,0.7) " + cl_arrBs[0] + ' ' + cl_arrBs[1] + ' ' + cl_arrBs[2] + ' ' + cl_arrBs[3];
							document.getElementById('cl_inpBSSText').value = d.target.value + 'px';
								});
					}
					coord1 = e.clientX + 'px';
					coord2 = e.clientY + 'px';
					$(".cl_controls").css({"left":coord1});
					$(".cl_controls").css({"top":coord2});
					$(".cl_controls").slideToggle(300);
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
