export const tests = [
  {
    id: 'cbc',
    name: 'CBC (Complete Blood Count)',
    description: 'Full blood examination, Complete blood picture, Blood CBC with Differential',
    path: '/tests/cbc',
    alternateNames: ['Complete Blood Count', 'Full Blood Test', 'Blood Count Test', 'CBC Test'],
    category: 'Blood Test'
  },
  {
    id: 'thyroid',
    name: 'Thyroid Profile (T3, T4 & TSH)',
    description: 'Complete thyroid function assessment including T3, T4, and TSH levels',
    path: '/tests/thyroid-profile',
    alternateNames: ['Thyroid Test', 'TSH Test', 'T3 T4 Test', 'Thyroid Function Test'],
    category: 'Hormone Test'
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D Test',
    description: '25-hydroxy vitamin D test, Calcidiol test, Vitamin D3 test',
    path: '/tests/vitamin-d',
    alternateNames: ['25-OH Vitamin D', 'Vitamin D3', 'Calciferol Test'],
    category: 'Vitamin Test'
  },
  {
    id: 'hba1c',
    name: 'HbA1C Test',
    description: 'Glycated hemoglobin test, Diabetes monitoring test',
    path: '/tests/hba1c',
    alternateNames: ['Glycated Hemoglobin', 'A1C Test', 'Diabetes Test'],
    category: 'Diabetes Test'
  },
  {
    id: 'liver',
    name: 'Liver Function Test (LFT)',
    description: 'Comprehensive liver health assessment, Hepatic function panel',
    path: '/tests/liver-function',
    alternateNames: ['Liver Test', 'Hepatic Function Test', 'Liver Panel', 'LFT'],
    category: 'Organ Function'
  },
  {
    id: 'lipid',
    name: 'Lipid Profile Test',
    description: 'Complete cholesterol test, Heart health assessment',
    path: '/tests/lipid-profile',
    alternateNames: ['Cholesterol Test', 'Lipid Panel', 'Fat Profile'],
    category: 'Cardiac Risk'
  },
  {
    id: 'covid',
    name: 'COVID-19 RT-PCR Test',
    description: 'SARS-CoV-2 molecular test, Coronavirus detection test',
    path: '/tests/covid-rt-pcr',
    alternateNames: ['Corona Test', 'COVID Test', 'RT-PCR Test'],
    category: 'Viral Test'
  },
  {
    id: 'kidney',
    name: 'Kidney Function Test (KFT)',
    description: 'Renal function assessment, Kidney health panel',
    path: '/tests/kidney-function',
    alternateNames: ['Renal Function Test', 'KFT', 'Kidney Profile'],
    category: 'Organ Function'
  }
];
