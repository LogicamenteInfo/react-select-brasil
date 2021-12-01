import React, { useState } from "react";
import { render } from "react-dom";

import SelectBrasil from "../../src";

export default function Demo() {
  const [estado, setEstado] = useState(null);
  const [estadoIbge, setEstadoIbge] = useState<number>(0);
  const [cidade, setCidade] = useState(null);
  const [cidadeIbge, setCidadeIbge] = useState<number>(0);
  const [cnh, setCnh] = useState(null);
  const [banco, setBanco] = useState(null);

  return (
    <div>
      <h1>React-Select-Brasil Demo</h1>

      <label>
        <b>Estado</b>
      </label>
      <SelectBrasil.Estados
        placeholder="Selecione um estado..."
        value={estado}
        onChange={(e) => {
          setEstado(e?.value);
          setEstadoIbge(e?.ibge ?? 0);
        }}
      />
      {estado && (
        <pre>
          <small>Você selecionou {estado} (Código IBGE: {estadoIbge})</small>
        </pre>
      )}

      <label>
        <b>Cidade</b>
      </label>
      <SelectBrasil.Cidades
        placeholder="Selecione uma cidade..."
        estado={estado}
        value={cidade}
        onChange={(e) => {
          setCidade(e?.value);
          setCidadeIbge(e?.ibge ?? 0);
        }}
      />
      {cidade && (
        <pre>
          <small>Você selecionou {cidade} (Código IBGE: {cidadeIbge})</small>
        </pre>
      )}

      <label>
        <b>Categoria da CNH</b>
      </label>
      <SelectBrasil.CategoriasCNH
        placeholder="Selecione uma categoria de CNH..."
        value={cnh}
        onChange={(e) => setCnh(e?.value)}
      />
      {cnh && (
        <pre>
          <small>Você selecionou {cnh}</small>
        </pre>
      )}

      <label>
        <b>Banco</b>
      </label>
      <SelectBrasil.Bancos
        placeholder="Selecione um banco..."
        value={banco}
        onChange={(e) => setBanco(e?.value)}
      />
      {banco && (
        <pre>
          <small>Você selecionou {banco}</small>
        </pre>
      )}
    </div>
  );
}

render(<Demo />, document.querySelector("#demo"));
