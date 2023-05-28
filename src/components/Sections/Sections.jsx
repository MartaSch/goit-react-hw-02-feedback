import PropTypes from 'prop-types';
import css from './Sections.module.css'

const Section = ({title, children}) => (
    <section>
        <h1 className={css.title}>{title}</h1>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;