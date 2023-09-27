import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import React from 'react';
import Header from '@/components/head';
import Footer from '@/components/footer';
import 'tailwindcss/tailwind.css';

interface Transacao {
  tipo: string;
  data: string;
  descricao: string;
  valor: number;
}

interface RelatorioProps {
  transacoes: Transacao[];
}

const Relatorio = ({ transacoes }: RelatorioProps) => {
  const totalGanhos = transacoes
    .filter((transacao) => transacao.tipo === 'ganho')
    .reduce((total, transacao) => total + transacao.valor, 0);

  const totalDespesas = transacoes
    .filter((transacao) => transacao.tipo === 'despesa')
    .reduce((total, transacao) => total + transacao.valor, 0);

  const despesas = transacoes.filter((transacao) => transacao.tipo === 'despesa');
  const metas = transacoes.filter((transacao) => transacao.tipo === 'meta');
  const ganhos = transacoes.filter((transacao) => transacao.tipo === 'ganho');

  // Calcula o saldo total
  const saldoTotal = totalGanhos - totalDespesas;

  return (
    <div>
      {/* Ganhos */}
      <section>
        <h2 className="text-3xl font-semibold mt-4 mb-2">Relatório:</h2>
        <br />
        <h3 className="text-2xl font-semibold mt-4">- Ganhos</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Data</th>
              <th className="border border-gray-300 p-2">Descrição</th>
              <th className="border border-gray-300 p-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {ganhos.map((transacao, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 p-2">{transacao.data}</td>
                <td className="border border-gray-300 p-2">{transacao.descricao}</td>
                <td className="border border-gray-300 p-2">R$ {transacao.valor.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-2xl font-semibold mt-4">Total de Ganhos: R$ {totalGanhos.toFixed(2)}</p>
      </section>
      <br />

      {/* Despesas */}
      <section>
        <h3 className="text-2xl font-semibold mt-4">- Despesas</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Data</th>
              <th className="border border-gray-300 p-2">Descrição</th>
              <th className="border border-gray-300 p-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {despesas.map((transacao, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 p-2">{transacao.data}</td>
                <td className="border border-gray-300 p-2">{transacao.descricao}</td>
                <td className="border border-gray-300 p-2">R$ {transacao.valor.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-2xl font-semibold mt-4">Total de Despesas: R$ {totalDespesas.toFixed(2)}</p>
      </section>
      <br />

      {/* Metas */}
      <section>
        <h3 className="text-2xl font-semibold mt-4">- Metas</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Descrição</th>
              <th className="border border-gray-300 p-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {metas.map((transacao, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-300 p-2">{transacao.descricao}</td>
                <td className="border border-gray-300 p-2">R$ {transacao.valor.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <br />
      <br></br>
      {/* Tabela de Saldo */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">- Saldo</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Descrição</th>
              <th className="border border-gray-300 p-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2">Saldo Total</td>
              <td className="border border-gray-300 p-2">R$ {saldoTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

const ProfilePage = ({ transacoes }: RelatorioProps) => {
  return (
    <div>
      <Header />
      <div
        className="bg-gray-100 min-h-screen p-4 grid place-items-center"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mb-4">
          <Relatorio transacoes={transacoes} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

export const getStaticProps: GetStaticProps = async () => {
  const ganhosPath = path.join(process.cwd(), 'ganhos.json');
  const despesasPath = path.join(process.cwd(), 'despesas.json');
  const metasPath = path.join(process.cwd(), 'metas.json');

  const ganhosData = fs.readFileSync(ganhosPath, 'utf8');
  const despesasData = fs.readFileSync(despesasPath, 'utf8');
  const metasData = fs.readFileSync(metasPath, 'utf8');

  const ganhos = JSON.parse(ganhosData).ganhos.map((ganho: any) => ({
    tipo: 'ganho',
    ...ganho,
  }));

  const despesas = JSON.parse(despesasData).despesas.map((despesa: any) => ({
    tipo: 'despesa',
    ...despesa,
  }));

  const metas = JSON.parse(metasData).metas.map((meta: any) => ({
    tipo: 'meta',
    ...meta,
  }));

  const transacoes = [...ganhos, ...despesas, ...metas];

  return {
    props: {
      transacoes,
    },
  };
};
