clicktune = {
			enable: false,
			opened: false,
			options: {
				opacity: false,
				'box-shadow': false,
				'text-shadow': false
			}
	};

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


//Generate controls clicktune
clGenHtml('div', 'cl_container', '', 'cl_container', 'body');
clGenHtml('div', 'cl_power-block', '', 'cl_power-block', 'cl_container');
clGenHtml('span', 'cl_ind-enable', 'Выключен', 'cl_ind-enable', 'cl_power-block');
clGenHtml('div', 'hz', '', 'hz', 'cl_power-block');
clGenHtml('button', 'cl_btn-opt', 'настройки', 'cl_btn-opt', 'hz');
clGenHtml('ul', 'cl_options', '', 'cl_options', 'cl_container');
clGenHtml('span', 'zzz', 'настройки:', 'zzz', 'cl_options');
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
