import React from 'react';

import './About.css';

import cover565 from '../../assets/cover565.jpg';
import aboutus from '../../assets/aboutus.jpg';


const About = () => {
  return (
    <>
      <div>
        <img src={cover565} alt="Cover" />
      </div>
      <div className='text'>
      <h1>Newrished - Real Food. Handcrafted. Healthy Snacks.</h1>
      <p>
        Savor the Nutritious Goodness of Handcrafted Fresh and Raw Whey Protein Bars! Fuel your body with the perfect combination of taste and performance with our mouthwatering Fresh and Raw Whey Protein Bars. Each bar is meticulously handcrafted using the finest ingredients, making them a testament to quality and effectiveness.
      </p>
      <p>
        At Newrished, we embrace a handcrafted approach. Every snack is carefully prepared in small batches, ensuring exceptional freshness and quality. From the thoughtful selection of the finest ingredients to the attentive preparation and packaging, we pay close attention to every detail to bring you snacks that are crafted with exceptional care.
      </p>
      <p>
        When you choose Newrished, you're not simply selecting snacks; you're embarking on a journey to a healthier way of life. Our snacks are thoughtfully designed to support your well-being, invigorate your body, and elevate your snacking experience.
      </p>
      <p>
        Join us in experiencing the Newrished difference. Explore our wide range of real food, handcrafted, and healthy snacks on our website, and discover why we are the preferred choice for those seeking snacks that are both nourishing and extraordinary.
      </p>
      <p className='pink-text'>
        Indulge guilt-free in our Fresh and Raw Whey Protein Bars, knowing that they are:
      </p>
      <ul>
        <li><strong>Protein-Packed:</strong> Our bars are specially formulated to provide a powerful protein punch, supporting your muscle recovery and overall fitness goals. Each bar contains high-quality whey protein, a complete protein source that supplies all essential amino acids your body needs.</li>
        <li><strong>Preservative-Free:</strong> We believe in keeping things pure and natural. That's why our Fresh and Raw Whey Protein Bars are made without preservatives, ensuring you enjoy the freshest flavors and nutritional benefits possible.</li>
        <li><strong>Only Real Food Ingredients:</strong> We source superfoods from nature, selecting them for their functional benefits and the nourishment they provide to our bodies.</li>
        <li><strong>Gluten-Free:</strong> Embrace a gluten-free lifestyle without compromising on taste or performance. Our bars are thoughtfully prepared without any gluten-containing ingredients, making them suitable for those with gluten sensitivities or a gluten-free diet.</li>
        <li><strong>Handmade:</strong> Each batch of our Fresh and Raw Whey Protein Bars is lovingly handcrafted in our own kitchen in Notrbrook, IL, ensuring attention to detail and an authentic homemade taste that you'll crave with every bite.</li>
      </ul>
      <p className='pink-text'>
        Experience the powerful combination of flavors and performance-enhancing ingredients that make our Fresh and Raw Whey Protein Bars truly exceptional:
      </p>
      <ul>
        <li><strong>High-Quality Whey Protein:</strong> We use only whey protein isolate and whey protein concentrate carefully sourced for its purity and effectiveness in supporting muscle growth, recovery, and overall fitness.</li>
        <li><strong>Crunchy Almonds:</strong> Packed with essential nutrients and satisfying crunch, almonds bring a delightful texture and a dose of healthy fats to our bars.</li>
        <li><strong>Sweet Organic Dates:</strong> Nature's sweetener, organic dates add a touch of natural sweetness while providing additional nutrients and a pleasant flavor.</li>
        <li><strong>Oats:</strong> These whole grains offer a wholesome base for our bars, delivering fiber and sustained energy to keep you fueled throughout the day.</li>
        <li><strong>Organic Coconut Oil:</strong> Adding a touch of tropical richness, organic coconut oil enhances the flavor and texture of our bars while providing healthy medium-chain triglycerides (MCTs).</li>
        <li><strong>Walnuts:</strong> With their heart-healthy properties, walnuts bring a delightful crunch and a dose of essential nutrients to our bars.</li>
      </ul>
      </div>
      <div>
        <img src={aboutus} alt="Cover" />
      </div>
    </>
  );
};

export default About;