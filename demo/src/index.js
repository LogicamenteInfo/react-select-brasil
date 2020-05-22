import React, { Component } from 'react'
import { render } from 'react-dom'

import SelectBrasil from '../../src'

export default class Demo extends Component {

  state = {}

  printSelectedItem(item) {
    return `{ value: '${item.value}', label: '${item.label}' }`
  }

  render() {
    return <div>
      <h1>React-Select-Brasil Demo</h1>

      <label><b>Estado</b></label>
      <SelectBrasil.Estados
        placeholder="Selecione um estado..."
        value={this.state.estado}
        onChange={(e) => this.setState({ estado: e })}
      />
      {this.state.estado
        && <pre>
          <small>Você selecionou
              {this.printSelectedItem(this.state.estado)}
          </small>
        </pre>}

      <label><b>Cidade</b></label>
      <SelectBrasil.Cidades
        placeholder="Selecione uma cidade..."
        estado={this.state.estado ? this.state.estado.value : ''}
        value={this.state.cidade}
        onChange={(e) => this.setState({ cidade: e })}
      />
      {this.state.cidade
        && <pre>
          <small>Você selecionou
              {this.printSelectedItem(this.state.cidade)}
          </small>
        </pre>}

      <label><b>Categoria da CNH</b></label>
      <SelectBrasil.CategoriasCNH
        placeholder="Selecione um estado..."
        value={this.state.cnh}
        onChange={(e) => this.setState({ cnh: e })}
      />
      {this.state.cnh
        && <pre>
          <small>Você selecionou
              {this.printSelectedItem(this.state.cnh)}
          </small>
        </pre>}

    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
