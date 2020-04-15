import { CreateStyled } from '@emotion/styled';
import { styled as storybookStyled } from './styled';
import { Theme } from './types';

export const styled = storybookStyled as CreateStyled<Theme>;

export * from './base';
export * from './types';

export { default as isPropValid } from '@emotion/is-prop-valid';
export { keyframes } from '@emotion/core';

export { createGlobal, createReset, Global } from './global';
export * from './theme-provider';
export * from './with-theme';
export * from './use-theme';
export * from './create';
export * from './convert';
export * from './ensure';

export { lightenColor as lighten, darkenColor as darken } from './utils';
