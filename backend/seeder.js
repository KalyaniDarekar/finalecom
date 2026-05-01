const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('./models/Product');
const User = require('./models/User');

const products = [
  // Mobiles (10)
  { name: 'Apple iPhone 15 Pro Max', brand: 'Apple', price: 159900, category: 'Mobiles', description: 'The ultimate iPhone with titanium design, 5x optical zoom, and A17 Pro chip.', stock: 15, rating: 4.9, numReviews: 850, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1696446701796-da61225697cc?w=1200&q=90'] },
  { name: 'Apple iPhone 14 Pro', brand: 'Apple', price: 129900, category: 'Mobiles', description: 'Dynamic Island, 48MP main camera, and always-on display.', stock: 25, rating: 4.8, numReviews: 1200, featured: true, discount: 10, images: ['https://images.unsplash.com/photo-1663465374413-83c800fd5b5d?w=1200&q=90'] },
  { name: 'Apple iPhone 13', brand: 'Apple', price: 59900, category: 'Mobiles', description: 'A15 Bionic chip, advanced dual-camera system, and Super Retina XDR display.', stock: 40, rating: 4.7, numReviews: 2100, featured: false, discount: 15, images: ['https://images.unsplash.com/photo-1631529622262-ea39075d8c36?w=1200&q=90'] },
  { name: 'Samsung Galaxy S23 Ultra', brand: 'Samsung', price: 124999, category: 'Mobiles', description: '200MP camera, Snapdragon 8 Gen 2, and built-in S Pen for ultimate productivity.', stock: 12, rating: 4.8, numReviews: 760, featured: true, discount: 5, images: ['https://images.unsplash.com/photo-1675765715978-782a0b411d5e?w=1200&q=90'] },
  { name: 'Samsung Galaxy S22', brand: 'Samsung', price: 52999, category: 'Mobiles', description: 'Nightography camera, 120Hz AMOLED display, and compact design.', stock: 30, rating: 4.5, numReviews: 650, featured: false, discount: 20, images: ['https://images.unsplash.com/photo-1644026362534-1c586a113d0a?w=1200&q=90'] },
  { name: 'Samsung Galaxy S21', brand: 'Samsung', price: 44999, category: 'Mobiles', description: 'Pro-grade cameras and a 120Hz display.', stock: 22, rating: 4.4, numReviews: 890, featured: false, discount: 10, images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1200&q=90'] },
  { name: 'Vivo X90 Pro', brand: 'Vivo', price: 84999, category: 'Mobiles', description: 'Co-engineered with Zeiss, featuring a 1-inch main sensor for incredible photography.', stock: 14, rating: 4.6, numReviews: 120, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1638202319225-b541bb053fba?w=1200&q=90'] },
  { name: 'Oppo Find X6 Pro', brand: 'Oppo', price: 79999, category: 'Mobiles', description: 'Hasselblad camera system, Snapdragon 8 Gen 2, and 100W SuperVOOC charging.', stock: 18, rating: 4.7, numReviews: 210, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&q=90'] },
  { name: 'Nothing Phone (2)', brand: 'Nothing', price: 39999, category: 'Mobiles', description: 'Unique Glyph interface, Snapdragon 8+ Gen 1, and clean Nothing OS 2.0.', stock: 30, rating: 4.4, numReviews: 540, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1200&q=90'] },
  { name: 'OnePlus 11', brand: 'OnePlus', price: 56999, category: 'Mobiles', description: 'Hasselblad Camera for Mobile, Snapdragon 8 Gen 2, and 100W fast charging.', stock: 25, rating: 4.6, numReviews: 320, featured: false, discount: 5, images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1200&q=90'] },

  // Laptops (10)
  { name: 'Apple MacBook Pro 16" (M3 Max)', brand: 'Apple', price: 299900, category: 'Laptops', description: 'The most advanced Mac ever for pro workflows with the M3 Max chip and 36GB RAM.', stock: 5, rating: 4.9, numReviews: 180, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=90'] },
  { name: 'Apple MacBook Air 13" (M2)', brand: 'Apple', price: 114900, category: 'Laptops', description: 'Incredibly thin and light, powered by the M2 chip with amazing battery life.', stock: 25, rating: 4.8, numReviews: 420, featured: true, discount: 5, images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1200&q=90'] },
  { name: 'Dell XPS 15', brand: 'Dell', price: 185990, category: 'Laptops', description: 'Premium creator laptop with 4K OLED display, Intel Core i9, and RTX 4060.', stock: 12, rating: 4.6, numReviews: 210, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1200&q=90'] },
  { name: 'Dell Inspiron 16', brand: 'Dell', price: 75000, category: 'Laptops', description: 'Versatile everyday laptop with a large 16-inch display and Intel Core i5.', stock: 30, rating: 4.4, numReviews: 150, featured: false, discount: 10, images: ['https://images.unsplash.com/photo-1588702545922-7fca385f09cb?w=1200&q=90'] },
  { name: 'HP Spectre x360 14', brand: 'HP', price: 154999, category: 'Laptops', description: '2-in-1 premium laptop with OLED touchscreen and elegant gem-cut design.', stock: 8, rating: 4.5, numReviews: 145, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1200&q=90'] },
  { name: 'HP Pavilion 15', brand: 'HP', price: 89999, category: 'Laptops', description: 'Thin, light, and powerful with Intel Evo platform certification.', stock: 15, rating: 4.5, numReviews: 120, featured: false, discount: 5, images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&q=90'] },
  { name: 'Lenovo ThinkPad X1 Carbon', brand: 'Lenovo', price: 175000, category: 'Laptops', description: 'Premium business laptop with Intel Core i7, lightweight carbon fiber chassis.', stock: 15, rating: 4.8, numReviews: 190, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=1200&q=90'] },
  { name: 'Lenovo Legion Pro 7i', brand: 'Lenovo', price: 215000, category: 'Laptops', description: 'Extreme gaming performance with Intel Core i9 HX and RTX 4080 graphics.', stock: 7, rating: 4.7, numReviews: 110, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&q=90'] },
  { name: 'Asus ROG Zephyrus G14', brand: 'Asus', price: 169990, category: 'Laptops', description: 'Ultra-portable gaming laptop with AMD Ryzen 9 and RTX 4070.', stock: 10, rating: 4.7, numReviews: 340, featured: true, discount: 8, images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1200&q=90'] },
  { name: 'Asus ZenBook 14X OLED', brand: 'Asus', price: 105990, category: 'Laptops', description: 'Sleek and powerful with a stunning 2.8K OLED display and Intel Core i7.', stock: 18, rating: 4.6, numReviews: 135, featured: false, discount: 5, images: ['https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=1200&q=90'] },

  // Audio (10)
  { name: 'Sony WH-1000XM5', brand: 'Sony', price: 29990, category: 'Audio', description: 'Industry-leading noise cancellation with 30-hour battery and exceptional sound quality.', stock: 45, rating: 4.8, numReviews: 3200, featured: true, discount: 15, images: ['https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1200&q=90'] },
  { name: 'Apple AirPods Pro (2nd Gen)', brand: 'Apple', price: 24900, category: 'Audio', description: 'Active Noise Cancellation, Transparency mode, and spatial audio.', stock: 80, rating: 4.8, numReviews: 4500, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1606220838315-056192d5e927?w=1200&q=90'] },
  { name: 'Bose QuietComfort Ultra', brand: 'Bose', price: 35900, category: 'Audio', description: 'Premium spatial audio headphones with world-class noise cancellation.', stock: 25, rating: 4.7, numReviews: 890, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=90'] },
  { name: 'Sennheiser Momentum 4', brand: 'Sennheiser', price: 27990, category: 'Audio', description: 'Audiophile-inspired acoustics and up to 60 hours of battery life.', stock: 20, rating: 4.6, numReviews: 670, featured: false, discount: 10, images: ['https://images.unsplash.com/photo-1599669500516-b60092abc6cb?w=1200&q=90'] },
  { name: 'Jabra Elite 8 Active', brand: 'Jabra', price: 17999, category: 'Audio', description: 'The world\'s toughest earbuds, completely dustproof, waterproof and sweatproof.', stock: 35, rating: 4.5, numReviews: 420, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=90'] },
  { name: 'Beats Studio Pro', brand: 'Beats', price: 34900, category: 'Audio', description: 'Custom acoustic platform, personalized spatial audio, and active noise cancelling.', stock: 15, rating: 4.4, numReviews: 310, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90'] },
  { name: 'Sony WF-1000XM5', brand: 'Sony', price: 24990, category: 'Audio', description: 'The best truly wireless noise canceling earbuds from Sony.', stock: 40, rating: 4.7, numReviews: 950, featured: false, discount: 5, images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=1200&q=90'] },
  { name: 'Marshall Motif II A.N.C.', brand: 'Marshall', price: 19999, category: 'Audio', description: 'Huge Marshall sound in a tiny package with active noise cancellation.', stock: 22, rating: 4.5, numReviews: 240, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90'] },
  { name: 'JBL Tour One M2', brand: 'JBL', price: 21999, category: 'Audio', description: 'True adaptive noise cancelling with JBL Pro Sound and 50-hour battery life.', stock: 30, rating: 4.3, numReviews: 180, featured: false, discount: 12, images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90'] },
  { name: 'Bowers & Wilkins Px7 S2e', brand: 'Bowers & Wilkins', price: 39900, category: 'Audio', description: 'Premium wireless headphones with custom-designed 40mm drive units.', stock: 8, rating: 4.8, numReviews: 120, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1616422285623-146bfa3cc0a4?w=1200&q=90'] },

  // Tablets (10)
  { name: 'Apple iPad Pro 12.9" (M2)', brand: 'Apple', price: 112900, category: 'Tablets', description: 'The ultimate iPad experience with the blazing-fast M2 chip and Liquid Retina XDR display.', stock: 20, rating: 4.9, numReviews: 950, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=90'] },
  { name: 'Samsung Galaxy Tab S9 Ultra', brand: 'Samsung', price: 119999, category: 'Tablets', description: 'Massive 14.6-inch Dynamic AMOLED 2X display, IP68 rating, and included S Pen.', stock: 15, rating: 4.8, numReviews: 420, featured: true, discount: 5, images: ['https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=1200&q=90'] },
  { name: 'Apple iPad Air (M1)', brand: 'Apple', price: 59900, category: 'Tablets', description: 'Light, bright, and full of might with the M1 chip and 10.9-inch Liquid Retina display.', stock: 45, rating: 4.8, numReviews: 1500, featured: true, discount: 8, images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1200&q=90'] },
  { name: 'OnePlus Pad', brand: 'OnePlus', price: 37999, category: 'Tablets', description: 'Smooth, fast, and elegant with a 144Hz display and Dimensity 9000 processor.', stock: 30, rating: 4.5, numReviews: 280, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=1200&q=90'] },
  { name: 'Lenovo Tab P12 Pro', brand: 'Lenovo', price: 54999, category: 'Tablets', description: '12.6-inch AMOLED display, Snapdragon 870, and Precision Pen 3 included.', stock: 18, rating: 4.4, numReviews: 160, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=90'] },
  { name: 'Xiaomi Pad 6', brand: 'Xiaomi', price: 26999, category: 'Tablets', description: '11-inch 144Hz display, Snapdragon 870, and a sleek metal unibody design.', stock: 40, rating: 4.6, numReviews: 520, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&q=90'] },
  { name: 'Microsoft Surface Pro 9', brand: 'Microsoft', price: 105999, category: 'Tablets', description: 'The power of a laptop, the flexibility of a tablet. Intel Core i5 processor.', stock: 12, rating: 4.7, numReviews: 310, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=1200&q=90'] },
  { name: 'Apple iPad mini (6th Gen)', brand: 'Apple', price: 49900, category: 'Tablets', description: 'Mega power. Mini sized. A15 Bionic chip and an edge-to-edge 8.3-inch display.', stock: 25, rating: 4.8, numReviews: 890, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=90'] },
  { name: 'Samsung Galaxy Tab S9 FE', brand: 'Samsung', price: 36999, category: 'Tablets', description: 'Vibrant display, IP68 water and dust resistance, and long-lasting battery.', stock: 35, rating: 4.5, numReviews: 150, featured: false, discount: 10, images: ['https://images.unsplash.com/photo-1550502012-3b10b0a88dfb?w=1200&q=90'] },
  { name: 'Oppo Pad 2', brand: 'Oppo', price: 39999, category: 'Tablets', description: 'Industry-first 7:5 aspect ratio display, Dimensity 9000, and elegant design.', stock: 22, rating: 4.6, numReviews: 190, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1628108168285-b4618e001859?w=1200&q=90'] },

  // Cameras (10)
  { name: 'Sony A7 IV', brand: 'Sony', price: 214990, category: 'Cameras', description: 'Full-frame mirrorless hybrid camera with 33MP resolution and 10-bit 4K video.', stock: 8, rating: 4.9, numReviews: 450, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=90'] },
  { name: 'Canon EOS R5', brand: 'Canon', price: 339995, category: 'Cameras', description: '45MP full-frame mirrorless camera capable of 8K RAW video recording.', stock: 5, rating: 4.8, numReviews: 320, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=90'] },
  { name: 'Nikon Z8', brand: 'Nikon', price: 343995, category: 'Cameras', description: 'True successor to the D850 with a 45.7MP stacked sensor and 8K video capabilities.', stock: 4, rating: 4.9, numReviews: 180, featured: true, discount: 0, images: ['https://images.unsplash.com/photo-1561081513-d3c26027fdb3?w=1200&q=90'] },
  { name: 'Fujifilm X-T5', brand: 'Fujifilm', price: 154999, category: 'Cameras', description: 'Photography-focused APS-C mirrorless camera with 40MP sensor and classic dials.', stock: 12, rating: 4.7, numReviews: 290, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1624602983701-d70cb70f2305?w=1200&q=90'] },
  { name: 'Panasonic Lumix GH6', brand: 'Panasonic', price: 169990, category: 'Cameras', description: 'Micro Four Thirds video powerhouse with unlimited 5.7K recording.', stock: 7, rating: 4.6, numReviews: 150, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1500634245200-e5245c7574ef?w=1200&q=90'] },
  { name: 'Sony A6700', brand: 'Sony', price: 134990, category: 'Cameras', description: 'Premium APS-C camera with AI-powered autofocus and 4K 120p video recording.', stock: 15, rating: 4.8, numReviews: 110, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=1200&q=90'] },
  { name: 'Canon EOS R6 Mark II', brand: 'Canon', price: 219995, category: 'Cameras', description: 'Versatile full-frame mirrorless camera with up to 40 fps continuous shooting.', stock: 10, rating: 4.8, numReviews: 240, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1527011045970-845112dfd9be?w=1200&q=90'] },
  { name: 'DJI Osmo Action 4', brand: 'DJI', price: 34990, category: 'Cameras', description: 'Best-in-class image quality action camera with a large 1/1.3-inch sensor.', stock: 30, rating: 4.6, numReviews: 380, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1533090481728-8b29d009b1f7?w=1200&q=90'] },
  { name: 'GoPro HERO12 Black', brand: 'GoPro', price: 37990, category: 'Cameras', description: 'Incredible 5.3K video, HDR, and improved battery life for action packed adventures.', stock: 40, rating: 4.7, numReviews: 890, featured: false, discount: 15, images: ['https://images.unsplash.com/photo-1582298538104-e51c140df034?w=1200&q=90'] },
  { name: 'Leica Q3', brand: 'Leica', price: 549900, category: 'Cameras', description: 'Premium compact full-frame camera with a fixed Summilux 28mm f/1.7 ASPH lens.', stock: 2, rating: 4.9, numReviews: 45, featured: false, discount: 0, images: ['https://images.unsplash.com/photo-1522055628509-02fcff6cb7ba?w=1200&q=90'] },
];

const adminUser = {
  name: 'Admin User',
  email: 'admin@electrostore.com',
  password: 'admin123',
  role: 'admin',
};

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for seeding...');
    await Product.deleteMany();
    await User.deleteMany({ role: 'admin' });
    await User.create(adminUser);
    console.log('Admin user created: admin@electrostore.com / admin123');
    await Product.insertMany(products);
    console.log(`${products.length} products seeded`);
    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
