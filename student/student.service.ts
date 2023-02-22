import { studentDto } from "./student.dto";
import { studentModel } from "./student.model";

export const addData = async (data: studentDto) => {
  console.log(data);
  const student = new studentModel({
    id: data.id,
    name: data.name,
    class: data.class,
    phoneNo: data.phoneNo,
    isActive: data.isActive,
    // joinDate: data.joinDate,
  });

  const res = await student.save();

  return res;
};
