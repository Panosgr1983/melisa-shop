import type { Product } from '../../types/product'

export const butters: Product[] = [
  {
    title: 'Βούτυρο Αμυγδάλου',
    slug: 'almond-butter',
    description: 'Κρεμώδες βούτυρο αμυγδάλου, 100% φυσικό χωρίς προσθήκες.',
    price: 8.50,
    categorySlug: 'butters',
    image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754829281/almond-butter_ifsb0k_e_improve_g6m1l1.png'
  },
  {
    title: 'Βούτυρο Φιστικιού',
    slug: 'peanut-butter',
    description: 'Κλασικό βούτυρο φιστικιού, πλούσιο σε πρωτεΐνες.',
    price: 6.20,
    categorySlug: 'butters',
    image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754828025/peanut-butter_ewzie7_e_improve_iodbuk.png'
  },
  {
    title: 'Βούτυρο Φουντουκιού',
    slug: 'hazelnut-butter',
    description: 'Αρωματικό βούτυρο φουντουκιού με βελούδινη υφή.',
    price: 9.80,
    categorySlug: 'butters',
    image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754828023/hazelnut-butter_xu9nds_e_improve_krm6bh.png'
  },
  {
    title: 'Βούτυρο Κάσιους',
    slug: 'cashews-butter',
    description: 'Απαλό και κρεμώδες βούτυρο κάσιους.',
    price: 11.50,
    categorySlug: 'butters',
    image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754828381/cashew-butter_a5nq8d_e_improve_wtus5o.png'
  }
]