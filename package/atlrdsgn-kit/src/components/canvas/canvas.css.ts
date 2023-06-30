import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';

export const canvas = style({
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: kit.color.transparent,
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  maxWidth: '100vw',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'inherit',
  margin: 'auto',
  padding: '0',
  width: '100%',
  position: 'absolute',
  top: '48%',
  left: '50%',
});

export const canvas_blur = style({
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: kit.color.transparent,
  display: 'flex',
  flexDirection: 'column',

  height: '100vh',
  width: '100vw',
  minHeight: '100vh',
  minWidth: '100vw',

  padding: '0',
  margin: '0',

  filter: 'blur(12px)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',

  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '1',

  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
});
