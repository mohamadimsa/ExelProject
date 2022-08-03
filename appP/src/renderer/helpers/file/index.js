import instance from '../apiHelper';

const service = {
  create: (data) => {
    return instance.post(`/importxls`, { data });
  },
};

const toExport = {
  service,
};

export default toExport;
