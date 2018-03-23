import falcor from 'falcor';
import FalcorDataSource from 'falcor-http-datasource';

const { token, username, role } = localStorage;

let headers = {};
if (token && username && role) {
  headers = {
    token,
    username,
    role,
  };
}

console.log('creating a new model...');
const model = new falcor.Model({
  source: new FalcorDataSource('/falcor/model.json', {
    headers,
  }),
  onChange: (...args) => {
    console.log('onchange! ', args);
  },
});

export default model;
