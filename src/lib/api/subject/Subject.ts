import { client, getAuthorisationHeader } from "@/lib/api/instance";
import { GetSubjectDTO } from "@/lib/api/subject/dto/SubjectDTO";

export class SubjectAPI {
  static async getSubjects(): Promise<Array<GetSubjectDTO>> {
    const { data } = await client.get("/Subject", getAuthorisationHeader());
    return data;
  }
}
