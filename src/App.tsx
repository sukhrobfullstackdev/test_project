import React from 'react';
import ParamEditor from './ParamEditor';

const params = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
];

const model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ]
};

function App() {
  return (
      <div>
        <ParamEditor params={params} model={model} />
      </div>
  );
}

export default App;
