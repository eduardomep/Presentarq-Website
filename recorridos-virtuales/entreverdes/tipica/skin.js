// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: Presentarq T.ggsk
// Generated 2023-01-24T16:15:00

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
		hs+='bottom : 220px;';
		hs+='height : 24px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
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
		hs+='bottom:  0px;';
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
		el=me._autorotation_off=document.createElement('div');
		els=me._autorotation_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fcm90YXRpb25fb24uc3ZnIiB5PSIwcHgiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNj'+
			'OldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgb2JqZWN0dG9sZXJhbmNlPS'+
			'IxMCIgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGJvcmRlcm9wYWNpdHk9IjEiPgogIDxpbmtzY2Fw'+
			'ZTpncmlkIGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgcj0iMzgiIGN5PSI1MCIvPgogPHBhdGggaW'+
			'Q9InBhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9y'+
			'bWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3'+
			'JtYWw7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2Ut'+
			'bGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5Lj'+
			'UgNTAsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgaW5rc2NhcGU6Y29ubmVjdG9y'+
			'LWN1cnZhdHVyZT0iMCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZS'+
			'g0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5z'+
			'bGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW'+
			'5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NjYwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjEwOTEyNTg1LDAsMCwwLjEwOTEyNTg1LDI0Ljk5ODQ4MSwyNS4wMDE1NzEpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgi'+
			'PgogIDxnIGlkPSJnNDYwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgPGcgaWQ9Imc0NjAxIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICAgPHBhdGggaWQ9InBhdGg0NTk5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGQ9Im0gNDQ1LjY1MSwyMDEuOT'+
			'UgYyAtMS40ODUsLTkuMzA4IC0xMC4yMzUsLTE1LjY0OSAtMTkuNTQzLC0xNC4xNjQgLTkuMzA4LDEuNDg1IC0xNS42NDksMTAuMjM1IC0xNC4xNjQsMTkuNTQzIDAuMDE2LDAuMTAyIDAuMDMzLDAuMjAzIDAuMDUxLDAuMzA0IDE3LjM4LDEwMi4zMTEgLTUxLjQ3LDE5OS4zMzkgLTE1My43ODEsMjE2LjcxOSBDIDE1NS45MDMsNDQxLjczMiA1OC44NzUsMzcyLjg4MiA0MS40OTUsMjcwLjU3MSAyNC4xMTUsMTY4LjI2IDkyLjk2Niw3MS4yMzIgMTk1LjI3Niw1My44NTIgYyA2Mi45MTksLTEwLjY4OCAxMjYuOTYyLDExLjI5IDE3MC4wNTksNTguMzYxIGwgLTc1LjYwNSwyNS4xOSBjIC04Ljk0NCwy'+
			'Ljk3NiAtMTMuNzgxLDEyLjYzOCAtMTAuODA2LDIxLjU4MiAwLjAwMSwwLjAwMiAwLjAwMiwwLjAwNSAwLjAwMywwLjAwNyAyLjk3Niw4Ljk0NCAxMi42MzgsMTMuNzgxIDIxLjU4MiwxMC44MDYgMC4wMDMsLTAuMDAxIDAuMDA1LC0wLjAwMiAwLjAwNywtMC4wMDIgbCAxMDIuNCwtMzQuMTMzIGMgNi45NzIsLTIuMzIyIDExLjY3NSwtOC44NDcgMTEuNjc0LC0xNi4xOTYgViAxNy4wNjcgQyA0MTQuNTksNy42NDEgNDA2Ljk0OSwwIDM5Ny41MjMsMCAzODguMDk3LDAgMzgwLjQ1Niw3LjY0MSAzODAuNDU2LDE3LjA2NyBWIDc5LjQxMSBDIDI5Mi41NjQsLTQuMTg1IDE1My41NDUsLTAuNzAyIDY5Lj'+
			'k0OSw4Ny4xOSBjIC04My41OTYsODcuODkyIC04MC4xMTQsMjI2LjkxMSA3Ljc3OSwzMTAuNTA4IDg3Ljg5Myw4My41OTcgMjI2LjkxMSw4MC4xMTQgMzEwLjUwOCwtNy43NzkgNDcuNjY5LC01MC4xMiA2OC45NDMsLTExOS43NjcgNTcuNDE1LC0xODcuOTY5IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgPC9nPgogIDwvZz4KICA8ZyBpZD0iZzQ2MDUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwNyIgc3R5bGU9ImZpbGw6I2ZmZmZm'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fcm90YXRpb25fb2ZmLnN2ZyIgeT0iMHB4Ij4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxj'+
			'YzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOnpvb209IjEzLjk5IiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIG9iamVjdHRvbGVyYW5jZT'+
			'0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIHBhZ2Vjb2xvcj0iIzkwOTA4ZSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMTEuNjg2OTE5IiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBib3JkZXJvcGFjaXR5PSIxIj4KICA8aW5rc2Nh'+
			'cGU6Z3JpZCBpZD0iZ3JpZDQ0OTIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8Y2lyY2xlIGlkPSJwYXRoNDQ5OSIgY3g9IjUwIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIHI9IjM4IiBjeT0iNTAiLz4KIDxwYXRoIG'+
			'lkPSJwYXRoNDQ5NCIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5v'+
			'cm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm'+
			'9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tl'+
			'LWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3ODtwYWludC1vcmRlcjpub3JtYWw7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBkPSJNIDUwLDEwLjUgQyAyOC4xOTY3NDgsMTAuNSAxMC41LDI4LjE5Njc0OSAxMC41LDUwIDEwLjUsNzEuODAzMjUyIDI4LjE5Njc0OCw4OS'+
			'41IDUwLDg5LjUgNzEuODAzMjUyLDg5LjUgODkuNSw3MS44MDMyNTIgODkuNSw1MCA4OS41LDI4LjE5Njc0OSA3MS44MDMyNTIsMTAuNSA1MCwxMC41IFogbSAwLDIuMDI1NjQyIGMgMjAuNzA4NTEyLDAgMzcuNDc0MzU4LDE2Ljc2NTg0NiAzNy40NzQzNTgsMzcuNDc0MzU4IDAsMjAuNzA4NTEzIC0xNi43NjU4NDYsMzcuNDc0MzU5IC0zNy40NzQzNTksMzcuNDc0MzU5IEMgMjkuMjkxNDg3LDg3LjQ3NDM1OSAxMi41MjU2NDEsNzAuNzA4NTEzIDEyLjUyNTY0MSw1MCAxMi41MjU2NDEsMjkuMjkxNDg4IDI5LjI5MTQ4NywxMi41MjU2NDIgNTAsMTIuNTI1NjQyIFoiIGlua3NjYXBlOmNvbm5lY3Rv'+
			'ci1jdXJ2YXR1cmU9IjAiLz4KIDxnIGlkPSJnNDUwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdG'+
			'UoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMCIgdHJhbnNmb3JtPSJ0cmFu'+
			'c2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDxnIGlkPSJnNDUzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiLz4KIDx0ZXh0IGlkPSJ0ZXh0NDU2OCIgeD0iLTI5IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2'+
			'luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjkzIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiLz4KIDwvdGV4dD4KIDxnIGlkPSJnNDY2MCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMDkxMjU4NSwwLDAsMC4xMDkxMjU4NSwyNC45OTg0ODEsMjUuMDAxNTcxKSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4'+
			'Ij4KICA8ZyBpZD0iZzQ2MDMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxnIGlkPSJnNDYwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgIDxwYXRoIGlkPSJwYXRoNDU5OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBkPSJtIDQ0NS42NTEsMjAxLj'+
			'k1IGMgLTEuNDg1LC05LjMwOCAtMTAuMjM1LC0xNS42NDkgLTE5LjU0MywtMTQuMTY0IC05LjMwOCwxLjQ4NSAtMTUuNjQ5LDEwLjIzNSAtMTQuMTY0LDE5LjU0MyAwLjAxNiwwLjEwMiAwLjAzMywwLjIwMyAwLjA1MSwwLjMwNCAxNy4zOCwxMDIuMzExIC01MS40NywxOTkuMzM5IC0xNTMuNzgxLDIxNi43MTkgQyAxNTUuOTAzLDQ0MS43MzIgNTguODc1LDM3Mi44ODIgNDEuNDk1LDI3MC41NzEgMjQuMTE1LDE2OC4yNiA5Mi45NjYsNzEuMjMyIDE5NS4yNzYsNTMuODUyIGMgNjIuOTE5LC0xMC42ODggMTI2Ljk2MiwxMS4yOSAxNzAuMDU5LDU4LjM2MSBsIC03NS42MDUsMjUuMTkgYyAtOC45NDQs'+
			'Mi45NzYgLTEzLjc4MSwxMi42MzggLTEwLjgwNiwyMS41ODIgMC4wMDEsMC4wMDIgMC4wMDIsMC4wMDUgMC4wMDMsMC4wMDcgMi45NzYsOC45NDQgMTIuNjM4LDEzLjc4MSAyMS41ODIsMTAuODA2IDAuMDAzLC0wLjAwMSAwLjAwNSwtMC4wMDIgMC4wMDcsLTAuMDAyIGwgMTAyLjQsLTM0LjEzMyBjIDYuOTcyLC0yLjMyMiAxMS42NzUsLTguODQ3IDExLjY3NCwtMTYuMTk2IFYgMTcuMDY3IEMgNDE0LjU5LDcuNjQxIDQwNi45NDksMCAzOTcuNTIzLDAgMzg4LjA5NywwIDM4MC40NTYsNy42NDEgMzgwLjQ1NiwxNy4wNjcgViA3OS40MTEgQyAyOTIuNTY0LC00LjE4NSAxNTMuNTQ1LC0wLjcwMiA2OS'+
			'45NDksODcuMTkgYyAtODMuNTk2LDg3Ljg5MiAtODAuMTE0LDIyNi45MTEgNy43NzksMzEwLjUwOCA4Ny44OTMsODMuNTk3IDIyNi45MTEsODAuMTE0IDMxMC41MDgsLTcuNzc5IDQ3LjY2OSwtNTAuMTIgNjguOTQzLC0xMTkuNzY3IDU3LjQxNSwtMTg3Ljk2OSB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgaWQ9Imc0NjA1IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MDciIHN0eWxlPSJmaWxsOiNmZmZm'+
			'ZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjExIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MTMiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLX'+
			'dpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYxNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjE3IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9w'+
			'YWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYyMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjIzIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MjUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIG'+
			'lkPSJnNDYyNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NjI5IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo5LjE2MzczMTU4O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ2MzEiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjkuMTYzNzMxNTg7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDYzMyIgc3R5bGU9ImZpbGw6I2Zm'+
			'ZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6OS4xNjM3MzE1ODtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiA8L2c+CiA8cGF0aCBpZD0icmVjdDQ1MjMiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBkPSJNIDI1LjQ5OTk3OSwyNi4yNTM4MjQgNDkuMjQ2MTUzLDUwIDI1LjQ5OTk3OSw3My'+
			'43NDYxNzUgMjYuMjUzODI1LDc0LjUwMDAyMSA1MCw1MC43NTM4NDcgNzMuNzQ2MTc1LDc0LjUwMDAyMSA3NC41MDAwMjEsNzMuNzQ2MTc1IDUwLjc1Mzg0Nyw1MCA3NC41MDAwMjEsMjYuMjUzODI0IDczLjc0NjE3NSwyNS40OTk5NzggNTAsNDkuMjQ2MTUzIDI2LjI1MzgyNSwyNS40OTk5NzggWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJjb21wYXNzX3Jpbmcuc3ZnIiB5PSIwcHgiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldv'+
			'cmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgb2JqZWN0dG9sZXJhbmNlPSIxMC'+
			'IgaWQ9Im5hbWVkdmlldzExIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGJvcmRlcm9wYWNpdHk9IjEiPgogIDxpbmtzY2FwZTpn'+
			'cmlkIGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgcj0iMzgiIGN5PSI1MCIvPgogPHBhdGggaWQ9In'+
			'BhdGg0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFs'+
			'O3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYW'+
			'w7c2hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGlu'+
			'ZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNT'+
			'AsODkuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1'+
			'cnZhdHVyZT0iMCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nz'+
			'kuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0'+
			'ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOj'+
			'BweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIvPgogPC90ZXh0PgogPHBhdGggaWQ9InBhdGg0NTE5IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9IjEiIGlua3NjYXBlOmZsYXRzaWRlZD0iZmFsc2UiIGlua3NjYXBlOnJvdW5kZWQ9IjAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0'+
			'aDoyO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTphcmcxPSIxLjU3MDc5NjMiIGQ9Ik0gNTAsMTggNDguMjY3OTQ5LDE1IDQ2LjUzNTg5OCwxMiA1MCwxMiBsIDMuNDY0MTAyLDAgLTEuNzMyMDUxLDMgeiIgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIgc29kaXBvZGk6Y3g9IjUwIiBzb2RpcG9kaTpjeT0iMTQiIHNvZGlwb2RpOnIyPSIyIiBzb2RpcG9kaTp0eXBlPSJzdGFyIiBzb2RpcG9kaTpyMT0iNCIgc29kaXBvZGk6YXJnMj0iMi42MTc5OTM5IiBzb2RpcG9kaTpzaWRlcz0iMy'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJjb21wYXNzX2hhbmRsZS5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6'+
			'V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBvYmplY3R0b2xlcmFuY2U9Ij'+
			'EwIiBpZD0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgYm9yZGVyb3BhY2l0eT0iMSI+CiAgPGlua3NjYXBl'+
			'OmdyaWQgaWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNz'+
			'k5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0z'+
			'NTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaH'+
			'Q6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTMsMzkuNTAwMDAxKSI+CiAgPHBhdGggaWQ9InBhdGg0NTIzIiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9IjUiIHN0eWxlPSJvcGFjaXR5OjE7'+
			'ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjk5OTk5OTc2O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIGQ9Ik0gMTAzLDQwLjQ5OTk5OSAxMDAsMTAuNSBsIDYsLTEwZS03IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8cGF0aCBpZD0icGF0aDQ1MjMtOCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZjAwMDA7Zm'+
			'lsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5NzY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgZD0ibSAxMDMsLTE5LjUwMDAwMSAtMywyOS45OTk5OTkgNiwxZS02IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHdpZHRoPSIxMDAiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdmcyIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcG'+
			'UiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjkwIiBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTAiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iRzpcTXkgUGljdHVyZXNcRm90b2dyYWZpYSAzNjBwYW5vdG91cnNcREVTQVJST0xMT1MgQSBQRURJRE9cR09MREVOUEFHRVNcREVTQVJST0xMT1xWRVJTSU9OIC0gdjhcU0tJTiBFTEVNRU5UU1xyYWRhcl9wb2ludGluZ19ub3J0aC5wbmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVj'+
			'b21tb25zLm9yZy9ucyMiIGhlaWdodD0iMTAwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJyYWRhci1wb2ludGluZy1ub3J0aC5zdmciPgogPGRlZnMgaWQ9ImRlZnM0Ij4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgPHN0b3AgaWQ9InN0b3AzNzk5IiBzdHlsZT0ic3RvcC1jb2xvcjojMzMzMzMzO3N0b3Atb3'+
			'BhY2l0eToxOyIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIGlkPSJzdG9wMzgwMSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMzMzMztzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NzUiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIGlkPSJzdG9wMzc3NyIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmZjtzdG9wLW9wYWNpdHk6MCIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIGlkPSJzdG9wMzc3OSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmZjtzdG9wLW9wYWNpdHk6MDsiIG9m'+
			'ZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NzQiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIGlkPSJzdG9wMzc3NiIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIvPgogICA8c3RvcCBpZD0ic3RvcDM3NzgiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzNzYxIj4KICAgPHN0b3AgaWQ9InN0b3'+
			'AzNzYzIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZjAwO3N0b3Atb3BhY2l0eToxOyIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIGlkPSJzdG9wMzc2NiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3NjMiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+CiAgIDxzdG9wIGlkPSJzdG9wMzc2NSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIvPgogICA8c3RvcCBpZD0ic3RvcDM3NjciIHN0eWxl'+
			'PSJzdG9wLWNvbG9yOiNmZmZmMDA7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzNzY5IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIzNSIgeTI9IjAiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3NjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMjAiIHgyPSIzNSIvPgogIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsR3JhZGllbnQzNzgwIiBjeD0iMzUiIGZ4PSIzNSIgZnk9IjUyLjUiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgcj0iMzUiIH'+
			'hsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3NzQiIGN5PSI1Mi41IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuNTcxNDE0NiwtMC4wMDY2MzEzNywwLjAwNTA4MzIzLDEuMjA0NTU3NCwtMy4wODg0NjgsOTMyLjUxNDUyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiLz4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbEdyYWRpZW50Mzc4MSIgY3g9IjU0LjQ1ODk2MSIgZng9IjU0LjQ1ODk2MSIgZnk9Ii0yOC4yMDU4NzkiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgcj0iNTAuMjUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3NzUiIGN5PSItMjguMjA1ODc5'+
			'IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNTE0NDk1NzUsLTAuODU3NDkyOTMsMC4wOTk1MDI0OSwwLjA1OTcwMTQ5LDIxLjc4NzY1LDY2LjM4MjEwOSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM4MDMiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeDE9IjYzIiB5Mj0iMTUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iNjUiIHgyPSI2MyIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzODA2IiBpbm'+
			'tzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyNiIgeTI9IjUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTciIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yNSw5NTIuMzYyMTgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjM1IiB4Mj0iMjYiLz4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50MzgwNi02IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyNiIgeTI9IjUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTctOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSIzNSIgeDI9IjI2Ii8+CiAg'+
			'PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDM3OTctOCIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgPHN0b3AgaWQ9InN0b3AzNzk5LTgiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzMzMzM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiLz4KICAgPHN0b3AgaWQ9InN0b3AzODAxLTIiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzMzMzM7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzODIzIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyNiIgeTI9IjUiIHhsaW'+
			'5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTctOCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSw5OS43NSw5NTIuMzYyMTgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDI9IjI2IiB5MT0iMzUiLz4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbEdyYWRpZW50MzAxNiIgY3g9IjM0LjQzMzQ2OCIgZng9IjM0LjQzMzQ2OCIgZnk9IjYxLjQ5NjQ0OSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiByPSIzNSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc3NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMy42MjUzOTkxZS04LC0xLjE0Mjg1NzIs'+
			'MS4yMDQ1NjgxLC0zLjYzNzQ5NDhlLTgsLTIzLjQwOTk4NywxMDQwLjM4MTQpIiBjeT0iNjEuNDk2NDQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQzMDE4IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyNS4wODMzNDUiIHkyPSIxMC4wMDAwMDIiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3OTciIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoLTkwLDUyNC4zODk0Myw1MjcuNzIyNzYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjM4IiB4Mj0iMjUuMDgzMzQ1Ii8+CiAgPG'+
			'xpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDMwMjAiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeDE9IjI1Ljc1IiB5Mj0iNCIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Mzc5Ny04IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsMSwxLDAsLTMuMzMzMzI4Miw5NTIuNjEyMTkpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjIwIiB4Mj0iMjUuNzUiLz4KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50MzAxOC04IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHgxPSIyOS4wODMzNTUiIHkyPSI5Ny45OTk5OTIiIHhsaW5rOmhyZWY9'+
			'IiNsaW5lYXJHcmFkaWVudDM3OTciIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoLTkwLDUyNC4zODk0NCw1MjcuNzIyNzYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjcxLjk5OTk5MiIgeDI9IjI5LjA4MzM1NSIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOmN5PSI1MCIgaWQ9ImJhc2UiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgaW5rc2NhcGU6Y3VycmVudC1sYX'+
			'llcj0iZzMwMTEiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTp6b29tPSIxOC40MyIgaW5rc2NhcGU6Y3g9IjUwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJ0cnVlIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDI5ODUiIGVuYWJsZWQ9InRydWUiIG9yaWdpbnk9IjAiIHNwYWNpbmd5PSIxIiB2aXNpYmxlPSJ0cnVlIiBzcGFjaW5neD0iMSIgdHlwZT0ieHlncmlkIiBz'+
			'bmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiIGVtcHNwYWNpbmc9IjUiIG9yaWdpbng9IjAiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTciPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoMCwtOTU1LjY5NTUzKSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogIDxnIGlkPSJnMzAxMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41LDAsMCwwLjUsMS42NjY2NjQxLDUyNi4xODExMSkiPgogICA8ZyBpZD0iZzQ0IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjk5MjAyNDksMCwwLDEuOTkwNzg1NSwtMy4zMzMzMjY4LC0xMDQ5Ljc1OTcpIj4KICAgIDxwYXRoIGlkPSJwYXRoMjk5MSIgc3R5bGU9ImZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDMwMTYpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBkPSJtIDAsOTU4LjgxMTc3'+
			'IDM0LDUwLjAwMDEzIGggMzIgbCAzNCwtNTAuMDAwMTMgeiIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgPHBhdGggaWQ9InJlY3QzNzk1IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzAxOCk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIGQ9Im0gMCw5NTkuMDQyODggaCAwLjUgbCAzMy43NSw1MC4wMDAzMiBoIC0wLjUgeiIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgPHBhdGggaWQ9InJlY3QzNzk1LTEiIHN0eWxlPSJmaWxsOn'+
			'VybCgjbGluZWFyR3JhZGllbnQzMDE4LTgpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxIiBkPSJNIDEwMC40MDAzNSw5NTkuMDQyODggSCA5OS45MDAzNDYgTCA2Ni4xNTAyOSwxMDA5LjA0MzIgaCAwLjUgeiIgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNjE5IDYxOSIgd2lkdGg9IjYxOSI+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yOTcuMTQ1IDE0NC4wMzlIMjY0LjEyN1YxNE0yNjQuMTI3IDE0SDEzNFYyMDUuMTc3TTI2NC4xMjcgMTRIMzM5Ljg3M00xMzQgMjA1LjE3N1YyMTUuODUyVjI5OC4zNE0xMzQgMjA1LjE3N0gyNzEuODk2TTI4OC40MDUgNDUzLjYxMVYyOTguMzRNMTM0IDI5OC4zNEgyODguNDA1TTEzNCAyOTguMzRWMzY5LjE4Mk0yODguNDA1IDI5OC4zNFYyMDUuMTc3SDI3MS'+
			'44OTZNMTM0IDM2OS4xODJWNjA1SDMyOC4yMlY0NTkuNDM0SDQ3MFYyMDUuMTc3TTEzNCAzNjkuMTgySDIzOS44NU0xMzQgNDU1LjU1MkgyMzkuODVNNDcwIDIwNS4xNzdWMTRIMzM5Ljg3M000NzAgMjA1LjE3N0gzMzQuMDQ2VjE4OC42OE0zMzkuODczIDE0VjE0NC4wMzlNMjcxLjg5NiAyMDUuMTc3VjE4OC42OCIgc3Ryb2tlLXdpZHRoPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';
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
		el=me._level1_floorplan=document.createElement('div');
		els=me._level1_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNjE5IDYxOSIgd2lkdGg9IjYxOSI+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMTEgMTg1SDMwMS4yODZWMjUwLjI3N00yMTEgMzcyLjIxNkgzMDEuMjg2VjI1MC4yNzdNMjExIDM3Mi4yMTZWNDMzLjg5Nk0yMTEgMzcyLjIxNlYzMjIuMjYzSDI2OC4xNDNNMjExIDQzMy44OTZIMTYzVjYwM0gzMzlWNDIyLjg5Nk0yMTEgNDMzLjg5NkgzMDEuMjg2VjQwNC44NDdNMzAxLjI4NiAyNTAuMjc3SDIxMVYyOTMuNzk1TTE2OCAxODguMTY4VjEzSD'+
			'I5OC41MzRNMzg4IDQyMi44OTZINDY4VjEzSDI5OC41MzRNMjk4LjUzNCAxM1YxMzYuNjQ4IiBzdHJva2Utd2lkdGg9IjIwIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
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
		hs+='top : 58px;';
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
			me._mh_radar.ggParameter.rx=188;me._mh_radar.ggParameter.ry=58;
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
		me._lavanderia.onmouseout=function (e) {
			player.setVariableValue('youareon', me.ggUserdata.title);
		}
		me._lavanderia.onmouseup=function (e) {
			player.setVariableValue('youareon', "Lavanderia");
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
		me._floor_plans_container.appendChild(me._frame_rectangle_floor_plans);
		el=me._btn_off_floor_plans=document.createElement('div');
		els=me._btn_off_floor_plans__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB3aWR0aD0iMTAwcHgiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMC'+
			'AxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBoZWlnaHQ9IjEwMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8i'+
			'IHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9mbG9vcl9wbGFucy5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iOS43OSIgaW5rc2'+
			'NhcGU6cGFnZXNoYWRvdz0iMiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTE3IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgZ3VpZGV0b2xlcmFu'+
			'Y2U9IjEwIiBpbmtzY2FwZTpjeD0iMTUuNzMwMzM3IiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBib3JkZXJvcGFjaXR5PSIxIi8+CiA8Y2lyY2xlIGN4PSI1MCIgaWQ9ImNpcmNsZTIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcj0iMzkuMDYzOTk5IiBjeT0iNTAiLz4KIDxjaXJjbGUgY3g9IjUwIiBpZD0iZWxsaXBzZTQiIHN0eWxlPSJvcGFjaXR5OjAuNztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlLXdpZHRoOjEiIHI9IjM3LjUiIGVuYW'+
			'JsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBjeT0iNTAiLz4KIDxnIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+CiAgPGcgaWQ9ImczNzk5IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgPGcgaWQ9ImczNzk3IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgIDxwYXRoIGlkPSJwYXRoMzc5MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgZD0ibSAyMDMuOTkzLDI5NS4yODcgYyAyMS4wMDEsMCAzOC4wMjQsMTcuMDIzIDM4LjAyNCwzOC4wMTggMCwyMC45OTUgLTE3LjAyMywz'+
			'OC4wMjQgLTM4LjAyNCwzOC4wMjQgLTIwLjk5OCwwIC0zOC4wMjEsLTE3LjAyOSAtMzguMDIxLC0zOC4wMjQgMCwtMjAuOTk1IDE3LjAyMywtMzguMDE4IDM4LjAyMSwtMzguMDE4IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzc5NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgZD0iTSA1NzQuMjY3LDMyNS44MjIgNjAwLjA0OSwxMjIuNTYgNDE1LjExMyw1Mi4zNzggMTkzLjI3OSwxNTguMzM3IDAsNzYuNzEgMjYuMDk5LDI5My41NTggMS4wODUsNTA3LjA5MyBsIDIwNS4zNiwzOC41MjEgMjA5LjQ2LC0zOS44OTIgMTg0Ljg1NCw0Mi42NTggei'+
			'BNIDQxNC40MjgsNzMuOTA5IDU3OC4yMzksMTM1LjY0IDU2Ni45NjIsMjI0LjUyIDQwMy42ODksMTgzLjIxOSBaIG0gLTIxLjY2OSwxMS4yODMgLTguNjQyLDkzLjA2IC0wLjE0MiwtMC4wMzMgLTExMy4wNDYsMTQuNTgxIC0wLjY3NywyLjQ5NCBjIC0wLjE0MiwwLjUzOCAtMTMuMjU4LDQ4Ljk5NSAtMjcuMDgsNzEuMDMzIC04Ljk0NiwtNS4yNjEgLTE5LjAwNiwtOC43ODQgLTI5Ljc1NSwtMTAuMDkgbCAtOS4xNjQsLTgxLjAyOCB6IG0gLTE3LjI4MywyMDcuNTc0IC05OC4yNTEsMTQuODE1IGMgLTUuMjkxLC0xNC45NjkgLTE0Ljk5OSwtMjcuODI1IC0yNy42MDYsLTM3LjAyMiAxMi44NjIsLTIw'+
			'LjUzMSAyNC40NzEsLTYwLjI3OCAyNy4zOTQsLTcwLjc3IGwgMTA2LjM2MSwtMTMuNzI4IHogbSAtMTkxLjIwNywtMTE2LjU2OSA5LjA3OSw4MC4yMzYgYyAtMjkuODY0LDQuMTEzIC01NC4zNTgsMjUuMiAtNjMuMzM2LDUzLjIxNyBMIDQ2LjIzMywyOTYuNjgyIDM4LjE4OCwyMTguOTc2IGMgMjcuNzY5LC0xLjgzOCA0OC41OTksLTEwLjg3NSA2MS45NDgsLTI3IDEyLjAzNCwtMTQuNTE0IDE1LjQ5NSwtMzEuNjg1IDE2LjE1NywtNDQuNDg0IHogbSAtMTYwLjA4MiwtNjcuNjAxIDg0LjQ2NSwzNS42NjggYyAtMC4yNDIsMTEuNzc3IC0yLjkwNSwyOC44NjUgLTE0LjQ0Myw0Mi43OTEgLTEyLjAzNy'+
			'wxNC41MTQgLTMxLjE4MiwyMi42MzIgLTU2Ljk5OCwyNC4yNjEgeiBtIC0xLjA5LDM4Mi4zMjUgMjAuNzc5LC0xNzQuNDAyIDgyLjYyNiwxMi44MDMgYyAtMC4wNjIsMS4zMjQgLTAuMTk1LDIuNjM2IC0wLjE5NSwzLjk4OSAwLDE4LjE2NCA2LjMwNywzNC44NTYgMTYuODA3LDQ4LjEwOCBsIC00Mi45MTIsMzQuNDU5IC0xMy41MjEsODYuOTU5IHogbSAxNjEuODc4LDMwLjM1OCAtOTAuNzIxLC0xNy4wMTcgMTMuMTA0LC04NC4yNTIgNDAuODM3LC0zMi43ODEgYyAxMi41MjgsMTIuOTUgMjkuNDgsMjEuNTkzIDQ4LjQyMSwyMy4zNzcgeiBNIDE0MS43MjksMzMzLjMxMSBjIDAsLTM0LjM0OCAyNy45'+
			'MzUsLTYyLjI4MSA2Mi4yNjQsLTYyLjI4MSAzNC4zNDcsMCA2Mi4yODIsMjcuOTM0IDYyLjI4Miw2Mi4yODEgMCwzNC4zMyAtMjcuOTM1LDYyLjI2NSAtNjIuMjgyLDYyLjI2NSAtMzQuMzMsMC4wMDYgLTYyLjI2NCwtMjcuOTM1IC02Mi4yNjQsLTYyLjI2NSB6IG0gNjQuNjksMTkxLjk4NyAtMS43NSwtMC4zMyAxMi4xMiwtMTE1LjExOSBjIDM2Ljc1NiwtNi4xMzUgNjQuOSwtMzguMDc2IDY0LjksLTc2LjU1NiAwLC0yLjA4MSAtMC4xNSwtNC4xMTQgLTAuMzEzLC02LjE1OSBsIDk2LjAzOCwtMTQuNDgxIDguMDE2LDgxLjkxMSBjIC00Mi4xMzIsMS45OCAtNzMuNjI1LDE0LjkzMiAtOTMuNDQ5LD'+
			'M4Ljg1NyAtMjMuMTE0LDI3LjkyMyAtMjQuMjA1LDYyLjczNyAtMjMuMDA4LDc5Ljk0OSB6IG0gNzAuMjQ3LC0xMy4zODEgYyAtMC45MzEsLTE2LjMzNyAwLjQxOSwtNDguMzk3IDIxLjI2NCwtNzMuNTY1IDE4LjQzOCwtMjIuMjYgNDguMTgyLC0zNC4yNzEgODguMjQ0LC0zNi4wOTEgbCA4LjUzNSw4Ny4xNTQgeiBtIDEyNi4zMDcsLTMyMC45NDYgMTYzLjAzLDQxLjIyNSAtOS43NzYsNzcuMDE3IC0xNjAuOTc0LC0xOS40MzEgeiBtIDEzMS4wODMsMTg0Ljc3NCAtNzQuMTc1LC04LjgxOSAxMy41ODQsMTMxLjU4IC01OS40MjgsLTEyLjc3MyAtMTYuODUyLC0xNzYuMDM0IDEuNzMyLC0wLjI3MiAx'+
			'NTUuNjEyLDE5Ljc1NCAyMy4wMjIsMTkzLjM1NCAtOTYuMjk4LC0yMi4yMTMgLTEyLjcxNCwtMTI0LjU5OSA2Ni4xMTEsNy42NzIgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICA8L2c+CiAgPC9nPgogIDxnIGlkPSJnMzgwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxMS'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB3aWR0aD0iMTAwcHgiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMC'+
			'AxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBoZWlnaHQ9IjEwMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8i'+
			'IHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9vbl9mbG9vcl9wbGFucy5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTIxIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMTkiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iOS43OSIgaW5rc2'+
			'NhcGU6cGFnZXNoYWRvdz0iMiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTE3IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgZ3VpZGV0b2xlcmFu'+
			'Y2U9IjEwIiBpbmtzY2FwZTpjeD0iMTUuNzMwMzM3IiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBib3JkZXJvcGFjaXR5PSIxIi8+CiA8Y2lyY2xlIGN4PSI1MCIgaWQ9ImNpcmNsZTIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcj0iMzkuMDYzOTk5IiBjeT0iNTAiLz4KIDxjaXJjbGUgY3g9IjUwIiBpZD0iZWxsaXBzZTQiIHN0eWxlPSJvcGFjaXR5OjAuNztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlLXdpZHRoOjEiIHI9IjM3LjUiIGVuYW'+
			'JsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBjeT0iNTAiLz4KIDxnIGlkPSJnMzg1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wODA2NDQ4NCwwLDAsMC4wODA2NDQ4NCwyNS43NzU5NDMsMjUuNzc1OTg0KSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+CiAgPGcgaWQ9ImczNzk5IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgPGcgaWQ9ImczNzk3IiBzdHlsZT0iZmlsbDojZmZmZmZmIj4KICAgIDxwYXRoIGlkPSJwYXRoMzc5MyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgZD0ibSAyMDMuOTkzLDI5NS4yODcgYyAyMS4wMDEsMCAzOC4wMjQsMTcuMDIzIDM4LjAyNCwzOC4wMTggMCwyMC45OTUgLTE3LjAyMywz'+
			'OC4wMjQgLTM4LjAyNCwzOC4wMjQgLTIwLjk5OCwwIC0zOC4wMjEsLTE3LjAyOSAtMzguMDIxLC0zOC4wMjQgMCwtMjAuOTk1IDE3LjAyMywtMzguMDE4IDM4LjAyMSwtMzguMDE4IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzc5NSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgZD0iTSA1NzQuMjY3LDMyNS44MjIgNjAwLjA0OSwxMjIuNTYgNDE1LjExMyw1Mi4zNzggMTkzLjI3OSwxNTguMzM3IDAsNzYuNzEgMjYuMDk5LDI5My41NTggMS4wODUsNTA3LjA5MyBsIDIwNS4zNiwzOC41MjEgMjA5LjQ2LC0zOS44OTIgMTg0Ljg1NCw0Mi42NTggei'+
			'BNIDQxNC40MjgsNzMuOTA5IDU3OC4yMzksMTM1LjY0IDU2Ni45NjIsMjI0LjUyIDQwMy42ODksMTgzLjIxOSBaIG0gLTIxLjY2OSwxMS4yODMgLTguNjQyLDkzLjA2IC0wLjE0MiwtMC4wMzMgLTExMy4wNDYsMTQuNTgxIC0wLjY3NywyLjQ5NCBjIC0wLjE0MiwwLjUzOCAtMTMuMjU4LDQ4Ljk5NSAtMjcuMDgsNzEuMDMzIC04Ljk0NiwtNS4yNjEgLTE5LjAwNiwtOC43ODQgLTI5Ljc1NSwtMTAuMDkgbCAtOS4xNjQsLTgxLjAyOCB6IG0gLTE3LjI4MywyMDcuNTc0IC05OC4yNTEsMTQuODE1IGMgLTUuMjkxLC0xNC45NjkgLTE0Ljk5OSwtMjcuODI1IC0yNy42MDYsLTM3LjAyMiAxMi44NjIsLTIw'+
			'LjUzMSAyNC40NzEsLTYwLjI3OCAyNy4zOTQsLTcwLjc3IGwgMTA2LjM2MSwtMTMuNzI4IHogbSAtMTkxLjIwNywtMTE2LjU2OSA5LjA3OSw4MC4yMzYgYyAtMjkuODY0LDQuMTEzIC01NC4zNTgsMjUuMiAtNjMuMzM2LDUzLjIxNyBMIDQ2LjIzMywyOTYuNjgyIDM4LjE4OCwyMTguOTc2IGMgMjcuNzY5LC0xLjgzOCA0OC41OTksLTEwLjg3NSA2MS45NDgsLTI3IDEyLjAzNCwtMTQuNTE0IDE1LjQ5NSwtMzEuNjg1IDE2LjE1NywtNDQuNDg0IHogbSAtMTYwLjA4MiwtNjcuNjAxIDg0LjQ2NSwzNS42NjggYyAtMC4yNDIsMTEuNzc3IC0yLjkwNSwyOC44NjUgLTE0LjQ0Myw0Mi43OTEgLTEyLjAzNy'+
			'wxNC41MTQgLTMxLjE4MiwyMi42MzIgLTU2Ljk5OCwyNC4yNjEgeiBtIC0xLjA5LDM4Mi4zMjUgMjAuNzc5LC0xNzQuNDAyIDgyLjYyNiwxMi44MDMgYyAtMC4wNjIsMS4zMjQgLTAuMTk1LDIuNjM2IC0wLjE5NSwzLjk4OSAwLDE4LjE2NCA2LjMwNywzNC44NTYgMTYuODA3LDQ4LjEwOCBsIC00Mi45MTIsMzQuNDU5IC0xMy41MjEsODYuOTU5IHogbSAxNjEuODc4LDMwLjM1OCAtOTAuNzIxLC0xNy4wMTcgMTMuMTA0LC04NC4yNTIgNDAuODM3LC0zMi43ODEgYyAxMi41MjgsMTIuOTUgMjkuNDgsMjEuNTkzIDQ4LjQyMSwyMy4zNzcgeiBNIDE0MS43MjksMzMzLjMxMSBjIDAsLTM0LjM0OCAyNy45'+
			'MzUsLTYyLjI4MSA2Mi4yNjQsLTYyLjI4MSAzNC4zNDcsMCA2Mi4yODIsMjcuOTM0IDYyLjI4Miw2Mi4yODEgMCwzNC4zMyAtMjcuOTM1LDYyLjI2NSAtNjIuMjgyLDYyLjI2NSAtMzQuMzMsMC4wMDYgLTYyLjI2NCwtMjcuOTM1IC02Mi4yNjQsLTYyLjI2NSB6IG0gNjQuNjksMTkxLjk4NyAtMS43NSwtMC4zMyAxMi4xMiwtMTE1LjExOSBjIDM2Ljc1NiwtNi4xMzUgNjQuOSwtMzguMDc2IDY0LjksLTc2LjU1NiAwLC0yLjA4MSAtMC4xNSwtNC4xMTQgLTAuMzEzLC02LjE1OSBsIDk2LjAzOCwtMTQuNDgxIDguMDE2LDgxLjkxMSBjIC00Mi4xMzIsMS45OCAtNzMuNjI1LDE0LjkzMiAtOTMuNDQ5LD'+
			'M4Ljg1NyAtMjMuMTE0LDI3LjkyMyAtMjQuMjA1LDYyLjczNyAtMjMuMDA4LDc5Ljk0OSB6IG0gNzAuMjQ3LC0xMy4zODEgYyAtMC45MzEsLTE2LjMzNyAwLjQxOSwtNDguMzk3IDIxLjI2NCwtNzMuNTY1IDE4LjQzOCwtMjIuMjYgNDguMTgyLC0zNC4yNzEgODguMjQ0LC0zNi4wOTEgbCA4LjUzNSw4Ny4xNTQgeiBtIDEyNi4zMDcsLTMyMC45NDYgMTYzLjAzLDQxLjIyNSAtOS43NzYsNzcuMDE3IC0xNjAuOTc0LC0xOS40MzEgeiBtIDEzMS4wODMsMTg0Ljc3NCAtNzQuMTc1LC04LjgxOSAxMy41ODQsMTMxLjU4IC01OS40MjgsLTEyLjc3MyAtMTYuODUyLC0xNzYuMDM0IDEuNzMyLC0wLjI3MiAx'+
			'NTUuNjEyLDE5Ljc1NCAyMy4wMjIsMTkzLjM1NCAtOTYuMjk4LC0yMi4yMTMgLTEyLjcxNCwtMTI0LjU5OSA2Ni4xMTEsNy42NzIgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICA8L2c+CiAgPC9nPgogIDxnIGlkPSJnMzgwMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwMyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgwOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPgogIDxnIGlkPSJnMzgxMS'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fdXAuc3ZnIiB5PSIwcHgiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRm'+
			'OmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaWQ9Im'+
			'5hbWVkdmlldzExIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGJvcmRlcm9wYWNpdHk9IjEiPgogIDxpbmtzY2FwZTpncmlkIGlk'+
			'PSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgcj0iMzgiIGN5PSI1MCIvPgogPHBhdGggaWQ9InBhdGg0ND'+
			'k0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQt'+
			'aW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2hhcG'+
			'UtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpy'+
			'b3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsODkuNS'+
			'A3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVy'+
			'ZT0iMCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC'+
			'0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Nzku'+
			'OTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3'+
			'JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1MTUxNTE1LDAsMCwwLjE1MTUxNTE1LDI1LjAwMDA3NiwyNSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICA8ZyBpZD0iWE1MSURf'+
			'ODVfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxwYXRoIGlkPSJYTUxJRF84Nl8iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4ID'+
			'UuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgIDxwYXRoIGlkPSJYTUxJRF84N18iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTow'+
			'LjUwMTk2MDc4IiBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMzU1ID'+
			'AsLTIxLjIxMyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9nPgogIDxnIGlkPSJnNDU0MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ry'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fZG93bi5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpZD'+
			'0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgYm9yZGVyb3BhY2l0eT0iMSI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'aWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBpZD0icGF0aDQ0OTkiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiByPSIzOCIgY3k9IjUwIi8+CiA8cGF0aCBpZD0icGF0aD'+
			'Q0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4'+
			'dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaG'+
			'FwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2Fw'+
			'OnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS'+
			'41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0'+
			'dXJlPSIwIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1NjgiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3'+
			'dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIi8+CiA8L3RleHQ+CiA8ZyBpZD0iZzQ1OTciIHRyYW5zZm9ybT0ibWF0cml4KDAuMTUxNTE1MTUsMCwwLC0wLjE1MTUxNTE1LDI1LjAwMDA3Niw3NSkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICA8ZyBpZD0iWE1M'+
			'SURfODVfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgIDxwYXRoIGlkPSJYTUxJRF84Nl8iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiBkPSJNIDI1LjYwNywxOTAuNjA3IDE2NC45OTcsNTEuMjE0IDMwNC4zOTMsMTkwLjYwNyBjIDIuOTMsMi45MjkgNi43NjgsNC4zOTMgMTAuNjA3LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuOD'+
			'U4IDUuODU4LC0xNS4zNTUgMCwtMjEuMjEzIGwgLTE1MC4wMDMsLTE1MCBDIDE3Mi43OSwxNi41OCAxNjguOTc2LDE1IDE2NC45OTcsMTUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk3LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU4LDUuODU4IDE1LjM1Niw1Ljg1OCAyMS4yMTQsMCB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgIDxwYXRoIGlkPSJYTUxJRF84N18iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0'+
			'eTowLjUwMTk2MDc4IiBkPSJNIDE3NS42MDMsMTM5LjM5MyBDIDE3Mi43OSwxMzYuNTggMTY4Ljk3NSwxMzUgMTY0Ljk5NywxMzUgYyAtMy45NzksMCAtNy43OTQsMS41ODEgLTEwLjYwNyw0LjM5NCBsIC0xNDkuOTk2LDE1MCBjIC01Ljg1OCw1Ljg1OCAtNS44NTgsMTUuMzU1IDAsMjEuMjEzIDUuODU3LDUuODU3IDE1LjM1NSw1Ljg1OCAyMS4yMTMsLTAuMDAxIGwgMTM5LjM5LC0xMzkuMzkzIDEzOS4zOTcsMTM5LjM5NCBjIDIuOTI5LDIuOTI5IDYuNzY3LDQuMzkzIDEwLjYwNiw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Ljg1OCA1Ljg1OCwtMTUuMz'+
			'U1IDAsLTIxLjIxMyB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9nPgogIDxnIGlkPSJnNDU0MiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ2IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fcmlnaHQuc3ZnIiB5PSIwcHgiPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE1Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsg'+
			'cmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzMTMiLz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iMTMuOTkiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTp3aW5kb3cteD0iMzgyOSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW'+
			'Q9Im5hbWVkdmlldzExIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjUwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiIHNob3dncmlkPSJ0cnVlIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgcGFnZWNvbG9yPSIjOTA5MDhlIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN4PSIyNi4xMjU4MDQiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGJvcmRlcm9wYWNpdHk9IjEiPgogIDxpbmtzY2FwZTpncmlk'+
			'IGlkPSJncmlkNDQ5MiIgdHlwZT0ieHlncmlkIi8+CiA8L3NvZGlwb2RpOm5hbWVkdmlldz4KIDxjaXJjbGUgaWQ9InBhdGg0NDk5IiBjeD0iNTAiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjIwMzkyMTU3O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk5OTk5OTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbCIgcj0iMzgiIGN5PSI1MCIvPgogPHBhdGggaWQ9InBhdG'+
			'g0NDk0IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LXBvc2l0aW9uOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3Rl'+
			'eHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7ZG9taW5hbnQtYmFzZWxpbmU6YXV0bztiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7c2'+
			'hhcGUtcGFkZGluZzowO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNh'+
			'cDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4O3BhaW50LW9yZGVyOm5vcm1hbDtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGQ9Ik0gNTAsMTAuNSBDIDI4LjE5Njc0OCwxMC41IDEwLjUsMjguMTk2NzQ5IDEwLjUsNTAgMTAuNSw3MS44MDMyNTIgMjguMTk2NzQ4LDg5LjUgNTAsOD'+
			'kuNSA3MS44MDMyNTIsODkuNSA4OS41LDcxLjgwMzI1MiA4OS41LDUwIDg5LjUsMjguMTk2NzQ5IDcxLjgwMzI1MiwxMC41IDUwLDEwLjUgWiBtIDAsMi4wMjU2NDIgYyAyMC43MDg1MTIsMCAzNy40NzQzNTgsMTYuNzY1ODQ2IDM3LjQ3NDM1OCwzNy40NzQzNTggMCwyMC43MDg1MTMgLTE2Ljc2NTg0NiwzNy40NzQzNTkgLTM3LjQ3NDM1OSwzNy40NzQzNTkgQyAyOS4yOTE0ODcsODcuNDc0MzU5IDEyLjUyNTY0MSw3MC43MDg1MTMgMTIuNTI1NjQxLDUwIDEyLjUyNTY0MSwyOS4yOTE0ODggMjkuMjkxNDg3LDEyLjUyNTY0MiA1MCwxMi41MjU2NDIgWiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZh'+
			'dHVyZT0iMCIvPgogPGcgaWQ9Imc0NTA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOT'+
			'A2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0'+
			'NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPGcgaWQ9Imc0NTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIvPgogPHRleHQgaWQ9InRleHQ0NTY4IiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweD'+
			't3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogIDx0c3BhbiBpZD0idHNwYW40NTY2IiB4PSItMjkiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIHk9IjEyOS40OTMyMSIvPgogPC90ZXh0PgogPGcgaWQ9Imc0NTk3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLDAuMTUxNTE1MTUsLTAuMTUxNTE1MTUsMCw3NSwyNS4wMDAwNzYpIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCI+CiAgPGcgaWQ9IlhN'+
			'TElEXzg1XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogICA8cGF0aCBpZD0iWE1MSURfODZfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgZD0iTSAyNS42MDcsMTkwLjYwNyAxNjQuOTk3LDUxLjIxNCAzMDQuMzkzLDE5MC42MDcgYyAyLjkzLDIuOTI5IDYuNzY4LDQuMzkzIDEwLjYwNyw0LjM5MyAzLjgzOSwwIDcuNjc4LC0xLjQ2NCAxMC42MDYsLTQuMzk0IDUuODU4LC01Lj'+
			'g1OCA1Ljg1OCwtMTUuMzU1IDAsLTIxLjIxMyBsIC0xNTAuMDAzLC0xNTAgQyAxNzIuNzksMTYuNTggMTY4Ljk3NiwxNSAxNjQuOTk3LDE1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NywxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1OCw1Ljg1OCAxNS4zNTYsNS44NTggMjEuMjE0LDAgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICA8cGF0aCBpZD0iWE1MSURfODdfIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNp'+
			'dHk6MC41MDE5NjA3OCIgZD0iTSAxNzUuNjAzLDEzOS4zOTMgQyAxNzIuNzksMTM2LjU4IDE2OC45NzUsMTM1IDE2NC45OTcsMTM1IGMgLTMuOTc5LDAgLTcuNzk0LDEuNTgxIC0xMC42MDcsNC4zOTQgbCAtMTQ5Ljk5NiwxNTAgYyAtNS44NTgsNS44NTggLTUuODU4LDE1LjM1NSAwLDIxLjIxMyA1Ljg1Nyw1Ljg1NyAxNS4zNTUsNS44NTggMjEuMjEzLC0wLjAwMSBsIDEzOS4zOSwtMTM5LjM5MyAxMzkuMzk3LDEzOS4zOTQgYyAyLjkyOSwyLjkyOSA2Ljc2Nyw0LjM5MyAxMC42MDYsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NTggNS44NTgsLTE1Lj'+
			'M1NSAwLC0yMS4yMTMgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDwvZz4KICA8ZyBpZD0iZzQ1NDIiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ii8+CiAgPGcgaWQ9Imc0NTQ0IiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0NiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9IjEwMHB4IiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgaGVpZ2h0PSIxMDBweCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBzb2RpcG9kaTpkb2NuYW1lPSJidG5fbGVmdC5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayBy'+
			'ZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIxMy45OSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy14PSIzODI5IiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpZD'+
			'0ibmFtZWR2aWV3MTEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwNjYiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBwYWdlY29sb3I9IiM5MDkwOGUiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjI2LjEyNTgwNCIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgYm9yZGVyb3BhY2l0eT0iMSI+CiAgPGlua3NjYXBlOmdyaWQg'+
			'aWQ9ImdyaWQ0NDkyIiB0eXBlPSJ4eWdyaWQiLz4KIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogPGNpcmNsZSBpZD0icGF0aDQ0OTkiIGN4PSI1MCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjAzOTIxNTc7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsIiByPSIzOCIgY3k9IjUwIi8+CiA8cGF0aCBpZD0icGF0aD'+
			'Q0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4'+
			'dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaG'+
			'FwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2Fw'+
			'OnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLjUgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS'+
			'41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAyOS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0'+
			'dXJlPSIwIi8+CiA8ZyBpZD0iZzQ1MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MD'+
			'YsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3'+
			'OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8ZyBpZD0iZzQ1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIi8+CiA8dGV4dCBpZD0idGV4dDQ1NjgiIHg9Ii0yOSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3'+
			'dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI5MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIGlkPSJ0c3BhbjQ1NjYiIHg9Ii0yOSIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iMTI5LjQ5MzIxIi8+CiA8L3RleHQ+CiA8ZyBpZD0iZzQ1OTciIHRyYW5zZm9ybT0ibWF0cml4KDAsMC4xNTE1MTUxNSwwLjE1MTUxNTE1LDAsMjUsMjUuMDAwMDc2KSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiPgogIDxnIGlkPSJYTUxJ'+
			'RF84NV8iIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4Ij4KICAgPHBhdGggaWQ9IlhNTElEXzg2XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIGQ9Ik0gMjUuNjA3LDE5MC42MDcgMTY0Ljk5Nyw1MS4yMTQgMzA0LjM5MywxOTAuNjA3IGMgMi45MywyLjkyOSA2Ljc2OCw0LjM5MyAxMC42MDcsNC4zOTMgMy44MzksMCA3LjY3OCwtMS40NjQgMTAuNjA2LC00LjM5NCA1Ljg1OCwtNS44NT'+
			'ggNS44NTgsLTE1LjM1NSAwLC0yMS4yMTMgbCAtMTUwLjAwMywtMTUwIEMgMTcyLjc5LDE2LjU4IDE2OC45NzYsMTUgMTY0Ljk5NywxNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTcsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTgsNS44NTggMTUuMzU2LDUuODU4IDIxLjIxNCwwIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgPHBhdGggaWQ9IlhNTElEXzg3XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5'+
			'OjAuNTAxOTYwNzgiIGQ9Ik0gMTc1LjYwMywxMzkuMzkzIEMgMTcyLjc5LDEzNi41OCAxNjguOTc1LDEzNSAxNjQuOTk3LDEzNSBjIC0zLjk3OSwwIC03Ljc5NCwxLjU4MSAtMTAuNjA3LDQuMzk0IGwgLTE0OS45OTYsMTUwIGMgLTUuODU4LDUuODU4IC01Ljg1OCwxNS4zNTUgMCwyMS4yMTMgNS44NTcsNS44NTcgMTUuMzU1LDUuODU4IDIxLjIxMywtMC4wMDEgbCAxMzkuMzksLTEzOS4zOTMgMTM5LjM5NywxMzkuMzk0IGMgMi45MjksMi45MjkgNi43NjcsNC4zOTMgMTAuNjA2LDQuMzkzIDMuODM5LDAgNy42NzgsLTEuNDY0IDEwLjYwNiwtNC4zOTQgNS44NTgsLTUuODU4IDUuODU4LC0xNS4zNT'+
			'UgMCwtMjEuMjEzIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L2c+CiAgPGcgaWQ9Imc0NTQyIiBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2LjU5OTk5OTk7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIvPgogIDxnIGlkPSJnNDU0NCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Ni41OTk5OTk5O3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiLz4KICA8ZyBpZD0iZzQ1NDYiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjYuNTk5OTk5OTtz'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB3aWR0aD0iMTAwcHgiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMC'+
			'AxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBoZWlnaHQ9IjEwMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8i'+
			'IHNvZGlwb2RpOmRvY25hbWU9InNob3dfY2VudGVyX2Jhci5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPS'+
			'I4LjY1IiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIHBhZ2Vjb2xvcj0iIzgyODY3YiIgZ3Vp'+
			'ZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMTAuOTgyNjU5IiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBib3JkZXJvcGFjaXR5PSIxIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0ODIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBpZD0iZzQ1MTUiIHRyYW5zZm9ybT0ibWF0cml4KC0xLjI3Mjc5MjIsLTEuMjcyNzkyMiwtMS4yNzI3OTIyLDEuMjcyNzkyMiwxMTEuOTU2NTYsMjgyLjE3NTM5KSIgc3R5bGU9InN0cm9rZS13aWR0aDowLjU1NTU1NTU4Ij4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS42MTUyMjI2LC0xLjAyOTQzNzIpIiBpZD'+
			'0iZzQ1MDkiIHN0eWxlPSJzdHJva2Utd2lkdGg6MC41NTU1NTU1OCI+CiAgIDxyZWN0IGlkPSJyZWN0NDQ4NCIgaGVpZ2h0PSIyIiB4PSIxMTQiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjUwMTk2MDc4IiB5PSItNTkiIHdpZHRoPSIxMiIvPgogICA8cmVjdCBpZD0icmVjdDQ0ODQtNSIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiBo'+
			'ZWlnaHQ9IjIiIHg9Ii02OSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHk9Ii0xMjYiIHdpZHRoPSIxMiIvPgogIDwvZz4KICA8cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiIGlkPSJyZWN0NDQ4NC05IiBoZWlnaHQ9IjIiIHg9IjIxLjkyMDMxMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MT'+
			'tzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHk9Ii0xMjkuOTg2MzMiIHdpZHRoPSIyNCIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB3aWR0aD0iMTAwcHgiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMC'+
			'AxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBoZWlnaHQ9IjEwMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8i'+
			'IHNvZGlwb2RpOmRvY25hbWU9ImhpZGVfY2VudGVyX2Jhci5zdmciIHk9IjBweCI+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTUiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnMxMyIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPS'+
			'I4LjY1IiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBzaG93Z3JpZD0idHJ1ZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIHBhZ2Vjb2xvcj0iIzgyODY3YiIgZ3Vp'+
			'ZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeD0iMTAuOTgyNjU5IiBpbmtzY2FwZTp3aW5kb3cteT0iLTExIiBib3JkZXJvcGFjaXR5PSIxIj4KICA8aW5rc2NhcGU6Z3JpZCBpZD0iZ3JpZDQ0ODIiIHR5cGU9Inh5Z3JpZCIvPgogPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiA8ZyBpZD0iZzQ1MTUiIHRyYW5zZm9ybT0ibWF0cml4KDEuMjcyNzkyMiwtMS4yNzI3OTIyLDEuMjcyNzkyMiwxLjI3Mjc5MjIsLTExLjk1NjU1OSwyODIuMTc1MzkpIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNTU1NTU1NTgiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjYxNTIyMjYsLTEuMDI5NDM3MikiIGlkPS'+
			'JnNDUwOSIgc3R5bGU9InN0cm9rZS13aWR0aDowLjU1NTU1NTU4Ij4KICAgPHJlY3QgaWQ9InJlY3Q0NDg0IiBoZWlnaHQ9IjIiIHg9IjExNCIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTU1NTU1ODtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjI7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzgiIHk9Ii01OSIgd2lkdGg9IjEyIi8+CiAgIDxyZWN0IGlkPSJyZWN0NDQ4NC01IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiIGhl'+
			'aWdodD0iMiIgeD0iLTY5IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NTU1NTU4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeT0iLTEyNiIgd2lkdGg9IjEyIi8+CiAgPC9nPgogIDxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgaWQ9InJlY3Q0NDg0LTkiIGhlaWdodD0iMiIgeD0iMjEuOTIwMzExIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3'+
			'N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NTU1NTU4O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA3OCIgeT0iLTEyOS45ODYzMyIgd2lkdGg9IjI0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB3aWR0aD0iMTAwcHgiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMC'+
			'AxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBoZWlnaHQ9IjEwMHB4IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8i'+
			'IHNvZGlwb2RpOmRvY25hbWU9ImJ0bl9jbG9zZV9pbmZvX3RleHRfYm94LnN2ZyIgeT0iMHB4Ij4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczEzIi8+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYX'+
			'BlOnpvb209IjE4LjQzIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXcxMSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjA2NiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1MCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBwYWdlY29sb3I9IiM4'+
			'NjgwN2IiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3g9IjUwLjQzNDA3NSIgaW5rc2NhcGU6d2luZG93LXk9Ii0xMSIgYm9yZGVyb3BhY2l0eT0iMSIvPgogPGcgaWQ9Imc0NTY2Ij4KICA8Y2lyY2xlIGN4PSI1MCIgaWQ9InBhdGg0NDk5IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC4yMDM5MjE1NztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk5NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MD'+
			'E5NjA3ODtwYWludC1vcmRlcjpub3JtYWwiIHI9IjM4IiBjeT0iNTAiLz4KICA8cGF0aCBpZD0icGF0aDQ0OTQiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9u'+
			'dC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21pbmFudC1iYXNlbGluZTphdXRvO2Jhc2'+
			'VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2Zp'+
			'bGwtcnVsZTpub256ZXJvO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuNTAxOTYwNzg7cGFpbnQtb3JkZXI6bm9ybWFsO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgZD0iTSA1MCwxMC41IEMgMjguMTk2NzQ4LDEwLj'+
			'UgMTAuNSwyOC4xOTY3NDkgMTAuNSw1MCAxMC41LDcxLjgwMzI1MiAyOC4xOTY3NDgsODkuNSA1MCw4OS41IDcxLjgwMzI1Miw4OS41IDg5LjUsNzEuODAzMjUyIDg5LjUsNTAgODkuNSwyOC4xOTY3NDkgNzEuODAzMjUyLDEwLjUgNTAsMTAuNSBaIG0gMCwyLjAyNTY0MiBjIDIwLjcwODUxMiwwIDM3LjQ3NDM1OCwxNi43NjU4NDYgMzcuNDc0MzU4LDM3LjQ3NDM1OCAwLDIwLjcwODUxMyAtMTYuNzY1ODQ2LDM3LjQ3NDM1OSAtMzcuNDc0MzU5LDM3LjQ3NDM1OSBDIDI5LjI5MTQ4Nyw4Ny40NzQzNTkgMTIuNTI1NjQxLDcwLjcwODUxMyAxMi41MjU2NDEsNTAgMTIuNTI1NjQxLDI5LjI5MTQ4OCAy'+
			'OS4yOTE0ODcsMTIuNTI1NjQyIDUwLDEyLjUyNTY0MiBaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiIGlkPSJnNDUwOCIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIiBpZD0iZzQ1MTAiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIgaWQ9Imc0NTEyIi8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiIGlkPSJnNDUxNCIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLT'+
			'M1Mi43OTkpIiBpZD0iZzQ1MTYiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIgaWQ9Imc0NTE4Ii8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiIGlkPSJnNDUyMCIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIiBpZD0iZzQ1MjIiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIgaWQ9Imc0NTI0Ii8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiIGlkPSJnNDUyNiIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KDQ3OS45MDYsLTM1Mi43OTkpIiBpZD0iZzQ1MjgiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIgaWQ9Imc0NTMwIi8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjkwNiwtMzUyLjc5OSkiIGlkPSJnNDUzMiIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS45MDYsLTM1Mi43OTkpIiBpZD0iZzQ1MzQiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzkuOTA2LC0zNTIuNzk5KSIgaWQ9Imc0NTM2Ii8+CiAgPHRleHQgaWQ9InRleHQ0NTY4IiB4PSItMjkiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYW'+
			'w7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iOTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICA8dHNwYW4gaWQ9InRzcGFuNDU2NiIgeD0iLTI5IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSIxMjkuNDkzMjEiLz4KICA8L3RleHQ+CiA8L2c+CiA8cGF0aCBpZD0icmVjdDQ0ODYiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13'+
			'aWR0aDoyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC41MDE5NjA4MTtwYWludC1vcmRlcjptYXJrZXJzIGZpbGwgc3Ryb2tlIiBkPSJNIDMxLjI2MTY3MiwzMy4zODI5OTEgNDcuODc4NjgyLDUwIDMxLjI2MTY3Miw2Ni42MTcwMDkgMzMuMzgyOTkzLDY4LjczODMzIDQ5Ljk5OTk5OCw1Mi4xMjEzMiA2Ni42MTcwMDgsNjguNzM4MzMgNjguNzM4MzI4LDY2LjYxNzAwOSA1Mi4xMjEzMTgsNTAgNjguNzM4MzI4LDMzLjM4Mjk5MSA2Ni42MTcwMDgsMzEuMjYxNj'+
			'cgNDkuOTk5OTk4LDQ3Ljg3ODY4IDMzLjM4Mjk5MywzMS4yNjE2NyBaIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+Cjwvc3ZnPgo=';
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
		me._btn_close_info_text_box.ggUpdatePosition=function (useTransition) {
		}
		me._info_text_box.appendChild(me._btn_close_info_text_box);
		me.divSkin.appendChild(me._info_text_box);
		el=me._splash_container=document.createElement('div');
		els=me._splash_container__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Splash_container";
		el.ggDx=-0.01;
		el.ggDy=0.01;
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGlkPSJzdmc4IiBoZWlnaHQ9IjY0MCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1ODcuNSAxNjkuMzMzMzQiIHhtbG5zOn'+
			'JkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgd2lkdGg9IjYwMDAiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIiBzb2RpcG9kaTpkb2NuYW1lPSJzdmdfc3BsYXNoX3dpcmVzLnN2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzIGlkPSJkZWZzMiIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIw'+
			'LjU0NDUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjM4MjkiIGlkPSJiYXNlIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDY2IiBpbmtzY2FwZTpjeT0iMzIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIiBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJmYWxzZSIgc2hvd2dyaWQ9InRydWUiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj'+
			'0ibGF5ZXIxIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgcGFnZWNvbG9yPSIjODA3ZDdkIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIHVuaXRzPSJweCIgaW5rc2NhcGU6Y3g9IjMwMDAiIGlua3NjYXBlOndpbmRvdy15PSItMTEiIGJvcmRlcm9wYWNpdHk9IjEuMCI+CiAgPGlua3NjYXBlOmdyaWQgaWQ9ImdyaWQxMCIgc3BhY2luZ3k9IjIuNjQ1ODMzMyIgb3JpZ2lueT0iLTUuMDIwMDc1NCIgc3BhY2luZ3g9IjIuNjQ1ODMzMyIgdHlwZT0ieHlncmlkIiBlbXBzcGFjaW5nPSIyIiBkb3R0ZWQ9ImZhbHNlIiBvcmlnaW54PSItMC41MjUyMzkzNSIvPgogPC9zb2Rp'+
			'cG9kaTpuYW1lZHZpZXc+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhNSI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41MjUyMzk0NSwtMTIyLjY0NjU3KSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW'+
			'5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogIDxlbGxpcHNlIGlkPSJwYXRoOCIgY3g9Ijc2OC4yNTQwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTUuOTk5OTk5NCkiIHJ4PSI4NC4zOTUyOTQiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuMjUwOTgwMzk7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NjQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIHJ5PSI4NC4zOTUyODciIGN5PSIyODkuMjAxOSIvPgogIDxyZWN0IGlkPSJyZWN0NDUwMCIgaGVpZ2h0PSIwLjUyOTE2NjciIHg9IjAuNTI1MjM5NDciIHN0eWxlPSJvcGFjaXR5OjE7'+
			'ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjUyOTE2NjY0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB5PSIxMjIuNjQ2NTciIHdpZHRoPSI3OTMuMjIwODMiLz4KICA8cmVjdCBpZD0icmVjdDQ1MDAtNyIgaGVpZ2h0PSIwLjUyOTE2Njc2IiB4PSI3OTQuODA0NDQiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjUyOTE2NjY0O3N0cm9rZS1saW5lam9pbjpyb3'+
			'VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB5PSIyOTEuNDUwNzQiIHdpZHRoPSI3OTMuMjIwODMiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		els.innerHTML="<p style=\"margin-top:0em\";>Inicio Tour<\/p>";
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
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=1;
		el.ggDy=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 223px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 191px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
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
		me._image_1.ggUpdatePosition=function (useTransition) {
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
		me._splash_container.appendChild(me._image_1);
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
		}
		me._reset_all_elements_to_desired_state.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._reset_all_elements_to_desired_state);
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NCA0NCIgd2lkdGg9IjQ0IiBzdHJva2U9IiM5YzAiPgogPGcgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgPGNpcmNsZSBjeD0iMjIiIHI9IjUiIHN0cm9rZT0iI2VlZSIgY3k9IjIyIj4KICAgPGFuaW1hdGUgYmVnaW49IjBzIiBkdXI9IjEuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjE7IDIwIiBrZXlTcGxpbmVzPSIwLjE2NSwgMC44NCwgMC'+
			'40NCwgMSIga2V5VGltZXM9IjA7IDEiLz4KICAgPGFuaW1hdGUgYmVnaW49IjBzIiBkdXI9IjEuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utb3BhY2l0eSIgdmFsdWVzPSIxOyAwIiBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIiBrZXlUaW1lcz0iMDsgMSIvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgY3g9IjIyIiByPSIxMCIgc3Ryb2tlPSIjMTExIiBjeT0iMjIiPgogICA8YW5pbWF0ZSBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUi'+
			'IGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTsgMjAiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiBrZXlUaW1lcz0iMDsgMSIvPgogICA8YW5pbWF0ZSBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiB2YWx1ZXM9IjE7IDAiIGtleVNwbGluZXM9IjAuMywgMC42MSwgMC4zNTUsIDEiIGtleVRpbWVzPSIwOyAxIi8+CiAgPC9jaXJjbGU+CiA8L2c+Cjwvc3ZnPgo=';
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
	me._splash_container.logicBlock_scaling();
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
	me._sala.logicBlock_visible();
	me._garage.logicBlock_visible();
	me._ingreso.logicBlock_visible();
	me._estar_jardin.logicBlock_visible();
	me._estar_2.logicBlock_visible();
	me._estar_1.logicBlock_visible();
	me._level2_indicator.logicBlock_visible();
	me._level1_indicator.logicBlock_visible();
	me._center_right_bar_open_close.logicBlock_alpha();
	me._splash_container.logicBlock_visible();
	me._splash_container.logicBlock_alpha();
	me._white_cover_for_first_seconds.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._floor_plans_container.logicBlock_scaling();me._center_right_bar_open_close.logicBlock_scaling();me._center_right_bar_open_close.logicBlock_visible();me._splash_container.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me._floor_plans_container.logicBlock_alpha();me._level2_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._ingreso.logicBlock_visible();me._estar_jardin.logicBlock_visible();me._estar_2.logicBlock_visible();me._estar_1.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible();me._center_right_bar_open_close.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha();me._white_cover_for_first_seconds.logicBlock_alpha(); });
	player.addListener('varchanged_clickonsplash', function(args) { me._floor_plans_container.logicBlock_alpha();me._center_right_bar_open_close.logicBlock_alpha();me._splash_container.logicBlock_visible();me._splash_container.logicBlock_alpha(); });
	player.addListener('varchanged_whitecover', function(args) { me._white_cover_for_first_seconds.logicBlock_alpha(); });
	player.addListener('varchanged_levelnumber', function(args) { me._level2_floorplan.logicBlock_visible();me._level1_floorplan.logicBlock_visible();me._dormitorio_principal.logicBlock_visible();me._bao_2do.logicBlock_visible();me._dormitorio_1.logicBlock_visible();me._dormitorio_2.logicBlock_visible();me._bao_p.logicBlock_visible();me._sala_familiar.logicBlock_visible();me._lavanderia.logicBlock_visible();me._cocina.logicBlock_visible();me._jardin.logicBlock_visible();me._comedor.logicBlock_visible();me._sala.logicBlock_visible();me._garage.logicBlock_visible();me._ingreso.logicBlock_visible();me._estar_jardin.logicBlock_visible();me._estar_2.logicBlock_visible();me._estar_1.logicBlock_visible();me._level2_indicator.logicBlock_visible();me._level1_indicator.logicBlock_visible(); });
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