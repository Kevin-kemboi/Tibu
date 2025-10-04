// In-memory mock data for development
import { v4 as uuid } from 'uuid';

// Real pharmaceutical product images
const productImages = [
  "https://www.shutterstock.com/image-photo/prescription-antibiotic-capsules-spilling-amber-600nw-2516780739.jpg",
  "https://www.shutterstock.com/image-photo/white-pills-brown-glass-jar-260nw-2468977663.jpg", 
  "https://www.shutterstock.com/image-photo/many-different-antibiotic-pills-on-260nw-2620989279.jpg",
  "https://www.shutterstock.com/image-photo/antibiotic-pills-bottle-on-white-600nw-2477590391.jpg",
  "https://www.shutterstock.com/image-photo/brown-medicine-pills-glass-bottle-600nw-2425129253.jpg",
  "https://www.shutterstock.com/image-illustration/falling-pills-on-blue-background-260nw-2024289572.jpg",
  "https://media.gettyimages.com/id/1486331497/photo/variety-of-medicines-in-pill-form-vitamins-and-dietary-supplements.jpg?s=612x612&w=gi&k=20&c=iiqcnqGbCg-BXEiSxqrSM9Yz9RpFMFmQcOjcTtR9pEI=",
  "https://media.istockphoto.com/id/2149365258/photo/3d-white-medicine-bottle-or-pill-jar-with-capsule-medicine-on-blue-background-prescribing.jpg?s=612x612&w=0&k=20&c=3kIEJF70iLii2WgyXQjjDBB1NJBUZtYYWw_OYJd6bN8=",
  "https://media.gettyimages.com/id/1703778113/photo/pill-boxes-with-different-types-of-medicines-on-a-white-background.jpg?s=612x612&w=gi&k=20&c=93MdQci3p0Du4c04fUciRXhew3juWL5rnmwZdbKjxAU=",
  "https://www.shutterstock.com/image-photo/pill-bottle-mockup-white-label-260nw-2583272259.jpg",
  "https://media.gettyimages.com/id/182148632/photo/prescription-drug-bottles.jpg?s=612x612&w=gi&k=20&c=A8GCdadYE6WU8k_YIvfupeUID1VHqtHk6kw8rEIituk=",
  "https://media.gettyimages.com/id/171342387/photo/blank-medicine-bottle.jpg?s=612x612&w=gi&k=20&c=j_AqLDslmIAd6Dvx8hV28IVVx6as96BiF8t_3QJ4aiQ=",
  "https://t3.ftcdn.net/jpg/15/52/45/52/360_F_1552455242_R35CLvLy33RPQYjLY93d0mwSnfqUssXJ.jpg",
  "https://media.gettyimages.com/id/1351428828/photo/side-view-of-uncovered-tablet-container.jpg?s=612x612&w=gi&k=20&c=Zq9MW7lUSbpX14hGkz11lOVWbksD6cpfmQUc7y1CqDw=",
  "https://media.istockphoto.com/id/1087420362/photo/background-of-assorted-pharmaceutical-capsules-and-medication-in-different-colors-copy-space.jpg?s=612x612&w=0&k=20&c=TN-Mbd8CN54KNmFLBwsbR4EEsWM9zhRXVYfe_3KBrDM=",
  "https://media.istockphoto.com/id/1503376092/photo/medical-pills-spilling-open-drug-bottle.jpg?s=612x612&w=0&k=20&c=-tJmsPYdCC47G6zkBcYpdG1r7ftmw4-zqZIMe6NRGME=",
  "https://media.gettyimages.com/id/1216617181/photo/hand-holding-a-box-of-pills-dispenser-on-white-background-close-up.jpg?s=612x612&w=gi&k=20&c=ctbWHHWHmYlM66cPsz22ZTXt4amrPbRd7j7jwn7j2Lo=",
  "https://c8.alamy.com/comp/2TC33DX/pills-capsules-and-tablets-with-pill-bottles-background-2TC33DX.jpg",
  "https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk=",
  "https://images.stockcake.com/public/5/0/8/508221a7-a542-4f50-8857-2dafb519656e_large/handful-of-pills-stockcake.jpg",
  "https://t3.ftcdn.net/jpg/16/14/50/80/360_F_1614508068_zQLWzTqtjjmJiDzDEooB2o3hNt5E5i9r.jpg",
  "https://t3.ftcdn.net/jpg/13/08/73/62/360_F_1308736299_jJJ8Mho8fwsgdTKueenXBMDYDHzNMw6X.jpg",
  "https://t3.ftcdn.net/jpg/14/15/36/12/360_F_1415361210_nKnyneEEJ9PGS8xJEHQsLHVj90yQnw19.jpg",
  "https://t4.ftcdn.net/jpg/16/31/38/19/360_F_1631381933_JwyfvMUgdxSHphPPCCReoSvvV3dT47o9.jpg",
  "https://t4.ftcdn.net/jpg/09/23/66/05/360_F_923660563_7I5kNApoN6kbKLqOTWWuEpDhhrj7hnor.jpg",
  "https://m.media-amazon.com/images/I/61QusfbG+GL._UF1000,1000_QL80_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61uJ8Cqs4qL._AC_UL600_SR600,600_.jpg",
  "https://www.mdpi.com/files/uploaded/covers/foods/big_cover-foods-v13-i10.png",
  "https://blog.sesamehub.com/haley-richard/files/2025/01/whitening_veneers.jpg"
];

