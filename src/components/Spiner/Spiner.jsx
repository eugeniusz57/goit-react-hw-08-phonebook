import { Dna } from 'react-loader-spinner';

const Spiner = () => (
  <Dna
    visible="true"
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{ marginLeft: 'auto', display: 'block', marginRight: 'auto' }}
    wrapperClass="dna-wrapper"
  />
);

export default Spiner;
