import React, { useState } from 'react';

// Общий интерфейс для всех типов параметров
interface Param {
    id: number;
    name: string;
}

interface ParamValue {
    paramId: number;
    value: string | number;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
    const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

    const handleParamChange = (paramId: number, value: string | number) => {
        const updatedParamValues = paramValues.map((paramValue) =>
            paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
        );
        console.log(updatedParamValues);
        setParamValues(updatedParamValues);
    };

    const renderParamInputs = () => {
        return params.map((param) => {
            const paramValue = paramValues.find((paramValue) => paramValue.paramId === param.id);

            return (
                <div key={param.id}>
                    <label htmlFor={`param-${param.id}`}>{param.name}</label>
                        <input
                            id={`param-${param.id}`}
                            value={paramValue ? paramValue.value : ''}
                            onChange={(e) => handleParamChange(param.id, e.target.value)}
                        />
                </div>
            );
        });
    };

    const getModel = () => {
        return {
            paramValues,
        };
    };

    return (
        <div>
            {renderParamInputs()}
            <button onClick={getModel}>Get Model</button>
        </div>
    );
};

export default ParamEditor;