// Realistic pharmaceutical product names
const productNames = [
  'Amoxicillin Capsules 500mg', 'Paracetamol Tablets 500mg', 'Ibuprofen Pain Relief', 
  'Cough Syrup Children', 'Vitamin D3 Supplements', 'Blood Pressure Monitor',
  'Antibiotic Capsules', 'Aspirin Low Dose', 'Multivitamin Complex', 
  'Calcium Citrate', 'Omeprazole Tablets', 'First Aid Bandages',
  'Cough Drops Honey', 'Iron Supplements', 'Digital Thermometer',
  'Antacid Tablets', 'Vitamin B12', 'Hand Sanitizer', 
  'Antiseptic Cream', 'Cold & Flu Relief', 'Glucose Meter Strips',
  'Probiotic Capsules', 'Eye Drops Lubricating', 'Allergy Relief',
  'Zinc Supplements', 'Magnesium Tablets', 'Melatonin Sleep Aid',
  'Buffered Vitamin C', 'Magnesium Citrate', 'Digestive Support'
];

const categories = ['Prescription','OTC','Healthcare','Wellness','Personal Care','Ayurvedic'];
const subCategories = ['Tablets','Capsules','Syrups','Injectables','Topical','Drops','Equipment'];

export const products = Array.from({ length: 60 }).map((_, i) => {
  const category = categories[i % categories.length];
  const subCategory = subCategories[i % subCategories.length];
  const imageIndex = i % productImages.length;
  const nameIndex = i % productNames.length;
  
  return {
    _id: uuid(),
    name: productNames[nameIndex],
    description: `Professional pharmaceutical ${productNames[nameIndex].toLowerCase()} for healthcare needs. Quality assured and FDA approved medication suitable for ${category.toLowerCase()} use.`,
    price: (5 + (i % 15) * 1.5).toFixed(2),
    category,
    subCategory,
    bestseller: i % 6 === 0,
    minOrderQuantity: (i % 3) + 1,
    image: [productImages[imageIndex]],
    quantityPriceList: [
      { quantity: 10, price: (5 + (i % 10)).toFixed(2) },
      { quantity: 25, price: (4.75 + (i % 10)).toFixed(2) },
      { quantity: 50, price: (4.5 + (i % 10)).toFixed(2) }
    ],
    createdAt: Date.now() - i * 3600 * 1000
  };
});

// Simple in-memory cart storage keyed by token
export const carts = new Map(); // token -> { productId: { quantity, selectedPrice, isPackage } }
