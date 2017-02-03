import { normalize, Schema, arrayOf,valuesOf,unionOf } from 'normalizr';
/*
const sessionSchema = new Schema('sessions');

sessionSchema.define({
  sessions: arrayOf(companySchema)
});

companySchema.define({
  favorites:arrayOf(userSchema),
  services:arrayOf(serviceSchema),
  employees:arrayOf(employeeSchema)
});

appointmentSchema.define({
  user:userSchema,
  company:companySchema,
  employee:employeeSchema,
  timing:timingSchema,
  service:serviceSchema
});

userSchema.define({
  favorites:arrayOf(companySchema)
});

serviceSchema.define({
  companies:arrayOf(companySchema)
});

export const Schemas = {
  CATEGORY:categorySchema,
  CATEGORY_ARRAY:arrayOf(categorySchema),
};
*/
