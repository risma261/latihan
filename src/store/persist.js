// janis penyimpanan dalam redux, kalau di redux web/dom, pakainya redux persist
import storage from "redux-persist/lib/storage";

export const todoPersistConfig = {
  key: "todo",
  storage
};

// ini dipakai untuk ambil semua state di redux, dan menyimpan didalam satu key di localStorage
export const globalPersistConfig = {
  key: "global",
  whitelist: ["example"], // hanya reducer dengan key "example" yang akan disimpan di localStorage
  // blacklist:[] // ambil semua reducer kecuali key yang ada di array
  storage
};
