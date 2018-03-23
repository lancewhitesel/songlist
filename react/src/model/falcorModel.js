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

const model = new falcor.Model({
  source: new FalcorDataSource('/falcor/model.json', {
    headers,
  }),
});

export default model;
