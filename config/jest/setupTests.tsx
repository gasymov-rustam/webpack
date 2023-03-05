import '@testing-library/jest-dom';
import { RenderOptions, render } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from '../../src/store';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
