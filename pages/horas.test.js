import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Horas from './horas.js'

test('Boa tarde.', async () => {
render(<Horas></Horas>);

  expect(screen.getByText('São 18 horas.')).toBeInTheDocument();
})

