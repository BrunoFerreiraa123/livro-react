import React from 'react';

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">o número de livros cadastrados é: {props.qdeLivros}</td>
        </tr>
    </tfoot>
);

export default TabelaFoot;



