const fs = require('fs');
const path = require('path');

const tests = [
  // Kidney Function Tests
  {
    id: 'blood-urea',
    name: 'Blood Urea Test',
    description: 'Measures the amount of urea nitrogen in blood',
    preparation: [
      'Fast for 8-10 hours before the test',
      'Drink plenty of water',
      'Avoid heavy meals the night before',
      'Inform about any medications you are taking'
    ],
    when: [
      'Have symptoms of kidney problems',
      'Are being monitored for kidney disease',
      'Have high blood pressure or diabetes',
      'Need regular kidney function monitoring'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'serum-creatinine',
    name: 'Serum Creatinine Test',
    description: 'Measures creatinine levels in blood to assess kidney function',
    preparation: [
      'Fast for 8-10 hours before the test',
      'Stay well hydrated',
      'Continue medications unless advised otherwise',
      'Avoid strenuous exercise before the test'
    ],
    when: [
      'Have kidney disease symptoms',
      'Are taking medications that may affect kidney function',
      'Have diabetes or high blood pressure',
      'Need regular kidney monitoring'
    ],
    price: 249,
    originalPrice: 499
  },
  {
    id: 'bun',
    name: 'Blood Urea Nitrogen (BUN) Test',
    description: 'Measures the amount of nitrogen in blood from urea',
    preparation: [
      'Fast for 8-10 hours before the test',
      'Maintain normal hydration',
      'Follow regular medication schedule',
      'Avoid high-protein meals before the test'
    ],
    when: [
      'Experience kidney-related symptoms',
      'Have liver disease',
      'Are dehydrated',
      'Need kidney function assessment'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'bun-creatinine-ratio',
    name: 'BUN/Creatinine Ratio Test',
    description: 'Evaluates the ratio between blood urea nitrogen and creatinine',
    preparation: [
      'Fast for 8-10 hours before the test',
      'Stay hydrated',
      'Continue prescribed medications',
      'Avoid excessive protein intake'
    ],
    when: [
      'Need kidney function evaluation',
      'Have abnormal BUN or creatinine levels',
      'Experience dehydration',
      'Have acute kidney injury'
    ],
    price: 299,
    originalPrice: 599
  },
  {
    id: 'uric-acid',
    name: 'Serum Uric Acid Test',
    description: 'Measures uric acid levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue medications as prescribed',
      'Inform about any supplements'
    ],
    when: [
      'Have gout symptoms',
      'Have kidney stones',
      'Experience joint pain',
      'Need gout monitoring'
    ],
    price: 249,
    originalPrice: 499
  },
  {
    id: 'serum-calcium',
    name: 'Serum Calcium Test',
    description: 'Measures calcium levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Continue medications as prescribed',
      'Avoid calcium supplements',
      'Stay hydrated'
    ],
    when: [
      'Have bone disorders',
      'Experience muscle weakness',
      'Have kidney stones',
      'Need calcium level monitoring'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'inorganic-phosphorus',
    name: 'Inorganic Phosphorus Test',
    description: 'Measures phosphorus levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid phosphate-rich foods',
      'Continue prescribed medications',
      'Stay hydrated'
    ],
    when: [
      'Have kidney problems',
      'Experience bone disorders',
      'Have parathyroid issues',
      'Need mineral balance monitoring'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'sodium',
    name: 'Sodium (NA+) Test',
    description: 'Measures sodium levels in blood',
    preparation: [
      'No special preparation needed',
      'Continue regular medications',
      'Maintain normal diet',
      'Stay normally hydrated'
    ],
    when: [
      'Experience dehydration',
      'Have kidney problems',
      'Take diuretics',
      'Have electrolyte imbalance symptoms'
    ],
    price: 149,
    originalPrice: 299
  },
  {
    id: 'potassium',
    name: 'Potassium (K+) Test',
    description: 'Measures potassium levels in blood',
    preparation: [
      'No special preparation needed',
      'Continue medications as prescribed',
      'Maintain normal diet',
      'Inform about supplements'
    ],
    when: [
      'Have heart rhythm problems',
      'Take certain medications',
      'Have kidney disease',
      'Experience muscle weakness'
    ],
    price: 149,
    originalPrice: 299
  },
  {
    id: 'chloride',
    name: 'Serum Chloride Test',
    description: 'Measures chloride levels in blood',
    preparation: [
      'No special preparation needed',
      'Continue regular medications',
      'Maintain normal diet',
      'Stay hydrated'
    ],
    when: [
      'Have electrolyte imbalances',
      'Experience frequent vomiting',
      'Have kidney problems',
      'Take diuretics'
    ],
    price: 149,
    originalPrice: 299
  },

  // Liver Function Tests
  {
    id: 'bilirubin-total',
    name: 'Serum Bilirubin (Total)',
    description: 'Measures total bilirubin levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue prescribed medications',
      'Inform about supplements'
    ],
    when: [
      'Have jaundice',
      'Experience liver problems',
      'Have gallbladder issues',
      'Need liver function monitoring'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'bilirubin-direct',
    name: 'Serum Bilirubin (Direct)',
    description: 'Measures direct bilirubin levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue medications as prescribed',
      'Stay hydrated'
    ],
    when: [
      'Have liver disease',
      'Experience jaundice',
      'Have bile duct problems',
      'Need detailed liver assessment'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'bilirubin-indirect',
    name: 'Serum Bilirubin (Indirect)',
    description: 'Measures indirect bilirubin levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue regular medications',
      'Stay hydrated'
    ],
    when: [
      'Have hemolytic anemia',
      'Experience jaundice',
      'Have liver problems',
      'Need liver function assessment'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'sgot',
    name: 'SGOT Test',
    description: 'Measures SGOT enzyme levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue prescribed medications',
      'Avoid strenuous exercise'
    ],
    when: [
      'Have liver problems',
      'Experience muscle damage',
      'Have heart problems',
      'Need liver enzyme monitoring'
    ],
    price: 249,
    originalPrice: 499
  },
  {
    id: 'sgpt',
    name: 'SGPT Test',
    description: 'Measures SGPT enzyme levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue medications as prescribed',
      'Avoid strenuous exercise'
    ],
    when: [
      'Have liver disease',
      'Take certain medications',
      'Experience unexplained fatigue',
      'Need liver health monitoring'
    ],
    price: 249,
    originalPrice: 499
  },
  {
    id: 'sap',
    name: 'SAP Test',
    description: 'Measures SAP enzyme levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Continue prescribed medications',
      'Avoid fatty foods',
      'Stay hydrated'
    ],
    when: [
      'Have liver problems',
      'Experience bone disorders',
      'Have gallbladder issues',
      'Need enzyme level monitoring'
    ],
    price: 249,
    originalPrice: 499
  },
  {
    id: 'ggt',
    name: 'GGT Test',
    description: 'Measures GGT enzyme levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Avoid alcohol for 24 hours',
      'Continue medications as prescribed',
      'Inform about supplements'
    ],
    when: [
      'Have liver disease',
      'Consume alcohol regularly',
      'Take certain medications',
      'Need liver enzyme monitoring'
    ],
    price: 249,
    originalPrice: 499
  },
  {
    id: 'total-protein',
    name: 'Serum Total Protein',
    description: 'Measures total protein levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Continue prescribed medications',
      'Maintain normal diet',
      'Stay hydrated'
    ],
    when: [
      'Have nutritional problems',
      'Experience unexplained weight loss',
      'Have liver or kidney disease',
      'Need protein level monitoring'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'globulin',
    name: 'Serum Globulin',
    description: 'Measures globulin levels in blood',
    preparation: [
      'Fast for 8 hours before the test',
      'Continue regular medications',
      'Maintain normal diet',
      'Stay hydrated'
    ],
    when: [
      'Have immune system disorders',
      'Experience chronic infections',
      'Have liver problems',
      'Need protein assessment'
    ],
    price: 199,
    originalPrice: 399
  },
  {
    id: 'ag-ratio',
    name: 'A/G Ratio',
    description: 'Measures the ratio of albumin to globulin',
    preparation: [
      'Fast for 8 hours before the test',
      'Continue prescribed medications',
      'Maintain normal diet',
      'Stay hydrated'
    ],
    when: [
      'Have liver disease',
      'Experience protein disorders',
      'Have kidney problems',
      'Need protein balance assessment'
    ],
    price: 199,
    originalPrice: 399
  },

  // Blood Sugar Tests
  {
    id: 'blood-sugar-fasting',
    name: 'Blood Sugar (Fasting)',
    description: 'Measures blood glucose levels after fasting',
    preparation: [
      'Fast for 8-12 hours before the test',
      'Only water is allowed during fasting',
      'Continue medications as prescribed',
      'Avoid smoking and alcohol'
    ],
    when: [
      'Have diabetes symptoms',
      'Need diabetes monitoring',
      'Have family history of diabetes',
      'Are overweight or obese'
    ],
    price: 149,
    originalPrice: 299
  },

  // Urine Analysis
  {
    id: 'urine-analysis',
    name: 'Complete Urine Analysis',
    description: 'Comprehensive urine examination',
    preparation: [
      'Collect mid-stream urine sample',
      'Use sterile container',
      'First morning sample preferred',
      'Follow collection instructions'
    ],
    when: [
      'Have urinary symptoms',
      'Need kidney function check',
      'Have diabetes',
      'Experience frequent infections'
    ],
    price: 299,
    originalPrice: 599
  }
];

