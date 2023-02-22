import { studentDto } from "./student.dto";
import { studentModel } from "./student.model";

export const saveDataService = async (data: studentDto) => {
  try {
    const student = new studentModel({
      id: data.id,
      name: data.name,
      class: data.class,
      phoneNo: data.phoneNo,
      isActive: data.isActive,
    });

    const res = await student.save();
    return res;
  } catch (e) {
    throw new Error(e);
  }
};

export const getDataService = async () => {
  try {
    const res = await studentModel.find();
    return res.map((i) => ({
      id: i.id,
      name: i.name,
      class: i.class,
      phoneNo: i.phoneNo,
      isActive: i.isActive,
      joinDate: i.joinDate,
    }));
  } catch (e) {
    throw new Error(e);
  }
};

export const updateDataService = async (id, updateData: studentDto) => {
  try {
    const res = await studentModel.updateMany(
      { id: +id },
      {
        $set: {
          name: updateData.name,
          class: updateData.class,
          isActive: updateData.isActive,
          joinDate: updateData.joinDate,
        },
      }
    );
    return "Data is updated";
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteDataService = async (id) => {
  try {
    const res = await studentModel.deleteMany({ id: +id });
    return "Data is deleted";
  } catch (e) {
    throw new Error(e);
  }
};
