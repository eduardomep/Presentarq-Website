// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: Presentarq.ggsk
// Generated 2023-01-11T16:44:33

function pano2vrSkin(player,base) {
	player.addVariable('levelnumber', 1, 1);
	player.addVariable('clickonsplash', 2, false);
	player.addVariable('whitecover', 1, 0);
	player.addVariable('youareon', 0, "");
	player.addVariable('vis_starthere_video', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._markers_container=document.createElement('div');
		el.ggId="markers_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 39px;';
		hs+='position : absolute;';
		hs+='right : 652px;';
		hs+='top : 306px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markers_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._markers_container.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._markers_container);
		el=me._floor_plans_container=document.createElement('div');
		el.ggId="Floor_Plans_Container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 420px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 480px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._floor_plans_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floor_plans_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				((player.getViewerSize().width < 960)) || 
				((player.getViewerSize().height < 960))
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floor_plans_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floor_plans_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floor_plans_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._floor_plans_container.ggCurrentLogicStateScaling == 0) {
					me._floor_plans_container.ggParameter.sx = 0.61;
					me._floor_plans_container.ggParameter.sy = 0.61;
					me._floor_plans_container.style[domTransform]=parameterToTransform(me._floor_plans_container.ggParameter);
				}
				else if (me._floor_plans_container.ggCurrentLogicStateScaling == 1) {
					me._floor_plans_container.ggParameter.sx = 0.65;
					me._floor_plans_container.ggParameter.sy = 0.65;
					me._floor_plans_container.style[domTransform]=parameterToTransform(me._floor_plans_container.ggParameter);
				}
				else if (me._floor_plans_container.ggCurrentLogicStateScaling == 2) {
					me._floor_plans_container.ggParameter.sx = 0.75;
					me._floor_plans_container.ggParameter.sy = 0.75;
					me._floor_plans_container.style[domTransform]=parameterToTransform(me._floor_plans_container.ggParameter);
				}
				else if (me._floor_plans_container.ggCurrentLogicStateScaling == 3) {
					me._floor_plans_container.ggParameter.sx = 0.85;
					me._floor_plans_container.ggParameter.sy = 0.85;
					me._floor_plans_container.style[domTransform]=parameterToTransform(me._floor_plans_container.ggParameter);
				}
				else if (me._floor_plans_container.ggCurrentLogicStateScaling == 4) {
					me._floor_plans_container.ggParameter.sx = 0.9;
					me._floor_plans_container.ggParameter.sy = 0.9;
					me._floor_plans_container.style[domTransform]=parameterToTransform(me._floor_plans_container.ggParameter);
				}
				else {
					me._floor_plans_container.ggParameter.sx = 1;
					me._floor_plans_container.ggParameter.sy = 1;
					me._floor_plans_container.style[domTransform]=parameterToTransform(me._floor_plans_container.ggParameter);
				}
			}
		}
		me._floor_plans_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floor_plans_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floor_plans_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floor_plans_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._floor_plans_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._floor_plans_container.style.opacity == 0.0) { me._floor_plans_container.style.visibility="hidden"; } }, 1505);
					me._floor_plans_container.style.opacity=0;
				}
				else {
					me._floor_plans_container.style.visibility=me._floor_plans_container.ggVisible?'inherit':'hidden';
					me._floor_plans_container.style.opacity=1;
				}
			}
		}
		me._floor_plans_container.onmouseover=function (e) {
			player.setVariableValue('onfloorplanbar', "true");
		}
		me._floor_plans_container.onmouseout=function (e) {
			player.setVariableValue('onfloorplanbar', "false");
		}
		me._floor_plans_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._frame_rectangle_floor_plans=document.createElement('div');
		el.ggId="frame_rectangle_floor_plans";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.203922);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 280px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._frame_rectangle_floor_plans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._frame_rectangle_floor_plans.ggUpdatePosition=function (useTransition) {
		}
		el=me._changetolevel2_selector=document.createElement('div');
		els=me._changetolevel2_selector__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="change-to-level2_selector";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.2em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 36px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 18px;';
		hs+=cssPrefix + 'border-radius: 18px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 5px 4px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p style=\"margin-top:0.25em\";>Planta Alta<\/p>";
		el.appendChild(els);
		me._changetolevel2_selector.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._changetolevel2_selector.onclick=function (e) {
			player.setVariableValue('levelnumber', Number("2"));
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.openNext("{node4}","");
		}
		me._changetolevel2_selector.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._changetolevel2_selector);
		el=me._changetolevel1_selector=document.createElement('div');
		els=me._changetolevel1_selector__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="change-to-level1_selector";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.2em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 36px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 18px;';
		hs+=cssPrefix + 'border-radius: 18px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 5px 4px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p style=\"margin-top:0.25em\";>Planta Baja<\/p>";
		el.appendChild(els);
		me._changetolevel1_selector.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._changetolevel1_selector.onclick=function (e) {
			player.setVariableValue('levelnumber', Number("1"));
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.openNext("{node1}","");
		}
		me._changetolevel1_selector.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._changetolevel1_selector);
		el=me._floor_plan_help_text=document.createElement('div');
		els=me._floor_plan_help_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="floor_plan_help_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 42px;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 231px;';
		hs+='visibility : hidden;';
		hs+='width : 255px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 0.8em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 255px;';
		hs+='height: 42px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p style=\"margin-right:0.4em; margin-left:0.4em; margin-top:0.4em; margin-bottom:0.4em;\">You can also use your keyboard number keys (1, 2, 3....) to change levels.<\/p>";
		el.appendChild(els);
		me._floor_plan_help_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_plan_help_text.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._floor_plan_help_text);
		el=me._text_youareon=document.createElement('div');
		els=me._text_youareon__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="text_youareon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 221px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 204px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.3em; font-style: italic;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 204px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_youareon.ggUpdateText=function() {
			var hs="<p style=\"margin-top:0.25em\";>"+player.getVariableValue('youareon')+"<\/p>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_youareon.ggUpdateText();
		player.addListener('timer', function() {
			me._text_youareon.ggUpdateText();
		});
		el.appendChild(els);
		me._text_youareon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_youareon.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._text_youareon);
		el=me._floor_plan_help_on_off=document.createElement('div');
		els=me._floor_plan_help_on_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2hlbHAuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxOC40MyIgaW5rc2NhcGU6d2luZG93LWhlaWdodD'+
			'0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSI0MC45Mzg2ODciIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSI+CiAgPGlua3NjYXBlOmdy'+
			'aWQgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSByPSIzOCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiIGN4PSI1MCIgY3k9IjUwIi8+CiA8cGF0aCBzdHlsZT'+
			'0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7'+
			'dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZz'+
			'owO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJv'+
			'a2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlkPSJwYXRoNDQ5NCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MC'+
			'AxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEy'+
			'LjUyNTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS'+
			'45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4PSItMjkiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC'+
			'1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNoYWxrZHVzdGVyOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRp'+
			'b246J0NoYWxrZHVzdGVyLCBOb3JtYWwnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjYwMzQxMTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InRleHQ0NTA3IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjY1NzQyMjEsMCwwLD'+
			'EuNjU3MDY3NCw2Mi4zOTE4MiwxMi40NDQxMjEpIiBhcmlhLWxhYmVsPSI/Ij4KICA8cGF0aCBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LWZhbWlseTonQXJpYWwgUm91bmRlZCBNVCBCb2xkJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidBcmlhbCBSb3VuZGVkIE1UIEJvbGQsICc7ZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjYwMzQxMTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NTA5IiBpbmtzY2FwZTpjb25uZWN0'+
			'b3ItY3VydmF0dXJlPSIwIiBkPSJtIC0xNy4yNDIxODcsMTYuMDQyOTY5IHEgMCwtMS44NTU0NjkgMS4xOTE0MDYsLTMuNzUgMS4xOTE0MDYsLTEuOTE0MDYzIDMuNDc2NTYyLC0zLjE2NDA2MjcgMi4yODUxNTYsLTEuMjUwMDAwMSA1LjMzMjAzMTUsLTEuMjUwMDAwMSAyLjgzMjAzMTMsMCA1LDEuMDU0Njg3NiAyLjE2Nzk2ODc1LDEuMDM1MTU2MiAzLjMzOTg0MzcsMi44MzIwMzEyIDEuMTkxNDA2MywxLjc5Njg3NSAxLjE5MTQwNjMsMy45MDYyNSAwLDEuNjYwMTU2IC0wLjY4MzU5MzgsMi45MTAxNTYgLTAuNjY0MDYyNDUsMS4yNSAtMS42MDE1NjI0NSwyLjE2Nzk2OSAtMC45MTc5Njg3NSwwLj'+
			'g5ODQzNyAtMy4zMjAzMTI1NSwzLjA0Njg3NSAtMC42NjQwNjI1LDAuNjA1NDY5IC0xLjA3NDIxODcsMS4wNzQyMTkgLTAuMzkwNjI1LDAuNDQ5MjE4IC0wLjU4NTkzNzUsMC44Mzk4NDMgLTAuMTk1MzEyNSwwLjM3MTA5NCAtMC4zMTI1LDAuNzYxNzE5IC0wLjA5NzY1NiwwLjM3MTA5NCAtMC4zMTI1LDEuMzI4MTI1IC0wLjM3MTA5MzcsMi4wMzEyNSAtMi4zMjQyMTg3LDIuMDMxMjUgLTEuMDE1NjI1MSwwIC0xLjcxODc1MDEsLTAuNjY0MDYyIC0wLjY4MzU5MzcsLTAuNjY0MDYzIC0wLjY4MzU5MzcsLTEuOTcyNjU3IDAsLTEuNjQwNjI1IDAuNTA3ODEyNSwtMi44MzIwMzEgMC41MDc4MTI1LC0x'+
			'LjIxMDkzNyAxLjM0NzY1NjIsLTIuMTA5Mzc1IDAuODM5ODQzOCwtMC45MTc5NjkgMi4yNjU2MjUxLC0yLjE2Nzk2OSAxLjI1LC0xLjA5Mzc1IDEuNzk2ODc1LC0xLjY0MDYyNSAwLjU2NjQwNjIsLTAuNTY2NDA2IDAuOTM3NDk5OSwtMS4yNSAwLjM5MDYyNSwtMC42ODM1OTMgMC4zOTA2MjUsLTEuNDg0Mzc0IDAsLTEuNTYyNSAtMS4xNzE4NzQ5LC0yLjYzNjcxOSBRIC01LjQwNjI1LDEyIC03LjI0MjE4NzUsMTIgcSAtMi4xNDg0Mzc1LDAgLTMuMTY0MDYyNSwxLjA5Mzc1IC0xLjAxNTYyNSwxLjA3NDIxOSAtMS43MTg3NSwzLjE4MzU5NCAtMC42NjQwNjMsMi4yMDcwMzEgLTIuNTE5NTMxLDIuMj'+
			'A3MDMxIC0xLjA5Mzc1LDAgLTEuODU1NDY5LC0wLjc2MTcxOSAtMC43NDIxODcsLTAuNzgxMjUgLTAuNzQyMTg3LC0xLjY3OTY4NyB6IG0gOS41MzEyNDk1LDIxLjQwNjI1IHEgLTEuMTkxNDA2MywwIC0yLjA4OTg0MzgsLTAuNzYxNzE5IC0wLjg3ODkwNjcsLTAuNzgxMjUgLTAuODc4OTA2NywtMi4xNjc5NjkgMCwtMS4yMzA0NjkgMC44NTkzNzU1LC0yLjA3MDMxMiAwLjg1OTM3NSwtMC44Mzk4NDQgMi4xMDkzNzUsLTAuODM5ODQ0IDEuMjMwNDY4OCwwIDIuMDcwMzEyNSwwLjgzOTg0NCAwLjgzOTg0MzgsMC44Mzk4NDMgMC44Mzk4NDM4LDIuMDcwMzEyIDAsMS4zNjcxODggLTAuODc4OTA2Mywy'+
			'LjE0ODQzOCAtMC44Nzg5MDYyLDAuNzgxMjUgLTIuMDMxMjUsMC43ODEyNSB6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._floor_plan_help_on_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floor_plan_help_on_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 12px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 229px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._floor_plan_help_on_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_plan_help_on_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floor_plan_help_on_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floor_plan_help_on_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floor_plan_help_on_off.style[domTransition]='';
				if (me._floor_plan_help_on_off.ggCurrentLogicStateVisible == 0) {
					me._floor_plan_help_on_off.style.visibility="hidden";
					me._floor_plan_help_on_off.ggVisible=false;
				}
				else {
					me._floor_plan_help_on_off.style.visibility=(Number(me._floor_plan_help_on_off.style.opacity)>0||!me._floor_plan_help_on_off.style.opacity)?'inherit':'hidden';
					me._floor_plan_help_on_off.ggVisible=true;
				}
			}
		}
		me._floor_plan_help_on_off.onclick=function (e) {
			me._floor_plan_help_text.ggVisible = !me._floor_plan_help_text.ggVisible;
			var flag=me._floor_plan_help_text.ggVisible;
			me._floor_plan_help_text.style[domTransition]='none';
			me._floor_plan_help_text.style.visibility=((flag)&&(Number(me._floor_plan_help_text.style.opacity)>0||!me._floor_plan_help_text.style.opacity))?'inherit':'hidden';
		}
		me._floor_plan_help_on_off.onmouseover=function (e) {
			me._floor_plan_help_on_off.style[domTransition]='none';
			me._floor_plan_help_on_off.style.opacity='1';
			me._floor_plan_help_on_off.style.visibility=me._floor_plan_help_on_off.ggVisible?'inherit':'hidden';
		}
		me._floor_plan_help_on_off.onmouseout=function (e) {
			me._floor_plan_help_on_off.style[domTransition]='none';
			me._floor_plan_help_on_off.style.opacity='0.75';
			me._floor_plan_help_on_off.style.visibility=me._floor_plan_help_on_off.ggVisible?'inherit':'hidden';
		}
		me._floor_plan_help_on_off.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._floor_plan_help_on_off);
		el=me._autorotation_off=document.createElement('div');
		els=me._autorotation_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX3JvdGF0aW9uX29uLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNj'+
			'OldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOndpbmRvdy1oZW'+
			'lnaHQ9IjIwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiPgogIDxpbmtzY2Fw'+
			'ZTpncmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdGggc3'+
			'R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVu'+
			'dDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZG'+
			'Rpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7'+
			'c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLj'+
			'UsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1'+
			'MCwxMi41MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZS'+
			'g0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5z'+
			'bGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3'+
			'dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2NjAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTA5MTI1ODUsMCwwLDAuMTA5MTI1ODUsMjQuOTk4NDgxLDI1LjAwMTU3MSki'+
			'PgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjAzIj4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MDEiPgogICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1OTkiIGlua3NjYXBlOmNvbm5lY3Rvci'+
			'1jdXJ2YXR1cmU9IjAiIGQ9Im0gNDQ1LjY1MSwyMDEuOTUgYyAtMS40ODUsLTkuMzA4IC0xMC4yMzUsLTE1LjY0OSAtMTkuNTQzLC0xNC4xNjQgLTkuMzA4LDEuNDg1IC0xNS42NDksMTAuMjM1IC0xNC4xNjQsMTkuNTQzIDAuMDE2LDAuMTAyIDAuMDMzLDAuMjAzIDAuMDUxLDAuMzA0IDE3LjM4LDEwMi4zMTEgLTUxLjQ3LDE5OS4zMzkgLTE1My43ODEsMjE2LjcxOSBDIDE1NS45MDMsNDQxLjczMiA1OC44NzUsMzcyLjg4MiA0MS40OTUsMjcwLjU3MSAyNC4xMTUsMTY4LjI2IDkyLjk2Niw3MS4yMzIgMTk1LjI3Niw1My44NTIgYyA2Mi45MTksLTEwLjY4OCAxMjYuOTYyLDExLjI5IDE3MC4wNTks'+
			'NTguMzYxIGwgLTc1LjYwNSwyNS4xOSBjIC04Ljk0NCwyLjk3NiAtMTMuNzgxLDEyLjYzOCAtMTAuODA2LDIxLjU4MiAwLjAwMSwwLjAwMiAwLjAwMiwwLjAwNSAwLjAwMywwLjAwNyAyLjk3Niw4Ljk0NCAxMi42MzgsMTMuNzgxIDIxLjU4MiwxMC44MDYgMC4wMDMsLTAuMDAxIDAuMDA1LC0wLjAwMiAwLjAwNywtMC4wMDIgbCAxMDIuNCwtMzQuMTMzIGMgNi45NzIsLTIuMzIyIDExLjY3NSwtOC44NDcgMTEuNjc0LC0xNi4xOTYgViAxNy4wNjcgQyA0MTQuNTksNy42NDEgNDA2Ljk0OSwwIDM5Ny41MjMsMCAzODguMDk3LDAgMzgwLjQ1Niw3LjY0MSAzODAuNDU2LDE3LjA2NyBWIDc5LjQxMSBDID'+
			'I5Mi41NjQsLTQuMTg1IDE1My41NDUsLTAuNzAyIDY5Ljk0OSw4Ny4xOSBjIC04My41OTYsODcuODkyIC04MC4xMTQsMjI2LjkxMSA3Ljc3OSwzMTAuNTA4IDg3Ljg5Myw4My41OTcgMjI2LjkxMSw4MC4xMTQgMzEwLjUwOCwtNy43NzkgNDcuNjY5LC01MC4xMiA2OC45NDMsLTExOS43NjcgNTcuNDE1LC0xODcuOTY5IHoiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNm'+
			'ZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjA3Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MDkiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYxMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNz'+
			'MxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjEzIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MTUiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYxNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5'+
			'NjA3OCIgaWQ9Imc0NjE5Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MjEiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYyMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjI1Ii8+CiAgPGcgc3'+
			'R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MjciLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYyOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjMxIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6'+
			'I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotation_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Autorotation_Off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 322px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 229px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotation_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotation_off.onclick=function (e) {
			player.stopAutorotate();
			me._autorotation_off.style[domTransition]='none';
			me._autorotation_off.style.visibility='hidden';
			me._autorotation_off.ggVisible=false;
			me._autorotation_on.style[domTransition]='none';
			me._autorotation_on.style.visibility=(Number(me._autorotation_on.style.opacity)>0||!me._autorotation_on.style.opacity)?'inherit':'hidden';
			me._autorotation_on.ggVisible=true;
		}
		me._autorotation_off.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._autorotation_off);
		el=me._autorotation_on=document.createElement('div');
		els=me._autorotation_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX3JvdGF0aW9uX29mZi5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxj'+
			'YzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnpvb209IjEzLjk5IiBpbmtzY2FwZTp3aW5kb3ctaG'+
			'VpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjExLjY4NjkxOSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2Nh'+
			'cGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYXRoIH'+
			'N0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRl'+
			'bnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYW'+
			'RkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5k'+
			'O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC'+
			'41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIg'+
			'NTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFu'+
			'c2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweD'+
			't3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjYwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjEwOTEyNTg1LDAsMCwwLjEwOTEyNTg1LDI0Ljk5ODQ4MSwyNS4wMDE1NzEp'+
			'Ij4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwMyI+CiAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjAxIj4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NTk5IiBpbmtzY2FwZTpjb25uZWN0b3'+
			'ItY3VydmF0dXJlPSIwIiBkPSJtIDQ0NS42NTEsMjAxLjk1IGMgLTEuNDg1LC05LjMwOCAtMTAuMjM1LC0xNS42NDkgLTE5LjU0MywtMTQuMTY0IC05LjMwOCwxLjQ4NSAtMTUuNjQ5LDEwLjIzNSAtMTQuMTY0LDE5LjU0MyAwLjAxNiwwLjEwMiAwLjAzMywwLjIwMyAwLjA1MSwwLjMwNCAxNy4zOCwxMDIuMzExIC01MS40NywxOTkuMzM5IC0xNTMuNzgxLDIxNi43MTkgQyAxNTUuOTAzLDQ0MS43MzIgNTguODc1LDM3Mi44ODIgNDEuNDk1LDI3MC41NzEgMjQuMTE1LDE2OC4yNiA5Mi45NjYsNzEuMjMyIDE5NS4yNzYsNTMuODUyIGMgNjIuOTE5LC0xMC42ODggMTI2Ljk2MiwxMS4yOSAxNzAuMDU5'+
			'LDU4LjM2MSBsIC03NS42MDUsMjUuMTkgYyAtOC45NDQsMi45NzYgLTEzLjc4MSwxMi42MzggLTEwLjgwNiwyMS41ODIgMC4wMDEsMC4wMDIgMC4wMDIsMC4wMDUgMC4wMDMsMC4wMDcgMi45NzYsOC45NDQgMTIuNjM4LDEzLjc4MSAyMS41ODIsMTAuODA2IDAuMDAzLC0wLjAwMSAwLjAwNSwtMC4wMDIgMC4wMDcsLTAuMDAyIGwgMTAyLjQsLTM0LjEzMyBjIDYuOTcyLC0yLjMyMiAxMS42NzUsLTguODQ3IDExLjY3NCwtMTYuMTk2IFYgMTcuMDY3IEMgNDE0LjU5LDcuNjQxIDQwNi45NDksMCAzOTcuNTIzLDAgMzg4LjA5NywwIDM4MC40NTYsNy42NDEgMzgwLjQ1NiwxNy4wNjcgViA3OS40MTEgQy'+
			'AyOTIuNTY0LC00LjE4NSAxNTMuNTQ1LC0wLjcwMiA2OS45NDksODcuMTkgYyAtODMuNTk2LDg3Ljg5MiAtODAuMTE0LDIyNi45MTEgNy43NzksMzEwLjUwOCA4Ny44OTMsODMuNTk3IDIyNi45MTEsODAuMTE0IDMxMC41MDgsLTcuNzc5IDQ3LjY2OSwtNTAuMTIgNjguOTQzLC0xMTkuNzY3IDU3LjQxNSwtMTg3Ljk2OSB6Ii8+CiAgIDwvZz4KICA8L2c+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MDUiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZToj'+
			'ZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjA5Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MTEiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2Mz'+
			'czMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYxMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjE1Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MTciLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAx'+
			'OTYwNzgiIGlkPSJnNDYxOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjIxIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MjMiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYyNSIvPgogIDxnIH'+
			'N0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjI3Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MjkiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYzMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tl'+
			'OiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjMzIi8+CiA8L2c+CiA8cGF0aCBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InJlY3Q0NTIzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDI1LjQ5OTk3OSwyNi'+
			'4yNTM4MjQgNDkuMjQ2MTUzLDUwIDI1LjQ5OTk3OSw3My43NDYxNzUgMjYuMjUzODI1LDc0LjUwMDAyMSA1MCw1MC43NTM4NDcgNzMuNzQ2MTc1LDc0LjUwMDAyMSA3NC41MDAwMjEsNzMuNzQ2MTc1IDUwLjc1Mzg0Nyw1MCA3NC41MDAwMjEsMjYuMjUzODI0IDczLjc0NjE3NSwyNS40OTk5NzggNTAsNDkuMjQ2MTUzIDI2LjI1MzgyNSwyNS40OTk5NzggWiIvPgo8L3N2Zz4K';
		me._autorotation_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Autorotation_On";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 322px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 229px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotation_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotation_on.onclick=function (e) {
			player.startAutorotate("0");
			me._autorotation_on.style[domTransition]='none';
			me._autorotation_on.style.visibility='hidden';
			me._autorotation_on.ggVisible=false;
			me._autorotation_off.style[domTransition]='none';
			me._autorotation_off.style.visibility=(Number(me._autorotation_off.style.opacity)>0||!me._autorotation_off.style.opacity)?'inherit':'hidden';
			me._autorotation_off.ggVisible=true;
		}
		me._autorotation_on.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._autorotation_on);
		el=me._compass=document.createElement('div');
		el.ggId="compass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 380px;';
		hs+='position : absolute;';
		hs+='top : 229px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass.ggUpdatePosition=function (useTransition) {
		}
		el=me._compass_ring=document.createElement('div');
		els=me._compass_ring__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iY29tcGFzc19yaW5nLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldv'+
			'cmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOndpbmRvdy1oZWlnaH'+
			'Q9IjIwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiPgogIDxpbmtzY2FwZTpn'+
			'cmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdGggc3R5bG'+
			'U9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDow'+
			'O3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbm'+
			'c6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ry'+
			'b2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNT'+
			'AgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwx'+
			'Mi41MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nz'+
			'kuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0'+
			'ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcm'+
			'Qtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPHBhdGggaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSIxIiBzb2RpcG9kaTphcmcxPSIxLjU3MDc5NjMiIHNvZGlwb2RpOmFyZzI9IjIuNjE3OTkzOSIgc29kaXBvZGk6Y3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJv'+
			'a2Utd2lkdGg6MjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgc29kaXBvZGk6cjE9IjQiIHNvZGlwb2RpOnR5cGU9InN0YXIiIGlkPSJwYXRoNDUxOSIgaW5rc2NhcGU6cm91bmRlZD0iMCIgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIgc29kaXBvZGk6Y3k9IjE0IiBpbmtzY2FwZTpmbGF0c2lkZWQ9ImZhbHNlIiBzb2RpcG9kaTpzaWRlcz0iMyIgc29kaXBvZGk6cjI9IjIiIGQ9Ik0gNTAsMTggNDguMjY3OTQ5LDE1IDQ2LjUzNTg5OCwxMiA1MCwxMiBsIDMuNDY0MTAyLDAgLTEuNzMyMDUxLDMgei'+
			'IvPgo8L3N2Zz4K';
		me._compass_ring__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="compass_ring";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass_ring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_ring.ggUpdatePosition=function (useTransition) {
		}
		me._compass.appendChild(me._compass_ring);
		el=me._compass_handle=document.createElement('div');
		els=me._compass_handle__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iY29tcGFzc19oYW5kbGUuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6d2luZG93LWhlaW'+
			'dodD0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNz'+
			'k5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0z'+
			'NTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2'+
			'ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTMsMzkuNTAwMDAxKSI+CiAgPHBhdGggaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSI1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtm'+
			'aWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS45OTk5OTk3NjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NTIzIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIGQ9Ik0gMTAzLDQwLjQ5OTk5OSAxMDAsMTAuNSBsIDYsLTEwZS03IHoiLz4KICA8cGF0aCBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii01IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmMDAwMDtmaWxsLW9wYWNpdHk6MTtzdH'+
			'Jva2U6bm9uZTtzdHJva2Utd2lkdGg6MS45OTk5OTk3NjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NTIzLTgiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgZD0ibSAxMDMsLTE5LjUwMDAwMSAtMywyOS45OTk5OTkgNiwxZS02IHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._compass_handle__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="compass_handle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass_handle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_handle.ggUpdatePosition=function (useTransition) {
		}
		me._compass.appendChild(me._compass_handle);
		me._frame_rectangle_floor_plans.appendChild(me._compass);
		el=me._mh_radar=document.createElement('div');
		el.ggId="mh_radar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mh_radar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mh_radar.ggUpdatePosition=function (useTransition) {
		}
		el=me._yellow_beam=document.createElement('div');
		els=me._yellow_beam__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW'+
			'5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIGhlaWdodD0iMTAwIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxMDAiIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5MCIgaWQ9InN2ZzIiIHNvZGlwb2RpOmRvY25hbWU9InJhZGFyLXBvaW50aW5nLW5vcnRoLnN2ZyIgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJHOlxNeSBQaWN0dXJlc1xGb3RvZ3JhZmlhIDM2MHBhbm90b3Vyc1xERVNBUlJPTExPUyBBIFBFRElET1xHT0xERU5QQUdFU1xERVNBUlJPTExPXFZFUlNJT04gLSB2OFxT'+
			'S0lOIEVMRU1FTlRTXHJhZGFyX3BvaW50aW5nX25vcnRoLnBuZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnMgaWQ9ImRlZnM0Ij4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MTsiIG9mZn'+
			'NldD0iMCIgaWQ9InN0b3AzNzk5Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzMzMzM7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgwMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NzUiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjAiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzc3Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJz'+
			'dG9wMzc3OSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NzQiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc3NiIvPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZjAwO3N0b3Atb3BhY2l0eTowOyIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3NzgiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzNzYxIj4KICAgPHN0b3Agc3R5bGU9In'+
			'N0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzYzIi8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzc2NiIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NjMiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc2NSIvPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjoj'+
			'ZmZmZjAwO3N0b3Atb3BhY2l0eTowOyIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3NjciLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzYzIiB4MT0iMzUiIHkxPSIyMCIgaWQ9ImxpbmVhckdyYWRpZW50Mzc2OSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgyPSIzNSIvPgogIDxyYWRpYWxHcmFkaWVudCBmeD0iMzUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3NzQiIGZ5PSI1Mi41IiByPSIzNSIgaWQ9InJhZGlhbEdyYWRpZW50Mzc4MCIgY3'+
			'g9IjM1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuNTcxNDE0NiwtMC4wMDY2MzEzNywwLjAwNTA4MzIzLDEuMjA0NTU3NCwtMy4wODg0NjgsOTMyLjUxNDUyKSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3k9IjUyLjUiLz4KICA8cmFkaWFsR3JhZGllbnQgZng9IjU0LjQ1ODk2MSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc3NSIgZnk9Ii0yOC4yMDU4NzkiIHI9IjUwLjI1IiBpZD0icmFkaWFsR3JhZGllbnQzNzgxIiBjeD0iNTQuNDU4OTYxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNTE0NDk1NzUsLTAu'+
			'ODU3NDkyOTMsMC4wOTk1MDI0OSwwLjA1OTcwMTQ5LDIxLjc4NzY1LDY2LjM4MjEwOSkiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSItMjguMjA1ODc5Ii8+CiAgPGxpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTciIHgxPSI2MyIgeTE9IjY1IiBpZD0ibGluZWFyR3JhZGllbnQzODAzIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHkyPSIxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgyPSI2MyIvPgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbn'+
			'QzNzk3IiB4MT0iMjYiIHkxPSIzNSIgaWQ9ImxpbmVhckdyYWRpZW50MzgwNiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwLjI1LDk1Mi4zNjIxOCkiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSI1IiB4Mj0iMjYiLz4KICA8bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5Ny04IiB4MT0iMjYiIHkxPSIzNSIgaWQ9ImxpbmVhckdyYWRpZW50MzgwNi02IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iNSIgeDI9IjI2Ii8+CiAg'+
			'PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3OTctOCIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzk5LTgiLz4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIgaWQ9InN0b3AzODAxLTIiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3LTgiIHkxPSIzNSIgeDE9IjI2IiBpZD0ibGluZWFyR3JhZGllbn'+
			'QzODIzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDk5Ljc1LDk1Mi4zNjIxOCkiIHkyPSI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4Mj0iMjYiLz4KICA8cmFkaWFsR3JhZGllbnQgZng9IjM0LjQzMzQ2OCIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc3NCIgZnk9IjYxLjQ5NjQ0OSIgcj0iMzUiIGlkPSJyYWRpYWxHcmFkaWVudDMwMTYiIGN4PSIzNC40MzM0NjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTMuNjI1Mzk5MWUtOCwtMS4xNDI4NTcyLDEuMjA0NTY4MSwtMy42Mzc0OTQ4ZS04LC0y'+
			'My40MDk5ODcsMTA0MC4zODE0KSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3k9IjYxLjQ5NjQ0OSIvPgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3IiB4MT0iMjUuMDgzMzQ1IiB5MT0iMzgiIGlkPSJsaW5lYXJHcmFkaWVudDMwMTgiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoLTkwLDUyNC4zODk0Myw1MjcuNzIyNzYpIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMTAuMDAwMDAyIiB4Mj0iMjUuMDgzMzQ1Ii8+CiAgPG'+
			'xpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTctOCIgeDE9IjI1Ljc1IiB5MT0iMjAiIGlkPSJsaW5lYXJHcmFkaWVudDMwMjAiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxLDEsMCwtMy4zMzMzMjgyLDk1Mi42MTIxOSkiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSI0IiB4Mj0iMjUuNzUiLz4KICA8bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5NyIgeDE9IjI5LjA4MzM1NSIgeTE9IjcxLjk5OTk5MiIgaWQ9ImxpbmVhckdyYWRpZW50MzAxOC04IiBncmFk'+
			'aWVudFRyYW5zZm9ybT0icm90YXRlKC05MCw1MjQuMzg5NDQsNTI3LjcyMjc2KSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9Ijk3Ljk5OTk5MiIgeDI9IjI5LjA4MzM1NSIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzAxMSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEuMCIgaW5rc2NhcGU6em9vbT0iMTguNDMiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2Ii'+
			'BpZD0iYmFzZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTpjeD0iNTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIj4KICA8aW5rc2NhcGU6Z3JpZCBzcGFjaW5neD0iMSIgc3BhY2luZ3k9IjEiIHR5cGU9Inh5Z3JpZCIgc25hcHZpc2libGVncmlkbGluZXNvbmx5PSJ0cnVlIiBpZD0iZ3JpZDI5ODUiIG9yaWdpbnk9IjAi'+
			'IGVtcHNwYWNpbmc9IjUiIHZpc2libGU9InRydWUiIG9yaWdpbng9IjAiIGVuYWJsZWQ9InRydWUiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTciPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaW5rc2NhcGU6Z3JvdXBtb2RlPS'+
			'JsYXllciIgaWQ9ImxheWVyMSIgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTk1NS42OTU1MykiPgogIDxnIGlkPSJnMzAxMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41LDAsMCwwLjUsMS42NjY2NjQxLDUyNi4xODExMSkiPgogICA8ZyBpZD0iZzQ0IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjk5MjAyNDksMCwwLDEuOTkwNzg1NSwtMy4zMzMzMjY4LC0xMDQ5Ljc1OTcpIj4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOnVybCgjcmFkaWFsR3JhZGllbnQzMDE2KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InBhdGgyOTkxIiBpbmtzY2FwZTpjb25uZWN0'+
			'b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiBkPSJtIDAsOTU4LjgxMTc3IDM0LDUwLjAwMDEzIGggMzIgbCAzNCwtNTAuMDAwMTMgeiIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDMwMTgpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0icmVjdDM3OTUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIGQ9Im0gMCw5NTkuMDQyODggaCAwLjUgbCAzMy43NSw1MC4wMDAzMiBoIC0wLjUgeiIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaW'+
			'VudDMwMTgtOCk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEiIGlkPSJyZWN0Mzc5NS0xIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiBkPSJNIDEwMC40MDAzNSw5NTkuMDQyODggSCA5OS45MDAzNDYgTCA2Ni4xNTAyOSwxMDA5LjA0MzIgaCAwLjUgeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._yellow_beam__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="yellow_beam";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._yellow_beam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._yellow_beam.ggUpdatePosition=function (useTransition) {
		}
		me._mh_radar.appendChild(me._yellow_beam);
		me._frame_rectangle_floor_plans.appendChild(me._mh_radar);
		el=me._level2_floorplan=document.createElement('div');
		els=me._level2_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iNjE5IiB2aWV3Qm94PSIwIDAgNjE5IDYxOSIgd2lkdGg9IjYxOSI+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjIwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjk3LjE0NSAxNDQuMDM5SDI2NC4xMjdWMTRNMjY0LjEyNyAxNEgxMzRWMjA1LjE3N00yNjQuMTI3IDE0SDMzOS44NzNNMTM0IDIwNS4xNzdWMjE1Ljg1MlYyOTguMzRNMTM0IDIwNS4xNzdIMjcxLjg5Nk0yODguNDA1IDQ1My42MTFWMjk4LjM0TTEzNCAyOTguMzRIMjg4LjQwNU0xMzQgMjk4LjM0VjM2OS4xODJNMjg4LjQwNS'+
			'AyOTguMzRWMjA1LjE3N0gyNzEuODk2TTEzNCAzNjkuMTgyVjYwNUgzMjguMjJWNDU5LjQzNEg0NzBWMjA1LjE3N00xMzQgMzY5LjE4MkgyMzkuODVNMTM0IDQ1NS41NTJIMjM5Ljg1TTQ3MCAyMDUuMTc3VjE0SDMzOS44NzNNNDcwIDIwNS4xNzdIMzM0LjA0NlYxODguNjhNMzM5Ljg3MyAxNFYxNDQuMDM5TTI3MS44OTYgMjA1LjE3N1YxODguNjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJ3aGl0ZSIvPgo8L3N2Zz4K';
		me._level2_floorplan__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="level2_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 190px;';
		hs+='position : absolute;';
		hs+='right : 22px;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._level2_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._level2_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._level2_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._level2_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._level2_floorplan.style[domTransition]='';
				if (me._level2_floorplan.ggCurrentLogicStateVisible == 0) {
					me._level2_floorplan.style.visibility=(Number(me._level2_floorplan.style.opacity)>0||!me._level2_floorplan.style.opacity)?'inherit':'hidden';
					me._level2_floorplan.ggVisible=true;
				}
				else {
					me._level2_floorplan.style.visibility="hidden";
					me._level2_floorplan.ggVisible=false;
				}
			}
		}
		me._level2_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._level2_floorplan);
		el=me._level1_floorplan=document.createElement('div');
		els=me._level1_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iNjE5IiB2aWV3Qm94PSIwIDAgNjE5IDYxOSIgd2lkdGg9IjYxOSI+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjIwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjExIDE4NUgzMDEuMjg2VjI1MC4yNzdNMjExIDM3Mi4yMTZIMzAxLjI4NlYyNTAuMjc3TTIxMSAzNzIuMjE2VjQzMy44OTZNMjExIDM3Mi4yMTZWMzIyLjI2M0gyNjguMTQzTTIxMSA0MzMuODk2SDE2M1Y2MDNIMzM5VjQyMi44OTZNMjExIDQzMy44OTZIMzAxLjI4NlY0MDQuODQ3TTMwMS4yODYgMjUwLjI3N0gyMTFWMjkzLj'+
			'c5NU0xNjggMTg4LjE2OFYxM0gyOTguNTM0TTM4OCA0MjIuODk2SDQ2OFYxM0gyOTguNTM0TTI5OC41MzQgMTNWMTM2LjY0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo=';
		me._level1_floorplan__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="level1_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 190px;';
		hs+='position : absolute;';
		hs+='right : 23px;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._level1_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._level1_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._level1_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._level1_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._level1_floorplan.style[domTransition]='';
				if (me._level1_floorplan.ggCurrentLogicStateVisible == 0) {
					me._level1_floorplan.style.visibility=(Number(me._level1_floorplan.style.opacity)>0||!me._level1_floorplan.style.opacity)?'inherit':'hidden';
					me._level1_floorplan.ggVisible=true;
				}
				else {
					me._level1_floorplan.style.visibility="hidden";
					me._level1_floorplan.ggVisible=false;
				}
			}
		}
		me._level1_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._level1_floorplan);
		el=me._dormitorio_principal=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Dormitorio principal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 276px;';
		hs+='position : absolute;';
		hs+='top : 173px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dormitorio_principal.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._dormitorio_principal.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dormitorio_principal.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dormitorio_principal.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dormitorio_principal.style[domTransition]='';
				if (me._dormitorio_principal.ggCurrentLogicStateVisible == 0) {
					me._dormitorio_principal.style.visibility=(Number(me._dormitorio_principal.style.opacity)>0||!me._dormitorio_principal.style.opacity)?'inherit':'hidden';
					me._dormitorio_principal.ggVisible=true;
				}
				else {
					me._dormitorio_principal.style.visibility="hidden";
					me._dormitorio_principal.ggVisible=false;
				}
			}
		}
		me._dormitorio_principal.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._dormitorio_principal.onmouseover=function (e) {
			player.setVariableValue('youareon', "Dormitorio Principal");
		}
		me._dormitorio_principal.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._dormitorio_principal.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=276;me._mh_radar.ggParameter.ry=173;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._dormitorio_principal.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._dormitorio_principal);
		el=me._bao_2do=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Ba\xf1o 2do";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 301px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bao_2do.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._bao_2do.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bao_2do.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bao_2do.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bao_2do.style[domTransition]='';
				if (me._bao_2do.ggCurrentLogicStateVisible == 0) {
					me._bao_2do.style.visibility=(Number(me._bao_2do.style.opacity)>0||!me._bao_2do.style.opacity)?'inherit':'hidden';
					me._bao_2do.ggVisible=true;
				}
				else {
					me._bao_2do.style.visibility="hidden";
					me._bao_2do.ggVisible=false;
				}
			}
		}
		me._bao_2do.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._bao_2do.onmouseover=function (e) {
			player.setVariableValue('youareon', "Ba\xf1o");
		}
		me._bao_2do.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._bao_2do.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=301;me._mh_radar.ggParameter.ry=37;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._bao_2do.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._bao_2do);
		el=me._dormitorio_1=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Dormitorio 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 271px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dormitorio_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._dormitorio_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dormitorio_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dormitorio_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dormitorio_1.style[domTransition]='';
				if (me._dormitorio_1.ggCurrentLogicStateVisible == 0) {
					me._dormitorio_1.style.visibility=(Number(me._dormitorio_1.style.opacity)>0||!me._dormitorio_1.style.opacity)?'inherit':'hidden';
					me._dormitorio_1.ggVisible=true;
				}
				else {
					me._dormitorio_1.style.visibility="hidden";
					me._dormitorio_1.ggVisible=false;
				}
			}
		}
		me._dormitorio_1.onclick=function (e) {
			player.openNext('{node10}');
		}
		me._dormitorio_1.onmouseover=function (e) {
			player.setVariableValue('youareon', "dormitorio1");
		}
		me._dormitorio_1.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._dormitorio_1.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=271;me._mh_radar.ggParameter.ry=41;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._dormitorio_1.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._dormitorio_1);
		el=me._dormitorio_2=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Dormitorio 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dormitorio_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._dormitorio_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dormitorio_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dormitorio_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dormitorio_2.style[domTransition]='';
				if (me._dormitorio_2.ggCurrentLogicStateVisible == 0) {
					me._dormitorio_2.style.visibility=(Number(me._dormitorio_2.style.opacity)>0||!me._dormitorio_2.style.opacity)?'inherit':'hidden';
					me._dormitorio_2.ggVisible=true;
				}
				else {
					me._dormitorio_2.style.visibility="hidden";
					me._dormitorio_2.ggVisible=false;
				}
			}
		}
		me._dormitorio_2.onclick=function (e) {
			player.openNext('{node12}');
		}
		me._dormitorio_2.onmouseover=function (e) {
			player.setVariableValue('youareon', "Dormitorio 2");
		}
		me._dormitorio_2.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._dormitorio_2.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=328;me._mh_radar.ggParameter.ry=41;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._dormitorio_2.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._dormitorio_2);
		el=me._bao_p=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Ba\xf1o P";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 272px;';
		hs+='position : absolute;';
		hs+='top : 139px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bao_p.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._bao_p.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bao_p.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bao_p.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bao_p.style[domTransition]='';
				if (me._bao_p.ggCurrentLogicStateVisible == 0) {
					me._bao_p.style.visibility=(Number(me._bao_p.style.opacity)>0||!me._bao_p.style.opacity)?'inherit':'hidden';
					me._bao_p.ggVisible=true;
				}
				else {
					me._bao_p.style.visibility="hidden";
					me._bao_p.ggVisible=false;
				}
			}
		}
		me._bao_p.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._bao_p.onmouseover=function (e) {
			player.setVariableValue('youareon', "Ba\xf1o");
		}
		me._bao_p.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._bao_p.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=272;me._mh_radar.ggParameter.ry=139;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._bao_p.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._bao_p);
		el=me._sala_familiar=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Sala Familiar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 324px;';
		hs+='position : absolute;';
		hs+='top : 122px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sala_familiar.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sala_familiar.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sala_familiar.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sala_familiar.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sala_familiar.style[domTransition]='';
				if (me._sala_familiar.ggCurrentLogicStateVisible == 0) {
					me._sala_familiar.style.visibility=(Number(me._sala_familiar.style.opacity)>0||!me._sala_familiar.style.opacity)?'inherit':'hidden';
					me._sala_familiar.ggVisible=true;
				}
				else {
					me._sala_familiar.style.visibility="hidden";
					me._sala_familiar.ggVisible=false;
				}
			}
		}
		me._sala_familiar.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._sala_familiar.onmouseover=function (e) {
			player.setVariableValue('youareon', "Sala familiar");
		}
		me._sala_familiar.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._sala_familiar.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=324;me._mh_radar.ggParameter.ry=122;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._sala_familiar.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._sala_familiar);
		el=me._lavanderia=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Lavanderia";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 269px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lavanderia.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._lavanderia.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._lavanderia.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._lavanderia.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._lavanderia.style[domTransition]='';
				if (me._lavanderia.ggCurrentLogicStateVisible == 0) {
					me._lavanderia.style.visibility=(Number(me._lavanderia.style.opacity)>0||!me._lavanderia.style.opacity)?'inherit':'hidden';
					me._lavanderia.ggVisible=true;
				}
				else {
					me._lavanderia.style.visibility="hidden";
					me._lavanderia.ggVisible=false;
				}
			}
		}
		me._lavanderia.onclick=function (e) {
			player.openNext('{node14}');
		}
		me._lavanderia.onmouseover=function (e) {
			player.setVariableValue('youareon', "Lavanderia");
		}
		me._lavanderia.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._lavanderia.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=269;me._mh_radar.ggParameter.ry=80;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._lavanderia.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._lavanderia);
		el=me._cocina=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Cocina";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 283px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cocina.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._cocina.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cocina.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cocina.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cocina.style[domTransition]='';
				if (me._cocina.ggCurrentLogicStateVisible == 0) {
					me._cocina.style.visibility=(Number(me._cocina.style.opacity)>0||!me._cocina.style.opacity)?'inherit':'hidden';
					me._cocina.ggVisible=true;
				}
				else {
					me._cocina.style.visibility="hidden";
					me._cocina.ggVisible=false;
				}
			}
		}
		me._cocina.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._cocina.onmouseover=function (e) {
			player.setVariableValue('youareon', "Cocina");
		}
		me._cocina.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._cocina.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=283;me._mh_radar.ggParameter.ry=49;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._cocina.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._cocina);
		el=me._jardin=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Jardin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 297px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardin.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._jardin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardin.style[domTransition]='';
				if (me._jardin.ggCurrentLogicStateVisible == 0) {
					me._jardin.style.visibility=(Number(me._jardin.style.opacity)>0||!me._jardin.style.opacity)?'inherit':'hidden';
					me._jardin.ggVisible=true;
				}
				else {
					me._jardin.style.visibility="hidden";
					me._jardin.ggVisible=false;
				}
			}
		}
		me._jardin.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._jardin.onmouseover=function (e) {
			player.setVariableValue('youareon', "Jardin");
		}
		me._jardin.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._jardin.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=297;me._mh_radar.ggParameter.ry=1;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._jardin.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._jardin);
		el=me._comedor=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Comedor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 320px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._comedor.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._comedor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._comedor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._comedor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._comedor.style[domTransition]='';
				if (me._comedor.ggCurrentLogicStateVisible == 0) {
					me._comedor.style.visibility=(Number(me._comedor.style.opacity)>0||!me._comedor.style.opacity)?'inherit':'hidden';
					me._comedor.ggVisible=true;
				}
				else {
					me._comedor.style.visibility="hidden";
					me._comedor.ggVisible=false;
				}
			}
		}
		me._comedor.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._comedor.onmouseover=function (e) {
			player.setVariableValue('youareon', "Comedor");
		}
		me._comedor.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._comedor.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=320;me._mh_radar.ggParameter.ry=40;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._comedor.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._comedor);
		el=me._gradas=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Gradas";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 343px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gradas.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._gradas.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gradas.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gradas.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gradas.style[domTransition]='';
				if (me._gradas.ggCurrentLogicStateVisible == 0) {
					me._gradas.style.visibility=(Number(me._gradas.style.opacity)>0||!me._gradas.style.opacity)?'inherit':'hidden';
					me._gradas.ggVisible=true;
				}
				else {
					me._gradas.style.visibility="hidden";
					me._gradas.ggVisible=false;
				}
			}
		}
		me._gradas.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._gradas.onmouseover=function (e) {
			player.setVariableValue('youareon', "Gradas");
		}
		me._gradas.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._gradas.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=343;me._mh_radar.ggParameter.ry=102;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._gradas.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._gradas);
		el=me._sala=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Sala";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 327px;';
		hs+='position : absolute;';
		hs+='top : 121px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sala.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._sala.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sala.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sala.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sala.style[domTransition]='';
				if (me._sala.ggCurrentLogicStateVisible == 0) {
					me._sala.style.visibility=(Number(me._sala.style.opacity)>0||!me._sala.style.opacity)?'inherit':'hidden';
					me._sala.ggVisible=true;
				}
				else {
					me._sala.style.visibility="hidden";
					me._sala.ggVisible=false;
				}
			}
		}
		me._sala.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._sala.onmouseover=function (e) {
			player.setVariableValue('youareon', "Sala");
		}
		me._sala.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._sala.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=327;me._mh_radar.ggParameter.ry=121;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._sala.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._sala);
		el=me._garage=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Garage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 285px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._garage.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._garage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._garage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._garage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._garage.style[domTransition]='';
				if (me._garage.ggCurrentLogicStateVisible == 0) {
					me._garage.style.visibility=(Number(me._garage.style.opacity)>0||!me._garage.style.opacity)?'inherit':'hidden';
					me._garage.ggVisible=true;
				}
				else {
					me._garage.style.visibility="hidden";
					me._garage.ggVisible=false;
				}
			}
		}
		me._garage.onclick=function (e) {
			player.openNext('{node13}');
		}
		me._garage.onmouseover=function (e) {
			player.setVariableValue('youareon', "Garage");
		}
		me._garage.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._garage.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=285;me._mh_radar.ggParameter.ry=157;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._garage.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._garage);
		el=me._gradas_2=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Gradas 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 344px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gradas_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._gradas_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gradas_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gradas_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gradas_2.style[domTransition]='';
				if (me._gradas_2.ggCurrentLogicStateVisible == 0) {
					me._gradas_2.style.visibility=(Number(me._gradas_2.style.opacity)>0||!me._gradas_2.style.opacity)?'inherit':'hidden';
					me._gradas_2.ggVisible=true;
				}
				else {
					me._gradas_2.style.visibility="hidden";
					me._gradas_2.ggVisible=false;
				}
			}
		}
		me._gradas_2.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._gradas_2.onmouseover=function (e) {
			player.setVariableValue('youareon', "Gradas");
		}
		me._gradas_2.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._gradas_2.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=344;me._mh_radar.ggParameter.ry=130;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._gradas_2.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._gradas_2);
		el=me._ingreso=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Ingreso";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ingreso.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._ingreso.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ingreso.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ingreso.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ingreso.style[domTransition]='';
				if (me._ingreso.ggCurrentLogicStateVisible == 0) {
					me._ingreso.style.visibility=(Number(me._ingreso.style.opacity)>0||!me._ingreso.style.opacity)?'inherit':'hidden';
					me._ingreso.ggVisible=true;
				}
				else {
					me._ingreso.style.visibility="hidden";
					me._ingreso.ggVisible=false;
				}
			}
		}
		me._ingreso.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._ingreso.onmouseover=function (e) {
			player.setVariableValue('youareon', "Ingreso");
		}
		me._ingreso.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._ingreso.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=328;me._mh_radar.ggParameter.ry=187;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._ingreso.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._ingreso);
		el=me._conecting_line_floor_plan_box=document.createElement('div');
		el.ggId="conecting_line_floor_plan_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 31px;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._conecting_line_floor_plan_box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._conecting_line_floor_plan_box.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._conecting_line_floor_plan_box);
		el=me._level2_indicator=document.createElement('div');
		el.ggId="level2_indicator";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid rgba(255,255,255,0.25098);';
		hs+='cursor : default;';
		hs+='height : 7px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 87px;';
		hs+='visibility : hidden;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._level2_indicator.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._level2_indicator.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._level2_indicator.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._level2_indicator.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._level2_indicator.style[domTransition]='';
				if (me._level2_indicator.ggCurrentLogicStateVisible == 0) {
					me._level2_indicator.style.visibility=(Number(me._level2_indicator.style.opacity)>0||!me._level2_indicator.style.opacity)?'inherit':'hidden';
					me._level2_indicator.ggVisible=true;
				}
				else {
					me._level2_indicator.style.visibility="hidden";
					me._level2_indicator.ggVisible=false;
				}
			}
		}
		me._level2_indicator.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._level2_indicator);
		el=me._level1_indicator=document.createElement('div');
		el.ggId="level1_indicator";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid rgba(255,255,255,0.25098);';
		hs+='cursor : default;';
		hs+='height : 7px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : hidden;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._level1_indicator.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._level1_indicator.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._level1_indicator.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._level1_indicator.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._level1_indicator.style[domTransition]='';
				if (me._level1_indicator.ggCurrentLogicStateVisible == 0) {
					me._level1_indicator.style.visibility=(Number(me._level1_indicator.style.opacity)>0||!me._level1_indicator.style.opacity)?'inherit':'hidden';
					me._level1_indicator.ggVisible=true;
				}
				else {
					me._level1_indicator.style.visibility="hidden";
					me._level1_indicator.ggVisible=false;
				}
			}
		}
		me._level1_indicator.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._level1_indicator);
		me._floor_plans_container.appendChild(me._frame_rectangle_floor_plans);
		el=me._btn_off_floor_plans=document.createElement('div');
		els=me._btn_off_floor_plans__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fb25fZmxvb3JfcGxhbnMuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45'+
			'Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIG'+
			'lua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iOS43OSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiNmZmZmZmYiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTE3IiBpbmtzY2FwZTpjeD0iMTUuNzMwMzM3IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i'+
			'TGF5ZXJfMSIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIi8+CiA8Y2lyY2xlIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcj0iMzkuMDYzOTk5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwIiBjeD0iNTAiIGlkPSJjaXJjbGUyIiBjeT0iNTAiLz4KIDxjaXJjbGUgcj0iMzcuNSIgc3R5bGU9Im9wYWNpdHk6MC43O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2Utd2lkdGg6MSIgY3g9IjUwIiBpZD0iZWxsaXBzZTQiIGVuYW'+
			'JsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBjeT0iNTAiLz4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSI+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk5Ij4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk3Ij4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMzc5MyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAyMDMuOTkzLDI5NS4yODcgYyAyMS4wMDEsMCAzOC4wMjQsMTcuMDIz'+
			'IDM4LjAyNCwzOC4wMTggMCwyMC45OTUgLTE3LjAyMywzOC4wMjQgLTM4LjAyNCwzOC4wMjQgLTIwLjk5OCwwIC0zOC4wMjEsLTE3LjAyOSAtMzguMDIxLC0zOC4wMjQgMCwtMjAuOTk1IDE3LjAyMywtMzguMDE4IDM4LjAyMSwtMzguMDE4IHoiLz4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMzc5NSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1NzQuMjY3LDMyNS44MjIgNjAwLjA0OSwxMjIuNTYgNDE1LjExMyw1Mi4zNzggMTkzLjI3OSwxNTguMzM3IDAsNzYuNzEgMjYuMDk5LDI5My41NTggMS4wODUsNTA3LjA5MyBsIDIwNS4zNiwzOC41Mj'+
			'EgMjA5LjQ2LC0zOS44OTIgMTg0Ljg1NCw0Mi42NTggeiBNIDQxNC40MjgsNzMuOTA5IDU3OC4yMzksMTM1LjY0IDU2Ni45NjIsMjI0LjUyIDQwMy42ODksMTgzLjIxOSBaIG0gLTIxLjY2OSwxMS4yODMgLTguNjQyLDkzLjA2IC0wLjE0MiwtMC4wMzMgLTExMy4wNDYsMTQuNTgxIC0wLjY3NywyLjQ5NCBjIC0wLjE0MiwwLjUzOCAtMTMuMjU4LDQ4Ljk5NSAtMjcuMDgsNzEuMDMzIC04Ljk0NiwtNS4yNjEgLTE5LjAwNiwtOC43ODQgLTI5Ljc1NSwtMTAuMDkgbCAtOS4xNjQsLTgxLjAyOCB6IG0gLTE3LjI4MywyMDcuNTc0IC05OC4yNTEsMTQuODE1IGMgLTUuMjkxLC0xNC45NjkgLTE0Ljk5OSwt'+
			'MjcuODI1IC0yNy42MDYsLTM3LjAyMiAxMi44NjIsLTIwLjUzMSAyNC40NzEsLTYwLjI3OCAyNy4zOTQsLTcwLjc3IGwgMTA2LjM2MSwtMTMuNzI4IHogbSAtMTkxLjIwNywtMTE2LjU2OSA5LjA3OSw4MC4yMzYgYyAtMjkuODY0LDQuMTEzIC01NC4zNTgsMjUuMiAtNjMuMzM2LDUzLjIxNyBMIDQ2LjIzMywyOTYuNjgyIDM4LjE4OCwyMTguOTc2IGMgMjcuNzY5LC0xLjgzOCA0OC41OTksLTEwLjg3NSA2MS45NDgsLTI3IDEyLjAzNCwtMTQuNTE0IDE1LjQ5NSwtMzEuNjg1IDE2LjE1NywtNDQuNDg0IHogbSAtMTYwLjA4MiwtNjcuNjAxIDg0LjQ2NSwzNS42NjggYyAtMC4yNDIsMTEuNzc3IC0yLj'+
			'kwNSwyOC44NjUgLTE0LjQ0Myw0Mi43OTEgLTEyLjAzNywxNC41MTQgLTMxLjE4MiwyMi42MzIgLTU2Ljk5OCwyNC4yNjEgeiBtIC0xLjA5LDM4Mi4zMjUgMjAuNzc5LC0xNzQuNDAyIDgyLjYyNiwxMi44MDMgYyAtMC4wNjIsMS4zMjQgLTAuMTk1LDIuNjM2IC0wLjE5NSwzLjk4OSAwLDE4LjE2NCA2LjMwNywzNC44NTYgMTYuODA3LDQ4LjEwOCBsIC00Mi45MTIsMzQuNDU5IC0xMy41MjEsODYuOTU5IHogbSAxNjEuODc4LDMwLjM1OCAtOTAuNzIxLC0xNy4wMTcgMTMuMTA0LC04NC4yNTIgNDAuODM3LC0zMi43ODEgYyAxMi41MjgsMTIuOTUgMjkuNDgsMjEuNTkzIDQ4LjQyMSwyMy4zNzcgeiBN'+
			'IDE0MS43MjksMzMzLjMxMSBjIDAsLTM0LjM0OCAyNy45MzUsLTYyLjI4MSA2Mi4yNjQsLTYyLjI4MSAzNC4zNDcsMCA2Mi4yODIsMjcuOTM0IDYyLjI4Miw2Mi4yODEgMCwzNC4zMyAtMjcuOTM1LDYyLjI2NSAtNjIuMjgyLDYyLjI2NSAtMzQuMzMsMC4wMDYgLTYyLjI2NCwtMjcuOTM1IC02Mi4yNjQsLTYyLjI2NSB6IG0gNjQuNjksMTkxLjk4NyAtMS43NSwtMC4zMyAxMi4xMiwtMTE1LjExOSBjIDM2Ljc1NiwtNi4xMzUgNjQuOSwtMzguMDc2IDY0LjksLTc2LjU1NiAwLC0yLjA4MSAtMC4xNSwtNC4xMTQgLTAuMzEzLC02LjE1OSBsIDk2LjAzOCwtMTQuNDgxIDguMDE2LDgxLjkxMSBjIC00Mi'+
			'4xMzIsMS45OCAtNzMuNjI1LDE0LjkzMiAtOTMuNDQ5LDM4Ljg1NyAtMjMuMTE0LDI3LjkyMyAtMjQuMjA1LDYyLjczNyAtMjMuMDA4LDc5Ljk0OSB6IG0gNzAuMjQ3LC0xMy4zODEgYyAtMC45MzEsLTE2LjMzNyAwLjQxOSwtNDguMzk3IDIxLjI2NCwtNzMuNTY1IDE4LjQzOCwtMjIuMjYgNDguMTgyLC0zNC4yNzEgODguMjQ0LC0zNi4wOTEgbCA4LjUzNSw4Ny4xNTQgeiBtIDEyNi4zMDcsLTMyMC45NDYgMTYzLjAzLDQxLjIyNSAtOS43NzYsNzcuMDE3IC0xNjAuOTc0LC0xOS40MzEgeiBtIDEzMS4wODMsMTg0Ljc3NCAtNzQuMTc1LC04LjgxOSAxMy41ODQsMTMxLjU4IC01OS40MjgsLTEyLjc3'+
			'MyAtMTYuODUyLC0xNzYuMDM0IDEuNzMyLC0wLjI3MiAxNTUuNjEyLDE5Ljc1NCAyMy4wMjIsMTkzLjM1NCAtOTYuMjk4LC0yMi4yMTMgLTEyLjcxNCwtMTI0LjU5OSA2Ni4xMTEsNy42NzIgeiIvPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwOSIvPgogIDxnIHN0eWxlPSJmaW'+
			'xsOiNmZmZmZmYiIGlkPSJnMzgxMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyNyIvPgog'+
			'IDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyOSIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_off_floor_plans__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Off_floor_plans";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_floor_plans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_off_floor_plans.onclick=function (e) {
			me._btn_off_floor_plans.style[domTransition]='none';
			me._btn_off_floor_plans.style.visibility='hidden';
			me._btn_off_floor_plans.ggVisible=false;
			me._btn_on_floor_plans.style[domTransition]='none';
			me._btn_on_floor_plans.style.visibility=(Number(me._btn_on_floor_plans.style.opacity)>0||!me._btn_on_floor_plans.style.opacity)?'inherit':'hidden';
			me._btn_on_floor_plans.ggVisible=true;
			me._frame_rectangle_floor_plans.style[domTransition]='none';
			me._frame_rectangle_floor_plans.style.visibility='hidden';
			me._frame_rectangle_floor_plans.ggVisible=false;
		}
		me._btn_off_floor_plans.onmouseover=function (e) {
			player.setVariableValue('onfloorplanbar', "true");
		}
		me._btn_off_floor_plans.onmouseout=function (e) {
			player.setVariableValue('onfloorplanbar', "false");
		}
		me._btn_off_floor_plans.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plans_container.appendChild(me._btn_off_floor_plans);
		el=me._btn_on_floor_plans=document.createElement('div');
		els=me._btn_on_floor_plans__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fb25fZmxvb3JfcGxhbnMuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45'+
			'Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIG'+
			'lua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iOS43OSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiNmZmZmZmYiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTE3IiBpbmtzY2FwZTpjeD0iMTUuNzMwMzM3IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i'+
			'TGF5ZXJfMSIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIi8+CiA8Y2lyY2xlIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcj0iMzkuMDYzOTk5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwIiBjeD0iNTAiIGlkPSJjaXJjbGUyIiBjeT0iNTAiLz4KIDxjaXJjbGUgcj0iMzcuNSIgc3R5bGU9Im9wYWNpdHk6MC43O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2Utd2lkdGg6MSIgY3g9IjUwIiBpZD0iZWxsaXBzZTQiIGVuYW'+
			'JsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBjeT0iNTAiLz4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSI+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk5Ij4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk3Ij4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMzc5MyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAyMDMuOTkzLDI5NS4yODcgYyAyMS4wMDEsMCAzOC4wMjQsMTcuMDIz'+
			'IDM4LjAyNCwzOC4wMTggMCwyMC45OTUgLTE3LjAyMywzOC4wMjQgLTM4LjAyNCwzOC4wMjQgLTIwLjk5OCwwIC0zOC4wMjEsLTE3LjAyOSAtMzguMDIxLC0zOC4wMjQgMCwtMjAuOTk1IDE3LjAyMywtMzguMDE4IDM4LjAyMSwtMzguMDE4IHoiLz4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMzc5NSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1NzQuMjY3LDMyNS44MjIgNjAwLjA0OSwxMjIuNTYgNDE1LjExMyw1Mi4zNzggMTkzLjI3OSwxNTguMzM3IDAsNzYuNzEgMjYuMDk5LDI5My41NTggMS4wODUsNTA3LjA5MyBsIDIwNS4zNiwzOC41Mj'+
			'EgMjA5LjQ2LC0zOS44OTIgMTg0Ljg1NCw0Mi42NTggeiBNIDQxNC40MjgsNzMuOTA5IDU3OC4yMzksMTM1LjY0IDU2Ni45NjIsMjI0LjUyIDQwMy42ODksMTgzLjIxOSBaIG0gLTIxLjY2OSwxMS4yODMgLTguNjQyLDkzLjA2IC0wLjE0MiwtMC4wMzMgLTExMy4wNDYsMTQuNTgxIC0wLjY3NywyLjQ5NCBjIC0wLjE0MiwwLjUzOCAtMTMuMjU4LDQ4Ljk5NSAtMjcuMDgsNzEuMDMzIC04Ljk0NiwtNS4yNjEgLTE5LjAwNiwtOC43ODQgLTI5Ljc1NSwtMTAuMDkgbCAtOS4xNjQsLTgxLjAyOCB6IG0gLTE3LjI4MywyMDcuNTc0IC05OC4yNTEsMTQuODE1IGMgLTUuMjkxLC0xNC45NjkgLTE0Ljk5OSwt'+
			'MjcuODI1IC0yNy42MDYsLTM3LjAyMiAxMi44NjIsLTIwLjUzMSAyNC40NzEsLTYwLjI3OCAyNy4zOTQsLTcwLjc3IGwgMTA2LjM2MSwtMTMuNzI4IHogbSAtMTkxLjIwNywtMTE2LjU2OSA5LjA3OSw4MC4yMzYgYyAtMjkuODY0LDQuMTEzIC01NC4zNTgsMjUuMiAtNjMuMzM2LDUzLjIxNyBMIDQ2LjIzMywyOTYuNjgyIDM4LjE4OCwyMTguOTc2IGMgMjcuNzY5LC0xLjgzOCA0OC41OTksLTEwLjg3NSA2MS45NDgsLTI3IDEyLjAzNCwtMTQuNTE0IDE1LjQ5NSwtMzEuNjg1IDE2LjE1NywtNDQuNDg0IHogbSAtMTYwLjA4MiwtNjcuNjAxIDg0LjQ2NSwzNS42NjggYyAtMC4yNDIsMTEuNzc3IC0yLj'+
			'kwNSwyOC44NjUgLTE0LjQ0Myw0Mi43OTEgLTEyLjAzNywxNC41MTQgLTMxLjE4MiwyMi42MzIgLTU2Ljk5OCwyNC4yNjEgeiBtIC0xLjA5LDM4Mi4zMjUgMjAuNzc5LC0xNzQuNDAyIDgyLjYyNiwxMi44MDMgYyAtMC4wNjIsMS4zMjQgLTAuMTk1LDIuNjM2IC0wLjE5NSwzLjk4OSAwLDE4LjE2NCA2LjMwNywzNC44NTYgMTYuODA3LDQ4LjEwOCBsIC00Mi45MTIsMzQuNDU5IC0xMy41MjEsODYuOTU5IHogbSAxNjEuODc4LDMwLjM1OCAtOTAuNzIxLC0xNy4wMTcgMTMuMTA0LC04NC4yNTIgNDAuODM3LC0zMi43ODEgYyAxMi41MjgsMTIuOTUgMjkuNDgsMjEuNTkzIDQ4LjQyMSwyMy4zNzcgeiBN'+
			'IDE0MS43MjksMzMzLjMxMSBjIDAsLTM0LjM0OCAyNy45MzUsLTYyLjI4MSA2Mi4yNjQsLTYyLjI4MSAzNC4zNDcsMCA2Mi4yODIsMjcuOTM0IDYyLjI4Miw2Mi4yODEgMCwzNC4zMyAtMjcuOTM1LDYyLjI2NSAtNjIuMjgyLDYyLjI2NSAtMzQuMzMsMC4wMDYgLTYyLjI2NCwtMjcuOTM1IC02Mi4yNjQsLTYyLjI2NSB6IG0gNjQuNjksMTkxLjk4NyAtMS43NSwtMC4zMyAxMi4xMiwtMTE1LjExOSBjIDM2Ljc1NiwtNi4xMzUgNjQuOSwtMzguMDc2IDY0LjksLTc2LjU1NiAwLC0yLjA4MSAtMC4xNSwtNC4xMTQgLTAuMzEzLC02LjE1OSBsIDk2LjAzOCwtMTQuNDgxIDguMDE2LDgxLjkxMSBjIC00Mi'+
			'4xMzIsMS45OCAtNzMuNjI1LDE0LjkzMiAtOTMuNDQ5LDM4Ljg1NyAtMjMuMTE0LDI3LjkyMyAtMjQuMjA1LDYyLjczNyAtMjMuMDA4LDc5Ljk0OSB6IG0gNzAuMjQ3LC0xMy4zODEgYyAtMC45MzEsLTE2LjMzNyAwLjQxOSwtNDguMzk3IDIxLjI2NCwtNzMuNTY1IDE4LjQzOCwtMjIuMjYgNDguMTgyLC0zNC4yNzEgODguMjQ0LC0zNi4wOTEgbCA4LjUzNSw4Ny4xNTQgeiBtIDEyNi4zMDcsLTMyMC45NDYgMTYzLjAzLDQxLjIyNSAtOS43NzYsNzcuMDE3IC0xNjAuOTc0LC0xOS40MzEgeiBtIDEzMS4wODMsMTg0Ljc3NCAtNzQuMTc1LC04LjgxOSAxMy41ODQsMTMxLjU4IC01OS40MjgsLTEyLjc3'+
			'MyAtMTYuODUyLC0xNzYuMDM0IDEuNzMyLC0wLjI3MiAxNTUuNjEyLDE5Ljc1NCAyMy4wMjIsMTkzLjM1NCAtOTYuMjk4LC0yMi4yMTMgLTEyLjcxNCwtMTI0LjU5OSA2Ni4xMTEsNy42NzIgeiIvPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwOSIvPgogIDxnIHN0eWxlPSJmaW'+
			'xsOiNmZmZmZmYiIGlkPSJnMzgxMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgxOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyNyIvPgog'+
			'IDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgyOSIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_on_floor_plans__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_On_floor_plans";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_floor_plans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_on_floor_plans.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			me._btn_on_floor_plans.style[domTransition]='none';
			me._btn_on_floor_plans.style.visibility='hidden';
			me._btn_on_floor_plans.ggVisible=false;
			me._btn_off_floor_plans.style[domTransition]='none';
			me._btn_off_floor_plans.style.visibility=(Number(me._btn_off_floor_plans.style.opacity)>0||!me._btn_off_floor_plans.style.opacity)?'inherit':'hidden';
			me._btn_off_floor_plans.ggVisible=true;
			me._frame_rectangle_floor_plans.style[domTransition]='none';
			me._frame_rectangle_floor_plans.style.visibility=(Number(me._frame_rectangle_floor_plans.style.opacity)>0||!me._frame_rectangle_floor_plans.style.opacity)?'inherit':'hidden';
			me._frame_rectangle_floor_plans.ggVisible=true;
		}
		me._btn_on_floor_plans.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plans_container.appendChild(me._btn_on_floor_plans);
		me.divSkin.appendChild(me._floor_plans_container);
		el=me._center_right_bar_open_close=document.createElement('div');
		el.ggId="Center_Right_Bar_Open_Close";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 271px;';
		hs+='position : absolute;';
		hs+='right : -5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._center_right_bar_open_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._center_right_bar_open_close.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				((player.getViewerSize().width < 960)) || 
				((player.getViewerSize().height < 960))
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._center_right_bar_open_close.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._center_right_bar_open_close.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._center_right_bar_open_close.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._center_right_bar_open_close.ggCurrentLogicStateScaling == 0) {
					me._center_right_bar_open_close.ggParameter.sx = 0.61;
					me._center_right_bar_open_close.ggParameter.sy = 0.61;
					me._center_right_bar_open_close.style[domTransform]=parameterToTransform(me._center_right_bar_open_close.ggParameter);
				}
				else if (me._center_right_bar_open_close.ggCurrentLogicStateScaling == 1) {
					me._center_right_bar_open_close.ggParameter.sx = 0.65;
					me._center_right_bar_open_close.ggParameter.sy = 0.65;
					me._center_right_bar_open_close.style[domTransform]=parameterToTransform(me._center_right_bar_open_close.ggParameter);
				}
				else if (me._center_right_bar_open_close.ggCurrentLogicStateScaling == 2) {
					me._center_right_bar_open_close.ggParameter.sx = 0.75;
					me._center_right_bar_open_close.ggParameter.sy = 0.75;
					me._center_right_bar_open_close.style[domTransform]=parameterToTransform(me._center_right_bar_open_close.ggParameter);
				}
				else if (me._center_right_bar_open_close.ggCurrentLogicStateScaling == 3) {
					me._center_right_bar_open_close.ggParameter.sx = 0.85;
					me._center_right_bar_open_close.ggParameter.sy = 0.85;
					me._center_right_bar_open_close.style[domTransform]=parameterToTransform(me._center_right_bar_open_close.ggParameter);
				}
				else if (me._center_right_bar_open_close.ggCurrentLogicStateScaling == 4) {
					me._center_right_bar_open_close.ggParameter.sx = 0.9;
					me._center_right_bar_open_close.ggParameter.sy = 0.9;
					me._center_right_bar_open_close.style[domTransform]=parameterToTransform(me._center_right_bar_open_close.ggParameter);
				}
				else {
					me._center_right_bar_open_close.ggParameter.sx = 1;
					me._center_right_bar_open_close.ggParameter.sy = 1;
					me._center_right_bar_open_close.style[domTransform]=parameterToTransform(me._center_right_bar_open_close.ggParameter);
				}
			}
		}
		me._center_right_bar_open_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._center_right_bar_open_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center_right_bar_open_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center_right_bar_open_close.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._center_right_bar_open_close.ggCurrentLogicStateVisible == 0) {
					me._center_right_bar_open_close.style.visibility="hidden";
					me._center_right_bar_open_close.ggVisible=false;
				}
				else {
					me._center_right_bar_open_close.style.visibility=(Number(me._center_right_bar_open_close.style.opacity)>0||!me._center_right_bar_open_close.style.opacity)?'inherit':'hidden';
					me._center_right_bar_open_close.ggVisible=true;
				}
			}
		}
		me._center_right_bar_open_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._center_right_bar_open_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._center_right_bar_open_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._center_right_bar_open_close.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._center_right_bar_open_close.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._center_right_bar_open_close.style.opacity == 0.0) { me._center_right_bar_open_close.style.visibility="hidden"; } }, 3005);
					me._center_right_bar_open_close.style.opacity=0;
				}
				else {
					me._center_right_bar_open_close.style.visibility=me._center_right_bar_open_close.ggVisible?'inherit':'hidden';
					me._center_right_bar_open_close.style.opacity=1;
				}
			}
		}
		me._center_right_bar_open_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._center_right_bar_container=document.createElement('div');
		el.ggId="Center_Right_Bar_Container";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 216px;';
		hs+='position : absolute;';
		hs+='right : -50px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._center_right_bar_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center_right_bar_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rotate_up=document.createElement('div');
		els=me._rotate_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX3VwLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRm'+
			'OmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNj'+
			'YiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiPgogIDxpbmtzY2FwZTpncmlkIHR5'+
			'cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdGggc3R5bGU9ImNvbG'+
			'9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQt'+
			'YWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbG'+
			'lwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxp'+
			'bmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNS'+
			'w3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2'+
			'NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC'+
			'0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nzku'+
			'OTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2'+
			'luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xNTE1MTUxNSwwLDAsMC4xNTE1MTUxNSwyNS4wMDAwNzYsMjUpIj4KICA8ZyBzdHlsZT0iZmls'+
			'bDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg1XyI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODZfIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42NzgsLT'+
			'EuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6Ii8+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0i'+
			'WE1MSURfODdfIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLT'+
			'QuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyB6Ii8+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQ0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5'+
			'OjAuNTAxOTYwNzgiIGlkPSJnNDU0NiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTUwIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1MiIvPgogID'+
			'xnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NTQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTU2Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1OCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tl'+
			'OiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTYyIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2NCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OT'+
			'k5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTY4Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU3MCIvPgogPC9nPgo8L3N2Zz4K';
		me._rotate_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Rotate_Up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 165px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_up.onmouseout=function (e) {
			me.elementMouseDown['rotate_up']=false;
		}
		me._rotate_up.onmousedown=function (e) {
			me.elementMouseDown['rotate_up']=true;
		}
		me._rotate_up.onmouseup=function (e) {
			me.elementMouseDown['rotate_up']=false;
		}
		me._rotate_up.ontouchend=function (e) {
			me.elementMouseDown['rotate_up']=false;
		}
		me._rotate_up.ggUpdatePosition=function (useTransition) {
		}
		me._center_right_bar_container.appendChild(me._rotate_up);
		el=me._rotate_down=document.createElement('div');
		els=me._rotate_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX2Rvd24uc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMj'+
			'A2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'dHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSByPSIzOCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiIGN4PSI1MCIgY3k9IjUwIi8+CiA8cGF0aCBzdHlsZT0iY2'+
			'9sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4'+
			'dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2'+
			'NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlkPSJwYXRoNDQ5NCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC'+
			'41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUy'+
			'NTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4PSItMjkiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcG'+
			'FjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1MTUxNTE1LDAsMCwtMC4xNTE1MTUxNSwyNS4wMDAwNzYsNzUpIj4KICA8ZyBzdHlsZT0i'+
			'ZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg1XyI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODZfIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42Nz'+
			'gsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6Ii8+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBp'+
			'ZD0iWE1MSURfODdfIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MD'+
			'YsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyB6Ii8+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQ0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFj'+
			'aXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTUwIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1MiIvPg'+
			'ogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NTQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTU2Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1OCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ry'+
			'b2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTYyIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2NCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNT'+
			'k5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTY4Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU3MCIvPgogPC9nPgo8L3N2Zz4K';
		me._rotate_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Rotate_Down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_down.onmouseout=function (e) {
			me.elementMouseDown['rotate_down']=false;
		}
		me._rotate_down.onmousedown=function (e) {
			me.elementMouseDown['rotate_down']=true;
		}
		me._rotate_down.onmouseup=function (e) {
			me.elementMouseDown['rotate_down']=false;
		}
		me._rotate_down.ontouchend=function (e) {
			me.elementMouseDown['rotate_down']=false;
		}
		me._rotate_down.ggUpdatePosition=function (useTransition) {
		}
		me._center_right_bar_container.appendChild(me._rotate_down);
		el=me._rotate_right=document.createElement('div');
		els=me._rotate_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX3JpZ2h0LnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsg'+
			'cmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ij'+
			'IwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiPgogIDxpbmtzY2FwZTpncmlk'+
			'IHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdGggc3R5bGU9Im'+
			'NvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3Rl'+
			'eHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MD'+
			'tjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tl'+
			'LWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMT'+
			'AuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41'+
			'MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOT'+
			'A2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0'+
			'NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3'+
			'BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5NyIgdHJhbnNmb3JtPSJtYXRyaXgoMCwwLjE1MTUxNTE1LC0wLjE1MTUxNTE1LDAsNzUsMjUuMDAwMDc2KSI+CiAgPGcgc3R5bGU9'+
			'ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJYTUxJRF84NV8iPgogICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg2XyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSAyNS42MDcsMTkwLjYwNyAxNjQuOTk3LDUxLjIxNCAzMDQuMzkzLDE5MC42MDcgYyAyLjkzLDIuOTI5IDYuNzY4LDQuMzkzIDEwLjYwNyw0LjM5MyAzLjgzOSwwIDcuNj'+
			'c4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyBsIC0xNTAuMDAzLC0xNTAgQyAxNzIuNzksMTYuNTggMTY4Ljk3NiwxNSAxNjQuOTk3LDE1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NywxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1OCw1Ljg1OCAxNS4zNTYsNS44NTggMjEuMjE0LDAgeiIvPgogICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIg'+
			'aWQ9IlhNTElEXzg3XyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSAxNzUuNjAzLDEzOS4zOTMgQyAxNzIuNzksMTM2LjU4IDE2OC45NzUsMTM1IDE2NC45OTcsMTM1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NiwxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1Nyw1Ljg1NyAxNS4zNTUsNS44NTggMjEuMjEzLC0wLjAwMSBsIDEzOS4zOSwtMTM5LjM5MyAxMzkuMzk3LDEzOS4zOTQgYyAyLjkyOSwyLjkyOSA2Ljc2Nyw0LjM5MyAxMC42MDYsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNj'+
			'A2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgeiIvPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQyIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3Bh'+
			'Y2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQ4Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1MCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NTIiLz'+
			'4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTU0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1NiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NTgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0'+
			'cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTYwIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2MiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2Lj'+
			'U5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTY2Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2OCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NzAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._rotate_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Rotate_Right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_right.onmouseout=function (e) {
			me.elementMouseDown['rotate_right']=false;
		}
		me._rotate_right.onmousedown=function (e) {
			me.elementMouseDown['rotate_right']=true;
		}
		me._rotate_right.onmouseup=function (e) {
			me.elementMouseDown['rotate_right']=false;
		}
		me._rotate_right.ontouchend=function (e) {
			me.elementMouseDown['rotate_right']=false;
		}
		me._rotate_right.ggUpdatePosition=function (useTransition) {
		}
		me._center_right_bar_container.appendChild(me._rotate_right);
		el=me._rotate_left=document.createElement('div');
		els=me._rotate_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX2xlZnQuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMj'+
			'A2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'dHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSByPSIzOCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiIGN4PSI1MCIgY3k9IjUwIi8+CiA8cGF0aCBzdHlsZT0iY2'+
			'9sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4'+
			'dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2'+
			'NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlkPSJwYXRoNDQ5NCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC'+
			'41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUy'+
			'NTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4PSItMjkiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcG'+
			'FjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLDAuMTUxNTE1MTUsMC4xNTE1MTUxNSwwLDI1LDI1LjAwMDA3NikiPgogIDxnIHN0eWxlPSJm'+
			'aWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODVfIj4KICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJYTUxJRF84Nl8iIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gMjUuNjA3LDE5MC42MDcgMTY0Ljk5Nyw1MS4yMTQgMzA0LjM5MywxOTAuNjA3IGMgMi45MywyLjkyOSA2Ljc2OCw0LjM5MyAxMC42MDcsNC4zOTMgMy44MzksMCA3LjY3OC'+
			'wtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgbCAtMTUwLjAwMywtMTUwIEMgMTcyLjc5LDE2LjU4IDE2OC45NzYsMTUgMTY0Ljk5NywxNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTcsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTgsNS44NTggMTUuMzU2LDUuODU4IDIxLjIxNCwwIHoiLz4KICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlk'+
			'PSJYTUxJRF84N18iIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gMTc1LjYwMywxMzkuMzkzIEMgMTcyLjc5LDEzNi41OCAxNjguOTc1LDEzNSAxNjQuOTk3LDEzNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTYsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTcsNS44NTcgMTUuMzU1LDUuODU4IDIxLjIxMywtMC4wMDEgbCAxMzkuMzksLTEzOS4zOTMgMTM5LjM5NywxMzkuMzk0IGMgMi45MjksMi45MjkgNi43NjcsNC4zOTMgMTAuNjA2LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNi'+
			'wtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIHoiLz4KICA8L2c+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0MiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNp'+
			'dHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQ2Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0OCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NTAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTUyIi8+Ci'+
			'AgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU1NCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NTYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTU4Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJv'+
			'a2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2MCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTY0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OT'+
			'k5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2NiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NjgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTcwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._rotate_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Rotate_Left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_left.onmouseout=function (e) {
			me.elementMouseDown['rotate_left']=false;
		}
		me._rotate_left.onmousedown=function (e) {
			me.elementMouseDown['rotate_left']=true;
		}
		me._rotate_left.onmouseup=function (e) {
			me.elementMouseDown['rotate_left']=false;
		}
		me._rotate_left.ontouchend=function (e) {
			me.elementMouseDown['rotate_left']=false;
		}
		me._rotate_left.ggUpdatePosition=function (useTransition) {
		}
		me._center_right_bar_container.appendChild(me._rotate_left);
		me._center_right_bar_open_close.appendChild(me._center_right_bar_container);
		el=me._show_center_bar=document.createElement('div');
		els=me._show_center_bar__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJzaG93X2NlbnRlcl9iYXIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4x'+
			'IHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3'+
			'BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSI4LjY1IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzgyODY3YiIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjEwLjk4MjY1OSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJl'+
			'bnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ4MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiIGlkPSJnNDUxNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuMjcyNzkyMiwtMS4yNzI3OTIyLC0xLjI3Mjc5MjIsMS4yNzI3OTIyLDExMS45NTY1NiwyODIuMTc1MzkpIj4KICA8ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiIGlkPSJnNDUwOSIgdHJhbn'+
			'Nmb3JtPSJ0cmFuc2xhdGUoLTEuNjE1MjIyNiwtMS4wMjk0MzcyKSI+CiAgIDxyZWN0IHg9IjExNCIgeT0iLTU5IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NTU1NTU4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InJlY3Q0NDg0IiBoZWlnaHQ9IjIiIHdpZHRoPSIxMiIvPgogICA8cmVjdCB4PSItNjkiIHk9Ii0xMjYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7Zmls'+
			'bC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icmVjdDQ0ODQtNSIgaGVpZ2h0PSIyIiB3aWR0aD0iMTIiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIvPgogIDwvZz4KICA8cmVjdCB4PSIyMS45MjAzMTEiIHk9Ii0xMjkuOTg2MzMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NT'+
			'g7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBoZWlnaHQ9IjIiIGlkPSJyZWN0NDQ4NC05IiB3aWR0aD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIvPgogPC9nPgo8L3N2Zz4K';
		me._show_center_bar__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show_center_bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._show_center_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._show_center_bar.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			if (player.transitionsDisabled) {
				me._center_right_bar_container.style[domTransition]='none';
			} else {
				me._center_right_bar_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._center_right_bar_container.ggParameter.rx=-55;me._center_right_bar_container.ggParameter.ry=0;
			me._center_right_bar_container.style[domTransform]=parameterToTransform(me._center_right_bar_container.ggParameter);
			me._show_center_bar.style[domTransition]='none';
			me._show_center_bar.style.visibility='hidden';
			me._show_center_bar.ggVisible=false;
			me._hide_center_bar.style[domTransition]='none';
			me._hide_center_bar.style.visibility=(Number(me._hide_center_bar.style.opacity)>0||!me._hide_center_bar.style.opacity)?'inherit':'hidden';
			me._hide_center_bar.ggVisible=true;
		}
		me._show_center_bar.ggUpdatePosition=function (useTransition) {
		}
		me._center_right_bar_open_close.appendChild(me._show_center_bar);
		el=me._hide_center_bar=document.createElement('div');
		els=me._hide_center_bar__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJoaWRlX2NlbnRlcl9iYXIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4x'+
			'IHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3'+
			'BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSI4LjY1IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzgyODY3YiIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjEwLjk4MjY1OSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJl'+
			'bnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ4MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiIGlkPSJnNDUxNSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNzI3OTIyLC0xLjI3Mjc5MjIsMS4yNzI3OTIyLDEuMjcyNzkyMiwtMTEuOTU2NTU5LDI4Mi4xNzUzOSkiPgogIDxnIHN0eWxlPSJzdHJva2Utd2lkdGg6MC41NTU1NTU1OCIgaWQ9Imc0NTA5IiB0cmFuc2'+
			'Zvcm09InRyYW5zbGF0ZSgtMS42MTUyMjI2LC0xLjAyOTQzNzIpIj4KICAgPHJlY3QgeD0iMTE0IiB5PSItNTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icmVjdDQ0ODQiIGhlaWdodD0iMiIgd2lkdGg9IjEyIi8+CiAgIDxyZWN0IHg9Ii02OSIgeT0iLTEyNiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxs'+
			'LW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJyZWN0NDQ4NC01IiBoZWlnaHQ9IjIiIHdpZHRoPSIxMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIi8+CiAgPC9nPgogIDxyZWN0IHg9IjIxLjkyMDMxMSIgeT0iLTEyOS45ODYzMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1OD'+
			'tzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGhlaWdodD0iMiIgaWQ9InJlY3Q0NDg0LTkiIHdpZHRoPSIyNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._hide_center_bar__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hide_center_bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._hide_center_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_center_bar.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._center_right_bar_container.style[domTransition]='none';
			} else {
				me._center_right_bar_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._center_right_bar_container.ggParameter.rx=0;me._center_right_bar_container.ggParameter.ry=0;
			me._center_right_bar_container.style[domTransform]=parameterToTransform(me._center_right_bar_container.ggParameter);
			me._hide_center_bar.style[domTransition]='none';
			me._hide_center_bar.style.visibility='hidden';
			me._hide_center_bar.ggVisible=false;
			me._show_center_bar.style[domTransition]='none';
			me._show_center_bar.style.visibility=(Number(me._show_center_bar.style.opacity)>0||!me._show_center_bar.style.opacity)?'inherit':'hidden';
			me._show_center_bar.ggVisible=true;
		}
		me._hide_center_bar.ggUpdatePosition=function (useTransition) {
		}
		me._center_right_bar_open_close.appendChild(me._hide_center_bar);
		me.divSkin.appendChild(me._center_right_bar_open_close);
		el=me._bottom_background_bar=document.createElement('div');
		el.ggId="bottom_background_bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -4px;';
		hs+='height : 62px;';
		hs+='left : -150.33%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 400%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._bottom_background_bar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bottom_background_bar.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bottom_background_bar.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bottom_background_bar.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bottom_background_bar.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._bottom_background_bar.ggCurrentLogicStateScaling == 0) {
					me._bottom_background_bar.ggParameter.sx = 0.5;
					me._bottom_background_bar.ggParameter.sy = 0.5;
					me._bottom_background_bar.style[domTransform]=parameterToTransform(me._bottom_background_bar.ggParameter);
				}
				else if (me._bottom_background_bar.ggCurrentLogicStateScaling == 1) {
					me._bottom_background_bar.ggParameter.sx = 0.6;
					me._bottom_background_bar.ggParameter.sy = 0.6;
					me._bottom_background_bar.style[domTransform]=parameterToTransform(me._bottom_background_bar.ggParameter);
				}
				else if (me._bottom_background_bar.ggCurrentLogicStateScaling == 2) {
					me._bottom_background_bar.ggParameter.sx = 0.75;
					me._bottom_background_bar.ggParameter.sy = 0.75;
					me._bottom_background_bar.style[domTransform]=parameterToTransform(me._bottom_background_bar.ggParameter);
				}
				else if (me._bottom_background_bar.ggCurrentLogicStateScaling == 3) {
					me._bottom_background_bar.ggParameter.sx = 0.85;
					me._bottom_background_bar.ggParameter.sy = 0.85;
					me._bottom_background_bar.style[domTransform]=parameterToTransform(me._bottom_background_bar.ggParameter);
				}
				else {
					me._bottom_background_bar.ggParameter.sx = 1;
					me._bottom_background_bar.ggParameter.sy = 1;
					me._bottom_background_bar.style[domTransform]=parameterToTransform(me._bottom_background_bar.ggParameter);
				}
			}
		}
		me._bottom_background_bar.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bottom_background_bar.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bottom_background_bar.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bottom_background_bar.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._bottom_background_bar.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._bottom_background_bar.style.opacity == 0.0) { me._bottom_background_bar.style.visibility="hidden"; } }, 1505);
					me._bottom_background_bar.style.opacity=0;
				}
				else {
					me._bottom_background_bar.style.visibility=me._bottom_background_bar.ggVisible?'inherit':'hidden';
					me._bottom_background_bar.style.opacity=1;
				}
			}
		}
		me._bottom_background_bar.onmouseover=function (e) {
			player.setVariableValue('oncenterleftbar', "true");
		}
		me._bottom_background_bar.onmouseout=function (e) {
			player.setVariableValue('oncenterleftbar', "false");
		}
		me._bottom_background_bar.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_black=document.createElement('div');
		el.ggId="rectangle_black";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.215686);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._rectangle_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_black.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_background_bar.appendChild(me._rectangle_black);
		el=me._rectangle_white=document.createElement('div');
		el.ggId="rectangle_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 2px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._rectangle_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_white.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_background_bar.appendChild(me._rectangle_white);
		me.divSkin.appendChild(me._bottom_background_bar);
		el=me._bottom_buttons_bar_container=document.createElement('div');
		el.ggId="Bottom_Buttons_Bar_Container";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 54px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 324px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._bottom_buttons_bar_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bottom_buttons_bar_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bottom_buttons_bar_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bottom_buttons_bar_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bottom_buttons_bar_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._bottom_buttons_bar_container.ggCurrentLogicStateScaling == 0) {
					me._bottom_buttons_bar_container.ggParameter.sx = 0.5;
					me._bottom_buttons_bar_container.ggParameter.sy = 0.5;
					me._bottom_buttons_bar_container.style[domTransform]=parameterToTransform(me._bottom_buttons_bar_container.ggParameter);
				}
				else if (me._bottom_buttons_bar_container.ggCurrentLogicStateScaling == 1) {
					me._bottom_buttons_bar_container.ggParameter.sx = 0.6;
					me._bottom_buttons_bar_container.ggParameter.sy = 0.6;
					me._bottom_buttons_bar_container.style[domTransform]=parameterToTransform(me._bottom_buttons_bar_container.ggParameter);
				}
				else if (me._bottom_buttons_bar_container.ggCurrentLogicStateScaling == 2) {
					me._bottom_buttons_bar_container.ggParameter.sx = 0.75;
					me._bottom_buttons_bar_container.ggParameter.sy = 0.75;
					me._bottom_buttons_bar_container.style[domTransform]=parameterToTransform(me._bottom_buttons_bar_container.ggParameter);
				}
				else if (me._bottom_buttons_bar_container.ggCurrentLogicStateScaling == 3) {
					me._bottom_buttons_bar_container.ggParameter.sx = 0.85;
					me._bottom_buttons_bar_container.ggParameter.sy = 0.85;
					me._bottom_buttons_bar_container.style[domTransform]=parameterToTransform(me._bottom_buttons_bar_container.ggParameter);
				}
				else {
					me._bottom_buttons_bar_container.ggParameter.sx = 1;
					me._bottom_buttons_bar_container.ggParameter.sy = 1;
					me._bottom_buttons_bar_container.style[domTransform]=parameterToTransform(me._bottom_buttons_bar_container.ggParameter);
				}
			}
		}
		me._bottom_buttons_bar_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('onlocationbar') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bottom_buttons_bar_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bottom_buttons_bar_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bottom_buttons_bar_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._bottom_buttons_bar_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._bottom_buttons_bar_container.style.opacity == 0.0) { me._bottom_buttons_bar_container.style.visibility="hidden"; } }, 1505);
					me._bottom_buttons_bar_container.style.opacity=0;
				}
				else if (me._bottom_buttons_bar_container.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._bottom_buttons_bar_container.style.opacity == 0.0) { me._bottom_buttons_bar_container.style.visibility="hidden"; } }, 1505);
					me._bottom_buttons_bar_container.style.opacity=0;
				}
				else {
					me._bottom_buttons_bar_container.style.visibility=me._bottom_buttons_bar_container.ggVisible?'inherit':'hidden';
					me._bottom_buttons_bar_container.style.opacity=1;
				}
			}
		}
		me._bottom_buttons_bar_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._btn_off_social_media=document.createElement('div');
		els=me._btn_off_social_media__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fb25fc29jaWFsX21lZGlhLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAu'+
			'OTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEzIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTEiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cG'+
			'FnZW9wYWNpdHk9IjAuNTY4NjI3NDUiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTguNDMiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOGQ4YjhiIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOmN4PSI0MS4zNzI3NjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBp'+
			'bmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiLz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaW'+
			'Q9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7'+
			'Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbm'+
			'Nob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZm'+
			'ZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMT'+
			'AuNSBDIDI4LjE5Njc0OSwxMC41IDEwLjUwMDAwMSwyOC4xOTY3NDggMTAuNTAwMDAxLDUwIDEwLjUwMDAwMSw3MS44MDMyNTIgMjguMTk2NzQ5LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ4IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDEgYyAyMC43MDg1MTMsMCAzNy40NzQzNTksMTYuNzY1ODQ2IDM3LjQ3NDM1OSwzNy40NzQzNTkgMCwyMC43MDg1MTIgLTE2Ljc2NTg0NiwzNy40NzQzNTggLTM3LjQ3NDM1OSwzNy40NzQzNTggLTIwLjcwODUxMiwwIC0zNy40NzQzNTgsLTE2Ljc2NTg0NiAtMzcuNDc0'+
			'MzU4LC0zNy40NzQzNTkgMCwtMjAuNzA4NTEyIDE2Ljc2NTg0NiwtMzcuNDc0MzU4IDM3LjQ3NDM1OCwtMzcuNDc0MzU4IHoiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzAxMDgxMSwwLjQ4OTQ5NDUyLC0wLjQ4OTQ5NDUyLDAuNzMwMTA4MTEsNjcuNzk0MDc0LC0xNi43MzU3MikiPgogID'+
			'xnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NyI+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgi'+
			'IGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjM0MjY0OCwyMS40MzI0NSkiPgogICAgPGNpcmNsZSByPSI3LjUiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgY3g9IjM3LjM0MjY0OCIgaWQ9InBhdGg0NDkyIiBjeT0iMjQuNzg0MzE3Ii8+CiAgICA8ZyBzdHlsZT0ic3Ryb2'+
			'tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2Ugcng9IjE1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2lu'+
			'Om1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDQ5MCIgY3g9IjM3Ljc2ODU4NSIgY3k9IjYzLjU2NzU1MSIgcnk9IjE0Ljk5OTk5OSIvPgogICAgIDxyZWN0IHg9IjM1LjI2ODU4NSIgeT0iMzAuMTIxNTQiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycm'+
			'F5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InJlY3Q0NDk2IiBoZWlnaHQ9IjIwIiB3aWR0aD0iNSIvPgogICAgPC9nPgogICA8L2c+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUwOC03IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxNS40NTUwOTksNjMuMTEyNDUxKSI+CiAgICA8Y2lyY2xlIHI9IjcuNSIgc3R5bGU9'+
			'Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBjeD0iMzcuMzQyNjQ4IiBpZD0icGF0aDQ0OTItOSIgY3k9IjI0Ljc4NDMxNyIvPgogICAgPGcgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3'+
			'Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTAyLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2Ugcng9IjE1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlk'+
			'PSJwYXRoNDQ5MC0yIiBjeD0iMzcuNzY4NTg1IiBjeT0iNjMuNTY3NTUxIiByeT0iMTQuOTk5OTk5Ii8+CiAgICAgPHJlY3QgeD0iMzUuMjY4NTg1IiB5PSIzMC4xMjE1NCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icmVjdDQ0OTYtMiIgaGVpZ2h0PSIyMCIgd2lkdGg9IjUiLz4KIC'+
			'AgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_off_social_media__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_off_Social_Media";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 216px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_social_media.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_off_social_media.onclick=function (e) {
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility='hidden';
			me._btn_off_social_media.ggVisible=false;
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility=(Number(me._btn_on_social_media.style.opacity)>0||!me._btn_on_social_media.style.opacity)?'inherit':'hidden';
			me._btn_on_social_media.ggVisible=true;
		}
		me._btn_off_social_media.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_facebook=document.createElement('div');
		els=me._btn_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0ic29jaWFsX21lZGlhX2ZhY2Vib29rLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4K'+
			'ICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSI1NzUwIiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOndpbm'+
			'Rvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkxOCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSIwIj4KICA8aW5r'+
			'c2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYX'+
			'RoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1p'+
			'bmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS'+
			'1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJv'+
			'dW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OS'+
			'AxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2'+
			'NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2'+
			'xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOj'+
			'BweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzcwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE4MzM1NDU4LDAsMCwwLjE4MzQ3OTI1LDIxLjUwNTk2NCwyMy41KSI+'+
			'CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3MTQiPgogICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDcxMiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAxNjcuMTcyLDI4OC44NjEgaCAtNjIuMTYgViAxNTkuMzQ3IEggNzAuNzY5IHYgLTU5LjQ4IGggMzQuMjQyIHYgLTMzLjQgQyAxMDUuMDExLDM1LjgwNC'+
			'AxMjQuMTk1LDAgMTc4LjI4NCwwIGMgMTkuMDY4LDAgMzMuMDY2LDEuNzg3IDMzLjY1MSwxLjg2NCBsIDUuNzM5LDAuNzQ2IC0xLjM4Miw1NS42NjMgLTYuMzI0LC0wLjA1OCBjIC0wLjAxMywwIC0xNC4yMjMsLTAuMTM1IC0yOS43MjQsLTAuMTM1IC0xMS41MzYsMCAtMTMuMDY2LDIuODQ3IC0xMy4wNjYsMTQuMTcxIFYgOTkuODggaCA1MC45MTMgbCAtMi44MjEsNTkuNDggaCAtNDguMDg2IHYgMTI5LjUwMSB6IG0gLTQ5LjMxNCwtMTIuODU0IGggMzYuNDUzIFYgMTQ2LjUgaCA0OC42NzcgbCAxLjYwNywtMzMuNzc5IEggMTU0LjMxMSBWIDcyLjIzOCBjIDAsLTEzLjM2OCAzLjA3OCwtMjcuMDI1'+
			'IDI1LjkxOSwtMjcuMDI1IDkuMTc4LDAgMTcuODk5LDAuMDQ1IDIzLjUwOSwwLjA5IGwgMC43NzgsLTMxLjI5MiBjIC01LjY3NSwtMC41MDggLTE1LjExNiwtMS4xNTcgLTI2LjI0NywtMS4xNTcgLTQ0LjU0NCwwIC02MC40MTksMjcuNjkzIC02MC40MTksNTMuNjEzIHYgNDYuMjU0IEggODMuNjEgViAxNDYuNSBoIDM0LjI0MiB2IDEyOS41MDcgeiIvPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDcxNiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3'+
			'Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzE4Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3MjAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDcyMiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRo'+
			'OjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzI0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3MjYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDcyOCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdH'+
			'k6MC41MDE5NjA3OCIgaWQ9Imc0NzMwIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3MzIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDczNCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzM2Ii8+'+
			'CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3MzgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDc0MCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzQyIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZj'+
			'tzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NDQiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_facebook.onclick=function (e) {
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility='hidden';
			me._btn_off_social_media.ggVisible=false;
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility=(Number(me._btn_on_social_media.style.opacity)>0||!me._btn_on_social_media.style.opacity)?'inherit':'hidden';
			me._btn_on_social_media.ggVisible=true;
		}
		me._btn_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_social_media.appendChild(me._btn_facebook);
		el=me._btn_twitter=document.createElement('div');
		els=me._btn_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0ic29jaWFsX21lZGlhX3R3aXR0ZXIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgog'+
			'ICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjU3NTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6d2luZG'+
			'93LWhlaWdodD0iMjA1NCIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTE4IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSIzOC4wNjI5MDIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9IjAiPgogIDxpbmtz'+
			'Y2FwZTpncmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdG'+
			'ggc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWlu'+
			'ZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLX'+
			'BhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91'+
			'bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5ID'+
			'EwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0'+
			'MiA1MCwxMi41MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbG'+
			'F0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRy'+
			'YW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MH'+
			'B4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTAuNDM2MTM4MTU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0ODMzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjA5NTg0NTYxLDAsMCwwLjA5NTc5NjE2LDI1LjQ5MjAzNywyNS41MTM0'+
			'MTgpIj4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NzYiPgogICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NzQiPgogICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTAuNDM2MTM4MTU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NzcyIiBpbmtzY2FwZTpjb2'+
			'5uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwOC4zNDIsOTQuMjQzIEMgNTA1LjczOSw5MS42NCA1MDEuNCw5MC43NzIgNDk3LjkyOCw5MS42NCBsIC0xNy4zNTYsNi4wNzUgYyAxMC40MTQsLTEyLjE0OSAxNy4zNTYsLTI1LjE2NiAyMS42OTUsLTM3LjMxNSAxLjczNiwtNC4zMzkgMC44NjgsLTcuODEgLTEuNzM2LC0xMC40MTQgLTIuNjAzLC0yLjYwMyAtNi45NDIsLTMuNDcxIC0xMC40MTQsLTEuNzM2IC0yNC4yOTgsMTAuNDE0IC00NS4xMjUsMTkuMDkyIC02Mi40ODEsMjQuMjk4IDAsMC44NjggLTAuODY4LDAgLTEuNzM2LDAgLTEzLjg4NSwtNy44MSAtNDcuNzI5LC0yNS4xNjYgLTcyLjAy'+
			'NywtMjUuMTY2IC02MS42MTQsMC44NjggLTExMS4wNzgsNTIuOTM2IC0xMTEuMDc4LDExNi4yODUgdiAzLjQ3MSBDIDE1Mi41NDQsMTQ5Ljc4MiAxMDMuMDgsMTIzLjc0OCA0OS4yNzYsNjcuMzQxIEwgNDAuNiw1OC42NjMgMzUuMzkzLDY5LjA3NyBjIC0yOS41MDUsNTYuNDA3IC04LjY3OCwxMDcuNjA3IDI1LjE2NiwxNDIuMzE5IC0xNS42MiwtMi42MDMgLTI2LjAzNCwtNy44MSAtMzUuNTgsLTE1LjYyIC0zLjQ3MSwtMi42MDMgLTcuODEsLTMuNDcxIC0xMi4xNDksLTAuODY4IC0zLjQ3MSwxLjczNiAtNS4yMDcsNi45NDIgLTQuMzM5LDExLjI4MSAxMi4xNDksNDAuNzg2IDQyLjUyMiw3My43Nj'+
			'MgNzUuNDk4LDkzLjcyMiAtMTUuNjIsMCAtMjguNjM3LC0xLjczNiAtNDEuNjU0LC0xMC40MTQgLTMuNDcxLC0xLjczNiAtOC42NzgsLTEuNzM2IC0xMi4xNDksMC44NjggLTMuNDcxLDIuNjA0IC01LjIwNyw2Ljk0MiAtMy40NzEsMTEuMjgxIDE1LjYyLDQ0LjI1OCA0NS45OTMsNjcuNjg4IDk0LjU5LDczLjc2MyAtMjUuMTY2LDE0Ljc1MyAtNTguMTQyLDI2LjkwMiAtMTA5LjM0MiwyNy43NyAtNS4yMDcsMCAtOS41NDYsMy40NzEgLTExLjI4MSw3LjgxIC0xLjczNiw1LjIwNyAwLDkuNTQ2IDMuNDcxLDEzLjAxNyAzMS4yNDEsMjUuMTY2IDEwMC42NjQsMzkuOTE5IDE4Ni41NzYsMzkuOTE5IDE1'+
			'Mi43MzIsMCAyNzcuNjk1LC0xMzYuMjQ0IDI3Ny42OTUsLTMwMy43MjkgdiAtMi42MDMgYyAxOS4wOTIsLTkuNTQ2IDM0LjcxMiwtMjcuNzcgNDIuNTIyLC01Mi45MzYgMC44NjcsLTMuNDcyIC0wLjAwMSwtNy44MTEgLTIuNjA0LC0xMC40MTQgeiBtIC01Mi4wNjgsNDkuNDY0IC01LjIwNywxLjczNiB2IDE0Ljc1MyBjIDAsMTU3LjkzOSAtMTE3LjE1MywyODYuMzczIC0yNjAuMzM5LDI4Ni4zNzMgLTc4Ljk3LDAgLTEzMS45MDUsLTEzLjAxNyAtMTYwLjU0MiwtMjYuOTAyIDU5Ljg3OCwtNC4zMzkgOTQuNTksLTIzLjQzMSAxMjEuNDkyLC00NC4yNTggbCAyMS42OTUsLTE1LjYyIGggLTI2LjAzNC'+
			'BjIC00OS40NjQsMCAtNzkuODM3LC0xMy44ODUgLTk3LjE5MywtNDYuODYxIDE1LjYyLDUuMjA3IDMyLjEwOCw1LjIwNyA1MC4zMzIsNC4zMzkgNi45NDIsLTAuODY4IDEzLjg4NSwtMC44NjggMjAuODI3LC0wLjg2OCBsIDIuNjAzLC0xNy4zNTYgYyAtMzIuOTc2LC05LjU0NiAtNzIuMDI3LC0zOS4wNTEgLTkxLjExOSwtNzguOTY5IDE3LjM1Niw3LjgxIDM2LjQ0Nyw5LjU0NiA1My44MDMsOS41NDYgaCAyNi45MDIgTCA5MS44LDIxMy45OTkgQyA3My41NzYsMjAwLjk4MiAxOS43NzMsMTU0Ljk4OSA0NS44MDcsODkuMDM2IGMgNTUuNTM5LDU0LjY3MSAxMDguNDc1LDc5LjgzNyAyMDMuOTMyLDk3'+
			'LjE5MyBsIDEwLjQxNCwxLjczNiB2IC0yNC4yOTggYyAwLC01My44MDMgNDEuNjU0LC05OC4wNjEgOTMuNzIyLC05OC45MjkgMTkuOTU5LC0wLjg2OCA1Mi45MzYsMTcuMzU2IDYyLjQ4MSwyMi41NjMgNS4yMDcsMi42MDMgMTAuNDE0LDMuNDcxIDE1LjYyLDEuNzM2IDEzLjAxNywtNC4zMzkgMjguNjM3LC0xMC40MTQgNDUuOTkzLC0xNy4zNTYgLTcuODEsMTMuMDE3IC0xOC4yMjQsMjUuMTY2IC0zMi4xMDgsMzYuNDQ4IC0zLjQ3MSwyLjYwMyAtNC4zMzksNy44MSAtMi42MDMsMTIuMTQ5IDEuNzM2LDQuMzM5IDYuOTQyLDYuMDc1IDExLjI4MSw0LjMzOSBsIDMzLjg0NCwtMTEuMjgxIGMgLTYuMD'+
			'c1LDExLjI4IC0xNS42MjEsMjQuMjk3IC0zMi4xMDksMzAuMzcxIHoiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NzgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3ODAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJv'+
			'a2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3ODIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3ODQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3ODYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii'+
			'BpZD0iZzQ3ODgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3OTAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3OTIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3OTQiLz4KICA8ZyBzdHls'+
			'ZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3OTYiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3OTgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ4MDAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZT'+
			'ojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ4MDIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ4MDQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ4MDYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -105px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_twitter.onclick=function (e) {
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility='hidden';
			me._btn_off_social_media.ggVisible=false;
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility=(Number(me._btn_on_social_media.style.opacity)>0||!me._btn_on_social_media.style.opacity)?'inherit':'hidden';
			me._btn_on_social_media.ggVisible=true;
		}
		me._btn_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_social_media.appendChild(me._btn_twitter);
		el=me._btn_instagram=document.createElement('div');
		els=me._btn_instagram__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0ic29jaWFsX21lZGlhX2luc3RhZ3JhbS5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+'+
			'CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnpvb209IjEzLjk5IiBpbmtzY2FwZTp3aW'+
			'5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjM4LjA2MjkwMiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8'+
			'aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KID'+
			'xwYXRoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4'+
			'dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaG'+
			'FwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2Fw'+
			'OnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Nj'+
			'c0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41'+
			'MjU2NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW'+
			'5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTY5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjkzNzcxMzMyLDAsMCwwLjk1NzIyNjcsMjcuNDk0ODgsMjcuMDI2'+
			'NTU5KSI+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MTAtOSI+CiAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTA4LTkiPgogICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNTU0OTgxMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1MDIiIGlua3NjYXBlOm'+
			'Nvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNDAuNCw1LjUgSCAzNS42IEMgMzQuMTY2LDUuNSAzMyw2LjY2NiAzMyw4LjEgdiA0LjggYyAwLDEuNDM0IDEuMTY2LDIuNiAyLjYsMi42IGggNC44IGMgMS40MzQsMCAyLjYsLTEuMTY2IDIuNiwtMi42IFYgOC4xIEMgNDMsNi42NjYgNDEuODM0LDUuNSA0MC40LDUuNSBaIG0gMC42LDcuNCBjIDAsMC4zMzEgLTAuMjY5LDAuNiAtMC42LDAuNiBIIDM1LjYgQyAzNS4yNjksMTMuNSAzNSwxMy4yMzEgMzUsMTIuOSBWIDguMSBjIDAsLTAuMzMxIDAuMjY5LC0wLjYgMC42LC0wLjYgaCA0LjggYyAwLjMzMSwwIDAuNiwwLjI2OSAwLjYsMC42IHoiLz4K'+
			'ICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NTA0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDM3LjgsMC41IEggMTAuMiBDIDQuNTc2LDAuNSAwLDUuMDg5IDAsMTAuNzMxIHYgNi43NjkgMiAxNy43NyBDIDAsNDIuOTExIDQuNTc2LDQ3LjUgMTAuMiw0Ny41IEggMzcuOCBDIDQzLjQyNCw0Ny41IDQ4LDQyLjkxMSA0OCwzNy4yNyBWIDE5LjUgMTcuNSAxMC43MzEgQyA0OCw1LjA4OSA0My40MjQsMC41IDM3LjgsMC41IFogTSA0Ni'+
			'wzNy4yNyBjIDAsNC41MzggLTMuNjc5LDguMjMgLTguMiw4LjIzIEggMTAuMiBDIDUuNjc4LDQ1LjUgMiw0MS44MDggMiwzNy4yNyBWIDE5LjUgSCAxNC4yMjEgQyAxMS42MiwyMi4wNDMgMTAsMjUuNTg0IDEwLDI5LjUgYyAwLDcuNzIgNi4yOCwxNCAxNCwxNCA3LjcyLDAgMTQsLTYuMjggMTQsLTE0IDAsLTMuOTE2IC0xLjYyLC03LjQ1NyAtNC4yMjEsLTEwIEggNDYgWiBNIDM2LDI5LjUgYyAwLDYuNjE3IC01LjM4MywxMiAtMTIsMTIgLTYuNjE3LDAgLTEyLC01LjM4MyAtMTIsLTEyIDAsLTYuNjE3IDUuMzgzLC0xMiAxMiwtMTIgNi42MTcsMCAxMiw1LjM4MyAxMiwxMiB6IG0gLTQuODI2LC0x'+
			'MiBjIC0yLjEwMSwtMS4yNjEgLTQuNTUsLTIgLTcuMTc0LC0yIC0yLjYyNCwwIC01LjA3MywwLjczOSAtNy4xNzQsMiBIIDIgViAxMC43MzEgQyAyLDYuMTkyIDUuNjc5LDIuNSAxMC4yLDIuNSBoIDI3LjYgYyA0LjUyMSwwIDguMiwzLjY5MiA4LjIsOC4yMzEgViAxNy41IFoiLz4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NTA2IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDE1LDI5LjUgYyAwLDQuOTYyIDQuMDM3LDkgOSw5ID'+
			'QuOTYzLDAgOSwtNC4wMzggOSwtOSAwLC00Ljk2MiAtNC4wMzcsLTkgLTksLTkgLTQuOTYzLDAgLTksNC4wMzggLTksOSB6IG0gMTYsMCBjIDAsMy44NiAtMy4xNDEsNyAtNyw3IC0zLjg1OSwwIC03LC0zLjE0IC03LC03IDAsLTMuODYgMy4xNDEsLTcgNywtNyAzLjg1OSwwIDcsMy4xNCA3LDcgeiIvPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTEyLTIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9r'+
			'ZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUxNC04Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MTYtNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTE4LTQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3'+
			'N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUyMC0zIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MjItOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTI0LTkiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAx'+
			'OTYwNzgiIGlkPSJnNDUyNi05Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MjgtOCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTMwLTciLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUzMi0zIi'+
			'8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MzQtOCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTM2LTgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUzOCIvPgogIDxnIHN0eWxlPSJmaWxsOiNm'+
			'ZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_instagram__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Instagram";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -155px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_instagram.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_instagram.onclick=function (e) {
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility='hidden';
			me._btn_off_social_media.ggVisible=false;
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility=(Number(me._btn_on_social_media.style.opacity)>0||!me._btn_on_social_media.style.opacity)?'inherit':'hidden';
			me._btn_on_social_media.ggVisible=true;
		}
		me._btn_instagram.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_social_media.appendChild(me._btn_instagram);
		el=me._btn_goolge_plus=document.createElement('div');
		els=me._btn_goolge_plus__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0ic29jaWFsX21lZGlhX2dvb2dsZV9wbHVzLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJE'+
			'Rj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSI1NzUwIiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOn'+
			'dpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkxOCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSIwIj4KICA8'+
			'aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KID'+
			'xwYXRoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4'+
			'dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaG'+
			'FwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2Fw'+
			'OnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Nj'+
			'c0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41'+
			'MjU2NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW'+
			'5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzEwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjExNTIzNDM4LDAsMCwwLjExNTE2MTA5LDIwLjQ5OTk5OSwyMC41'+
			'MTg3NjEpIj4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY1MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSwxKSI+CiAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjQ5Ij4KICAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW'+
			'Q9Imc0NjQ3Ij4KICAgICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDY0MyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSAzMTguMTQ3LDIxMi4zMzMgSCAxNTIuNiB2IDc2LjggaCA4My42MjcgYyAtMTEuOTQ3LDMxLjU3MyAtMzguNCw1MS4yIC03My4zODcsNTEuMiAtNDYuMDgsMCAtODcuMDQsLTQwLjEwNyAtODcuMDQsLTg1LjMzMyAwLC00NS4yMjYgNDAuOTYsLTg1LjMzMyA4Ny4wNCwtODUuMzMzIDIyLjE4NywwIDQwLjk2LDYuODI3'+
			'IDU0LjYxMywyMC40OCBsIDUuOTczLDUuOTczIDU3LjE3MywtNTcuMTczIC02LjgyNywtNS45NzMgQyAyNDcuMzIsMTA2LjUyIDIwOC45Miw5Mi44NjcgMTYyLjg0LDkyLjg2NyA3MC42OCw5Mi44NjcgLTEsMTYzLjY5MyAtMSwyNTUgYyAwLDkxLjMwNyA3MS42OCwxNjIuMTMzIDE2My44NCwxNjIuMTMzIDg0LjQ4LDAgMTQ1LjA2NywtNDkuNDkzIDE1Ni4xNiwtMTI5LjcwNyAxLjcwNywtMTAuMjQgMi41NiwtMjEuMzMzIDIuNTYsLTMyLjQyNyAwLC0xMi44IC0wLjg1MywtMjUuNiAtMi41NiwtMzUuODQgeiBtIC0xNS4zNiw3Mi41MzQgYyAtMTEuMDkzLDcyLjUzMyAtNjMuMTQ3LDExNS4yIC0xMz'+
			'kuOTQ3LDExNS4yIC04MS45MiwwIC0xNDYuNzczLC02NCAtMTQ2Ljc3MywtMTQ1LjA2NyAwLC04MS4wNjcgNjQuODUzLC0xNDUuMDY3IDE0Ni43NzMsLTE0NS4wNjcgMzguNCwwIDY5LjEyLDEwLjI0IDkzLjAxMywyOS4wMTMgbCAtMzMuMjgsMzMuMjggYyAtMTUuMzYsLTEyLjggLTM1Ljg0LC0xOS42MjcgLTU5LjczMywtMTkuNjI3IC01Ni4zMiwwIC0xMDQuMTA3LDQ2LjkzMyAtMTA0LjEwNywxMDIuNCAwLDU1LjQ2NyA0Ny43ODcsMTAyLjQgMTAzLjI1MywxMDIuNCA0Ni4wOCwwIDgyLjc3MywtMjkuODY3IDkzLjAxMywtNzUuMDkzIGwgMi41NiwtMTAuMjQgSCAxNjkuNjY2IFYgMjI5LjQgSCAz'+
			'MDMuNjQgYyAwLjg1Myw3LjY4IDEuNzA3LDE3LjA2NyAxLjcwNywyNS42IDAsMTAuMjQgLTAuODU0LDIwLjQ4IC0yLjU2LDI5Ljg2NyB6Ii8+CiAgICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ2NDUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gNDU5LjgsMjEyLjMzMyB2IC01MS4yIGggLTU5LjczMyB2IDUxLjIgaCAtNTEuMiB2IDU5LjczMyBoIDUxLjIgdiA1MS4yIEggNDU5LjggdiAtNTEuMiBIIDUxMSBWIDIxMi4zMzMgWiBNID'+
			'Q5My45MzMsMjU1IGggLTUxLjIgdiA1MS4yIGggLTI1LjYgViAyNTUgaCAtNTEuMiB2IC0yNS42IGggNTEuMiB2IC01MS4yIGggMjUuNiB2IDUxLjIgaCA1MS4yIHoiLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY1MyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjU1Ii8+CiAgPGcgc3R5'+
			'bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2NTciLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY1OSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjYxIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2'+
			'ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2NjMiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY2NSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjY3Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3'+
			'MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2NjkiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY3MSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjczIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMT'+
			'k2MDc4IiBpZD0iZzQ2NzUiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY3NyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0Njc5Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2ODEiLz4KIDwvZz4K'+
			'PC9zdmc+Cg==';
		me._btn_goolge_plus__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Goolge_plus";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -205px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_goolge_plus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_goolge_plus.onclick=function (e) {
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility='hidden';
			me._btn_off_social_media.ggVisible=false;
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility=(Number(me._btn_on_social_media.style.opacity)>0||!me._btn_on_social_media.style.opacity)?'inherit':'hidden';
			me._btn_on_social_media.ggVisible=true;
		}
		me._btn_goolge_plus.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_social_media.appendChild(me._btn_goolge_plus);
		el=me._btn_linkedin=document.createElement('div');
		els=me._btn_linkedin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0ic29jaWFsX21lZGlhX2xpbmtlZGluLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4K'+
			'ICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy14PSI1NzUwIiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOndpbm'+
			'Rvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkxOCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSIwIj4KICA8aW5r'+
			'c2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYX'+
			'RoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1p'+
			'bmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS'+
			'1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJv'+
			'dW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OS'+
			'AxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2'+
			'NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2'+
			'xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOj'+
			'BweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY0MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODc5MDY4LDAsMCwwLjA4OTM2MzY2LDI3LjQ5NTgxNSwyNy4xMjI4'+
			'NTgpIj4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1ODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTc5Ij4KICAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPS'+
			'JnNDU3NyI+CiAgICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NTcxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDY4LjEyLDQuMjY3IEMgNDkuMzQ3LDQuMjY3IDMyLjI4LDExLjA5NCAxOS40OCwyMy44OTQgNS44MjcsMzcuNTQ3IC0xLDU0LjYxMyAtMSw3Mi41MzMgYyAwLDE4Ljc3MyA3LjY4LDM1Ljg0IDIwLjQ4LDQ4LjY0IDEyLjgsMTIuOCAzMC43MiwyMC40OCA0Ny43ODcsMTkuNjI3IDAsMCAwLjg1MywwIDEuNzA3LDAgMTcu'+
			'MDY3LDAgMzMuMjgsLTYuODI3IDQ2LjA4LC0xOS42MjcgMTIuOCwtMTIuOCAyMC40OCwtMjkuODY3IDIwLjQ4LC00OC42NCAwLjg1MywtMTcuOTIgLTYuODI3LC0zNC45ODcgLTE5LjYyNywtNDcuNzg3IEMgMTAzLjEwNywxMS4wOTMgODYuMDQsNC4yNjcgNjguMTIsNC4yNjcgWiBtIDM0Ljk4NywxMDQuOTYgYyAtOS4zODcsOS4zODcgLTIyLjE4NywxNS4zNiAtMzUuODQsMTQuNTA3IC0xMi44LDAgLTI2LjQ1MywtNS4xMiAtMzUuODQsLTE0LjUwNyAtMTAuMjQsLTkuMzg3IC0xNS4zNiwtMjMuMDQgLTE1LjM2LC0zNi42OTMgMCwtMTMuNjUzIDUuMTIsLTI2LjQ1MyAxNS4zNiwtMzYuNjkzIDkuMz'+
			'g3LC05LjM4NyAyMi4xODcsLTE0LjUwNyAzNi42OTMsLTE0LjUwNyAxMi44LDAgMjUuNiw1LjEyIDM0Ljk4NywxNC41MDcgMTAuMjQsMTAuMjQgMTUuMzYsMjMuMDQgMTUuMzYsMzYuNjkzIDAsMTMuNjUzIC01LjEyLDI3LjMwNiAtMTUuMzYsMzYuNjkzIHoiLz4KICAgICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1NzMiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gMTAxLjQsMTU3Ljg2NyBIIDMyLjI4IGMgLTEzLjY1MywwIC0yNC43'+
			'NDcsMTEuMDkzIC0yNC43NDcsMjUuNiB2IDI5OC42NjcgYyAwLDEzLjY1MyAxMS45NDcsMjUuNiAyNS42LDI1LjYgSCAxMDEuNCBjIDEzLjY1MywwIDI1LjYsLTExLjk0NyAyNS42LC0yNC43NDcgdiAtMjk5LjUyIGMgMCwtMTMuNjU0IC0xMS45NDcsLTI1LjYgLTI1LjYsLTI1LjYgeiBtIDguNTMzLDMyNS4xMiBjIDAsNC4yNjcgLTQuMjY3LDcuNjggLTguNTMzLDcuNjggSCAzMy4xMzMgYyAtNC4yNjcsMCAtOC41MzMsLTQuMjY3IC04LjUzMywtOC41MzMgViAxODMuNDY3IGMgMCwtNC4yNjcgMy40MTMsLTguNTMzIDcuNjgsLTguNTMzIGggNjkuMTIgYyA0LjI2NywwIDguNTMzLDQuMjY3IDguNT'+
			'MzLDguNTMzIHoiLz4KICAgICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1NzUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMzkxLjUzMywxNDkuMzMzIGggLTE3LjkyIGMgLTMzLjI4LDAgLTY0Ljg1MywxNC41MDcgLTg1LjMzMywzNy41NDcgdiAtMTEuOTQ3IGMgMCwtOC41MzMgLTguNTMzLC0xNy4wNjcgLTE3LjA2NywtMTcuMDY3IEggMTg1Ljg4IGMgLTcuNjgsMCAtMTcuMDY3LDYuODI3IC0xNy4wNjcsMTYuMjEzIHYgMzE4LjI5'+
			'MyBjIDAsOS4zODcgOS4zODcsMTUuMzYgMTcuMDY3LDE1LjM2IGggOTMuODY3IGMgNy42OCwwIDE3LjA2NywtNS45NzMgMTcuMDY3LC0xNS4zNiB2IC0xODQuMzIgYyAwLC0yOC4xNiAyMC40OCwtNTAuMzQ3IDQ2LjkzMywtNTAuMzQ3IDEzLjY1MywwIDI2LjQ1Myw1LjEyIDM1Ljg0LDE0LjUwNyA4LjUzMyw3LjY4IDExLjk0NywxOS42MjcgMTEuOTQ3LDM0Ljk4NyB2IDE4My40NjcgYyAwLDguNTMzIDguNTMzLDE3LjA2NyAxNy4wNjcsMTcuMDY3IGggODUuMzMzIGMgOC41MzMsMCAxNy4wNjcsLTguNTMzIDE3LjA2NywtMTcuMDY3IFYgMjcwLjUwNiBDIDUxMSwyMDIuMjQgNDU4Ljk0NywxNDkuMz'+
			'MzIDM5MS41MzMsMTQ5LjMzMyBaIG0gMTAyLjQsMzQwLjQ4IC0wLjg1MywwLjg1MyBIIDQwOS40NTMgTCA0MDguNiwzMDcuMiBjIDAsLTIwLjQ4IC01LjEyLC0zNS44NCAtMTYuMjEzLC00Ni45MzMgLTEyLjgsLTEyLjggLTI5Ljg2NywtMTkuNjI3IC00Ny43ODcsLTE5LjYyNyAtMzUuODQsMC44NTMgLTY0LDI5Ljg2NyAtNjQsNjcuNDEzIFYgNDkwLjY2NiBIIDE4Ni43MzMgViAxNzQuOTMzIGggODQuNDggbCAwLjg1MywwLjg1MyB2IDUzLjc2IGwgMjMuMDQsLTIzLjA0IDAuODUzLC0wLjg1MyBDIDMxMy4wMjYsMTgxLjc2IDM0Mi44OTIsMTY2LjQgMzc0LjQ2NiwxNjYuNCBoIDE3LjkyIGMgNTcu'+
			'MTczLDAgMTAxLjU0Nyw0Ni4wOCAxMDEuNTQ3LDEwNC4xMDcgeiIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU4MyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU4NSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3Nj'+
			'U2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU4NyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU4OSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5MSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAx'+
			'OTYwNzgiIGlkPSJnNDU5MyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5NSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5NyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5OSIvPgogID'+
			'xnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7'+
			'c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYxMSIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_linkedin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_LinkedIn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -255px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_linkedin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_linkedin.onclick=function (e) {
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility='hidden';
			me._btn_off_social_media.ggVisible=false;
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility=(Number(me._btn_on_social_media.style.opacity)>0||!me._btn_on_social_media.style.opacity)?'inherit':'hidden';
			me._btn_on_social_media.ggVisible=true;
		}
		me._btn_linkedin.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_social_media.appendChild(me._btn_linkedin);
		el=me._social_media_advice=document.createElement('div');
		els=me._social_media_advice__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="social_media_advice";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 55px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -312px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 0.8em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 55px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p style=\"margin-right:0.4em; margin-left:0.4em; margin-top:0.4em; margin-bottom:0.4em;\">Add your own code to handle each social media button actions.<\/p>";
		el.appendChild(els);
		me._social_media_advice.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._social_media_advice.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_social_media.appendChild(me._social_media_advice);
		me._bottom_buttons_bar_container.appendChild(me._btn_off_social_media);
		el=me._btn_on_social_media=document.createElement('div');
		els=me._btn_on_social_media__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fb25fc29jaWFsX21lZGlhLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAu'+
			'OTIuMSByMTUzNzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEzIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTEiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cG'+
			'FnZW9wYWNpdHk9IjAuNTY4NjI3NDUiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iMTguNDMiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjOGQ4YjhiIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOmN4PSI0MS4zNzI3NjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBp'+
			'bmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiLz4KIDxjaXJjbGUgcj0iMzgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaW'+
			'Q9InBhdGg0NDk5IiBjeD0iNTAiIGN5PSI1MCIvPgogPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7'+
			'Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbm'+
			'Nob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZm'+
			'ZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpZD0icGF0aDQ0OTQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMT'+
			'AuNSBDIDI4LjE5Njc0OSwxMC41IDEwLjUwMDAwMSwyOC4xOTY3NDggMTAuNTAwMDAxLDUwIDEwLjUwMDAwMSw3MS44MDMyNTIgMjguMTk2NzQ5LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ4IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDEgYyAyMC43MDg1MTMsMCAzNy40NzQzNTksMTYuNzY1ODQ2IDM3LjQ3NDM1OSwzNy40NzQzNTkgMCwyMC43MDg1MTIgLTE2Ljc2NTg0NiwzNy40NzQzNTggLTM3LjQ3NDM1OSwzNy40NzQzNTggLTIwLjcwODUxMiwwIC0zNy40NzQzNTgsLTE2Ljc2NTg0NiAtMzcuNDc0'+
			'MzU4LC0zNy40NzQzNTkgMCwtMjAuNzA4NTEyIDE2Ljc2NTg0NiwtMzcuNDc0MzU4IDM3LjQ3NDM1OCwtMzcuNDc0MzU4IHoiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzAxMDgxMSwwLjQ4OTQ5NDUyLC0wLjQ4OTQ5NDUyLDAuNzMwMTA4MTEsNjcuNzk0MDc0LC0xNi43MzU3MikiPgogID'+
			'xnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NyI+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgi'+
			'IGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjM0MjY0OCwyMS40MzI0NSkiPgogICAgPGNpcmNsZSByPSI3LjUiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgY3g9IjM3LjM0MjY0OCIgaWQ9InBhdGg0NDkyIiBjeT0iMjQuNzg0MzE3Ii8+CiAgICA8ZyBzdHlsZT0ic3Ryb2'+
			'tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2Ugcng9IjE1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2lu'+
			'Om1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDQ5MCIgY3g9IjM3Ljc2ODU4NSIgY3k9IjYzLjU2NzU1MSIgcnk9IjE0Ljk5OTk5OSIvPgogICAgIDxyZWN0IHg9IjM1LjI2ODU4NSIgeT0iMzAuMTIxNTQiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycm'+
			'F5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InJlY3Q0NDk2IiBoZWlnaHQ9IjIwIiB3aWR0aD0iNSIvPgogICAgPC9nPgogICA8L2c+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUwOC03IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxNS40NTUwOTksNjMuMTEyNDUxKSI+CiAgICA8Y2lyY2xlIHI9IjcuNSIgc3R5bGU9'+
			'Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBjeD0iMzcuMzQyNjQ4IiBpZD0icGF0aDQ0OTItOSIgY3k9IjI0Ljc4NDMxNyIvPgogICAgPGcgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3'+
			'Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTAyLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2Ugcng9IjE1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlk'+
			'PSJwYXRoNDQ5MC0yIiBjeD0iMzcuNzY4NTg1IiBjeT0iNjMuNTY3NTUxIiByeT0iMTQuOTk5OTk5Ii8+CiAgICAgPHJlY3QgeD0iMzUuMjY4NTg1IiB5PSIzMC4xMjE1NCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icmVjdDQ0OTYtMiIgaGVpZ2h0PSIyMCIgd2lkdGg9IjUiLz4KIC'+
			'AgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_on_social_media__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_On_Social_Media";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 216px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_social_media.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_on_social_media.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			me._btn_on_social_media.style[domTransition]='none';
			me._btn_on_social_media.style.visibility='hidden';
			me._btn_on_social_media.ggVisible=false;
			me._btn_off_social_media.style[domTransition]='none';
			me._btn_off_social_media.style.visibility=(Number(me._btn_off_social_media.style.opacity)>0||!me._btn_off_social_media.style.opacity)?'inherit':'hidden';
			me._btn_off_social_media.ggVisible=true;
		}
		me._btn_on_social_media.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_on_social_media);
		el=me._btn_off_info=document.createElement('div');
		els=me._btn_off_info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2luZm8uc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxOC40MyIgaW5rc2NhcGU6d2luZG93LWhlaWdodD'+
			'0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSI1MCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBl'+
			'PSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYXRoIHN0eWxlPSJjb2xvcj'+
			'ojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFs'+
			'aWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC'+
			'1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5l'+
			'am9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNz'+
			'EuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQy'+
			'IFoiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTM5NjYxMjksMCwwLDAuMTM5NjYxMjksMTUuMzUyNDUyLDE1LjM1Mjg5NykiPgogIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1ODIiPgogICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNT'+
			'AxOTYwNzgiIGlkPSJwYXRoNDUwMiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAzMTUuMjQ5LDM1OS41NTUgYyAtMS4zODcsLTIuMDMyIC00LjA0OCwtMi43NTUgLTYuMjcsLTEuNzAyIC0yNC41ODIsMTEuNjM3IC01Mi40ODIsMjMuOTQgLTU3Ljk1OCwyNS4wMTUgLTAuMTM4LC0wLjEyMyAtMC4zNTcsLTAuMzQ4IC0wLjY0NCwtMC43MzcgLTAuNzQyLC0xLjAwNSAtMS4xMDMsLTIuMzE4IC0xLjEwMywtNC4wMTUgMCwtMTMuOTA1IDEwLjQ5NSwtNTYuMjA1IDMxLjE5MiwtMTI1LjcxOSAxNy40NTEsLTU4LjQwNiAxOS40NjksLTcwLjQ5OSAxOS40NjksLTc0LjUxNCAwLC02'+
			'LjE5OCAtMi4zNzMsLTExLjQzNSAtNi44NjUsLTE1LjE0NiAtNC4yNjcsLTMuNTE5IC0xMC4yMjksLTUuMzAyIC0xNy43MTksLTUuMzAyIC0xMi40NTksMCAtMjYuODk5LDQuNzMgLTQ0LjE0NiwxNC40NjEgLTE2LjcxMyw5LjQzMyAtMzUuMzUyLDI1LjQxIC01NS4zOTYsNDcuNDg3IC0xLjU2OSwxLjcyOSAtMS43MzMsNC4zMTQgLTAuMzk1LDYuMjI4IDEuMzQsMS45MTUgMy44MjUsMi42NDQgNS45ODYsMS43NjQgNy4wMzcsLTIuODcyIDQyLjQwMiwtMTcuMzU5IDQ3LjU1NywtMjAuNTk3IDQuMjIxLC0yLjY0NiA3Ljg3NSwtMy45ODkgMTAuODYxLC0zLjk4OSAwLjEwNywwIDAuMTk5LDAuMDA0ID'+
			'AuMjc2LDAuMDEgMC4wMzYsMC4xOTggMC4wNywwLjUgMC4wNywwLjkzMyAwLDMuMDQ3IC0wLjYyNyw2LjY1NCAtMS44NTYsMTAuNzAzIC0zMC4xMzYsOTcuNjQxIC00NC43ODUsMTU3LjQ5OCAtNDQuNzg1LDE4Mi45OTQgMCw4Ljk5OCAyLjUwMSwxNi4yNDIgNy40MzIsMjEuNTI4IDUuMDI1LDUuMzkzIDExLjgwMyw4LjEyNyAyMC4xNDYsOC4xMjcgOC44OTEsMCAxOS43MTIsLTMuNzE0IDMzLjA4LC0xMS4zNTQgMTIuOTM2LC03LjM5MiAzMi42OCwtMjMuNjUzIDYwLjM2MywtNDkuNzE3IDEuNzkzLC0xLjY4NyAyLjA5MiwtNC40MjYgMC43MDUsLTYuNDU4IHoiLz4KICAgPHBhdGggc3R5bGU9ImZp'+
			'bGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1MDQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMzE0LjI4Miw3Ni42NzIgYyAtNC45MjUsLTUuMDQxIC0xMS4yMjcsLTcuNTk3IC0xOC43MjksLTcuNTk3IC05LjM0LDAgLTE3LjQ3NSwzLjY5MSAtMjQuMTc2LDEwLjk3MSAtNi41OTQsNy4xNiAtOS45MzgsMTUuOTQ2IC05LjkzOCwyNi4xMTMgMCw4LjAzMyAyLjQ2MywxNC42OSA3LjMyLDE5Ljc4NSA0LjkyMiw1LjE3MiAxMS4xMzksNy43OTQgMTguNDc2LDcuNzk0ID'+
			'guOTU4LDAgMTcuMDQ5LC0zLjg5OCAyNC4wNDcsLTExLjU4NiA2Ljg3NiwtNy41NTMgMTAuMzYzLC0xNi40MzMgMTAuMzYzLC0yNi4zOTMgMC4wMDEsLTcuNjU0IC0yLjQ3NiwtMTQuMDc1IC03LjM2MywtMTkuMDg3IHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0i'+
			'dHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4PSItMjkiIHk9'+
			'IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._btn_off_info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Off_Info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_off_info.onclick=function (e) {
			me._btn_off_info.style[domTransition]='none';
			me._btn_off_info.style.visibility='hidden';
			me._btn_off_info.ggVisible=false;
			me._btn_on_info.style[domTransition]='none';
			me._btn_on_info.style.visibility=(Number(me._btn_on_info.style.opacity)>0||!me._btn_on_info.style.opacity)?'inherit':'hidden';
			me._btn_on_info.ggVisible=true;
			me._info_text_box.style[domTransition]='none';
			me._info_text_box.style.visibility='hidden';
			me._info_text_box.ggVisible=false;
		}
		me._btn_off_info.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_off_info);
		el=me._btn_on_info=document.createElement('div');
		els=me._btn_on_info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2luZm8uc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxOC40MyIgaW5rc2NhcGU6d2luZG93LWhlaWdodD'+
			'0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSI1MCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBl'+
			'PSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYXRoIHN0eWxlPSJjb2xvcj'+
			'ojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFs'+
			'aWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC'+
			'1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5l'+
			'am9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNz'+
			'EuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQy'+
			'IFoiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTM5NjYxMjksMCwwLDAuMTM5NjYxMjksMTUuMzUyNDUyLDE1LjM1Mjg5NykiPgogIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1ODIiPgogICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNT'+
			'AxOTYwNzgiIGlkPSJwYXRoNDUwMiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAzMTUuMjQ5LDM1OS41NTUgYyAtMS4zODcsLTIuMDMyIC00LjA0OCwtMi43NTUgLTYuMjcsLTEuNzAyIC0yNC41ODIsMTEuNjM3IC01Mi40ODIsMjMuOTQgLTU3Ljk1OCwyNS4wMTUgLTAuMTM4LC0wLjEyMyAtMC4zNTcsLTAuMzQ4IC0wLjY0NCwtMC43MzcgLTAuNzQyLC0xLjAwNSAtMS4xMDMsLTIuMzE4IC0xLjEwMywtNC4wMTUgMCwtMTMuOTA1IDEwLjQ5NSwtNTYuMjA1IDMxLjE5MiwtMTI1LjcxOSAxNy40NTEsLTU4LjQwNiAxOS40NjksLTcwLjQ5OSAxOS40NjksLTc0LjUxNCAwLC02'+
			'LjE5OCAtMi4zNzMsLTExLjQzNSAtNi44NjUsLTE1LjE0NiAtNC4yNjcsLTMuNTE5IC0xMC4yMjksLTUuMzAyIC0xNy43MTksLTUuMzAyIC0xMi40NTksMCAtMjYuODk5LDQuNzMgLTQ0LjE0NiwxNC40NjEgLTE2LjcxMyw5LjQzMyAtMzUuMzUyLDI1LjQxIC01NS4zOTYsNDcuNDg3IC0xLjU2OSwxLjcyOSAtMS43MzMsNC4zMTQgLTAuMzk1LDYuMjI4IDEuMzQsMS45MTUgMy44MjUsMi42NDQgNS45ODYsMS43NjQgNy4wMzcsLTIuODcyIDQyLjQwMiwtMTcuMzU5IDQ3LjU1NywtMjAuNTk3IDQuMjIxLC0yLjY0NiA3Ljg3NSwtMy45ODkgMTAuODYxLC0zLjk4OSAwLjEwNywwIDAuMTk5LDAuMDA0ID'+
			'AuMjc2LDAuMDEgMC4wMzYsMC4xOTggMC4wNywwLjUgMC4wNywwLjkzMyAwLDMuMDQ3IC0wLjYyNyw2LjY1NCAtMS44NTYsMTAuNzAzIC0zMC4xMzYsOTcuNjQxIC00NC43ODUsMTU3LjQ5OCAtNDQuNzg1LDE4Mi45OTQgMCw4Ljk5OCAyLjUwMSwxNi4yNDIgNy40MzIsMjEuNTI4IDUuMDI1LDUuMzkzIDExLjgwMyw4LjEyNyAyMC4xNDYsOC4xMjcgOC44OTEsMCAxOS43MTIsLTMuNzE0IDMzLjA4LC0xMS4zNTQgMTIuOTM2LC03LjM5MiAzMi42OCwtMjMuNjUzIDYwLjM2MywtNDkuNzE3IDEuNzkzLC0xLjY4NyAyLjA5MiwtNC40MjYgMC43MDUsLTYuNDU4IHoiLz4KICAgPHBhdGggc3R5bGU9ImZp'+
			'bGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1MDQiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMzE0LjI4Miw3Ni42NzIgYyAtNC45MjUsLTUuMDQxIC0xMS4yMjcsLTcuNTk3IC0xOC43MjksLTcuNTk3IC05LjM0LDAgLTE3LjQ3NSwzLjY5MSAtMjQuMTc2LDEwLjk3MSAtNi41OTQsNy4xNiAtOS45MzgsMTUuOTQ2IC05LjkzOCwyNi4xMTMgMCw4LjAzMyAyLjQ2MywxNC42OSA3LjMyLDE5Ljc4NSA0LjkyMiw1LjE3MiAxMS4xMzksNy43OTQgMTguNDc2LDcuNzk0ID'+
			'guOTU4LDAgMTcuMDQ5LC0zLjg5OCAyNC4wNDcsLTExLjU4NiA2Ljg3NiwtNy41NTMgMTAuMzYzLC0xNi40MzMgMTAuMzYzLC0yNi4zOTMgMC4wMDEsLTcuNjU0IC0yLjQ3NiwtMTQuMDc1IC03LjM2MywtMTkuMDg3IHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0i'+
			'dHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4PSItMjkiIHk9'+
			'IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._btn_on_info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_On_Info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_on_info.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			me._btn_on_info.style[domTransition]='none';
			me._btn_on_info.style.visibility='hidden';
			me._btn_on_info.ggVisible=false;
			me._btn_off_info.style[domTransition]='none';
			me._btn_off_info.style.visibility=(Number(me._btn_off_info.style.opacity)>0||!me._btn_off_info.style.opacity)?'inherit':'hidden';
			me._btn_off_info.ggVisible=true;
			me._info_text_box.style[domTransition]='none';
			me._info_text_box.style.visibility=(Number(me._info_text_box.style.opacity)>0||!me._info_text_box.style.opacity)?'inherit':'hidden';
			me._info_text_box.ggVisible=true;
		}
		me._btn_on_info.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_on_info);
		el=me._btn_custom_url=document.createElement('div');
		els=me._btn_custom_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._btn_custom_url__img.setAttribute('src',basePath + 'images/btn_custom_url.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Custom_URL";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 108px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_custom_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_custom_url.onclick=function (e) {
			player.openUrl("https:\/\/www.presentarq.com","_blank");
		}
		me._btn_custom_url.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_custom_url);
		el=me._btn_google_maps=document.createElement('div');
		els=me._btn_google_maps__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX21hcF9tYXJrZXIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSIxOC40MyIgaW5rc2NhcGU6d2luZG93LWhlaW'+
			'dodD0iMjA2NiIgaW5rc2NhcGU6Y3k9IjUwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOmN4PSI0MC45Mzg2ODciIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSByPSIzOCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiIGN4PSI1MCIgY3k9IjUwIi8+CiA8cGF0aCBzdH'+
			'lsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50'+
			'OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZG'+
			'luZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtz'+
			'dHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlkPSJwYXRoNDQ5NCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNS'+
			'w1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUw'+
			'LDEyLjUyNTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKD'+
			'Q3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNs'+
			'YXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4PSItMjkiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d2'+
			'9yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTY5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjExOTg3OTY0LDAsMCwwLjExOTg3OTY0LDIwLjUzNDY2MywyMC41MzQ2NjMpIj4K'+
			'ICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTExIj4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiIGlkPSJnNDUwOSI+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9InBhdGg0NTA1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3Vydm'+
			'F0dXJlPSIwIiBkPSJNIDI0NS43OTEsMCBDIDE1My43OTksMCA3OC45NTcsNzQuODQxIDc4Ljk1NywxNjYuODMzIGMgMCwzNi45NjcgMjEuNzY0LDkzLjE4NyA2OC40OTMsMTc2LjkyNiAzMS44ODcsNTcuMTM4IDYzLjYyNywxMDUuNCA2NC45NjYsMTA3LjQzMyBsIDIyLjk0MSwzNC43NzMgYyAyLjMxMywzLjUwNyA2LjIzMiw1LjYxNyAxMC40MzQsNS42MTcgNC4yMDIsMCA4LjEyMSwtMi4xMSAxMC40MzQsLTUuNjE3IGwgMjIuOTQsLTM0Ljc3MSBDIDI4MC40OTEsNDQ5LjE4NCAzMTIsNDAxLjMzOSAzNDQuMTMyLDM0My43NTkgMzkwLjg2MSwyNjAuMDI0IDQxMi42MjUsMjAzLjgwNCA0MTIuNjI1'+
			'LDE2Ni44MzMgNDEyLjYyNSw3NC44NDEgMzM3Ljc4MywwIDI0NS43OTEsMCBaIG0gNzYuNTExLDMzMS41NzYgYyAtMzEuNjg1LDU2Ljc3NSAtNjIuNjk2LDEwMy44NjkgLTY0LjAwMywxMDUuODQ4IGwgLTEyLjUwOCwxOC45NTkgLTEyLjUwNCwtMTguOTU0IEMgMjMxLjk3Myw0MzUuNDM0IDIwMC43MjQsMzg3LjkxOCAxNjkuMjgsMzMxLjU3NiAxMjUuOTM1LDI1My45IDEwMy45NTcsMTk4LjQ3MiAxMDMuOTU3LDE2Ni44MzMgMTAzLjk1Nyw4OC42MjYgMTY3LjU4MywyNSAyNDUuNzkxLDI1IGMgNzguMjA4LDAgMTQxLjgzNCw2My42MjYgMTQxLjgzNCwxNDEuODMzIDAsMzEuNjQzIC0yMS45NzgsOD'+
			'cuMDY5IC02NS4zMjMsMTY0Ljc0MyB6Ii8+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9InBhdGg0NTA3IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDI0NS43OTEsNzMuMjkxIGMgLTUxLjAwNSwwIC05Mi41LDQxLjQ5NiAtOTIuNSw5Mi41IDAsNTEuMDA0IDQxLjQ5NSw5Mi41IDkyLjUsOTIuNSA1MS4wMDUsMCA5Mi41LC00MS40OTYgOTIuNSwtOTIuNSAwLC01MS4wMDQgLTQxLjQ5NSwtOTIuNSAtOTIuNSwtOTIuNSB6IG0gMCwxNjAgYyAt'+
			'MzcuMjIsMCAtNjcuNSwtMzAuMjggLTY3LjUsLTY3LjUgMCwtMzcuMjIgMzAuMjgsLTY3LjUgNjcuNSwtNjcuNSAzNy4yMjEsMCA2Ny41LDMwLjI4IDY3LjUsNjcuNSAwLDM3LjIyIC0zMC4yNzksNjcuNSAtNjcuNSw2Ny41IHoiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTEzIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwOD'+
			'EiIGlkPSJnNDUxNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpZD0iZzQ1MTciLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTE5Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiIGlkPSJnNDUyMSIvPgogIDxnIHN0eWxlPSJm'+
			'aWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpZD0iZzQ1MjMiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTI1Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiIGlkPSJnNDUyNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMz'+
			'QxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpZD0iZzQ1MjkiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTMxIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiIGlkPSJnNDUzMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Ut'+
			'b3BhY2l0eTowLjUwMTk2MDgxIiBpZD0iZzQ1MzUiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTM3Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiIGlkPSJnNDUzOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpZD0iZzQ1ND'+
			'EiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_google_maps__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_Google_Maps";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_google_maps.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_google_maps.onclick=function (e) {
			player.openUrl("https:\/\/www.google.com.mx\/maps\/@14.6536729,-90.5699643,19.25z","_blank");
		}
		me._btn_google_maps.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_google_maps);
		el=me._btn_off_vr_glasses=document.createElement('div');
		els=me._btn_off_vr_glasses__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaW5rc2NhcGU6dmVyc2'+
			'lvbj0iMC45Mi4xIHIxNTM3MSIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAyNi40NTgzMzQgMjYuNDU4MzMzIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmc4IiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSIxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl92cl9nbGFzc2VzLnN2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3Bh'+
			'Y2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6em9vbT0iMTguNDMiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjODA3ZDdkIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9ImJhc2UiIGlua3NjYXBlOmN4PSI1MCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEuMCIgZml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN1cnJlbn'+
			'QtbGF5ZXI9ImxheWVyMSIgdW5pdHM9InB4IiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iZmFsc2UiIGZpdC1tYXJnaW4tdG9wPSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBzcGFjaW5neD0iMi42NDU4MzMzIiBzcGFjaW5neT0iMi42NDU4MzMzIiB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkMTAiIGRvdHRlZD0iZmFsc2UiIG9yaWdpbnk9IjMzLjMwMTA0NSIgZW1wc3BhY2luZz0iMiIgb3JpZ2lueD0iNjcuNDI2MDQ0Ii8+CiA8L3NvZGlwb2RpOm5h'+
			'bWVkdmlldz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ny40MjYwND'+
			'IsLTMwMy44NDI2OSkiPgogIDxnIGlkPSJnNDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy45Mzc1MDAyLDEwLjU4MzMzMikiPgogICA8Y2lyY2xlIHI9IjEwLjA1NDE2NyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBjeD0iLTYyLjEzNDM3NyIg'+
			'aWQ9InBhdGg0NDk5IiBjeT0iMzA2LjQ4ODUzIi8+CiAgIDxwYXRoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybW'+
			'FsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQt'+
			'YW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZm'+
			'ZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NDk0'+
			'IiBkPSJtIC02Mi4xMzQzNzYsMjk2LjAzNzQ4IGMgLTUuNzY4Nzc3LDAgLTEwLjQ1MTA0MSw0LjY4MjI3IC0xMC40NTEwNDEsMTAuNDUxMDQgMCw1Ljc2ODc4IDQuNjgyMjY0LDEwLjQ1MTA1IDEwLjQ1MTA0MSwxMC40NTEwNSA1Ljc2ODc3NywwIDEwLjQ1MTA0MiwtNC42ODIyNyAxMC40NTEwNDIsLTEwLjQ1MTA1IDAsLTUuNzY4NzcgLTQuNjgyMjY1LC0xMC40NTEwNCAtMTAuNDUxMDQyLC0xMC40NTEwNCB6IG0gMCwwLjUzNTk1IGMgNS40NzkxMjcsMCA5LjkxNTA5MSw0LjQzNTk3IDkuOTE1MDkxLDkuOTE1MDkgMCw1LjQ3OTEzIC00LjQzNTk2NCw5LjkxNTA5IC05LjkxNTA5MSw5LjkxNTA5IC'+
			'01LjQ3OTEyNywwIC05LjkxNTA5LC00LjQzNTk2IC05LjkxNTA5LC05LjkxNTA5IDAsLTUuNDc5MTIgNC40MzU5NjMsLTkuOTE1MDkgOS45MTUwOSwtOS45MTUwOSB6Ii8+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4'+
			'NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MT'+
			'E1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEu'+
			'NjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLD'+
			'UxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDx0ZXh0IHg9Ii04My4wMzY0NTMiIHk9IjMxNy44NjU2IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzMzMwMnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8dHNwYW4geD0iLTgzLjAzNjQ1MyIgeT0iMzI3'+
			'LjUyMTA5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiIGlkPSJ0c3BhbjQ1NjYiLz4KICAgPC90ZXh0PgogIDwvZz4KICA8cGF0aCBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwcz'+
			'pub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50'+
			'YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZm'+
			'VjdDpub25lO2ZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4zMDAwMDAwMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxODMxNTM7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBp'+
			'ZD0icmVjdDQ0OTYtNiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAtNjAuNTQzODYsMzEyLjU2NjkxIGMgLTAuNjA1NTk5LDAgLTEuMTAyNzgsMC40NzY4MyAtMS4xMDI3OCwxLjA2NzIzIHYgNi44NzI3NCBjIDAsMC41OTAzNyAwLjQ5NzE3MiwxLjA2NzIyIDEuMTAyNzgsMS4wNjcyMiBoIDQuODQ1OTk3IGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMTE3NDM0LC0wLjExNzM2IHYgLTAuMDAyIGwgLTAuMTUwNDYyLDAuMTEzNyBjIDAuMTQ3NjczLDAuMDQ0MSAwLjMwMzAwOSwtMC4wODMgMC4yODA3NDEsLTAuMjM4MzkgbCAwLjAwMTksMC4wMDUgYyAwLDAgLT'+
			'AuMDU3NTcsLTAuNTg4MzcgLTAuMDIyMDIsLTEuMjQ1MDkgaCAyLjU0Njg1NCBjIDAuMDM1NDEsMC42NTM4MyAtMC4wMTk2NiwxLjIzNDU5IC0wLjAyMDE4LDEuMjM5NiAtMC4wMjIyNiwwLjE1NTM2IDAuMTM0OTAzLDAuMjgyNTEgMC4yODI1NzcsMC4yMzgzOSBsIC0wLjE1MDQ2NywtMC4xMTM2OSB2IDAuMDAyIGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMTE3NDMzLDAuMTE3MzYgaCA0Ljg0NDE2NCBjIDAuNjA1NjA4LDAgMS4xMDI3NzksLTAuNDc2ODUgMS4xMDI3NzksLTEuMDY3MjIgdiAtNi44NzI3NSBjIDAsLTAuNTkwNCAtMC40OTcxODEsLTEuMDY3MjIgLTEuMTAyNzc5LC0x'+
			'LjA2NzIyIHogbSAwLDAuNDMyNzQgaCAxMi42OTM5MDYgYyAwLjM3MzYxNSwwIDAuNjYyNDAzLDAuMjgxMTcgMC42NjI0MDMsMC42MzQ0OSB2IDYuODcyNzQgYyAwLDAuMzUzMjggLTAuMjg4Nzk4LDAuNjM0NDUgLTAuNjYyNDAzLDAuNjM0NDUgaCAtNC42NDQxNTcgYyAwLjAxNjI2LC0wLjIzNjc4IDAuMDQwMDIsLTAuNjIyNTIgMC4wMTEsLTEuMTAzODggLTAuMDQzMDEsLTAuNzEzNjggLTAuMTY1NjA5LC0xLjU0NDQ1IC0wLjY5MTc2MSwtMS45Njc1OCAtMC4yNzgzODcsLTAuMjIzODkgLTAuNjUyNzIxLC0wLjMyMDg5IC0xLjAyMjA0MywtMC4zMjA4OSAtMC4zNjkzMjUsMCAtMC43NDM2NiwwLj'+
			'A5NyAtMS4wMjIwNDYsMC4zMjA4OSAtMC41MjYxNDgsMC40MjMxMyAtMC42NDY5MjMsMS4yNTM5IC0wLjY4OTkyNiwxLjk2NzU4IC0wLjAyOSwwLjQ4MTM2IC0wLjAwNTMsMC44NjcwOSAwLjAxMSwxLjEwMzg4IGggLTQuNjQ1OTkxIGMgLTAuMzczNjA0LDAgLTAuNjYyNDAzLC0wLjI4MTE3IC0wLjY2MjQwMywtMC42MzQ0NSB2IC02Ljg3Mjc0IGMgMCwtMC4zNTMzMiAwLjI4ODc4OSwtMC42MzQ0OSAwLjY2MjQwMywtMC42MzQ0OSB6IG0gMi4zNTA1MTksMS4zODI2MiBjIC0wLjk4MTU5NiwwIC0xLjc4NTM2NywwLjc3MSAtMS43ODUzNjcsMS43MjM3IDAsMC45NTI2OSAwLjgwMzc3MiwxLjcyNTUy'+
			'IDEuNzg1MzY3LDEuNzI1NTIgMC45ODE1OTgsMCAxLjc4NzIwMywtMC43NzI4MyAxLjc4NzIwMywtMS43MjU1MiAwLC0wLjk1MjcgLTAuODA1NjA1LC0xLjcyMzcgLTEuNzg3MjAzLC0xLjcyMzcgeiBtIDcuOTkyODY5LDAgYyAtMC45ODE1OTksMCAtMS43ODUzNjgsMC43NzEgLTEuNzg1MzY4LDEuNzIzNyAwLDAuOTUyNjggMC44MDM3NzEsMS43MjU1MiAxLjc4NTM2OCwxLjcyNTUyIDAuOTgxNTk1LDAgMS43ODUzNjcsLTAuNzcyODMgMS43ODUzNjcsLTEuNzI1NTIgMCwtMC45NTI3IC0wLjgwMzc3LC0xLjcyMzcgLTEuNzg1MzY3LC0xLjcyMzcgeiBtIC03Ljk5Mjg2OSwwLjQzMjc2IGMgMC43ND'+
			'c4OTEsMCAxLjM0NDk5LDAuNTc3MDYgMS4zNDQ5OSwxLjI5MDk0IDAsMC43MTM4OCAtMC41OTcwOTksMS4yOTI3NiAtMS4zNDQ5OSwxLjI5Mjc2IC0wLjc0Nzg4OCwwIC0xLjM0NDk4NywtMC41Nzg4OCAtMS4zNDQ5ODcsLTEuMjkyNzYgMCwtMC43MTM4OCAwLjU5NzA5OSwtMS4yOTA5NCAxLjM0NDk4NywtMS4yOTA5NCB6IG0gNy45OTI4NjksMCBjIDAuNzQ3ODg4LDAgMS4zNDQ5ODgsMC41NzcwNiAxLjM0NDk4OCwxLjI5MDk0IDAsMC43MTM4OCAtMC41OTcxLDEuMjkyNzYgLTEuMzQ0OTg4LDEuMjkyNzYgLTAuNzQ3ODksMCAtMS4zNDQ5OSwtMC41Nzg4OCAtMS4zNDQ5OSwtMS4yOTI3NiAwLC0w'+
			'LjcxMzg4IDAuNTk3MSwtMS4yOTA5NCAxLjM0NDk5LC0xLjI5MDk0IHogbSAtMy45OTY0MzUsMy4zNjY2OSBjIDAuMjg2NTA0LDAgMC41NzEyMjUsMC4wODU0IDAuNzQzMTM5LDAuMjIzNzEgMC4yNDE2NzgsMC4xOTQzNiAwLjM4Mzk0NiwwLjcyNjMgMC40NjA1NjIsMS4yNTc5MyBoIC0yLjQwNTU2NiBjIDAuMDc2NjQsLTAuNTMxNTkgMC4yMTcwNTgsLTEuMDYzNTggMC40NTg3MjgsLTEuMjU3OTMgMC4xNzE5MTYsLTAuMTM4MjUgMC40NTY2MzYsLTAuMjIzNzEgMC43NDMxMzcsLTAuMjIzNzEgeiBtIDEuNDg2Mjc3LDMuMTQyOTcgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4wMTEsMC'+
			'4wMTMgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIC0wLjAxMSwwLjAwMiBjIDIuMWUtNSwtMmUtNCAtMy43ZS01LC0wLjAxNDIgMCwtMC4wMTQ3IHogbSAtMi45NzI1NTIsMC4wMDIgYyAyLjdlLTUsMi45ZS00IC0yZS01LDAuMDEyNiAwLDAuMDEzIGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIC0wLjAxMSwtMC4wMDIgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMDExLC0wLjAxMDkgeiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_off_vr_glasses__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_off_vr_glasses";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_vr_glasses.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_off_vr_glasses.onclick=function (e) {
			me._btn_off_vr_glasses.style[domTransition]='none';
			me._btn_off_vr_glasses.style.visibility='hidden';
			me._btn_off_vr_glasses.ggVisible=false;
			me._btn_on_vr_glasses.style[domTransition]='none';
			me._btn_on_vr_glasses.style.visibility=(Number(me._btn_on_vr_glasses.style.opacity)>0||!me._btn_on_vr_glasses.style.opacity)?'inherit':'hidden';
			me._btn_on_vr_glasses.ggVisible=true;
		}
		me._btn_off_vr_glasses.ggUpdatePosition=function (useTransition) {
		}
		el=me._vr_advice=document.createElement('div');
		els=me._vr_advice__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="vr_advice";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 55px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -93px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 0.8em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 55px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p style=\"margin-right:0.4em; margin-left:0.4em; margin-top:0.4em; margin-bottom:0.4em;\">Add your own URL pointing to your VR goggles ready tour.<\/p>";
		el.appendChild(els);
		me._vr_advice.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr_advice.ggUpdatePosition=function (useTransition) {
		}
		me._btn_off_vr_glasses.appendChild(me._vr_advice);
		me._bottom_buttons_bar_container.appendChild(me._btn_off_vr_glasses);
		el=me._btn_on_vr_glasses=document.createElement('div');
		els=me._btn_on_vr_glasses__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaW5rc2NhcGU6dmVyc2'+
			'lvbj0iMC45Mi4xIHIxNTM3MSIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAyNi40NTgzMzQgMjYuNDU4MzMzIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmc4IiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSIxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl92cl9nbGFzc2VzLnN2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3Bh'+
			'Y2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6em9vbT0iMTguNDMiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOmN5PSI1MCIgcGFnZWNvbG9yPSIjODA3ZDdkIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9ImJhc2UiIGlua3NjYXBlOmN4PSI1MCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEuMCIgZml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN1cnJlbn'+
			'QtbGF5ZXI9ImxheWVyMSIgdW5pdHM9InB4IiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iZmFsc2UiIGZpdC1tYXJnaW4tdG9wPSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBzcGFjaW5neD0iMi42NDU4MzMzIiBzcGFjaW5neT0iMi42NDU4MzMzIiB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkMTAiIGRvdHRlZD0iZmFsc2UiIG9yaWdpbnk9IjMzLjMwMTA0NSIgZW1wc3BhY2luZz0iMiIgb3JpZ2lueD0iNjcuNDI2MDQ0Ii8+CiA8L3NvZGlwb2RpOm5h'+
			'bWVkdmlldz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ny40MjYwND'+
			'IsLTMwMy44NDI2OSkiPgogIDxnIGlkPSJnNDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy45Mzc1MDAyLDEwLjU4MzMzMikiPgogICA8Y2lyY2xlIHI9IjEwLjA1NDE2NyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBjeD0iLTYyLjEzNDM3NyIg'+
			'aWQ9InBhdGg0NDk5IiBjeT0iMzA2LjQ4ODUzIi8+CiAgIDxwYXRoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybW'+
			'FsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQt'+
			'YW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZm'+
			'ZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NDk0'+
			'IiBkPSJtIC02Mi4xMzQzNzYsMjk2LjAzNzQ4IGMgLTUuNzY4Nzc3LDAgLTEwLjQ1MTA0MSw0LjY4MjI3IC0xMC40NTEwNDEsMTAuNDUxMDQgMCw1Ljc2ODc4IDQuNjgyMjY0LDEwLjQ1MTA1IDEwLjQ1MTA0MSwxMC40NTEwNSA1Ljc2ODc3NywwIDEwLjQ1MTA0MiwtNC42ODIyNyAxMC40NTEwNDIsLTEwLjQ1MTA1IDAsLTUuNzY4NzcgLTQuNjgyMjY1LC0xMC40NTEwNCAtMTAuNDUxMDQyLC0xMC40NTEwNCB6IG0gMCwwLjUzNTk1IGMgNS40NzkxMjcsMCA5LjkxNTA5MSw0LjQzNTk3IDkuOTE1MDkxLDkuOTE1MDkgMCw1LjQ3OTEzIC00LjQzNTk2NCw5LjkxNTA5IC05LjkxNTA5MSw5LjkxNTA5IC'+
			'01LjQ3OTEyNywwIC05LjkxNTA5LC00LjQzNTk2IC05LjkxNTA5LC05LjkxNTA5IDAsLTUuNDc5MTIgNC40MzU5NjMsLTkuOTE1MDkgOS45MTUwOSwtOS45MTUwOSB6Ii8+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4'+
			'NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MT'+
			'E1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEu'+
			'NjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLD'+
			'UxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDx0ZXh0IHg9Ii04My4wMzY0NTMiIHk9IjMxNy44NjU2IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzMzMwMnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiIGlkPSJ0ZXh0NDU2OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8dHNwYW4geD0iLTgzLjAzNjQ1MyIgeT0iMzI3'+
			'LjUyMTA5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiIGlkPSJ0c3BhbjQ1NjYiLz4KICAgPC90ZXh0PgogIDwvZz4KICA8cGF0aCBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwcz'+
			'pub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50'+
			'YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZm'+
			'VjdDpub25lO2ZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4zMDAwMDAwMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxODMxNTM7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBp'+
			'ZD0icmVjdDQ0OTYtNiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAtNjAuNTQzODYsMzEyLjU2NjkxIGMgLTAuNjA1NTk5LDAgLTEuMTAyNzgsMC40NzY4MyAtMS4xMDI3OCwxLjA2NzIzIHYgNi44NzI3NCBjIDAsMC41OTAzNyAwLjQ5NzE3MiwxLjA2NzIyIDEuMTAyNzgsMS4wNjcyMiBoIDQuODQ1OTk3IGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMTE3NDM0LC0wLjExNzM2IHYgLTAuMDAyIGwgLTAuMTUwNDYyLDAuMTEzNyBjIDAuMTQ3NjczLDAuMDQ0MSAwLjMwMzAwOSwtMC4wODMgMC4yODA3NDEsLTAuMjM4MzkgbCAwLjAwMTksMC4wMDUgYyAwLDAgLT'+
			'AuMDU3NTcsLTAuNTg4MzcgLTAuMDIyMDIsLTEuMjQ1MDkgaCAyLjU0Njg1NCBjIDAuMDM1NDEsMC42NTM4MyAtMC4wMTk2NiwxLjIzNDU5IC0wLjAyMDE4LDEuMjM5NiAtMC4wMjIyNiwwLjE1NTM2IDAuMTM0OTAzLDAuMjgyNTEgMC4yODI1NzcsMC4yMzgzOSBsIC0wLjE1MDQ2NywtMC4xMTM2OSB2IDAuMDAyIGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMTE3NDMzLDAuMTE3MzYgaCA0Ljg0NDE2NCBjIDAuNjA1NjA4LDAgMS4xMDI3NzksLTAuNDc2ODUgMS4xMDI3NzksLTEuMDY3MjIgdiAtNi44NzI3NSBjIDAsLTAuNTkwNCAtMC40OTcxODEsLTEuMDY3MjIgLTEuMTAyNzc5LC0x'+
			'LjA2NzIyIHogbSAwLDAuNDMyNzQgaCAxMi42OTM5MDYgYyAwLjM3MzYxNSwwIDAuNjYyNDAzLDAuMjgxMTcgMC42NjI0MDMsMC42MzQ0OSB2IDYuODcyNzQgYyAwLDAuMzUzMjggLTAuMjg4Nzk4LDAuNjM0NDUgLTAuNjYyNDAzLDAuNjM0NDUgaCAtNC42NDQxNTcgYyAwLjAxNjI2LC0wLjIzNjc4IDAuMDQwMDIsLTAuNjIyNTIgMC4wMTEsLTEuMTAzODggLTAuMDQzMDEsLTAuNzEzNjggLTAuMTY1NjA5LC0xLjU0NDQ1IC0wLjY5MTc2MSwtMS45Njc1OCAtMC4yNzgzODcsLTAuMjIzODkgLTAuNjUyNzIxLC0wLjMyMDg5IC0xLjAyMjA0MywtMC4zMjA4OSAtMC4zNjkzMjUsMCAtMC43NDM2NiwwLj'+
			'A5NyAtMS4wMjIwNDYsMC4zMjA4OSAtMC41MjYxNDgsMC40MjMxMyAtMC42NDY5MjMsMS4yNTM5IC0wLjY4OTkyNiwxLjk2NzU4IC0wLjAyOSwwLjQ4MTM2IC0wLjAwNTMsMC44NjcwOSAwLjAxMSwxLjEwMzg4IGggLTQuNjQ1OTkxIGMgLTAuMzczNjA0LDAgLTAuNjYyNDAzLC0wLjI4MTE3IC0wLjY2MjQwMywtMC42MzQ0NSB2IC02Ljg3Mjc0IGMgMCwtMC4zNTMzMiAwLjI4ODc4OSwtMC42MzQ0OSAwLjY2MjQwMywtMC42MzQ0OSB6IG0gMi4zNTA1MTksMS4zODI2MiBjIC0wLjk4MTU5NiwwIC0xLjc4NTM2NywwLjc3MSAtMS43ODUzNjcsMS43MjM3IDAsMC45NTI2OSAwLjgwMzc3MiwxLjcyNTUy'+
			'IDEuNzg1MzY3LDEuNzI1NTIgMC45ODE1OTgsMCAxLjc4NzIwMywtMC43NzI4MyAxLjc4NzIwMywtMS43MjU1MiAwLC0wLjk1MjcgLTAuODA1NjA1LC0xLjcyMzcgLTEuNzg3MjAzLC0xLjcyMzcgeiBtIDcuOTkyODY5LDAgYyAtMC45ODE1OTksMCAtMS43ODUzNjgsMC43NzEgLTEuNzg1MzY4LDEuNzIzNyAwLDAuOTUyNjggMC44MDM3NzEsMS43MjU1MiAxLjc4NTM2OCwxLjcyNTUyIDAuOTgxNTk1LDAgMS43ODUzNjcsLTAuNzcyODMgMS43ODUzNjcsLTEuNzI1NTIgMCwtMC45NTI3IC0wLjgwMzc3LC0xLjcyMzcgLTEuNzg1MzY3LC0xLjcyMzcgeiBtIC03Ljk5Mjg2OSwwLjQzMjc2IGMgMC43ND'+
			'c4OTEsMCAxLjM0NDk5LDAuNTc3MDYgMS4zNDQ5OSwxLjI5MDk0IDAsMC43MTM4OCAtMC41OTcwOTksMS4yOTI3NiAtMS4zNDQ5OSwxLjI5Mjc2IC0wLjc0Nzg4OCwwIC0xLjM0NDk4NywtMC41Nzg4OCAtMS4zNDQ5ODcsLTEuMjkyNzYgMCwtMC43MTM4OCAwLjU5NzA5OSwtMS4yOTA5NCAxLjM0NDk4NywtMS4yOTA5NCB6IG0gNy45OTI4NjksMCBjIDAuNzQ3ODg4LDAgMS4zNDQ5ODgsMC41NzcwNiAxLjM0NDk4OCwxLjI5MDk0IDAsMC43MTM4OCAtMC41OTcxLDEuMjkyNzYgLTEuMzQ0OTg4LDEuMjkyNzYgLTAuNzQ3ODksMCAtMS4zNDQ5OSwtMC41Nzg4OCAtMS4zNDQ5OSwtMS4yOTI3NiAwLC0w'+
			'LjcxMzg4IDAuNTk3MSwtMS4yOTA5NCAxLjM0NDk5LC0xLjI5MDk0IHogbSAtMy45OTY0MzUsMy4zNjY2OSBjIDAuMjg2NTA0LDAgMC41NzEyMjUsMC4wODU0IDAuNzQzMTM5LDAuMjIzNzEgMC4yNDE2NzgsMC4xOTQzNiAwLjM4Mzk0NiwwLjcyNjMgMC40NjA1NjIsMS4yNTc5MyBoIC0yLjQwNTU2NiBjIDAuMDc2NjQsLTAuNTMxNTkgMC4yMTcwNTgsLTEuMDYzNTggMC40NTg3MjgsLTEuMjU3OTMgMC4xNzE5MTYsLTAuMTM4MjUgMC40NTY2MzYsLTAuMjIzNzEgMC43NDMxMzcsLTAuMjIzNzEgeiBtIDEuNDg2Mjc3LDMuMTQyOTcgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4wMTEsMC'+
			'4wMTMgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIC0wLjAxMSwwLjAwMiBjIDIuMWUtNSwtMmUtNCAtMy43ZS01LC0wLjAxNDIgMCwtMC4wMTQ3IHogbSAtMi45NzI1NTIsMC4wMDIgYyAyLjdlLTUsMi45ZS00IC0yZS01LDAuMDEyNiAwLDAuMDEzIGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIC0wLjAxMSwtMC4wMDIgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMDExLC0wLjAxMDkgeiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_on_vr_glasses__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_on_vr_glasses";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_vr_glasses.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_on_vr_glasses.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			me._btn_on_vr_glasses.style[domTransition]='none';
			me._btn_on_vr_glasses.style.visibility='hidden';
			me._btn_on_vr_glasses.ggVisible=false;
			me._btn_off_vr_glasses.style[domTransition]='none';
			me._btn_off_vr_glasses.style.visibility=(Number(me._btn_off_vr_glasses.style.opacity)>0||!me._btn_off_vr_glasses.style.opacity)?'inherit':'hidden';
			me._btn_off_vr_glasses.ggVisible=true;
		}
		me._btn_on_vr_glasses.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_on_vr_glasses);
		el=me._btn_off_pdf=document.createElement('div');
		els=me._btn_off_pdf__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX3BkZi5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3Jr'+
			'IHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnpvb209IjE4LjQzIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PS'+
			'IyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjQwLjkzODY4NyIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3Jp'+
			'ZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYXRoIHN0eWxlPS'+
			'Jjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0'+
			'ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOj'+
			'A7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9r'+
			'ZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwID'+
			'EwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIu'+
			'NTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5Lj'+
			'kwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'NDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLX'+
			'NwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGgzLTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBl'+
			'cz0iY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NzY2NzY2NjY2NjY2Nzc2Njc2NjY2NjY3NzY3NzcyIgZD0iTSA3My41OTM3MTIsNTUuNTU5NzExIEMgNzIuNjE0MjQ0LDU0LjU5NDg2NSA3MC40NDIxNzcsNTQuMDgzOTYgNjcuMTM2NzY2LDU0LjA0MDQ3NyA2NC44OTkyMzksNTQuMDE1Nzg3IDYyLjIwNjI3Myw1NC4yMTI4MzQgNTkuMzczODA4LDU0LjYwOTM2NiA1OC4xMDU0MDksNTMuODc3NTkgNTYuNzk4MTA5LDUzLjA4MTM3IDU1Ljc3Miw1Mi4xMjI0MjQgYyAtMi43NjAyNzgsLTIuNTc3MjIgLTUuMDY0NCwtNi4xNTQ3MTggLTYuNTAwMjk4LC0xMC4wODg1NiAwLjA5MzU4LC0wLjM2NzM5MyAwLj'+
			'E3MzI0MSwtMC42OTAyOTYgMC4yNDc0NDksLTEuMDE5ODA0IDAsMCAxLjU1NDg4NCwtOC44MzAzNzMgMS4xNDMyMzQsLTExLjgxNTg3NiAtMC4wNTY3MSwtMC40MDk0NDUgLTAuMDkxNDMsLTAuNTI4Mjc1IC0wLjIwMTUyMywtMC44NDY0MzkgbCAtMC4xMzUwNjQsLTAuMzQ2ODcxIGMgLTAuNDIyOTksLTAuOTc1MzIxIC0xLjI1MjE3NywtMi4wMDg3NTYgLTIuNTUyMjkzLC0xLjk1MjM2MSBsIC0wLjc2MjQ0NSwtMC4wMjQyNSAtMC4wMjA5NywtNC4zNGUtNCBjIC0xLjQ0OTY3NywwIC0yLjYzMTIzNywwLjc0MTM4NyAtMi45NDE0MTEsMS44NDk0NTUgLTAuOTQyODY2LDMuNDc1NDY1IDAuMDMsOC42'+
			'NzQ4MDMgMS43OTI4NjQsMTUuNDA4ODc4IGwgLTAuNDUxMjY2LDEuMDk2ODY5IGMgLTEuMjYyMjI0LDMuMDc2NjM3IC0yLjg0NDA5Nyw2LjE3NTM4IC00LjIzOTgwNyw4LjkwOTE2NSBsIC0wLjE4MTQyNSwwLjM1NTQ4NSBjIC0xLjQ2ODMzNywyLjg3MzEyOSAtMi44MDA2MDcsNS4zMTE5ODkgLTQuMDA4NDMzLDcuMzc4MTU2IGwgLTEuMjQ3MDEsMC42NTkyOTggYyAtMC4wOTA3MSwwLjA0NzkzIC0yLjIyNzkxNCwxLjE3ODEwMyAtMi43MjkxMywxLjQ4MTM0OSAtNC4yNTI1ODEsMi41Mzg3NDUgLTcuMDcwNTU2LDUuNDIwNjM3IC03LjUzODA0MSw3LjcwNzgwOSAtMC4xNDg3LDAuNzI5NzY3IC0wLj'+
			'AzODA0LDEuNjYzNzQ5IDAuNzE4NjY4LDIuMDk2MTU2IGwgMS4yMDYxMDMsMC42MDY5MTIgYyAwLjUyMzE3NiwwLjI2MjA2NSAxLjA3NDkxNiwwLjM5NDgxIDEuNjQwMTQ2LDAuMzk0ODEgMy4wMjg4MjQsMCA2LjU0NTA4NSwtMy43NzIzOTggMTEuMzg5MDIxLC0xMi4yMjQ4OTUgNS41OTI3NDIsLTEuODIwNDU3IDExLjk2MDEzMywtMy4zMzM2NzEgMTcuNTQwNjc2LC00LjE2ODM0MiA0LjI1MjcyMSwyLjM5NDM3OCA5LjQ4MzM0MSw0LjA1NzQxMiAxMi43ODQ1OSw0LjA1NzQxMiAwLjU4NjE5MywwIDEuMDkxNTYxLC0wLjA1NTk2IDEuNTAyMjEsLTAuMTY0NjE1IDAuNjMzMTE2LC0wLjE2NzYxOSAx'+
			'LjE2Njc3OSwtMC41Mjg3MDMgMS40OTIxNjEsLTEuMDE4NTEzIDAuNjQwNTkxLC0wLjk2MzgzNyAwLjc3MDM0OCwtMi4yOTEzMzQgMC41OTY1MjQsLTMuNjUwNjkgLTAuMDUxOTEsLTAuNDAzNDExIC0wLjM3NDE5LC0wLjkwMjI3MSAtMC43MjI4MzQsLTEuMjQyODIgeiBtIC00NS4yMzkwMSwxNi4xMTQyNCBjIDAuNTUyMzEyLC0xLjUwOTkwNCAyLjczODYsLTQuNDk1MTI1IDUuOTcxMjQsLTcuMTQzODA2IDAuMjAzMjQyLC0wLjE2NDc0OSAwLjcwMzg4NCwtMC42MzM3NTIgMS4xNjIxODQsLTEuMDY5MzE1IC0zLjM4MDMzNSw1LjM5MDY0MSAtNS42NDQxMzEsNy41MzkxODIgLTcuMTMzNDI0LDguMj'+
			'EzMTIxIHogTSA0Ny41MDEwNzksMjcuNTg5NDA0IGMgMC45NzM1ODUsMCAxLjUyNzQ3OCwyLjQ1MzYzOSAxLjU3MzQwNCw0Ljc1NDE1OCAwLjA0NTkzLDIuMzAwNTE5IC0wLjQ5MjE2OSwzLjkxNTA0NCAtMS4xNTk1OTcsNS4xMDk2NDkgLTAuNTUyNzQ0LC0xLjc2ODY1NyAtMC44MjAwMDEsLTQuNTU2NTQ0IC0wLjgyMDAwMSwtNi4zNzk0NTEgMCwwIC0wLjA0MDY0LC0zLjQ4NDM1NiAwLjQwNjE5NCwtMy40ODQzNTYgeiBtIC01LjcxMTMwMSwzMS40MTU2MjEgYyAwLjY3ODE5MSwtMS4yMTM4MzIgMS4zODM3OTYsLTIuNDkzOTY5IDIuMTA0OTA0LC0zLjg1MTc1IDEuNzU3NywtMy4zMjM0ODEgMi44'+
			'Njc2MzQsLTUuOTIzOTQxIDMuNjk0Mzg0LC04LjA2MTU3MSAxLjY0NDE2MywyLjk5MTEwNyAzLjY5MTk0Niw1LjUzMzg3IDYuMDk5MTMzLDcuNTcxMTg4IDAuMzAwMjY3LDAuMjU0MTY0IDAuNjE4NDc0LDAuNTA5NjE1IDAuOTUyNjE3LDAuNzY0MjA3IC00Ljg5NTE3MiwwLjk2ODQzIC05LjEyNjA4MSwyLjE0NjI0NiAtMTIuODUxMDM4LDMuNTc3OTI2IHogbSAzMC44NjMyMjYsLTAuMjc1Njg2IGMgLTAuMjk4MTE3LDAuMTg2NDI0IC0xLjE1MjEzOCwwLjI5NDIwNCAtMS43MDE0MzEsMC4yOTQyMDQgLTEuNzczMDYxLDAgLTMuOTY2NjcyLC0wLjgxMDQyIC03LjA0MiwtMi4xMjg3MzUgMS4xODE3MD'+
			'MsLTAuMDg3NCAyLjI2NTA5MSwtMC4xMzE4ODMgMy4yMzY2NjEsLTAuMTMxODgzIDEuNzc4NTEsMCAyLjMwNTEzLC0wLjAwNzcgNC4wNDQwMzMsMC40MzU2OTYgMS43Mzg4OTUsMC40NDM0NjUgMS43NjA4NTMsMS4zNDQzMDEgMS40NjI3MzcsMS41MzA3MTggeiIvPgo8L3N2Zz4K';
		me._btn_off_pdf__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_off_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_off_pdf.onclick=function (e) {
			me._btn_off_pdf.style[domTransition]='none';
			me._btn_off_pdf.style.visibility='hidden';
			me._btn_off_pdf.ggVisible=false;
			me._btn_on_pdf.style[domTransition]='none';
			me._btn_on_pdf.style.visibility=(Number(me._btn_on_pdf.style.opacity)>0||!me._btn_on_pdf.style.opacity)?'inherit':'hidden';
			me._btn_on_pdf.ggVisible=true;
		}
		me._btn_off_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_off_pdf);
		el=me._btn_on_pdf=document.createElement('div');
		els=me._btn_on_pdf__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZX'+
			'MvaW5rc2NhcGUiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjEwMHB4IiBpZD0iTGF5ZXJfMSIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX3BkZi5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3Jr'+
			'IHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnpvb209IjE4LjQzIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PS'+
			'IyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjQwLjkzODY4NyIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3Jp'+
			'ZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBjeT0iNTAiLz4KIDxwYXRoIHN0eWxlPS'+
			'Jjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0'+
			'ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOj'+
			'A7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9r'+
			'ZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwID'+
			'EwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIu'+
			'NTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5Lj'+
			'kwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'NDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHg9Ii0yOSIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLX'+
			'NwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9InRleHQ0NTY4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGgzLTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBl'+
			'cz0iY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NzY2NzY2NjY2NjY2Nzc2Njc2NjY2NjY3NzY3NzcyIgZD0iTSA3My41OTM3MTIsNTUuNTU5NzExIEMgNzIuNjE0MjQ0LDU0LjU5NDg2NSA3MC40NDIxNzcsNTQuMDgzOTYgNjcuMTM2NzY2LDU0LjA0MDQ3NyA2NC44OTkyMzksNTQuMDE1Nzg3IDYyLjIwNjI3Myw1NC4yMTI4MzQgNTkuMzczODA4LDU0LjYwOTM2NiA1OC4xMDU0MDksNTMuODc3NTkgNTYuNzk4MTA5LDUzLjA4MTM3IDU1Ljc3Miw1Mi4xMjI0MjQgYyAtMi43NjAyNzgsLTIuNTc3MjIgLTUuMDY0NCwtNi4xNTQ3MTggLTYuNTAwMjk4LC0xMC4wODg1NiAwLjA5MzU4LC0wLjM2NzM5MyAwLj'+
			'E3MzI0MSwtMC42OTAyOTYgMC4yNDc0NDksLTEuMDE5ODA0IDAsMCAxLjU1NDg4NCwtOC44MzAzNzMgMS4xNDMyMzQsLTExLjgxNTg3NiAtMC4wNTY3MSwtMC40MDk0NDUgLTAuMDkxNDMsLTAuNTI4Mjc1IC0wLjIwMTUyMywtMC44NDY0MzkgbCAtMC4xMzUwNjQsLTAuMzQ2ODcxIGMgLTAuNDIyOTksLTAuOTc1MzIxIC0xLjI1MjE3NywtMi4wMDg3NTYgLTIuNTUyMjkzLC0xLjk1MjM2MSBsIC0wLjc2MjQ0NSwtMC4wMjQyNSAtMC4wMjA5NywtNC4zNGUtNCBjIC0xLjQ0OTY3NywwIC0yLjYzMTIzNywwLjc0MTM4NyAtMi45NDE0MTEsMS44NDk0NTUgLTAuOTQyODY2LDMuNDc1NDY1IDAuMDMsOC42'+
			'NzQ4MDMgMS43OTI4NjQsMTUuNDA4ODc4IGwgLTAuNDUxMjY2LDEuMDk2ODY5IGMgLTEuMjYyMjI0LDMuMDc2NjM3IC0yLjg0NDA5Nyw2LjE3NTM4IC00LjIzOTgwNyw4LjkwOTE2NSBsIC0wLjE4MTQyNSwwLjM1NTQ4NSBjIC0xLjQ2ODMzNywyLjg3MzEyOSAtMi44MDA2MDcsNS4zMTE5ODkgLTQuMDA4NDMzLDcuMzc4MTU2IGwgLTEuMjQ3MDEsMC42NTkyOTggYyAtMC4wOTA3MSwwLjA0NzkzIC0yLjIyNzkxNCwxLjE3ODEwMyAtMi43MjkxMywxLjQ4MTM0OSAtNC4yNTI1ODEsMi41Mzg3NDUgLTcuMDcwNTU2LDUuNDIwNjM3IC03LjUzODA0MSw3LjcwNzgwOSAtMC4xNDg3LDAuNzI5NzY3IC0wLj'+
			'AzODA0LDEuNjYzNzQ5IDAuNzE4NjY4LDIuMDk2MTU2IGwgMS4yMDYxMDMsMC42MDY5MTIgYyAwLjUyMzE3NiwwLjI2MjA2NSAxLjA3NDkxNiwwLjM5NDgxIDEuNjQwMTQ2LDAuMzk0ODEgMy4wMjg4MjQsMCA2LjU0NTA4NSwtMy43NzIzOTggMTEuMzg5MDIxLC0xMi4yMjQ4OTUgNS41OTI3NDIsLTEuODIwNDU3IDExLjk2MDEzMywtMy4zMzM2NzEgMTcuNTQwNjc2LC00LjE2ODM0MiA0LjI1MjcyMSwyLjM5NDM3OCA5LjQ4MzM0MSw0LjA1NzQxMiAxMi43ODQ1OSw0LjA1NzQxMiAwLjU4NjE5MywwIDEuMDkxNTYxLC0wLjA1NTk2IDEuNTAyMjEsLTAuMTY0NjE1IDAuNjMzMTE2LC0wLjE2NzYxOSAx'+
			'LjE2Njc3OSwtMC41Mjg3MDMgMS40OTIxNjEsLTEuMDE4NTEzIDAuNjQwNTkxLC0wLjk2MzgzNyAwLjc3MDM0OCwtMi4yOTEzMzQgMC41OTY1MjQsLTMuNjUwNjkgLTAuMDUxOTEsLTAuNDAzNDExIC0wLjM3NDE5LC0wLjkwMjI3MSAtMC43MjI4MzQsLTEuMjQyODIgeiBtIC00NS4yMzkwMSwxNi4xMTQyNCBjIDAuNTUyMzEyLC0xLjUwOTkwNCAyLjczODYsLTQuNDk1MTI1IDUuOTcxMjQsLTcuMTQzODA2IDAuMjAzMjQyLC0wLjE2NDc0OSAwLjcwMzg4NCwtMC42MzM3NTIgMS4xNjIxODQsLTEuMDY5MzE1IC0zLjM4MDMzNSw1LjM5MDY0MSAtNS42NDQxMzEsNy41MzkxODIgLTcuMTMzNDI0LDguMj'+
			'EzMTIxIHogTSA0Ny41MDEwNzksMjcuNTg5NDA0IGMgMC45NzM1ODUsMCAxLjUyNzQ3OCwyLjQ1MzYzOSAxLjU3MzQwNCw0Ljc1NDE1OCAwLjA0NTkzLDIuMzAwNTE5IC0wLjQ5MjE2OSwzLjkxNTA0NCAtMS4xNTk1OTcsNS4xMDk2NDkgLTAuNTUyNzQ0LC0xLjc2ODY1NyAtMC44MjAwMDEsLTQuNTU2NTQ0IC0wLjgyMDAwMSwtNi4zNzk0NTEgMCwwIC0wLjA0MDY0LC0zLjQ4NDM1NiAwLjQwNjE5NCwtMy40ODQzNTYgeiBtIC01LjcxMTMwMSwzMS40MTU2MjEgYyAwLjY3ODE5MSwtMS4yMTM4MzIgMS4zODM3OTYsLTIuNDkzOTY5IDIuMTA0OTA0LC0zLjg1MTc1IDEuNzU3NywtMy4zMjM0ODEgMi44'+
			'Njc2MzQsLTUuOTIzOTQxIDMuNjk0Mzg0LC04LjA2MTU3MSAxLjY0NDE2MywyLjk5MTEwNyAzLjY5MTk0Niw1LjUzMzg3IDYuMDk5MTMzLDcuNTcxMTg4IDAuMzAwMjY3LDAuMjU0MTY0IDAuNjE4NDc0LDAuNTA5NjE1IDAuOTUyNjE3LDAuNzY0MjA3IC00Ljg5NTE3MiwwLjk2ODQzIC05LjEyNjA4MSwyLjE0NjI0NiAtMTIuODUxMDM4LDMuNTc3OTI2IHogbSAzMC44NjMyMjYsLTAuMjc1Njg2IGMgLTAuMjk4MTE3LDAuMTg2NDI0IC0xLjE1MjEzOCwwLjI5NDIwNCAtMS43MDE0MzEsMC4yOTQyMDQgLTEuNzczMDYxLDAgLTMuOTY2NjcyLC0wLjgxMDQyIC03LjA0MiwtMi4xMjg3MzUgMS4xODE3MD'+
			'MsLTAuMDg3NCAyLjI2NTA5MSwtMC4xMzE4ODMgMy4yMzY2NjEsLTAuMTMxODgzIDEuNzc4NTEsMCAyLjMwNTEzLC0wLjAwNzcgNC4wNDQwMzMsMC40MzU2OTYgMS43Mzg4OTUsMC40NDM0NjUgMS43NjA4NTMsMS4zNDQzMDEgMS40NjI3MzcsMS41MzA3MTggeiIvPgo8L3N2Zz4K';
		me._btn_on_pdf__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_on_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_on_pdf.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			me._btn_on_pdf.style[domTransition]='none';
			me._btn_on_pdf.style.visibility='hidden';
			me._btn_on_pdf.ggVisible=false;
			me._btn_off_pdf.style[domTransition]='none';
			me._btn_off_pdf.style.visibility=(Number(me._btn_off_pdf.style.opacity)>0||!me._btn_off_pdf.style.opacity)?'inherit':'hidden';
			me._btn_off_pdf.ggVisible=true;
			player.openUrl("media\\example.pdf","_blank");
		}
		me._btn_on_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._bottom_buttons_bar_container.appendChild(me._btn_on_pdf);
		me.divSkin.appendChild(me._bottom_buttons_bar_container);
		el=me._info_text_box=document.createElement('div');
		els=me._info_text_box__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Info_text_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 60%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : 19.88%;';
		hs+='visibility : hidden;';
		hs+='width : 76%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 1.0em; font-style: italic;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 2px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_box.ggUpdateText=function() {
			var hs="<p style=\"font-size: 1.7em; font-family: Calibri; margin-right:0.5em; margin-left:0.5em; margin-top:0.5em; margin-bottom:0.5em;\">LOREM IPSUM<\/p><br\/><p style=\"font-size: 1.3em; font-family: Calibri; margin-right:0.5em; margin-left:0.5em; margin-top:-1.5em; margin-bottom:0.5em;\">"+me.ggUserdata.information+"<\/p>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_box.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_box.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_text_box.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_info_text_box=document.createElement('div');
		els=me._btn_close_info_text_box__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeT0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaGVpZ2h0PSIxMDBweCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwcHgiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fY2xvc2VfaW5mb190ZXh0X2JveC5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9u'+
			'PSIwLjkyLjEgcjE1MzcxIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYX'+
			'BlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnpvb209IjE4LjQzIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iNTAiIHBhZ2Vjb2xvcj0iIzg2ODA3YiIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjUwLjQzNDA3NSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3Nj'+
			'YXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIvPgogPGcgaWQ9Imc0NTY2Ij4KICA8Y2lyY2xlIHI9IjM4IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcm'+
			'Rlcjpub3JtYWwiIGN4PSI1MCIgaWQ9InBhdGg0NDk5IiBjeT0iNTAiLz4KICA8cGF0aCBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRl'+
			'cm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYX'+
			'NlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVy'+
			'bztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoND'+
			'Q5NCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAx'+
			'Mi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIi8+CiAgPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPHRleHQgeD0iLTI5IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LX'+
			'NpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0idGV4dDQ1NjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICA8dHNwYW4geD0iLTI5IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIGlkPSJ0c3BhbjQ1NjYiLz4KICA8L3RleHQ+CiA8L2c+CiA8cGF0aCBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2Ut'+
			'bGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODE7cGFpbnQtb3JkZXI6bWFya2VycyBmaWxsIHN0cm9rZSIgaWQ9InJlY3Q0NDg2IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDMxLjI2MTY3MiwzMy4zODI5OTEgNDcuODc4NjgyLDUwIDMxLjI2MTY3Miw2Ni42MTcwMDkgMzMuMzgyOTkzLDY4LjczODMzIDQ5Ljk5OTk5OCw1Mi4xMjEzMiA2Ni42MTcwMDgsNjguNzM4MzMgNjguNzM4MzI4LDY2LjYxNzAwOSA1Mi4xMjEzMTgsNTAgNjguNz'+
			'M4MzI4LDMzLjM4Mjk5MSA2Ni42MTcwMDgsMzEuMjYxNjcgNDkuOTk5OTk4LDQ3Ljg3ODY4IDMzLjM4Mjk5MywzMS4yNjE2NyBaIi8+Cjwvc3ZnPgo=';
		me._btn_close_info_text_box__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_info_text_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 100.32%;';
		hs+='position : absolute;';
		hs+='top : -8.68%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._btn_close_info_text_box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_info_text_box.onclick=function (e) {
			me._btn_off_info.onclick();
		}
		me._btn_close_info_text_box.ggUpdatePosition=function (useTransition) {
		}
		me._info_text_box.appendChild(me._btn_close_info_text_box);
		me.divSkin.appendChild(me._info_text_box);
		el=me._location_text_container=document.createElement('div');
		el.ggId="location_text_Container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 244px;';
		hs+='left : 10px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._location_text_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._location_text_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._location_text_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._location_text_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._location_text_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me._location_text_container.ggCurrentLogicStateScaling == 0) {
					me._location_text_container.ggParameter.sx = 0.5;
					me._location_text_container.ggParameter.sy = 0.5;
					me._location_text_container.style[domTransform]=parameterToTransform(me._location_text_container.ggParameter);
				}
				else if (me._location_text_container.ggCurrentLogicStateScaling == 1) {
					me._location_text_container.ggParameter.sx = 0.6;
					me._location_text_container.ggParameter.sy = 0.6;
					me._location_text_container.style[domTransform]=parameterToTransform(me._location_text_container.ggParameter);
				}
				else if (me._location_text_container.ggCurrentLogicStateScaling == 2) {
					me._location_text_container.ggParameter.sx = 0.75;
					me._location_text_container.ggParameter.sy = 0.75;
					me._location_text_container.style[domTransform]=parameterToTransform(me._location_text_container.ggParameter);
				}
				else if (me._location_text_container.ggCurrentLogicStateScaling == 3) {
					me._location_text_container.ggParameter.sx = 0.85;
					me._location_text_container.ggParameter.sy = 0.85;
					me._location_text_container.style[domTransform]=parameterToTransform(me._location_text_container.ggParameter);
				}
				else {
					me._location_text_container.ggParameter.sx = 1;
					me._location_text_container.ggParameter.sy = 1;
					me._location_text_container.style[domTransform]=parameterToTransform(me._location_text_container.ggParameter);
				}
			}
		}
		me._location_text_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._location_text_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._location_text_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._location_text_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me._location_text_container.ggCurrentLogicStateAlpha == 0) {
					me._location_text_container.style.visibility=me._location_text_container.ggVisible?'inherit':'hidden';
					me._location_text_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._location_text_container.style.opacity == 0.0) { me._location_text_container.style.visibility="hidden"; } }, 505);
					me._location_text_container.style.opacity=0;
				}
			}
		}
		me._location_text_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._inner_box=document.createElement('div');
		el.ggId="INNER_BOX";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 148px;';
		hs+='left : -1px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inner_box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inner_box.ggUpdatePosition=function (useTransition) {
		}
		el=me._location_text_body=document.createElement('div');
		els=me._location_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="location_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 152px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -157px;';
		hs+='visibility : inherit;';
		hs+='width : 254px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 258px;';
		hs+='height: 156px;';
		hs+='background: #ffffff;';
		hs+='border: 2px solid #ffffff;';
		hs+='border: 2px solid rgba(255,255,255,0.501961);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._location_text_body.ggUpdateText=function() {
			var hs="<p style=\"margin-right:0.5em; margin-left:0.5em; margin-top:0.75em; margin-bottom:0.5em;\">"+me.ggUserdata.description+"<\/p>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._location_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._location_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._location_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._location_text_body.onclick=function (e) {
			me._btn_location_text_up.onclick();
		}
		me._location_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._inner_box.appendChild(me._location_text_body);
		me._location_text_container.appendChild(me._inner_box);
		el=me._location_text_title=document.createElement('div');
		els=me._location_text_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="location_text_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 248px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.3em; font-style: italic;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 252px;';
		hs+='height: 40px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.203922);';
		hs+='border: 2px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._location_text_title.ggUpdateText=function() {
			var hs="<p style=\"margin-top:0.3em\";>"+me.ggUserdata.title+"<\/p>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._location_text_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._location_text_title.ggUpdateText();
		});
		el.appendChild(els);
		me._location_text_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._location_text_title.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_location_text_down=document.createElement('div');
		els=me._btn_location_text_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3'+
			'd3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBoZWlnaHQ9IjM4IiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIyNTAiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJsb2NhdGlvbl90ZXh0X2Rvd24uc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIx'+
			'NTM3MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3BhY2'+
			'l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSI4LjMwMjUiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOmN5PSIxOSIgcGFnZWNvbG9yPSIjYzBiY2MwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTpjeD0iMjAwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3VycmVudC1sYXll'+
			'cj0iTGF5ZXJfMSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiPgogIDxpbmtzY2FwZTpncmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDgyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxnIGlkPSJnNDUxNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MTA2NzgsMC43MDcxMDY3OCwwLjcwNzEwNjc4LDAuNzA3MTA2NzgsMTQzLjk3MTYxLC0xNS40MjAzMTYpIj4KICA8ZyBpZD0iZzQ1MDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjYxNTIyMjYsLTEuMDI5NDM3MikiPgogICA8cmVjdCB4PSIxMTQiIHk9Ii01OSIgc3'+
			'R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJyZWN0NDQ4NCIgaGVpZ2h0PSIyIiB3aWR0aD0iMTIiLz4KICAgPHJlY3QgeD0iLTY5IiB5PSItMTI2IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46'+
			'bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InJlY3Q0NDg0LTUiIGhlaWdodD0iMiIgd2lkdGg9IjEyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiLz4KICA8L2c+CiAgPHJlY3QgeD0iMjEuOTIwMzExIiB5PSItMTI5Ljk4NjMzIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW'+
			'9wYWNpdHk6MC41MDE5NjA3OCIgaGVpZ2h0PSIyIiBpZD0icmVjdDQ0ODQtOSIgd2lkdGg9IjI0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_location_text_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_location_text_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_location_text_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_location_text_down.onclick=function (e) {
			me._reset_all_elements_to_desired_state.onclick();
			var list=me.findElements("btn_location_text_down",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("btn_location_text_up",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			var list=me.findElements("location_text_body",false);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 1000ms ease-out 0ms';
				}
				e.ggParameter.rx=0;e.ggParameter.ry=150;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
		}
		me._btn_location_text_down.ggUpdatePosition=function (useTransition) {
		}
		me._location_text_title.appendChild(me._btn_location_text_down);
		el=me._btn_location_text_up=document.createElement('div');
		els=me._btn_location_text_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3'+
			'd3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBoZWlnaHQ9IjM4IiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIyNTAiIGlkPSJMYXllcl8xIiBzb2RpcG9kaTpkb2NuYW1lPSJsb2NhdGlvbl90ZXh0X3VwLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUz'+
			'NzEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZW9wYWNpdH'+
			'k9IjAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iOC4xNjc1IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iMTkiIHBhZ2Vjb2xvcj0iI2MwYmNjMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6Y3g9IjE3OC41NzM2MSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN1cnJlbnQt'+
			'bGF5ZXI9IkxheWVyXzEiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ4MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBpZD0iZzQ1MTUiIHRyYW5zZm9ybT0icm90YXRlKC0xMzUsODMuMDQ5NTEyLC0zLjEwNzM0MzQpIj4KICA8ZyBpZD0iZzQ1MDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjYxNTIyMjYsLTEuMDI5NDM3MikiPgogICA8cmVjdCB4PSIxMTQiIHk9Ii01OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdH'+
			'Jva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJyZWN0NDQ4NCIgaGVpZ2h0PSIyIiB3aWR0aD0iMTIiLz4KICAgPHJlY3QgeD0iLTY5IiB5PSItMTI2IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFz'+
			'aGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InJlY3Q0NDg0LTUiIGhlaWdodD0iMiIgd2lkdGg9IjEyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiLz4KICA8L2c+CiAgPHJlY3QgeD0iMjEuOTIwMzExIiB5PSItMTI5Ljk4NjMzIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaGVpZ2h0PSIyIiBpZD0icm'+
			'VjdDQ0ODQtOSIgd2lkdGg9IjI0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_location_text_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_location_text_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_location_text_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_location_text_up.onclick=function (e) {
			var list=me.findElements("btn_location_text_up",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("btn_location_text_down",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			var list=me.findElements("location_text_body",false);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 1000ms ease-out 0ms';
				}
				e.ggParameter.rx=0;e.ggParameter.ry=0;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
		}
		me._btn_location_text_up.ggUpdatePosition=function (useTransition) {
		}
		me._location_text_title.appendChild(me._btn_location_text_up);
		me._location_text_container.appendChild(me._location_text_title);
		me.divSkin.appendChild(me._location_text_container);
		el=me._splash_container=document.createElement('div');
		els=me._splash_container__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Splash_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 3em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.00392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._splash_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._splash_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				((player.getViewerSize().width < 960)) || 
				((player.getViewerSize().height < 960))
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._splash_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._splash_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._splash_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 0s';
				if (me._splash_container.ggCurrentLogicStateScaling == 0) {
					me._splash_container.ggParameter.sx = 0.36;
					me._splash_container.ggParameter.sy = 0.36;
					me._splash_container.style[domTransform]=parameterToTransform(me._splash_container.ggParameter);
				}
				else if (me._splash_container.ggCurrentLogicStateScaling == 1) {
					me._splash_container.ggParameter.sx = 0.44;
					me._splash_container.ggParameter.sy = 0.44;
					me._splash_container.style[domTransform]=parameterToTransform(me._splash_container.ggParameter);
				}
				else if (me._splash_container.ggCurrentLogicStateScaling == 2) {
					me._splash_container.ggParameter.sx = 0.5;
					me._splash_container.ggParameter.sy = 0.5;
					me._splash_container.style[domTransform]=parameterToTransform(me._splash_container.ggParameter);
				}
				else if (me._splash_container.ggCurrentLogicStateScaling == 3) {
					me._splash_container.ggParameter.sx = 0.6;
					me._splash_container.ggParameter.sy = 0.6;
					me._splash_container.style[domTransform]=parameterToTransform(me._splash_container.ggParameter);
				}
				else if (me._splash_container.ggCurrentLogicStateScaling == 4) {
					me._splash_container.ggParameter.sx = 0.8;
					me._splash_container.ggParameter.sy = 0.8;
					me._splash_container.style[domTransform]=parameterToTransform(me._splash_container.ggParameter);
				}
				else {
					me._splash_container.ggParameter.sx = 1;
					me._splash_container.ggParameter.sy = 1;
					me._splash_container.style[domTransform]=parameterToTransform(me._splash_container.ggParameter);
				}
			}
		}
		me._splash_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('clickonsplash') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._splash_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._splash_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._splash_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 0s';
				if (me._splash_container.ggCurrentLogicStateVisible == 0) {
					me._splash_container.style.visibility="hidden";
					me._splash_container.ggVisible=false;
				}
				else {
					me._splash_container.style.visibility=(Number(me._splash_container.style.opacity)>0||!me._splash_container.style.opacity)?'inherit':'hidden';
					me._splash_container.ggVisible=true;
				}
			}
		}
		me._splash_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._splash_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._splash_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._splash_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 0s';
				if (me._splash_container.ggCurrentLogicStateAlpha == 0) {
					me._splash_container.style.visibility="hidden";
					me._splash_container.style.opacity=0;
				}
				else {
					me._splash_container.style.visibility=me._splash_container.ggVisible?'inherit':'hidden';
					me._splash_container.style.opacity=1;
				}
			}
		}
		me._splash_container.onclick=function (e) {
			player.setVariableValue('clickonsplash', true);
			player.startAutorotate("0.05","2","2");
		}
		me._splash_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_splash_wires=document.createElement('div');
		els=me._svg_splash_wires__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaW5rc2NhcGU6dmVyc2'+
			'lvbj0iMC45Mi4xIHIxNTM3MSIgaGVpZ2h0PSI2NDAiIHZpZXdCb3g9IjAgMCAxNTg3LjUgMTY5LjMzMzM0IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmc4IiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSI2MDAwIiBzb2RpcG9kaTpkb2NuYW1lPSJzdmdfc3BsYXNoX3dpcmVzLnN2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlb3Bh'+
			'Y2l0eT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6em9vbT0iMC41NDQ1IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iMzIwIiBwYWdlY29sb3I9IiM4MDdkN2QiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpZD0iYmFzZSIgaW5rc2NhcGU6Y3g9IjMwMDAiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxLjAiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpjdX'+
			'JyZW50LWxheWVyPSJsYXllcjEiIHVuaXRzPSJweCIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIiBmaXQtbWFyZ2luLXRvcD0iMCIgZml0LW1hcmdpbi1yaWdodD0iMCI+CiAgPGlua3NjYXBlOmdyaWQgc3BhY2luZ3g9IjIuNjQ1ODMzMyIgc3BhY2luZ3k9IjIuNjQ1ODMzMyIgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDEwIiBkb3R0ZWQ9ImZhbHNlIiBvcmlnaW55PSItNS4wMjAwNzU0IiBlbXBzcGFjaW5nPSIyIiBvcmlnaW54PSItMC41MjUyMzkzNSIvPgogPC9zb2Rp'+
			'cG9kaTpuYW1lZHZpZXc+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpZD0ibGF5ZXIxIiBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLT'+
			'AuNTI1MjM5NDUsLTEyMi42NDY1NykiPgogIDxlbGxpcHNlIHJ4PSI4NC4zOTUyOTQiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjUwOTgwMzk7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NjQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIGlkPSJwYXRoOCIgY3g9Ijc2OC4yNTQwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTUuOTk5OTk5NCkiIGN5PSIyODkuMjAxOSIgcnk9Ijg0LjM5NTI4NyIvPgogIDxyZWN0IHg9IjAuNTI1MjM5NDciIHk9IjEyMi42NDY1NyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1v'+
			'cGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlkPSJyZWN0NDUwMCIgaGVpZ2h0PSIwLjUyOTE2NjciIHdpZHRoPSI3OTMuMjIwODMiLz4KICA8cmVjdCB4PSI3OTQuODA0NDQiIHk9IjI5MS40NTA3NCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0Oj'+
			'Q7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlkPSJyZWN0NDUwMC03IiBoZWlnaHQ9IjAuNTI5MTY2NzYiIHdpZHRoPSI3OTMuMjIwODMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_splash_wires__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SVG_splash_wires";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 640px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 6000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_splash_wires.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_splash_wires.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._splash_container.appendChild(me._svg_splash_wires);
		el=me._start_tour_text=document.createElement('div');
		els=me._start_tour_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Start_Tour_Text";
		el.ggDx=0;
		el.ggDy=180;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 0.8em; font-style: italic;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: 100px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 25px 1px 25px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<p style=\"margin-top:0em\";>Start Tour<\/p>";
		el.appendChild(els);
		me._start_tour_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_tour_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._splash_container.appendChild(me._start_tour_text);
		el=me._splash_wires_svg_logo=document.createElement('div');
		els=me._splash_wires_svg_logo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._splash_wires_svg_logo__img.setAttribute('src',basePath + 'images/splash_wires_svg_logo.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Splash_wires_SVG_logo";
		el.ggDx=0;
		el.ggDy=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._splash_wires_svg_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splash_wires_svg_logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._splash_container.appendChild(me._splash_wires_svg_logo);
		el=me._separator_line=document.createElement('div');
		els=me._separator_line__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Separator_Line";
		el.ggDx=0;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 1em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<hr style=\"border: none; height:2px; color: #fff; background-color:#fff;\">";
		el.appendChild(els);
		me._separator_line.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._separator_line.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._splash_container.appendChild(me._separator_line);
		el=me._welcome_text=document.createElement('div');
		els=me._welcome_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Welcome_Text";
		el.ggDx=0;
		el.ggDy=-150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 210px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 1em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 360px;';
		hs+='height: 210px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._welcome_text.ggUpdateText=function() {
			var hs="<p style=\"font-family: Times New Roman\">"+me.ggUserdata.comment+"<\/p>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._welcome_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._welcome_text.ggUpdateText();
		});
		el.appendChild(els);
		me._welcome_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._welcome_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._splash_container.appendChild(me._welcome_text);
		me.divSkin.appendChild(me._splash_container);
		el=me._timer_for_white_cover=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="timer_for_white_cover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 106px;';
		hs+='position : absolute;';
		hs+='top : 445px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_for_white_cover.ggIsActive=function() {
			return (me._timer_for_white_cover.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_for_white_cover.ggTimestamp) / me._timer_for_white_cover.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_for_white_cover.ggActivate=function () {
			player.setVariableValue('whitecover', player.getVariableValue('whitecover') + Number("1"));
		}
		me._timer_for_white_cover.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_for_white_cover);
		el=me._white_cover_for_first_seconds=document.createElement('div');
		el.ggId="white_cover_for_first_seconds";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._white_cover_for_first_seconds.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._white_cover_for_first_seconds.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('whitecover') >= 2))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._white_cover_for_first_seconds.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._white_cover_for_first_seconds.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._white_cover_for_first_seconds.style[domTransition]='opacity 700ms ease 0ms';
				if (me._white_cover_for_first_seconds.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._white_cover_for_first_seconds.style.opacity == 0.0) { me._white_cover_for_first_seconds.style.visibility="hidden"; } }, 705);
					me._white_cover_for_first_seconds.style.opacity=0;
				}
				else {
					me._white_cover_for_first_seconds.style.visibility=me._white_cover_for_first_seconds.ggVisible?'inherit':'hidden';
					me._white_cover_for_first_seconds.style.opacity=1;
				}
			}
		}
		me._white_cover_for_first_seconds.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._white_cover_for_first_seconds);
		el=me._reset_all_elements_to_desired_state=document.createElement('div');
		el.ggId="reset_all_elements_to_desired_state";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 138px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 510px;';
		hs+='visibility : inherit;';
		hs+='width : 147px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._reset_all_elements_to_desired_state.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._reset_all_elements_to_desired_state.onclick=function (e) {
			me._hide_center_bar.onclick();
			me._btn_off_floor_plans.onclick();
			me._btn_location_text_up.onclick();
			me._btn_close_info_text_box.onclick();
			me._btn_off_pdf.onclick();
			me._btn_off_social_media.onclick();
			me._btn_off_vr_glasses.onclick();
		}
		me._reset_all_elements_to_desired_state.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._reset_all_elements_to_desired_state);
		el=me._logo_container=document.createElement('div');
		el.ggId="logo_Container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._logo_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._logo_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._logo_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._logo_container.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._logo_container.ggCurrentLogicStatePosition == 0) {
					me._logo_container.style.left='0px';
					me._logo_container.style.bottom='30px';
				}
				else if (me._logo_container.ggCurrentLogicStatePosition == 1) {
					me._logo_container.style.left='0px';
					me._logo_container.style.bottom='40px';
				}
				else if (me._logo_container.ggCurrentLogicStatePosition == 2) {
					me._logo_container.style.left='0px';
					me._logo_container.style.bottom='50px';
				}
				else {
					me._logo_container.style.left='0px';
					me._logo_container.style.bottom='60px';
				}
			}
		}
		me._logo_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 320)) || 
				((player.getViewerSize().height < 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 480)) || 
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width < 640)) || 
				((player.getViewerSize().height < 640))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width < 840)) || 
				((player.getViewerSize().height < 840))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo_container.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._logo_container.ggCurrentLogicStateScaling == 0) {
					me._logo_container.ggParameter.sx = 0.5;
					me._logo_container.ggParameter.sy = 0.5;
					me._logo_container.style[domTransform]=parameterToTransform(me._logo_container.ggParameter);
				}
				else if (me._logo_container.ggCurrentLogicStateScaling == 1) {
					me._logo_container.ggParameter.sx = 0.6;
					me._logo_container.ggParameter.sy = 0.6;
					me._logo_container.style[domTransform]=parameterToTransform(me._logo_container.ggParameter);
				}
				else if (me._logo_container.ggCurrentLogicStateScaling == 2) {
					me._logo_container.ggParameter.sx = 0.75;
					me._logo_container.ggParameter.sy = 0.75;
					me._logo_container.style[domTransform]=parameterToTransform(me._logo_container.ggParameter);
				}
				else if (me._logo_container.ggCurrentLogicStateScaling == 3) {
					me._logo_container.ggParameter.sx = 0.85;
					me._logo_container.ggParameter.sy = 0.85;
					me._logo_container.style[domTransform]=parameterToTransform(me._logo_container.ggParameter);
				}
				else {
					me._logo_container.ggParameter.sx = 1;
					me._logo_container.ggParameter.sy = 1;
					me._logo_container.style[domTransform]=parameterToTransform(me._logo_container.ggParameter);
				}
			}
		}
		me._logo_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('clickonsplash') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._logo_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._logo_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._logo_container.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._logo_container.ggCurrentLogicStateVisible == 0) {
					me._logo_container.style.visibility=(Number(me._logo_container.style.opacity)>0||!me._logo_container.style.opacity)?'inherit':'hidden';
					me._logo_container.ggVisible=true;
				}
				else {
					me._logo_container.style.visibility="hidden";
					me._logo_container.ggVisible=false;
				}
			}
		}
		me._logo_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('clickonsplash') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._logo_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._logo_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._logo_container.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._logo_container.ggCurrentLogicStateAlpha == 0) {
					me._logo_container.style.visibility=me._logo_container.ggVisible?'inherit':'hidden';
					me._logo_container.style.opacity=0.5;
				}
				else {
					setTimeout(function() { if (me._logo_container.style.opacity == 0.0) { me._logo_container.style.visibility="hidden"; } }, 1505);
					me._logo_container.style.opacity=0;
				}
			}
		}
		me._logo_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._splash_wires_svg=document.createElement('div');
		els=me._splash_wires_svg__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._splash_wires_svg__img.setAttribute('src',basePath + 'images/splash_wires_svg.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Splash_wires_SVG";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._splash_wires_svg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splash_wires_svg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().height < 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._splash_wires_svg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._splash_wires_svg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._splash_wires_svg.style[domTransition]='';
				if (me._splash_wires_svg.ggCurrentLogicStateVisible == 0) {
					me._splash_wires_svg.style.visibility="hidden";
					me._splash_wires_svg.ggVisible=false;
				}
				else {
					me._splash_wires_svg.style.visibility=(Number(me._splash_wires_svg.style.opacity)>0||!me._splash_wires_svg.style.opacity)?'inherit':'hidden';
					me._splash_wires_svg.ggVisible=true;
				}
			}
		}
		me._splash_wires_svg.onclick=function (e) {
			player.openUrl("http:\/\/skins.360panotours.com","_blank");
		}
		me._splash_wires_svg.ggUpdatePosition=function (useTransition) {
		}
		me._logo_container.appendChild(me._splash_wires_svg);
		me.divSkin.appendChild(me._logo_container);
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._dormitorio_principal);
		me._dormitorio_principal__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._dormitorio_principal__normal.style.visibility='inherit';
		me._dormitorio_principal__normal.style.left='0px';
		me._dormitorio_principal__normal.style.top='0px';
		me._dormitorio_principal.ggMarkerNormal=me._dormitorio_principal__normal;
		me._dormitorio_principal.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._dormitorio_principal);
		me._dormitorio_principal__active= clonedActiveElement._marker_for_hotspot_active;
		me._dormitorio_principal__active.style.visibility='hidden';
		me._dormitorio_principal__active.style.left='0px';
		me._dormitorio_principal__active.style.top='0px';
		me._dormitorio_principal.ggMarkerActive=me._dormitorio_principal__active;
		me._dormitorio_principal.ggMarkerInstances.push(clonedActiveElement);
		if (me._dormitorio_principal.firstChild) {
			me._dormitorio_principal.insertBefore(me._dormitorio_principal__active,me._dormitorio_principal.firstChild);
		} else {
			me._dormitorio_principal.appendChild(me._dormitorio_principal__active);
		}
		if (me._dormitorio_principal.firstChild) {
			me._dormitorio_principal.insertBefore(me._dormitorio_principal__normal,me._dormitorio_principal.firstChild);
		} else {
			me._dormitorio_principal.appendChild(me._dormitorio_principal__normal);
		}
		for (var i = 0; i < me._dormitorio_principal.childNodes.length; i++) {
			me._dormitorio_principal.ggMarkerInstances.push(me._dormitorio_principal.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._bao_2do);
		me._bao_2do__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._bao_2do__normal.style.visibility='inherit';
		me._bao_2do__normal.style.left='0px';
		me._bao_2do__normal.style.top='0px';
		me._bao_2do.ggMarkerNormal=me._bao_2do__normal;
		me._bao_2do.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._bao_2do);
		me._bao_2do__active= clonedActiveElement._marker_for_hotspot_active;
		me._bao_2do__active.style.visibility='hidden';
		me._bao_2do__active.style.left='0px';
		me._bao_2do__active.style.top='0px';
		me._bao_2do.ggMarkerActive=me._bao_2do__active;
		me._bao_2do.ggMarkerInstances.push(clonedActiveElement);
		if (me._bao_2do.firstChild) {
			me._bao_2do.insertBefore(me._bao_2do__active,me._bao_2do.firstChild);
		} else {
			me._bao_2do.appendChild(me._bao_2do__active);
		}
		if (me._bao_2do.firstChild) {
			me._bao_2do.insertBefore(me._bao_2do__normal,me._bao_2do.firstChild);
		} else {
			me._bao_2do.appendChild(me._bao_2do__normal);
		}
		for (var i = 0; i < me._bao_2do.childNodes.length; i++) {
			me._bao_2do.ggMarkerInstances.push(me._bao_2do.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._dormitorio_1);
		me._dormitorio_1__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._dormitorio_1__normal.style.visibility='inherit';
		me._dormitorio_1__normal.style.left='0px';
		me._dormitorio_1__normal.style.top='0px';
		me._dormitorio_1.ggMarkerNormal=me._dormitorio_1__normal;
		me._dormitorio_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._dormitorio_1);
		me._dormitorio_1__active= clonedActiveElement._marker_for_hotspot_active;
		me._dormitorio_1__active.style.visibility='hidden';
		me._dormitorio_1__active.style.left='0px';
		me._dormitorio_1__active.style.top='0px';
		me._dormitorio_1.ggMarkerActive=me._dormitorio_1__active;
		me._dormitorio_1.ggMarkerInstances.push(clonedActiveElement);
		if (me._dormitorio_1.firstChild) {
			me._dormitorio_1.insertBefore(me._dormitorio_1__active,me._dormitorio_1.firstChild);
		} else {
			me._dormitorio_1.appendChild(me._dormitorio_1__active);
		}
		if (me._dormitorio_1.firstChild) {
			me._dormitorio_1.insertBefore(me._dormitorio_1__normal,me._dormitorio_1.firstChild);
		} else {
			me._dormitorio_1.appendChild(me._dormitorio_1__normal);
		}
		for (var i = 0; i < me._dormitorio_1.childNodes.length; i++) {
			me._dormitorio_1.ggMarkerInstances.push(me._dormitorio_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._dormitorio_2);
		me._dormitorio_2__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._dormitorio_2__normal.style.visibility='inherit';
		me._dormitorio_2__normal.style.left='0px';
		me._dormitorio_2__normal.style.top='0px';
		me._dormitorio_2.ggMarkerNormal=me._dormitorio_2__normal;
		me._dormitorio_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._dormitorio_2);
		me._dormitorio_2__active= clonedActiveElement._marker_for_hotspot_active;
		me._dormitorio_2__active.style.visibility='hidden';
		me._dormitorio_2__active.style.left='0px';
		me._dormitorio_2__active.style.top='0px';
		me._dormitorio_2.ggMarkerActive=me._dormitorio_2__active;
		me._dormitorio_2.ggMarkerInstances.push(clonedActiveElement);
		if (me._dormitorio_2.firstChild) {
			me._dormitorio_2.insertBefore(me._dormitorio_2__active,me._dormitorio_2.firstChild);
		} else {
			me._dormitorio_2.appendChild(me._dormitorio_2__active);
		}
		if (me._dormitorio_2.firstChild) {
			me._dormitorio_2.insertBefore(me._dormitorio_2__normal,me._dormitorio_2.firstChild);
		} else {
			me._dormitorio_2.appendChild(me._dormitorio_2__normal);
		}
		for (var i = 0; i < me._dormitorio_2.childNodes.length; i++) {
			me._dormitorio_2.ggMarkerInstances.push(me._dormitorio_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._bao_p);
		me._bao_p__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._bao_p__normal.style.visibility='inherit';
		me._bao_p__normal.style.left='0px';
		me._bao_p__normal.style.top='0px';
		me._bao_p.ggMarkerNormal=me._bao_p__normal;
		me._bao_p.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._bao_p);
		me._bao_p__active= clonedActiveElement._marker_for_hotspot_active;
		me._bao_p__active.style.visibility='hidden';
		me._bao_p__active.style.left='0px';
		me._bao_p__active.style.top='0px';
		me._bao_p.ggMarkerActive=me._bao_p__active;
		me._bao_p.ggMarkerInstances.push(clonedActiveElement);
		if (me._bao_p.firstChild) {
			me._bao_p.insertBefore(me._bao_p__active,me._bao_p.firstChild);
		} else {
			me._bao_p.appendChild(me._bao_p__active);
		}
		if (me._bao_p.firstChild) {
			me._bao_p.insertBefore(me._bao_p__normal,me._bao_p.firstChild);
		} else {
			me._bao_p.appendChild(me._bao_p__normal);
		}
		for (var i = 0; i < me._bao_p.childNodes.length; i++) {
			me._bao_p.ggMarkerInstances.push(me._bao_p.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._sala_familiar);
		me._sala_familiar__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._sala_familiar__normal.style.visibility='inherit';
		me._sala_familiar__normal.style.left='0px';
		me._sala_familiar__normal.style.top='0px';
		me._sala_familiar.ggMarkerNormal=me._sala_familiar__normal;
		me._sala_familiar.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._sala_familiar);
		me._sala_familiar__active= clonedActiveElement._marker_for_hotspot_active;
		me._sala_familiar__active.style.visibility='hidden';
		me._sala_familiar__active.style.left='0px';
		me._sala_familiar__active.style.top='0px';
		me._sala_familiar.ggMarkerActive=me._sala_familiar__active;
		me._sala_familiar.ggMarkerInstances.push(clonedActiveElement);
		if (me._sala_familiar.firstChild) {
			me._sala_familiar.insertBefore(me._sala_familiar__active,me._sala_familiar.firstChild);
		} else {
			me._sala_familiar.appendChild(me._sala_familiar__active);
		}
		if (me._sala_familiar.firstChild) {
			me._sala_familiar.insertBefore(me._sala_familiar__normal,me._sala_familiar.firstChild);
		} else {
			me._sala_familiar.appendChild(me._sala_familiar__normal);
		}
		for (var i = 0; i < me._sala_familiar.childNodes.length; i++) {
			me._sala_familiar.ggMarkerInstances.push(me._sala_familiar.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._lavanderia);
		me._lavanderia__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._lavanderia__normal.style.visibility='inherit';
		me._lavanderia__normal.style.left='0px';
		me._lavanderia__normal.style.top='0px';
		me._lavanderia.ggMarkerNormal=me._lavanderia__normal;
		me._lavanderia.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._lavanderia);
		me._lavanderia__active= clonedActiveElement._marker_for_hotspot_active;
		me._lavanderia__active.style.visibility='hidden';
		me._lavanderia__active.style.left='0px';
		me._lavanderia__active.style.top='0px';
		me._lavanderia.ggMarkerActive=me._lavanderia__active;
		me._lavanderia.ggMarkerInstances.push(clonedActiveElement);
		if (me._lavanderia.firstChild) {
			me._lavanderia.insertBefore(me._lavanderia__active,me._lavanderia.firstChild);
		} else {
			me._lavanderia.appendChild(me._lavanderia__active);
		}
		if (me._lavanderia.firstChild) {
			me._lavanderia.insertBefore(me._lavanderia__normal,me._lavanderia.firstChild);
		} else {
			me._lavanderia.appendChild(me._lavanderia__normal);
		}
		for (var i = 0; i < me._lavanderia.childNodes.length; i++) {
			me._lavanderia.ggMarkerInstances.push(me._lavanderia.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._cocina);
		me._cocina__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._cocina__normal.style.visibility='inherit';
		me._cocina__normal.style.left='0px';
		me._cocina__normal.style.top='0px';
		me._cocina.ggMarkerNormal=me._cocina__normal;
		me._cocina.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._cocina);
		me._cocina__active= clonedActiveElement._marker_for_hotspot_active;
		me._cocina__active.style.visibility='hidden';
		me._cocina__active.style.left='0px';
		me._cocina__active.style.top='0px';
		me._cocina.ggMarkerActive=me._cocina__active;
		me._cocina.ggMarkerInstances.push(clonedActiveElement);
		if (me._cocina.firstChild) {
			me._cocina.insertBefore(me._cocina__active,me._cocina.firstChild);
		} else {
			me._cocina.appendChild(me._cocina__active);
		}
		if (me._cocina.firstChild) {
			me._cocina.insertBefore(me._cocina__normal,me._cocina.firstChild);
		} else {
			me._cocina.appendChild(me._cocina__normal);
		}
		for (var i = 0; i < me._cocina.childNodes.length; i++) {
			me._cocina.ggMarkerInstances.push(me._cocina.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._jardin);
		me._jardin__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._jardin__normal.style.visibility='inherit';
		me._jardin__normal.style.left='0px';
		me._jardin__normal.style.top='0px';
		me._jardin.ggMarkerNormal=me._jardin__normal;
		me._jardin.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._jardin);
		me._jardin__active= clonedActiveElement._marker_for_hotspot_active;
		me._jardin__active.style.visibility='hidden';
		me._jardin__active.style.left='0px';
		me._jardin__active.style.top='0px';
		me._jardin.ggMarkerActive=me._jardin__active;
		me._jardin.ggMarkerInstances.push(clonedActiveElement);
		if (me._jardin.firstChild) {
			me._jardin.insertBefore(me._jardin__active,me._jardin.firstChild);
		} else {
			me._jardin.appendChild(me._jardin__active);
		}
		if (me._jardin.firstChild) {
			me._jardin.insertBefore(me._jardin__normal,me._jardin.firstChild);
		} else {
			me._jardin.appendChild(me._jardin__normal);
		}
		for (var i = 0; i < me._jardin.childNodes.length; i++) {
			me._jardin.ggMarkerInstances.push(me._jardin.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._comedor);
		me._comedor__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._comedor__normal.style.visibility='inherit';
		me._comedor__normal.style.left='0px';
		me._comedor__normal.style.top='0px';
		me._comedor.ggMarkerNormal=me._comedor__normal;
		me._comedor.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._comedor);
		me._comedor__active= clonedActiveElement._marker_for_hotspot_active;
		me._comedor__active.style.visibility='hidden';
		me._comedor__active.style.left='0px';
		me._comedor__active.style.top='0px';
		me._comedor.ggMarkerActive=me._comedor__active;
		me._comedor.ggMarkerInstances.push(clonedActiveElement);
		if (me._comedor.firstChild) {
			me._comedor.insertBefore(me._comedor__active,me._comedor.firstChild);
		} else {
			me._comedor.appendChild(me._comedor__active);
		}
		if (me._comedor.firstChild) {
			me._comedor.insertBefore(me._comedor__normal,me._comedor.firstChild);
		} else {
			me._comedor.appendChild(me._comedor__normal);
		}
		for (var i = 0; i < me._comedor.childNodes.length; i++) {
			me._comedor.ggMarkerInstances.push(me._comedor.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._gradas);
		me._gradas__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._gradas__normal.style.visibility='inherit';
		me._gradas__normal.style.left='0px';
		me._gradas__normal.style.top='0px';
		me._gradas.ggMarkerNormal=me._gradas__normal;
		me._gradas.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._gradas);
		me._gradas__active= clonedActiveElement._marker_for_hotspot_active;
		me._gradas__active.style.visibility='hidden';
		me._gradas__active.style.left='0px';
		me._gradas__active.style.top='0px';
		me._gradas.ggMarkerActive=me._gradas__active;
		me._gradas.ggMarkerInstances.push(clonedActiveElement);
		if (me._gradas.firstChild) {
			me._gradas.insertBefore(me._gradas__active,me._gradas.firstChild);
		} else {
			me._gradas.appendChild(me._gradas__active);
		}
		if (me._gradas.firstChild) {
			me._gradas.insertBefore(me._gradas__normal,me._gradas.firstChild);
		} else {
			me._gradas.appendChild(me._gradas__normal);
		}
		for (var i = 0; i < me._gradas.childNodes.length; i++) {
			me._gradas.ggMarkerInstances.push(me._gradas.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._sala);
		me._sala__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._sala__normal.style.visibility='inherit';
		me._sala__normal.style.left='0px';
		me._sala__normal.style.top='0px';
		me._sala.ggMarkerNormal=me._sala__normal;
		me._sala.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._sala);
		me._sala__active= clonedActiveElement._marker_for_hotspot_active;
		me._sala__active.style.visibility='hidden';
		me._sala__active.style.left='0px';
		me._sala__active.style.top='0px';
		me._sala.ggMarkerActive=me._sala__active;
		me._sala.ggMarkerInstances.push(clonedActiveElement);
		if (me._sala.firstChild) {
			me._sala.insertBefore(me._sala__active,me._sala.firstChild);
		} else {
			me._sala.appendChild(me._sala__active);
		}
		if (me._sala.firstChild) {
			me._sala.insertBefore(me._sala__normal,me._sala.firstChild);
		} else {
			me._sala.appendChild(me._sala__normal);
		}
		for (var i = 0; i < me._sala.childNodes.length; i++) {
			me._sala.ggMarkerInstances.push(me._sala.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._garage);
		me._garage__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._garage__normal.style.visibility='inherit';
		me._garage__normal.style.left='0px';
		me._garage__normal.style.top='0px';
		me._garage.ggMarkerNormal=me._garage__normal;
		me._garage.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._garage);
		me._garage__active= clonedActiveElement._marker_for_hotspot_active;
		me._garage__active.style.visibility='hidden';
		me._garage__active.style.left='0px';
		me._garage__active.style.top='0px';
		me._garage.ggMarkerActive=me._garage__active;
		me._garage.ggMarkerInstances.push(clonedActiveElement);
		if (me._garage.firstChild) {
			me._garage.insertBefore(me._garage__active,me._garage.firstChild);
		} else {
			me._garage.appendChild(me._garage__active);
		}
		if (me._garage.firstChild) {
			me._garage.insertBefore(me._garage__normal,me._garage.firstChild);
		} else {
			me._garage.appendChild(me._garage__normal);
		}
		for (var i = 0; i < me._garage.childNodes.length; i++) {
			me._garage.ggMarkerInstances.push(me._garage.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._gradas_2);
		me._gradas_2__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._gradas_2__normal.style.visibility='inherit';
		me._gradas_2__normal.style.left='0px';
		me._gradas_2__normal.style.top='0px';
		me._gradas_2.ggMarkerNormal=me._gradas_2__normal;
		me._gradas_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._gradas_2);
		me._gradas_2__active= clonedActiveElement._marker_for_hotspot_active;
		me._gradas_2__active.style.visibility='hidden';
		me._gradas_2__active.style.left='0px';
		me._gradas_2__active.style.top='0px';
		me._gradas_2.ggMarkerActive=me._gradas_2__active;
		me._gradas_2.ggMarkerInstances.push(clonedActiveElement);
		if (me._gradas_2.firstChild) {
			me._gradas_2.insertBefore(me._gradas_2__active,me._gradas_2.firstChild);
		} else {
			me._gradas_2.appendChild(me._gradas_2__active);
		}
		if (me._gradas_2.firstChild) {
			me._gradas_2.insertBefore(me._gradas_2__normal,me._gradas_2.firstChild);
		} else {
			me._gradas_2.appendChild(me._gradas_2__normal);
		}
		for (var i = 0; i < me._gradas_2.childNodes.length; i++) {
			me._gradas_2.ggMarkerInstances.push(me._gradas_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._ingreso);
		me._ingreso__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._ingreso__normal.style.visibility='inherit';
		me._ingreso__normal.style.left='0px';
		me._ingreso__normal.style.top='0px';
		me._ingreso.ggMarkerNormal=me._ingreso__normal;
		me._ingreso.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._ingreso);
		me._ingreso__active= clonedActiveElement._marker_for_hotspot_active;
		me._ingreso__active.style.visibility='hidden';
		me._ingreso__active.style.left='0px';
		me._ingreso__active.style.top='0px';
		me._ingreso.ggMarkerActive=me._ingreso__active;
		me._ingreso.ggMarkerInstances.push(clonedActiveElement);
		if (me._ingreso.firstChild) {
			me._ingreso.insertBefore(me._ingreso__active,me._ingreso.firstChild);
		} else {
			me._ingreso.appendChild(me._ingreso__active);
		}
		if (me._ingreso.firstChild) {
			me._ingreso.insertBefore(me._ingreso__normal,me._ingreso.firstChild);
		} else {
			me._ingreso.appendChild(me._ingreso__normal);
		}
		for (var i = 0; i < me._ingreso.childNodes.length; i++) {
			me._ingreso.ggMarkerInstances.push(me._ingreso.childNodes[i]);
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='trigger-click-change-to-level2-selector') {
			me._changetolevel2_selector.onclick();
		}
		if (id=='trigger-click-change-to-level1-selector') {
			me._changetolevel1_selector.onclick();
		}
		if (id=='location1') {
			me._location_text_body.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_hs_changenode = function(){
		if(hotspotTemplates['hs']) {
			var i;
			for(i = 0; i < hotspotTemplates['hs'].length; i++) {
				if (hotspotTemplates['hs'][i]._hs.logicBlock_visible) {
					hotspotTemplates['hs'][i]._hs.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_varchanged_clickonsplash = function(){
		if(hotspotTemplates['hs']) {
			var i;
			for(i = 0; i < hotspotTemplates['hs'].length; i++) {
				if (hotspotTemplates['hs'][i]._hs.logicBlock_visible) {
					hotspotTemplates['hs'][i]._hs.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._compass_handle.ggParameter) {
			hs+=parameterToTransform(me._compass_handle.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compass_handle.style[domTransform]=hs;
		var hs='';
		if (me._mh_radar.ggParameter) {
			hs+=parameterToTransform(me._mh_radar.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._mh_radar.style[domTransform]=hs;
		if (me.elementMouseDown['rotate_up']) {
			player.changeTiltLog(0.3,true);
		}
		if (me.elementMouseDown['rotate_down']) {
			player.changeTiltLog(-0.3,true);
		}
		if (me.elementMouseDown['rotate_right']) {
			player.changePanLog(-0.3,true);
		}
		if (me.elementMouseDown['rotate_left']) {
			player.changePanLog(0.3,true);
		}
		if (me._timer_for_white_cover.ggLastIsActive!=me._timer_for_white_cover.ggIsActive()) {
			me._timer_for_white_cover.ggLastIsActive=me._timer_for_white_cover.ggIsActive();
			if (me._timer_for_white_cover.ggLastIsActive) {
				player.setVariableValue('whitecover', player.getVariableValue('whitecover') + Number("1"));
			} else {
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hs(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hs=document.createElement('div');
		el.ggId="hs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 104px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hs.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('clickonsplash') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs.style[domTransition]='';
				if (me._hs.ggCurrentLogicStateVisible == 0) {
					me._hs.style.visibility=(Number(me._hs.style.opacity)>0||!me._hs.style.opacity)?'inherit':'hidden';
					me._hs.ggVisible=true;
				}
				else {
					me._hs.style.visibility="hidden";
					me._hs.ggVisible=false;
				}
			}
		}
		me._hs.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hs.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hs.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tooltip.style[domTransition]='none';
			me._tooltip.ggParameter.sx=1;me._tooltip.ggParameter.sy=1;
			me._tooltip.style[domTransform]=parameterToTransform(me._tooltip.ggParameter);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hs.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tooltip.style[domTransition]='none';
			me._tooltip.ggParameter.sx=0;me._tooltip.ggParameter.sy=0;
			me._tooltip.style[domTransform]=parameterToTransform(me._tooltip.ggParameter);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hs.ggUpdatePosition=function (useTransition) {
		}
		el=me._animated_rings_hotspot=document.createElement('div');
		els=me._animated_rings_hotspot__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgd2lkdGg9IjQ0IiBzdHJva2U9IiM5YzAiPgogPGcgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgPGNpcmNsZSByPSI1IiBjeD0iMjIiIGN5PSIyMiIgc3Ryb2tlPSIjZWVlIj4KICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjhzIiBrZXlUaW1lcz0iMDsgMSIgdmFsdWVzPSIxOyAyMCIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz'+
			'0iMC4xNjUsIDAuODQsIDAuNDQsIDEiLz4KICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS44cyIga2V5VGltZXM9IjA7IDEiIHZhbHVlcz0iMTsgMCIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgcj0iMTAiIGN4PSIyMiIgY3k9IjIyIiBzdHJva2U9IiMxMTEiPgogICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iLTAuOXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuOHMi'+
			'IGtleVRpbWVzPSIwOyAxIiB2YWx1ZXM9IjE7IDIwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjE2NSwgMC44NCwgMC40NCwgMSIvPgogICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utb3BhY2l0eSIgYmVnaW49Ii0wLjlzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjhzIiBrZXlUaW1lcz0iMDsgMSIgdmFsdWVzPSIxOyAwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIi8+CiAgPC9jaXJjbGU+CiA8L2c+Cjwvc3ZnPgo=';
		me._animated_rings_hotspot__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="animated_rings_hotspot";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._animated_rings_hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._animated_rings_hotspot.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hs.appendChild(me._animated_rings_hotspot);
		el=me._tooltip=document.createElement('div');
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -98px;';
		hs+='position : absolute;';
		hs+='top : -67px;';
		hs+='visibility : inherit;';
		hs+='width : 201px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip_bg=document.createElement('div');
		els=me._tooltip_bg__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #b0b0b0;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_bg.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((198-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._tooltip.appendChild(me._tooltip_bg);
		el=me._tooltip_face=document.createElement('div');
		els=me._tooltip_face__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_face";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip_face.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_face.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((198-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._tooltip.appendChild(me._tooltip_face);
		me._hs.appendChild(me._tooltip);
		me.__div = me._hs;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'hs';
			hsinst = new SkinHotspotClass_hs(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hs_changenode();;
			me.callChildLogicBlocksHotspot_hs_varchanged_clickonsplash();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['hs']) {
			var i;
			for(i = 0; i < hotspotTemplates['hs'].length; i++) {
				hotspotTemplates['hs'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_marker_for_hotspot_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_for_hotspot_active=document.createElement('div');
		el.ggId="marker_for_hotspot_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 69px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_for_hotspot_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_for_hotspot_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_for_hotspot_active_image=document.createElement('div');
		el.ggId="marker_for_hotspot_active_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid rgba(255,255,255,0.501961);';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_for_hotspot_active_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_for_hotspot_active_image.ggUpdatePosition=function (useTransition) {
		}
		me._marker_for_hotspot_active.appendChild(me._marker_for_hotspot_active_image);
	};
	function SkinElement_marker_for_hotspot_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_for_hotspot_normal=document.createElement('div');
		el.ggId="marker_for_hotspot_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 41px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_for_hotspot_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_for_hotspot_normal.ggUpdatePosition=function (useTransition) {
		}
		el=me._click_area=document.createElement('div');
		el.ggId="click_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._click_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._click_area.ggUpdatePosition=function (useTransition) {
		}
		me._marker_for_hotspot_normal.appendChild(me._click_area);
		el=me._marker_for_hotspot_normal_image=document.createElement('div');
		el.ggId="marker_for_hotspot_normal_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid rgba(255,255,255,0.501961);';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_for_hotspot_normal_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_for_hotspot_normal_image.ggUpdatePosition=function (useTransition) {
		}
		me._marker_for_hotspot_normal.appendChild(me._marker_for_hotspot_normal_image);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._floor_plans_container.logicBlock_scaling();
	me._center_right_bar_open_close.logicBlock_scaling();
	me._center_right_bar_open_close.logicBlock_visible();
	me._bottom_background_bar.logicBlock_scaling();
	me._bottom_buttons_bar_container.logicBlock_scaling();
	me._bottom_buttons_bar_container.logicBlock_alpha();
	me._location_text_container.logicBlock_scaling();
	me._splash_container.logicBlock_scaling();
	me._logo_container.logicBlock_position();
	me._logo_container.logicBlock_scaling();
	me._splash_wires_svg.logicBlock_visible();
	me._floor_plans_container.logicBlock_alpha();
	me._level2_floorplan.logicBlock_visible();
	me._level1_floorplan.logicBlock_visible();
	me._dormitorio_principal.logicBlock_visible();
	me._bao_2do.logicBlock_visible();
	me._dormitorio_1.logicBlock_visible();
	me._dormitorio_2.logicBlock_visible();
	me._bao_p.logicBlock_visible();
	me._sala_familiar.logicBlock_visible();
	me._lavanderia.logicBlock_visible();
	me._cocina.logicBlock_visible();
	me._jardin.logicBlock_visible();
	me._comedor.logicBlock_visible();
	me._gradas.logicBlock_visible();
	me._sala.logicBlock_visible();
	me._garage.logicBlock_visible();
	me._gradas_2.logicBlock_visible();
	me._ingreso.logicBlock_visible();
	me._level2_indicator.logicBlock_visible();
	me._level1_indicator.logicBlock_visible();
	me._center_right_bar_open_close.logicBlock_alpha();
	me._bottom_background_bar.logicBlock_alpha();
	me._location_text_container.logicBlock_alpha();
	me._splash_container.logicBlock_visible();
	me._splash_container.logicBlock_alpha();
	me._white_cover_for_first_seconds.logicBlock_alpha();
	me._logo_container.logicBlock_visible();
	me._logo_container.logicBlock_alpha();
	me._floor_plan_help_on_off.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._floor_plans_container.logicBlock_scaling();me._center_right_bar_open_close.logicBlock_scaling();me._center_right_bar_open_close.logicBlock_visible();me._bottom_background_bar.logicBlock_scaling();me._bottom_buttons_bar_container.logicBlock_scaling();me._bottom_buttons_bar_container.logicBlock_alpha();me._location_text_container.logicBlock_scaling();me._splash_container.logicBlock_scaling();me._logo_container.logicBlock_position();me._logo_container.logicBlock_scaling();me._splash_wires_svg.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._floor_plans_container.logicBlock_alpha();me._level2_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._gradas.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._gradas_2.logicBlock_visible();me._ingreso.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible();me._center_right_bar_open_close.logicBlock_alpha();me._bottom_background_bar.logicBlock_alpha();me._bottom_buttons_bar_container.logicBlock_alpha();me._location_text_container.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._white_cover_for_first_seconds.logicBlock_alpha();me._logo_container.logicBlock_visible();me._logo_container.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._floor_plan_help_on_off.logicBlock_visible(); });
	player.addListener('varchanged_clickonsplash', function(args) { me._floor_plans_container.logicBlock_alpha();me._center_right_bar_open_close.logicBlock_alpha();me._bottom_background_bar.logicBlock_alpha();me._bottom_buttons_bar_container.logicBlock_alpha();me._location_text_container.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._logo_container.logicBlock_visible();me._logo_container.logicBlock_alpha(); });
	player.addListener('varchanged_whitecover', function(args) { me._white_cover_for_first_seconds.logicBlock_alpha(); });
	player.addListener('varchanged_levelnumber', function(args) { me._level2_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._gradas.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._gradas_2.logicBlock_visible();me._ingreso.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_hs_changenode(); });
	player.addListener('varchanged_clickonsplash', function(args) { me.callChildLogicBlocksHotspot_hs_varchanged_clickonsplash(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		if (!player.getLockedKeyboard()) {
			switch(key) {
				case 49:
					player.setVariableValue('levelnumber', Number("1"));
me._mh_radar.style[domTransition]='none';
me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
player.openNext("{node1}","");
					break;
				case 50:
					player.setVariableValue('levelnumber', Number("2"));
me._mh_radar.style[domTransition]='none';
me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
player.openNext("{node4}","");
					break;
			}
		}
	});
	me.skinTimerEvent();
};