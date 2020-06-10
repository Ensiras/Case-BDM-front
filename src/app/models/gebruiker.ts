// TODO: heeft id veld nodig, bezorgdingen verpakken in eigen object, adres ook?
export class Gebruiker {
  id: number;
  email: string;
  emailCheck: string;
  bezorgAfhalenThuis: boolean;
  bezorgAfhalenMagazijn: boolean;
  bezorgVersturenVooruit: boolean;
  bezorgVersturenRembours: boolean;
  straat: string;
  huisnummer: string;
  postcode: string;
  stad: string;
  akkoordVoorwaarden: boolean;
}
