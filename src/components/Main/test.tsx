import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    // renderizar o componente
    const { container } = render(<Main />)

    // busca o elemento e verifica sua existencia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
