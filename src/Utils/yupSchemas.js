import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("Imie jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  login: yup.string().required("Login jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Niepoprawny adres E-Mail")
    .required("E-Mail jest wymagany"),
  role: yup.string().required("Wybór stanowiska jest wymagany"),
});

export const editUserSchema = yup.object().shape({
  firstName: yup.string().required("Imie jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Niepoprawny adres E-Mail")
    .required("E-Mail jest wymagany"),
  login: yup.string().required("Login jest wymagany"),
  role: yup.string().required("Wybór stanowiska jest wymagany"),
});

export const clientSchema = yup.object().shape({
  companyName: yup.string().required("Nazwa firmy jest wymagana"),
  firstName: yup.string().required("Imię jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Niepoprawny adres e-mail")
    .required("Adres email jest wymagany"),
  address: yup.object().shape({
    street: yup.string().required("Ulica jest wymagana"),
    postalCode: yup.string().required("Kod pocztowy jest wymagany"),
    city: yup.string().required("Miasto jest wymagane"),
  }),
});

export const warehouseSchema = yup.object().shape({
  enteredQuantity: yup
    .number()
    .integer("Ilość musi być liczbą całkowitą")
    .min(1, "Minimalna liczba to 1")
    .max(100, "Maksymalna liczba to 100"),
});

export const standardProductSchema = yup.object().shape({
  name: yup.string().required("Nazwa jest wymagana"),
  dimensions: yup.string().required("Wymiary są wymagane"),
  standardProductCategoryId: yup
    .number()
    .positive("Wybór kategorii jest wymagany")
    .required("Wybór kategorii jest wymagany"),
});

export const categorySchema = yup.object().shape({
  name: yup.string().required("Nazwa kategorii jest wymagana"),
});

export const materialSchema = yup.object().shape({
  name: yup.string().required("Nazwa materiału jest wymagana"),
});
