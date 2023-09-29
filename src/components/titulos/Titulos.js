import React, { useState, useEffect } from "react";
import axios from "axios";
import './Titulos.scss';
import { Link } from "react-router-dom";
import { Container, Button, Table, Form } from "react-bootstrap";
import PaginationTable from "../Pagination/Pagination";

const ELEMENTS_PER_PAGE = 5;

const Titulos = () => {

    const [titulos, setTitulos] = useState([]);
    const [termoBusca, setTermoBusca] = useState("");
    const [resultadosBusca, setResultadosBusca] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const buscarTitulo = async () => {
        try {
            console.log("paginaAtual:", paginaAtual);
            console.log("termoBusca:", termoBusca);
            const response = await axios.get(
                `${process.env.REACT_APP_APIURL}/api/titulos/all?page=${paginaAtual}&limit=${ELEMENTS_PER_PAGE}&termo=${termoBusca}`
            );
            setTitulos(response.data);
            setTotalPages(Math.ceil(response.headers["x-total-count"] / ELEMENTS_PER_PAGE));
        } catch (error) {
            console.error("Erro ao buscar Títulos:", error);
        }
    };

    useEffect(() => {
        buscarTitulo();
    }, [paginaAtual, termoBusca]);


    const handleBuscaChange = (event) => {
        if (event && event.target) {
            setTermoBusca(event.target.value);
        }
    };

    const handlePageChange = (newPage) => {
        setPaginaAtual(newPage);
    };

    return (
        <section id="titulos">

            <h1>TÍTULOS</h1>

            <Container>
                <Form.Control
                    placeholder="Pesquisa"
                    className="inputSearch"
                />
            </Container>

            <div className="btnAdd">
                <Button> + Cadastrar Título</Button>
            </div>

            <PaginationTable
                className="pagination"
                activePage={paginaAtual}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <div className="tableTitulos">
                <Table className="table" striped bordered hover size="sm">
                    <thead>
                        <tr className="titleTable">
                            <th>ID</th>
                            <th>Advogado</th>
                            <th>Número</th>
                            <th>Assistido</th>
                            <th>Acesso</th>
                            <th>Arbitrado</th>
                            <th>Pleiteado</th>
                            <th>Acordado</th>
                            <th>Judicial</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {titulos.map((titulo) => (
                            <tr key={titulo.id}>
                                <td>{titulo.id}</td>
                                <td>{titulo.advogado}</td>
                                <td>{titulo.numero}</td>
                                <td>{titulo.assistido}</td>
                                <td>{titulo.acesso}</td>
                                <td>{titulo.arbitrado}</td>
                                <td>{titulo.pleiteado}</td>
                                <td>{titulo.acordado}</td>
                                <td>{titulo.judicial}</td>
                                <td>{titulo.situacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>


        </section>
    );
}

export default Titulos;