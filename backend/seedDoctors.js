import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import doctorModel from './models/doctorModel.js';

const doctors = [
  // ============ FEMALE DOCTORS (6) ============
  {
    name: 'Dr. Priya Verma',
    email: 'priya.verma@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983592/doc11.png',
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (Gynecology)',
    experience: '10 Years',
    about: "Specialist in women's health, pregnancy care, and reproductive medicine with 10+ years of experience.",
    fees: 700,
    address: { line1: '456 Park Road', line2: 'Mumbai' },
    date: Date.now()
  },
  {
    name: 'Dr. Sneha Reddy',
    email: 'sneha.reddy@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983593/doc13.png',
    speciality: 'Pediatricians',
    degree: 'MBBS, DCH',
    experience: '7 Years',
    about: 'Child specialist with expertise in newborn care, vaccinations, and childhood development.',
    fees: 550,
    address: { line1: '321 Green Avenue', line2: 'Hyderabad' },
    date: Date.now()
  },
  {
    name: 'Dr. Meera Joshi',
    email: 'meera.joshi@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983592/doc9.png',
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastro)',
    experience: '9 Years',
    about: 'Specialist in digestive system disorders, liver diseases, and gastrointestinal treatments.',
    fees: 800,
    address: { line1: '987 River Side', line2: 'Chennai' },
    date: Date.now()
  },
  {
    name: 'Dr. Anjali Nair',
    email: 'anjali.nair@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983613/doc15.png',
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '6 Years',
    about: 'Expert in skin, hair, and nail treatments with focus on cosmetic dermatology.',
    fees: 600,
    address: { line1: '12 Marine Drive', line2: 'Kochi' },
    date: Date.now()
  },
  {
    name: 'Dr. Kavita Deshmukh',
    email: 'kavita.deshmukh@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983542/doc5.png',
    speciality: 'General physician',
    degree: 'MBBS, MD (Internal Medicine)',
    experience: '8 Years',
    about: 'Experienced general physician specializing in preventive care, diabetes, and hypertension.',
    fees: 500,
    address: { line1: '45 FC Road', line2: 'Pune' },
    date: Date.now()
  },
  {
    name: 'Dr. Ritu Malhotra',
    email: 'ritu.malhotra@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983542/doc2.png',
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '11 Years',
    about: 'Expert in brain, spine, and nervous system disorders with advanced diagnostic skills.',
    fees: 950,
    address: { line1: '78 MG Road', line2: 'Delhi' },
    date: Date.now()
  },

  // ============ MALE DOCTORS (9) ============
  {
    name: 'Dr. Rajesh Sharma',
    email: 'rajesh.sharma@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789934212/doc1.png',
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '12 Years',
    about: 'Senior physician with expertise in internal medicine, diabetes, and cardiovascular health.',
    fees: 600,
    address: { line1: '123 Main Street', line2: 'Delhi' },
    date: Date.now()
  },
  {
    name: 'Dr. Anil Kumar',
    email: 'anil.kumar@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983542/doc3.png',
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '8 Years',
    about: 'Expert in clinical dermatology, skin allergies, and advanced laser treatments.',
    fees: 650,
    address: { line1: '789 Lake View', line2: 'Bangalore' },
    date: Date.now()
  },
  {
    name: 'Dr. Vikram Singh',
    email: 'vikram.singh@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983542/doc4.png',
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '14 Years',
    about: 'Senior neurologist specializing in epilepsy, stroke, and movement disorders.',
    fees: 1000,
    address: { line1: '654 Hill Road', line2: 'Pune' },
    date: Date.now()
  },
  {
    name: 'Dr. Suresh Patel',
    email: 'suresh.patel@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983542/doc6.png',
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastroenterology)',
    experience: '10 Years',
    about: 'Expert in endoscopy, liver transplant, and inflammatory bowel diseases.',
    fees: 850,
    address: { line1: '23 Ashram Road', line2: 'Ahmedabad' },
    date: Date.now()
  },
  {
    name: 'Dr. Arjun Mehta',
    email: 'arjun.mehta@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983592/doc7.png',
    speciality: 'Pediatricians',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '6 Years',
    about: 'Child specialist with expertise in neonatal intensive care and pediatric emergencies.',
    fees: 550,
    address: { line1: '90 Ring Road', line2: 'Surat' },
    date: Date.now()
  },
  {
    name: 'Dr. Rohan Gupta',
    email: 'rohan.gupta@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983592/doc8.png',
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (Obstetrics & Gynecology)',
    experience: '9 Years',
    about: 'Specialist in high-risk pregnancies, fertility treatments, and laparoscopic surgery.',
    fees: 750,
    address: { line1: '34 Civil Lines', line2: 'Jaipur' },
    date: Date.now()
  },
  {
    name: 'Dr. Karan Singh',
    email: 'karan.singh@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983592/doc10.png',
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '7 Years',
    about: 'Experienced in emergency medicine, infectious diseases, and general health checkups.',
    fees: 500,
    address: { line1: '56 Station Road', line2: 'Lucknow' },
    date: Date.now()
  },
  {
    name: 'Dr. Aditya Rao',
    email: 'aditya.rao@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983593/doc12.png',
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '5 Years',
    about: 'Specialist in acne treatment, hair loss, and skin rejuvenation therapies.',
    fees: 600,
    address: { line1: '78 Brigade Road', line2: 'Bangalore' },
    date: Date.now()
  },
  {
    name: 'Dr. Manish Tiwari',
    email: 'manish.tiwari@medibook.com',
    password: 'doctor123',
    image: 'https://res.cloudinary.com/kxap7tou/image/upload/v1789983613/doc14.png',
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '13 Years',
    about: "Expert in neuro-critical care, dementia, and Parkinson's disease management.",
    fees: 950,
    address: { line1: '67 Civil Lines', line2: 'Kanpur' },
    date: Date.now()
  }
];

const seedDoctors = async () => {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    console.log('🗑️  Clearing existing doctors...');
    await doctorModel.deleteMany({});
    console.log('✅ Existing doctors cleared');

    console.log('👨‍⚕️ Adding 15 doctors (6 female + 9 male)...');

    for (const doc of doctors) {
      const hashedPassword = await bcrypt.hash(doc.password, 10);
      const newDoctor = new doctorModel({
        ...doc,
        password: hashedPassword
      });
      await newDoctor.save();
      console.log(`✅ Added: ${doc.name} (${doc.speciality})`);
    }

    console.log('\n🎉 All 15 doctors added successfully!');
    console.log('📧 All doctors password: doctor123');
    console.log('\n📊 Summary:');
    console.log('   Total: 15 doctors');
    console.log('   Female: 6');
    console.log('   Male: 9');
    
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

seedDoctors();