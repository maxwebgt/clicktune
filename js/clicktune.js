clicktune = {
			enable: false,
			opened: false,
			options: {
				opacity: true,
				'box-shadow': false,
				'text-shadow': false
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
			(clicktune.enable) ? $(".cl_ind-enable").text("Включен") : $(".cl_ind-enable").text("Выключен");
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
//					$(".cl_controls").slideToggle(300);
					document.body.removeChild(document.getElementById("cl_controls"));
					clicktune.opened = false;
				}
				else {
					clGenHtml('div', 'cl_controls', '', 'cl_controls', 'body');
					if (clicktune.options.opacity) {
						clGenInput('range', 'cl_opt-opa', '', 'cl_opt-opa', '', 'cl_controls');
						clGenHtml('div', 'xxx', getComputedStyle(e.target).opacity, 'xxx', 'cl_controls');
						$(".cl_opt-opa").change(function(d) {
							console.log(d.target.value);
							e.target.style.opacity = d.target.value;
							console.log(e);
//							lolka = document.getElementById('xxx');
//							console.log(lolka.innerHTML());
							document.getElementById('xxx').innerHTML = d.target.value;
						});
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

function clGenInput(type, classed, content, placeholder, id, target) {
	var div = document.createElement("input");
	div.className = classed;
	div.innerHTML = content;
	div.id = id;
	div.setAttribute('min', 0);
	div.setAttribute('max', 1);
	div.setAttribute('step', 0.01);
	div.setAttribute('type', type);
	target = document.getElementById(target);
	return target.appendChild(div);

};


//Generate controls clicktune
clGenHtml('div', 'cl_container', '', 'cl_container', 'body');
clGenHtml('div', 'cl_power-block', '', 'cl_power-block', 'cl_container');
clGenHtml('span', 'cl_ind-enable', 'Выключен', 'cl_ind-enable', 'cl_power-block');
clGenHtml('div', 'hz', '', 'hz', 'cl_power-block');
clGenHtml('button', 'cl_btn-opt', 'настройки', 'cl_btn-opt', 'hz');
clGenHtml('div', 'cl_options', '', 'cl_options', 'cl_container');
clGenHtml('span', '', 'настройки:', '', 'cl_options');
clGenHtml('div', 'cl_div-opt', '', 'cl_div-opt', 'cl_options');
clGenInput('checkbox', 'cl_opt-opacity', '', '', '', 'cl_div-opt');


//Generate controls clicktune



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
