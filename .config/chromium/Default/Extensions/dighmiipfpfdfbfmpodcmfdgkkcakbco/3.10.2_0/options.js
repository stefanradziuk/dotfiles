webpackJsonp([4],{0:function(o,t,e){(function(o){e(17),e(171);var t=e(31).Provider,n=e(7),s=e(233),i=e(311),r=e(719);o.document.getElementById("mount").className="hovercards-root",s.render(n.createElement(t,{store:r()},n.createElement(i,null)),o.document.getElementById("mount"))}).call(t,function(){return this}())},282:function(o,t,e){var n=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o};o.exports=n({},e(723))},292:function(o,t,e){function n(o){return e(s(o))}function s(o){return i[o]||function(){throw new Error("Cannot find module '"+o+"'.")}()}var i={"./Imgur-icon-full_color.png":747,"./Reddit-icon-full_color.png":748,"./SoundCloud-icon-full_color.png":749,"./Twitter-icon-full_color.png":750,"./YouTube-icon-full_color.png":751,"./facebook-icon-full_color.png":752,"./imgur-icon-full_color.png":753,"./instagram-icon-full_color.png":754,"./reddit-icon-full_color.png":755,"./soundcloud-icon-full_color.png":756,"./twitter-icon-full_color.png":757,"./youtube-icon-full_color.png":758};n.keys=function(){return Object.keys(i)},n.resolve=s,o.exports=n,n.id=292},308:function(o,t,e){var n=e(2),s=e(7),i=e(12),r=e(9),p=e(17),c=e(739),a=e(292);o.exports=s.createClass({displayName:"IntegrationOptions",propTypes:{className:s.PropTypes.string,integration:s.PropTypes.string.isRequired,setOption:s.PropTypes.func.isRequired,options:s.PropTypes.object.isRequired},onChange:function(o){this.props.setOption({option:this.props.integration+"."+o+".enabled",value:!this.props.options[o].enabled})["catch"](p.catchException)},render:function(){return s.createElement("div",{className:i(c.row,this.props.className)},s.createElement("div",{className:c.col6},s.createElement("label",{className:c.option},s.createElement("img",{className:c.integrationImage,src:a("./"+this.props.integration+"-icon-full_color.png")}),s.createElement("span",{className:c.optionTitle},r.i18n.getMessage("hovercards_of_"+this.props.integration+"_content")),s.createElement("div",{className:c.inputContainer},s.createElement("input",{type:"checkbox",checked:this.props.options.content.enabled,onChange:n.partial(this.onChange,"content")})," ",r.i18n.getMessage("show_these")))),s.createElement("div",{className:c.col6},s.createElement("label",{className:c.option},s.createElement("img",{className:c.integrationImage,src:a("./"+this.props.integration+"-icon-full_color.png")}),s.createElement("span",{className:c.optionTitle},r.i18n.getMessage("hovercards_of_account")),s.createElement("div",{className:c.inputContainer},s.createElement("input",{type:"checkbox",checked:this.props.options.account.enabled,onChange:n.partial(this.onChange,"account")})," ",r.i18n.getMessage("show_these")))))}})},311:function(o,t,e){var n=e(2),s=e(7),i=e(12),r=e(31).connect,p=e(271).createStructuredSelector,c=e(308),a=e(282),l=e(743);o.exports=r(p({options:n.property("options")}),a)(s.createClass({displayName:"Options",propTypes:{className:s.PropTypes.string,options:s.PropTypes.object.isRequired,setOption:s.PropTypes.func.isRequired},render:function(){return s.createElement("div",{className:i(l.options,this.props.className)},s.createElement(c,{integration:"imgur",options:this.props.options.imgur,setOption:this.props.setOption,options:this.props.options.imgur}),s.createElement(c,{integration:"soundcloud",options:this.props.options.soundcloud,setOption:this.props.setOption}),s.createElement(c,{integration:"youtube",options:this.props.options.youtube,setOption:this.props.setOption}),s.createElement(c,{integration:"instagram",options:this.props.options.instagram,setOption:this.props.setOption}),s.createElement(c,{integration:"reddit",options:this.props.options.reddit,setOption:this.props.setOption}),s.createElement(c,{integration:"twitter",options:this.props.options.twitter,setOption:this.props.setOption}))}}))},719:function(o,t,e){var n=e(282),s=e(174);o.exports=function(o){return s(n,{options:e(285)},o)}},723:function(o,t,e){var n=e(2),s=e(37).createAction,i=e(179),r=i.options.keys();o.exports.setOption=function(o){return function(t){return n.indexOf(r,o.option,!0)!==-1&&t(s("SET_OPTION")(o))&&Promise.resolve()}}},739:function(o,t){o.exports={row:"_1oaNZE7SCprOE9gCJFpiQN","col-6":"ZObZFmJwgFZ2BCKE-FSDj",col6:"ZObZFmJwgFZ2BCKE-FSDj",option:"_1w7YUxY6RuZwL026lu-ofV","integration-image":"_3byVPROCQCHNxY5GhzPl5e",integrationImage:"_3byVPROCQCHNxY5GhzPl5e","option-title":"_3zBaXQmeym4Wm1ifgHDM02",optionTitle:"_3zBaXQmeym4Wm1ifgHDM02","input-container":"_3BrQTh3P_Em30W8WSKvvcf",inputContainer:"_3BrQTh3P_Em30W8WSKvvcf"}},743:function(o,t){o.exports={options:"Cjs7bM4Kox4cekwonpOoq",save:"_3tTODLP7aP5Ntd7LEHxBJs","options-saved":"JR79QdINRht4ydHWdkYIh",optionsSaved:"JR79QdINRht4ydHWdkYIh","options-error":"_1FBOkWI15vyNaDocmfxyZ4",optionsError:"_1FBOkWI15vyNaDocmfxyZ4"}},747:function(o,t,e){o.exports=e.p+"assets/images/Imgur-icon-full_color.png"},748:function(o,t,e){o.exports=e.p+"assets/images/Reddit-icon-full_color.png"},749:function(o,t,e){o.exports=e.p+"assets/images/SoundCloud-icon-full_color.png"},750:function(o,t,e){o.exports=e.p+"assets/images/Twitter-icon-full_color.png"},751:function(o,t,e){o.exports=e.p+"assets/images/YouTube-icon-full_color.png"},752:function(o,t,e){o.exports=e.p+"assets/images/facebook-icon-full_color.png"},753:function(o,t,e){o.exports=e.p+"assets/images/imgur-icon-full_color.png"},754:function(o,t,e){o.exports=e.p+"assets/images/instagram-icon-full_color.png"},755:function(o,t,e){o.exports=e.p+"assets/images/reddit-icon-full_color.png"},756:function(o,t,e){o.exports=e.p+"assets/images/soundcloud-icon-full_color.png"},757:function(o,t,e){o.exports=e.p+"assets/images/twitter-icon-full_color.png"},758:function(o,t,e){o.exports=e.p+"assets/images/youtube-icon-full_color.png"}});
//# sourceMappingURL=options.js.map