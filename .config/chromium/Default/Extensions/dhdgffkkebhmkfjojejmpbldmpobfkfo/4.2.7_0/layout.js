(function(){Registry.require(["pingpong","helper"],function(){var g=Registry.get("pingpong"),h=Registry.get("helper"),e=null,d=[],c=null;Registry.register("layout","5362",{init:function(b,a){var f=function(){if(d.length){var a=d.pop();console.log("Try to load layout",a);Registry.loadFile(["layout",a,b].join("/"));c=window.setTimeout(function(){c=null;f()},1E3)}else console.warn("Layout: Unable to load file",b)};g.ping(function(b){d=["default",h.getUrlArgs().layout||(b&&b.config?b.config.layout:
null)||"default"];f();a.suc&&a.suc()},a.fail)},render:function(b,a){void 0===a&&(a=b,b=null);(function(a){b?Registry.loadFile(b,a):a()})(function(){a(e);e=null});c&&(window.clearTimeout(c),c=null)},getLayouts:function(){var b=[],a=["test"];Registry.isDevVersion("helper")&&a.forEach(function(a){Registry.getRaw("layout/"+a+"/options.js")&&b.push(a)});return b},editorThemes:"default solarized monokai mdn-like eclipse railscasts".split(" ")})})})();