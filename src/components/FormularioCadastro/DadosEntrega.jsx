import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>
      <TextField
      value={numero}
      onChange={(event) => {
        setNumero(event.target.value);
      }}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
      value={estado}
      onChange={(event) => {
        setEstado(event.target.value);
      }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
      value={cidade}
      onChange={(event) => {
        setCidade(event.target.value);
      }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
