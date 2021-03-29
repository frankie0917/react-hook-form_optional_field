import * as Yup from "yup";

export enum Fields {
  title = "title",
  hasOwnPet = "hasOwnPet",
  petType = "petType",
  petName = "petName"
}

export const schema = Yup.object({
  [Fields.title]: Yup.string().required("title is required").defined(),
  [Fields.hasOwnPet]: Yup.boolean().defined(),
  [Fields.petType]: Yup.string()
    .required("pet type is required")
    .oneOf(["cat", "dog"])
    .defined(),
  [Fields.petName]: Yup.string().required("pet name is required").defined()
}).defined();
