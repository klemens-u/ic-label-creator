/*
 * Chip library
 *
 *
 * Create overlines with a leading slash "/"
 * Example: "/EN"
 *
 * Always use "74LS" as default/placeholder. You can override the series and
 * silicon type in the drawChip() function
 *
 * Also supported are unicode overlays: https://fsymbols.com/generators/overline/
 * TODO: convert older pinouts from unicode to slash prefix
 *
 * (C) Klemens Ullmann-Marx / www.ull.at and contributors
 * License: GPLv3
 */

var chips = {

  '74LS00' : {
    description : '4xNAND',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'B1',
      3 : 'Y1',
      4 : 'A2',
      5 : 'B2',
      6 : 'Y2',
      7 : '⏚',

      8 : 'Y3',
      9 : 'A3',
      10: 'B3',
      11: 'Y4',
      12: 'A4',
      13: 'B4',
      14: '+',
    },
  },

  '74LS01' : {
    description : '4xNAND (hiZ)',
    type: 'gate',
    pins: {
      1 : 'Y1',
      2 : 'A1',
      3 : 'B1',
      4 : 'Y2',
      5 : 'A2',
      6 : 'B2',
      7 : '⏚',

      8 : 'A3',
      9 : 'B3',
      10: 'Y3',
      11: 'A4',
      12: 'B4',
      13: 'Y4',
      14: '+',
    },
  },

  '74LS02' : {
    description : '4xNOR',
    type: 'gate',
    pins: {
      1 : 'Y1',
      2 : 'A1',
      3 : 'B1',
      4 : 'Y2',
      5 : 'A2',
      6 : 'B2',
      7 : '⏚',

      8 : 'A3',
      9 : 'B3',
      10: 'Y3',
      11: 'A4',
      12: 'B4',
      13: 'Y4',
      14: '+',
    },
  },

  '74LS04' : {
    description : '6xNOT',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'Y1',
      3 : 'A2',
      4 : 'Y2',
      5 : 'A3',
      6 : 'Y3',
      7 : '⏚',

      8 : 'Y4',
      9 : 'A4',
      10: 'Y5',
      11: 'A5',
      12: 'Y6',
      13: 'A6',
      14: '+',
    },
  },

  '74LS07' : {
    description : '6x Buffer',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'Y1',
      3 : 'A2',
      4 : 'Y2',
      5 : 'A3',
      6 : 'Y3',
      7 : '⏚',

      8 : 'Y4',
      9 : 'A4',
      10: 'Y5',
      11: 'A5',
      12: 'Y6',
      13: 'A6',
      14: '+',
    },
  },

  '74LS08' : {
    description : '4xAND',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'B1',
      3 : 'Y1',
      4 : 'A2',
      5 : 'B2',
      6 : 'Y2',
      7 : '⏚',

      8 : 'Y3',
      9 : 'A3',
      10: 'B3',
      11: 'Y4',
      12: 'A4',
      13: 'B4',
      14: '+',
    },
  },

  '74LS14' : {
    description : '6x⎎NOT',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'Y1',
      3 : 'A2',
      4 : 'Y2',
      5 : 'A3',
      6 : 'Y3',
      7 : '⏚',

      8 : 'Y4',
      9 : 'A4',
      10: 'Y5',
      11: 'A5',
      12: 'Y6',
      13: 'A6',
      14: '+',
    },
  },

  '74LS32' : {
    description : '4xOR',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'B1',
      3 : 'Y1',
      4 : 'A2',
      5 : 'B2',
      6 : 'Y2',
      7 : '⏚',

      8 : 'Y3',
      9 : 'A3',
      10: 'B3',
      11: 'Y4',
      12: 'A4',
      13: 'B4',
      14: '+',
    },
  },

  '74LS74' : {
    description: '2xD-FF',
    type: 'flipflop',
    pins: {
      1: '1C̅L̅R̅',
      2: '1D',
      3: '1CLK',
      4: '1P̅R̅E̅',
      5: '1Q',
      6: '1Q̅',
      7: '⏚',

      8:  '2C̅L̅R̅',
      9:  '2D',
      10: '2CLK',
      11: '2P̅R̅E̅',
      12: '2Q',
      13: '2Q̅',
      14:  '+',
    }
  },

  '74LS86' : {
    description : '4xXOR',
    type: 'gate',
    pins: {
      1 : 'A1',
      2 : 'B1',
      3 : 'Y1',
      4 : 'A2',
      5 : 'B2',
      6 : 'Y2',
      7 : '⏚',

      8 : 'Y3',
      9 : 'A3',
      10: 'B3',
      11: 'Y4',
      12: 'A4',
      13: 'B4',
      14: '+',
    },
  },

  '74LS107' : {
    description : '2xJK-FF',
    type: 'flipflop',
    pins: {
      1 : '1J',
      2 : '1Q̅',
      3 : '1Q',
      4 : '1K',
      5 : '2Q',
      6 : '2Q̅',
      7 : '⏚',

      8 : '2J',
      9 : '2CLK',
      10: '2C̅L̅R̅',
      11: '2K',
      12: '1CLK',
      13: '1C̅L̅R̅',
      14: '+',
    },
  },

  '74LS138' : {
    description : '3to8 Decod',
    type: 'demux',
    pins: {
      1 : 'A',
      2 : 'B',
      3 : 'C',
      4 : 'E̅N̅1',
      5 : 'E̅N̅2',
      6 : 'EN3',
      7 : 'O̅7',
      8 : '⏚',

      9 : 'O̅6',
      10: 'O̅5',
      11: 'O̅4',
      12: 'O̅3',
      13: 'O̅2',
      14: 'O̅1',
      15: 'O̅0',
      16: '+',
    },
  },

  '74LS139' : {
    description : '2x2to4 Dec',
    type: 'demux',
    pins: {
      1 : 'A',
      2 : 'B',
      3 : 'C',
      4 : 'G2A',
      5 : 'G2B',
      6 : 'G1',
      7 : 'Y7',
      8 : '⏚',

      9 : 'Y6',
      10: 'Y5',
      11: 'Y4',
      12: 'Y3',
      13: 'Y2',
      14: 'Y1',
      15: 'Y0',
      16: '+',
    },
  },

  '74LS153' : {
    description : '2x4to1 MUX',
    type: 'mux',
    pins: {
      1 : '/EnA',
      2 : 'S0',
      3 : 'A3',
      4 : 'A2',
      5 : 'A1',
      6 : 'A0',
      7 : 'YA',
      8 : '⏚',

      9 : 'YB',
      10: 'B0',
      11: 'B1',
      12: 'B2',
      13: 'B3',
      14: 'S1',
      15: '/EnB',
      16: '+',
    },
  },

  '74LS157' : {
    description : '4x2to1 MUX',
    type: 'mux',
    pins: {
      1 : 'S',
      2 : 'A1',
      3 : 'B1',
      4 : 'Y1',
      5 : 'A2',
      6 : 'B2',
      7 : 'Y2',
      8 : '⏚',

      9 : 'Y3',
      10: 'B3',
      11: 'A3',
      12: 'Y4',
      13: 'B4',
      14: 'A4',
      15: '/EN',
      16: '+',
    },
  },

  '74LS161' : {
    description : '4bit Count',
    type: 'counter',
    pins: {
      1 : '/CLR',
      2 : 'CLK',
      3 : 'A',
      4 : 'B',
      5 : 'C',
      6 : 'D',
      7 : '/ENP',
      8 : '⏚',

      9 : '/LD',
      10: '/ENT',
      11: 'QD',
      12: 'QC',
      13: 'QB',
      14: 'QA',
      15: 'CAR',
      16: '+',
    },
  },

  '74LS164': {
    description: '8b shift reg',
    type: 'flipflop',
    pins: {
      1: 'A',
      2: 'B',
      3: 'QA',
      4: 'QB',
      5: 'QC',
      6: 'QD',
      7: '⏚',

      8:  'CLK',
      9:  'C̅L̅R̅',
      10: 'QE',
      11: 'QF',
      12: 'QG',
      13: 'QH',
      14: '+',
    }
  },

  '74LS169' : {
    description : '4b Cnt ↑/↓',
    type: 'counter',
    pins: {
      1 : 'U/D̅',
      2 : 'CLK',
      3 : 'A',
      4 : 'B',
      5 : 'C',
      6 : 'D',
      7 : '/ENP',
      8 : '⏚',

      9 : '/LD',
      10: '/ENT',
      11: 'QD',
      12: 'QC',
      13: 'QB',
      14: 'QA',
      15: 'CAR',
      16: '+',
    },
  },

  '74LS173' : {
    description : '4bit Regist.',
    datasheet: 'http://www.ti.com/lit/ds/symlink/sn54173.pdf',
    type: 'register',
    pins: {
      1 : 'OE1',
      2 : 'OE2',
      3 : '1Q',
      4 : '2Q',
      5 : '3Q',
      6 : '4Q',
      7 : 'CLK',
      8 : '⏚',

      9 : '/IE1',
      10: '/IE2',
      11: '1D',
      12: '1C',
      13: '1B',
      14: '1A',
      15: 'CLR',
      16: '+',
    },
  },

  '74LS175' : {
    description: '4xD-FF',
    type: 'flipflop',
    pins: {
      1: 'C̅L̅R̅',
      2: '1Q',
      3: '1Q̅',
      4: '1D',
      5: '2D',
      6: '2Q̅',
      7: '2Q',
      8: '⏚',

      9:  'CLK',
      10: '3Q',
      11: '3Q̅',
      12: '3D',
      13: '4D',
      14: '4Q̅',
      15: '4Q',
      16:  '+',
    }
  },

  '74189' : {
    description : '64bit RAM',
    type: 'ram',
    pins: {
      1 : 'A0',
      2 : 'ME',
      3 : 'WE',
      4 : 'D1',
      5 : 'S1',
      6 : 'D2',
      7 : 'S2',
      8 : '⏚',

      9 : 'S3',
      10: 'D3',
      11: 'S4',
      12: 'D4',
      13: 'A3',
      14: 'A2',
      15: 'A1',
      16: '+',
    },
  },

  '74LS193' : {
    description : '4b Cnt ↑/↓',
    type: 'counter',
    pins: {
      1 : 'B',
      2 : 'QB',
      3 : 'QA',
      4 : 'DN',
      5 : 'UP',
      6 : 'QC',
      7 : 'QD',
      8 : '⏚',

      9 : 'D',
      10: 'C',
      11: 'L̅D̅',
      12: 'C̅A̅R̅',
      13: 'B̅O̅R̅',
      14: 'CLR',
      15: 'A',
      16: '+',
    },
  },


  '74LS244' : {
    description : '8bit Buf/Linedrv',
    type: 'buffer',
    pins: {
      1 : '1̅E̅N̅',
      2 : '1A1',
      3 : '2Y4',
      4 : '1A2',
      5 : '2Y3',
      6 : '1A3',
      7 : '2Y2',
      8 : '1A4',
      9 : '2Y1',
      10: '⏚',

      11: '2A1',
      12: '1Y4',
      13: '2A2',
      14: '1Y3',
      15: '2A3',
      16: '1Y2',
      17: '2A4',
      18: '1Y1',
      19: '2̅E̅N̅',
      20: '+',
    },
  },

  '74LS245' : {
    description : '8bit Bus Transcv',
    type: 'bus-transceiver',
    pins: {
      1 : '<̅ >',
      2 : 'A1',
      3 : 'A2',
      4 : 'A3',
      5 : 'A4',
      6 : 'A5',
      7 : 'A6',
      8 : 'A7',
      9 : 'A8',
      10: '⏚',

      11: 'B8',
      12: 'B7',
      13: 'B6',
      14: 'B5',
      15: 'B4',
      16: 'B3',
      17: 'B2',
      18: 'B1',
      19: 'E̅N̅',
      20: '+',
    },
  },

  '74LS273' : {
    description : '8bit Register',
    type: 'register',
    pins: {
      1 : 'C̅L̅R̅',
      2 : 'Q0',
      3 : 'D0',
      4 : 'D1',
      5 : 'Q1',
      6 : 'Q2',
      7 : 'D2',
      8 : 'D3',
      9 : 'Q3',
      10: '⏚',

      11: 'CLK',
      12: 'Q4',
      13: 'D4',
      14: 'D5',
      15: 'Q5',
      16: 'Q6',
      17: 'D6',
      18: 'D7',
      19: 'Q7',
      20: '+',
    },
  },

  '74LS283' : {
    description : '4bit Adder',
    type: 'adder',
    pins: {
      1 : '∑2',
      2 : 'B2',
      3 : 'A2',
      4 : '∑1',
      5 : 'A1',
      6 : 'B1',
      7 : 'CRI',
      8 : '⏚',
      9 : 'CRO',
      10: '∑4',
      11: 'B4',
      12: 'A4',
      13: '∑3',
      14: 'A3',
      15: 'B3',
      16: '+',
    },
  },


  '7130LA' : {
    description : '1Kx8 SRAM (1KB)',
    type: 'ram',
    heightPins: 6,
    pins: {
      1 : 'C̅E̅',
      2 : 'R/W̅',
      3 : 'B̅S̅Y̅',
      4 : 'I̅N̅T̅',
      5 : 'O̅E̅',
      6 : 'A0',
      7 : 'A1',
      8 : 'A2',
      9 : 'A3',
      10: 'A4',
      11: 'A5',
      12: 'A6',
      13: 'A7',
      14: 'A8',
      15: 'A9',
      16: 'IO0',
      17: 'IO1',
      18: 'IO2',
      19: 'IO3',
      20: 'IO4',
      21: 'IO5',
      22: 'IO6',
      23: 'IO7',
      24: '⏚',

      25: 'IO0',
      26: 'IO1',
      27: 'IO2',
      28: 'IO3',
      29: 'IO4',
      30: 'IO5',
      31: 'IO6',
      32: 'IO7',
      33: 'A9',
      34: 'A8',
      35: 'A7',
      36: 'A6',
      37: 'A5',
      38: 'A4',
      39: 'A3',
      40: 'A2',
      41: 'A1',
      42: 'A0',
      43: 'O̅E̅',
      44: 'I̅N̅T̅',
      45: 'B̅S̅Y̅',
      46: 'R/W̅',
      47: 'C̅E̅',
      48: '+',
    },
  },


  '28C16' : {
    description : '2Kx8 EEPROM (2KB)',
    type: 'eeprom',
    heightPins: 6,
    pins: {
      1 : 'A7',
      2 : 'A6',
      3 : 'A5',
      4 : 'A4',
      5 : 'A3',
      6 : 'A2',
      7 : 'A1',
      8 : 'A0',
      9 : 'IO0',
      10: 'IO1',
      11: 'IO2',
      12: '⏚',

      13: 'IO3',
      14: 'IO4',
      15: 'IO5',
      16: 'IO6',
      17: 'IO7',
      18: 'C̅E̅',
      19: 'A10',
      20: 'O̅E̅',
      21: 'W̅E̅',
      22: 'A9',
      23: 'A8',
      24: '+',
    },
  },

  '28C64' : {
    description : '8Kx8 EEPROM (8KB)',
    type: 'eeprom',
    heightPins: 6,
    pins: {
      1 : '--',
      2 : 'A12',
      3 : 'A7',
      4 : 'A6',
      5 : 'A5',
      6 : 'A4',
      7 : 'A3',
      8 : 'A2',
      9 : 'A1',
      10: 'A0',
      11: 'IO0',
      12: 'IO1',
      13: 'IO2',
      14: '⏚',

      15: 'IO3',
      16: 'IO4',
      17: 'IO5',
      18: 'IO6',
      19: 'IO7',
      20: 'C̅E̅',
      21: 'A10',
      22: 'O̅E̅',
      23: 'A11',
      24: 'A9',
      25: 'A8',
      26: '--',
      27: 'W̅E̅',
      28: '+',
    },
  },

  '74LS595' : {
    description : '8b Shift Reg',
    type: 'flipflop',
    pins: {
      1 : 'QB',
      2 : 'QC',
      3 : 'QD',
      4 : 'QE',
      5 : 'QF',
      6 : 'QG',
      7 : 'QH',
      8 : '⏚',

      9 : "QH'",
      10: 'S̅C̅L̅R̅',
      11: 'SCLK',
      12: 'RCLK',
      13: 'O̅E̅',
      14: 'SER',
      15: 'QA',
      16: '+',
    },
  },

  '555' : {
    description : '',
    type: 'analog',
    heightPins: 3,
    pins: {
      1 : '⏚',
      2 : '/TRI',
      3 : 'OUT',
      4 : '/RST',
      5 : 'CTV',
      6 : 'THR',
      7 : 'DCH',
      8 : '+',
    },
  },

  'C555' : {
    description : '',
    type: 'analog',
    heightPins: 3,
    pins: {
      1 : '⏚',
      2 : '/TRI',
      3 : 'OUT',
      4 : '/RST',
      5 : 'CTV',
      6 : 'THR',
      7 : 'DCH',
      8 : '+',
    },
  },

  'W65C02' : {
    description : 'CPU',
    type: 'cpu',
    heightPins: 6,
    pins: {
      1 : 'VPB',
      2 : 'RDY',
      3 : 'PHI1O',
      4 : 'IRQB',
      5 : 'MLB',
      6 : 'NMIB',
      7 : 'SYNC',
      8 : '+',
      9 : 'A0',
      10: 'A1',
      11: 'A2',
      12: 'A3',
      13: 'A4',
      14: 'A5',
      15: 'A6',
      16: 'A7',
      17: 'A8',
      18: 'A9',
      19: 'A10',
      20: 'A11',

      21: '⏚',
      22: 'A12',
      23: 'A13',
      24: 'A14',
      25: 'A15',
      26: 'D7',
      27: 'D6',
      28: 'D5',
      29: 'D4',
      30: 'D3',
      31: 'D2',
      32: 'D1',
      33: 'D0',
      34: 'RWB',
      35: 'NC',
      36: 'BE',
      37: 'PHI2',
      38: 'SOB',
      39: 'PHI2O',
      40: 'RESB',
    },
  },

  'W65C22' : {
    description : 'VIA',
    type: 'via',
    heightPins: 6,
    pins: {
      1 : '⏚',
      2 : 'PA0',
      3 : 'PA1',
      4 : 'PA2',
      5 : 'PA3',
      6 : 'PA4',
      7 : 'PA5',
      8 : 'PA6',
      9 : 'PA7',
      10: 'PB0',
      11: 'PB1',
      12: 'PB2',
      13: 'PB3',
      14: 'PB4',
      15: 'PB5',
      16: 'PB6',
      17: 'PB7',
      18: 'CB1',
      19: 'CB2',
      20: '+',

      21: 'IRQB',
      22: 'RWB',
      23: 'CS2B',
      24: 'CS1',
      25: 'PHI2',
      26: 'D7',
      27: 'D6',
      28: 'D5',
      29: 'D4',
      30: 'D3',
      31: 'D2',
      32: 'D1',
      33: 'D0',
      34: 'RESB',
      35: 'RS3',
      36: 'RS2',
      37: 'RS1',
      38: 'RS0',
      39: 'CA2',
      40: 'CA1',
    },
  },

  '28C256' : {
    description : '32Kx8 EEPROM',
    type: 'eeprom',
    heightPins: 6,
    pins: {
      1 : 'A14',
      2 : 'A12',
      3 : 'A7',
      4 : 'A6',
      5 : 'A5',
      6 : 'A4',
      7 : 'A3',
      8 : 'A2',
      9 : 'A1',
      10: 'A0',
      11: 'I/O0',
      12: 'I/O1',
      13: 'I/O2',
      14: '⏚',

      15: 'I/O3',
      16: 'I/O4',
      17: 'I/O5',
      18: 'I/O6',
      19: 'I/O7',
      20: 'C̅E̅',
      21: 'A10',
      22: 'O̅E̅',
      23: 'A11',
      24: 'A9',
      25: 'A8',
      26: 'A13',
      27: 'W̅E̅',
      28: '+',
    },
  },

  '62256' : {
    description : '32Kx8 SRAM (256K)',
    type: 'sram',
    heightPins: 6,
    pins: {
      1 : 'A14',
      2 : 'A12',
      3 : 'A7',
      4 : 'A6',
      5 : 'A5',
      6 : 'A4',
      7 : 'A3',
      8 : 'A2',
      9 : 'A1',
      10: 'A0',
      11: 'I/O0',
      12: 'I/O1',
      13: 'I/O2',
      14: '⏚',

      15: 'I/O3',
      16: 'I/O4',
      17: 'I/O5',
      18: 'I/O6',
      19: 'I/O7',
      20: 'C̅E̅',
      21: 'A10',
      22: 'O̅E̅',
      23: 'A11',
      24: 'A9',
      25: 'A8',
      26: 'A13',
      27: 'W̅E̅',
      28: '+',
    },
  },

  '7C128A' : {
    description : '2Kx8 SRAM (16K)',
    type: '',
    heightPins: 3,
    pins: {
      1 : 'A7',
      2 : 'A6',
      3 : 'A5',
      4 : 'A4',
      5 : 'A3',
      6 : 'A2',
      7 : 'A1',
      8 : 'A0',
      9 : 'IO0',
      10: 'IO1',
      11: 'IO2',
      12: '⏚',

      13: 'IO3',
      14: 'IO4',
      15: 'IO5',
      16: 'IO6',
      17: 'IO7',
      18: '/CE',
      19: 'A10',
      20: '/OE',
      21: '/WE',
      22: 'A9',
      23: 'A8',
      24: '+',
    },
  },

  // empty template
  ' ' : {
    description : '',
    type: '',
    heightPins: 3,
    pins: {
      1 : '',
      2 : '',
      3 : '',
      4 : '',
      5 : '',
      6 : '',
      7 : '',
      8 : '',
      9 : '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: '',
      16: '',
      17: '',
      18: '',
      19: '',
      20: '',
      21: '',
      22: '',
      23: '',
      24: '',
    },
  },

};  // end of var "chips"
