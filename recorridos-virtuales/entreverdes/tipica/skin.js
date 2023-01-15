// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: Presentarq.ggsk
// Generated 2023-01-14T23:10:18

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
		hs+='height : 416px;';
		hs+='position : absolute;';
		hs+='right : 53px;';
		hs+='top : 3px;';
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
		hs+='height : 250px;';
		hs+='position : absolute;';
		hs+='right : -42px;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 248px;';
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
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
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
		hs+='left : 213px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9oZWxwLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxOC40MyIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZXJjb2'+
			'xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iNDAuOTM4Njg3IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdy'+
			'aWQgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBjeT0iNTAiIHI9IjM4IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5Ii8+CiA8cGF0aCBkPSJNID'+
			'UwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1'+
			'MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQyIFoiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW'+
			'50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNo'+
			'aWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZT'+
			'pub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9'+
			'InBhdGg0NDk0Ii8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS'+
			'45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcG'+
			'FjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIGlkPSJ0ZXh0NDU2OCI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBhcmlhLWxhYmVsPSI/IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNoYWxrZHVzdGVyOy1pbmtzY2FwZS1m'+
			'b250LXNwZWNpZmljYXRpb246J0NoYWxrZHVzdGVyLCBOb3JtYWwnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjYwMzQxMTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InRleHQ0NTA3IiB0cmFuc2Zvcm09Im1hdHJpeC'+
			'gxLjY1NzQyMjEsMCwwLDEuNjU3MDY3NCw2Mi4zOTE4MiwxMi40NDQxMjEpIj4KICA8cGF0aCBkPSJtIC0xNy4yNDIxODcsMTYuMDQyOTY5IHEgMCwtMS44NTU0NjkgMS4xOTE0MDYsLTMuNzUgMS4xOTE0MDYsLTEuOTE0MDYzIDMuNDc2NTYyLC0zLjE2NDA2MjcgMi4yODUxNTYsLTEuMjUwMDAwMSA1LjMzMjAzMTUsLTEuMjUwMDAwMSAyLjgzMjAzMTMsMCA1LDEuMDU0Njg3NiAyLjE2Nzk2ODc1LDEuMDM1MTU2MiAzLjMzOTg0MzcsMi44MzIwMzEyIDEuMTkxNDA2MywxLjc5Njg3NSAxLjE5MTQwNjMsMy45MDYyNSAwLDEuNjYwMTU2IC0wLjY4MzU5MzgsMi45MTAxNTYgLTAuNjY0MDYyNDUsMS4y'+
			'NSAtMS42MDE1NjI0NSwyLjE2Nzk2OSAtMC45MTc5Njg3NSwwLjg5ODQzNyAtMy4zMjAzMTI1NSwzLjA0Njg3NSAtMC42NjQwNjI1LDAuNjA1NDY5IC0xLjA3NDIxODcsMS4wNzQyMTkgLTAuMzkwNjI1LDAuNDQ5MjE4IC0wLjU4NTkzNzUsMC44Mzk4NDMgLTAuMTk1MzEyNSwwLjM3MTA5NCAtMC4zMTI1LDAuNzYxNzE5IC0wLjA5NzY1NiwwLjM3MTA5NCAtMC4zMTI1LDEuMzI4MTI1IC0wLjM3MTA5MzcsMi4wMzEyNSAtMi4zMjQyMTg3LDIuMDMxMjUgLTEuMDE1NjI1MSwwIC0xLjcxODc1MDEsLTAuNjY0MDYyIC0wLjY4MzU5MzcsLTAuNjY0MDYzIC0wLjY4MzU5MzcsLTEuOTcyNjU3IDAsLTEuNj'+
			'QwNjI1IDAuNTA3ODEyNSwtMi44MzIwMzEgMC41MDc4MTI1LC0xLjIxMDkzNyAxLjM0NzY1NjIsLTIuMTA5Mzc1IDAuODM5ODQzOCwtMC45MTc5NjkgMi4yNjU2MjUxLC0yLjE2Nzk2OSAxLjI1LC0xLjA5Mzc1IDEuNzk2ODc1LC0xLjY0MDYyNSAwLjU2NjQwNjIsLTAuNTY2NDA2IDAuOTM3NDk5OSwtMS4yNSAwLjM5MDYyNSwtMC42ODM1OTMgMC4zOTA2MjUsLTEuNDg0Mzc0IDAsLTEuNTYyNSAtMS4xNzE4NzQ5LC0yLjYzNjcxOSBRIC01LjQwNjI1LDEyIC03LjI0MjE4NzUsMTIgcSAtMi4xNDg0Mzc1LDAgLTMuMTY0MDYyNSwxLjA5Mzc1IC0xLjAxNTYyNSwxLjA3NDIxOSAtMS43MTg3NSwzLjE4'+
			'MzU5NCAtMC42NjQwNjMsMi4yMDcwMzEgLTIuNTE5NTMxLDIuMjA3MDMxIC0xLjA5Mzc1LDAgLTEuODU1NDY5LC0wLjc2MTcxOSAtMC43NDIxODcsLTAuNzgxMjUgLTAuNzQyMTg3LC0xLjY3OTY4NyB6IG0gOS41MzEyNDk1LDIxLjQwNjI1IHEgLTEuMTkxNDA2MywwIC0yLjA4OTg0MzgsLTAuNzYxNzE5IC0wLjg3ODkwNjcsLTAuNzgxMjUgLTAuODc4OTA2NywtMi4xNjc5NjkgMCwtMS4yMzA0NjkgMC44NTkzNzU1LC0yLjA3MDMxMiAwLjg1OTM3NSwtMC44Mzk4NDQgMi4xMDkzNzUsLTAuODM5ODQ0IDEuMjMwNDY4OCwwIDIuMDcwMzEyNSwwLjgzOTg0NCAwLjgzOTg0MzgsMC44Mzk4NDMgMC44Mz'+
			'k4NDM4LDIuMDcwMzEyIDAsMS4zNjcxODggLTAuODc4OTA2MywyLjE0ODQzOCAtMC44Nzg5MDYyLDAuNzgxMjUgLTIuMDMxMjUsMC43ODEyNSB6IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LWZhbWlseTonQXJpYWwgUm91bmRlZCBNVCBCb2xkJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidBcmlhbCBSb3VuZGVkIE1UIEJvbGQsICc7ZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjYwMzQxMTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIg'+
			'aW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NTA5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='height : 44px;';
		hs+='left : 11px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 203px;';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9yb3RhdGlvbl9vbi5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNj'+
			'OldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZXcxMSIgYm9yZG'+
			'VyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2Fw'+
			'ZTpncmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdGggZD'+
			'0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2'+
			'NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdm'+
			'FyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGlu'+
			'ZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLX'+
			'J1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAi'+
			'IGlkPSJwYXRoNDQ5NCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZS'+
			'g0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5z'+
			'bGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZX'+
			'Itc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2NjAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTA5MTI1ODUsMCwwLDAuMTA5MTI1ODUsMjQuOTk4NDgxLDI1LjAwMTU3MSki'+
			'PgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjAzIj4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MDEiPgogICAgPHBhdGggZD0ibSA0NDUuNjUxLDIwMS45NSBjIC0xLjQ4NSwtOS4zMDggLTEwLjIzNSwtMTUuNjQ5IC0xOS41NDMsLTE0LjE2NCAtOS4zMDgsMS40ODUgLTE1LjY0OSwxMC4yMzUgLTE0LjE2NCwxOS41NDMgMC4wMTYsMC'+
			'4xMDIgMC4wMzMsMC4yMDMgMC4wNTEsMC4zMDQgMTcuMzgsMTAyLjMxMSAtNTEuNDcsMTk5LjMzOSAtMTUzLjc4MSwyMTYuNzE5IEMgMTU1LjkwMyw0NDEuNzMyIDU4Ljg3NSwzNzIuODgyIDQxLjQ5NSwyNzAuNTcxIDI0LjExNSwxNjguMjYgOTIuOTY2LDcxLjIzMiAxOTUuMjc2LDUzLjg1MiBjIDYyLjkxOSwtMTAuNjg4IDEyNi45NjIsMTEuMjkgMTcwLjA1OSw1OC4zNjEgbCAtNzUuNjA1LDI1LjE5IGMgLTguOTQ0LDIuOTc2IC0xMy43ODEsMTIuNjM4IC0xMC44MDYsMjEuNTgyIDAuMDAxLDAuMDAyIDAuMDAyLDAuMDA1IDAuMDAzLDAuMDA3IDIuOTc2LDguOTQ0IDEyLjYzOCwxMy43ODEgMjEu'+
			'NTgyLDEwLjgwNiAwLjAwMywtMC4wMDEgMC4wMDUsLTAuMDAyIDAuMDA3LC0wLjAwMiBsIDEwMi40LC0zNC4xMzMgYyA2Ljk3MiwtMi4zMjIgMTEuNjc1LC04Ljg0NyAxMS42NzQsLTE2LjE5NiBWIDE3LjA2NyBDIDQxNC41OSw3LjY0MSA0MDYuOTQ5LDAgMzk3LjUyMywwIDM4OC4wOTcsMCAzODAuNDU2LDcuNjQxIDM4MC40NTYsMTcuMDY3IFYgNzkuNDExIEMgMjkyLjU2NCwtNC4xODUgMTUzLjU0NSwtMC43MDIgNjkuOTQ5LDg3LjE5IGMgLTgzLjU5Niw4Ny44OTIgLTgwLjExNCwyMjYuOTExIDcuNzc5LDMxMC41MDggODcuODkzLDgzLjU5NyAyMjYuOTExLDgwLjExNCAzMTAuNTA4LC03Ljc3OS'+
			'A0Ny42NjksLTUwLjEyIDY4Ljk0MywtMTE5Ljc2NyA1Ny40MTUsLTE4Ny45NjkgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1OTkiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNm'+
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
		hs+='height : 44px;';
		hs+='left : 334px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9yb3RhdGlvbl9vZmYuc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxj'+
			'YzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnpvb209IjEzLjk5IiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpZD0ibmFtZWR2aWV3MTEiIGJvcm'+
			'RlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIxMS42ODY5MTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2Nh'+
			'cGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYXRoIG'+
			'Q9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1'+
			'NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LX'+
			'ZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxp'+
			'bmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC'+
			'1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIw'+
			'IiBpZD0icGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFu'+
			'c2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dG'+
			'VyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjYwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjEwOTEyNTg1LDAsMCwwLjEwOTEyNTg1LDI0Ljk5ODQ4MSwyNS4wMDE1NzEp'+
			'Ij4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwMyI+CiAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjAxIj4KICAgIDxwYXRoIGQ9Im0gNDQ1LjY1MSwyMDEuOTUgYyAtMS40ODUsLTkuMzA4IC0xMC4yMzUsLTE1LjY0OSAtMTkuNTQzLC0xNC4xNjQgLTkuMzA4LDEuNDg1IC0xNS42NDksMTAuMjM1IC0xNC4xNjQsMTkuNTQzIDAuMDE2LD'+
			'AuMTAyIDAuMDMzLDAuMjAzIDAuMDUxLDAuMzA0IDE3LjM4LDEwMi4zMTEgLTUxLjQ3LDE5OS4zMzkgLTE1My43ODEsMjE2LjcxOSBDIDE1NS45MDMsNDQxLjczMiA1OC44NzUsMzcyLjg4MiA0MS40OTUsMjcwLjU3MSAyNC4xMTUsMTY4LjI2IDkyLjk2Niw3MS4yMzIgMTk1LjI3Niw1My44NTIgYyA2Mi45MTksLTEwLjY4OCAxMjYuOTYyLDExLjI5IDE3MC4wNTksNTguMzYxIGwgLTc1LjYwNSwyNS4xOSBjIC04Ljk0NCwyLjk3NiAtMTMuNzgxLDEyLjYzOCAtMTAuODA2LDIxLjU4MiAwLjAwMSwwLjAwMiAwLjAwMiwwLjAwNSAwLjAwMywwLjAwNyAyLjk3Niw4Ljk0NCAxMi42MzgsMTMuNzgxIDIx'+
			'LjU4MiwxMC44MDYgMC4wMDMsLTAuMDAxIDAuMDA1LC0wLjAwMiAwLjAwNywtMC4wMDIgbCAxMDIuNCwtMzQuMTMzIGMgNi45NzIsLTIuMzIyIDExLjY3NSwtOC44NDcgMTEuNjc0LC0xNi4xOTYgViAxNy4wNjcgQyA0MTQuNTksNy42NDEgNDA2Ljk0OSwwIDM5Ny41MjMsMCAzODguMDk3LDAgMzgwLjQ1Niw3LjY0MSAzODAuNDU2LDE3LjA2NyBWIDc5LjQxMSBDIDI5Mi41NjQsLTQuMTg1IDE1My41NDUsLTAuNzAyIDY5Ljk0OSw4Ny4xOSBjIC04My41OTYsODcuODkyIC04MC4xMTQsMjI2LjkxMSA3Ljc3OSwzMTAuNTA4IDg3Ljg5Myw4My41OTcgMjI2LjkxMSw4MC4xMTQgMzEwLjUwOCwtNy43Nz'+
			'kgNDcuNjY5LC01MC4xMiA2OC45NDMsLTExOS43NjcgNTcuNDE1LC0xODcuOTY5IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NTk5Ii8+CiAgIDwvZz4KICA8L2c+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MDUiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZToj'+
			'ZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjA5Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MTEiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2Mz'+
			'czMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYxMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjE1Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MTciLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAx'+
			'OTYwNzgiIGlkPSJnNDYxOSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjIxIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MjMiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYyNSIvPgogIDxnIH'+
			'N0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjI3Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ2MjkiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDYzMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tl'+
			'OiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjMzIi8+CiA8L2c+CiA8cGF0aCBkPSJNIDI1LjQ5OTk3OSwyNi4yNTM4MjQgNDkuMjQ2MTUzLDUwIDI1LjQ5OTk3OSw3My43NDYxNzUgMjYuMjUzODI1LDc0LjUwMDAyMSA1MCw1MC43NTM4NDcgNzMuNzQ2MTc1LDc0LjUwMDAyMSA3NC41MDAwMjEsNzMuNzQ2MTc1IDUwLjc1Mzg0Nyw1MCA3NC41MDAwMjEsMjYuMjUzODI0IDczLjc0NjE3NSwyNS40OTk5NzggNTAsNDkuMjQ2MTUzIDI2LjI1MzgyNSwyNS40OTk5NzggWiIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7Zm'+
			'lsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJyZWN0NDUyMyIvPgo8L3N2Zz4K';
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
		hs+='height : 46px;';
		hs+='left : 334px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhc3NfcmluZy5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldv'+
			'cmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZXcxMSIgYm9yZGVyY2'+
			'9sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2FwZTpn'+
			'cmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdGggZD0iTS'+
			'A1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEs'+
			'NTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaW'+
			'FudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1z'+
			'aGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bG'+
			'U6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlk'+
			'PSJwYXRoNDQ5NCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nz'+
			'kuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0'+
			'ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3'+
			'BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPHBhdGggc29kaXBvZGk6dHlwZT0ic3RhciIgaW5rc2NhcGU6ZmxhdHNpZGVkPSJmYWxzZSIgc29kaXBvZGk6Y3g9IjUwIiBzb2RpcG9kaTpyMT0iNCIgc29kaXBvZGk6YXJnMT0iMS41NzA3OTYzIiBzb2RpcG9kaTphcmcyPSIyLjYxNzk5MzkiIGlua3NjYXBlOnJvdW5kZWQ9IjAiIGQ9Ik0gNTAs'+
			'MTggNDguMjY3OTQ5LDE1IDQ2LjUzNTg5OCwxMiA1MCwxMiBsIDMuNDY0MTAyLDAgLTEuNzMyMDUxLDMgeiIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSIxIiBzb2RpcG9kaTpjeT0iMTQiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTpyMj0iMiIgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIgc29kaXBvZGk6c2lkZXM9IjMiIGlkPSJwYXRoNDUxOS'+
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
		hs+='height : 41px;';
		hs+='left : 0px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhc3NfaGFuZGxlLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZX'+
			'Jjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNz'+
			'k5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0z'+
			'NTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbm'+
			'UtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTMsMzkuNTAwMDAxKSI+CiAgPHBhdGggZD0iTSAxMDMsNDAuNDk5OTk5IDEwMCwxMC41IGwgNiwtMTBlLTcgeiIgaW5rc2NhcGU6dHJhbnNmb3JtLWNl'+
			'bnRlci15PSI1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS45OTk5OTk3NjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiBpZD0icGF0aDQ1MjMiLz4KICA8cGF0aCBkPSJtIDEwMywtMTkuNTAwMDAxIC0zLDI5Ljk5OTk5OSA2LDFlLTYgeiIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNSIgaW5rc2'+
			'NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZjAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5NzY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgaWQ9InBhdGg0NTIzLTgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
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
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTAwIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9InN2ZzIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG'+
			'5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iRzpcTXkgUGljdHVyZXNcRm90b2dyYWZpYSAzNjBwYW5vdG91cnNcREVTQVJST0xMT1MgQSBQRURJRE9cR09MREVOUEFHRVNcREVTQVJST0xMT1xWRVJTSU9OIC0gdjhcU0tJTiBFTEVNRU5UU1xyYWRhcl9wb2ludGluZ19ub3J0aC5wbmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6ZXhw'+
			'b3J0LXhkcGk9IjkwIiB3aWR0aD0iMTAwIiBzb2RpcG9kaTpkb2NuYW1lPSJyYWRhci1wb2ludGluZy1ub3J0aC5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTAiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPGRlZnMgaWQ9ImRlZnM0Ij4KICA8bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQzNzk3Ij4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MTsiIG9mZn'+
			'NldD0iMCIgaWQ9InN0b3AzNzk5Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzMzMzM7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgwMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50Mzc3NSI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjAiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzc3Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJz'+
			'dG9wMzc3OSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50Mzc3NCI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc3NiIvPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZjAwO3N0b3Atb3BhY2l0eTowOyIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3NzgiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzNzYxIj4KICAgPHN0b3Agc3R5bGU9In'+
			'N0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzYzIi8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzc2NiIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50Mzc2MyI+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc2NSIvPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjoj'+
			'ZmZmZjAwO3N0b3Atb3BhY2l0eTowOyIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3NjciLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzYzIiB5Mj0iMCIgeTE9IjIwIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIzNSIgeDI9IjM1IiBpZD0ibGluZWFyR3JhZGllbnQzNzY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIvPgogIDxyYWRpYWxHcmFkaWVudCBjeT0iNTIuNSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc3NCIgcj0iMzUiIGZ4PSIzNSIgZnk9IjUyLjUiIGdyYWRpZW50VHJhbnNmb3'+
			'JtPSJtYXRyaXgoMS41NzE0MTQ2LC0wLjAwNjYzMTM3LDAuMDA1MDgzMjMsMS4yMDQ1NTc0LC0zLjA4ODQ2OCw5MzIuNTE0NTIpIiBjeD0iMzUiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9InJhZGlhbEdyYWRpZW50Mzc4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiLz4KICA8cmFkaWFsR3JhZGllbnQgY3k9Ii0yOC4yMDU4NzkiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3NzUiIHI9IjUwLjI1IiBmeD0iNTQuNDU4OTYxIiBmeT0iLTI4LjIwNTg3OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjUxNDQ5NTc1LC0wLjg1NzQ5MjkzLDAuMDk5NTAyNDksMC4w'+
			'NTk3MDE0OSwyMS43ODc2NSw2Ni4zODIxMDkpIiBjeD0iNTQuNDU4OTYxIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJyYWRpYWxHcmFkaWVudDM3ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+CiAgPGxpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTciIHkyPSIxNSIgeTE9IjY1IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSI2MyIgeDI9IjYzIiBpZD0ibGluZWFyR3JhZGllbnQzODAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIvPgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbn'+
			'QzNzk3IiB5Mj0iNSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwLjI1LDk1Mi4zNjIxOCkiIHkxPSIzNSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4MT0iMjYiIHgyPSIyNiIgaWQ9ImxpbmVhckdyYWRpZW50MzgwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiLz4KICA8bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5Ny04IiB5Mj0iNSIgeTE9IjM1IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyNiIgeDI9IjI2IiBpZD0ibGluZWFyR3JhZGllbnQzODA2LTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+CiAg'+
			'PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50Mzc5Ny04Ij4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzk5LTgiLz4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIgaWQ9InN0b3AzODAxLTIiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB5Mj0iNSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5Ny04IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC'+
			'0xLDAsMCwxLDk5Ljc1LDk1Mi4zNjIxOCkiIHkxPSIzNSIgeDE9IjI2IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgyPSIyNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsaW5lYXJHcmFkaWVudDM4MjMiLz4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjYxLjQ5NjQ0OSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc3NCIgcj0iMzUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTMuNjI1Mzk5MWUtOCwtMS4xNDI4NTcyLDEuMjA0NTY4MSwtMy42Mzc0OTQ4ZS04LC0yMy40MDk5ODcsMTA0MC4zODE0KSIgZng9IjM0LjQzMzQ2OCIgZnk9IjYxLjQ5NjQ0OSIgY3g9'+
			'IjM0LjQzMzQ2OCIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0icmFkaWFsR3JhZGllbnQzMDE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIvPgogIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3IiB5Mj0iMTAuMDAwMDAyIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC05MCw1MjQuMzg5NDMsNTI3LjcyMjc2KSIgeTE9IjM4IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyNS4wODMzNDUiIHgyPSIyNS4wODMzNDUiIGlkPSJsaW5lYXJHcmFkaWVudDMwMTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+CiAgPG'+
			'xpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTctOCIgeTI9IjQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxLDEsMCwtMy4zMzMzMjgyLDk1Mi42MTIxOSkiIHkxPSIyMCIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4MT0iMjUuNzUiIHgyPSIyNS43NSIgaWQ9ImxpbmVhckdyYWRpZW50MzAyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiLz4KICA8bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5NyIgeTI9Ijk3Ljk5OTk5MiIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgtOTAsNTI0LjM4OTQ0LDUyNy43'+
			'MjI3NikiIHkxPSI3MS45OTk5OTIiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeDE9IjI5LjA4MzM1NSIgeDI9IjI5LjA4MzM1NSIgaWQ9ImxpbmVhckdyYWRpZW50MzAxOC04IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOmN1cnJlbn'+
			'QtbGF5ZXI9ImczMDExIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOnpvb209IjE4LjQzIiBpbmtzY2FwZTpjeD0iNTAiIGJvcmRlcm9wYWNpdHk9IjEuMCIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlkPSJiYXNlIj4KICA8aW5rc2NhcGU6Z3JpZCBlbXBzcGFjaW5nPSI1IiBvcmlnaW54PSIwIiB0eXBlPSJ4eWdyaWQiIHNwYWNpbmd4PSIxIiBlbmFibGVkPSJ0cnVlIiB2aXNpYmxlPSJ0cnVlIiBzbmFwdmlzaWJsZWdy'+
			'aWRsaW5lc29ubHk9InRydWUiIG9yaWdpbnk9IjAiIGlkPSJncmlkMjk4NSIgc3BhY2luZ3k9IjEiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTciPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaW5rc2NhcGU6bGFiZWw9IkxheW'+
			'VyIDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTk1NS42OTU1MykiPgogIDxnIGlkPSJnMzAxMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41LDAsMCwwLjUsMS42NjY2NjQxLDUyNi4xODExMSkiPgogICA8ZyBpZD0iZzQ0IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjk5MjAyNDksMCwwLDEuOTkwNzg1NSwtMy4zMzMzMjY4LC0xMDQ5Ljc1OTcpIj4KICAgIDxwYXRoIGQ9Im0gMCw5NTguODExNzcgMzQsNTAuMDAwMTMgaCAzMiBsIDM0LC01MC4wMDAxMyB6IiBzdHlsZT0iZmlsbDp1cmwoI3JhZGlhbEdyYWRpZW50MzAxNik7ZmlsbC1v'+
			'cGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIGlkPSJwYXRoMjk5MSIvPgogICAgPHBhdGggZD0ibSAwLDk1OS4wNDI4OCBoIDAuNSBsIDMzLjc1LDUwLjAwMDMyIGggLTAuNSB6IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzAxOCk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIGlkPSJyZWN0Mzc5NSIvPgogICAgPHBhdGggZD0iTSAxMDAuNDAwMzUsOTU5LjA0Mjg4IEggOT'+
			'kuOTAwMzQ2IEwgNjYuMTUwMjksMTAwOS4wNDMyIGggMC41IHoiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzMDE4LTgpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiBpZD0icmVjdDM3OTUtMSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs+='left : 298px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iNjE5IiB2aWV3Qm94PSIwIDAgNjE5IDYxOSI+CiA8cGF0aCBkPSJNMjk3LjE0NSAxNDQuMDM5SDI2NC4xMjdWMTRNMjY0LjEyNyAxNEgxMzRWMjA1LjE3N00yNjQuMTI3IDE0SDMzOS44NzNNMTM0IDIwNS4xNzdWMjE1Ljg1MlYyOTguMzRNMTM0IDIwNS4xNzdIMjcxLjg5Nk0yODguNDA1IDQ1My42MTFWMjk4LjM0TTEzNCAyOTguMzRIMjg4LjQwNU0xMzQgMjk4LjM0VjM2OS4xODJNMjg4LjQwNSAyOTguMzRWMjA1LjE3N0gyNzEuODk2TTEzNCAzNjkuMTgyVjYwNUgzMj'+
			'guMjJWNDU5LjQzNEg0NzBWMjA1LjE3N00xMzQgMzY5LjE4MkgyMzkuODVNMTM0IDQ1NS41NTJIMjM5Ljg1TTQ3MCAyMDUuMTc3VjE0SDMzOS44NzNNNDcwIDIwNS4xNzdIMzM0LjA0NlYxODguNjhNMzM5Ljg3MyAxNFYxNDQuMDM5TTI3MS44OTYgMjA1LjE3N1YxODguNjgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
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
		hs+='right : -36px;';
		hs+='top : 41px;';
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
		el=me._level3_floorplan=document.createElement('div');
		els=me._level3_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9Ijg0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iODQyIiB2aWV3Qm94PSIwIDAgODQyIDg0MiI+CiA8cGF0aCBkPSJNMzIuMTE0NCA5MFY3NTJIODA5Ljg4NlY5MEgzMi4xMTQ0Wk0yMC4wNzE1IDU4QzguOTg2MzIgNTggMCA2Ni45NTQzIDAgNzhWNzY0QzAgNzc1LjA0NiA4Ljk4NjM0IDc4NCAyMC4wNzE1IDc4NEg4MjEuOTI4QzgzMy4wMTQgNzg0IDg0MiA3NzUuMDQ2IDg0MiA3NjRWNzhDODQyIDY2Ljk1NDMgODMzLjAxNCA1OCA4MjEuOTI4IDU4SDIwLjA3MTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT'+
			'0iZXZlbm9kZCIgZmlsbD0id2hpdGUiLz4KIDxwYXRoIGQ9Ik0wIDI4OEMwIDI3OS4xNjMgNi42NDg5NCAyNzIgMTQuODUwOCAyNzJIMTUzLjE0OUMxNjEuMzUxIDI3MiAxNjggMjc5LjE2MyAxNjggMjg4QzE2OCAyOTYuODM3IDE2MS4zNTEgMzA0IDE1My4xNDkgMzA0SDE0Ljg1MDhDNi42NDg5NCAzMDQgMCAyOTYuODM3IDAgMjg4WiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIi8+CiA8cGF0aCBkPSJNMzUwIDI4MEMzNTAgMjcxLjE2MyAzNTcuMTYzIDI2NCAzNjYgMjY0TDUxMiAyNjRDNTIwLjgzNyAyNjQgNTI4IDI3MS4xNjMgNTI4IDI4MEM1'+
			'MjggMjg4LjgzNyA1MjAuODM3IDI5NiA1MTIgMjk2TDM2NiAyOTZDMzU3LjE2MyAyOTYgMzUwIDI4OC44MzcgMzUwIDI4MFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJ3aGl0ZSIvPgogPHBhdGggZD0iTTcxMiAyODBDNzEyIDI3MS4xNjMgNzE4LjM3OCAyNjQgNzI2LjI0NyAyNjRMODI3Ljc1MyAyNjRDODM1LjYyMiAyNjQgODQyIDI3MS4xNjMgODQyIDI4MEM4NDIgMjg4LjgzNyA4MzUuNjIyIDI5NiA4MjcuNzUzIDI5Nkw3MjYuMjQ3IDI5NkM3MTguMzc4IDI5NiA3MTIgMjg4LjgzNyA3MTIgMjgwWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bG'+
			'U9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';
		me._level3_floorplan__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="level3_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 108px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 37px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._level3_floorplan.ggIsActive=function() {
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
		me._level3_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 3))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._level3_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._level3_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._level3_floorplan.style[domTransition]='';
				if (me._level3_floorplan.ggCurrentLogicStateVisible == 0) {
					me._level3_floorplan.style.visibility=(Number(me._level3_floorplan.style.opacity)>0||!me._level3_floorplan.style.opacity)?'inherit':'hidden';
					me._level3_floorplan.ggVisible=true;
				}
				else {
					me._level3_floorplan.style.visibility="hidden";
					me._level3_floorplan.ggVisible=false;
				}
			}
		}
		me._level3_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._level3_floorplan);
		el=me._level1_floorplan=document.createElement('div');
		els=me._level1_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iNjE5IiB2aWV3Qm94PSIwIDAgNjE5IDYxOSI+CiA8cGF0aCBkPSJNMjExIDE4NUgzMDEuMjg2VjI1MC4yNzdNMjExIDM3Mi4yMTZIMzAxLjI4NlYyNTAuMjc3TTIxMSAzNzIuMjE2VjQzMy44OTZNMjExIDM3Mi4yMTZWMzIyLjI2M0gyNjguMTQzTTIxMSA0MzMuODk2SDE2M1Y2MDNIMzM5VjQyMi44OTZNMjExIDQzMy44OTZIMzAxLjI4NlY0MDQuODQ3TTMwMS4yODYgMjUwLjI3N0gyMTFWMjkzLjc5NU0xNjggMTg4LjE2OFYxM0gyOTguNTM0TTM4OCA0MjIuODk2SDQ2OF'+
			'YxM0gyOTguNTM0TTI5OC41MzQgMTNWMTM2LjY0OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=';
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
		hs+='right : -36px;';
		hs+='top : 46px;';
		hs+='visibility : hidden;';
		hs+='width : 192px;';
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
		hs+='left : 146px;';
		hs+='position : absolute;';
		hs+='top : 185px;';
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
			me._mh_radar.ggParameter.rx=146;me._mh_radar.ggParameter.ry=185;
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
		hs+='left : 166px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
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
			me._mh_radar.ggParameter.rx=166;me._mh_radar.ggParameter.ry=51;
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
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
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
			me._mh_radar.ggParameter.rx=137;me._mh_radar.ggParameter.ry=56;
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
		hs+='left : 188px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
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
			me._mh_radar.ggParameter.rx=188;me._mh_radar.ggParameter.ry=59;
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
		hs+='left : 143px;';
		hs+='position : absolute;';
		hs+='top : 123px;';
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
			me._mh_radar.ggParameter.rx=143;me._mh_radar.ggParameter.ry=123;
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
		hs+='left : 195px;';
		hs+='position : absolute;';
		hs+='top : 125px;';
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
			me._mh_radar.ggParameter.rx=195;me._mh_radar.ggParameter.ry=125;
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
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
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
			me._mh_radar.ggParameter.rx=137;me._mh_radar.ggParameter.ry=90;
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
		hs+='left : 145px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
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
			me._mh_radar.ggParameter.rx=145;me._mh_radar.ggParameter.ry=57;
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
		hs+='left : 166px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
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
			me._mh_radar.ggParameter.rx=166;me._mh_radar.ggParameter.ry=11;
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
		hs+='left : 193px;';
		hs+='position : absolute;';
		hs+='top : 67px;';
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
			me._mh_radar.ggParameter.rx=193;me._mh_radar.ggParameter.ry=67;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._comedor.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._comedor);
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
		hs+='left : 195px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
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
			me._mh_radar.ggParameter.rx=195;me._mh_radar.ggParameter.ry=130;
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
		hs+='left : 151px;';
		hs+='position : absolute;';
		hs+='top : 175px;';
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
			me._mh_radar.ggParameter.rx=151;me._mh_radar.ggParameter.ry=175;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._garage.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._garage);
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
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 208px;';
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
			me._mh_radar.ggParameter.rx=207;me._mh_radar.ggParameter.ry=208;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._ingreso.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._ingreso);
		el=me._estar_jardin=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Estar Jardin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 168px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._estar_jardin.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._estar_jardin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 3))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._estar_jardin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._estar_jardin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._estar_jardin.style[domTransition]='';
				if (me._estar_jardin.ggCurrentLogicStateVisible == 0) {
					me._estar_jardin.style.visibility=(Number(me._estar_jardin.style.opacity)>0||!me._estar_jardin.style.opacity)?'inherit':'hidden';
					me._estar_jardin.ggVisible=true;
				}
				else {
					me._estar_jardin.style.visibility="hidden";
					me._estar_jardin.ggVisible=false;
				}
			}
		}
		me._estar_jardin.onclick=function (e) {
			player.openNext('{node18}');
		}
		me._estar_jardin.onmouseover=function (e) {
			player.setVariableValue('youareon', "Estar Jardin");
		}
		me._estar_jardin.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._estar_jardin.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=168;me._mh_radar.ggParameter.ry=41;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._estar_jardin.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._estar_jardin);
		el=me._estar_2=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Estar 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._estar_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._estar_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 3))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._estar_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._estar_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._estar_2.style[domTransition]='';
				if (me._estar_2.ggCurrentLogicStateVisible == 0) {
					me._estar_2.style.visibility=(Number(me._estar_2.style.opacity)>0||!me._estar_2.style.opacity)?'inherit':'hidden';
					me._estar_2.ggVisible=true;
				}
				else {
					me._estar_2.style.visibility="hidden";
					me._estar_2.ggVisible=false;
				}
			}
		}
		me._estar_2.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._estar_2.onmouseover=function (e) {
			player.setVariableValue('youareon', "estar2");
		}
		me._estar_2.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._estar_2.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=201;me._mh_radar.ggParameter.ry=85;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._estar_2.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._estar_2);
		el=me._estar_1=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Estar 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._estar_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._estar_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 3))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._estar_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._estar_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._estar_1.style[domTransition]='';
				if (me._estar_1.ggCurrentLogicStateVisible == 0) {
					me._estar_1.style.visibility=(Number(me._estar_1.style.opacity)>0||!me._estar_1.style.opacity)?'inherit':'hidden';
					me._estar_1.ggVisible=true;
				}
				else {
					me._estar_1.style.visibility="hidden";
					me._estar_1.ggVisible=false;
				}
			}
		}
		me._estar_1.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._estar_1.onmouseover=function (e) {
			player.setVariableValue('youareon', "Estar 1");
		}
		me._estar_1.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._estar_1.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=142;me._mh_radar.ggParameter.ry=83;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._estar_1.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._estar_1);
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
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 39px;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
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
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
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
		el=me._level0_indicator=document.createElement('div');
		el.ggId="level0_indicator";
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
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : hidden;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._level0_indicator.ggIsActive=function() {
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
		me._level0_indicator.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('levelnumber') == 3))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._level0_indicator.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._level0_indicator.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._level0_indicator.style[domTransition]='';
				if (me._level0_indicator.ggCurrentLogicStateVisible == 0) {
					me._level0_indicator.style.visibility=(Number(me._level0_indicator.style.opacity)>0||!me._level0_indicator.style.opacity)?'inherit':'hidden';
					me._level0_indicator.ggVisible=true;
				}
				else {
					me._level0_indicator.style.visibility="hidden";
					me._level0_indicator.ggVisible=false;
				}
			}
		}
		me._level0_indicator.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._level0_indicator);
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
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
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
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.2em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 116px;';
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
			player.openNext("{node5}","");
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
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 117px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.2em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 117px;';
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
			player.openNext("{node2}","");
		}
		me._changetolevel1_selector.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._changetolevel1_selector);
		el=me._changetolevel0_selector=document.createElement('div');
		els=me._changetolevel0_selector__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="change-to-level0_selector";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 119px;';
		hs+='pointer-events:auto;';
		hs+='font-family: Calibri; font-size: 1.2em; font-style: normal;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 119px;';
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
		els.innerHTML="<p style=\"margin-top:0.25em\";>Area Estar<\/p>";
		el.appendChild(els);
		me._changetolevel0_selector.ggIsActive=function() {
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
		me._changetolevel0_selector.onclick=function (e) {
			player.setVariableValue('levelnumber', Number("3"));
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			player.openNext("{node18}","");
		}
		me._changetolevel0_selector.ggUpdatePosition=function (useTransition) {
		}
		me._frame_rectangle_floor_plans.appendChild(me._changetolevel0_selector);
		me._floor_plans_container.appendChild(me._frame_rectangle_floor_plans);
		el=me._btn_off_floor_plans=document.createElement('div');
		els=me._btn_off_floor_plans__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2Zsb29yX3BsYW5zLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4x'+
			'IHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iOS43OSIgc2hvd2'+
			'dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlkPSJuYW1lZHZpZXcxMTciIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIxNS43MzAzMzciIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3'+
			'aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIi8+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzkuMDYzOTk5IiBjeD0iNTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgaWQ9ImNpcmNsZTIiLz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzNy41IiBjeD0iNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBzdHlsZT0ib3BhY2l0eTowLjc7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMT'+
			'U3O3N0cm9rZS13aWR0aDoxIiBpZD0iZWxsaXBzZTQiLz4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSI+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk5Ij4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk3Ij4KICAgIDxwYXRoIGQ9Im0gMjAzLjk5MywyOTUuMjg3IGMgMjEuMDAxLDAgMzguMDI0LDE3LjAyMyAzOC4wMjQsMzguMDE4IDAsMjAuOTk1IC0xNy4wMjMsMzguMDI0IC0zOC4wMjQsMzguMDI0IC0yMC45OTgsMCAtMzgu'+
			'MDIxLC0xNy4wMjkgLTM4LjAyMSwtMzguMDI0IDAsLTIwLjk5NSAxNy4wMjMsLTM4LjAxOCAzOC4wMjEsLTM4LjAxOCB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmIiBpZD0icGF0aDM3OTMiLz4KICAgIDxwYXRoIGQ9Ik0gNTc0LjI2NywzMjUuODIyIDYwMC4wNDksMTIyLjU2IDQxNS4xMTMsNTIuMzc4IDE5My4yNzksMTU4LjMzNyAwLDc2LjcxIDI2LjA5OSwyOTMuNTU4IDEuMDg1LDUwNy4wOTMgbCAyMDUuMzYsMzguNTIxIDIwOS40NiwtMzkuODkyIDE4NC44NTQsNDIuNjU4IHogTSA0MTQuNDI4LDczLjkwOSA1NzguMjM5LDEzNS42NCA1Nj'+
			'YuOTYyLDIyNC41MiA0MDMuNjg5LDE4My4yMTkgWiBtIC0yMS42NjksMTEuMjgzIC04LjY0Miw5My4wNiAtMC4xNDIsLTAuMDMzIC0xMTMuMDQ2LDE0LjU4MSAtMC42NzcsMi40OTQgYyAtMC4xNDIsMC41MzggLTEzLjI1OCw0OC45OTUgLTI3LjA4LDcxLjAzMyAtOC45NDYsLTUuMjYxIC0xOS4wMDYsLTguNzg0IC0yOS43NTUsLTEwLjA5IGwgLTkuMTY0LC04MS4wMjggeiBtIC0xNy4yODMsMjA3LjU3NCAtOTguMjUxLDE0LjgxNSBjIC01LjI5MSwtMTQuOTY5IC0xNC45OTksLTI3LjgyNSAtMjcuNjA2LC0zNy4wMjIgMTIuODYyLC0yMC41MzEgMjQuNDcxLC02MC4yNzggMjcuMzk0LC03MC43NyBs'+
			'IDEwNi4zNjEsLTEzLjcyOCB6IG0gLTE5MS4yMDcsLTExNi41NjkgOS4wNzksODAuMjM2IGMgLTI5Ljg2NCw0LjExMyAtNTQuMzU4LDI1LjIgLTYzLjMzNiw1My4yMTcgTCA0Ni4yMzMsMjk2LjY4MiAzOC4xODgsMjE4Ljk3NiBjIDI3Ljc2OSwtMS44MzggNDguNTk5LC0xMC44NzUgNjEuOTQ4LC0yNyAxMi4wMzQsLTE0LjUxNCAxNS40OTUsLTMxLjY4NSAxNi4xNTcsLTQ0LjQ4NCB6IG0gLTE2MC4wODIsLTY3LjYwMSA4NC40NjUsMzUuNjY4IGMgLTAuMjQyLDExLjc3NyAtMi45MDUsMjguODY1IC0xNC40NDMsNDIuNzkxIC0xMi4wMzcsMTQuNTE0IC0zMS4xODIsMjIuNjMyIC01Ni45OTgsMjQuMj'+
			'YxIHogbSAtMS4wOSwzODIuMzI1IDIwLjc3OSwtMTc0LjQwMiA4Mi42MjYsMTIuODAzIGMgLTAuMDYyLDEuMzI0IC0wLjE5NSwyLjYzNiAtMC4xOTUsMy45ODkgMCwxOC4xNjQgNi4zMDcsMzQuODU2IDE2LjgwNyw0OC4xMDggbCAtNDIuOTEyLDM0LjQ1OSAtMTMuNTIxLDg2Ljk1OSB6IG0gMTYxLjg3OCwzMC4zNTggLTkwLjcyMSwtMTcuMDE3IDEzLjEwNCwtODQuMjUyIDQwLjgzNywtMzIuNzgxIGMgMTIuNTI4LDEyLjk1IDI5LjQ4LDIxLjU5MyA0OC40MjEsMjMuMzc3IHogTSAxNDEuNzI5LDMzMy4zMTEgYyAwLC0zNC4zNDggMjcuOTM1LC02Mi4yODEgNjIuMjY0LC02Mi4yODEgMzQuMzQ3LDAg'+
			'NjIuMjgyLDI3LjkzNCA2Mi4yODIsNjIuMjgxIDAsMzQuMzMgLTI3LjkzNSw2Mi4yNjUgLTYyLjI4Miw2Mi4yNjUgLTM0LjMzLDAuMDA2IC02Mi4yNjQsLTI3LjkzNSAtNjIuMjY0LC02Mi4yNjUgeiBtIDY0LjY5LDE5MS45ODcgLTEuNzUsLTAuMzMgMTIuMTIsLTExNS4xMTkgYyAzNi43NTYsLTYuMTM1IDY0LjksLTM4LjA3NiA2NC45LC03Ni41NTYgMCwtMi4wODEgLTAuMTUsLTQuMTE0IC0wLjMxMywtNi4xNTkgbCA5Ni4wMzgsLTE0LjQ4MSA4LjAxNiw4MS45MTEgYyAtNDIuMTMyLDEuOTggLTczLjYyNSwxNC45MzIgLTkzLjQ0OSwzOC44NTcgLTIzLjExNCwyNy45MjMgLTI0LjIwNSw2Mi43Mz'+
			'cgLTIzLjAwOCw3OS45NDkgeiBtIDcwLjI0NywtMTMuMzgxIGMgLTAuOTMxLC0xNi4zMzcgMC40MTksLTQ4LjM5NyAyMS4yNjQsLTczLjU2NSAxOC40MzgsLTIyLjI2IDQ4LjE4MiwtMzQuMjcxIDg4LjI0NCwtMzYuMDkxIGwgOC41MzUsODcuMTU0IHogbSAxMjYuMzA3LC0zMjAuOTQ2IDE2My4wMyw0MS4yMjUgLTkuNzc2LDc3LjAxNyAtMTYwLjk3NCwtMTkuNDMxIHogbSAxMzEuMDgzLDE4NC43NzQgLTc0LjE3NSwtOC44MTkgMTMuNTg0LDEzMS41OCAtNTkuNDI4LC0xMi43NzMgLTE2Ljg1MiwtMTc2LjAzNCAxLjczMiwtMC4yNzIgMTU1LjYxMiwxOS43NTQgMjMuMDIyLDE5My4zNTQgLTk2LjI5'+
			'OCwtMjIuMjEzIC0xMi43MTQsLTEyNC41OTkgNjYuMTExLDcuNjcyIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMzc5NSIvPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwOSIvPgogIDxnIHN0eWxlPSJmaW'+
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
		hs+='right : -49px;';
		hs+='top : 14px;';
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
			player.setVariableValue('levelnumber', Number("false"));
		}
		me._btn_off_floor_plans.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plans_container.appendChild(me._btn_off_floor_plans);
		el=me._btn_on_floor_plans=document.createElement('div');
		els=me._btn_on_floor_plans__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2Zsb29yX3BsYW5zLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4x'+
			'IHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iOS43OSIgc2hvd2'+
			'dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlkPSJuYW1lZHZpZXcxMTciIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIxNS43MzAzMzciIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3'+
			'aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIi8+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzkuMDYzOTk5IiBjeD0iNTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgaWQ9ImNpcmNsZTIiLz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzNy41IiBjeD0iNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBzdHlsZT0ib3BhY2l0eTowLjc7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMT'+
			'U3O3N0cm9rZS13aWR0aDoxIiBpZD0iZWxsaXBzZTQiLz4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSI+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk5Ij4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaWQ9ImczNzk3Ij4KICAgIDxwYXRoIGQ9Im0gMjAzLjk5MywyOTUuMjg3IGMgMjEuMDAxLDAgMzguMDI0LDE3LjAyMyAzOC4wMjQsMzguMDE4IDAsMjAuOTk1IC0xNy4wMjMsMzguMDI0IC0zOC4wMjQsMzguMDI0IC0yMC45OTgsMCAtMzgu'+
			'MDIxLC0xNy4wMjkgLTM4LjAyMSwtMzguMDI0IDAsLTIwLjk5NSAxNy4wMjMsLTM4LjAxOCAzOC4wMjEsLTM4LjAxOCB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmIiBpZD0icGF0aDM3OTMiLz4KICAgIDxwYXRoIGQ9Ik0gNTc0LjI2NywzMjUuODIyIDYwMC4wNDksMTIyLjU2IDQxNS4xMTMsNTIuMzc4IDE5My4yNzksMTU4LjMzNyAwLDc2LjcxIDI2LjA5OSwyOTMuNTU4IDEuMDg1LDUwNy4wOTMgbCAyMDUuMzYsMzguNTIxIDIwOS40NiwtMzkuODkyIDE4NC44NTQsNDIuNjU4IHogTSA0MTQuNDI4LDczLjkwOSA1NzguMjM5LDEzNS42NCA1Nj'+
			'YuOTYyLDIyNC41MiA0MDMuNjg5LDE4My4yMTkgWiBtIC0yMS42NjksMTEuMjgzIC04LjY0Miw5My4wNiAtMC4xNDIsLTAuMDMzIC0xMTMuMDQ2LDE0LjU4MSAtMC42NzcsMi40OTQgYyAtMC4xNDIsMC41MzggLTEzLjI1OCw0OC45OTUgLTI3LjA4LDcxLjAzMyAtOC45NDYsLTUuMjYxIC0xOS4wMDYsLTguNzg0IC0yOS43NTUsLTEwLjA5IGwgLTkuMTY0LC04MS4wMjggeiBtIC0xNy4yODMsMjA3LjU3NCAtOTguMjUxLDE0LjgxNSBjIC01LjI5MSwtMTQuOTY5IC0xNC45OTksLTI3LjgyNSAtMjcuNjA2LC0zNy4wMjIgMTIuODYyLC0yMC41MzEgMjQuNDcxLC02MC4yNzggMjcuMzk0LC03MC43NyBs'+
			'IDEwNi4zNjEsLTEzLjcyOCB6IG0gLTE5MS4yMDcsLTExNi41NjkgOS4wNzksODAuMjM2IGMgLTI5Ljg2NCw0LjExMyAtNTQuMzU4LDI1LjIgLTYzLjMzNiw1My4yMTcgTCA0Ni4yMzMsMjk2LjY4MiAzOC4xODgsMjE4Ljk3NiBjIDI3Ljc2OSwtMS44MzggNDguNTk5LC0xMC44NzUgNjEuOTQ4LC0yNyAxMi4wMzQsLTE0LjUxNCAxNS40OTUsLTMxLjY4NSAxNi4xNTcsLTQ0LjQ4NCB6IG0gLTE2MC4wODIsLTY3LjYwMSA4NC40NjUsMzUuNjY4IGMgLTAuMjQyLDExLjc3NyAtMi45MDUsMjguODY1IC0xNC40NDMsNDIuNzkxIC0xMi4wMzcsMTQuNTE0IC0zMS4xODIsMjIuNjMyIC01Ni45OTgsMjQuMj'+
			'YxIHogbSAtMS4wOSwzODIuMzI1IDIwLjc3OSwtMTc0LjQwMiA4Mi42MjYsMTIuODAzIGMgLTAuMDYyLDEuMzI0IC0wLjE5NSwyLjYzNiAtMC4xOTUsMy45ODkgMCwxOC4xNjQgNi4zMDcsMzQuODU2IDE2LjgwNyw0OC4xMDggbCAtNDIuOTEyLDM0LjQ1OSAtMTMuNTIxLDg2Ljk1OSB6IG0gMTYxLjg3OCwzMC4zNTggLTkwLjcyMSwtMTcuMDE3IDEzLjEwNCwtODQuMjUyIDQwLjgzNywtMzIuNzgxIGMgMTIuNTI4LDEyLjk1IDI5LjQ4LDIxLjU5MyA0OC40MjEsMjMuMzc3IHogTSAxNDEuNzI5LDMzMy4zMTEgYyAwLC0zNC4zNDggMjcuOTM1LC02Mi4yODEgNjIuMjY0LC02Mi4yODEgMzQuMzQ3LDAg'+
			'NjIuMjgyLDI3LjkzNCA2Mi4yODIsNjIuMjgxIDAsMzQuMzMgLTI3LjkzNSw2Mi4yNjUgLTYyLjI4Miw2Mi4yNjUgLTM0LjMzLDAuMDA2IC02Mi4yNjQsLTI3LjkzNSAtNjIuMjY0LC02Mi4yNjUgeiBtIDY0LjY5LDE5MS45ODcgLTEuNzUsLTAuMzMgMTIuMTIsLTExNS4xMTkgYyAzNi43NTYsLTYuMTM1IDY0LjksLTM4LjA3NiA2NC45LC03Ni41NTYgMCwtMi4wODEgLTAuMTUsLTQuMTE0IC0wLjMxMywtNi4xNTkgbCA5Ni4wMzgsLTE0LjQ4MSA4LjAxNiw4MS45MTEgYyAtNDIuMTMyLDEuOTggLTczLjYyNSwxNC45MzIgLTkzLjQ0OSwzOC44NTcgLTIzLjExNCwyNy45MjMgLTI0LjIwNSw2Mi43Mz'+
			'cgLTIzLjAwOCw3OS45NDkgeiBtIDcwLjI0NywtMTMuMzgxIGMgLTAuOTMxLC0xNi4zMzcgMC40MTksLTQ4LjM5NyAyMS4yNjQsLTczLjU2NSAxOC40MzgsLTIyLjI2IDQ4LjE4MiwtMzQuMjcxIDg4LjI0NCwtMzYuMDkxIGwgOC41MzUsODcuMTU0IHogbSAxMjYuMzA3LC0zMjAuOTQ2IDE2My4wMyw0MS4yMjUgLTkuNzc2LDc3LjAxNyAtMTYwLjk3NCwtMTkuNDMxIHogbSAxMzEuMDgzLDE4NC43NzQgLTc0LjE3NSwtOC44MTkgMTMuNTg0LDEzMS41OCAtNTkuNDI4LC0xMi43NzMgLTE2Ljg1MiwtMTc2LjAzNCAxLjczMiwtMC4yNzIgMTU1LjYxMiwxOS43NTQgMjMuMDIyLDE5My4zNTQgLTk2LjI5'+
			'OCwtMjIuMjEzIC0xMi43MTQsLTEyNC41OTkgNjYuMTExLDcuNjcyIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMzc5NSIvPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwMyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwNyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJnMzgwOSIvPgogIDxnIHN0eWxlPSJmaW'+
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
		hs+='right : -49px;';
		hs+='top : 14px;';
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
		me._btn_on_floor_plans.ggDeactivate=function () {
			me._reset_all_elements_to_desired_state.onclick();
		}
		me._btn_on_floor_plans.ggUpdatePosition=function (useTransition) {
		}
		me._btn_on_floor_plans.ggNodeChange=function () {
			if (me._btn_on_floor_plans.ggLastIsActive!=me._btn_on_floor_plans.ggIsActive()) {
				me._btn_on_floor_plans.ggLastIsActive=me._btn_on_floor_plans.ggIsActive();
				if (me._btn_on_floor_plans.ggIsActive()) {
					if (me._btn_on_floor_plans.ggActivate) me._btn_on_floor_plans.ggActivate();
				} else {
					if (me._btn_on_floor_plans.ggDeactivate) me._btn_on_floor_plans.ggDeactivate();
				}
			}
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl91cC5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRm'+
			'OmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZXcxMSIgYm9yZGVyY29sb3I9Ii'+
			'M2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2FwZTpncmlkIHR5'+
			'cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdGggZD0iTSA1MCwxMC'+
			'41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIu'+
			'NTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbH'+
			'Rlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpi'+
			'YXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uem'+
			'VybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRo'+
			'NDQ5NCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC'+
			'0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nzku'+
			'OTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZz'+
			'owcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xNTE1MTUxNSwwLDAsMC4xNTE1MTUxNSwyNS4wMDAwNzYsMjUpIj4KICA8ZyBzdHlsZT0iZmls'+
			'bDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg1XyI+CiAgIDxwYXRoIGQ9Ik0gMjUuNjA3LDE5MC42MDcgMTY0Ljk5Nyw1MS4yMTQgMzA0LjM5MywxOTAuNjA3IGMgMi45MywyLjkyOSA2Ljc2OCw0LjM5MyAxMC42MDcsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgbCAtMTUwLjAwMywtMTUwIEMgMTcyLjc5LDE2LjU4IDE2OC45NzYsMTUgMTY0Ljk5NywxNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MS'+
			'AtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTcsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTgsNS44NTggMTUuMzU2LDUuODU4IDIxLjIxNCwwIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODZfIi8+CiAgIDxwYXRoIGQ9Ik0gMTc1LjYwMywxMzkuMzkzIEMgMTcyLjc5LDEzNi41OCAxNjguOTc1LDEzNSAxNjQuOTk3LDEzNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAu'+
			'NjA3LDQuMzk0IGwgLTE0OS45OTYsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTcsNS44NTcgMTUuMzU1LDUuODU4IDIxLjIxMywtMC4wMDEgbCAxMzkuMzksLTEzOS4zOTMgMTM5LjM5NywxMzkuMzk0IGMgMi45MjksMi45MjkgNi43NjcsNC4zOTMgMTAuNjA2LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OT'+
			'k5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODdfIi8+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQ0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9kb3duLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZXJjb2xvcj'+
			'0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'dHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBjeT0iNTAiIHI9IjM4IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5Ii8+CiA8cGF0aCBkPSJNIDUwLD'+
			'EwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAx'+
			'Mi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQyIFoiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LW'+
			'FsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0'+
			'OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub2'+
			'56ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBh'+
			'dGg0NDk0Ii8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW'+
			'5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIGlkPSJ0ZXh0NDU2OCI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1MTUxNTE1LDAsMCwtMC4xNTE1MTUxNSwyNS4wMDAwNzYsNzUpIj4KICA8ZyBzdHlsZT0i'+
			'ZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg1XyI+CiAgIDxwYXRoIGQ9Ik0gMjUuNjA3LDE5MC42MDcgMTY0Ljk5Nyw1MS4yMTQgMzA0LjM5MywxOTAuNjA3IGMgMi45MywyLjkyOSA2Ljc2OCw0LjM5MyAxMC42MDcsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgbCAtMTUwLjAwMywtMTUwIEMgMTcyLjc5LDE2LjU4IDE2OC45NzYsMTUgMTY0Ljk5NywxNSBjIC0zLjk3OSwwIC03Ljc5NCwxLj'+
			'U4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTcsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTgsNS44NTggMTUuMzU2LDUuODU4IDIxLjIxNCwwIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODZfIi8+CiAgIDxwYXRoIGQ9Ik0gMTc1LjYwMywxMzkuMzkzIEMgMTcyLjc5LDEzNi41OCAxNjguOTc1LDEzNSAxNjQuOTk3LDEzNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAt'+
			'MTAuNjA3LDQuMzk0IGwgLTE0OS45OTYsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTcsNS44NTcgMTUuMzU1LDUuODU4IDIxLjIxMywtMC4wMDEgbCAxMzkuMzksLTEzOS4zOTMgMTM5LjM5NywxMzkuMzk0IGMgMi45MjksMi45MjkgNi43NjcsNC4zOTMgMTAuNjA2LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNT'+
			'k5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODdfIi8+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQ0Ii8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9yaWdodC5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsg'+
			'cmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZXcxMSIgYm9yZGVyY29sb3'+
			'I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2FwZTpncmlk'+
			'IHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdGggZD0iTSA1MC'+
			'wxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAg'+
			'MTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC'+
			'1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlm'+
			'dDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm'+
			'9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJw'+
			'YXRoNDQ5NCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOT'+
			'A2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0'+
			'NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2'+
			'luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU5NyIgdHJhbnNmb3JtPSJtYXRyaXgoMCwwLjE1MTUxNTE1LC0wLjE1MTUxNTE1LDAsNzUsMjUuMDAwMDc2KSI+CiAgPGcgc3R5bGU9'+
			'ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJYTUxJRF84NV8iPgogICA8cGF0aCBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS'+
			'41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg2XyIvPgogICA8cGF0aCBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEg'+
			'LTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2Lj'+
			'U5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9IlhNTElEXzg3XyIvPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTQyIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NCIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3Bh'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9sZWZ0LnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZXJjb2xvcj'+
			'0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'dHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBjeT0iNTAiIHI9IjM4IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5Ii8+CiA8cGF0aCBkPSJNIDUwLD'+
			'EwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAx'+
			'Mi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQyIFoiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LW'+
			'FsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0'+
			'OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub2'+
			'56ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBh'+
			'dGg0NDk0Ii8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW'+
			'5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIGlkPSJ0ZXh0NDU2OCI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLDAuMTUxNTE1MTUsMC4xNTE1MTUxNSwwLDI1LDI1LjAwMDA3NikiPgogIDxnIHN0eWxlPSJm'+
			'aWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iWE1MSURfODVfIj4KICAgPHBhdGggZD0iTSAyNS42MDcsMTkwLjYwNyAxNjQuOTk3LDUxLjIxNCAzMDQuMzkzLDE5MC42MDcgYyAyLjkzLDIuOTI5IDYuNzY4LDQuMzkzIDEwLjYwNyw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyBsIC0xNTAuMDAzLC0xNTAgQyAxNzIuNzksMTYuNTggMTY4Ljk3NiwxNSAxNjQuOTk3LDE1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNT'+
			'gxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NywxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1OCw1Ljg1OCAxNS4zNTYsNS44NTggMjEuMjE0LDAgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJYTUxJRF84Nl8iLz4KICAgPHBhdGggZD0iTSAxNzUuNjAzLDEzOS4zOTMgQyAxNzIuNzksMTM2LjU4IDE2OC45NzUsMTM1IDE2NC45OTcsMTM1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0x'+
			'MC42MDcsNC4zOTQgbCAtMTQ5Ljk5NiwxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1Nyw1Ljg1NyAxNS4zNTUsNS44NTggMjEuMjEzLC0wLjAwMSBsIDEzOS4zOSwtMTM5LjM5MyAxMzkuMzk3LDEzOS4zOTQgYyAyLjkyOSwyLjkyOSA2Ljc2Nyw0LjM5MyAxMC42MDYsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OT'+
			'k5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJYTUxJRF84N18iLz4KICA8L2c+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0MiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1NDQiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNp'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0ic2hvd19jZW50ZXJfYmFyLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIx'+
			'NTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPS'+
			'I4LjY1IiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjODI4NjdiIiBpZD0ibmFtZWR2aWV3MTEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIxMC45ODI2NTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBp'+
			'bmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ4MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiIGlkPSJnNDUxNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuMjcyNzkyMiwtMS4yNzI3OTIyLC0xLjI3Mjc5MjIsMS4yNzI3OTIyLDExMS45NTY1NiwyODIuMTc1MzkpIj4KICA8ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiIGlkPSJnNDUwOSIgdHJhbn'+
			'Nmb3JtPSJ0cmFuc2xhdGUoLTEuNjE1MjIyNiwtMS4wMjk0MzcyKSI+CiAgIDxyZWN0IGhlaWdodD0iMiIgeD0iMTE0IiB3aWR0aD0iMTIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB5PSItNTkiIGlkPSJyZWN0NDQ4NCIvPgogICA8cmVjdCBoZWlnaHQ9IjIiIHg9Ii02OSIgd2lkdGg9IjEyIiBzdHlsZT0iZmls'+
			'bDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NTU1NTU4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeT0iLTEyNiIgaWQ9InJlY3Q0NDg0LTUiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIvPgogIDwvZz4KICA8cmVjdCBoZWlnaHQ9IjIiIHg9IjIxLjkyMDMxMSIgd2lkdGg9IjI0IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLj'+
			'U1NTU1NTU4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeT0iLTEyOS45ODYzMyIgaWQ9InJlY3Q0NDg0LTkiIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0iaGlkZV9jZW50ZXJfYmFyLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIx'+
			'NTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPS'+
			'I4LjY1IiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjODI4NjdiIiBpZD0ibmFtZWR2aWV3MTEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIxMC45ODI2NTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBp'+
			'bmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ4MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiIGlkPSJnNDUxNSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNzI3OTIyLC0xLjI3Mjc5MjIsMS4yNzI3OTIyLDEuMjcyNzkyMiwtMTEuOTU2NTU5LDI4Mi4xNzUzOSkiPgogIDxnIHN0eWxlPSJzdHJva2Utd2lkdGg6MC41NTU1NTU1OCIgaWQ9Imc0NTA5IiB0cmFuc2'+
			'Zvcm09InRyYW5zbGF0ZSgtMS42MTUyMjI2LC0xLjAyOTQzNzIpIj4KICAgPHJlY3QgaGVpZ2h0PSIyIiB4PSIxMTQiIHdpZHRoPSIxMiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHk9Ii01OSIgaWQ9InJlY3Q0NDg0Ii8+CiAgIDxyZWN0IGhlaWdodD0iMiIgeD0iLTY5IiB3aWR0aD0iMTIiIHN0eWxlPSJmaWxs'+
			'OiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB5PSItMTI2IiBpZD0icmVjdDQ0ODQtNSIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIi8+CiAgPC9nPgogIDxyZWN0IGhlaWdodD0iMiIgeD0iMjEuOTIwMzExIiB3aWR0aD0iMjQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNT'+
			'U1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB5PSItMTI5Ljk4NjMzIiBpZD0icmVjdDQ0ODQtOSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX3NvY2lhbF9tZWRpYS5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIu'+
			'MSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEzIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTEiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em'+
			'9vbT0iMTguNDMiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjOGQ4YjhiIiBpZD0ibmFtZWR2aWV3OSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjQxLjM3Mjc2MiIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTpjeT0i'+
			'NTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuNTY4NjI3NDUiLz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC'+
			'1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdGggZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ5LDEwLjUgMTAuNTAwMDAxLDI4LjE5Njc0OCAxMC41MDAwMDEsNTAgMTAuNTAwMDAxLDcxLjgwMzI1MiAyOC4xOTY3NDksODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDggNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MSBjIDIwLjcwODUxMywwIDM3LjQ3NDM1OSwxNi43NjU4NDYgMzcuNDc0MzU5LDM3LjQ3NDM1OSAwLDIwLjcwODUxMiAtMTYuNzY1ODQ2LDM3LjQ3NDM1OCAtMzcuNDc0MzU5LDM3LjQ3'+
			'NDM1OCAtMjAuNzA4NTEyLDAgLTM3LjQ3NDM1OCwtMTYuNzY1ODQ2IC0zNy40NzQzNTgsLTM3LjQ3NDM1OSAwLC0yMC43MDg1MTIgMTYuNzY1ODQ2LC0zNy40NzQzNTggMzcuNDc0MzU4LC0zNy40NzQzNTggeiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm'+
			'9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9u'+
			'Omx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2'+
			'l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFi'+
			'bGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ0OTQiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzAxMDgxMSwwLjQ4OTQ5NDUyLC0wLjQ4OTQ5NDUyLDAuNzMwMTA4MTEsNjcuNzk0MDc0LC0xNi43MzU3MikiPgogID'+
			'xnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NyI+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgi'+
			'IGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjM0MjY0OCwyMS40MzI0NSkiPgogICAgPGNpcmNsZSBjeT0iMjQuNzg0MzE3IiByPSI3LjUiIGN4PSIzNy4zNDI2NDgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NDkyIi8+CiAgICA8ZyBzdHlsZT0ic3Ryb2'+
			'tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2UgY3k9IjYzLjU2NzU1MSIgcng9IjE1IiBjeD0iMzcuNzY4NTg1IiByeT0iMTQuOTk5OTk5IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4x'+
			'Mzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDQ5MCIvPgogICAgIDxyZWN0IGhlaWdodD0iMjAiIHg9IjM1LjI2ODU4NSIgd2lkdGg9IjUiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2'+
			'UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeT0iMzAuMTIxNTQiIGlkPSJyZWN0NDQ5NiIvPgogICAgPC9nPgogICA8L2c+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUwOC03IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxNS40NTUwOTksNjMuMTEyNDUxKSI+CiAgICA8Y2lyY2xlIGN5PSIyNC43ODQzMTci'+
			'IHI9IjcuNSIgY3g9IjM3LjM0MjY0OCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ0OTItOSIvPgogICAgPGcgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3'+
			'Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTAyLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2UgY3k9IjYzLjU2NzU1MSIgcng9IjE1IiBjeD0iMzcuNzY4NTg1IiByeT0iMTQuOTk5OTk5IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tl'+
			'LWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDQ5MC0yIi8+CiAgICAgPHJlY3QgaGVpZ2h0PSIyMCIgeD0iMzUuMjY4NTg1IiB3aWR0aD0iNSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB5PSIzMC4xMjE1NCIgaWQ9InJlY3Q0NDk2LTIiLz4KIC'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9mYWNlYm9vay5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4K'+
			'ICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZXcxMS'+
			'IgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjM4LjA2MjkwMiIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjU3NTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MTgiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5r'+
			'c2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYX'+
			'RoIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIu'+
			'NTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb2'+
			'50LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFz'+
			'ZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7Zm'+
			'lsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJl'+
			'PSIwIiBpZD0icGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2'+
			'xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bG'+
			'V0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzcwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE4MzM1NDU4LDAsMCwwLjE4MzQ3OTI1LDIxLjUwNTk2NCwyMy41KSI+'+
			'CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3MTQiPgogICA8cGF0aCBkPSJtIDE2Ny4xNzIsMjg4Ljg2MSBoIC02Mi4xNiBWIDE1OS4zNDcgSCA3MC43NjkgdiAtNTkuNDggaCAzNC4yNDIgdiAtMzMuNCBDIDEwNS4wMTEsMzUuODA0IDEyNC4xOTUsMCAxNzguMjg0LDAgYyAxOS4wNjgsMCAzMy4wNjYsMS43ODcgMzMuNjUxLDEuODY0IGwgNS43MzksMC43NDYgLTEuMzgyLDU1LjY2MyAtNi4zMjQsLTAuMDU4IGMgLTAuMDEzLDAgLTE0LjIyMywtMC4xMzUgLTI5LjcyNC'+
			'wtMC4xMzUgLTExLjUzNiwwIC0xMy4wNjYsMi44NDcgLTEzLjA2NiwxNC4xNzEgViA5OS44OCBoIDUwLjkxMyBsIC0yLjgyMSw1OS40OCBoIC00OC4wODYgdiAxMjkuNTAxIHogbSAtNDkuMzE0LC0xMi44NTQgaCAzNi40NTMgViAxNDYuNSBoIDQ4LjY3NyBsIDEuNjA3LC0zMy43NzkgSCAxNTQuMzExIFYgNzIuMjM4IGMgMCwtMTMuMzY4IDMuMDc4LC0yNy4wMjUgMjUuOTE5LC0yNy4wMjUgOS4xNzgsMCAxNy44OTksMC4wNDUgMjMuNTA5LDAuMDkgbCAwLjc3OCwtMzEuMjkyIGMgLTUuNjc1LC0wLjUwOCAtMTUuMTE2LC0xLjE1NyAtMjYuMjQ3LC0xLjE1NyAtNDQuNTQ0LDAgLTYwLjQxOSwyNy42'+
			'OTMgLTYwLjQxOSw1My42MTMgdiA0Ni4yNTQgSCA4My42MSBWIDE0Ni41IGggMzQuMjQyIHYgMTI5LjUwNyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDcxMiIvPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDcxNiIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV90d2l0dGVyLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgog'+
			'ICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIi'+
			'Bib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iNTc1MCIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSIwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkxOCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA1NCIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtz'+
			'Y2FwZTpncmlkIHR5cGU9Inh5Z3JpZCIgaWQ9ImdyaWQ0NDkyIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdG'+
			'ggZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41'+
			'MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2Zvbn'+
			'QtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNl'+
			'bGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaW'+
			'xsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9'+
			'IjAiIGlkPSJwYXRoNDQ5NCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbG'+
			'F0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRy'+
			'YW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZX'+
			'R0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogIDx0c3BhbiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIgaWQ9InRzcGFuNDU2NiIvPgogPC90ZXh0PgogPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTAuNDM2MTM4MTU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0ODMzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjA5NTg0NTYxLDAsMCwwLjA5NTc5NjE2LDI1LjQ5MjAzNywyNS41MTM0'+
			'MTgpIj4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NzYiPgogICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NzQiPgogICAgPHBhdGggZD0iTSA1MDguMzQyLDk0LjI0MyBDIDUwNS43MzksOTEuNjQgNTAxLjQsOTAuNzcyIDQ5Ny45MjgsOTEuNjQgbCAtMTcuMzU2LDYuMDc1IGMgMTAuNDE0LC0xMi4xNDkgMTcuMzU2LC0yNS4xNjYgMj'+
			'EuNjk1LC0zNy4zMTUgMS43MzYsLTQuMzM5IDAuODY4LC03LjgxIC0xLjczNiwtMTAuNDE0IC0yLjYwMywtMi42MDMgLTYuOTQyLC0zLjQ3MSAtMTAuNDE0LC0xLjczNiAtMjQuMjk4LDEwLjQxNCAtNDUuMTI1LDE5LjA5MiAtNjIuNDgxLDI0LjI5OCAwLDAuODY4IC0wLjg2OCwwIC0xLjczNiwwIC0xMy44ODUsLTcuODEgLTQ3LjcyOSwtMjUuMTY2IC03Mi4wMjcsLTI1LjE2NiAtNjEuNjE0LDAuODY4IC0xMTEuMDc4LDUyLjkzNiAtMTExLjA3OCwxMTYuMjg1IHYgMy40NzEgQyAxNTIuNTQ0LDE0OS43ODIgMTAzLjA4LDEyMy43NDggNDkuMjc2LDY3LjM0MSBMIDQwLjYsNTguNjYzIDM1LjM5Myw2'+
			'OS4wNzcgYyAtMjkuNTA1LDU2LjQwNyAtOC42NzgsMTA3LjYwNyAyNS4xNjYsMTQyLjMxOSAtMTUuNjIsLTIuNjAzIC0yNi4wMzQsLTcuODEgLTM1LjU4LC0xNS42MiAtMy40NzEsLTIuNjAzIC03LjgxLC0zLjQ3MSAtMTIuMTQ5LC0wLjg2OCAtMy40NzEsMS43MzYgLTUuMjA3LDYuOTQyIC00LjMzOSwxMS4yODEgMTIuMTQ5LDQwLjc4NiA0Mi41MjIsNzMuNzYzIDc1LjQ5OCw5My43MjIgLTE1LjYyLDAgLTI4LjYzNywtMS43MzYgLTQxLjY1NCwtMTAuNDE0IC0zLjQ3MSwtMS43MzYgLTguNjc4LC0xLjczNiAtMTIuMTQ5LDAuODY4IC0zLjQ3MSwyLjYwNCAtNS4yMDcsNi45NDIgLTMuNDcxLDExLj'+
			'I4MSAxNS42Miw0NC4yNTggNDUuOTkzLDY3LjY4OCA5NC41OSw3My43NjMgLTI1LjE2NiwxNC43NTMgLTU4LjE0MiwyNi45MDIgLTEwOS4zNDIsMjcuNzcgLTUuMjA3LDAgLTkuNTQ2LDMuNDcxIC0xMS4yODEsNy44MSAtMS43MzYsNS4yMDcgMCw5LjU0NiAzLjQ3MSwxMy4wMTcgMzEuMjQxLDI1LjE2NiAxMDAuNjY0LDM5LjkxOSAxODYuNTc2LDM5LjkxOSAxNTIuNzMyLDAgMjc3LjY5NSwtMTM2LjI0NCAyNzcuNjk1LC0zMDMuNzI5IHYgLTIuNjAzIGMgMTkuMDkyLC05LjU0NiAzNC43MTIsLTI3Ljc3IDQyLjUyMiwtNTIuOTM2IDAuODY3LC0zLjQ3MiAtMC4wMDEsLTcuODExIC0yLjYwNCwtMTAu'+
			'NDE0IHogbSAtNTIuMDY4LDQ5LjQ2NCAtNS4yMDcsMS43MzYgdiAxNC43NTMgYyAwLDE1Ny45MzkgLTExNy4xNTMsMjg2LjM3MyAtMjYwLjMzOSwyODYuMzczIC03OC45NywwIC0xMzEuOTA1LC0xMy4wMTcgLTE2MC41NDIsLTI2LjkwMiA1OS44NzgsLTQuMzM5IDk0LjU5LC0yMy40MzEgMTIxLjQ5MiwtNDQuMjU4IGwgMjEuNjk1LC0xNS42MiBoIC0yNi4wMzQgYyAtNDkuNDY0LDAgLTc5LjgzNywtMTMuODg1IC05Ny4xOTMsLTQ2Ljg2MSAxNS42Miw1LjIwNyAzMi4xMDgsNS4yMDcgNTAuMzMyLDQuMzM5IDYuOTQyLC0wLjg2OCAxMy44ODUsLTAuODY4IDIwLjgyNywtMC44NjggbCAyLjYwMywtMT'+
			'cuMzU2IGMgLTMyLjk3NiwtOS41NDYgLTcyLjAyNywtMzkuMDUxIC05MS4xMTksLTc4Ljk2OSAxNy4zNTYsNy44MSAzNi40NDcsOS41NDYgNTMuODAzLDkuNTQ2IGggMjYuOTAyIEwgOTEuOCwyMTMuOTk5IEMgNzMuNTc2LDIwMC45ODIgMTkuNzczLDE1NC45ODkgNDUuODA3LDg5LjAzNiBjIDU1LjUzOSw1NC42NzEgMTA4LjQ3NSw3OS44MzcgMjAzLjkzMiw5Ny4xOTMgbCAxMC40MTQsMS43MzYgdiAtMjQuMjk4IGMgMCwtNTMuODAzIDQxLjY1NCwtOTguMDYxIDkzLjcyMiwtOTguOTI5IDE5Ljk1OSwtMC44NjggNTIuOTM2LDE3LjM1NiA2Mi40ODEsMjIuNTYzIDUuMjA3LDIuNjAzIDEwLjQxNCwz'+
			'LjQ3MSAxNS42MiwxLjczNiAxMy4wMTcsLTQuMzM5IDI4LjYzNywtMTAuNDE0IDQ1Ljk5MywtMTcuMzU2IC03LjgxLDEzLjAxNyAtMTguMjI0LDI1LjE2NiAtMzIuMTA4LDM2LjQ0OCAtMy40NzEsMi42MDMgLTQuMzM5LDcuODEgLTIuNjAzLDEyLjE0OSAxLjczNiw0LjMzOSA2Ljk0Miw2LjA3NSAxMS4yODEsNC4zMzkgbCAzMy44NDQsLTExLjI4MSBjIC02LjA3NSwxMS4yOCAtMTUuNjIxLDI0LjI5NyAtMzIuMTA5LDMwLjM3MSB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNT'+
			'tzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ3NzIiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3NzgiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ3ODAiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJv'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9pbnN0YWdyYW0uc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+'+
			'CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnpvb209IjEzLjk5IiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpZD0ibmFtZWR2aWV3MT'+
			'EiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIzOC4wNjI5MDIiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8'+
			'aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KID'+
			'xwYXRoIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMg'+
			'MTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbD'+
			'tmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87'+
			'YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5Oj'+
			'E7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0'+
			'dXJlPSIwIiBpZD0icGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaW'+
			'Y7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTY5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjkzNzcxMzMyLDAsMCwwLjk1NzIyNjcsMjcuNDk0ODgsMjcuMDI2'+
			'NTU5KSI+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MTAtOSI+CiAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTA4LTkiPgogICAgPHBhdGggZD0iTSA0MC40LDUuNSBIIDM1LjYgQyAzNC4xNjYsNS41IDMzLDYuNjY2IDMzLDguMSB2IDQuOCBjIDAsMS40MzQgMS4xNjYsMi42IDIuNiwyLjYgaCA0LjggYyAxLjQzNCwwIDIuNiwtMS4xNj'+
			'YgMi42LC0yLjYgViA4LjEgQyA0Myw2LjY2NiA0MS44MzQsNS41IDQwLjQsNS41IFogbSAwLjYsNy40IGMgMCwwLjMzMSAtMC4yNjksMC42IC0wLjYsMC42IEggMzUuNiBDIDM1LjI2OSwxMy41IDM1LDEzLjIzMSAzNSwxMi45IFYgOC4xIGMgMCwtMC4zMzEgMC4yNjksLTAuNiAwLjYsLTAuNiBoIDQuOCBjIDAuMzMxLDAgMC42LDAuMjY5IDAuNiwwLjYgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNTU0OTgxMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1MDIiLz4K'+
			'ICAgIDxwYXRoIGQ9Ik0gMzcuOCwwLjUgSCAxMC4yIEMgNC41NzYsMC41IDAsNS4wODkgMCwxMC43MzEgdiA2Ljc2OSAyIDE3Ljc3IEMgMCw0Mi45MTEgNC41NzYsNDcuNSAxMC4yLDQ3LjUgSCAzNy44IEMgNDMuNDI0LDQ3LjUgNDgsNDIuOTExIDQ4LDM3LjI3IFYgMTkuNSAxNy41IDEwLjczMSBDIDQ4LDUuMDg5IDQzLjQyNCwwLjUgMzcuOCwwLjUgWiBNIDQ2LDM3LjI3IGMgMCw0LjUzOCAtMy42NzksOC4yMyAtOC4yLDguMjMgSCAxMC4yIEMgNS42NzgsNDUuNSAyLDQxLjgwOCAyLDM3LjI3IFYgMTkuNSBIIDE0LjIyMSBDIDExLjYyLDIyLjA0MyAxMCwyNS41ODQgMTAsMjkuNSBjIDAsNy43Mi'+
			'A2LjI4LDE0IDE0LDE0IDcuNzIsMCAxNCwtNi4yOCAxNCwtMTQgMCwtMy45MTYgLTEuNjIsLTcuNDU3IC00LjIyMSwtMTAgSCA0NiBaIE0gMzYsMjkuNSBjIDAsNi42MTcgLTUuMzgzLDEyIC0xMiwxMiAtNi42MTcsMCAtMTIsLTUuMzgzIC0xMiwtMTIgMCwtNi42MTcgNS4zODMsLTEyIDEyLC0xMiA2LjYxNywwIDEyLDUuMzgzIDEyLDEyIHogbSAtNC44MjYsLTEyIGMgLTIuMTAxLC0xLjI2MSAtNC41NSwtMiAtNy4xNzQsLTIgLTIuNjI0LDAgLTUuMDczLDAuNzM5IC03LjE3NCwyIEggMiBWIDEwLjczMSBDIDIsNi4xOTIgNS42NzksMi41IDEwLjIsMi41IGggMjcuNiBjIDQuNTIxLDAgOC4yLDMu'+
			'NjkyIDguMiw4LjIzMSBWIDE3LjUgWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNTU0OTgxMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1MDQiLz4KICAgIDxwYXRoIGQ9Im0gMTUsMjkuNSBjIDAsNC45NjIgNC4wMzcsOSA5LDkgNC45NjMsMCA5LC00LjAzOCA5LC05IDAsLTQuOTYyIC00LjAzNywtOSAtOSwtOSAtNC45NjMsMCAtOSw0LjAzOCAtOSw5IHogbSAxNiwwIGMgMCwzLjg2IC0zLjE0MSw3IC03LDcgLTMuODU5LDAgLTcsLTMuMTQgLTcsLTcgMCwtMy44Ni'+
			'AzLjE0MSwtNyA3LC03IDMuODU5LDAgNywzLjE0IDcsNyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA1NTQ5ODEyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDUwNiIvPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTEyLTIiLz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9r'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9nb29nbGVfcGx1cy5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJE'+
			'Rj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZX'+
			'cxMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjM4LjA2MjkwMiIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjU3NTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MTgiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8'+
			'aW5rc2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KID'+
			'xwYXRoIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMg'+
			'MTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbD'+
			'tmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87'+
			'YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5Oj'+
			'E7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0'+
			'dXJlPSIwIiBpZD0icGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaW'+
			'Y7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NzEwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjExNTIzNDM4LDAsMCwwLjExNTE2MTA5LDIwLjQ5OTk5OSwyMC41'+
			'MTg3NjEpIj4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY1MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSwxKSI+CiAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjQ5Ij4KICAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW'+
			'Q9Imc0NjQ3Ij4KICAgICA8cGF0aCBkPSJNIDMxOC4xNDcsMjEyLjMzMyBIIDE1Mi42IHYgNzYuOCBoIDgzLjYyNyBjIC0xMS45NDcsMzEuNTczIC0zOC40LDUxLjIgLTczLjM4Nyw1MS4yIC00Ni4wOCwwIC04Ny4wNCwtNDAuMTA3IC04Ny4wNCwtODUuMzMzIDAsLTQ1LjIyNiA0MC45NiwtODUuMzMzIDg3LjA0LC04NS4zMzMgMjIuMTg3LDAgNDAuOTYsNi44MjcgNTQuNjEzLDIwLjQ4IGwgNS45NzMsNS45NzMgNTcuMTczLC01Ny4xNzMgLTYuODI3LC01Ljk3MyBDIDI0Ny4zMiwxMDYuNTIgMjA4LjkyLDkyLjg2NyAxNjIuODQsOTIuODY3IDcwLjY4LDkyLjg2NyAtMSwxNjMuNjkzIC0xLDI1NSBj'+
			'IDAsOTEuMzA3IDcxLjY4LDE2Mi4xMzMgMTYzLjg0LDE2Mi4xMzMgODQuNDgsMCAxNDUuMDY3LC00OS40OTMgMTU2LjE2LC0xMjkuNzA3IDEuNzA3LC0xMC4yNCAyLjU2LC0yMS4zMzMgMi41NiwtMzIuNDI3IDAsLTEyLjggLTAuODUzLC0yNS42IC0yLjU2LC0zNS44NCB6IG0gLTE1LjM2LDcyLjUzNCBjIC0xMS4wOTMsNzIuNTMzIC02My4xNDcsMTE1LjIgLTEzOS45NDcsMTE1LjIgLTgxLjkyLDAgLTE0Ni43NzMsLTY0IC0xNDYuNzczLC0xNDUuMDY3IDAsLTgxLjA2NyA2NC44NTMsLTE0NS4wNjcgMTQ2Ljc3MywtMTQ1LjA2NyAzOC40LDAgNjkuMTIsMTAuMjQgOTMuMDEzLDI5LjAxMyBsIC0zMy'+
			'4yOCwzMy4yOCBjIC0xNS4zNiwtMTIuOCAtMzUuODQsLTE5LjYyNyAtNTkuNzMzLC0xOS42MjcgLTU2LjMyLDAgLTEwNC4xMDcsNDYuOTMzIC0xMDQuMTA3LDEwMi40IDAsNTUuNDY3IDQ3Ljc4NywxMDIuNCAxMDMuMjUzLDEwMi40IDQ2LjA4LDAgODIuNzczLC0yOS44NjcgOTMuMDEzLC03NS4wOTMgbCAyLjU2LC0xMC4yNCBIIDE2OS42NjYgViAyMjkuNCBIIDMwMy42NCBjIDAuODUzLDcuNjggMS43MDcsMTcuMDY3IDEuNzA3LDI1LjYgMCwxMC4yNCAtMC44NTQsMjAuNDggLTIuNTYsMjkuODY3IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7'+
			'c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NjQzIi8+CiAgICAgPHBhdGggZD0ibSA0NTkuOCwyMTIuMzMzIHYgLTUxLjIgaCAtNTkuNzMzIHYgNTEuMiBoIC01MS4yIHYgNTkuNzMzIGggNTEuMiB2IDUxLjIgSCA0NTkuOCB2IC01MS4yIEggNTExIFYgMjEyLjMzMyBaIE0gNDkzLjkzMywyNTUgaCAtNTEuMiB2IDUxLjIgaCAtMjUuNiBWIDI1NSBoIC01MS4yIHYgLTI1LjYgaCA1MS4yIHYgLTUxLjIgaCAyNS42IHYgNTEuMiBoIDUxLjIgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bG'+
			'U9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ2NDUiLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY1MyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NjU1Ii8+CiAgPGcgc3R5'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9saW5rZWRpbi5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4K'+
			'ICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlkPSJuYW1lZHZpZXcxMS'+
			'IgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjM4LjA2MjkwMiIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjU3NTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MTgiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5r'+
			'c2NhcGU6Z3JpZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYX'+
			'RoIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIu'+
			'NTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb2'+
			'50LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFz'+
			'ZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7Zm'+
			'lsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJl'+
			'PSIwIiBpZD0icGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2'+
			'xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bG'+
			'V0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDY0MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODc5MDY4LDAsMCwwLjA4OTM2MzY2LDI3LjQ5NTgxNSwyNy4xMjI4'+
			'NTgpIj4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1ODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTc5Ij4KICAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPS'+
			'JnNDU3NyI+CiAgICAgPHBhdGggZD0iTSA2OC4xMiw0LjI2NyBDIDQ5LjM0Nyw0LjI2NyAzMi4yOCwxMS4wOTQgMTkuNDgsMjMuODk0IDUuODI3LDM3LjU0NyAtMSw1NC42MTMgLTEsNzIuNTMzIGMgMCwxOC43NzMgNy42OCwzNS44NCAyMC40OCw0OC42NCAxMi44LDEyLjggMzAuNzIsMjAuNDggNDcuNzg3LDE5LjYyNyAwLDAgMC44NTMsMCAxLjcwNywwIDE3LjA2NywwIDMzLjI4LC02LjgyNyA0Ni4wOCwtMTkuNjI3IDEyLjgsLTEyLjggMjAuNDgsLTI5Ljg2NyAyMC40OCwtNDguNjQgMC44NTMsLTE3LjkyIC02LjgyNywtMzQuOTg3IC0xOS42MjcsLTQ3Ljc4NyBDIDEwMy4xMDcsMTEuMDkzIDg2'+
			'LjA0LDQuMjY3IDY4LjEyLDQuMjY3IFogbSAzNC45ODcsMTA0Ljk2IGMgLTkuMzg3LDkuMzg3IC0yMi4xODcsMTUuMzYgLTM1Ljg0LDE0LjUwNyAtMTIuOCwwIC0yNi40NTMsLTUuMTIgLTM1Ljg0LC0xNC41MDcgLTEwLjI0LC05LjM4NyAtMTUuMzYsLTIzLjA0IC0xNS4zNiwtMzYuNjkzIDAsLTEzLjY1MyA1LjEyLC0yNi40NTMgMTUuMzYsLTM2LjY5MyA5LjM4NywtOS4zODcgMjIuMTg3LC0xNC41MDcgMzYuNjkzLC0xNC41MDcgMTIuOCwwIDI1LjYsNS4xMiAzNC45ODcsMTQuNTA3IDEwLjI0LDEwLjI0IDE1LjM2LDIzLjA0IDE1LjM2LDM2LjY5MyAwLDEzLjY1MyAtNS4xMiwyNy4zMDYgLTE1Lj'+
			'M2LDM2LjY5MyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ1NzEiLz4KICAgICA8cGF0aCBkPSJNIDEwMS40LDE1Ny44NjcgSCAzMi4yOCBjIC0xMy42NTMsMCAtMjQuNzQ3LDExLjA5MyAtMjQuNzQ3LDI1LjYgdiAyOTguNjY3IGMgMCwxMy42NTMgMTEuOTQ3LDI1LjYgMjUuNiwyNS42IEggMTAxLjQgYyAxMy42NTMsMCAyNS42LC0xMS45NDcgMjUuNiwtMjQuNzQ3IHYgLTI5OS41MiBjIDAsLTEzLjY1NCAt'+
			'MTEuOTQ3LC0yNS42IC0yNS42LC0yNS42IHogbSA4LjUzMywzMjUuMTIgYyAwLDQuMjY3IC00LjI2Nyw3LjY4IC04LjUzMyw3LjY4IEggMzMuMTMzIGMgLTQuMjY3LDAgLTguNTMzLC00LjI2NyAtOC41MzMsLTguNTMzIFYgMTgzLjQ2NyBjIDAsLTQuMjY3IDMuNDEzLC04LjUzMyA3LjY4LC04LjUzMyBoIDY5LjEyIGMgNC4yNjcsMCA4LjUzMyw0LjI2NyA4LjUzMyw4LjUzMyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD'+
			'0icGF0aDQ1NzMiLz4KICAgICA8cGF0aCBkPSJtIDM5MS41MzMsMTQ5LjMzMyBoIC0xNy45MiBjIC0zMy4yOCwwIC02NC44NTMsMTQuNTA3IC04NS4zMzMsMzcuNTQ3IHYgLTExLjk0NyBjIDAsLTguNTMzIC04LjUzMywtMTcuMDY3IC0xNy4wNjcsLTE3LjA2NyBIIDE4NS44OCBjIC03LjY4LDAgLTE3LjA2Nyw2LjgyNyAtMTcuMDY3LDE2LjIxMyB2IDMxOC4yOTMgYyAwLDkuMzg3IDkuMzg3LDE1LjM2IDE3LjA2NywxNS4zNiBoIDkzLjg2NyBjIDcuNjgsMCAxNy4wNjcsLTUuOTczIDE3LjA2NywtMTUuMzYgdiAtMTg0LjMyIGMgMCwtMjguMTYgMjAuNDgsLTUwLjM0NyA0Ni45MzMsLTUwLjM0NyAx'+
			'My42NTMsMCAyNi40NTMsNS4xMiAzNS44NCwxNC41MDcgOC41MzMsNy42OCAxMS45NDcsMTkuNjI3IDExLjk0NywzNC45ODcgdiAxODMuNDY3IGMgMCw4LjUzMyA4LjUzMywxNy4wNjcgMTcuMDY3LDE3LjA2NyBoIDg1LjMzMyBjIDguNTMzLDAgMTcuMDY3LC04LjUzMyAxNy4wNjcsLTE3LjA2NyBWIDI3MC41MDYgQyA1MTEsMjAyLjI0IDQ1OC45NDcsMTQ5LjMzMyAzOTEuNTMzLDE0OS4zMzMgWiBtIDEwMi40LDM0MC40OCAtMC44NTMsMC44NTMgSCA0MDkuNDUzIEwgNDA4LjYsMzA3LjIgYyAwLC0yMC40OCAtNS4xMiwtMzUuODQgLTE2LjIxMywtNDYuOTMzIC0xMi44LC0xMi44IC0yOS44NjcsLT'+
			'E5LjYyNyAtNDcuNzg3LC0xOS42MjcgLTM1Ljg0LDAuODUzIC02NCwyOS44NjcgLTY0LDY3LjQxMyBWIDQ5MC42NjYgSCAxODYuNzMzIFYgMTc0LjkzMyBoIDg0LjQ4IGwgMC44NTMsMC44NTMgdiA1My43NiBsIDIzLjA0LC0yMy4wNCAwLjg1MywtMC44NTMgQyAzMTMuMDI2LDE4MS43NiAzNDIuODkyLDE2Ni40IDM3NC40NjYsMTY2LjQgaCAxNy45MiBjIDU3LjE3MywwIDEwMS41NDcsNDYuMDggMTAxLjU0NywxMDQuMTA3IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0'+
			'cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDU3NSIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU4MyIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU4NSIvPgogIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3Nj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX3NvY2lhbF9tZWRpYS5zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB5PSIwcHgiIGlua3NjYXBlOnZlcnNpb249IjAuOTIu'+
			'MSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEzIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTEiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em'+
			'9vbT0iMTguNDMiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjOGQ4YjhiIiBpZD0ibmFtZWR2aWV3OSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjQxLjM3Mjc2MiIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTpjeT0i'+
			'NTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuNTY4NjI3NDUiLz4KIDxjaXJjbGUgY3k9IjUwIiByPSIzOCIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC'+
			'1vcmRlcjpub3JtYWwiIGlkPSJwYXRoNDQ5OSIvPgogPHBhdGggZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ5LDEwLjUgMTAuNTAwMDAxLDI4LjE5Njc0OCAxMC41MDAwMDEsNTAgMTAuNTAwMDAxLDcxLjgwMzI1MiAyOC4xOTY3NDksODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDggNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MSBjIDIwLjcwODUxMywwIDM3LjQ3NDM1OSwxNi43NjU4NDYgMzcuNDc0MzU5LDM3LjQ3NDM1OSAwLDIwLjcwODUxMiAtMTYuNzY1ODQ2LDM3LjQ3NDM1OCAtMzcuNDc0MzU5LDM3LjQ3'+
			'NDM1OCAtMjAuNzA4NTEyLDAgLTM3LjQ3NDM1OCwtMTYuNzY1ODQ2IC0zNy40NzQzNTgsLTM3LjQ3NDM1OSAwLC0yMC43MDg1MTIgMTYuNzY1ODQ2LC0zNy40NzQzNTggMzcuNDc0MzU4LC0zNy40NzQzNTggeiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm'+
			'9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9u'+
			'Omx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2'+
			'l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFi'+
			'bGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ0OTQiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzAxMDgxMSwwLjQ4OTQ5NDUyLC0wLjQ4OTQ5NDUyLDAuNzMwMTA4MTEsNjcuNzk0MDc0LC0xNi43MzU3MikiPgogID'+
			'xnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDU0NyI+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgi'+
			'IGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjM0MjY0OCwyMS40MzI0NSkiPgogICAgPGNpcmNsZSBjeT0iMjQuNzg0MzE3IiByPSI3LjUiIGN4PSIzNy4zNDI2NDgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9InBhdGg0NDkyIi8+CiAgICA8ZyBzdHlsZT0ic3Ryb2'+
			'tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2UgY3k9IjYzLjU2NzU1MSIgcng9IjE1IiBjeD0iMzcuNzY4NTg1IiByeT0iMTQuOTk5OTk5IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4x'+
			'Mzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDQ5MCIvPgogICAgIDxyZWN0IGhlaWdodD0iMjAiIHg9IjM1LjI2ODU4NSIgd2lkdGg9IjUiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2'+
			'UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeT0iMzAuMTIxNTQiIGlkPSJyZWN0NDQ5NiIvPgogICAgPC9nPgogICA8L2c+CiAgIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJnNDUwOC03IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxNS40NTUwOTksNjMuMTEyNDUxKSI+CiAgICA8Y2lyY2xlIGN5PSIyNC43ODQzMTci'+
			'IHI9IjcuNSIgY3g9IjM3LjM0MjY0OCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0icGF0aDQ0OTItOSIvPgogICAgPGcgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3'+
			'Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaWQ9Imc0NTAyLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSI+CiAgICAgPGVsbGlwc2UgY3k9IjYzLjU2NzU1MSIgcng9IjE1IiBjeD0iMzcuNzY4NTg1IiByeT0iMTQuOTk5OTk5IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tl'+
			'LWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlkPSJwYXRoNDQ5MC0yIi8+CiAgICAgPHJlY3QgaGVpZ2h0PSIyMCIgeD0iMzUuMjY4NTg1IiB3aWR0aD0iNSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMTM3NjQwNDg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB5PSIzMC4xMjE1NCIgaWQ9InJlY3Q0NDk2LTIiLz4KIC'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9pbmZvLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxOC40MyIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZXJjb2'+
			'xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iNTAiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBl'+
			'PSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYXRoIGQ9Ik0gNTAsMTAuNS'+
			'BDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUy'+
			'NTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZX'+
			'JuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFz'+
			'ZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm'+
			'87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ0'+
			'OTQiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTM5NjYxMjksMCwwLDAuMTM5NjYxMjksMTUuMzUyNDUyLDE1LjM1Mjg5NykiPgogIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1ODIiPgogICA8cGF0aCBkPSJtIDMxNS4yNDksMzU5LjU1NSBjIC0xLjM4NywtMi4wMzIgLTQuMDQ4LC0yLjc1NSAtNi4yNywtMS43MDIgLTI0LjU4MiwxMS42Mz'+
			'cgLTUyLjQ4MiwyMy45NCAtNTcuOTU4LDI1LjAxNSAtMC4xMzgsLTAuMTIzIC0wLjM1NywtMC4zNDggLTAuNjQ0LC0wLjczNyAtMC43NDIsLTEuMDA1IC0xLjEwMywtMi4zMTggLTEuMTAzLC00LjAxNSAwLC0xMy45MDUgMTAuNDk1LC01Ni4yMDUgMzEuMTkyLC0xMjUuNzE5IDE3LjQ1MSwtNTguNDA2IDE5LjQ2OSwtNzAuNDk5IDE5LjQ2OSwtNzQuNTE0IDAsLTYuMTk4IC0yLjM3MywtMTEuNDM1IC02Ljg2NSwtMTUuMTQ2IC00LjI2NywtMy41MTkgLTEwLjIyOSwtNS4zMDIgLTE3LjcxOSwtNS4zMDIgLTEyLjQ1OSwwIC0yNi44OTksNC43MyAtNDQuMTQ2LDE0LjQ2MSAtMTYuNzEzLDkuNDMzIC0z'+
			'NS4zNTIsMjUuNDEgLTU1LjM5Niw0Ny40ODcgLTEuNTY5LDEuNzI5IC0xLjczMyw0LjMxNCAtMC4zOTUsNi4yMjggMS4zNCwxLjkxNSAzLjgyNSwyLjY0NCA1Ljk4NiwxLjc2NCA3LjAzNywtMi44NzIgNDIuNDAyLC0xNy4zNTkgNDcuNTU3LC0yMC41OTcgNC4yMjEsLTIuNjQ2IDcuODc1LC0zLjk4OSAxMC44NjEsLTMuOTg5IDAuMTA3LDAgMC4xOTksMC4wMDQgMC4yNzYsMC4wMSAwLjAzNiwwLjE5OCAwLjA3LDAuNSAwLjA3LDAuOTMzIDAsMy4wNDcgLTAuNjI3LDYuNjU0IC0xLjg1NiwxMC43MDMgLTMwLjEzNiw5Ny42NDEgLTQ0Ljc4NSwxNTcuNDk4IC00NC43ODUsMTgyLjk5NCAwLDguOTk4ID'+
			'IuNTAxLDE2LjI0MiA3LjQzMiwyMS41MjggNS4wMjUsNS4zOTMgMTEuODAzLDguMTI3IDIwLjE0Niw4LjEyNyA4Ljg5MSwwIDE5LjcxMiwtMy43MTQgMzMuMDgsLTExLjM1NCAxMi45MzYsLTcuMzkyIDMyLjY4LC0yMy42NTMgNjAuMzYzLC00OS43MTcgMS43OTMsLTEuNjg3IDIuMDkyLC00LjQyNiAwLjcwNSwtNi40NTggeiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ1MDIiLz4KICAgPHBhdGggZD0ibSAzMTQu'+
			'MjgyLDc2LjY3MiBjIC00LjkyNSwtNS4wNDEgLTExLjIyNywtNy41OTcgLTE4LjcyOSwtNy41OTcgLTkuMzQsMCAtMTcuNDc1LDMuNjkxIC0yNC4xNzYsMTAuOTcxIC02LjU5NCw3LjE2IC05LjkzOCwxNS45NDYgLTkuOTM4LDI2LjExMyAwLDguMDMzIDIuNDYzLDE0LjY5IDcuMzIsMTkuNzg1IDQuOTIyLDUuMTcyIDExLjEzOSw3Ljc5NCAxOC40NzYsNy43OTQgOC45NTgsMCAxNy4wNDksLTMuODk4IDI0LjA0NywtMTEuNTg2IDYuODc2LC03LjU1MyAxMC4zNjMsLTE2LjQzMyAxMC4zNjMsLTI2LjM5MyAwLjAwMSwtNy42NTQgLTIuNDc2LC0xNC4wNzUgLTcuMzYzLC0xOS4wODcgeiIgc3R5bGU9Im'+
			'ZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ1MDQiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0i'+
			'dHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9'+
			'InByZXNlcnZlIiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIGlkPSJ0ZXh0NDU2OCI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9pbmZvLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxOC40MyIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZXJjb2'+
			'xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iNTAiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCB0eXBl'+
			'PSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYXRoIGQ9Ik0gNTAsMTAuNS'+
			'BDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUy'+
			'NTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZX'+
			'JuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFz'+
			'ZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm'+
			'87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ0'+
			'OTQiLz4KIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1MDYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTM5NjYxMjksMCwwLDAuMTM5NjYxMjksMTUuMzUyNDUyLDE1LjM1Mjg5NykiPgogIDxnIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpZD0iZzQ1ODIiPgogICA8cGF0aCBkPSJtIDMxNS4yNDksMzU5LjU1NSBjIC0xLjM4NywtMi4wMzIgLTQuMDQ4LC0yLjc1NSAtNi4yNywtMS43MDIgLTI0LjU4MiwxMS42Mz'+
			'cgLTUyLjQ4MiwyMy45NCAtNTcuOTU4LDI1LjAxNSAtMC4xMzgsLTAuMTIzIC0wLjM1NywtMC4zNDggLTAuNjQ0LC0wLjczNyAtMC43NDIsLTEuMDA1IC0xLjEwMywtMi4zMTggLTEuMTAzLC00LjAxNSAwLC0xMy45MDUgMTAuNDk1LC01Ni4yMDUgMzEuMTkyLC0xMjUuNzE5IDE3LjQ1MSwtNTguNDA2IDE5LjQ2OSwtNzAuNDk5IDE5LjQ2OSwtNzQuNTE0IDAsLTYuMTk4IC0yLjM3MywtMTEuNDM1IC02Ljg2NSwtMTUuMTQ2IC00LjI2NywtMy41MTkgLTEwLjIyOSwtNS4zMDIgLTE3LjcxOSwtNS4zMDIgLTEyLjQ1OSwwIC0yNi44OTksNC43MyAtNDQuMTQ2LDE0LjQ2MSAtMTYuNzEzLDkuNDMzIC0z'+
			'NS4zNTIsMjUuNDEgLTU1LjM5Niw0Ny40ODcgLTEuNTY5LDEuNzI5IC0xLjczMyw0LjMxNCAtMC4zOTUsNi4yMjggMS4zNCwxLjkxNSAzLjgyNSwyLjY0NCA1Ljk4NiwxLjc2NCA3LjAzNywtMi44NzIgNDIuNDAyLC0xNy4zNTkgNDcuNTU3LC0yMC41OTcgNC4yMjEsLTIuNjQ2IDcuODc1LC0zLjk4OSAxMC44NjEsLTMuOTg5IDAuMTA3LDAgMC4xOTksMC4wMDQgMC4yNzYsMC4wMSAwLjAzNiwwLjE5OCAwLjA3LDAuNSAwLjA3LDAuOTMzIDAsMy4wNDcgLTAuNjI3LDYuNjU0IC0xLjg1NiwxMC43MDMgLTMwLjEzNiw5Ny42NDEgLTQ0Ljc4NSwxNTcuNDk4IC00NC43ODUsMTgyLjk5NCAwLDguOTk4ID'+
			'IuNTAxLDE2LjI0MiA3LjQzMiwyMS41MjggNS4wMjUsNS4zOTMgMTEuODAzLDguMTI3IDIwLjE0Niw4LjEyNyA4Ljg5MSwwIDE5LjcxMiwtMy43MTQgMzMuMDgsLTExLjM1NCAxMi45MzYsLTcuMzkyIDMyLjY4LC0yMy42NTMgNjAuMzYzLC00OS43MTcgMS43OTMsLTEuNjg3IDIuMDkyLC00LjQyNiAwLjcwNSwtNi40NTggeiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ1MDIiLz4KICAgPHBhdGggZD0ibSAzMTQu'+
			'MjgyLDc2LjY3MiBjIC00LjkyNSwtNS4wNDEgLTExLjIyNywtNy41OTcgLTE4LjcyOSwtNy41OTcgLTkuMzQsMCAtMTcuNDc1LDMuNjkxIC0yNC4xNzYsMTAuOTcxIC02LjU5NCw3LjE2IC05LjkzOCwxNS45NDYgLTkuOTM4LDI2LjExMyAwLDguMDMzIDIuNDYzLDE0LjY5IDcuMzIsMTkuNzg1IDQuOTIyLDUuMTcyIDExLjEzOSw3Ljc5NCAxOC40NzYsNy43OTQgOC45NTgsMCAxNy4wNDksLTMuODk4IDI0LjA0NywtMTEuNTg2IDYuODc2LC03LjU1MyAxMC4zNjMsLTE2LjQzMyAxMC4zNjMsLTI2LjM5MyAwLjAwMSwtNy42NTQgLTIuNDc2LC0xNC4wNzUgLTcuMzYzLC0xOS4wODcgeiIgc3R5bGU9Im'+
			'ZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ny4xNjAxODAwOTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ1MDQiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0i'+
			'dHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9'+
			'InByZXNlcnZlIiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIGlkPSJ0ZXh0NDU2OCI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9tYXBfbWFya2VyLnN2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHk9IjBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxOC40MyIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaWQ9Im5hbWVkdmlldzExIiBib3JkZX'+
			'Jjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iNDAuOTM4Njg3IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgdHlwZT0ieHlncmlkIiBpZD0iZ3JpZDQ0OTIiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBjeT0iNTAiIHI9IjM4IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5Ii8+CiA8cGF0aCBkPS'+
			'JNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0'+
			'MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQyIFoiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YX'+
			'JpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5l'+
			'LXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcn'+
			'VsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIg'+
			'aWQ9InBhdGg0NDk0Ii8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKD'+
			'Q3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNs'+
			'YXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci'+
			'1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIGlkPSJ0ZXh0NDU2OCI+CiAgPHRzcGFuIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIiBpZD0idHNwYW40NTY2Ii8+CiA8L3RleHQ+CiA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTY5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjExOTg3OTY0LDAsMCwwLjExOTg3OTY0LDIwLjUzNDY2MywyMC41MzQ2NjMpIj4K'+
			'ICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTExIj4KICAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiIGlkPSJnNDUwOSI+CiAgICA8cGF0aCBkPSJNIDI0NS43OTEsMCBDIDE1My43OTksMCA3OC45NTcsNzQuODQxIDc4Ljk1NywxNjYuODMzIGMgMCwzNi45NjcgMjEuNzY0LDkzLjE4NyA2OC40OTMsMTc2LjkyNiAzMS44ODcsNTcuMTM4IDYzLjYyNywxMDUuNC'+
			'A2NC45NjYsMTA3LjQzMyBsIDIyLjk0MSwzNC43NzMgYyAyLjMxMywzLjUwNyA2LjIzMiw1LjYxNyAxMC40MzQsNS42MTcgNC4yMDIsMCA4LjEyMSwtMi4xMSAxMC40MzQsLTUuNjE3IGwgMjIuOTQsLTM0Ljc3MSBDIDI4MC40OTEsNDQ5LjE4NCAzMTIsNDAxLjMzOSAzNDQuMTMyLDM0My43NTkgMzkwLjg2MSwyNjAuMDI0IDQxMi42MjUsMjAzLjgwNCA0MTIuNjI1LDE2Ni44MzMgNDEyLjYyNSw3NC44NDEgMzM3Ljc4MywwIDI0NS43OTEsMCBaIG0gNzYuNTExLDMzMS41NzYgYyAtMzEuNjg1LDU2Ljc3NSAtNjIuNjk2LDEwMy44NjkgLTY0LjAwMywxMDUuODQ4IGwgLTEyLjUwOCwxOC45NTkgLTEy'+
			'LjUwNCwtMTguOTU0IEMgMjMxLjk3Myw0MzUuNDM0IDIwMC43MjQsMzg3LjkxOCAxNjkuMjgsMzMxLjU3NiAxMjUuOTM1LDI1My45IDEwMy45NTcsMTk4LjQ3MiAxMDMuOTU3LDE2Ni44MzMgMTAzLjk1Nyw4OC42MjYgMTY3LjU4MywyNSAyNDUuNzkxLDI1IGMgNzguMjA4LDAgMTQxLjgzNCw2My42MjYgMTQxLjgzNCwxNDEuODMzIDAsMzEuNjQzIC0yMS45NzgsODcuMDY5IC02NS4zMjMsMTY0Ljc0MyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC'+
			'41MDE5NjA4MSIgaWQ9InBhdGg0NTA1Ii8+CiAgICA8cGF0aCBkPSJtIDI0NS43OTEsNzMuMjkxIGMgLTUxLjAwNSwwIC05Mi41LDQxLjQ5NiAtOTIuNSw5Mi41IDAsNTEuMDA0IDQxLjQ5NSw5Mi41IDkyLjUsOTIuNSA1MS4wMDUsMCA5Mi41LC00MS40OTYgOTIuNSwtOTIuNSAwLC01MS4wMDQgLTQxLjQ5NSwtOTIuNSAtOTIuNSwtOTIuNSB6IG0gMCwxNjAgYyAtMzcuMjIsMCAtNjcuNSwtMzAuMjggLTY3LjUsLTY3LjUgMCwtMzcuMjIgMzAuMjgsLTY3LjUgNjcuNSwtNjcuNSAzNy4yMjEsMCA2Ny41LDMwLjI4IDY3LjUsNjcuNSAwLDM3LjIyIC0zMC4yNzksNjcuNSAtNjcuNSw2Ny41IHoiIGlu'+
			'a3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpZD0icGF0aDQ1MDciLz4KICAgPC9nPgogIDwvZz4KICA8ZyBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIgaWQ9Imc0NTEzIi8+CiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwOD'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwIiB2aWV3Qm94PSIwIDAgMjYuNDU4MzM0IDI2LjQ1ODMzMyIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX3ZyX2dsYXNzZXMuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2'+
			'RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9InN2ZzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIx'+
			'OC40MyIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjODA3ZDdkIiBpZD0iYmFzZSIgZml0LW1hcmdpbi10b3A9IjAiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIiB1bml0cz0icHgiIGlua3NjYXBlOmN4PSI1MCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbm'+
			'tzY2FwZTp3aW5kb3cteT0iLTExIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBlbXBzcGFjaW5nPSIyIiBkb3R0ZWQ9ImZhbHNlIiBvcmlnaW54PSI2Ny40MjYwNDQiIHR5cGU9Inh5Z3JpZCIgc3BhY2luZ3g9IjIuNjQ1ODMzMyIgb3JpZ2lueT0iMzMuMzAxMDQ1IiBpZD0iZ3JpZDEwIiBzcGFjaW5neT0iMi42NDU4MzMzIi8+CiA8L3NvZGlwb2RpOm5h'+
			'bWVkdmlldz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ny40MjYwND'+
			'IsLTMwMy44NDI2OSkiPgogIDxnIGlkPSJnNDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy45Mzc1MDAyLDEwLjU4MzMzMikiPgogICA8Y2lyY2xlIGN5PSIzMDYuNDg4NTMiIHI9IjEwLjA1NDE2NyIgY3g9Ii02Mi4xMzQzNzciIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50'+
			'LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5Ii8+CiAgIDxwYXRoIGQ9Im0gLTYyLjEzNDM3NiwyOTYuMDM3NDggYyAtNS43Njg3NzcsMCAtMTAuNDUxMDQxLDQuNjgyMjcgLTEwLjQ1MTA0MSwxMC40NTEwNCAwLDUuNzY4NzggNC42ODIyNjQsMTAuNDUxMDUgMTAuNDUxMDQxLDEwLjQ1MTA1IDUuNzY4Nzc3LDAgMTAuNDUxMDQyLC00LjY4MjI3IDEwLjQ1MTA0MiwtMTAuNDUxMDUgMCwtNS43Njg3NyAtNC42ODIyNjUsLTEwLjQ1MTA0IC0xMC40NTEwNDIsLTEwLjQ1MTA0IHogbSAwLDAuNTM1OTUgYyA1LjQ3OTEyNywwIDkuOTE1MDkxLDQuNDM1OTcgOS45MTUwOTEsOS45MTUwOSAwLDUuNDc5MT'+
			'MgLTQuNDM1OTY0LDkuOTE1MDkgLTkuOTE1MDkxLDkuOTE1MDkgLTUuNDc5MTI3LDAgLTkuOTE1MDksLTQuNDM1OTYgLTkuOTE1MDksLTkuOTE1MDkgMCwtNS40NzkxMiA0LjQzNTk2MywtOS45MTUwOSA5LjkxNTA5LC05LjkxNTA5IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQt'+
			'bGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3'+
			'RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1m'+
			'aWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbm'+
			'RlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0Ii8+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4'+
			'NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MT'+
			'E1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEu'+
			'NjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLD'+
			'UxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii04My4wMzY0NTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjEwLjU4MzMzMzAycHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIgeT0iMzE3Ljg2NTYiIGlkPSJ0ZXh0NDU2OCI+CiAgICA8dHNwYW4geD0iLTgzLjAzNjQ1MyIgc3R5bGU9'+
			'InN0cm9rZS13aWR0aDowLjI2NDU4MzMyIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIzMjcuNTIxMDkiIGlkPSJ0c3BhbjQ1NjYiLz4KICAgPC90ZXh0PgogIDwvZz4KICA8cGF0aCBkPSJtIC02MC41NDM4NiwzMTIuNTY2OTEgYyAtMC42MDU1OTksMCAtMS4xMDI3OCwwLjQ3NjgzIC0xLjEwMjc4LDEuMDY3MjMgdiA2Ljg3Mjc0IGMgMCwwLjU5MDM3IDAuNDk3MTcyLDEuMDY3MjIgMS4xMDI3OCwxLjA2NzIyIGggNC44NDU5OTcgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4xMTc0MzQsLTAuMTE3MzYgdiAtMC4wMDIgbCAtMC4xNTA0NjIsMC4xMTM3IGMgMC4xNDc2NzMsMC4wNDQxID'+
			'AuMzAzMDA5LC0wLjA4MyAwLjI4MDc0MSwtMC4yMzgzOSBsIDAuMDAxOSwwLjAwNSBjIDAsMCAtMC4wNTc1NywtMC41ODgzNyAtMC4wMjIwMiwtMS4yNDUwOSBoIDIuNTQ2ODU0IGMgMC4wMzU0MSwwLjY1MzgzIC0wLjAxOTY2LDEuMjM0NTkgLTAuMDIwMTgsMS4yMzk2IC0wLjAyMjI2LDAuMTU1MzYgMC4xMzQ5MDMsMC4yODI1MSAwLjI4MjU3NywwLjIzODM5IGwgLTAuMTUwNDY3LC0wLjExMzY5IHYgMC4wMDIgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4xMTc0MzMsMC4xMTczNiBoIDQuODQ0MTY0IGMgMC42MDU2MDgsMCAxLjEwMjc3OSwtMC40NzY4NSAxLjEwMjc3OSwtMS4wNjcy'+
			'MiB2IC02Ljg3Mjc1IGMgMCwtMC41OTA0IC0wLjQ5NzE4MSwtMS4wNjcyMiAtMS4xMDI3NzksLTEuMDY3MjIgeiBtIDAsMC40MzI3NCBoIDEyLjY5MzkwNiBjIDAuMzczNjE1LDAgMC42NjI0MDMsMC4yODExNyAwLjY2MjQwMywwLjYzNDQ5IHYgNi44NzI3NCBjIDAsMC4zNTMyOCAtMC4yODg3OTgsMC42MzQ0NSAtMC42NjI0MDMsMC42MzQ0NSBoIC00LjY0NDE1NyBjIDAuMDE2MjYsLTAuMjM2NzggMC4wNDAwMiwtMC42MjI1MiAwLjAxMSwtMS4xMDM4OCAtMC4wNDMwMSwtMC43MTM2OCAtMC4xNjU2MDksLTEuNTQ0NDUgLTAuNjkxNzYxLC0xLjk2NzU4IC0wLjI3ODM4NywtMC4yMjM4OSAtMC42NT'+
			'I3MjEsLTAuMzIwODkgLTEuMDIyMDQzLC0wLjMyMDg5IC0wLjM2OTMyNSwwIC0wLjc0MzY2LDAuMDk3IC0xLjAyMjA0NiwwLjMyMDg5IC0wLjUyNjE0OCwwLjQyMzEzIC0wLjY0NjkyMywxLjI1MzkgLTAuNjg5OTI2LDEuOTY3NTggLTAuMDI5LDAuNDgxMzYgLTAuMDA1MywwLjg2NzA5IDAuMDExLDEuMTAzODggaCAtNC42NDU5OTEgYyAtMC4zNzM2MDQsMCAtMC42NjI0MDMsLTAuMjgxMTcgLTAuNjYyNDAzLC0wLjYzNDQ1IHYgLTYuODcyNzQgYyAwLC0wLjM1MzMyIDAuMjg4Nzg5LC0wLjYzNDQ5IDAuNjYyNDAzLC0wLjYzNDQ5IHogbSAyLjM1MDUxOSwxLjM4MjYyIGMgLTAuOTgxNTk2LDAgLTEu'+
			'Nzg1MzY3LDAuNzcxIC0xLjc4NTM2NywxLjcyMzcgMCwwLjk1MjY5IDAuODAzNzcyLDEuNzI1NTIgMS43ODUzNjcsMS43MjU1MiAwLjk4MTU5OCwwIDEuNzg3MjAzLC0wLjc3MjgzIDEuNzg3MjAzLC0xLjcyNTUyIDAsLTAuOTUyNyAtMC44MDU2MDUsLTEuNzIzNyAtMS43ODcyMDMsLTEuNzIzNyB6IG0gNy45OTI4NjksMCBjIC0wLjk4MTU5OSwwIC0xLjc4NTM2OCwwLjc3MSAtMS43ODUzNjgsMS43MjM3IDAsMC45NTI2OCAwLjgwMzc3MSwxLjcyNTUyIDEuNzg1MzY4LDEuNzI1NTIgMC45ODE1OTUsMCAxLjc4NTM2NywtMC43NzI4MyAxLjc4NTM2NywtMS43MjU1MiAwLC0wLjk1MjcgLTAuODAzNz'+
			'csLTEuNzIzNyAtMS43ODUzNjcsLTEuNzIzNyB6IG0gLTcuOTkyODY5LDAuNDMyNzYgYyAwLjc0Nzg5MSwwIDEuMzQ0OTksMC41NzcwNiAxLjM0NDk5LDEuMjkwOTQgMCwwLjcxMzg4IC0wLjU5NzA5OSwxLjI5Mjc2IC0xLjM0NDk5LDEuMjkyNzYgLTAuNzQ3ODg4LDAgLTEuMzQ0OTg3LC0wLjU3ODg4IC0xLjM0NDk4NywtMS4yOTI3NiAwLC0wLjcxMzg4IDAuNTk3MDk5LC0xLjI5MDk0IDEuMzQ0OTg3LC0xLjI5MDk0IHogbSA3Ljk5Mjg2OSwwIGMgMC43NDc4ODgsMCAxLjM0NDk4OCwwLjU3NzA2IDEuMzQ0OTg4LDEuMjkwOTQgMCwwLjcxMzg4IC0wLjU5NzEsMS4yOTI3NiAtMS4zNDQ5ODgsMS4y'+
			'OTI3NiAtMC43NDc4OSwwIC0xLjM0NDk5LC0wLjU3ODg4IC0xLjM0NDk5LC0xLjI5Mjc2IDAsLTAuNzEzODggMC41OTcxLC0xLjI5MDk0IDEuMzQ0OTksLTEuMjkwOTQgeiBtIC0zLjk5NjQzNSwzLjM2NjY5IGMgMC4yODY1MDQsMCAwLjU3MTIyNSwwLjA4NTQgMC43NDMxMzksMC4yMjM3MSAwLjI0MTY3OCwwLjE5NDM2IDAuMzgzOTQ2LDAuNzI2MyAwLjQ2MDU2MiwxLjI1NzkzIGggLTIuNDA1NTY2IGMgMC4wNzY2NCwtMC41MzE1OSAwLjIxNzA1OCwtMS4wNjM1OCAwLjQ1ODcyOCwtMS4yNTc5MyAwLjE3MTkxNiwtMC4xMzgyNSAwLjQ1NjYzNiwtMC4yMjM3MSAwLjc0MzEzNywtMC4yMjM3MSB6IG'+
			'0gMS40ODYyNzcsMy4xNDI5NyBhIDAuMTE3NDQ1OTgsMC4xMTczNjkyNCAwIDAgMCAwLjAxMSwwLjAxMyAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgLTAuMDExLDAuMDAyIGMgMi4xZS01LC0yZS00IC0zLjdlLTUsLTAuMDE0MiAwLC0wLjAxNDcgeiBtIC0yLjk3MjU1MiwwLjAwMiBjIDIuN2UtNSwyLjllLTQgLTJlLTUsMC4wMTI2IDAsMC4wMTMgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgLTAuMDExLC0wLjAwMiAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4wMTEsLTAuMDEwOSB6IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlh'+
			'bnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW'+
			'RlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93'+
			'OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4zMDAwMDAwMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdD'+
			'o0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxODMxNTM7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icmVjdDQ0OTYtNiIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iMTAwIiB2aWV3Qm94PSIwIDAgMjYuNDU4MzM0IDI2LjQ1ODMzMyIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX3ZyX2dsYXNzZXMuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2'+
			'RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9InN2ZzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIx'+
			'OC40MyIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjODA3ZDdkIiBpZD0iYmFzZSIgZml0LW1hcmdpbi10b3A9IjAiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIiB1bml0cz0icHgiIGlua3NjYXBlOmN4PSI1MCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbm'+
			'tzY2FwZTp3aW5kb3cteT0iLTExIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBlbXBzcGFjaW5nPSIyIiBkb3R0ZWQ9ImZhbHNlIiBvcmlnaW54PSI2Ny40MjYwNDQiIHR5cGU9Inh5Z3JpZCIgc3BhY2luZ3g9IjIuNjQ1ODMzMyIgb3JpZ2lueT0iMzMuMzAxMDQ1IiBpZD0iZ3JpZDEwIiBzcGFjaW5neT0iMi42NDU4MzMzIi8+CiA8L3NvZGlwb2RpOm5h'+
			'bWVkdmlldz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ny40MjYwND'+
			'IsLTMwMy44NDI2OSkiPgogIDxnIGlkPSJnNDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy45Mzc1MDAyLDEwLjU4MzMzMikiPgogICA8Y2lyY2xlIGN5PSIzMDYuNDg4NTMiIHI9IjEwLjA1NDE2NyIgY3g9Ii02Mi4xMzQzNzciIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50'+
			'LW9yZGVyOm5vcm1hbCIgaWQ9InBhdGg0NDk5Ii8+CiAgIDxwYXRoIGQ9Im0gLTYyLjEzNDM3NiwyOTYuMDM3NDggYyAtNS43Njg3NzcsMCAtMTAuNDUxMDQxLDQuNjgyMjcgLTEwLjQ1MTA0MSwxMC40NTEwNCAwLDUuNzY4NzggNC42ODIyNjQsMTAuNDUxMDUgMTAuNDUxMDQxLDEwLjQ1MTA1IDUuNzY4Nzc3LDAgMTAuNDUxMDQyLC00LjY4MjI3IDEwLjQ1MTA0MiwtMTAuNDUxMDUgMCwtNS43Njg3NyAtNC42ODIyNjUsLTEwLjQ1MTA0IC0xMC40NTEwNDIsLTEwLjQ1MTA0IHogbSAwLDAuNTM1OTUgYyA1LjQ3OTEyNywwIDkuOTE1MDkxLDQuNDM1OTcgOS45MTUwOTEsOS45MTUwOSAwLDUuNDc5MT'+
			'MgLTQuNDM1OTY0LDkuOTE1MDkgLTkuOTE1MDkxLDkuOTE1MDkgLTUuNDc5MTI3LDAgLTkuOTE1MDksLTQuNDM1OTYgLTkuOTE1MDksLTkuOTE1MDkgMCwtNS40NzkxMiA0LjQzNTk2MywtOS45MTUwOSA5LjkxNTA5LC05LjkxNTA5IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQt'+
			'bGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3'+
			'RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1m'+
			'aWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbm'+
			'RlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0Ii8+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4'+
			'NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MT'+
			'E1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEu'+
			'NjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLD'+
			'UxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii04My4wMzY0NTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjEwLjU4MzMzMzAycHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIgeT0iMzE3Ljg2NTYiIGlkPSJ0ZXh0NDU2OCI+CiAgICA8dHNwYW4geD0iLTgzLjAzNjQ1MyIgc3R5bGU9'+
			'InN0cm9rZS13aWR0aDowLjI2NDU4MzMyIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIzMjcuNTIxMDkiIGlkPSJ0c3BhbjQ1NjYiLz4KICAgPC90ZXh0PgogIDwvZz4KICA8cGF0aCBkPSJtIC02MC41NDM4NiwzMTIuNTY2OTEgYyAtMC42MDU1OTksMCAtMS4xMDI3OCwwLjQ3NjgzIC0xLjEwMjc4LDEuMDY3MjMgdiA2Ljg3Mjc0IGMgMCwwLjU5MDM3IDAuNDk3MTcyLDEuMDY3MjIgMS4xMDI3OCwxLjA2NzIyIGggNC44NDU5OTcgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4xMTc0MzQsLTAuMTE3MzYgdiAtMC4wMDIgbCAtMC4xNTA0NjIsMC4xMTM3IGMgMC4xNDc2NzMsMC4wNDQxID'+
			'AuMzAzMDA5LC0wLjA4MyAwLjI4MDc0MSwtMC4yMzgzOSBsIDAuMDAxOSwwLjAwNSBjIDAsMCAtMC4wNTc1NywtMC41ODgzNyAtMC4wMjIwMiwtMS4yNDUwOSBoIDIuNTQ2ODU0IGMgMC4wMzU0MSwwLjY1MzgzIC0wLjAxOTY2LDEuMjM0NTkgLTAuMDIwMTgsMS4yMzk2IC0wLjAyMjI2LDAuMTU1MzYgMC4xMzQ5MDMsMC4yODI1MSAwLjI4MjU3NywwLjIzODM5IGwgLTAuMTUwNDY3LC0wLjExMzY5IHYgMC4wMDIgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4xMTc0MzMsMC4xMTczNiBoIDQuODQ0MTY0IGMgMC42MDU2MDgsMCAxLjEwMjc3OSwtMC40NzY4NSAxLjEwMjc3OSwtMS4wNjcy'+
			'MiB2IC02Ljg3Mjc1IGMgMCwtMC41OTA0IC0wLjQ5NzE4MSwtMS4wNjcyMiAtMS4xMDI3NzksLTEuMDY3MjIgeiBtIDAsMC40MzI3NCBoIDEyLjY5MzkwNiBjIDAuMzczNjE1LDAgMC42NjI0MDMsMC4yODExNyAwLjY2MjQwMywwLjYzNDQ5IHYgNi44NzI3NCBjIDAsMC4zNTMyOCAtMC4yODg3OTgsMC42MzQ0NSAtMC42NjI0MDMsMC42MzQ0NSBoIC00LjY0NDE1NyBjIDAuMDE2MjYsLTAuMjM2NzggMC4wNDAwMiwtMC42MjI1MiAwLjAxMSwtMS4xMDM4OCAtMC4wNDMwMSwtMC43MTM2OCAtMC4xNjU2MDksLTEuNTQ0NDUgLTAuNjkxNzYxLC0xLjk2NzU4IC0wLjI3ODM4NywtMC4yMjM4OSAtMC42NT'+
			'I3MjEsLTAuMzIwODkgLTEuMDIyMDQzLC0wLjMyMDg5IC0wLjM2OTMyNSwwIC0wLjc0MzY2LDAuMDk3IC0xLjAyMjA0NiwwLjMyMDg5IC0wLjUyNjE0OCwwLjQyMzEzIC0wLjY0NjkyMywxLjI1MzkgLTAuNjg5OTI2LDEuOTY3NTggLTAuMDI5LDAuNDgxMzYgLTAuMDA1MywwLjg2NzA5IDAuMDExLDEuMTAzODggaCAtNC42NDU5OTEgYyAtMC4zNzM2MDQsMCAtMC42NjI0MDMsLTAuMjgxMTcgLTAuNjYyNDAzLC0wLjYzNDQ1IHYgLTYuODcyNzQgYyAwLC0wLjM1MzMyIDAuMjg4Nzg5LC0wLjYzNDQ5IDAuNjYyNDAzLC0wLjYzNDQ5IHogbSAyLjM1MDUxOSwxLjM4MjYyIGMgLTAuOTgxNTk2LDAgLTEu'+
			'Nzg1MzY3LDAuNzcxIC0xLjc4NTM2NywxLjcyMzcgMCwwLjk1MjY5IDAuODAzNzcyLDEuNzI1NTIgMS43ODUzNjcsMS43MjU1MiAwLjk4MTU5OCwwIDEuNzg3MjAzLC0wLjc3MjgzIDEuNzg3MjAzLC0xLjcyNTUyIDAsLTAuOTUyNyAtMC44MDU2MDUsLTEuNzIzNyAtMS43ODcyMDMsLTEuNzIzNyB6IG0gNy45OTI4NjksMCBjIC0wLjk4MTU5OSwwIC0xLjc4NTM2OCwwLjc3MSAtMS43ODUzNjgsMS43MjM3IDAsMC45NTI2OCAwLjgwMzc3MSwxLjcyNTUyIDEuNzg1MzY4LDEuNzI1NTIgMC45ODE1OTUsMCAxLjc4NTM2NywtMC43NzI4MyAxLjc4NTM2NywtMS43MjU1MiAwLC0wLjk1MjcgLTAuODAzNz'+
			'csLTEuNzIzNyAtMS43ODUzNjcsLTEuNzIzNyB6IG0gLTcuOTkyODY5LDAuNDMyNzYgYyAwLjc0Nzg5MSwwIDEuMzQ0OTksMC41NzcwNiAxLjM0NDk5LDEuMjkwOTQgMCwwLjcxMzg4IC0wLjU5NzA5OSwxLjI5Mjc2IC0xLjM0NDk5LDEuMjkyNzYgLTAuNzQ3ODg4LDAgLTEuMzQ0OTg3LC0wLjU3ODg4IC0xLjM0NDk4NywtMS4yOTI3NiAwLC0wLjcxMzg4IDAuNTk3MDk5LC0xLjI5MDk0IDEuMzQ0OTg3LC0xLjI5MDk0IHogbSA3Ljk5Mjg2OSwwIGMgMC43NDc4ODgsMCAxLjM0NDk4OCwwLjU3NzA2IDEuMzQ0OTg4LDEuMjkwOTQgMCwwLjcxMzg4IC0wLjU5NzEsMS4yOTI3NiAtMS4zNDQ5ODgsMS4y'+
			'OTI3NiAtMC43NDc4OSwwIC0xLjM0NDk5LC0wLjU3ODg4IC0xLjM0NDk5LC0xLjI5Mjc2IDAsLTAuNzEzODggMC41OTcxLC0xLjI5MDk0IDEuMzQ0OTksLTEuMjkwOTQgeiBtIC0zLjk5NjQzNSwzLjM2NjY5IGMgMC4yODY1MDQsMCAwLjU3MTIyNSwwLjA4NTQgMC43NDMxMzksMC4yMjM3MSAwLjI0MTY3OCwwLjE5NDM2IDAuMzgzOTQ2LDAuNzI2MyAwLjQ2MDU2MiwxLjI1NzkzIGggLTIuNDA1NTY2IGMgMC4wNzY2NCwtMC41MzE1OSAwLjIxNzA1OCwtMS4wNjM1OCAwLjQ1ODcyOCwtMS4yNTc5MyAwLjE3MTkxNiwtMC4xMzgyNSAwLjQ1NjYzNiwtMC4yMjM3MSAwLjc0MzEzNywtMC4yMjM3MSB6IG'+
			'0gMS40ODYyNzcsMy4xNDI5NyBhIDAuMTE3NDQ1OTgsMC4xMTczNjkyNCAwIDAgMCAwLjAxMSwwLjAxMyAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgLTAuMDExLDAuMDAyIGMgMi4xZS01LC0yZS00IC0zLjdlLTUsLTAuMDE0MiAwLC0wLjAxNDcgeiBtIC0yLjk3MjU1MiwwLjAwMiBjIDIuN2UtNSwyLjllLTQgLTJlLTUsMC4wMTI2IDAsMC4wMTMgYSAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgLTAuMDExLC0wLjAwMiAwLjExNzQ0NTk4LDAuMTE3MzY5MjQgMCAwIDAgMC4wMTEsLTAuMDEwOSB6IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlh'+
			'bnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW'+
			'RlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93'+
			'OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4zMDAwMDAwMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdD'+
			'o0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxODMxNTM7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icmVjdDQ0OTYtNiIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9wZGYuc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3Jr'+
			'IHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnpvb209IjE4LjQzIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpZD0ibmFtZWR2aWV3MTEiIGJvcmRlcmNvbG'+
			'9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSI0MC45Mzg2ODciIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3Jp'+
			'ZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYXRoIGQ9Ik0gNT'+
			'AsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUw'+
			'IDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbn'+
			'QtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hp'+
			'ZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm'+
			'5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0i'+
			'cGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5Lj'+
			'kwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'NDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYW'+
			'Npbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxwYXRoIGQ9Ik0gNzMuNTkzNzEyLDU1LjU1OTcxMSBDIDcyLjYxNDI0NCw1NC41OTQ4NjUgNzAuNDQyMTc3LDU0LjA4Mzk2IDY3LjEzNjc2Niw1NC4wNDA0NzcgNjQuODk5MjM5LDU0LjAxNTc4NyA2Mi4yMDYyNzMsNTQuMjEyODM0IDU5LjM3MzgwOCw1NC42MDkzNjYgNTguMTA1NDA5LDUzLjg3NzU5'+
			'IDU2Ljc5ODEwOSw1My4wODEzNyA1NS43NzIsNTIuMTIyNDI0IGMgLTIuNzYwMjc4LC0yLjU3NzIyIC01LjA2NDQsLTYuMTU0NzE4IC02LjUwMDI5OCwtMTAuMDg4NTYgMC4wOTM1OCwtMC4zNjczOTMgMC4xNzMyNDEsLTAuNjkwMjk2IDAuMjQ3NDQ5LC0xLjAxOTgwNCAwLDAgMS41NTQ4ODQsLTguODMwMzczIDEuMTQzMjM0LC0xMS44MTU4NzYgLTAuMDU2NzEsLTAuNDA5NDQ1IC0wLjA5MTQzLC0wLjUyODI3NSAtMC4yMDE1MjMsLTAuODQ2NDM5IGwgLTAuMTM1MDY0LC0wLjM0Njg3MSBjIC0wLjQyMjk5LC0wLjk3NTMyMSAtMS4yNTIxNzcsLTIuMDA4NzU2IC0yLjU1MjI5MywtMS45NTIzNjEgbC'+
			'AtMC43NjI0NDUsLTAuMDI0MjUgLTAuMDIwOTcsLTQuMzRlLTQgYyAtMS40NDk2NzcsMCAtMi42MzEyMzcsMC43NDEzODcgLTIuOTQxNDExLDEuODQ5NDU1IC0wLjk0Mjg2NiwzLjQ3NTQ2NSAwLjAzLDguNjc0ODAzIDEuNzkyODY0LDE1LjQwODg3OCBsIC0wLjQ1MTI2NiwxLjA5Njg2OSBjIC0xLjI2MjIyNCwzLjA3NjYzNyAtMi44NDQwOTcsNi4xNzUzOCAtNC4yMzk4MDcsOC45MDkxNjUgbCAtMC4xODE0MjUsMC4zNTU0ODUgYyAtMS40NjgzMzcsMi44NzMxMjkgLTIuODAwNjA3LDUuMzExOTg5IC00LjAwODQzMyw3LjM3ODE1NiBsIC0xLjI0NzAxLDAuNjU5Mjk4IGMgLTAuMDkwNzEsMC4wNDc5'+
			'MyAtMi4yMjc5MTQsMS4xNzgxMDMgLTIuNzI5MTMsMS40ODEzNDkgLTQuMjUyNTgxLDIuNTM4NzQ1IC03LjA3MDU1Niw1LjQyMDYzNyAtNy41MzgwNDEsNy43MDc4MDkgLTAuMTQ4NywwLjcyOTc2NyAtMC4wMzgwNCwxLjY2Mzc0OSAwLjcxODY2OCwyLjA5NjE1NiBsIDEuMjA2MTAzLDAuNjA2OTEyIGMgMC41MjMxNzYsMC4yNjIwNjUgMS4wNzQ5MTYsMC4zOTQ4MSAxLjY0MDE0NiwwLjM5NDgxIDMuMDI4ODI0LDAgNi41NDUwODUsLTMuNzcyMzk4IDExLjM4OTAyMSwtMTIuMjI0ODk1IDUuNTkyNzQyLC0xLjgyMDQ1NyAxMS45NjAxMzMsLTMuMzMzNjcxIDE3LjU0MDY3NiwtNC4xNjgzNDIgNC4yNT'+
			'I3MjEsMi4zOTQzNzggOS40ODMzNDEsNC4wNTc0MTIgMTIuNzg0NTksNC4wNTc0MTIgMC41ODYxOTMsMCAxLjA5MTU2MSwtMC4wNTU5NiAxLjUwMjIxLC0wLjE2NDYxNSAwLjYzMzExNiwtMC4xNjc2MTkgMS4xNjY3NzksLTAuNTI4NzAzIDEuNDkyMTYxLC0xLjAxODUxMyAwLjY0MDU5MSwtMC45NjM4MzcgMC43NzAzNDgsLTIuMjkxMzM0IDAuNTk2NTI0LC0zLjY1MDY5IC0wLjA1MTkxLC0wLjQwMzQxMSAtMC4zNzQxOSwtMC45MDIyNzEgLTAuNzIyODM0LC0xLjI0MjgyIHogbSAtNDUuMjM5MDEsMTYuMTE0MjQgYyAwLjU1MjMxMiwtMS41MDk5MDQgMi43Mzg2LC00LjQ5NTEyNSA1Ljk3MTI0LC03'+
			'LjE0MzgwNiAwLjIwMzI0MiwtMC4xNjQ3NDkgMC43MDM4ODQsLTAuNjMzNzUyIDEuMTYyMTg0LC0xLjA2OTMxNSAtMy4zODAzMzUsNS4zOTA2NDEgLTUuNjQ0MTMxLDcuNTM5MTgyIC03LjEzMzQyNCw4LjIxMzEyMSB6IE0gNDcuNTAxMDc5LDI3LjU4OTQwNCBjIDAuOTczNTg1LDAgMS41Mjc0NzgsMi40NTM2MzkgMS41NzM0MDQsNC43NTQxNTggMC4wNDU5MywyLjMwMDUxOSAtMC40OTIxNjksMy45MTUwNDQgLTEuMTU5NTk3LDUuMTA5NjQ5IC0wLjU1Mjc0NCwtMS43Njg2NTcgLTAuODIwMDAxLC00LjU1NjU0NCAtMC44MjAwMDEsLTYuMzc5NDUxIDAsMCAtMC4wNDA2NCwtMy40ODQzNTYgMC40MD'+
			'YxOTQsLTMuNDg0MzU2IHogbSAtNS43MTEzMDEsMzEuNDE1NjIxIGMgMC42NzgxOTEsLTEuMjEzODMyIDEuMzgzNzk2LC0yLjQ5Mzk2OSAyLjEwNDkwNCwtMy44NTE3NSAxLjc1NzcsLTMuMzIzNDgxIDIuODY3NjM0LC01LjkyMzk0MSAzLjY5NDM4NCwtOC4wNjE1NzEgMS42NDQxNjMsMi45OTExMDcgMy42OTE5NDYsNS41MzM4NyA2LjA5OTEzMyw3LjU3MTE4OCAwLjMwMDI2NywwLjI1NDE2NCAwLjYxODQ3NCwwLjUwOTYxNSAwLjk1MjYxNywwLjc2NDIwNyAtNC44OTUxNzIsMC45Njg0MyAtOS4xMjYwODEsMi4xNDYyNDYgLTEyLjg1MTAzOCwzLjU3NzkyNiB6IG0gMzAuODYzMjI2LC0wLjI3NTY4'+
			'NiBjIC0wLjI5ODExNywwLjE4NjQyNCAtMS4xNTIxMzgsMC4yOTQyMDQgLTEuNzAxNDMxLDAuMjk0MjA0IC0xLjc3MzA2MSwwIC0zLjk2NjY3MiwtMC44MTA0MiAtNy4wNDIsLTIuMTI4NzM1IDEuMTgxNzAzLC0wLjA4NzQgMi4yNjUwOTEsLTAuMTMxODgzIDMuMjM2NjYxLC0wLjEzMTg4MyAxLjc3ODUxLDAgMi4zMDUxMywtMC4wMDc3IDQuMDQ0MDMzLDAuNDM1Njk2IDEuNzM4ODk1LDAuNDQzNDY1IDEuNzYwODUzLDEuMzQ0MzAxIDEuNDYyNzM3LDEuNTMwNzE4IHoiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OT'+
			'Q7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3NjY3NjY2NjY2NjY3NzY2NzY2NjY2Njc3Njc3NzIiBpZD0icGF0aDMtMSIvPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSIxMDBweCIgeD0iMHB4IiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9wZGYuc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3Jr'+
			'IHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnpvb209IjE4LjQzIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpZD0ibmFtZWR2aWV3MTEiIGJvcmRlcmNvbG'+
			'9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBndWlkZXRvbGVyYW5jZT0iMTAiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSI0MC45Mzg2ODciIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3Jp'+
			'ZCB0eXBlPSJ4eWdyaWQiIGlkPSJncmlkNDQ5MiIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KIDxwYXRoIGQ9Ik0gNT'+
			'AsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUw'+
			'IDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbn'+
			'QtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hp'+
			'ZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm'+
			'5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0i'+
			'cGF0aDQ0OTQiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5Lj'+
			'kwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'NDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYW'+
			'Npbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgaWQ9InRleHQ0NTY4Ij4KICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KIDwvdGV4dD4KIDxwYXRoIGQ9Ik0gNzMuNTkzNzEyLDU1LjU1OTcxMSBDIDcyLjYxNDI0NCw1NC41OTQ4NjUgNzAuNDQyMTc3LDU0LjA4Mzk2IDY3LjEzNjc2Niw1NC4wNDA0NzcgNjQuODk5MjM5LDU0LjAxNTc4NyA2Mi4yMDYyNzMsNTQuMjEyODM0IDU5LjM3MzgwOCw1NC42MDkzNjYgNTguMTA1NDA5LDUzLjg3NzU5'+
			'IDU2Ljc5ODEwOSw1My4wODEzNyA1NS43NzIsNTIuMTIyNDI0IGMgLTIuNzYwMjc4LC0yLjU3NzIyIC01LjA2NDQsLTYuMTU0NzE4IC02LjUwMDI5OCwtMTAuMDg4NTYgMC4wOTM1OCwtMC4zNjczOTMgMC4xNzMyNDEsLTAuNjkwMjk2IDAuMjQ3NDQ5LC0xLjAxOTgwNCAwLDAgMS41NTQ4ODQsLTguODMwMzczIDEuMTQzMjM0LC0xMS44MTU4NzYgLTAuMDU2NzEsLTAuNDA5NDQ1IC0wLjA5MTQzLC0wLjUyODI3NSAtMC4yMDE1MjMsLTAuODQ2NDM5IGwgLTAuMTM1MDY0LC0wLjM0Njg3MSBjIC0wLjQyMjk5LC0wLjk3NTMyMSAtMS4yNTIxNzcsLTIuMDA4NzU2IC0yLjU1MjI5MywtMS45NTIzNjEgbC'+
			'AtMC43NjI0NDUsLTAuMDI0MjUgLTAuMDIwOTcsLTQuMzRlLTQgYyAtMS40NDk2NzcsMCAtMi42MzEyMzcsMC43NDEzODcgLTIuOTQxNDExLDEuODQ5NDU1IC0wLjk0Mjg2NiwzLjQ3NTQ2NSAwLjAzLDguNjc0ODAzIDEuNzkyODY0LDE1LjQwODg3OCBsIC0wLjQ1MTI2NiwxLjA5Njg2OSBjIC0xLjI2MjIyNCwzLjA3NjYzNyAtMi44NDQwOTcsNi4xNzUzOCAtNC4yMzk4MDcsOC45MDkxNjUgbCAtMC4xODE0MjUsMC4zNTU0ODUgYyAtMS40NjgzMzcsMi44NzMxMjkgLTIuODAwNjA3LDUuMzExOTg5IC00LjAwODQzMyw3LjM3ODE1NiBsIC0xLjI0NzAxLDAuNjU5Mjk4IGMgLTAuMDkwNzEsMC4wNDc5'+
			'MyAtMi4yMjc5MTQsMS4xNzgxMDMgLTIuNzI5MTMsMS40ODEzNDkgLTQuMjUyNTgxLDIuNTM4NzQ1IC03LjA3MDU1Niw1LjQyMDYzNyAtNy41MzgwNDEsNy43MDc4MDkgLTAuMTQ4NywwLjcyOTc2NyAtMC4wMzgwNCwxLjY2Mzc0OSAwLjcxODY2OCwyLjA5NjE1NiBsIDEuMjA2MTAzLDAuNjA2OTEyIGMgMC41MjMxNzYsMC4yNjIwNjUgMS4wNzQ5MTYsMC4zOTQ4MSAxLjY0MDE0NiwwLjM5NDgxIDMuMDI4ODI0LDAgNi41NDUwODUsLTMuNzcyMzk4IDExLjM4OTAyMSwtMTIuMjI0ODk1IDUuNTkyNzQyLC0xLjgyMDQ1NyAxMS45NjAxMzMsLTMuMzMzNjcxIDE3LjU0MDY3NiwtNC4xNjgzNDIgNC4yNT'+
			'I3MjEsMi4zOTQzNzggOS40ODMzNDEsNC4wNTc0MTIgMTIuNzg0NTksNC4wNTc0MTIgMC41ODYxOTMsMCAxLjA5MTU2MSwtMC4wNTU5NiAxLjUwMjIxLC0wLjE2NDYxNSAwLjYzMzExNiwtMC4xNjc2MTkgMS4xNjY3NzksLTAuNTI4NzAzIDEuNDkyMTYxLC0xLjAxODUxMyAwLjY0MDU5MSwtMC45NjM4MzcgMC43NzAzNDgsLTIuMjkxMzM0IDAuNTk2NTI0LC0zLjY1MDY5IC0wLjA1MTkxLC0wLjQwMzQxMSAtMC4zNzQxOSwtMC45MDIyNzEgLTAuNzIyODM0LC0xLjI0MjgyIHogbSAtNDUuMjM5MDEsMTYuMTE0MjQgYyAwLjU1MjMxMiwtMS41MDk5MDQgMi43Mzg2LC00LjQ5NTEyNSA1Ljk3MTI0LC03'+
			'LjE0MzgwNiAwLjIwMzI0MiwtMC4xNjQ3NDkgMC43MDM4ODQsLTAuNjMzNzUyIDEuMTYyMTg0LC0xLjA2OTMxNSAtMy4zODAzMzUsNS4zOTA2NDEgLTUuNjQ0MTMxLDcuNTM5MTgyIC03LjEzMzQyNCw4LjIxMzEyMSB6IE0gNDcuNTAxMDc5LDI3LjU4OTQwNCBjIDAuOTczNTg1LDAgMS41Mjc0NzgsMi40NTM2MzkgMS41NzM0MDQsNC43NTQxNTggMC4wNDU5MywyLjMwMDUxOSAtMC40OTIxNjksMy45MTUwNDQgLTEuMTU5NTk3LDUuMTA5NjQ5IC0wLjU1Mjc0NCwtMS43Njg2NTcgLTAuODIwMDAxLC00LjU1NjU0NCAtMC44MjAwMDEsLTYuMzc5NDUxIDAsMCAtMC4wNDA2NCwtMy40ODQzNTYgMC40MD'+
			'YxOTQsLTMuNDg0MzU2IHogbSAtNS43MTEzMDEsMzEuNDE1NjIxIGMgMC42NzgxOTEsLTEuMjEzODMyIDEuMzgzNzk2LC0yLjQ5Mzk2OSAyLjEwNDkwNCwtMy44NTE3NSAxLjc1NzcsLTMuMzIzNDgxIDIuODY3NjM0LC01LjkyMzk0MSAzLjY5NDM4NCwtOC4wNjE1NzEgMS42NDQxNjMsMi45OTExMDcgMy42OTE5NDYsNS41MzM4NyA2LjA5OTEzMyw3LjU3MTE4OCAwLjMwMDI2NywwLjI1NDE2NCAwLjYxODQ3NCwwLjUwOTYxNSAwLjk1MjYxNywwLjc2NDIwNyAtNC44OTUxNzIsMC45Njg0MyAtOS4xMjYwODEsMi4xNDYyNDYgLTEyLjg1MTAzOCwzLjU3NzkyNiB6IG0gMzAuODYzMjI2LC0wLjI3NTY4'+
			'NiBjIC0wLjI5ODExNywwLjE4NjQyNCAtMS4xNTIxMzgsMC4yOTQyMDQgLTEuNzAxNDMxLDAuMjk0MjA0IC0xLjc3MzA2MSwwIC0zLjk2NjY3MiwtMC44MTA0MiAtNy4wNDIsLTIuMTI4NzM1IDEuMTgxNzAzLC0wLjA4NzQgMi4yNjUwOTEsLTAuMTMxODgzIDMuMjM2NjYxLC0wLjEzMTg4MyAxLjc3ODUxLDAgMi4zMDUxMywtMC4wMDc3IDQuMDQ0MDMzLDAuNDM1Njk2IDEuNzM4ODk1LDAuNDQzNDY1IDEuNzYwODUzLDEuMzQ0MzAxIDEuNDYyNzM3LDEuNTMwNzE4IHoiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OT'+
			'Q7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3NjY3NjY2NjY2NjY3NzY2NzY2NjY2Njc3Njc3NzIiBpZD0icGF0aDMtMSIvPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyBoZWlnaHQ9IjEwMHB4IiB4PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW'+
			'9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHdpZHRoPSIxMDBweCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX2Nsb3NlX2luZm9fdGV4dF9ib3guc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeT0iMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIw'+
			'LjkyLjEgcjE1MzcxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYX'+
			'BlOnpvb209IjE4LjQzIiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzg2ODA3YiIgaWQ9Im5hbWVkdmlldzExIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iNTAuNDM0MDc1IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBl'+
			'OmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIvPgogPGcgaWQ9Imc0NTY2Ij4KICA8Y2lyY2xlIGN5PSI1MCIgcj0iMzgiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNT'+
			'AxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBpZD0icGF0aDQ0OTkiLz4KICA8cGF0aCBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0'+
			'MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQyIFoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb2'+
			'50LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7'+
			'd3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2'+
			'xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzph'+
			'dXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaWQ9InBhdGg0NDk0Ii8+CiAgPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaH'+
			'Q6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiBpZD0idGV4dDQ1NjgiPgogICA8dHNwYW4geD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiIGlkPSJ0c3BhbjQ1NjYiLz4KICA8L3RleHQ+CiA8L2c+CiA8cGF0aCBkPSJNIDMxLjI2MTY3MiwzMy4zODI5OTEgNDcuODc4NjgyLDUwIDMxLjI2MTY3Miw2Ni42MTcwMDkgMzMuMzgyOTkzLDY4LjczODMzIDQ5Ljk5'+
			'OTk5OCw1Mi4xMjEzMiA2Ni42MTcwMDgsNjguNzM4MzMgNjguNzM4MzI4LDY2LjYxNzAwOSA1Mi4xMjEzMTgsNTAgNjguNzM4MzI4LDMzLjM4Mjk5MSA2Ni42MTcwMDgsMzEuMjYxNjcgNDkuOTk5OTk4LDQ3Ljg3ODY4IDMzLjM4Mjk5MywzMS4yNjE2NyBaIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODE7cGFpbn'+
			'Qtb3JkZXI6bWFya2VycyBmaWxsIHN0cm9rZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InJlY3Q0NDg2Ii8+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjY0MCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB3aWR0aD0iNjAwMCIgdmlld0JveD0iMCAwIDE1ODcuNSAxNjkuMzMzMzQiIHNvZGlwb2RpOmRvY25hbWU9InN2Z19zcGxhc2hfd2lyZXMuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2'+
			'RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9InN2ZzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIw'+
			'LjU0NDUiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2xvcj0iIzgwN2Q3ZCIgaWQ9ImJhc2UiIGZpdC1tYXJnaW4tdG9wPSIwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJmYWxzZSIgdW5pdHM9InB4IiBpbmtzY2FwZTpjeD0iMzAwMCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZml0LW1hcmdpbi1sZWZ0PSIwIi'+
			'BpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6Y3k9IjMyMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdyaWQgZW1wc3BhY2luZz0iMiIgZG90dGVkPSJmYWxzZSIgb3JpZ2lueD0iLTAuNTI1MjM5MzUiIHR5cGU9Inh5Z3JpZCIgc3BhY2luZ3g9IjIuNjQ1ODMzMyIgb3JpZ2lueT0iLTUuMDIwMDc1NCIgaWQ9ImdyaWQxMCIgc3BhY2luZ3k9IjIuNjQ1ODMzMyIvPgogPC9zb2Rp'+
			'cG9kaTpuYW1lZHZpZXc+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLT'+
			'AuNTI1MjM5NDUsLTEyMi42NDY1NykiPgogIDxlbGxpcHNlIGN5PSIyODkuMjAxOSIgcng9Ijg0LjM5NTI5NCIgY3g9Ijc2OC4yNTQwMyIgcnk9Ijg0LjM5NTI4NyIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yNTA5ODAzOTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC41MjkxNjY2NDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgaWQ9InBhdGg4IiB0cmFuc2Zvcm09InJvdGF0ZSgtNS45OTk5OTk0KSIvPgogIDxyZWN0IGhlaWdodD0iMC41MjkxNjY3IiB4PSIwLjUyNTIzOTQ3IiB3aWR0aD0iNzkzLjIyMDgzIiBzdHlsZT0ib3BhY2l0'+
			'eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41MjkxNjY2NDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTIyLjY0NjU3IiBpZD0icmVjdDQ1MDAiLz4KICA8cmVjdCBoZWlnaHQ9IjAuNTI5MTY2NzYiIHg9Ijc5NC44MDQ0NCIgd2lkdGg9Ijc5My4yMjA4MyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NjQ7c3Ryb2tlLWxpbmVqb2luOn'+
			'JvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjI5MS40NTA3NCIgaWQ9InJlY3Q0NTAwLTciLz4KIDwvZz4KPC9zdmc+Cg==';
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
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._estar_jardin);
		me._estar_jardin__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._estar_jardin__normal.style.visibility='inherit';
		me._estar_jardin__normal.style.left='0px';
		me._estar_jardin__normal.style.top='0px';
		me._estar_jardin.ggMarkerNormal=me._estar_jardin__normal;
		me._estar_jardin.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._estar_jardin);
		me._estar_jardin__active= clonedActiveElement._marker_for_hotspot_active;
		me._estar_jardin__active.style.visibility='hidden';
		me._estar_jardin__active.style.left='0px';
		me._estar_jardin__active.style.top='0px';
		me._estar_jardin.ggMarkerActive=me._estar_jardin__active;
		me._estar_jardin.ggMarkerInstances.push(clonedActiveElement);
		if (me._estar_jardin.firstChild) {
			me._estar_jardin.insertBefore(me._estar_jardin__active,me._estar_jardin.firstChild);
		} else {
			me._estar_jardin.appendChild(me._estar_jardin__active);
		}
		if (me._estar_jardin.firstChild) {
			me._estar_jardin.insertBefore(me._estar_jardin__normal,me._estar_jardin.firstChild);
		} else {
			me._estar_jardin.appendChild(me._estar_jardin__normal);
		}
		for (var i = 0; i < me._estar_jardin.childNodes.length; i++) {
			me._estar_jardin.ggMarkerInstances.push(me._estar_jardin.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._estar_2);
		me._estar_2__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._estar_2__normal.style.visibility='inherit';
		me._estar_2__normal.style.left='0px';
		me._estar_2__normal.style.top='0px';
		me._estar_2.ggMarkerNormal=me._estar_2__normal;
		me._estar_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._estar_2);
		me._estar_2__active= clonedActiveElement._marker_for_hotspot_active;
		me._estar_2__active.style.visibility='hidden';
		me._estar_2__active.style.left='0px';
		me._estar_2__active.style.top='0px';
		me._estar_2.ggMarkerActive=me._estar_2__active;
		me._estar_2.ggMarkerInstances.push(clonedActiveElement);
		if (me._estar_2.firstChild) {
			me._estar_2.insertBefore(me._estar_2__active,me._estar_2.firstChild);
		} else {
			me._estar_2.appendChild(me._estar_2__active);
		}
		if (me._estar_2.firstChild) {
			me._estar_2.insertBefore(me._estar_2__normal,me._estar_2.firstChild);
		} else {
			me._estar_2.appendChild(me._estar_2__normal);
		}
		for (var i = 0; i < me._estar_2.childNodes.length; i++) {
			me._estar_2.ggMarkerInstances.push(me._estar_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_for_hotspot_normal_Class(this,me._estar_1);
		me._estar_1__normal = clonedNormalElement._marker_for_hotspot_normal;
		me._estar_1__normal.style.visibility='inherit';
		me._estar_1__normal.style.left='0px';
		me._estar_1__normal.style.top='0px';
		me._estar_1.ggMarkerNormal=me._estar_1__normal;
		me._estar_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_for_hotspot_active_Class(this,me._estar_1);
		me._estar_1__active= clonedActiveElement._marker_for_hotspot_active;
		me._estar_1__active.style.visibility='hidden';
		me._estar_1__active.style.left='0px';
		me._estar_1__active.style.top='0px';
		me._estar_1.ggMarkerActive=me._estar_1__active;
		me._estar_1.ggMarkerInstances.push(clonedActiveElement);
		if (me._estar_1.firstChild) {
			me._estar_1.insertBefore(me._estar_1__active,me._estar_1.firstChild);
		} else {
			me._estar_1.appendChild(me._estar_1__active);
		}
		if (me._estar_1.firstChild) {
			me._estar_1.insertBefore(me._estar_1__normal,me._estar_1.firstChild);
		} else {
			me._estar_1.appendChild(me._estar_1__normal);
		}
		for (var i = 0; i < me._estar_1.childNodes.length; i++) {
			me._estar_1.ggMarkerInstances.push(me._estar_1.childNodes[i]);
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
		if (id=='trigger-click-change-to-level3-selector') {
			me._changetolevel0_selector.onclick();
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
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiM5YzAiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQ0IiB2aWV3Qm94PSIwIDAgNDQgNDQiPgogPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9IjEuOCI+CiAgPGNpcmNsZSBjeT0iMjIiIHI9IjUiIHN0cm9rZT0iI2VlZSIgY3g9IjIyIj4KICAgPGFuaW1hdGUgYmVnaW49IjBzIiBrZXlTcGxpbmVzPSIwLjE2NSwgMC44NCwgMC40NCwgMSIgdmFsdWVzPSIxOyAyMCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS44cyIgY2FsY01vZGU9In'+
			'NwbGluZSIga2V5VGltZXM9IjA7IDEiLz4KICAgPGFuaW1hdGUgYmVnaW49IjBzIiBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIiB2YWx1ZXM9IjE7IDAiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjhzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgY3k9IjIyIiByPSIxMCIgc3Ryb2tlPSIjMTExIiBjeD0iMjIiPgogICA8YW5pbWF0ZSBiZWdpbj0iLTAuOXMiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiB2YWx1ZXM9IjE7IDIwIiBhdHRy'+
			'aWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjhzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIvPgogICA8YW5pbWF0ZSBiZWdpbj0iLTAuOXMiIGtleVNwbGluZXM9IjAuMywgMC42MSwgMC4zNTUsIDEiIHZhbHVlcz0iMTsgMCIgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuOHMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOyAxIi8+CiAgPC9jaXJjbGU+CiA8L2c+Cjwvc3ZnPgo=';
		me._animated_rings_hotspot__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="animated_rings_hotspot";
		el.ggDx=0;
		el.ggDy=0;
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
	me._splash_container.logicBlock_scaling();
	me._logo_container.logicBlock_position();
	me._logo_container.logicBlock_scaling();
	me._splash_wires_svg.logicBlock_visible();
	me._floor_plans_container.logicBlock_alpha();
	me._level2_floorplan.logicBlock_visible();
	me._level3_floorplan.logicBlock_visible();
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
	me._sala.logicBlock_visible();
	me._garage.logicBlock_visible();
	me._ingreso.logicBlock_visible();
	me._estar_jardin.logicBlock_visible();
	me._estar_2.logicBlock_visible();
	me._estar_1.logicBlock_visible();
	me._level2_indicator.logicBlock_visible();
	me._level0_indicator.logicBlock_visible();
	me._level1_indicator.logicBlock_visible();
	me._center_right_bar_open_close.logicBlock_alpha();
	me._bottom_background_bar.logicBlock_alpha();
	me._splash_container.logicBlock_visible();
	me._splash_container.logicBlock_alpha();
	me._white_cover_for_first_seconds.logicBlock_alpha();
	me._logo_container.logicBlock_visible();
	me._logo_container.logicBlock_alpha();
	me._floor_plan_help_on_off.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._floor_plans_container.logicBlock_scaling();me._center_right_bar_open_close.logicBlock_scaling();me._center_right_bar_open_close.logicBlock_visible();me._bottom_background_bar.logicBlock_scaling();me._bottom_buttons_bar_container.logicBlock_scaling();me._bottom_buttons_bar_container.logicBlock_alpha();me._splash_container.logicBlock_scaling();me._logo_container.logicBlock_position();me._logo_container.logicBlock_scaling();me._splash_wires_svg.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._floor_plans_container.logicBlock_alpha();me._level2_floorplan.logicBlock_visible();me._level3_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._ingreso.logicBlock_visible();me._estar_jardin.logicBlock_visible();me._estar_2.logicBlock_visible();me._estar_1.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level0_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible();me._center_right_bar_open_close.logicBlock_alpha();me._bottom_background_bar.logicBlock_alpha();me._bottom_buttons_bar_container.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._white_cover_for_first_seconds.logicBlock_alpha();me._logo_container.logicBlock_visible();me._logo_container.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._floor_plan_help_on_off.logicBlock_visible(); });
	player.addListener('varchanged_clickonsplash', function(args) { me._floor_plans_container.logicBlock_alpha();me._center_right_bar_open_close.logicBlock_alpha();me._bottom_background_bar.logicBlock_alpha();me._bottom_buttons_bar_container.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._logo_container.logicBlock_visible();me._logo_container.logicBlock_alpha(); });
	player.addListener('varchanged_whitecover', function(args) { me._white_cover_for_first_seconds.logicBlock_alpha(); });
	player.addListener('varchanged_levelnumber', function(args) { me._level2_floorplan.logicBlock_visible();me._level3_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._ingreso.logicBlock_visible();me._estar_jardin.logicBlock_visible();me._estar_2.logicBlock_visible();me._estar_1.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level0_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible(); });
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
player.openNext("{node2}","");
					break;
				case 50:
					player.setVariableValue('levelnumber', Number("2"));
me._mh_radar.style[domTransition]='none';
me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
player.openNext("{node5}","");
					break;
				case 51:
					player.setVariableValue('levelnumber', Number("3"));
me._mh_radar.style[domTransition]='none';
me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
player.openNext("{node18}","");
					break;
			}
		}
	});
	me.skinTimerEvent();
};