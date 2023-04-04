/** @format */

import {hyper} from './src'
import {lemon} from './src'
import {slate} from './src'
import {sapphire} from './src'
import {volt} from './src'

import {grays, pales} from './src'

export const kitColorPalette = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#000000',

  ...grays,
  ...pales,

  gray100: grays.lite,
  gray200: grays.dark,
  gray300: grays.darkdark,

  pale100: pales.saintblue,
  pale200: pales.melrose,
  pale300: pales.eastside,
  pale400: pales.rosebud,
  pale500: pales.hurricane,

  hyper0: hyper.hyper0,
  hyper1: hyper.hyper1,
  hyper2: hyper.hyper2,
  hyper3: hyper.hyper3,
  hyper4: hyper.hyper4,
  hyper5: hyper.hyper5,
  hyper6: hyper.hyper6,
  hyper7: hyper.hyper7,
  hyper8: hyper.hyper8,
  hyper9: hyper.hyper9,
  hyper10: hyper.hyper10,
  hyper11: hyper.hyper11,
  hyper12: hyper.hyper12,
  hyper13: hyper.hyper13,

  lemon0: lemon.lemon0,
  lemon1: lemon.lemon1,
  lemon2: lemon.lemon2,
  lemon3: lemon.lemon3,
  lemon4: lemon.lemon4,
  lemon5: lemon.lemon5,
  lemon6: lemon.lemon6,
  lemon7: lemon.lemon7,
  lemon8: lemon.lemon8,
  lemon9: lemon.lemon9,
  lemon10: lemon.lemon10,
  lemon11: lemon.lemon11,
  lemon12: lemon.lemon12,
  lemon13: lemon.lemon13,

  slate1: slate.slate1,
  slate2: slate.slate2,
  slate3: slate.slate3,
  slate4: slate.slate4,
  slate5: slate.slate5,
  slate6: slate.slate6,
  slate7: slate.slate7,
  slate8: slate.slate8,
  slate9: slate.slate9,
  slate10: slate.slate10,
  slate11: slate.slate11,
  slate12: slate.slate12,
  slate13: slate.slate13,

  sapphire0: sapphire.sapphire0,
  sapphire1: sapphire.sapphire1,
  sapphire2: sapphire.sapphire2,
  sapphire3: sapphire.sapphire3,
  sapphire4: sapphire.sapphire4,
  sapphire5: sapphire.sapphire5,
  sapphire6: sapphire.sapphire6,
  sapphire7: sapphire.sapphire7,
  sapphire8: sapphire.sapphire8,
  sapphire9: sapphire.sapphire9,
  sapphire10: sapphire.sapphire10,
  sapphire11: sapphire.sapphire11,
  sapphire12: sapphire.sapphire12,
  sapphire13: sapphire.sapphire13,

  volt0: volt.volt0,
  volt1: volt.volt1,
  volt2: volt.volt2,
  volt3: volt.volt3,
  volt4: volt.volt4,
  volt5: volt.volt5,
  volt6: volt.volt6,
  volt7: volt.volt7,
  volt8: volt.volt8,
  volt9: volt.volt9,
  volt10: volt.volt10,
  volt11: volt.volt11,
  volt12: volt.volt12,
  volt13: volt.volt13,
} as const
