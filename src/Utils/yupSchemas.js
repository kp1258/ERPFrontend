import * as yup from "yup";
import { nameRegex, loginRegex, phoneNumberRegex } from "./regexes";

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Imie jest wymagane")
    .matches(nameRegex, "Nieprawidłowy format imienia"),
  lastName: yup
    .string()
    .required("Nazwisko jest wymagane")
    .matches(nameRegex, "Nieprawidłowy format nazwiska"),
  login: yup
    .string()
    .required("Login jest wymagany")
    .matches(loginRegex, "Niepoprawny format loginu"),
  password: yup
    .string()
    .required("Hasło jest wymagane")
    .min(6, "Hasło jest za krótkie"),
  phoneNumber: yup
    .string()
    .required("Numer telefonu jest wymagany")
    .matches(phoneNumberRegex, "Niepoprawny format numeru telefonu"),
  email: yup
    .string()
    .email("Niepoprawny format adresu e-mail")
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
    postalCode: yup
      .string()
      .required("Kod pocztowy jest wymagany")
      .length(6, "Kod pocztowy musi mieć 6 znaków"),
    city: yup.string().required("Miasto jest wymagane"),
  }),
});

export const warehouseSchema = yup.object().shape({
  enteredQuantity: yup
    .number()
    .typeError("Wprowadzona wartosć musi być liczbą")
    .positive("Wprowadzona liczba musi być liczbą dodatnią")
    .integer("Ilość musi być liczbą całkowitą")
    .min(1, "Minimalna liczba to 1")
    .max(2000, "Maksymalna liczba to 2000"),
});

export const standardProductSchema = yup.object().shape({
  name: yup.string().required("Nazwa jest wymagana"),
  dimensions: yup.string().required("Wymiary są wymagane"),
  standardProductCategoryId: yup
    .number()
    .positive("Wybór kategorii jest wymagany")
    .required("Wybór kategorii jest wymagany")
    .typeError("Wybór kategorii jest wymagany"),
});

export const categorySchema = yup.object().shape({
  name: yup.string().required("Nazwa kategorii jest wymagana"),
});

export const materialSchema = yup.object().shape({
  name: yup.string().required("Nazwa materiału jest wymagana"),
  unit: yup.string().required("Jednostka jest wymagana"),
});

export const customOrderItemSchema = yup.object().shape({
  name: yup.string().required("Nazwa jest wymagana"),
  orderDescription: yup.string().required("Opis produktu jest wymagany"),
  quantity: yup
    .number()
    .typeError("Wartość musi być liczbą")
    .required("Ilość jest wymagana"),
});

export const signInSchema = yup.object().shape({
  login: yup.string().required("Login jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});

export const changePasswordUserSchema = yup.object().shape({
  oldPassword: yup.string().required("Obecne hasło jest wymagane"),
  newPassword: yup.string().required("Nowe hasło jest wymagane"),
});

export const changePasswordAdminSchema = yup.object().shape({
  newPassword: yup.string().required("Nowe hasło jest wymagane"),
});
