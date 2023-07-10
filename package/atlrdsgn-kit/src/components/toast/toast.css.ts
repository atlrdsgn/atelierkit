import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const toastViewport = style({
  // --viewport-padding: 25px;
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  selectors: {
    '&[data-state="open"]': {},
  },
});

const toastRoot = style({
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '15px',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

  selectors: {
    '&[data-state="open"]': {
      animation: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },

    '&[data-state="closed"]': { animation: 'hide 100ms ease-in' },
  },
});

/*
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;
*/
