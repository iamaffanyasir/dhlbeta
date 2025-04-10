export const tests = [
  // Kidney Function Tests
  {
    id: 'kft',
    name: 'Kidney Function Test (KFT)',
    description: 'Complete kidney health assessment that measures various compounds to evaluate kidney function. This panel includes multiple tests to provide a comprehensive view of your kidney health.',
    path: '/tests/kidney-function',
    alternateNames: ['Renal Function Test', 'Kidney Panel', 'KFT'],
    category: 'Organ Function',
    duration: 'Same Day',
    labType: 'Fasting Required',
    price: 999,
    originalPrice: 1499,
    preparation: [
      'Fast for 8-10 hours before the test',
      'Drink plenty of water',
      'Avoid heavy meals the night before',
      'Continue medications unless advised otherwise'
    ],
    benefits: [
      'Early detection of kidney problems',
      'Monitor kidney function',
      'Guide treatment decisions',
      'Track disease progression'
    ],
    faqs: [
      {
        question: 'Why is this test important?',
        answer: 'KFT helps detect kidney problems early and monitor kidney function in people with known kidney disease.'
      },
      {
        question: 'How often should I get tested?',
        answer: 'The frequency depends on your health status. Healthy individuals may get tested annually, while those with kidney issues may need more frequent testing.'
      },
      {
        question: 'What do the results mean?',
        answer: 'Results indicate how well your kidneys are filtering waste from your blood. Abnormal results may suggest kidney problems.'
      }
    ],
    subTests: ['Blood Urea', 'Serum Creatinine', 'BUN', 'BUN/Creatinine Ratio', 'Serum Uric Acid', 'Serum Calcium', 'Inorganic Phosphorus', 'NA+', 'K+', 'Serum Chloride']
  },
  {
    id: 'blood-urea',
    name: 'Blood Urea Test',
    description: 'Measures the amount of urea nitrogen in blood',
    path: '/tests/blood-urea',
    alternateNames: ['Urea Test', 'BUN Test'],
    category: 'Organ Function'
  },
  {
    id: 'serum-creatinine',
    name: 'Serum Creatinine Test',
    description: 'Measures creatinine levels in blood',
    path: '/tests/serum-creatinine',
    alternateNames: ['Creatinine Test'],
    category: 'Organ Function'
  },
  {
    id: 'bun',
    name: 'Blood Urea Nitrogen (BUN)',
    description: 'Measures the amount of nitrogen in blood from urea',
    path: '/tests/bun',
    alternateNames: ['Urea Nitrogen Test'],
    category: 'Organ Function'
  },
  {
    id: 'bun-creatinine-ratio',
    name: 'BUN/Creatinine Ratio',
    description: 'Ratio between blood urea nitrogen and creatinine',
    path: '/tests/bun-creatinine-ratio',
    alternateNames: ['BUN-to-Creatinine Ratio'],
    category: 'Organ Function'
  },
  {
    id: 'uric-acid',
    name: 'Serum Uric Acid Test',
    description: 'Measures uric acid levels in blood',
    path: '/tests/uric-acid',
    alternateNames: ['Uric Acid Test'],
    category: 'Organ Function'
  },
  {
    id: 'serum-calcium',
    name: 'Serum Calcium Test',
    description: 'Measures calcium levels in blood',
    path: '/tests/serum-calcium',
    alternateNames: ['Calcium Test'],
    category: 'Organ Function'
  },
  {
    id: 'inorganic-phosphorus',
    name: 'Inorganic Phosphorus Test',
    description: 'Measures phosphorus levels in blood',
    path: '/tests/inorganic-phosphorus',
    alternateNames: ['Phosphorus Test'],
    category: 'Organ Function'
  },
  {
    id: 'sodium',
    name: 'Sodium (NA+) Test',
    description: 'Measures sodium levels in blood',
    path: '/tests/sodium',
    alternateNames: ['NA+ Test', 'Sodium Test'],
    category: 'Organ Function'
  },
  {
    id: 'potassium',
    name: 'Potassium (K+) Test',
    description: 'Measures potassium levels in blood',
    path: '/tests/potassium',
    alternateNames: ['K+ Test', 'Potassium Test'],
    category: 'Organ Function'
  },
  {
    id: 'chloride',
    name: 'Serum Chloride Test',
    description: 'Measures chloride levels in blood',
    path: '/tests/chloride',
    alternateNames: ['Chloride Test'],
    category: 'Organ Function'
  },

  // Liver Function Tests
  {
    id: 'lft',
    name: 'Liver Function Test (LFT)',
    description: 'Comprehensive liver health assessment',
    path: '/tests/liver-function',
    alternateNames: ['Liver Test', 'Hepatic Function Test', 'LFT'],
    category: 'Organ Function',
    subTests: ['Serum Bilirubin (Total)', 'Serum Bilirubin (Direct)', 'Serum Bilirubin (Indirect)', 'SGOT', 'SGPT', 'SAP', 'GGT', 'Serum Alkaline Phosphate', 'Serum Total Protein', 'Serum Globulin', 'A/G Ratio']
  },
  {
    id: 'bilirubin-total',
    name: 'Serum Bilirubin (Total)',
    description: 'Measures total bilirubin levels in blood',
    path: '/tests/bilirubin-total',
    alternateNames: ['Total Bilirubin Test'],
    category: 'Organ Function'
  },
  {
    id: 'bilirubin-direct',
    name: 'Serum Bilirubin (Direct)',
    description: 'Measures direct bilirubin levels in blood',
    path: '/tests/bilirubin-direct',
    alternateNames: ['Direct Bilirubin Test'],
    category: 'Organ Function'
  },
  {
    id: 'bilirubin-indirect',
    name: 'Serum Bilirubin (Indirect)',
    description: 'Measures indirect bilirubin levels in blood',
    path: '/tests/bilirubin-indirect',
    alternateNames: ['Indirect Bilirubin Test'],
    category: 'Organ Function'
  },
  {
    id: 'sgot',
    name: 'SGOT Test',
    description: 'Measures SGOT enzyme levels in blood',
    path: '/tests/sgot',
    alternateNames: ['AST Test'],
    category: 'Organ Function'
  },
  {
    id: 'sgpt',
    name: 'SGPT Test',
    description: 'Measures SGPT enzyme levels in blood',
    path: '/tests/sgpt',
    alternateNames: ['ALT Test'],
    category: 'Organ Function'
  },
  {
    id: 'sap',
    name: 'SAP Test',
    description: 'Measures SAP enzyme levels in blood',
    path: '/tests/sap',
    alternateNames: ['Serum Alkaline Phosphatase'],
    category: 'Organ Function'
  },
  {
    id: 'ggt',
    name: 'GGT Test',
    description: 'Measures GGT enzyme levels in blood',
    path: '/tests/ggt',
    alternateNames: ['Gamma GT Test'],
    category: 'Organ Function'
  },
  {
    id: 'total-protein',
    name: 'Serum Total Protein',
    description: 'Measures total protein levels in blood',
    path: '/tests/total-protein',
    alternateNames: ['Total Protein Test'],
    category: 'Organ Function'
  },
  {
    id: 'globulin',
    name: 'Serum Globulin',
    description: 'Measures globulin levels in blood',
    path: '/tests/globulin',
    alternateNames: ['Globulin Test'],
    category: 'Organ Function'
  },
  {
    id: 'ag-ratio',
    name: 'A/G Ratio',
    description: 'Measures the ratio of albumin to globulin',
    path: '/tests/ag-ratio',
    alternateNames: ['Albumin/Globulin Ratio'],
    category: 'Organ Function'
  },

  // Blood Sugar Tests
  {
    id: 'blood-sugar-fasting',
    name: 'Blood Sugar (Fasting)',
    description: 'Measures blood glucose levels after fasting',
    path: '/tests/blood-sugar-fasting',
    alternateNames: ['Fasting Blood Sugar', 'FBS Test'],
    category: 'Diabetes Test'
  },

  // Urine Analysis
  {
    id: 'urine-analysis',
    name: 'Complete Urine Analysis',
    description: 'Comprehensive urine examination',
    path: '/tests/urine-analysis',
    alternateNames: ['Urine Test', 'Urinalysis'],
    category: 'Urine Test',
    subTests: ['Volume', 'Color', 'Transparency', 'pH', 'Urine Sugar', 'Urine Protein', 'Urine Bilirubin', 'Ketones', 'Nitrite', 'Pus Cell', 'Bacteria']
  },

  // Thyroid Profile
  {
    id: 'thyroid-profile',
    name: 'Thyroid Profile',
    description: 'Complete thyroid function assessment',
    path: '/tests/thyroid-profile',
    alternateNames: ['Thyroid Test', 'Thyroid Function Test'],
    category: 'Hormone Test',
    subTests: ['T3', 'T4', 'TSH']
  },

  // Lipid Profile
  {
    id: 'lipid-profile',
    name: 'Lipid Profile',
    description: 'Complete cholesterol and lipids assessment',
    path: '/tests/lipid-profile',
    alternateNames: ['Cholesterol Test', 'Lipid Test'],
    category: 'Cardiac Risk',
    subTests: ['Triglycerides', 'HDL Cholesterol', 'Non-HDL Cholesterol', 'LDL/HDL Ratio', 'VLDL Cholesterol', 'LDL Cholesterol', 'Total Cholesterol']
  },
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
    description: 'Measures the level of Vitamin D in your blood to assess deficiency or excess.',
    longDescription: `The Vitamin D test measures the level of 25-hydroxy Vitamin D in your blood. This test is important because:

    • Vitamin D is crucial for bone health
    • It affects immune system function
    • Deficiency is common but often undiagnosed
    • Helps prevent osteoporosis`,
    price: 599,
    discountedPrice: 1199,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80',
    preparationSteps: [
      'No special preparation needed',
      'Inform about any supplements',
      'Continue regular medications',
      'No fasting required'
    ],
    reportTime: '24-48 hours',
    sampleType: 'Blood',
    testingMethod: 'LCMS/HPLC',
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
    description: 'Measures different types of fats in your blood to assess heart health.',
    longDescription: `A lipid profile is a complete cholesterol test that measures the amount of "good" and "bad" cholesterol and triglycerides in your blood. This test helps:

    • Assess cardiovascular health
    • Determine heart disease risk
    • Monitor cholesterol-lowering treatments
    • Guide lifestyle modifications`,
    price: 399,
    discountedPrice: 799,
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80',
    preparationSteps: [
      'Fast for 9-12 hours before the test',
      'Only water is allowed during fasting',
      'Avoid fatty foods 24 hours before',
      'Continue regular medications unless advised otherwise'
    ],
    reportTime: '24 hours',
    sampleType: 'Blood',
    testingMethod: 'Spectrophotometry',
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
