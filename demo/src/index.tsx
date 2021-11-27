import React, { useState } from "react";
import { render } from "react-dom";

import SelectBrasil from "../../src";

export default function Demo() {
  const [estado, setEstado] = useState(null);
  const [cidade, setCidade] = useState(null);
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
        onChange={(e) => setEstado(e?.value)}
      />
      {estado && (
        <pre>
          <small>Você selecionou {estado}</small>
        </pre>
      )}

      <label>
        <b>Cidade</b>
      </label>
      <SelectBrasil.Cidades
        placeholder="Selecione uma cidade..."
        estado={estado}
        value={cidade}
        onChange={(e) => setCidade(e?.value)}
      />
      {cidade && (
        <pre>
          <small>Você selecionou {cidade}</small>
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
