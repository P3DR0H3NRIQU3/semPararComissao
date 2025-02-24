import "../styles/inputs.css";
import { useState } from "react";

export default function Inputs() {
    const [salario, setSalario] = useState("");
    const [meta, setMeta] = useState("");
    const [resultadoCom, setResultadoCom] = useState<number | null>(null);
    const [resultadoDsr, setResultadoDsr] = useState<number | null>(null);
    const [resultadoTotal, setResultadoTotal] = useState<number | null>(null);
    const [multiplicador, setMultiplicador] = useState<number | null>(null);

    const multiplicadores: Record<number, number> = {
        70: 0.21,
        71: 0.23,
        72: 0.26,
        73: 0.28,
        74: 0.31,
        75: 0.34,
        76: 0.36,
        77: 0.39,
        78: 0.42,
        79: 0.45,
        80: 0.48,
        81: 0.51,
        82: 0.54,
        83: 0.57,
        84: 0.60,
        85: 0.64,
        86: 0.67,
        87: 0.70,
        88: 0.74,
        89: 0.77,
        90: 0.82,
        91: 0.83,
        93: 0.87,
        94: 0.88,
        95: 0.90,
        96: 0.92,
        97: 0.94,
        98: 0.95,
        99: 0.97,
        100: 1.00,
        101: 1.01,
        102: 1.02,
        103: 1.03,
        104: 1.04,
        105: 1.05,
        106: 1.06,
        107: 1.07,
        108: 1.08,
        109: 1.09,
        110: 1.10,
        111: 1.11,
        112: 1.12,
        113: 1.13,
        114: 1.14,
        115: 1.15,
        116: 1.16,
        117: 1.17,
        118: 1.18,
        119: 1.19,
        120: 1.20,
        121: 1.21,
        122: 1.22,
        123: 1.23,
        124: 1.24,
        125: 1.25,
    };
    function calcular() {
        const salarioNum = Number(salario)
        let metaNum = Number(meta)
        if (multiplicadores[metaNum] !== undefined && salarioNum !== null) {
            const comissao = salarioNum * multiplicadores[metaNum];
            setResultadoCom(comissao);
            const comissaoDrs = comissao * 0.19
            setResultadoDsr(comissaoDrs);
            const valorTotal = comissao + comissaoDrs
            setResultadoTotal(valorTotal);
            const multiplicador = multiplicadores[metaNum] * 100;
            setMultiplicador(multiplicador);
        } else {
            console.log("Meta inválida!")
            alert("Preencha os campos corretamente: Meta entre 70 a 125 e salário maior que 0")
        }

    }
    return (
        <div className="main">
            
            <div className="cont-inputs">
                <div>
                    <p>Salário:</p>
                    <input
                        type="number"
                        value={salario}
                        name="salario"
                        placeholder="R$0,00"
                        id="salario"
                        className="inputs"
                        onChange={(e) => {
                            setSalario(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <p>Meta:</p>
                    <input
                        type="number"
                        step="0.01"
                        className="inputs"
                        min="0"
                        max="125"
                        value={meta}
                        placeholder="0%"
                        onChange={(e) => {
                            setMeta(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <p>Fator/Salário</p>
                    <div className="divFator">
                        {multiplicador !== null && <p className="pFator">{multiplicador.toFixed(2)}%</p>}
                    </div>
                </div>
            </div>
            <button type="button" className="buttonCalc" onClick={calcular}>Calcular</button>
            <div className="cont-resultados">
                {resultadoCom !== null && <div className="resultadosCalc"> <p className="textResultado">Comissão: <strong>R$ {resultadoCom.toFixed(2)}</strong></p></div>}
                {resultadoDsr !== null && <div className="resultadosCalc"><p className="textResultado">DSR: <strong>R$ {resultadoDsr.toFixed(2)}</strong></p></div>}
                {resultadoTotal !== null && <div className="resultadosCalc"> <p className="textResultado">Comissão Total: <strong>R$ {resultadoTotal.toFixed(2)}</strong></p></div>}
            </div>
        </div>

    );
}
