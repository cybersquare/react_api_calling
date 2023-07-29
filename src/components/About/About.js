import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = () => (
  <div className={styles.about_us}>
    <h1>LEARN FROM PROFESSIONALS</h1>
    <h3>Taught by industry experts</h3>
    <p>
    Baabtra, the best software training company in Calicut has 
    proved its expertise by training and placing several hundreds 
    of students both in MNCs like UST Global, Infosys, Oracle etc.
    and SMEs like Nucore Software Solutions, Sesame, IOSS, ULTS 
    and many other companies mainly in Kozhikode, Cochin, Trivandrum 
    and Bangalore.
    </p> 
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
