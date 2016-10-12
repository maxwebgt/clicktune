	clicktune = {
				enable: false,
				opened: false,
				options: {
					opacity: false,
					'box-shadow': false,
					'text-shadow': false
				}
		};
		$(".cl_ind-enable").click(function(ee){
			(clicktune.enable) ? clicktune.enable = false : clicktune.enable = true;
			console.log(clicktune.enable);
			(clicktune.enable) ? $(".cl_ind-enable").text("Включен") : $(".cl_ind-enable").text("Выключен");
		});
		$(".cl_btn-opt").click(function(ee){
			$(".cl_options").slideToggle(300);
		});
		$(".cl_opt-opacity").change(function(e) {
			(clicktune.options.opacity) ? clicktune.options.opacity = false : clicktune.options.opacity = true;
			console.log(clicktune.options.opacity);
		});
		$(".cl_opt-bshadow").change(function(e) {
			(clicktune.options['box-shadow']) ? clicktune.options['box-shadow'] = false : clicktune.options['box-shadow'] = true;
			console.log(clicktune.options['box-shadow']);
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
					$(".cl_controls").slideToggle(300);
					clicktune.opened = false;
				}
				else {
					coord1 = e.clientX + 'px';
					coord2 = e.clientY + 'px';
					$(".cl_controls").css({"left":coord1});
					$(".cl_controls").css({"top":coord2});
					$(".cl_controls").slideToggle(300);
					clicktune.opened = true;
				}
			}
		});