function generateComponent(test) {
  const componentName = test.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const componentDir = path.join(__dirname, '..', 'src', 'pages', 'Tests', componentName);
  fs.mkdirSync(componentDir, { recursive: true });

  // Generate JS file
  const jsContent = `import React from 'react';
import { FaFlask, FaClock, FaHospital, FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import './${test.id}.css';

const ${componentName} = () => {
  return (
    <div className="test-page">
      <div className="test-page__header">
        <h1 className="test-page__title">${test.name}</h1>
        <p className="test-page__subtitle">${test.description}</p>
      </div>

      <div className="test-page__content">
        <div className="test-page__info">
          <div className="test-page__info-item">
            <FaFlask className="test-page__info-icon" />
            <div>
              <h3>Sample Type</h3>
              <p>Blood</p>
            </div>
          </div>
          <div className="test-page__info-item">
            <FaClock className="test-page__info-icon" />
            <div>
              <h3>Report Time</h3>
              <p>Same Day</p>
            </div>
          </div>
          <div className="test-page__info-item">
            <FaHospital className="test-page__info-icon" />
            <div>
              <h3>Fasting Required</h3>
              <p>8-10 hours</p>
            </div>
          </div>
        </div>

        <div className="test-page__section">
          <h2>
            <FaInfoCircle className="test-page__section-icon" />
            About the Test
          </h2>
          <p>
            ${test.description} This test is an essential diagnostic tool that helps healthcare providers:
          </p>
          <ul className="test-page__about-list">
            <li>Monitor your overall health status</li>
            <li>Diagnose specific medical conditions</li>
            <li>Track the effectiveness of treatments</li>
            <li>Screen for potential health issues</li>
          </ul>
          <div className="test-page__parameters">
            <h3>Test Parameters</h3>
            <div className="test-page__parameters-grid">
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Method</span>
                <span className="test-page__parameter-value">Automated Analyzer</span>
              </div>
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Sample Volume</span>
                <span className="test-page__parameter-value">2-3 mL</span>
              </div>
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Transportation</span>
                <span className="test-page__parameter-value">Room Temperature</span>
              </div>
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Stability</span>
                <span className="test-page__parameter-value">24 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="test-page__section">
          <h2>
            <FaCheckCircle className="test-page__section-icon" />
            Test Preparation
          </h2>
          <p>To ensure accurate results, please follow these preparation guidelines:</p>
          <ul className="test-page__preparation">
            ${test.preparation.map(item => `<li>${item}</li>`).join('\n            ')}
          </ul>
          <div className="test-page__note">
            <FaExclamationTriangle className="test-page__note-icon" />
            <p>Note: Please inform your healthcare provider about any medications you are currently taking, as they may affect the test results.</p>
          </div>
        </div>

        <div className="test-page__section">
          <h2>
            <FaInfoCircle className="test-page__section-icon" />
            When to Take This Test
          </h2>
          <p>You should consider taking this test if you:</p>
          <ul className="test-page__when">
            ${test.when.map(item => `<li>${item}</li>`).join('\n            ')}
          </ul>
          <div className="test-page__frequency">
            <h3>Recommended Testing Frequency</h3>
            <ul>
              <li>For monitoring: Every 3-6 months</li>
              <li>For diagnosis: As recommended by your healthcare provider</li>
              <li>For screening: Annually as part of routine check-up</li>
            </ul>
          </div>
        </div>

        <div className="test-page__book">
          <div className="test-page__benefits">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>NABL Accredited Laboratory</li>
              <li>Highly Qualified Technicians</li>
              <li>Same Day Reports</li>
              <li>Home Sample Collection</li>
            </ul>
          </div>
          <div className="test-page__booking">
            <div className="test-page__price">
              <span className="test-page__price-current">₹${test.price}</span>
              <span className="test-page__price-original">₹${test.originalPrice}</span>
              <span className="test-page__price-discount">${Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)}% OFF</span>
            </div>
            <button className="test-page__book-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;

  // Generate CSS file
  const cssContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'pages', 'Tests', 'KFT', 'KFT.css'), 'utf8');

  fs.writeFileSync(path.join(componentDir, `${componentName}.js`), jsContent);
  fs.writeFileSync(path.join(componentDir, `${test.id}.css`), cssContent);
}

// Generate components for all tests
tests.forEach(test => {
  generateComponent(test);
  console.log(`Generated component for ${test.name}`);
});
