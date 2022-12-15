function AdvogadoForm() {

    return(
        <form>
            <div><input type="text" placeholder="Digite o nome do advogado"></input></div>
            <div><input type="text" placeholder="Digite a OAB do advogado"></input></div>
            <div><input type="text" placeholder="Digite o CPF do advogado"></input></div>
            <div><input type="text" placeholder="Digite o telefone do advogado"></input></div>
            <div><input type="text" placeholder="Digite o e-mail do advogado"></input></div>
            <div><input type="text" placeholder="Digite o endereço do advogado"></input></div>
            <div><input type="text" placeholder="Digite uma observação"></input></div>
            <div><input type="submit" value="Cadastrar advogado"></input></div>
        </form>
    );
}

export default AdvogadoForm;