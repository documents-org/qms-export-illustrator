(function(context) {

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

  var forEach = function(collection, fn) {
    var n = collection.length;
    for (var i = 0; i < n; ++i) {
      fn(collection[i], i);
    }
  };

  var hideAllLayers = function() {
    forEach(document.layers, function(layer) {
      layer.visible = false;
    });
  };

  var showAllLayers = function() {
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
    while (isUndef(context.BIB.FAMILIES[fam])) {
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
