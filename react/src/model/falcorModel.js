import falcor from 'falcor';
import FalcorDataSource from 'falcor-http-datasource';

const model = new falcor.Model({
  source: new FalcorDataSource('/falcor/model.json')
});

export default model;
