#target Illustrator

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (this == null) {
      throw new TypeError('"this" vaut null ou n est pas défini');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = +fromIndex || 0;
    if (Math.abs(n) === Infinity) {
      n = 0;
    }
    if (n >= len) {
      return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

"object"!==typeof JSON&&(JSON={});
(function(){function m(a){return 10>a?"0"+a:a}function q(){return this.valueOf()}function r(a){t.lastIndex=0;return t.test(a)?'"'+a.replace(t,function(a){var c=w[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function n(a,k){var c,d=e,b=k[a];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(a));"function"===typeof h&&(b=h.call(k,a,b));switch(typeof b){case "string":return r(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);
case "object":if(!b)return"null";e+=p;var g=[];if("[object Array]"===Object.prototype.toString.apply(b)){var u=b.length;for(c=0;c<u;c+=1)g[c]=n(c,b)||"null";var f=0===g.length?"[]":e?"[\n"+e+g.join(",\n"+e)+"\n"+d+"]":"["+g.join(",")+"]";e=d;return f}if(h&&"object"===typeof h)for(u=h.length,c=0;c<u;c+=1){if("string"===typeof h[c]){var l=h[c];(f=n(l,b))&&g.push(r(l)+(e?": ":":")+f)}}else for(l in b)Object.prototype.hasOwnProperty.call(b,l)&&(f=n(l,b))&&g.push(r(l)+(e?": ":":")+f);f=0===g.length?"{}":
e?"{\n"+e+g.join(",\n"+e)+"\n"+d+"}":"{"+g.join(",")+"}";e=d;return f}}var x=/^[\],:{}\s]*$/,y=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,z=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,A=/(?:^|:|,)(?:\s*\[)+/g,t=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,v=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!==typeof Date.prototype.toJSON&&
(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=q,Number.prototype.toJSON=q,String.prototype.toJSON=q);var e,p,h;if("function"!==typeof JSON.stringify){var w={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(a,k,c){var d;p=e="";if("number"===
typeof c)for(d=0;d<c;d+=1)p+=" ";else"string"===typeof c&&(p=c);if((h=k)&&"function"!==typeof k&&("object"!==typeof k||"number"!==typeof k.length))throw Error("JSON.stringify");return n("",{"":a})}}"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(b,a){var d,f=b[a];if(f&&"object"===typeof f)for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)){var g=c(f,d);void 0!==g?f[d]=g:delete f[d]}return e.call(b,a,f)}a=String(a);v.lastIndex=0;v.test(a)&&(a=a.replace(v,function(a){return"\\u"+
("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(x.test(a.replace(y,"@").replace(z,"]").replace(A,""))){var d=eval("("+a+")");return"function"===typeof e?c({"":d},""):d}throw new SyntaxError("JSON.parse");})})();

(function(context) {
  var weights = [ '40 pt', '120 pt', '200 pt', '320 pt' ];

  var shapes = [
    'trait 01',
    'trait 02',
    'trait 03',
    'trait 04',
    'trait 05',
    'trait 06',
    '1/2 trait 01',
    '1/2 trait 02',
    '1/2 trait 03',
    '1/2 trait 04',
    '1/2 trait 05',
    '1/2 trait 06',
    '1/2 trait 07',
    '1/2 trait 08',
    '1/2 trait 09',
    '1/2 trait 10',
    '1/2 trait 11',
    '1/2 trait 12',
    'courbe 01',
    'courbe 02',
    'courbe 03',
    'courbe 04',
    'courbe 05',
    'courbe 06',
    'courbe 07',
    'courbe 08',
    'courbe 09',
    'courbe 10',
    'courbe 11',
    'courbe 12',
    'courbe 13',
    'courbe 14',
    'courbe 15',
    'courbe 16',
    'courbe 17',
    'courbe 18',
    'courbe 19',
    'courbe 20',
    'parabole 01',
    'parabole 02',
    'parabole 03',
    'parabole 04',
    '1/4 courbe 01',
    '1/4 courbe 02',
    '1/4 courbe 03',
    '1/4 courbe 04',
    '1/4 courbe 05',
    '1/4 courbe 06',
    '1/4 courbe 07',
    '1/4 courbe 08',
    '1/4 courbe 09',
    '1/4 courbe 10',
    '1/4 courbe 11',
    '1/4 courbe 12',
    '1/2 diagonale 01',
    '1/2 diagonale 02',
    '1/2 diagonale 03',
    '1/2 diagonale 04',
    '1/2 diagonale 05',
    '1/2 diagonale 06',
    '1/2 diagonale 07',
    '1/2 diagonale 08',
    'diagonale 01',
    'diagonale 02',
    'diagonale 03',
    'diagonale 04',
    'diagonale 05',
    'diagonale 06',
    'diagonale 07',
    'diagonale 08',
    'diagonale 09',
    'diagonale 10',
  ];

  context.BIB = {
    SHAPES: shapes,
    WEIGHTS: weights,
  };
})(this);

(function(context){
  /** FUCK THIS ES3 SHIT GET YOUR FUCKING SHIT TOGETHER ADOBE **/

  var document = app.activeDocument;

  var CONSTANTS = {
    PATH_SEP: '/',
  };

  var ExportOptionsSvgConstructor = function() {
    var opts = new ExportOptionsSVG();
    opts.documentEncoding = SVGDocumentEncoding.UTF8;
    opts.saveMultipleArtboards = false;
    opts.artBoardClipping = true;
    return opts;
  };

  var ExportOptionsJPEGSDConstructor = function() {
    var options = new ExportOptionsJPEG();
    options.antiAliasing = true;
    options.qualitySetting = 100;
    options.artBoardClipping = true;
    options.verticalScale = 100.0;
    options.horizontalScale = 100.0;
    return options;
  };

  var ExportOptionsJPEGHDConstructor = function() {
    var options = new ExportOptionsJPEG();
    options.antiAliasing = true;
    options.qualitySetting = 95;
    options.artBoardClipping = true;
    options.verticalScale = 300.0;
    options.horizontalScale = 300.0;
    return options;
  };

  var mkdir = function(dir) {
    var f = new Folder(dir);
    if (!f.exists) {
      f.create();
    }
  };

  var mkpathHD = function(pathComponents, file) {
    var paths = {
      folder: [pathComponents, 'HD'].join(CONSTANTS.PATH_SEP),
    };
    mkdir(paths.folder);
    if (file) {
      var b = [pathComponents, 'HD'];
      b.push(file);
      paths.file = b.join(CONSTANTS.PATH_SEP);
    }
    return paths;
  };

  var mkpathSD = function(pathComponents, file) {
    var paths = {
      folder: [pathComponents, 'SD'].join(CONSTANTS.PATH_SEP),
    };
    mkdir(paths.folder);
    if (file) {
      var b = [pathComponents, 'SD'];
      b.push(file);
      paths.file = b.join(CONSTANTS.PATH_SEP);
    }
    return paths;
  };

  var exportFileAsSvg = function(folder, filename, params) {
    var optsHD = ExportOptionsJPEGHDConstructor();
    var optsSD = ExportOptionsJPEGSDConstructor();
    var fileHD = new File(mkpathHD(folder, filename).file);
    var fileSD = new File(mkpathSD(folder, filename).file);
    document.exportFile(fileHD, ExportType.JPEG, optsHD);
    document.exportFile(fileSD, ExportType.JPEG, optsSD);
  };

  var forEach = function(collection, fn)
  {
      var n = collection.length;
      for(var i=0; i<n; ++i)
      {
          fn(collection[i], i);
      }
  };

  var hideAllLayers = function()
  {
      forEach(document.layers, function(layer) {
          layer.visible = false;
      });
  };

  var showAllLayers = function()
  {
      forEach(document.layers, function(layer) {
          layer.visible = true;
      });
  };

  var writeMetadataJson = function(folder, meta) {
    var name = 'metadata.json';
    var path = [folder, name].join(CONSTANTS.PATH_SEP);
    var file = new File(path);
    file.open('w');
    file.write(JSON.stringify(meta));
    file.close();
  };

  var leftPad = function(str, character, nb, limit) {
      var s = str.toString();
      var l = s.length;
      while (s.length < l + nb && s.length < limit) {
        s = character + s;
      }
      return s;
  };

  var getUserInt = function(message, def) {
    if (!def) {
      var def = 0;
    }
    return parseInt(prompt(message, def), 10);
  };

  var getUserIntArray = function(message) {
    var def = [];
    var tmp = prompt(message, '').split(',');
    forEach(tmp, function(member, index) {
      if (member.indexOf('...') === -1) {
        def.push(parseInt(member, 10));
        return;
      }
      var m = member.split('...');
      var start = parseInt(m[0], 10);
      var end = parseInt(m[1], 10);
      for (var z = start; z < end; z++) {
        def.push(z);
      }
      def.push(end);
    });
    return def;
  };

  var getUserString = function(message, def) {
    if (!def) {
      var def = '';
    }
    return prompt(message, def);
  };

  var inf = function(message) {
    alert(message.join(' '));
  };

  var buildFileName = function(famille, graisse, glyphe) {
    return [famille, graisse, glyphe].join('__');
  };

  var getFamily = function() {
    var fam = 127;
    while(isUndef(context.BIB.FAMILIES[fam])) {
      fam = getUserInt('Entrez le code de la famille a exporter');
    }
    return fam;
  };

  var getWeightIndex = function(layer) {
    var name = layer.name;
    var weights = context.BIB.WEIGHTS;
    var weight = findIndex(weights, function(weightything, i) {
      return weightything === name;
    });
    return weight;
  };

  var getShapeIndex = function(artboard) {
    var name = artboard.name;
    var shapes = context.BIB.SHAPES;
    var shape = findIndex(shapes, function(shapeything) {
      return shapeything === name;
    });
    return shape;
  };

  var getShapeName = function(index) {
    var shapes = context.BIB.SHAPES;
    return shapes[index];
  };

  var isUndef = function(candidate) {
    return typeof candidate === 'undefined';
  }

  var notUndef = function(candidate) {
    return typeof candidate !== 'undefined';
  };

  var findIndex = function(haystack, predicate) {
    var l = haystack.length;
    var flag = false;
    for (var i = 0; i < l; i++) {
      if (predicate(haystack[i], i)) {
        flag = true;
        break;
      }
    }
    if (flag) {
      return i;
    }
    return undefined;
  };

  var loopLayers = function(callback) {
    var n = document.layers.length;
    var layers = document.layers;
    for (var i = 0; i < n; i++) {
      var layer = layers[i];
      hideAllLayers();
      if (!layer.locked && notUndef(getWeightIndex(layer))) {
        callback(document.layers[i], i);
      }
    }
  };

  var testExport = function() {
    hideAllLayers();
    var layers = document.layers;
    layers[0].visible = true;
    var artboards = document.artboards;
    artboards.setActiveArtboardIndex(0);
    var artboard = artboards[0];
    var file = new File('~/Desktop/test');
    var opts = new ExportOptionsJPEGConstructor();
    opts.artBoardClipping = true;
    document.exportFile(file, ExportType.JPEG, opts);
  };

  var loopArtboards = function(callback) {
    var n = document.artboards.length;
    var artboards = document.artboards;
    for (var i = 0; i < n; i++) {
      var artboard = artboards[i];
      artboards.setActiveArtboardIndex(i);
      callback(artboard, i);
    }
  };

  var isArtboardEmpty = function(artboard) {
    return artboard.pageItems.length;
  };

  context.u = {
    forEach: forEach,
    hideAllLayers: hideAllLayers,
    showAllLayers: showAllLayers,
    leftPad: leftPad,
    mkdir: mkdir,
    exportFileAsSvg: exportFileAsSvg,
    getUserInt: getUserInt,
    getUserIntArray: getUserIntArray,
    getUserString: getUserString,
    inf: inf,
    buildFileName: buildFileName,
    getFamily: getFamily,
    loopLayers: loopLayers,
    loopArtboards: loopArtboards,
    getWeightIndex: getWeightIndex,
    getShapeIndex: getShapeIndex,
    getShapeName: getShapeName,
    testExport: testExport,
    writeMetadataJson: writeMetadataJson,
  };
})(this);

/*
 /!\ Masquer les calques à ne pas exporter
*/
var _ = this;

if (app.documents.length > 0) {
    main();
}


function main() {
    var document = app.activeDocument;
    var afile = document.fullName;
    var folder = afile.parent.selectDlg("Exporter la matrice");
    if (folder != null) {
      var familleIndex = _.u.getUserInt('Entrez le code de la famille (cf.tableau excel)', 0);
      var famille = _.u.getUserString('Entrez le nom de la famille (cf.tableau excel)', '');
      var graisse = '';
      var graisseIndex = 0;
      var forme = '';
      var formeIndex = 0;
      var meta = {
        name: famille,
        index: familleIndex,
        weights: [],
      };
      _.u.hideAllLayers();
      _.u.loopLayers(function(layer, a) {
        layer.visible = true;
        graisse = layer.name;
        _.u.inf(['Export de la graisse', graisse]);
        graisseIndex = _.u.getWeightIndex(layer);
        var missingGlyphs = _.u.getUserIntArray('Entrez les glyphes manquants de la graisse ' + graisse);
        var acceptsTextures = _.u.getUserInt('Cette graisse accepte les textures ? oui = 1, non = 0', 1);
        meta.weights.push({
          weight: graisse,
          missing: missingGlyphs,
          textures:  acceptsTextures,
        });
        _.u.loopArtboards(function(artboard, b) {
          formeIndex = _.u.getShapeIndex(artboard);
          forme = _.u.getShapeName(formeIndex);
          if (missingGlyphs.indexOf(formeIndex) === -1) {
            _.u.exportFileAsSvg(folder, _.u.buildFileName(familleIndex, graisseIndex, formeIndex));
          }
        });
      });
      _.u.writeMetadataJson(folder, meta);
    } else alert(':(');
}
