import React, { useState, useEffect } from "react";
import axios from "axios";
import './Advogados.scss';
import { Button, Container, Table, Form } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { AiFillEye } from 'react-icons/ai';
import PaginationTable from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const ELEMENTS_PER_PAGE = 10;

const Advogados = () => {

    const [advogados, setAdvogados] = useState([]);
    const [termoBusca, setTermoBusca] = useState("");
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const buscarAdvogados = async () => {
        try {
            console.log("termoBusca:", termoBusca);

            const response = await axios.get(
                `${process.env.REACT_APP_APIURL}/api/usuarios/all?page=${paginaAtual}&limit=${ELEMENTS_PER_PAGE}&termo=${termoBusca}`
            );

            setAdvogados(response.data);

            setTotalPages(Math.ceil(response.headers["x-total-count"] / ELEMENTS_PER_PAGE));
        } catch (error) {
            console.error("Erro ao buscar advogados:", error);
        }
    };



    useEffect(() => {
        buscarAdvogados();
    }, [termoBusca, paginaAtual]);

    const handleBuscaChange = (event) => {
        if (event && event.target) {
            const novoTermoBusca = event.target.value;
            setTermoBusca(novoTermoBusca);
            setPaginaAtual(1);
            buscarAdvogados();
            console.log("Termo de busca atualizado:", novoTermoBusca);
        }
    };

    const handlePageChange = (newPage) => {
        setPaginaAtual(newPage);
    };

    const advogadosFiltrados = advogados.filter((advogado) => {
        const { nome, oab, cpf, telefone, email } = advogado;
        const termoLowerCase = termoBusca.toLowerCase();

        return (
            nome.toLowerCase().includes(termoLowerCase) ||
            oab.toLowerCase().includes(termoLowerCase) ||
            cpf.toLowerCase().includes(termoLowerCase) ||
            telefone.toLowerCase().includes(termoLowerCase) ||
            email.toLowerCase().includes(termoLowerCase)
        );
    });

    return (
        <section id="advogados">
            <h1>ADVOGADOS</h1>
            <Container>
                <Form.Control
                    placeholder="Pesquisa"
                    className="inputSearch"
                    value={termoBusca}
                    onChange={handleBuscaChange}
                />
            </Container>
            <div className="btnAdd">
                <Link to="/cadastroAdvogado">
                    <Button to="/cadastroAdvogado"> + Cadastrar Advogado</Button>
                </Link>
            </div>
            <PaginationTable
                className="pagination"
                activePage={paginaAtual}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <div className="tableAdvogados">
                <Table className="table" striped bordered hover size="sm">
                    <thead>
                        <tr className="titleTable">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>OAB</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Editar</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advogadosFiltrados.map((advogado) => (
                            <tr key={advogado.id}>
                                <td>{advogado.id}</td>
                                <td>{advogado.nome}</td>
                                <td>{advogado.oab}</td>
                                <td>{advogado.cpf}</td>
                                <td>{advogado.telefone}</td>
                                <td>{advogado.email}</td>
                                <td><Link className="actionLink"><FiEdit className="mx-3" size={20} /></Link></td>
                                <td><Link className="actionLink"><AiFillEye className="mx-3" size={20} /></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export default Advogados;