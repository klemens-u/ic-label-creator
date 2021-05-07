/**
 * (C) Klemens Ullmann-Marx / www.ull.at
 * License: GPLv3
 */

/**
  * Draw Chip by name
  */
function drawChip(chipName) {
  
  console.log('=== ' + chipName);
  
  var chip = chips[chipName];
  var numPins = Object.keys(chip.pins).length;
  var chipWidth = numPins / 2 * globals.pinDistance + 1;
  var chipHeightPins = ('heightPins' in chip) ? chip.heightPins : 3;
  var chipHeight = chipHeightPins * globals.pinDistance;
  
  var $page = $('#page');
  
  // CREATE BASE SVG ELEMENT FOR CHIP
  // jQuery won't render svg elements without namespace url
  var svgChip = $(document.createElementNS("http://www.w3.org/2000/svg", 'svg')).attr({
    width: chipWidth + 'mm',
    height: chipHeight + 'mm',
    x: globals.chipPositionX + 'mm',
    y: globals.chipPositionY + 'mm',
  });
  
  // DRAW CHIP OUTLINE
  svgChip.append($(document.createElementNS("http://www.w3.org/2000/svg", 'rect')).attr({
    x : globals.svgStrokeOffset + 'mm',
    y : globals.svgStrokeOffset + 'mm',
    width: chipWidth - globals.svgStrokeOffset + 'mm',
    height: chipHeight - globals.svgStrokeOffset + 'mm',
    stroke: 'silver',
    'stroke-width': globals.svgStrokeWidth + 'mm',
    fill: 'white'
  }));
  
  // DRAW HALFCIRCLE MARKER
  svgChip.append($(document.createElementNS("http://www.w3.org/2000/svg", 'circle')).attr({
    cx : 0,
    cy : '50%',
    r  : '1.2mm',
    fill: 'grey'
  }));
  
  // DRAW CHIP MODEL + DESCRIPTION
  svgChip.append($(document.createElementNS("http://www.w3.org/2000/svg", 'text'))
    .html('&nbsp;&nbsp;' + chipName + ' ' + chip.description)
    .attr({
      x : '50%',
      y : chipHeight / 2 + .2  + 'mm',
      'dominant-baseline': 'middle',
      'text-anchor': 'middle',
      'font-family' : 'sans-serif',
      'font-size' : '1.6mm',
      'font-weight' : 'bold',
      fill: chipColor(chip.type),
    })
  );
  
  // DRAW PINS
  var x = globals.pinDistance / 2 + .5;
  jQuery.each(chip.pins, function (pinNum, pinName) {
    
    // bottom side
    if (pinNum <= numPins / 2) {
      drawPin({
        x: x,
        chipHeight: chipHeight,
        chipHeightPins: chipHeightPins,
        svgChip: svgChip,
        side: 'bottom',
        pinName: pinName,
      });
      x += globals.pinDistance;

    // top side
    } else {
      x = x - globals.pinDistance;
      drawPin({
        x: x,
        chipHeight: chipHeight,
        chipHeightPins: chipHeightPins,
        svgChip: svgChip,
        side: 'top',
        pinName: pinName,
      });
    }
    
  }); // end of for each pin
  
  // DRAW CURRENT CHIP TO page
  $('#page').append(svgChip);
  
  // UPDATE POSITION FOR NEXT CHIP
  globals.chipPositionY += chipHeight + 4;
  
  // Begin new column
  if (globals.chipPositionY + 10 > globals.pageHeight) {
    globals.chipPositionY = 0;
    globals.chipPositionX += 50;
  }
}

/**
 * Draw a single pin on an IC.
 */
function drawPin(pinData) {
  if (pinData.pinName.startsWith('/')) {
    pinData.activeLow = true;
    pinData.pinName = pinData.pinName.substring(1)
  }
  if (pinData.side === 'bottom') {
    pinData.svgChip.append($(document.createElementNS("http://www.w3.org/2000/svg", 'text'))
      .html(pinData.pinName)
      .attr({
        x: 0,
        y: 0,
        'text-decoration': pinData.activeLow ? 'overline' : '',
        'dominant-baseline': 'baseline',
        'text-anchor': 'start',
        'font-family': 'sans-serif',
        'font-size': fontSize(pinData.pinName, pinData.chipHeightPins),
        style: 'transform: rotate(270deg) translate(-' + (pinData.chipHeight - .2) + 'mm, ' + (pinData.x + .6) + 'mm);',
      })
    );
  } else {
    pinData.svgChip.append($(document.createElementNS("http://www.w3.org/2000/svg", 'text'))
      .html(pinData.pinName)
      .attr({
        x: 0,
        y: 0,
        'text-decoration': pinData.activeLow ? 'overline' : '',
        'dominant-baseline': 'baseline',
        'text-anchor': 'end',
        'font-family': 'sans-serif',
        'font-size': fontSize(pinData.pinName, pinData.chipHeightPins),
        style: 'transform: rotate(270deg) translate(-.3mm, ' + (pinData.x + .7) + 'mm);',
      })
    );
  }
}

/**
  * Calculate font size according to pinName string length
  */ 
function fontSize(pinName, chipHeightPins) {
  
  // We don't need font scaling for larger chips
  if (chipHeightPins > 3) {
    return '1.6mm';
  }
  
  // Do some handstands for multibyte chars
  var length = countPinNameChars(pinName);
  
  if (length <=2) {
    return '1.6mm';
  }
  
  if (length <=3) {
    return '1.4mm';
  }
  
  return '1.1mm';
}


/**
  * Count string length without overline multibytes 
  */
function countPinNameChars(pinName) {
  // Escape multibyte chars (and others)
  var uriEncoded = encodeURIComponent(pinName)
  // Remove overline multibyte chars
  var overlineReplaced = uriEncoded.split('%CC%85').join('');
  // Re-decode for other encoded chars like "+", "⏚"
  var uriDecoded = decodeURIComponent(overlineReplaced);
  
  return uriDecoded.length;
}


/**
 * Color chip titel 
 */
function chipColor(type) {
  
  if (globals.gimmeColor == false) {
    return 'black';
  }
  
  if (['ram', 'sram', 'eeprom', 'register', 'flipflop'].includes(type)) {
    return 'red';
  }
  
  if (['gate'].includes(type)) {
    return 'blue';
  }
  
  if (['mux', 'demux', 'via'].includes(type)) {
    return 'green';
  }
  
  if (['counter'].includes(type)) {
    return 'magenta';
  }    
  
  if (['cpu'].includes(type)) {
    return 'darkorange';
  }
  
  return 'black';
}
