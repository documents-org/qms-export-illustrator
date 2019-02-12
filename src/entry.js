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
        textures: acceptsTextures,
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
