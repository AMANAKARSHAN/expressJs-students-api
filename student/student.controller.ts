import "./student.model.ts";
import {
  deleteDataService,
  getDataService,
  saveDataService,
  updateDataService,
} from "./student.service";

export const getData = async (req, res) => {
  const result = await getDataService();
  res.send({
    message: res.statusMessage,
    status: res.statusCode,
    data: result,
  });
};

export const saveData = async (req, res) => {
  const result = await saveDataService(req.body);
  res.send({
    message: res.statusMessage,
    status: res.statusCode,
    data: result,
  });
};

export const updateData = async (req, res) => {
  const result = await updateDataService(req.query.id, req.body);
  res.send({
    message: res.statusMessage,
    status: res.statusCode,
    data: result,
  });
};

export const deleteData = async (req, res) => {
  const result = await deleteDataService(req.query.id);
  res.send({
    message: res.statusMessage,
    status: res.statusCode,
    data: result,
  });
};

// export for older version
// module.exports = {
//   getData,
//   saveData,
// };
