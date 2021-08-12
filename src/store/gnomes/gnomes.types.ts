export type TGnome = {
  age: number;
  friends: Array<string>;
  hair_color: THairColor;
  height: number;
  id: number;
  name: string;
  professions: Array<TProfession>;
  thumbnail: string;
  weight: number;
}

export type THairColor = string; // 'red' | 'black'... TODO CHECK

export type TProfession = string;

export type TGnomesState = {
  Brastlewark: {
    data: Array<TGnome> | null;
    isLoading: boolean;
    error: string | null;
  };
}
