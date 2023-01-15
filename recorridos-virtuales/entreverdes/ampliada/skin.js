// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: Presentarq.ggsk
// Generated 2023-01-14T18:58:35

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
		hs+='right : 42px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9oZWxwLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxOC40MyIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cG'+
			'FnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSI0MC45Mzg2ODciIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExIiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdy'+
			'aWQgaWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBpZD0icGF0aDQ0OTkiIGN5PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBjeD0iNTAiIHI9IjM4Ii8+CiA8cGF0aCBpZD0icG'+
			'F0aDQ0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7'+
			'dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbD'+
			'tzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5l'+
			'Y2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MC'+
			'AxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEy'+
			'LjUyNTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS'+
			'45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1NjgiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcH'+
			'g7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHk9IjEyOS40OTMyMSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeD0iLTI5Ii8+CiA8L3RleHQ+CiA8ZyBpZD0idGV4dDQ1MDciIHRyYW5zZm9ybT0ibWF0cml4KDEuNjU3NDIyMSwwLDAsMS42NTcwNjc0LDYyLjM5MTgyLDEyLjQ0NDEyMSkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQt'+
			'c2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6Q2hhbGtkdXN0ZXI7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQ2hhbGtkdXN0ZXIsIE5vcm1hbCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0O2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuNjAzND'+
			'ExMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBhcmlhLWxhYmVsPSI/Ij4KICA8cGF0aCBpZD0icGF0aDQ1MDkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtZmFtaWx5OidBcmlhbCBSb3VuZGVkIE1UIEJvbGQnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0FyaWFsIFJvdW5kZWQgTVQgQm9sZCwgJztmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuNjAzNDExMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9yb3RhdGlvbl9vbi5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNj'+
			'OldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYX'+
			'BlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2Fw'+
			'ZTpncmlkIGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdGggaW'+
			'Q9InBhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9y'+
			'bWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3'+
			'JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2Ut'+
			'bGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLj'+
			'UsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1'+
			'MCwxMi41MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZS'+
			'g0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5z'+
			'bGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbm'+
			'c6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii0yOSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NjYwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjEwOTEyNTg1LDAsMCwwLjEwOTEyNTg1LDI0Ljk5ODQ4MSwyNS4wMDE1NzEpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgi'+
			'PgogIDxnIGlkPSJnNDYwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgPGcgaWQ9Imc0NjAxIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICAgPHBhdGggaWQ9InBhdGg0NTk5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci'+
			'1jdXJ2YXR1cmU9IjAiIGQ9Im0gNDQ1LjY1MSwyMDEuOTUgYyAtMS40ODUsLTkuMzA4IC0xMC4yMzUsLTE1LjY0OSAtMTkuNTQzLC0xNC4xNjQgLTkuMzA4LDEuNDg1IC0xNS42NDksMTAuMjM1IC0xNC4xNjQsMTkuNTQzIDAuMDE2LDAuMTAyIDAuMDMzLDAuMjAzIDAuMDUxLDAuMzA0IDE3LjM4LDEwMi4zMTEgLTUxLjQ3LDE5OS4zMzkgLTE1My43ODEsMjE2LjcxOSBDIDE1NS45MDMsNDQxLjczMiA1OC44NzUsMzcyLjg4MiA0MS40OTUsMjcwLjU3MSAyNC4xMTUsMTY4LjI2IDkyLjk2Niw3MS4yMzIgMTk1LjI3Niw1My44NTIgYyA2Mi45MTksLTEwLjY4OCAxMjYuOTYyLDExLjI5IDE3MC4wNTks'+
			'NTguMzYxIGwgLTc1LjYwNSwyNS4xOSBjIC04Ljk0NCwyLjk3NiAtMTMuNzgxLDEyLjYzOCAtMTAuODA2LDIxLjU4MiAwLjAwMSwwLjAwMiAwLjAwMiwwLjAwNSAwLjAwMywwLjAwNyAyLjk3Niw4Ljk0NCAxMi42MzgsMTMuNzgxIDIxLjU4MiwxMC44MDYgMC4wMDMsLTAuMDAxIDAuMDA1LC0wLjAwMiAwLjAwNywtMC4wMDIgbCAxMDIuNCwtMzQuMTMzIGMgNi45NzIsLTIuMzIyIDExLjY3NSwtOC44NDcgMTEuNjc0LC0xNi4xOTYgViAxNy4wNjcgQyA0MTQuNTksNy42NDEgNDA2Ljk0OSwwIDM5Ny41MjMsMCAzODguMDk3LDAgMzgwLjQ1Niw3LjY0MSAzODAuNDU2LDE3LjA2NyBWIDc5LjQxMSBDID'+
			'I5Mi41NjQsLTQuMTg1IDE1My41NDUsLTAuNzAyIDY5Ljk0OSw4Ny4xOSBjIC04My41OTYsODcuODkyIC04MC4xMTQsMjI2LjkxMSA3Ljc3OSwzMTAuNTA4IDg3Ljg5Myw4My41OTcgMjI2LjkxMSw4MC4xMTQgMzEwLjUwOCwtNy43NzkgNDcuNjY5LC01MC4xMiA2OC45NDMsLTExOS43NjcgNTcuNDE1LC0xODcuOTY5IHoiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBpZD0iZzQ2MDUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwNyIgc3R5bGU9ImZpbGw6I2ZmZmZm'+
			'ZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjA5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MTEiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYxMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2'+
			'lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjE1IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MTciIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYxOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3Bh'+
			'Y2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjIxIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MjMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYyNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaW'+
			'Q9Imc0NjI3IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MjkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYzMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjMzIiBzdHlsZT0iZmlsbDojZmZm'+
			'ZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9yb3RhdGlvbl9vZmYuc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxj'+
			'YzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlua3NjYXBlOnpvb209IjEzLjk5IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2'+
			'FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjExLjY4NjkxOSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2Nh'+
			'cGU6Z3JpZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYXRoIG'+
			'lkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5v'+
			'cm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm'+
			'9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tl'+
			'LWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC'+
			'41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIg'+
			'NTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFu'+
			'c2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW'+
			'5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxnIGlkPSJnNDY2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMDkxMjU4NSwwLDAsMC4xMDkxMjU4NSwyNC45OTg0ODEsMjUuMDAxNTcxKSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4'+
			'Ij4KICA8ZyBpZD0iZzQ2MDMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxnIGlkPSJnNDYwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgIDxwYXRoIGlkPSJwYXRoNDU5OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3'+
			'ItY3VydmF0dXJlPSIwIiBkPSJtIDQ0NS42NTEsMjAxLjk1IGMgLTEuNDg1LC05LjMwOCAtMTAuMjM1LC0xNS42NDkgLTE5LjU0MywtMTQuMTY0IC05LjMwOCwxLjQ4NSAtMTUuNjQ5LDEwLjIzNSAtMTQuMTY0LDE5LjU0MyAwLjAxNiwwLjEwMiAwLjAzMywwLjIwMyAwLjA1MSwwLjMwNCAxNy4zOCwxMDIuMzExIC01MS40NywxOTkuMzM5IC0xNTMuNzgxLDIxNi43MTkgQyAxNTUuOTAzLDQ0MS43MzIgNTguODc1LDM3Mi44ODIgNDEuNDk1LDI3MC41NzEgMjQuMTE1LDE2OC4yNiA5Mi45NjYsNzEuMjMyIDE5NS4yNzYsNTMuODUyIGMgNjIuOTE5LC0xMC42ODggMTI2Ljk2MiwxMS4yOSAxNzAuMDU5'+
			'LDU4LjM2MSBsIC03NS42MDUsMjUuMTkgYyAtOC45NDQsMi45NzYgLTEzLjc4MSwxMi42MzggLTEwLjgwNiwyMS41ODIgMC4wMDEsMC4wMDIgMC4wMDIsMC4wMDUgMC4wMDMsMC4wMDcgMi45NzYsOC45NDQgMTIuNjM4LDEzLjc4MSAyMS41ODIsMTAuODA2IDAuMDAzLC0wLjAwMSAwLjAwNSwtMC4wMDIgMC4wMDcsLTAuMDAyIGwgMTAyLjQsLTM0LjEzMyBjIDYuOTcyLC0yLjMyMiAxMS42NzUsLTguODQ3IDExLjY3NCwtMTYuMTk2IFYgMTcuMDY3IEMgNDE0LjU5LDcuNjQxIDQwNi45NDksMCAzOTcuNTIzLDAgMzg4LjA5NywwIDM4MC40NTYsNy42NDEgMzgwLjQ1NiwxNy4wNjcgViA3OS40MTEgQy'+
			'AyOTIuNTY0LC00LjE4NSAxNTMuNTQ1LC0wLjcwMiA2OS45NDksODcuMTkgYyAtODMuNTk2LDg3Ljg5MiAtODAuMTE0LDIyNi45MTEgNy43NzksMzEwLjUwOCA4Ny44OTMsODMuNTk3IDIyNi45MTEsODAuMTE0IDMxMC41MDgsLTcuNzc5IDQ3LjY2OSwtNTAuMTIgNjguOTQzLC0xMTkuNzY3IDU3LjQxNSwtMTg3Ljk2OSB6Ii8+CiAgIDwvZz4KICA8L2c+CiAgPGcgaWQ9Imc0NjA1IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MDciIHN0eWxlPSJmaWxsOiNmZmZm'+
			'ZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjExIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MTMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLX'+
			'dpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYxNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjE3IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9w'+
			'YWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYyMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjIzIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MjUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIG'+
			'lkPSJnNDYyNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjI5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MzEiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYzMyIgc3R5bGU9ImZpbGw6I2Zm'+
			'ZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiA8L2c+CiA8cGF0aCBpZD0icmVjdDQ1MjMiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDI1LjQ5OTk3OSwyNi'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhc3NfcmluZy5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldv'+
			'cmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOn'+
			'BhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2FwZTpn'+
			'cmlkIGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdGggaWQ9In'+
			'BhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFs'+
			'O3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYW'+
			'w7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGlu'+
			'ZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNT'+
			'AgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwx'+
			'Mi41MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nz'+
			'kuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0'+
			'ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MH'+
			'B4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii0yOSIvPgogPC90ZXh0PgogPHBhdGggaWQ9InBhdGg0NTE5IiBzb2RpcG9kaTphcmcyPSIyLjYxNzk5MzkiIGlua3NjYXBlOnJvdW5kZWQ9IjAiIHNvZGlwb2RpOmN4PSI1MCIgaW5rc2NhcGU6ZmxhdHNpZGVkPSJmYWxzZSIgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIgc29kaXBvZGk6c2lkZXM9IjMiIHNvZGlwb2RpOnIyPSIy'+
			'IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgc29kaXBvZGk6YXJnMT0iMS41NzA3OTYzIiBzb2RpcG9kaTp0eXBlPSJzdGFyIiBzb2RpcG9kaTpyMT0iNCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSIxIiBzb2RpcG9kaTpjeT0iMTQiIGQ9Ik0gNTAsMTggNDguMjY3OTQ5LDE1IDQ2LjUzNTg5OCwxMiA1MCwxMiBsIDMuNDY0MTAyLDAgLTEuNzMyMDUxLDMgei'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhc3NfaGFuZGxlLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxMy45OSIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcG'+
			'U6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExIiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgaWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNz'+
			'k5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0z'+
			'NTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodD'+
			'oxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii0yOSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTMsMzkuNTAwMDAxKSI+CiAgPHBhdGggaWQ9InBhdGg0NTIzIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDoj'+
			'ZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjk5OTk5OTc2O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9IjUiIGQ9Ik0gMTAzLDQwLjQ5OTk5OSAxMDAsMTAuNSBsIDYsLTEwZS03IHoiLz4KICA8cGF0aCBpZD0icGF0aDQ1MjMtOCIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmMDAwMDtmaWxsLW9wYW'+
			'NpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS45OTk5OTk3NjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNSIgZD0ibSAxMDMsLTE5LjUwMDAwMSAtMywyOS45OTk5OTkgNiwxZS02IHoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5MCIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnMiIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3'+
			'JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5MCIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiBzb2RpcG9kaTpkb2Nu'+
			'YW1lPSJyYWRhci1wb2ludGluZy1ub3J0aC5zdmciIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iRzpcTXkgUGljdHVyZXNcRm90b2dyYWZpYSAzNjBwYW5vdG91cnNcREVTQVJST0xMT1MgQSBQRURJRE9cR09MREVOUEFHRVNcREVTQVJST0xMT1xWRVJTSU9OIC0gdjhcU0tJTiBFTEVNRU5UU1xyYWRhcl9wb2ludGluZ19ub3J0aC5wbmciPgogPGRlZnMgaWQ9ImRlZnM0Ij4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgPHN0b3AgaWQ9InN0b3AzNzk5IiBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMz'+
			'MzMzM7c3RvcC1vcGFjaXR5OjE7Ii8+CiAgIDxzdG9wIGlkPSJzdG9wMzgwMSIgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMzMzMzMzO3N0b3Atb3BhY2l0eTowOyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NzUiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIGlkPSJzdG9wMzc3NyIgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowIi8+CiAgIDxzdG9wIGlkPSJzdG9wMzc3OSIgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3Bh'+
			'Y2l0eTowOyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NzQiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIGlkPSJzdG9wMzc3NiIgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZjAwO3N0b3Atb3BhY2l0eToxOyIvPgogICA8c3RvcCBpZD0ic3RvcDM3NzgiIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MDsiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzNzYxIj4KICAgPHN0b3AgaWQ9InN0b3'+
			'AzNzYzIiBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjE7Ii8+CiAgIDxzdG9wIGlkPSJzdG9wMzc2NiIgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eTowOyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NjMiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIGlkPSJzdG9wMzc2NSIgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZjAwO3N0b3Atb3BhY2l0eToxOyIvPgogICA8c3RvcCBpZD0ic3RvcDM3NjciIG9mZnNl'+
			'dD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MDsiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzNzY5IiB5MT0iMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMCIgeDI9IjM1IiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzYzIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIzNSIvPgogIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsR3JhZGllbnQzNzgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3k9IjUyLjUiIGZ5PSI1Mi41IiBjeD0iMzUiIH'+
			'I9IjM1IiBmeD0iMzUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3NzQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS41NzE0MTQ2LC0wLjAwNjYzMTM3LDAuMDA1MDgzMjMsMS4yMDQ1NTc0LC0zLjA4ODQ2OCw5MzIuNTE0NTIpIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiLz4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbEdyYWRpZW50Mzc4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSItMjguMjA1ODc5IiBmeT0iLTI4LjIwNTg3OSIgY3g9IjU0LjQ1ODk2MSIgcj0iNTAuMjUiIGZ4PSI1NC40NTg5NjEiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVu'+
			'dDM3NzUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC41MTQ0OTU3NSwtMC44NTc0OTI5MywwLjA5OTUwMjQ5LDAuMDU5NzAxNDksMjEuNzg3NjUsNjYuMzgyMTA5KSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIi8+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM4MDMiIHkxPSI2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNSIgeDI9IjYzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSI2MyIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzODA2IiBncm'+
			'FkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjM1IiB5Mj0iNSIgeDI9IjI2IiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjUsOTUyLjM2MjE4KSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4MT0iMjYiLz4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50MzgwNi02IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjM1IiB5Mj0iNSIgeDI9IjI2IiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3LTgiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeDE9IjI2Ii8+CiAg'+
			'PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3OTctOCIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgPHN0b3AgaWQ9InN0b3AzNzk5LTgiIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MTsiLz4KICAgPHN0b3AgaWQ9InN0b3AzODAxLTIiIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MDsiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzODIzIiB5MT0iMzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iNS'+
			'IgeDI9IjI2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDk5Ljc1LDk1Mi4zNjIxOCkiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTctOCIgeDE9IjI2IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiLz4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbEdyYWRpZW50MzAxNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI2MS40OTY0NDkiIGZ5PSI2MS40OTY0NDkiIGN4PSIzNC40MzM0NjgiIHI9IjM1IiBmeD0iMzQuNDMzNDY4IiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzc0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0zLjYy'+
			'NTM5OTFlLTgsLTEuMTQyODU3MiwxLjIwNDU2ODEsLTMuNjM3NDk0OGUtOCwtMjMuNDA5OTg3LDEwNDAuMzgxNCkiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzMDE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjM4IiB5Mj0iMTAuMDAwMDAyIiB4Mj0iMjUuMDgzMzQ1IiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzk3IiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC05MCw1MjQuMzg5NDMsNTI3LjcyMjc2KSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4MT0iMjUuMDgzMzQ1Ii8+CiAgPG'+
			'xpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDMwMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMjAiIHkyPSI0IiB4Mj0iMjUuNzUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTctOCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDEsMSwwLC0zLjMzMzMyODIsOTUyLjYxMjE5KSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4MT0iMjUuNzUiLz4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50MzAxOC04IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjcxLjk5OTk5MiIgeTI9Ijk3Ljk5OTk5MiIgeDI9IjI5'+
			'LjA4MzM1NSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5NyIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgtOTAsNTI0LjM4OTQ0LDUyNy43MjI3NikiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeDE9IjI5LjA4MzM1NSIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0iYmFzZSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTpjeD0iNTAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4Ii'+
			'BpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImczMDExIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnpvb209IjE4LjQzIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDI5ODUiIHR5cGU9Inh5Z3JpZCIgb3JpZ2lueT0iMCIgc3BhY2luZ3k9IjEiIGVuYWJsZWQ9InRydWUiIG9yaWdpbng9IjAiIHNuYXB2aXNpYmxlZ3JpZGxp'+
			'bmVzb25seT0idHJ1ZSIgZW1wc3BhY2luZz0iNSIgdmlzaWJsZT0idHJ1ZSIgc3BhY2luZ3g9IjEiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTciPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoMCwtOTU1LjY5NTUzKSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogIDxnIGlkPSJnMzAxMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41LDAsMCwwLjUsMS42NjY2NjQxLDUyNi4xODExMSkiPgogICA8ZyBpZD0iZzQ0IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjk5MjAyNDksMCwwLDEuOTkwNzg1NSwtMy4zMzMzMjY4LC0xMDQ5Ljc1OTcpIj4KICAgIDxwYXRoIGlkPSJwYXRoMjk5MSIgc3R5bGU9ImZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDMwMTYpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBzb2RpcG9kaTpub2RldHlw'+
			'ZXM9ImNjY2NjIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDAsOTU4LjgxMTc3IDM0LDUwLjAwMDEzIGggMzIgbCAzNCwtNTAuMDAwMTMgeiIvPgogICAgPHBhdGggaWQ9InJlY3QzNzk1IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzAxOCk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMCw5NTkuMDQyODggaCAwLjUgbCAzMy43NSw1MC4wMDAzMiBoIC0wLjUgeiIvPgogICAgPHBhdGggaWQ9InJlY3QzNzk1LTEiIHN0eWxlPSJmaWxsOn'+
			'VybCgjbGluZWFyR3JhZGllbnQzMDE4LTgpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDEwMC40MDAzNSw5NTkuMDQyODggSCA5OS45MDAzNDYgTCA2Ni4xNTAyOSwxMDA5LjA0MzIgaCAwLjUgeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYxOSIgd2lkdGg9IjYxOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYxOSA2MTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0id2hpdGUiIGQ9Ik0yOTcuMTQ1IDE0NC4wMzlIMjY0LjEyN1YxNE0yNjQuMTI3IDE0SDEzNFYyMDUuMTc3TTI2NC4xMjcgMTRIMzM5Ljg3M00xMzQgMjA1LjE3N1YyMTUuODUyVjI5OC4zNE0xMzQgMjA1LjE3N0gyNzEuODk2TTI4OC40MDUgNDUzLjYxMVYyOTguMzRNMTM0IDI5OC4zNEgyODguNDA1TTEzNCAyOT'+
			'guMzRWMzY5LjE4Mk0yODguNDA1IDI5OC4zNFYyMDUuMTc3SDI3MS44OTZNMTM0IDM2OS4xODJWNjA1SDMyOC4yMlY0NTkuNDM0SDQ3MFYyMDUuMTc3TTEzNCAzNjkuMTgySDIzOS44NU0xMzQgNDU1LjU1MkgyMzkuODVNNDcwIDIwNS4xNzdWMTRIMzM5Ljg3M000NzAgMjA1LjE3N0gzMzQuMDQ2VjE4OC42OE0zMzkuODczIDE0VjE0NC4wMzlNMjcxLjg5NiAyMDUuMTc3VjE4OC42OCIgc3Ryb2tlLXdpZHRoPSIyMCIvPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9Ijg0MiIgd2lkdGg9Ijg0MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDg0MiA4NDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMi4xMTQ0IDkwVjc1Mkg4MDkuODg2VjkwSDMyLjExNDRaTTIwLjA3MTUgNThDOC45ODYzMiA1OCAwIDY2Ljk1NDMgMCA3OFY3NjRDMCA3NzUuMDQ2IDguOTg2MzQgNzg0IDIwLjA3MTUgNzg0SDgyMS45MjhDODMzLjAxNCA3ODQgODQyIDc3NS4wNDYgODQyIDc2NFY3OEM4NDIgNjYuOTU0MyA4MzMuMDE0ID'+
			'U4IDgyMS45MjggNThIMjAuMDcxNVoiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMjg4QzAgMjc5LjE2MyA2LjY0ODk0IDI3MiAxNC44NTA4IDI3MkgxNTMuMTQ5QzE2MS4zNTEgMjcyIDE2OCAyNzkuMTYzIDE2OCAyODhDMTY4IDI5Ni44MzcgMTYxLjM1MSAzMDQgMTUzLjE0OSAzMDRIMTQuODUwOEM2LjY0ODk0IDMwNCAwIDI5Ni44MzcgMCAyODhaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNTAgMjgwQzM1MCAyNzEuMTYzIDM1Ny4xNjMg'+
			'MjY0IDM2NiAyNjRMNTEyIDI2NEM1MjAuODM3IDI2NCA1MjggMjcxLjE2MyA1MjggMjgwQzUyOCAyODguODM3IDUyMC44MzcgMjk2IDUxMiAyOTZMMzY2IDI5NkMzNTcuMTYzIDI5NiAzNTAgMjg4LjgzNyAzNTAgMjgwWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzEyIDI4MEM3MTIgMjcxLjE2MyA3MTguMzc4IDI2NCA3MjYuMjQ3IDI2NEw4MjcuNzUzIDI2NEM4MzUuNjIyIDI2NCA4NDIgMjcxLjE2MyA4NDIgMjgwQzg0MiAyODguODM3IDgzNS42MjIgMjk2IDgyNy43NTMgMjk2TDcyNi4yNDcgMjk2QzcxOC4zNzggMj'+
			'k2IDcxMiAyODguODM3IDcxMiAyODBaIi8+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYxOSIgd2lkdGg9IjYxOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYxOSA2MTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0id2hpdGUiIGQ9Ik0yMTEgMTg1SDMwMS4yODZWMjUwLjI3N00yMTEgMzcyLjIxNkgzMDEuMjg2VjI1MC4yNzdNMjExIDM3Mi4yMTZWNDMzLjg5Nk0yMTEgMzcyLjIxNlYzMjIuMjYzSDI2OC4xNDNNMjExIDQzMy44OTZIMTYzVjYwM0gzMzlWNDIyLjg5Nk0yMTEgNDMzLjg5NkgzMDEuMjg2VjQwNC44NDdNMzAxLj'+
			'I4NiAyNTAuMjc3SDIxMVYyOTMuNzk1TTE2OCAxODguMTY4VjEzSDI5OC41MzRNMzg4IDQyMi44OTZINDY4VjEzSDI5OC41MzRNMjk4LjUzNCAxM1YxMzYuNjQ4IiBzdHJva2Utd2lkdGg9IjIwIi8+Cjwvc3ZnPgo=';
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
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
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
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 72px;';
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
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
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
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
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
		me._floor_plans_container.appendChild(me._frame_rectangle_floor_plans);
		el=me._btn_off_floor_plans=document.createElement('div');
		els=me._btn_off_floor_plans__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2Zsb29yX3BsYW5zLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2'+
			'NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iOS43OSIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIxNS43MzAzMzciIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExNyIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3'+
			'aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIi8+CiA8Y2lyY2xlIGlkPSJjaXJjbGUyIiBjeT0iNTAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIGN4PSI1MCIgcj0iMzkuMDYzOTk5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KIDxjaXJjbGUgaWQ9ImVsbGlwc2U0IiBjeT0iNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBzdHlsZT0ib3BhY2l0eTowLjc7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3'+
			'N0cm9rZS13aWR0aDoxIiBjeD0iNTAiIHI9IjM3LjUiLz4KIDxnIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+CiAgPGcgaWQ9ImczNzk5IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgPGcgaWQ9ImczNzk3IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgIDxwYXRoIGlkPSJwYXRoMzc5MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAyMDMuOTkzLDI5NS4yODcgYyAyMS4wMDEsMCAzOC4wMjQsMTcuMDIz'+
			'IDM4LjAyNCwzOC4wMTggMCwyMC45OTUgLTE3LjAyMywzOC4wMjQgLTM4LjAyNCwzOC4wMjQgLTIwLjk5OCwwIC0zOC4wMjEsLTE3LjAyOSAtMzguMDIxLC0zOC4wMjQgMCwtMjAuOTk1IDE3LjAyMywtMzguMDE4IDM4LjAyMSwtMzguMDE4IHoiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzc5NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1NzQuMjY3LDMyNS44MjIgNjAwLjA0OSwxMjIuNTYgNDE1LjExMyw1Mi4zNzggMTkzLjI3OSwxNTguMzM3IDAsNzYuNzEgMjYuMDk5LDI5My41NTggMS4wODUsNTA3LjA5MyBsIDIwNS4zNiwzOC41Mj'+
			'EgMjA5LjQ2LC0zOS44OTIgMTg0Ljg1NCw0Mi42NTggeiBNIDQxNC40MjgsNzMuOTA5IDU3OC4yMzksMTM1LjY0IDU2Ni45NjIsMjI0LjUyIDQwMy42ODksMTgzLjIxOSBaIG0gLTIxLjY2OSwxMS4yODMgLTguNjQyLDkzLjA2IC0wLjE0MiwtMC4wMzMgLTExMy4wNDYsMTQuNTgxIC0wLjY3NywyLjQ5NCBjIC0wLjE0MiwwLjUzOCAtMTMuMjU4LDQ4Ljk5NSAtMjcuMDgsNzEuMDMzIC04Ljk0NiwtNS4yNjEgLTE5LjAwNiwtOC43ODQgLTI5Ljc1NSwtMTAuMDkgbCAtOS4xNjQsLTgxLjAyOCB6IG0gLTE3LjI4MywyMDcuNTc0IC05OC4yNTEsMTQuODE1IGMgLTUuMjkxLC0xNC45NjkgLTE0Ljk5OSwt'+
			'MjcuODI1IC0yNy42MDYsLTM3LjAyMiAxMi44NjIsLTIwLjUzMSAyNC40NzEsLTYwLjI3OCAyNy4zOTQsLTcwLjc3IGwgMTA2LjM2MSwtMTMuNzI4IHogbSAtMTkxLjIwNywtMTE2LjU2OSA5LjA3OSw4MC4yMzYgYyAtMjkuODY0LDQuMTEzIC01NC4zNTgsMjUuMiAtNjMuMzM2LDUzLjIxNyBMIDQ2LjIzMywyOTYuNjgyIDM4LjE4OCwyMTguOTc2IGMgMjcuNzY5LC0xLjgzOCA0OC41OTksLTEwLjg3NSA2MS45NDgsLTI3IDEyLjAzNCwtMTQuNTE0IDE1LjQ5NSwtMzEuNjg1IDE2LjE1NywtNDQuNDg0IHogbSAtMTYwLjA4MiwtNjcuNjAxIDg0LjQ2NSwzNS42NjggYyAtMC4yNDIsMTEuNzc3IC0yLj'+
			'kwNSwyOC44NjUgLTE0LjQ0Myw0Mi43OTEgLTEyLjAzNywxNC41MTQgLTMxLjE4MiwyMi42MzIgLTU2Ljk5OCwyNC4yNjEgeiBtIC0xLjA5LDM4Mi4zMjUgMjAuNzc5LC0xNzQuNDAyIDgyLjYyNiwxMi44MDMgYyAtMC4wNjIsMS4zMjQgLTAuMTk1LDIuNjM2IC0wLjE5NSwzLjk4OSAwLDE4LjE2NCA2LjMwNywzNC44NTYgMTYuODA3LDQ4LjEwOCBsIC00Mi45MTIsMzQuNDU5IC0xMy41MjEsODYuOTU5IHogbSAxNjEuODc4LDMwLjM1OCAtOTAuNzIxLC0xNy4wMTcgMTMuMTA0LC04NC4yNTIgNDAuODM3LC0zMi43ODEgYyAxMi41MjgsMTIuOTUgMjkuNDgsMjEuNTkzIDQ4LjQyMSwyMy4zNzcgeiBN'+
			'IDE0MS43MjksMzMzLjMxMSBjIDAsLTM0LjM0OCAyNy45MzUsLTYyLjI4MSA2Mi4yNjQsLTYyLjI4MSAzNC4zNDcsMCA2Mi4yODIsMjcuOTM0IDYyLjI4Miw2Mi4yODEgMCwzNC4zMyAtMjcuOTM1LDYyLjI2NSAtNjIuMjgyLDYyLjI2NSAtMzQuMzMsMC4wMDYgLTYyLjI2NCwtMjcuOTM1IC02Mi4yNjQsLTYyLjI2NSB6IG0gNjQuNjksMTkxLjk4NyAtMS43NSwtMC4zMyAxMi4xMiwtMTE1LjExOSBjIDM2Ljc1NiwtNi4xMzUgNjQuOSwtMzguMDc2IDY0LjksLTc2LjU1NiAwLC0yLjA4MSAtMC4xNSwtNC4xMTQgLTAuMzEzLC02LjE1OSBsIDk2LjAzOCwtMTQuNDgxIDguMDE2LDgxLjkxMSBjIC00Mi'+
			'4xMzIsMS45OCAtNzMuNjI1LDE0LjkzMiAtOTMuNDQ5LDM4Ljg1NyAtMjMuMTE0LDI3LjkyMyAtMjQuMjA1LDYyLjczNyAtMjMuMDA4LDc5Ljk0OSB6IG0gNzAuMjQ3LC0xMy4zODEgYyAtMC45MzEsLTE2LjMzNyAwLjQxOSwtNDguMzk3IDIxLjI2NCwtNzMuNTY1IDE4LjQzOCwtMjIuMjYgNDguMTgyLC0zNC4yNzEgODguMjQ0LC0zNi4wOTEgbCA4LjUzNSw4Ny4xNTQgeiBtIDEyNi4zMDcsLTMyMC45NDYgMTYzLjAzLDQxLjIyNSAtOS43NzYsNzcuMDE3IC0xNjAuOTc0LC0xOS40MzEgeiBtIDEzMS4wODMsMTg0Ljc3NCAtNzQuMTc1LC04LjgxOSAxMy41ODQsMTMxLjU4IC01OS40MjgsLTEyLjc3'+
			'MyAtMTYuODUyLC0xNzYuMDM0IDEuNzMyLC0wLjI3MiAxNTUuNjEyLDE5Ljc1NCAyMy4wMjIsMTkzLjM1NCAtOTYuMjk4LC0yMi4yMTMgLTEyLjcxNCwtMTI0LjU5OSA2Ni4xMTEsNy42NzIgeiIvPgogICA8L2c+CiAgPC9nPgogIDxnIGlkPSJnMzgwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxMS'+
			'Igc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgog'+
			'IDxnIGlkPSJnMzgyOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX2Zsb29yX3BsYW5zLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2'+
			'NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iOS43OSIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIxNS43MzAzMzciIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExNyIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3'+
			'aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIi8+CiA8Y2lyY2xlIGlkPSJjaXJjbGUyIiBjeT0iNTAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIGN4PSI1MCIgcj0iMzkuMDYzOTk5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KIDxjaXJjbGUgaWQ9ImVsbGlwc2U0IiBjeT0iNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBzdHlsZT0ib3BhY2l0eTowLjc7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3'+
			'N0cm9rZS13aWR0aDoxIiBjeD0iNTAiIHI9IjM3LjUiLz4KIDxnIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+CiAgPGcgaWQ9ImczNzk5IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgPGcgaWQ9ImczNzk3IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgIDxwYXRoIGlkPSJwYXRoMzc5MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAyMDMuOTkzLDI5NS4yODcgYyAyMS4wMDEsMCAzOC4wMjQsMTcuMDIz'+
			'IDM4LjAyNCwzOC4wMTggMCwyMC45OTUgLTE3LjAyMywzOC4wMjQgLTM4LjAyNCwzOC4wMjQgLTIwLjk5OCwwIC0zOC4wMjEsLTE3LjAyOSAtMzguMDIxLC0zOC4wMjQgMCwtMjAuOTk1IDE3LjAyMywtMzguMDE4IDM4LjAyMSwtMzguMDE4IHoiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzc5NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1NzQuMjY3LDMyNS44MjIgNjAwLjA0OSwxMjIuNTYgNDE1LjExMyw1Mi4zNzggMTkzLjI3OSwxNTguMzM3IDAsNzYuNzEgMjYuMDk5LDI5My41NTggMS4wODUsNTA3LjA5MyBsIDIwNS4zNiwzOC41Mj'+
			'EgMjA5LjQ2LC0zOS44OTIgMTg0Ljg1NCw0Mi42NTggeiBNIDQxNC40MjgsNzMuOTA5IDU3OC4yMzksMTM1LjY0IDU2Ni45NjIsMjI0LjUyIDQwMy42ODksMTgzLjIxOSBaIG0gLTIxLjY2OSwxMS4yODMgLTguNjQyLDkzLjA2IC0wLjE0MiwtMC4wMzMgLTExMy4wNDYsMTQuNTgxIC0wLjY3NywyLjQ5NCBjIC0wLjE0MiwwLjUzOCAtMTMuMjU4LDQ4Ljk5NSAtMjcuMDgsNzEuMDMzIC04Ljk0NiwtNS4yNjEgLTE5LjAwNiwtOC43ODQgLTI5Ljc1NSwtMTAuMDkgbCAtOS4xNjQsLTgxLjAyOCB6IG0gLTE3LjI4MywyMDcuNTc0IC05OC4yNTEsMTQuODE1IGMgLTUuMjkxLC0xNC45NjkgLTE0Ljk5OSwt'+
			'MjcuODI1IC0yNy42MDYsLTM3LjAyMiAxMi44NjIsLTIwLjUzMSAyNC40NzEsLTYwLjI3OCAyNy4zOTQsLTcwLjc3IGwgMTA2LjM2MSwtMTMuNzI4IHogbSAtMTkxLjIwNywtMTE2LjU2OSA5LjA3OSw4MC4yMzYgYyAtMjkuODY0LDQuMTEzIC01NC4zNTgsMjUuMiAtNjMuMzM2LDUzLjIxNyBMIDQ2LjIzMywyOTYuNjgyIDM4LjE4OCwyMTguOTc2IGMgMjcuNzY5LC0xLjgzOCA0OC41OTksLTEwLjg3NSA2MS45NDgsLTI3IDEyLjAzNCwtMTQuNTE0IDE1LjQ5NSwtMzEuNjg1IDE2LjE1NywtNDQuNDg0IHogbSAtMTYwLjA4MiwtNjcuNjAxIDg0LjQ2NSwzNS42NjggYyAtMC4yNDIsMTEuNzc3IC0yLj'+
			'kwNSwyOC44NjUgLTE0LjQ0Myw0Mi43OTEgLTEyLjAzNywxNC41MTQgLTMxLjE4MiwyMi42MzIgLTU2Ljk5OCwyNC4yNjEgeiBtIC0xLjA5LDM4Mi4zMjUgMjAuNzc5LC0xNzQuNDAyIDgyLjYyNiwxMi44MDMgYyAtMC4wNjIsMS4zMjQgLTAuMTk1LDIuNjM2IC0wLjE5NSwzLjk4OSAwLDE4LjE2NCA2LjMwNywzNC44NTYgMTYuODA3LDQ4LjEwOCBsIC00Mi45MTIsMzQuNDU5IC0xMy41MjEsODYuOTU5IHogbSAxNjEuODc4LDMwLjM1OCAtOTAuNzIxLC0xNy4wMTcgMTMuMTA0LC04NC4yNTIgNDAuODM3LC0zMi43ODEgYyAxMi41MjgsMTIuOTUgMjkuNDgsMjEuNTkzIDQ4LjQyMSwyMy4zNzcgeiBN'+
			'IDE0MS43MjksMzMzLjMxMSBjIDAsLTM0LjM0OCAyNy45MzUsLTYyLjI4MSA2Mi4yNjQsLTYyLjI4MSAzNC4zNDcsMCA2Mi4yODIsMjcuOTM0IDYyLjI4Miw2Mi4yODEgMCwzNC4zMyAtMjcuOTM1LDYyLjI2NSAtNjIuMjgyLDYyLjI2NSAtMzQuMzMsMC4wMDYgLTYyLjI2NCwtMjcuOTM1IC02Mi4yNjQsLTYyLjI2NSB6IG0gNjQuNjksMTkxLjk4NyAtMS43NSwtMC4zMyAxMi4xMiwtMTE1LjExOSBjIDM2Ljc1NiwtNi4xMzUgNjQuOSwtMzguMDc2IDY0LjksLTc2LjU1NiAwLC0yLjA4MSAtMC4xNSwtNC4xMTQgLTAuMzEzLC02LjE1OSBsIDk2LjAzOCwtMTQuNDgxIDguMDE2LDgxLjkxMSBjIC00Mi'+
			'4xMzIsMS45OCAtNzMuNjI1LDE0LjkzMiAtOTMuNDQ5LDM4Ljg1NyAtMjMuMTE0LDI3LjkyMyAtMjQuMjA1LDYyLjczNyAtMjMuMDA4LDc5Ljk0OSB6IG0gNzAuMjQ3LC0xMy4zODEgYyAtMC45MzEsLTE2LjMzNyAwLjQxOSwtNDguMzk3IDIxLjI2NCwtNzMuNTY1IDE4LjQzOCwtMjIuMjYgNDguMTgyLC0zNC4yNzEgODguMjQ0LC0zNi4wOTEgbCA4LjUzNSw4Ny4xNTQgeiBtIDEyNi4zMDcsLTMyMC45NDYgMTYzLjAzLDQxLjIyNSAtOS43NzYsNzcuMDE3IC0xNjAuOTc0LC0xOS40MzEgeiBtIDEzMS4wODMsMTg0Ljc3NCAtNzQuMTc1LC04LjgxOSAxMy41ODQsMTMxLjU4IC01OS40MjgsLTEyLjc3'+
			'MyAtMTYuODUyLC0xNzYuMDM0IDEuNzMyLC0wLjI3MiAxNTUuNjEyLDE5Ljc1NCAyMy4wMjIsMTkzLjM1NCAtOTYuMjk4LC0yMi4yMTMgLTEyLjcxNCwtMTI0LjU5OSA2Ni4xMTEsNy42NzIgeiIvPgogICA8L2c+CiAgPC9nPgogIDxnIGlkPSJnMzgwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxMS'+
			'Igc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgyNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgog'+
			'IDxnIGlkPSJnMzgyOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl91cC5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRm'+
			'OmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnBhZ2VzaG'+
			'Fkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2FwZTpncmlkIGlk'+
			'PSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdGggaWQ9InBhdGg0ND'+
			'k0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQt'+
			'aW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcG'+
			'UtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpy'+
			'b3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNS'+
			'w3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2'+
			'NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC'+
			'0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nzku'+
			'OTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcm'+
			'Qtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii0yOSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1MTUxNTE1LDAsMCwwLjE1MTUxNTE1LDI1LjAwMDA3NiwyNSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICA8ZyBpZD0iWE1MSURf'+
			'ODVfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxwYXRoIGlkPSJYTUxJRF84Nl8iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42NzgsLT'+
			'EuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6Ii8+CiAgIDxwYXRoIGlkPSJYTUxJRF84N18iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTow'+
			'LjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLT'+
			'QuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyB6Ii8+CiAgPC9nPgogIDxnIGlkPSJnNDU0MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ry'+
			'b2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0OCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NTAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTUyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogID'+
			'xnIGlkPSJnNDU1NCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NTYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTU4IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2MCIgc3R5bGU9ImZpbGw6I2Zm'+
			'ZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTY0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2NiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2'+
			'lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTcwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9kb3duLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxMy45OSIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cGFnZX'+
			'NoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExIiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'aWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBpZD0icGF0aDQ0OTkiIGN5PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBjeD0iNTAiIHI9IjM4Ii8+CiA8cGF0aCBpZD0icGF0aD'+
			'Q0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4'+
			'dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaG'+
			'FwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2Fw'+
			'OnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC'+
			'41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUy'+
			'NTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1NjgiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d2'+
			'9yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHk9IjEyOS40OTMyMSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeD0iLTI5Ii8+CiA8L3RleHQ+CiA8ZyBpZD0iZzQ1OTciIHRyYW5zZm9ybT0ibWF0cml4KDAuMTUxNTE1MTUsMCwwLC0wLjE1MTUxNTE1LDI1LjAwMDA3Niw3NSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICA8ZyBpZD0iWE1M'+
			'SURfODVfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxwYXRoIGlkPSJYTUxJRF84Nl8iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42Nz'+
			'gsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6Ii8+CiAgIDxwYXRoIGlkPSJYTUxJRF84N18iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0'+
			'eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MD'+
			'YsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyB6Ii8+CiAgPC9nPgogIDxnIGlkPSJnNDU0MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7'+
			'c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0OCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NTAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTUyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPg'+
			'ogIDxnIGlkPSJnNDU1NCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NTYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTU4IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2MCIgc3R5bGU9ImZpbGw6'+
			'I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTY0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2NiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2'+
			'Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTcwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9yaWdodC5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsg'+
			'cmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnBhZ2'+
			'VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMjYuMTI1ODA0IiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtzY2FwZTpncmlk'+
			'IGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdGggaWQ9InBhdG'+
			'g0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3Rl'+
			'eHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2'+
			'hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNh'+
			'cDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMT'+
			'AuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41'+
			'MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOT'+
			'A2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0'+
			'NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3'+
			'dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii0yOSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLDAuMTUxNTE1MTUsLTAuMTUxNTE1MTUsMCw3NSwyNS4wMDAwNzYpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgPGcgaWQ9IlhN'+
			'TElEXzg1XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICA8cGF0aCBpZD0iWE1MSURfODZfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSAyNS42MDcsMTkwLjYwNyAxNjQuOTk3LDUxLjIxNCAzMDQuMzkzLDE5MC42MDcgYyAyLjkzLDIuOTI5IDYuNzY4LDQuMzkzIDEwLjYwNyw0LjM5MyAzLjgzOSwwIDcuNj'+
			'c4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyBsIC0xNTAuMDAzLC0xNTAgQyAxNzIuNzksMTYuNTggMTY4Ljk3NiwxNSAxNjQuOTk3LDE1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NywxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1OCw1Ljg1OCAxNS4zNTYsNS44NTggMjEuMjE0LDAgeiIvPgogICA8cGF0aCBpZD0iWE1MSURfODdfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNp'+
			'dHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSAxNzUuNjAzLDEzOS4zOTMgQyAxNzIuNzksMTM2LjU4IDE2OC45NzUsMTM1IDE2NC45OTcsMTM1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NiwxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1Nyw1Ljg1NyAxNS4zNTUsNS44NTggMjEuMjEzLC0wLjAwMSBsIDEzOS4zOSwtMTM5LjM5MyAxMzkuMzk3LDEzOS4zOTQgYyAyLjkyOSwyLjkyOSA2Ljc2Nyw0LjM5MyAxMC42MDYsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNj'+
			'A2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgeiIvPgogIDwvZz4KICA8ZyBpZD0iZzQ1NDIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0NiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5'+
			'O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTUwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU1MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz'+
			'4KICA8ZyBpZD0iZzQ1NTQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTU2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU1OCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjAiIHN0eWxlPSJmaWxs'+
			'OiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTYyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2NCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2'+
			'tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTY4IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU3MCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9sZWZ0LnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxMy45OSIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cGFnZX'+
			'NoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExIiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'aWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBpZD0icGF0aDQ0OTkiIGN5PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBjeD0iNTAiIHI9IjM4Ii8+CiA8cGF0aCBpZD0icGF0aD'+
			'Q0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4'+
			'dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaG'+
			'FwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2Fw'+
			'OnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC'+
			'41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUy'+
			'NTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1NjgiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d2'+
			'9yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHk9IjEyOS40OTMyMSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeD0iLTI5Ii8+CiA8L3RleHQ+CiA8ZyBpZD0iZzQ1OTciIHRyYW5zZm9ybT0ibWF0cml4KDAsMC4xNTE1MTUxNSwwLjE1MTUxNTE1LDAsMjUsMjUuMDAwMDc2KSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogIDxnIGlkPSJYTUxJ'+
			'RF84NV8iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgPHBhdGggaWQ9IlhNTElEXzg2XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gMjUuNjA3LDE5MC42MDcgMTY0Ljk5Nyw1MS4yMTQgMzA0LjM5MywxOTAuNjA3IGMgMi45MywyLjkyOSA2Ljc2OCw0LjM5MyAxMC42MDcsNC4zOTMgMy44MzksMCA3LjY3OC'+
			'wtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgbCAtMTUwLjAwMywtMTUwIEMgMTcyLjc5LDE2LjU4IDE2OC45NzYsMTUgMTY0Ljk5NywxNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTcsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTgsNS44NTggMTUuMzU2LDUuODU4IDIxLjIxNCwwIHoiLz4KICAgPHBhdGggaWQ9IlhNTElEXzg3XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5'+
			'OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gMTc1LjYwMywxMzkuMzkzIEMgMTcyLjc5LDEzNi41OCAxNjguOTc1LDEzNSAxNjQuOTk3LDEzNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTYsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTcsNS44NTcgMTUuMzU1LDUuODU4IDIxLjIxMywtMC4wMDEgbCAxMzkuMzksLTEzOS4zOTMgMTM5LjM5NywxMzkuMzk0IGMgMi45MjksMi45MjkgNi43NjcsNC4zOTMgMTAuNjA2LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNi'+
			'wtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIHoiLz4KICA8L2c+CiAgPGcgaWQ9Imc0NTQyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0NCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtz'+
			'dHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ4IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU1MCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NTIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+Ci'+
			'AgPGcgaWQ9Imc0NTU0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU1NiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NTgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTYwIiBzdHlsZT0iZmlsbDoj'+
			'ZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NjQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTY2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS'+
			'13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU2OCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NzAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0ic2hvd19jZW50ZXJfYmFyLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2'+
			'U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSI4LjY1IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjEwLjk4MjY1OSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjODI4NjdiIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBp'+
			'bmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0ODIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBpZD0iZzQ1MTUiIHRyYW5zZm9ybT0ibWF0cml4KC0xLjI3Mjc5MjIsLTEuMjcyNzkyMiwtMS4yNzI3OTIyLDEuMjcyNzkyMiwxMTEuOTU2NTYsMjgyLjE3NTM5KSIgc3R5bGU9InN0cm9rZS13aWR0aDowLjU1NTU1NTU4Ij4KICA8ZyBpZD0iZzQ1MDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjYxNTIyMjYsLTEuMD'+
			'I5NDM3MikiIHN0eWxlPSJzdHJva2Utd2lkdGg6MC41NTU1NTU1OCI+CiAgIDxyZWN0IGlkPSJyZWN0NDQ4NCIgeT0iLTU5IiBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB3aWR0aD0iMTIiIHg9IjExNCIvPgogICA8cmVjdCBpZD0icmVjdDQ0ODQtNSIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiB5'+
			'PSItMTI2IiBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB3aWR0aD0iMTIiIHg9Ii02OSIvPgogIDwvZz4KICA8cmVjdCBpZD0icmVjdDQ0ODQtOSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIiB5PSItMTI5Ljk4NjMzIiBoZWlnaHQ9IjIiIHdpZHRoPSIyNCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaW'+
			'xsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHg9IjIxLjkyMDMxMSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0iaGlkZV9jZW50ZXJfYmFyLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2'+
			'U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSI4LjY1IiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjEwLjk4MjY1OSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjODI4NjdiIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBp'+
			'bmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0ODIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBpZD0iZzQ1MTUiIHRyYW5zZm9ybT0ibWF0cml4KDEuMjcyNzkyMiwtMS4yNzI3OTIyLDEuMjcyNzkyMiwxLjI3Mjc5MjIsLTExLjk1NjU1OSwyODIuMTc1MzkpIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiPgogIDxnIGlkPSJnNDUwOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNjE1MjIyNiwtMS4wMj'+
			'k0MzcyKSIgc3R5bGU9InN0cm9rZS13aWR0aDowLjU1NTU1NTU4Ij4KICAgPHJlY3QgaWQ9InJlY3Q0NDg0IiB5PSItNTkiIGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHdpZHRoPSIxMiIgeD0iMTE0Ii8+CiAgIDxyZWN0IGlkPSJyZWN0NDQ4NC01IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiIHk9'+
			'Ii0xMjYiIGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHdpZHRoPSIxMiIgeD0iLTY5Ii8+CiAgPC9nPgogIDxyZWN0IGlkPSJyZWN0NDQ4NC05IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiIHk9Ii0xMjkuOTg2MzMiIGhlaWdodD0iMiIgd2lkdGg9IjI0IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbG'+
			'wtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NTU1NTU4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeD0iMjEuOTIwMzExIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX3NvY2lhbF9tZWRpYS5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEzIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTEiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZX'+
			'JhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMTguNDMiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iNDEuMzcyNzYyIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXc5IiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9ImZhbHNlIiBwYWdlY29sb3I9IiM4ZDhiOGIiIGlua3NjYXBlOndpbmRvdy15PSIt'+
			'MTEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuNTY4NjI3NDUiLz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW'+
			'9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdGggaWQ9InBhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRl'+
			'cm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYX'+
			'NlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVy'+
			'bztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMT'+
			'AuNSBDIDI4LjE5Njc0OSwxMC41IDEwLjUwMDAwMSwyOC4xOTY3NDggMTAuNTAwMDAxLDUwIDEwLjUwMDAwMSw3MS44MDMyNTIgMjguMTk2NzQ5LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ4IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDEgYyAyMC43MDg1MTMsMCAzNy40NzQzNTksMTYuNzY1ODQ2IDM3LjQ3NDM1OSwzNy40NzQzNTkgMCwyMC43MDg1MTIgLTE2Ljc2NTg0NiwzNy40NzQzNTggLTM3LjQ3NDM1OSwzNy40NzQzNTggLTIwLjcwODUxMiwwIC0zNy40NzQzNTgsLTE2Ljc2NTg0NiAtMzcuNDc0'+
			'MzU4LC0zNy40NzQzNTkgMCwtMjAuNzA4NTEyIDE2Ljc2NTg0NiwtMzcuNDc0MzU4IDM3LjQ3NDM1OCwtMzcuNDc0MzU4IHoiLz4KIDxnIGlkPSJnNDU2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzAxMDgxMSwwLjQ4OTQ5NDUyLC0wLjQ4OTQ5NDUyLDAuNzMwMTA4MTEsNjcuNzk0MDc0LC0xNi43MzU3MikiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogID'+
			'xnIGlkPSJnNDU0NyIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjM0MjY0OCwyMS40MzI0NSkiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxp'+
			'bWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICAgPGNpcmNsZSBpZD0icGF0aDQ0OTIiIGN5PSIyNC43ODQzMTciIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgY3g9IjM3LjM0MjY0OCIgcj0iNy41Ii8+CiAgICA8ZyBpZD0iZzQ1MDIiIH'+
			'RyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgICAgPGVsbGlwc2UgaWQ9InBhdGg0NDkwIiBjeT0iNjMuNTY3NTUxIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpz'+
			'cXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHJ4PSIxNSIgY3g9IjM3Ljc2ODU4NSIgcnk9IjE0Ljk5OTk5OSIvPgogICAgIDxyZWN0IGlkPSJyZWN0NDQ5NiIgeT0iMzAuMTIxNTQiIGhlaWdodD0iMjAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdH'+
			'Jva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgd2lkdGg9IjUiIHg9IjM1LjI2ODU4NSIvPgogICAgPC9nPgogICA8L2c+CiAgIDxnIGlkPSJnNDUwOC03IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxNS40NTUwOTksNjMuMTEyNDUxKSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgICA8Y2lyY2xlIGlkPSJwYXRoNDQ5Mi05'+
			'IiBjeT0iMjQuNzg0MzE3IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGN4PSIzNy4zNDI2NDgiIHI9IjcuNSIvPgogICAgPGcgaWQ9Imc0NTAyLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MD'+
			'Q4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgICAgPGVsbGlwc2UgaWQ9InBhdGg0NDkwLTIiIGN5PSI2My41Njc1NTEiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tl'+
			'LW9wYWNpdHk6MC41MDE5NjA3OCIgcng9IjE1IiBjeD0iMzcuNzY4NTg1IiByeT0iMTQuOTk5OTk5Ii8+CiAgICAgPHJlY3QgaWQ9InJlY3Q0NDk2LTIiIHk9IjMwLjEyMTU0IiBoZWlnaHQ9IjIwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHdpZHRoPSI1IiB4PSIzNS4yNjg1ODUiLz4KIC'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9mYWNlYm9vay5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4K'+
			'ICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iNTc1MCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9IjEiIG'+
			'lua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSIwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MTgiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5r'+
			'c2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYX'+
			'RoIGlkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdz'+
			'Om5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2'+
			'U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ry'+
			'b2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OS'+
			'AxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2'+
			'NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2'+
			'xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcG'+
			'FjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxnIGlkPSJnNDc3MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xODMzNTQ1OCwwLDAsMC4xODM0NzkyNSwyMS41MDU5NjQsMjMuNSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+'+
			'CiAgPGcgaWQ9Imc0NzE0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICA8cGF0aCBpZD0icGF0aDQ3MTIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAxNjcuMTcyLDI4OC44NjEgaCAtNjIuMTYgViAxNTkuMzQ3IEggNzAuNzY5IHYgLTU5LjQ4IGggMzQuMjQyIHYgLTMzLjQgQyAxMDUuMDExLDM1LjgwNC'+
			'AxMjQuMTk1LDAgMTc4LjI4NCwwIGMgMTkuMDY4LDAgMzMuMDY2LDEuNzg3IDMzLjY1MSwxLjg2NCBsIDUuNzM5LDAuNzQ2IC0xLjM4Miw1NS42NjMgLTYuMzI0LC0wLjA1OCBjIC0wLjAxMywwIC0xNC4yMjMsLTAuMTM1IC0yOS43MjQsLTAuMTM1IC0xMS41MzYsMCAtMTMuMDY2LDIuODQ3IC0xMy4wNjYsMTQuMTcxIFYgOTkuODggaCA1MC45MTMgbCAtMi44MjEsNTkuNDggaCAtNDguMDg2IHYgMTI5LjUwMSB6IG0gLTQ5LjMxNCwtMTIuODU0IGggMzYuNDUzIFYgMTQ2LjUgaCA0OC42NzcgbCAxLjYwNywtMzMuNzc5IEggMTU0LjMxMSBWIDcyLjIzOCBjIDAsLTEzLjM2OCAzLjA3OCwtMjcuMDI1'+
			'IDI1LjkxOSwtMjcuMDI1IDkuMTc4LDAgMTcuODk5LDAuMDQ1IDIzLjUwOSwwLjA5IGwgMC43NzgsLTMxLjI5MiBjIC01LjY3NSwtMC41MDggLTE1LjExNiwtMS4xNTcgLTI2LjI0NywtMS4xNTcgLTQ0LjU0NCwwIC02MC40MTksMjcuNjkzIC02MC40MTksNTMuNjEzIHYgNDYuMjU0IEggODMuNjEgViAxNDYuNSBoIDM0LjI0MiB2IDEyOS41MDcgeiIvPgogIDwvZz4KICA8ZyBpZD0iZzQ3MTYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDcxOCIgc3R5bGU9ImZpbG'+
			'w6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NzIwIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3MjIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDcyNCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtz'+
			'dHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NzI2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3MjgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDczMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdH'+
			'Jva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NzMyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3MzQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDczNiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+'+
			'CiAgPGcgaWQ9Imc0NzM4IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3NDAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNDUyMDYwMjI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDc0MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NS40NTIwNjAyMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NzQ0IiBzdHlsZT0iZm'+
			'lsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ1MjA2MDIyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV90d2l0dGVyLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgog'+
			'ICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSI1NzUwIiBpbmtzY2FwZTp6b29tPSIxMy45OSIgYm9yZGVyb3BhY2l0eT0iMSIgaW'+
			'5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIzOC4wNjI5MDIiIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExIiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkxOCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA1NCIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiPgogIDxpbmtz'+
			'Y2FwZTpncmlkIGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdG'+
			'ggaWQ9InBhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6'+
			'bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZT'+
			'pub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJv'+
			'a2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5ID'+
			'EwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0'+
			'MiA1MCwxMi41MjU2NDIgWiIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbG'+
			'F0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRy'+
			'YW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYW'+
			'Npbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB5PSIxMjkuNDkzMjEiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii0yOSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0ODMzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjA5NTg0NTYxLDAsMCwwLjA5NTc5NjE2LDI1LjQ5MjAzNywyNS41MTM0MTgpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2'+
			'MDc4Ij4KICA8ZyBpZD0iZzQ3NzYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICA8ZyBpZD0iZzQ3NzQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICAgPHBhdGggaWQ9InBhdGg0NzcyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC40MzYxMzgxNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb2'+
			'5uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwOC4zNDIsOTQuMjQzIEMgNTA1LjczOSw5MS42NCA1MDEuNCw5MC43NzIgNDk3LjkyOCw5MS42NCBsIC0xNy4zNTYsNi4wNzUgYyAxMC40MTQsLTEyLjE0OSAxNy4zNTYsLTI1LjE2NiAyMS42OTUsLTM3LjMxNSAxLjczNiwtNC4zMzkgMC44NjgsLTcuODEgLTEuNzM2LC0xMC40MTQgLTIuNjAzLC0yLjYwMyAtNi45NDIsLTMuNDcxIC0xMC40MTQsLTEuNzM2IC0yNC4yOTgsMTAuNDE0IC00NS4xMjUsMTkuMDkyIC02Mi40ODEsMjQuMjk4IDAsMC44NjggLTAuODY4LDAgLTEuNzM2LDAgLTEzLjg4NSwtNy44MSAtNDcuNzI5LC0yNS4xNjYgLTcyLjAy'+
			'NywtMjUuMTY2IC02MS42MTQsMC44NjggLTExMS4wNzgsNTIuOTM2IC0xMTEuMDc4LDExNi4yODUgdiAzLjQ3MSBDIDE1Mi41NDQsMTQ5Ljc4MiAxMDMuMDgsMTIzLjc0OCA0OS4yNzYsNjcuMzQxIEwgNDAuNiw1OC42NjMgMzUuMzkzLDY5LjA3NyBjIC0yOS41MDUsNTYuNDA3IC04LjY3OCwxMDcuNjA3IDI1LjE2NiwxNDIuMzE5IC0xNS42MiwtMi42MDMgLTI2LjAzNCwtNy44MSAtMzUuNTgsLTE1LjYyIC0zLjQ3MSwtMi42MDMgLTcuODEsLTMuNDcxIC0xMi4xNDksLTAuODY4IC0zLjQ3MSwxLjczNiAtNS4yMDcsNi45NDIgLTQuMzM5LDExLjI4MSAxMi4xNDksNDAuNzg2IDQyLjUyMiw3My43Nj'+
			'MgNzUuNDk4LDkzLjcyMiAtMTUuNjIsMCAtMjguNjM3LC0xLjczNiAtNDEuNjU0LC0xMC40MTQgLTMuNDcxLC0xLjczNiAtOC42NzgsLTEuNzM2IC0xMi4xNDksMC44NjggLTMuNDcxLDIuNjA0IC01LjIwNyw2Ljk0MiAtMy40NzEsMTEuMjgxIDE1LjYyLDQ0LjI1OCA0NS45OTMsNjcuNjg4IDk0LjU5LDczLjc2MyAtMjUuMTY2LDE0Ljc1MyAtNTguMTQyLDI2LjkwMiAtMTA5LjM0MiwyNy43NyAtNS4yMDcsMCAtOS41NDYsMy40NzEgLTExLjI4MSw3LjgxIC0xLjczNiw1LjIwNyAwLDkuNTQ2IDMuNDcxLDEzLjAxNyAzMS4yNDEsMjUuMTY2IDEwMC42NjQsMzkuOTE5IDE4Ni41NzYsMzkuOTE5IDE1'+
			'Mi43MzIsMCAyNzcuNjk1LC0xMzYuMjQ0IDI3Ny42OTUsLTMwMy43MjkgdiAtMi42MDMgYyAxOS4wOTIsLTkuNTQ2IDM0LjcxMiwtMjcuNzcgNDIuNTIyLC01Mi45MzYgMC44NjcsLTMuNDcyIC0wLjAwMSwtNy44MTEgLTIuNjA0LC0xMC40MTQgeiBtIC01Mi4wNjgsNDkuNDY0IC01LjIwNywxLjczNiB2IDE0Ljc1MyBjIDAsMTU3LjkzOSAtMTE3LjE1MywyODYuMzczIC0yNjAuMzM5LDI4Ni4zNzMgLTc4Ljk3LDAgLTEzMS45MDUsLTEzLjAxNyAtMTYwLjU0MiwtMjYuOTAyIDU5Ljg3OCwtNC4zMzkgOTQuNTksLTIzLjQzMSAxMjEuNDkyLC00NC4yNTggbCAyMS42OTUsLTE1LjYyIGggLTI2LjAzNC'+
			'BjIC00OS40NjQsMCAtNzkuODM3LC0xMy44ODUgLTk3LjE5MywtNDYuODYxIDE1LjYyLDUuMjA3IDMyLjEwOCw1LjIwNyA1MC4zMzIsNC4zMzkgNi45NDIsLTAuODY4IDEzLjg4NSwtMC44NjggMjAuODI3LC0wLjg2OCBsIDIuNjAzLC0xNy4zNTYgYyAtMzIuOTc2LC05LjU0NiAtNzIuMDI3LC0zOS4wNTEgLTkxLjExOSwtNzguOTY5IDE3LjM1Niw3LjgxIDM2LjQ0Nyw5LjU0NiA1My44MDMsOS41NDYgaCAyNi45MDIgTCA5MS44LDIxMy45OTkgQyA3My41NzYsMjAwLjk4MiAxOS43NzMsMTU0Ljk4OSA0NS44MDcsODkuMDM2IGMgNTUuNTM5LDU0LjY3MSAxMDguNDc1LDc5LjgzNyAyMDMuOTMyLDk3'+
			'LjE5MyBsIDEwLjQxNCwxLjczNiB2IC0yNC4yOTggYyAwLC01My44MDMgNDEuNjU0LC05OC4wNjEgOTMuNzIyLC05OC45MjkgMTkuOTU5LC0wLjg2OCA1Mi45MzYsMTcuMzU2IDYyLjQ4MSwyMi41NjMgNS4yMDcsMi42MDMgMTAuNDE0LDMuNDcxIDE1LjYyLDEuNzM2IDEzLjAxNywtNC4zMzkgMjguNjM3LC0xMC40MTQgNDUuOTkzLC0xNy4zNTYgLTcuODEsMTMuMDE3IC0xOC4yMjQsMjUuMTY2IC0zMi4xMDgsMzYuNDQ4IC0zLjQ3MSwyLjYwMyAtNC4zMzksNy44MSAtMi42MDMsMTIuMTQ5IDEuNzM2LDQuMzM5IDYuOTQyLDYuMDc1IDExLjI4MSw0LjMzOSBsIDMzLjg0NCwtMTEuMjgxIGMgLTYuMD'+
			'c1LDExLjI4IC0xNS42MjEsMjQuMjk3IC0zMi4xMDksMzAuMzcxIHoiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBpZD0iZzQ3NzgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3ODAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3ODIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQz'+
			'NjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3ODQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3ODYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3ODgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5Oj'+
			'AuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3OTAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3OTIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3OTQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0i'+
			'ZzQ3OTYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ3OTgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ4MDAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ4MDIiIHN0eWxlPSJmaWxsOiNmZm'+
			'ZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ4MDQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ4MDYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjQzNjEzODE1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9pbnN0YWdyYW0uc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+'+
			'CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlua3NjYXBlOnpvb209IjEzLjk5IiBib3JkZXJvcGFjaXR5PSIxIi'+
			'BpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjM4LjA2MjkwMiIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8'+
			'aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KID'+
			'xwYXRoIGlkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRp'+
			'bmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3'+
			'BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7'+
			'c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Nj'+
			'c0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41'+
			'MjU2NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci'+
			'1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxnIGlkPSJnNDU2OSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Mzc3MTMzMiwwLDAsMC45NTcyMjY3LDI3LjQ5NDg4LDI3LjAyNjU1OSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU1NDk4MTI7c3Ryb2tlLW9wYWNpdHk6MC41MDE5'+
			'NjA3OCI+CiAgPGcgaWQ9Imc0NTEwLTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxnIGlkPSJnNDUwOC05IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA1NTQ5ODEyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICAgPHBhdGggaWQ9InBhdGg0NTAyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA1NTQ5ODEyO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOm'+
			'Nvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNDAuNCw1LjUgSCAzNS42IEMgMzQuMTY2LDUuNSAzMyw2LjY2NiAzMyw4LjEgdiA0LjggYyAwLDEuNDM0IDEuMTY2LDIuNiAyLjYsMi42IGggNC44IGMgMS40MzQsMCAyLjYsLTEuMTY2IDIuNiwtMi42IFYgOC4xIEMgNDMsNi42NjYgNDEuODM0LDUuNSA0MC40LDUuNSBaIG0gMC42LDcuNCBjIDAsMC4zMzEgLTAuMjY5LDAuNiAtMC42LDAuNiBIIDM1LjYgQyAzNS4yNjksMTMuNSAzNSwxMy4yMzEgMzUsMTIuOSBWIDguMSBjIDAsLTAuMzMxIDAuMjY5LC0wLjYgMC42LC0wLjYgaCA0LjggYyAwLjMzMSwwIDAuNiwwLjI2OSAwLjYsMC42IHoiLz4K'+
			'ICAgIDxwYXRoIGlkPSJwYXRoNDUwNCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNTU0OTgxMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDM3LjgsMC41IEggMTAuMiBDIDQuNTc2LDAuNSAwLDUuMDg5IDAsMTAuNzMxIHYgNi43NjkgMiAxNy43NyBDIDAsNDIuOTExIDQuNTc2LDQ3LjUgMTAuMiw0Ny41IEggMzcuOCBDIDQzLjQyNCw0Ny41IDQ4LDQyLjkxMSA0OCwzNy4yNyBWIDE5LjUgMTcuNSAxMC43MzEgQyA0OCw1LjA4OSA0My40MjQsMC41IDM3LjgsMC41IFogTSA0Ni'+
			'wzNy4yNyBjIDAsNC41MzggLTMuNjc5LDguMjMgLTguMiw4LjIzIEggMTAuMiBDIDUuNjc4LDQ1LjUgMiw0MS44MDggMiwzNy4yNyBWIDE5LjUgSCAxNC4yMjEgQyAxMS42MiwyMi4wNDMgMTAsMjUuNTg0IDEwLDI5LjUgYyAwLDcuNzIgNi4yOCwxNCAxNCwxNCA3LjcyLDAgMTQsLTYuMjggMTQsLTE0IDAsLTMuOTE2IC0xLjYyLC03LjQ1NyAtNC4yMjEsLTEwIEggNDYgWiBNIDM2LDI5LjUgYyAwLDYuNjE3IC01LjM4MywxMiAtMTIsMTIgLTYuNjE3LDAgLTEyLC01LjM4MyAtMTIsLTEyIDAsLTYuNjE3IDUuMzgzLC0xMiAxMiwtMTIgNi42MTcsMCAxMiw1LjM4MyAxMiwxMiB6IG0gLTQuODI2LC0x'+
			'MiBjIC0yLjEwMSwtMS4yNjEgLTQuNTUsLTIgLTcuMTc0LC0yIC0yLjYyNCwwIC01LjA3MywwLjczOSAtNy4xNzQsMiBIIDIgViAxMC43MzEgQyAyLDYuMTkyIDUuNjc5LDIuNSAxMC4yLDIuNSBoIDI3LjYgYyA0LjUyMSwwIDguMiwzLjY5MiA4LjIsOC4yMzEgViAxNy41IFoiLz4KICAgIDxwYXRoIGlkPSJwYXRoNDUwNiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNTU0OTgxMjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDE1LDI5LjUgYyAwLDQuOTYyIDQuMDM3LDkgOSw5ID'+
			'QuOTYzLDAgOSwtNC4wMzggOSwtOSAwLC00Ljk2MiAtNC4wMzcsLTkgLTksLTkgLTQuOTYzLDAgLTksNC4wMzggLTksOSB6IG0gMTYsMCBjIDAsMy44NiAtMy4xNDEsNyAtNyw3IC0zLjg1OSwwIC03LC0zLjE0IC03LC03IDAsLTMuODYgMy4xNDEsLTcgNywtNyAzLjg1OSwwIDcsMy4xNCA3LDcgeiIvPgogICA8L2c+CiAgPC9nPgogIDxnIGlkPSJnNDUxMi0yIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1MTQtOCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6'+
			'I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTE2LTciIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDUxOC00IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1MjAtMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdG'+
			'g6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTIyLTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDUyNC05IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1MjYtOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Ut'+
			'b3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTI4LTgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDUzMC03IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1MzItMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii'+
			'8+CiAgPGcgaWQ9Imc0NTM0LTgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDUzNi04IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjA0NDY3MjI1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1MzgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDQ0NjcyMjU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0MCIgc3R5'+
			'bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wNDQ2NzIyNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9nb29nbGVfcGx1cy5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJE'+
			'Rj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iNTc1MCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9Ij'+
			'EiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSIwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MTgiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8'+
			'aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KID'+
			'xwYXRoIGlkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRp'+
			'bmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3'+
			'BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7'+
			'c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Nj'+
			'c0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41'+
			'MjU2NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci'+
			'1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxnIGlkPSJnNDcxMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMTUyMzQzOCwwLDAsMC4xMTUxNjEwOSwyMC40OTk5OTksMjAuNTE4NzYxKSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUw'+
			'MTk2MDc4Ij4KICA8ZyBpZD0iZzQ2NTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEsMSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxnIGlkPSJnNDY0OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgIDxnIGlkPSJnNDY0NyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLj'+
			'UwMTk2MDc4Ij4KICAgICA8cGF0aCBpZD0icGF0aDQ2NDMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSAzMTguMTQ3LDIxMi4zMzMgSCAxNTIuNiB2IDc2LjggaCA4My42MjcgYyAtMTEuOTQ3LDMxLjU3MyAtMzguNCw1MS4yIC03My4zODcsNTEuMiAtNDYuMDgsMCAtODcuMDQsLTQwLjEwNyAtODcuMDQsLTg1LjMzMyAwLC00NS4yMjYgNDAuOTYsLTg1LjMzMyA4Ny4wNCwtODUuMzMzIDIyLjE4NywwIDQwLjk2LDYuODI3'+
			'IDU0LjYxMywyMC40OCBsIDUuOTczLDUuOTczIDU3LjE3MywtNTcuMTczIC02LjgyNywtNS45NzMgQyAyNDcuMzIsMTA2LjUyIDIwOC45Miw5Mi44NjcgMTYyLjg0LDkyLjg2NyA3MC42OCw5Mi44NjcgLTEsMTYzLjY5MyAtMSwyNTUgYyAwLDkxLjMwNyA3MS42OCwxNjIuMTMzIDE2My44NCwxNjIuMTMzIDg0LjQ4LDAgMTQ1LjA2NywtNDkuNDkzIDE1Ni4xNiwtMTI5LjcwNyAxLjcwNywtMTAuMjQgMi41NiwtMjEuMzMzIDIuNTYsLTMyLjQyNyAwLC0xMi44IC0wLjg1MywtMjUuNiAtMi41NiwtMzUuODQgeiBtIC0xNS4zNiw3Mi41MzQgYyAtMTEuMDkzLDcyLjUzMyAtNjMuMTQ3LDExNS4yIC0xMz'+
			'kuOTQ3LDExNS4yIC04MS45MiwwIC0xNDYuNzczLC02NCAtMTQ2Ljc3MywtMTQ1LjA2NyAwLC04MS4wNjcgNjQuODUzLC0xNDUuMDY3IDE0Ni43NzMsLTE0NS4wNjcgMzguNCwwIDY5LjEyLDEwLjI0IDkzLjAxMywyOS4wMTMgbCAtMzMuMjgsMzMuMjggYyAtMTUuMzYsLTEyLjggLTM1Ljg0LC0xOS42MjcgLTU5LjczMywtMTkuNjI3IC01Ni4zMiwwIC0xMDQuMTA3LDQ2LjkzMyAtMTA0LjEwNywxMDIuNCAwLDU1LjQ2NyA0Ny43ODcsMTAyLjQgMTAzLjI1MywxMDIuNCA0Ni4wOCwwIDgyLjc3MywtMjkuODY3IDkzLjAxMywtNzUuMDkzIGwgMi41NiwtMTAuMjQgSCAxNjkuNjY2IFYgMjI5LjQgSCAz'+
			'MDMuNjQgYyAwLjg1Myw3LjY4IDEuNzA3LDE3LjA2NyAxLjcwNywyNS42IDAsMTAuMjQgLTAuODU0LDIwLjQ4IC0yLjU2LDI5Ljg2NyB6Ii8+CiAgICAgPHBhdGggaWQ9InBhdGg0NjQ1IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gNDU5LjgsMjEyLjMzMyB2IC01MS4yIGggLTU5LjczMyB2IDUxLjIgaCAtNTEuMiB2IDU5LjczMyBoIDUxLjIgdiA1MS4yIEggNDU5LjggdiAtNTEuMiBIIDUxMSBWIDIxMi4zMzMgWiBNID'+
			'Q5My45MzMsMjU1IGggLTUxLjIgdiA1MS4yIGggLTI1LjYgViAyNTUgaCAtNTEuMiB2IC0yNS42IGggNTEuMiB2IC01MS4yIGggMjUuNiB2IDUxLjIgaCA1MS4yIHoiLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyBpZD0iZzQ2NTMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDY1NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9'+
			'Imc0NjU3IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2NTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDY2MSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjYzIiBzdHlsZT0iZmlsbDojZmZmZm'+
			'ZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2NjUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDY2NyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjY5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13'+
			'aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2NzEiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDY3MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0Njc1IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcG'+
			'FjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2NzciIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguNjgwNzI2MDU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDY3OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC42ODA3MjYwNTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjgxIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjY4MDcyNjA1O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KIDwvZz4K'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9InNvY2lhbF9tZWRpYV9saW5rZWRpbi5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4K'+
			'ICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iNTc1MCIgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGJvcmRlcm9wYWNpdHk9IjEiIG'+
			'lua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iMzguMDYyOTAyIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgZ3JpZHRvbGVyYW5jZT0iMTAiIHNob3dncmlkPSJ0cnVlIiBwYWdlY29sb3I9IiM5MDkwOGUiIGlua3NjYXBlOndpbmRvdy15PSIwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MTgiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNTQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5r'+
			'c2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYX'+
			'RoIGlkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdz'+
			'Om5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2'+
			'U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ry'+
			'b2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OS'+
			'AxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2'+
			'NDIgNTAsMTIuNTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2'+
			'xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcG'+
			'FjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxnIGlkPSJnNDY0MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODc5MDY4LDAsMCwwLjA4OTM2MzY2LDI3LjQ5NTgxNSwyNy4xMjI4NTgpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2'+
			'MDc4Ij4KICA8ZyBpZD0iZzQ1ODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgPGcgaWQ9Imc0NTc5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgIDxnIGlkPSJnNDU3NyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MD'+
			'E5NjA3OCI+CiAgICAgPHBhdGggaWQ9InBhdGg0NTcxIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxMS4yODI1NzY1NjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDY4LjEyLDQuMjY3IEMgNDkuMzQ3LDQuMjY3IDMyLjI4LDExLjA5NCAxOS40OCwyMy44OTQgNS44MjcsMzcuNTQ3IC0xLDU0LjYxMyAtMSw3Mi41MzMgYyAwLDE4Ljc3MyA3LjY4LDM1Ljg0IDIwLjQ4LDQ4LjY0IDEyLjgsMTIuOCAzMC43MiwyMC40OCA0Ny43ODcsMTkuNjI3IDAsMCAwLjg1MywwIDEuNzA3LDAgMTcu'+
			'MDY3LDAgMzMuMjgsLTYuODI3IDQ2LjA4LC0xOS42MjcgMTIuOCwtMTIuOCAyMC40OCwtMjkuODY3IDIwLjQ4LC00OC42NCAwLjg1MywtMTcuOTIgLTYuODI3LC0zNC45ODcgLTE5LjYyNywtNDcuNzg3IEMgMTAzLjEwNywxMS4wOTMgODYuMDQsNC4yNjcgNjguMTIsNC4yNjcgWiBtIDM0Ljk4NywxMDQuOTYgYyAtOS4zODcsOS4zODcgLTIyLjE4NywxNS4zNiAtMzUuODQsMTQuNTA3IC0xMi44LDAgLTI2LjQ1MywtNS4xMiAtMzUuODQsLTE0LjUwNyAtMTAuMjQsLTkuMzg3IC0xNS4zNiwtMjMuMDQgLTE1LjM2LC0zNi42OTMgMCwtMTMuNjUzIDUuMTIsLTI2LjQ1MyAxNS4zNiwtMzYuNjkzIDkuMz'+
			'g3LC05LjM4NyAyMi4xODcsLTE0LjUwNyAzNi42OTMsLTE0LjUwNyAxMi44LDAgMjUuNiw1LjEyIDM0Ljk4NywxNC41MDcgMTAuMjQsMTAuMjQgMTUuMzYsMjMuMDQgMTUuMzYsMzYuNjkzIDAsMTMuNjUzIC01LjEyLDI3LjMwNiAtMTUuMzYsMzYuNjkzIHoiLz4KICAgICA8cGF0aCBpZD0icGF0aDQ1NzMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gMTAxLjQsMTU3Ljg2NyBIIDMyLjI4IGMgLTEzLjY1MywwIC0yNC43'+
			'NDcsMTEuMDkzIC0yNC43NDcsMjUuNiB2IDI5OC42NjcgYyAwLDEzLjY1MyAxMS45NDcsMjUuNiAyNS42LDI1LjYgSCAxMDEuNCBjIDEzLjY1MywwIDI1LjYsLTExLjk0NyAyNS42LC0yNC43NDcgdiAtMjk5LjUyIGMgMCwtMTMuNjU0IC0xMS45NDcsLTI1LjYgLTI1LjYsLTI1LjYgeiBtIDguNTMzLDMyNS4xMiBjIDAsNC4yNjcgLTQuMjY3LDcuNjggLTguNTMzLDcuNjggSCAzMy4xMzMgYyAtNC4yNjcsMCAtOC41MzMsLTQuMjY3IC04LjUzMywtOC41MzMgViAxODMuNDY3IGMgMCwtNC4yNjcgMy40MTMsLTguNTMzIDcuNjgsLTguNTMzIGggNjkuMTIgYyA0LjI2NywwIDguNTMzLDQuMjY3IDguNT'+
			'MzLDguNTMzIHoiLz4KICAgICA8cGF0aCBpZD0icGF0aDQ1NzUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjExLjI4MjU3NjU2O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMzkxLjUzMywxNDkuMzMzIGggLTE3LjkyIGMgLTMzLjI4LDAgLTY0Ljg1MywxNC41MDcgLTg1LjMzMywzNy41NDcgdiAtMTEuOTQ3IGMgMCwtOC41MzMgLTguNTMzLC0xNy4wNjcgLTE3LjA2NywtMTcuMDY3IEggMTg1Ljg4IGMgLTcuNjgsMCAtMTcuMDY3LDYuODI3IC0xNy4wNjcsMTYuMjEzIHYgMzE4LjI5'+
			'MyBjIDAsOS4zODcgOS4zODcsMTUuMzYgMTcuMDY3LDE1LjM2IGggOTMuODY3IGMgNy42OCwwIDE3LjA2NywtNS45NzMgMTcuMDY3LC0xNS4zNiB2IC0xODQuMzIgYyAwLC0yOC4xNiAyMC40OCwtNTAuMzQ3IDQ2LjkzMywtNTAuMzQ3IDEzLjY1MywwIDI2LjQ1Myw1LjEyIDM1Ljg0LDE0LjUwNyA4LjUzMyw3LjY4IDExLjk0NywxOS42MjcgMTEuOTQ3LDM0Ljk4NyB2IDE4My40NjcgYyAwLDguNTMzIDguNTMzLDE3LjA2NyAxNy4wNjcsMTcuMDY3IGggODUuMzMzIGMgOC41MzMsMCAxNy4wNjcsLTguNTMzIDE3LjA2NywtMTcuMDY3IFYgMjcwLjUwNiBDIDUxMSwyMDIuMjQgNDU4Ljk0NywxNDkuMz'+
			'MzIDM5MS41MzMsMTQ5LjMzMyBaIG0gMTAyLjQsMzQwLjQ4IC0wLjg1MywwLjg1MyBIIDQwOS40NTMgTCA0MDguNiwzMDcuMiBjIDAsLTIwLjQ4IC01LjEyLC0zNS44NCAtMTYuMjEzLC00Ni45MzMgLTEyLjgsLTEyLjggLTI5Ljg2NywtMTkuNjI3IC00Ny43ODcsLTE5LjYyNyAtMzUuODQsMC44NTMgLTY0LDI5Ljg2NyAtNjQsNjcuNDEzIFYgNDkwLjY2NiBIIDE4Ni43MzMgViAxNzQuOTMzIGggODQuNDggbCAwLjg1MywwLjg1MyB2IDUzLjc2IGwgMjMuMDQsLTIzLjA0IDAuODUzLC0wLjg1MyBDIDMxMy4wMjYsMTgxLjc2IDM0Mi44OTIsMTY2LjQgMzc0LjQ2NiwxNjYuNCBoIDE3LjkyIGMgNTcu'+
			'MTczLDAgMTAxLjU0Nyw0Ni4wOCAxMDEuNTQ3LDEwNC4xMDcgeiIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIGlkPSJnNDU4MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU4NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU4NyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdG'+
			'g6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU4OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU5MSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU5MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9w'+
			'YWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU5NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU5NyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU5OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogID'+
			'xnIGlkPSJnNDYwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwNyIgc3R5bGU9ImZp'+
			'bGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYxMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTEuMjgyNTc2NTY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX29uX3NvY2lhbF9tZWRpYS5zdmciPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEzIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTEiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgb2JqZWN0dG9sZX'+
			'JhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMTguNDMiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iNDEuMzcyNzYyIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXc5IiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9ImZhbHNlIiBwYWdlY29sb3I9IiM4ZDhiOGIiIGlua3NjYXBlOndpbmRvdy15PSIt'+
			'MTEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuNTY4NjI3NDUiLz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeT0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW'+
			'9yZGVyOm5vcm1hbCIgY3g9IjUwIiByPSIzOCIvPgogPHBhdGggaWQ9InBhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRl'+
			'cm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYX'+
			'NlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVy'+
			'bztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Ik0gNTAsMT'+
			'AuNSBDIDI4LjE5Njc0OSwxMC41IDEwLjUwMDAwMSwyOC4xOTY3NDggMTAuNTAwMDAxLDUwIDEwLjUwMDAwMSw3MS44MDMyNTIgMjguMTk2NzQ5LDg5LjUgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ4IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDEgYyAyMC43MDg1MTMsMCAzNy40NzQzNTksMTYuNzY1ODQ2IDM3LjQ3NDM1OSwzNy40NzQzNTkgMCwyMC43MDg1MTIgLTE2Ljc2NTg0NiwzNy40NzQzNTggLTM3LjQ3NDM1OSwzNy40NzQzNTggLTIwLjcwODUxMiwwIC0zNy40NzQzNTgsLTE2Ljc2NTg0NiAtMzcuNDc0'+
			'MzU4LC0zNy40NzQzNTkgMCwtMjAuNzA4NTEyIDE2Ljc2NTg0NiwtMzcuNDc0MzU4IDM3LjQ3NDM1OCwtMzcuNDc0MzU4IHoiLz4KIDxnIGlkPSJnNDU2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzAxMDgxMSwwLjQ4OTQ5NDUyLC0wLjQ4OTQ5NDUyLDAuNzMwMTA4MTEsNjcuNzk0MDc0LC0xNi43MzU3MikiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogID'+
			'xnIGlkPSJnNDU0NyIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjM0MjY0OCwyMS40MzI0NSkiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxp'+
			'bWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICAgPGNpcmNsZSBpZD0icGF0aDQ0OTIiIGN5PSIyNC43ODQzMTciIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgY3g9IjM3LjM0MjY0OCIgcj0iNy41Ii8+CiAgICA8ZyBpZD0iZzQ1MDIiIH'+
			'RyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgICAgPGVsbGlwc2UgaWQ9InBhdGg0NDkwIiBjeT0iNjMuNTY3NTUxIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpz'+
			'cXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHJ4PSIxNSIgY3g9IjM3Ljc2ODU4NSIgcnk9IjE0Ljk5OTk5OSIvPgogICAgIDxyZWN0IGlkPSJyZWN0NDQ5NiIgeT0iMzAuMTIxNTQiIGhlaWdodD0iMjAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdH'+
			'Jva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgd2lkdGg9IjUiIHg9IjM1LjI2ODU4NSIvPgogICAgPC9nPgogICA8L2c+CiAgIDxnIGlkPSJnNDUwOC03IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxNS40NTUwOTksNjMuMTEyNDUxKSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgICA8Y2lyY2xlIGlkPSJwYXRoNDQ5Mi05'+
			'IiBjeT0iMjQuNzg0MzE3IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGN4PSIzNy4zNDI2NDgiIHI9IjcuNSIvPgogICAgPGcgaWQ9Imc0NTAyLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQyNTkzNzY1KSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MD'+
			'Q4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgICAgPGVsbGlwc2UgaWQ9InBhdGg0NDkwLTIiIGN5PSI2My41Njc1NTEiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjEzNzY0MDQ4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tl'+
			'LW9wYWNpdHk6MC41MDE5NjA3OCIgcng9IjE1IiBjeD0iMzcuNzY4NTg1IiByeT0iMTQuOTk5OTk5Ii8+CiAgICAgPHJlY3QgaWQ9InJlY3Q0NDk2LTIiIHk9IjMwLjEyMTU0IiBoZWlnaHQ9IjIwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMzc2NDA0ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHdpZHRoPSI1IiB4PSIzNS4yNjg1ODUiLz4KIC'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9pbmZvLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxOC40MyIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cG'+
			'FnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSI1MCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0i'+
			'Z3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYXRoIGlkPSJwYXRoNDQ5NC'+
			'Igc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWlu'+
			'ZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLX'+
			'BhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91'+
			'bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNz'+
			'EuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQy'+
			'IFoiLz4KIDxnIGlkPSJnNDUwNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMzk2NjEyOSwwLDAsMC4xMzk2NjEyOSwxNS4zNTI0NTIsMTUuMzUyODk3KSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogIDxnIGlkPSJnNDU4MiIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICA8cGF0aCBpZD0icGF0aDQ1MDIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjcuMTYwMTgwMDk7c3Ryb2'+
			'tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAzMTUuMjQ5LDM1OS41NTUgYyAtMS4zODcsLTIuMDMyIC00LjA0OCwtMi43NTUgLTYuMjcsLTEuNzAyIC0yNC41ODIsMTEuNjM3IC01Mi40ODIsMjMuOTQgLTU3Ljk1OCwyNS4wMTUgLTAuMTM4LC0wLjEyMyAtMC4zNTcsLTAuMzQ4IC0wLjY0NCwtMC43MzcgLTAuNzQyLC0xLjAwNSAtMS4xMDMsLTIuMzE4IC0xLjEwMywtNC4wMTUgMCwtMTMuOTA1IDEwLjQ5NSwtNTYuMjA1IDMxLjE5MiwtMTI1LjcxOSAxNy40NTEsLTU4LjQwNiAxOS40NjksLTcwLjQ5OSAxOS40NjksLTc0LjUxNCAwLC02'+
			'LjE5OCAtMi4zNzMsLTExLjQzNSAtNi44NjUsLTE1LjE0NiAtNC4yNjcsLTMuNTE5IC0xMC4yMjksLTUuMzAyIC0xNy43MTksLTUuMzAyIC0xMi40NTksMCAtMjYuODk5LDQuNzMgLTQ0LjE0NiwxNC40NjEgLTE2LjcxMyw5LjQzMyAtMzUuMzUyLDI1LjQxIC01NS4zOTYsNDcuNDg3IC0xLjU2OSwxLjcyOSAtMS43MzMsNC4zMTQgLTAuMzk1LDYuMjI4IDEuMzQsMS45MTUgMy44MjUsMi42NDQgNS45ODYsMS43NjQgNy4wMzcsLTIuODcyIDQyLjQwMiwtMTcuMzU5IDQ3LjU1NywtMjAuNTk3IDQuMjIxLC0yLjY0NiA3Ljg3NSwtMy45ODkgMTAuODYxLC0zLjk4OSAwLjEwNywwIDAuMTk5LDAuMDA0ID'+
			'AuMjc2LDAuMDEgMC4wMzYsMC4xOTggMC4wNywwLjUgMC4wNywwLjkzMyAwLDMuMDQ3IC0wLjYyNyw2LjY1NCAtMS44NTYsMTAuNzAzIC0zMC4xMzYsOTcuNjQxIC00NC43ODUsMTU3LjQ5OCAtNDQuNzg1LDE4Mi45OTQgMCw4Ljk5OCAyLjUwMSwxNi4yNDIgNy40MzIsMjEuNTI4IDUuMDI1LDUuMzkzIDExLjgwMyw4LjEyNyAyMC4xNDYsOC4xMjcgOC44OTEsMCAxOS43MTIsLTMuNzE0IDMzLjA4LC0xMS4zNTQgMTIuOTM2LC03LjM5MiAzMi42OCwtMjMuNjUzIDYwLjM2MywtNDkuNzE3IDEuNzkzLC0xLjY4NyAyLjA5MiwtNC40MjYgMC43MDUsLTYuNDU4IHoiLz4KICAgPHBhdGggaWQ9InBhdGg0'+
			'NTA0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMzE0LjI4Miw3Ni42NzIgYyAtNC45MjUsLTUuMDQxIC0xMS4yMjcsLTcuNTk3IC0xOC43MjksLTcuNTk3IC05LjM0LDAgLTE3LjQ3NSwzLjY5MSAtMjQuMTc2LDEwLjk3MSAtNi41OTQsNy4xNiAtOS45MzgsMTUuOTQ2IC05LjkzOCwyNi4xMTMgMCw4LjAzMyAyLjQ2MywxNC42OSA3LjMyLDE5Ljc4NSA0LjkyMiw1LjE3MiAxMS4xMzksNy43OTQgMTguNDc2LDcuNzk0ID'+
			'guOTU4LDAgMTcuMDQ5LC0zLjg5OCAyNC4wNDcsLTExLjU4NiA2Ljg3NiwtNy41NTMgMTAuMzYzLC0xNi40MzMgMTAuMzYzLC0yNi4zOTMgMC4wMDEsLTcuNjU0IC0yLjQ3NiwtMTQuMDc1IC03LjM2MywtMTkuMDg3IHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0i'+
			'dHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1'+
			'NjgiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHk9IjEyOS40OTMyMSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeD0iLTI5Ii8+CiA8L3RleHQ+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9pbmZvLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29y'+
			'ayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxOC40MyIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6cG'+
			'FnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSI1MCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0i'+
			'Z3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYXRoIGlkPSJwYXRoNDQ5NC'+
			'Igc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWlu'+
			'ZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLX'+
			'BhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6cm91'+
			'bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNz'+
			'EuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQy'+
			'IFoiLz4KIDxnIGlkPSJnNDUwNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMzk2NjEyOSwwLDAsMC4xMzk2NjEyOSwxNS4zNTI0NTIsMTUuMzUyODk3KSIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogIDxnIGlkPSJnNDU4MiIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICA8cGF0aCBpZD0icGF0aDQ1MDIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjcuMTYwMTgwMDk7c3Ryb2'+
			'tlLW9wYWNpdHk6MC41MDE5NjA3OCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAzMTUuMjQ5LDM1OS41NTUgYyAtMS4zODcsLTIuMDMyIC00LjA0OCwtMi43NTUgLTYuMjcsLTEuNzAyIC0yNC41ODIsMTEuNjM3IC01Mi40ODIsMjMuOTQgLTU3Ljk1OCwyNS4wMTUgLTAuMTM4LC0wLjEyMyAtMC4zNTcsLTAuMzQ4IC0wLjY0NCwtMC43MzcgLTAuNzQyLC0xLjAwNSAtMS4xMDMsLTIuMzE4IC0xLjEwMywtNC4wMTUgMCwtMTMuOTA1IDEwLjQ5NSwtNTYuMjA1IDMxLjE5MiwtMTI1LjcxOSAxNy40NTEsLTU4LjQwNiAxOS40NjksLTcwLjQ5OSAxOS40NjksLTc0LjUxNCAwLC02'+
			'LjE5OCAtMi4zNzMsLTExLjQzNSAtNi44NjUsLTE1LjE0NiAtNC4yNjcsLTMuNTE5IC0xMC4yMjksLTUuMzAyIC0xNy43MTksLTUuMzAyIC0xMi40NTksMCAtMjYuODk5LDQuNzMgLTQ0LjE0NiwxNC40NjEgLTE2LjcxMyw5LjQzMyAtMzUuMzUyLDI1LjQxIC01NS4zOTYsNDcuNDg3IC0xLjU2OSwxLjcyOSAtMS43MzMsNC4zMTQgLTAuMzk1LDYuMjI4IDEuMzQsMS45MTUgMy44MjUsMi42NDQgNS45ODYsMS43NjQgNy4wMzcsLTIuODcyIDQyLjQwMiwtMTcuMzU5IDQ3LjU1NywtMjAuNTk3IDQuMjIxLC0yLjY0NiA3Ljg3NSwtMy45ODkgMTAuODYxLC0zLjk4OSAwLjEwNywwIDAuMTk5LDAuMDA0ID'+
			'AuMjc2LDAuMDEgMC4wMzYsMC4xOTggMC4wNywwLjUgMC4wNywwLjkzMyAwLDMuMDQ3IC0wLjYyNyw2LjY1NCAtMS44NTYsMTAuNzAzIC0zMC4xMzYsOTcuNjQxIC00NC43ODUsMTU3LjQ5OCAtNDQuNzg1LDE4Mi45OTQgMCw4Ljk5OCAyLjUwMSwxNi4yNDIgNy40MzIsMjEuNTI4IDUuMDI1LDUuMzkzIDExLjgwMyw4LjEyNyAyMC4xNDYsOC4xMjcgOC44OTEsMCAxOS43MTIsLTMuNzE0IDMzLjA4LC0xMS4zNTQgMTIuOTM2LC03LjM5MiAzMi42OCwtMjMuNjUzIDYwLjM2MywtNDkuNzE3IDEuNzkzLC0xLjY4NyAyLjA5MiwtNC40MjYgMC43MDUsLTYuNDU4IHoiLz4KICAgPHBhdGggaWQ9InBhdGg0'+
			'NTA0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo3LjE2MDE4MDA5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gMzE0LjI4Miw3Ni42NzIgYyAtNC45MjUsLTUuMDQxIC0xMS4yMjcsLTcuNTk3IC0xOC43MjksLTcuNTk3IC05LjM0LDAgLTE3LjQ3NSwzLjY5MSAtMjQuMTc2LDEwLjk3MSAtNi41OTQsNy4xNiAtOS45MzgsMTUuOTQ2IC05LjkzOCwyNi4xMTMgMCw4LjAzMyAyLjQ2MywxNC42OSA3LjMyLDE5Ljc4NSA0LjkyMiw1LjE3MiAxMS4xMzksNy43OTQgMTguNDc2LDcuNzk0ID'+
			'guOTU4LDAgMTcuMDQ5LC0zLjg5OCAyNC4wNDcsLTExLjU4NiA2Ljg3NiwtNy41NTMgMTAuMzYzLC0xNi40MzMgMTAuMzYzLC0yNi4zOTMgMC4wMDEsLTcuNjU0IC0yLjQ3NiwtMTQuMDc1IC03LjM2MywtMTkuMDg3IHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0i'+
			'dHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1'+
			'NjgiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHk9IjEyOS40OTMyMSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeD0iLTI5Ii8+CiA8L3RleHQ+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9tYXBfbWFya2VyLnN2ZyI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxOC40MyIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcG'+
			'U6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSI0MC45Mzg2ODciIGd1aWRldG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzExIiBncmlkdG9sZXJhbmNlPSIxMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgaWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBpZD0icGF0aDQ0OTkiIGN5PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBjeD0iNTAiIHI9IjM4Ii8+CiA8cGF0aCBpZD'+
			'0icGF0aDQ0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3Jt'+
			'YWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm'+
			'1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNS'+
			'w1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUw'+
			'LDEyLjUyNTY0MiBaIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKD'+
			'Q3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNs'+
			'YXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1NjgiIHk9IjkzIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZz'+
			'owcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9Ii0yOSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHk9IjEyOS40OTMyMSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeD0iLTI5Ii8+CiA8L3RleHQ+CiA8ZyBpZD0iZzQ1NjkiIHRyYW5zZm9ybT0ibWF0cml4KDAuMTE5ODc5NjQsMCwwLDAuMTE5ODc5NjQsMjAuNTM0NjYzLDIwLjUzNDY2MykiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIj4K'+
			'ICA8ZyBpZD0iZzQ1MTEiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIj4KICAgPGcgaWQ9Imc0NTA5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSI+CiAgICA8cGF0aCBpZD0icGF0aDQ1MDUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3Vydm'+
			'F0dXJlPSIwIiBkPSJNIDI0NS43OTEsMCBDIDE1My43OTksMCA3OC45NTcsNzQuODQxIDc4Ljk1NywxNjYuODMzIGMgMCwzNi45NjcgMjEuNzY0LDkzLjE4NyA2OC40OTMsMTc2LjkyNiAzMS44ODcsNTcuMTM4IDYzLjYyNywxMDUuNCA2NC45NjYsMTA3LjQzMyBsIDIyLjk0MSwzNC43NzMgYyAyLjMxMywzLjUwNyA2LjIzMiw1LjYxNyAxMC40MzQsNS42MTcgNC4yMDIsMCA4LjEyMSwtMi4xMSAxMC40MzQsLTUuNjE3IGwgMjIuOTQsLTM0Ljc3MSBDIDI4MC40OTEsNDQ5LjE4NCAzMTIsNDAxLjMzOSAzNDQuMTMyLDM0My43NTkgMzkwLjg2MSwyNjAuMDI0IDQxMi42MjUsMjAzLjgwNCA0MTIuNjI1'+
			'LDE2Ni44MzMgNDEyLjYyNSw3NC44NDEgMzM3Ljc4MywwIDI0NS43OTEsMCBaIG0gNzYuNTExLDMzMS41NzYgYyAtMzEuNjg1LDU2Ljc3NSAtNjIuNjk2LDEwMy44NjkgLTY0LjAwMywxMDUuODQ4IGwgLTEyLjUwOCwxOC45NTkgLTEyLjUwNCwtMTguOTU0IEMgMjMxLjk3Myw0MzUuNDM0IDIwMC43MjQsMzg3LjkxOCAxNjkuMjgsMzMxLjU3NiAxMjUuOTM1LDI1My45IDEwMy45NTcsMTk4LjQ3MiAxMDMuOTU3LDE2Ni44MzMgMTAzLjk1Nyw4OC42MjYgMTY3LjU4MywyNSAyNDUuNzkxLDI1IGMgNzguMjA4LDAgMTQxLjgzNCw2My42MjYgMTQxLjgzNCwxNDEuODMzIDAsMzEuNjQzIC0yMS45NzgsOD'+
			'cuMDY5IC02NS4zMjMsMTY0Ljc0MyB6Ii8+CiAgICA8cGF0aCBpZD0icGF0aDQ1MDciIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDI0NS43OTEsNzMuMjkxIGMgLTUxLjAwNSwwIC05Mi41LDQxLjQ5NiAtOTIuNSw5Mi41IDAsNTEuMDA0IDQxLjQ5NSw5Mi41IDkyLjUsOTIuNSA1MS4wMDUsMCA5Mi41LC00MS40OTYgOTIuNSwtOTIuNSAwLC01MS4wMDQgLTQxLjQ5NSwtOTIuNSAtOTIuNSwtOTIuNSB6IG0gMCwxNjAgYyAt'+
			'MzcuMjIsMCAtNjcuNSwtMzAuMjggLTY3LjUsLTY3LjUgMCwtMzcuMjIgMzAuMjgsLTY3LjUgNjcuNSwtNjcuNSAzNy4yMjEsMCA2Ny41LDMwLjI4IDY3LjUsNjcuNSAwLDM3LjIyIC0zMC4yNzksNjcuNSAtNjcuNSw2Ny41IHoiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBpZD0iZzQ1MTMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIi8+CiAgPGcgaWQ9Imc0NTE1IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdH'+
			'k6MC41MDE5NjA4MSIvPgogIDxnIGlkPSJnNDUxNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiLz4KICA8ZyBpZD0iZzQ1MTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIi8+CiAgPGcgaWQ9Imc0NTIxIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIvPgogIDxnIGlkPSJnNDUy'+
			'MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiLz4KICA8ZyBpZD0iZzQ1MjUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIi8+CiAgPGcgaWQ9Imc0NTI3IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIvPgogIDxnIGlkPSJnNDUyOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2'+
			'Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiLz4KICA8ZyBpZD0iZzQ1MzEiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIi8+CiAgPGcgaWQ9Imc0NTMzIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIvPgogIDxnIGlkPSJnNDUzNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZm'+
			'ZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwODEiLz4KICA8ZyBpZD0iZzQ1MzciIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjguMzQxNjk5NjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDgxIi8+CiAgPGcgaWQ9Imc0NTM5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo4LjM0MTY5OTY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MSIvPgogIDxnIGlkPSJnNDU0MSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OC4zNDE2OTk2O3N0cm9rZTojZmZmZmZmO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwOD'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGlkPSJzdmc4IiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIGhlaWdodD0iMTAwIiB3aWR0aD0iMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmNjPS'+
			'JodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl92cl9nbGFzc2VzLnN2ZyIgdmlld0JveD0iMCAwIDI2LjQ1ODMzNCAyNi40NTgzMzMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpjeT0iNTAi'+
			'IGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxOC40MyIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iNTAiIGlkPSJiYXNlIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjODA3ZDdkIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpwYW'+
			'dlY2hlY2tlcmJvYXJkPSJmYWxzZSIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiB1bml0cz0icHgiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDEwIiB0eXBlPSJ4eWdyaWQiIG9yaWdpbnk9IjMzLjMwMTA0NSIgc3BhY2luZ3k9IjIuNjQ1ODMzMyIgb3JpZ2lueD0iNjcuNDI2MDQ0IiBkb3R0ZWQ9ImZhbHNlIiBlbXBzcGFjaW5nPSIyIiBzcGFjaW5neD0iMi42NDU4MzMzIi8+CiA8L3NvZGlwb2RpOm5h'+
			'bWVkdmlldz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY3LjQyNjA0MiwtMzAzLjg0MjY5KSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bG'+
			'FiZWw9IkxheWVyIDEiPgogIDxnIGlkPSJnNDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy45Mzc1MDAyLDEwLjU4MzMzMikiPgogICA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjMwNi40ODg1MyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBj'+
			'eD0iLTYyLjEzNDM3NyIgcj0iMTAuMDU0MTY3Ii8+CiAgIDxwYXRoIGlkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYW'+
			'x0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6'+
			'YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbn'+
			'plcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIw'+
			'IiBkPSJtIC02Mi4xMzQzNzYsMjk2LjAzNzQ4IGMgLTUuNzY4Nzc3LDAgLTEwLjQ1MTA0MSw0LjY4MjI3IC0xMC40NTEwNDEsMTAuNDUxMDQgMCw1Ljc2ODc4IDQuNjgyMjY0LDEwLjQ1MTA1IDEwLjQ1MTA0MSwxMC40NTEwNSA1Ljc2ODc3NywwIDEwLjQ1MTA0MiwtNC42ODIyNyAxMC40NTEwNDIsLTEwLjQ1MTA1IDAsLTUuNzY4NzcgLTQuNjgyMjY1LC0xMC40NTEwNCAtMTAuNDUxMDQyLC0xMC40NTEwNCB6IG0gMCwwLjUzNTk1IGMgNS40NzkxMjcsMCA5LjkxNTA5MSw0LjQzNTk3IDkuOTE1MDkxLDkuOTE1MDkgMCw1LjQ3OTEzIC00LjQzNTk2NCw5LjkxNTA5IC05LjkxNTA5MSw5LjkxNTA5IC'+
			'01LjQ3OTEyNywwIC05LjkxNTA5LC00LjQzNTk2IC05LjkxNTA5LC05LjkxNTA5IDAsLTUuNDc5MTIgNC40MzU5NjMsLTkuOTE1MDkgOS45MTUwOSwtOS45MTUwOSB6Ii8+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4'+
			'NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MT'+
			'E1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEu'+
			'NjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLD'+
			'UxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iMzE3Ljg2NTYiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjEwLjU4MzMzMzAycHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTgzLjAzNjQ1MyI+CiAgICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMzI3'+
			'LjUyMTA5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii04My4wMzY0NTMiLz4KICAgPC90ZXh0PgogIDwvZz4KICA8cGF0aCBpZD0icmVjdDQ0OTYtNiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm'+
			'9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9u'+
			'Omx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2'+
			'l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMzAwMDAwMDE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTgzMTUzO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91'+
			'bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAtNjAuNTQzODYsMzEyLjU2NjkxIGMgLTAuNjA1NTk5LDAgLTEuMTAyNzgsMC40NzY4MyAtMS4xMDI3OCwxLjA2NzIzIHYgNi44NzI3NCBjIDAsMC41OTAzNyAwLjQ5NzE3MiwxLjA2NzIyIDEuMTAyNzgsMS4wNjcyMiBoIDQuODQ1OTk3IGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMTE3NDM0LC0wLjExNzM2IHYgLTAuMDAyIGwgLTAuMTUwNDYyLDAuMTEzNyBjIDAuMTQ3NjczLDAuMDQ0MSAwLjMwMzAwOSwtMC4wODMgMC4yODA3NDEsLTAuMjM4MzkgbCAwLjAwMTksMC4wMDUgYyAwLDAgLT'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGlkPSJzdmc4IiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIGhlaWdodD0iMTAwIiB3aWR0aD0iMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmNjPS'+
			'JodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl92cl9nbGFzc2VzLnN2ZyIgdmlld0JveD0iMCAwIDI2LjQ1ODMzNCAyNi40NTgzMzMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpjeT0iNTAi'+
			'IGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTp6b29tPSIxOC40MyIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeD0iNTAiIGlkPSJiYXNlIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjODA3ZDdkIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpwYW'+
			'dlY2hlY2tlcmJvYXJkPSJmYWxzZSIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiB1bml0cz0icHgiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDEwIiB0eXBlPSJ4eWdyaWQiIG9yaWdpbnk9IjMzLjMwMTA0NSIgc3BhY2luZ3k9IjIuNjQ1ODMzMyIgb3JpZ2lueD0iNjcuNDI2MDQ0IiBkb3R0ZWQ9ImZhbHNlIiBlbXBzcGFjaW5nPSIyIiBzcGFjaW5neD0iMi42NDU4MzMzIi8+CiA8L3NvZGlwb2RpOm5h'+
			'bWVkdmlldz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY3LjQyNjA0MiwtMzAzLjg0MjY5KSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bG'+
			'FiZWw9IkxheWVyIDEiPgogIDxnIGlkPSJnNDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy45Mzc1MDAyLDEwLjU4MzMzMikiPgogICA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjMwNi40ODg1MyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiBj'+
			'eD0iLTYyLjEzNDM3NyIgcj0iMTAuMDU0MTY3Ii8+CiAgIDxwYXRoIGlkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYW'+
			'x0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6'+
			'YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbn'+
			'plcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIw'+
			'IiBkPSJtIC02Mi4xMzQzNzYsMjk2LjAzNzQ4IGMgLTUuNzY4Nzc3LDAgLTEwLjQ1MTA0MSw0LjY4MjI3IC0xMC40NTEwNDEsMTAuNDUxMDQgMCw1Ljc2ODc4IDQuNjgyMjY0LDEwLjQ1MTA1IDEwLjQ1MTA0MSwxMC40NTEwNSA1Ljc2ODc3NywwIDEwLjQ1MTA0MiwtNC42ODIyNyAxMC40NTEwNDIsLTEwLjQ1MTA1IDAsLTUuNzY4NzcgLTQuNjgyMjY1LC0xMC40NTEwNCAtMTAuNDUxMDQyLC0xMC40NTEwNCB6IG0gMCwwLjUzNTk1IGMgNS40NzkxMjcsMCA5LjkxNTA5MSw0LjQzNTk3IDkuOTE1MDkxLDkuOTE1MDkgMCw1LjQ3OTEzIC00LjQzNTk2NCw5LjkxNTA5IC05LjkxNTA5MSw5LjkxNTA5IC'+
			'01LjQ3OTEyNywwIC05LjkxNTA5LC00LjQzNTk2IC05LjkxNTA5LC05LjkxNTA5IDAsLTUuNDc5MTIgNC40MzU5NjMsLTkuOTE1MDkgOS45MTUwOSwtOS45MTUwOSB6Ii8+CiAgIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4'+
			'NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MT'+
			'E1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEu'+
			'NjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDUxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw1MS42MTE1ODcsMTk5LjkxNDYyKSIvPgogICA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsNTEuNjExNTg3LDE5OS45MTQ2MikiLz4KICAgPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLD'+
			'UxLjYxMTU4NywxOTkuOTE0NjIpIi8+CiAgIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iMzE3Ljg2NTYiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjEwLjU4MzMzMzAycHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTgzLjAzNjQ1MyI+CiAgICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMzI3'+
			'LjUyMTA5IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHg9Ii04My4wMzY0NTMiLz4KICAgPC90ZXh0PgogIDwvZz4KICA8cGF0aCBpZD0icmVjdDQ0OTYtNiIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm'+
			'9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9u'+
			'Omx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2'+
			'l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMzAwMDAwMDE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTgzMTUzO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91'+
			'bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAtNjAuNTQzODYsMzEyLjU2NjkxIGMgLTAuNjA1NTk5LDAgLTEuMTAyNzgsMC40NzY4MyAtMS4xMDI3OCwxLjA2NzIzIHYgNi44NzI3NCBjIDAsMC41OTAzNyAwLjQ5NzE3MiwxLjA2NzIyIDEuMTAyNzgsMS4wNjcyMiBoIDQuODQ1OTk3IGEgMC4xMTc0NDU5OCwwLjExNzM2OTI0IDAgMCAwIDAuMTE3NDM0LC0wLjExNzM2IHYgLTAuMDAyIGwgLTAuMTUwNDYyLDAuMTEzNyBjIDAuMTQ3NjczLDAuMDQ0MSAwLjMwMzAwOSwtMC4wODMgMC4yODA3NDEsLTAuMjM4MzkgbCAwLjAwMTksMC4wMDUgYyAwLDAgLT'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9wZGYuc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3Jr'+
			'IHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlua3NjYXBlOnpvb209IjE4LjQzIiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTpwYW'+
			'dlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjQwLjkzODY4NyIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3Jp'+
			'ZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYXRoIGlkPSJwYX'+
			'RoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0'+
			'ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3'+
			'NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVj'+
			'YXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwID'+
			'EwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIu'+
			'NTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5Lj'+
			'kwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'NDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweD'+
			't3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxwYXRoIGlkPSJwYXRoMy0xIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NzY2NzY2Nj'+
			'Y2NjY2Nzc2Njc2NjY2NjY3NzY3NzcyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA3My41OTM3MTIsNTUuNTU5NzExIEMgNzIuNjE0MjQ0LDU0LjU5NDg2NSA3MC40NDIxNzcsNTQuMDgzOTYgNjcuMTM2NzY2LDU0LjA0MDQ3NyA2NC44OTkyMzksNTQuMDE1Nzg3IDYyLjIwNjI3Myw1NC4yMTI4MzQgNTkuMzczODA4LDU0LjYwOTM2NiA1OC4xMDU0MDksNTMuODc3NTkgNTYuNzk4MTA5LDUzLjA4MTM3IDU1Ljc3Miw1Mi4xMjI0MjQgYyAtMi43NjAyNzgsLTIuNTc3MjIgLTUuMDY0NCwtNi4xNTQ3MTggLTYuNTAwMjk4LC0xMC4wODg1NiAwLjA5MzU4LC0wLjM2NzM5MyAwLj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjEwMHB4IiB4PSIwcHgiIGhlaWdodD0iMTAwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9wZGYuc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3Jr'+
			'IHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlua3NjYXBlOnpvb209IjE4LjQzIiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTpwYW'+
			'dlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjQwLjkzODY4NyIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0idHJ1ZSIgcGFnZWNvbG9yPSIjOTA5MDhlIiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIj4KICA8aW5rc2NhcGU6Z3Jp'+
			'ZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KIDxwYXRoIGlkPSJwYX'+
			'RoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0'+
			'ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3'+
			'NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVj'+
			'YXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwID'+
			'EwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIu'+
			'NTI1NjQyIFoiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5Lj'+
			'kwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'NDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeT0iOTMiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweD'+
			't3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iLTI5Ij4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KIDwvdGV4dD4KIDxwYXRoIGlkPSJwYXRoMy0xIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NzY2NzY2Nj'+
			'Y2NjY2Nzc2Njc2NjY2NjY3NzY3NzcyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0iTSA3My41OTM3MTIsNTUuNTU5NzExIEMgNzIuNjE0MjQ0LDU0LjU5NDg2NSA3MC40NDIxNzcsNTQuMDgzOTYgNjcuMTM2NzY2LDU0LjA0MDQ3NyA2NC44OTkyMzksNTQuMDE1Nzg3IDYyLjIwNjI3Myw1NC4yMTI4MzQgNTkuMzczODA4LDU0LjYwOTM2NiA1OC4xMDU0MDksNTMuODc3NTkgNTYuNzk4MTA5LDUzLjA4MTM3IDU1Ljc3Miw1Mi4xMjI0MjQgYyAtMi43NjAyNzgsLTIuNTc3MjIgLTUuMDY0NCwtNi4xNTQ3MTggLTYuNTAwMjk4LC0xMC4wODg1NiAwLjA5MzU4LC0wLjM2NzM5MyAwLj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB3aWR0aD0iMTAwcHgiIHg9IjBweCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3'+
			'cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAg'+
			'MTAwIDEwMCIgc29kaXBvZGk6ZG9jbmFtZT0iYnRuX2Nsb3NlX2luZm9fdGV4dF9ib3guc3ZnIj4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IG9iamVjdH'+
			'RvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlua3NjYXBlOnpvb209IjE4LjQzIiBib3JkZXJvcGFjaXR5PSIxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3g9IjUwLjQzNDA3NSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTEiIGdyaWR0b2xlcmFuY2U9IjEwIiBzaG93Z3JpZD0iZmFsc2UiIHBhZ2Vjb2xvcj0iIzg2ODA3YiIgaW5rc2NhcGU6d2luZG93'+
			'LXk9Ii0xMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIvPgogPGcgaWQ9Imc0NTY2Ij4KICA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3k9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MD'+
			'E5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIGN4PSI1MCIgcj0iMzgiLz4KICA8cGF0aCBpZD0icGF0aDQ0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9u'+
			'dC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2'+
			'VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2Zp'+
			'bGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT'+
			'0iMCIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAx'+
			'Mi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIi8+CiAgPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3Jt'+
			'PSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KICA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiAgPHRleHQgaWQ9InRleHQ0NTY4IiB5PSI5MyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbD'+
			'tmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSItMjkiPgogICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeT0iMTI5LjQ5MzIxIiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB4PSItMjkiLz4KICA8L3RleHQ+CiA8L2c+CiA8cGF0aCBpZD0icmVjdDQ0ODYiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13'+
			'aWR0aDoyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MTtwYWludC1vcmRlcjptYXJrZXJzIGZpbGwgc3Ryb2tlIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJNIDMxLjI2MTY3MiwzMy4zODI5OTEgNDcuODc4NjgyLDUwIDMxLjI2MTY3Miw2Ni42MTcwMDkgMzMuMzgyOTkzLDY4LjczODMzIDQ5Ljk5OTk5OCw1Mi4xMjEzMiA2Ni42MTcwMDgsNjguNzM4MzMgNjguNzM4MzI4LDY2LjYxNzAwOSA1Mi4xMjEzMTgsNTAgNjguNz'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGlkPSJzdmc4IiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIGhlaWdodD0iNjQwIiB3aWR0aD0iNjAwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz'+
			'0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBzb2RpcG9kaTpkb2NuYW1lPSJzdmdfc3BsYXNoX3dpcmVzLnN2ZyIgdmlld0JveD0iMCAwIDE1ODcuNSAxNjkuMzMzMzQiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpjeT0iMzIw'+
			'IiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgaW5rc2NhcGU6em9vbT0iMC41NDQ1IiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIzMDAwIiBpZD0iYmFzZSIgZml0LW1hcmdpbi1yaWdodD0iMCIgc2hvd2dyaWQ9InRydWUiIHBhZ2Vjb2xvcj0iIzgwN2Q3ZCIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcG'+
			'U6cGFnZWNoZWNrZXJib2FyZD0iZmFsc2UiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgdW5pdHM9InB4IiBmaXQtbWFyZ2luLXRvcD0iMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCI+CiAgPGlua3NjYXBlOmdyaWQgaWQ9ImdyaWQxMCIgdHlwZT0ieHlncmlkIiBvcmlnaW55PSItNS4wMjAwNzU0IiBzcGFjaW5neT0iMi42NDU4MzMzIiBvcmlnaW54PSItMC41MjUyMzkzNSIgZG90dGVkPSJmYWxzZSIgZW1wc3BhY2luZz0iMiIgc3BhY2luZ3g9IjIuNjQ1ODMzMyIvPgogPC9zb2Rp'+
			'cG9kaTpuYW1lZHZpZXc+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41MjUyMzk0NSwtMTIyLjY0NjU3KSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW'+
			'5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogIDxlbGxpcHNlIGlkPSJwYXRoOCIgdHJhbnNmb3JtPSJyb3RhdGUoLTUuOTk5OTk5NCkiIGN5PSIyODkuMjAxOSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yNTA5ODAzOTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC41MjkxNjY2NDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgcng9Ijg0LjM5NTI5NCIgY3g9Ijc2OC4yNTQwMyIgcnk9Ijg0LjM5NTI4NyIvPgogIDxyZWN0IGlkPSJyZWN0NDUwMCIgeT0iMTIyLjY0NjU3IiBoZWlnaHQ9IjAuNTI5MTY2NyIgc3R5bGU9Im9wYWNpdHk6MTtm'+
			'aWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHdpZHRoPSI3OTMuMjIwODMiIHg9IjAuNTI1MjM5NDciLz4KICA8cmVjdCBpZD0icmVjdDQ1MDAtNyIgeT0iMjkxLjQ1MDc0IiBoZWlnaHQ9IjAuNTI5MTY2NzYiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjUyOTE2NjY0O3N0cm9rZS1saW5lam9pbjpyb3'+
			'VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB3aWR0aD0iNzkzLjIyMDgzIiB4PSI3OTQuODA0NDQiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ0IiB3aWR0aD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgc3Ryb2tlPSIjOWMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9IjEuOCI+CiAgPGNpcmNsZSBjeT0iMjIiIGN4PSIyMiIgcj0iNSIgc3Ryb2tlPSIjZWVlIj4KICAgPGFuaW1hdGUgZHVyPSIxLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIga2V5VGltZXM9IjA7IDEiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiBiZWdpbj0iMHMiIGNhbGNNb2RlPS'+
			'JzcGxpbmUiIHZhbHVlcz0iMTsgMjAiLz4KICAgPGFuaW1hdGUgZHVyPSIxLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiIGtleVRpbWVzPSIwOyAxIiBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIiBiZWdpbj0iMHMiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMTsgMCIvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgY3k9IjIyIiBjeD0iMjIiIHI9IjEwIiBzdHJva2U9IiMxMTEiPgogICA8YW5pbWF0ZSBkdXI9IjEuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBrZXlUaW1lcz0iMDsg'+
			'MSIga2V5U3BsaW5lcz0iMC4xNjUsIDAuODQsIDAuNDQsIDEiIGJlZ2luPSItMC45cyIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIxOyAyMCIvPgogICA8YW5pbWF0ZSBkdXI9IjEuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utb3BhY2l0eSIga2V5VGltZXM9IjA7IDEiIGtleVNwbGluZXM9IjAuMywgMC42MSwgMC4zNTUsIDEiIGJlZ2luPSItMC45cyIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIxOyAwIi8+CiAgPC9jaXJjbGU+CiA8L2c+Cjwvc3ZnPgo=';
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
	player.addListener('changenode', function(args) { me._floor_plans_container.logicBlock_alpha();me._level2_floorplan.logicBlock_visible();me._level3_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._ingreso.logicBlock_visible();me._estar_jardin.logicBlock_visible();me._estar_2.logicBlock_visible();me._estar_1.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible();me._center_right_bar_open_close.logicBlock_alpha();me._bottom_background_bar.logicBlock_alpha();me._bottom_buttons_bar_container.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._white_cover_for_first_seconds.logicBlock_alpha();me._logo_container.logicBlock_visible();me._logo_container.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._floor_plan_help_on_off.logicBlock_visible(); });
	player.addListener('varchanged_clickonsplash', function(args) { me._floor_plans_container.logicBlock_alpha();me._center_right_bar_open_close.logicBlock_alpha();me._bottom_background_bar.logicBlock_alpha();me._bottom_buttons_bar_container.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._logo_container.logicBlock_visible();me._logo_container.logicBlock_alpha(); });
	player.addListener('varchanged_whitecover', function(args) { me._white_cover_for_first_seconds.logicBlock_alpha(); });
	player.addListener('varchanged_levelnumber', function(args) { me._level2_floorplan.logicBlock_visible();me._level3_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._ingreso.logicBlock_visible();me._estar_jardin.logicBlock_visible();me._estar_2.logicBlock_visible();me._estar_1.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible(); });
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
			}
		}
	});
	me.skinTimerEvent();
};