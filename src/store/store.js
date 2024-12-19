import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// export const useStore = create(set => ({
// 	favorite: [],
// 	addToFavorite: productId =>
// 		set(state => ({ favorite: [...state.favorite, productId] })),
// 	removeFromFavorite: productId =>
// 		set(state => {
// 			let eski = state.favorite;
// 			let yangi = eski.filter(id => id != productId);
// 			return { favorite: yangi };
// 		}),
// }));
export const useStore = create(
	persist(
	  (set, get) => ({
		favorite: [],
		addToFavorite: productId =>
					set(() => ({ favorite: [...get().favorite, productId] })),
				removeFromFavorite: productId =>
					set(state => {
						let eski = get().favorite;
						let yangi = eski.filter(id => id != productId);
						return { favorite: yangi };
					}),
	  }),
	  {
		name: 'uzum-storage', // name of the item in the storage (must be unique)
		storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
	  },
	),
  );
